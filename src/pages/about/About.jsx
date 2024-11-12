import React, { useEffect } from "react";
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.webp";
import "./about.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="about">
      <div className="container">
        <h2 className="about__title">Zahiriddin Muhammad Bobur</h2>
        <p>
          <strong>Bobur</strong> (taxallusi) toʻliq ismi - Zahiriddin Muhammad
          ibn Umarshayx Mirzo. U 1483-yil 14-fevral–1530-yil 26-dekabr) — oʻzbek
          mumtoz adabiyotining yirik vakili, shoir, tarixchi, geograf, davlat
          arbobi, isteʼdodli sarkarda, boburiylar sulolasi asoschisi, temuriy
          shoh boʻlib Amir Temurning avlodidan boʻlgan. Bobur oʻz davrining
          buyuk shaxslaridan biri edi. Uning sheʼrlari, ruboiylari oʻz vaqtida
          va hozir ham sevib oʻqilmoqda. 6 ta xotini boʻlgan. Bibi Muboraka,
          Mohimbegim, Zaynab Sulton Begim, Oysha Sulton Begim, Maʼsuma Sulton
          Begim va Soliha Sulton Begim.
        </p>
        <div className="about__box">
          <div className="about__info">
            <p>
              <b>Hayoti va ijodi:</b> <br /> Boburning otasi – Umarshayx Mirzo
              Fargʻona viloyati hokimi, onasi–Qutlugʻ Nigorxonim Moʻgʻuliston
              xoni va Toshkent hokimi Yunusxonning qizi edi. Bobur ota tomondan
              Amir Temurning uchinchi oʻgʻli Mironshoh Mirzo naslidan boʻlsa,
              ona tomonidan Tugʻluq Temurxonning oʻgʻli Xizr Xo‘jaxon naslidan
              edi uning yettinchi avlodi edi.
            </p>

            <div className="about__list">
              <p data-aos="zoom-in-up" className="about__list__back">
                <b>Otasi tomondan:</b>
                <ol type="1">
                  <li>Amir Temur koʻragon (1336-1405)</li>
                  <li>Mironshoh Mirzo (1366-1408)</li>
                  <li>Sulton Muhammad Mirzo (1408-1449)</li>
                  <li>Sulton Abu Said koʻragon (1424-1469)</li>
                  <li>Umarshayx Mirzo koʻragon (1456-1494)</li>
                  <li>Bobur (1483-1530)</li>
                </ol>
              </p>
              <p data-aos="zoom-in-up" className="about__list__back">
                <b>Onasi tomondan:</b>
                <ol type="1">
                  <li>Tugʻluq Temurxon (1329-1362)</li>
                  <li>Xizr Xoʻjaxon (1358-1399)</li>
                  <li>Muhammadxon (? – 1416)</li>
                  <li>Sharalixon (taxtga chiqmagan)</li>
                  <li>Uvaysxon (1418-1425-yillarda)</li>
                  <li>Yunusxon (1468-1487)</li>
                  <li>Yunusxonning qizi Qutlugʻ Nigorxonim (1457-1504)</li>
                  <li>Bobur (1483-1530)</li>
                </ol>
              </p>
            </div>
          </div>
          <img data-aos="fade-up-left" src={about1} alt="" />
        </div>
        <div data-aos="zoom-in-up" className="about__contex">
          <span> 📌</span>
          <p>
            Boburning onasi oʻqimishli boʻlgan va oqila ayol boʻlib, Boburga
            hokimiyatni boshqarish ishlarida faol koʻmak bergan, harbiy
            yurishlarida unga hamrohlik qilgan. Umarshayx Mirzo xonadoni poytaxt
            Andijonning arki ichida yashar edi. Hokim yoz oylari Sirdaryo
            boʻyida, Axsida, yilning qolgan faslini Andijonda oʻtkazardi.
            Boburning yoshligi Andijonda oʻtgan. Bobur barcha temuriy
            shahzodalar kabi maxsus tarbiyachilar, yirik fozil-u ulamolar
            ustozligida harbiy taʼlim, fiqh ilmi, arab va fors tillarini
            oʻrganadi, koʻplab tarixiy va adabiy asarlar mutolaa qiladi,
            ilm-fanga, sheʼriyatga qiziqa boshlaydi. Dovyurakligi va jasurligi
            uchun u yoshligidan „Bobur“ („Sher“) laqabini oladi. Bobur otasi
            yoʻlidan borib, mashhur soʻfiy – Xoja Ahrorga ixlos qoʻyadi va uning
            tariqati ruhida voyaga yetadi, umrining oxiriga qadar shu eʼtiqodga
            sodiq qoladi. Keyinchalik, „Boburnoma“ asarida Bobur Xoja Ahror ruhi
            bir necha bor uni muqarrar halokatdan, xastalik va chorasizlikdan
            xalos etganini, eng ogʻir sharoitlarda rahnamolik qilganligini
            taʼkidlaydi. Otasi Axsida bevaqt, 39 yoshida fojiali halok boʻlgach,
            oilaning katta farzandi, 12 yoshli Bobur valiahd sifatida taxtga
            oʻtiradi (1494-yil iyun).
          </p>
          <p>
            <span> Shoir sifatida ijodiy faoliyatining boshlanishi:</span>{" "}
            <br /> Boburning oʻz guvohligiga koʻra, shoir sifatida ijodiy
            faoliyati Samarqandni ikkinchi marta egallagan vaqtda boshlangan;
            „Ul fursatlarda birorikkirar bayt aytur edim“, deb yozadi u. Bobur
            Samarqanddaligining ilk oylarida Alisher Navoiy tashabbusi bilan
            ular oʻrtasida yozishma boshlanadi. Bobur atrofida ijodkorlar
            toʻplana boshlashi ham shu yillarga toʻgʻri keladi. Jumladan,
            Binoiy, Abulbaraka va Bobur oʻrtasidagi ruboiy mushoirasi
            Samarqanddagi qizgʻin adabiy hayotdan darak beradi. Umuman, davlat
            arbobi va koʻp vaqti jangu jadallarda oʻtgan sarkarda sifatida
            ijtimoiy faoliyatining eng qizgʻin davrida ham, shaxsiy hayoti va
            davlati nihoyatda murakkab va xatarli sharoitda qolgan chogʻlarida
            ham Bobur ijodiy ishga vaqt topa bilgan, ilm, sanʼat va ijod ahlini
            oʻz atrofiga toʻplab, homiylik qilgan, ularni ragʻbatlantirgan.
            Adabiyot va tarix, musiqa va sanʼatdan yaxshi xabardor boʻlgan,
            diniy taʼlimotga chin ixlos qoʻygan Bobur har doim olim-u fozillar
            davrasida boʻldi, xususan, ijod ahliga, kasb-u hunar sohiblariga
            samimiy ehtirom koʻrgazib homiylik qildi, ularni moddiy va maʼnaviy
            ragʻbatlantirib turdi. Ijod va sanʼat ahliga bunday mehrli munosabat
            aslo bejiz boʻlmagan. Bobur tabiatan ijodkor edi. Yigitlik
            yillaridan boshlab to umrining oxirigacha samarali ijodiy ish bilan
            shugʻullandi, har qanday sharoit va vaziyatlarda ham ijoddan
            toʻxtamadi, natijada, har jihatdan muhim boy ilmiy va adabiy meros
            qoldirdi.
            <br />
            <span>Ijodi:</span> <br />
            Bobur 18-19 yoshlarida ruboiy va gʻazallar yoza boshlagan. Uning
            „Topmadim“ radifli gʻazali va „Yod etmas emish kishini gʻurbatda
            kishi“ misrasi bilan boshlanuvchi ruboiysi oʻsha yillardagi hayoti
            bilan bogʻliq. Boburning ulkan sanʼatkorligi shundaki, shaxsiy
            kechinmalarini jiddiy umumlashma darajasiga koʻtara oladi va
            natijada asarlarida olgʻa surilgan gʻoyalar umuminsoniy qadriyatlar
            darajasiga koʻtariladi. Bobur ijodida, xususan, sheʼriyatida kindik
            qoni toʻkilgan ona yurtini dildildan qoʻmsash, uning tuprogʻiga
            talpinish, gʻariblik azoblaridan oʻtli hasrat, yor-u diyor sogʻinchi
            va visol ilinji, takdir zarbalari va turmush uqubatlari, zamona
            nosoʻzliklaridan nola badiiy tahlil etiladi. Bobur ijodida
            ishq-muhabbat, sevgi-sadoqat, visol va hijron mavzusi ham salmoqli
            oʻrin tutadi. Uning gʻazal va ruboiylarida, tuyuq va masnaviylarida
            maʼshuqaning maftunkor goʻzalligi, beqiyos husn-u latofati, sharqona
            odob-u axloqi, noz-u karashmasi yengil va oʻynoqi, musiqiy va ravon
            misralarda katta mahorat bilan tarannum etiladi. Boburning uz
            sheʼriy asarlarini toʻplab, devon holiga keltirgan sanani
            koʻrsatuvchi aniq tarixiy maʼlumotlar maʼlum emas. Ammo
            „Boburnoma“ning 1518—1519-yillar voqealari bayoniga bagʻishlangan
            faslida Bobur devonini Kobuldan Samarqandga yuborganligi toʻgʻrisida
            soʻz boradi. Demak, shu yillarda uning devoniga tartib berilgan va
            mazkur devon Movarounnahrda ham tarqalgan. Hozirda uning 119
            gʻazali, bir masnu sheʼri, 209 ruboiysi, 10 dan ortiq tuyuq va
            qitʼalari, 50 dan ortiq muammo va 60 dan ziyod fardlari aniqlangan.
            Devoni tarkibida umumiy hajmi 270 baytdan iborat 8 masnaviy ham
            oʻrin olgan.
          </p>
        </div>
        <div className="about__bottom">
          <div data-aos="fade-right">
            <p>
              <b>Bobur ijodi</b> <br /> Bobur o‘zbek tarixida tom ma’noda yirik
              shaxs. Uning tarixchi olim, zukko adib va dilbar shoir sifatida
              qoldirgan adabiy merosi bebahodir. Bobur hukmdorlik
              majburiyatlaridan ortib yirik asarlar yozishga muvaffaq bo‘lgan.
              Uning lirikasi adabiyotdagi o‘ziga xos lirika. Shubhasiz,
              she’riyatining asosiy mavzuyi Vatan, Vatan sog‘inchi bo‘lgan. Taxt
              uchun qondosh aka-ukalarning dushman bo‘lib kurashishi, atrofdagi
              insonlarning xiyonati, vatanini birlashtirolmaganidan so‘ng
              tortgan azoblari va nihoyat umrining so‘nggigacha Vatan sog‘inchi
              uning she’riyatiga ko‘chgan desak mubolag‘a bo‘lmaydi. Bu mavzular
              Bobur g‘azallari, ruboiylarida keng yoritilgan.
            </p>
          </div>
          <div data-aos="fade-left">
            <img src={about2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
