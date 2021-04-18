module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    "Usuario",
    {
      permissao: DataTypes.INTEGER,
      nome: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      senha: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      //nome da tabela no banco
      tableName: "usuario",
    }
  );

  usuario.associate = (models) => {
    usuario.belongsTo(models.Pedidos, {
      through: "pedidos",
      foreignKey: "id",
    });
  };

  return usuario;
};
