import { Router } from "express";
import { adicionaEmprestimoControle, devolucaoEmprestimoControle, editarEmprestimoControle, buscaTodosEmprestimos, pegarEmprestimoPorIdControle }    from "../controle/emprestimoscontrole";
const router = Router();

router.post("/", adicionaEmprestimoControle)//ok
router.put("/", devolucaoEmprestimoControle)
router.put("/Devolucao", editarEmprestimoControle)
router.get("/", buscaTodosEmprestimos) //ok
router.get("/:id", pegarEmprestimoPorIdControle) //ok

export default router;