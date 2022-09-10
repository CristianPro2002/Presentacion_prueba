-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-09-2022 a las 07:11:27
-- Versión del servidor: 8.0.29
-- Versión de PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `banca4.0`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `act_cli`
--

CREATE TABLE `act_cli` (
  `Idact_cli` int NOT NULL COMMENT 'Identificacion de actividad de cliente',
  `Id_act` double DEFAULT NULL COMMENT 'Identificacion del cliente',
  `Fe_act` datetime DEFAULT NULL COMMENT 'Fecha de actividad',
  `ti_pro` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Identificacion de tipo de producto',
  `Valor` decimal(10,0) DEFAULT NULL COMMENT 'Valor de actividad',
  `No_cajero` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Numero de cajero',
  `No_cuec` int DEFAULT NULL COMMENT 'Numero de cuenta de cliente comun',
  `No_cuej` int DEFAULT NULL COMMENT 'Numero de cuenta de la entidad'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Actividad de cliente';

--
-- Volcado de datos para la tabla `act_cli`
--

INSERT INTO `act_cli` (`Idact_cli`, `Id_act`, `Fe_act`, `ti_pro`, `Valor`, `No_cajero`, `No_cuec`, `No_cuej`) VALUES
(45, 435436, '2022-08-20 21:44:00', 'Consignación', '400000', 'Cajero2', 137627, NULL),
(46, 11111111, '2022-08-18 21:46:00', 'Retiro', '150000', 'Cajero2', NULL, 551389),
(47, 435436, '2022-08-12 21:50:00', 'Apertura de Cuenta', '100000', 'Cajero1', 137627, NULL),
(48, 435436, '2022-08-08 14:17:00', 'Consignación', '200000', 'Cajero3', 137627, NULL),
(49, 11111111, '2022-08-25 16:27:00', 'Consignación', '200000', 'Cajero5', NULL, 551389),
(50, 11111111, '2022-08-18 21:56:00', 'Apertura de Cuenta', '100000', 'Cajero2', NULL, 551389),
(60, 1192719887, '2022-09-16 20:20:00', 'Apertura de Cuenta', '100000', 'Cajero2', 562725, NULL),
(61, 1192719887, '2022-09-09 21:42:00', 'Consignación', '500000', 'Cajero2', 562725, NULL),
(62, 1192719887, '2022-09-17 22:41:00', 'Retiro', '200000', 'Cajero4', 562725, NULL),
(63, 1192719887, '2022-09-15 22:53:00', 'Consignación', '19999', 'Cajero4', 562725, NULL),
(64, 1192719887, '2022-09-09 22:54:00', 'Consignación', '19999', 'Cajero4', 562725, NULL),
(65, 1192719887, '2022-09-09 22:54:00', 'Consignación', '30000', 'Cajero4', 562725, NULL),
(66, 11111111, '2022-09-09 22:55:00', 'Consignación', '10000', 'Cajero4', NULL, 551389),
(67, 435345, '2022-09-09 22:56:00', 'Apertura de Cuenta', '100000', 'Cajero4', NULL, 722416),
(68, 566, '2022-09-10 21:42:00', 'Apertura de Cuenta', '100000', 'Cajero2', 791778, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `act_val`
--

CREATE TABLE `act_val` (
  `Id_act_val` int NOT NULL,
  `Id_client` double DEFAULT NULL COMMENT 'Identificacion  del ciente',
  `ti_product` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'tipo de producto',
  `Valor` decimal(10,0) DEFAULT NULL COMMENT 'Valor por cajero',
  `No_cajero` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='(F) Actividad de cliente solo los valores y tipo de producto';

--
-- Volcado de datos para la tabla `act_val`
--

INSERT INTO `act_val` (`Id_act_val`, `Id_client`, `ti_product`, `Valor`, `No_cajero`) VALUES
(11, 435436, 'Consignación', '400000', 'Cajero2'),
(12, 11111111, 'Retiro', '150000', 'Cajero2'),
(13, 435436, 'Apertura de Cuenta', '100000', 'Cajero1'),
(14, 435436, 'Consignación', '200000', 'Cajero3'),
(15, 11111111, 'Consignación', '200000', 'Cajero5'),
(16, 11111111, 'Apertura de Cuenta', '100000', 'Cajero2'),
(17, 1192719887, 'Apertura de Cuenta', '9998', 'Cajero3'),
(18, 1192719887, 'Apertura de Cuenta', '100000', 'Cajero3'),
(19, 1192719887, 'Apertura de Cuenta', '99998', 'Cajero2'),
(20, 1192719887, 'Apertura de Cuenta', '100000', 'Cajero2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cla_contr`
--

CREATE TABLE `cla_contr` (
  `Idcla_contr` int NOT NULL COMMENT 'Identificacion de clase de contribuyente',
  `Nom_cla` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de clase de contribuyente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Clase de contribuyente';

--
-- Volcado de datos para la tabla `cla_contr`
--

INSERT INTO `cla_contr` (`Idcla_contr`, `Nom_cla`) VALUES
(1, 'Gran contribuyente'),
(2, 'No gran contribuyente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `client_co`
--

CREATE TABLE `client_co` (
  `Id_client` int NOT NULL COMMENT 'Identificacion aleatorio de cada cliente',
  `No_ide` double NOT NULL COMMENT 'Nunero de identificacion del cliente',
  `Idti_solicit` int DEFAULT NULL COMMENT 'Identificacion de Tipo de solicitante',
  `Fec_dil` date DEFAULT NULL COMMENT 'Fecha de diligenciamiento',
  `Idti_sol` int DEFAULT NULL COMMENT 'Identificacion de tipo de solicitud',
  `Pri_nom` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Primer nombre del cliente',
  `Seg_nom` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Segundo nombre del cliente',
  `Pri_ape` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Primer apellido del cliente',
  `Seg_ape` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Segundo apellido del cliente',
  `Idti_doc` int DEFAULT NULL COMMENT 'Identificacion de tipo de documento',
  `Lug_exp` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Lugar de expedicion de documento',
  `Fec_exp` date DEFAULT NULL COMMENT 'Fecha de expedicion de documento',
  `Fec_nac` date DEFAULT NULL COMMENT 'Fecha de nacimiento del cliente',
  `Ciu_nac` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Ciudad de nacimiento del cliente',
  `Id_gen` int DEFAULT NULL COMMENT 'Identificacion de genero',
  `Idest_ci` int DEFAULT NULL COMMENT 'Identificacion de estado civil',
  `Id_nac` int DEFAULT NULL COMMENT 'Identificacion de nacionalidad',
  `Otr_nac` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Otra nacionalidad',
  `Dir_re` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Direccion de residencia del cliente',
  `Blo_to` int DEFAULT NULL COMMENT 'Bloque o torre del cliente',
  `Ap_ca` int DEFAULT NULL COMMENT 'Apartamento o casa del cliente',
  `Barrio` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Barrio donde vive el cliente',
  `Ciu_mu` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Ciudad o municipio donde vive el cliente',
  `Depart` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Departamento donde vive el cliente',
  `Pais` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Pais donde vive el cliente',
  `Telef` double DEFAULT NULL COMMENT 'Telefono del cliente',
  `Celular` double DEFAULT NULL COMMENT 'Numero de celular del cliente',
  `Corr_ele` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Correo electronico del cliente',
  `Profe` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Profesion que ejerce el cliente',
  `Idocu_ofii` int DEFAULT NULL COMMENT 'Identificacion de ocupacion o oficio del cliente',
  `Det_act` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Detalle de actividad economica del cliente',
  `Cod_ciuu` int DEFAULT NULL COMMENT 'Codigo CIUU',
  `No_emp` int DEFAULT NULL COMMENT 'Numero de empleados',
  `Nom_emp` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Nombre de la empresa',
  `Dir_emp` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Dirección de la empresa o lugar donde desarrolla su actividad	',
  `Barr_lab` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Barrio donde labora',
  `Ciu_lab` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Ciudad o municipio donde labora',
  `Dep_lab` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Departamento donde labora	',
  `Pais_lab` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Pais donde labora	',
  `Tel_lab` double DEFAULT NULL COMMENT 'Telefono laboral	',
  `Ext` int DEFAULT NULL COMMENT 'Extension de telefono	',
  `Cel_lab` double DEFAULT NULL COMMENT 'Celular laboral	',
  `Corr_lab` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Correo laboral	',
  `Ing_men` double DEFAULT NULL COMMENT 'Ingresos mensuales del cliente	',
  `Otr_ing` double DEFAULT NULL COMMENT 'Otros ingresos mensuales del cliente	',
  `Det_otr` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Detalle otros ingresos mensuales	',
  `To_act` double DEFAULT NULL COMMENT 'Total activos del cliente	',
  `To_pa` double DEFAULT NULL COMMENT 'Total pasivos del cliente	',
  `To_egr` double DEFAULT NULL COMMENT 'Total egresos mensuales del cliente	',
  `Vent_a` double DEFAULT NULL COMMENT 'Ventas anuales del cliente	',
  `Fe_ci` date DEFAULT NULL COMMENT 'Fecha de cierre de ventas del cliente	',
  `Dec_rent` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '¿Es declarante de renta?	',
  `Age_ret` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Agente retenedor	',
  `Idtireg_iva` int DEFAULT NULL COMMENT 'Identificacion de tipos de regimen de iva	',
  `Ob_tri` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Obligado a tributar en Estados Unidos	',
  `Notri_est` double DEFAULT NULL COMMENT 'número de ID tributario (TIN) de estados unidos	',
  `Pais_1` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Otro pais diferente a colombia por el cual tributa numero 1	',
  `Pais_2` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Otro pais diferente a colombia por el cual tributa numero 2	',
  `No_tri1` double DEFAULT NULL COMMENT 'Numero de id tributario del pais seleccionado numero 1	',
  `No_tri2` double DEFAULT NULL COMMENT 'Numero de id tributario del pais seleccionado numero 2	',
  `Prov_bie` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Proveniencia de los bienes	',
  `Pais_bi` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'país origen de bienes y/o fondos	',
  `Ciu_bie` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'ciudad origen de bienes y/o fondos	',
  `Op_ext` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'operaciones en moneda extranjera?	',
  `Idtiop_m` int DEFAULT NULL COMMENT 'Identificacion de Tipos de operaciones en moneda extranjera	',
  `Otro_mo` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Otro Tipo de operaciones en moneda extranjera	',
  `Nom_ent` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Nombre de la entidad	',
  `Idtipro_m` int DEFAULT NULL COMMENT 'Identificacion de Tipo de producto en moneda extranjera	',
  `Otro_mo2` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Otro Tipo de producto en moneda extranjera	',
  `No_pro` double DEFAULT NULL COMMENT 'Numero de producto	',
  `Mo_pro` double DEFAULT NULL COMMENT 'Monto mensual promedio	',
  `Moneda` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Moneda utilizada	',
  `Ciu_ent` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Ciudad de la entidad	',
  `Pa_ent` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Pais de la entidad	',
  `Idtien_re` int DEFAULT NULL COMMENT 'Identificacion de Tipo de entrega de Reporte Anual de Costos Totales',
  `No_solicit` double DEFAULT NULL COMMENT 'Numero de identificacion del solicitante',
  `Cod_vend` int DEFAULT NULL COMMENT 'Código vendedor'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Cliente comun';

--
-- Volcado de datos para la tabla `client_co`
--

INSERT INTO `client_co` (`Id_client`, `No_ide`, `Idti_solicit`, `Fec_dil`, `Idti_sol`, `Pri_nom`, `Seg_nom`, `Pri_ape`, `Seg_ape`, `Idti_doc`, `Lug_exp`, `Fec_exp`, `Fec_nac`, `Ciu_nac`, `Id_gen`, `Idest_ci`, `Id_nac`, `Otr_nac`, `Dir_re`, `Blo_to`, `Ap_ca`, `Barrio`, `Ciu_mu`, `Depart`, `Pais`, `Telef`, `Celular`, `Corr_ele`, `Profe`, `Idocu_ofii`, `Det_act`, `Cod_ciuu`, `No_emp`, `Nom_emp`, `Dir_emp`, `Barr_lab`, `Ciu_lab`, `Dep_lab`, `Pais_lab`, `Tel_lab`, `Ext`, `Cel_lab`, `Corr_lab`, `Ing_men`, `Otr_ing`, `Det_otr`, `To_act`, `To_pa`, `To_egr`, `Vent_a`, `Fe_ci`, `Dec_rent`, `Age_ret`, `Idtireg_iva`, `Ob_tri`, `Notri_est`, `Pais_1`, `Pais_2`, `No_tri1`, `No_tri2`, `Prov_bie`, `Pais_bi`, `Ciu_bie`, `Op_ext`, `Idtiop_m`, `Otro_mo`, `Nom_ent`, `Idtipro_m`, `Otro_mo2`, `No_pro`, `Mo_pro`, `Moneda`, `Ciu_ent`, `Pa_ent`, `Idtien_re`, `No_solicit`, `Cod_vend`) VALUES
(1, 123, 1, '2022-06-10', 1, 'sonia', 'maria', 'salas', 'sanchez', 4, 'dfdgfg', '2022-06-09', '2022-06-17', 'dfgdfgdf', 1, 3, 2, 'dgfdgd', 'dgfgdgd', 345, 534, 'dfgdg', 'dfgdfg', 'gdgdf', 'gdfgd', 3453, 53453, 'fdgdfg', 'gdfgd', 6, 'dfgdgd', 2342, 34, 'dsgsdg', 'dsfsdf', 'dsffs', 'fsdfs', 'fsdf', 'fdsf', 324, 43, 3242, 'dssfsfd', 3455, 5345, 'dgddfg', 54353, 5435, 3453, 53453, '2022-06-14', 'Si', 'No', 2, 'Si', 34535, 'fgdfgd', 'gdfgfd', 3453, 5344, 'dsfsdfs', 'dsfsf', 'sdfsf', 'Si', 5, 'gfhfh', 'dfhdhfhdhd', 2, 'dfgdfgd', 345, 3453, '5345', 'dgfdgd', 'gdfgd', 1, 3453, 4353),
(12, 435436, 1, '2022-07-05', 1, 'dgdfgdf', 'gdfgdf', 'gfdgdf', 'fdgdfg', 1, 'sdfsdfs', '2022-07-22', '2022-07-15', 'dfsdfsd', 2, 1, 2, 'fdsfsdf', 'dsfsd', 435, 4353, 'dfsdf', 'dsfsd', 'sdfsd', 'sdfsf', 3452, 45232, 'fsdgsdh', 'dsfsdf', 6, 'sddsgds', 3453, 53453, 'dsfds', 'sdffsd', 'dsfsdfsd', 'fdhdf', 'fgdgf', 'fdgdf', 435, 34, 5345, 'fdgdf', 35435, 3453, 'dfgdfgd', 345, 453, 34534, 53453, '2022-07-12', 'Si', 'Si', 1, 'Si', 435345, 'fdgdf', 'gfdgdf', 34534, 534534, 'fdgdfg', 'dfgdf', 'dfgdfg', 'Si', 1, 'gdfgdf', 'fdgdfgd', 1, 'fdgdfgdf', 34534, 34534, 'dgfdgdf', 'dfgdfgdf', 'gdfgdf', 1, 7585, 547845),
(13, 123, 1, '2022-06-10', 2, 'sonia', 'maria', 'salas', 'sanchez', 4, 'dfdgfg', '2022-06-09', '2022-06-17', 'dfgdfgdf', 1, 3, 2, 'dgfdgd', 'dgfgdgd', 345, 534, 'dfgdg', 'dfgdfg', 'gdgdf', 'gdfgd', 3453, 53453, 'fdgdfg', 'gdfgd', 6, 'dfgdgd', 2342, 34, 'dsgsdg', 'dsfsdf', 'dsffs', 'fsdfs', 'fsdf', 'fdsf', 324, 43, 3242, 'dssfsfd', 3455, 5345, 'dgddfg', 54353, 5435, 3453, 53453, '2022-06-14', 'Si', 'No', 2, 'Si', 34535, 'fgdfgd', 'gdfgfd', 3453, 5344, 'dsfsdfs', 'dsfsf', 'sdfsf', 'Si', 5, 'gfhfh', 'dfhdhfhdhd', 2, 'dfgdfgd', 345, 3453, '5345', 'dgfdgd', 'gdfgd', 1, 3453, 4353),
(14, 123, 1, '2022-06-04', 2, 'sonia', 'maria', 'salas', 'sanchez', 4, 'dfdgfg', '2022-06-09', '2022-06-17', 'dfgdfgdf', 1, 3, 2, 'dgfdgd', 'dgfgdgd', 345, 534, 'dfgdg', 'dfgdfg', 'gdgdf', 'gdfgd', 3453, 53453, 'fdgdfg', 'gdfgd', 6, 'dfgdgd', 2342, 34, 'dsgsdg', 'dsfsdf', 'dsffs', 'fsdfs', 'fsdf', 'fdsf', 324, 43, 3242, 'dssfsfd', 3455, 5345, 'dgddfg', 54353, 5435, 3453, 53453, '2022-06-14', 'Si', 'No', 2, 'Si', 34535, 'fgdfgd', 'gdfgfd', 3453, 5344, 'dsfsdfs', 'dsfsf', 'sdfsf', 'Si', 5, 'gfhfh', 'dfhdhfhdhd', 2, 'dfgdfgd', 345, 3453, '5345', 'dgfdgd', 'gdfgd', 1, 3453, 4353),
(15, 1192719887, 1, '2022-09-14', 1, 'Cristian', 'Andres', 'Castaño', 'Salas', 1, 'Palmira', '2022-09-09', '2022-08-31', 'Florida', 1, 1, 1, 'Cual', 'calle 47', 34, 31, 'Poblado Comfaunion', 'Palmira', 'Valle', 'Colombia', 3172527140, 3172527140, 'cristian.0713.cs@gmail.com', 'Programador', 1, 'Programador', 3423, 32, 'YisusForEver', 'Cielo 45', 'La mesa', 'El paraiso', 'La eternidad', 'Cielo', 3242, 4234, 4234, 'yisus@gmail.com', 589988, 45652, 'dfgfd', 787778, 54654, 54653, 5645, '2022-09-16', 'No', 'Si', 1, 'Si', 345345, 'dfdsfs', 'dsfdsf', 34534, 3453453, 'fdgdfg', 'fdgdf', 'gfdgdf', 'Si', 2, 'dfgfd', 'gdfgd', 1, 'fdgdfdf', 4353, 5344, 'dfgdf', 'fdgdf', 'fdgdfg', 1, 1123234, 3463),
(16, 566, 1, '2022-09-10', 2, 'dfg', 'dfgdf', 'fdgdf', 'gdfg', 3, 'dfsd', '2022-09-17', '2022-09-17', 'dsfsdf', 1, 1, 2, 'sdfsd', 'dsfsd', 4355, 345, 'dsfds', 'dfsdf', 'dsfsd', 'fsdfsd', 345345, 5345, 'cristian@gmail.com', 'fdgfdgfd', 4, 'dfgdfg', 54534, 434, 'fdgdfg', 'gfdgdfg', 'dfgdfg', 'dfgdfg', 'dfgdfg', 'gdfgdfg', 54645, 645, 545345, 'cristian@gmail.com', 546, 63453, 'fdgdf', 3563, 34643, 56456, 546345, '2022-09-16', 'Si', 'Si', 2, 'No', 546456, 'fdgfd', 'fdgfd', 54654, 54762, 'dfgdfg', 'fdgfdg', 'dfgdfg', 'No', 4, 'dfgdfg', 'fdgdfgdf', 2, 'fdgdfg', 5464, 5464, 'fdgfd', 'fgfdgfd', 'gdfgdf', 1, 67456, 54345);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cont_ent`
--

CREATE TABLE `cont_ent` (
  `idcont_ent` int NOT NULL,
  `No_docu` double NOT NULL COMMENT 'Nunero de documento del contacto de la entidad',
  `Idti_doc` int DEFAULT NULL COMMENT 'Identificacion del tipo de documento',
  `Pri_nom` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Primer nombre del contacto de la entidad',
  `Seg_nom` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Segundo nombre del contacto de la entidad',
  `Pri_ape` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Primer apellido del contacto de la entidad',
  `Seg_ape` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Segundo apellido del contacto de la entidad',
  `Cargo` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Cargo del contacto de la entidad',
  `Dir_lab` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Direccion laboral del contacto de la entidad',
  `Barrio` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Barrio del contacto de la entidad',
  `Ciu_mu` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Ciudad o municipio del contacto de la entidad',
  `Depart` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Departamento del contacto de la entidad',
  `Pais` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Pais del contacto de la entidad',
  `Tel_lab` double DEFAULT NULL COMMENT 'Telefono laboral del contacto de la entidad',
  `Ext` int DEFAULT NULL COMMENT 'Extension de numero',
  `Celular` double DEFAULT NULL COMMENT 'Celular del contacto de la entidad',
  `Corr_lab` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Correo laboral del contacto de la entidad'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Informacion de un contacto de la entidad';

--
-- Volcado de datos para la tabla `cont_ent`
--

INSERT INTO `cont_ent` (`idcont_ent`, `No_docu`, `Idti_doc`, `Pri_nom`, `Seg_nom`, `Pri_ape`, `Seg_ape`, `Cargo`, `Dir_lab`, `Barrio`, `Ciu_mu`, `Depart`, `Pais`, `Tel_lab`, `Ext`, `Celular`, `Corr_lab`) VALUES
(1, 22222, 4, '22222', '2222', '2222', '2222', '22222', '22222', '2222', '2222', '2222', '2222', 2222, 222222, 2222, '22222'),
(2, 666666, 1, 'gh', 'gh', 'gh', 'gh', 'gh', 'gh', 'gh', 'gh', 'gh', 'gh', 4444, 444, 444, 'gh'),
(3, 3333, 1, 'sdd', 'sssdds', 'sssddd', 'sssdd', 'sdd', 'ssddd', 'sdd', 'sds', 'sdsd', 'sdsd', 333, 333, 333, 'sdsd'),
(4, 657567, 4, 'gfhfgh', 'fghfghf', 'hfghfg', 'hgfhfgh', 'gfhfgh', 'fghfgh', 'ghfgh', 'fghfgh', 'fghfgh', 'hfhgh', 56456, 56456, 456456, 'gfhfghf'),
(5, 573487, 4, 'fdg', 'fdgdf', 'gdfgfd', 'gdfg', 'fdgdg', 'gdfgd', 'gdfgdf', 'gdfgdf', 'gdfg', 'fdgdf', 5645, 56, 54644, 'cris@gmail.vom');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta_c`
--

CREATE TABLE `cuenta_c` (
  `No_cuenta` int NOT NULL COMMENT 'Numero de cuenta',
  `No_ide` double DEFAULT NULL COMMENT 'Numero de identificacion del cliente ',
  `Idti_cue` int DEFAULT NULL COMMENT 'Identificacion de tipo de cuenta'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Cuentas del cliente comun';

--
-- Volcado de datos para la tabla `cuenta_c`
--

INSERT INTO `cuenta_c` (`No_cuenta`, `No_ide`, `Idti_cue`) VALUES
(137627, 435436, NULL),
(562725, 1192719887, NULL),
(791778, 566, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta_j`
--

CREATE TABLE `cuenta_j` (
  `No_cuenta` int NOT NULL COMMENT 'Numero de cuenta',
  `Nit` double DEFAULT NULL COMMENT 'Nit de la entidad',
  `Idti_cue` int DEFAULT NULL COMMENT 'Identificacion de tipo de cuenta'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='cuenta de persona jjuridica';

--
-- Volcado de datos para la tabla `cuenta_j`
--

INSERT INTO `cuenta_j` (`No_cuenta`, `Nit`, `Idti_cue`) VALUES
(551389, 11111111, NULL),
(683201, 345, NULL),
(722416, 435345, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entidad`
--

CREATE TABLE `entidad` (
  `Id_ent` int NOT NULL,
  `Fe_dil` date DEFAULT NULL COMMENT 'Fecha de diligenciamiento',
  `Idti_sol` int DEFAULT NULL COMMENT 'Identificacion de tipo de solicitud',
  `tidoc_ent` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'tipo de documento de la entidad',
  `Nit` double DEFAULT NULL COMMENT 'Nit de la entidad',
  `Fidei` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'fideicomiso',
  `No_fide` double DEFAULT NULL COMMENT 'Numero de fideicomiso',
  `Nom_ra` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Nombre o razon social de la entidad',
  `Nom_cor` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Nombre corto o sigla',
  `Fe_cons` date DEFAULT NULL COMMENT 'Fecha de constitucion de la entidad',
  `Ciu_cons` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Ciudad de constitucion de la entidad',
  `Pai_cons` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Pais de constitucion de la entidad',
  `Dir_se` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Direccion de sede principal de la entidad',
  `Barrio` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Barrio de la entidad',
  `Ciu_mu` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Ciudad de la entidad',
  `Depart` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Departamento de la entidad',
  `Pais` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Pais de la entidad',
  `Telefono` double DEFAULT NULL COMMENT 'Telefono de la entidad',
  `Ext` int DEFAULT NULL COMMENT 'Extension de numero ',
  `Corr_se` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Correo de la sede principal',
  `No_doc` double DEFAULT NULL COMMENT 'Numero de documento del representante legal',
  `Pre_1` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '¿Tiene socios o accionistas con participación directa o indirecta superior al 5%?	',
  `Pre_2` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '¿Tiene socios o accionistas con participación directa o indirecta igual o inferior al 5% y que tengan control sobre la entidad?	',
  `No_docu` double DEFAULT NULL COMMENT 'Nunero de documento del contacto de la entidad',
  `Idti_na` int DEFAULT NULL COMMENT 'Identificacion de tipo de naturaleza	',
  `Co_ciuu` double DEFAULT NULL COMMENT 'Codigo CIUU	',
  `Det_act` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Detalle de la actividad economica principal	',
  `No_emp` int DEFAULT NULL COMMENT 'Numero de empleados	',
  `Idti_soci` int DEFAULT NULL COMMENT 'Identificacion del tipo de sociedad comercial o civil	',
  `Otro_com` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Otro tipo de sociedad comercial o civil	',
  `Idti_en` int DEFAULT NULL COMMENT 'Identificacion de tipo de entidad o asociacion	',
  `Otro_ent` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Otro tipo de entidad o asociacion	',
  `Idti_es` int DEFAULT NULL COMMENT 'Identificacion de tipos de entidades estatales	',
  `Otro_est` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'otro tipo de entidad estatal	',
  `Idti_des` int DEFAULT NULL COMMENT 'identificacion de tipos de entidades estatales descentralizadas de orden	',
  `Ing_op` double DEFAULT NULL COMMENT 'Ingresos operacionales mensuales	',
  `Ino_op` double DEFAULT NULL COMMENT 'ngresos no operacionales mensuales	',
  `Detno` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Detalle de ingresos no operacionales u originados en actividades diferentes a la principal	',
  `vent_an` double DEFAULT NULL COMMENT 'Ventas anuales	',
  `Fe_ci` date DEFAULT NULL COMMENT 'Fecha de cierre de ventas	',
  `Egre_me` double DEFAULT NULL COMMENT 'Egresos mensuales	',
  `Util_ne` double DEFAULT NULL COMMENT 'Utilidad neta	',
  `Tot_act` double DEFAULT NULL COMMENT 'Total activos	',
  `Tot_pas` double DEFAULT NULL COMMENT 'Total pasivos	',
  `Tot_pat` double DEFAULT NULL COMMENT 'Total patrimonio	',
  `Idti_cont` int DEFAULT NULL COMMENT 'Identificacion de tipo de contribuyente	',
  `Idcla_cont` int DEFAULT NULL COMMENT 'Identificacion de clase de contribuyente	',
  `Res_iva` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Responsable de iva	',
  `Aut_ing` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Autorretenedor otros ingresos	',
  `Int_merc` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Intermediario del mercado cambiario	',
  `Vig_sup` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Es vigilado por la superintendencia financiera	',
  `Obli_est` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Obligado a tributar en Estados Unidos	',
  `No_id_tr` double DEFAULT NULL COMMENT 'Si su respuesta es afirmativa indique el número de ID tributario (TIN)	',
  `Patri_1` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Pais donde se tributa numero 1	',
  `Patri_2` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Pais donde se tributa numero 2	',
  `NoidTrib_1` double DEFAULT NULL COMMENT 'Numero de identificacion tributario numero 1	',
  `NoidTrib_2` double DEFAULT NULL COMMENT 'Numero de identificacion tributario numero 2	',
  `Idtripro_bi` int DEFAULT NULL COMMENT 'Identificacion de tipos de proveniencia de bienes	',
  `Otro_fue` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Otro tipo de proveniencia de bienes	',
  `Idfue_rec` int DEFAULT NULL COMMENT 'Identificacion de los Tipos de proveniencia de los recursos entregados	',
  `Otro_pro` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Otro Tipo de proveniencia de los recursos entregados	',
  `Pais_or` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'El pais de origen de bienes y/o fondos	',
  `Ciu_or` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'La ciudad de origen de bienes y/o fondos	',
  `Nat_recu` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Declaración naturaleza de los recursos	',
  `Op_ext` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'operaciones en moneda extranjera?	',
  `Idtiop_m` int DEFAULT NULL COMMENT 'Identificacion de Tipos de operaciones en moneda extranjera	',
  `Otro_mo` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Otro Tipo de operaciones en moneda extranjera	',
  `Nom_ent` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Nombre de la entidad	',
  `Idtipro_m` int DEFAULT NULL COMMENT 'Identificacion de Tipo de producto en moneda extranjera	',
  `Otro_mo2` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Otro Tipo de producto en moneda extranjera	',
  `No_pro` double DEFAULT NULL COMMENT 'Numero de producto	',
  `Mo_pro` double DEFAULT NULL COMMENT 'Monto mensual promedio	',
  `Moneda` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Moneda utilizada	',
  `Ciu_ent` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Ciudad de la entidad	',
  `Pa_ent` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Pais de la entidad	',
  `Idtien_re` int DEFAULT NULL COMMENT 'Identificacion de Tipo de entrega de Reporte Anual de Costos Totales',
  `No_solicit` double DEFAULT NULL COMMENT 'Numero de identificacion del solicitante',
  `Cod_vend` int DEFAULT NULL COMMENT 'Código vendedor'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Informacion de la entidad';

--
-- Volcado de datos para la tabla `entidad`
--

INSERT INTO `entidad` (`Id_ent`, `Fe_dil`, `Idti_sol`, `tidoc_ent`, `Nit`, `Fidei`, `No_fide`, `Nom_ra`, `Nom_cor`, `Fe_cons`, `Ciu_cons`, `Pai_cons`, `Dir_se`, `Barrio`, `Ciu_mu`, `Depart`, `Pais`, `Telefono`, `Ext`, `Corr_se`, `No_doc`, `Pre_1`, `Pre_2`, `No_docu`, `Idti_na`, `Co_ciuu`, `Det_act`, `No_emp`, `Idti_soci`, `Otro_com`, `Idti_en`, `Otro_ent`, `Idti_es`, `Otro_est`, `Idti_des`, `Ing_op`, `Ino_op`, `Detno`, `vent_an`, `Fe_ci`, `Egre_me`, `Util_ne`, `Tot_act`, `Tot_pas`, `Tot_pat`, `Idti_cont`, `Idcla_cont`, `Res_iva`, `Aut_ing`, `Int_merc`, `Vig_sup`, `Obli_est`, `No_id_tr`, `Patri_1`, `Patri_2`, `NoidTrib_1`, `NoidTrib_2`, `Idtripro_bi`, `Otro_fue`, `Idfue_rec`, `Otro_pro`, `Pais_or`, `Ciu_or`, `Nat_recu`, `Op_ext`, `Idtiop_m`, `Otro_mo`, `Nom_ent`, `Idtipro_m`, `Otro_mo2`, `No_pro`, `Mo_pro`, `Moneda`, `Ciu_ent`, `Pa_ent`, `Idtien_re`, `No_solicit`, `Cod_vend`) VALUES
(3, '2022-07-12', NULL, 'Nit', 11111111, 'Fideicomiso', 1111111, 'sd', 'sd', '2022-07-18', 'sd', 'sdsd', 'sd', 'sdsd', 'sd', 'sd', 'sd', 111111, 1111, '1111', 2222, 'Si', 'Si', 3333, 1, 2435, 'sddd', 34, 7, 'sddd', 10, 'sddd', 2, 'sddd', 2, 333, 44343, 'sdsdsdd', 345345, '2022-07-11', 34534, 54353, 345344, 345345, 43535, 2, 1, 'Si', 'Si', 'Si', 'Si', 'Si', 43663, 'sddd', 'sdddd', 4545, 45445, 1, 'sdddd', 2, 'sddd', 'sddd', 'sddd', 'Si', 'Si', 2, 'sddd', 'sddd', 2, 'sddd', 3453, 546456, 'sdd', 'sdd', 'sdsdd', 1, 6573, 6986),
(4, '2022-08-23', NULL, 'Nit', 435345, 'Fideicomiso', 34534, 'fdgdfg', 'dfgdf', '2022-08-11', 'fghgf', 'hfghf', 'gfhfghf', 'fghfgh', 'gfhfg', 'hfghfg', 'fghfgh', 657, 56756, 'gfhfg', 657567, 'Si', 'Si', 657567, 1, 5467546, 'fghfgh', 5745, 7, 'gfhfgh', 11, 'gfhfgh', 2, 'gfhfghf', 1, 6576547, 4674, 'gfhfghg', 674674, '2022-08-24', 654456, 645645, 645645, 546456, 465645, 2, 1, 'Si', 'Si', 'Si', 'Si', 'Si', 546455, 'gfhfgh', 'fghfghf', 54645, 64564, 1, 'gfhfgh', 2, 'hgfhfg', 'ghfgh', 'fghfgh', 'Si', 'Si', 3, 'gfhfgh', 'fghfghf', 2, 'gfhfgh', 567434, 456456, '64564', '56456', '4564', 1, 7686786, 456458),
(5, '2022-07-12', NULL, 'Nit', 11111111, 'Fideicomiso', 1111111, 'sd', 'sd', '2022-07-18', 'sdddddd', 'sdsd', 'sd', 'sdsd', 'sd', 'sd', 'sd', 111111, 1111, '1111', 2222, 'Si', 'Si', 3333, 1, 2435, 'sddd', 34, 7, 'sddd', 10, 'sddd', 2, 'sddd', 2, 333, 44343, 'sdsdsdd', 345345, '2022-07-11', 34534, 54353, 345344, 345345, 43535, 2, 1, 'Si', 'Si', 'Si', 'Si', 'Si', 43663, 'sddd', 'sdddd', 4545, 45445, 1, 'sdddd', 2, 'sddd', 'sddd', 'sddd', 'Si', 'Si', 2, 'sddd', 'sddd', 2, 'sddd', 3453, 546456, 'sdd', 'sdd', 'sdsdd', 1, 6573, 6986),
(6, '2022-09-10', 2, 'Nit', 345, 'Fideicomiso', 5643, 'jose', 'gilberto', '2022-09-10', 'dfgdf', 'fdgdfg', 'fgd', 'fdgfd', 'gdfgdf', 'dfgdf', 'fgdf', 5645, 56, 'cris@gmail.com', 453456, 'Si', 'Si', 573487, 1, 546456, 'fdgfd', 54, 6, 'fhdf', 12, 'fdgfdg', 1, 'fdgdfg', 2, 54644, 6456, 'gfhgf', 5646, '2022-09-16', 56456, 456, 6456, 64564, 64564, 2, 1, 'Si', 'Si', 'Si', 'Si', 'Si', 546455, 'dfgdf', 'fdgfd', 4353, 53234, 1, 'fdgdf', 1, 'fdgdf', 'gdfgd', 'fdgdfg', 'Si', 'Si', 2, 'gffhfg', 'gfhfg', 1, 'hfghfg', 5461, 54654, 'dfgfdg', 'gfdgdf', 'dgfgdf', 1, 5645674, 34156);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `est_soli`
--

CREATE TABLE `est_soli` (
  `Idest_soli` int NOT NULL COMMENT 'Identificacion de estado de la solicitud',
  `Idclient` double DEFAULT NULL COMMENT 'Identificacion de cliente tanto comun como entidad',
  `Esta_so` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Estado de la solicitud',
  `Des_soli` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Descripcion del estado de la solicitud'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Estado de la solicitud';

--
-- Volcado de datos para la tabla `est_soli`
--

INSERT INTO `est_soli` (`Idest_soli`, `Idclient`, `Esta_so`, `Des_soli`) VALUES
(16, 435436, 'Aprobada', 'La solicitud fue aprobada'),
(17, 435436, 'Aprobada', 'La solicitud fue aprobada'),
(18, 435436, 'Aprobada', 'La solicitud fue aprobada'),
(19, 123, 'Denegada', 'por bobo'),
(20, 123, 'Aprobada', 'La solicitud fue aprobada'),
(21, 123, 'Aprobada', 'La solicitud fue aprobada'),
(22, 123, 'Aprobada', 'La solicitud fue aprobada'),
(23, 123, 'Aprobada', 'La solicitud fue aprobada'),
(24, 123, 'Aprobada', 'La solicitud fue aprobada'),
(25, 123, 'Denegada', 'rrterter');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `est_solij`
--

CREATE TABLE `est_solij` (
  `Idest_solij` int NOT NULL COMMENT 'Identificacion de estado de la solicitud de persona juridica',
  `idclientj` double DEFAULT NULL COMMENT 'Identificacion de cliente entidad',
  `Esta_soj` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Estado de la solicitud de la entidad',
  `Des_solij` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Descripcion del estado de la solicitud'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Estado de solicitud de persona juridica';

--
-- Volcado de datos para la tabla `est_solij`
--

INSERT INTO `est_solij` (`Idest_solij`, `idclientj`, `Esta_soj`, `Des_solij`) VALUES
(9, 11111111, 'Aprobada', 'La solicitud fue aprobada'),
(10, 11111111, 'Aprobada', 'La solicitud fue aprobada'),
(11, 11111111, 'Aprobada', 'La solicitud fue aprobada'),
(12, 11111111, 'Aprobada', 'La solicitud fue aprobada'),
(13, 11111111, 'Aprobada', 'La solicitud fue aprobada'),
(14, 11111111, 'Aprobada', 'La solicitud fue aprobada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fue_recu`
--

CREATE TABLE `fue_recu` (
  `Idfue_recu` int NOT NULL COMMENT 'Identificacion de los Tipos de proveniencia de los recursos entregados ',
  `Nom_rec` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de los tipos de proveniencia de los recursos entregados'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipos de proveniencia de los recursos entregados';

--
-- Volcado de datos para la tabla `fue_recu`
--

INSERT INTO `fue_recu` (`Idfue_recu`, `Nom_rec`) VALUES
(1, 'Capitalización por parte de socios'),
(2, 'Desarrollo del objeto social'),
(3, 'Utilidades del negocio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `Id_gen` int NOT NULL COMMENT 'Identificacion de genero',
  `Nom_gen` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de genero'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Genero';

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`Id_gen`, `Nom_gen`) VALUES
(1, 'F'),
(2, 'M');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reg_soli`
--

CREATE TABLE `reg_soli` (
  `Id_reg` int NOT NULL COMMENT 'Identificacion de los registros de las solicitudes',
  `No_ide` double NOT NULL COMMENT 'Numero de identificacion del cliente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Registros de solicitudes';

--
-- Volcado de datos para la tabla `reg_soli`
--

INSERT INTO `reg_soli` (`Id_reg`, `No_ide`) VALUES
(38, 566),
(37, 1192719887);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reg_solij`
--

CREATE TABLE `reg_solij` (
  `Id_regj` int NOT NULL COMMENT 'Identificacion de los registros de las solicitudes',
  `Nit` double NOT NULL COMMENT 'Numero de identificacion de la entidad'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Registro de solicitudes de la entidad';

--
-- Volcado de datos para la tabla `reg_solij`
--

INSERT INTO `reg_solij` (`Id_regj`, `Nit`) VALUES
(15, 345),
(14, 435345),
(17, 11111111);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reg_usu`
--

CREATE TABLE `reg_usu` (
  `Id_usu` int NOT NULL COMMENT 'Identificacion de usuario',
  `Usuario` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Usuario',
  `Contra` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Contraseña',
  `Idti_rol` int DEFAULT NULL COMMENT 'Identificacion de tipo de rol'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reg_usu`
--

INSERT INTO `reg_usu` (`Id_usu`, `Usuario`, `Contra`, `Idti_rol`) VALUES
(6, 'cristian31', 'cristian31', 2),
(31, 'cristian32', 'cristian32', 4),
(40, 'cristian33', 'cristian33', 5),
(41, 'cristian34', 'cristian34', 3),
(51, 'ADMIN', 'ADMIN', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `repr_le`
--

CREATE TABLE `repr_le` (
  `idrepre` int NOT NULL,
  `No_doc` double NOT NULL COMMENT 'Numero de documento del representante legal',
  `Idti_doc` int DEFAULT NULL COMMENT 'Identificacion de tipo de documento',
  `Pri_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Primer nombre del representante legal',
  `Seg_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Segundo nombre del representante legal',
  `Pri_ape` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Primer apellido del representante legal',
  `Seg_ape` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'SEgundo apellido del representante legal',
  `Cargo` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Cargo del representante legal',
  `Dir_lab` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Direccion laboral del representante legal',
  `Barrio` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Barrio del representante legal',
  `Ciu_mu` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Ciudad o municipio del representante legal',
  `Depart` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Departamento del representante legal',
  `Pais` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Pais del representante legal',
  `Tel_lab` double DEFAULT NULL COMMENT 'Telefono laboral del representante legal',
  `Ext` int DEFAULT NULL COMMENT 'Extension de telefono',
  `Celular` double DEFAULT NULL COMMENT 'Celular del representante legal',
  `Corr_lab` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Correo laboral del representante legal'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Informacion de representante legal';

--
-- Volcado de datos para la tabla `repr_le`
--

INSERT INTO `repr_le` (`idrepre`, `No_doc`, `Idti_doc`, `Pri_no`, `Seg_no`, `Pri_ape`, `Seg_ape`, `Cargo`, `Dir_lab`, `Barrio`, `Ciu_mu`, `Depart`, `Pais`, `Tel_lab`, `Ext`, `Celular`, `Corr_lab`) VALUES
(4, 2222, 1, 'sdd', 'sdd', 'sdd', 'sdd', 'sdds', 'sdd', 'sddd', 'sdd', 'sdddsd', 'sdd', 222, 2210, 222, 'sddd'),
(5, 657567, 4, 'gfhfg', 'hgffgh', 'fghfgh', 'fghfgh', 'gfhfg', 'gfhfgh', 'fghfg', 'hfgh', 'gfh', 'ghffghfg', 65756, 7567, 5675, 'gfhfgh'),
(6, 453456, 1, 'fdg', 'fdgdf', 'gdfg', 'dfgdf', 'fdfhdfh', 'fhdfhgdf', 'gfdgdf', 'fdgfdg', 'dfgdf', 'gdfgdf', 546, 6456, 4554, 'cris@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitante`
--

CREATE TABLE `solicitante` (
  `idsolicit` int NOT NULL,
  `Idti_soli` int DEFAULT NULL COMMENT 'Identificacion de Tipo de solicitante parte inferior',
  `No_solicit` double NOT NULL COMMENT 'Numero de identificacion del solicitante',
  `Nom_solicit` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Nombre completo del solicitante',
  `Firma` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Firma del solicitante'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Medida de seguridad que contiene informacion del solicitante';

--
-- Volcado de datos para la tabla `solicitante`
--

INSERT INTO `solicitante` (`idsolicit`, `Idti_soli`, `No_solicit`, `Nom_solicit`, `Firma`) VALUES
(2, 2, 3453, 'fgdgd', 'dfgfgd'),
(5, 1, 6573, 'sdsd', 'sdsd'),
(7, 1, 7585, 'dfgdf', 'ftfhgffh'),
(8, 1, 7686786, 'gfhfgh', 'gfhgfhgf'),
(9, 2, 1123234, 'Cris', 'Cristian4k'),
(10, 1, 67456, 'dfgdfgdf', 'dfgdfg'),
(11, 1, 5645674, 'fgdf', 'fdgdfg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tien_re`
--

CREATE TABLE `tien_re` (
  `Idtien_re` int NOT NULL COMMENT 'Identificacion de Tipo de entrega de Reporte Anual de Costos Totales',
  `Nom_tien` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de Tipo de entrega de Reporte Anual de Costos Totales'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de entrega de Reporte Anual de Costos Totales';

--
-- Volcado de datos para la tabla `tien_re`
--

INSERT INTO `tien_re` (`Idtien_re`, `Nom_tien`) VALUES
(1, 'Virtual'),
(2, 'Físico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiest_civ`
--

CREATE TABLE `tiest_civ` (
  `Idest_ci` int NOT NULL COMMENT 'Identificacion de estado civil',
  `Nom_civ` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre del tipo de estado civil'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de estado civil';

--
-- Volcado de datos para la tabla `tiest_civ`
--

INSERT INTO `tiest_civ` (`Idest_ci`, `Nom_civ`) VALUES
(1, 'Soltero'),
(2, 'Unión Libre'),
(3, 'Casado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiocu_ofi`
--

CREATE TABLE `tiocu_ofi` (
  `Idocu_ofi` int NOT NULL COMMENT 'Identificacion de ocupacion o oficio',
  `Nom_ocu` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de tipo de ocupacion o oficio'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de ocupacion o oficio';

--
-- Volcado de datos para la tabla `tiocu_ofi`
--

INSERT INTO `tiocu_ofi` (`Idocu_ofi`, `Nom_ocu`) VALUES
(1, 'Empleado'),
(2, 'Pensionado'),
(3, 'Ama de casa'),
(4, 'Estudiante'),
(5, 'Ganadero'),
(6, 'Comerciante'),
(7, 'Agricultor'),
(8, 'Rentista de capital'),
(9, 'Independiente'),
(10, 'Desempleado sin ingresos'),
(11, 'Desempleado con ingresos'),
(12, 'Profesional independiente'),
(13, 'Socio o Empleado-socio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiop_mo`
--

CREATE TABLE `tiop_mo` (
  `Idtiop_mo` int NOT NULL COMMENT 'Identificacio de Tipos de operaciones en moneda extranjera',
  `Nom_opm` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de Tipos de operaciones en moneda extranjera'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipos de operaciones en moneda extranjera';

--
-- Volcado de datos para la tabla `tiop_mo`
--

INSERT INTO `tiop_mo` (`Idtiop_mo`, `Nom_opm`) VALUES
(1, 'Exportador e importador'),
(2, ' Pago de servicios'),
(3, 'Préstamos'),
(4, 'Exportador'),
(5, 'Inversiones'),
(6, 'Importador'),
(7, 'Envío/Recepción de giros y remesas'),
(8, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipro_bie`
--

CREATE TABLE `tipro_bie` (
  `Idtripro_bie` int NOT NULL COMMENT 'Identificacion de tipos de proveniencia de bienes',
  `Nomti_bie` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de tipos de proveniencia de bienes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tipos de proveniencia de bienes';

--
-- Volcado de datos para la tabla `tipro_bie`
--

INSERT INTO `tipro_bie` (`Idtripro_bie`, `Nomti_bie`) VALUES
(1, 'Compraventa'),
(2, 'Aporte de socios'),
(3, 'Utilidades');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipro_mo`
--

CREATE TABLE `tipro_mo` (
  `Idtipro_mo` int NOT NULL COMMENT 'Identificacion de Tipo de producto en moneda extranjera',
  `Nom_promo` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de Tipo de producto en moneda extranjera'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de producto en moneda extranjera';

--
-- Volcado de datos para la tabla `tipro_mo`
--

INSERT INTO `tipro_mo` (`Idtipro_mo`, `Nom_promo`) VALUES
(1, ' Cuenta de ahorro'),
(2, 'Cuenta corriente'),
(3, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tip_cue`
--

CREATE TABLE `tip_cue` (
  `Idti_cue` int NOT NULL COMMENT 'Identificacion de tipo de cuenta',
  `Nom_cue` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre del tipo de cuenta'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de cuenta ';

--
-- Volcado de datos para la tabla `tip_cue`
--

INSERT INTO `tip_cue` (`Idti_cue`, `Nom_cue`) VALUES
(1, 'Cuenta de ahorro'),
(2, 'Cuenta corriente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tip_pro`
--

CREATE TABLE `tip_pro` (
  `Idti_pro` int NOT NULL COMMENT 'Identificacion de tipo de producto',
  `Nom_pro` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre del producto'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de producto';

--
-- Volcado de datos para la tabla `tip_pro`
--

INSERT INTO `tip_pro` (`Idti_pro`, `Nom_pro`) VALUES
(1, 'Apertura de cuenta'),
(2, 'Consignacion'),
(3, 'Retiro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tip_rol`
--

CREATE TABLE `tip_rol` (
  `Idti_rol` int NOT NULL COMMENT 'Identificacion de tipo de rol',
  `Nom_rol` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de rol'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tip_rol`
--

INSERT INTO `tip_rol` (`Idti_rol`, `Nom_rol`) VALUES
(1, 'Director '),
(2, 'Asesor'),
(3, 'Gerente'),
(4, 'Cajero'),
(5, 'Cajero Principal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tireg_iv`
--

CREATE TABLE `tireg_iv` (
  `Idtireg_iv` int NOT NULL COMMENT 'Identificacion de tipos de regimen de iva',
  `Nom_reg` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de tipos de regimen de iva'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipos de regimen de iva';

--
-- Volcado de datos para la tabla `tireg_iv`
--

INSERT INTO `tireg_iv` (`Idtireg_iv`, `Nom_reg`) VALUES
(1, 'Común'),
(2, 'Simplificado'),
(3, 'Ninguno');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_contr`
--

CREATE TABLE `ti_contr` (
  `Idti_contr` int NOT NULL COMMENT 'Identificacion de tipo de contribuyente',
  `Nom_contr` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de tipo de contribuyente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de contribuyente';

--
-- Volcado de datos para la tabla `ti_contr`
--

INSERT INTO `ti_contr` (`Idti_contr`, `Nom_contr`) VALUES
(1, 'Persona juridicas, comerciales y civiles, consorcios y uniones temporales'),
(2, 'Corporaciones, fundaciones y asociaciones sin ánimo de lucro'),
(3, 'Entidad pública nacional o territorial'),
(4, 'Cooperativa'),
(5, 'No contribuyente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_desc`
--

CREATE TABLE `ti_desc` (
  `Idti_desc` int NOT NULL COMMENT 'identificacion de tipos de entidades estatales descentralizadas de orden',
  `Nom_desc` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de tipos de entidades estatales descentralizadas de orden'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipos de entidades estatales descentralizadas de orden';

--
-- Volcado de datos para la tabla `ti_desc`
--

INSERT INTO `ti_desc` (`Idti_desc`, `Nom_desc`) VALUES
(1, 'Nacional'),
(2, 'Departamental'),
(3, 'Municipal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_doc`
--

CREATE TABLE `ti_doc` (
  `Idti_doc` int NOT NULL COMMENT 'Identificacion de tipo de documento',
  `Nom_doc` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de documento'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de documento';

--
-- Volcado de datos para la tabla `ti_doc`
--

INSERT INTO `ti_doc` (`Idti_doc`, `Nom_doc`) VALUES
(1, 'Cédula de Ciudadanía'),
(2, 'Tarjeta de identidad'),
(3, 'Registro Civil'),
(4, 'Cédula extranjería'),
(5, 'Pasaporte'),
(6, 'Carné diplomático');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_ent`
--

CREATE TABLE `ti_ent` (
  `Idti_ent` int NOT NULL COMMENT 'Identificacion de tipo de entidad o asociacion',
  `Noti_ent` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de tipo de entidad o asociacion'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de entidad o asociacion';

--
-- Volcado de datos para la tabla `ti_ent`
--

INSERT INTO `ti_ent` (`Idti_ent`, `Noti_ent`) VALUES
(1, 'Establecimiento público'),
(2, 'Empresa industrial y comercial del estado'),
(3, 'Sociedad de economía mixta'),
(4, 'Empresa social del estado'),
(5, 'Empresa servicios públicos domiciliarios'),
(6, 'Entidades financieras'),
(7, 'Fondos mutuos de inversión'),
(8, 'Fondos de empleados'),
(9, 'Cooperativas'),
(10, 'Precooperativas'),
(11, 'Copropiedades'),
(12, 'Personas jurídicas de derecho canónico'),
(13, 'Entidades religiosas no católicas'),
(14, 'Sindicatos'),
(15, 'Fundaciones'),
(16, 'Corporaciones y asociaciones'),
(17, 'Partido político'),
(18, '*Consorcio'),
(19, '*Unión temporal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_est`
--

CREATE TABLE `ti_est` (
  `Idti_est` int NOT NULL COMMENT 'Identificacion de tipos de entidades estatales',
  `Nom_est` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de tipo de entidades estatales'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipos de entidades estatales';

--
-- Volcado de datos para la tabla `ti_est`
--

INSERT INTO `ti_est` (`Idti_est`, `Nom_est`) VALUES
(1, 'Nación'),
(2, 'Departamento'),
(3, 'Municipio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_nac`
--

CREATE TABLE `ti_nac` (
  `Id_nac` int NOT NULL COMMENT 'Identificacion de tipo de nacionalidad',
  `Nom_nac` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de tipo de nacionalidad'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de nacionalidad';

--
-- Volcado de datos para la tabla `ti_nac`
--

INSERT INTO `ti_nac` (`Id_nac`, `Nom_nac`) VALUES
(1, 'Colombiano'),
(2, 'Estadounidense'),
(3, 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_nat`
--

CREATE TABLE `ti_nat` (
  `Idti_nat` int NOT NULL COMMENT 'Identificacion de tipo de naturaleza ',
  `Nom_nat` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre del tipo de naturaleza'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de naturaleza de la entidad';

--
-- Volcado de datos para la tabla `ti_nat`
--

INSERT INTO `ti_nat` (`Idti_nat`, `Nom_nat`) VALUES
(1, 'Privada'),
(2, 'Pública'),
(3, 'Mixta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_soc`
--

CREATE TABLE `ti_soc` (
  `Idti_soc` int NOT NULL COMMENT 'Identificacion del tipo de sociedad comercial o civil',
  `nom_ti` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de tipo de sociedad comercial o civil'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tipo de sociedad comercial o civil';

--
-- Volcado de datos para la tabla `ti_soc`
--

INSERT INTO `ti_soc` (`Idti_soc`, `nom_ti`) VALUES
(1, 'Por acciones simplificadas S.A.S'),
(2, 'Anónima'),
(3, 'Limitada'),
(4, 'En comandita simple'),
(5, 'En comandita por acciones'),
(6, 'Sin animo de lucro'),
(7, 'Surcusal de sociedad extranjera'),
(8, 'Empresa unipersonal'),
(9, 'Asociación civil'),
(10, 'Sociedad de hecho'),
(11, 'Colectiva'),
(12, 'Ninguna');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_sol`
--

CREATE TABLE `ti_sol` (
  `Idti_sol` int NOT NULL COMMENT 'Identificacion de tipo de solicitud',
  `Nom_sol` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de solicitud'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Entidad';

--
-- Volcado de datos para la tabla `ti_sol`
--

INSERT INTO `ti_sol` (`Idti_sol`, `Nom_sol`) VALUES
(1, 'Vinculación'),
(2, 'Actualización');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_soli`
--

CREATE TABLE `ti_soli` (
  `Idti_soli` int NOT NULL COMMENT 'Identificacion de Tipo de solicitante parte inferior',
  `Nom_soli` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de tipo de solicitante parte inferior'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tipo de solicitante parte inferior';

--
-- Volcado de datos para la tabla `ti_soli`
--

INSERT INTO `ti_soli` (`Idti_soli`, `Nom_soli`) VALUES
(1, 'Representante '),
(2, 'Apoderado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ti_solicit`
--

CREATE TABLE `ti_solicit` (
  `Idti_solicit` int NOT NULL COMMENT 'Identificacion de Tipo de solicitante ',
  `Nomti_sol` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'Nombre de Tipo de solicitante'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tipo de solicitante';

--
-- Volcado de datos para la tabla `ti_solicit`
--

INSERT INTO `ti_solicit` (`Idti_solicit`, `Nomti_sol`) VALUES
(1, 'Beneficiario/Ordenante de giros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--

CREATE TABLE `vendedor` (
  `idcond` int NOT NULL,
  `Cod_vend` int NOT NULL COMMENT 'Código vendedor',
  `Nom_vend` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Nombre del vendedor',
  `Oficina` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Oficina del vendedor',
  `Obser` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Observaciones',
  `Firma_vend` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'Firma del vendedor'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Vendedor';

--
-- Volcado de datos para la tabla `vendedor`
--

INSERT INTO `vendedor` (`idcond`, `Cod_vend`, `Nom_vend`, `Oficina`, `Obser`, `Firma_vend`) VALUES
(2, 4353, 'dfgdfg', 'gfdgd', 'gdfgdf', 'dfgdgdf'),
(5, 6986, 'ddsd', 'sdsds', 'sdsds', 'sdsdsds'),
(7, 547845, 'fdgfd', 'fdgdf', 'dfgdfgdf', 'gfdgdfhd'),
(8, 456458, 'ghfg', 'gfhgfh', 'hgfhfgh', 'gfhfgh'),
(9, 3463, 'vendedir', 'de4', 'ninguna', 'cristianacs'),
(10, 54345, 'gdfgd', 'gfdgd', 'fdgdfg', 'fdgfdgf'),
(11, 34156, 'fdfsd', 'fsdfsd', 'fsdfsdf', 'fsdfdsfsd');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `act_cli`
--
ALTER TABLE `act_cli`
  ADD PRIMARY KEY (`Idact_cli`),
  ADD KEY `No_cue` (`No_cuec`),
  ADD KEY `No_cuej` (`No_cuej`);

--
-- Indices de la tabla `act_val`
--
ALTER TABLE `act_val`
  ADD PRIMARY KEY (`Id_act_val`);

--
-- Indices de la tabla `cla_contr`
--
ALTER TABLE `cla_contr`
  ADD PRIMARY KEY (`Idcla_contr`);

--
-- Indices de la tabla `client_co`
--
ALTER TABLE `client_co`
  ADD PRIMARY KEY (`Id_client`),
  ADD KEY `Idti_solicit` (`Idti_solicit`),
  ADD KEY `Idti_doc` (`Idti_doc`),
  ADD KEY `Id_gen` (`Id_gen`),
  ADD KEY `Idest_ci` (`Idest_ci`),
  ADD KEY `Id_nac` (`Id_nac`),
  ADD KEY `Idtien_re` (`Idtien_re`),
  ADD KEY `No_solicit` (`No_solicit`),
  ADD KEY `Cod_vend` (`Cod_vend`),
  ADD KEY `Idocu_ofii` (`Idocu_ofii`),
  ADD KEY `Idtireg_iva` (`Idtireg_iva`),
  ADD KEY `Idtipro_m` (`Idtipro_m`),
  ADD KEY `Idtiop_m` (`Idtiop_m`),
  ADD KEY `No_ide` (`No_ide`),
  ADD KEY `Idti_sol` (`Idti_sol`);

--
-- Indices de la tabla `cont_ent`
--
ALTER TABLE `cont_ent`
  ADD PRIMARY KEY (`idcont_ent`),
  ADD KEY `Idti_doc` (`Idti_doc`),
  ADD KEY `No_docu` (`No_docu`);

--
-- Indices de la tabla `cuenta_c`
--
ALTER TABLE `cuenta_c`
  ADD PRIMARY KEY (`No_cuenta`),
  ADD KEY `No_ide` (`No_ide`),
  ADD KEY `Idti_cue` (`Idti_cue`);

--
-- Indices de la tabla `cuenta_j`
--
ALTER TABLE `cuenta_j`
  ADD PRIMARY KEY (`No_cuenta`),
  ADD KEY `Nit` (`Nit`),
  ADD KEY `Idti_cue` (`Idti_cue`);

--
-- Indices de la tabla `entidad`
--
ALTER TABLE `entidad`
  ADD PRIMARY KEY (`Id_ent`),
  ADD KEY `No_doc` (`No_doc`),
  ADD KEY `No_docu` (`No_docu`),
  ADD KEY `Idtien_re` (`Idtien_re`),
  ADD KEY `No_solicit` (`No_solicit`),
  ADD KEY `Cod_vend` (`Cod_vend`),
  ADD KEY `Idti_na` (`Idti_na`),
  ADD KEY `Idti_soci` (`Idti_soci`),
  ADD KEY `Idti_en` (`Idti_en`),
  ADD KEY `Idti_es` (`Idti_es`),
  ADD KEY `Idti_des` (`Idti_des`),
  ADD KEY `Idti_cont` (`Idti_cont`),
  ADD KEY `Idcla_cont` (`Idcla_cont`),
  ADD KEY `Idtripro_bi` (`Idtripro_bi`),
  ADD KEY `Idfue_rec` (`Idfue_rec`),
  ADD KEY `Idtiop_m` (`Idtiop_m`),
  ADD KEY `Idtipro_m` (`Idtipro_m`),
  ADD KEY `Nit` (`Nit`),
  ADD KEY `Idti_sol` (`Idti_sol`);

--
-- Indices de la tabla `est_soli`
--
ALTER TABLE `est_soli`
  ADD PRIMARY KEY (`Idest_soli`),
  ADD KEY `Idclient` (`Idclient`);

--
-- Indices de la tabla `est_solij`
--
ALTER TABLE `est_solij`
  ADD PRIMARY KEY (`Idest_solij`),
  ADD KEY `idclientj` (`idclientj`);

--
-- Indices de la tabla `fue_recu`
--
ALTER TABLE `fue_recu`
  ADD PRIMARY KEY (`Idfue_recu`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`Id_gen`);

--
-- Indices de la tabla `reg_soli`
--
ALTER TABLE `reg_soli`
  ADD PRIMARY KEY (`Id_reg`),
  ADD KEY `No_ide` (`No_ide`);

--
-- Indices de la tabla `reg_solij`
--
ALTER TABLE `reg_solij`
  ADD PRIMARY KEY (`Id_regj`),
  ADD KEY `Nit` (`Nit`);

--
-- Indices de la tabla `reg_usu`
--
ALTER TABLE `reg_usu`
  ADD PRIMARY KEY (`Id_usu`),
  ADD KEY `Idti_rol` (`Idti_rol`);

--
-- Indices de la tabla `repr_le`
--
ALTER TABLE `repr_le`
  ADD PRIMARY KEY (`idrepre`),
  ADD KEY `Idti_doc` (`Idti_doc`),
  ADD KEY `No_doc` (`No_doc`);

--
-- Indices de la tabla `solicitante`
--
ALTER TABLE `solicitante`
  ADD PRIMARY KEY (`idsolicit`),
  ADD KEY `Idti_soli` (`Idti_soli`),
  ADD KEY `No_solicit` (`No_solicit`);

--
-- Indices de la tabla `tien_re`
--
ALTER TABLE `tien_re`
  ADD PRIMARY KEY (`Idtien_re`);

--
-- Indices de la tabla `tiest_civ`
--
ALTER TABLE `tiest_civ`
  ADD PRIMARY KEY (`Idest_ci`);

--
-- Indices de la tabla `tiocu_ofi`
--
ALTER TABLE `tiocu_ofi`
  ADD PRIMARY KEY (`Idocu_ofi`);

--
-- Indices de la tabla `tiop_mo`
--
ALTER TABLE `tiop_mo`
  ADD PRIMARY KEY (`Idtiop_mo`);

--
-- Indices de la tabla `tipro_bie`
--
ALTER TABLE `tipro_bie`
  ADD PRIMARY KEY (`Idtripro_bie`);

--
-- Indices de la tabla `tipro_mo`
--
ALTER TABLE `tipro_mo`
  ADD PRIMARY KEY (`Idtipro_mo`);

--
-- Indices de la tabla `tip_cue`
--
ALTER TABLE `tip_cue`
  ADD PRIMARY KEY (`Idti_cue`);

--
-- Indices de la tabla `tip_pro`
--
ALTER TABLE `tip_pro`
  ADD PRIMARY KEY (`Idti_pro`);

--
-- Indices de la tabla `tip_rol`
--
ALTER TABLE `tip_rol`
  ADD PRIMARY KEY (`Idti_rol`);

--
-- Indices de la tabla `tireg_iv`
--
ALTER TABLE `tireg_iv`
  ADD PRIMARY KEY (`Idtireg_iv`);

--
-- Indices de la tabla `ti_contr`
--
ALTER TABLE `ti_contr`
  ADD PRIMARY KEY (`Idti_contr`);

--
-- Indices de la tabla `ti_desc`
--
ALTER TABLE `ti_desc`
  ADD PRIMARY KEY (`Idti_desc`);

--
-- Indices de la tabla `ti_doc`
--
ALTER TABLE `ti_doc`
  ADD PRIMARY KEY (`Idti_doc`);

--
-- Indices de la tabla `ti_ent`
--
ALTER TABLE `ti_ent`
  ADD PRIMARY KEY (`Idti_ent`);

--
-- Indices de la tabla `ti_est`
--
ALTER TABLE `ti_est`
  ADD PRIMARY KEY (`Idti_est`);

--
-- Indices de la tabla `ti_nac`
--
ALTER TABLE `ti_nac`
  ADD PRIMARY KEY (`Id_nac`);

--
-- Indices de la tabla `ti_nat`
--
ALTER TABLE `ti_nat`
  ADD PRIMARY KEY (`Idti_nat`);

--
-- Indices de la tabla `ti_soc`
--
ALTER TABLE `ti_soc`
  ADD PRIMARY KEY (`Idti_soc`);

--
-- Indices de la tabla `ti_sol`
--
ALTER TABLE `ti_sol`
  ADD PRIMARY KEY (`Idti_sol`);

--
-- Indices de la tabla `ti_soli`
--
ALTER TABLE `ti_soli`
  ADD PRIMARY KEY (`Idti_soli`);

--
-- Indices de la tabla `ti_solicit`
--
ALTER TABLE `ti_solicit`
  ADD PRIMARY KEY (`Idti_solicit`);

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`idcond`),
  ADD KEY `Cod_vend` (`Cod_vend`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `act_cli`
--
ALTER TABLE `act_cli`
  MODIFY `Idact_cli` int NOT NULL AUTO_INCREMENT COMMENT 'Identificacion de actividad de cliente', AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT de la tabla `act_val`
--
ALTER TABLE `act_val`
  MODIFY `Id_act_val` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `client_co`
--
ALTER TABLE `client_co`
  MODIFY `Id_client` int NOT NULL AUTO_INCREMENT COMMENT 'Identificacion aleatorio de cada cliente', AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `cont_ent`
--
ALTER TABLE `cont_ent`
  MODIFY `idcont_ent` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `entidad`
--
ALTER TABLE `entidad`
  MODIFY `Id_ent` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `est_soli`
--
ALTER TABLE `est_soli`
  MODIFY `Idest_soli` int NOT NULL AUTO_INCREMENT COMMENT 'Identificacion de estado de la solicitud', AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `est_solij`
--
ALTER TABLE `est_solij`
  MODIFY `Idest_solij` int NOT NULL AUTO_INCREMENT COMMENT 'Identificacion de estado de la solicitud de persona juridica', AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `reg_soli`
--
ALTER TABLE `reg_soli`
  MODIFY `Id_reg` int NOT NULL AUTO_INCREMENT COMMENT 'Identificacion de los registros de las solicitudes', AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `reg_solij`
--
ALTER TABLE `reg_solij`
  MODIFY `Id_regj` int NOT NULL AUTO_INCREMENT COMMENT 'Identificacion de los registros de las solicitudes', AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `reg_usu`
--
ALTER TABLE `reg_usu`
  MODIFY `Id_usu` int NOT NULL AUTO_INCREMENT COMMENT 'Identificacion de usuario', AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de la tabla `repr_le`
--
ALTER TABLE `repr_le`
  MODIFY `idrepre` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `solicitante`
--
ALTER TABLE `solicitante`
  MODIFY `idsolicit` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  MODIFY `idcond` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `act_cli`
--
ALTER TABLE `act_cli`
  ADD CONSTRAINT `act_cli_ibfk_2` FOREIGN KEY (`No_cuec`) REFERENCES `cuenta_c` (`No_cuenta`) ON UPDATE CASCADE,
  ADD CONSTRAINT `act_cli_ibfk_3` FOREIGN KEY (`No_cuej`) REFERENCES `cuenta_j` (`No_cuenta`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `client_co`
--
ALTER TABLE `client_co`
  ADD CONSTRAINT `client_co_ibfk_12` FOREIGN KEY (`Idtien_re`) REFERENCES `tien_re` (`Idtien_re`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_13` FOREIGN KEY (`No_solicit`) REFERENCES `solicitante` (`No_solicit`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_14` FOREIGN KEY (`Cod_vend`) REFERENCES `vendedor` (`Cod_vend`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_15` FOREIGN KEY (`Idocu_ofii`) REFERENCES `tiocu_ofi` (`Idocu_ofi`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_16` FOREIGN KEY (`Idtireg_iva`) REFERENCES `tireg_iv` (`Idtireg_iv`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_17` FOREIGN KEY (`Idtiop_m`) REFERENCES `tiop_mo` (`Idtiop_mo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_18` FOREIGN KEY (`Idtipro_m`) REFERENCES `tipro_mo` (`Idtipro_mo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_19` FOREIGN KEY (`Idti_sol`) REFERENCES `ti_sol` (`Idti_sol`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_2` FOREIGN KEY (`Idti_solicit`) REFERENCES `ti_solicit` (`Idti_solicit`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_3` FOREIGN KEY (`Idti_doc`) REFERENCES `ti_doc` (`Idti_doc`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_4` FOREIGN KEY (`Id_gen`) REFERENCES `genero` (`Id_gen`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_5` FOREIGN KEY (`Idest_ci`) REFERENCES `tiest_civ` (`Idest_ci`) ON UPDATE CASCADE,
  ADD CONSTRAINT `client_co_ibfk_6` FOREIGN KEY (`Id_nac`) REFERENCES `ti_nac` (`Id_nac`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `cont_ent`
--
ALTER TABLE `cont_ent`
  ADD CONSTRAINT `cont_ent_ibfk_1` FOREIGN KEY (`Idti_doc`) REFERENCES `ti_doc` (`Idti_doc`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `cuenta_c`
--
ALTER TABLE `cuenta_c`
  ADD CONSTRAINT `cuenta_c_ibfk_1` FOREIGN KEY (`No_ide`) REFERENCES `client_co` (`No_ide`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cuenta_c_ibfk_2` FOREIGN KEY (`Idti_cue`) REFERENCES `tip_cue` (`Idti_cue`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `cuenta_j`
--
ALTER TABLE `cuenta_j`
  ADD CONSTRAINT `cuenta_j_ibfk_1` FOREIGN KEY (`Nit`) REFERENCES `entidad` (`Nit`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cuenta_j_ibfk_2` FOREIGN KEY (`Idti_cue`) REFERENCES `tip_cue` (`Idti_cue`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `entidad`
--
ALTER TABLE `entidad`
  ADD CONSTRAINT `entidad_ibfk_11` FOREIGN KEY (`Idtien_re`) REFERENCES `tien_re` (`Idtien_re`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_12` FOREIGN KEY (`No_solicit`) REFERENCES `solicitante` (`No_solicit`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_13` FOREIGN KEY (`Cod_vend`) REFERENCES `vendedor` (`Cod_vend`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_14` FOREIGN KEY (`Idti_na`) REFERENCES `ti_nat` (`Idti_nat`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_15` FOREIGN KEY (`Idti_soci`) REFERENCES `ti_soc` (`Idti_soc`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_16` FOREIGN KEY (`Idti_es`) REFERENCES `ti_est` (`Idti_est`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_17` FOREIGN KEY (`Idti_des`) REFERENCES `ti_desc` (`Idti_desc`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_18` FOREIGN KEY (`Idti_en`) REFERENCES `ti_ent` (`Idti_ent`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_19` FOREIGN KEY (`Idti_cont`) REFERENCES `ti_contr` (`Idti_contr`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_20` FOREIGN KEY (`Idcla_cont`) REFERENCES `cla_contr` (`Idcla_contr`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_21` FOREIGN KEY (`Idfue_rec`) REFERENCES `fue_recu` (`Idfue_recu`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_22` FOREIGN KEY (`Idtripro_bi`) REFERENCES `tipro_bie` (`Idtripro_bie`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_23` FOREIGN KEY (`Idtiop_m`) REFERENCES `tiop_mo` (`Idtiop_mo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_24` FOREIGN KEY (`Idtipro_m`) REFERENCES `tipro_mo` (`Idtipro_mo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_25` FOREIGN KEY (`Idti_sol`) REFERENCES `ti_sol` (`Idti_sol`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_3` FOREIGN KEY (`No_doc`) REFERENCES `repr_le` (`No_doc`) ON UPDATE CASCADE,
  ADD CONSTRAINT `entidad_ibfk_5` FOREIGN KEY (`No_docu`) REFERENCES `cont_ent` (`No_docu`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `est_soli`
--
ALTER TABLE `est_soli`
  ADD CONSTRAINT `est_soli_ibfk_1` FOREIGN KEY (`Idclient`) REFERENCES `client_co` (`No_ide`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `est_solij`
--
ALTER TABLE `est_solij`
  ADD CONSTRAINT `est_solij_ibfk_1` FOREIGN KEY (`idclientj`) REFERENCES `entidad` (`Nit`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reg_soli`
--
ALTER TABLE `reg_soli`
  ADD CONSTRAINT `reg_soli_ibfk_1` FOREIGN KEY (`No_ide`) REFERENCES `client_co` (`No_ide`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reg_solij`
--
ALTER TABLE `reg_solij`
  ADD CONSTRAINT `reg_solij_ibfk_1` FOREIGN KEY (`Nit`) REFERENCES `entidad` (`Nit`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reg_usu`
--
ALTER TABLE `reg_usu`
  ADD CONSTRAINT `reg_usu_ibfk_1` FOREIGN KEY (`Idti_rol`) REFERENCES `tip_rol` (`Idti_rol`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `repr_le`
--
ALTER TABLE `repr_le`
  ADD CONSTRAINT `repr_le_ibfk_1` FOREIGN KEY (`Idti_doc`) REFERENCES `ti_doc` (`Idti_doc`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `solicitante`
--
ALTER TABLE `solicitante`
  ADD CONSTRAINT `solicitante_ibfk_1` FOREIGN KEY (`Idti_soli`) REFERENCES `ti_soli` (`Idti_soli`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
