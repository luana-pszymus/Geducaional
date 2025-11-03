import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Avisos from "./components/Avisos";
import Faltas from "./components/Faltas";
import Horario from "./components/Horario";
import Notas from "./components/Notas";
import Calendario from "./components/Calendario";

function App() {
  const [pagina, setPagina] = useState("faltas");
  const alunoId = 1;
  const [data, setData] = useState({
    aluno: null,
    notas: [],
    turmas: [],
    chamadas: [],
    horarios: [],
    avisos: [],
    calendario: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const res = await fetch(`http://localhost:3000/api/dashboard/${alunoId}`);
        if (!res.ok) throw new Error('Erro ao buscar dashboard');
        const json = await res.json();
        setData(prev => ({ ...prev, ...json }));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchDashboard();
  }, [alunoId]);

  return (
    <>
      <Header titulo="Triledu - Dashboard" />
      <NavBar onSelectPage={setPagina} paginaAtiva={pagina} />
      <main style={{ maxWidth: 900, margin: "20px auto", padding: "0 16px" }}>
        <Card titulo="Informações do Aluno">
          {loading ? <div>Carregando...</div> :
            data.aluno ? (
              <div>
                <strong>{data.aluno.nome_aluno}</strong><br />
                RA: {data.aluno.ra_aluno} - Email: {data.aluno.email_aluno}
              </div>
            ) : <div>Aluno não encontrado</div>
          }
        </Card>

        <Card titulo="Conteúdo">
          {pagina === 'faltas' && <Faltas faltas={data.chamadas} />}
          {pagina === 'avisos' && <Avisos avisos={data.avisos} />}
          {pagina === 'horario' && <Horario horarios={data.horarios} turmas={data.turmas} />}
          {pagina === 'notas' && <Notas notas={data.notas} />}
          {pagina === 'calendario' && <Calendario calendario={data.calendario} />}
        </Card>
      </main>
    </>
  );
}

export default App;
