-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: school_db
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_db`
--

DROP TABLE IF EXISTS `admin_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_db` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_db`
--

LOCK TABLES `admin_db` WRITE;
/*!40000 ALTER TABLE `admin_db` DISABLE KEYS */;
INSERT INTO `admin_db` VALUES (1,'punith','punith123');
/*!40000 ALTER TABLE `admin_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointment_db`
--

DROP TABLE IF EXISTS `appointment_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment_db` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` varchar(45) DEFAULT NULL,
  `teacher` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment_db`
--

LOCK TABLES `appointment_db` WRITE;
/*!40000 ALTER TABLE `appointment_db` DISABLE KEYS */;
INSERT INTO `appointment_db` VALUES (1,'24-6-2021','Tarun','punithmsd923@gmail.com','Accepted'),(4,'3-6-2021','Purushottham ','punithmsd923@gmail.com','Pending'),(5,'9-6-2021','Shashank','punithmsd923@gmail.com','Pending'),(7,'28-8-2021','Tarun','impuni007@gmail.com','Pending'),(8,'27-8-2021','Tarun','impuni007@gmail.com','Pending'),(9,'14-9-2021','Tarun','punithmsd923@gmail.com','Pending'),(10,'18-9-2021','Ajay','punithmsd923@gmail.com','Pending'),(11,'24-9-2021','Ajay','punithmsd923@gmail.com','Pending');
/*!40000 ALTER TABLE `appointment_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attendance_db`
--

DROP TABLE IF EXISTS `attendance_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance_db` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class` varchar(45) DEFAULT NULL,
  `rollno` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `subject` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=293 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance_db`
--

LOCK TABLES `attendance_db` WRITE;
/*!40000 ALTER TABLE `attendance_db` DISABLE KEYS */;
INSERT INTO `attendance_db` VALUES (74,'1','2021001','5-6-2021','Present','English'),(75,'1','2021002','5-6-2021','Present','English'),(76,'1','2021003','5-6-2021','Absent','English'),(77,'1','2021004','5-6-2021','Present','English'),(78,'1','2021005','5-6-2021','Absent','English'),(79,'1','2021006','5-6-2021','Present','English'),(80,'1','2021007','5-6-2021','Present','English'),(81,'1','2021008','5-6-2021','Absent','English'),(82,'1','2021009','5-6-2021','Absent','English'),(83,'1','2021010','5-6-2021','Present','English'),(84,'1','2021001','5-6-2021','Absent','Kannada'),(85,'1','2021002','5-6-2021','Present','Kannada'),(86,'1','2021003','5-6-2021','Absent','Kannada'),(87,'1','2021004','5-6-2021','Absent','Kannada'),(88,'1','2021005','5-6-2021','Present','Kannada'),(89,'1','2021006','5-6-2021','Absent','Kannada'),(90,'1','2021007','5-6-2021','Absent','Kannada'),(91,'1','2021008','5-6-2021','Present','Kannada'),(92,'1','2021009','5-6-2021','Present','Kannada'),(93,'1','2021010','5-6-2021','Absent','Kannada'),(94,'1','2021001','5-6-2021','Absent','Hindi'),(95,'1','2021002','5-6-2021','Present','Hindi'),(96,'1','2021003','5-6-2021','Present','Hindi'),(97,'1','2021004','5-6-2021','Absent','Hindi'),(98,'1','2021005','5-6-2021','Present','Hindi'),(99,'1','2021006','5-6-2021','Absent','Hindi'),(100,'1','2021007','5-6-2021','Present','Hindi'),(101,'1','2021008','5-6-2021','Absent','Hindi'),(102,'1','2021009','5-6-2021','Present','Hindi'),(103,'1','2021010','5-6-2021','Absent','Hindi'),(104,'1','2021001','5-6-2021','Present','Maths'),(105,'1','2021002','5-6-2021','Absent','Maths'),(106,'1','2021003','5-6-2021','Present','Maths'),(107,'1','2021004','5-6-2021','Present','Maths'),(108,'1','2021005','5-6-2021','Absent','Maths'),(109,'1','2021006','5-6-2021','Present','Maths'),(110,'1','2021007','5-6-2021','Absent','Maths'),(111,'1','2021008','5-6-2021','Absent','Maths'),(112,'1','2021009','5-6-2021','Absent','Maths'),(113,'1','2021010','5-6-2021','Present','Maths'),(114,'1','2021001','5-6-2021','Absent','Science'),(115,'1','2021002','5-6-2021','Present','Science'),(116,'1','2021003','5-6-2021','Absent','Science'),(117,'1','2021004','5-6-2021','Present','Science'),(118,'1','2021005','5-6-2021','Absent','Science'),(119,'1','2021006','5-6-2021','Absent','Science'),(120,'1','2021007','5-6-2021','Present','Science'),(121,'1','2021008','5-6-2021','Absent','Science'),(122,'1','2021009','5-6-2021','Present','Science'),(123,'1','2021010','5-6-2021','Present','Science'),(124,'1','2021001','5-6-2021','Present','Science'),(125,'1','2021002','5-6-2021','Present','Science'),(126,'1','2021003','5-6-2021','Present','Science'),(127,'1','2021004','5-6-2021','Absent','Science'),(128,'1','2021005','5-6-2021','Absent','Science'),(129,'1','2021006','5-6-2021','Present','Science'),(130,'1','2021008','5-6-2021','Present','Science'),(131,'1','2021009','5-6-2021','Absent','Science'),(132,'1','2021010','5-6-2021','Absent','Science'),(133,'1','2021010','5-6-2021','Absent','Science'),(134,'1','2021001','5-6-2021','Present','Maths'),(135,'1','2021002','5-6-2021','Present','Maths'),(136,'1','2021003','5-6-2021','Present','Maths'),(137,'1','2021004','5-6-2021','Present','Maths'),(138,'1','2021005','5-6-2021','Absent','Maths'),(139,'1','2021006','5-6-2021','Absent','Maths'),(140,'1','2021007','5-6-2021','Present','Maths'),(141,'1','2021008','5-6-2021','Absent','Maths'),(142,'1','2021009','5-6-2021','Absent','Maths'),(143,'1','2021010','5-6-2021','Absent','Maths'),(144,'1','2021001','5-6-2021','Present','Maths'),(145,'1','2021002','5-6-2021','Absent','Maths'),(146,'1','2021003','5-6-2021','Present','Maths'),(147,'1','2021004','5-6-2021','Present','Maths'),(148,'1','2021005','5-6-2021','Present','Maths'),(149,'1','2021006','5-6-2021','Absent','Maths'),(150,'1','2021007','5-6-2021','Absent','Maths'),(151,'1','2021008','5-6-2021','Present','Maths'),(152,'1','2021009','5-6-2021','Present','Maths'),(153,'1','2021010','5-6-2021','Absent','Maths'),(154,'1','2021001','5-6-2021','Present','Science'),(155,'1','2021002','5-6-2021','Absent','Science'),(156,'1','2021003','5-6-2021','Present','Science'),(157,'1','2021005','5-6-2021','Present','Science'),(158,'1','2021006','5-6-2021','Absent','Science'),(159,'1','2021007','5-6-2021','Present','Science'),(160,'1','2021008','5-6-2021','Present','Science'),(161,'1','2021009','5-6-2021','Present','Science'),(162,'1','2021010','5-6-2021','Present','Science'),(163,'1','2021010','5-6-2021','Absent','Science'),(164,'1','2021001','5-6-2021','Present','General knowledge'),(165,'1','2021002','5-6-2021','Present','General knowledge'),(166,'1','2021003','5-6-2021','Present','General knowledge'),(167,'1','2021004','5-6-2021','Present','General knowledge'),(168,'1','2021004','5-6-2021','Absent','General knowledge'),(169,'1','2021005','5-6-2021','Absent','General knowledge'),(170,'1','2021006','5-6-2021','Absent','General knowledge'),(171,'1','2021007','5-6-2021','Present','General knowledge'),(172,'1','2021008','5-6-2021','Absent','General knowledge'),(173,'1','2021009','5-6-2021','Absent','General knowledge'),(174,'1','2021009','5-6-2021','Present','General knowledge'),(175,'1','2021010','5-6-2021','Present','General knowledge'),(176,'1','2021001','5-6-2021','Present','English'),(177,'1','2021002','5-6-2021','Present','English'),(178,'1','2021001','5-6-2021','Present','English'),(179,'1','2021001','5-6-2021','Present','English'),(180,'1','2021001','5-6-2021','Present','Social'),(181,'1','2021002','5-6-2021','Absent','Social'),(182,'1','2021003','5-6-2021','Present','Social'),(183,'1','2021004','5-6-2021','Absent','Social'),(184,'1','2021005','5-6-2021','Present','Social'),(185,'1','2021006','5-6-2021','Absent','Social'),(186,'1','2021007','5-6-2021','Present','Social'),(187,'1','2021008','5-6-2021','Present','Social'),(188,'1','2021009','5-6-2021','Absent','Social'),(189,'1','2021010','5-6-2021','Present','Social'),(190,'1','2021001','5-6-2021','Present','Physical Education'),(191,'1','2021002','5-6-2021','Absent','Physical Education'),(192,'1','2021003','5-6-2021','Present','Physical Education'),(193,'1','2021004','5-6-2021','Present','Physical Education'),(194,'1','2021005','5-6-2021','Absent','Physical Education'),(195,'1','2021006','5-6-2021','Present','Physical Education'),(196,'1','2021007','5-6-2021','Absent','Physical Education'),(197,'1','2021008','5-6-2021','Absent','Physical Education'),(198,'1','2021009','5-6-2021','Present','Physical Education'),(199,'1','2021010','5-6-2021','Present','Physical Education'),(200,'1','2021001','6-6-2021','Present','English'),(201,'1','2021002','6-6-2021','Absent','English'),(202,'1','2021003','6-6-2021','Present','English'),(203,'1','2021004','6-6-2021','Absent','English'),(204,'1','2021005','6-6-2021','Present','English'),(205,'1','2021006','6-6-2021','Present','English'),(206,'1','2021007','6-6-2021','Present','English'),(207,'1','2021008','6-6-2021','Absent','English'),(208,'1','2021009','6-6-2021','Present','English'),(209,'1','2021010','6-6-2021','Present','English'),(210,'1','2021005','6-6-2021','Absent','Kannada'),(211,'1','2021006','6-6-2021','Present','Kannada'),(212,'1','2021007','6-6-2021','Present','Kannada'),(213,'1','2021008','6-6-2021','Absent','Kannada'),(214,'1','2021009','6-6-2021','Present','Kannada'),(215,'1','2021010','6-6-2021','Present','Kannada'),(216,'1','2021001','6-6-2021','Present','Kannada'),(217,'1','2021002','6-6-2021','Present','Kannada'),(218,'1','2021003','6-6-2021','Absent','Kannada'),(219,'1','2021004','6-6-2021','Present','Kannada'),(220,'1','2021001','12-9-2021','Present','English'),(221,'1','2021003','12-9-2021','Absent','English'),(222,'1','2021004','12-9-2021','Absent','English'),(223,'1','2021005','12-9-2021','Present','English'),(224,'1','2021006','12-9-2021','Present','English'),(225,'1','2021007','12-9-2021','Present','English'),(226,'1','2021008','12-9-2021','Present','English'),(227,'1','2021009','12-9-2021','Present','English'),(228,'1','2021010','12-9-2021','Present','English'),(229,'1','2021001','12-9-2021','Absent','Kannada'),(230,'1','2021003','12-9-2021','Present','Kannada'),(231,'1','2021004','12-9-2021','Absent','Kannada'),(232,'1','2021005','12-9-2021','Present','Kannada'),(233,'1','2021006','12-9-2021','Absent','Kannada'),(234,'1','2021007','12-9-2021','Absent','Kannada'),(235,'1','2021008','12-9-2021','Absent','Kannada'),(236,'1','2021009','12-9-2021','Present','Kannada'),(237,'1','2021010','12-9-2021','Present','Kannada'),(238,'1','2021001','12-9-2021','Present','Hindi'),(239,'1','2021003','12-9-2021','Absent','Hindi'),(240,'1','2021004','12-9-2021','Absent','Hindi'),(241,'1','2021005','12-9-2021','Present','Hindi'),(242,'1','2021006','12-9-2021','Absent','Hindi'),(243,'1','2021007','12-9-2021','Present','Hindi'),(244,'1','2021008','12-9-2021','Absent','Hindi'),(245,'1','2021009','12-9-2021','Present','Hindi'),(246,'1','2021010','12-9-2021','Present','Hindi'),(247,'1','2021001','12-9-2021','Absent','Maths'),(248,'1','2021003','12-9-2021','Present','Maths'),(249,'1','2021004','12-9-2021','Present','Maths'),(250,'1','2021005','12-9-2021','Present','Maths'),(251,'1','2021006','12-9-2021','Present','Maths'),(252,'1','2021007','12-9-2021','Absent','Maths'),(253,'1','2021007','12-9-2021','Absent','Maths'),(254,'1','2021008','12-9-2021','Present','Maths'),(255,'1','2021009','12-9-2021','Present','Maths'),(256,'1','2021010','12-9-2021','Present','Maths'),(257,'1','2021001','12-9-2021','Present','Science'),(258,'1','2021003','12-9-2021','Absent','Science'),(259,'1','2021004','12-9-2021','Absent','Science'),(260,'1','2021005','12-9-2021','Absent','Science'),(261,'1','2021006','12-9-2021','Present','Science'),(262,'1','2021007','12-9-2021','Present','Science'),(263,'1','2021008','12-9-2021','Absent','Science'),(264,'1','2021009','12-9-2021','Absent','Science'),(265,'1','2021010','12-9-2021','Absent','Science'),(266,'1','2021001','12-9-2021','Present','General knowledge'),(267,'1','2021003','12-9-2021','Absent','General knowledge'),(268,'1','2021004','12-9-2021','Present','General knowledge'),(269,'1','2021005','12-9-2021','Absent','General knowledge'),(270,'1','2021006','12-9-2021','Present','General knowledge'),(271,'1','2021007','12-9-2021','Present','General knowledge'),(272,'1','2021008','12-9-2021','Absent','General knowledge'),(273,'1','2021009','12-9-2021','Absent','General knowledge'),(274,'1','2021010','12-9-2021','Present','General knowledge'),(275,'1','2021001','12-9-2021','Present','Physical Education'),(276,'1','2021003','12-9-2021','Absent','Physical Education'),(277,'1','2021004','12-9-2021','Present','Physical Education'),(278,'1','2021005','12-9-2021','Present','Physical Education'),(279,'1','2021006','12-9-2021','Absent','Physical Education'),(280,'1','2021007','12-9-2021','Present','Physical Education'),(281,'1','2021008','12-9-2021','Absent','Physical Education'),(282,'1','2021009','12-9-2021','Present','Physical Education'),(283,'1','2021010','12-9-2021','Present','Physical Education'),(284,'1','2021001','13-9-2021','Present','English'),(285,'1','2021003','13-9-2021','Absent','English'),(286,'1','2021004','13-9-2021','Present','English'),(287,'1','2021005','13-9-2021','Present','English'),(288,'1','2021006','13-9-2021','Absent','English'),(289,'1','2021007','13-9-2021','Absent','English'),(290,'1','2021008','13-9-2021','Present','English'),(291,'1','2021009','13-9-2021','Present','English'),(292,'1','2021010','13-9-2021','Absent','English');
/*!40000 ALTER TABLE `attendance_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books_db`
--

DROP TABLE IF EXISTS `books_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books_db` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_isbn` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `author` varchar(45) DEFAULT NULL,
  `publisher` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `copies` varchar(45) DEFAULT NULL,
  `class` varchar(45) DEFAULT NULL,
  `language` varchar(45) DEFAULT NULL,
  `shelf` varchar(45) DEFAULT NULL,
  `available` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books_db`
--

LOCK TABLES `books_db` WRITE;
/*!40000 ALTER TABLE `books_db` DISABLE KEYS */;
INSERT INTO `books_db` VALUES (2,'ISBN002','asdaf','asdasf','sdfsdf','sdvsdv','adsfasf','1','English','1','Yes'),(3,'ISBN003','Tales of floki','Punith','NorseCo','Floki and his advantures','11','1','English','2','Yes'),(5,'ISBN005','Bhajarangi bhaijaan','Salman khan','Salman khan','','16','2','Hindi','4','Yes'),(6,'ISBN006','Independence day','S C Bose','Govt of India','...','12','2','English','3','Yes'),(7,'ISBN007','Kannada','Floki','','','60','2','Kannada','3','Yes'),(8,'ISBN008','English','','','','61','2','English','2','Yes'),(9,'ISBN009','Maths textbook','Ramanujan','','','60','2','English','1','Yes'),(10,'ISBN010','Science','JC Bose','','','70','2','English','2','Yes'),(11,'ISBN011','Social textbook','','','','60','2','English','6','Yes'),(12,'ISBN012','General knowledge','','','','55','2','English','2','Yes'),(13,'ISBN013','Physical Education','','','','70','2','English','5','Yes'),(14,'ISBN015','Kannada','','','','65','4','Kannada','7','Yes'),(15,'ISBN016','Hindi','','','','56','9','Hindi','6','Yes');
/*!40000 ALTER TABLE `books_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classroom_db`
--

DROP TABLE IF EXISTS `classroom_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classroom_db` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class` varchar(45) DEFAULT NULL,
  `subject` varchar(45) DEFAULT NULL,
  `filelink` varchar(90) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `message` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `tokennumber` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classroom_db`
--

LOCK TABLES `classroom_db` WRITE;
/*!40000 ALTER TABLE `classroom_db` DISABLE KEYS */;
INSERT INTO `classroom_db` VALUES (29,NULL,NULL,NULL,NULL,NULL,NULL,'TKNCR1000',NULL),(30,'1','English','https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf','Dummy pdf for testing','Testing ...','Notes','TKNCR1001','1622911943003'),(31,'1','Kannada','https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf','Dummy pdf 2','Testing','Assignment','TKNCR1002','1622912228128'),(32,'1','Hindi','https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf','Chapter 1 ','Hindi authors','Notes','TKNCR1003','1623564543033'),(33,'1','English','https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf','Tales of akbar birbal','Chapter 1 Notes','Notes','TKNCR1004','1631453770237');
/*!40000 ALTER TABLE `classroom_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue_db`
--

DROP TABLE IF EXISTS `issue_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_db` (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_name` varchar(45) DEFAULT NULL,
  `book_name` varchar(45) DEFAULT NULL,
  `class` varchar(45) DEFAULT NULL,
  `issue_date` varchar(45) DEFAULT NULL,
  `due_date` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue_db`
--

LOCK TABLES `issue_db` WRITE;
/*!40000 ALTER TABLE `issue_db` DISABLE KEYS */;
INSERT INTO `issue_db` VALUES (1,'Anup','Bhajarangi bhaijaan','2','1625489625540','1626353648145','Inactive'),(5,'Nitya','Bhajarangi bhaijaan','2','1625490006245','1626354151050','Inactive'),(6,'Arushi','Tales of floki','1','1627657596702','1628525026695','Inactive'),(7,'Zoya','Tales of floki','1','1631451746931','1632317083272','Inactive');
/*!40000 ALTER TABLE `issue_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `result_db`
--

DROP TABLE IF EXISTS `result_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result_db` (
  `id` int NOT NULL AUTO_INCREMENT,
  `class` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `exam` varchar(45) DEFAULT NULL,
  `ttlMarks` varchar(45) DEFAULT NULL,
  `scored` varchar(45) DEFAULT NULL,
  `internal_marks` varchar(45) DEFAULT NULL,
  `total_scored` varchar(45) DEFAULT NULL,
  `subject` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `result_db`
--

LOCK TABLES `result_db` WRITE;
/*!40000 ALTER TABLE `result_db` DISABLE KEYS */;
INSERT INTO `result_db` VALUES (1,'1','Suraj','internals1','30','19','10','29','English'),(3,'1','Arushi','internals1','30','20','10','30','English'),(4,'1','Vasu','internals1','30','19','6','25','English'),(5,'1','Suraj','internals1','30','18','5','23','Kannada'),(6,'1','Darshan','internals1','30','20','7','27','Kannada'),(7,'1','Arushi','internals1','30','15','7','22','Kannada'),(8,'1','Vasu','internals1','30','16','10','26','Kannada'),(9,'1','Suraj','internals1','30','20','10','30','Hindi'),(10,'1','Darshan','internals1','30','18','8','26','Hindi'),(11,'1','Arushi','internals1','30','18','5','23','Hindi'),(12,'1','Vasu','internals1','30','17','9','26','Hindi'),(13,'1','Suraj','internals1','30','17','9','26','Maths'),(14,'1','Darshan','internals1','30','19','8','27','Maths'),(15,'1','Arushi','internals1','30','20','09','29','Maths'),(16,'1','Vasu','internals1','30','18','06','24','Maths'),(17,'1','Suraj','internals1','30','20','10','30','Science'),(18,'1','Darshan','internals1','30','19','10','29','Science'),(19,'1','Arushi','internals1','30','18','9','27','Science'),(20,'1','Vasu','internals1','30','8','7','15','Science'),(21,'1','Suraj','internals1','30','11','9','20','Social'),(22,'1','Darshan','internals1','30','9','5','14','Social'),(23,'1','Arushi','internals1','30','12','8','20','Social'),(24,'1','Vasu','internals1','30','11','8','19','Social'),(25,'1','Suraj','internals1','30','20','10','30','General Knowledge'),(26,'1','Darshan','internals1','30','11','09','20','General Knowledge'),(27,'1','Arushi','internals1','30','19','8','27','General Knowledge'),(28,'1','Vasu','internals1','30','18','8','26','General Knowledge'),(29,'1','Suraj','internals1','30','18','9','27','Physical Education'),(30,'1','Darshan','internals1','30','20','10','30','Physical Education'),(31,'1','Arushi','internals1','30','18','9','27','Physical Education'),(32,'1','Vasu','internals1','30','20','10','30','Physical Education'),(33,'1','Suraj','final','100','69','25','94','English');
/*!40000 ALTER TABLE `result_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `return_db`
--

DROP TABLE IF EXISTS `return_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `return_db` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bookName` varchar(45) DEFAULT NULL,
  `studentName` varchar(45) DEFAULT NULL,
  `class` varchar(45) DEFAULT NULL,
  `fine` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `return_db`
--

LOCK TABLES `return_db` WRITE;
/*!40000 ALTER TABLE `return_db` DISABLE KEYS */;
INSERT INTO `return_db` VALUES (6,'Bhajarangi bhaijaan','Nitya','2','0'),(7,'Bhajarangi bhaijaan','Anup','2','0'),(9,'Tales of floki','Arushi','1','0'),(10,'Tales of floki','Zoya','1','0');
/*!40000 ALTER TABLE `return_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_db`
--

DROP TABLE IF EXISTS `student_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_db` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `fathername` varchar(45) DEFAULT NULL,
  `class` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `caste` varchar(45) DEFAULT NULL,
  `dob` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `religion` varchar(45) DEFAULT NULL,
  `percent` varchar(45) DEFAULT NULL,
  `approve` varchar(45) DEFAULT NULL,
  `rollno` varchar(45) DEFAULT NULL,
  `fee` varchar(45) DEFAULT NULL,
  `paid` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_db`
--

LOCK TABLES `student_db` WRITE;
/*!40000 ALTER TABLE `student_db` DISABLE KEYS */;
INSERT INTO `student_db` VALUES (27,'Suraj','Anup','1','9899876709','punithmsd923@gmail.com','Gowda','2015-06-12','surajA','suraj123','Hindu','Eighty five','Yes','2021001','15000','15000'),(29,'Arushi','Prem','1','9009767654','punithmsd1987@gmail.com','Gowdas','2021-06-18','ArushiI','yPG5db$u0@','Hindu','seventy four','Yes','2021003','15000','9000'),(30,'Vasu','Raghavan','1','8056550125','punithmsd923@gmail.com','NaN','2021-06-18','vasuR','K@1lvi0M#y','Hindu','Eighty four','Yes','2021004','15000','6000'),(31,'Ishita','Arjun','1','9900781205','punithmsd923@gmail.com','NaN','2015-06-17','ishitaA','13NK65yf3O','Hindu','Seventy two','Yes','2021005','15000','15000'),(32,'Anuj','Akshay','1','9881276545','punithmsd923@gmail.com','NaN','2015-09-23','anujA','anuj123','Hindu','Ninety two','Yes','2021006','15000','15000'),(33,'Tanavi','Bharat','1','8004128567','punithmsd1987@gmail.com','NaN','2015-06-09','tanaviB','F%2IdK$0On','Hindu','ninety four','Yes','2021007','15000','10000'),(34,'Ranga','Mohan','1','9056544309','pgowda8867@gmail.com','Gowda','2015-02-11','rangaM','c&p%Ksmtpl','Hindu','Fifty four','Yes','2021008','15000','9000'),(35,'Charu','Amit','1','8855660123','punithmsd1987@gmail.com','NaN','2015-06-18','charuA','&0g%qLdx9O','Christian','Ninety two','Yes','2021009','15000','8000'),(36,'Zoya','Abdul','1','8044309786','punithmsd923@gmail.com','NaN','2015-07-17','zoyaA','pOc8y%05y8','Islam','Seventy nine','Yes','2021010','15000','8700'),(37,'Nitya','Prabhas','2','8877609076','punithmsd923@gmail.com','NaN','2014-07-12','nityaP','nitya123','Hindu','fourty five','Yes','2021011','17000','7000'),(38,'Anup','Aditya','2','9967665432','punithmsd923@gmail.com','NaN','2014-07-14','anupA','waqP$2wCer','Hindu','sixty three','Yes','2021070','17000','9000'),(39,'Sakshi','Suraj','2','8877678905','punithmsd1987@gmail.com','Nan','2014-05-12','sakshiS','$hJma&vHb#','Hindu','seventy four','Yes','2021012','17000','11000'),(40,'Sumati','Prabhat','2','7006765445','punithmsd923@gmail.com','NaN','2014-05-14','sumatiP','sD6zbr&aeM','Jain','ninety two','Yes','2021013','17000','12000'),(41,'Deep','Kiran','2','7787767654','pgowda8867@gmail.com','NaN','2014-06-23','deepK','1zAB#Citoa','Sikh','eighty six','Yes','2021014','17000','9500'),(42,'Nilam','Dhananjay','2','9955612321','punithmsd1987@gmail.com','NaN','2014-12-21','nilamD','4IJ0Cjpu4l','Hindu','sixty six','Yes','2021015','17000','9800'),(43,'Madhu','Ayush','2','9889887765','punithmsd923@gmail.com','Gowda','2016-10-13','madhuA','l3P@Ig5#P3','Hindu','sixty four','Yes','2021016','17000','7000'),(44,'Rakesh','Rajeev','2','8877019256','punithmsd923@gmail.com','NaN','2014-06-07','rakeshR','p@CGs$CJIO','Christian','Fifty five','Yes','2021017','17000','8000'),(45,'Sushila','Sudhir','2','9954678912','punithmsd1987@gmail.com','NaN','2014-01-31','sushilaS','l287jN@2bp','Hindu','Seventy Five','Yes','2021018','17000','8900'),(46,'Aarushi','Sridhar','2','9997654321','punithmsd1987@gmail.com','Nan','2014-07-10','aarushiS','t38OaIftgn','Jain','Sixty three','Yes','2021019','17000','9500'),(47,'Harish','Anuj','3','7018453390','punithmsd923@gmail.com','Gowda','2013-07-03','harishA','i6p@4G3F7I','Christian','ninety three','Yes','2021020','18000','10000'),(48,'Akash','Anup','3','7712008976','punithmsd1987@gmail.com','NaN','2013-06-29','akashA','jq8qrj7J1o','Hindu','sixty two','Yes','2021021','18000','8766'),(49,'Anisha','Tej','3','8878765658','pgowda8867@gmail.com','NaN','2013-06-09','anishT','B73weFvFwI','Jain','Eighty four','Yes','2021022','18000','7870'),(50,'Varsha','Mohan','3','8987876548','punithmsd1987@gmail.com','NaN','2013-06-16','varshaM','Jx2pro6waw','Buddhism','seventy six','Yes','2021023','18000','7800'),(51,'Ayush','Darshan','3','8812343214','punithmsd923@gmail.com','NaN','2013-06-24','ayushD','C2fPAp1joF','Hindu','sixty','Yes','2021024','18000','12000'),(52,'Advaith','Suresh','3','9213456787','punithmsd1987@gmail.com','NaN','2013-10-27','advaithS','58ff@rJ9tF','Jain','ninety five','Yes','2021025','18000','10000'),(53,'Prabhas','Ravi','3','8809877656','punithmsd923@gmail.com','NaN','2013-11-19','prabhasR','iJouFglDj0','Sikh','Seventy Seven','Yes','2021026','18000','6700'),(54,'Aparna','Pedro','3','8877012345','punithmsd1987@gmail.com','NaN','2013-06-19','aparnaP','m#sID4uCHM','Christian','Sixty four','Yes','2021027','18000','7800'),(55,'Navya','Rajesh','3','8898776432','punithmsd923@gmail.com','Gowda','2013-06-29','navyaR','6e7sxlrL%J','Hindu','sixty three','Yes','2021028','18000','12000'),(56,'Shwetha','Dhananjay','3','8409194576','pgowda8867@gmail.com','NaN','2013-11-25','shwethaD','OBAbxiLM4F','Hindu','eighty three','Yes','2021029','18000','8900'),(57,'Raju','Kiran','4','9889122345','punithmsd923@gmail.com','NaN','2012-02-26','rajuK','mntz#LIBst','Hindu','eighty nine','Yes','2021030','21000','13000'),(58,'Shekar','Raju','4','9034567654','impuni007@gmail.com','nan','2013-05-31','shekarR','1Nl$HO7sAl','Hindu','sixty four','Yes','2021031','21000','6000'),(59,'Mehul','Alok','4','9012322187','pgowda8867@gmail.com','NaN','2012-10-02','mehulA','huK1g#j6lf','Jain','sixty four','Yes','2021032','21000','13000'),(60,'Vipin','Prathap','4','9543665789','punithmsd1987@gmail.com','NaN','2021-11-18','vipinP','con3&2eOqK','Jain','Seventy one','Yes','2021033','21000','7000'),(61,'Kailash','Ajay','4','8099564532','pgowda8867@gmail.com','nAn','2012-07-22','kailashA','EuwA&$o%lK','Hindu','Eighty three','Yes','2021034','21000','13400'),(62,'Durga','Vineet','4','9012567654','punithmsd923@gmail.com','NaN','2012-02-11','durgaV','fd45fJJ3w&','Hindu','ninety three','Yes','2021035','21000','12000'),(63,'Padma','Shridhar','4','7055876908','punithmsd1987@gmail.com','NaN','2012-05-11','padmaS','P%zMyqLLM8','Hindu','sixty three','Yes','2021036','21000','14000'),(64,'Abilash','Ramesh','4','9456787654','punithmsd923@gmail.com','NaN','2012-07-08','abilashR','yspoHdz&@4','Sikh','sixty ','Yes','2021037','21000','12000'),(65,'Isha','Shashidar','4','9088774423','punithmsd1987@gmail.com','NaN','2012-06-10','ishaS','MONvg5GbCP','Buddhism','Ninety','Yes','2021038','21000','10000'),(66,'Kalpana','Umesh','4','6378765123','pgowda8867@gmail.com','Gowda','2012-01-04','kalpanaU','Ke%rdF%&kk','Hindu','seventy two','Yes','2021039','21000','12400'),(67,'Uma','Ramesh','5','9981232109','punithmsd923@gmail.com','NaN','2011-12-28','umaR','&w9l42GcJ8','Hindu','Seventy three','Yes','2021040','23000','12290'),(68,'Arjun','Shanmukh','5','9088450987','punithmsd923@gmail.com','NaN','2011-01-30','arjunS','$cq2rE1372','Jain','seventy three','Yes','2021041','23000','14000'),(69,'Kushal','Hari','5','9077456784','punithmsd923@gmail.com','NaN','2011-03-27','kushalH','fvn1l2492l','Jain','ninety','Yes','2021042','23000','7000'),(70,'Prabhas','Raju','5','9088754323','punithmsd1987@gmail.com','Gowda','2011-05-12','prabhasRaju','2o1FoGbC7#','Jain','ninety five','Yes','2021043','23000','13400'),(71,'Nakul','Murthy','5','8966123456','pgowda8867@gmail.com','NaN','2011-09-14','nakulM','9fq$MGieN6','Hindu','sixty','Yes','2021044','23000','15000'),(72,'Samir','Hussain','6','9077645678','punithmsd1987@gmail.com','NaN','2010-06-10','samirH','m6$4PrAhD3','Islam','eighty','Yes','2021045','25000','20000'),(73,'Lavanya','Ryan','6','9812302768','punithmsd923@gmail.com','NaN','2010-01-04','lavanyaR','2%8#rBJsr9','Christian','seventy four','Yes','2021046','25000','19500'),(74,'Prathap','Bharath','6','9645098123','punithmsd1987@gmail.com','Gowda','2010-12-16','prathapB','KmsD28q8Fs','Hindu','seventy three','Yes','2021047','25000','21000'),(75,'Vaneeta','Sharath','6','9780040532','punithmsd1987@gmail.com','nan','2010-09-08','vaneetaS','fkc7LKJd6n','Hindu','sixty one','Yes','2021048','25000','21200'),(76,'Riya','Praveen Dsouza','6','9078776543','punithmsd923@gmail.com','NaN','2010-01-11','riyaP','#Gx@Dvpwn7','Christian','fifty three','Yes','2021049','25000','20500'),(77,'Nataraj','Prasad','7','9500231980','punithmsd923@gmail.com','Gowda','2009-12-24','natarajP','OvneO5D3pq','Hindu','ninety','Yes','2021050','28000','24000'),(78,'Shreya','Samarth','7','9088675643','punithmsd923@gmail.com','NaN','2009-01-04','shreyaS','OLAv35ddxF','Hindu','Seventy five','Yes','2021051','28000','22500'),(79,'Rani','Shivanand','7','9098787654','pgowda8867@gmail.com','Gowda','2009-02-28','raniS','0Etsv&3HmC','Hindu','ninety','Yes','2021052','28000','21500'),(80,'Rohan','Mahesh','7','9088787655','pgowda8867@gmail.com','Eighty three','2009-09-05','rohanM','njweD9fNFK','Hindu','seventy three','Yes','2021053','28000','22000'),(81,'Vaishnavi','Umesh','7','8988760987','pgowda8867@gmail.com','NaN','2009-06-18','vaishnaviU','MhEmksPvty','Jain','seventy four','Yes','2021054','28000','21200'),(82,'Narendra','Pavan','8','7650987756','punithmsd1987@gmail.com','NaN','2008-06-16','narendraP','&qKbJ37CmB','Hindu','eighty four','Yes','2021055','31000','23400'),(83,'Vishnu','Arun','8','9510987734','punithmsd923@gmail.com','nan','2008-12-02','vishnuA','yC6bd&pCmq','Hindu','Sixty three','Yes','2021056','31000','21000'),(84,'Murali','Prabodh','8','8977654321','pgowda8867@gmail.com','NaN','2008-11-28','muraliP','2Pv3fdp7IM','Hindu','Seventy three','Yes','2021057','31000','20300'),(85,'Neel','Suresh','8','9811094578','punithmsd923@gmail.com','NaN','2008-08-25','neelS','7@gcadvBKs','Hindu','Seventy four','Yes','2021058','31000','25000'),(86,'Kamal','Christopher','8','9077654567','punithmsd923@gmail.com','NaN','2008-01-12','kamalC','Jgo$dlB5@B','Christian','seventy three','Yes','2021059','31000','21200'),(87,'Jagan','Bhagat','9','9077436789','punithmsd923@gmail.com','NaN','2007-01-26','jaganB','eG##gPDKgk','Jain','Ninety two','Yes','2021060','33000','26000'),(88,'Vijay','Alok','9','9044768976','pgowda8867@gmail.com','Gowda','2007-05-31','vijayA','G$Fl0wueHz','Hindu','sixty','Yes','2021061','33000','30000'),(89,'Dipti','Arun','9','9085367090','pgowda8867@gmail.com','NaN','2007-04-15','diptiA','P944cAzipr','Hindu','seventy four','Yes','2021062','33000','28000'),(90,'Dinesh','Niranjan','9','9088564567','pgowda8867@gmail.com','gowda','2007-12-31','dineshN','AqL4m81G&u','Hindu','sixty three','Yes','2021063','33000','23200'),(91,'Priya','Arjun','9','9665093245','punithmsd923@gmail.com','NaN','2007-09-23','priyaA','muq7k76Orc','Hindu','ninety','Yes','2021064','33000','21000'),(92,'Khushi','Krishna','10','9564379088','pgowda8867@gmail.com','NaN','2006-02-18','khushiK','fri1GF3BMC','Hindu','eighty','Yes','2021065','35000','29000'),(93,'Sanjit','Tushar','10','9500801765','pgowda8867@gmail.com','NaN','2006-10-15','sanjitT','H1vPlNDu#d','Hindu','sixty four','Yes','2021066','35000','22000'),(94,'Prem','Ankit','10','9983456008','pgowda8867@gmail.com','Gowdas','2006-11-25','premA','&zl2ee$HC#','Hindu','Seventy four','Yes','2021067','35000','21500'),(95,'Anupama','Hari','10','9005236798','punithmsd923@gmail.com','NaN','2006-05-18','anupamaH','H74Jfcpcfn','Jain','seventy two','Yes','2021068','35000','22500'),(96,'Aryan','Virat','10','7877456009','pgowda8867@gmail.com','NaN','2006-08-15','aryanV','j2I8lk$K84','Hindu','sixty two','Yes','2021069','35000','21900'),(97,'Virat','Narendar','10','7721234098','punithmsd923@gmail.com','NaN','2006-06-14','viratN','I2iAeChm9o','Hindu','ninety four','Yes','2021071','35000','12300'),(98,' Ganesh','suresh','8','7676865546','jsjfasghcjhjsk@gmail.com','unknown','2006-06-22','ganesh','12345678','Hindu',' eighty two','Yes','2021072','31000','0'),(99,'cfgng','bdndhfnbvxc','2','4565768776','cjsuiycsc@gmail.com',' unknown','2008-05-12','hello','123456788','Hindu','ninenty nine','Yes','2021073','17000','0'),(110,'Punith Gowda','Partha K','2','8909878909','punith@gmail.com','castekjj','2021-08-10','punith','dpmyNDpsDi','Jain','seventy ','Yes','2021074','17000','9000');
/*!40000 ALTER TABLE `student_db` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher_db`
--

DROP TABLE IF EXISTS `teacher_db`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher_db` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `subject` varchar(45) DEFAULT NULL,
  `experience` varchar(45) DEFAULT NULL,
  `dob` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `approve` varchar(45) DEFAULT NULL,
  `salary` varchar(45) DEFAULT NULL,
  `joindate` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher_db`
--

LOCK TABLES `teacher_db` WRITE;
/*!40000 ALTER TABLE `teacher_db` DISABLE KEYS */;
INSERT INTO `teacher_db` VALUES (19,'Tarun','tarunG','tarun1234','punithmsd923@gmail.com','English','Three years','2021-06-17','8988765677','Yes','30000','1622881087374'),(20,'Purushottham ','reddyP','LCtD*Puqmi','punithmsd1987@gmail.com','Kannada','Four years','2021-06-09','8876789001','Yes','30000','1622881156599'),(21,'Chitra','chitraR','Kbbgo>lEz*','pgowda8867@gmail.com','Hindi','one year','2021-06-15','9887766543','Yes','30000','1622881320853'),(22,'Ajay','ajayS','0nJ@<eI!16','punithmsd923@gmail.com','Maths','Two years','2021-06-16','9005654321','Yes','30000','1622881433345'),(23,'Shashank','pdshashank','rEwIz2kKHN','pdshashank8@gmail.com','Science','Three years','2021-03-30','7768097723','Yes','30000','1622881660149'),(24,'Akash','akashSP','l3$4t4D!%M','punithmsd923@gmail.com','Social','Seven years','2021-06-15','8009564325','Yes','30000','1622881760413'),(25,'Rakshu','rakshuVK','Mc@eugkszK','rakshuvk18@gmail.com','General Knowledge','Five years','2021-12-10','7009812765','Yes','30000','1622881856350'),(26,'Kriti','KritiS','-v5qJ2o1yf','punithmsd923@gmail.com','Physical Education','Two years','2021-06-01','9011167987','Yes','30000','1622882057504'),(29,'Ramesh','HRamesh','N2#ycvF7#y','punithmsd923@gmail.com','Physical Education','Four','2021-06-15','8878767654','Yes','30000','1623568154224'),(33,'rakshu','rakshuGH','hqhqhqhqhq','uiuhh@gmail.com','Kannada','haha','2021-07-01','8989909876','No',NULL,NULL),(35,'Partha K','parthK','dummyP','partha@anuvarthh.com','Hindi','three','2021-07-01','9035732986','Yes','30000','1631451746931'),(37,'CHANDAN KUMAR M K','awdaef','qwdqefd','chandanforward143@gmail.com','Hindi','qwsdasd','2021-07-21','9099090987','No',NULL,NULL);
/*!40000 ALTER TABLE `teacher_db` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-19  8:45:08
