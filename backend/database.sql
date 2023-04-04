-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- Schema phone_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema phone_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `phone_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;

-- -----------------------------------------------------
-- Table `phone_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phone_db`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `phone_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phone_db`.`products` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `category` ENUM('film', 'coque', 'chargeur') NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`product_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
INSERT INTO products (name, description, price, category, image)
VALUES
('XIAOMI 13', 'Coque Xiaomi 13 Hybride Coins Renforcés Antichocs, Design Nid d Abeille - Noir', 14.90, 'coque', 'coquexiaomi.webp'),
('SAMSUNG GALAXY A34 5G', 'Coque Galaxy A34 5G en Silicone Gel Souple, Finition Mate Anti-traces - Noir', 14.90, 'coque', 'coquesamsung.webp'),
('IPHONE 14', 'Coque Silicone iPhone 14, Design Métal Brossé Effet Carbone - Noir', 12.90, 'coque', 'applecoque.webp'),
('HUAWEI NOVA 10', 'Coque Antichoc Huawei Nova 10 avec Dos Rigide et Bloc Caméra Surélevé - Noir', 14.90, 'coque', '/huaweicoque.webp'),
('SAMSUNG GALAXY A40E', 'Protection Écran Samsung Galaxy A04e Verre Hybride Fin et Résistant, 3mk Série FlexibleGlass Lite - Transparent', '16.90', 'film', '/filmsamsung.webp'),
('XIAOMI WATCH S2 46MM', 'Films Écran Xiaomi Watch S2 46mm, Pack de 3 protection Incassable Auto-régénérante et Ultra-fine, 3mk Série Arc - Transparent', '19.90', 'film', '/xiaomifilm.webp'),
('HUAWEI MATEPAD PRO 11', 'Verre Trempé Huawei MatePad Pro 11, Résistant 9H et Anti-explosion - Transparent', '19.90', 'film', '/huaweifilm.webp'),
('IPHONE 13 ET 13 PRO', 'Verre Trempé iPhone 13 et 13 Pro avec Cache Caméra, Panzer Glass - Noir', '34.90', 'film', '/applefilm.webp'),
('XIAOMI REDMI NOTE 11 5G', 'Câble USB 2.0 vers Micro-USB, Quick Charge et Synchronisation des données 1,2 m - Noir', '9.90', 'chargeur', '/data-bstar-usbc-r.webp'),
('SAMSUNG GALAXY A40E', 'Câble Micro-USB Charge + Transfert PC d Origine LG DK-100M', '9.90', 'chargeur', '/samsung.webp'),
('HUAWEI WATCH GT3 PRO, GT3, GT2', 'Chargeur Sans Fil pour Huawei Watch GT 3 / GT 3 Pro / GT 2 Pro / GT Runner + Câble USB vers USB-C - Blanc', '16.90', 'chargeur', '/huawei.webp'),
('APPLE LIGHTNING', 'Cable iPhone - iPad Original Apple long. 2m connect. Lightning - Apple MD819ZM/A', '24.90', 'chargeur', '/apple.webp');
-- -----------------------------------------------------
-- Table `phone_db`.`product_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phone_db`.`product_items` (
  `item_id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL DEFAULT '1',
  PRIMARY KEY (`item_id`),
  INDEX `product_id` (`product_id` ASC) VISIBLE,
  CONSTRAINT `product_items_ibfk_1`
    FOREIGN KEY (`product_id`)
    REFERENCES `phone_db`.`products` (`product_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `phone_db`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `phone_db`.`cart` (
  `cart_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `item_id` INT NOT NULL,
  PRIMARY KEY (`cart_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `item_id` (`item_id` ASC) VISIBLE,
  CONSTRAINT `cart_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `phone_db`.`users` (`user_id`),
  CONSTRAINT `cart_ibfk_2`
    FOREIGN KEY (`item_id`)
    REFERENCES `phone_db`.`product_items` (`item_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
