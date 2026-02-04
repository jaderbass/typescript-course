// Man nutzt Implements um eine Implementierung für real existierende Klassen vorzugeben
interface AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    printAppointment(): void;
}

class Appointment implements AppointmentInterface {
    private _startTime: Date;
    private _endTime: Date;
    private _description: string;

    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string
    ) {
        this._startTime = startTimeInput;
        this._endTime = endTimeInput;
        this._description = descriptionInput;
    }

    get startTime(): Date {
        return this._startTime;
    }

    get endTime(): Date {
        return this.endTime;
    }

    get description(): string {
        return this.description;
    }

    printAppointment(): void {
        console.log(this._startTime, this._endTime, this._description);
    }
}

const a = new Appointment(
    new Date('2026-02-04T10:52:00'),
    new Date('2026-02-04T12:26:00'),
    'Eine Dauer'
);

a.printAppointment();