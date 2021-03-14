module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('Usuario',{

        nome: DataTypes.STRING,
        email:{
            type: DataTypes.STRING,
            unique: true
        },
        senha: DataTypes.STRING,
        username:{
            type: DataTypes.STRING,
            unique: true
        },
        pedidos: DataTypes.STRING

    },{
        tableName: 'usuario',
        timestamps: false
    })

    return usuario;
}