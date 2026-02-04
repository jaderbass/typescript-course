interface AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    printAppointment(): void;
}

abstract class AppointmentABC {
    protected startTime: Date;
    protected endTime: Date;
    protected description: string;

    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string
    ) {
        this.startTime = startTimeInput;
        this.endTime = endTimeInput;
        this.description = descriptionInput;
    }

    /**
     * Methoden implemenieren
     * 
     * Var. 1: Methode wird in der abstrakten Klasse inkl. Anweisungsblock implementiert. 
     * Dann darf diese Methode in der abgeleiteten Klasse NICHT noch einmal implementiert werden.
     */
    /* printAppointment(): void {
        console.log(this.startTime, this.endTime, this.description);
    } */

    /**
     * Var. 2: Methode wird in der abstrakten Klasse nur angegeben (ähnlich Interfaces). 
     * Die Implementierung, also die Anweisungen, müssen in der abgeleiteten Klasse umgesetzt werden.
     * Hierbei benötigt die Methode in der abstraken Klasse das Schlüsselwort "abstract".
     */
    abstract printAppointment(): void;
}

class Appointment extends AppointmentABC {
    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string
    ) {
        super(startTimeInput, endTimeInput, descriptionInput);
    }

    printAppointment(): void {
        console.log(this.startTime, this.endTime, this.description);
    }
}

const a = new Appointment(
    new Date('2026-02-04T10:52:00'),
    new Date('2026-02-04T12:26:00'),
    'Eine Dauer'
);

a.printAppointment();