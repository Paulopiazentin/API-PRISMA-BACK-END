-- CreateTable
CREATE TABLE `Emprestimos` (
    `ID_Emprestimo` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Livro` INTEGER NOT NULL,
    `ID_Aluno` INTEGER NOT NULL,
    `DT_Inicio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `DT_Fim` DATETIME(3) NOT NULL,
    `Observacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID_Emprestimo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Emprestimos` ADD CONSTRAINT `Emprestimos_ID_Aluno_fkey` FOREIGN KEY (`ID_Aluno`) REFERENCES `Alunos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprestimos` ADD CONSTRAINT `Emprestimos_ID_Livro_fkey` FOREIGN KEY (`ID_Livro`) REFERENCES `Livros`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
