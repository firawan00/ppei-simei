-- AdminNeo 5.2.1 MariaDB 10.4.28 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `admin_configs`;
CREATE TABLE `admin_configs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `inbox`;
CREATE TABLE `inbox` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `ref-model` varchar(255) NOT NULL,
  `ref-id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `ref_id` varchar(255) DEFAULT NULL,
  `hasread` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `inbox_from_foreign` (`from`),
  KEY `inbox_to_foreign` (`to`),
  CONSTRAINT `inbox_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `inbox_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_billoflading`;
CREATE TABLE `md_billoflading` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `data` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_billoflading_from_foreign` (`from`),
  KEY `md_billoflading_to_foreign` (`to`),
  CONSTRAINT `md_billoflading_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_billoflading_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_deliveryorder`;
CREATE TABLE `md_deliveryorder` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `si_id` int(10) unsigned DEFAULT NULL,
  `container_no` varchar(255) DEFAULT NULL,
  `est` varchar(255) DEFAULT NULL,
  `hal` varchar(255) DEFAULT NULL,
  `juml_container` varchar(255) DEFAULT NULL,
  `no` varchar(255) DEFAULT NULL,
  `rencana_kapal` varchar(255) DEFAULT NULL,
  `seal_no` varchar(255) DEFAULT NULL,
  `shipper` varchar(255) DEFAULT NULL,
  `sino` varchar(255) DEFAULT NULL,
  `tujuan` varchar(255) DEFAULT NULL,
  `est_openstack` varchar(255) DEFAULT NULL,
  `est_closingtime` varchar(255) DEFAULT NULL,
  `utc` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_deliveryorder_from_foreign` (`from`),
  KEY `md_deliveryorder_to_foreign` (`to`),
  CONSTRAINT `md_deliveryorder_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_deliveryorder_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_inquiry`;
CREATE TABLE `md_inquiry` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `no` varchar(255) DEFAULT NULL,
  `docto` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `article` varchar(255) DEFAULT NULL,
  `shipment` varchar(255) DEFAULT NULL,
  `who` varchar(255) DEFAULT NULL,
  `sentto` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_inquiry_from_foreign` (`from`),
  KEY `md_inquiry_to_foreign` (`to`),
  CONSTRAINT `md_inquiry_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_inquiry_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_introductionletter`;
CREATE TABLE `md_introductionletter` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `docref` varchar(255) DEFAULT NULL,
  `docto` varchar(255) DEFAULT NULL,
  `desc_of_goods` text DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `price_fob` varchar(255) DEFAULT NULL,
  `capacity` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_introductionletter_from_foreign` (`from`),
  KEY `md_introductionletter_to_foreign` (`to`),
  CONSTRAINT `md_introductionletter_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_introductionletter_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_invoice`;
CREATE TABLE `md_invoice` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `consignee` varchar(255) DEFAULT NULL,
  `consignee_address` varchar(255) DEFAULT NULL,
  `consignee_country` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `issuing_bank` varchar(255) DEFAULT NULL,
  `lcno` varchar(255) DEFAULT NULL,
  `no` varchar(255) DEFAULT NULL,
  `scno` varchar(255) DEFAULT NULL,
  `ship_by` varchar(255) DEFAULT NULL,
  `ship_on` varchar(255) DEFAULT NULL,
  `shipping_mark` varchar(255) DEFAULT NULL,
  `tod` varchar(255) DEFAULT NULL,
  `product_list` longtext DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `status_notes` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_invoice_from_foreign` (`from`),
  KEY `md_invoice_to_foreign` (`to`),
  CONSTRAINT `md_invoice_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_invoice_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_lc`;
CREATE TABLE `md_lc` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `status_notes` varchar(255) DEFAULT NULL,
  `data` longtext DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_lc_from_foreign` (`from`),
  KEY `md_lc_to_foreign` (`to`),
  CONSTRAINT `md_lc_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_lc_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_lc_release`;
CREATE TABLE `md_lc_release` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `sender` varchar(255) DEFAULT NULL,
  `receiver` varchar(255) DEFAULT NULL,
  `body` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_lc_release_from_foreign` (`from`),
  KEY `md_lc_release_to_foreign` (`to`),
  CONSTRAINT `md_lc_release_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_lc_release_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_lkn`;
