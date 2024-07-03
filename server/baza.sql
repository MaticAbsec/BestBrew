DROP VIEW IF EXISTS seznami;
DROP TABLE IF EXISTS priljubljeno_pivo;
DROP TABLE IF EXISTS seznam_piva;
DROP TABLE IF EXISTS pivo;
DROP TABLE IF EXISTS pivovarna;
DROP TABLE IF EXISTS uporabnik;



CREATE TABLE pivo (
	idPivo serial PRIMARY KEY NOT NULL,
    tk_pivovarna INT,
    naziv VARCHAR(45),
    alkohol VARCHAR(45),
    vrsta VARCHAR(45),
    pena INT,
    okus INT,
    vonj INT,
    crtna_koda BIGINT,
    imgurl VARCHAR(256)
);

CREATE TABLE uporabnik (
	idUporabnik serial PRIMARY KEY NOT NULL,
    ime VARCHAR(100),
    priimek VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    slika VARCHAR(256)
);


CREATE TABLE pivovarna (
	idPivovarna serial PRIMARY KEY NOT NULL,
    naziv_pivovarne VARCHAR(100),
    x_koordinata NUMERIC(5,2),
    y_koordinata NUMERIC(5,2)
);

CREATE TABLE seznam_piva (
	idSeznam_piva serial PRIMARY KEY NOT NULL,
    tk_uporabnik INT NOT NULL,
    naziv VARCHAR(100)
);

CREATE TABLE priljubljeno_pivo (
	idPriljubljena_piva serial PRIMARY KEY NOT NULL,
    tk_pivo INT NOT NULL,
    tk_seznam_piva INT NOT NULL,
    ocena int 
);

ALTER TABLE seznam_piva ADD CONSTRAINT tk_seznamPiva_uporabnik FOREIGN KEY (tk_uporabnik) REFERENCES uporabnik(idUporabnik) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE priljubljeno_pivo ADD CONSTRAINT tk_priljubljenoPivo_pivo FOREIGN KEY (tk_pivo) REFERENCES pivo(idPivo) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE priljubljeno_pivo ADD CONSTRAINT tk_priljubljenoPivo_seznamPiva FOREIGN KEY (tk_seznam_piva) REFERENCES seznam_piva(idSeznam_piva) ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE pivo ADD CONSTRAINT tk_pivo_pivovarna FOREIGN KEY (tk_pivovarna) REFERENCES pivovarna(idPivovarna) ON DELETE CASCADE ON UPDATE NO ACTION;


INSERT INTO uporabnik (ime, priimek, email, slika)
VALUES  ('Matic', 'Absec', 'matic.scott60@gmail.com', 'slika1'),
        ('David', 'Golež', 'golezdavid@gmail.com', 'slika2'),
        ('Nik', 'Kac', 'nikkac123@gmail.com', 'slika3'),
        ('Urban', 'Vižintin', 'urbi.vizintin@gmail.com', 'slika4'),
        ('Saša', 'Lendero', 'sasa.lendero@gmail.com', 'slika5'),
        ('Robert', 'Pešut', 'robert.pesut@gmail.com', 'slika6'),
        ('Tomaž', 'Mihelič', 'tomaz.mihelic@gmail.com', 'slika7'),
        ('Jan', 'Plestenjak', 'jan.plestenjak@gmail.com', 'slika8'),
        ('Stevie', 'Wonder', 'stevie.wonder@gmail.com', 'slika9'),
        ('Fredi', 'Miler', 'fredi.miler@gmail.com', 'slika10');

INSERT INTO pivovarna (naziv_pivovarne, x_koordinata, y_koordinata)
VALUES  ('Union', 46.06004, 14.49846),
        ('Heineken', 52.35915, 4.89175),
        ('Laško', 46.16227, 15.23878),
        ('Staropramen', 50.06850, 14.40663),
        ('Carlsberg', 55.66705, 12.52858),
        ('Guinness', 53.34357, -6.28704),
        ('Green Golden Brewing', 46.2662, 15.1149);

INSERT INTO seznam_piva (tk_uporabnik, naziv)
VALUES  (1, 'Lepa piva'),
        (1, 'Grda piva'),
        (2, 'drink beer dont be Queer'),
        (3, 'Naj piva'),
        (4, 'Moji top piri'),
        (5, 'Piri da se ga odpipa'),
        (6, 'Piri te k te vedno pomiri'),
        (7, 'Pivce za živce'),
        (8, 'Pivo kul'),
        (9, 'Beerpong'),
        (10, 'Nice beer');

