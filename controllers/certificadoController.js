const Certificado = require("../models/certificadoModel");

exports.listarCertificado = async (req, res) => {
  try {
    const certificado = await Certificado.findAll();
    res.json(certificado);
  } catch (err) {
    res.status(500).send("Erro ao buscar Certificado");
  }
};

exports.buscarCertificado = async (req, res) => {
  try {
    const certificado = await Certificado.findByPk(req.params.id);
    if (certificado) res.json(certificado);
    else res.status(404).send("Cetificado não encontrado");
  } catch (err) {
    res.status(500).send("Erro ao buscar Certificado");
  }
};

exports.criarCertificado = async (req, res) => {
  try {
    const novoCertificado = await Certificado.create({
      aluno: req.body.aluno,
      curso: req.body.curso,
      data_emissao: req.body.data_emissao,
    });

    res.status(201).json(novoCertificado);
  } catch (err) {
    console.error("Erro Sequelize:", err);
    res.status(400).json({ erro: err.message });
  }
};

exports.atualizarCertificado = async (req, res) => {
  try {
    const [linhasAfetadas] = await Certificado.update(
      {
        aluno: req.body.aluno,
        curso: req.body.curso,
        data_emissao: req.body.data_emissao,
      },
      { where: { id_certificado: req.params.id } }
    );

    if (linhasAfetadas === 0) {
      return res.status(404).send("Certificado não encontrado");
    }

    res.send("Certificado atualizado com sucesso!");
  } catch (err) {
    console.error("Erro ao atualizar certificado:", err);
    res.status(400).send("Erro ao atualizar certificado");
  }
};

exports.deletarCertificado = async (req, res) => {
  try {
    const certificado = await Certificado.findByPk(req.params.id);

    if (!certificado) {
      return res.status(404).send("Certificado não encontrado");
    }

    await certificado.destroy();
    res.send("Certificado deletado com sucesso");
  } catch (err) {
    console.error("Erro ao deletar certificado:", err);
    res.status(500).send("Erro ao deletar certificado");
  }
};
