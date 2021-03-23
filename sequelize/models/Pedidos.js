module.exports = (sequelize, DataTypes) => {
  const pedidos = sequelize.define(
    "Pedidos",
    {
      usuario_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      quantidade: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },

    {
      //nome da tabela no banco
      tableName: "pedidos",
    }
  );
  pedidos.associate = (models) => {
    pedidos.hasMany(models.Usuario, {
      foreignKey: "id",
    }),
      pedidos.belongsTo(models.StatusPedidos, {
        foreignKey: "id",
      }),
      pedidos.belongsToMany(models.Produtos, {
        through: "pedidos_detalhe",
        foreignKey: "id",
      });
  };

  return pedidos;
};
