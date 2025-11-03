const express = require('express');
const router = express.Router();
const sequelize = require('../config/database');
const { Aluno, Nota, AlunosDaTurma, Chamada } = require('../models'); // ajuste o caminho se necessário

// GET /api/dashboard/:id
router.get('/:id', async (req, res) => {
    const idAluno = req.params.id;

    try {
        // Buscar aluno
        const aluno = await Aluno.findByPk(idAluno);

        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }

        // Buscar coleções relacionadas
        const notas = await Nota.findAll({ where: { aluno: idAluno } });
        const turmas = await AlunosDaTurma.findAll({ where: { id_aluno: idAluno } });
        const chamadas = await Chamada.findAll({ where: { id_aluno: idAluno } });

        // Buscar horários, avisos (conteudo) e calendário via queries seguras
        let horarios = [];
        try {
            const [rows] = await sequelize.query('SELECT * FROM horarios ORDER BY id_horario;');
            horarios = rows;
        } catch (e) {
            horarios = [];
        }

        let avisos = [];
        try {
            const [rows] = await sequelize.query('SELECT * FROM conteudo ORDER BY id_conteudo;');
            avisos = rows.map(r => ({
                id: r.id_conteudo,
                titulo: r.materia,
                texto: r.professor,
                tipo: 'normal'
            }));
        } catch (e) {
            avisos = [];
        }

        let calendario = [];
        try {
            const [rows] = await sequelize.query('SELECT * FROM calendario ORDER BY ano_letivo DESC;');
            calendario = rows;
        } catch (e) {
            calendario = [];
        }

        res.json({
            aluno,
            notas,
            turmas,
            chamadas,
            horarios,
            avisos,
            calendario
        });

    } catch (error) {
        console.error('Erro no dashboard:', error); // <--- log completo
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
