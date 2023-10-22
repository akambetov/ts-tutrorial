function sum (a: number, b: number): number {
  return a + b;
}
const resSum1 = sum(1, 2);
console.log('resSum1', resSum1);

const sum2 = (a: number, b: number): number => a + b;
const resSum2 = sum2(2, 3)
console.log('resSum2', resSum2);
// возвращаемый тип VOID, что функция выполнится до конца
function log (name: string, userId?: string): void {
  console.log('Hello,', name, 'with ID', userId || 'anonym');
}
log('Almat');
log('Almat', '1');

// возвращаемый тип NEVER говорит, что функция НЕ выполнится до конца
function crash (): never {
  throw new Error('crash');
}

export function average(...nums: number[]): number {
  const sum = nums.reduce((acc, current) => acc + current, 0);
  console.log('average',sum,'/', nums.length, '=', sum / nums.length);

  return sum / nums.length;
}

average(1, 2, 3, 4, 5);