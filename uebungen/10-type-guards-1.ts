// 10-type-guards-1.ts
/**
 * Aufgaben:
 * 1) Implementiere User-defined Type Guard `isStringArray(value): value is string[]`
 * 2) Implementiere `joinIfStrings(value)`:
 *    - wenn string[] -> joined mit ","
 *    - sonst -> "invalid"
 */

// 10-type-guards-1.solution.ts

export function isStringArray(value: unknown): value is string[] {
  if (!Array.isArray(value)) {
    return false;
  }

  for (const item of value) {
    if (typeof item !== "string") {
      return false;
    }
  }

  return true;
}

export function joinIfStrings(value: unknown): string {
  return isStringArray(value) ? value.join(",") : "invalid";
}

console.log(isStringArray([5]));


console.log(joinIfStrings(["a", "b"]) === "a,b");
console.log(joinIfStrings([1, 2]) === "invalid");
