-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Máj 05. 12:18
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `rendelo`
--
CREATE DATABASE IF NOT EXISTS `rendelo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `rendelo`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `allatok`
--

DROP TABLE IF EXISTS `allatok`;
CREATE TABLE `allatok` (
  `id` int(11) NOT NULL,
  `gda_id` int(11) NOT NULL,
  `nev` varchar(255) DEFAULT NULL,
  `faj` varchar(255) NOT NULL,
  `kg` decimal(10,0) NOT NULL,
  `nem` varchar(255) NOT NULL,
  `kor` varchar(255) NOT NULL,
  `utolsovizsgalat` date DEFAULT NULL,
  `megjegyzes` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'aktiv'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `allatok`
--

INSERT INTO `allatok` (`id`, `gda_id`, `nev`, `faj`, `kg`, `nem`, `kor`, `utolsovizsgalat`, `megjegyzes`, `status`) VALUES
(1, 2, 'Kutya', 'Cica', 45, 'Hím', '2', '2020-12-12', 'Jó kutzya', 'aktiv'),
(2, 1, 'Ubul', 'kutya', 5, 'hím', '6 év', '2024-01-01', 'Harapós', 'aktiv'),
(3, 3, 'Kormi', 'macska', 5, 'hím', '5 év', '2023-05-16', NULL, 'aktiv'),
(4, 4, 'Maja', 'kutya', 2, 'nőstény', '1 év', '2023-05-10', 'Epilepszia', 'aktiv'),
(5, 5, 'Picur', 'nyúl', 1, 'nőstény', '8 hónap', '2023-08-04', NULL, 'aktiv');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `arak`
--

DROP TABLE IF EXISTS `arak`;
CREATE TABLE `arak` (
  `id` int(11) NOT NULL,
  `kzs_id` int(11) NOT NULL,
  `ar` int(20) NOT NULL,
  `kezdetidatum` date NOT NULL,
  `vegdatum` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `arak`
--

INSERT INTO `arak` (`id`, `kzs_id`, `ar`, `kezdetidatum`, `vegdatum`) VALUES
(1, 1, 10000, '2024-01-01', '2024-12-31'),
(2, 2, 5000, '2024-01-01', '2024-12-31'),
(3, 3, 15000, '2024-01-01', '2024-12-31'),
(4, 4, 5000, '2024-01-01', '2024-12-31'),
(5, 5, 10000, '2024-01-01', '2024-12-31'),
(6, 6, 6000, '2024-01-01', '2024-12-31'),
(7, 7, 5000, '2024-01-01', '2024-12-31'),
(8, 8, 5000, '2024-01-01', '2024-12-31'),
(9, 9, 5000, '2024-01-01', '2024-12-31'),
(10, 10, 5000, '2024-01-01', '2024-12-31'),
(11, 11, 8000, '2024-01-01', '2024-12-31'),
(12, 12, 5000, '2024-01-01', '2024-12-31'),
(13, 13, 12000, '2024-01-01', '2024-12-31'),
(14, 14, 12000, '2024-01-01', '2024-12-31'),
(15, 15, 10000, '2024-01-01', '2024-12-31'),
(16, 16, 15000, '2024-01-01', '2024-12-31'),
(17, 17, 10000, '2024-01-01', '2024-12-31'),
(18, 18, 10000, '2024-01-01', '2024-12-31'),
(19, 19, 12000, '2024-01-01', '2024-12-31'),
(20, 20, 12000, '2024-01-01', '2024-12-31'),
(21, 21, 12000, '2024-01-01', '2024-12-31'),
(22, 22, 14500, '2024-01-01', '2024-12-31'),
(23, 23, 14500, '2024-01-01', '2024-12-31'),
(24, 24, 19000, '2024-01-01', '2024-12-31'),
(25, 25, 15000, '2024-01-01', '2024-12-31'),
(26, 26, 18000, '2024-01-01', '2024-12-31'),
(27, 27, 18000, '2024-01-01', '2024-12-31'),
(28, 28, 20000, '2024-01-01', '2024-12-31'),
(29, 29, 25000, '2024-01-01', '2024-12-31'),
(30, 30, 30000, '2024-01-01', '2024-12-31'),
(31, 31, 2500, '2024-01-01', '2024-12-31'),
(32, 32, 14500, '2024-01-01', '2024-12-31'),
(33, 33, 29500, '2024-01-01', '2024-12-31'),
(34, 34, 39000, '2024-01-01', '2024-12-31'),
(35, 35, 51000, '2024-01-01', '2024-12-31'),
(36, 36, 66000, '2024-01-01', '2024-12-31'),
(37, 37, 49000, '2024-01-01', '2024-12-31'),
(38, 38, 60000, '2024-01-01', '2024-12-31'),
(39, 39, 76000, '2024-01-01', '2024-12-31'),
(40, 40, 9500, '2024-01-01', '2024-12-31'),
(41, 41, 30000, '2024-01-01', '2024-12-31'),
(42, 42, 49000, '2024-01-01', '2024-12-31'),
(43, 43, 73000, '2024-01-01', '2024-12-31'),
(44, 44, 17000, '2024-01-01', '2024-12-31'),
(45, 45, 5000, '2024-01-01', '2024-12-31'),
(46, 46, 8500, '2024-01-01', '2024-12-31'),
(47, 47, 6000, '2024-01-01', '2024-12-31'),
(48, 48, 6000, '2024-01-01', '2024-12-31'),
(49, 49, 4800, '2024-01-01', '2024-12-31'),
(50, 50, 4500, '2024-01-01', '2024-12-31');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felirt_kezelesek`
--

