"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    var TypeOfDocument;
    (function (TypeOfDocument) {
        TypeOfDocument["passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        TypeOfDocument["IDCard"] = "\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438";
        TypeOfDocument["driverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    })(TypeOfDocument = Transport.TypeOfDocument || (Transport.TypeOfDocument = {}));
    var OwnerClass = /** @class */ (function () {
        function OwnerClass(surname, name, lastName, birthday, typeOfDocument, series, number) {
            this.surname = surname;
            this.name = name;
            this.lastName = lastName;
            this.birthday = birthday;
            this.typeOfDocument = typeOfDocument;
            this.series = series;
            this.number = number;
        }
        Object.defineProperty(OwnerClass.prototype, "getSurname", {
            get: function () {
                return this.surname;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "setSurname", {
            set: function (surname) {
                this.surname = surname;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "getName", {
            get: function () {
                return this.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "setName", {
            set: function (name) {
                this.name = name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "getLastName", {
            get: function () {
                return this.lastName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "setLastName", {
            set: function (lastName) {
                this.lastName = lastName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "getBirthday", {
            get: function () {
                return this.birthday;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "setBirthday", {
            set: function (birthday) {
                this.birthday = birthday;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "getTypeOfDocument", {
            get: function () {
                return this.typeOfDocument;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "setTypeOfDocument", {
            set: function (typeOfDocument) {
                this.typeOfDocument = typeOfDocument;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "getSeries", {
            get: function () {
                return this.series;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "setSeries", {
            set: function (series) {
                this.series = series;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "getNumber", {
            get: function () {
                return this.number;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "setNumber", {
            set: function (number) {
                this.number = number;
            },
            enumerable: false,
            configurable: true
        });
        OwnerClass.prototype.printOwnerInfo = function () {
            console.log("\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446: ".concat(this.getSurname, " ").concat(this.getName, " ").concat(this.getLastName));
            console.log("\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ".concat(this.getBirthday.toLocaleDateString()));
            console.log("\u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430: ".concat(this.getTypeOfDocument));
            console.log("\u0421\u0435\u0440\u0438\u044F: ".concat(this.getSeries));
            console.log("\u041D\u043E\u043C\u0435\u0440: ".concat(this.getNumber));
        };
        return OwnerClass;
    }());
    Transport.OwnerClass = OwnerClass;
    var VehicleClass = /** @class */ (function () {
        function VehicleClass(mark, model, year, vin, registrationNumber, owner) {
            this.mark = mark;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
        }
        Object.defineProperty(VehicleClass.prototype, "getMark", {
            get: function () {
                return this.mark;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "setMark", {
            set: function (mark) {
                this.mark = mark;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "getModel", {
            get: function () {
                return this.model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "setModel", {
            set: function (model) {
                this.model = model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "getYear", {
            get: function () {
                return this.year;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "setYear", {
            set: function (year) {
                this.year = year;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "getVin", {
            get: function () {
                return this.vin;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "setVin", {
            set: function (vin) {
                this.vin = vin;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "getRegistrationNumber", {
            get: function () {
                return this.registrationNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "setRegistrationNumber", {
            set: function (registrationNumber) {
                this.registrationNumber = registrationNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "getOwner", {
            get: function () {
                return this.owner;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleClass.prototype, "setOwner", {
            set: function (owner) {
                this.owner = owner;
            },
            enumerable: false,
            configurable: true
        });
        VehicleClass.prototype.printVehicleInfo = function () {
            console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.getMark));
            console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this.getModel));
            console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this.getYear));
            console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this.getVin));
            console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this.getRegistrationNumber));
        };
        return VehicleClass;
    }());
    Transport.VehicleClass = VehicleClass;
    var BodyType;
    (function (BodyType) {
        BodyType["sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["coupe"] = "\u041A\u0443\u043F\u0435";
        BodyType["crossover"] = "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    var CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Buisiness"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
        CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    var CarCl = /** @class */ (function (_super) {
        __extends(CarCl, _super);
        function CarCl(mark, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            var _this = _super.call(this, mark, model, year, vin, registrationNumber, owner) || this;
            _this.bodyType = bodyType;
            _this.carClass = carClass;
            return _this;
        }
        Object.defineProperty(CarCl.prototype, "getBodyType", {
            get: function () {
                return this.bodyType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarCl.prototype, "setBodyType", {
            set: function (bodyType) {
                this.bodyType = bodyType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarCl.prototype, "getCarClass", {
            get: function () {
                return this.carClass;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarCl.prototype, "setCarClass", {
            set: function (carClass) {
                this.carClass = carClass;
            },
            enumerable: false,
            configurable: true
        });
        CarCl.prototype.printVehicleInfo = function () {
            _super.prototype.printVehicleInfo.call(this);
            console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this.getBodyType));
            console.log("\u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ".concat(this.getCarClass));
        };
        return CarCl;
    }(VehicleClass));
    Transport.CarCl = CarCl;
    var MotorbikeCl = /** @class */ (function (_super) {
        __extends(MotorbikeCl, _super);
        function MotorbikeCl(mark, model, year, vin, registrationNumber, owner, frameType, isSport) {
            var _this = _super.call(this, mark, model, year, vin, registrationNumber, owner) || this;
            _this.frameType = frameType;
            _this.isSport = isSport;
            return _this;
        }
        Object.defineProperty(MotorbikeCl.prototype, "getFrameType", {
            get: function () {
                return this.frameType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeCl.prototype, "setFrameType", {
            set: function (frameType) {
                this.frameType = frameType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeCl.prototype, "getIsSport", {
            get: function () {
                return this.isSport;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeCl.prototype, "setIsSport", {
            set: function (isSport) {
                this.isSport = isSport;
            },
            enumerable: false,
            configurable: true
        });
        MotorbikeCl.prototype.printVehicleInfo = function () {
            _super.prototype.printVehicleInfo.call(this);
            console.log("\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this.getFrameType));
            if (this.getIsSport == true) {
                console.log("\u0414\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0430: \u0434\u0430");
            }
            else {
                console.log("\u0414\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0430: \u043D\u0435\u0442");
            }
        };
        return MotorbikeCl;
    }(VehicleClass));
    Transport.MotorbikeCl = MotorbikeCl;
    var VehicleStorageCl = /** @class */ (function () {
        function VehicleStorageCl() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
        Object.defineProperty(VehicleStorageCl.prototype, "getCreationDate", {
            get: function () {
                return this.creationDate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleStorageCl.prototype, "getVehicles", {
            get: function () {
                return this.vehicles;
            },
            enumerable: false,
            configurable: true
        });
        VehicleStorageCl.prototype.getAllVehicles = function () {
            return this.vehicles;
        };
        VehicleStorageCl.prototype.addVehicle = function (vehicle) {
            this.vehicles.push(vehicle);
        };
        return VehicleStorageCl;
    }());
    Transport.VehicleStorageCl = VehicleStorageCl;
})(Transport || (exports.Transport = Transport = {}));
