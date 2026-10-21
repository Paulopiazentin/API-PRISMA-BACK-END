
import { Request, Response } from "express";
import { adicionaLivroServico, buscaTodoslivrosServico, buscaUmLivroServico, editarLivroServico } from "../servico/LivrosServico";
import { deleteLivroServico } from "../servico/LivrosServico";
import { ILivros } from "../repositorio/LivrosRepositorio";



const buscaTodoslivros = async (req: Request, res: Response) => {
    try {
    const livros = await buscaTodoslivrosServico();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar livros" });
    }
}
const buscaUmLivro = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const livro = await buscaUmLivroServico(Number(id));
        res.status(200).json({
            'sucesso': true,
            'mensagem': 'Livro encontrado com sucesso',
            'livro': livro
        });
    } catch (erro) {
        res.status(500).json({ 
            'sucesso': false,
            'mensagem': 'Erro ao buscar livro',
            'livro': null
         });
    }
}

const adicionaLivroControle = async (req: Request, res: Response) => {
    const livroRequest: ILivros = req.body;
    try {
        const livro = await adicionaLivroServico(livroRequest);
        return res.status(201).json({
            'sucesso': livro.id > 0,
            'mensagem': 'Livro adicionado com sucesso',
            'idLivro': livro.id
        })
    } catch (error) {
        return res.status(500).json({
            'sucesso': false,
            'mensagem': 'Erro ao adicionar livro',
            'idLivro': null
        })
    }
}

const deleteLivroControle = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const livro = await deleteLivroServico(Number(id));
        return res.status(200).json({
            'sucesso': true,
            'mensagem': 'Livro deletado com sucesso',
            'livro': livro
        })
    } catch (erro) {
        return res.status(500).json({
            'sucesso': false,
            'mensagem': 'Erro ao deletar livro',
            'livro': null
        })
    }
}
const editarLivroControle = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const livroRequest: ILivros = req.body;
        const livro = await editarLivroServico(Number(id), livroRequest);
        return res.status(200).json({
            'sucesso': livro.id > 0,
            'mensagem': 'Livro editado com sucesso',
            'livro': livro
        })
    } catch (erro) {
        return res.status(500).json({
            'sucesso': false,
            'mensagem': 'Erro ao editar livro',
            'livro': null
        })
    }

}




export { buscaTodoslivros, adicionaLivroControle, buscaUmLivro, deleteLivroControle, editarLivroControle };