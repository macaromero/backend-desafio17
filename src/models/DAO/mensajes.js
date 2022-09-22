const {mensajesDTO} = require('../DTO/mensajes');

class Mensajes {

    constructor(knex) {
        this.knex = knex;
        this.table = 'mensajes'
    };

    async getAll() {
        const msjsExists = await this.knex.schema.hasTable(this.table);
        if (!msjsExists) {
            await this.knex.schema.createTable(this.table, table => mensajesDTO(table));
        };

        try {
            let msjs = await this.knex(this.table).select('*');
            if (msjs.length != 0) {
                return msjs;
            } else {
                return msjs = [];
            };
        } catch (error) {
            console.log("Ocurrió un error al realizar la búsqueda en la base de datos, volvé a intentarlo", error);
        };
    };

    async save (mensaje) {
        try {
            await this.knex(this.table).insert(mensaje); 

        } catch (error) {
            console.log("Ocurrió un error al intentar almacenar el mensaje en la base de datos, volvé a intentarlo", error);
        };
    };
};

module.exports = Mensajes;