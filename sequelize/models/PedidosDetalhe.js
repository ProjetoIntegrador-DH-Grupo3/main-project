module.exports = (sequelize, DataTypes) => {
  const pedidosDetalhe = sequelize.define(
    "PedidosDetalhe",
    {
      pedidos_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      valor_total: DataTypes.INTEGER,
      cupom: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },

    {
      //nome da tabela no banco
      tableName: "pedidos_detalhe",
      timestamps: false,
    }
  );

  return pedidosDetalhe;
};
