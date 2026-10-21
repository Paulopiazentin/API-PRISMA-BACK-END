import { prisma } from "../prisma";

interface IAluno {
    id: number | null;
    nome: string;
    cod_usuario: string;
    senha: string;
    email: string;
    idade: number;
    criado_em?: Date;
}
const buscaTodosAlunosRepositorio = async () => {
    const alunos = await prisma.alunos.findMany();
    return alunos;
}
const buscaUmAlunoRepositorio = async (id: number) => {
    const aluno = await prisma.alunos.findUnique({
        where: { id }
    });
    return aluno;
}
const adicionarAlunoRepositorio = async (data: IAluno) => {
    const alunos = await prisma.alunos.create({
        data: { 
            nome: data.nome,
            cod_usuario: data.cod_usuario,

            senha: data.senha,
            email: data.email,
            idade: data.idade,
        }
});
    return alunos;

  
};
const deleteAlunoRepositorio = async (id: number) => {
    const aluno = await prisma.alunos.delete({
        where: { id :id}
    });
    return aluno; 
}

const editarAlunoRepositorio = async (id: number, data: IAluno) => {
    const editaAluno = await prisma.alunos.update({
        where: { id },
        data: {
            nome: data.nome,
            cod_usuario: data.cod_usuario,
            senha: data.senha,
            email: data.email,
            idade: data.idade,
        }
    });
    return editaAluno;
}

const buscardadosloginRepositorio = async (email: string | '', cod_usuario: string | '') => {
    const alunos = await prisma.alunos.findFirst({
        where: {
            OR: [
                {email: email},
                {cod_usuario: cod_usuario}
            ]
        }
    })
    return alunos;
}

export { buscaTodosAlunosRepositorio, adicionarAlunoRepositorio, IAluno, buscaUmAlunoRepositorio, deleteAlunoRepositorio, editarAlunoRepositorio, buscardadosloginRepositorio };