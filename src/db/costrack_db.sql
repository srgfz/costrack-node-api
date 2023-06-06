-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-06-2023 a las 16:02:17
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `costrack_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `precio_base` float(11,2) NOT NULL,
  `precio_coste` float(11,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `descripcion` mediumtext DEFAULT NULL,
  `proveedorId` int(11) DEFAULT NULL,
  `empresaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `nombre`, `precio_base`, `precio_coste`, `stock`, `descripcion`, `proveedorId`, `empresaId`) VALUES
(1, 'Martillo', 9.99, 6.50, 50, 'Martillo de acero resistente', 1, 1),
(2, 'Destornillador', 4.50, 2.80, 100, 'Destornillador de cabeza plana', 2, 1),
(3, 'Sierra de mano', 12.75, 8.20, 30, 'Sierra de mano para cortes precisos', 3, 1),
(4, 'Taladro inalámbrico', 89.99, 58.75, 20, 'Taladro inalámbrico de alta potencia', 4, 1),
(5, 'Llave ajustable', 6.20, 3.90, 80, 'Llave ajustable de tamaño variable', 5, 1),
(6, 'Pistola de silicona', 14.50, 9.60, 40, 'Pistola de silicona para trabajos de sellado', 6, 1),
(7, 'Cinta métrica', 8.75, 5.50, 60, 'Cinta métrica de 3 metros', 7, 1),
(8, 'Nivel de burbuja', 7.99, 4.90, 70, 'Nivel de burbuja para trabajos de nivelación', 8, 1),
(9, 'Broca para madera', 2.50, 1.60, 150, 'Broca de acero para perforar madera', 9, 1),
(10, 'Alicate de corte', 10.25, 6.80, 45, 'Alicate de corte de alta precisión', 10, 1),
(11, 'Cincel', 6.80, 4.30, 55, 'Cincel para trabajos de carpintería', 1, 1),
(12, 'Tornillos', 1.20, 0.80, 500, 'Juego de tornillos de diferentes tamaños', 2, 1),
(13, 'Lijadora eléctrica', 42.99, 27.80, 15, 'Lijadora eléctrica de gran potencia', 3, 1),
(14, 'Llave de tubo', 5.90, 3.60, 65, 'Llave de tubo para ajustes precisos', 4, 1),
(15, 'Pintura en spray', 8.50, 5.40, 70, 'Spray de pintura de secado rápido', 5, 1),
(16, 'Brocha', 3.25, 2.10, 90, 'Brocha de cerdas naturales para pintar', 6, 1),
(17, 'Destornillador de estrella', 4.50, 2.80, 100, 'Destornillador de estrella magnético', 7, 1),
(18, 'Llave inglesa', 7.80, 4.90, 75, 'Llave inglesa de tamaño ajustable', 8, 1),
(19, 'Broca para metal', 2.60, 1.70, 130, 'Broca de acero rápido para perforar metal', 9, 1),
(20, 'Cinta adhesiva', 1.99, 1.20, 200, 'Rollo de cinta adhesiva de alta resistencia', 10, 1),
(21, 'Grapadora manual', 9.99, 6.50, 40, 'Grapadora manual para trabajos de carpintería', 1, 1),
(22, 'Tacos para pared', 1.50, 0.90, 300, 'Juego de tacos para fijación en pared', 2, 1),
(23, 'Sierra de calar', 34.99, 22.50, 25, 'Sierra de calar con sistema de cambio rápido de hojas', 3, 1),
(24, 'Llave de impacto', 129.99, 85.75, 10, 'Llave de impacto de alta potencia', 4, 1),
(25, 'Alicates universales', 8.20, 5.30, 60, 'Alicates universales para múltiples usos', 5, 1),
(26, 'Pegamento para madera', 5.90, 3.80, 70, 'Pegamento resistente para unir piezas de madera', 6, 1),
(27, 'Metro plegable', 6.75, 4.40, 80, 'Metro plegable de 2 metros', 7, 1),
(28, 'Escuadra de carpintero', 7.99, 4.90, 70, 'Escuadra de carpintero de alta precisión', 8, 1),
(29, 'Broca para hormigón', 3.10, 2.00, 140, 'Broca de metal duro para perforar hormigón', 9, 1),
(30, 'Cinta de enmascarar', 1.99, 1.20, 200, 'Rollo de cinta de enmascarar para trabajos de pintura', 10, 1),
(31, 'Lima', 3.80, 2.40, 90, 'Lima de acero para dar forma y pulir superficies', 1, 1),
(32, 'Tornillos autorroscantes', 1.30, 0.90, 500, 'Juego de tornillos autorroscantes de diferentes tamaños', 2, 1),
(33, 'Amoladora angular', 69.99, 45.80, 18, 'Amoladora angular de alto rendimiento', 3, 1),
(34, 'Alicates de punta larga', 7.50, 4.80, 65, 'Alicates de punta larga para trabajos de precisión', 4, 1),
(35, 'Spray antioxidante', 9.50, 6.20, 60, 'Spray antioxidante para proteger metales', 5, 1),
(36, 'Pincel', 2.80, 1.80, 100, 'Pincel de cerdas sintéticas para pintar', 6, 1),
(37, 'Destornillador de precisión', 4.80, 3.00, 95, 'Destornillador de precisión con múltiples puntas', 7, 1),
(38, 'Llave de vaso', 6.90, 4.40, 75, 'Llave de vaso para tuercas y tornillos', 8, 1),
(39, 'Broca escalonada', 5.20, 3.30, 110, 'Broca escalonada para perforaciones de diferentes tamaños', 9, 1),
(40, 'Cinta de doble cara', 2.10, 1.30, 180, 'Rollo de cinta de doble cara de alta adherencia', 10, 1),
(41, 'Nivel de carpintero', 9.75, 6.20, 35, 'Nivel de carpintero de 40 cm', 1, 1),
(42, 'Anclajes para fijación', 1.60, 1.00, 250, 'Juego de anclajes para fijación en diferentes superficies', 2, 1),
(43, 'Ingletadora', 149.99, 98.75, 12, 'Ingletadora con corte en ángulo ajustable', 3, 1),
(44, 'Taladro de percusión', 79.99, 52.50, 22, 'Taladro de percusión con función de impacto', 4, 1),
(45, 'Tenazas', 6.40, 4.10, 70, 'Tenazas para sujetar y doblar materiales', 5, 1),
(46, 'Adhesivo instantáneo', 4.50, 2.80, 75, 'Adhesivo instantáneo de secado rápido', 6, 1),
(47, 'Flexómetro', 5.50, 3.40, 80, 'Flexómetro de 5 metros', 7, 1),
(48, 'Sargento de carpintero', 12.99, 8.50, 30, 'Sargento de carpintero para sujetar piezas', 8, 1),
(49, 'Broca para azulejos', 3.20, 2.10, 120, 'Broca de metal duro para perforar azulejos', 9, 1),
(50, 'Adhesivo de montaje', 3.90, 2.50, 100, 'Adhesivo de montaje para trabajos de bricolaje', 10, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `nombre_contacto` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `empresaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `nombre_contacto`, `email`, `telefono`, `direccion`, `createdAt`, `updatedAt`, `empresaId`) VALUES
(1, 'Muebles López', 'María López', 'maria.lopez@gmail.com', '+34 612345678', 'Avenida Libertad, 10, 28002 Madrid', '2023-06-06 11:44:16', '2023-06-06 11:44:16', 2),
(2, 'Carpintería Roca', 'Pedro Roca', 'pedro.roca@gmail.com', '+34 678912345', 'Calle Mayor, 25, 41001 Sevilla', '2023-06-06 11:44:21', '2023-06-06 11:44:21', 3),
(3, 'Muebles Martínez', 'Laura Martínez', 'laura.martinez@gmail.com', '+34 645678912', 'Calle Gran Vía, 40, 08001 Barcelona', '2023-06-06 11:44:24', '2023-06-06 11:44:24', 4),
(4, 'Carpintería Jiménez', 'Javier Jiménez', 'javier.jimenez@gmail.com', '+34 667891234', 'Calle San Miguel, 8, 29002 Málaga', '2023-06-06 11:44:27', '2023-06-06 11:44:27', 5),
(5, 'Muebles Sánchez', 'Ana Sánchez', 'ana.sanchez@gmail.com', '+34 678912345', 'Calle Principal, 12, 48001 Bilbao', '2023-06-06 11:44:31', '2023-06-06 11:44:31', 6),
(6, 'Carpintería Gómez', 'David Gómez', 'david.gomez@gmail.com', '+34 645678912', 'Avenida de la Paz, 5, 29001 Málaga', '2023-06-06 11:44:34', '2023-06-06 11:44:34', 7),
(7, 'Muebles Rodríguez', 'Sara Rodríguez', 'sara.rodriguez@gmail.com', '+34 667891234', 'Calle Mayor, 50, 46002 Valencia', '2023-06-06 11:44:39', '2023-06-06 11:44:39', 8),
(8, 'Carpintería Molina', 'Luisa Molina', 'luisa.molina@gmail.com', '+34 678912345', 'Calle Príncipe, 15, 28080 Madrid', '2023-06-06 11:44:51', '2023-06-06 11:44:51', 9),
(9, 'Muebles Gutiérrez', 'Jorge Gutiérrez', 'jorge.gutierrez@gmail.com', '+34 645678912', 'Avenida Libertad, 20, 46003 Valencia', '2023-06-06 11:44:57', '2023-06-06 11:44:57', 10),
(10, 'Arquitectura y Diseño S.L.', 'María González', 'maria.gonzalez@gmail.com', '+34 612345678', 'Calle Mayor, 10, 28002 Madrid', '2023-06-06 11:46:16', '2023-06-06 11:46:16', 1),
(11, 'Marketing Digital Solutions', 'Roberto Martínez', 'roberto.martinez@gmail.com', '+34 678912345', 'Avenida Libertad, 25, 08001 Barcelona', '2023-06-06 11:46:20', '2023-06-06 11:46:20', 2),
(12, 'Construcciones y Reformas Gómez', 'Juan Gómez', 'juan.gomez@gmail.com', '+34 645678912', 'Calle Principal, 20, 41001 Sevilla', '2023-06-06 11:46:24', '2023-06-06 11:46:24', 3),
(13, 'Ingeniería y Servicios Técnicos', 'Laura Rodríguez', 'laura.rodriguez@gmail.com', '+34 667891234', 'Calle San Miguel, 15, 29001 Málaga', '2023-06-06 11:46:27', '2023-06-06 11:46:27', 4),
(14, 'Comunicaciones y Telecomunicaciones', 'Javier Sánchez', 'javier.sanchez@gmail.com', '+34 678912345', 'Calle Principal, 12, 46002 Valencia', '2023-06-06 11:46:31', '2023-06-06 11:46:31', 5),
(15, 'Alimentación y Distribución García', 'María García', 'maria.garcia@gmail.com', '+34 612345678', 'Calle Mayor, 50, 28080 Madrid', '2023-06-06 11:46:35', '2023-06-06 11:46:35', 6),
(16, 'Publicidad y Marketing Digital', 'Carlos Fernández', 'carlos.fernandez@gmail.com', '+34 678912345', 'Avenida Libertad, 20, 08002 Barcelona', '2023-06-06 11:46:40', '2023-06-06 11:46:40', 7),
(17, 'Asesoría Legal y Fiscal', 'Ana López', 'ana.lopez@gmail.com', '+34 645678912', 'Calle Principal, 30, 41002 Sevilla', '2023-06-06 11:46:44', '2023-06-06 11:46:44', 8),
(18, 'Arquitectos y Diseñadores', 'David Rodríguez', 'david.rodriguez@gmail.com', '+34 667891234', 'Calle San Miguel, 10, 29002 Málaga', '2023-06-06 11:46:55', '2023-06-06 11:46:55', 9),
(19, 'Logística y Transporte S.A.', 'Laura Sánchez', 'laura.sanchez@gmail.com', '+34 678912345', 'Calle Principal, 8, 46001 Valencia', '2023-06-06 11:47:02', '2023-06-06 11:47:02', 10),
(20, 'Consultoría y Soluciones Empresariales', 'Manuel Gómez', 'manuel.gomez@gmail.com', '+34 612345678', 'Calle Mayor, 15, 28001 Madrid', '2023-06-06 11:47:06', '2023-06-06 11:47:06', 1),
(21, 'Ingenieros y Servicios Técnicos', 'Patricia Martínez', 'patricia.martinez@gmail.com', '+34 678912345', 'Avenida Libertad, 30, 08003 Barcelona', '2023-06-06 11:47:13', '2023-06-06 11:47:13', 2),
(22, 'Desarrollo de Software y Tecnología', 'Carlos González', 'carlos.gonzalez@gmail.com', '+34 645678912', 'Calle Principal, 25, 41003 Sevilla', '2023-06-06 11:47:19', '2023-06-06 11:47:19', 3),
(23, 'Comunicaciones y Redes', 'Laura Pérez', 'laura.perez@gmail.com', '+34 667891234', 'Calle San Miguel, 20, 29003 Málaga', '2023-06-06 11:47:22', '2023-06-06 11:47:22', 4),
(24, 'Marketing y Publicidad Digital', 'Javier Fernández', 'javier.fernandez@gmail.com', '+34 678912345', 'Calle Principal, 18, 46003 Valencia', '2023-06-06 11:47:26', '2023-06-06 11:47:26', 5),
(25, 'Alimentación y Bebidas Martínez', 'María Martínez', 'maria.martinez@gmail.com', '+34 612345678', 'Calle Mayor, 5, 28080 Madrid', '2023-06-06 11:47:34', '2023-06-06 11:47:34', 6),
(26, 'Diseño Gráfico y Publicidad', 'Carlos García', 'carlos.garcia@gmail.com', '+34 678912345', 'Avenida Libertad, 15, 08004 Barcelona', '2023-06-06 11:48:02', '2023-06-06 11:48:02', 7),
(27, 'Carpintería Industrias del Mueble', 'Roberto Gutiérrez', 'roberto.gutierrez@gmail.com', '+34 605984698', 'Calle Real, 1, 46001 Valencia', '2023-06-06 11:53:37', '2023-06-06 11:53:37', 1),
(28, 'Muebles Innovadores del Sur', 'Luisa Molina', 'luisa.molina@example.com', '+34 678912345', 'Calle Príncipe, 15, 28080 Madrid', '2023-06-06 11:59:36', '2023-06-06 11:59:36', 5),
(29, 'Carpintería Arte en Madera', 'Jorge Gutiérrez', 'jorge.gutierrez@example.com', '+34 645678912', 'Avenida Libertad, 20, 46003 Valencia', '2023-06-06 11:59:58', '2023-06-06 11:59:58', 9),
(30, 'Mobiliario Diseño y Confort', 'Carmen Pérez', 'carmen.perez@example.com', '+34 654321098', 'Calle Mayor, 5, 18002 Granada', '2023-06-06 12:00:01', '2023-06-06 12:00:01', 6),
(31, 'Carpintería Elegancia en Maderas', 'Miguel Castro', 'miguel.castro@example.com', '+34 612345678', 'Avenida del Sol, 8, 41003 Sevilla', '2023-06-06 12:00:04', '2023-06-06 12:00:04', 2),
(32, 'Muebles Modernos del Este', 'Patricia Martín', 'patricia.martin@example.com', '+34 623456789', 'Calle Gran Vía, 30, 08002 Barcelona', '2023-06-06 12:00:11', '2023-06-06 12:00:11', 1),
(33, 'Carpintería Tradición y Estilo', 'Manuel Hernández', 'manuel.hernandez@example.com', '+34 645678912', 'Calle San Andrés, 10, 29003 Málaga', '2023-06-06 12:00:14', '2023-06-06 12:00:14', 4),
(34, 'Muebles de Calidad Garantizada', 'Laura Sánchez', 'laura.sanchez@example.com', '+34 667891234', 'Calle Principal, 15, 48002 Bilbao', '2023-06-06 12:00:18', '2023-06-06 12:00:18', 10),
(35, 'Carpintería Creativa en Madera', 'Pedro Gómez', 'pedro.gomez@example.com', '+34 678912345', 'Avenida de la Libertad, 3, 29004 Málaga', '2023-06-06 12:00:32', '2023-06-06 12:00:32', 3),
(36, 'Muebles y Decoración Exquisita', 'María Torres', 'maria.torres@example.com', '+34 612345678', 'Calle Mayor, 10, 28001 Madrid', '2023-06-06 12:00:36', '2023-06-06 12:00:36', 7),
(37, 'Carpintería Estilo y Elegancia', 'Ricardo Méndez', 'ricardo.mendez@example.com', '+34 623456789', 'Calle San Pedro, 20, 41004 Sevilla', '2023-06-06 12:00:40', '2023-06-06 12:00:40', 8),
(38, 'Muebles Innovadores del Norte', 'Ana López', 'ana.lopez@example.com', '+34 634567890', 'Avenida del Mar, 5, 46002 Valencia', '2023-06-06 12:00:43', '2023-06-06 12:00:43', 5),
(39, 'Carpintería Moderna y Vanguardista', 'David García', 'david.garcia@example.com', '+34 645678912', 'Calle Alameda, 2, 18001 Granada', '2023-06-06 12:00:47', '2023-06-06 12:00:47', 1),
(40, 'Muebles de Diseño Único', 'Carolina Rodríguez', 'carolina.rodriguez@example.com', '+34 656789012', 'Calle Paseo, 10, 48001 Bilbao', '2023-06-06 12:00:52', '2023-06-06 12:00:52', 3),
(41, 'Carpintería Elegante y Funcional', 'Sergio Ruiz', 'sergio.ruiz@example.com', '+34 678901234', 'Avenida Principal, 25, 29002 Málaga', '2023-06-06 12:00:55', '2023-06-06 12:00:55', 7),
(42, 'Carpintería Vanguardia en Madera', 'Óscar Herrera', 'oscar.herrera@example.com', '+34 623456789', 'Avenida de la Paz, 8, 28002 Madrid', '2023-06-06 12:01:03', '2023-06-06 12:01:03', 9),
(43, 'Muebles y Decoración Innovadora', 'Silvia Castro', 'silvia.castro@example.com', '+34 634567890', 'Calle Gran Vía, 10, 46001 Valencia', '2023-06-06 12:01:10', '2023-06-06 12:01:10', 6),
(44, 'Carpintería Tradicional Española', 'Antonio López', 'antonio.lopez@example.com', '+34 645678912', 'Calle San Juan, 5, 18003 Granada', '2023-06-06 12:01:16', '2023-06-06 12:01:16', 4),
(45, 'Muebles y Diseño de Interiores', 'Marta Torres', 'marta.torres@example.com', '+34 656789012', 'Avenida Principal, 20, 48003 Bilbao', '2023-06-06 12:01:21', '2023-06-06 12:01:21', 10),
(46, 'Carpintería Ecológica y Sostenible', 'Javier Ruiz', 'javier.ruiz@example.com', '+34 678901234', 'Calle Alameda, 5, 29001 Málaga', '2023-06-06 12:02:21', '2023-06-06 12:02:21', 8),
(47, 'Muebles Exclusivos del Oeste', 'Sara Vargas', 'sara.vargas@example.com', '+34 645678901', 'Calle Principal, 10, 41001 Sevilla', '2023-06-06 12:02:34', '2023-06-06 12:02:34', 5),
(48, 'Carpintería Funcional y Práctica', 'Roberto Herrera', 'roberto.herrera@example.com', '+34 623456789', 'Avenida de la Paz, 15, 28003 Madrid', '2023-06-06 12:02:37', '2023-06-06 12:02:37', 1),
(49, 'Muebles y Decoración a Medida', 'Isabel Castro', 'isabel.castro@example.com', '+34 634567890', 'Calle Gran Vía, 15, 46002 Valencia', '2023-06-06 12:02:40', '2023-06-06 12:02:40', 3),
(50, 'Carpintería Innovación en Madera', 'Francisco López', 'francisco.lopez@example.com', '+34 645678912', 'Calle San Juan, 10, 18004 Granada', '2023-06-06 12:02:43', '2023-06-06 12:02:43', 7),
(51, 'Muebles Clásicos y Elegantes', 'Laura Torres', 'laura.torres@example.com', '+34 656789012', 'Avenida Principal, 25, 48004 Bilbao', '2023-06-06 12:02:47', '2023-06-06 12:02:47', 2),
(52, 'Carpintería Diseño y Estética', 'Manuel Ruiz', 'manuel.ruiz@example.com', '+34 678901234', 'Calle Alameda, 8, 29004 Málaga', '2023-06-06 12:02:56', '2023-06-06 12:02:56', 6),
(53, 'Carpintería Miguel Fernández Martín', 'Miguel Fernández Martín', 'miguel.def@example.com', '+34 698457269', 'Calle Juan Suárez Carvajal, 28, 29004 Málaga', '2023-06-06 12:02:56', '2023-06-06 12:02:56', 1),
(54, 'Kapitel Decor', 'Sara Milan', 'milanz@example.com', '+34 694365046', 'Calle Lopez, 8, 45600 Valencia', '2023-06-06 12:02:56', '2023-06-06 12:02:56', 1),
(55, 'Carpintería Madetec', 'Rodolfo García', 'rodol@example.com', '+34 65973611', 'Calle Emilio Niveiro Romo, 31, 56900 Sevilla', '2023-06-06 12:02:56', '2023-06-06 12:02:56', 1),
(56, 'Artepuerta', 'Sebastián Ruiz', 'seba@example.com', '+34 694459863', 'Calle Esp, 8, 29004 Málaga', '2023-06-06 12:02:56', '2023-06-06 12:02:56', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comercials`
--

CREATE TABLE `comercials` (
  `id` int(11) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(150) NOT NULL,
  `empresaId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comercials`
--

INSERT INTO `comercials` (`id`, `dni`, `nombre`, `apellidos`, `empresaId`, `userId`) VALUES
(1, '04897468P', 'Sergio', 'Fernández Nevado', 1, 3),
(2, '04897428P', 'Pedro', 'Piqueras Tena', 1, 4),
(3, '94687159P', 'Álvaro', 'Olmo Carrillo', 2, 5),
(4, '61398762H', 'María', 'Sánchez', 2, 6),
(5, '78912345R', 'Juan', 'García', 5, 15),
(6, '12345678X', 'Laura', 'López', 10, 16),
(7, '23876195A', 'Ana', 'Fernández', 6, 18),
(8, '98765432B', 'Pedro', 'Gómez', 9, 19),
(9, '76543219C', 'Lucía', 'Rodríguez', 4, 20),
(10, '45192763D', 'Daniel', 'López', 8, 21),
(11, '18374659E', 'Laura', 'García', 1, 22),
(12, '90817263F', 'Carlos', 'Sánchez', 7, 23),
(13, '64738291G', 'María', 'González', 3, 24),
(14, '92837465H', 'Javier', 'Martín', 2, 25),
(15, '37465928I', 'Lucía', 'López', 5, 27),
(16, '10293847J', 'Juan', 'Rodríguez', 10, 28),
(17, '45678901Z', 'Ana', 'Pérez', 1, 30),
(18, '65432198S', 'Pedro', 'González', 7, 31),
(19, '54321098Q', 'Lucía', 'Fernández', 6, 32),
(20, '98765432T', 'Daniel', 'Martínez', 4, 33),
(21, '78901234U', 'Sara', 'López', 9, 34),
(22, '12345678V', 'Pablo', 'Sanz', 3, 35),
(23, '45678901W', 'Luisa', 'Hernández', 8, 36),
(24, '65432198X', 'Manuel', 'Fernández', 5, 37),
(25, '54321098Y', 'Laura', 'Rodríguez', 10, 38),
(26, '98765432Z', 'David', 'Molina', 2, 39);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `id` int(11) NOT NULL,
  `cif` varchar(9) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`id`, `cif`, `nombre`, `direccion`, `userId`) VALUES
(1, 'A12345468', 'Empresa 1', 'Dirección 1', 1),
(2, 'A12345462', 'Empresa 2', 'Dirección 2', 2),
(3, 'A12345678', 'Electrodomésticos Pérez S.L.', 'Calle Mayor, 12, 28001 Madrid', 7),
(4, 'B87654321', 'Moda y Accesorios Gómez S.A.', 'Avenida Diagonal, 100, 08028 Barcelona', 8),
(5, 'C13579246', 'Automóviles Martínez S.L.', 'Calle Gran Vía, 40, 41001 Sevilla', 9),
(6, 'D98765432', 'Inmobiliaria Rodríguez S.L.', 'Calle Real, 1, 46001 Valencia', 10),
(7, 'E54321098', 'Restaurante López', 'Plaza Mayor, 8, 48001 Bilbao', 11),
(8, 'F24681357', 'Moda y Complementos García', 'Calle del Carmen, 15, 29001 Málaga', 12),
(9, 'G97531824', 'Tecnología Martínez', 'Avenida de la Libertad, 20, 15001 A Coruña', 13),
(10, 'H75395128', 'Consultoría Fernández', 'Calle Alcalá, 50, 28009 Madrid', 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gastos`
--

CREATE TABLE `gastos` (
  `id` int(11) NOT NULL,
  `nombre_emisor` varchar(150) NOT NULL,
  `cuantia` float(11,2) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `fecha_gasto` datetime NOT NULL,
  `observaciones` mediumtext DEFAULT NULL,
  `comercialId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `gastos`
--

INSERT INTO `gastos` (`id`, `nombre_emisor`, `cuantia`, `foto`, `categoria`, `fecha_gasto`, `observaciones`, `comercialId`) VALUES
(1, 'Hotel California', 150.50, 'foto', 'Alojamiento', '2023-05-28 09:30:00', 'Habitación individual', 1),
(2, 'Restaurante La Trattoria', 75.80, 'foto', 'Alimentación', '2023-05-20 13:15:00', NULL, 1),
(3, 'Gasolinera Shell', 50.25, 'foto', 'Transporte', '2023-05-15 16:45:00', NULL, 1),
(4, 'Supermercado Freshmart', 35.50, 'foto', 'Alimentación', '2023-05-10 11:00:00', NULL, 1),
(5, 'Tienda de electrónica TechWorld', 500.00, 'foto', 'Equipamiento', '2023-05-05 14:30:00', 'Compra de un nuevo teléfono', 1),
(6, 'Hotel Plaza', 200.00, 'foto', 'Alojamiento', '2023-04-30 08:00:00', 'Estancia de dos noches', 1),
(7, 'Restaurante El Pescador', 90.75, 'foto', 'Alimentación', '2023-04-25 19:45:00', NULL, 1),
(8, 'Gasolinera BP', 60.20, 'foto', 'Transporte', '2023-04-20 15:20:00', NULL, 1),
(9, 'Supermercado GreenGrocery', 42.30, 'foto', 'Alimentación', '2023-04-15 10:30:00', NULL, 1),
(10, 'Tienda de deportes ActiveLife', 300.00, 'foto', 'Equipamiento', '2023-04-10 13:00:00', 'Compra de equipo de gimnasio', 1),
(11, 'Hotel Oasis', 180.00, 'foto', 'Alojamiento', '2023-04-05 07:45:00', 'Estancia de una noche', 1),
(12, 'Restaurante La Brasserie', 85.50, 'foto', 'Alimentación', '2023-03-30 20:15:00', NULL, 1),
(13, 'Gasolinera Exxon', 55.75, 'foto', 'Transporte', '2023-03-25 14:10:00', NULL, 1),
(14, 'Supermercado MegaMart', 30.40, 'foto', 'Alimentación', '2023-03-20 11:30:00', NULL, 1),
(15, 'Tienda de ropa FashionStyle', 250.00, 'foto', 'Equipamiento', '2023-03-15 15:45:00', 'Compra de ropa de primavera', 1),
(16, 'Hotel Paradise', 220.00, 'foto', 'Alojamiento', '2023-03-10 09:15:00', 'Estancia de dos noches', 1),
(17, 'Restaurante Le Bistro', 95.25, 'foto', 'Alimentación', '2023-03-05 18:30:00', NULL, 1),
(18, 'Gasolinera Chevron', 57.90, 'foto', 'Transporte', '2023-03-01 12:40:00', NULL, 1),
(19, 'Supermercado QuickShop', 38.75, 'foto', 'Alimentación', '2023-02-24 10:00:00', NULL, 1),
(20, 'Tienda de electrónica GizmoTech', 400.00, 'foto', 'Equipamiento', '2023-02-20 13:45:00', 'Compra de una nueva computadora', 1),
(21, 'Hotel Riviera', 190.00, 'foto', 'Alojamiento', '2023-02-15 08:30:00', 'Estancia de una noche', 1),
(22, 'Restaurante El Gaucho', 80.50, 'foto', 'Alimentación', '2023-02-10 19:00:00', NULL, 1),
(23, 'Gasolinera Shell', 52.30, 'foto', 'Transporte', '2023-02-05 14:20:00', NULL, 1),
(24, 'Supermercado Freshmart', 36.80, 'foto', 'Alimentación', '2023-02-01 11:15:00', NULL, 1),
(25, 'Tienda de electrónica TechWorld', 550.00, 'foto', 'Equipamiento', '2023-01-25 15:00:00', 'Compra de una nueva televisión', 1),
(26, 'Hotel Plaza', 210.00, 'foto', 'Alojamiento', '2023-01-20 07:30:00', 'Estancia de dos noches', 1),
(27, 'Restaurante El Pescador', 88.75, 'foto', 'Alimentación', '2023-01-15 20:45:00', NULL, 1),
(28, 'Gasolinera BP', 63.40, 'foto', 'Transporte', '2023-01-10 15:10:00', NULL, 1),
(29, 'Supermercado GreenGrocery', 44.20, 'foto', 'Alimentación', '2023-01-05 10:20:00', NULL, 1),
(30, 'Tienda de deportes ActiveLife', 320.00, 'foto', 'Equipamiento', '2023-01-01 12:55:00', 'Compra de equipo de senderismo', 1),
(31, 'Hotel Oasis', 200.00, 'foto', 'Alojamiento', '2022-12-25 08:00:00', 'Estancia de una noche', 1),
(32, 'Restaurante La Brasserie', 90.50, 'foto', 'Alimentación', '2022-12-20 19:30:00', NULL, 1),
(33, 'Gasolinera Exxon', 60.75, 'foto', 'Transporte', '2022-12-15 14:25:00', NULL, 1),
(34, 'Supermercado MegaMart', 32.60, 'foto', 'Alimentación', '2022-12-10 11:40:00', NULL, 1),
(35, 'Tienda de ropa FashionStyle', 270.00, 'foto', 'Equipamiento', '2022-12-05 16:15:00', 'Compra de ropa de invierno', 1),
(36, 'Hotel Paradise', 230.00, 'foto', 'Alojamiento', '2022-12-01 09:45:00', 'Estancia de dos noches', 1),
(37, 'Restaurante Le Bistro', 97.25, 'foto', 'Alimentación', '2022-11-25 18:00:00', NULL, 1),
(38, 'Gasolinera Chevron', 59.90, 'foto', 'Transporte', '2022-11-20 12:20:00', NULL, 1),
(39, 'Supermercado QuickShop', 40.75, 'foto', 'Alimentación', '2022-11-15 09:50:00', NULL, 1),
(40, 'Tienda de electrónica GizmoTech', 450.00, 'foto', 'Equipamiento', '2022-11-10 13:35:00', 'Compra de un nuevo dispositivo móvil', 1),
(41, 'Hotel Riviera', 200.00, 'foto', 'Alojamiento', '2022-11-05 08:20:00', 'Estancia de una noche', 1),
(42, 'Restaurante El Gaucho', 85.50, 'foto', 'Alimentación', '2022-11-01 20:40:00', NULL, 1),
(43, 'Gasolinera Shell', 54.30, 'foto', 'Transporte', '2022-10-25 14:15:00', NULL, 1),
(44, 'Supermercado Freshmart', 39.60, 'foto', 'Alimentación', '2022-10-20 11:10:00', NULL, 1),
(45, 'Tienda de electrónica TechWorld', 600.00, 'foto', 'Equipamiento', '2022-10-15 15:30:00', 'Compra de una consola de videojuegos', 1),
(46, 'Hotel Plaza', 220.00, 'foto', 'Alojamiento', '2022-10-10 07:15:00', 'Estancia de dos noches', 1),
(47, 'Restaurante El Pescador', 93.75, 'foto', 'Alimentación', '2022-10-05 20:30:00', NULL, 1),
(48, 'Gasolinera BP', 66.60, 'foto', 'Transporte', '2022-10-01 15:00:00', NULL, 1),
(49, 'Supermercado GreenGrocery', 46.20, 'foto', 'Alimentación', '2022-09-25 10:10:00', NULL, 1),
(50, 'Tienda de deportes ActiveLife', 350.00, 'foto', 'Equipamiento', '2022-09-20 13:50:00', 'Compra de una bicicleta', 1),
(51, 'Hotel Oasis', 210.00, 'foto', 'Alojamiento', '2022-09-15 08:40:00', 'Estancia de una noche', 1),
(52, 'Restaurante La Brasserie', 95.50, 'foto', 'Alimentación', '2022-09-10 19:15:00', NULL, 1),
(53, 'Gasolinera Exxon', 63.75, 'foto', 'Transporte', '2022-09-05 14:05:00', NULL, 1),
(54, 'Supermercado MegaMart', 34.40, 'foto', 'Alimentación', '2022-09-01 11:25:00', NULL, 1),
(55, 'Tienda de ropa FashionStyle', 280.00, 'foto', 'Equipamiento', '2022-08-25 15:50:00', 'Compra de ropa de verano', 1),
(56, 'Hotel Paradise', 240.00, 'foto', 'Alojamiento', '2022-08-20 09:25:00', 'Estancia de dos noches', 1),
(57, 'Restaurante Le Bistro', 99.25, 'foto', 'Alimentación', '2022-08-15 18:15:00', NULL, 1),
(58, 'Gasolinera Chevron', 61.90, 'foto', 'Transporte', '2022-08-10 12:30:00', NULL, 1),
(59, 'Supermercado QuickShop', 42.75, 'foto', 'Alimentación', '2022-08-05 09:40:00', NULL, 1),
(60, 'Tienda de electrónica GizmoTech', 500.00, 'foto', 'Equipamiento', '2022-08-01 13:20:00', 'Compra de un nuevo equipo de sonido', 1),
(61, 'Hotel Riviera', 210.00, 'foto', 'Alojamiento', '2022-07-25 08:10:00', 'Estancia de una noche', 1),
(62, 'Restaurante El Gaucho', 88.50, 'foto', 'Alimentación', '2022-07-20 20:35:00', NULL, 1),
(63, 'Gasolinera Shell', 56.30, 'foto', 'Transporte', '2022-07-15 14:00:00', NULL, 1),
(64, 'Supermercado Freshmart', 37.60, 'foto', 'Alimentación', '2022-07-10 11:20:00', NULL, 1),
(65, 'Tienda de electrónica TechWorld', 550.00, 'foto', 'Equipamiento', '2022-07-05 15:25:00', 'Compra de un nuevo teléfono', 1),
(66, 'Hotel Plaza', 200.00, 'foto', 'Alojamiento', '2022-07-01 07:05:00', 'Estancia de dos noches', 1),
(67, 'Restaurante El Pescador', 90.75, 'foto', 'Alimentación', '2022-06-25 20:20:00', NULL, 1),
(68, 'Gasolinera BP', 65.40, 'foto', 'Transporte', '2022-06-20 15:15:00', NULL, 1),
(69, 'Supermercado GreenGrocery', 41.20, 'foto', 'Alimentación', '2022-06-15 10:05:00', NULL, 1),
(71, 'Hotel Grand', 190.00, 'foto', 'Alojamiento', '2022-06-05 09:55:00', 'Estancia de una noche', 1),
(72, 'Restaurante La Trattoria', 75.80, 'foto', 'Alimentación', '2022-06-01 18:30:00', NULL, 1),
(73, 'Gasolinera Texaco', 57.90, 'foto', 'Transporte', '2022-05-25 14:10:00', NULL, 1),
(74, 'Supermercado FreshFood', 36.50, 'foto', 'Alimentación', '2022-05-20 11:45:00', NULL, 1),
(75, 'Tienda de electrónica SmartGadgets', 420.00, 'foto', 'Equipamiento', '2022-05-15 15:55:00', 'Compra de una nueva computadora', 1),
(76, 'Hotel Oasis', 180.00, 'foto', 'Alojamiento', '2022-05-10 08:20:00', 'Estancia de dos noches', 1),
(77, 'Restaurante Sushi Express', 85.50, 'foto', 'Alimentación', '2022-05-05 19:35:00', NULL, 1),
(78, 'Gasolinera Arco', 62.80, 'foto', 'Transporte', '2022-05-01 13:50:00', NULL, 1),
(79, 'Supermercado MarketPlus', 39.90, 'foto', 'Alimentación', '2022-04-25 10:15:00', NULL, 1),
(80, 'Tienda de electrónica TechZone', 480.00, 'foto', 'Equipamiento', '2022-04-20 15:30:00', 'Compra de una nueva cámara', 1),
(81, 'Hotel Royal', 170.00, 'foto', 'Alojamiento', '2022-04-15 07:45:00', 'Estancia de una noche', 1),
(82, 'Restaurante La Cabaña', 80.25, 'foto', 'Alimentación', '2022-04-10 20:00:00', NULL, 1),
(83, 'Gasolinera Mobil', 59.50, 'foto', 'Transporte', '2022-04-05 14:25:00', NULL, 1),
(84, 'Supermercado FreshMarket', 35.80, 'foto', 'Alimentación', '2022-04-01 11:40:00', NULL, 1),
(85, 'Tienda de electrónica GizmoTech', 530.00, 'foto', 'Equipamiento', '2022-03-25 15:50:00', 'Compra de un nuevo teléfono', 1),
(86, 'Hotel Sunset', 160.00, 'foto', 'Alojamiento', '2022-03-20 09:15:00', 'Estancia de dos noches', 1),
(87, 'Restaurante La Piazza', 95.75, 'foto', 'Alimentación', '2022-03-15 18:30:00', NULL, 1),
(88, 'Gasolinera Shell', 64.20, 'foto', 'Transporte', '2022-03-10 12:45:00', NULL, 1),
(89, 'Supermercado MegaMart', 43.50, 'foto', 'Alimentación', '2022-03-05 10:00:00', NULL, 1),
(90, 'Tienda de electrónica FutureTech', 590.00, 'foto', 'Equipamiento', '2022-03-01 15:15:00', 'Compra de una nueva tablet', 1),
(91, 'Hotel Paradise', 150.00, 'foto', 'Alojamiento', '2022-02-25 08:40:00', 'Estancia de una noche', 1),
(92, 'Restaurante El Rancho', 70.80, 'foto', 'Alimentación', '2022-02-20 19:00:00', NULL, 1),
(93, 'Gasolinera BP', 56.90, 'foto', 'Transporte', '2022-02-15 13:20:00', NULL, 1),
(94, 'Supermercado FreshGrocery', 38.50, 'foto', 'Alimentación', '2022-02-10 10:35:00', NULL, 1),
(95, 'Tienda de electrónica DigitalWorld', 640.00, 'foto', 'Equipamiento', '2022-02-05 16:45:00', 'Compra de una nueva impresora', 1),
(96, 'Hotel Moonlight', 140.00, 'foto', 'Alojamiento', '2022-02-01 09:10:00', 'Estancia de dos noches', 1),
(97, 'Restaurante La Terraza', 65.50, 'foto', 'Alimentación', '2022-01-25 19:25:00', NULL, 1),
(98, 'Gasolinera Chevron', 61.80, 'foto', 'Transporte', '2022-01-20 14:40:00', NULL, 1),
(99, 'Supermercado FreshChoice', 42.90, 'foto', 'Alimentación', '2022-01-15 11:05:00', NULL, 1),
(100, 'Tienda de electrónica TechShop', 550.00, 'foto', 'Equipamiento', '2022-01-10 15:20:00', 'Compra de una nueva consola', 1),
(101, 'Hotel Sunrise', 130.00, 'foto', 'Alojamiento', '2021-12-05 08:35:00', 'Estancia de una noche', 1),
(102, 'Restaurante La Boulangerie', 60.75, 'foto', 'Alimentación', '2021-12-01 20:50:00', NULL, 1),
(103, 'Gasolinera Esso', 58.50, 'foto', 'Transporte', '2021-11-25 14:15:00', NULL, 1),
(104, 'Supermercado FreshMarket', 37.80, 'foto', 'Alimentación', '2021-11-20 11:30:00', NULL, 1),
(105, 'Tienda de electrónica TechZone', 520.00, 'foto', 'Equipamiento', '2021-11-15 15:40:00', 'Compra de una nueva computadora', 1),
(106, 'Hotel Ocean View', 120.00, 'foto', 'Alojamiento', '2021-11-10 08:05:00', 'Estancia de dos noches', 1),
(107, 'Restaurante La Pergola', 55.50, 'foto', 'Alimentación', '2021-11-05 19:20:00', NULL, 1),
(108, 'Gasolinera BP', 63.80, 'foto', 'Transporte', '2021-11-01 13:35:00', NULL, 1),
(109, 'Supermercado MarketPlus', 44.90, 'foto', 'Alimentación', '2021-10-25 10:00:00', NULL, 1),
(110, 'Tienda de electrónica GizmoTech', 600.00, 'foto', 'Equipamiento', '2021-10-20 15:15:00', 'Compra de un nuevo teléfono', 1),
(111, 'Hotel Paradise', 110.00, 'foto', 'Alojamiento', '2021-10-15 07:40:00', 'Estancia de una noche', 1),
(112, 'Restaurante El Pescador', 50.25, 'foto', 'Alimentación', '2021-10-10 19:55:00', NULL, 1),
(113, 'Gasolinera Shell', 60.90, 'foto', 'Transporte', '2021-10-05 14:20:00', NULL, 1),
(114, 'Supermercado FreshGrocery', 34.80, 'foto', 'Alimentación', '2021-10-01 11:35:00', NULL, 1),
(115, 'Tienda de electrónica DigitalWorld', 680.00, 'foto', 'Equipamiento', '2021-09-25 15:45:00', 'Compra de una nueva impresora', 1),
(116, 'Hotel Moonlight', 100.00, 'foto', 'Alojamiento', '2021-09-20 09:10:00', 'Estancia de dos noches', 1),
(117, 'Restaurante La Trattoria', 65.50, 'foto', 'Alimentación', '2021-09-15 19:25:00', NULL, 1),
(118, 'Gasolinera Chevron', 54.80, 'foto', 'Transporte', '2021-09-10 14:40:00', NULL, 1),
(119, 'Supermercado FreshChoice', 46.90, 'foto', 'Alimentación', '2021-09-05 11:05:00', NULL, 1),
(120, 'Tienda de electrónica TechShop', 520.00, 'foto', 'Equipamiento', '2021-09-01 15:20:00', 'Compra de una nueva consola', 1),
(121, 'Hotel Sunrise', 120.00, 'foto', 'Alojamiento', '2021-08-25 08:35:00', 'Estancia de una noche', 1),
(122, 'Restaurante La Boulangerie', 56.75, 'foto', 'Alimentación', '2021-08-20 20:50:00', NULL, 1),
(123, 'Gasolinera Esso', 55.50, 'foto', 'Transporte', '2021-08-15 14:15:00', NULL, 1),
(124, 'Supermercado FreshMarket', 36.80, 'foto', 'Alimentación', '2021-08-10 11:30:00', NULL, 1),
(125, 'Tienda de electrónica TechZone', 540.00, 'foto', 'Equipamiento', '2021-08-05 15:40:00', 'Compra de una nueva computadora', 1),
(126, 'Hotel Ocean View', 110.00, 'foto', 'Alojamiento', '2021-08-01 08:05:00', 'Estancia de dos noches', 1),
(127, 'Restaurante La Pergola', 50.50, 'foto', 'Alimentación', '2021-07-25 19:20:00', NULL, 1),
(128, 'Gasolinera BP', 60.80, 'foto', 'Transporte', '2021-07-20 13:35:00', NULL, 1),
(129, 'Supermercado MarketPlus', 42.90, 'foto', 'Alimentación', '2021-07-15 10:00:00', NULL, 1),
(130, 'Tienda de electrónica GizmoTech', 580.00, 'foto', 'Equipamiento', '2021-07-10 15:15:00', 'Compra de un nuevo teléfono', 1),
(131, 'Hotel Paradise', 100.00, 'foto', 'Alojamiento', '2021-07-05 07:40:00', 'Estancia de una noche', 1),
(132, 'Restaurante El Pescador', 48.25, 'foto', 'Alimentación', '2021-07-01 19:55:00', NULL, 1),
(133, 'Gasolinera Shell', 58.90, 'foto', 'Transporte', '2021-06-25 14:20:00', NULL, 1),
(134, 'Supermercado FreshGrocery', 33.80, 'foto', 'Alimentación', '2021-06-20 11:35:00', NULL, 1),
(135, 'Tienda de electrónica DigitalWorld', 660.00, 'foto', 'Equipamiento', '2021-06-15 15:45:00', 'Compra de una nueva impresora', 1),
(136, 'Hotel Moonlight', 90.00, 'foto', 'Alojamiento', '2021-06-10 09:10:00', 'Estancia de dos noches', 1),
(137, 'Restaurante La Trattoria', 60.50, 'foto', 'Alimentación', '2021-06-05 19:25:00', NULL, 1),
(138, 'Gasolinera Chevron', 52.80, 'foto', 'Transporte', '2021-06-01 14:40:00', NULL, 1),
(139, 'Supermercado FreshChoice', 43.90, 'foto', 'Alimentación', '2021-05-25 11:05:00', NULL, 1),
(140, 'Tienda de electrónica TechShop', 500.00, 'foto', 'Equipamiento', '2021-05-20 15:20:00', 'Compra de una nueva consola', 1),
(141, 'Hotel Sunrise', 100.00, 'foto', 'Alojamiento', '2021-05-15 08:35:00', 'Estancia de una noche', 1),
(142, 'Restaurante La Boulangerie', 50.75, 'foto', 'Alimentación', '2021-05-10 20:50:00', NULL, 1),
(143, 'Gasolinera Esso', 53.50, 'foto', 'Transporte', '2021-05-05 14:15:00', NULL, 1),
(144, 'Supermercado FreshMarket', 35.80, 'foto', 'Alimentación', '2021-05-01 11:30:00', NULL, 1),
(145, 'Tienda de electrónica TechZone', 530.00, 'foto', 'Equipamiento', '2021-04-25 15:40:00', 'Compra de una nueva computadora', 1),
(146, 'Hotel Ocean View', 90.00, 'foto', 'Alojamiento', '2021-04-20 08:05:00', 'Estancia de dos noches', 1),
(147, 'Restaurante La Pergola', 45.50, 'foto', 'Alimentación', '2021-04-15 19:20:00', NULL, 1),
(148, 'Gasolinera BP', 56.80, 'foto', 'Transporte', '2021-04-10 13:35:00', NULL, 1),
(149, 'Supermercado MarketPlus', 40.90, 'foto', 'Alimentación', '2021-04-05 10:00:00', NULL, 1),
(150, 'Tienda de electrónica GizmoTech', 560.00, 'foto', 'Equipamiento', '2021-04-01 15:15:00', 'Compra de un nuevo teléfono', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `comentarios` mediumtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `comercialId` int(11) DEFAULT NULL,
  `clienteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `comentarios`, `createdAt`, `updatedAt`, `comercialId`, `clienteId`) VALUES
(1, 'Pedido urgente', '2023-03-12 09:30:00', '2023-03-12 09:30:00', 1, 1),
(2, 'Entrega programada', '2023-04-05 14:45:00', '2023-04-05 14:45:00', 2, 2),
(3, 'Envío a dirección de obra', '2023-05-20 11:10:00', '2023-05-20 11:10:00', 1, 3),
(4, 'Pedido estándar', '2023-05-18 16:20:00', '2023-05-18 16:20:00', 2, 4),
(5, 'Entrega en tienda', '2023-02-10 10:55:00', '2023-02-10 10:55:00', 1, 5),
(6, 'Pedido para reforma', '2023-04-28 15:40:00', '2023-04-28 15:40:00', 2, 6),
(7, 'Envío a domicilio', '2023-05-15 12:05:00', '2023-05-15 12:05:00', 1, 7),
(8, 'Pedido urgente', '2023-02-01 09:30:00', '2023-02-01 09:30:00', 2, 8),
(9, 'Entrega programada', '2023-04-25 14:45:00', '2023-04-25 14:45:00', 1, 9),
(10, 'Envío a dirección de obra', '2023-02-14 11:10:00', '2023-02-14 11:10:00', 2, 10),
(11, 'Pedido estándar', '2023-01-06 16:20:00', '2023-01-06 16:20:00', 1, 11),
(12, 'Entrega en tienda', '2023-02-22 10:55:00', '2023-02-22 10:55:00', 2, 12),
(13, 'Pedido para reforma', '2023-03-18 15:40:00', '2023-03-18 15:40:00', 1, 13),
(14, 'Envío a domicilio', '2023-04-30 12:05:00', '2023-04-30 12:05:00', 2, 14),
(15, 'Pedido urgente', '2023-05-10 09:30:00', '2023-05-10 09:30:00', 1, 15),
(16, 'Entrega programada', '2023-05-05 14:45:00', '2023-05-05 14:45:00', 2, 16),
(17, 'Envío a dirección de obra', '2023-02-17 11:10:00', '2023-02-17 11:10:00', 1, 17),
(18, 'Pedido estándar', '2023-04-08 16:20:00', '2023-04-08 16:20:00', 2, 18),
(19, 'Entrega en tienda', '2023-05-25 10:55:00', '2023-05-25 10:55:00', 1, 19),
(20, 'Pedido para reforma', '2023-02-14 15:40:00', '2023-02-14 15:40:00', 2, 20),
(21, 'Envío a domicilio', '2023-04-02 12:05:00', '2023-04-02 12:05:00', 1, 21),
(22, 'Pedido urgente', '2023-02-20 09:30:00', '2023-02-20 09:30:00', 2, 22),
(23, 'Entrega programada', '2023-01-15 14:45:00', '2023-01-15 14:45:00', 1, 23),
(24, 'Envío a dirección de obra', '2023-02-17 11:10:00', '2023-02-17 11:10:00', 2, 24),
(25, 'Pedido estándar', '2023-03-28 16:20:00', '2023-03-28 16:20:00', 1, 25),
(26, 'Entrega en tienda', '2023-04-12 10:55:00', '2023-04-12 10:55:00', 2, 26),
(27, 'Pedido para reforma', '2023-05-06 15:40:00', '2023-05-06 15:40:00', 1, 27),
(28, 'Envío a domicilio', '2023-05-29 12:05:00', '2023-05-29 12:05:00', 2, 28),
(29, 'Pedido urgente', '2023-02-08 09:30:00', '2023-02-08 09:30:00', 1, 29),
(30, 'Entrega programada', '2023-04-03 14:45:00', '2023-04-03 14:45:00', 2, 30),
(31, 'Envío a dirección de obra', '2023-05-19 11:10:00', '2023-05-19 11:10:00', 1, 31),
(32, 'Pedido estándar', '2023-02-10 16:20:00', '2023-02-10 16:20:00', 2, 32),
(33, 'Entrega en tienda', '2023-04-27 10:55:00', '2023-04-27 10:55:00', 1, 33),
(34, 'Pedido para reforma', '2023-02-16 15:40:00', '2023-02-16 15:40:00', 2, 34),
(35, 'Envío a domicilio', '2023-01-03 12:05:00', '2023-01-03 12:05:00', 1, 35),
(36, 'Pedido urgente', '2023-02-21 09:30:00', '2023-02-21 09:30:00', 2, 36),
(37, 'Entrega programada', '2023-03-18 14:45:00', '2023-03-18 14:45:00', 1, 37),
(38, 'Envío a dirección de obra', '2023-05-01 11:10:00', '2023-05-01 11:10:00', 2, 38),
(39, 'Pedido estándar', '2023-05-26 16:20:00', '2023-05-26 16:20:00', 1, 39),
(40, 'Entrega en tienda', '2023-02-19 10:55:00', '2023-02-19 10:55:00', 2, 40),
(41, 'Pedido para reforma', '2023-05-06 15:40:00', '2023-05-06 15:40:00', 1, 41),
(42, 'Envío a domicilio', '2023-05-30 12:05:00', '2023-05-30 12:05:00', 2, 42),
(43, 'Pedido urgente', '2023-04-11 09:30:00', '2023-04-11 09:30:00', 1, 43),
(44, 'Entrega programada', '2023-02-06 14:45:00', '2023-02-06 14:45:00', 2, 44),
(45, 'Envío a dirección de obra', '2023-01-20 11:10:00', '2023-01-20 11:10:00', 1, 45),
(46, 'Pedido estándar', '2023-02-12 16:20:00', '2023-02-12 16:20:00', 2, 46),
(47, 'Entrega en tienda', '2023-03-31 10:55:00', '2023-03-31 10:55:00', 1, 47),
(48, 'Pedido para reforma', '2023-04-19 15:40:00', '2023-04-19 15:40:00', 2, 48),
(49, 'Envío a domicilio', '2023-05-11 12:05:00', '2023-05-11 12:05:00', 1, 49),
(50, 'Pedido urgente', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2, 50),
(51, 'Pedido urgente', '2023-05-28 09:30:00', '2023-05-28 09:30:00', 1, 1),
(52, 'Entrega programada', '2023-04-15 14:45:00', '2023-04-15 14:45:00', 2, 2),
(53, 'Envío a dirección de obra', '2023-03-20 11:10:00', '2023-03-20 11:10:00', 1, 3),
(54, 'Pedido estándar', '2023-02-18 16:20:00', '2023-02-18 16:20:00', 2, 4),
(55, 'Entrega en tienda', '2023-01-25 10:55:00', '2023-01-25 10:55:00', 1, 5),
(56, 'Pedido para reforma', '2022-12-08 15:40:00', '2022-12-08 15:40:00', 2, 6),
(57, 'Envío a domicilio', '2022-11-12 12:05:00', '2022-11-12 12:05:00', 1, 7),
(58, 'Pedido urgente', '2022-10-29 09:30:00', '2022-10-29 09:30:00', 2, 8),
(59, 'Entrega programada', '2022-09-15 14:45:00', '2022-09-15 14:45:00', 1, 9),
(60, 'Envío a dirección de obra', '2022-08-10 11:10:00', '2022-08-10 11:10:00', 2, 10),
(61, 'Pedido estándar', '2022-07-18 16:20:00', '2022-07-18 16:20:00', 1, 11),
(62, 'Entrega en tienda', '2022-06-22 10:55:00', '2022-06-22 10:55:00', 2, 12),
(63, 'Pedido para reforma', '2022-05-30 15:40:00', '2022-05-30 15:40:00', 1, 13),
(64, 'Envío a domicilio', '2022-04-12 12:05:00', '2022-04-12 12:05:00', 2, 14),
(65, 'Pedido urgente', '2022-03-26 09:30:00', '2022-03-26 09:30:00', 1, 15),
(66, 'Entrega programada', '2022-02-05 14:45:00', '2022-02-05 14:45:00', 2, 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_lineas`
--

CREATE TABLE `pedido_lineas` (
  `id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unidad` float(11,2) NOT NULL,
  `pedidoId` int(11) DEFAULT NULL,
  `articuloId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedido_lineas`
--

INSERT INTO `pedido_lineas` (`id`, `cantidad`, `precio_unidad`, `pedidoId`, `articuloId`) VALUES
(1, 3, 10.50, 1, 12),
(2, 1, 25.00, 2, 5),
(3, 2, 8.75, 3, 8),
(4, 4, 15.50, 4, 3),
(5, 1, 5.00, 5, 7),
(6, 3, 12.25, 6, 1),
(7, 2, 7.50, 7, 9),
(8, 1, 18.00, 8, 2),
(9, 3, 6.50, 9, 6),
(10, 2, 9.75, 10, 11),
(11, 1, 4.50, 11, 4),
(12, 4, 11.00, 12, 10),
(13, 1, 7.25, 13, 14),
(14, 2, 14.50, 14, 1),
(15, 3, 5.75, 15, 3),
(16, 1, 16.00, 16, 9),
(17, 2, 3.50, 17, 7),
(18, 4, 10.00, 18, 5),
(19, 1, 13.25, 19, 2),
(20, 3, 4.75, 20, 6),
(21, 2, 17.00, 21, 8),
(22, 1, 2.50, 22, 10),
(23, 4, 9.25, 23, 4),
(24, 1, 15.50, 24, 1),
(25, 3, 5.75, 25, 3),
(26, 2, 12.00, 26, 9),
(27, 1, 3.50, 27, 7),
(28, 4, 10.00, 28, 5),
(29, 1, 14.25, 29, 2),
(30, 3, 4.75, 30, 6),
(31, 2, 17.00, 31, 8),
(32, 1, 2.50, 32, 10),
(33, 4, 9.25, 33, 4),
(34, 1, 15.50, 34, 1),
(35, 3, 5.75, 35, 3),
(36, 2, 12.00, 36, 9),
(37, 1, 3.50, 37, 7),
(38, 4, 10.00, 38, 5),
(39, 1, 14.25, 39, 2),
(40, 3, 4.75, 40, 6),
(41, 2, 17.00, 41, 8),
(42, 1, 2.50, 42, 10),
(43, 4, 9.25, 43, 4),
(44, 1, 15.50, 44, 1),
(45, 3, 5.75, 45, 3),
(46, 2, 12.00, 46, 9),
(47, 1, 3.50, 47, 7),
(48, 4, 10.00, 48, 5),
(49, 1, 14.25, 49, 2),
(50, 3, 4.75, 50, 6),
(51, 2, 17.00, 51, 8),
(52, 1, 2.50, 52, 10),
(53, 4, 9.25, 53, 4),
(54, 1, 15.50, 54, 1),
(55, 3, 5.75, 55, 3),
(56, 2, 12.00, 56, 9),
(57, 1, 3.50, 57, 7),
(58, 4, 10.00, 58, 5),
(59, 1, 14.25, 59, 2),
(60, 3, 4.75, 60, 6),
(61, 2, 17.00, 61, 8),
(62, 1, 2.50, 62, 10),
(63, 4, 9.25, 63, 4),
(64, 1, 15.50, 64, 1),
(65, 3, 5.75, 65, 3),
(66, 2, 12.00, 66, 9),
(67, 2, 8.00, 1, 11),
(68, 1, 12.50, 1, 6),
(69, 3, 6.75, 1, 4),
(70, 4, 20.00, 2, 9),
(71, 1, 15.75, 2, 3),
(72, 2, 9.50, 2, 7),
(73, 3, 7.00, 3, 5),
(74, 1, 14.25, 3, 2),
(75, 2, 4.50, 3, 6),
(76, 4, 11.00, 4, 10),
(77, 1, 7.25, 4, 14),
(78, 3, 14.50, 4, 1),
(79, 2, 5.75, 5, 3),
(80, 1, 16.00, 5, 9),
(81, 4, 3.50, 5, 7),
(82, 1, 10.00, 6, 5),
(83, 3, 13.25, 6, 2),
(84, 2, 4.75, 6, 6),
(85, 1, 17.00, 7, 8),
(86, 4, 2.50, 7, 10),
(87, 1, 9.25, 7, 4),
(88, 3, 15.50, 8, 1),
(89, 2, 5.75, 8, 3),
(90, 1, 12.00, 8, 9),
(91, 4, 3.50, 9, 7),
(92, 1, 10.00, 9, 5),
(93, 3, 14.25, 9, 2),
(94, 2, 4.75, 10, 6),
(95, 1, 17.00, 10, 8),
(96, 4, 2.50, 10, 10),
(97, 1, 9.25, 11, 4),
(98, 3, 15.50, 11, 1),
(99, 2, 5.75, 11, 3),
(100, 1, 12.00, 12, 9),
(101, 4, 3.50, 12, 7),
(102, 1, 10.00, 12, 5),
(103, 3, 14.25, 13, 2),
(104, 2, 4.75, 13, 6),
(105, 1, 17.00, 13, 8),
(106, 4, 2.50, 14, 10),
(107, 1, 9.25, 14, 4),
(108, 3, 15.50, 14, 1),
(109, 2, 5.75, 15, 3),
(110, 1, 12.00, 15, 9),
(111, 4, 3.50, 15, 7),
(112, 1, 10.00, 16, 5),
(113, 3, 14.25, 16, 2),
(114, 2, 4.75, 16, 6),
(115, 1, 17.00, 17, 8),
(116, 4, 2.50, 17, 10),
(117, 1, 9.25, 17, 4),
(118, 3, 15.50, 18, 1),
(119, 2, 5.75, 18, 3),
(120, 1, 12.00, 18, 9),
(121, 4, 3.50, 19, 7),
(122, 1, 10.00, 19, 5),
(123, 3, 14.25, 19, 2),
(124, 2, 4.75, 20, 6),
(125, 1, 17.00, 20, 8),
(126, 4, 2.50, 20, 10),
(127, 1, 9.25, 21, 4),
(128, 3, 15.50, 21, 1),
(129, 2, 5.75, 21, 3),
(130, 1, 12.00, 22, 9),
(131, 4, 3.50, 22, 7),
(132, 1, 10.00, 22, 5),
(133, 3, 14.25, 23, 2),
(134, 2, 4.75, 23, 6),
(135, 1, 17.00, 23, 8),
(136, 4, 2.50, 24, 10),
(137, 1, 9.25, 24, 4),
(138, 3, 15.50, 24, 1),
(139, 2, 5.75, 25, 3),
(140, 1, 12.00, 25, 9),
(141, 4, 3.50, 25, 7),
(142, 1, 10.00, 26, 5),
(143, 3, 14.25, 26, 2),
(144, 2, 4.75, 26, 6),
(145, 1, 17.00, 27, 8),
(146, 4, 2.50, 27, 10),
(147, 1, 9.25, 27, 4),
(148, 3, 15.50, 28, 1),
(149, 2, 5.75, 28, 3),
(150, 1, 12.00, 28, 9),
(151, 4, 3.50, 29, 7),
(152, 1, 10.00, 29, 5),
(153, 3, 14.25, 29, 2),
(154, 2, 4.75, 30, 6),
(155, 1, 17.00, 30, 8),
(156, 4, 2.50, 30, 10),
(157, 1, 9.25, 31, 4),
(158, 3, 15.50, 31, 1),
(159, 2, 5.75, 31, 3),
(160, 1, 12.00, 32, 9),
(161, 4, 3.50, 32, 7),
(162, 1, 10.00, 32, 5),
(163, 3, 14.25, 33, 2),
(164, 2, 4.75, 33, 6),
(165, 1, 17.00, 33, 8),
(166, 4, 2.50, 34, 10),
(167, 1, 9.25, 34, 4),
(168, 3, 15.50, 34, 1),
(169, 2, 5.75, 35, 3),
(170, 1, 12.00, 35, 9),
(171, 4, 3.50, 35, 7),
(172, 1, 10.00, 36, 5),
(173, 3, 14.25, 36, 2),
(174, 2, 4.75, 36, 6),
(175, 1, 17.00, 37, 8),
(176, 4, 2.50, 37, 10),
(177, 1, 9.25, 37, 4),
(178, 3, 15.50, 38, 1),
(179, 2, 5.75, 38, 3),
(180, 1, 12.00, 38, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedors`
--

CREATE TABLE `proveedors` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `nombre_contacto` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proveedors`
--

INSERT INTO `proveedors` (`id`, `nombre`, `nombre_contacto`, `email`, `telefono`, `direccion`, `createdAt`, `updatedAt`) VALUES
(1, 'Distribuciones García', 'Pedro García', 'pedro.garcia@distribucionesgarcia.com', '+34 612345678', 'Calle Mayor, 10', '2023-05-06 12:20:53', '2023-05-06 12:20:53'),
(2, 'Industrias López', 'María López', 'maria.lopez@industriaslopez.com', '+34 678543210', 'Avenida del Parque, 20', '2023-05-06 12:20:53', '2023-06-06 12:20:53'),
(3, 'Suministros Martínez', 'Juan Martínez', 'juan.martinez@suministrosmartinez.com', '+34 654789012', 'Calle Gran Vía, 5', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(4, 'Servicios Sánchez', 'Laura Sánchez', 'laura.sanchez@serviciossanchez.com', '+34 678901234', 'Avenida de la Constitución, 15', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(5, 'Inversiones Rodríguez', 'Manuel Rodríguez', 'manuel.rodriguez@inversionesrodriguez.com', '+34 612345678', 'Calle San Miguel, 8', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(6, 'Energías Solares', 'Ana García', 'ana.garcia@energiassolares.com', '+34 645678901', 'Plaza España, 3', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(7, 'Alimentación Gómez', 'Carlos Gómez', 'carlos.gomez@alimentaciongomez.com', '+34 687890123', 'Calle Valencia, 25', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(8, 'Materiales Herrera', 'Isabel Herrera', 'isabel.herrera@materialesherrera.com', '+34 621234567', 'Avenida de la Paz, 12', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(9, 'Automóviles Fernández', 'Javier Fernández', 'javier.fernandez@automovilesfernandez.com', '+34 654567890', 'Calle Goya, 7', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(10, 'Construcciones López', 'Carmen López', 'carmen.lopez@construccioneslopez.com', '+34 687890123', 'Calle Granada, 18', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(11, 'Tecnología Martín', 'Miguel Martín', 'miguel.martin@tecnologiamartin.com', '+34 621234567', 'Avenida de la Libertad, 9', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(12, 'Productos Jiménez', 'Lucía Jiménez', 'lucia.jimenez@productosjimenez.com', '+34 654567890', 'Calle Alcalá, 30', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(13, 'Logística Soto', 'Juan Soto', 'juan.soto@logisticasoto.com', '+34 678901234', 'Avenida de la Constitución, 7', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(14, 'Hostelería Ramos', 'Elena Ramos', 'elena.ramos@hosteleriaramos.com', '+34 612345678', 'Calle Mayor, 14', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(15, 'Diseño Gráfico Herrera', 'David Herrera', 'david.herrera@disenograficoherrera.com', '+34 678543210', 'Avenida del Parque, 25', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(16, 'Textiles Rodríguez', 'María Rodríguez', 'maria.rodriguez@textilesrodriguez.com', '+34 654789012', 'Calle Gran Vía, 12', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(17, 'Electrodomésticos Sánchez', 'Pedro Sánchez', 'pedro.sanchez@electrodomesticossanchez.com', '+34 678901234', 'Avenida de la Constitución, 20', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(18, 'Moda López', 'Isabel López', 'isabel.lopez@modalopez.com', '+34 612345678', 'Calle San Miguel, 6', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(19, 'Construcciones Gómez', 'Javier Gómez', 'javier.gomez@construccionesgomez.com', '+34 645678901', 'Plaza España, 10', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(20, 'Transportes Martínez', 'María Martínez', 'maria.martinez@transportesmartinez.com', '+34 687890123', 'Calle Valencia, 14', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(21, 'Tecnología García', 'José García', 'jose.garcia@tecnologiagarcia.com', '+34 621234567', 'Avenida de la Paz, 5', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(22, 'Muebles Fernández', 'Laura Fernández', 'laura.fernandez@mueblesfernandez.com', '+34 654567890', 'Calle Goya, 12', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(23, 'Distribuciones López', 'Juan López', 'juan.lopez@distribucioneslopez.com', '+34 687890123', 'Calle Granada, 25', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(24, 'Suministros Herrera', 'María Herrera', 'maria.herrera@suministrosherrera.com', '+34 621234567', 'Avenida de la Libertad, 15', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(25, 'Alimentación Sánchez', 'Carlos Sánchez', 'carlos.sanchez@alimentacionsanchez.com', '+34 654567890', 'Calle Alcalá, 5', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(26, 'Distribuciones Rodríguez', 'Elena Rodríguez', 'elena.rodriguez@distribucionesrodriguez.com', '+34 678901234', 'Avenida de la Constitución, 9', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(27, 'Hostelería Martínez', 'Francisco Martínez', 'francisco.martinez@hosteleriamartinez.com', '+34 612345678', 'Calle Mayor, 20', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(28, 'Diseño Gráfico Jiménez', 'Carmen Jiménez', 'carmen.jimenez@disenograficojimenez.com', '+34 678543210', 'Avenida del Parque, 18', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(29, 'Textiles Soto', 'Pablo Soto', 'pablo.soto@textilessoto.com', '+34 654789012', 'Calle Gran Vía, 8', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(30, 'Electrodomésticos García', 'Laura García', 'laura.garcia@electrodomesticosgarcia.com', '+34 678901234', 'Avenida de la Constitución, 14', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(31, 'Moda López', 'Miguel López', 'miguel.lopez@modalopez.com', '+34 612345678', 'Calle San Miguel, 10', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(32, 'Construcciones Gómez', 'Isabel Gómez', 'isabel.gomez@construccionesgomez.com', '+34 645678901', 'Plaza España, 5', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(33, 'Transportes Martínez', 'Javier Martínez', 'javier.martinez@transportesmartinez.com', '+34 687890123', 'Calle Valencia, 12', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(34, 'Tecnología García', 'Lucía García', 'lucia.garcia@tecnologiagarcia.com', '+34 621234567', 'Avenida de la Paz, 9', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(35, 'Muebles Fernández', 'Pablo Fernández', 'pablo.fernandez@mueblesfernandez.com', '+34 654567890', 'Calle Goya, 18', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(36, 'Distribuciones López', 'Ana López', 'ana.lopez@distribucioneslopez.com', '+34 687890123', 'Calle Granada, 10', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(37, 'Suministros Herrera', 'Carlos Herrera', 'carlos.herrera@suministrosherrera.com', '+34 621234567', 'Avenida de la Libertad, 20', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(38, 'Alimentación Sánchez', 'María Sánchez', 'maria.sanchez@alimentacionsanchez.com', '+34 654567890', 'Calle Alcalá, 15', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(39, 'Distribuciones Rodríguez', 'Javier Rodríguez', 'javier.rodriguez@distribucionesrodriguez.com', '+34 678901234', 'Avenida de la Constitución, 5', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(40, 'Hostelería Martínez', 'Laura Martínez', 'laura.martinez@hosteleriamartinez.com', '+34 612345678', 'Calle Mayor, 18', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(41, 'Diseño Gráfico Jiménez', 'Carlos Jiménez', 'carlos.jimenez@disenograficojimenez.com', '+34 678543210', 'Avenida del Parque, 12', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(42, 'Textiles Soto', 'Elena Soto', 'elena.soto@textilessoto.com', '+34 654789012', 'Calle Gran Vía, 10', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(43, 'Electrodomésticos García', 'Francisco García', 'francisco.garcia@electrodomesticosgarcia.com', '+34 678901234', 'Avenida de la Constitución, 18', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(44, 'Moda López', 'Ana López', 'ana.lopez@modalopez.com', '+34 612345678', 'Calle San Miguel, 14', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(45, 'Construcciones Gómez', 'Miguel Gómez', 'miguel.gomez@construccionesgomez.com', '+34 645678901', 'Plaza España, 9', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(46, 'Transportes Martínez', 'Laura Martínez', 'laura.martinez@transportesmartinez.com', '+34 687890123', 'Calle Valencia, 5', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(47, 'Tecnología García', 'Javier García', 'javier.garcia@tecnologiagarcia.com', '+34 621234567', 'Avenida de la Paz, 14', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(48, 'Muebles Fernández', 'Isabel Fernández', 'isabel.fernandez@mueblesfernandez.com', '+34 654567890', 'Calle Goya, 25', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(49, 'Distribuciones López', 'José López', 'jose.lopez@distribucioneslopez.com', '+34 687890123', 'Calle Granada, 12', '2023-06-06 12:20:53', '2023-06-06 12:20:53'),
(50, 'Suministros Herrera', 'Laura Herrera', 'laura.herrera@suministrosherrera.com', '+34 621234567', 'Avenida de la Libertad, 10', '2023-06-06 12:20:53', '2023-06-06 12:20:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `rol`, `createdAt`, `updatedAt`) VALUES
(1, 'empresa1@gmail.com', '$2a$10$L8k7j/5Nf7H.EcUFL5Ec1Ooc6kpna.fjRIYZG8R46XcQpyUm/BhcC', 1, '2023-06-06 11:20:30', '2023-06-06 11:20:30'),
(2, 'empresa2@gmail.com', '$2a$10$3Euu7/W3Qo62vdpdjxTp4umThrmaWqh95O/rCaZdgr23OaosjskvO', 1, '2023-06-06 11:20:46', '2023-06-06 11:20:46'),
(3, 'comercial1@gmail.com', '$2a$10$a5pKtOSGas0X/XCJrRorpufBaN89sdIqFX/.HTAb0tGZHRQx.ZGq.', 0, '2023-06-06 11:21:22', '2023-06-06 11:21:22'),
(4, 'comercial2@gmail.com', '$2a$10$N/QPOdtcijivHY4bGbU/3OmPrhDtMSuFfdb1G1SP8TF4le1nU7Lw.', 0, '2023-06-06 11:21:41', '2023-06-06 11:21:41'),
(5, 'comercial3@gmail.com', '$2a$10$yg7CLDTUuQKugsvToAAxJeUNC7JS0XmysDbujpSxTsieywkf79izW', 0, '2023-06-06 11:23:58', '2023-06-06 11:23:58'),
(6, 'comercial4@gmail.com', '$2a$10$2lglx3zSfhZwY1vfnX.Ao.2YItC0.KvhopV6mJbC4Bq0Xfehhhje2', 0, '2023-06-06 11:24:25', '2023-06-06 11:24:25'),
(7, 'juan.perez@gmail.com', '$2a$10$5lOcEeVRK6yseGt7FVoLVukWsGJJz1F.amhMxs9jcYaFobPWgQ9Vq', 1, '2023-06-06 11:25:47', '2023-06-06 11:25:47'),
(8, 'laura.gonzalez@gmail.com', '$2a$10$sWvKaQ658/3//BlpPVBwluc99CK55I07QcrVY9M7CBPqO1RQkxUym', 1, '2023-06-06 11:25:53', '2023-06-06 11:25:53'),
(9, 'carlos.martinez@gmail.com', '$2a$10$NQjFLKJbemOksixk6SBDQORKwKJ0f0VTVKGDV0rUKXEfK47Vz2LYG', 1, '2023-06-06 11:25:59', '2023-06-06 11:25:59'),
(10, 'ana.rodriguez@gmail.com', '$2a$10$BZvX5O/aYmiaMcM.uYSfkOU1a38dLKJL98ewfHYKjlCGxQLsNHsCi', 1, '2023-06-06 11:26:25', '2023-06-06 11:26:25'),
(11, 'david.lopez@gmail.com', '$2a$10$wcQXjVL9C9ffWdSN/wrwMueQo.SW74A1NfaZAYQ/6MdP9ovn3IEL.', 1, '2023-06-06 11:26:32', '2023-06-06 11:26:32'),
(12, 'maria.garcia@gmail.com', '$2a$10$5o0FI.DC05Zt53d3zFZdTOl/9MnP9xrTbIRqsvKA6pgv6LEIphP5C', 1, '2023-06-06 11:26:41', '2023-06-06 11:26:41'),
(13, 'javier.martinez@gmail.com', '$2a$10$N.B5CeZeELFRjVTUq8wdLuTRCpLrT5afv4dVunkWK2mfxB1B63H0W', 1, '2023-06-06 11:26:46', '2023-06-06 11:26:46'),
(14, 'luisa.fernandez@gmail.com', '$2a$10$kfvswuXHXOEz.O7ispt0Huxy.OEXAT09KtrLpVCdCfa5xL5.GsBr2', 1, '2023-06-06 11:27:22', '2023-06-06 11:27:22'),
(15, 'juan.garcia@gmail.com', '$2a$10$m0zJRqN16uCwlHrh74O8JOBLN7mRDVXwsFxiAYHwtS3fQZClchOPa', 0, '2023-06-06 11:33:39', '2023-06-06 11:33:39'),
(16, 'laura.lopez@gmail.com', '$2a$10$U49omMqrGSar0Pyiw2Yt3eMeHW6qcdWgkzdWNasksc.7eyH51c.WC', 0, '2023-06-06 11:33:47', '2023-06-06 11:33:47'),
(18, 'ana.fernandez@gmail.com', '$2a$10$rJtMZ8PsYCY2hUQ9w8Ve4.VqGNuxwidEAgI1KQH./fL.ZXwqNmk2y', 0, '2023-06-06 11:34:42', '2023-06-06 11:34:42'),
(19, 'pedro.gomez@gmail.com', '$2a$10$RB8QV7uOs/IFcIyUNL1uBOwGclHSyiMeF0s5PfYTMkyte5sBASgeq', 0, '2023-06-06 11:34:46', '2023-06-06 11:34:46'),
(20, 'lucia.rodriguez@gmail.com', '$2a$10$2E2QkO.KusjeRzpv6N/M8.YFyFihc1QcpKoKeAGzoUI7qyTmdF5G6', 0, '2023-06-06 11:34:52', '2023-06-06 11:34:52'),
(21, 'daniel.lopez@gmail.com', '$2a$10$A1GzsHSIHgMjivBZ.VSx8.wIEJUeNivTqpI8VIWnq/kjfUou/FkRq', 0, '2023-06-06 11:35:00', '2023-06-06 11:35:00'),
(22, 'laura.garcia@gmail.com', '$2a$10$yuq9fWhsdf.jL5ZaQGxg8eYDS3f65e5Xc8xTs8mdvElocqmdGJfXe', 0, '2023-06-06 11:35:08', '2023-06-06 11:35:08'),
(23, 'carlos.sanchez@gmail.com', '$2a$10$k3gDLlcjpKJVrP7Grpa4Ze3Hci0qqytIT7oqI2KG0mTHT8O4VUugC', 0, '2023-06-06 11:35:19', '2023-06-06 11:35:19'),
(24, 'maria.gonzalez@gmail.com', '$2a$10$0ny65DikUdN3NsL1t3ELEO5qePIGrc2jlXjUEb3j.gAQMy3LwlhnG', 0, '2023-06-06 11:35:26', '2023-06-06 11:35:26'),
(25, 'javier.martin@gmail.com', '$2a$10$H/PcUswIwx162iYpKeNgS.1Sc6p2UrFDrDjQF/HQGV.ntexSKjLL.', 0, '2023-06-06 11:35:31', '2023-06-06 11:35:31'),
(27, 'lucia.lopez@gmail.com', '$2a$10$pk4q1aXVrkdh683CkQFY/uienXJfEGRVKU1gU4L5im2k.Z/EM/Utu', 0, '2023-06-06 11:35:40', '2023-06-06 11:35:40'),
(28, 'juan.rodriguez@gmail.com', '$2a$10$yjZCWr07PTGN75JpDvLlY.Y.bOwgf3VGMDyiycgDlJd3cN2rkQpAS', 0, '2023-06-06 11:35:53', '2023-06-06 11:35:53'),
(30, 'ana.perez@gmail.com', '$2a$10$1e2wH5xukD5ixQphakgkBOVAloNYT.r2FqwZOGxBCsv9Y/KE06HD.', 0, '2023-06-06 11:36:35', '2023-06-06 11:36:35'),
(31, 'pedro.gonzalez@gmail.com', '$2a$10$aL8qCmUr7Wnbs8geYLl2y.tZqYbVtYVORCR6zkxj3J/yPvHtY0QBy', 0, '2023-06-06 11:36:40', '2023-06-06 11:36:40'),
(32, 'lucia.fernandez@gmail.com', '$2a$10$pNNJwcXhSnQrWJxojSg1H..MjmHK.DdOaJpCqDmBqlmSyS.SIbS62', 0, '2023-06-06 11:36:45', '2023-06-06 11:36:45'),
(33, 'daniel.martinez@gmail.com', '$2a$10$GgmAUh4CU0mIbuhD/8F.4O80V8VhRIOuTKadMJ4Z3LLa8dVNloBYy', 0, '2023-06-06 11:36:50', '2023-06-06 11:36:50'),
(34, 'sara.lopez@gmail.com', '$2a$10$EqUIdxWpGWbovxFYik30IuH0ByxHIkp5iEgXE2aXOj7wbxqWgf9qq', 0, '2023-06-06 11:36:55', '2023-06-06 11:36:55'),
(35, 'pablo.sanz@gmail.com', '$2a$10$qixTxcv5uFZu.K4DZAIP.uJyOyJC1gOxRcJiCspF.ywlOQsmqKZuy', 0, '2023-06-06 11:36:59', '2023-06-06 11:36:59'),
(36, 'luisa.hernandez@gmail.com', '$2a$10$eDkhtyQ4klFOX3qRjaHzG.QmucGlTAYcCvWxjwdrbdhDbbfYK0UeG', 0, '2023-06-06 11:37:04', '2023-06-06 11:37:04'),
(37, 'manuel.fernandez@gmail.com', '$2a$10$wqk9/rvodzzc7v0rsIIqk.b8VgZR/4mLU2UNvTtYtJDPj/Kcq8OrC', 0, '2023-06-06 11:37:10', '2023-06-06 11:37:10'),
(38, 'laura.rodriguez@gmail.com', '$2a$10$5Brr0xzhSM.qt2AiQxXF6eh9CMh7R9EY8pT68oVDOY7JMihMHaKPO', 0, '2023-06-06 11:37:14', '2023-06-06 11:37:14'),
(39, 'david.molina@gmail.com', '$2a$10$jCP3bVafYOfi7/1ydIBLmeBkN04Fc01Wr/RVBhAUtIOEb7np/f9ly', 0, '2023-06-06 11:37:19', '2023-06-06 11:37:19');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `proveedorId` (`proveedorId`),
  ADD KEY `empresaId` (`empresaId`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `empresaId` (`empresaId`);

--
-- Indices de la tabla `comercials`
--
ALTER TABLE `comercials`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD KEY `empresaId` (`empresaId`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cif` (`cif`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `gastos`
--
ALTER TABLE `gastos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comercialId` (`comercialId`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comercialId` (`comercialId`),
  ADD KEY `clienteId` (`clienteId`);

--
-- Indices de la tabla `pedido_lineas`
--
ALTER TABLE `pedido_lineas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedidoId` (`pedidoId`),
  ADD KEY `articuloId` (`articuloId`);

--
-- Indices de la tabla `proveedors`
--
ALTER TABLE `proveedors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `comercials`
--
ALTER TABLE `comercials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `gastos`
--
ALTER TABLE `gastos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT de la tabla `pedido_lineas`
--
ALTER TABLE `pedido_lineas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;

--
-- AUTO_INCREMENT de la tabla `proveedors`
--
ALTER TABLE `proveedors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`proveedorId`) REFERENCES `proveedors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `articulos_ibfk_2` FOREIGN KEY (`empresaId`) REFERENCES `empresas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`empresaId`) REFERENCES `empresas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `comercials`
--
ALTER TABLE `comercials`
  ADD CONSTRAINT `comercials_ibfk_1` FOREIGN KEY (`empresaId`) REFERENCES `empresas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `comercials_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD CONSTRAINT `empresas_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `gastos`
--
ALTER TABLE `gastos`
  ADD CONSTRAINT `gastos_ibfk_1` FOREIGN KEY (`comercialId`) REFERENCES `comercials` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`comercialId`) REFERENCES `comercials` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`clienteId`) REFERENCES `clientes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedido_lineas`
--
ALTER TABLE `pedido_lineas`
  ADD CONSTRAINT `pedido_lineas_ibfk_1` FOREIGN KEY (`pedidoId`) REFERENCES `pedidos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_lineas_ibfk_2` FOREIGN KEY (`articuloId`) REFERENCES `articulos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
