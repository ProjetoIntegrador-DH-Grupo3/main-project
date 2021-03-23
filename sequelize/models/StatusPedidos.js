module.exports = (sequelize, DataTypes) => {
  const statusPedidos = sequelize.define(
    "StatusPedidos",
    {
      pedidos_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      descricao: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      //nome da tabela no banco
      tableName: "status_pedidos",
    }
  );
  statusPedidos.associate = (models) => {
    statusPedidos.hasMany(models.Pedidos, {
      foreignKey: "id",
    });
  };

  return statusPedidos;
};
