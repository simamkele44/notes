import { StorageStack } from "./storageStack";

export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
  },
  });

  app.stack(StorageStack);
}
