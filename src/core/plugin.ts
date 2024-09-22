import path from "node:path";
import { Glob, HandlerOptions, Input, Lifecycle, Options } from "./types/options.type";
import { PluginBuild, Plugin } from "esbuild";
import fs from "node:fs";
import fastGlob from "fast-glob";

const handler = (handlerOptions: HandlerOptions) => {
  return async () => {
    handlerOptions.inputs?.forEach((input: Input): void => {
      const inputFilePath: string = path.join(process.cwd(), input.from);

      if (!fs.existsSync(inputFilePath))
        return;

      const outputPath = path.join(process.cwd(), input.to);
      const outputPathDir = path.parse(outputPath).dir;

      if (!fs.existsSync(outputPathDir))
        fs.mkdirSync(outputPathDir, { recursive: true });

      fs.copyFileSync(inputFilePath, outputPath);
    });

    handlerOptions.globs?.forEach((glob: Glob): void => {
      const inputFilePaths: string[] = fastGlob.sync(glob.from);

      inputFilePaths.forEach(((inputFilePath: string): void => {
        if (!fs.existsSync(inputFilePath))
          return;

        const inputFileName = path.parse(inputFilePath).base;

        const outputFilePath = path.join(process.cwd(), glob.to, inputFileName);
        const outputDirPath = path.parse(outputFilePath).dir;

        if (!fs.existsSync(outputDirPath))
          fs.mkdirSync(outputDirPath, { recursive: true });

        fs.copyFileSync(inputFilePath, outputFilePath);
      }));
    });
  };
};

const fileCopyPlugin = (options?: Options | undefined): Plugin => ({
  name: "esbuild-plugin-file-copy",
  setup: (build: PluginBuild) => {
    const lifecycle: Lifecycle = options?.lifecycle ?? "onEnd";

    const handlerOptions: HandlerOptions = {
      inputs: options?.inputs,
      globs: options?.globs
    };

    const handlerRef = handler(handlerOptions);

    switch (lifecycle) {
      case "onStart":
        build.onStart(handlerRef);
        break;
      case "onEnd":
        build.onEnd(handlerRef);
        break;
    }
  }
});

export {
  fileCopyPlugin
};
