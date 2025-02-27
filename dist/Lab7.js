var DataStore = /** @class */ (function () {
    function DataStore() {
        this.autos = [];
    }
    DataStore.prototype.insertAuto = function (auto) {
        this.autos.push(auto);
    };
    DataStore.prototype.retrieveAutos = function () {
        return this.autos;
    };
    DataStore.prototype.orderByMake = function () {
        this.autos.sort(function (a, b) { return a.make.localeCompare(b.make, 'ru'); });
    };
    return DataStore;
}());
var Auto = /** @class */ (function () {
    function Auto(type, make) {
        this.type = type;
        this.make = make;
    }
    return Auto;
}());
var AutoService = /** @class */ (function () {
    function AutoService(autos) {
        this.autos = autos;
    }
    AutoService.prototype.filterAutosByTypeEnding = function (suffix) {
        return this.autos.filter(function (auto) {
            return auto.type.toLowerCase().endsWith(suffix.toLowerCase());
        });
    };
    return AutoService;
}());
var TransportVehicle = /** @class */ (function () {
    function TransportVehicle(vehicleVin, ownerFirst, ownerLast, regNumber) {
        this.vehicleVin = vehicleVin;
        this.ownerFirst = ownerFirst;
        this.ownerLast = ownerLast;
        this.regNumber = regNumber;
    }
    TransportVehicle.prototype.fetchVehicleDetails = function () {
        var info = {
            VIN: this.vehicleVin,
            Owner: "".concat(this.ownerFirst, " ").concat(this.ownerLast),
            RegistrationNumber: this.regNumber
        };
        return JSON.stringify(info, null, 2);
    };
    return TransportVehicle;
}());
