import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

let filmes = [
  { id: 1, titulo: "O Poderoso Chefão", ano: 1972, genero: "Drama" },
  { id: 2, titulo: "Matrix", ano: 1999, genero: "Ficção Científica" }
];

app.get('/filmes', (req, res) => {
  res.status(200).json(filmes);
});

app.get('/filmes/:id', (req, res) => {
  const id = Number(req.params.id);
  const filme = filmes.find(f => f.id === id);

  if (!filme) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  res.status(200).json(filme);
});

app.post('/filmes', (req, res) => {
  const { titulo, ano, genero } = req.body ?? {};

  if (!titulo || !ano || !genero) {
    return res.status(400).json({
      erro: "Todos os campos (titulo, ano, genero) são obrigatórios"
    });
  }

  const novoId = filmes.length > 0
    ? Math.max(...filmes.map(f => f.id)) + 1
    : 1;

  const novoFilme = { id: novoId, titulo, ano, genero };
  filmes.push(novoFilme);

  res.status(201).json(novoFilme);
});

app.put('/filmes/:id', (req, res) => {
  const id = Number(req.params.id);
  const filme = filmes.find(f => f.id === id);

  if (!filme) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  const { titulo, ano, genero } = req.body ?? {};

  if (!titulo || !ano || !genero) {
    return res.status(400).json({
      erro: "Todos os campos (titulo, ano, genero) são obrigatórios"
    });
  }

  filme.titulo = titulo;
  filme.ano = ano;
  filme.genero = genero;

  res.status(200).json(filme);
});

app.delete('/filmes/:id', (req, res) => {
  const id = Number(req.params.id);
  const indice = filmes.findIndex(f => f.id === id);

  if (indice === -1) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  filmes.splice(indice, 1);

  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`API UnexFlix rodando em http://localhost:${PORT}`);
});