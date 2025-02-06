-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2025 at 09:16 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `password` varchar(255) NOT NULL,
  `role` enum('manager','admin','data entry','super admin','POS operator') DEFAULT 'admin',
  `confirm_password` varchar(255) NOT NULL,
  `address` text DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `zip_code` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `status`, `password`, `role`, `confirm_password`, `address`, `country`, `state`, `city`, `zip_code`, `created_at`, `updated_at`, `phone`) VALUES
(5494, 'Michael Johnson', 'hello@example.com', 'active', 'password789', 'manager', 'password789', '789 Oak Dr', 'USA', 'Texas', 'Houston', '77001', '2025-01-24 06:15:03', '2025-01-24 06:15:03', '1231231234'),
(5495, 'Jane Smith', 'zani@example.com', 'inactive', 'password456', 'admin', 'password456', '456 Maple Ave', 'USA', 'New York', 'New York', '10001', '2025-01-24 06:15:03', '2025-01-24 06:15:03', '0987654321'),
(5496, 'Emily Davis', 'sonu@example.com', 'active', 'password101', 'data entry', 'password101', '321 Pine Ln', 'USA', 'Florida', 'Miami', '33101', '2025-01-24 06:15:03', '2025-01-24 06:15:03', '3213214321'),
(5497, 'James Williams', '@example.com', 'active', 'password102', 'POS operator', 'password102', '654 Elm St', 'USA', 'Illinois', 'Chicago', '60601', '2025-01-24 06:15:03', '2025-01-24 06:15:03', '4564564567');

-- --------------------------------------------------------

--
-- Table structure for table `alerts`
--

CREATE TABLE `alerts` (
  `id` int(11) NOT NULL,
  `notification_type` enum('Mail','SMS','Push Notification') NOT NULL,
  `order_pending_message` varchar(255) NOT NULL,
  `order_confirmation_message` varchar(255) NOT NULL,
  `order_on_the_way_message` varchar(255) NOT NULL,
  `order_delivered_message` varchar(255) NOT NULL,
  `order_canceled_message` varchar(255) NOT NULL,
  `order_rejected_message` varchar(255) NOT NULL,
  `admin_new_order_message` varchar(255) NOT NULL,
  `order_pending_status` tinyint(1) NOT NULL DEFAULT 1,
  `order_confirmation_status` tinyint(1) NOT NULL DEFAULT 1,
  `order_on_the_way_status` tinyint(1) NOT NULL DEFAULT 1,
  `order_delivered_status` tinyint(1) NOT NULL DEFAULT 1,
  `order_canceled_status` tinyint(1) NOT NULL DEFAULT 1,
  `order_rejected_status` tinyint(1) NOT NULL DEFAULT 0,
  `admin_new_order_status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `analytics`
--

CREATE TABLE `analytics` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `analytics`
--

INSERT INTO `analytics` (`id`, `name`, `status`, `created_at`) VALUES
(58, 'store sales', 'Active', '2024-11-25 16:52:30'),
(59, 'store sales', 'Inactive', '2024-11-25 16:53:08'),
(60, 'store sales', 'Inactive', '2024-11-26 10:12:25'),
(61, 'store salesssss', 'Inactive', '2024-12-13 11:03:37');

-- --------------------------------------------------------

--
-- Table structure for table `analytic_section`
--

CREATE TABLE `analytic_section` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `section` enum('Header','Body','Footer') NOT NULL,
  `data` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `analytic_section`
--

INSERT INTO `analytic_section` (`id`, `name`, `section`, `data`, `created_at`, `updated_at`) VALUES
(5, 'Store', 'Footer', 'sdfghjkl', '2024-11-26 10:12:43', '2024-11-26 10:12:43'),
(6, 'store sales', 'Header', 'wertyuio', '2024-12-13 11:04:11', '2024-12-13 11:04:11');

-- --------------------------------------------------------

--
-- Table structure for table `area_shipping`
--

CREATE TABLE `area_shipping` (
  `id` int(11) NOT NULL,
  `country` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `shipping_cost` decimal(10,2) NOT NULL,
  `order_status` enum('Active','Inactive') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `area_shipping`
--

INSERT INTO `area_shipping` (`id`, `country`, `state`, `city`, `shipping_cost`, `order_status`) VALUES
(4, 'India', 'Punjab', 'Lahore', 23.00, 'Active'),
(5, 'Pakistan', 'Sindh', 'Karachi', 34.00, 'Active'),
(6, 'India', 'Sindh', 'Lahore', 23.00, 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `benefits`
--

CREATE TABLE `benefits` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `benefits`
--

INSERT INTO `benefits` (`id`, `title`, `status`, `image`, `description`, `created_at`, `updated_at`) VALUES
(2, 'sdfghjkl123', 'active', '1737535772968.jpg', 'erftyhuji', '2025-01-13 10:04:32', '2025-01-22 08:49:33');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `status` enum('Active','Inactive') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`, `state`, `status`) VALUES
(29, 'Faisalabad', '7', 'Inactive'),
(30, 'Mumbai', '6', 'Inactive'),
(31, 'Mumbai', '6', 'Active'),
(39, 'Faisalabad', '6', 'Active'),
(47, 'Faisalabad', '7', 'Inactive');

-- --------------------------------------------------------

--
-- Stand-in structure for view `city_details`
-- (See below for the actual view)
--
CREATE TABLE `city_details` (
`city_id` int(11)
,`city_name` varchar(255)
,`state_name` varchar(255)
,`city_status` enum('Active','Inactive')
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `city_with_states`
-- (See below for the actual view)
--
CREATE TABLE `city_with_states` (
`city_id` int(11)
,`city_name` varchar(255)
,`state_name` varchar(255)
,`city_status` enum('Active','Inactive')
);

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `latitude` varchar(50) NOT NULL,
  `longitude` varchar(50) NOT NULL,
  `website` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `city` varchar(100) NOT NULL,
  `zipCode` varchar(10) NOT NULL,
  `state` varchar(100) NOT NULL,
  `countryCode` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `companyName`, `email`, `latitude`, `longitude`, `website`, `phone`, `city`, `zipCode`, `state`, `countryCode`, `address`, `created_at`) VALUES
(1, 'ShopKing - eCommerce App with Laravel Website & Admin Panel with POS', 'info@inilabs.net', '23.7699072', '90.3643136', 'https://foodking.dev', '+880 13333846282', 'Mirpur 1', '1216', 'Dhaka', 'Bangladesh (BGD)', 'House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216', '2024-11-23 10:01:18'),
(2, 'ShopKing - eCommerce App with Laravel Website & Admin Panel with POS', 'info@inilabs.net', '23.7699072', '90.3643136', 'https://foodking.dev', '+880 13333846282', 'Mirpur 1', '1216', 'Dhaka', 'Bangladesh (BGD)', 'House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216', '2024-11-23 10:01:21'),
(3, 'ShopKing - eCommerce App with Laravel Website & Admin Panel with POS', 'info@inilabs.net', '23.7699072', '90.3643136', 'https://foodking.dev', '+880 13333846282', 'Mirpur 1', '1216', 'Dhaka', 'Bangladesh (BGD)', 'House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216', '2024-11-23 11:35:17'),
(9, 'ShopKing - eCommerce App with Laravel Website & Admin Panel with POS', 'info@inilabs.net', '23.7699072', '90.3643136', 'https://foodking.dev', '+880 13333846282', 'Mirpur 3', '1216', 'Dhaka', 'Bangladesh (BGD)', 'House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216', '2025-01-13 09:56:25');

-- --------------------------------------------------------

--
-- Table structure for table `cookies`
--

