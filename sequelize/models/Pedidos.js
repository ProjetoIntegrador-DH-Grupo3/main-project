module.exports = (sequelize, DataTypes) => {
  const pedidos = sequelize.define(
    "Pedidos",
    {
      usuario_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      quantidade: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },

    {
      //nome da tabela no banco
      tableName: "pedidos",
      timestamps: false,
    }
  );

  return pedidos;
};
