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
