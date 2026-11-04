import {buscaTodosEmprestimosRepositorio, buscaUmEmprestimoRepositorio, IEmprestimos, adicionarEmprestimoRepositorio} from "../repositorio/EmprestimosRepositorio";


const buscaTodosEmprestimosServico = async () => {

    try {

        const emprestimo = await buscaTodosEmprestimosRepositorio();
        return emprestimo;
    } catch (erro) {
        throw erro;
    }
}
const buscaUmEmprestimoServico = async (id: number) => {
    try{
        if (id === 0){
            throw('Passe um valor para busca')
        }const emprestimo = await buscaUmEmprestimoRepositorio(id);
        return emprestimo;
    } catch(erro) {
        throw (erro);
    }
    
}

const adicionarEmprestimoServico = async (emprestimo: IEmprestimos) => {
const { ID_Emprestimo, ID_Livro, DT_Inicio, ID_Aluno, DT_Fim, Observacao } = emprestimo;

  try {
    if (
      ID_Emprestimo === null ||
      ID_Aluno === null ||
      ID_Livro === null ||
      DT_Inicio === null ||
      DT_Fim  === null ||
      Observacao === null
    ) {
      throw "Verifique se nenhuma informação está vazia";
    }

    if(
        ID_Aluno <= 0 ||
        ID_Livro <= 0
    ){
        throw "Verifique se o ID do livro e do aluno são válidos";
    }
    
     const novoEmprestimo: IEmprestimos = {
      ID_Emprestimo: null,
      ID_Livro: emprestimo.ID_Livro,
      DT_Inicio: emprestimo.DT_Inicio,
      ID_Aluno: emprestimo.ID_Aluno,
      DT_Fim: emprestimo.DT_Fim,
      Observacao: emprestimo.Observacao,
    };

    const resultado = await adicionarEmprestimoRepositorio(novoEmprestimo);
    return resultado;
  }
  catch (erro){
    throw erro;
  }
}

export { buscaTodosEmprestimosServico, buscaUmEmprestimoServico, adicionarEmprestimoServico };