module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define(
    "Menu",
    {
      produtos_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      //nome da tabela no banco
      tableName: "menu",
      timestamps: false,
    }
  );
  // produtos_id pertence a tabela Produtos
  menu.associate = (models) => {
    menu.belongsTo(models.Produtos, {
      foreignKey: "produtos_id",
    });
  };

  return menu;
};
