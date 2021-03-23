module.exports = (sequelize, DataTypes) => {
  const produtos = sequelize.define(
    "Produtos",
    {
      nome: DataTypes.STRING,
      imagem: DataTypes.STRING,
      descricao: DataTypes.STRING,
      preco: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      //nome da tabela no banco
      tableName: "produtos",
    }
  );

  produtos.associate = (models) => {
    produtos.belongsToMany(models.Pedidos, {
      through: "pedidos_detalhe",
      foreignKey: "id",
    });
    produtos.belongsTo(models.Menu, {
      foreignKey: "id",
    });
  };

  return produtos;
};
