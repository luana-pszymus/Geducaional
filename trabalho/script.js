// Mostrar menu
function mostrarMenu(menu) {
    document.querySelectorAll('.card').forEach(c => c.style.display = 'none');
    document.getElementById(menu).style.display = 'block';
}

// Calendário de faltas
const calendario = document.getElementById('calendario');
const detalhes = document.getElementById('detalhes');
const aulasPorDia = {
    2: { aulas: ['Matemática', 'Português', 'Inglês', 'Educação Física'], faltou: ['Português'] },
    5: { aulas: ['Ciências', 'História', 'Matemática', 'Português'], faltou: ['Ciências'] },
    10: { aulas: ['Inglês', 'Educação Física'], faltou: ['Inglês'] }
};

for (let i = 1; i <= 30; i++) {
    const dia = document.createElement('div');
    dia.classList.add('dia');
    dia.textContent = i;
    if (aulasPorDia[i]?.faltou.length) {
        dia.classList.add('faltou');
    }
    dia.addEventListener('click', () => {
        // Exibe a barra de detalhes e remove a seleção de outros dias
        detalhes.style.display = 'block';
        document.querySelectorAll('.dia-selecionado').forEach(d => d.classList.remove('dia-selecionado'));
        dia.classList.add('dia-selecionado');
        
        if (aulasPorDia[i]) {
            detalhes.innerHTML = `<strong>Dia ${i}</strong><br>Aulas: ${aulasPorDia[i].aulas.join(', ')}<br>Faltou: ${aulasPorDia[i].faltou.length ? aulasPorDia[i].faltou.join(', ') : 'Nenhuma'}`;
            if (aulasPorDia[i].faltou.length) {
                detalhes.style.backgroundColor = '#ff4d4d';
                detalhes.style.color = 'white';
                detalhes.style.borderLeft = '5px solid red';
            } else {
                detalhes.style.backgroundColor = 'var(--green-light)';
                detalhes.style.color = 'black';
                detalhes.style.borderLeft = '5px solid var(--green)';
            }
        } else {
            detalhes.innerHTML = `<strong>Dia ${i}</strong><br>Sem registro de aulas.`;
            detalhes.style.backgroundColor = 'var(--green-light)';
            detalhes.style.color = 'black';
            detalhes.style.borderLeft = '5px solid var(--green)';
        }
    });
    calendario.appendChild(dia);
}

// Inicializa menu
mostrarMenu('faltas');

// Quadro de avisos
const listaAvisos = document.getElementById('lista-avisos');
const btnAdicionar = document.getElementById('adicionar-aviso');
const filtros = document.querySelectorAll('#filtros button');
let avisos = [];

function atualizarAvisos(filtro = 'todos') {
    listaAvisos.innerHTML = '';
    let cont = 0;
    avisos.forEach((av, i) => {
        if (filtro === 'todos' || av.tipo === filtro) {
            const div = document.createElement('div');
            div.className = 'aviso aviso-' + av.tipo;
            div.setAttribute('data-icone', av.tipo === 'normal' ? 'ℹ️' : av.tipo === 'importante' ? '⚠️' : '❗');
            div.innerHTML = `<div class="aviso-texto"><strong>${av.titulo}</strong><br>${av.texto}</div><button class="btn-lido">Marcar como lido</button>`;
            listaAvisos.appendChild(div);
            const btn = div.querySelector('.btn-lido');
            btn.addEventListener('click', () => {
                div.classList.add('fadeOut');
                setTimeout(() => {
                    listaAvisos.removeChild(div)
                }, 400);
            });
            cont++;
        }
    });
    document.getElementById('contador-aviso').textContent = `(${cont})`;
}

