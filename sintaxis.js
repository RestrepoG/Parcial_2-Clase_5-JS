// Variable Primitivas
let Nombre= undefined
let Apellido= 'Restrepo'
let Edad= 20
let Estado= true

// Costantes
// Arreglos
const Numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Objetos
const Articulos= {
    Descripcion: 'Coca-Cola 3L',
    Precio: 3.00,
    Stock: 1000
}
//console.log('Articulo: ', Articulos)

// Accesar A Los Elementos De Un Objeto
Articulos.Precio= 2.50
Articulos.Estado= true
/* console.log('Articulo: ', Articulos)
console.log('Descripcion: ', Articulos.Descripcion, '    Precio: ', Articulos.Precio) */

const Notas= [
    {
        Nombre: 'Guillermo', Promedio: 35,
        Parciales:[
            {PrimerParcial: [20, 20]},
            {SegundoParcial: [15, 15]}
        ]
    },
    {
        Nombre: 'Alejandro', Promedio: 40,
        Parciales: [
            {PrimerParcial: [20, 20]},
            {SegundoParcial: [20, 20]}
        ]
    },
    {
        Nombre: 'Javier', Promedio: 45,
        Parciales: [
            {PrimerParcial: [25, 25]},
            {SegundoParcial: [20, 20]}
        ]
    }
]

// Acceder A Los Elementos De Un Arreglo
/* console.log(Notas)
console.log(Notas[1])
console.log(Notas[1].Nombre)
console.log(Notas[1].Parciales)
console.log(Notas[1].Parciales[1])
console.log(Notas[1].Parciales[1].SegundoParcial)
console.log(Notas[1].Parciales[1].SegundoParcial[1]) */

// Estructuras Condicionales
/* if (Nombre)
    console.log("Nombe:", Nombre, "Edad:", Edad)
else
    console.log("No Ha Ingresado Ningun Nombre: ", Nombre) */

// Null, Undefined, '', "": Equivalentes al momento de decir que no existe cotenido en una variable.

// Otra Forma De Escribir Una Estructura Condicional
/* let Resp= (Nombre == undefined)? 'No Ha Ingresado Ningun Nombre' : Nombre
console.log(Resp) */

// Switch
/* Dia= 7

switch (Dia){
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
    default:
        console.log('No Che')
        break
} */

// Uso Del Try Y Del Catch
/* let X= 20
let Y= 5
try{
    if (Y == 0){
        throw 'No Existe Un Valor Exacto Para Un Numero Dividido Entre 0'
    }
    let Resp= X/Y
    console.log(Resp)
} catch (error) {
    console.log('Error: Y = 0', error)
} */

// Estructuras Repetitivas
const Numbers= [0, 25, 50, 75, 100, 125, 150]
let Cont= 0

// While
/* while (Cont < Numbers.length && Numbers[Cont] != 75){
    console.log('Posicion: ', Cont, '    Valor: ', Numbers[Cont])
    Cont= Cont+1
} */

// For
/* for(let ind= 0; ind < Numbers.length; ind++)
    console.log('Posicion: ', ind, '    Valor: ', Numbers[ind])

for(let ind= Numbers.length-1; ind > -1; ind--)
    console.log('Posicion: ', ind, '    Valor: ', Numbers[ind]) */

// Funciones
function Suma(){
    let N1= 1
    let N2= 2
    console.log(N1,'+',N2,'=',N1+N2)
}
//Suma()

// Arrow Function
const SumaA = () => {
    let N1= 10
    let N2= 20
    console.log(`${N1}+${N2}=${N1+N2}`)
}
//SumaA()

// Funcion
function Multiplicacion(N1= 0, N2= 0){
    N1= (N1)? N1 : 0
    N2= (N1)? N2 : 0
    return N1*N2
}
//console.log(Multiplicacion(1,2))

// Arrow Function
const MultiplicacionA = (N1= 1, N2= 1) => {
    N1= (N1) ? N1 : 0
    N2= (N2) ? N2 : 0
    return N1*N2
}
//console.log(MultiplicacionA(1,2))

// Function
function Resta(N1, N2) {
    return N1-N2
}
//console.log(Resta(1,3))

// Arrow Function
const RestaA = (N1, N2) => N1-N2
//console.log(RestaA(5,2))

// Funcion
function Division(N1, N2) {
    Resp= N2 ? N1/N2 : 0
    return Resp
}
//console.log(Division())

// Arrow Function

// Funciones De Lista
let Arreglo= ['A', 'B', 'C', 'D', 'E', 'F', 'G']
for (let i= 0; i < Arreglo.length; i= i+1){
    console.log(`Posicion: ${i} - Valor: ${Arreglo[i]}`)
}
