const Login = require("../models/loginModel");

exports.listarLogin = async (req, res) => {
  try {
    const login = await Login.findAll();
    res.json(login);
  } catch (err) {
    res.status(500).send("Erro ao buscar logins");
  }
};

exports.buscarLogin = async (req, res) => {
  try {
    const login = await Login.findByPk(req.params.id);
    if (login) res.json(login);
    else res.status(404).send("Login não encontrado");
  } catch (err) {
    res.status(500).send("Erro ao buscar login");
  }
};

exports.criarLogin = async (req, res) => {
  try {
    const novoLogin = await Login.create({
      senha: req.body.senha, // obrigatório
      autenticar: req.body.autenticar, // obrigatório (true/false)
      usuario_registrado: req.body.usuario_registrado, // obrigatório (true/false)
      redefinir_senha: req.body.redefinir_senha || null, // opcional
      registrar_acesso: req.body.registrar_acesso || null, // opcional
    });

    res.status(201).json(novoLogin);
  } catch (err) {
    console.error("Erro Sequelize:", err);
    res.status(400).json({ erro: err.message });
  }
};

exports.atualizarLogin = async (req, res) => {
  try {
    const [linhasAfetadas] = await Login.update(
      {
        senha: req.body.senha,
        autenticar: req.body.autenticar,
        usuario_registrado: req.body.usuario_registrado,
        redefinir_senha: req.body.redefinir_senha || null,
        registrar_acesso: req.body.registrar_acesso || null,
      },
      { where: { id_usuario: req.params.id } }
    );

    if (linhasAfetadas === 0) {
      return res.status(404).send("Login não encontrado");
    }

    res.send("Login atualizado com sucesso!");
  } catch (err) {
    console.error("Erro ao atualizar login:", err);
    res.status(400).send("Erro ao atualizar login");
  }
};

exports.deletarLogin = async (req, res) => {
  try {
    const login = await Login.findByPk(req.params.id);

    if (!login) {
      return res.status(404).send("Login não encontrado");
    }

    await login.destroy(); // deleta só este registro
    res.send("Login deletado com sucesso");
  } catch (err) {
    console.error("Erro ao deletar login:", err);
    res.status(500).send("Erro ao deletar login");
  }
};
