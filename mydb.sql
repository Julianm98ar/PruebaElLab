-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-02-2019 a las 01:05:27
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dominios`
--

CREATE TABLE `dominios` (
  `Id_dominio` int(11) NOT NULL,
  `Nombre_dom` varchar(45) NOT NULL,
  `Uso_dom` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `dominios`
--

INSERT INTO `dominios` (`Id_dominio`, `Nombre_dom`, `Uso_dom`) VALUES
(0, 'Codigos_uni', 'Se usa para guardar los codigos de la univers'),
(1, 'Roles_usu', 'se usa para guardar los roles de usuario'),
(2, 'Electivas_uni', 'Se usa para guardar las electivas de la unive');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `Id_profesor` int(11) NOT NULL,
  `Nombre_pro` varchar(255) NOT NULL,
  `Electiva_pro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`Id_profesor`, `Nombre_pro`, `Electiva_pro`) VALUES
(7, 'El zorro del desierto', 8),
(9, 'Arnoldo rojas', 10),
(11, 'asd', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subdominios`
--

CREATE TABLE `subdominios` (
  `Id_subdominio` int(11) NOT NULL,
  `Dominios_Id` int(11) NOT NULL,
  `Valor_sub` varchar(45) NOT NULL,
  `Descripcion_sub` varchar(45) NOT NULL,
  `Aux1_sub` varchar(255) DEFAULT NULL,
  `Aux2_sub` varchar(255) DEFAULT NULL,
  `Aux3_sub` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `subdominios`
--

INSERT INTO `subdominios` (`Id_subdominio`, `Dominios_Id`, `Valor_sub`, `Descripcion_sub`, `Aux1_sub`, `Aux2_sub`, `Aux3_sub`) VALUES
(1, 0, '1132', 'Codigo de universidad', NULL, NULL, NULL),
(2, 1, 'Administrador', 'Rol de administrador', NULL, NULL, NULL),
(3, 1, 'Estudiante', 'Rol de estudiante', NULL, NULL, NULL),
(4, 2, 'Tics', 'Electiva Tics', '10 Cupos', NULL, NULL),
(5, 2, 'Ninguna electiva asociada', 'Electiva universidad', NULL, NULL, NULL),
(6, 2, 'elictricidaaa', 'Electiva elictricidaaa', '1000 Cupos', NULL, NULL),
(8, 2, 'Electronica', 'Electiva Electronica', '100 Cupos', NULL, NULL),
(10, 2, 'Agricultura', 'Electiva Agricultura', '50 Cupos', NULL, NULL),
(11, 2, 'asd', 'Electiva asd', '12 Cupos', NULL, NULL),
(12, 2, 'adsf', 'Electiva adsf', '11 Cupos', NULL, NULL),
(13, 2, 'asdf', 'Electiva asdf', '123 Cupos', NULL, NULL),
(14, 2, 'asdf', 'Electiva asdf', '123 Cupos', NULL, NULL),
(15, 2, 'Agriculturaa', 'Electiva Agriculturaa', '50 Cupos', NULL, NULL),
(16, 2, 'asd', 'Electiva asd', '11 Cupos', NULL, NULL),
(17, 2, 'Agriculturaa', 'Electiva Agriculturaa', '50 Cupos', NULL, NULL),
(18, 2, 'Agriculturaa', 'Electiva Agriculturaa', '50 Cupos', NULL, NULL),
(19, 2, 'asdf', 'Electiva asdf', '11 Cupos', NULL, NULL),
(21, 2, 'sauhf', 'Electiva sauhf', '111 Cupos', NULL, NULL),
(22, 2, 'qass', 'Electiva qass', '102 Cupos', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id_usuario` int(11) NOT NULL,
  `Correo_usu` varchar(255) NOT NULL,
  `Contraseña_usu` varchar(512) NOT NULL,
  `Rol_usu` int(11) NOT NULL,
  `Electiva_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id_usuario`, `Correo_usu`, `Contraseña_usu`, `Rol_usu`, `Electiva_Id`) VALUES
(8, 'daniela@gmail.com', 'daniela', 3, 8),
(9, 'vivian@gmail.com', '$2y$10$F5NbUIQVVI/la1A9IkOPd.Ju2p9SBCRlA0VBAKdVZ4vzTDwCsVYMq', 3, 5),
(10, 'jose@gmail.com', '$2y$10$5zDB7HqyWgCpo6soV2GBBO1bkR3dY8rjD1yNCehTEh5zRqLnNWH8G', 3, 5),
(11, 'hana@gmail.com', '$2y$10$f7rjB2cM7fxiH1HBGACQ7OCr7EmalSnE7ao62vnMpHQrwr5YzbszC', 3, 5),
(12, 'asuka@gmail.com', 'asuka', 2, 5),
(13, 'akira@gmail.com', '$2y$10$6Qm1yaU0LJAwFITm1IX9w.W7U222b9rel5cJ8Za9ier1.uW9iFJ/e', 3, 5),
(14, 'anaka@gmail.com', '$2y$10$DWy9giMsFjfaDZiM.iqPKOHaUTKYEn27PvDBhp4M4N7mp0AbBlDaS', 3, 5),
(15, 'chiwi@gmail.com', '$2y$10$88zomuo6jwZvOvmJ1Zde4upjvEVmmCMF48Na3T32ArNnr.K6e2z2.', 3, 5),
(16, 'dota@gmail.com', '$2y$10$5NZu7Kkfvqi3lrt.H/V7POaDYh5dJ7Cmgg/otwSitQEY4kPJuE3I2', 3, 5),
(17, 'vato@gmail.com', '$2y$10$bWv0eBkheWL58n8O6z0h3O3HVBqozI6UnHnI/jjX3TmFyLY4QBXNq', 3, 5),
(18, 'Juliana1234@gmail.com', '$2y$10$FT.mG4bG5PHpLyKeOCqgveaM24YVfy4CGiL1LQrFyl6e6dnC7h3SK', 3, 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dominios`
--
ALTER TABLE `dominios`
  ADD PRIMARY KEY (`Id_dominio`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`Id_profesor`),
  ADD KEY `fk_Profesores_Subdominios1_idx` (`Electiva_pro`);

--
-- Indices de la tabla `subdominios`
--
ALTER TABLE `subdominios`
  ADD PRIMARY KEY (`Id_subdominio`),
  ADD KEY `fk_Subdominios_Dominios_idx` (`Dominios_Id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id_usuario`),
  ADD KEY `fk_Usuarios_Subdominios1_idx` (`Rol_usu`),
  ADD KEY `fk_Usuarios_Subdominios2_idx` (`Electiva_Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dominios`
--
ALTER TABLE `dominios`
  MODIFY `Id_dominio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `Id_profesor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `subdominios`
--
ALTER TABLE `subdominios`
  MODIFY `Id_subdominio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD CONSTRAINT `fk_Profesores_Subdominios1` FOREIGN KEY (`Electiva_pro`) REFERENCES `subdominios` (`Id_subdominio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `subdominios`
--
ALTER TABLE `subdominios`
  ADD CONSTRAINT `fk_Subdominios_Dominios` FOREIGN KEY (`Dominios_Id`) REFERENCES `dominios` (`Id_dominio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_Usuarios_Subdominios1` FOREIGN KEY (`Rol_usu`) REFERENCES `subdominios` (`Id_subdominio`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Usuarios_Subdominios2` FOREIGN KEY (`Electiva_Id`) REFERENCES `subdominios` (`Id_subdominio`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
