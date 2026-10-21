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

const adicionaAlunoServico = async (aluno: IAluno) => {
    const {
    nome,
    cod_usuario,
    senha, 
    email,
    idade,
} = aluno;

    try {

        if (nome === null || cod_usuario === null || senha === null || email === null || idade === null) {
            throw("Verifique se todos os campos foram preenchidos corretamente.");
        }
        const resultado = await adicionarAlunoRepositorio(aluno);
        return resultado;
    } catch(erro) {
        throw (erro);
    }
}
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
        const aluno = await editarAlunoRepositorio(id, data);
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
        const aluno = await buscardadosloginRepositorio(usuario, senha);

        if (aluno?.senha !== senha) {
            throw('Usuario ou Senha incorreta');
        }
        return aluno.id;

    } catch(erro) {
        throw (erro);
    }
}

export { buscaTodosAlunosServico, adicionaAlunoServico, buscaUmAlunoServico, deleteAlunoServico, editarAlunoServico, buscardadosloginServico, IloginAluno };