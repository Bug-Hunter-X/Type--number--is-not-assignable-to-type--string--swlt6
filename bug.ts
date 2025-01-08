function printString(str: string): void {
  console.log(str);
}

function usePrintString(): void {
  const myNumber: number = 123;
  printString(myNumber); //Error: Argument of type 'number' is not assignable to parameter of type 'string'.
}
usePrintString();