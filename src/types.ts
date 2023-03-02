export type Obj<
  $Input extends string | number | symbol = string,
  $Output = unknown,
> = Record<$Input, $Output>;

export type Options = {
  cpu: {
    chunkSize: number;
    compareSize: number;
    rangePercent: number;
  };
  ram: {
    chunkSize: number;
    compareSize: number;
    rangePercent: number;
  };
  general: {
    substractSelf: boolean;
    allowGc: boolean;
  };
};

export type DeepPartial<$Object extends Obj<string, Obj>> = Partial<{
  [$Key in keyof $Object]: $Object[$Key] extends Obj
    ? Partial<$Object[$Key]>
    : $Object[$Key];
}>;

export type Fn<$Input extends unknown[], $Output> = (
  ...props: $Input
) => $Output;

export type Either<$Options extends unknown[]> = $Options[number];

export type Benchmark = Fn<[], Either<[void, Promise<void>]>>;

export type Benchmarks = Obj<string, Benchmark>;

export type Store = {
  array: Uint32Array;
  index: number;
};

export type Stores = {
  cpu: {
    chunk: Store;
    main: Store;
  };
  ram: {
    chunk: Store;
    main: Store;
  };
};

export type OffsetData = {
  type: "sync" | "async";
  mode: "cpu" | "ram";
};

export type MeasureData = {
  fn: Benchmark;
  mode: OffsetData["mode"];
  store: Store;
};

export type Offset = {
  min: number;
  max: number;
  median: number;
};

export type Offsets = {
  async: {
    cpu: Offset;
    ram: Offset;
  };
  sync: {
    cpu: Offset;
    ram: Offset;
  };
};
