class Point2D {
    private _xPos: number;
    private _yPos: number;

    // Statische Eigenschaften sind NUR über die Klasse zugänglich
    public static NUM_DIMENSIONS = 2;

    constructor(xPosInput: number, yPosInput: number) {
        this._xPos = xPosInput;
        this._yPos = yPosInput;
    }

    public get xPos(): number {
        return this._xPos;
    }

    public set xPos( xPosNew: number) {
        this._xPos = xPosNew;
    }

    public get yPos(): number {
        return this._yPos;
    }

    public set yPos( yPosNew: number) {
        this._yPos = yPosNew;
    }
}

class Point3D extends Point2D {
    private _zPos: number;

    public static NUM_DIMENSIONS = 3;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this._zPos = zPosInput;
    }
    public get zPos(): number {
        return this._zPos;
    }

    public set zPos( zPosNew: number) {
        this._zPos = zPosNew;
    }

    
}

const p1: Point2D = new Point2D(0, 0);

const p2: Point3D = new Point3D(1, 1, 5);
console.log(p1, p2);


// Getter-/Setter-Methoden werden ohne runde Klammern aufgerufen.
// Aufruf der xPos-Methode mit Wertzuweisung = Setter-Methode (schreiben)
p1.xPos = 4;

// Aufruf der xPos-Methode ohne Wertzuweisung = Getter-Methode (lesen)
console.log(Point3D.NUM_DIMENSIONS);
