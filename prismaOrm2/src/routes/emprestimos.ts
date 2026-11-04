import { Router } from "express";
import { adicionaEmprestimoControle, devolucaoEmprestimoControle, editarEmprestimoControle, buscaTodosEmprestimos, pegarEmprestimoPorIdControle }    from "../controle/emprestimoscontrole";
const router = Router();

router.post("/", adicionaEmprestimoControle)
router.put("/", devolucaoEmprestimoControle)
router.put("/Devolucao", editarEmprestimoControle)
router.get("/", buscaTodosEmprestimos)
router.get("/:id", pegarEmprestimoPorIdControle)

export default router;