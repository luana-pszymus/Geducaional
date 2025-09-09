const { Sequelize } = require("sequelize");
const database = require("./sequelize");

const Login = database.define(
  "login",
  {
    id_usuario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    senha: {
      type: Sequelize.STRING(15), // limite de 15 caracteres igual ao banco
      allowNull: false,
    },
    autenticar: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    usuario_registrado: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    redefinir_senha: {
      type: Sequelize.STRING(15), // tamanho fixo de 15
      allowNull: true, // no SQL não está como NOT NULL, então deixei true
    },
    registrar_acesso: {
      type: Sequelize.STRING(10), // tamanho fixo de 10
      allowNull: true,
    },
  },
  {
    tableName: "login",
    timestamps: false, // porque sua tabela não tem createdAt/updatedAt
  }
);

module.exports = Login;
