module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define(
    "Menu",
    {
      produtos_id: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      //nome da tabela no banco
      tableName: "menu",
    }
  );
  // produtos_id pertence a tabela Produtos
  menu.associate = (models) => {
    menu.hasMany(models.Produtos, {
      foreignKey: "id",
    });
  };

  return menu;
};
