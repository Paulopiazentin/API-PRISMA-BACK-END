import {Request, Response} from "express";
import { adicionarAlunoServico, buscaTodosAlunosServico, buscaUmAlunoServico 
} from "../servico/AlunosServico";
import {deleteAlunoServico} from "../servico/AlunosServico";
import { IAluno } from "../repositorio/AlunosRepositorio";
import { editarAlunoServico } from "../servico/AlunosServico";
import { buscardadosloginServico } from "../servico/AlunosServico";
import { IloginAluno } from "../servico/AlunosServico";
import alunos from "../routes/alunos";

const buscaTodosAlunos = async (req: Request, res: Response) => {
    try {
        const alunos = await buscaTodosAlunosServico();
        res.status(200).json(alunos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar alunos" });
    }
}
const buscaUmAluno = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const aluno = await buscaUmAlunoServico(Number(id));
        res.status(200).json({
            'sucesso': true,
            'mensagem': 'Aluno encontrado com sucesso',
            'aluno': aluno
        });
    } catch (erro) {
        res.status(500).json({ 
            'sucesso': false,
            'mensagem': 'Erro ao buscar aluno',
            'aluno': null
         });
    }
}

const adicionaAlunoControle = async (req: Request, res: Response) => {
    const alunoRequest: IAluno = req.body;
    try {
        const aluno = await adicionarAlunoServico(alunoRequest);
        return res.status(201).json({
            'sucesso': aluno.id > 0,
            'mensagem': 'Aluno adicionado com sucesso',
            'idAluno': aluno.id
        })
    } catch (error) {
        return res.status(500).json({
            'sucesso': false,
            'mensagem': 'Erro ao adicionar aluno',
            'idAluno': null
        })
    }
}

const deleteAlunoControle = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const aluno = await deleteAlunoServico(Number(id));
        return res.status(200).json({
            'sucesso': true,
            'mensagem': 'Aluno deletado com sucesso',
            'aluno': aluno
        })
    } catch (erro) {
        return res.status(500).json({
            'sucesso': false,
            'mensagem': 'Erro ao deletar aluno',
            'aluno': null
        })
    }
}
const editarAlunoControle = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const alunoRequest: IAluno = req.body;
        const aluno = await editarAlunoServico(Number(id), alunoRequest);
        return res.status(200).json({
            'sucesso': aluno.id > 0,
            'mensagem': 'Aluno editado com sucesso',
            'aluno': aluno
        })
    } catch (erro) {
        return res.status(500).json({
            'sucesso': false,
            'mensagem': 'Erro ao editar aluno',
            'aluno': null
        })
    }

}
const buscardadosloginControle = async (req: Request, res: Response) => {
    const login: IloginAluno = req.body;
    try {
        const aluno = await buscardadosloginServico(login);
        return res.status(200).json({
            'sucesso': aluno > 0,
            'mensagem': 'Login realizado com sucesso',
            'idAluno': aluno
        })
    } catch (erro) {
        return res.status(500).json({
            'sucesso': false,
            'mensagem': erro,
            'idAluno': null
        })
    }
}



export { buscaTodosAlunos, adicionaAlunoControle, buscaUmAluno, deleteAlunoControle, editarAlunoControle, buscardadosloginControle };