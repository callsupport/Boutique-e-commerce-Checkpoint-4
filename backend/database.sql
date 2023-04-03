-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema phone_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema phone_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `phone_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `support_join` ;

-- -----------------------------------------------------

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
