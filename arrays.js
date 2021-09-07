const Numeros= [20, 40, 20, 80, 100]
let Alumnos= [
    {Nombre: 'Yadi', N1: 20, N2: 50},
    {Nombre: 'Erick', N1: 50, N2: 50},
    {Nombre: 'Daniel', N1: 40, N2: 50},
    {Nombre: 'Danni', N1: 40, N2: 40},
    {Nombre: 'Noris', N1: 30, N2: 40},
]

console.clear()
//console.log(Numeros, Alumnos)
//console.log('Alumno:', Alumnos[1])
//console.log('Nombre Del Alumno:', Alumnos[1].Nombre)

/* for (Pos= 0; Pos < Alumnos.length; Pos= Pos+1)
    console.log(Alumnos[Pos]) */

const Fun = (Alumno)=>{
    Promedio= (Alumno.N1+Alumno.N2)/2
    console.log(Alumno.Nombre, Promedio)
}

/* Alumnos.forEach((Alumno)=>{
    Promedio= (Alumno.N1+Alumno.N2)/2
    console.log(Alumno.Nombre, Promedio)
}) */

/* const Items = Alumnos.map(Item => {
    Promedio= (Item.N1+Item.N2)/2
    return Item.Nombre
}) */

const Items= Alumnos.filter(Item => Item.Nombre != 'Daniel')
Alumnos= Items
console.log(Items)
console.log(Alumnos)