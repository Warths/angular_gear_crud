import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/articleInterface';

@Component({
  selector: 'app-article-set',
  templateUrl: './article-set.component.html',
  styleUrls: ['./article-set.component.css']
})
export class ArticleSetComponent implements OnInit {
  @Input() category: string = ""
  articleList: Array<Article> = [
    {
    "name": "Stream Deck",
    "brand": "Elgato",
    "price": 149,
    "url": "https://www.amazon.fr/Elgato-Stream-Deck-Contr%C3%B4leur-Personnalisables/dp/B06W2KLM3S?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=stream+deck&qid=1632051191&qsid=259-8570599-5126307&sr=8-4&sres=B06W2KLM3S%2CB09738CV2G%2CB07RL8H55Z%2CB07DYRS1WH%2CB08JRJY6FG%2CB08F7RJYZV%2CB006A2Q81M%2CB08JTYSKM2%2CB077T9391Z%2CB017N5FP0E%2CB07MH2LV5K%2CB088P2KKHS%2CB076F2KM76%2CB0831HYKYL%2CB08Y613KGH%2CB08BG19T7K%2CB09CZ414S7%2CB08HMZ97HQ%2CB0837LKGL6%2CB082QHRZFW&srpt=STANDALONE_STREAMING_MEDIA_PLAYER&linkCode=ll1&tag=arths-21&linkId=6e4e0ee19b40c990b9ea471b821385b2&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://pbs.twimg.com/media/Dhh_qh4XkAACk_j?format=jpg&name=medium",
    "description": "Clavier programmable 15 touches (x2)",
    "keywords": "clavier keypad keyboard",
    "category": "stream"
    },
    {
    "name": "Stream Deck XL",
    "brand": "Elgato",
    "price": 249,
    "url": "https://www.amazon.fr/Corsair-Stream-Deck-Enti%C3%A8rement-Personnali-Sables/dp/B07RL8H55Z?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=stream+deck+XL&qid=1632051539&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExQkFWRUtFRUxSTVpJJmVuY3J5cHRlZElkPUExMDM5NzUwMUQ2NU5YMElCV1RJSCZlbmNyeXB0ZWRBZElkPUEwMTA3NzE5Mk5SWVNRR1FVSzY2OCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU%3D&linkCode=ll1&tag=arths-21&linkId=b647d18b09f991f757c7705ae476c9ca&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://cdn.mos.cms.futurecdn.net/kgwAqLDhS4fXWCYMmqcUZb-970-80.jpg.webp",
    "description": "Clavier programmable 32 touches",
    "keywords": "clavier keypad keyboard",
    "category": "stream"
    },
    {
    "name": "Alpha 5100",
    "brand": "Sony",
    "price": 499,
    "url": "https://www.amazon.fr/Sony-ILCE-5100B-Appareil-Num%C3%A9rique-Autofocus/dp/B00MTZI376?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=A5100&qid=1632052009&qsid=259-8570599-5126307&sr=8-13&sres=B00IE9XHE0%2CB07MWDP1VD%2CB00FWVM4RE%2CB08BS336P2%2CB010QVU5UM%2CB00Q2KEUFI%2CB00I9X2GT8%2CB07B33NSFK%2CB07B4R8QGM%2CB00I9X2KLW%2CB01H1NUOU4%2CB07X78L1LN%2CB00MTZI1WI%2CB01C672SZ4%2CB01BMAIEFE%2CB0822DF99T%2CB00KT69ZNI&srpt=CAMERA_DIGITAL&th=1&linkCode=ll1&tag=arths-21&linkId=f9ec6c7d50630953741774742c5f2ae9&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://img.bfmtv.com/c/1256/708/39d/6f781dba483cf4c56ccd6257987e3.jpg",
    "description": "Appareil photo reflex. Caméra principale avec objectif 16mm",
    "keywords": "camera appareil photo video webcam",
    "category": "stream"
    },
    {
    "name": "C920",
    "brand": "Logitech",
    "price": 59,
    "url": "https://www.amazon.fr/Sony-ILCE-5100B-Appareil-Num%C3%A9rique-Autofocus/dp/B00MTZI376?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=A5100&qid=1632052009&qsid=259-8570599-5126307&sr=8-13&sres=B00IE9XHE0%2CB07MWDP1VD%2CB00FWVM4RE%2CB08BS336P2%2CB010QVU5UM%2CB00Q2KEUFI%2CB00I9X2GT8%2CB07B33NSFK%2CB07B4R8QGM%2CB00I9X2KLW%2CB01H1NUOU4%2CB07X78L1LN%2CB00MTZI1WI%2CB01C672SZ4%2CB01BMAIEFE%2CB0822DF99T%2CB00KT69ZNI&srpt=CAMERA_DIGITAL&th=1&linkCode=ll1&tag=arths-21&linkId=f9ec6c7d50630953741774742c5f2ae9&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://pic.clubic.com/v1/images/1621728/raw?width=700&fit=max&hash=8cefa091024fcafd19fa44413de4f6db1941003e",
    "description": "Caméra d'appoint. Référence dans le streaming, mais mauvaise en fullscreen et au rendu des verts",
    "keywords": "camera appareil photo video webcam",
    "category": "stream"
    },
    {
    "name": "Kiyo",
    "brand": "Razer",
    "price": 89,
    "url": "https://www.amazon.fr/Razer-Kiyo-Diffusion-%C3%89clairage-Circulaire/dp/B076QK6489?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=kiyo&qid=1632052694&qsid=259-8570599-5126307&sr=8-5&sres=B076QK6489%2CB08PKBZ428%2CB07KYZCF6M%2CB07RXYG295%2CB07Y4QY4VK%2CB006A2Q81M%2CB00PADOYP4%2CB01L6L52K4%2CB08B64CHMZ%2CB06W2KLM3S%2CB01N5NYRES%2CB00CES5A60%2CB0899RJQ95%2CB09C87Q4NZ%2CB083SJRMB6%2CB08NVWN7G5%2CB09FLKJ7S2%2CB08NVF4G5G%2CB08CDD1PVM%2CB07GW6LZ6R&srpt=ELECTRONIC_DEVICE_SKIN&linkCode=ll1&tag=arths-21&linkId=4058f127d5be66183fa736850aff8822&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://global-img.gamergen.com/razer-kiyo-webcam-camera-test-gamergen-clint008-3_00CE013500957794.jpg",
    "description": "Caméra d'appoint. Bon piqué, mauvaise en faible luminosité",
    "keywords": "camera appareil photo video webcam",
    "category": "stream"
    },
    {
    "name": "CamLink 4K",
    "brand": "Elgato",
    "price": 99,
    "url": "https://www.amazon.fr/Elgato-20GAM9901-diffusion-enregistrement-cam%C3%A9scope/dp/B07K3FN5MR?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=cam+link+4k&qid=1632054139&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExS0cySlE1NDhWMkFIJmVuY3J5cHRlZElkPUEwMjQ0MzU3NThFQU9WR1FSTFNSJmVuY3J5cHRlZEFkSWQ9QTA3OTU1OTNIU1ZNM0VMMDFTNjUmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&linkCode=ll1&tag=arths-21&linkId=947037b02aa5d48423271783189962cd&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://www.warlegend.net/wp-content/uploads/Test-Cam-Link-4K-8-scaled.jpg",
    "description": "Carte d'acquisition HDMI, 1080p/60i ou 4k/30i",
    "keywords": "camera appareil photo video webcam capture carde carte acquisition",
    "category": "stream"
    },
    {
    "name": "Écran C24",
    "brand": "Samsung",
    "price": 135,
    "url": "https://www.amazon.fr/SAMSUNG-C24F396FHR-Ecran-Incurv%C3%A9-R%C3%A9solution/dp/B08WJG41B4?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=samsung+24&qid=1632076562&qsid=259-8570599-5126307&sr=8-3&sres=B08WJG41B4%2CB08SWGZKVB%2CB01BCF0006%2CB08SW5C9PF%2CB08MDD5Z19%2CB07Z57SW1K%2CB07ZRTKP6D%2CB08SWKSB2D%2CB01DMDKZTC%2CB08SW6P7CJ%2CB08SWLW1J8%2CB08XNLZMRC%2CB07PFJH2YX%2CB08KP2YK5S%2CB07Y8WBSP8%2CB08SW9T6F9%2CB083T2NH8P%2CB08KJB7JKV%2CB08KJG7JHM%2CB092991G49&srpt=MONITOR&linkCode=ll1&tag=arths-21&linkId=59b7044fba46636794fc3c0092adaad8&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://assets.fatllama.com/images/large/samsung--c24f396-full-hd-24-curved-led-monitor-26503686.jpeg",
    "description": "Ecran basique 24 pouces et incurvé. (x4)",
    "keywords": "ecran pc ordinateur moniteur",
    "category": "stream"
    },
    {
    "name": "Ornata Chroma V2",
    "brand": "Razer",
    "price": 79,
    "url": "https://www.amazon.fr/Razer-Ornata-Membrane-Mecha-m%C3%A9ca-membrane-R%C3%A9tro%C3%A9clairage/dp/B086TKDFSK?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=razer+ornata+chroma&qid=1632076708&qsid=259-8570599-5126307&sr=8-3&sres=B086TKDFSK%2CB086TKCM4T%2CB075LJMNVN%2CB01LZAHAR3%2CB07KYXBRKP%2CB08G56NC7D%2CB01NAWQYAU%2CB081QMWRQM%2CB08CHLRZ2B%2CB08P4XX518%2CB074GG1RQQ%2CB01N1SJ9IZ%2CB09332SH1S%2CB07RXWH4DJ%2CB01NAL5CUN%2CB087GP9WKQ%2CB07BB52HZV%2CB00BAOV3I8%2CB072MNBHH3%2CB07DS5195W&srpt=KEYBOARDS&linkCode=ll1&tag=arths-21&linkId=6bb94ee90cb2a629d305be00708b0a04&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://sm.ign.com/ign_fr/news/t/test-razer/test-razer-ornata-le-meilleur-de-deux-mondes_4q59.jpg",
    "description": "Un clavier hybride méca-membrane bruyant.",
    "keywords": "clavier keyboard pc ordinateur",
    "category": "stream"
    },
    {
    "name": "LanceHead Wireless",
    "brand": "Razer",
    "price": 99,
    "url": "https://www.amazon.fr/Razer-Lancehead-Wireless-Performance-Technologie/dp/B07NPZHT1H?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Lancehead&qid=1632077537&qsid=259-8570599-5126307&sr=8-1&sres=B07NPZHT1H%2CB08DJ51TL7%2CB0753GXF9R%2CB07BFJ6MQY%2CB086ZHFHH8%2CB07GD7ST5F%2CB07QD1FP24%2CB08CVT1PCV%2CB07BFGJFGP%2CB07Y8M4BCW%2CB074T3GH8Y%2CB08H54TTKX%2CB081QX9V2Y%2CB0834NP57W%2CB06XH15HD9%2CB07GS6ZB7T%2CB073JCKRWX%2CB073WGB8G6%2CB07D8VPBW5%2CB0756Z1XTW&srpt=INPUT_MOUSE&linkCode=ll1&tag=arths-21&linkId=a64d888e17ad85f2242a47a7488aa7cc&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://www.amazon.fr/images/S/aplus-media/vc/03faa282-3db2-4ba8-99b7-2a1faa3eacd7._CR0,0,1464,600_PT0_SX1464__.jpg",
    "description": "Souris ambidextre, Warths est gaucher !",
    "keywords": "souris mouse pc ordinateur",
    "category": "stream"
    },
    {
    "name": "i7 8700K",
    "brand": "Intel",
    "price": 369,
    "url": null,
    "is_affiliate": false,
    "img": "https://www.picclickimg.com/d/l400/pict/401657891096_/Intel-Core-i7-8700K-37-GHz.jpg",
    "description": "Un excellent 6c/12t processeur de 2017",
    "keywords": "cpu processeur microprocesseur processor ",
    "category": "stream"
    },
    {
    "name": "Axe FX 3 Mk2",
    "brand": "Fractal Audio Systems",
    "price": 2599,
    "url": "https://www.g66.eu/fr/products/fractal-audio/axe-fx-iii",
    "is_affiliate": false,
    "img": "https://guitar.com/wp-content/uploads/2018/07/29_11-1.jpg",
    "description": "Un DSP surpuissant pour vos oreilles ! Warths coupe le son amplifié de Rocksmith pour vous offrir la qualité du Axe FX III",
    "keywords": "guitare ampli DSP son audio",
    "category": "music"
    },
    {
    "name": "Realtone Cable",
    "brand": "Ubisoft",
    "price": 29,
    "url": "https://www.amazon.fr/C%C3%A2ble-Rocksmith-pour-connecter-guitare/dp/B007KGISK6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=real+tone&qid=1633466656&qsid=259-8570599-5126307&sr=8-10&sres=B00KDMX2E6%2CB00CMJ1DP8%2CB01KB23O90%2CB08Y6KGZYR%2CB01N90DABB%2CB07GW9DPM5%2CB07DL5LD4J%2CB00K9KLLWW%2CB08WH8JLY8%2CB007KGISK6%2CB081F14GB8%2CB000V7J82S%2CB08KT24SCT%2CB07KTWPNYK%2CB00KJGJPU6%2CB08WHYDBHC%2CB01JRS0KJQ%2CB08VCN6FX7%2CB0814YQG99%2CB07TYSY4RQ&linkCode=ll1&tag=arths-21&linkId=239b8fb3e0bd3f70ebf233b2cead0490&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://www.amazon.fr/images/I/71WaBnYiCCL._AC_SL1500_.jpg",
    "description": "Cable indispensable pour jouer à Rocksmith dans de bonne conditions",
    "keywords": "rocksmith",
    "category": "music"
    },
    {
    "name": "DiscoEasy 200",
    "brand": "Dagoma",
    "price": 299,
    "url": null,
    "is_affiliate": false,
    "img": "https://mrhightech.b-cdn.net/wp-content/uploads/2017/07/mht_Dagoma_DiscoEasy200_18.jpg",
    "description": "Une imprimante 3D utilisée pour fabriquer les dispositifs utilisés en stream (panneaux led, sliders...)",
    "keywords": "impression 3D making maker printer",
    "category": "making"
    },
    {
    "name": "CNC 3018",
    "brand": "Open Hardware",
    "price": 377,
    "url": "https://www.amazon.fr/prot%C3%A9g%C3%A9e-Yofuly-300x180x45mm-3018-Pro-dextension/dp/B07ZS9KYG1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=CNC+3018&qid=1633438074&sr=8-37&linkCode=ll1&tag=arths-21&linkId=c1069a1335d9b93ded22b78e05665e21&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://img.tttcdn.com/product/xy/2000/2000/p/gu1/E/1/E18947-1/E18947-1-1-0ee3-sv8p.jpg",
    "description": "Une CNC utilisée pour créer les différents circuits imprimés utilisé dans les équipements customs utilisés en stream (matrices de led, carte de contrôle des leds et sliders, smart-rack..)",
    "keywords": "graveur laser circuit imprimé PCB",
    "category": "making"
    },
    {
    "name": "Les Paul",
    "brand": "Gibson",
    "price": 2199,
    "url": "https://www.thomann.de/fr/gibson_les_paul_standard_60s_bb.htm?partner_id=38841",
    "is_affiliate": true,
    "img": "https://bdbo2.thomann.de/thumb/bdb3000/pics/bdbo/14952125.jpg",
    "description": "Standard 60s en finition Bourbon Burst. Guitare principale du stream, utilisée pour la majorité des musiques métal old school. Elle est accordée en E standard.",
    "keywords": "guitare",
    "category": "music"
    },
    {
    "name": "Fantomen",
    "brand": "Hägstrom",
    "price": 699,
    "url": "https://www.thomann.de/fr/hagstrom_fantomen_white.htm?partner_id=38841",
    "is_affiliate": true,
    "img": "https://cdn.shopify.com/s/files/1/0857/8274/products/IMG_E5358_bbcddd4f-ed04-4134-a64a-0787f51a53e0_1024x1024.jpg?v=1624979046",
    "description": "La guitare emblématique de Ghost ! Elle est utilisée pour des musiques accordées plus grave que la moyenne. Elle est accordée en D standard.",
    "keywords": "guitare ghost",
    "category": "music"
    },
    {
    "name": "Tele Deluxe",
    "brand": "Fender",
    "price": 1099,
    "url": null,
    "is_affiliate": false,
    "img": "https://cdn.ecommercedns.uk/files/2/229692/0/11416890/dsc07993.jpg",
    "description": "Une guitare utilisée par le guitariste des Foo Fighters ! C'est la première guitare haut-de-gamme de Warths. Elle est souvent accordée en Drop D ou E standard.",
    "keywords": "guitare foo fighters telecaster",
    "category": "music"
    },
    {
    "name": "Omen S-II",
    "brand": "Schecter",
    "price": 529,
    "url": "https://www.woodbrass.com/guitares-electriques-metal-moderne-schecter-s-ii-omen-extreme-black-cherry-p235383.html?gclid=CjwKCAjw7--KBhAMEiwAxfpkWBjLQ9lL0iEgM0X-sM-Xq1LW3MIVjhOgv0mkSwX-vREENiF5kjGQihoCMYsQAvD_BwE",
    "is_affiliate": false,
    "img": "https://www.schecterguitars.com/images/store/product/OMEN%20EXTREME%20S-II%20BCH%20LAYING%20FULL.jpg",
    "description": "Une guitare bien méchante spécialisée dans le métal. Convient bien pour Avenged Sevenfold, Killswitch Engage etc. Elle est accordée en Drop D.",
    "keywords": "guitare foo fighters",
    "category": "music"
    },
    {
    "name": "C6+",
    "brand": "Schecter",
    "price": 359,
    "url": "https://www.thomann.de/fr/schecter_c_6_plus_em.htm?partner_id=38841",
    "is_affiliate": true,
    "img": "https://images.reverb.com/image/upload/s--WziR_9gs--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1465930779/exydfytgr7eekn0hra4f.jpg",
    "description": "La guitare de Mepha ! Une dinguerie pour son prix. Convient bien aux trash métal.",
    "keywords": "guitare mepha",
    "category": "music"
    },
    {
    "name": "Fusion Pro II",
    "brand": "Harley Benton",
    "price": 398,
    "url": "https://www.thomann.de/fr/schecter_c_6_plus_em.htm?partner_id=38841",
    "is_affiliate": true,
    "img": "https://img.audiofanzine.com/img/fr/news/cover/55073.png?fm=webp&w=1200&s=fd28fd32e924acaa9321280b9b08036e",
    "description": "Une guitare paillette Harley Benton équipé de TOUT. Le lien affilié dirige vers le modèle Fusion III, qui comporte quelques modifications.",
    "keywords": "guitare cadeau noel paillette",
    "category": "music"
    },
    {
    "name": "Custom Zone",
    "brand": "Dean",
    "price": 219,
    "url": null,
    "is_affiliate": true,
    "img": "https://d1aeri3ty3izns.cloudfront.net/media/47/476009/600/preview.jpg",
    "description": "Une guitare de bon gout",
    "keywords": "guitare chroma vert",
    "category": "music"
    },
    {
    "name": "Dinky JS22-7",
    "brand": "Jackson",
    "price": 229,
    "url": "https://www.thomann.de/fr/jackson_js22_7_dinky_ah_sb.htm?partner_id=38841",
    "is_affiliate": true,
    "img": "http://images.richtonemusic.co.uk/product/YJACKSON72951.jpg",
    "description": "Une guitare a long diapason (quasi-bariton) et 7 cordes. Design simple mais efficace !",
    "keywords": "guitare 7 cordes strings",
    "category": "music"
    },
    {
    "name": "M2.5",
    "brand": "Marcus Miller",
    "price": 389,
    "url": "https://www.thomann.de/fr/marcus_miller_m2_5_whp_2nd_gen.htm?partner_id=38841",
    "is_affiliate": true,
    "img": "https://www.pitbullaudio.com/media/catalog/product/s/i/sire-m2-4-whp-v2-bag-1.jpg",
    "description": "Basse 5 cordes offerte par la communauté pour les 26 ans de Warths !",
    "keywords": "basse 5 cordes strings",
    "category": "music"
    },
    {
    "name": "PB-20",
    "brand": "Harley Benton",
    "price": 88,
    "url": "https://www.thomann.de/fr/harley_benton_hbp120bk_ebass.htm?partner_id=38841",
    "is_affiliate": true,
    "img": "https://s1.easyzic.com/common/datas/materiel-produits/34/85/_34852/45467.jpg",
    "description": "La première basse de Warths, qu'il s'est pris pour débuter. Très simple, nécessite un peu de réglage avant d'être une bonne basse d'apoint !",
    "keywords": "basse",
    "category": "music"
    },
    {
    "name": "SE24 Ltd.",
    "brand": "PRS",
    "price": 999,
    "url": null,
    "is_affiliate": true,
    "img": "https://www.soundaffects.com/images/products/1558371987-02417700.jpg",
    "description": "La série limitée europe de 2019. Une PRS avec un manche en érable torréfiée, et un custom top figuré ultra sexy.",
    "keywords": "guitare",
    "category": "music"
    },
    {
    "name": "The Drop",
    "brand": "Digitech",
    "price": 88,
    "url": "https://www.thomann.de/fr/digitech_the_drop.htm?partner_id=38841",
    "is_affiliate": true,
    "img": "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/343716/9059458_800.webp",
    "description": "Une pédale permettant de se détuner de E standard a A standard (ou Drop D a Drop G). La seule pédale vraiment efficace pour cette tache, sans latence et réponds bien a la polyphonie. La guitare perds un peu de punch.",
    "keywords": "pédale pedale stomp detune",
    "category": "music"
    },
    {
    "name": "Relay G10",
    "brand": "Line6",
    "price": 158,
    "url": "https://www.thomann.de/fr/line6_relay_g10ii.htm?partner_id=38841",
    "is_affiliate": true,
    "img": "https://images.static-thomann.de/pics/bdb/517063/16209221_800.jpg",
    "description": "Le relay G10 permet de se passer de cordon de guitare. On branche le relai sur la guitare et le son ressort par le récepteur.",
    "keywords": "relai hf sans fil emetteur émetteur emitter",
    "category": "music"
    },
    {
    "name": "BPHS-1",
    "brand": "Audio Technica",
    "price": 215,
    "url": "https://www.amazon.fr/Audio-Technica-BPHS1-Casque-Broadcast-dynamique/dp/B003D87JI2?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=bphs1&qid=1634212833&sr=8-1&linkCode=ll1&tag=arths-21&linkId=db7ea5bfa1db10f7aa8643549107620b&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://www.amazon.fr/images/I/81uWlLuca9L._AC_SL1500_.jpg",
    "description": "Casque combiné micro/haut-parleur qualité studio. Choisi pour qu'il suive Warths même debout, sans pour autant entendre le bruit de la guitare. Se branche en XLR. L'arceau est un peu bruyant",
    "keywords": "casque micro headset",
    "category": "stream"
    },
    {
    "name": "X1622USB",
    "brand": "Berhinger",
    "price": 185,
    "url": "https://www.thomann.de/fr/behringer_xenyx_x1622_usb.htm?partner_id=38841",
    "is_affiliate": true,
    "img": "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/243140/13760486_800.webp",
    "description": "La table de mixage utilisée pour le mix final (GoXLR + Guitare + autres..). Table d'appoint avec 3 sous groupes.",
    "keywords": "table mixage mixeur interface audio",
    "category": "stream"
    },
    {
    "name": "GoXLR",
    "brand": "Berhinger",
    "price": 397,
    "url": "https://www.amazon.fr/dp/B07JKNG4NV?_encoding=UTF8&psc=1&linkCode=ll1&tag=arths-21&linkId=e518c628b9e9631d95310d2f694989c5&language=fr_FR&ref_=as_li_ss_tl",
    "is_affiliate": true,
    "img": "https://www.amazon.fr/images/I/61+ypz0tUaL._AC_SL1000_.jpg",
    "description": "Une table de mixage intégrée à Windows. Elle ouvre 8 périphériques I/O audio, et gère son routing de manière logicielle. Une table surpuissante pour le streaming.",
    "keywords": "table mixage mixeur interface audio",
    "category": "stream"
    }
  ]

  ngOnInit(): void {
  }

}
