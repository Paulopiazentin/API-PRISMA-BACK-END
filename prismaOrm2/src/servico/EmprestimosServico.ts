import {buscaTodosEmprestimosRepositorio} from "../repositorio/EmprestimosRepositorio";


const buscaTodosEmprestimosServico = async () => {

    try {

        const emprestimos = await buscaTodosEmprestimosRepositorio();
        return emprestimos;
    } catch (erro) {
        throw erro;
    }
}

export { buscaTodosEmprestimosServico};