import { Request, Response } from "express";
import { IEmprestimos } from "../repositorio/EmprestimosRepositorio";
import{buscaTodosEmprestimosServico, buscaUmEmprestimoServico, adicionarEmprestimoServico} from "../servico/EmprestimosServico";


const adicionaEmprestimoControle = async (req: Request, res: Response) => {
    const emprestimoRequest: IEmprestimos = req.body;
    try {
        const emprestimo = await adicionarEmprestimoServico(emprestimoRequest);
        return res.status(201).json({
            'sucesso': emprestimo.ID_Emprestimo > 0,
            'mensagem': 'Empréstimo adicionado com sucesso',
            'idEmprestimo': emprestimo.ID_Emprestimo
        })
    } catch (error) {
        return res.status(500).json({
            'sucesso': false,
            'mensagem': 'Erro ao adicionar empréstimo',
            'idEmprestimo': null
        })
    }

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
    const { id } = req.params;
    try {
        const emprestimo = await buscaUmEmprestimoServico (Number(id));
        res.status(200).json({
            'sucesso': true,
            'mensagem': 'Empréstimo encontrado com sucesso',
            'emprestimo': emprestimo
        });
    } catch (erro) {
        res.status(500).json({ 
            'sucesso': false,
            'mensagem': 'Erro ao buscar empréstimo',
            'emprestimo': null
         });
    }
}

export { adicionaEmprestimoControle, devolucaoEmprestimoControle, editarEmprestimoControle, buscaTodosEmprestimos, pegarEmprestimoPorIdControle };