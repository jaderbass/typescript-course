// 12-generic-functions-1.ts
/**
 * Aufgaben:
 * 1) Implementiere `first<T>(items: T[]): T | undefined`
 * 2) Implementiere `mapTo<T, R>(items: T[], fn: (x: T) => R): R[]`
 */

export function first<T>(items: T[]): T | undefined {
  return items[0];
}

export function mapTo<T, R>(items: T[], fn: (x: T) => R): R[] {
  const out: R[] = [];
  for( const item of items ) {
    out.push(fn(item));
    console.log(item, out);
  }
  return out;
}


console.log(first([]));
console.log(first([10, 20]) === 10);
console.log(mapTo([1, 2], n => `${n}`));
console.log(mapTo([1, 2], n => `${n}`).join(",") === "1,2");
