/*
  Warnings:

  - Added the required column `cod_usuario` to the `Alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Alunos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alunos` ADD COLUMN `cod_usuario` VARCHAR(191) NOT NULL,
    ADD COLUMN `senha` VARCHAR(191) NOT NULL;