CREATE TABLE `cookies` (
  `id` int(11) NOT NULL,
  `cookiesDetailsPage` varchar(255) NOT NULL,
  `cookiesSummary` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cookies`
--

INSERT INTO `cookies` (`id`, `cookiesDetailsPage`, `cookiesSummary`, `createdAt`, `updatedAt`) VALUES
(9, 'random_123', 'dsfd hgjk jh', '2024-11-25 06:54:56', '2024-11-25 06:54:56'),
(10, 'random_456', 'fdg nhy j', '2024-11-25 06:59:07', '2024-11-25 06:59:07'),
(14, 'random_123', 'sdfghjkl', '2025-01-13 10:01:51', '2025-01-13 10:01:51');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(50) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `code`, `status`) VALUES
(3, 'Pakistan', 'pkr', 'Inactive'),
(6, 'Switzerland', 'SZ', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(100) NOT NULL,
  `discount` decimal(10,2) NOT NULL,
  `discount_type` enum('Fixed','Percentage') NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `min_order_amount` decimal(10,2) NOT NULL,
  `max_discount` decimal(10,2) NOT NULL,
  `limit_per_user` int(11) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `description` text DEFAULT 'NA'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`id`, `name`, `code`, `discount`, `discount_type`, `start_date`, `end_date`, `min_order_amount`, `max_discount`, `limit_per_user`, `image_path`, `description`) VALUES
(27, 'Summer', 'SUMMER95', 10.00, 'Percentage', '2024-11-20 06:04:00', '2024-11-11 06:04:00', 200.00, 10.00, 8, 'uploads\\1731146881446.png', 'efghjklm'),
(31, 'Festival', 'COP96', 16.00, 'Percentage', '2024-11-07 19:06:00', '2024-11-14 19:06:00', 200.00, 10.00, 6, 'uploads\\1731147061382.png', 'abcd'),
(33, 'Summer', 'SUMMER78', 20.00, 'Percentage', '2024-11-20 06:04:00', '2024-11-11 06:04:00', 204.00, 14.00, 12, 'uploads\\1731149379212.png', 'asdfghjkl'),
(35, 'Festival', 'COP45', 15.00, 'Fixed', '2024-11-06 22:10:00', '2024-11-21 22:10:00', 200.00, 10.00, 5, 'uploads\\1731431461117.jpg', 'ertyuiop'),
(51, 'Summer', 'summer 49', 455.00, 'Percentage', '2024-12-28 11:37:00', '2024-12-11 11:37:00', 665.00, 454.00, 67, 'uploads\\1733376234648.png', 'abcdef'),
(54, 'WInter', 'WINTER9877', 10.00, 'Fixed', '2024-12-04 16:07:00', '2024-12-17 16:07:00', 100.00, 10.00, 5, 'uploads\\1734088026337.png', 'rtyuio');

-- --------------------------------------------------------

--
-- Table structure for table `currencies`
--

CREATE TABLE `currencies` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `symbol` varchar(10) NOT NULL,
  `code` varchar(10) NOT NULL,
  `is_cryptocurrency` enum('Yes','No') NOT NULL,
  `exchange_rate` decimal(10,4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `currencies`
--

INSERT INTO `currencies` (`id`, `name`, `symbol`, `code`, `is_cryptocurrency`, `exchange_rate`, `created_at`) VALUES
(24, 'Bitcoin', 'BTC', '600', 'Yes', 1.0000, '2024-11-21 19:42:18'),
(26, 'Bitcoin', 'BTC', '509', 'Yes', 2.0000, '2024-11-21 19:44:23'),
(29, 'Dollar', 'CD', '4601', 'Yes', 187.0000, '2024-11-21 19:53:35'),
(30, 'Dollar', 'CD', '460', 'Yes', 187.0000, '2024-11-21 19:57:18'),
(31, 'Dirham', 'AED', 'AED', 'Yes', 8.0000, '2024-11-21 20:03:48'),
(35, 'PKR', 'PKR', '38000', 'Yes', 8.0000, '2024-11-22 05:56:01'),
(38, 'Bitcoin', 'BTC', '501', 'No', 8.0000, '2024-12-19 10:30:19');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirm_password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `address` text NOT NULL,
  `country` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `zip_code` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `phone`, `status`, `password`, `confirm_password`, `created_at`, `address`, `country`, `state`, `city`, `zip_code`) VALUES
(1, 'John Doe12', 'johndoe@example.com', '1234567890', 'Active', 'password123', '', '2024-11-30 17:22:35', '123 Main St', 'USA', 'California', 'Los Angeles', '90001'),
(2, 'Jane Smith', 'janesmith@example.com', '0987654321', 'Inactive', 'password456', 'password456', '2024-11-30 17:22:35', '456 Maple Ave', 'USA', 'New York', 'New York', '10001'),
(3, 'Michael Johnson', 'mjohnson@example.com', '1231231234', 'Active', 'password789', 'password789', '2024-11-30 17:22:35', '789 Oak Dr', 'USA', 'Texas', 'Houston', '77001'),
(4, 'Emily Davis', 'emilydavis@example.com', '3213214321', 'Active', 'password101', 'password101', '2024-11-30 17:22:35', '321 Pine Ln', 'USA', 'Florida', 'Miami', '33101'),
(5, 'James Williams', 'jwilliams@example.com', '4564564567', 'Active', 'password102', 'password102', '2024-11-30 17:22:36', '654 Elm St', 'USA', 'Illinois', 'Chicago', '60601'),
(7, 'hassan', 'hassan123@gmail.com', '575689', 'Active', '123', '', '2024-11-30 12:31:43', 'p-987 b block', 'USA', 'in', 'Faisalabad', '38000'),
(8, 'Ahmad', 'ahmad@gmail.com', '1234567890', 'Active', '123', '', '2025-01-22 11:36:33', 'fdgdfg', 'India', 'Dhaka1', 'Dhaka', '1207');

-- --------------------------------------------------------

--
-- Table structure for table `damages`
--

CREATE TABLE `damages` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `reference_no` varchar(255) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `note` text DEFAULT 'NA',
  `total` decimal(10,2) NOT NULL DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `damages`
--

INSERT INTO `damages` (`id`, `date`, `reference_no`, `image_path`, `note`, `total`) VALUES
(8, '2025-01-13 00:00:00', '9875635', 'uploads\\1734687947558.png', '<p><em><s>ABC</s></em></p>', 501.00),
(13, '2024-11-05 00:00:00', '56987', 'uploads\\1732303353294.png', '<h2><span class=\"ql-font-monospace ql-size-small\" style=\"background-color: rgb(240, 102, 102);\">abcd</span></h2>', 80.00),
(15, '2024-12-10 00:00:00', '5678', 'uploads\\1733466259097.png', '<p><span style=\"background-color: rgb(255, 255, 0);\"><span class=\"ql-cursor\">﻿﻿﻿﻿﻿﻿﻿sdfghjkl﻿</span></span></p>', 56.00),
(20, '2024-12-06 00:00:00', '345678', 'uploads\\1733473666726.png', '<p>sdfghjkl</p>', 456.00);

-- --------------------------------------------------------

--
-- Table structure for table `gateway_configuration`
--

CREATE TABLE `gateway_configuration` (
  `id` int(11) NOT NULL,
  `gateway_type` enum('Twilio','Clickatell','Nexmo') NOT NULL,
  `twilio_account_sid` varchar(255) DEFAULT NULL,
  `twilio_auth_token` varchar(255) DEFAULT NULL,
  `twilio_from` varchar(255) DEFAULT NULL,
  `twilio_status` enum('Enable','Disable') DEFAULT 'Disable',
  `clickatell_apikey` varchar(255) DEFAULT NULL,
  `clickatell_status` enum('Enable','Disable') DEFAULT 'Disable',
  `nexmo_key` varchar(255) DEFAULT NULL,
  `nexmo_secret` varchar(255) DEFAULT NULL,
  `nexmo_status` enum('Enable','Disable') DEFAULT 'Disable',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gateway_configuration`
--

INSERT INTO `gateway_configuration` (`id`, `gateway_type`, `twilio_account_sid`, `twilio_auth_token`, `twilio_from`, `twilio_status`, `clickatell_apikey`, `clickatell_status`, `nexmo_key`, `nexmo_secret`, `nexmo_status`, `created_at`, `updated_at`) VALUES
(1, 'Twilio', 'tkdgh', 'jhlkli346gfhg', 'fhj,k', 'Disable', NULL, 'Disable', NULL, NULL, 'Disable', '2024-11-29 08:12:49', '2024-11-29 08:12:49'),
(2, 'Clickatell', NULL, NULL, NULL, 'Disable', NULL, 'Enable', NULL, NULL, 'Disable', '2024-11-29 08:26:31', '2024-11-29 08:26:31'),
(3, 'Nexmo', NULL, NULL, NULL, 'Disable', NULL, 'Disable', 'fgjgh567', 'hggj', 'Disable', '2024-11-29 08:44:15', '2024-11-29 08:44:15'),
(4, 'Nexmo', NULL, NULL, NULL, 'Disable', NULL, 'Disable', 'fgjgh567', 'hggj', 'Disable', '2024-11-29 08:46:37', '2024-11-29 08:46:37'),
(5, 'Twilio', 'tkdgh', 'jhlkli346gfhg', 'fhj,k', 'Disable', NULL, 'Disable', NULL, NULL, 'Disable', '2024-11-29 09:04:40', '2024-11-29 09:04:40'),
(6, 'Nexmo', NULL, NULL, NULL, 'Disable', NULL, 'Disable', 'fgjgh567', 'hggj', 'Enable', '2024-11-29 09:05:40', '2024-11-29 09:05:40'),
(7, 'Clickatell', NULL, NULL, NULL, 'Disable', 'bhgmyj', 'Enable', NULL, NULL, 'Disable', '2024-11-29 09:11:12', '2024-11-29 09:11:12'),
(8, 'Twilio', 'rfty', 'sdfghj', 'sdfghj', 'Enable', NULL, 'Disable', NULL, NULL, 'Disable', '2025-01-13 10:09:55', '2025-01-13 10:09:55'),
(9, 'Twilio', 'rfty', 'sdfghj', 'sdfghj', 'Enable', NULL, 'Disable', NULL, NULL, 'Disable', '2025-01-13 10:09:56', '2025-01-13 10:09:56'),
(10, 'Twilio', 'rfty', 'sdfghj', 'sdfghj', 'Enable', NULL, 'Disable', NULL, NULL, 'Disable', '2025-01-13 10:10:30', '2025-01-13 10:10:30'),
(11, 'Twilio', 'rfty', 'sdfghj', 'sdfghj', 'Enable', NULL, 'Disable', NULL, NULL, 'Disable', '2025-01-13 10:10:51', '2025-01-13 10:10:51'),
(12, 'Twilio', 'rfty', 'sdfghj', 'sdfghj', 'Enable', NULL, 'Disable', NULL, NULL, 'Disable', '2025-01-13 10:10:52', '2025-01-13 10:10:52'),
(13, 'Twilio', 'rfty', 'sdfghj', 'sdfghj', 'Enable', NULL, 'Disable', NULL, NULL, 'Disable', '2025-01-13 10:10:53', '2025-01-13 10:10:53'),
(14, 'Clickatell', NULL, NULL, NULL, 'Disable', 'asdfg', 'Disable', NULL, NULL, 'Disable', '2025-01-13 10:11:23', '2025-01-13 10:11:23'),
(15, 'Clickatell', NULL, NULL, NULL, 'Disable', 'asdfg', 'Disable', NULL, NULL, 'Disable', '2025-01-13 10:12:31', '2025-01-13 10:12:31'),
(16, 'Clickatell', NULL, NULL, NULL, 'Disable', 'asdfg', 'Disable', NULL, NULL, 'Disable', '2025-01-13 10:12:31', '2025-01-13 10:12:31'),
(17, 'Clickatell', NULL, NULL, NULL, 'Disable', 'asdfg', 'Disable', NULL, NULL, 'Disable', '2025-01-13 10:12:31', '2025-01-13 10:12:31'),
(18, 'Twilio', 'rfty', 'sdfghj', 'sdfghj', 'Enable', NULL, 'Disable', NULL, NULL, 'Disable', '2025-01-22 06:47:57', '2025-01-22 06:47:57'),
(19, 'Twilio', 'rfty', 'sdfghj', 'sdfghj', 'Enable', NULL, 'Disable', NULL, NULL, 'Disable', '2025-01-22 10:04:00', '2025-01-22 10:04:00'),
(20, 'Clickatell', NULL, NULL, NULL, 'Disable', 'asdfg', 'Disable', NULL, NULL, 'Disable', '2025-01-22 10:09:21', '2025-01-22 10:09:21'),
(21, 'Nexmo', NULL, NULL, NULL, 'Disable', NULL, 'Disable', 'sads436', 'dszfd435', 'Disable', '2025-01-22 10:11:28', '2025-01-22 10:11:28'),
(22, 'Twilio', 'rfty', 'sdfghj', 'sdfghj', 'Enable', NULL, 'Disable', NULL, NULL, 'Disable', '2025-01-22 10:12:41', '2025-01-22 10:12:41'),
(23, 'Nexmo', NULL, NULL, NULL, 'Disable', NULL, 'Disable', 'sads436', 'dszfd435', 'Disable', '2025-01-22 10:13:09', '2025-01-22 10:13:09'),
(24, 'Twilio', 'djfhsdj', '3435', 'sdfghj', 'Disable', NULL, 'Disable', NULL, NULL, 'Disable', '2025-01-22 10:24:01', '2025-01-22 10:24:01'),
(25, 'Clickatell', NULL, NULL, NULL, 'Disable', 'sdafd', 'Disable', NULL, NULL, 'Disable', '2025-01-22 10:27:36', '2025-01-22 10:27:36');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `display_mode` enum('LTR','RTL') NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `name`, `code`, `image_path`, `display_mode`, `status`, `created_at`, `updated_at`) VALUES
(1, 'English', 'eng', 'uploads\\1732559025130.png', 'LTR', 'Active', '2024-11-24 18:10:20', '2024-11-25 18:23:45'),
(5, 'Arabic', 'Ara', 'uploads\\1732559045396.png', 'LTR', 'Inactive', '2024-11-25 06:22:20', '2024-11-25 18:24:05');

