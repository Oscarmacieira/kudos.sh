import { IPFSManager } from "./IPFSManager";

type CreateIpfsManagerOptions = {
  bucket: string;
  key: string;
  secret: string;
};

export const createIpfsManager = ({
  bucket,
  key,
  secret,
}: CreateIpfsManagerOptions) => {
  return new IPFSManager({
    bucket,
    key,
    secret,
  });
};
