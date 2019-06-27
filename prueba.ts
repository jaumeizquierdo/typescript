type Colores = "Verde" | "Rojo" | "Azul";

let color:Colores = "Verde";

enum Color {Red,Green,Blue}

let c:Color = Color.Blue;
let colorName:string = Color[2]; // convertimos el índice a un string

console.log(c);  // devuelve 2 (indice)
console.log(colorName);

const miFuncion = (color:Colores):string => { // Función flecha
    return `esto es de color ${color}`;
};

// declarar objeto

let miVehiculo: {
    // tipo
    ruedas:number,
    motor:number,
    color:string
} = {
    ruedas: 4,
    motor: 1600,
    color: "verde"
}

console.log(miVehiculo);

miVehiculo.color = "rojo";

console.log(miVehiculo);

type actor = {nombre:string, nacimiento:string, peliculas:string[]};

let actores: actor[] = [
    {
        nombre: "John Travolta",
        nacimiento: "18-02-1954",
        peliculas: [
            "Grease"
        ]
    }
]