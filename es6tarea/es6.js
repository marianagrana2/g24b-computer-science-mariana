/*1. Hacer un ejemplo de como obtener los valores de todas sus key del siguiente objeto en 3 nuevas variables con y sin destructuring.
Y mostrarlos en consola. */

const student = { id: 1, name: 'elsa', app: 'sayjayin' }; //Objeto 

//Sin Destructuring 
/*console.log("Sin Destructuring.")
const id = student.id;
const name = student.name;
const app = student.app;
console.log(id , name , app);*/

//Con Destructuring
/*console.log("Con Destructuring.")
const {id, name , app} = student; 
console.log(id,name, app);*/


//2. Del siguiente arreglo obtener todos los estudiantes con calificacion mayor a 8 y que estan activos en devf.
//Hacerlo con un ciclo while, con un ciclo for y con ES6 (filter, forEach, map).

const students = [
    { id: 1, name: 'elsa', app: 'sayjayin', grade: 10, isActive: true  },
    { id: 2, name: 'elsa', app: 'zapatito', grade: 9, isActive: false  },
    { id: 3, name: 'elsa', app: 'zapote', grade: 7, isActive: true },
    { id: 4, name: 'elsa', app: 'zapote', grade: 8, isActive: false },
    { id: 5, name: 'elsa', app: 'zapote', grade: 6, isActive: true },
    { id: 6, name: 'elsa', app: 'zapote', grade: 9, isActive: false },
] 
//Ciclo While
//let i= 0;
const studentsActivesAndGoodGrades = []; //Se inicia con un arreglo vacio.

/*while (i < students.length){
    if(students[i].grade > 8 && students[i].isActive){
        studentsActivesAndGoodGrades.push(students[i]);   //Agrega la nueva información al arreglo.
    }
    i++; // Agregarse a fuera para evitar bucle infinito
}
console.log(studentsActivesAndGoodGrades); */

//Ciclo For 
for (let i = 0; i <students.length; i++){
    if(students[i].grade > 8 && students[i].isActive){
        studentsActivesAndGoodGrades.push(students[i]);   //Agrega la nueva información al arreglo.
    }
}
console.log(studentsActivesAndGoodGrades);