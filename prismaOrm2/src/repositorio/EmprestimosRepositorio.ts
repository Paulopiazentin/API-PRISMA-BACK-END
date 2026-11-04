import { prisma } from "../prisma";

interface IEmprestimos {
  ID_Emprestimo: number | null 
  ID_Livro     : number
  ID_Aluno     : number
  DT_Inicio    : Date
  DT_Fim       : Date
  Observacao   : string
}


const buscaTodosEmprestimosRepositorio = async () => {
    const emprestimos = await prisma.emprestimos.findMany();
    return emprestimos;
}

const buscaUmEmprestimoRepositorio = async (ID_Emprestimo: number) => {
    const emprestimo = await prisma.emprestimos.findUnique({
        where: { ID_Emprestimo }
    });
    return emprestimo;
}

const adicionarEmprestimoRepositorio = async (data: IEmprestimos) => {

    const emprestimos = await prisma.emprestimos.create({
        data: { 
            ID_Livro: data.ID_Livro,
            DT_Inicio: data.DT_Inicio,
            ID_Aluno: data.ID_Aluno,
            DT_Fim: data.DT_Fim,
            Observacao: data.Observacao,
        }
});
    return emprestimos;
  
};

 export {
    buscaTodosEmprestimosRepositorio,
    buscaUmEmprestimoRepositorio,
    IEmprestimos,
    adicionarEmprestimoRepositorio
 }