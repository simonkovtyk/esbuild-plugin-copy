# esbuild plugin for copying files

![NPM Downloads](https://img.shields.io/npm/dw/esbuild-plugin-file-copy) ![NPM License](https://img.shields.io/npm/l/esbuild-plugin-file-copy)

The plugin copies files to the esbuild out folder, ensuring that all required files are included alongside the built code.

* Supports newest esbuild version
* Advanced with globs
* Uses raw filesystem calls
* Uses esbuild config to determine the out folder
* Type declarations (d.ts) included

## How It Works

1. Parses the file paths by globs
2. Creates folder for the file paths, if there are not exists.
3. Determines the out-folder by using the existing esbuild configuration.
4. Writes the files to their responsible out paths.

This plugin prefers an ``outdir`` over an ``outfile``, but if only an ``outfile`` is provided, the plugin will choose the directory of the ``outfile`` as base output directory for the files
instead.\
The ``outbase`` is used as a prefix for the ``outdir`` or ``outfile`` and it can be left as empty, if it is not needed.

## Options

### Input files to copy them

Files can be provided as glob.\
[See here for more about the syntax of globs.](https://github.com/mrmlnc/fast-glob?tab=readme-ov-file#pattern-syntax)

#### Simple including

It is possible to provide globs only as ``string``:
````typescript
fileCopyPlugin({
  inputs: [
    "src/**/README.md"
  ]
})
````

In this case, the output directory of the matching files are the output directory of the esbuild configuration, because no output directory else was specified.

If you want an option to handle the output directory of the files by yourself, you should follow the advanced including.

#### Advanced including

It is also possible to provide globs as ``Object``.

````typescript
fileCopyPlugin({
  inputs: [
   {
     glob: "src/**/README.md",
     output: "somefolder/anyfolder"
   }
  ]
})
````

The ``Object`` expects a key "glob" and an optional key "output".


If the key "output" is set, the output directory of the files will be the given output directory **without** the output directory of the esbuild configuration as base output directory.

If the key "output" is not set, the output directory will be the base output directory of the esbuild configuration.

### Base output directory

This plugin will use the esbuild configuration to determine the base output directory for the files.\
Sometimes it can be helpful to overwrite the base output directory.

````typescript
packageJsonPlugin(
  [...]
  overrideOutBase?: string | undefined,
  overrideOutDir?: string | undefined,
  overrideOutFile?: string | undefined
);
````

Each overwrite will overwrite the specific esbuild configuration.

[See here for more details about the out configuration of esbuild.](https://esbuild.github.io/api/#outbase)

### Lifecycle

You can configure at which lifecycle of esbuild the plugin will be called.

````typescript
packageJsonPlugin(
  [...]
  lifecycle: "onStart" | "onEnd" | "onDispose" | undefined
);
````

[See here for more about the esbuild lifecycles.](https://esbuild.github.io/plugins/#concepts)

## Usage

### Installation

The plugin can be installed by any package manager.

<details><summary><b>Show instructions</b></summary>

> npm \
> ``npm install esbuild-plugin-file-copy``

> yarn \
> ``yarn install esbuild-plugin-file-copy``

> pnpm \
> ``pnpm install esbuild-plugin-file-copy``

</details>

### Integration

The easy way to integrate this plugin in esbuild.

<details><summary><b>Show instructions</b></summary>

````typescript
await esbuild.build({
  [...]
  plugins: [
    fileCopyPlugin(...)
  ]
})
````

[See here for more about the esbuild plugin integration.](https://esbuild.github.io/plugins/#using-plugins)

</details>

## License

The MIT License (MIT) - Please have a look at the LICENSE file for more details.

## Contributing

Feel free to contribute to this project.\
You can fork this project and create a new pull request for contributing.

[Get to the repository at GitHub.](https://github.com/simonkovtyk/esbuild-plugin-file-copy)

<hr>

GitHub [@simonkovtyk](https://github.com/simonkovtyk)
