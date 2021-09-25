const Tarea = require("./tarea");


class Tareas {
    _listado = {};

    get listadoArr() {

        const listado = [];
        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key]);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTareas( id = ''){
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        let salida = '\n';

        this.listadoArr.forEach((tarea, i) => {
            const { desc, completadoEn } = tarea;

            let completado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red;

            salida += `${i + 1}. `.magenta;
            salida += ` ${desc} :: ${completado}\n`;
        });

        console.log(salida);
    }

    listarPendientesCompletadas(completadas = true) {
        let salida = '\n';
        let i = 1;

        this.listadoArr.forEach((tarea) => {

            const { desc, completadoEn } = tarea;
            let completado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red;

            if (completadas) {
                if (completadoEn) {
                    salida += `${i++}. `.magenta;
                    salida += ` ${desc} :: ${completado}\n`;
                }
            } else {
                if (!completadoEn) {
                    salida += `${i++}. `.magenta;
                    salida += ` ${desc} :: ${completado}\n`;
                }
            }
        });

        console.log(salida);
    }

}


module.exports = Tareas;