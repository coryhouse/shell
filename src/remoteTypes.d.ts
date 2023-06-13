///<reference types="react" />

// TypeScript doesn't know what the remote module resolves to, so specify the types here.
declare module "app1/CounterAppOne" {
  const CounterAppOne: React.ComponentType;
  export default CounterAppOne;
}

declare module "app2/CounterAppTwo" {
  const CounterAppTwo: React.ComponentType;
  export default CounterAppTwo;
}
