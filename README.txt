Projeto Triledu - frontend/backend atualizado
Alterações:
- backend/routes/dashboard.js agora retorna: aluno, notas, turmas, chamadas, horarios, avisos (conteudo), calendario
- frontend (Vite + React) App.jsx busca /api/dashboard/1 e distribui os dados para componentes:
  - Faltas (chamadas)
  - Avisos (conteudo)
  - Horario (horarios + turmas list)
  - Notas (nota)
  - Calendario (calendario table)

Instruções para rodar:
1) Backend: abra terminal na pasta backend
   npm install
   npm run dev   (ou node server.js)
2) Frontend: abra terminal na pasta frontend
   npm install
   npm run dev

Endpoints usados:
GET /api/dashboard/1 -> retorna todo o payload usado pelo frontend

Observações:
- O campo 'horarios' não tem coluna de disciplina; o componente exibe os horários e lista as turmas do aluno.
- Campos feriados/dias_letivos são lidos como strings separadas por vírgula.
