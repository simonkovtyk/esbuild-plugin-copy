type Lifecycle = "onStart" | "onEnd";

interface Glob {
  from: string;
  to: string;
}

interface Input {
  from: string;
  to: string;
}

interface HandlerOptions {
  inputs?: Input[] | undefined;
  globs?: Glob[] | undefined;
}

interface Options extends HandlerOptions {
  lifecycle?: Lifecycle | undefined;
}

export type {
  HandlerOptions,
  Lifecycle,
  Options,
  Glob,
  Input
};
