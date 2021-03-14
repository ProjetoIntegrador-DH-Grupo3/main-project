module.exports = (sequelize, DataTypes) => {
    const usuarioCozinha = sequelize.define('UsuarioCozinha',{

       nome: DataTypes.STRING,
       email:{
           type: DataTypes.STRING,
           unique: true
       },
       senha: DataTypes.STRING,
       username:{
           type: DataTypes.STRING,
           unique:true
       },
       pedidos: DataTypes.STRING
    },{
        TableName:'usuario_cozinha',
        timestamps: false
    })

    return usuarioCozinha;
}