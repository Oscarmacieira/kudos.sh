import { ObjectManager } from "@filebase/sdk";

type IPFSManagerConstructor = {
  bucket: string;
  key: string;
  secret: string;
};

export class IPFSManager {
  private objectManager: ObjectManager;

  constructor({ bucket, key, secret }: IPFSManagerConstructor) {
    this.objectManager = new ObjectManager(key, secret, { bucket });
  }

  async pinFile(name: string, content: string | Buffer) {
    const buffer = typeof content === "string" ? Buffer.from(content) : content;
    const uploadedObject = await this.objectManager.upload(
      name,
      buffer,
      {},
      {}
    );
    return uploadedObject;
  }

  async fetchFile(cid: string): Promise<any> {
    const res = await fetch(`https://ipfs.filebase.io/ipfs/${cid}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  }

  async getTaskMetadata(cid: string): Promise<{
    title: string;
    description: string;
    category: string;
  }> {
    console.log({ cid });
    const file = await this.fetchFile(cid);

    if (!file) {
      throw new Error("File not found");
    }
    return file;
  }
}
