import path from "node:path";
import { resolveOutDir } from "./helpers/out.helper";
import { Input, Lifecycle, Options, ResolvePathOptions } from "./types/options.type";
import { PluginBuild, Plugin } from "esbuild";
import fastGlob from "fast-glob";
import fs from "node:fs";

const handler = (inputs: string[] | Input[] | undefined, options: ResolvePathOptions) => {
  return async () => {
    const resolvedOutDir: string = resolveOutDir(options);

    inputs?.forEach((input: string | Input): void => {
      if (typeof input === "string") {
        const globs: string[] = fastGlob.sync(input);

        if (globs.length === 0)
          return;

        if (!fs.existsSync(resolvedOutDir))
          fs.mkdirSync(resolvedOutDir, { recursive: true });

        globs.forEach((glob: string): void => {
          const fileName: string = path.parse(glob).base;

          fs.copyFileSync(glob, `${resolvedOutDir}/${fileName}`);
        });

        return;
      }

      const globs: string[] = fastGlob.sync(input.glob);

      if (globs.length === 0)
        return;

      globs.forEach((glob: string): void => {
        const fileName: string = path.parse(glob).base;

        const outDir: string = input.output ?? resolvedOutDir;

        if (!fs.existsSync(outDir))
          fs.mkdirSync(outDir, { recursive: true });

        fs.copyFileSync(glob, `${outDir}/${fileName}`);
      });
    });
  };
};

const fileCopyPlugin = (options?: Options | undefined): Plugin => ({
  name: "esbuild-plugin-file-copy",
  setup: (build: PluginBuild) => {
    const lifecycle: Lifecycle = options?.lifecycle ?? "onEnd";

    const resolvePathOptions: ResolvePathOptions = {
      outBase: build.initialOptions.outbase,
      outDir: build.initialOptions.outdir,
      outFile: build.initialOptions.outfile,
      overrideOutBase: options?.overrideOutBase,
      overrideOutDir: options?.overrideOutDir,
      overrideOutFile: options?.overrideOutFile
    };

    const handlerRef = handler(options?.inputs, resolvePathOptions);

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
