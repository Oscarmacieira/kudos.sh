import { onchainEnum, onchainTable, index } from "@ponder/core";

export const referenceStatus = onchainEnum("reference_status", [
  "VISIBLE",
  "HIDDEN",
]);

export const reference = onchainTable(
  "references",
  (t) => ({
    id: t.text().primaryKey(),
    recipient: t.hex().notNull(),
    author: t.hex().notNull(),
    metadata: t.text().notNull(),
    jsonMetadata: t
      .json()
      .$type<{ name: string; symbol: string; decimals: number }>(),
    status: referenceStatus("reference_status").notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    recipientIdx: index().on(table.recipient),
    authorIdx: index().on(table.author),
  })
);

export const account = onchainTable("accounts", (t) => ({
  address: t.hex().primaryKey(),
  referenceCount: t.bigint().notNull().default(0n),
}));

export const kudos = onchainTable("kudos", (t) => ({
  id: t.text().primaryKey(),
  referenceCount: t.bigint().notNull().default(0n),
  owner: t.hex().notNull(),
}));