INSERT INTO pivo (tk_pivovarna, naziv, alkohol, vrsta, pena, okus, vonj, crtna_koda, imgurl)
VALUES  (1, 'Union Nefiltrirano', 'alkoholno', 'nefiltrirano', 3, 3, 4, 87267, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/549175/dt_sub.jpg'),
        (1, 'Union brezalkoholno', 'brezalkoholno', 'svetlo', 2, 2, 3, 83782, 'https://cdn.shopify.com/s/files/1/0079/3211/7059/products/PU2020-BA-05-820x820.jpg?v=1614775072'),
        (3, 'Zlatorog', 'alkoholno', 'svetlo', 3, 5, 3, 52938, 'https://cdn.shopify.com/s/files/1/0079/3211/7059/products/820x820_lasko-zlatorog-plc-05L_ba487cf5-7362-40a7-aca6-83afbcd25d43.jpg?v=1638281599'),
        (2, 'Heineken', 'alkoholno', 'svetlo', 4, 5, 4, 30293, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/600595/mb_sub.jpg'),
        (4, 'Staropramen', 'alkoholno', 'svetlo', 3, 4, 4, 63948, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/549617/mb_sub.jpg'),
        (5, 'Carlsberg', 'alkoholno', 'svetlo', 4, 4, 3, 42938, 'https://www.gourmetencasa-tcm.com/15378-large_default/carlsberg-33cl.jpg'),
        (6, 'Guinness', 'alkoholno', 'temno', 4, 3, 2, 18349, 'https://produits.bienmanger.com/38799-0w600h600_Guinness_Foreign_Extra_Stout_From_Togo.jpg'),
        (3, 'Ipa pivo', 'alkoholno', 'ipa', 3, 4, 5, 51829, 'https://cdn.shopify.com/s/files/1/0079/3211/7059/products/Lasko_IPA_plocevinka_0.5L_brez_kapljic.png?v=1638281758'),
        (3, 'Zlatorog temno', 'alkoholno', 'temno', 5, 3, 3, 58293, 'https://cdn.shopify.com/s/files/1/0079/3211/7059/products/lasko-zlatorog-temno-plc-05L.jpg?v=1638281723'),
        (1, 'Union', 'alkoholno', 'svetlo', 4, 4, 3, 89320, 'https://cdn.shopify.com/s/files/1/0079/3211/7059/products/lasko-zlatorog-temno-plc-05L.jpg?v=1638281723'),
        (1, 'Radler grenivka', 'alkoholno', 'radler', 2, 3, 3, 84410, 'https://cdn.shopify.com/s/files/1/0079/3211/7059/products/UR-GRENIVKA-PLC-05-820px_c1d51ddf-04d3-4afb-8fd4-427712bea595.jpg?v=1599559427'),
        (1, 'Smile', 'alkoholno', 'svetlo', 1, 3, 4, 82304, 'https://union-experience.si/img/d6fbab42-6ab7-41dc-a8cd-61edeea84873/product-smile-big.png?fm=jpg&q=100&fit=max&crop=450%2C793%2C0%2C0'),
        (3, 'Temni malt', 'brezalkoholno', 'malt', 1, 2, 4, 52938, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/582019/dt_zoom.jpg'),
        (3, 'Pšenično pivo', 'alkoholno', 'pšenično', 3, 3, 3, 52039, 'https://images.squarespace-cdn.com/content/v1/5252ad20e4b0b7fca75878d3/1381909056063-APEJTTAKMQY9YLN297AC/psenicno.jpg?format=1000w'),
        (3, 'Golding', 'alkoholno', 'svetlo', 3, 5, 4, 56293, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/566797/dt_zoom.jpg'),
        (3, 'Zlatorog 0.0', 'brezalkoholno', 'svetlo', 2, 3, 2, 59321, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/582097/tb_sub.jpg'),
        (6, 'Guinness', 'alkoholno', 'temno', 4, 3, 2, 18349, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/32213/dt_zoom.jpg'),
        (3, 'Ipa pivo', 'alkoholno', 'ipa', 3, 4, 5, 51829, 'https://cdn.shopify.com/s/files/1/0079/3211/7059/products/Lasko_IPA_plocevinka_0.5L_brez_kapljic.png?v=1638281758'),
        (3, 'Zlatorog temno', 'alkoholno', 'temno', 5, 3, 3, 58293, 'https://cdn.shopify.com/s/files/1/0079/3211/7059/products/lasko-zlatorog-temno-plc-05L.jpg?v=1638281723'),
        (1, 'Union', 'alkoholno', 'svetlo', 4, 4, 3, 89320, 'https://cdn.shopify.com/s/files/1/0079/3211/7059/products/lasko-zlatorog-temno-plc-05L.jpg?v=1638281723'),
        (1, 'Radler grenivka', 'alkoholno', 'radler', 2, 3, 3, 84417, 'https://cdn.shopify.com/s/files/1/0079/3211/7059/products/UR-GRENIVKA-PLC-05-820px_c1d51ddf-04d3-4afb-8fd4-427712bea595.jpg?v=1599559427'),
        (1, 'Smile', 'alkoholno', 'svetlo', 1, 3, 4, 82304, 'https://union-experience.si/img/d6fbab42-6ab7-41dc-a8cd-61edeea84873/product-smile-big.png?fm=jpg&q=100&fit=max&crop=450%2C793%2C0%2C0'),
        (3, 'Temni malt', 'brezalkoholno', 'malt', 1, 2, 4, 52938, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/582019/dt_zoom.jpg'),
        (3, 'Pšenično pivo', 'alkoholno', 'pšenično', 3, 3, 3, 52039, 'https://images.squarespace-cdn.com/content/v1/5252ad20e4b0b7fca75878d3/1381909056063-APEJTTAKMQY9YLN297AC/psenicno.jpg?format=1000w'),
        (3, 'Golding', 'alkoholno', 'svetlo', 3, 5, 4, 56293, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/566797/dt_zoom.jpg'),
        (3, 'Zlatorog 0.0', 'brezalkoholno', 'svetlo', 2, 3, 2, 59321, 'https://cdn.shopify.com/s/files/1/0079/3211/7059/products/820x820_LASKO_ZLATOROG-0.0_0_5L_plocevinka_BREZ-KAPLJIC-min_d2f5824d-2dde-49b4-a0c7-eedeb8f544de.jpg?v=1638281695'),
        (5, 'Carlsberg 0.0', 'brezalkoholno', 'svetlo', 2, 4, 3, 41928, 'https://aqgroupeu.com/wp-content/uploads/2021/07/calsberg-alcohol-free.png'),
        (5, '1664 Bio Non Filtrée', 'alkoholno', 'nefiltrirano', 4, 3, 4, 41829, 'https://cf.degustabox.com/fr/public/images/1595322454_10_-_1664_-_Bio_non_filtre.png'),
        (4, 'Staropramen Dark', 'alkoholno', 'temno', 5, 3, 4, 69283, 'https://img2.zakaz.ua/20180829.1535553885.ad72436478c_2018-08-29_Tatiana/20180829.1535553885.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg'),
        (4, 'Staropramen Premium', 'alkoholno', 'svetlo', 3, 5, 4, 63293, 'https://thumbs.dreamstime.com/b/bottle-staropramen-premium-beer-bucharest-romania-august-name-means-old-spring-czech-refers-to-crisp-balanced-rich-121471420.jpg'),
        (4, 'Staropramen nefiltrirano', 'alkoholno', 'nefiltrirano', 4, 3, 4, 63534, 'https://online.idea.rs/images/products/456/456000141_1l.jpg?1608909426'),
        (6, 'Guinness Draught', 'alkoholno', 'temno', 3, 4, 5, 19238, 'https://produits.bienmanger.com/34661-0w470h470_Guinness_Draught_Irish_Beer.jpg'),
        (6, 'Guinness Foreign Extra Scout', 'alkoholno', 'temno', 4, 3, 4, 17383, 'https://produits.bienmanger.com/38799-0w470h470_Guinness_Foreign_Extra_Stout_From_Togo.jpg'),
        (6, 'Nitro IPA', 'alkoholno', 'ipa', 3, 4, 5, 19348, 'https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2015/09/21141849/Guinness.NitroIPA.jpg'),
        (6, 'Blond American Lager', 'alkoholno', 'svetlo', 3, 5, 4, 12946, 'https://www.wine-searcher.com/images/labels/12/08/10641208.jpg'),
        (6, 'Hop House 13 Lager', 'alkoholno', 'svetlo', 4, 4, 3, 18364, 'https://www.merit.si/datoteke/artikli/1074/velika_1592907459_7145.jpg'),
        (6, 'Golden Ale', 'alkoholno', 'svetlo', 3, 5, 4, 14832, 'https://produits.bienmanger.com/34657-0w600h600_Guinness_Golden_Ale_Irish_Beer.jpg'),
        (7, 'Rocket Queen', 'alkoholno', 'ipa', 4, 4, 3, 28447, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/555302/dt_zoom.jpg'),
        (7, 'Fear and Loathing in Belgrade', 'alkoholno', 'ipa', 3, 3, 5, 29384, 'https://www.greengoldbrewing.com/wp-content/uploads/2021/11/Elements-copy-04.png'),
        (7, 'Dragon Slayer', 'alkoholno', 'ipa', 3, 4, 5, 22837, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/594694/dt_sub.jpg'),
        (7, 'Emergency Landing', 'alkoholno', 'neipa', 4, 3, 5, 21928, 'https://image-cache.beerizer.com/SM6cjr1WmHiaZlHAl2zhxhWrGpM=/trim/fit-in/400x400/beer-images.beerizer.com%2Fraw%2F48%2F19%2F192601.jpg'),
        (7, 'Rocket Queen', 'alkoholno', 'ipa', 4, 4, 3, 28447, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/555302/dt_zoom.jpg'),
        (7, 'Drargon Slayer', 'alkoholno', 'ipa', 3, 4, 5, 22837, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/594694/dt_sub.jpg'),
        (7, 'Emergency Landing', 'alkoholno', 'neipa', 4, 3, 5, 21928, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/611679/dt_sub.jpg'),
        (7, 'Cashmere', 'alkoholno', 'neipa', 3, 4, 2, 21239, 'https://cdn1.interspar.at//cachableservlets/articleImage.dam/si/585838/dt_sub1.jpg'),
        (7, 'Sultans of Hops', 'alkoholno', 'ipa', 4, 3, 5, 23948, 'https://www.greengoldbrewing.com/wp-content/uploads/2022/01/sultans-1100x1100-2.png'),
        (7, 'Forbidden fruit', 'alkoholno', 'svetlo', 3, 4, 4, 29398, 'https://cdn.webshopapp.com/shops/65337/files/52993236/forbidden-fruit.jpg'),
        (7, 'Komb4jn', 'alkoholno', 'svetlo', 3, 3, 4, 27368, 'https://cdn1.interspar.at/cachableservlets/articleImage.dam/si/555182/dt_zoom.jpg'),
        (7, 'Papagena', 'alkoholno', 'ipa', 5, 2, 3, 28347, 'https://www.greengoldbrewing.com/wp-content/uploads/2021/11/papagena-1100x1100-1.png'),
        (7, 'Oil Warz', 'alkoholno', 'temno', 5, 3, 3, 26384, 'https://kupilokalno.si/wp-content/uploads/2020/04/oil_warz-600x600-1.png'),
        (7, 'Franci', 'alkoholno', 'svetlo', 4, 4, 3, 28464, 'https://1.bp.blogspot.com/-B9dAZfmHkKQ/W8M8vxsWxEI/AAAAAAAALbA/uzIQZA3AHHsqAqqv-sIQ9TCtil7FNXfLgCLcBGAs/s1600/Green%2BGold%2BFranci.JPG');


INSERT INTO priljubljeno_pivo (tk_pivo, tk_seznam_piva, ocena)
VALUES  (2, 1,1),
        (34, 1,3),
        (21, 1,4),
        (44, 2,2),
        (16, 2,1),
        (5, 2,5),
        (33, 3,4),
        (10, 3,2),
        (27, 3,4),
        (48, 8,3),
        (3, 2,4),
        (25, 6,1),
        (30, 4,4),
        (9, 3,5),
        (11, 10,4),
        (25, 7,2),
        (41, 5,4),
        (6, 8,1),
        (38, 2,2),
        (24, 4,1),
        (17, 9,4),
        (4, 1,2),
        (27, 5,5),
        (1, 3,4),
        (49, 7,2),
        (36, 8,4),
        (20, 10,1),
        (10, 5,3),
        (17, 2,4),
        (29, 3,1),
        (10, 4,4),
        (38, 1,5),
        (27, 6,4),
        (1, 3,3);