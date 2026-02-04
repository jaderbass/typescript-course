class Point2D {
    private xPos: number; // ohne weitere Angaben sind die Properties immer public
    protected yPos: number;

    constructor(xPosInput: number, yPosInput: number) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }

    movePosX(pos: number) {
        this.xPos += pos;
    }
}

class Point3D extends Point2D {
    protected zPos: number;

    constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
        super(xPosInput, yPosInput);
        this.zPos = zPosInput;
    }

    movePosY(pos: number): void {
        this.yPos += pos;
    }
}

const p1: Point2D = new Point2D(0, 0);

const p2: Point3D = new Point3D(1, 1, 5);
console.log(p1, p2);

p1.movePosX(5);
p2.movePosX(3);

console.log(p1, p2);
