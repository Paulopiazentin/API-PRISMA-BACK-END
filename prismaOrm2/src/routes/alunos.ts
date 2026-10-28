import { Router } from "express";
import { prisma } from "../prisma";
import { adicionaAlunoControle, buscardadosloginControle, buscaTodosAlunos, buscaUmAluno, deleteAlunoControle,editarAlunoControle } from "../controle/AlunosControle";
import { validartoken } from "../Utils/criptografia";

const router = Router();
// Rota para buscar todos os alunos ou 1 aluno específico
router.get("/", validartoken,buscaTodosAlunos);
router.get("/:id", validartoken, buscaUmAluno);
// Rota para adicionar um novo aluno
router.post("/", validartoken, adicionaAlunoControle);
// Rota para deletar um aluno
router.delete("/:id", validartoken, deleteAlunoControle);
// Rota para atualizar um aluno
router.put("/:id", validartoken, editarAlunoControle);
// login
router.post("/login",buscardadosloginControle);
export default router;