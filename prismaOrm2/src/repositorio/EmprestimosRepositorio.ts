import { prisma } from "../prisma";

const buscaTodosEmprestimosRepositorio = async () => {
    const emprestimos = await prisma.emprestimos.findMany();
    return emprestimos;
}
 
 export {
    buscaTodosEmprestimosRepositorio
 }