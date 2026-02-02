/**
 * * any - allgemeinster Typ, es wird kein Type-Checking ausgeführt, nie verwenden.
 * * void - meist bei Rückgabewerten von Funktionen
 * * null - in TS eher selten anzutreffen
 */

function foo(arg: any): void {
  console.log(arg);
  return;
}

let a: number | undefined;

let b = foo(3);

console.log(a);

a = undefined;