DROP TABLE IF EXISTS `felirt_kezelesek`;
CREATE TABLE `felirt_kezelesek` (
  `vgt_id` int(11) NOT NULL,
  `kzs_id` int(11) NOT NULL,
  `datum` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `felirt_kezelesek`
--

INSERT INTO `felirt_kezelesek` (`vgt_id`, `kzs_id`, `datum`) VALUES
(1, 1, '2024-01-26'),
(2, 2, '2024-01-26'),
(3, 3, '2024-01-26'),
(3, 4, '2024-01-26'),
(4, 21, '2024-01-30');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gazdak`
--

DROP TABLE IF EXISTS `gazdak`;
CREATE TABLE `gazdak` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `telefonszam` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `iranyitoszam` int(10) NOT NULL,
  `helysegnev` varchar(255) NOT NULL,
  `teruletnev` varchar(255) NOT NULL,
  `terulettipus` varchar(255) NOT NULL,
  `hazszam` int(10) NOT NULL,
  `adoszam` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'aktiv'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `gazdak`
--

INSERT INTO `gazdak` (`id`, `nev`, `telefonszam`, `email`, `iranyitoszam`, `helysegnev`, `teruletnev`, `terulettipus`, `hazszam`, `adoszam`, `status`) VALUES
(1, 'Belacskam', '65432132', 'gyurika@gyurika.hu', 5600, 'Csaba', 'utca', 'Varos', 5600, '6543213215', 'aktiv'),
(2, 'Nagy Juditka', '36207643987', 'nagyjudit6453@gmail.com', 5600, 'Békéscsaba', 'Kossuth Lajos', 'utca', 2, '84521073926', 'aktiv'),
(3, 'Kovácsiuhguh', '36307642341', 'kovacsanna34@gmail.com', 5630, 'Békés', 'Csabai', 'út', 50, '84765298101', 'aktiv'),
(4, 'Zsombok Anikócsak', '36301230876', 'zsombokaniko2310@gmail.com', 5630, 'Békés', 'Gárdonyi Géza', 'utca', 80, '81260490103', 'aktiv'),
(5, 'Kovács Péter', '36202309821', 'kovacs.peter98@gmail.com', 5600, 'Békéscsaba', 'Jácint', 'sor', 56, '86517012801', 'aktiv'),
(6, 'Kiss Béla ', '062053528786', 'tibike@gmail.com', 5600, 'Békéscsaba', 'Ligeti', 'Város', 7, '3216548', 'aktiv'),
(30, 'Kiss Mihály', '0632216541', 'jasjdoasijdpasojpao', 5600, 'Békéscsaba', 'guasdhu', 'oiahsdoiashd', 45, '524561321', 'aktiv');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kezelesek`
--

DROP TABLE IF EXISTS `kezelesek`;
CREATE TABLE `kezelesek` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `kezelesek`
--

INSERT INTO `kezelesek` (`id`, `nev`) VALUES
(1, 'Gipszelés'),
(2, 'Seb kezelés'),
(3, 'Elhalt testrész eltávolítás'),
(4, 'Varratszedés'),
(5, 'Tanácsadás'),
(6, 'Kontroll vizsgálat'),
(7, 'Külső hallójárat tisztítás'),
(8, 'Infúzió, vénakanül'),
(9, 'Fedőkötés'),
(10, 'Bódítás'),
(11, 'Vérvétel'),
(12, 'Egyszerű gyorsteszt'),
(13, 'Szívféreg gyorsteszt'),
(14, 'FeLV,FIV gyorsteszt'),
(15, 'Mikrochip behelyezés'),
(16, 'Állatútlevél kiállítás'),
(17, 'Veszettség elleni oltás'),
(18, 'Parvovírusos bélgyulladás elleni oltás'),
(19, 'Puppy DP oltás'),
(20, 'Kutya kombinált védőoltás'),
(21, 'Macska kombinált védőoltás'),
(22, 'Kennelköhögés elleni védőoltás'),
(23, 'Macska leukózis elleni védőoltás'),
(24, 'Gombásság elleni védőoltás'),
(25, 'Veszettség+kombinált védőoltás'),
(26, 'Eutanázia (macska)'),
(27, 'Eutanázia (kutya 10kg-ig)'),
(28, 'Eutanázia (kutya 10-20kg)'),
(29, 'Eutanázia (kutya 20-40kg)'),
(30, 'Eutanázia (kutya 40kg felett)'),
(31, 'Receptírás'),
(32, 'Ivartalanítás (kandúr macska)'),
(33, 'Ivartalanítás (Nőstény macska)'),
(34, 'Ivartalanítás (Kan kutya 10 kg-ig)'),
(35, 'Ivartalanítás (Kan kutya 10-20kg)'),
(36, 'Ivartalanítás (Kan kutya 20 kg felett)'),
(37, 'Ivartalanítás (Szuka kutya 10kg-ig)'),
(38, 'Ivartalanítás (Szuka kutya 10-20kg)'),
(39, 'Ivartalanítás (Szuka kutya 20kg felett)'),
(40, 'Daganat eltávolítás elektrokauterrel'),
(41, 'Daganat eltávolítás sebészeti metszéssel'),
(42, 'Lépeltávolítás macska'),
(43, 'Lépeltávolítás kutya'),
(44, 'Nyúl myxomatosis, RHD elleni védőoltás'),
(45, 'Vizelet vizsgálat'),
(46, 'Vizelet+üledék vizsgálat'),
(47, 'Bűzmirigy kiürítése'),
(48, 'Kutya,macska karomvágás'),
(49, 'Rágcsáló karomvágás'),
(50, 'Rágcsáló fogvágás');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orvosok`
--

DROP TABLE IF EXISTS `orvosok`;
CREATE TABLE `orvosok` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `telefonszam` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `iranyitoszam` int(10) NOT NULL,
  `helysegnev` varchar(255) NOT NULL,
  `teruletnev` varchar(255) NOT NULL,
  `terulettipus` varchar(255) NOT NULL,
  `hazszam` int(10) NOT NULL,
  `adoszam` varchar(255) NOT NULL,
  `azonositoszam` varchar(255) NOT NULL,
  `felhasznalonev` varchar(255) NOT NULL,
  `jelszo` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'aktiv'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `orvosok`
--

INSERT INTO `orvosok` (`id`, `nev`, `telefonszam`, `email`, `iranyitoszam`, `helysegnev`, `teruletnev`, `terulettipus`, `hazszam`, `adoszam`, `azonositoszam`, `felhasznalonev`, `jelszo`, `status`) VALUES
(1, 'Dr. Kiss Péterke', '36703458762', 'drkisspeter3452@gmail.com', 5600, 'Békéscsaba', 'Szőlő', 'utca', 2, '87629818720', '73543', 'drkisspeter', '7tHifiTV', 'aktiv'),
(2, 'Belacskam', '65432132', 'jddjfoj@oisdhf.com', 5600, 'Csaba', 'utca', 'Varos', 5600, '6543213215', '65321312', 'rivkuser.erxycf', 'LmHc5Ma', 'aktiv'),
(3, 'Dr. Kutasi Kitti', '36206239852', 'drkutasikitti55@gmail.com', 5600, 'Békéscsaba', 'Ady Endre', 'utca', 10, '82613452910', '74356', 'drkutasikitti', 'MY8CWcxg', 'aktiv'),
(4, 'Dr. Kőszegi Dórikaaa', '36703248567', 'drkoszegidora2310@gmail.com', 5600, 'Békéscsaba', 'Kölcsey Ferenc', 'utca', 40, '87210345061', '56521', 'drkoszegidora', 'BK0vRdfH', 'aktiv'),
(5, 'Dr. Gergely János', '36209812165', 'drgergelyjanos101@gmail.com', 6545, 'Békéscsaba', 'Hunyadi', 'utca', 14, '87438153191', '52711', 'drgergelyjanos', 'cV7FVhJk', 'aktiv');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `vizsgalatok`
--

DROP TABLE IF EXISTS `vizsgalatok`;
CREATE TABLE `vizsgalatok` (
  `id` int(11) NOT NULL,
  `alt_id` int(11) NOT NULL,
  `ovs_id` int(11) NOT NULL,
  `beviteloka` varchar(255) NOT NULL,
  `megjegyzes` varchar(255) NOT NULL,
  `kovvizsgalat` date DEFAULT NULL,
  `idotartam` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `vizsgalatok`
--

INSERT INTO `vizsgalatok` (`id`, `alt_id`, `ovs_id`, `beviteloka`, `megjegyzes`, `kovvizsgalat`, `idotartam`) VALUES
(1, 1, 1, 'Lábtörés gyanúja', 'A cicáról röngten felvétel készült, ezt követően begipszeltük. Calmex fájdalom csillapítót kapott szájon át, melyből a gazdának is adtunk 3 napra elegendőt otthoni kezelésre a cicának.', '2024-02-22', 40),
(2, 2, 2, 'Harapásból eredő seb', 'A kutya sebét a nyakánál lekezeltük Canosept-el, majd kitisztítottuk, ezek után pedig bekötöztük. A seb nincs elfertőződve. A kutya védőgallért kapott amíg a seb be nem gyógyul.', NULL, 20),
(3, 3, 3, 'Fül üszkösödése', 'A cica füle üszkösödésnek indult. Az elhalt részt levágtuk, majd összevartuk. A cicát már csak varratszedésre kell visszahozni. Védőgallért adtunk.', '2024-03-01', 50),
(4, 4, 4, 'Oltás', 'A kutyát oltásra hozta a gazdája. Megkapta a veszettség elleni kombinált oltást.', NULL, 10),
(5, 5, 5, 'RHD oltás', 'A nyuszit oltásra hozta a gazdája. Myxomatosis, RHD elleni védőoltást megkapta', NULL, 10);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `allatok`
--
ALTER TABLE `allatok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gda_id` (`gda_id`);

--
-- A tábla indexei `arak`
--
ALTER TABLE `arak`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kzs_id` (`kzs_id`);

--
-- A tábla indexei `felirt_kezelesek`
--
ALTER TABLE `felirt_kezelesek`
  ADD PRIMARY KEY (`vgt_id`,`kzs_id`,`datum`),
  ADD KEY `kzs_id` (`kzs_id`);

--
-- A tábla indexei `gazdak`
--
ALTER TABLE `gazdak`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `kezelesek`
--
ALTER TABLE `kezelesek`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `orvosok`
--
ALTER TABLE `orvosok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `vizsgalatok`
--
ALTER TABLE `vizsgalatok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alt_id` (`alt_id`),
  ADD KEY `ovs_id` (`ovs_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `allatok`
--
ALTER TABLE `allatok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT a táblához `gazdak`
--
ALTER TABLE `gazdak`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT a táblához `orvosok`
--
ALTER TABLE `orvosok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `vizsgalatok`
--
ALTER TABLE `vizsgalatok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `allatok`
--
ALTER TABLE `allatok`
  ADD CONSTRAINT `allatok_ibfk_1` FOREIGN KEY (`gda_id`) REFERENCES `gazdak` (`id`);

--
-- Megkötések a táblához `arak`
--
ALTER TABLE `arak`
  ADD CONSTRAINT `arak_ibfk_1` FOREIGN KEY (`kzs_id`) REFERENCES `kezelesek` (`id`);

--
-- Megkötések a táblához `felirt_kezelesek`
--
ALTER TABLE `felirt_kezelesek`
  ADD CONSTRAINT `felirt_kezelesek_ibfk_1` FOREIGN KEY (`vgt_id`) REFERENCES `vizsgalatok` (`id`),
  ADD CONSTRAINT `felirt_kezelesek_ibfk_2` FOREIGN KEY (`kzs_id`) REFERENCES `kezelesek` (`id`);

--
-- Megkötések a táblához `vizsgalatok`
--
ALTER TABLE `vizsgalatok`
  ADD CONSTRAINT `vizsgalatok_ibfk_1` FOREIGN KEY (`alt_id`) REFERENCES `allatok` (`id`),
  ADD CONSTRAINT `vizsgalatok_ibfk_2` FOREIGN KEY (`ovs_id`) REFERENCES `orvosok` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
