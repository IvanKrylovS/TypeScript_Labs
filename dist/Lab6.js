var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function sealed(constructor) {
    console.log("sealed decorator");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function ToUpperCase(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod.apply(this, args);
        return typeof result == 'string' ? result.toUpperCase() : result;
    };
    return descriptor;
}
var CarLab6 = function () {
    var _classDecorators = [sealed];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CarLab6 = _classThis = /** @class */ (function () {
        function CarLab6_1(mark, model, year, vin, registrationNumber, bodyType, carClass) {
            this.mark = mark;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.bodyType = bodyType;
            this.carClass = carClass;
        }
        Object.defineProperty(CarLab6_1.prototype, "getMark", {
            get: function () {
                return this.mark;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "setMark", {
            set: function (mark) {
                this.mark = mark;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "getModel", {
            get: function () {
                return this.model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "setModel", {
            set: function (model) {
                this.model = model;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "getYear", {
            get: function () {
                return this.year;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "setYear", {
            set: function (year) {
                this.year = year;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "getVin", {
            get: function () {
                return this.vin;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "setVin", {
            set: function (vin) {
                this.vin = vin;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "getRegistrationNumber", {
            get: function () {
                return this.registrationNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "setRegistrationNumber", {
            set: function (registrationNumber) {
                this.registrationNumber = registrationNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "getBodyType", {
            get: function () {
                return this.bodyType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "setBodyType", {
            set: function (bodyType) {
                this.bodyType = bodyType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "getCarClass", {
            get: function () {
                return this.carClass;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarLab6_1.prototype, "setCarClass", {
            set: function (carClass) {
                this.carClass = carClass;
            },
            enumerable: false,
            configurable: true
        });
        CarLab6_1.prototype.printVehicleInfo = function () {
            console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.getMark));
            console.log("\u041C\u043E\u0434\u0435\u043B\u044C: ".concat(this.getModel));
            console.log("\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ".concat(this.getYear));
            console.log("VIN-\u043D\u043E\u043C\u0435\u0440: ".concat(this.getVin));
            console.log("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440: ".concat(this.getRegistrationNumber));
            console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this.getBodyType));
            console.log("\u041A\u043B\u0430\u0441\u0441 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F: ".concat(this.getCarClass));
        };
        return CarLab6_1;
    }());
    __setFunctionName(_classThis, "CarLab6");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CarLab6 = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CarLab6 = _classThis;
}();
var testCar = new CarLab6("Cadillac", "XT5", 2021, "0923FH028HFS0JBIF3347", "И123ВТ", "Кроссовер", "Бизнес");
testCar.printVehicleInfo();
CarLab6.prototype.newProperty = 'New Value';
console.log('newProperty' in CarLab6.prototype);
