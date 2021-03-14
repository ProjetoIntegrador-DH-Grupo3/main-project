module.exports = (sequelize, DataTypes) => {
    const pedidos = sequelize.define('Pedidos',{

        usuario:{
            type: DataTypes.STRING,
            unique:true
        },
        usuario_cozinha:{
            type: DataTypes.STRING,
            unique:true
        },
        hamburguer: DataTypes.STRING,
        bebidas: DataTypes.STRING


    },{
        tableName: 'pedidos',
        timestamps: false
    })

    return pedidos;
}