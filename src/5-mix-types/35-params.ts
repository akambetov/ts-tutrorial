export {}

function f1(args: {a:number, b:string}) {
  return args.a + args.b
}

type T0 = ReturnType<typeof f1>

type T1 = Parameters<typeof f1>

type T2 = ConstructorParameters<ErrorConstructor>

class Car {
  constructor(brand: string, model:string) {}
}

type TCarConsttrucotrParams = ConstructorParameters<typeof Car>