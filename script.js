let turno = 'cubo1';
let startTimePlayer1 = null;
let startTimePlayer2 = null;
let endTimePlayer1 = null;
let endTimePlayer2 = null;

// Función para mover el cubo y actualizar el contador
function moverCubo(id) {
    // Verificar si no es el turno del cubo actual
    if (id !== turno) {
        return;
    }

    // Obtener referencia al cubo según su ID
    const cubo = document.getElementById(id);

    // Obtener referencia al contador del cubo
    const counter = cubo.querySelector('.counter');

    // Obtener el valor actual del contador y convertirlo a número
    let count = parseInt(counter.innerText);

    // Verificar si es el primer clic para iniciar el cronómetro
    if (count === 0) {
        if (id === 'cubo1') {
            startTimePlayer1 = Date.now();
        } else if (id === 'cubo2') {
            startTimePlayer2 = Date.now();
        }
    }

    // Incrementar el contador en 1
    count++;

    // Actualizar el valor del contador en el HTML
    counter.innerText = count;

    // Verificar si algún jugador llegó a 10 y mostrar el mensaje de alerta
    if (count === 11) {
        // Detener el cronómetro para el jugador que alcanzó 10
        if (id === 'cubo1') {
            endTimePlayer1 = Date.now();
        } else if (id === 'cubo2') {
            endTimePlayer2 = Date.now();
        }

        // Cambiar el turno al otro jugador
        turno = turno === 'cubo1' ? 'cubo2' : 'cubo1';

        // Si el otro jugador también llegó a 10, mostrar el ganador
        if (endTimePlayer1 && endTimePlayer2) {
            // Calcular el tiempo transcurrido en milisegundos
            const tiempoCubo1 = endTimePlayer1 - startTimePlayer1;
            const tiempoCubo2 = endTimePlayer2 - startTimePlayer2;

            // Mostrar el tiempo de cada jugador
            alert(`Jugador 1 (Rojo): ${tiempoCubo1} ms\nJugador 2 (Azul): ${tiempoCubo2} ms`);

            // Determinar al ganador y mostrarlo
            let ganador;
            if (tiempoCubo1 < tiempoCubo2) {
                ganador = 'Jugador 1 (Rojo)';
            } else if (tiempoCubo2 < tiempoCubo1) {
                ganador = 'Jugador 2 (Azul)';
            } else {
                ganador = 'Empate';
            }
            alert(`${ganador} es el ganador😁👍`);

            // Reiniciar el juego
            count = 0;
            counter.innerText = count;
            startTimePlayer1 = null;
            startTimePlayer2 = null;
            endTimePlayer1 = null;
            endTimePlayer2 = null;
            turno = 'cubo1';
        }
        count = 0;
        counter.innerText = count;
    }

     // Calcular las dimensiones máximas del área permitida para el cubo
     const maxPosX = window.innerWidth - 500;
     const maxPosY = window.innerHeight - 500;
 
     // Calcular nuevas coordenadas para la posición del cubo dentro del área permitida
     const nuevaPosicionX = Math.random() * maxPosX;
     const nuevaPosicionY = Math.random() * maxPosY;
 
     // Aplicar la nueva posición al cubo
     cubo.style.left = nuevaPosicionX + 'px';
     cubo.style.top = nuevaPosicionY + 'px';
}
