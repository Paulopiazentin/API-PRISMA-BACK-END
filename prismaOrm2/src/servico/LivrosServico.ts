import {
    buscaTodoslivrosRepositorio, 
    adicionarLivroRepositorio,
    ILivros,
    buscaUmLivroRepositorio,
    deleteLivroRepositorio,
    editarLivroRepositorio
} from "../repositorio/LivrosRepositorio";


const buscaTodoslivrosServico = async () => {
    const livros = await buscaTodoslivrosRepositorio();
    return livros;
}
const buscaUmLivroServico = async (id: number) => {
    try{
        if (id === 0){
            throw('Passe um valor para busca')
        }const livro = await buscaUmLivroRepositorio(id);
        return livro;
    } catch(erro) {
        throw (erro);
    }
}

const adicionaLivroServico = async (livro: ILivros) => {
    const {
    titulo,
    autor,
    editora, 
    anoPublicacao,
} = livro;

    try {

        if (titulo === null || autor === null || editora === null || anoPublicacao === null) {
            throw("Verifique se todos os campos foram preenchidos corretamente.");
        }
        const resultado = await adicionarLivroRepositorio(livro);
        return resultado;
    } catch(erro) {
        throw (erro);
    }
}
const deleteLivroServico = async (id: number) => {
    try{
        if (id === 0){
            throw('Passe um valor para busca')
        }
        const existelivro = await buscaUmLivroServico(id);
        if (!existelivro) {
            throw('Livro não encontrado');
        }
        const livro = await deleteLivroRepositorio(id);
        return livro;
    } catch(erro) {
        throw (erro);
    }
}

const editarLivroServico = async (id: number, data: ILivros) => {
    try{
        if (id === 0){
            throw('Passe um valor para busca')
        }
        const existelivro = await buscaUmLivroServico(id);
        if (!existelivro) {
            throw('Livro não encontrado');
        }
        if (data.titulo === null ||
            data.autor === null ||
             data.editora === null || 
             data.anoPublicacao === null) {
            throw("Verifique se todos os campos foram preenchidos corretamente.");
        }
        const livro = await editarLivroRepositorio(id, data);
        return livro;
    } catch(erro) {
        throw (erro);
    }
}


export { buscaTodoslivrosServico, adicionaLivroServico, buscaUmLivroServico, deleteLivroServico, editarLivroServico };