-- --------------------------------------------------------

--
-- Table structure for table `license`
--

CREATE TABLE `license` (
  `id` int(11) NOT NULL,
  `key` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `license`
--

INSERT INTO `license` (`id`, `key`, `created_at`) VALUES
(1, 'z3yksng1-3xw2-8flu-2s7y-map01t1yjyvj', '2024-11-25 10:36:43'),
(2, 'z3yksng1-3xw2-8flu-2s7y-map01t1yjyvj', '2024-11-25 10:36:48'),
(6, 'asdfghjk', '2025-01-13 10:06:05');

-- --------------------------------------------------------

--
-- Table structure for table `mail_configuration`
--

CREATE TABLE `mail_configuration` (
  `id` int(11) NOT NULL,
  `mail_host` varchar(255) NOT NULL,
  `mail_port` int(11) NOT NULL,
  `mail_username` varchar(255) NOT NULL,
  `mail_password` varchar(255) NOT NULL,
  `mail_from_name` varchar(255) NOT NULL,
  `mail_from_email` varchar(255) NOT NULL,
  `mail_encryption` enum('SSL','TLS') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mail_configuration`
--

INSERT INTO `mail_configuration` (`id`, `mail_host`, `mail_port`, `mail_username`, `mail_password`, `mail_from_name`, `mail_from_email`, `mail_encryption`) VALUES
(1, 'mail.inilabs.dev', 465, 'inilabs@inilabs.dev', 'rb-XOS3-dc4q', 'ShopKing - eCommerce App with Laravel Website & Admin Panel with POS', 'inilabs@inilabs.dev', 'SSL'),
(2, 'mail.inilabs.dev', 465, 'inilabs@inilabs.dev', 'rb-XOS3-dc4q', 'ShopKing - eCommerce App with Laravel Website & Admin Panel with POS', 'inilabs@inilabs.dev', 'TLS'),
(3, 'mail.inilabs.dev', 465, 'inilabs@inilabs.dev', 'rb-XOS3-dc4q', 'ShopKing - eCommerce App with Laravel Website & Admin Panel with POS', 'inilabs@inilabs.dev', 'SSL'),
(5, 'mail.inilabs.dev', 465, 'inilabs@inilabs.dev', 'rb-XOS3-dc4q', 'ShopKing - eCommerce App with Laravel Website & Admin Panel with POS', 'inilabs@inilabs.dev', 'SSL');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `firebaseSecretKey` varchar(255) NOT NULL,
  `firebasePublicVapidKey` varchar(255) NOT NULL,
  `firebaseApiKey` varchar(255) NOT NULL,
  `firebaseAuthDomain` varchar(255) NOT NULL,
  `firebaseProjectId` varchar(255) NOT NULL,
  `firebaseStorageBucket` varchar(255) NOT NULL,
  `firebaseMessageSenderId` varchar(255) NOT NULL,
  `firebaseAppId` varchar(255) NOT NULL,
  `firebaseMeasurementId` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `firebaseSecretKey`, `firebasePublicVapidKey`, `firebaseApiKey`, `firebaseAuthDomain`, `firebaseProjectId`, `firebaseStorageBucket`, `firebaseMessageSenderId`, `firebaseAppId`, `firebaseMeasurementId`, `created_at`) VALUES
(1, 'ewrgtuy547698', 'gfhgj', 'rthy', 'thy', '4534trh', 'dfhdyj', '567', '346', '6456', '2024-11-28 09:42:18'),
(2, 'ewrgtuy547698', 'gfhgj', 'rthy', 'thy', '4534trh', 'dfhdyj', '567', '346', '6456', '2024-11-28 09:46:11'),
(6, 'erty', 'sdfghjk', '4r5ty6u7i89', 'drftyuio', 'wsedrftyui', 'sdfgyhjikl', 'sdfghjkl', 'ertyuiop', 'wertyui', '2025-01-13 09:59:22');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `apartment` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `post_code` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `notes` text DEFAULT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `payment_method` enum('Cash on Delivery','Online') DEFAULT 'Cash on Delivery',
  `status` enum('Pending','Confirmed','On the way','Delivered','Cancelled') DEFAULT 'Pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `first_name`, `last_name`, `country`, `street`, `apartment`, `city`, `state`, `post_code`, `phone`, `email`, `notes`, `total_amount`, `payment_method`, `status`, `created_at`) VALUES
(3, 'Hammad', 'Afzal', 'Pakistan', '996', '52', 'Faisalabad', 'Punjab', '12345', '36547893', 'hammad123@gmail.com', '', 9136.00, 'Cash on Delivery', 'Pending', '2024-12-13 06:25:05'),
(4, 'Ahmad', 'Bilal', 'Pakistan', '996', '52', 'Islamabad', 'Islamabad, Capital Territory', '12345', '36547893', 'bilal123@gmail.com', '', 8765.00, 'Cash on Delivery', 'Pending', '2024-12-13 06:27:17');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `selling_price` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_name`, `selling_price`, `quantity`) VALUES
(4, 3, 'KeyBoard', 4568.00, 2),
(5, 4, 'Acer PC', 8765.00, 1);

-- --------------------------------------------------------

--
-- Table structure for table `outlets`
--

CREATE TABLE `outlets` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `latitude` decimal(9,6) NOT NULL,
  `longitude` decimal(9,6) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `zip` varchar(20) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `outlets`
--

INSERT INTO `outlets` (`id`, `name`, `latitude`, `longitude`, `email`, `phone`, `city`, `state`, `zip`, `status`, `address`) VALUES
(11, 'Ras Al Khaima', 999.999999, 999.999999, 'admin@example.com', '23456789094', 'rasalkhaima', 'United Arab Emirates', '3634580', 'Inactive', 'edrftyujiop');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `status` enum('Active','Inactive') DEFAULT 'Active',
  `menu_section` varchar(255) DEFAULT NULL,
  `menu_template` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `date`, `reference`, `amount`, `payment_method`, `image`, `created_at`, `updated_at`) VALUES
