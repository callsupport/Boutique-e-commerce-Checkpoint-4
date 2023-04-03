-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema support_join
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema support_join
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `support_join` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
-- -----------------------------------------------------
-- Schema phone_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema phone_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `phone_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `support_join` ;

-- -----------------------------------------------------
-- Table `support_join`.`cable`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `support_join`.`cable` (
  `idcable` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(45) NOT NULL,
  `image` BLOB NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` FLOAT NOT NULL,
  PRIMARY KEY (`idcable`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `support_join`.`cases`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `support_join`.`cases` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `brand` TEXT NOT NULL,
  `image` BLOB NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` FLOAT NOT NULL,
  `qty` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `support_join`.`glass`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `support_join`.`glass` (
  `idglass` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(45) NOT NULL,
  `image` BLOB NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` FLOAT NOT NULL,
  PRIMARY KEY (`idglass`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `support_join`.`card`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `support_join`.`card` (
  `idcard` INT NOT NULL,
  `cases_id` INT NOT NULL,
  `glass_idglass` INT NOT NULL,
  `cable_idcable` INT NOT NULL,
  `total` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`idcard`),
  INDEX `fk_card_cases_idx` (`cases_id` ASC) VISIBLE,
  INDEX `fk_card_glass1_idx` (`glass_idglass` ASC) VISIBLE,
  INDEX `fk_card_cable1_idx` (`cable_idcable` ASC) VISIBLE,
  CONSTRAINT `fk_card_cable1`
    FOREIGN KEY (`cable_idcable`)
    REFERENCES `support_join`.`cable` (`idcable`),
  CONSTRAINT `fk_card_cases`
    FOREIGN KEY (`cases_id`)
    REFERENCES `support_join`.`cases` (`id`),
  CONSTRAINT `fk_card_glass1`
    FOREIGN KEY (`glass_idglass`)
    REFERENCES `support_join`.`glass` (`idglass`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `support_join`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `support_join`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `support_join`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `support_join`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `support_join`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `support_join`.`carts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `product_id` (`product_id` ASC) VISIBLE,
  CONSTRAINT `carts_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `support_join`.`users` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `carts_ibfk_2`
    FOREIGN KEY (`product_id`)
    REFERENCES `support_join`.`products` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `support_join`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `support_join`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `total` DECIMAL(10,2) NOT NULL,
  `date` DATETIME NOT NULL,
  `status` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `orders_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `support_join`.`users` (`id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `support_join`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `support_join`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_UN` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `phone_db` ;

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
  `image` BLOB NOT NULL,
  PRIMARY KEY (`product_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


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
