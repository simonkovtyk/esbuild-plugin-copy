<div align="center">

<img width="196" src="https://raw.githubusercontent.com/simonkovtyk/esbuild-plugin-file-copy/611c5c4942c8460ec6247ab833418908e9213a9b/docs/esbuild-favicon.svg" />

<h1>File Copy Plugin</h1>

<p>This esbuild plugin copies specified files to the output folder after the bundling process. It ensures static assets are included in the final build without interrupting or altering the main esbuild workflow.</p>

![NPM Downloads](https://img.shields.io/npm/dw/esbuild-plugin-file-copy)
![NPM License](https://img.shields.io/npm/l/esbuild-plugin-file-copy)
![GitHub package.json version](https://img.shields.io/npm/v/esbuild-plugin-file-copy)
![TypeScript types](https://img.shields.io/badge/TypeScript_types-included-blue)

<br />

Add a ⭐ to this repository — *it motivates me a lot!*

</div>

## ⚡️ Getting started

Simply install this package with your package manager.

````shell
npm install -D esbuild-plugin-file-copy
````

<details>
<summary>📦 other package manager</summary>

Here are examples for installing the package with other package manager.

> 💾 **yarn**
> ````shell
> yarn add -D esbuild-plugin-file-copy
> ````

> 💾 **pnpm**
> ````shell
> pnpm install -D esbuild-plugin-file-copy
> ````

</details>

Looks good so far 🔥 — now you have installed the latest version!

## 💡 Introduction

This esbuild plugin simply copies specified files to the output folder during the build process. It reads a list of file paths or patterns, then moves those files into the output directory after
esbuild finishes bundling.

The plugin ensures that static assets, such as images or configuration files, are included in the final build. It’s lightweight and works without altering the bundling
process itself. By automating file copying, it reduces manual steps and keeps the build process smooth and consistent.

## 🔧 Usage

```typescript
fileCopyPlugin(options);
```

This function needs to be called inside the esbuild configuration in order to use this plugin. It will provide the plugin inside the build process of esbuild.

<details>
<summary>Show an example of the integration</summary>

````typescript
esbuild.build({
  // some esbuild configuration...
  plugins: [
    fileCopyPlugin(
      // configure it here...
    );
    // more esbuild plugins here...
  ]
})
````

</details>

### Properties

#### ``inputs``

> Default: ``undefined``

A ``Array`` of ``object`` with the following properties:

````typescript
{
  from: string,
  to: string
}
````

Any file or directory from the source path (``from`` key) will be copied to the target path (``to`` key).

The file name will be kept while copying the file from source path to target path.

<details>
<summary>Show an example</summary>

````typescript
fileCopyPlugin({
  inputs: [{
    from: "my-lib/example.ts", // input path
    to: "dist/my-lib" // copied to path
  }]
});
````

</details>

#### ``globs``

> Default: ``undefined``

A ``Array`` of ``object`` with the following properties:

````typescript
{
  from: string,
  to: string
}
````

Any matching file or directory from the source path (``from`` key) will be copied to the target path (``to`` key).

The file name will be kept while copying the file from source path to target path.

This option enables the use of glob patterns. [See here](https://www.malikbrowne.com/blog/a-beginners-guide-glob-patterns/) for more about glob patterns.

<details>
<summary>Show an example</summary>

````typescript
fileCopyPlugin({
  globs: [{
    from: "my-lib/**/*.env", // input path
    to: "dist/my-lib" // copied to path
  }]
});
````

</details>

### Returns

Type: ``Plugin``

An instance of this plugin, that will be used by esbuild automatically.

## License

The MIT License (MIT) - Please have a look at the [License](https://github.com/simonkovtyk/esbuild-plugin-file-copy/blob/main/LICENSE) file for more details.

## Contributing

Want to contribute to an open-source project on GitHub but unsure where to start? Check out this comprehensive step-by-step guide on how to contribute effectively!

From forking the repository to creating pull requests, this guide walks you through every stage of the process, helping you make a successful contribution to this GitHub project. Start collaborating,
learn new skills, and make an impact on this project!

[See here](https://github.com/simonkovtyk/esbuild-plugin-file-copy/blob/main/docs/guides/HOW_TO_CONTRIBUTE.md) for the contribute guide at GitHub.

<hr>

GitHub [@simonkovtyk](https://github.com/simonkovtyk)
