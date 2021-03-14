module.exports = (sequelize, DataTypes) => {
    const cardapio = sequelize.define('Cardapio',{

        nome: DataTypes.STRING,
        usuario:{
            type: DataTypes.STRING,
            unique: true
        },
        hamburguer: DataTypes.STRING,
        bebidas: DataTypes.STRING

    },{
        tableName: 'cardapio',
        timestamps: false
    })

    return cardapio;
}