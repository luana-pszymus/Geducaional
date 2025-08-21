const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const tarefaController = require("./controllers/tarefaController");
const router = require("./routes/routes");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
app.get("/task", tarefaController.exibirTarefas);
app.get("/adicionar", (req, res) => res.render("adicionarTarefa"));
app.post("/adicionar", tarefaController.adicionarTarefa);
app.get("/remover/:id", tarefaController.removerTarefa);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
