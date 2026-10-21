import { prisma } from "../prisma";
import { buscaTodoslivros, adicionaLivroControle, buscaUmLivro, deleteLivroControle, editarLivroControle }  from "../controle/LivrosControle";
import { Router } from "express";

const router = Router();
// Rota para buscar todos os livros ou 1 livro específico
router.get("/", buscaTodoslivros);
router.get("/:id", buscaUmLivro);
// Rota para adicionar um novo livro
router.post("/", adicionaLivroControle);
// Rota para deletar um livro
router.delete("/:id", deleteLivroControle);
// Rota para atualizar um livro
router.put("/:id", editarLivroControle);
export default router;