/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80030 (8.0.30)
 Source Host           : localhost:3306
 Source Schema         : ecommerce_website

 Target Server Type    : MySQL
 Target Server Version : 80030 (8.0.30)
 File Encoding         : 65001

 Date: 09/06/2023 21:59:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for accessory
-- ----------------------------
DROP TABLE IF EXISTS `accessory`;
CREATE TABLE `accessory`  (
  `id` int NOT NULL,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  CONSTRAINT `accessory_id` FOREIGN KEY (`id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of accessory
-- ----------------------------
INSERT INTO `accessory` VALUES (1, 'test cate');
INSERT INTO `accessory` VALUES (2, 'test cate');
INSERT INTO `accessory` VALUES (3, 'test cate');
INSERT INTO `accessory` VALUES (4, 'test cate');
INSERT INTO `accessory` VALUES (5, 'test cate');

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `address1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `province` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `zip_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_address`(`user_id` ASC) USING BTREE,
  CONSTRAINT `user_address` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES (1, 1, '123 XXX Street', NULL, 'Toronto', 'ON', 'Canada', 'MXC XGX', 'John', 'Smith');
INSERT INTO `address` VALUES (2, 1, '456 AAA Dr', NULL, 'Toronto', 'ON', 'Canada', 'MXM XCX', 'Tim', 'Smith');

-- ----------------------------
-- Table structure for camera
-- ----------------------------
DROP TABLE IF EXISTS `camera`;
CREATE TABLE `camera`  (
  `id` int NOT NULL,
  `release_date` date NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  CONSTRAINT `camera_id` FOREIGN KEY (`id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of camera
-- ----------------------------
INSERT INTO `camera` VALUES (6, '2023-05-11');
INSERT INTO `camera` VALUES (7, '2023-05-27');
INSERT INTO `camera` VALUES (8, '2023-05-04');
INSERT INTO `camera` VALUES (9, '2023-05-01');
INSERT INTO `camera` VALUES (10, '2023-05-18');

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `prod_id` int NULL DEFAULT NULL,
  `prod_num` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `cart_user_id`(`user_id` ASC) USING BTREE,
  INDEX `cart_prod_id`(`prod_id` ASC) USING BTREE,
  CONSTRAINT `cart_prod_id` FOREIGN KEY (`prod_id`) REFERENCES `product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `cart_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES (2, 1, 7, 1);
INSERT INTO `cart` VALUES (4, 1, 8, 1);
INSERT INTO `cart` VALUES (9, 1, 9, 2);
INSERT INTO `cart` VALUES (10, 1, 6, 1);

-- ----------------------------
-- Table structure for django_migrations
-- ----------------------------
DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE `django_migrations`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `app` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of django_migrations
-- ----------------------------

-- ----------------------------
-- Table structure for lens
-- ----------------------------
DROP TABLE IF EXISTS `lens`;
CREATE TABLE `lens`  (
  `id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  CONSTRAINT `lens_id` FOREIGN KEY (`id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of lens
-- ----------------------------
INSERT INTO `lens` VALUES (11);
INSERT INTO `lens` VALUES (12);
INSERT INTO `lens` VALUES (13);
INSERT INTO `lens` VALUES (14);
INSERT INTO `lens` VALUES (15);

-- ----------------------------
-- Table structure for payment_card
-- ----------------------------
DROP TABLE IF EXISTS `payment_card`;
CREATE TABLE `payment_card`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `card_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `card_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `valid_date` date NULL DEFAULT NULL,
  `cvv` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `card_user`(`user_id` ASC) USING BTREE,
  CONSTRAINT `card_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of payment_card
-- ----------------------------
INSERT INTO `payment_card` VALUES (1, 1, 'credit', '123456789ABCDEFG', '2029-07-13', '123');
INSERT INTO `payment_card` VALUES (2, 1, 'debit', 'ABCDEFGH12345678', '2029-07-13', '456');
INSERT INTO `payment_card` VALUES (3, 2, 'credit', '753289512ERFGSDCF', '2027-06-16', '753');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `model_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `manufacturer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `retail_price` decimal(10, 2) NULL DEFAULT NULL,
  `num_in_stock` int NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, 'MT-33 Camera Tripod', 'ULANZI', 27.95, 14, 'https://m.media-amazon.com/images/I/61+Wp2qMx3L._AC_SX466_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (2, '67 Inch Heavy Duty Tripod', 'Eicanus', 36.99, 5, 'https://m.media-amazon.com/images/I/71I+Q2wKdFL._AC_SX466_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (3, 'Leather Camera Backpack Bag', 'Endurax', 69.99, 2, 'https://m.media-amazon.com/images/I/718b9HptW0L._AC_SX466_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (4, 'Camera Lens Rain Cover', 'Kiorafoto', 7.99, 3, 'https://m.media-amazon.com/images/I/71l0y6xt1vS._AC_SX679_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (5, 'VL100C Bi-Color LED Video Light', 'VIJIM', 19.95, 6, 'https://m.media-amazon.com/images/I/61GgRmStCfL._AC_SX466_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (6, 'EOS Rebel T7 DSLR ', 'Canon', 539.00, 20, 'https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_SX425_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (7, 'FHD 1080P Kids Camera', 'CAMKORY', 69.99, 10, 'https://m.media-amazon.com/images/I/6121MRPGyJL._AC_SY450_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (8, '48MP Vlogging Camera', 'Femivo', 179.99, 5, 'https://m.media-amazon.com/images/I/819vw4Yp-zL._AC_SX466_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (9, 'Alpha 7 IV ', 'Sony', 2698.00, 3, 'https://m.media-amazon.com/images/I/71vpzW1nQJL.__AC_SY300_SX300_QL70_FMwebp_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (10, '48MP Digital Camera ', 'Monitech', 149.99, 5, 'https://m.media-amazon.com/images/I/71sAnXHjo-L._AC_SX466_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (11, 'Contemporary DG OS HSM', 'Sigma', 1089.00, 8, 'https://m.media-amazon.com/images/I/81o6z3YrNZL._AC_SL1500_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (12, 'USM Super-Telephoto Lens', 'Canon', 2899.00, 6, 'https://m.media-amazon.com/images/I/71cBW7Mb44L._AC_SX466_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (13, 'RF 85mm F1.2 L USM Lens', 'Canon', 2799.00, 5, 'https://m.media-amazon.com/images/I/612WNSfff9L._AC_SX466_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (14, 'Milvus Full Frame Camera Lens', 'ZEISS', 1274.00, 228, 'https://m.media-amazon.com/images/I/61DcU2Z9tDL._AC_SX466_.jpg', 'This is a test description');
INSERT INTO `product` VALUES (15, 'Di III VC VXD Lens', 'Tamron', 1399.00, 10, 'https://m.media-amazon.com/images/I/61al59-ZpZS._AC_SX466_.jpg', 'This is a test description');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'test_user', 'John', 'Smith');
INSERT INTO `user` VALUES (2, 'test_user2', 'Jane', 'Doe');

SET FOREIGN_KEY_CHECKS = 1;
