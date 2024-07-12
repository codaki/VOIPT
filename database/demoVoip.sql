-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: demo
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `cliente_id` int NOT NULL AUTO_INCREMENT,
  `cliente_nombre` varchar(45) NOT NULL,
  `cliente_apellido` varchar(45) NOT NULL,
  `cliente_cedula` varchar(45) NOT NULL,
  `cliente_correo` varchar(45) NOT NULL,
  `cliente_direccion` varchar(45) NOT NULL,
  `cliente_movil` varchar(10) NOT NULL,
  `cliente_oficina` varchar(10) DEFAULT NULL,
  `cliente_casa` varchar(10) DEFAULT NULL,
  `cliente_opcional` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`cliente_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (5,'Ana','Martinez','78912345600','anam@mail.com','Madrid','0234567890','4567890','5678901','6789012'),(6,'Luis','Sanchez','32165498700','luiss@mail.com','Mexico City','0345678901','5678901','6789012','7890123'),(7,'Sofia','Lopez','65498732100','sofial@mail.com','Santiago','0456789012','6789012','7890123','8901234'),(8,'Diego','Hernandez','95175385200','diegoh@mail.com','Quito','0567890123','7890123','8901234','9012345'),(9,'Laura','Diaz','75395185200','laurad@mail.com','Lima','0678901234','8901234','9012345','0123456'),(10,'Miguel','Torres','85296374100','miguelt@mail.com','Caracas','0789012345','9012345','0123456','1234567'),(11,'Carmen','Vargas','95175385200','carmenv@mail.com','San Jose','0890123456','0123456','1234567','2345678'),(12,'Gabriel','Rojas','75395185200','gabrielr@mail.com','Panama City','0901234567','1234567','2345678','3456789'),(13,'Elena','Morales','85296374100','elenam@mail.com','Montevideo','0012345678','2345678','3456789','4567890'),(14,'Javier','Castro','95175385200','javierc@mail.com','Asuncion','0123456789','3456789','4567890','5678901'),(15,'Isabel','Ortiz','75395185200','isabelo@mail.com','La Paz','0234567890','4567890','5678901','6789012'),(16,'Ricardo','Flores','85296374100','ricardof@mail.com','San Salvador','0345678901','5678901','6789012','7890123'),(17,'Patricia','Mendoza','95175385200','patriciam@mail.com','Tegucigalpa','0456789012','6789012','7890123','8901234');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente_producto`
--

