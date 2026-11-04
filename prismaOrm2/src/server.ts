import express from "express";
// npm i --save-dev @types/express
import alunosRouter from "./routes/alunos";
import livrosRouter from "./routes/livros";
import emprestimosRouter from "./routes/emprestimos";
const app = express();
const PORT = 3000;
app.use(express.json());    
app.use("/alunos", alunosRouter);
app.use("/livros", livrosRouter);
app.use("/emprestimos", emprestimosRouter);

// Autores

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost:${PORT}`)
});