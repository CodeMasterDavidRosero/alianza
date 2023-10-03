-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-10-2023 a las 19:38:27
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alianza`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `skey` text COLLATE utf8_spanish2_ci NOT NULL,
  `business_id` text COLLATE utf8_spanish2_ci NOT NULL,
  `email` text COLLATE utf8_spanish2_ci NOT NULL,
  `phone` text COLLATE utf8_spanish2_ci NOT NULL,
  `start_date` text COLLATE utf8_spanish2_ci NOT NULL,
  `end_date` text COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id`, `skey`, `business_id`, `email`, `phone`, `start_date`, `end_date`) VALUES
(1, 'jgutierrez', 'Juliana Gutierrez', 'jgutierrez@gmail.com', '3219876543', '20/05/2019', '20/05/2023'),
(2, 'mmartinez', 'Manuel Martinez', 'mmartinez@gmail.com', '3119876543', '21/05/2019', '21/09/2023'),
(3, 'aruiz', 'Ana Ruiz', 'aruiz@gmail.com', '3216549871', '2023-10-03', '2023-10-04'),
(4, 'ogarcia', 'Oscar Garcia', 'ogarcia@gmail.com', '3216549875', '2023-10-03', '2023-11-11'),
(5, 'tramos', 'Tannia Ramos', 'tramos@gmail.com', '3216549876', '2023-10-03', '2023-10-07'),
(52, 'adsf', 'adf', 'afd', '51561', '2023-10-03', '2023-10-27');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
