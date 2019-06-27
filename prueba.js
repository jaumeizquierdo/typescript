var color = "Verde";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var colorName = Color[2]; // convertimos el índice a un string
console.log(c); // devuelve 2 (indice)
console.log(colorName);
var miFuncion = function (color) {
    return "esto es de color " + color;
};
// declarar objeto
var miVehiculo = {
    ruedas: 4,
    motor: 1600,
    color: "verde"
};
console.log(miVehiculo);
miVehiculo.color = "rojo";
console.log(miVehiculo);
var actores = [
    {
        nombre: "John Travolta",
        nacimiento: "18-02-1954",
        peliculas: [
            "Grease"
        ]
    }
];
var Car = /** @class */ (function () {
    function Car(engines, wheels) {
        this.engines = engines;
        this.wheels = wheels;
    }
    Car.prototype.getEngines = function () { return 5; };
    return Car;
}());
var mini = new Car(4, 4);
