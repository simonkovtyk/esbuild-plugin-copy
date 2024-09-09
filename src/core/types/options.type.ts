type Lifecycle = "onStart" | "onEnd" | "onDispose";

type Input = {
	glob: string,
	output?: string | undefined
}

type PathOverrides = {
	overrideOutBase?: string | undefined,
	overrideOutDir?: string | undefined,
	overrideOutFile?: string | undefined
}

type Options = {
	lifecycle?: Lifecycle | undefined,
	inputs: string[] | Input[]
} & PathOverrides

type ResolvePathOptions = {
	outDir?: string | undefined,
	outFile?: string | undefined,
	outBase?: string | undefined
} & PathOverrides

export type {
	ResolvePathOptions,
	Lifecycle,
	Options,
	Input
}
