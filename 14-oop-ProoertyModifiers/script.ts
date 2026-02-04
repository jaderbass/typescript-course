interface Point2D {
    xPos: number;
    yPos: number;
    readonly name?: string; // ? beduetet: diese Eigenschaft ist optional
}

const p1: Point2D = { xPos: 0, yPos: 0 }

const p2: Point2D = { xPos: 1, yPos: 1, name: 'centerPoint' };
// p2.name = 'point2'; // erzeugt Fehler
console.log(p1, p2);
