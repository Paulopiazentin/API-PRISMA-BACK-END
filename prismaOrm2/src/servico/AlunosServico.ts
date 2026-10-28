import { gerarToken, hash } from "../Utils/criptografia";
import {
    buscaTodosAlunosRepositorio,
    adicionarAlunoRepositorio,
    IAluno,
    buscaUmAlunoRepositorio,
    deleteAlunoRepositorio,
    editarAlunoRepositorio,
    buscardadosloginRepositorio
} from "../repositorio/AlunosRepositorio";


const buscaTodosAlunosServico = async () => {
    const alunos = await buscaTodosAlunosRepositorio();
    return alunos;
}
const buscaUmAlunoServico = async (id: number) => {
    try{
        if (id === 0){
            throw('Passe um valor para busca')
        }const aluno = await buscaUmAlunoRepositorio(id);
        return aluno;
    } catch(erro) {
        throw (erro);
    }
}

const adicionarAlunoServico = async (aluno: IAluno) => {
  const { cod_usuario, nome, email, senha, idade } = aluno;

  try {
    if (
      cod_usuario === null ||
      email === null ||
      nome === null ||
      senha === null ||
      idade === null
    ) {
      throw "Verifique se nenhuma informação está vazia";
    }

    const novoAluno: IAluno = {
      id: aluno.id,
      cod_usuario: aluno.cod_usuario,
      email: aluno.email,
      senha: hash(aluno.senha),
      nome: aluno.nome,
      idade: aluno.idade,
    };

    const resultado = await adicionarAlunoRepositorio(novoAluno);
    return resultado;
  } catch (error) {
    throw error;
  }
};
const deleteAlunoServico = async (id: number) => {
    try{
        if (id === 0){
            throw('Passe um valor para busca')
        }
        const existealuno = await buscaUmAlunoServico(id);
        if (!existealuno) {
            throw('Aluno não encontrado');
        }
        const aluno = await deleteAlunoRepositorio(id);
        return aluno;
    } catch(erro) {
        throw (erro);
    }
}

const editarAlunoServico = async (id: number, data: IAluno) => {
    try{
        if (id === 0){
            throw('Passe um valor para busca')
        }
        const existealuno = await buscaUmAlunoServico(id);
        if (!existealuno) {
            throw('Aluno não encontrado');
        }
        if (data.nome === null ||
            data.cod_usuario === null ||
             data.senha === null || 
             data.email === null || 
             data.idade === null) {
            throw("Verifique se todos os campos foram preenchidos corretamente.");
        }

        const editarDadosAluno: IAluno = {
            id: id,
            nome: data.nome,
            cod_usuario: data.cod_usuario,
            senha: hash(data.senha),
            email: data.email,
            idade: data.idade,
        }

        const aluno = await editarAlunoRepositorio(id, editarDadosAluno);
        return aluno;
    } catch(erro) {
        throw (erro);
    }
}

interface IloginAluno {
    usuario: string | '';
    senha: string | '';
}
const buscardadosloginServico = async (data: IloginAluno) => {

    try {
        const { usuario, senha } = data;
        const aluno = await buscardadosloginRepositorio(usuario, usuario);

        if (aluno?.senha !== hash(senha)) {
            throw('Usuario ou Senha incorreta');
        }

        const token = gerarToken(aluno.id);

        const resultado = {
            "sucesso": aluno.id > 0,
            "mensagem": "Login realizado com sucesso",
            "token": token,
        }

        return resultado;

    } catch(erro) {
        throw (erro);
    }
}

export { buscaTodosAlunosServico, adicionarAlunoServico, buscaUmAlunoServico, deleteAlunoServico, editarAlunoServico, buscardadosloginServico, IloginAluno };