(1, '2024-12-17 18:51:00', '23658', 2000.00, 'Cash', NULL, '2024-12-07 07:50:05', '2024-12-07 07:50:05'),
(2, '2024-12-07 18:51:00', '23658', 2000.00, 'Credit card', NULL, '2024-12-07 09:59:37', '2024-12-07 09:59:37');

-- --------------------------------------------------------

--
-- Table structure for table `paypal_settings`
--

CREATE TABLE `paypal_settings` (
  `id` int(11) NOT NULL,
  `client_id` varchar(255) NOT NULL,
  `client_secret` varchar(255) NOT NULL,
  `environment` enum('sandbox','production') NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pos`
--

CREATE TABLE `pos` (
  `id` int(11) NOT NULL,
  `customerType` varchar(255) DEFAULT NULL,
  `orderID` varchar(255) DEFAULT NULL,
  `orderDate` date DEFAULT NULL,
  `orderTime` time DEFAULT NULL,
  `paymentType` varchar(255) DEFAULT NULL,
  `discountValue` decimal(10,2) DEFAULT NULL,
  `subtotal` decimal(10,2) DEFAULT NULL,
  `tax` decimal(10,2) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `imagePath` varchar(255) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `orderType` varchar(255) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pos`
--

INSERT INTO `pos` (`id`, `customerType`, `orderID`, `orderDate`, `orderTime`, `paymentType`, `discountValue`, `subtotal`, `tax`, `quantity`, `productName`, `color`, `size`, `imagePath`, `total`, `orderType`, `status`) VALUES
(1, 'Regular Customer', '#328682', '2025-01-01', '02:06:48', 'cash', 0.00, 0.00, 0.00, 0, '', '', '', '', 0.00, 'POS', 'Pending'),
(2, 'Walking Customer', '#167608', '2025-01-01', '02:52:53', 'cash', 10.00, 3451.00, 517.65, 1, 'HP Laptop', 'Black', 'L', '', 3958.65, 'POS', 'Pending'),
(3, 'Walking Customer', '#790411', '2025-01-01', '02:57:42', 'cash', 10.00, 300.00, 45.00, 1, 'Dell Monitor', 'Black', 'L', '', 335.00, 'POS', 'Pending'),
(6, 'Walking Customer', '#507432', '2025-01-22', '04:47:34', 'cash', 12.00, 3451.00, 517.65, 1, 'HP Laptop', 'Silver', 'M', '', 3956.65, 'POS', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `sku` varchar(50) NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `barcode` varchar(100) DEFAULT NULL,
  `buying_price` decimal(10,2) NOT NULL,
  `selling_price` decimal(10,2) NOT NULL,
  `offer_price` decimal(10,2) DEFAULT NULL,
  `tax` enum('No-VAT','VAT-5','VAT-10','VAT-20') DEFAULT 'No-VAT',
  `brand` varchar(100) DEFAULT NULL,
  `status` enum('Active','Inactive') DEFAULT 'Active',
  `can_purchasable` enum('Yes','No') DEFAULT 'Yes',
  `show_stock_out` enum('Enable','Disable') DEFAULT 'Enable',
  `refundable` enum('Yes','No') DEFAULT 'Yes',
  `max_purchase_quantity` int(11) DEFAULT 1,
  `low_stock_warning` int(11) DEFAULT 10,
  `unit` varchar(50) DEFAULT NULL,
  `weight` varchar(50) DEFAULT NULL,
  `tags` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image_path` varchar(255) DEFAULT NULL,
  `image_paths` text DEFAULT NULL,
  `discount` varchar(255) DEFAULT 'NA',
  `specifications` longtext DEFAULT NULL,
  `details` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `sku`, `category`, `barcode`, `buying_price`, `selling_price`, `offer_price`, `tax`, `brand`, `status`, `can_purchasable`, `show_stock_out`, `refundable`, `max_purchase_quantity`, `low_stock_warning`, `unit`, `weight`, `tags`, `description`, `created_at`, `updated_at`, `image_path`, `image_paths`, `discount`, `specifications`, `details`) VALUES
(41, 'HP Laptop', '26549321', 'Computing Devices', '54345', 2456.00, 3451.00, NULL, '', 'Lenovoooo', 'Active', 'Yes', 'Enable', 'Yes', 345, 98, 'Unit ', '76', 'laptop', 'Best laptop in the market', '2024-12-10 15:51:31', '2024-12-15 13:47:41', 'uploads\\1733845891813.jpg', NULL, 'NA', NULL, NULL),
(42, 'Tenda Modem', '652397', 'Networking Devices', '247685', 200.00, 250.00, NULL, '', 'Lenovoooo', 'Active', 'Yes', 'Enable', 'Yes', 52, 2, 'Unit ', '1', 'tenda modem', 'Wireless Tenda Modem', '2024-12-10 15:58:37', '2024-12-15 13:48:22', 'uploads\\1733846317638.jpg', NULL, 'NA', NULL, NULL),
(43, 'Mobile Phone', '32795', 'Lenovo Devices', '25873', 320.00, 330.00, NULL, '', '6', 'Active', 'Yes', 'Enable', 'Yes', 200, 30, 'Unit ', '3', 'mobile', 'Best Mobile in the market', '2024-12-10 16:13:34', '2024-12-10 16:13:34', 'uploads\\1733847214565.jpg', NULL, 'NA', NULL, NULL),
(44, 'Samsung LCD', '26578', 'Samsung Devices', '876757', 250.00, 300.00, NULL, '', '6', 'Active', 'Yes', 'Enable', 'Yes', 200, 6, 'Unit ', '5', 'samsung lcd', 'Best Samsung LCD', '2024-12-10 16:45:32', '2024-12-10 16:45:32', 'uploads\\1733849132198.png', NULL, 'NA', NULL, NULL),
(45, 'Keyboard', '879756', 'Accessories', '275738', 20.00, 30.00, NULL, '', '6', 'Active', 'Yes', 'Enable', 'Yes', 200, 10, 'Unit ', '2', 'keyboard', 'High Quality Keyboard', '2024-12-10 16:50:38', '2024-12-10 16:50:38', 'uploads\\1733849438272.png', NULL, 'NA', NULL, NULL),
(46, 'Acer PC', '2898546', 'Acer', '287965', 200.00, 300.00, NULL, '', '6', 'Active', 'Yes', 'Enable', 'Yes', 600, 50, 'Unit ', '6', 'acer pc', 'Best PC in the market', '2024-12-10 16:55:17', '2024-12-10 16:55:17', 'uploads\\1733849717325.png', NULL, 'NA', NULL, NULL),
(47, 'HP Laptop', '234987', 'Computing Devices', '23467', 4521.00, 45674.00, NULL, '', '9', 'Active', 'Yes', 'Enable', 'Yes', 345, 98, '', '76', 'laptop', 'High Quality Laptop', '2024-12-11 06:57:20', '2024-12-11 06:57:20', 'uploads\\1733900240311.jpg', NULL, 'NA', NULL, NULL),
(48, 'Tenda Modem', '569876', 'Networking Devices', '2345', 4568.00, 4569.00, NULL, '', '12', 'Active', 'Yes', 'Enable', 'Yes', 4567, 456, 'Unit ', '768', 'modem', 'Wireless Tenda Modem', '2024-12-11 07:01:24', '2024-12-11 07:01:24', 'uploads\\1733900484620.jpg', NULL, 'NA', NULL, NULL),
(49, 'Mobile Phone', '23456', 'Lenovo Devices', '765432', 1234.00, 34345.00, NULL, '', '8', 'Active', 'Yes', 'Enable', 'Yes', 234, 23, 'Unit 1', '234', 'phone', 'Best Mobile Phone in the market', '2024-12-11 07:04:54', '2024-12-11 07:04:54', 'uploads\\1733900694496.jpg', NULL, 'NA', NULL, NULL),
(50, 'Samsung LCD', '23434', 'Samsung Devices', '876543', 23423.00, 54323.00, NULL, '', '7', 'Active', 'Yes', 'Enable', 'Yes', 8765, 456, 'Unit ', '4567', 'LCD', 'Best LCD in the market', '2024-12-11 07:08:51', '2024-12-11 07:08:51', 'uploads\\1733900931682.png', NULL, 'NA', NULL, NULL),
(51, 'KeyBoard', '876543', 'Accessories', '23456', 34567.00, 4568.00, NULL, 'VAT-20', '6', 'Active', 'Yes', 'Enable', 'Yes', 3456, 34, 'Unit 1', '765', 'keyboard', 'Best KeyBoard in the market', '2024-12-11 07:11:33', '2024-12-11 07:11:33', 'uploads\\1733901092996.png', NULL, 'NA', NULL, NULL),
(54, 'Acer PC', '2345698', 'Acer', '987654', 2345.00, 8765.00, NULL, 'VAT-20', '7', 'Active', 'Yes', 'Enable', 'Yes', 2345, 8768, '', '765', 'PC', 'Best PC in the market', '2024-12-11 07:27:22', '2024-12-11 07:27:22', 'uploads\\1733902041969.png', NULL, 'NA', NULL, NULL),
(55, 'Hp Laptop', '34567891', 'Computing Devices', '54321', 123434.00, 54321.00, NULL, '', '14', 'Active', 'Yes', 'Enable', 'Yes', 23456, 4567, 'Unit 1', '87', 'laptop', 'best quality laptop', '2024-12-12 07:50:03', '2024-12-12 07:50:03', 'uploads\\1733989803871.jpg', NULL, 'NA', NULL, NULL),
(59, 'abcd', '96523741', 'abc', '9874932', 687.00, 965.00, NULL, '', 'Lenovoooo', 'Active', 'Yes', 'Enable', 'Yes', 965, 2, 'Unit ', '82', 'abc', 'abcd', '2024-12-15 13:35:43', '2024-12-15 13:35:43', 'uploads\\1734269743564.png', NULL, 'NA', NULL, NULL),
(60, 'Dell Monitor', '67967867', 'Sale Offer', '657567', 200.00, 300.00, 250.00, '', 'Dell', 'Active', 'Yes', 'Enable', 'Yes', 300, 50, 'Unit ', '5', 'dell', 'Best monitor in the market', '2024-12-21 12:11:26', '2024-12-30 17:49:57', 'uploads\\1734783086897.png', NULL, 'NA', NULL, NULL),
(62, 'Lenovo Phone', '96875', 'Mobiles', '65852', 300.00, 500.00, NULL, '', 'Acer', 'Active', 'Yes', 'Enable', 'Yes', 652, 63, 'Unit ', '5', 'mobile', 'best mobile', '2024-12-25 18:10:46', '2024-12-30 17:48:18', 'uploads\\1735150246041.png', NULL, 'NA', NULL, NULL),
(63, 'lenovo mobile', '6325', 'Mobiles', '25632', 40.00, 60.00, 50.00, '', 'Acer', 'Active', 'Yes', 'Enable', 'Yes', 620, 5, 'Unit ', '2', 'mobile', 'mobile phone', '2024-12-25 19:11:10', '2024-12-30 17:48:44', 'uploads\\1735153870142.png', '[\"uploads\\\\1735153870142.png\",\"uploads\\\\1735153870173.png\",\"uploads\\\\1735153870214.jpg\",\"uploads\\\\1735153870222.png\"]', 'NA', NULL, NULL),
(73, 'Lenovo Monitor', '456765', 'Sale Offer', '4567', 3456.00, 4567.00, 700.00, '', 'Lenovo', 'Active', 'Yes', 'Enable', 'Yes', 3456, 87, 'Unit ', '76', 'mobile', 'Best quality', '2024-12-28 06:42:16', '2024-12-28 06:42:16', 'uploads\\1735368136471.png', '[\"uploads\\\\1735368136471.png\",\"uploads\\\\1735368136472.jpg\",\"uploads\\\\1735368136472.png\",\"uploads\\\\1735368136510.jpg\"]', 'NA', NULL, NULL),
(86, 'hp laptop', '50246', 'Laptops', '698532', 40.00, 566.00, 600.00, '', 'Hp', 'Active', 'Yes', 'Enable', 'Yes', 500, 25, 'Unit ', '52', 'abc', 'abc', '2025-01-04 19:22:53', '2025-01-04 19:57:55', 'uploads\\1736018573235.png', '[\"uploads\\\\1736018573235.png\"]', '10', '[\"Brand\",\"Power\",\"Resolution\"]', '[\"Hp\",\"500\",\"200\"]'),
(87, 'Monitor', '345683', 'Monitors', '6254896', 600.00, 7000.00, 52.00, '', 'Asus', 'Active', 'Yes', 'Enable', 'Yes', 76, 6, 'Unit', '67', 'monitor', 'best quality', '2025-01-08 06:06:40', '2025-01-08 06:06:40', 'uploads\\1736316400442.png', '[\"uploads\\\\1736316400442.png\"]', '50%', '[\"Brand\",\"Type\",\"Screen\"]', '[\"Hp\",\"LED\",\"1 by 4\"]');

-- --------------------------------------------------------

--
-- Table structure for table `products_section`
--

CREATE TABLE `products_section` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('active','inactive') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products_section`
--

INSERT INTO `products_section` (`id`, `name`, `status`) VALUES
(9, 'Bag', 'active'),
(19, 'Hand Bag', 'active'),
(20, 'Hand Bags', 'active'),
(21, 'Hand Bag', 'inactive');

-- --------------------------------------------------------

--
-- Table structure for table `product_attributes`
--

CREATE TABLE `product_attributes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_attributes`
--

INSERT INTO `product_attributes` (`id`, `name`, `created_at`) VALUES
(1, 'Sample Attribute', '2024-11-19 07:20:34'),
(5, 'Cap', '2024-11-20 06:15:05'),
(6, 'Hand Bag', '2024-11-30 06:41:53'),
(11, ' Bag', '2024-11-30 08:01:34'),
(12, 'hoodiee', '2024-12-06 06:22:48');

-- --------------------------------------------------------

--
-- Table structure for table `product_attribute_section`
--

CREATE TABLE `product_attribute_section` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_attribute_section`
--

INSERT INTO `product_attribute_section` (`id`, `name`, `created_at`) VALUES
(14, 'Hand Bag', '2024-12-17 12:33:36'),
(16, 'Hand Baggg', '2024-12-18 06:16:09');

-- --------------------------------------------------------

--
-- Table structure for table `product_brands`
--

CREATE TABLE `product_brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `description` text DEFAULT 'No description'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_brands`
--

INSERT INTO `product_brands` (`id`, `name`, `status`, `image_path`, `description`) VALUES
(7, 'MSI', 'Active', 'uploads\\1734976593289.jpg', 'Best brand MSI'),
(8, 'HP', 'Active', 'uploads\\1734976702044.jpg', 'Best brand HP'),
(9, 'Asus', 'Active', 'uploads\\1734976799788.jpg', 'Best brand Asus'),
(12, 'Acer', 'Active', 'uploads\\1734976891234.jpg', 'Best brand Acer'),
(14, 'Lenovo', 'Active', 'uploads\\1734976206712.jpg', 'Best brand Lenovo'),
(15, 'Dell', 'Active', 'uploads\\1734976334134.jpg', 'Best brand'),
(16, 'AMD', 'Active', 'uploads\\1734976997447.jpg', 'Best brand AMD'),
(17, 'Intel', 'Active', 'uploads\\1734977056115.jpg', 'Best brand Intel');

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `description` text DEFAULT 'No description',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `specs` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`specs`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`id`, `name`, `status`, `image_path`, `description`, `created_at`, `updated_at`, `specs`) VALUES
(3, 'Printers', 'Active', 'uploads\\1735675020583.png', 'abc', '2024-12-31 19:57:00', '2024-12-31 22:04:56', '[\"Brand\",\"Power\",\"Resolution\"]'),
(4, 'Laptops', 'Active', 'uploads\\1735675108756.png', 'abc', '2024-12-31 19:58:28', '2024-12-31 22:04:22', '[\"Battery\",\"Power\"]'),
(13, 'Sale Offer', 'Active', 'uploads\\1735682502644.jpg', 'sale', '2024-12-31 22:01:42', '2024-12-31 22:01:42', '[\"Brand\",\"Type\"]'),
(14, 'Monitors', 'Active', 'uploads\\1735682551936.png', 'abcd', '2024-12-31 22:02:31', '2024-12-31 22:03:54', '[\"Brand\",\"Type\",\"Screen\"]');

-- --------------------------------------------------------

--
-- Table structure for table `promotions`
--

CREATE TABLE `promotions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  `type` enum('Small','Big') NOT NULL,
  `image_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `promotions`
--

INSERT INTO `promotions` (`id`, `name`, `status`, `type`, `image_path`) VALUES
(30, 'Hand Bag', 'Active', 'Small', 'uploads\\1733468358988.png'),
(37, 'Bag', 'Inactive', 'Small', 'uploads\\1733205341209.png'),
(40, 'Hand Bag', 'Active', 'Big', 'uploads\\1736757959196.png');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` int(11) NOT NULL,
  `supplier` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `reference_no` varchar(255) NOT NULL,
  `status` varchar(50) NOT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `description` text DEFAULT 'NA',
  `total` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `supplier`, `date`, `reference_no`, `status`, `file_path`, `description`, `total`) VALUES
(109, 'ABC Supplier', '2025-01-19', 'PO123456', 'Pending', NULL, 'Purchase of office supplies', 2560.00),
(111, 'ABC Supplier', '2025-01-19', 'ABC123456', 'Pending', NULL, 'Purchase of office supplies', 2560.00),
(112, 'abcd', '2025-01-16', '698754', 'Pending', 'uploads\\1737400109735.png', '<p>abcd</p>', 384.00),
(113, 'abcdef', '2025-01-24', '2698752', 'Pending', 'uploads\\1737400604104.png', '<p>abcd</p>', 384.00),
(116, 'AEIOU', '2025-01-16', '9378632', 'Completed', 'uploads\\1737403516450.jpg', '<p>abcd</p>', 384.00),
(117, 'abcdef', '2025-01-22', '230649780', 'Pending', 'uploads\\1737403600969.png', '<p>abcd</p>', 384.00),
(118, 'Supplier A', '2025-01-03', '9875637', 'Completed', 'uploads\\1737460447508.png', '<p>sdfghj</p>', 1938.80);

-- --------------------------------------------------------

--
-- Table structure for table `purchase_items`
--

CREATE TABLE `purchase_items` (
  `id` int(11) NOT NULL,
  `purchase_id` int(11) NOT NULL,
  `product` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `discount` decimal(10,2) DEFAULT 0.00,
  `taxes` decimal(10,2) DEFAULT 0.00,
  `subtotal` decimal(10,2) DEFAULT 0.00,
  `total` decimal(10,2) DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `purchase_items`
--

INSERT INTO `purchase_items` (`id`, `purchase_id`, `product`, `quantity`, `discount`, `taxes`, `subtotal`, `total`, `created_at`, `updated_at`) VALUES
(1, 109, 'Laptop', 2, 50.00, 100.00, 2000.00, 0.00, '2025-01-19 17:43:41', '2025-01-19 17:43:41'),
(2, 109, 'Office Chair', 3, 30.00, 90.00, 450.00, 0.00, '2025-01-19 17:43:41', '2025-01-19 17:43:41'),
(7, 111, 'Laptop', 2, 50.00, 100.00, 2000.00, 0.00, '2025-01-19 19:03:57', '2025-01-19 19:03:57'),
(8, 111, 'Office Chair', 3, 30.00, 90.00, 450.00, 0.00, '2025-01-19 19:03:57', '2025-01-19 19:03:57'),
(9, 112, 'Mobile Phone', 1, 0.00, 32.00, 352.00, 0.00, '2025-01-20 19:08:29', '2025-01-20 19:08:29'),
(10, 113, 'Mobile Phone', 1, 0.00, 32.00, 352.00, 0.00, '2025-01-20 19:16:44', '2025-01-20 19:16:44'),
(13, 116, 'Mobile Phone', 1, 0.00, 32.00, 352.00, 0.00, '2025-01-20 20:05:16', '2025-01-20 20:05:16'),
(14, 117, 'Mobile Phone', 1, 0.00, 32.00, 352.00, 0.00, '2025-01-20 20:06:41', '2025-01-20 20:06:41'),
(15, 118, 'Mobile Phone', 1, 0.00, 32.00, 352.00, 0.00, '2025-01-21 11:54:07', '2025-01-21 11:54:07'),
(16, 118, 'Mobile Phone', 4, 15.00, 131.00, 1438.80, 0.00, '2025-01-21 11:54:07', '2025-01-21 11:54:07');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_products`
--

CREATE TABLE `purchase_products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `unit_cost` decimal(10,2) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL,
  `subtotal` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `purchase_products`
--

INSERT INTO `purchase_products` (`id`, `product_name`, `unit_cost`, `quantity`, `discount`, `subtotal`, `created_at`, `total`) VALUES
(7, 'Tenda Modem', 200.00, 1, 0.00, 200.00, '2025-01-15 19:08:57', 200.00),
(8, 'Acer PC', 200.00, 2, 0.00, 400.00, '2025-01-15 19:10:11', 1400.00),
(9, 'Tenda Modem', 200.00, 5, 0.00, 1000.00, '2025-01-15 19:10:11', 1400.00),
(10, 'HP Laptop', 4521.00, 1, 0.00, 4521.00, '2025-01-16 06:05:48', 4521.00),
(11, 'Samsung LCD', 250.00, 4, 0.00, 1000.00, '2025-01-16 12:01:39', 1000.00),
(12, 'Acer PC', 200.00, 1, 0.00, 200.00, '2025-01-18 06:39:35', 200.00);

-- --------------------------------------------------------

--
-- Table structure for table `purchase_returns`
--

CREATE TABLE `purchase_returns` (
  `id` int(11) NOT NULL,
  `supplier` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `reference_no` varchar(255) NOT NULL,
  `payment_status` enum('Paid','Unpaid','Partial') NOT NULL,
  `reason` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `purchase_returns`
--

INSERT INTO `purchase_returns` (`id`, `supplier`, `date`, `reference_no`, `payment_status`, `reason`) VALUES
(1, 'ABC Supplies', '2024-11-30 19:30:00', '12345ABC', 'Paid', 'Damaged goods'),
(2, 'Supplier E', '2024-12-06 12:34:00', '345679', 'Unpaid', 'low quality items'),
(3, 'supplier K', '2024-12-13 07:35:00', '345678', 'Partial', 'low quality items'),
(4, 'supplier', '2024-12-09 06:23:00', '45670', 'Unpaid', 'dfghjkl');

-- --------------------------------------------------------

--
-- Table structure for table `push_notifications`
--

CREATE TABLE `push_notifications` (
  `id` int(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `description` text DEFAULT 'NA',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `push_notifications`
--

INSERT INTO `push_notifications` (`id`, `role`, `user`, `title`, `image_path`, `description`, `created_at`) VALUES
(5, 'Admin', 'Walking Customer', 'sedrftyuiop', 'uploads\\1734590249079.png', 'ertyuiop', '2024-12-19 06:37:29'),
(6, 'Customer', 'Walking Customer', 'qwertyuiop', 'uploads\\1735214903027.jpg', 'wertyuio', '2024-12-26 12:08:23');

-- --------------------------------------------------------

--
-- Table structure for table `roles_and_permissions`
--

CREATE TABLE `roles_and_permissions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles_and_permissions`
--

INSERT INTO `roles_and_permissions` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `site`
--

CREATE TABLE `site` (
  `id` int(11) NOT NULL,
  `dateFormat` varchar(255) NOT NULL,
  `timeFormat` varchar(255) NOT NULL,
  `defaultTimezone` varchar(255) NOT NULL,
  `defaultLanguage` varchar(255) NOT NULL,
  `defaultCurrency` varchar(255) NOT NULL,
  `copyright` varchar(255) NOT NULL,
  `androidAppLink` varchar(255) NOT NULL,
  `iosAppLink` varchar(255) NOT NULL,
  `nonPurchaseProductQuantity` int(11) NOT NULL,
  `digitAfterDecimal` int(11) NOT NULL,
  `currencyPosition` varchar(255) NOT NULL,
  `returnProductPrice` varchar(255) NOT NULL,
  `languageSwitch` varchar(255) NOT NULL,
  `cashOnDelivery` varchar(255) NOT NULL,
  `onlinePayment` varchar(255) NOT NULL,
  `phoneVerification` varchar(255) NOT NULL,
  `autoUpdate` varchar(255) NOT NULL,
  `emailVerification` varchar(255) NOT NULL,
  `appdebug` varchar(255) NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `site`
--

INSERT INTO `site` (`id`, `dateFormat`, `timeFormat`, `defaultTimezone`, `defaultLanguage`, `defaultCurrency`, `copyright`, `androidAppLink`, `iosAppLink`, `nonPurchaseProductQuantity`, `digitAfterDecimal`, `currencyPosition`, `returnProductPrice`, `languageSwitch`, `cashOnDelivery`, `onlinePayment`, `phoneVerification`, `autoUpdate`, `emailVerification`, `appdebug`, `address`) VALUES
(24, 'd-m-Y (23-11-2024)', '12 Hour (2:02 PM)', 'Asia/Dhaka', 'English', 'Dollars ($)', '© ShopKing by iNiLabs 2024, All Rights Reserved', 'http://android.com', 'http://ios.com', 100, 2, 'Left', 'Yes', 'Enable', 'Enable', 'Enable', 'Enable', 'Enable', 'Enable', 'Enable', 'House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216'),
(25, 'd-m-Y (23-11-2024)', '12 Hour (2:02 PM)', 'Asia/Dhaka', 'English', 'Dollars ($)', '© ShopKing by iNiLabs 2024, All Rights Reserved', 'http://android.com', 'http://ios.com', 100, 2, 'Left', 'Yes', 'Enable', 'Enable', 'Enable', 'Enable', 'Enable', 'Enable', 'Enable', 'House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216');

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `title`, `link`, `image`, `status`, `description`, `created_at`, `updated_at`) VALUES
(8, 'Banner 2', '', 'uploads\\1733418325176.png', 'inactive', 'abcd', '2024-12-05 17:05:25', '2025-01-24 05:32:26'),
(9, 'Banner 2', '', 'uploads\\1733463160016.png', 'active', 'dfghjklfgh', '2024-12-06 05:32:40', '2024-12-06 05:32:40'),
(10, 'banner 3', '', 'uploads\\1733483800661.png', 'active', 'asdfghjkl', '2024-12-06 11:16:40', '2024-12-06 11:16:40'),
(11, 'banner 7', '', 'uploads\\1733483991632.png', 'inactive', 'sdfghjk', '2024-12-06 11:19:51', '2024-12-06 11:19:51'),
(12, 'sdfg', '', 'uploads\\1736756748118.png', 'active', 'dfghj', '2025-01-13 08:25:48', '2025-01-13 08:25:48'),
(13, 'sdfghjkl', '', 'uploads\\1737364365479.png', 'active', 'sdfguj', '2025-01-20 09:12:45', '2025-01-20 09:12:45'),
(14, 'sdfghjkl', '', 'uploads\\1737364871804.png', 'inactive', 'sdgj', '2025-01-20 09:21:11', '2025-01-20 09:21:11'),
(15, 'sdfghjkl', '', 'uploads\\1737437946850.png', 'active', 'wedrfghjkl', '2025-01-21 05:39:06', '2025-01-21 05:39:06'),
(16, 'sdfghjkl', '', 'uploads\\1737438013881.png', 'active', 'qwsrtyuiop', '2025-01-21 05:40:13', '2025-01-21 05:40:13');

-- --------------------------------------------------------

--
-- Table structure for table `social_media`
--

CREATE TABLE `social_media` (
  `id` int(11) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `twitter` varchar(255) NOT NULL,
  `instagram` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `social_media`
--

INSERT INTO `social_media` (`id`, `facebook`, `youtube`, `twitter`, `instagram`, `created_at`, `updated_at`) VALUES
(1, 'https://www.facebook.com/inilabs/', 'https://www.youtube.com/@inilabs3830', 'https://twitter.com/inilabsn?lang=en', 'https://www.instagram.com/inilabsn', '2024-11-25 07:27:28', '2024-11-25 07:27:28'),
(2, 'http://127.0.0.1:5500/Office_Project/src/html/social-media.html', 'http://127.0.0.1:5500/Office_Project/src/html/social-media.html', 'http://127.0.0.1:5500/Office_Project/src/html/social-media.html', 'http://127.0.0.1:5500/Office_Project/src/html/social-media.html', '2025-01-13 08:21:17', '2025-01-13 08:21:17'),
(4, 'http://127.0.0.1:5500/Office_Project/src/html/social-media.html', 'http://127.0.0.1:5500/Office_Project/src/html/social-media.html', 'http://127.0.0.1:5500/Office_Project/src/html/social-media.html', 'http://127.0.0.1:5500/Office_Project/src/html/social-media.html', '2025-01-13 10:01:13', '2025-01-13 10:01:13'),
(5, 'http://127.0.0.1:5500/Office_Project/src/html/social-media.html', 'http://127.0.0.1:5500/Office_Project/src/html/social-media.html', 'http://127.0.0.1:5500/Office_Project/src/html/social-media.html', 'http://127.0.0.1:5500/Office_Project/src/html/social-media.html', '2025-01-22 07:55:15', '2025-01-22 07:55:15');

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `name`, `country`, `status`, `created_at`, `updated_at`) VALUES
(6, 'Aargau', 'Pakistan', 'Inactive', '2024-12-23 11:33:31', '2024-12-23 11:56:37'),
(7, 'Aargau', 'Switzerland', 'Inactive', '2024-12-23 11:36:30', '2024-12-23 11:36:30'),
(8, 'Aargau', 'Pakistan', 'Active', '2024-12-27 06:43:52', '2024-12-27 06:43:52');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `zip_code` varchar(20) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `email`, `phone`, `address`, `country`, `state`, `city`, `zip_code`, `company`, `image`, `created_at`, `updated_at`) VALUES
(217, 'sdf', 'sfdszf@gmail.com', '+8801234567890', 'asd', 'USA', 'in', 'Faisalabad', '38000', 'sdds', '1737543772796.jpg', '2025-01-22 11:02:52', '2025-01-22 11:02:52'),
(218, 'dfgdf', 'johndoe@abc.com', '+8801234567890', 'fdgdfg', 'India', 'Dhaka1', 'Dhaka', '1207', 'ABC Suppliesdfdg', '1737544246741.jpg', '2025-01-22 11:10:46', '2025-01-22 11:10:46'),
(220, 'df', 'johndoe123@abc.com', '+8801234567890', 'dzfd', 'India', 'Dhaka1', 'Dhaka', '1207', 'ABC 123', 'uploads/1737544370678.jpg', '2025-01-22 11:12:50', '2025-01-22 11:12:50');

-- --------------------------------------------------------

--
-- Table structure for table `taxes`
--

CREATE TABLE `taxes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL,
  `code` varchar(50) NOT NULL,
  `tax_rate` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `taxes`
--

INSERT INTO `taxes` (`id`, `name`, `status`, `code`, `tax_rate`) VALUES
(4, 'VAT2', 'Inactive', '4568', 0.05),
(6, 'VAT', 'Inactive', '34567', 0.05),
(8, 'VAT', 'Inactive', '3456785', 0.05),
(9, 'VAT', 'Active', '34567', 0.05),
(10, 'VAT', 'Active', '2347', 0.05),
(18, 'VATT', 'Inactive', '2340', 6.00);

-- --------------------------------------------------------

--
-- Table structure for table `theme_config`
--

CREATE TABLE `theme_config` (
  `id` int(11) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `favIcon` varchar(255) NOT NULL,
  `footerLogo` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `theme_config`
--

INSERT INTO `theme_config` (`id`, `logo`, `favIcon`, `footerLogo`, `created_at`, `updated_at`) VALUES
(1, '1732521219337.png', '1732521219354.png', '1732521219361.png', '2024-11-25 07:53:39', '2024-11-25 07:53:39'),
(2, '1737533742020.jpg', '1737533742097.jpg', '1737533742156.jpg', '2025-01-22 08:15:42', '2025-01-22 08:15:42'),
(3, '1737533893107.jpg', '1737533893145.jpg', '1737533893179.jpg', '2025-01-22 08:18:13', '2025-01-22 08:18:13'),
(4, '1737533929054.png', '1737533929055.png', '1737533929055.png', '2025-01-22 08:18:49', '2025-01-22 08:18:49'),
(5, '1737534079375.jpg', '1737534079427.jpg', '1737534079449.png', '2025-01-22 08:21:19', '2025-01-22 08:21:19');

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(50) NOT NULL,
  `status` enum('Active','Inactive') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `name`, `code`, `status`) VALUES
(12, 'Unit 1', '345678', 'Inactive'),
(19, 'Unit', '3456', 'Active'),
(22, 'Unit 7', '234', 'Inactive'),
(23, 'Unit ', '4567', 'Inactive'),
(24, 'Unitt', '456', 'Active'),
(26, 'Unitt', '345671', 'Active'),
(27, 'Unit 2', '34567', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `verification_code` varchar(10) DEFAULT NULL,
  `is_verified` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `verification_code`, `is_verified`) VALUES
(19, 'maryam', 'maryam@123gmail.com', '$2a$08$CHfspkmbhqObTLd6cQQn5.CzNIdfBbrPRkr5yVUcExkBVYWsXa8fe', NULL, 0),
(20, 'maryam', 'maryam123@gmail.com', '$2a$08$n.E5ROjslTXutP5Nq/eh0.kSUPQjXNp2XlKaocplCcYBRhSJnXQJG', NULL, 0),
(21, 'Zainab', 'zainab123@gmail.com', '$2a$08$3m6hWmmlJsnyrTWlYo3TSeAsakyJoS8yvz/Ia81BFvrQTstkgqrry', NULL, 0),
(22, 'ahmad', 'ahmad123@gmail.com', '$2a$08$TxUnclMDJM1ITW22FOisBOffHOGSL2/CrNnE4fx7PkgatN3l4mbGe', NULL, 0),
(23, 'example', 'examplw@gmail.com', '$2a$08$Tdhg4MVIrxo0P8nPJPegFOUOurLYQeFF4hvP99vvaHn.GOwS550g.', '818396', 0),
(24, 'unknown', 'unknown@gmail.com', '$2a$08$VeRt6jdQpbXo6JGexWu4eeXCLVQ2LYpMJH79ZQ0J88JBeITTuapSu', '464945', 0),
(25, 'unknown', 'unknown@unknown.com', '$2a$08$JOLVVpExx3mHU1vs8yvVvujtAEngO4gj6C6luuQnLGT7/.gBpNFqe', '336428', 0),
(26, 'unknown', 'unknownunknwn@unknown.com', '$2a$08$gQ4g1wragdarlHurYIxlBOJL85B1h0TpZj5.Jo2XemZErnmTbMuw2', '293547', 0),
(27, 'abcd', 'abc@abcd.com', '$2a$08$riacwOdlpxxkLJ2V4HVQWuZ6101w1cYqNj084eKofE/sT5UIrjio.', '215710', 0);

-- --------------------------------------------------------

--
-- Structure for view `city_details`
--
DROP TABLE IF EXISTS `city_details`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `city_details`  AS SELECT `cities`.`id` AS `city_id`, `cities`.`name` AS `city_name`, `states`.`name` AS `state_name`, `cities`.`status` AS `city_status` FROM (`cities` left join `states` on(`cities`.`state` = `states`.`id`)) ;

-- --------------------------------------------------------

--
-- Structure for view `city_with_states`
--
DROP TABLE IF EXISTS `city_with_states`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `city_with_states`  AS SELECT `cities`.`id` AS `city_id`, `cities`.`name` AS `city_name`, `states`.`name` AS `state_name`, `cities`.`status` AS `city_status` FROM (`cities` left join `states` on(`cities`.`state` = `states`.`id`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `alerts`
--
ALTER TABLE `alerts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `analytics`
--
ALTER TABLE `analytics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `analytic_section`
--
ALTER TABLE `analytic_section`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `area_shipping`
--
ALTER TABLE `area_shipping`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `benefits`
--
ALTER TABLE `benefits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cookies`
--
ALTER TABLE `cookies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `damages`
--
ALTER TABLE `damages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gateway_configuration`
--
ALTER TABLE `gateway_configuration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `license`
--
ALTER TABLE `license`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mail_configuration`
--
ALTER TABLE `mail_configuration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `outlets`
--
ALTER TABLE `outlets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paypal_settings`
--
ALTER TABLE `paypal_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pos`
--
ALTER TABLE `pos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sku` (`sku`);

--
-- Indexes for table `products_section`
--
ALTER TABLE `products_section`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_attributes`
--
ALTER TABLE `product_attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_attribute_section`
--
ALTER TABLE `product_attribute_section`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_brands`
--
ALTER TABLE `product_brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `reference_no` (`reference_no`);

--
-- Indexes for table `purchase_items`
--
ALTER TABLE `purchase_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchase_id` (`purchase_id`);

--
-- Indexes for table `purchase_products`
--
ALTER TABLE `purchase_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchase_returns`
--
ALTER TABLE `purchase_returns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `push_notifications`
--
ALTER TABLE `push_notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles_and_permissions`
--
ALTER TABLE `roles_and_permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site`
--
ALTER TABLE `site`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `social_media`
--
ALTER TABLE `social_media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `taxes`
--
ALTER TABLE `taxes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `theme_config`
--
ALTER TABLE `theme_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5498;

--
-- AUTO_INCREMENT for table `alerts`
--
ALTER TABLE `alerts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `analytics`
--
ALTER TABLE `analytics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `analytic_section`
--
ALTER TABLE `analytic_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `area_shipping`
--
ALTER TABLE `area_shipping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `benefits`
--
ALTER TABLE `benefits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `cookies`
--
ALTER TABLE `cookies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `currencies`
--
ALTER TABLE `currencies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `damages`
--
ALTER TABLE `damages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `gateway_configuration`
--
ALTER TABLE `gateway_configuration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `license`
--
ALTER TABLE `license`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `mail_configuration`
--
ALTER TABLE `mail_configuration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `outlets`
--
ALTER TABLE `outlets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `paypal_settings`
--
ALTER TABLE `paypal_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pos`
--
ALTER TABLE `pos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `products_section`
--
ALTER TABLE `products_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `product_attributes`
--
ALTER TABLE `product_attributes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `product_attribute_section`
--
ALTER TABLE `product_attribute_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `product_brands`
--
ALTER TABLE `product_brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `promotions`
--
ALTER TABLE `promotions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT for table `purchase_items`
--
ALTER TABLE `purchase_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `purchase_products`
--
ALTER TABLE `purchase_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `purchase_returns`
--
ALTER TABLE `purchase_returns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `push_notifications`
--
ALTER TABLE `push_notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `roles_and_permissions`
--
ALTER TABLE `roles_and_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `site`
--
ALTER TABLE `site`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `social_media`
--
ALTER TABLE `social_media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=221;

--
-- AUTO_INCREMENT for table `taxes`
--
ALTER TABLE `taxes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `theme_config`
--
ALTER TABLE `theme_config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `purchase_items`
--
ALTER TABLE `purchase_items`
  ADD CONSTRAINT `purchase_items_ibfk_1` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
