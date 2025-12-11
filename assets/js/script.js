//Aplicar los conceptos fundamentles de la Programación Orientada a Objetos (POO).
// --------------------------------------
// Creación Clase Libro (POO); Método constructor utilizando la palabra clave this para asignar los parámetros recibidos a las propiedades del objeto
// --------------------------------------
class Libro {
    constructor(titulo, autor, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.estado = estado;
    }

    // Método para mostrar info en consola
    mostrarInfo() {
        console.log(`El libro "${this.titulo}" de ${this.autor} se encuentra ${this.estado}.`);
    }
}

// --------------------------------------
// Inventario (array que almacenará objetos Libro)
// --------------------------------------
const inventario = [];


// --------------------------------------
// Función principal que ejecuta el proceso de carga interactiva de libros
// --------------------------------------
document.getElementById("btnIniciar").addEventListener("click", function () {

    let continuar = true;

    // Bucle para agregar libros
    while (continuar) {
        const titulo = prompt("Ingresa el título del libro:");
        const autor = prompt("Ingresa el autor del libro:");
        const estado = prompt('Ingresa el estado del libro (Disponible / Prestado):');

        // Crear instancia de Libro
        const nuevoLibro = new Libro(titulo, autor, estado);

        // Agregar al inventario
        inventario.push(nuevoLibro);

        // Preguntar si desea agregar otro
        continuar = confirm("¿Deseas agregar otro libro?");
    }

    // Mostrar inventario completo en consola
    console.log("-------- Inventario de la Biblioteca --------");
    for (const libro of inventario) {
        libro.mostrarInfo();
    }
});

