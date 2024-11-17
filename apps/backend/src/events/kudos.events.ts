import { ponder } from "@/generated";
import { account, kudos, reference } from "@/ponder.schema";

ponder.on("Kudos:setup", async ({ context }) => {
  const { db, contracts, client } = context;
  const { Kudos } = contracts;

  const owner = await client.readContract({
    abi: Kudos.abi,
    address: Kudos.address,
    functionName: "owner",
  });

  await db.insert(kudos).values({
    id: "1",
    owner,
    referenceCount: 0n,
  });
});

ponder.on("Kudos:ReferenceAdded", async ({ event, context }) => {
  const { db, client } = context;
  const { recipient, author, index } = event.args;
  const { Kudos } = context.contracts;

  const newReference = await client.readContract({
    abi: Kudos.abi,
    address: Kudos.address,
    functionName: "getReference",
    args: [recipient, index],
  });

  await db.insert(reference).values({
    id: `${recipient}-${index}`,
    recipient: recipient,
    author: author,
    metadata: newReference.metadata,
    jsonMetadata: { name: "test", symbol: "test", decimals: 18 },
    status: "HIDDEN",
    timestamp: event.block.timestamp,
  });

  await db
    .insert(account)
    .values({
      address: author,
      referenceCount: 1n,
    })
    .onConflictDoUpdate((data) => ({
      referenceCount: data.referenceCount + 1n,
    }));

  await db
    .update(kudos, {
      id: "1",
    })
    .set((row) => ({
      referenceCount: row.referenceCount + 1n,
    }));
});

ponder.on("Kudos:ReferenceHidden", async ({ event, context }) => {
  const { db } = context;
  const { recipient, index } = event.args;

  await db
    .update(reference, {
      id: `${recipient}-${index}`,
    })
    .set({ status: "HIDDEN" });
});

ponder.on("Kudos:ReferenceShown", async ({ event, context }) => {
  const { db } = context;
  const { recipient, index } = event.args;

  await db
    .update(reference, {
      id: `${recipient}-${index}`,
    })
    .set({ status: "VISIBLE" });
});
