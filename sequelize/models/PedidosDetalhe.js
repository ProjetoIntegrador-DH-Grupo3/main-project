module.exports = (sequelize, DataTypes) => {
  const pedidosDetalhe = sequelize.define(
    "PedidosDetalhe",
    {
      pedidos_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      produtos_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      valor_total: DataTypes.INTEGER,
      cupom: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },

    {
      //nome da tabela no banco
      tableName: "pedidos_detalhe",
    }
  );
  pedidosDetalhe.associate = (models) => {
    pedidosDetalhe.hasMany(models.Pedidos, {
      foreignKey: "id",
    }),
      pedidosDetalhe.hasMany(models.Produtos, {
        foreignKey: "id",
      });
  };

  return pedidosDetalhe;
};