CREATE TABLE `md_lkn` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `jenis_incoterm` varchar(255) DEFAULT NULL,
  `latest_date_shipment` varchar(255) DEFAULT NULL,
  `product_list` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_lkn_from_foreign` (`from`),
  KEY `md_lkn_to_foreign` (`to`),
  CONSTRAINT `md_lkn_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_lkn_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_npe`;
CREATE TABLE `md_npe` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `data` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_npe_from_foreign` (`from`),
  KEY `md_npe_to_foreign` (`to`),
  CONSTRAINT `md_npe_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_npe_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_offeringletter`;
CREATE TABLE `md_offeringletter` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `nodate` varchar(255) DEFAULT NULL,
  `doc_no` varchar(255) DEFAULT NULL,
  `doc_cc` varchar(255) DEFAULT NULL,
  `doc_to` varchar(255) DEFAULT NULL,
  `commodity` text DEFAULT NULL,
  `qty` varchar(255) DEFAULT NULL,
  `fob` varchar(255) DEFAULT NULL,
  `fob_value` varchar(255) DEFAULT NULL,
  `packing` varchar(255) DEFAULT NULL,
  `shipment` varchar(255) DEFAULT NULL,
  `shipment_method` varchar(255) DEFAULT NULL,
  `top` varchar(255) DEFAULT NULL,
  `validity` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_offeringletter_from_foreign` (`from`),
  KEY `md_offeringletter_to_foreign` (`to`),
  CONSTRAINT `md_offeringletter_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_offeringletter_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_ordering`;
CREATE TABLE `md_ordering` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `doc_no` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `notify` varchar(255) DEFAULT NULL,
  `packing` varchar(255) DEFAULT NULL,
  `partial_shipment` varchar(255) DEFAULT NULL,
  `payment` varchar(255) DEFAULT NULL,
  `transshipment` varchar(255) DEFAULT NULL,
  `tod` varchar(255) DEFAULT NULL,
  `product_list` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_ordering_from_foreign` (`from`),
  KEY `md_ordering_to_foreign` (`to`),
  CONSTRAINT `md_ordering_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_ordering_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_packinglist`;
CREATE TABLE `md_packinglist` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `consignee` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `issuing_bank` varchar(255) DEFAULT NULL,
  `lcno` varchar(255) DEFAULT NULL,
  `no` varchar(255) DEFAULT NULL,
  `scno` varchar(255) DEFAULT NULL,
  `ship_by` varchar(255) DEFAULT NULL,
  `ship_on` varchar(255) DEFAULT NULL,
  `shipping_mark` varchar(255) DEFAULT NULL,
  `tod` varchar(255) DEFAULT NULL,
  `product_list` longtext DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `status_notes` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_packinglist_from_foreign` (`from`),
  KEY `md_packinglist_to_foreign` (`to`),
  CONSTRAINT `md_packinglist_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_packinglist_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_peb`;
CREATE TABLE `md_peb` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `invoice_id` int(10) unsigned DEFAULT NULL,
  `si_id` int(10) unsigned DEFAULT NULL,
  `pl_id` int(10) unsigned DEFAULT NULL,
  `do_id` int(10) unsigned DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `status_notes` varchar(255) DEFAULT NULL,
  `data` longtext DEFAULT NULL,
  `product_list` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_peb_from_foreign` (`from`),
  KEY `md_peb_to_foreign` (`to`),
  CONSTRAINT `md_peb_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_peb_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_salescontract`;
