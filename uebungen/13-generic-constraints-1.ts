// 13-generic-constraints-1.ts
/**
 * Aufgaben:
 * 1) Implementiere `pluck<T, K extends keyof T>(obj: T, key: K): T[K]`
 * 2) Implementiere `hasId<T extends { id: string }>(x: T): string`
 */

export function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function hasId<T extends { id: string }>(x: T): string {
  return x.id;
}

const a: [number, string] = [1, "x"];

console.log(pluck( { a: 1, b: "x" } , "b"));

console.log(pluck({ a: 1, b: "x" }, "b") === "x");
console.log(hasId({ id: "p1", title: "Test" }));
// console.log(hasId({ title: "Test" }));
console.log(hasId({ id: "p1", title: "Test" }) === "p1");