btnAdicionar.addEventListener('click', () => {
    const titulo = document.getElementById('titulo-aviso').value.trim();
    const texto = document.getElementById('texto-aviso').value.trim();
    const tipo = document.getElementById('tipo-aviso').value;
    if (titulo && texto) {
        avisos.push({ titulo, texto, tipo });
        atualizarAvisos();
        document.getElementById('titulo-aviso').value = '';
        document.getElementById('texto-aviso').value = '';
    }
});

filtros.forEach(b => {
    b.addEventListener('click', () => {
        filtros.forEach(bt => bt.classList.remove('ativo'));
        b.classList.add('ativo');
        atualizarAvisos(b.dataset.filtro);
    });
});

// Horário
const aulasDoDia = [
    { horario: '08:00', materia: 'Matemática', professor: 'Prof. Ana Silva', sala: 'Sala 101' },
    { horario: '10:00', materia: 'Português', professor: 'Prof. João Santos', sala: 'Sala 102' },
    { horario: '13:00', materia: 'Ciências', professor: 'Prof. Maria Oliveira', sala: 'Sala 103' }
];

const listaHorarios = document.getElementById('lista-horarios');
const detalhesAula = document.getElementById('detalhes-aula');

aulasDoDia.forEach(aula => {
    const item = document.createElement('li');
    item.textContent = `${aula.horario} - ${aula.materia}`;

    item.addEventListener('click', () => {
        detalhesAula.innerHTML = `
            <strong>${aula.materia}</strong><br>
            Professor: ${aula.professor}<br>
            Sala: ${aula.sala}
        `;
        detalhesAula.style.display = 'block';
    });

    listaHorarios.appendChild(item);
});

// Notas
const dadosNotas = [
    {
        nome: 'Matemática',
        professor: 'Ana Maria Silva',
        atividades: [
            { nome: 'Prova 1', nota: 8.5 },
            { nome: 'Trabalho de Grupo', nota: 9.0 },
            { nome: 'Prova 2', nota: 7.5 }
        ]
    },
    {
        nome: 'Português',
        professor: 'João Pedro Santos',
        atividades: [
            { nome: 'Redação', nota: 9.5 },
            { nome: 'Leitura e Interpretação', nota: 8.0 }
        ]
    },
    {
        nome: 'Ciências',
        professor: 'Maria Oliveira',
        atividades: [
            { nome: 'Prova Final', nota: 4.0 }
        ]
    }
];

const listaMaterias = document.getElementById('lista-materias');
const detalhesMateria = document.getElementById('detalhes-materia');

function calcularNotaSemestre(atividades) {
    if (atividades.length === 0) return 'N/A';
    const somaNotas = atividades.reduce((soma, atividade) => soma + atividade.nota, 0);
    return (somaNotas / atividades.length).toFixed(1);
}

dadosNotas.forEach(materia => {
    const notaSemestre = parseFloat(calcularNotaSemestre(materia.atividades));
    const item = document.createElement('li');
    let corNota = '';

    if (notaSemestre >= 8) {
        corNota = 'nota-verde';
    } else if (notaSemestre >= 6) {
        corNota = 'nota-amarela';
    } else {
        corNota = 'nota-vermelha';
    }

    item.innerHTML = `
        <span>${materia.nome}</span>
        <span class="nota-semestre ${corNota}">${notaSemestre}</span>
    `;

    item.addEventListener('click', () => {
        let atividadesHTML = '';
        materia.atividades.forEach(atividade => {
            atividadesHTML += `<li>${atividade.nome}: <strong>${atividade.nota.toFixed(1)}</strong></li>`;
        });

        detalhesMateria.innerHTML = `
            <strong>${materia.nome}</strong><br>
            <hr>
            Professor: ${materia.professor}<br>
            Nota do Semestre: <span class="nota-semestre ${corNota}">${notaSemestre}</span><br>
            <hr>
            <p><strong>Atividades Realizadas:</strong></p>
            <ul>
                ${atividadesHTML}
            </ul>
        `;
        detalhesMateria.style.display = 'block';
    });

    listaMaterias.appendChild(item);
});