import { Request, Response } from "express";
import{buscaTodosEmprestimosServico} from "../servico/EmprestimosServico";


const adicionaEmprestimoControle = async (req: Request, res: Response) => {

}
const devolucaoEmprestimoControle = async (req: Request, res: Response) => {
    
}
const editarEmprestimoControle = async (req: Request, res: Response) => {
    
}
const buscaTodosEmprestimos = async (req: Request, res: Response) => {
    
    try {
        const emprestimos = await buscaTodosEmprestimosServico();
        res.status(200).json({
            sucesso: true,
            mensagem: "Empréstimos encontrados com sucesso",
            emprestimos: emprestimos
        });
    } catch (error) {
        res.status(500).json({ 
            sucesso: false,
            mensagem: error,
            emprestimos: null
        });
    }
}
const pegarEmprestimoPorIdControle = async (req: Request, res: Response) => {
    
}

export { adicionaEmprestimoControle, devolucaoEmprestimoControle, editarEmprestimoControle, buscaTodosEmprestimos, pegarEmprestimoPorIdControle };