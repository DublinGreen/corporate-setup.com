--
-- Current Database: `corporate_setup_db`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `corporate_setup_db` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `corporate_setup_db`;

--
-- Table structure for table `admin_users`
--

DROP TABLE IF EXISTS `admin_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `status` enum('ACTIVE','NOT ACTIVE') NOT NULL DEFAULT 'NOT ACTIVE',
  `first_name` char(255) NOT NULL,
  `last_name` char(255) NOT NULL,
  `username` char(255) NOT NULL,
  `time_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_users`
--

LOCK TABLES `admin_users` WRITE;
/*!40000 ALTER TABLE `admin_users` DISABLE KEYS */;
INSERT INTO `admin_users` VALUES (1,'ACTIVE','idisimagha','dublin-green','greenDevNG','2020-11-11 21:54:22');
/*!40000 ALTER TABLE `admin_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2020_05_02_014937_create_users_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notification` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `to_whom` bigint(20) unsigned DEFAULT NULL,
  `title` char(255) NOT NULL,
  `message` text NOT NULL,
  `status` enum('SENT','NOT SENT','NOT APPLICABLE') NOT NULL DEFAULT 'NOT APPLICABLE',
  `time_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_pension_request`
--

DROP TABLE IF EXISTS `service_pension_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service_pension_request` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_requesting` bigint(20) unsigned DEFAULT NULL,
  `status` enum('NOT DONE','PROCESSING','DONE') NOT NULL DEFAULT 'NOT DONE',
  `handled_by` char(255) DEFAULT NULL,
  `nature_of_business` text NOT NULL,
  `address_of_company` text NOT NULL,
  `number_of_staffs` int(10) unsigned NOT NULL,
  `contact_staff_name` char(255) NOT NULL,
  `contact_staff_email` char(255) NOT NULL,
  `contact_staff_phone_number` char(20) NOT NULL,
  `cac_file` char(255) NOT NULL,
  `tin_file` char(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `admin_user_constraint` (`handled_by`),
  KEY `user_requesting_constraint` (`user_requesting`),
  CONSTRAINT `admin_user_constraint` FOREIGN KEY (`handled_by`) REFERENCES `admin_users` (`username`) ON UPDATE CASCADE,
  CONSTRAINT `user_requesting_constraint` FOREIGN KEY (`user_requesting`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_pension_request`
--

LOCK TABLES `service_pension_request` WRITE;
/*!40000 ALTER TABLE `service_pension_request` DISABLE KEYS */;
INSERT INTO `service_pension_request` VALUES (3,17,'NOT DONE',NULL,'technology','badore ajah lagos',50,'bernard dublin-green','greendublin007@gmail.com','07032090809','72ad880dd14b329013fc31f076614d411605136388.docx','72ad880dd14b329013fc31f076614d411605136388.docx','2020-11-11 23:13:08','2020-11-11 23:13:08'),(4,17,'NOT DONE',NULL,'technology','badore ajah lagos',50,'bernard dublin-green','greendublin007@gmail.com','07032090809','72ad880dd14b329013fc31f076614d411605136496.docx','72ad880dd14b329013fc31f076614d411605136496.docx','2020-11-11 23:14:56','2020-11-11 23:14:56'),(5,17,'NOT DONE',NULL,'technology','badore ajah lagos',50,'bernard dublin-green','greendublin007@gmail.com','07032090809','uploads/service_requests/pensionServiceRequest/tin/72ad880dd14b329013fc31f076614d411605136546.docx','uploads/service_requests/pensionServiceRequest/cac/72ad880dd14b329013fc31f076614d411605136546.docx','2020-11-11 23:15:46','2020-11-11 23:15:46'),(6,17,'NOT DONE',NULL,'technology','badore ajah lagos',50,'bernard dublin-green','greendublin007@gmail.com','07032090809','uploads/service_requests/pensionServiceRequest/tin/72ad880dd14b329013fc31f076614d411605191498.docx','uploads/service_requests/pensionServiceRequest/cac/72ad880dd14b329013fc31f076614d411605191498.docx','2020-11-12 14:31:38','2020-11-12 14:31:38');
/*!40000 ALTER TABLE `service_pension_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_request_for_contract`
--

DROP TABLE IF EXISTS `service_request_for_contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service_request_for_contract` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_requesting` bigint(20) unsigned DEFAULT NULL,
  `status` enum('NOT DONE','PROCESSING','DONE') NOT NULL DEFAULT 'NOT DONE',
  `handled_by` char(255) DEFAULT NULL,
  `contract_title` char(255) NOT NULL,
  `brief` text NOT NULL,
  `submission_deadline` char(255) NOT NULL,
  `scope_of_work_file` char(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `handled_by_constraint` (`handled_by`),
  CONSTRAINT `handled_by_constraint` FOREIGN KEY (`handled_by`) REFERENCES `admin_users` (`username`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_request_for_contract`
--

LOCK TABLES `service_request_for_contract` WRITE;
/*!40000 ALTER TABLE `service_request_for_contract` DISABLE KEYS */;
INSERT INTO `service_request_for_contract` VALUES (1,17,'NOT DONE',NULL,'technology','brief','2020-11-14','uploads/service_requests/contractServiceRequest/scope_of_work/ABOUT CONNECTSELLER LISTINGS LIMITED.docx.docx','2020-11-12 14:36:42','2020-11-12 14:36:42'),(2,17,'NOT DONE','greenDevNG','technology','brief','2020-11-14','uploads/service_requests/contractServiceRequest/scope_of_work/signature.png.png','2020-11-18 02:01:39','2020-11-12 14:37:57'),(3,17,'NOT DONE',NULL,'technology','brief','2020-11-14','uploads/service_requests/contractServiceRequest/scope_of_work/Exit_interview form.doc','2020-11-12 14:38:54','2020-11-12 14:38:54');
/*!40000 ALTER TABLE `service_request_for_contract` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_requests`
--

DROP TABLE IF EXISTS `service_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service_requests` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(255) NOT NULL,
  `email` char(255) NOT NULL,
  `phone` char(50) NOT NULL,
  `location` char(255) NOT NULL,
  `service_id` bigint(20) NOT NULL,
  `service_name` int(10) unsigned NOT NULL,
  `status` enum('PROCESSING','DONE') NOT NULL DEFAULT 'PROCESSING',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_requests`
--

LOCK TABLES `service_requests` WRITE;
/*!40000 ALTER TABLE `service_requests` DISABLE KEYS */;
/*!40000 ALTER TABLE `service_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service_state_payee_registration`
--

DROP TABLE IF EXISTS `service_state_payee_registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service_state_payee_registration` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `status` enum('NOT DONE','PROCESSING','DONE') NOT NULL DEFAULT 'NOT DONE',
  `handled_by` char(255) DEFAULT NULL,
  `state` char(255) NOT NULL,
  `payroll_file` char(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service_state_payee_registration`
--

LOCK TABLES `service_state_payee_registration` WRITE;
/*!40000 ALTER TABLE `service_state_payee_registration` DISABLE KEYS */;
INSERT INTO `service_state_payee_registration` VALUES (1,'NOT DONE',NULL,'Lagos','uploads/service_requests/statePayeeRegistrationServiceRequest/payroll/Exit_interview form.doc','2020-11-18 01:58:13','2020-11-18 01:58:13');
/*!40000 ALTER TABLE `service_state_payee_registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `services` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(255) NOT NULL,
  `status` enum('ACTIVE','NOT ACTIVE') NOT NULL DEFAULT 'NOT ACTIVE',
  `description` text NOT NULL,
  `requirements` text NOT NULL,
  `file` char(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `service_file` (`file`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Business Registration','ACTIVE','Business Registration (CAC) application','Fill the forms and submit for processing.','BUSINESS_REGISTRATION_CAC.zip','2020-08-09 16:25:29','2020-08-09 16:25:29');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states_in_nigeria`
--

DROP TABLE IF EXISTS `states_in_nigeria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `states_in_nigeria` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `state` char(255) NOT NULL,
  `status` enum('ACTIVE','NOT ACTIVE') NOT NULL DEFAULT 'NOT ACTIVE',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `state` (`state`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states_in_nigeria`
--

LOCK TABLES `states_in_nigeria` WRITE;
/*!40000 ALTER TABLE `states_in_nigeria` DISABLE KEYS */;
INSERT INTO `states_in_nigeria` VALUES (1,'Abia','ACTIVE','2020-11-18 08:51:49','2020-11-18 08:32:47'),(2,'Adamawa','ACTIVE','2020-11-18 08:51:55','2020-11-18 08:32:47'),(3,'Akwa Ibom','ACTIVE','2020-11-18 08:51:59','2020-11-18 08:33:07'),(4,'Anambra','ACTIVE','2020-11-18 08:52:04','2020-11-18 08:33:07'),(5,'Bauchi','ACTIVE','2020-11-18 08:52:08','2020-11-18 08:33:20'),(6,'Bayelsa','ACTIVE','2020-11-18 08:52:13','2020-11-18 08:33:20'),(7,'Benue','ACTIVE','2020-11-18 08:52:19','2020-11-18 08:33:31'),(8,'Borno','ACTIVE','2020-11-18 08:52:24','2020-11-18 08:33:31'),(9,'Cross River','ACTIVE','2020-11-18 08:52:28','2020-11-18 08:33:45'),(10,'Delta','ACTIVE','2020-11-18 08:52:35','2020-11-18 08:33:45'),(11,'Ebonyi','ACTIVE','2020-11-18 08:52:39','2020-11-18 08:34:00'),(12,'Edo','ACTIVE','2020-11-18 08:52:44','2020-11-18 08:34:00'),(13,'Ekiti','ACTIVE','2020-11-18 08:52:48','2020-11-18 08:34:12'),(14,'Enugu','ACTIVE','2020-11-18 08:52:52','2020-11-18 08:34:12'),(15,'Gombe','ACTIVE','2020-11-18 08:52:57','2020-11-18 08:34:23'),(16,'Imo','ACTIVE','2020-11-18 08:53:01','2020-11-18 08:34:23'),(17,'Jigawa','ACTIVE','2020-11-18 08:53:07','2020-11-18 08:35:07'),(18,'Kaduna','ACTIVE','2020-11-18 08:53:11','2020-11-18 08:35:07'),(19,'Kano','ACTIVE','2020-11-18 08:53:15','2020-11-18 08:35:18'),(20,'Katsina','ACTIVE','2020-11-18 08:53:22','2020-11-18 08:35:18'),(21,'Kebbi','ACTIVE','2020-11-18 08:53:26','2020-11-18 08:35:31'),(22,'Kogi','ACTIVE','2020-11-18 08:53:31','2020-11-18 08:35:31'),(23,'Kwara','ACTIVE','2020-11-18 08:53:35','2020-11-18 08:35:39'),(24,'Lagos','ACTIVE','2020-11-18 08:53:39','2020-11-18 08:35:39'),(25,'Nasarawa','ACTIVE','2020-11-18 08:53:50','2020-11-18 08:36:00'),(26,'Niger','ACTIVE','2020-11-18 08:54:58','2020-11-18 08:36:00'),(27,'Ogun','ACTIVE','2020-11-18 08:55:02','2020-11-18 08:36:09'),(28,'Ondo','ACTIVE','2020-11-18 08:55:09','2020-11-18 08:36:09'),(29,'Osun','ACTIVE','2020-11-18 08:55:16','2020-11-18 08:36:23'),(30,'Oyo','ACTIVE','2020-11-18 08:55:25','2020-11-18 08:36:23'),(31,'Plateau','ACTIVE','2020-11-18 08:56:15','2020-11-18 08:36:30'),(32,'Rivers','ACTIVE','2020-11-18 08:56:37','2020-11-18 08:36:30'),(33,'Sokoto','ACTIVE','2020-11-18 08:56:43','2020-11-18 08:36:44'),(34,'Taraba','ACTIVE','2020-11-18 08:57:12','2020-11-18 08:36:44'),(35,'Yobe','ACTIVE','2020-11-18 08:57:16','2020-11-18 08:36:55'),(36,'Zamfara','ACTIVE','2020-11-18 08:57:22','2020-11-18 08:36:55'),(37,'Federal Capital Territory (FCT)','ACTIVE','2020-11-18 08:57:30','2020-11-18 08:37:00');
/*!40000 ALTER TABLE `states_in_nigeria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `training`
--

DROP TABLE IF EXISTS `training`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `training` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(255) NOT NULL,
  `description` text NOT NULL,
  `startDate` char(255) DEFAULT NULL,
  `startTime` char(255) DEFAULT 'NULL',
  `endDate` char(255) DEFAULT 'NULL',
  `endTime` char(255) DEFAULT 'NULL',
  `location` char(255) NOT NULL,
  `status` enum('ACTIVE','NOT ACTIVE') NOT NULL DEFAULT 'NOT ACTIVE',
  `training_image_path` char(255) NOT NULL,
  `accessKey` char(255) DEFAULT NULL,
  `type` enum('PAID','FREE') NOT NULL DEFAULT 'FREE',
  `currency` enum('$','&#8358;') NOT NULL DEFAULT '&#8358;',
  `price` char(50) NOT NULL DEFAULT '0.00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`accessKey`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `training`
--

LOCK TABLES `training` WRITE;
/*!40000 ALTER TABLE `training` DISABLE KEYS */;
INSERT INTO `training` VALUES (1,'training 101','test training','NULL','NULL','NULL','NULL','Lagos, Nigeria','ACTIVE','uploads/trainings/card-2.jpg','1373h3ur84hfhf8vh438hf','FREE','&#8358;','0.00','2020-08-09 03:11:50','2020-08-09 03:11:50'),(2,'testing 192','test training','NULL','NULL','NULL','NULL','Lagos, Nigeria','ACTIVE','uploads/trainings/card-2.jpg','1373h3ur84hfhf8vh438hfeeee','FREE','&#8358;','0.00','2020-08-09 13:42:26','2020-08-09 13:42:26');
/*!40000 ALTER TABLE `training` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `training_attendees`
--

DROP TABLE IF EXISTS `training_attendees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `training_attendees` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` char(255) NOT NULL,
  `status` enum('ATTENDED','DID NOT ATTEND') NOT NULL DEFAULT 'DID NOT ATTEND',
  `training_id` bigint(20) unsigned NOT NULL,
  `created_by` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `training_attendees`
--

LOCK TABLES `training_attendees` WRITE;
/*!40000 ALTER TABLE `training_attendees` DISABLE KEYS */;
/*!40000 ALTER TABLE `training_attendees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `training_files`
--

DROP TABLE IF EXISTS `training_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `training_files` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `training_id` bigint(20) unsigned NOT NULL,
  `name` char(255) NOT NULL,
  `path` char(255) NOT NULL,
  `status` enum('ACTIVE','NOT ACTIVE') NOT NULL DEFAULT 'NOT ACTIVE',
  `orderNumber` tinyint(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `path` (`path`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `training_files`
--

LOCK TABLES `training_files` WRITE;
/*!40000 ALTER TABLE `training_files` DISABLE KEYS */;
INSERT INTO `training_files` VALUES (1,1,'testimonial_1.mp4','uploads/trainings/testimonial_1.mp4','ACTIVE',1,'2020-08-09 03:13:38'),(3,2,'testimonial_2.mp4','uploads/trainings/testimonial_2.mp4','ACTIVE',1,'2020-08-09 14:27:57');
/*!40000 ALTER TABLE `training_files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `status` enum('ACTIVE','NOT ACTIVE') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NOT ACTIVE',
  `confirmed_email` enum('YES','NO') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NO',
  `name` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` text COLLATE utf8mb4_unicode_ci,
  `password` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'NOT ACTIVE','NO','bernard','greendublin009@gmail.com',NULL,NULL,'$2y$10$x1W.NfwYhjCOjajjHq8bLeJTzSONj.973DBSvOD5DYVQdpoNYM0oS',NULL,NULL,'2020-04-30 23:00:00','2020-05-08 23:00:00'),(2,'NOT ACTIVE','NO','babafemi.ibitolu','babafemi.ibitolu@hbng.com',NULL,NULL,NULL,NULL,NULL,'2020-05-02 03:47:34','2020-05-02 03:47:34'),(17,'ACTIVE','YES','Cliquedom','greendublin007@gmail.com','www.cliquedom.com','about cliquedom technologies. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n','$2y$10$T.r.itGRWMfBeXvcr.Et1uxTY.XOpB4MYKqf5LObYvKf5TJKO5cWC','+2347032090809','public/uploads/companylogos/d550073c29e53cfba7e7b7c704155b781605718015.jpeg','2020-07-19 13:58:36','2020-11-18 16:46:55'),(18,'NOT ACTIVE','NO','daniel Corporate','daniel@gmail.com',NULL,NULL,'$2y$10$wKOvDHMced/d..8XNwGrO.JNsKslYKzAB/PbdirEBP3cLMbXsUb3q','080905060650',NULL,'2020-11-09 19:35:33','2020-11-09 19:35:33'),(19,'NOT ACTIVE','NO','Juliet Wilcox','juliet@gmail.com',NULL,NULL,'$2y$10$thMBaQCnSDzFOPHyv5hjqu5cY6c1yfqip5yVWXKedcn7qTLWgznj2','080905060651',NULL,'2020-11-09 19:37:43','2020-11-09 19:37:43'),(20,'NOT ACTIVE','NO','Ida Wilcox','ida@gmail.com',NULL,NULL,'$2y$10$jWSJjLr6MfvK3mDNBcR6QO9PaTW2U0eZUyScRA/h5H3j9ck1kK8P.','080905060652',NULL,'2020-11-09 19:38:16','2020-11-09 19:38:16'),(21,'NOT ACTIVE','NO','Ida Dublin-Green','idawilcox@gmail.com',NULL,NULL,'$2y$10$C/kGz7zm4sfSAEr2hH5TyeMNNpGqFo861Q3v14R.VDKr31iYHGpQm','08095060650',NULL,'2020-11-09 19:39:25','2020-11-09 19:39:25'),(22,'NOT ACTIVE','NO','Test Company 3','greendublin@yahoo.com',NULL,NULL,'$2y$10$OszngqAjHFNZklP3AOOMAeuvKoz84SWWkkZY82tueVPzKd9owXXE6','+2347032090809',NULL,'2020-11-18 15:13:17','2020-11-18 15:13:17'),(25,'NOT ACTIVE','NO','Norfin Offshore Ltd','daniel.duodu@norfinoffshore.com','www.norfinoffshore.com','Norfin Offshore Ltd was founded in 2010 by experienced marine professionals to provide Ship Management, Vessels Brokerage, marine engineering and maritime related services to ship owners and companies involve in offshore exploration and production in Nigeria.\n\nIn adaptation to regional and maritime industry and business trends, we have expanded our services and network thus serving the fast emerging needs in the West Africa region.','$2y$10$WQ9SFKpkigqrR4p9wxLNhOB8owqqULV9r88ODGrkuE43aYgZdpDpq','08180881318','public/uploads/companylogos/81bae7df52fcbcd3b25882e510fb30061605720614.png','2020-11-18 17:08:41','2020-11-18 17:31:26'),(26,'NOT ACTIVE','NO','Cw-world','Cwworld55@gmail.com',NULL,NULL,'$2y$10$JaGw8s7wni/83ZpNq0NsUeHgoQzZypm07b25/IH.xODeoz2K6sbc2','+2347035892832',NULL,'2020-11-23 12:20:12','2020-11-23 12:20:12'),(27,'NOT ACTIVE','NO','opeans nigeria limited','warri@opeansafety.com',NULL,NULL,'$2y$10$fRySIGW2KPGbG9IsQrjMIuNGq6..xl9g1Os25tVZnOroJYgqltjxi','08185005753',NULL,'2020-12-07 12:52:16','2020-12-07 12:52:16'),(28,'NOT ACTIVE','NO','Ringadas Nigeria','agbinonedestiny@yahoo.com',NULL,NULL,'$2y$10$Uoc0YK2IGqk0nfhu6lDVvuP1k1Q6rJHBoh0SqkhcXmBm5agUpoA3a','2347064901380',NULL,'2020-12-07 13:30:12','2020-12-07 13:30:12'),(29,'NOT ACTIVE','NO','Juwi','greendublin007@hotmail.com',NULL,NULL,'$2y$10$Zs6dV2pgfAklYI12husDmuYrwQpY8RK21SXAOhmaiXhhddAZKh0j.','07032090809',NULL,'2020-12-24 00:38:34','2020-12-24 00:38:34');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_document_expiration`
--

DROP TABLE IF EXISTS `users_document_expiration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_document_expiration` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `status` enum('ACTIVE','NOT ACTIVE') NOT NULL DEFAULT 'NOT ACTIVE',
  `name` char(255) NOT NULL,
  `value_in_months` int(11) NOT NULL,
  `time_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_document_expiration`
--

LOCK TABLES `users_document_expiration` WRITE;
/*!40000 ALTER TABLE `users_document_expiration` DISABLE KEYS */;
INSERT INTO `users_document_expiration` VALUES (1,'ACTIVE','6 months',6,'2020-08-06 14:07:28'),(2,'ACTIVE','1 year',12,'2020-08-06 14:07:28'),(3,'ACTIVE','2 years',24,'2020-08-06 14:07:28'),(4,'NOT ACTIVE','3 years',36,'2020-08-06 14:07:28'),(5,'ACTIVE','4 years',48,'2020-08-06 14:07:28'),(6,'ACTIVE','5 years',60,'2020-08-06 14:07:28');
/*!40000 ALTER TABLE `users_document_expiration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_document_send_history`
--

DROP TABLE IF EXISTS `users_document_send_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_document_send_history` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `document_owner` bigint(20) unsigned NOT NULL,
  `status` enum('SENT','NOT SENT') NOT NULL DEFAULT 'NOT SENT',
  `email` char(255) NOT NULL,
  `document_key` char(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_document_send_history`
--

LOCK TABLES `users_document_send_history` WRITE;
/*!40000 ALTER TABLE `users_document_send_history` DISABLE KEYS */;
INSERT INTO `users_document_send_history` VALUES (1,17,'NOT SENT','greendublin007@gmail.com','$2y$10$NPGTTGA5KVlLv6HQlOnm2O1J0IBI0CKWaDiRzXrv1BO71lpk/nwji','2020-08-03 00:58:21','2020-08-03 00:58:21'),(2,17,'NOT SENT','greendublin@yahoo.com','$2y$10$NPGTTGA5KVlLv6HQlOnm2O1J0IBI0CKWaDiRzXrv1BO71lpk/nwji','2020-08-03 00:58:21','2020-08-03 00:58:21'),(3,17,'NOT SENT','greendublin007@gmail.com','$2y$10$NPGTTGA5KVlLv6HQlOnm2O1J0IBI0CKWaDiRzXrv1BO71lpk/nwji','2020-08-03 14:51:56','2020-08-03 14:51:56'),(4,17,'NOT SENT','greendublin007@gmail.com','$2y$10$NPGTTGA5KVlLv6HQlOnm2O1J0IBI0CKWaDiRzXrv1BO71lpk/nwji','2020-08-03 14:54:42','2020-08-03 14:54:42'),(5,17,'NOT SENT','greendublin@yahoo.com','$2y$10$NPGTTGA5KVlLv6HQlOnm2O1J0IBI0CKWaDiRzXrv1BO71lpk/nwji','2020-08-03 14:54:43','2020-08-03 14:54:43');
/*!40000 ALTER TABLE `users_document_send_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_document_type`
--

DROP TABLE IF EXISTS `users_document_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_document_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(255) NOT NULL,
  `status` enum('ACTIVE','NOT ACTIVE') NOT NULL DEFAULT 'NOT ACTIVE',
  `description` text NOT NULL,
  `time_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_document_type`
--

LOCK TABLES `users_document_type` WRITE;
/*!40000 ALTER TABLE `users_document_type` DISABLE KEYS */;
INSERT INTO `users_document_type` VALUES (1,'Department of petroleum resources(DPR)','ACTIVE','Department of petroleum resources(DPR)','2020-07-30 01:16:05'),(2,'Corporate Affairs commission(CAC)','ACTIVE','Corporate Affairs commission(CAC)','2020-07-30 01:16:19'),(3,'Nigerian maritime Administration & Safety Agency(NIMASA)','ACTIVE','Nigerian maritime Administration & Safety Agency(NIMASA)','2020-07-30 01:16:44'),(4,'State government Tax','ACTIVE','State government Tax','2020-07-30 01:16:44'),(5,'National pension commission','ACTIVE','National pension commission','2020-07-30 01:17:04'),(6,'National social insurance Trust Fund','ACTIVE','National social insurance Trust Fund','2020-07-30 01:17:04'),(7,'Industrial Trust Fund','ACTIVE','Industrial Trust Fund','2020-07-30 01:17:34'),(8,'NIPEX portal','ACTIVE','NIPEX portal','2020-07-30 01:17:34'),(9,'Others','ACTIVE','Others non defined documents','2020-07-30 01:17:52');
/*!40000 ALTER TABLE `users_document_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_documents`
--

DROP TABLE IF EXISTS `users_documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_documents` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `document_type` char(255) DEFAULT NULL,
  `expiration_interval` char(255) DEFAULT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `path` char(255) DEFAULT NULL,
  `name` char(255) DEFAULT NULL,
  `description` text NOT NULL,
  `uploaded_by` char(255) DEFAULT NULL,
  `status` enum('ACTIVE','NOT ACTIVE') NOT NULL DEFAULT 'NOT ACTIVE',
  `expiring_date` char(50) DEFAULT NULL,
  `document_key` char(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_document_to_company_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_documents`
--

LOCK TABLES `users_documents` WRITE;
/*!40000 ALTER TABLE `users_documents` DISABLE KEYS */;
INSERT INTO `users_documents` VALUES (1,'Corporate Affairs commission(CAC)','6',17,'uploads/documents/0466f4c18f7357cf4b91c627268f210d1596358433.jpg','0466f4c18f7357cf4b91c627268f210d1596358433.jpg','this is a test to update again','greendublin007@gmail.com','ACTIVE','2020-08-17','$2y$10$NPGTTGA5KVlLv6HQlOnm2O1J0IBI0CKWaDiRzXrv1BO71lpk/nwji','2020-08-02 08:53:53','2020-08-02 21:09:53'),(2,'National pension commission','6',17,'uploads/documents/2e8f21de8f53d7c59a1eafc7ba22d1531596368733.pdf','2e8f21de8f53d7c59a1eafc7ba22d1531596368733.pdf','test please ignore','greendublin007@gmail.com','ACTIVE','2020-10-24','$2y$10$H2MXCxzy0s74mwfQu41hCeTd9C9isG6g8WWT4F5bU/PRXkPme1Ixq','2020-08-02 11:45:33','2020-08-02 11:45:33'),(3,'Nigerian maritime Administration & Safety Agency(NIMASA)','24',17,'uploads/documents/8ed05836b0bfd9fee6651a8b02b309f61596724829.png','8ed05836b0bfd9fee6651a8b02b309f61596724829.png','test with document expiration interval','greendublin007@gmail.com','ACTIVE','2020-08-31','$2y$10$G.sASKB3aFszz0N17f8Stul8wgJpd3SWdnWJ3Q0Ww/Zrg/mz8wB42','2020-08-06 14:40:29','2020-08-06 14:40:29'),(4,'Department of petroleum resources(DPR)','48',17,'uploads/documents/3dcaf761cb5a748bd984393c759a25ba1596724875.png','3dcaf761cb5a748bd984393c759a25ba1596724875.png','test again','greendublin007@gmail.com','ACTIVE','2020-08-29','$2y$10$3XIWKpO5Np76ARNawxbGjeVCjgumfizZJf5qSBGEiIxSQa9gTpw.2','2020-08-06 14:41:15','2020-08-06 14:41:15'),(5,'Corporate Affairs commission(CAC)','24',17,'uploads/documents/d550073c29e53cfba7e7b7c704155b781605891182.jpeg','d550073c29e53cfba7e7b7c704155b781605891182.jpeg','testing 123','greendublin007@gmail.com','ACTIVE','2020-11-04','$2y$10$2AFsJFfjpUfTSdOS9mfW/u7r.3Ztf4P/Xh/7y6HJd1Y/BjGjkEgdi','2020-11-20 16:53:02','2020-11-20 16:53:02'),(6,'Department of petroleum resources(DPR)','12',25,'uploads/documents/4fa8e54287cd8799bb7456917752acb81606144706.jpg','4fa8e54287cd8799bb7456917752acb81606144706.jpg','SPECIAL TRANSPOR','daniel.duodu@norfinoffshore.com','ACTIVE','2020-12-10','$2y$10$bPeuVyh3lvBslaq1q9UWmuvjo0RFDYl41cjzaXDsNDc2uxqrUZ8nq','2020-11-23 15:18:26','2020-11-23 15:18:26'),(7,'Department of petroleum resources(DPR)','12',17,'uploads/documents/719e37fda7b45208c903b886b6909dec1608117078.pdf','719e37fda7b45208c903b886b6909dec1608117078.pdf','Hello','greendublin007@gmail.com','ACTIVE','2020-12-16','$2y$10$Y/JsqZubV62jGvvwTV4nlOa1KfORIk9kl0CU3t9HYTzbKH9DlKtz2','2020-12-16 11:11:18','2020-12-16 11:11:18'),(8,'Department of petroleum resources(DPR)','12',17,'uploads/documents/719e37fda7b45208c903b886b6909dec1608117104.pdf','719e37fda7b45208c903b886b6909dec1608117104.pdf','Hello','greendublin007@gmail.com','ACTIVE','2020-12-16','$2y$10$wHJNii8AGRCNMoeLhv.ka.637GqdT3epIUKkWgVYxw8C5TAkzupeW','2020-12-16 11:11:44','2020-12-16 11:11:44'),(9,'Department of petroleum resources(DPR)','24',25,'uploads/documents/28b58acabc9ddbfd84319efe9a696ba21608117258.pdf','28b58acabc9ddbfd84319efe9a696ba21608117258.pdf','test','daniel.duodu@norfinoffshore.com','ACTIVE','2020-12-16','$2y$10$CmjA/DD1heOfAvfA9gfkfOrcBo8cQHCnSr2PZ15es9CrO92/cwH4q','2020-12-16 11:14:18','2020-12-16 11:14:18'),(10,'Department of petroleum resources(DPR)','24',25,'uploads/documents/9db1defc0630458e66e300e7bfd81b861608117319.pdf','9db1defc0630458e66e300e7bfd81b861608117319.pdf','test','daniel.duodu@norfinoffshore.com','ACTIVE','2020-12-16','$2y$10$pp8ptcM4TCqKXYhCQo.bi.yXfRtbW.PRyxIPt8Y5jRABVYtux5KNe','2020-12-16 11:15:19','2020-12-16 11:15:19');
/*!40000 ALTER TABLE `users_documents` ENABLE KEYS */;
UNLOCK TABLES;
