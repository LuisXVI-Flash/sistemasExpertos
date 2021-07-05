-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-06-2021 a las 18:58:16
-- Versión del servidor: 8.0.17
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `teca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo_trabajador`
--

CREATE TABLE `cargo_trabajador` (
  `idcargo_trabajador` int(11) NOT NULL,
  `tipo_trabajador` varchar(30) NOT NULL,
  `ruta_acceso` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `cargo_trabajador`
--

INSERT INTO `cargo_trabajador` (`idcargo_trabajador`, `tipo_trabajador`, `ruta_acceso`) VALUES
(1, 'administrador de datos', '/admindatos'),
(2, 'back auditor', '/backauditor'),
(3, 'administrador del sistema', '/admisistemas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `idcliente` int(11) NOT NULL,
  `nombres` varchar(30) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `dni` int(8) NOT NULL,
  `celular` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`idcliente`, `nombres`, `apellidos`, `correo`, `dni`, `celular`) VALUES
(1, 'Isabella', 'Caballero Moreno', 'isabelitacancer@gmail.com', 78965412, 987456321),
(2, 'Aera', 'asrarasr', 'askdaksd@gmual.com', 13123123, 987654321),
(5, 'victor', 'quispe quispe', 'victor@gamil.com', 89021353, 934596875),
(6, 'manuel', 'gonzales', 'manu@gamiml.com', 98238423, 934596834),
(22, 'Janeth', 'Huamantinco Asis', 'janethjrha@gmail.com', 78945612, 987654321),
(23, 'Daniel', 'Durand rosas', 'daniel@gmail.com', 78945613, 987654322);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idproducto` int(11) NOT NULL,
  `id` int(15) NOT NULL,
  `pac` varchar(15) NOT NULL,
  `estado` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idproducto`, `id`, `pac`, `estado`) VALUES
(1, 654421, 'dkrt4554drfg', 1),
(3, 52114, 'wjjdhfj657541', 0),
(4, 4466521, '9898745656', 0),
(5, 456879, '8789525321', 0),
(6, 8521456, '6422', 0),
(7, 54654, 'ughkj', 1),
(8, 98798, 'jhlkj', 1),
(9, 89465, 'fgugiuh', 1),
(10, 4865, 'uhbuoi', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud`
--

CREATE TABLE `solicitud` (
  `idsolicitud` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `idproducto` int(11) NOT NULL,
  `idcliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `solicitud`
--

INSERT INTO `solicitud` (`idsolicitud`, `fecha`, `idproducto`, `idcliente`) VALUES
(1, '2021-05-03', 1, 1),
(6, '2021-06-26', 4, 2),
(7, '2021-06-22', 3, 1),
(11, '2021-06-08', 6, 22),
(12, '2021-06-29', 5, 22),
(13, '2021-06-29', 7, 6),
(14, '2021-06-16', 8, 22),
(16, '2021-06-22', 9, 6),
(17, '2021-06-20', 10, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajadores`
--

CREATE TABLE `trabajadores` (
  `idtrabajador` int(11) NOT NULL,
  `nombres` varchar(30) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contraseña` varchar(200) NOT NULL,
  `usuario` varchar(200) NOT NULL,
  `idcargo_trabajador` int(11) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `trabajadores`
--

INSERT INTO `trabajadores` (`idtrabajador`, `nombres`, `apellidos`, `correo`, `contraseña`, `usuario`, `idcargo_trabajador`, `estado`) VALUES
(4, 'Lucio', 'Ramirez Gonzales', 'lucio@gmail.com', '21232f297a57a5a743894a0e4a801fc3', 'LuisXVI', 1, 1),
(5, 'Jose', 'Castro', 'jose@gmail.com', '987', '98754613', 3, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cargo_trabajador`
--
ALTER TABLE `cargo_trabajador`
  ADD PRIMARY KEY (`idcargo_trabajador`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`idcliente`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idproducto`);

--
-- Indices de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  ADD PRIMARY KEY (`idsolicitud`),
  ADD UNIQUE KEY `idproducto` (`idproducto`),
  ADD KEY `idcliente` (`idcliente`) USING BTREE;

--
-- Indices de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD PRIMARY KEY (`idtrabajador`),
  ADD UNIQUE KEY `idcargo_trabajador` (`idcargo_trabajador`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cargo_trabajador`
--
ALTER TABLE `cargo_trabajador`
  MODIFY `idcargo_trabajador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `idcliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `idproducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  MODIFY `idsolicitud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  MODIFY `idtrabajador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `solicitud`
--
ALTER TABLE `solicitud`
  ADD CONSTRAINT `fk_solicitud_cliente` FOREIGN KEY (`idcliente`) REFERENCES `clientes` (`idcliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_solicitud_producto` FOREIGN KEY (`idproducto`) REFERENCES `producto` (`idproducto`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD CONSTRAINT `fk_trabajadores_cargotrabajador` FOREIGN KEY (`idcargo_trabajador`) REFERENCES `cargo_trabajador` (`idcargo_trabajador`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
