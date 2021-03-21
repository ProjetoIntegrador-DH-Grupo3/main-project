module.exports = (sequelize, DataTypes) => {
  const produtos = sequelize.define(
    "Produtos",
    {
      nome: DataTypes.STRING,
      imagem: DataTypes.STRING,
      descricao: DataTypes.STRING,
      preco: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      //nome da tabela no banco
      tableName: "produtos",
      timestamps: false,
    }
  );

  // produtos faz associação a tabela menu
  produtos.associate = (models) => {
    produtos.hasMany(models.Menu, {
      foreignKey: "produtos_id",
    });
  };

  return produtos;
};
