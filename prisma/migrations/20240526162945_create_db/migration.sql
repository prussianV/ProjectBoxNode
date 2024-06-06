-- CreateTable
CREATE TABLE `Adm` (
    `adm` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`adm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `turma` VARCHAR(191) NOT NULL,
    `id_armario` INTEGER NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_id_armario_key`(`id_armario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Armario` (
    `num_armario` INTEGER NOT NULL AUTO_INCREMENT,
    `local` VARCHAR(191) NOT NULL,
    `validade` DATETIME(3) NOT NULL,
    `reservado` BOOLEAN NOT NULL,
    `tamanho` ENUM('P', 'G') NOT NULL,
    `ocupado` BOOLEAN NOT NULL,
    `dt_pagt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Armario_num_armario_key`(`num_armario`),
    PRIMARY KEY (`num_armario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_id_armario_fkey` FOREIGN KEY (`id_armario`) REFERENCES `Armario`(`num_armario`) ON DELETE SET NULL ON UPDATE CASCADE;
