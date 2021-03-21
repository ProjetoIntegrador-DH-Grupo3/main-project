module.exports = (sequelize, DataTypes) => {
  const statusPedidos = sequelize.define(
    "StatusPedidos",
    {
      pedidos_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      descricao: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      //nome da tabela no banco
      tableName: "status_pedidos",
      timestamps: false,
    }
  );
  // statusPedidos.associate = (models) => {
  //   statusPedidos.belongsTo(models.pedidos, {
  //     foreignKey: "pedidos_id",
  //   });
  // };

  return statusPedidos;
};
