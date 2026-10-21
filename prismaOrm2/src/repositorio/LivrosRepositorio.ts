import { prisma } from "../prisma";
import { buscaTodosAlunosRepositorio } from "./AlunosRepositorio";

interface ILivros {
    id: number | null;
    titulo: string;
    autor: string;
    editora: string;
    anoPublicacao: number;
    criado_em?: Date;
}
const buscaTodoslivrosRepositorio = async () => {
    const livros = await prisma.livros.findMany();
    return livros;
}
const buscaUmLivroRepositorio = async (id: number) => {
    const livro = await prisma.livros.findUnique({
        where: { id }
    });
    return livro;
}
const adicionarLivroRepositorio = async (data: ILivros) => {
    const livros = await prisma.livros.create({
        data: { 
            titulo: data.titulo,
            autor: data.autor,
            editora: data.editora,
            anoPublicacao: data.anoPublicacao,
        }
});
    return livros;

  
};
const deleteLivroRepositorio = async (id: number) => {
    const livro = await prisma.livros.delete({
        where: { id : id}
    });
    return livro; 
}

const editarLivroRepositorio = async (id: number, data: ILivros) => {
    const editaLivro = await prisma.livros.update({
        where: { id },
        data: {
            titulo: data.titulo,
            autor: data.autor,
            editora: data.editora,
            anoPublicacao: data.anoPublicacao,
        }
    });
    return editaLivro;
}



export { buscaTodoslivrosRepositorio, adicionarLivroRepositorio, ILivros, buscaUmLivroRepositorio, deleteLivroRepositorio, editarLivroRepositorio };