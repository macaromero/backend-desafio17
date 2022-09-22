const mensajesDTO = (table) => {
    table.increments('id', {primaryKey: true}),
    table.string('mail', 40).notNullable(),
    table.string('date', 500).notNullable(),
    table.string('message', 500).notNullable()
};

module.exports = {mensajesDTO};