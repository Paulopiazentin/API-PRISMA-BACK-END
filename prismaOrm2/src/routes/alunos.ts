import { Router } from "express";
import { prisma } from "../prisma";
import { adicionaAlunoControle, buscardadosloginControle, buscaTodosAlunos, buscaUmAluno, deleteAlunoControle,editarAlunoControle } from "../controle/AlunosControle";

const router = Router();
// Rota para buscar todos os alunos ou 1 aluno específico
router.get("/", buscaTodosAlunos);
router.get("/:id", buscaUmAluno);
// Rota para adicionar um novo aluno
router.post("/", adicionaAlunoControle);
// Rota para deletar um aluno
router.delete("/:id", deleteAlunoControle);
// Rota para atualizar um aluno
router.put("/:id", editarAlunoControle);
// login
router.post("/login", buscardadosloginControle);
export default router;