CREATE TABLE `md_salescontract` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `contract_no` varchar(255) DEFAULT NULL,
  `contract_ref` varchar(255) DEFAULT NULL,
  `contract_date` varchar(255) DEFAULT NULL,
  `destination` varchar(255) DEFAULT NULL,
  `notify_address` varchar(255) DEFAULT NULL,
  `partial_shipment` varchar(255) DEFAULT NULL,
  `payment` varchar(255) DEFAULT NULL,
  `shipment_date` varchar(255) DEFAULT NULL,
  `shipping_marks` varchar(255) DEFAULT NULL,
  `transshipment` varchar(255) DEFAULT NULL,
  `product_list` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_salescontract_from_foreign` (`from`),
  KEY `md_salescontract_to_foreign` (`to`),
  CONSTRAINT `md_salescontract_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_salescontract_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_shippinginstruction`;
CREATE TABLE `md_shippinginstruction` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `pl_id` int(10) unsigned DEFAULT NULL,
  `consignee` varchar(255) DEFAULT NULL,
  `copy_bl` varchar(255) DEFAULT NULL,
  `desc_goods` varchar(255) DEFAULT NULL,
  `docref` varchar(255) DEFAULT NULL,
  `docto` varchar(255) DEFAULT NULL,
  `feeder_vessel` varchar(255) DEFAULT NULL,
  `gross_weight` varchar(255) DEFAULT NULL,
  `lc_ref` varchar(255) DEFAULT NULL,
  `nett_weight` varchar(255) DEFAULT NULL,
  `notify_party` varchar(255) DEFAULT NULL,
  `toname` varchar(255) DEFAULT NULL,
  `num_package` varchar(255) DEFAULT NULL,
  `ocean_vessel` varchar(255) DEFAULT NULL,
  `pod` varchar(255) DEFAULT NULL,
  `pol` varchar(255) DEFAULT NULL,
  `por` varchar(255) DEFAULT NULL,
  `shipper` varchar(255) DEFAULT NULL,
  `shipping_marks` varchar(255) DEFAULT NULL,
  `podelivery` varchar(255) DEFAULT NULL,
  `finaldestination` varchar(255) DEFAULT NULL,
  `etd` varchar(255) DEFAULT NULL,
  `eta` varchar(255) DEFAULT NULL,
  `qoc` varchar(255) DEFAULT NULL,
  `product_list` longtext DEFAULT NULL,
  `stuffing_date` varchar(255) DEFAULT NULL,
  `freight_term` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `status_notes` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_shippinginstruction_from_foreign` (`from`),
  KEY `md_shippinginstruction_to_foreign` (`to`),
  CONSTRAINT `md_shippinginstruction_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_shippinginstruction_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_ska_a`;
CREATE TABLE `md_ska_a` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `invoice_id` int(10) unsigned DEFAULT NULL,
  `pl_id` int(10) unsigned DEFAULT NULL,
  `bl_id` int(10) unsigned DEFAULT NULL,
  `npe_id` int(10) unsigned DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `status_notes` varchar(255) DEFAULT NULL,
  `data` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_ska_a_from_foreign` (`from`),
  KEY `md_ska_a_to_foreign` (`to`),
  CONSTRAINT `md_ska_a_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_ska_a_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_ska_d`;
CREATE TABLE `md_ska_d` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `invoice_id` int(10) unsigned DEFAULT NULL,
  `pl_id` int(10) unsigned DEFAULT NULL,
  `bl_id` int(10) unsigned DEFAULT NULL,
  `npe_id` int(10) unsigned DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `status_notes` varchar(255) DEFAULT NULL,
  `data` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_ska_d_from_foreign` (`from`),
  KEY `md_ska_d_to_foreign` (`to`),
  CONSTRAINT `md_ska_d_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_ska_d_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `md_wessel`;
CREATE TABLE `md_wessel` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `from` char(36) NOT NULL,
  `to` char(36) NOT NULL,
  `invoice_id` int(10) unsigned DEFAULT NULL,
  `pl_id` int(10) unsigned DEFAULT NULL,
  `bl_id` int(10) unsigned DEFAULT NULL,
  `npe_id` int(10) unsigned DEFAULT NULL,
  `skaa_id` int(10) unsigned DEFAULT NULL,
  `skad_id` int(10) unsigned DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `status_notes` varchar(255) DEFAULT NULL,
  `data` longtext DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `md_wessel_from_foreign` (`from`),
  KEY `md_wessel_to_foreign` (`to`),
  CONSTRAINT `md_wessel_from_foreign` FOREIGN KEY (`from`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `md_wessel_to_foreign` FOREIGN KEY (`to`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` char(36) DEFAULT NULL,
  `client_id` char(36) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` char(36) NOT NULL,
  `client_id` char(36) NOT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients` (
  `id` char(36) NOT NULL,
  `user_id` char(36) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `secret` varchar(100) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `oauth_personal_access_clients`;
CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` char(36) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` char(36) NOT NULL,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL DEFAULT 'PHONE 62-21-5664425,',
  `country` varchar(255) NOT NULL DEFAULT 'Indonesia',
  `role` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- 2026-07-28 14:15:43 UTC
