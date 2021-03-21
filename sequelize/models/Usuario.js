module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    "Usuario",
    {
      permissao: DataTypes.INTEGER,
      nome: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      senha: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      //nome da tabela no banco
      tableName: "usuario",
      timestamps: false,
    }
  );

  return usuario;
};