DROP TABLE IF EXISTS `cliente_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente_producto` (
  `cp_id` int NOT NULL AUTO_INCREMENT,
  `inter_cliente` int NOT NULL,
  `inter_producto` int NOT NULL,
  `edad` int NOT NULL,
  PRIMARY KEY (`cp_id`,`inter_cliente`,`inter_producto`),
  KEY `inter_cliente_idx` (`inter_cliente`),
  KEY `inter_producto_idx` (`inter_producto`),
  CONSTRAINT `inter_cliente` FOREIGN KEY (`inter_cliente`) REFERENCES `cliente` (`cliente_id`),
  CONSTRAINT `inter_producto` FOREIGN KEY (`inter_producto`) REFERENCES `producto` (`producto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente_producto`
--

LOCK TABLES `cliente_producto` WRITE;
/*!40000 ALTER TABLE `cliente_producto` DISABLE KEYS */;
INSERT INTO `cliente_producto` VALUES (1,5,1,3),(2,5,2,2),(3,5,3,4),(4,5,4,1),(5,5,5,5),(6,5,6,1),(7,5,7,2),(8,5,8,3),(9,5,9,5),(10,5,10,1),(11,6,4,2),(12,6,3,1),(13,6,1,2),(14,6,6,3),(15,5,6,2),(16,7,6,2),(17,5,2,2),(18,5,3,3),(19,7,5,2);
/*!40000 ALTER TABLE `cliente_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gestion`
--

DROP TABLE IF EXISTS `gestion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gestion` (
  `gestion_id` int NOT NULL AUTO_INCREMENT,
  `gestion_nombre` varchar(45) NOT NULL,
  `gestion_tipo` int NOT NULL,
  PRIMARY KEY (`gestion_id`),
  KEY `gestion_tipo_idx` (`gestion_tipo`),
  CONSTRAINT `gestion_tipo` FOREIGN KEY (`gestion_tipo`) REFERENCES `gestion_tipo` (`gestion_tipo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gestion`
--

LOCK TABLES `gestion` WRITE;
/*!40000 ALTER TABLE `gestion` DISABLE KEYS */;
INSERT INTO `gestion` VALUES (1,'Ofrecimiento de pago',1),(2,'Contacto sin arreglo mediato',1),(3,'Contacto sin arreglo definivo',1),(4,'Mensaje a tercero',1),(5,'No contesta',2),(6,'Investigado no ubicado',2),(7,'Número equivocado',2),(8,'Whatsapp bidireccional',3),(9,'Whatsapp unidireccional',3),(10,'Mensaje de texto bidireccional',3),(11,'Mensaje de texto unidireccional',3),(12,'Mail bidireccional',3),(13,'Mail unidireccional',3),(14,'IVR bidireccional',3),(15,'IVR unidireccional',3);
/*!40000 ALTER TABLE `gestion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gestion_cliente`
--

DROP TABLE IF EXISTS `gestion_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gestion_cliente` (
  `gc_id` int NOT NULL AUTO_INCREMENT,
  `gc_gestion` int NOT NULL,
  `gc_cliente` int NOT NULL,
  `observación` varchar(105) DEFAULT NULL,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`gc_id`,`gc_gestion`,`gc_cliente`),
  KEY `inter_gestion_idx` (`gc_gestion`),
  KEY `inter_cliente_idx` (`gc_cliente`),
  CONSTRAINT `gc_cliente` FOREIGN KEY (`gc_cliente`) REFERENCES `cliente` (`cliente_id`),
  CONSTRAINT `gc_gestion` FOREIGN KEY (`gc_gestion`) REFERENCES `gestion` (`gestion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gestion_cliente`
--

LOCK TABLES `gestion_cliente` WRITE;
/*!40000 ALTER TABLE `gestion_cliente` DISABLE KEYS */;
INSERT INTO `gestion_cliente` VALUES (1,1,5,'fsadf','2024-07-12 01:33:14'),(2,2,5,'fas','2024-07-12 01:33:14'),(3,4,6,'sdf','2024-07-12 01:33:14'),(4,7,6,'asd','2024-07-12 01:33:14'),(5,10,5,'','2024-07-12 01:33:14'),(6,2,5,'','2024-07-12 01:33:14'),(7,4,5,'sdasdf','2024-07-12 01:33:42'),(8,4,7,'','2024-07-12 01:37:21');
/*!40000 ALTER TABLE `gestion_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gestion_tipo`
--

DROP TABLE IF EXISTS `gestion_tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gestion_tipo` (
  `gestion_tipo_id` int NOT NULL,
  `gestion_tipo_nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`gestion_tipo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gestion_tipo`
--

LOCK TABLES `gestion_tipo` WRITE;
/*!40000 ALTER TABLE `gestion_tipo` DISABLE KEYS */;
INSERT INTO `gestion_tipo` VALUES (1,'Contactados'),(2,'No contactados'),(3,'Canal alternativo');
/*!40000 ALTER TABLE `gestion_tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `producto_id` int NOT NULL AUTO_INCREMENT,
  `producto_nombre` varchar(45) NOT NULL,
  `producto_carga_mensual` decimal(5,2) NOT NULL,
  PRIMARY KEY (`producto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'PROTECCION FRAUDES TOTAL AXA',2.80),(2,'VIDA PROTEGIDA TC',30.00),(3,'PROTEGEMOS TU TARJETA PLUS',20.00),(4,'VIVE TRANQUILO',5.00),(5,'PROTEGEMOS TU TARJETA GPS',7.00),(6,'SOS',5.50),(7,'HOGAR CON SALUD',7.30),(8,'PROTECCION FRAUDE',10.00),(9,'PROTECCION DENTAL',15.00),(10,'VIAJE PROTEGIDO PRIMERA CAPA CALLCEN',35.00);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-12  1:39:15
