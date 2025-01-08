function printString(str: string): void {
  console.log(str);
}

function usePrintString(): void {
  const myNumber: number = 123;
  printString(myNumber.toString()); //Convert number to string
}
usePrintString();