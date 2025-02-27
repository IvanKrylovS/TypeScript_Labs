export namespace Transport {
    export interface Owner {
        getSurname: string;
        getName: string;
        getLastName: string;
        getBirthday: Date;
        getTypeOfDocument: TypeOfDocument;
        getSeries: string;
        getNumber: string;
        printOwnerInfo(): void;
    }

    export enum TypeOfDocument {
        passport = "Паспорт",
        IDCard = "Удостоверение личности",
        driverLicense = "Водительское удостоверение"
    }
    
    export interface Vehicle {
        getMark: string;
        getModel: string;
        getYear: number;
        getVin: string;
        getRegistrationNumber: string;
        getOwner: Owner;
        printVehicleInfo(): void;
    }
    
    export class OwnerClass implements Owner {
        private surname: string;
        private name: string;
        private lastName: string;
        private birthday: Date;
        private typeOfDocument: TypeOfDocument;
        private series: string;
        private number: string;
    
        constructor (surname: string, name: string, lastName: string, birthday: Date, typeOfDocument: TypeOfDocument, series: string, number: string) {
            this.surname = surname;
            this.name = name;
            this.lastName = lastName;
            this.birthday = birthday;
            this.typeOfDocument = typeOfDocument;
            this.series = series; 
            this.number = number;
        }
        
        public get getSurname(): string {
            return this.surname;
        }
    
        public set setSurname(surname: string) {
            this.surname = surname;
        }
    
        public get getName(): string {
            return this.name;
        }
    
        public set setName(name: string) {
            this.name = name;
        }
    
        public get getLastName(): string {
            return this.lastName;
        }
    
        public set setLastName(lastName: string) {
            this.lastName = lastName;
        }
    
        public get getBirthday(): Date {
            return this.birthday;
        }
    
        public set setBirthday(birthday: Date) {
            this.birthday = birthday;
        }
    
        public get getTypeOfDocument(): TypeOfDocument {
            return this.typeOfDocument;
        }
    
        public set setTypeOfDocument(typeOfDocument: TypeOfDocument) {
            this.typeOfDocument = typeOfDocument;
        }
    
        public get getSeries(): string {
            return this.series;
        }
    
        public set setSeries(series: string) {
            this.series = series;
        }
    
        public get getNumber(): string {
            return this.number;
        }
    
        public set setNumber(number: string) {
            this.number = number;
        }
    
        printOwnerInfo(): void {
            console.log(`Владелец: ${this.getSurname} ${this.getName} ${this.getLastName}`);
            console.log(`Дата рождения: ${this.getBirthday.toLocaleDateString()}`);
            console.log(`Тип документа: ${this.getTypeOfDocument}`);
            console.log(`Серия: ${this.getSeries}`);
            console.log(`Номер: ${this.getNumber}`);
        }
    }

    export class VehicleClass implements Vehicle {
        private mark: string;
        private model: string;
        private year: number;
        private vin: string;
        private registrationNumber: string;
        private owner: Owner;
        
        constructor (mark: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner) {
            this.mark = mark;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
        }
    
        public get getMark(): string {
            return this.mark;
        }
    
        public set setMark(mark: string) {
            this.mark = mark;
        }
    
        public get getModel(): string {
            return this.model;
        }
    
        public set setModel(model: string) {
            this.model = model;
        }
    
        public get getYear(): number {
            return this.year;
        }
    
        public set setYear(year: number) {
            this.year = year;
        }
    
        public get getVin(): string {
            return this.vin;
        }
    
        public set setVin(vin: string) {
            this.vin = vin;
        }
    
        public get getRegistrationNumber(): string {
            return this.registrationNumber;
        }
    
        public set setRegistrationNumber(registrationNumber: string) {
            this.registrationNumber = registrationNumber;
        }
    
        public get getOwner(): Owner {
            return this.owner;
        }
    
        public set setOwner(owner: Owner) {
            this.owner = owner;
        }
    
        printVehicleInfo(): void {
            console.log(`Марка: ${this.getMark}`);
            console.log(`Модель: ${this.getModel}`);
            console.log(`Год выпуска: ${this.getYear}`);
            console.log(`VIN-номер: ${this.getVin}`);
            console.log(`Регистрационный номер: ${this.getRegistrationNumber}`);
        }
    }

    export interface Car extends Vehicle {
        getBodyType: BodyType;
        getCarClass: CarClass;
    }
    
    export enum BodyType {
        sedan = "Седан",
        coupe = "Купе", 
        crossover = "Кроссовер"
    }
    
    export enum CarClass {
        Economy = "Эконом",
        Buisiness = "Бизнес",
        Luxury = "Люкс"
    }
    
    export class CarCl extends VehicleClass implements Car {
        private bodyType: BodyType;
        private carClass: CarClass;
    
        constructor (mark: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: BodyType, carClass: CarClass) {
            super(mark, model, year, vin, registrationNumber, owner);
            this.bodyType = bodyType;
            this.carClass = carClass;
        }
    
        public get getBodyType(): BodyType {
            return this.bodyType;
        }
    
        public set setBodyType(bodyType: BodyType) {
            this.bodyType = bodyType;
        }
    
        public get getCarClass(): CarClass {
            return this.carClass;
        }
    
        public set setCarClass(carClass: CarClass) {
            this.carClass = carClass;
        }
    
        printVehicleInfo(): void {
            super.printVehicleInfo();
            console.log(`Тип кузова: ${this.getBodyType}`);
            console.log(`Класс автомобиля: ${this.getCarClass}`);
        }
    }
    
    export interface Motorbike extends Vehicle {
        getFrameType: string;
        getIsSport: boolean;
    }
    
    export class MotorbikeCl extends VehicleClass implements Motorbike {
        private frameType: string;
        private isSport: boolean;
    
        constructor (mark: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: string, isSport: boolean) {
            super(mark, model, year, vin, registrationNumber, owner);
            this.frameType = frameType;
            this.isSport = isSport;
        }
    
        public get getFrameType(): string {
            return this.frameType;
        }
    
        public set setFrameType(frameType: string) {
            this.frameType = frameType;
        }
    
        public get getIsSport(): boolean {
            return this.isSport;
        }
    
        public set setIsSport(isSport: boolean) {
            this.isSport = isSport;
        }
    
        printVehicleInfo(): void {
            super.printVehicleInfo();
            console.log(`Тип рамы: ${this.getFrameType}`);
            if (this.getIsSport == true) {
                console.log(`Для спорта: да`);
            } else {
                console.log(`Для спорта: нет`);
            }
        }
    }

    export interface VehicleStorage<T extends Vehicle> {
        getCreationDate: Date;
        getVehicles: T[];
        getAllVehicles(): T[];
    } 
    
    export class VehicleStorageCl<T extends Vehicle> implements VehicleStorage<T> {
        private creationDate: Date;
        private vehicles: T[];
    
        constructor () {
            this.creationDate = new Date();
            this.vehicles = [];
        }
    
        public get getCreationDate(): Date {
            return this.creationDate;
        }
    
        public get getVehicles(): T[] {
            return this.vehicles;
        }
    
        getAllVehicles(): T[] {
            return this.vehicles;
        }
    
        addVehicle(vehicle: T) {
            this.vehicles.push(vehicle);
        }
    }
}