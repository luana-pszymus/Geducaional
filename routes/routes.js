const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/rotadeteste", (req, res) => {
  res.send("rota de teste ok");
});

const loginController = require("../controllers/loginController");

router.get("/login", loginController.listarLogin);
router.get("/login/:id", loginController.buscarLogin);
router.post("/login", loginController.criarLogin);
router.put("/login/:id", loginController.atualizarLogin);
router.delete("/login/:id", loginController.deletarLogin);

const certificadoController = require("../controllers/certificadoController");

router.get("/certificado", certificadoController.listarCertificado);
router.get("/certificado/:id", certificadoController.buscarCertificado);
router.post("/certificado", certificadoController.criarCertificado);
router.put("/certificado/:id", certificadoController.atualizarCertificado);
router.delete("/certificado/:id", certificadoController.deletarCertificado);

module.exports = router;
