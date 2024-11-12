import React, { useEffect, useState } from "react";
import "./blog.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

import { Navigation } from "swiper/modules";

const Blog = () => {
  return (
    <div className="blog container">
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="blog__info">
              <div className="blog__info__box">
                <h4 className="blog__info__text">
                  Bobur nomidagi xalqaro jamgʻarma
                </h4>
                <div className="blog__info__middle">
                  <h4 className="blog__info__text">
                    Zahiriddin Muhammad Bobur
                  </h4>
                  <h2>Boburnoma</h2>
                </div>
                <div className="blog__info__bottom">
                  <h4 className="blog__info__text">Toshkent</h4>
                  <h4 className="blog__info__text">
                    “Sharq” nashriyot-matbaa aksiyadorlik
                  </h4>
                  <h4 className="blog__info__text">
                    kompaniyasi bosh tahririyati
                  </h4>
                  <h4 className="blog__info__text">2002</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <h3>Bismillaxir Rahmonir Rahiym</h3>
              <p>
                Tengri taoloning inoyati bilan va hazrati on (1 6 ) Sarvari
                koinotning shafoati bilan va chahoryori bosafolarning himmati
                birlan seshanba kuni, ramazon oyining beshida, tarix sekkiz yuz
                toʻqson toʻqquzda Fargʻona viloyatida oʻn ikki yoshta podshoh
                boʻldum. (Sakkiz yuz toʻqson toʻqqizinchi (1494) yil
                voqealarni.— Muharrir) <br />
                <span>
                  Fargʻona viloyati beshinchi iqlimdindur. Ma’muraning
                  kanorasida voqi’ boʻlubtur. Sharki Koshgʻar, gʻarbi Samarqand,
                  janubi Badaxshonning sarhadi togʻlari, shimolida agarchi burun
                  shahrlar bor ekandur, misli: Olmoliq va Olmotu va Yangikim,
                  kutubda Oʻtror bitirlar, moʻgʻul va oʻzbak jihatidin bu
                  tarixda buzulubtur, aslo ma’mura qolmabdur.
                </span>{" "}
                <br />
                <span>
                  Muxtasar viloyattur, oshligʻ va mevasi farovon. Girdo-girdi
                  togʻ voqi’ boʻlubtur. Gʻarbi tarafidakim, Samarqand va Xoʻjand
                  boʻlgʻay, togʻ yoʻqtur. Ushbu jonibtin oʻzga hech jonibtin
                  qish yogʻiy kela olmas. Sayxun daryosikim, Xoʻjand suyigʻa (2
                  a ) mashhurdur, sharqu shimol tarafidin kelib, bu viloyatning
                  ichi bila oʻtub, gʻarb sori oqar, Xoʻjandning shimoli va
                  Fanokatning janubiy tarafidinkim, holo Shohruxiyagʻa
                  mashhurdur, oʻtub yana shimolgʻa mayl qilib, Turkiston sori
                  borur. Turkistondin heyli kuyiroq bu daryo tamom qumgʻa
                  singar, hech daryogʻa qotilmas.
                </span>
                <br />
                <span>
                  Etti pora qasabasi bor; beshi Sayxun suyining janub tarafida,
                  ikki shimol jonibida. Janubiy tarafidagʻi qasabalar: biri
                  Andijondurkim, vasatta voqi’ boʻlubtur, Fargʻona viloyatining
                  poytaxtidur. Oshligʻi vofir, mevasi farovon, qovun va uzumi
                  yaxshi boʻlur. Qovun mahalida poliz boshida qovun sotmoq rasm
                  emas. Andijonning noshpotisidin yaxshiroq noshpoti boʻlmas.
                </span>
                <br />
                <span>
                  Movarounnahrda Samarqand va Kesh qoʻrgʻonidin soʻngra mundin
                  ulugʻroq qoʻrgʻon yoʻqtur. Uch darvozasi bor. Arki janub
                  tarafida voqi’ boʻlubtur. Toʻqquz tarnov suv kirar. Bu
                  ajabturkim, bir erdin ham chikmas.Qal’aning girdo-girdi
                  xandakning tosh yoni sangrezalik shoxroh tushubtur.
                </span>{" "}
                <br />
                <span>
                  {" "}
                  Qal’aning girdo-girdi tamom mahallottur. Bu mahalla bila
                  qal’agʻa fosila ushbu xandaq yoqasi dogʻi shohrohtur.
                </span>{" "}
                <br />
                <span>
                  Ovi qushi dogʻi koʻp boʻlur, qirgʻovuli (2 b ) behad semiz
                  boʻlur. Andoq rivoyat qildilarkim, bir qirgʻovulni oshginasi
                  bila toʻrt kishi eb
                </span>
                tugata olmaydur. <br />
                <span>
                  Eli turkdur. Shahri va bozorisida turkiy bilmas kishi yoʻqtur.
                  Elining lafzi qalam bila rosttur. Ani uchunkim, Mir Alisher
                  Navoiyning musannafoti, bovujudkim Hirida nash’u namo
                  topibtur, bu til biladur.
                </span>{" "}
                <br />
                <span>
                  {" "}
                  Elining orasida husni heyli bordur. Xoja Yusufkim musiqada
                  mashhurdur, Andijoniydur. Havosining ufunati bor. Kuzlar el
                  bezgak koʻp boʻlur
                </span>{" "}
                <br />
                <span>
                  {" "}
                  Yana bir Oʻsh kasabasidur. Andijonning sharqi-janubiy
                  tarafidur, sharqqa moyil, Andijondin toʻrt yigʻoch yoʻldur.
                  Havosi xoʻb va oqar suyi farovondur. Bahori bisyor yaxshi
                  boʻlur.
                </span>{" "}
                <br />
                <span>
                  {" "}
                  Oʻshning fazilatida heyli ahodis vorid boʻlubtur Qoʻrgʻonining
                  sharqi janubiy jonibida bir mavzun togʻ tushubtur, Barokoʻhgʻa
                  mavsum. Bu togʻning qullasida Sulton Mahmudxon bir hujra
                  solibtur, ul hujradin quyiroqushbu togʻning tumshugʻida tarix
                  toʻqquz yuz ikkida men bir ayvonliqhujra soldim. Agarchi ul
                  hujra mundin murtafi’dur, vale bu hujra bisyor yaxshiroq voqi’
                  boʻlubtur: tamom shahar va mahallot oyogʻ ostidadur. (3 a )
                  Andijon rudi Ushning mahallotining ichi bila oʻtub, Andijongʻa
                  borur. Bu rudning har ikki jonibi bogʻot tushubtur, tamom
                  bogʻlari rudka mushriftur, binafshasi bisyor latif boʻlur.
                  Oqar suvlari bor, bahori bisyor yaxshi boʻlur, qalin lola va
                  gullar ochilur. Barokoʻh togʻi domanasida shahr bila togʻning
                  orasida bir masjid tushubtur, Masjidi Javzo otliq. Togʻ
                  tarafidin bir ulugʻ shahjoʻy okar. Ushbu masjidning tashqari
                  sahni nishebroq, sebargaliq pursoya, safoliq maydon voqi’
                  boʻlubtur. Har musofir va rahguzar kelsa, anda istirohat
                  qilur. Oʻsh avboshining zarofati budurkim, har kim anda
                  uyqulasa, ul shahjoʻydin suv quyarlar. Umarshayx mirzoning
                  oxir zamonlarida qizil bila oq mavjliq tosh ushbu togʻda paydo
                  boʻldi: pichoq dastasi va takband va ba’zi nimalar qilurlar,
                  heyli yaxshi toshdur. Fargʻona viloyatida safo va havoda Oʻsh
                  chogʻliq kasaba yoʻqtur.
                </span>
                <br />
                <span>
                  Yana bir Margʻinondur, Andijonning gʻarbidadur, Andijondin
                  etti yigʻoch yoʻldur.
                </span>{" "}
                <br />
                <span>
                  Yaxshi kasaba voqi’ boʻlubtur, purne’mat: anori va oʻrugi asru
                  xoʻb boʻlur. Bir jins anor boʻlur, «donakalon» derlar,
                  chuchuklugida zardolu mayxushlugidin andak choshni bor. Samnon
                  anor (3 b ) larigʻa tarjih qilsa boʻlur.
                </span>{" "}
                <br />
                <span>
                  Yana bir jins oʻruk boʻlurkim, donasini olib, ichiga magʻz
                  solib quruturlar, «subhoniy» derlar, bisyor lazizdur.
                </span>{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Ov qushi yaxshidur, oqkiyik yovuqta topilur. Eli sorttur va
                  mushtzan va pursharu shoʻr eldur. Jangaraliq rasmi
                  Movarounnahrda shoyi’dur, Samarqand va Buxoroda nomdor
                  jangaralar aksar Margʻinoniydur.
                </span>{" "}
                <br />
                <span>
                  {" "}
                  Soxibi «Hidoya» Margʻinonning Rushdon otliq kentidindur.
                </span>{" "}
                <br />
                <span>
                  Yana bir Isfaradur, koʻxroyada voqi’ boʻlubtur. Oqar suvlari,
                  safoliq bogʻchalari bor. Margʻinonning gʻarbi-janubidadur.
                  Margʻinon bila Isfara orasi toʻqquz yigʻoch yoʻldur.
                </span>{" "}
                <br />
                <span>
                  {" "}
                  Musmir daraxtisi bisyordur, vale bogʻchalarida aksar bodom
                  daraxtidur. Eli tamom sort va forisiygoʻydur. Isfaraning bir
                  shar’isida janub sori pushtalarning orasida bir parcha tosh
                  tushubdur, «Sangi oyina» derlar, uzunlugʻi taxminan oʻn qari
                  boʻlgʻay, balandligʻi ba’zi eri kishi boʻyi, pastligʻi ba’zi
                  eri kishining belicha boʻlgʻay, oyinadek har nima mun’akis
                  boʻlur.
                </span>
                <br />
                <span>
                  Isfara viloyati toʻrt boʻluk koʻhpoyadur: bir Isfara, yana bir
                  Voruhyana bir Soʻhyana bir hushyor.
                </span>{" "}
                <br />
                <span>
                  {" "}
                  Muhammad Shayboniyxon Sulton Mahmudxon bila Olachaxongʻa
                  shikast berib, Toshkand va Shohruxiyani olgʻon mahalda, ushbu
                  Soʻx (4 a ) bila Hushiyor koʻhpoyalarigʻa kelib, bir yilgʻa
                  yovuq tanqisliq bila oʻtkarib, Kobul azimati qildim.{" "}
                </span>
                <br />
                <span>
                  Yana bir Xoʻjanddur, Andijondin gʻarb sorigʻa yigirma besh
                  yigʻoch yoʻldur. Xoʻjanddin Samarqand ham yigirma besh yigʻoch
                  yoʻldur, qadim shahrlardindur. Shayx Muslihiddin va Xoja Kamol
                  Xoʻjandtindurlar.
                </span>{" "}
                <br />
                <span>
                  {" "}
                  Mevasi farovon va bisyor yaxshi boʻlur. Anori yaxshiliqqa
                  mashhurdur. Nechukkim, «sebi Samarqand» va «anori Xoʻjand»
                  derlar. Vale bu tarixda Margʻinon anori koʻp ortuqdur.
                </span>{" "}
                <br />
                <span>
                  {" "}
                  Qoʻrgʻoni baland erda voqi’ boʻlubtur. Sayxun suyi shimol
                  jonibidin oqar. Qoʻrgʻondin daryo bir oʻq otimi boʻlgʻay.
                  Qoʻrgʻon bila daryoning shimol tarafida bir togʻ tushubtur.
                  Mevagʻul otliq, derlarkim, bu togʻda feruza koni va ba’zi
                  konlar topilur. Bu togʻda bisyor yilon bor.
                </span>
                <br />
                <span>
                  Xoʻjandning ovlogʻi va qushlogʻi bisyor yaxshidur. Oq
                  kiyiqbugʻumaral, qirgʻovul va tovushqoni koʻp boʻlur. Havosi
                  bisyor mutaaffindur, kuzlar bezgak koʻp boʻlur. Andoq rivoyat
                  qildilarkim, chupchuq bezgak boʻlgʻondur. Derlarkim,
                  havosining taaffuni shimoldagʻi togʻ jihatidindur.
                </span>{" "}
                <br />
                <span>
                  Muning tavobiidin Kandibodomdur. Agarchi kasaba emas,
                  yaxshigʻina kasabachadur. Bodomi yaxshi boʻlur. Bu jihatdin (4
                  6 ) bu ismgʻa mavsumdur. Xurmuz va Hindustongʻa tamom muning
                  bodomi borur. Xoʻjanddin besh-olti yigʻoch sharq tarafidadur.
                  Xoʻjand bila Kandibodom orasida bir dashte tushubtur,
                  Xodarveshgʻa mavsumdur. Hamisha bu dashtta el bordur.
                  Margʻinongʻakim, sharqidur, hamisha mundin el borur.
                  Xoʻjandgʻakim, gʻarbidur, doyim mundin el kelur: tund ellari
                  bor.
                </span>{" "}
                <br />
                <span>
                  Derlarkim, bir necha darvesh bu bodiyada tund elga yoʻlukub,
                  birbirini topolmay «Ho darvesh», «Ho darvesh» deya-deya tamom
                  halok boʻlurlar, andin beri bu bodiyani Hodarvesh derlar.
                </span>{" "}
                <br />
                <span>
                  Sayxun suyining shimoli tarafidagʻi kasabalar: bir Axsidur.
                  Kitoblarda Axsikat bitirlar. Nechukkim, Asiriddin shoirni
                  Asiriddin Axsikatiy derlar. Fargʻonada, Andijondin soʻngra
                  mundin ulugʻroq kasaba yoʻktur.
                </span>{" "}
                <br />
                <span>
                  Andijondin gʻarb sori toʻqquz yigʻoch yoʻldur. Umarshayx mirzo
                  muni poytaxt qilib edi. Sayxun daryosi qoʻrgʻonining ostidin
                  oqar. Qoʻrgʻoni baland jar ustida voqi’ boʻlubtur. Xandaqining
                  oʻrniga amiq jarlardur. Umarshayx mirzokim, muni poytaxt
                  qildi, bir-ikki martaba tashqarirokdin yana jarlar soldi.
                  Fargʻonada muncha berk qoʻrgʻon yoʻktur. (5 a ) Mahalloti
                  qoʻrgʻondin bir shar’iy yirokroq tushubtur. «Deh kujovu
                  daraxton kujo» masalini gʻolibo Axsi uchun aytibturlar.
                </span>{" "}
                <br />
                <span>
                  Qovuni yaxshi boʻlur. Bir nav’ qovundurkim, «Mirtemuriy»
                  derlar, andoq qovun ma’lum emaskim, olamda boʻlgʻay. Buxoro
                  qovuni mashhurdur. Samarqandni olgʻon mahalda Axsidin va
                  Buxorodin qovun kelturub bir majlisda kesturdum, Axsi
                  qovunining hech nisbati yoʻq erdi.
                </span>{" "}
                <br />
                <span>
                  Ovi kushi bisyor yaxshi boʻlur. Sayxun daryosining Axsi tarafi
                  dashttur. Oq kiyigi bisyor boʻlur. Andijon tarafi jangaldur.
                  Bugʻu-maral, qirgʻovul, tovushqoni koʻp topilur, asru semiz
                  boʻlur.
                </span>{" "}
                <br />
                <span>
                  Yana bir Kosondur, Axsining shimolida tushubtur. Kichikroq
                  kasabadur. Nechukkim, Andijon suyi Oʻshdin kelur, Axsi suyi
                  Kosondin kelur. Yaxshi xavoliq erdur. Safoliq bogʻchalari bor.
                  Vale safoliq bogʻchalari tamom soy yoqasida voqi’ boʻlgʻon
                  uchun, «poʻstini pesh berra» debturlar. Safo va havoda Oʻsh
                  bila Koson elining taassubi bor.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Fargʻona viloyatining girdo-girdi togʻlarida yaxshi yayloqlari
                  bor. Tobulgʻu yigʻochi bu togʻlarda boʻlur, oʻzga hech erda
                  boʻlmas. Tobulgʻu bir yigʻochedur, poʻsti qizil, aso (5 b )
                  qilurlar, qamchi dastasi ham qilurlar, qushlargʻa qafas
                  qilurlar, tarosh qilib tirgaz qilurlar, heyli yaxshi
                  yigʻochdur. Tabarruklik bila yiroq erlarga eltarlar.
                </span>{" "}
                <br />
                <span>
                  Ba’zi kitoblarda bitibturlarkim, «yabruh us-sanam» bu
                  togʻlardadur, vale bu muddatta hech eshitilmadi. Bir giyoh
                  eshitildikim, Ettikentning togʻlarida boʻlur, ul el «ayiq
                  oʻti» derlar, mexrgiyoh xosiyatliq, gʻolibo mexrgiyohdur, ul
                  el bu ot bila ayturlar.
                </span>
                <br />
                <span>
                  Bu togʻlarda feruza koni va temur koni boʻlur. Fargʻona
                  viloyatining hosili bila, agar adl qilsalar, uch-toʻrt ming
                  kishi saxlasa boʻlur.
                </span>{" "}
                <br />
                <span>
                  Chun Umarshayx mirzo baland himmatliqva ulugʻ doiyaliq podshoh
                  erdi. Hamisha mulkgirlik dagʻdagʻasi bor erdi. Necha navbat
                  Samarqand ustiga cherik tortti, ba’zi mahal shikast topti,
                  ba’zi mahal bemurod yondi. Necha navbat qoyin-otasi
                  Yunusxonnikim, Chingizxonning ikkinchi oʻgʻli Chigʻatoyxon
                  naslidindur, Chigʻatoyxonning yurtida moʻgʻul ulusining xoni
                  ul fursatta ul erdikim, mening ulugʻ otam boʻlgʻay, istid’o
                  qilib kelturdi. Har qatla kelturganda viloyatlar berur edi.
                  Chun Umarshayx (6 a ) Mirzoning muddaosidek boʻlmas edi, gohi
                  Umarshayx mirzoning badmaoshligʻidin, gohi moʻgʻul ulusining
                  muholafatidin viloyatta tura olmay yana Moʻgʻulistongʻa chiqar
                  erdi.
                </span>{" "}
                <br />
                <span>
                  Oxir navbat kelaturgandakim, ul fursatta Toshkand viloyati
                  Umarshayx mirzo tasarrufida erdikim, kitoblarda Shosh
                  bitirlar, ba’zi Choch bitirlarkim, «kamoni chochiy» andin
                  iborattur, berdi.
                </span>{" "}
                <br />
                <span>
                  Oʻshal fursattin tarix toʻqquz yuz sekqizgacha Toshkand va
                  Shohruxiya viloyati Chigʻatoy xonlarining tasarrufida edi. Bu
                  fursatta moʻgʻul ulusining xon va sultonligʻi Yunusxonning
                  ulugʻ oʻgʻli, mening tagʻoyim Sulton Mahmudxonda edi,
                  Umarshayx mirzoning ogʻasi, Samarqand podshohi Sulton Ahmad
                  Mirzo va moʻgʻul ulusining xoni Sulton Mahmudxon, chun
                  Umarshayx mirzoning badmaoshligʻidin mutazarrir erdilar,
                  bir-birlari bila ittifoq qilib, Sulton Ahmad Mirzo Sulton
                  Mahmudxonni kuyov qilib, mazkur boʻlgʻon tarixda, Xoʻjand
                  suyining janub jonibidin Sulton Ahmad Mirzo va shimol
                  tarafidin Sulton Mahmudxon Umarshayx mirzoning ustigʻa cherik
                  torttilar. Bu asnoda gʻariyb voqi’a dast berdi, mazkur boʻlub
                  (6 6 ) erdikim, Axsi qoʻrgʻoni baland jar ustida voqi’
                  boʻlubtur, imoratlar jar yokasida edi. Ushbu tarixda dushanba
                  kuni, rama-zonoyining toʻrtida Umarshayx mirzo jardin kabutar
                  va kabutarxona bila uchub, gnunkrr boʻldi.Oʻttuz toʻqquz
                  yoshar edi.
                </span>{" "}
                <br />
                <span>
                  <b>Valodat va iasabi:</b> sekqiz yuz oltmishda Samarqandta
                  edi. Sulton Abusa’id Mirzoning toʻrtunchi oʻgʻli edi. Sulton
                  Ahmad Mirzo, Sulton Muhammad Mirzo, Sulton Mahmud Mirzodin
                  kichik edi. Sulton Abusa’id Mirzo Sulton Muhammad Mirzoning
                  oʻgʻli edi. Sulton Muhammad Mirzo Mironshoh Mirzoning oʻgʻli
                  edi. Mironshoh Mirzo Temurbekning uchunchi oʻgʻli edi.
                  Umarshayx mirzo bila Jahongir Mirzodin kichik Shoxrux Mirzodin
                  ulugʻ edi.
                </span>{" "}
                <span>
                  Sulton Abusa’id Mirzo avval Kobulni Umarshayx mirzogʻa berib,
                  Boboyi Kobuliyni bek atka qilib, ruxsat berib edi. Mirzolarni
                  sunnat qilur toʻyi jihatidin Darayi Gazdin yondurub, Samarqand
                  eltti. Toʻydin soʻngra, ul munosabat bilakim, Temurbek Ulugʻ
                  Umarshayx mirzogʻa Fargʻona viloyatini bergandur, Andijon
                  viloyatini berib, Xudoyberdi Tugʻchi Temurtoshni bek atka
                  qilib yibordi.
                </span>{" "}
                <br />
                <span>
                  <b>Shakl va shamoyili.</b> past boʻyluq, tegirma saqolliq,
                  koʻba yuzluq tanbal kishi edi. Toʻn (7 a ) ni bisyor tor kiyar
                  edi, andogʻkim, bogʻ bogʻlaturda qornini ichiga tortib
                  bogʻlatur edi, bogʻ bogʻlagʻondin soʻng oʻzini qoʻya bersa,
                  bisyor boʻlur erdikim, bogʻlari uzulur edi. Qiymakta va emakta
                  betakalluf edi, dastorini dastorpech chirmar edi. Ul zamonda
                  dastorlar tamom chorpech edi, bechin chirmab, aloqa qoʻyar
                  edilar. Yozlar gʻayri devonda aksar moʻgʻuliy boʻrk kiyar edi.
                </span>{" "}
                <br />
                <span>
                  <b>Axlok va atvori:</b> hanafiy mazhabliq, poqiza e’tiqodliq
                  kishi edi, besh vaqt namozni tark qilmas edi, umriy qazolarini
                  tamom qilib edi, aksar tilovat qilur edi. Hazrati Xoja
                  Ubaydullogʻa irodati bor edi, suhbatlarigʻa bisyor musharraf
                  boʻlub edi, hazrat Xoja ham farzand deb edilar.
                </span>{" "}
                <br />
                <span>
                  Ravon savodi bor edi. «Hamsatayn» va masnaviy kitoblarini va
                  tarixlarni oʻkub erdi. Aksar «Shohnoma» oʻkur edi. Tab’i nazmi
                  bor edi, vale she’rgʻa parvo qilmas edi.
                </span>{" "}
                <br />
                <span>
                  Adolati bu martabada ediki, Xitoy korvoni keladurganda
                  Andijonning sharqiy tarafidagʻi togʻlarning tubida ming oʻyluq
                  korvonni, andogʻ qor bostikim, ikki kishi qutuldi. Xabar topib
                  muxassillar yiborib, korvonning jam’i jihotini (7 b ) zabt
                  qildi. har chandikim vorisi hozir yoʻq erdi, bovujudi ehtiyot
                  saxlab, bir yil, ikki yildin soʻngra Samarqand va Xurosondin
                  vorislarini tilab kelturub, mollarini solim topshurdi.
                </span>{" "}
                <br />
                <span>
                  Bisyor saxovati bor erdi. Xulki dagʻi saxovaticha bor edi,
                  xushxulq va harrof va fasih va shirinzabon kishi erdi, shujo’
                  va mardona kishi edi.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Ikki martaba oʻzi jami’ yigitlardin oʻzub qilich tegurdi: bir
                  martaba Axsi eshigida, yana bir martaba Shohruxiya eshigida.
                  Oʻqni oʻrta chogʻliq otar edi, bisyor zarb mushti bor edi,
                  aning mushtidin yigit yikilmogʻon yoʻqtur. Mulkgirlik
                  dagʻdagʻasi jihatidin heyli yarashlar urushqa va doʻstluqlar
                  dushmanliqqa mubaddal boʻlur edi.
                </span>{" "}
                <br />
                <span>
                  Burunlar koʻp ichar edi, soʻngralar haftada bir yo ikki qatla
                  suhbat tutar edi, xushsuhbat kishi edi. Taqrib bila xoʻb abyot
                  oʻqur edi. Soʻngralar ma’jun koʻprak ihtiyor qilur
                  edi.Ma’juniylikda kalla xushk boʻlur edi, etim shior erdi,
                  la’bi dagʻi bisyor erdi, hamisha nard oʻynar erdi, gohi kimor
                  ham qilur edi.
                </span>
                <br />
                <span>
                  <b>Masof va urushlari:</b> uch masof urush qilib edi. Avval
                  Yunusxon bila Andijonning shimol (8 a ) tarafida Sayxun
                  daryosining yoqasida, Takasekretku degan erda. Bu jihatdin ul
                  mavzi’ bu ismgʻa mavsumdurkim, togʻ domanasi jihatidin bu
                  daryo andoq tor oqarkim, rivoyat qilurlarkim, ul erdin taka
                  sekrigandur, magʻlub boʻlub ilikka tushti. Yana Yunusxon
                  yaxshiliq qilib viloyatigʻa ruxsat berdi. Bu erda urush
                  boʻlgʻon uchun Takasekretku urushi ul viloyatta ta’rix
                  boʻlubtur.
                </span>{" "}
                <br />
                <span>
                  Yana Turkistonda, Aris suyi yoqasida, Samarqand navohisini
                  chopib boradurgʻon oʻzbak bila Aris suyini muz bila kechib,
                  yaxshi bosib, asir va molni ayirib, tamom egalariga yondura
                  berib, hech nima tama’ kilmadi.
                </span>{" "}
                <br />
                <span>
                  Yana bir Sulton Ahmad Mirzo bila Shohruxiya va Oʻratepa
                  orasida Xavos degan kentta urushib magʻlub boʻldi.
                </span>{" "}
                <br />
                <span>
                  <b>Viloyati:</b> otasi Fargʻona viloyatini berib edi. Necha
                  mahal Toshkand va Sayram ham Mirzoning tasarrufida erdikim,
                  ogʻasi Sulton Ahmad Mirzo berib edi. Shohruxiyani firib bila
                  olib, necha mahal mutasarrif boʻlub edi. Oxir chogʻlarda
                  Toshkand va Shoxruxiya iliktin chikib edi. Fargʻona, Xoʻjand
                  va Oʻratepakim, asl bularning otlari kitoblarda Usrushnadur va
                  Usrush ham bitirlar, qoldilar. Xoʻjandni ba’zi doxili Fargʻona
                  (8 b) emas derlar. Sulton Ahmad Mirzokim, Toshkandga moʻgʻul
                  ustiga cherik tortib, Chir suyinikim, Toshkandtin ikki shar’iy
                  yoʻl boʻlgʻay, bu suvning yoqasidakim shikast topti,
                  Oʻratepada Hofizbek doʻldoy edi, Umarshayx mirzogʻa berdi.
                  Andin beri Usrushna Umarshayx mirzo tasarrufida edi.
                </span>{" "}
                <br />
                <span>
                  <b>Avlodi:</b> uch oʻgʻul va besh qiz mirzodin qolib edi. Bori
                  oʻgʻlonlaridin uluqmen Zahiriddin Muhammad Bobur edim; mening
                  onam Kutluq Nigorxonim edi. Yana bir oʻgʻul Jahongir mirzo
                  edi, mendin ikki yosh kichik edi, aning onasi moʻgʻulning
                  tuman beklaridin edi, Fotima Sulton otliq. Yanabir oʻgʻul
                  Nosir mirzo edi, onasi andijonliq edi, gʻunchachi edi, Umid
                  otliq. Mendin toʻrt yosh kichik edi.
                </span>{" "}
                <br />
                <span>
                  Bori qizlardin ulugʻ Xonzodabegim edi, mening bila bir tuqqon
                  edi, mendin besh yosh uluqedi. Men Samarqandni ikkinchi navbat
                  olgʻonda, bovujudkim, Shayboniyxondek kishi birla Saripulda
                  chiqib urushub, onchakim imkoni bor edi sa’y va ehtimomdin
                  taqsir qilmaduq nechukkim mahallida mazkur boʻlgʻusidur,
                  shikast topib kelib, besh oy qal’adorliq qildim, kal’adorliq
                  zabti va istehkomi va sardorlikda taqsir boʻlmadi. Atrof va
                  javonibdagʻi podshohlar va beklardin hech nav’ madad va
                  muovanat boʻlmadi, ma’yus boʻlub solib chiqtim.
                </span>{" "}
                <br />
                <span>
                  Ul fataratta Xonzodabegim Muhammad Shayboniyxongʻa tushub edi,
                  bir oʻgʻul boʻlub edi, Xurramshoh otliq maqbul oʻgʻlon edi.
                  Balx viloyatini anga berib (9 a ) edi, otasi oʻlgandin
                  bir-ikki yil soʻngra Tengri rahmatigʻa bordi. Shoh Ismoil
                  oʻzbakni Marvda bosqonda Xonzodabegim Marvda edi. Mening
                  jihatimdin yaxshi koʻrub, andin uzattilar, Kunduzda kelib
                  menga qotildilar. Muforaqat imtidodi oʻn yil boʻlub edi. Men
                  va Muhammadiy koʻkaldosh ikov kelduqbegim va begimning
                  yovugʻidagʻilar tanimadilar.Bovujudkim, otimni ayttim ham,
                  muddattin soʻngra tanidilar.
                </span>{" "}
                <br />
                <span>
                  Yana bir qiz Mehrbonubegim edi. Nosir mirzo bila bir tuqqon
                  edi, mendin ikki yosh ulugʻ edi.{" "}
                </span>
                <br />
                <span>
                  Yana bir qiz Shahrbonubegim edi, bu dagʻi Nosir mirzo bila bir
                  tuqqon edi, mendin sekqiz yosh kichik edi.
                </span>{" "}
                <br />
                <span>
                  Yana bir qiz Yodgor Sultonbegim edi, onasi Ogʻa Sulton otliq
                  gʻunchachi edi.
                </span>{" "}
                <br />
                <span>
                  Yana bir qiz Ruqiya Sultonbegim edi, onasi Maxdum Sultonbegim
                  edi, Qorakoʻzbegim derlar edi, ikkalasi mirzoning favtidin
                  soʻng boʻldilar. Yodgor Sultonbegimni mening ulugʻ onam Esan
                  Davlatbegim saxlab edi. Andijon va Axsini Shayboniyxon
                  olgʻonda Yodgor Sultonbegim Hamza Sultonning Abdullatif Sulton
                  otliq oʻgʻligʻa tushub edi. Men Hamza Sulton boshliq
                  sultonlarni Xatlon viloyatida bosib, Hisorni olgʻonda menga
                  qotildi. Oʻshul fataratta Ruqiya Sultonbegim Jonibek Sultongʻa
                  tushub (9 6 ) bir-ikki oʻgʻli boʻldi, turmadi. Bu fursatlarda
                  xabar keldikim, Tengri raxmatigʻa boribtur.
                </span>{" "}
                <br />
                <span>
                  <b>Xavotun va sarori:</b> Qutluq Nigorxonim edi, Yunusxonning
                  ikkinchi qizi, Sulton Mahmudxon va Sulton Ahmadxonning
                  egachisi edi.
                </span>
                <span>
                  Yunusxon Chingizxonning ikkinchi oʻgʻli Chigʻatoyxon
                  naslidindur. Yunusxon ibn Vaysxon ibn Sherali Oʻgʻlon ibn
                  Muhammadxon ibn Xizr Xojaxon ibn Tugʻluq Temurxon ibn Esan
                  Boʻgʻaxon ibn Doʻvaxon ibn Barokxon ibn Yesun Tuva ibn
                  Moʻtugon ibn Chigʻatoyxon ibn Chingizxon.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Chun muncha taqrib boʻldi, xonlarning axvolini dagʻi ijmol
                  bila zikr qilaling. Yunusxon va Esan Boʻgʻaxon Vaysxonning
                  oʻgʻlonlari edi. Yunusxon oʻgʻlonlari Ofoqxon va Jonboboxon
                  edi. Yunusxonning onasi turkistonliqqipchoqbeklaridin Temurbek
                  rioyat kilgʻon Shayx Nuriddinbekning qizi yo nabirasi boʻlur.
                </span>
                <br />
                <span>
                  Vaysxonning voqe’asida moʻgʻul ulusi ikki fariq boʻlur. Bir
                  pora Yunusxon sari va koʻpragi Esan Boʻgʻaxon sari boʻlur.
                  BurunroqYunusxonning egachisini Ulugʻbek mirzo Abdulaziz
                  mir-zogʻa olib edi. Ul munosabat bila Erzan borin tuman
                  beklaridin Mirak turkmankim, charos (10 a ) tuman beklaridin
                  edi, xonni uch-toʻrt ming oʻyluk moʻgʻul ulusi bila Ulugʻbek
                  mirzogʻa kelturdilarkim, koʻmak olib yana moʻgʻul ulusini
                  olgʻaylar, mirzo muruvvat kilmadi: ba’zisini asir kildi,
                  ba’zilarini birin-birin viloyatka parishon kildi. Erzan
                  buzugʻlugʻi moʻgʻul ulusida bir tarix boʻlubtur.
                </span>{" "}
                <br />
                <span>
                  Xonni Iroq sari oʻtkarib yibordilar. Borib bir yildin ortukroq
                  Tabrizda boʻldi. Ul mahalda Tabriz podshohi Jahonshoh Boroniy
                  qorakoʻyluq edi. Andin Sheroz keldi. Sherozda Shohrux
                  mirzoning ikkinchi oʻgʻli Ibrohim Sulton mirzo edi. Besh-olti
                  oydin soʻng Ibrohim Sulton mirzo oʻlub, oʻgʻli Abdullo mirzo
                  aning erida oʻlturdi. Abdullo mirzogʻa xon navkar edi,
                  mulozamat qilur edi. Oʻn etti, oʻn sekqiz yil xon Sheroz va ul
                  viloyatlarda boʻldi.
                </span>
                <br />
                <span>
                  Ulugʻbek mirzoning va oʻgʻullarining gʻavgʻolarida Esan
                  Boʻgʻaxon fursat topib kelib, Fargʻona viloyatini
                  Kandibodomgʻacha chopib, kelib Andijonni olib, elini tamom
                  asir kildi.
                </span>{" "}
                <br />{" "}
                <span>
                  Sulton Abusa’id Mirzo taxt olgʻonda cherik tortib borib,
                  Yangidin nari Isparada Moʻgʻuliston (10 b ) da Esan
                  Boʻgʻaxonni yaxshi bosti. Muning fitnasining daf’igʻa, Sulton
                  Abusa’id mirzo Yunusxonni bu munosabat bilakim, Abdulaziz
                  mirzo olgʻon egachisi xonimni olib edi, Iroq va Xurosondin
                  tilab toʻylar qilib, doʻstlar boʻlub, moʻgʻul ulusida xon
                  qilib yiborganda sagʻriychi tuman beklari tamom ul fursatta
                  Esan Boʻgʻaxondin yomonlab Moʻgʻulistongʻa kelib edilar,
                  bularning orasigʻa keldi. Ul fursatta sagʻriychi beklarning
                  ulugʻi Sher Hojibek edi, aning qizi Esan Davlatbegimni oldi.
                  Moʻgʻul toʻrasi bila xonni va Esan Davlatbegimni bir oq kiyiz
                  ustiga oʻlturgʻuzub xon koʻtardilar.
                </span>{" "}
                <br />
                <span>
                  Xonning bu Esan Davlatbegimdin uch qizi boʻldi. Boridin ulugʻ
                  Mehr Nigorxonim erdikim, Sulton Abusa’id mirzo ulugʻ oʻgʻli
                  Sulton Ahmad mirzogʻa qoʻlub edi. Mirzodin hech oʻgʻul-qiz
                  boʻlmadi. Soʻngra, fataratta Shayboniyxongʻa tushub edi. Men
                  Kobulgʻa kelganda, Shohbegim bila Samarqandtin Xurosongʻa
                  kelib, Xurosondin Kobulgʻa keldilar. Shayboniyxon Kandahorda
                  Nosir mirzoni kabagʻonda, men Lamgʻon azimati qildim. Xon
                  mirzo va Shohbegim va Mehr Nigorbegim Badaxshongʻa bordilar.
                  Mirzaxonni Muborakshoh(11 a) Kal’ayi Zafargʻa tilaganda
                  Abobakr Koshgʻariyning chopkunigʻa yoʻluqub, Shohbegim va Mehr
                  Nigorxonim va jami’ elning ahli va ayoli asirlikka tushub, ul
                  zolimi badkirdorning habsida dunyoyi foniyni vido’ kildilar.
                </span>
                <br />
                <span>
                  Ikkinchi qiz mening volidam Qutluq Nigorxonim edi. Aksar
                  qazokliklarda va fataratlarda mening bilan billa edilar,
                  Kobulni olgʻondin besh-olti oy soʻngra, tarix toʻqquz yuz oʻn
                  birda Tengri raxmatigʻa bordilar.
                </span>{" "}
                <br />
                <span>
                  Uchunchi qiz Xoʻb Nigorxonim edi, MuhammadH^usayn Koʻragon
                  dugʻlatka berib edilar, bir qizi, bir oʻgʻli boʻlub edi. Qizni
                  Ubaydxon olib edi. Men Buxoro va Samarqandni olgʻonda chiqmay
                  qolib edi. Sulton Sa’idxondin amakisi Sayyid Muhammad mirzo
                  Samarqandgʻa manga elchilikka kelganda anga qoʻshulub bordi.
                  Sulton Sa’idxon oldi. Oʻgʻul Haydar mirzo edi. Otasini oʻzbak
                  oʻlturgandin soʻng kelib, mening mulozimatimda uch-toʻrt yil
                  boʻldi, soʻngra ijozat tilab, Koshgʻarga xon qoshigʻa bordi.
                </span>{" "}
                <br />
                <span>
                  <i>
                    Boz gardad ba asli xud hama chiz, <br /> Zarri sofiyu
                    nukravu arziz.
                  </i>
                </span>{" "}
                <br />
                <span>
                  Bu tarixda, deydurlarkim, toyib boʻlub, yaxshi tarika paydo
                  qilibtur. Xat va tasvir va oʻq va paykon va zixgir xar nimaga
                  iligi chaspondur. Tab’i nazmi (11 b ) ham bordur. Manga
                  arzadoshti kelib edi, inshosi ham yomon emas.
                </span>{" "}
                <br />
                <span>
                  Xonning yana bir xotuni Shohbegim edi, agarchi oʻzga xotunlari
                  ham bor edi, vale oʻgʻlonlar va qizlarning onalari bu ikki
                  edi. Shohbegim Badaxshon shoi Shoh Sulton Muhammadning qizi
                  edi. Bu Badaxshon shohlari nasablarini Iskandar Faylakuska
                  etar derlar. Bu shohning yana bir qizikim, Shohbegimning
                  egachisi boʻlgʻay, Sulton Abusa’id mirzo olib edi. Andin
                  Abobakr mirzo boʻlub edi. Xonning bu Shohbegimdin ikki oʻgʻul
                  va ikki qizi boʻlub edi.
                </span>
                <br />
                <span>
                  Bu uchdin ulugʻ mazkur boʻlgʻon uch qizdin kichik Sulton
                  Mahmudxon erdikim,Samarkdnd va ul navohida ba’zi Xonikaxon
                  derlar.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  {" "}
                  Sulton Mahmudxondin kichik Sulton Ahmadxon edikim,
                  Olachaxongʻa mashhurdur. Olachaning vajhi tasmiyasi muni
                  derlarkim, qalmoq va moʻgʻul tili bila oʻlturguchini «olachi»
                  derlar. Qalmokni necha qatla bosib, qalin kishisin kqrgʻon
                  uchun «olachi» de-de kasrati isti’mol bila Olacha boʻlubtur.
                </span>
                <br />
                <span>
                  {" "}
                  Bu tarixda xonlarning zikri mukarraran taqrib bila kelgusidur.
                  Vaqoyi’ va holotlari anda mazkur boʻlgʻusidur.
                </span>{" "}
                <br />
                <span>
                  Oʻzgalardin kichik bir qizdin ulugʻ (12 a ) Sulton Nigorxonim
                  edikim, Sulton Mahmud mirzogʻa chiqarib edilar, Mirzodin bir
                  oʻgʻli boʻlub edi, Sulton Vays otluq, zikri bu tarixda
                  kelgu-sidur, Sulton Mahmud mirzo oʻlgandin soʻng oʻgʻlini
                  olib, hech kimga xabar kilmay, Toshkandga ogʻalarigʻa borib
                  edi. Bir necha yildin soʻng Adik Sultongʻakim, Chingizxonning
                  ulugʻ oʻgʻli Joʻji nasli kdzoq sultonlaridindur, berdilar.
                  Xonlarni Shayboniyxon bosib Toshkand va Shohru-xiyani olgʻonda
                  oʻn ikki moʻgʻul navkari bila qochib Adik Sultongʻa bordi.
                </span>
                <br />
                <span>
                  Adik Sultondin ikki qizi boʻldi, birini Shayboniyxon
                  sultonlarigʻa, yana birini Sulton Sa’idxonning oʻgʻli Rashid
                  Sultongʻa berdi. Adik Sultondin soʻng qozoq ulusining xoni
                  Qosimxon oldi. Derlarkim, qozoq xon va sultonlarining orasida
                  hech kim ul ulusni Qosimxoncha zabt qilgʻon emastur. Cherikini
                  uch yuz mingga yovuq chenarlar edi. Qosimxon oʻlgandin soʻng
                  xonim Koshgʻargʻa, Sulton Sa’idxon qoshigʻa keldi.
                </span>
                <br />
                <span>
                  Boridin kichik Davlat Sultonxonim edi. Toshkand buzugʻlugʻida
                  Shayboniyxonning oʻgʻli Temur Sultongʻa (12 b ) tushub erdi,
                  aning bir qizi boʻlub edi. Samarqandtin mening bilan bila
                  chikib edilar, uch-toʻrt yil Badaxshon viloyatida boʻldilar,
                  andin soʻngra Koshgʻargʻa Sulton Sa’idxon qoshigʻa bordilar.
                </span>{" "}
                <br />
                <span>
                  Umarshayx mirzoning haramlaridin yana bir Xoja Husaynbekning
                  qizi Ulus ogʻa edi, andin bir qiz boʻlub edi, kichiklikda
                  oʻldi. Bir yil, bir yarim yildin soʻng haramdin chiqardilar.
                </span>
                <br />
                <span>
                  Yana bir Fotima Sulton ogʻa edi. Moʻgʻul tuman beklaridin edi.
                  Mirzo boridin burun bu Fotima Sulton ogʻani olib edi.
                </span>
                <br />
                <span>
                  Yana bir Qarokoʻzbegim edi, soʻngralar olib edi, heyli
                  suyukluk edi. Mirzoning xushomadigʻa nasabini Sulton Abusa’id
                  mirzoning ogʻasi Minuchexr mirzogʻa etkurub edilar.
                </span>
                <br />
                <span>
                  Gʻuma va gʻunchachi heyli bor edi. Bir Umid ogʻacha edi,
                  mirzodin burun oʻlub edi. Mirzoning oxir mahallarida bir Tun
                  Sulton edi, moʻgʻuldin edi. Yana biri Ogʻa Sulton edi.
                </span>
                <br />
                <span>
                  <b>Umarosi:</b> Xudoyberdi Temurtosh erdi. Hiri hokimi
                  Oqboʻgʻabekning ogʻasining naslidindur. Sulton Abusa’id mirzo
                  Joʻgi mirzoni Shohruxiyada kabagʻonda Fargʻona viloyatini
                  Umarshayx mirzogʻa berib, eshikini bu Xudoy (13 a ) berdi
                  Temurtoshgʻa boshlatib yiborib erdi. U mahalda bu Xudoyberdi
                  Temurtosh yigirma besh yoshda erdi, agarchi yoshi kichik edi,
                  tuzuki va zabti va rabti bisyor yaxshi edi. Bir-ikki yildin
                  soʻngra Ibrohim Bekchik Oʻsh navohisini chopqonda Xudoyberdi
                  Temurtosh keynicha borib, urushub, bosilib, shahid boʻldi. Ul
                  fursatta Sulton Ahmad mirzo Uratepaning Oqqachqay degan
                  yaylogʻida edikim, Samarqandtin oʻn sekqiz yigʻoch sharq
                  jonibidur, Sulton Abusa’id mirzo Boboxokiyda erdikim, Hiridin
                  oʻn ikki yigʻoch sharq soridur, bu xabarni Abdulvahhob
                  shigʻovuldin arzadosht qilib, mirzogʻa chopturdilar, bu yuz
                  yigirma olti yigʻoch yoʻlni toʻrt kunda chopar.
                </span>
                <br />
                <span>
                  Yana bir Hofiz Muhammadbek doʻldoy erdi, Sulton Malik
                  Koshgʻariyning oʻgʻli Ahmad Hojibekning inisi erdi.
                  Xudoyberdibek oʻlgandin soʻngra muni eshik ihtiyori qilib
                  yiborib edilar. Sulton Abusa’id mirzoning voqi’asidin soʻngra,
                  Andijon beklari aning bila yaxshi chiqishmogʻon jihatidin,
                  Samarkdndgʻa Sulton Ahmad mirzo mulozamatigʻa bordi. Sulton
                  Ahmad mirzogʻa Chir shikasti boʻlgʻonda Oʻratepada (136) erdi.
                  Umarshayx mirzo Samarqand azimati bila Uratepa ustiga kelganda
                  Oʻratepani mirzo mulozimlarigʻa topshurub, mirzo mulozamatida
                  boʻldi. Umarshayx mirzo ham Andijon xukumatini anga berdi.
                  Soʻngralar Sulton Mahmudxon qoshigʻa borib edi. Mirzo Xonni
                  topshurub, Dizakni anga berib edilar. Men Kobulni olgʻondin
                  burunroq Makka azimati qilib, Hind yoʻli bila mutavajjih
                  boʻldi. Yoʻlda Tengri rahmatigʻa boribtur. Faqir va kamsuhan
                  va behaysiyat kishi edi.
                </span>
                <br />
                <span>
                  Yana bir Xoja Husaynbek edi, odmi va faqir kishi edi. Ul zamon
                  dasturi bila ichkularda koʻshuqlarni yaxshi aytur ekandur.
                </span>
                <br />
                <span>
                  Yana bir Shayx Mazidbek edi, manga avval bek atka ani qilib
                  edilar. Zabti va tuzuki heyli yaxshi edi. Bobur mirzogʻa
                  xizmat qilgʻondur. Umarshayx mirzo qoshida andin ulugʻroq bek
                  yoʻq edi. Fosiq kishi erdi, chuhra saxlar edi.
                </span>
                <br />
                <span>
                  Yana bir Ali Mazidbek kavchin edi, ikki katla yogʻiy boʻldi:
                  bir martaba Axsida, yana bir martaba Toshkandta.
                </span>{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Munofiq va fosiq va haromnamak va yaramas kishi edi.
                </span>{" "}
                <br />
                <span>
                  Yana bir Hasan Ya’qubbek edi. Kichik koʻngulluq yaxshi tab’liq
                  chust va chaspon kishi edi. Bu bayt aningdur:
                </span>
                <br />
                <span>
                  <i> Boz oy, ey humoy, ki be toʻtii xatat,</i>
                </span>
                <br />
                <span>
                  <i> Nazdik shudki, zog barad ustuxoni man.</i>
                </span>
                <br />
                <span>
                  Mardona kishi edi. Oʻkni yaxshi otar edi, chavgonni (14 a )
                  yaxshi oʻynar edi. Xok pallani yaxshi socharar erdi. Umarshayx
                  mirzo voqi’asidin soʻng mening eshigimda sohib ihtiyor ul edi.
                </span>
                <br />
                <span>Ichi tor va kam havsala va fitnaroq kishi edi.</span>
                <br />
                <span>
                  Yana bir Krsimbek edi, kavchin edi. Qadimiy Andijonning
                  qoʻshun beklaridin edi. Hasan Ya’kubbekdin soʻng mening
                  eshigimda sohib ixtiyor ul edi. Oxir umrigʻacha ixtiyor va
                  e’tibori ortti, oʻksumadi. Mardona kishi edi. Bir martaba
                  Koson navohisini chopqon oʻzbakning keynicha borib yaxshi
                  bosti. Umarshayx mirzo qoshida qilich chopib edi. Yassi Kechit
                  urushida ham yaxshi chopqulashti. Qozokliklarda Mascho
                  koʻhistonidin Sulton Mahmudxon qoshigʻa bormoq azimati
                  qilgʻonda Qosimbek ayrilib Xisravshoh qoshigʻa bordi. Tarix
                  toʻqquz yuz oʻndakim, Xisravshoxni olib, Kobulda Muqimni
                  qabadim, Qosimbek ul fursatta keldi, yana burnogʻidekoʻq
                  rioyat va shafkat kildim. Turkman hazorasini Darayi Xushda
                  chopqonda Qosimbek bovujudi qariliq yigitlardin yaxshiroq
                  yurugan jihatidin Bangish viloyatini juldu berdim. Soʻngra (14
                  6 ) Kobulgʻa kelganda Humoyungʻa bek atka qildim. Zamini
                  Dovarni olgʻon fursatlarda Tengri rahmatigʻa bordi. Musulmon
                  va mutadayyin va muttaqiy kishi edi va shubhaliq taomdin
                  parhiz qilur edi. Royi va tadbiri bisyor yaxshi edi. Heyli
                  mutoyaba qilur edi. Bovujudikim ummiy edi, xushtab’ona
                  zaro-fatlar qilur edi.
                </span>
                <br />
                <span>
                  Yana bir Boboquli Bobo Alibek edi. Shayx Ali bahodirning
                  naslidin edi. Shayx Mazidbek oʻlgandin soʻng ani manga bek
                  atka qildilar. Sulton Ahmad mirzo Andijongʻa cherik tortqonda
                  Sulton Ahmad mirzogʻa kirib Oʻratepani berdi. Sulton Mahmud
                  mirzodin soʻng Samarqandtin qochib keladurganda Oʻratepadin
                  Sulton Ali mirzo chikib urushub, bosib oʻlturdi. Zabti va
                  yarogʻi yaxshi edi. Navkarni yaxshi saxlar edi. Benamoz edi,
                  roʻza tutmas edi. Zolim va kofirvash kishi edi.
                </span>
                <br />
                <span>
                  Yana bir Ali Doʻst tagʻoyi edi, sagʻriychi tuman beklaridin
                  edi. Mening onamning onasi Esan Davlatbegimga urugʻ boʻlur
                  edi, Umarshayx mirzo zamonidin men koʻproq rioyat qilib erdim.
                  Iligidin ish kelur dedilar. Bu necha yilkim, mening qoshimda
                  edi, hech andoq, ishi zohir boʻlmadi (15 a ) kim, desa
                  boʻlgʻay. Sulton Abusa’id mirzogʻa xizmat kilgʻon davrida
                  yadachiliq da’vosini qilur edi. Qushchi edi. Yaramas axloq va
                  atvorliq kishi edi.Baxil va fitna va zumuxt va munofiq va
                  xudpisand va kattiq soʻzluk va sovuq yuzluk kishi edi
                </span>
                <br />
                <span>
                  Yana bir Vays Logʻariy edi. Samarqandliq toʻqchi elidin edi.
                  Umarshayx mirzo qoshida soʻngralar heyli mukarrab boʻlub erdi.
                  Mening bilan qazoqlikdarda bor edi. Ra’y va tadbiri heyli
                  yaxshi edi. Bir nima mufattin edi.
                </span>
                <br />
                <span>
                  Yana bir Mir Gʻiyos tagʻoyi edi. Ali Doʻstning inisi edi.
                  Moʻgʻul mirzodalari orasida Sulton Abusa’id mirzo eshigida
                  mundin ilgarroq kishi yoʻq edi. Sulton Abusa’id mirzoning
                  chorsu muhri munda edi. Umarshayx mirzoning oxir zamonlarida
                  koʻp mukarrab boʻlub edi. Vays Logʻariy bila musohib edi.
                  Kosonnikim, Sulton Mahmudxongʻa berdilar, andin soʻng oxir
                  umrigʻacha xon xizmatida-oʻq edi. Xon ham heyli rioyat qilib
                  edi. Kulagach va hazzol kishi edi. Fiskda bebok kishi edi.
                </span>
                <br />
                <span>
                  Yana bir Ali Darvesh edi. Xurosonliq edi. Sulton Abusa’id
                  mirzo qoshida Xuroson chuhrasi chargasida xizmat kilur edi.
                  Xuroson va Samarqand Sulton Abusa’id mirzoning taxti (15 6 )
                  tasarrufigʻa kirganda bu ikki poytaxtning ishga yarar
                  yigitlarini xossa tobin qilib, Xuroson chuhra tobini va
                  Samarqand chuhra tobini der ekandur. Mening krshimda Samarqand
                  eshigida yaxshilar bordi. Mardona kishi edi. Nasxta’liq xatini
                  tavre bitir edi. Xushomad aytur edi. Tab’igʻa xissat gʻolib
                  edi.
                </span>
                <br />
                <span>
                  Yana bir Qanbar Ali edi, moʻgʻul edi, axtachidin edi. Otasi
                  viloyatka kirib necha mahal sallohliq qilgʻon uchun Qanbar Ali
                  salloh der edilar. Yunusxon qoshida oftobachilik kildi,
                  soʻngra bek boʻlub edi. Mening qoshimda heyli ulugʻ rioyat
                  topib edi. Ishga etguncha ehtimomi yaxshi edi. Ishga etgan
                  mahalda qoltogʻayligʻi bor edi. Purgoʻy va parishongoʻy edi.
                  Muqarrardur, har kimki koʻp aytur, parishon aytur. Xavsalasi
                  tor va tiyra magʻz kishi edi.
                </span>
                <br />
                <span>
                  Umarshayx mirzogʻa bu voqi’a dast berganda men Andijonda
                  chahorbogʻda edim. Seshanba kuni, Ramazon oyining beshida bu
                  xabar Andijongʻa keldi.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Iztirob ila otlanib, krshimdagʻi navkar va savdar bila
                  qoʻrgʻon azimati qildim. Mirzo darvozasigʻa etgan mahalda
                  Shirim tagʻoyi jilavimni olib, Namozgoh sori tebradi.
                  Xayoligʻa bu kechibturkim, Sulton Ahmad mirzo ulugʻ (16 a )
                  podshohdur, qalin cherik bila kelsa, beklar meni va viloyatni
                  topshurgʻularidur. Meni Oʻzgand va Olatogʻ domanasi sori olib
                  borgʻay. Agar viloyatni bersalar, men bori ilikka tushmay,
                  tagʻoyilarim Olachaxongʻa yo Sulton Mahmudxongʻa borgʻaymen.
                </span>
                <br />
                <span>
                  Xoja Mavlonoyi qozikim, Sulton Axhmad qozining oʻgʻli va Shayx
                  Burhoniddin Qilichning naslidur, ona tarafidin Sulton Ilik
                  Moziygʻa etar, bularning xonvodalari ul viloyatta marji’ va
                  shayxulislom yoʻsunluq boʻlakelgandur, zikrlari munda mukarrar
                  kelgusidur, qoʻrgʻon ichidagi beklar bu xabarni topib, Xoja
                  Muham-mad Darziynikim, Umarshayx mirzoning boyrisi va bir
                  qizining atkasi edi, yiborib ul dagʻdagʻalarni bularning
                  xotiridin raf’ qilib, Namozgoxka yovuq etgan mahalda meni olib
                  yondi. Kelib arkka tushdum. Xoja Mavlonoyi qozi va beklar
                  mening qoshimda kelib, soʻz va kengashni bir erga koʻyub,
                  qoʻrgʻonning burj va borusining zabt va rabtigʻa mashgʻul
                  boʻldilar. Hasan Ya’kub va Qosim qavchin va yana ba’zi
                  beklarkim, Margʻinon va ul taraflarda ilgʻor qoʻyub edilar,
                  bir-ikki kundin soʻng kelib mulozamat qilib, borcha yakdil va
                  yakjihat jidd (16 b ) va extimom bila qal’adorliqqa mashgʻul
                  boʻldilar.
                </span>
                <br />
                <span>
                  Sulton Ahmad mirzo Oʻratepa va Xoʻjand va Margʻinonni olib
                  kelib, Andijonning toʻrt yigʻochida, Kubogʻa tushti. Bu
                  fursatta, Darvesh Gov otliq Andijonning arbobidin nomunosib
                  soʻz aytqon uchun, yasoqqa etti. Bu siyosattin tamom el
                  bosildilar.
                </span>
                <br />
                <span>
                  Xoja Qozini va Uzun Hasan Xoja Husaynni elchilikka bu mazmun
                  bila yiborildikim, bu viloyatta mulozimlardin bir kishini xud
                  qoʻyulgʻusidur. Men ham mulozim va ham farzand, agar bu
                  xizmatni manga uhda qilsalar, yaxshiroq va osonroq faysal
                  topqusidur.
                </span>
                <br />
                <span>
                  Sulton Ahmad mirzokim, kamsuxan va faqir va odmi kishi edi.
                  Har soʻz-un va ish-kuch beklarsiz qaror topmas edi, beklar bu
                  soʻzlarga multafit boʻlmay, durusht javoblar aytib, ilgariga
                  koʻchtilar. Tengri taolokim, oʻz kudrati komilasi bila har
                  ishimni har mahalda andoqkim boyadu shoyad beminnati maxluq
                  rost kelturubdur, munda ham necha ishni bois kildikim, alar bu
                  kelmakdin oʻsondilar, balki bu tavajjuhdin pushaymon boʻlub,
                  bemurod yondilar.
                </span>
                <br />
                <span>
                  Biri bukim, Kuboning botqoqlik qora suyi bor, koʻprugidin
                  oʻzga erdin kechib boʻlmas, qalin cherik (17 a ) kelib
                  koʻprukda tiqilib, qalin ot va teva bu qora suvga yiqilib
                  zoyi’ boʻldi. Uch-toʻrt yil mundin burunroq Chir suyining
                  guzarida-oʻq shikast topib edilar, bu voqi’a andin yod berib,
                  cherik eliga vahm gʻolib boʻldi.
                </span>
                <br />
                <span>
                  Yana bir bu kim, ul fursatta andoq ot oʻlati boʻldukim,
                  tavila-tavila otlar yiqilib oʻla kirishti.
                </span>
                <br />
                <span>
                  Yana bir bukim, bizning sipohiy va raiyatni andoq yakdil va
                  yakjihat toptilarkim, to jon va tanlarida ramaq va tavon
                  bordur, jon tortmoqdin qoʻymagʻaylar.
                </span>
                <br />
                <span>
                  Bu jihatlardin zarurat boʻlub, Andijonning bir yigʻochidin
                  Darvesh Muhammad tarxonni yibordilar, ichkaridan Hasan Ya’qub
                  Namozgoh navohisida chiqib koʻrushub, sulxguna qilib yondilar.
                </span>
                <br />
                <span>
                  Xoʻjand suyining shimol jonibidinkim, Sulton Mahmudxon
                  mutavajjih edi, kelib Axsini qabadi, Jahongir mirzo anda edi,
                  beklardin Ali Darveshbeq Mirzoquli koʻkaldosh, Muhammad
                  Boqirbeq Shayx Abdullo eshikogʻa Axsida edilar. Vays Logʻariy,
                  Mir Gʻiyos tagʻoyi ham anda edi. Beklardin tavahhum qilib,
                  Kosongʻakim, Vays Logʻariyning viloyati edi, bordilar. Nosir
                  mirzogʻa Vays Logʻariy bek atka edi. Bu jihattin Nosir mirzo
                  Kosonda boʻlur edi. Xon Axsi navohisigʻa etganda bu beklar
                  xongʻa (17 6 ) kirib Kosonni berdilar. Mir Gʻiyos xon
                  mulozamatida turub, Vays Logʻariy Nosir mirzoni Sulton Ahmad
                  mirzogʻa olib bordi. Muhammad Mazid tarxongʻa topshurdilar.
                </span>
                <br />
                <span>
                  Xon Axsi yovugʻigʻa kelib necha qatla urush soldi, hech ish
                  qila olmadi. Axsidagʻi beklar va yigitlar yaxshi jonlar
                  torttilar. Bu asnoda Sulton Mahmudxongʻa oriza boʻldi, urush
                  solib ham oʻsonib edi, oʻz viloyatigʻa murojaat qildi.
                </span>
                <br />
                <span>
                  Abobakr dugʻlat Koshgʻariykim, hech kimga bosh indurmay, necha
                  yil erdikim, Koshgʻar va Xoʻtan hokimi edi, ul dagʻi viloyat
                  dagʻdagʻasi bila Oʻzgand yovugʻigʻa kelib, qoʻrgʻon solib,
                  viloyatgʻa buzugʻluq qila kirishti. Xoja Qozi va jami’ beklar
                  ta’yin boʻldikim, borib Koshgʻariyni daf’ qilgʻaylar, yovuq
                  ettan mahalda Koshgʻariy koʻrdikim, bu favjning harifi
                  emastur, Xoja Qozini oragʻa solib, yuz makr va hiyla bila
                  xalos boʻldi.
                </span>
                <br />
                <span>
                  Mundogʻ ulugʻ vaqoyi’ roʻy berganda Umarshayx mirzodin qolgan
                  beklar va yigitlar yaxshi qatlanib mardona jonlar torttilar.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Mundogʻ ulugʻ vaqoyi’ roʻy berganda Umarshayx mirzodin qolgan
                  beklar va yigitlar yaxshi qatlanib mardona jonlar torttilar.
                  Axsidin mirzoning onasi Sultonbegim va Jahongir mirzo va ahli
                  haram va beklar Andijongʻa keldilar. Azo rasmini bajo
                  kelturub, osh va taom fuqaro va masokingʻa tortildi. (18 a )
                  Bu muhimmottin forigʻ boʻlgʻondin soʻng, cherik va viloyotning
                  tartib va nasaqi va zabt va rabtigʻa ishtigʻol koʻrsatildi.
                  Andijon hukumati va eshik ixtiyori Hasan Ya’qubgʻa muqarrar
                  boʻldi. Oʻsh Qosim qavchingʻa qaror topti. Axsi va Margʻinon
                  Uzun Hasangʻa va Ali Doʻst tagʻoyigʻa ta’yin boʻldi. Umarshayx
                  mirzoning oʻzga beklari va yigitlariga har qaysigʻa faroxuri
                  hollari viloyat va er va mucha va charga va vajhi istiqomat
                  muqarrar va muayyan boʻldi.
                </span>
                <br />
                <span>
                  Chun Sulton Ahmad mirzo murojaat kildi, ikki-uch manzildiy
                  soʻng mizoji e’tidol nahajidin munharif boʻlub, muhriq isitma
                  tori boʻldi. Oʻratepanavohisi Oqsuvgʻa etganda shavvol oyining
                  avositida tarix sekqiz yuz toʻqson toʻqquzda qirq toʻrt
                  yoshida olami foniyni vido’ kildi.
                </span>
                <br />
                <span>
                  <b>Valodat va iasabi: </b>valodati sekqiz yuz ellik beshda,
                  Sulton Abusa’id mirzo taxt olgʻon yili edi. Sulton Abusa’id
                  mirzoning bori oʻgʻlonlaridin ulugʻi bu edi. Onasi Oʻrda
                  Boʻgʻa tarxonning qizi, Darvesh Muhammad tarxonning egachisi
                  edi, Mirzoning e’tiborliq xotuni edi.
                </span>
                <br />
                <span>
                  <b>Shakl va shamoiili:</b> baland boʻyluq, qunqor soqolliq,
                  qizil yuzluq tanbal kishi edi. Soqoli engakida edi. Ikki
                  yangoqida soqoli (18 6 ) yoʻq edi. Bisyor xushmuhovara kishi
                  edi. Dastorni ul zamon dasturi bila chahorpech chirmab,
                  aloqasini ilgarrak qoshining ustiga qoʻyar edi.
                </span>
                <br />
                <span>
                  <b>Axlok va atvori:</b> hanafiy mazhabliq, poqiza e’tikrd
                  kishi edi, besh vaqt namozni betark oʻtar edi. Shurb
                  mahallarida ham namozi tark boʻlmas edi. Hazrati Xoja
                  Ubaydullogʻa irodati bor edi. Hazrati Xoja murabbiy va
                  muqavviy edilar. Bisyor muaddab bor edi, alalxusus, Xoja
                  suhbatida, derlarkim, hargiz Xoja majlisida tizi bir-bir
                  tiziga yovutkagan emastur. Bir navbat hazrati Xoja suhbatida
                  bar xilofi odat oyogʻini yovutkab oʻlturubtur, Mirzo
                  qoʻpqondin soʻng hazrati Xoja buyurubturlarkim, mirzo
                  oʻlturgʻon erni bokkdylar; bir soʻngak bor ekandur.
                </span>
                <br />
                <span>
                  Hech nimarsa oʻqugʻon emas edi, omi edi. Bovujudkim, shahrda
                  ulgʻayib edi, turk va sodda edi. Tab’din bahrasi yoʻq edi.
                  Odil kishi edi. Xazrati Xojaning ham ayogʻlari aroda edi.
                  Aksar muhimmot shar’ tariqi bila faysal topar edi. Ahd va
                  qavligʻa rost va durust edi. Hargiz andin hilofe zohir
                  boʻlmadi.{" "}
                </span>
                <br />
                <span>
                  Shijoati bor edi. Agarchi, hech andoq boʻlmadikim, oʻzining
                  iligi ishga etmish boʻlgʻay, vale derlarkim, ba’zi
                  ma’rakalarda andin asari shijoat zohir boʻlur ekandur. Oʻkni
                  bisyor (19 a ) yaxshi otar erdi. Ilbosunga oʻki va tirgazi
                  aksar tegar edi. Qabaqni maydonning ul boshi, bu boshidin
                  kirib aksar urar edi. Oxirlar tanbal boʻlgʻonlarida qirgʻovul
                  va boʻdanani piyozi bila otib kam yozar edi. Qushchi kishi
                  erdi, qush gʻalaba solur edi, yaxshi solur erdi. Ulugʻbek
                  mirzodin soʻng oncha qushchi podshoh yoʻq edi.
                </span>
                <br />
                <span>
                  Asru koʻp hayosi bor erdi. Derlarkim, xilvatlarda mahram va
                  ichkilaridin ham oyogʻini yopar ekandur. Gohikim ichkulukka
                  tushar erdi, yigirma-oʻttiz kun payo-pay ichar erdi. Gohikim,
                  chogʻirdin chiqar erdi, yana yigirma-oʻttiz kun ichmas edi.
                  Bir oʻlturgʻon bila majlisda gohi bir kechakunduz oʻlturur
                  erdi, yaxshi ichar erdi. Chogʻir ichmas kunlari basitni guzaro
                  er erdi. Tabiatigʻa imsok gʻolib erdi, kamsuxan va odmi kishi
                  erdi, ixtiyori beklari ilgida edi.
                </span>
                <br />
                <span>
                  <b>Masoflari:</b> Toʻrt masof urushti. Avval Shayx Jamol
                  argʻunning inisi Ne’mat argʻun bila, Zomin navohisida, Oqar
                  tuzida, gʻolib boʻldi. Yana bir martaba Umarshayx mirzo birla
                  Xavosta ham gʻolib boʻldi. Yana bir martaba Toshkand
                  navohisida, Chir suyining yoqasida Sulton Mahmudxon bila,
                  agarchi masof yoʻq (19 6) edi, moʻgʻulning chopqunchisi
                  birin-ikin cherikning keynidin kelib partalgʻa ilik qoʻygʻon
                  bila, muncha qalin cherik urush yoʻq, talosh yoʻq, biri-biriga
                  boqmay buzuldilar, koʻprak cherik eli Chir suyida gʻarq
                  boʻldilar. Yana bir martaba Haydar koʻkaldosh bila
                  Eryayloqning navohisida gʻolib boʻldi.
                </span>
                <br />
                <span>
                  <b>Viloyoti:</b> Samarqand va Buxoro erdikim, otasi berib edi.
                  Shayx Jamolni Abdulquddus oʻlturgandin soʻng Toshkand va
                  Shohruxiya va Sayramni olib edi, necha mahal tasarrufida edi.
                  Soʻngra Toshkand bila Sayramni inisi Umarshayx mirzogʻa berib
                  edi. Xoʻjand va Oʻratepa ham necha mahal Sulton Ahmad mirzoda
                  edi.
                </span>
                <br />
                <span>
                  <b>Avlodi:</b> Ikki oʻgʻli boʻlub edi, kichikligida qolmadi.
                  Besh qizi bor edi, toʻrti Qutuqbegimdin edi. Boridin ulugʻ
                  Robia Sultonbegim edi, Qorakoʻzbegim derlar edi. Sulton
                  Mahmudxonga oʻzi hayotida chiqarib edi. Xondin bir oʻgʻli
                  boʻlub edi, Boboxon otliq, heyli makbulgʻina oʻgʻlon edi.
                  Oʻzbaklar xonni Xoʻjandta shahid qilgʻonda, ani va yana andoq
                  necha norasidani zoyi’ kildilar. Sulton Mahmudxonning
                  voqi’asidin soʻng Jonibek (20 a ) Sulton oldi
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Ikkinchi qizi Soliha Sultonbegim edi, Oqbegim derlar edi.
                  Sulton Ahmad mirzodin soʻngra Sulton Mahmud mirzo toʻylar
                  qilib, ulugʻ oʻgʻli Sulton Mas’ud mirzogʻa oldi.Soʻngra
                  Shohbegim, Mehr Nigorxonim bila Koshqargʻa tushti. Uchunchi
                  qiz Oyisha Sultonbegim edi. Besh yoshimda Samarqandga kelganda
                  manga qoʻlub edilar. Soʻngra qazoqlikdarda Xoʻjandka keldi,
                  anda olib edim. Samarqandni ikkinchi navbat olgʻonda birgina
                  qizi boʻlub edi, necha kundin soʻng Tengri rahmatigʻa bordi.
                  Toshkand buzugʻlugʻidin burunroq egachisining angizi bila
                  mendin chiqti
                </span>
                <br />
                <span>
                  Toʻrtunchi qizi Sultonbegim edi, Sulton Ali mirzo olib edi,
                  andin soʻng Temur Sulton olib edi, andin soʻng Mahdiy Sulton
                  olib edi.
                </span>
                <br />
                <span>
                  Boridin kichik qizi Ma’suma Sultonbegim edi. Onasi argʻundin,
                  Sulton argʻunning birodarzodasi Habiba Sultonbegim edi. Men
                  Xurosongʻa borgʻonda koʻrub, xushlab, tilab, Kobulgʻa kelturub
                  oldim. Bir qizi boʻldi. (20 b ) Ushal fursatta-oʻq «zocha»
                  zaxmati bila Tengri rahmatigʻa bordi, qizigʻa onasining
                  otini-oʻq qoʻyuldi.
                </span>
                <br />
                <span>
                  <span>Xavotin va sarori:</span> avvali, Sulton Abusa’id mirzo
                  qoʻlgʻon Mehr Nigorxonim edi. Yunusxonning ulugʻ qizi, mening
                  onamning tuqqon egachisi edi. Yana bir tarxonlardin edi,
                  Tarxonbegim derlar edi. Yana bir Qutuqbegim edi. Ushbu
                  Tarxonbegimning koʻkaldoshi edi, Sulton Ahmad mirzo
                  oshiqliklar bila olib edi, asru koʻp suyuklik edi va koʻp
                  musallit edi. Chogʻir ichar edi. Aning tirikligida Sulton
                  Ahmad mirzo oʻzga haramgʻa bormas edi. Oxir oʻlturdi va
                  badnomligʻidin xalos boʻldi. Yana bir Xonzodabegim edi, Tirmiz
                  xonzodalaridin edi. Men Samarqandgʻa besh yoshimda Sulton
                  Ahmad mirzo qoshigʻa kelgan fursatda olib edi. Hanuz yuz
                  yopugʻi bor edi. Turkona rasm bila manga buyurdilar, men
                  yuzini ochtim.
                </span>
                <br />
                <span>
                  Yana bir Ahmad Hojibekning qiz nabirasi edi, Latifbegim otliq
                  mirzodin soʻng Hamza Sulton olib edi, Hamza Sultondin uch
                  oʻgʻli boʻlub edi. Men Hamza Sulton va Temur Sulton boshliq
                  sultonlarni bosib, Hisorni olgʻonda, bu sultonzodalar yana
                  necha sultonzodalar tushub edi, borini ozod kildim.
                </span>
                <br />
                <span>
                  Yana bir Habiba Sultonbegim edi. Sulton argʻunning
                  birodarzodasi edi.
                </span>
                <br />
                <span>
                  <b>Umarosi:</b> Jonibek doʻldoy edi, Sulton Malik
                  Koshgʻariyning inisi edi. Sulton Abusa’id mirzo Samarqand
                  hhukumatini va Sulton Ahmad mirzo oʻz eshigining (21 a )
                  ixtiyorini munga berib edi, muni eshikogʻo qilib edi. Gʻarib
                  axloq va atvorliq kishi ekandur. Andin gʻarib nimalar heyli
                  rivoyat kilurlar. Ul jumladin biri budurkim, Samarqand hokimi
                  ekan fursatlar oʻzbakdin elchi kelur, oʻzbak ulusida bu elchi
                  zoʻrgʻa mashhur ekandur. Oʻzbak zoʻr kishini «boʻka» der
                  emish. Jonibek derkim: boʻkamusen, boʻka boʻlsang, kel,
                  kurashaling. Bu elchi har necha muzoyaka kilur, koʻymas,
                  kurashurlar, Jonibek yikar. Mardona kishi edi.
                </span>
                <br />
                <span>
                  Yana bir Ahmad Hojibek edi. Sulton Malik Koshgʻariyning oʻgʻli
                  edi. Hiri hukumati Sulton Abusa’id mirzo necha mahal munga
                  berib edi. Obogʻasi Jonibek oʻlgandin soʻng, aning muchasini
                  berib, Samarqandgʻa yibordi. Xushtab’ va mardona kishi edi,
                  «Vafoiy» taxallus kilur edi. Soxibi devon edi, she’ri yomon
                  emas edi, bu bayt aningdurkim:
                </span>
                <br />
                <span>
                  <i>Mastam, ey muhtasib, imroʻz zi man dast bidor,</i>
                </span>
                <br />
                <span>
                  <i>Ehtisobam bikun, on roʻz ki yobi hushyor.</i>
                </span>
                <br />
                <span>
                  Mir Alisher Navoiy Hiridin Samarqandgʻa kelgan fursatlar Ahmad
                  Hojibek bila boʻlur edi. Sulton Husayn mirzo podshoh
                  boʻlgʻondin soʻngra Hiriga keldi. Asru ulugʻ rioyat topdi.
                  Ahmad Hojibek yaxshi tupchokdar saxlab, (21 b ) yaxshi minar
                  edi. Bu tupchoqlar aksar xonazodi edi. Agarchimardona kishi
                  edi, sardorligʻi mardonaligʻidek emas edi. Beparvo kishi edi.
                  Ish-kuchini navkar-savdari saru somon kilur edi. Boysunqur
                  mirzo Sulton Ali mirzo bila Buxoroda urushub magʻlub
                  boʻlgʻonda ilikka tushti. Darvesh Muhammad tarxonning qonining
                  tumati bila beizzatona oʻlturdilar.
                </span>
                <br />
                <span>
                  Yana bir Darvesh Muhammad tarxon edi. Oʻrda Boʻgʻa tarxonning
                  oʻgʻli, Sulton Amad mirzo, Sulton Mahmud mirzoning tuqqon
                  tagʻoyisi edi. Mirzo qoshida borcha beklardin ulugʻroq va
                  mu’tabarroq bu edi. Musulmon va odmi va darveshvash kishi edi.
                  Hamisha musxaf kitobat qilur edi. Shatranjni bisyor oʻynar
                  edi, yaxshi oʻynar edi. Qush ilmini xoʻp bilur edi, qushni
                  xoʻb solur edi. Oxir Boysunqur mirzo bila Sulton Ali mirzoning
                  gʻavgʻosida ulugʻluq zamonida bad-omliq bila oʻldi.
                </span>
                <br />
                <span>
                  Yana bir Abdulali tarxon edi. Darvesh Muhammad tarxongʻa yovuq
                  urugʻ boʻlur edi. Singlisi ham munda erdikim, Boqi tarxonning
                  onasi boʻlgʻay. Agarchi Darvesh Muhammad tarxon toʻra va mucha
                  bila mundin ulugʻ edi, vale bu fir’avn ani koʻzga ilmas edi.
                  (22 a ) Necha yil Buxoro hukumati munda edi, navkari uch
                  mingga etib edi, navkarni yaxshi shafqat bila saxlar edi.
                  Baxshish va pursish va devon va dastgoh va shilon va majlisi
                  podshohona edi.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Zobit va zolim va fosiq va mudammagʻ kishi edi. Shayboniyxon,
                  garchi navkari emas edi, vale necha mahal muning bila boʻlur
                  edi. Kichik-kirim sultonlar xud aksar navkari boʻlub edilar.
                  Shayboniyxonning muncha taraqqiy topmogʻigʻa va muncha qadim
                  xonavodalar buzulmogʻigʻa Abdulali tarxon sabab boʻldi.
                </span>
                <br />
                <span>
                  Yana bir Sayyid Yusuf oʻgʻloqchi edi. Ulugʻ otasi moʻgʻuldin
                  kelgan ekandur. Otasini Ulugʻbek mirzo rioyat qilib edi. Ra’y
                  va tadbiri heyli yaxshi edi. Mardonaligʻi ham bor edi.
                  Koʻbuzni yaxshi cholur edi.
                </span>
                <br />
                <span>
                  Men avval Kobulgʻa kelganda mening qoshimda edi, ulugʻ rioyat
                  qilib erdim, filvoqi’, rioyat arzandasi ham bor edi. Avvalgʻi
                  yil Hinduston azimati bila cherik otlongʻanda Sayyid
                  Yusufbekni Kobulda qoʻyub erdim, oʻshul fursatta Tengri
                  rahmatigʻa bordi.
                </span>
                <br />
                <span>
                  Yana bir Darveshbek edi, Temurbek rioyat qilgʻon Egu
                  Temurbekning naslidin edi. Hazrati Xojagʻa irodati bor edi.
                  Musika ilmidin boxabar edi, soz ham cholur edi. Tab’i nazmi
                  (22 b ) bor edi. Sulton Ahmad mirzo Chir suyi yokasida shikast
                  topkanda Chir suyigʻa bordi.
                </span>
                <br />
                <span>
                  Yana bir Muhammad Mazid tarxon edi, Darvesh Muhammad
                  tarxonning tuqqon inisi edi. Necha yil Turkiston hokimi edi.
                  Shayboniyxon Turkistonni mundin oldi. Ra’y va tadbiri yaxshi
                  edi. Bebok va fosiq edi. Samarqandni ikkinchi navbat va
                  uchunchi navbat olgʻonda, meningqarshimgʻa kelib edi. Men
                  dagʻi yaxshi rioyat qilib erdim. Koʻli Malik urushida oʻldi.
                </span>
                <br />
                <span>
                  Yana bir Boqi tarxon edi. Abdulali tarxonning oʻgʻli va Sulton
                  Ahmad mirzoning amaqizodasi edi. Otasidin soʻngra Buxoroni
                  munga be-rib edilar. Sulton Ali mirzo zamonida koʻp ulgʻayib
                  edi, navkari besh-olti mingga etib edi. Sulton Ali mirzogʻa
                  heyli muti’ va munqod emas edi. Shayboniyxon bila Qal’ayi
                  Dabusiyda urushib bosturdi. Oʻshul bosqin bila Shayboniyxon
                  borib Buxoroni oldi. Qushqa koʻp mayli bor edi. Derlarkim,
                  etti yuz qushi bor ekandur. Andoq axloq va atvori yoʻq
                  erdikim, desa boʻlgʻay. Mirzodalikta va davlatta ulgʻayib edi.
                  Otasi Shayboniyxongʻa yaxshiliklar qilgʻon jihatidin
                  Shayboniyxon qoshigʻa bordi. Ul nohaqshunosu bemuruvvat ul
                  yaxshiliklarning muqobala (23 a ) sida hech nav’ rioyat va
                  shafqat qilmadi. Xorliq va zorliq bila Axsi viloyatida olamdin
                  bordi.
                </span>
                <br />
                <span>
                  Yana bir Sulton Husayn argʻun edi. Necha mahal Qorakoʻl
                  hukumati anda uchun, Sulton Husayn Qorakoʻliygʻa mashhur edi.
                  Ra’y va tadbiri heyli yaxshi edi. Mening qoshimda ham heyli
                  boʻlub edi.
                </span>
                <br />
                <span>
                  Yana bir Qul Muhammad Bugʻdo edi, qavchin edi. Mardonaligʻi
                  ham bor ekandur.
                </span>
                <br />
                <span>
                  Yana bir Abdulkarim ashrit edi, uygʻur edi. Sulton Ahmad mirzo
                  qoshida eshikogʻa edi. Sahiy va mardona kishi edi.
                </span>
                <br />
                <span>
                  Sulton Ahmad mirzo voki’asidin soʻng beklar ittifoy qilib togʻ
                  yoʻli bila Sulton Mahmud mirzogʻa kishi chopturub tiladilar.
                  Sulton Abusa’id mirzoning ogʻasi Minuchehr mirzoning oʻgʻli
                  Malik Muhammad mirzo saltanat dagʻdagʻasi bila bir necha
                  lavand va avboshni oʻziga koʻshub oʻrdudin ayrildidi.
                  Samarqandgʻa kelib hech ish ham qilolmadi. Oʻzining va yana
                  bir necha begunoh podshohzodalarning oʻlmakiga sabab boʻldi.{" "}
                </span>
                <br />
                <span>
                  Sulton Mahmud mirzogʻa bu xabar etgach-oʻq betavakkuf
                  Samarqandgʻa kelib, bezaxmat va bemashaqqat taxtqa oʻlturdi.
                  Sulton Mahmud mirzoning necha ishlaridin vazi’ va sharif va
                  sipohiy va raiyat mutanaffir va gurizon boʻldilar.{" "}
                </span>
                <br />
                <span>
                  Avval bukim, mazkur boʻlgʻon Malik Muhammad mirzonikim, (23 b
                  ) obogʻasining oʻgʻli va oʻzining kuyovi edi, yana toʻrt
                  mirzoni Koʻksaroygʻa chiqorib edi, ikkisini koʻyub, Malik
                  Muhammad mirzoni va yana bir mirzoni shaxid kildi. Bularning
                  ba’zisigʻa xud podshohliq ham tegmas edi. Bu dagʻdagʻalari ham
                  aslo yoʻq edi. Agarchi Malik Muhammad mirzoda andak gunohe bor
                  edi, yana birining hech gunohi yoʻq edi.
                </span>
                <br />
                <span>
                  Yana bir bukim, agarchi zabt va tuzuki heyli yaxshi edi, devon
                  shior edi. Siyoq ilmini bilur edi, vale tab’i zulm va fisqqa
                  moyil edi. Samarqandgʻa kirgach, oʻzgacha tartib va nasaq va
                  xarj va tahmil bunyod qila boshladi
                </span>
                <br />
                <span>
                  Hazrati Xoja Ubaydulloning mutaalliqlarigʻakim, burun xarj va
                  tahmillarda koʻp faqir va miskin alarning himoyati bila zulm
                  va taaddidin xalos boʻlurlar edi, ne joyi ulkim, alargʻa
                  mundoq takliflar boʻlgʻay, koʻp taaddi va tashaddud qila
                  boshladi. Balki bu taaddi va tashaddud Xojaning avlodigʻa
                  dagʻi siroyat kildi.
                </span>
                <br />
                <span>
                  Yana bir bukim, oʻzikim nechuk zolim va fosiq edi, bek va
                  bekcha va navkar va savdari tamom zolim va fosiq edilarkim,
                  Hisor eli, alalxusus, Xisravshoxgʻa taalluq el hamisha shurb
                  va zinogʻa mashgʻul edilar. Bu martabadakim, Xisravshoxning
                  navkarlaridin birov bir kishining xotunini tortib eltar, bu
                  xotunning (24 a ) eri Xisravshoxgʻa kelib dodxohliq qilur,
                  javob berurkim, necha yil sening bila edi, bir necha kun aning
                  bila boʻlsun.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Yana bir bukim, shahri va bozori, balki turk va sipohiyning
                  amrad oʻgʻlonlari chuhra kilur koʻrkunchidin uydin chiqmas
                  edilar
                </span>
                <br />
                <span>
                  Samarqand ahlikim, yigirma-yigirma besh yil Sulton Ahmad
                  mirzoning zamonida rafohiyat va farogʻat bila oʻtkarib edilar,
                  aksar muomala xazrati Xoja jihatidin adl va shar’ tariqi bila
                  edi, bu nav’ zulm va fisqdin bajonu dil ozurda va ranjida
                  boʻldilar. Vazi’ va sharif, faqir va miskin nafrin va duoyi
                  badigʻa ogʻiz ochib, qoʻl koʻtardilar
                </span>
                <br />
                <span>
                  <b>Hazar kun zi dardi darunhoi resh,</b>
                </span>
                <br />
                <span>
                  {" "}
                  <b>Ki reshi darun okibat sar kanad.</b>
                </span>
                <br />
                <span>
                  <b>Baham barmakun to tavoni dile,</b>
                </span>
                <br />
                <span>
                  {" "}
                  <b>Ki ohe jahone baham bar kanad</b>
                </span>
                <br />
                <span>
                  Lojaram, zulm va fiskning shomatidin Samarqandta besh-olti oy
                  besh hukumat qilmadi
                </span>
                <br />
                <h4 style={{ textAlign: "center" }}>
                  Vaqoi’i sanayi tis’a mia
                </h4>
                <span>
                  Manga Sulton Mahmud mirzodin Abdulkuddusbek otliq elchi keldi.
                  Ulugʻ oʻgʻli Sulton Mas’ud mirzogʻa ogʻasi Sulton Ahmad
                  mirzoning Oqbegim otliq ikkinchi qizini toʻy va oyin bila
                  olgʻon sochiqini kelturdi: oltundin va kumushdin bodomlar va
                  pistalar qilib edilar
                </span>
                <br />
                <span>
                  Bu kelgan elchining Hasan Ya’qubka urugʻlugʻi bor ekandur.
                  Hasan Ya’kubni va’dalar bila mirzogʻa boqturgʻali (24 b )
                  kelgan ekandur. Narm javob aytib, balki ul sari boʻlgʻondek
                  qilib, elchiga ruxsat berdi. Besh-olti oydin soʻng Hasan
                  Ya’qubning mizoji munharif boʻlub, mening yovugʻumdagʻi
                  kishi-qaro bila yomon maosh qila kirishti. Ishni munga
                  etkurdikim, manga ruxsat berib, Jahongir mirzoni podshoh
                  kilgʻay. Hasan Ya’qubning ixtiloti soyir, umaro va sipohiy
                  bila dagʻi yaxshi emas edi. Aning bu fikridin bori el voqif
                  boʻlub edilar. Xoja Qozi va Qosim qavchin va Ali Doʻst tagʻoyi
                  va Uzun Hasan va yana ba’zi davlatxohlar mening ulugʻ onam
                  Esan Davlatbegimning qoshida yigʻilib soʻzni bu erga
                  koʻydilarkim, Hasan Ya’qubni ma’zul qilib, fitnasigʻa taskin
                  berilgay. Xotunlar orasida ra’y va tadbirda, mening ulugʻ onam
                  Esan Davlatbegimcha kam boʻlgʻay edi, bisyor oqila va
                  mudabbira edi. Koʻproq ish-kuch alarning mashvarati bila
                  boʻlur edi
                </span>
                <br />
                <span>
                  Hasan Ya’kub arkta edi. Mening onam va ulugʻ onam - Esan
                  Davlatbegim tosh qoʻrgʻonda chaqarda edilar
                </span>
                <br />
                <span>
                  Bu azimat bila otlanib arkka mutavajjih boʻldum. Hasan Ya’qub
                  qushqa otlongʻon ekandur, xabar topib oʻshandin-oʻq Samarqand
                  (25 a ) sari mutavajjih boʻldi
                </span>
                <br />
                <span>
                  Aning bila bor kishi, bor beklarni tutturuldi. Tutulgʻon
                  beklar Muhammad Boqirbek edi, Sulton Mahmud doʻldoy Sulton
                  Muhammad doʻldoyning otasi edi. Yana ba’zilar ham bor edi.
                  Ba’zisigʻa Samarqand sari ruxsat berildi. Eshik ixtiyori va
                  Andijon hukumati Qosim qavchingʻa qaror topti.
                </span>
                <br />
                <span>
                  Hasan Ya’qubkim, Samarqand azimati bila Kandibodomgʻacha borib
                  edi, necha kundin soʻng fosid andisha bila Axsi azimati qilib,
                  Xoʻqon oʻrchin navohisigʻa keldi, Xabar topib, ba’zi beklar
                  bila yigitlarni aning ustiga yiborildi. Ilgʻor beklari
                  oʻzlaridin ilgarrak bir pora yigitlaqni qaravul yibordilar.
                  Hasan Ya’kub xabar topib, kecha bila bu qaravul ayirgʻon
                  yigitlarning ustiga yurub, oʻy munguzi qobsob shiba qoʻyarlar.
                  Qorongʻi kechada oʻz elining oʻki-oʻq Hasan Ya’qubning
                  qochorigʻa tegib, qochoridin burunroq oʻz amaligʻa giriftor
                  boʻldi.
                </span>
                <br />
                <span>
                  <i>C hu bad kardi, mabosh emin zi ofot,</i>
                </span>
                <br />
                <span>
                  <i>Ki vojib shud tabiatro mukofot.</i>
                </span>
                <br />
                <span>
                  Ushbu yil shubxaliqtaomdin parhiz qila boshladim. Pichoq va
                  qoshiq va dastorxongʻacha ehtiyot qilur erdim. Tahajjud ham
                  kamroq tark (25 b ) boʻlur edi
                </span>
                <br />
                <span>
                  Rabiul oxar oyida Sulton Mahmud mirzogʻa qaviy oriza yuzlanib,
                  olti kunda olamdin kechti. Qirq uch yoshar edi.
                </span>
                <br />
                <span>
                  <b>Valodat va nasabi:</b> sekqiz yuz ellik ettida edi.
                  Abusa’id mirzoning uchunchi oʻgʻli edi. Sulton Ahmad mirzo
                  bila bir tuqqon edi.
                </span>
                <br />
                <span>
                  <b>Shakl va shamoyili:</b> past boʻyluq suyuq soqolliq,
                  tanbal, sinchisizrok kishi edi
                </span>
                <br />
                <span>
                  <b>Axlos va atvori:</b> yaxshi edi. Namozni tark qilmas edi.
                  Tuzuki va zabti bisyor yaxshi edi. Siyoq ilmini xoʻb bilur
                  edi. Viloyotdin bir diram va bir dinor aning bevuqufi xarj
                  boʻlmas edi. Navkarining ulufasi aslo munkasir boʻlmas edi.
                  Majlis va baxshish va shilon va devoni bisyor yaxshi edi.
                  Barchasi qoida va tuzuki bila edi.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Bir nav’ tartib va nasakikim qoʻyub edi, sipohiy va raiyat
                  aslo andin tajovuz qila olmas edi. Burun qushqa xeyli qotror
                  ekandur, soʻngralar bahlum ovin qalin ovlar edi.
                </span>
                <br />
                <span>
                  Zulm va fisqqa koʻp mashgʻul edi. Muttasil chogʻir ichar edi.
                  Chuhra qalin saxlar edi. Kalamravida chiroyliqamrad oʻgʻlon
                  boʻlsa, har nav’ bila kelturub chuhra qilur edi. Beklarning
                  oʻgʻlonlarini (26 a ), balki koʻkaldoshlarini chugʻra qilib
                  edi, balki oʻzining koʻkaldoshidin tuqqongʻa dogʻi bu xizmatni
                  buyurub edi. Bu shum fe’l aning zamonida andoq shoyi’ erdikim,
                  chuhrasiz kishi aslo yoʻqedi. Chuhra saxlamokligʻni hunar
                  bilurlar edi. Chuhra saxlamasligʻni ayb qilurlar edi. Zulm va
                  fisqining shomatidin oʻgʻlonlari tamom juvonmarg boʻldilar
                </span>
                <br />
                <span>
                  Tab’i nazmi bor edi, devon tartib qilib edi, vale she’ri
                  bisyor sust va bemaza edi. Andoq she’r aytqondin aytmogʻon
                  yaxshiroqdur.
                </span>
                <br />
                <span>
                  Bade’tiqod kishi edi. Hazrati Xoja Ubaydullogʻa istixfof qilur
                  edi. Yuraksiz kishi edi. Hayosi kamroq edi. Bir necha masxara
                  va bebok tegrasida bor edi. Devon boshida va xaloyiq qoshida
                  zisht va shani’ harakatlar qilurlar edi. Badkalom edi. Soʻzini
                  filhol anglab boʻlmas edi.
                </span>
                <br />
                <span>
                  <b>Masoflari:</b> ikki qatla masof urushti. Har ikki qatla
                  Sulton Husayn mirzo bila: bir martaba Astrobodta magʻlub
                  boʻldi. Yana bir qatla Andxud navohisida, Chaman degan erda
                  ham magʻlub boʻldi. Ikki qatla Badaxshonning janub jonibi
                  Kofiristongʻa borib gʻazot kildi. Bu jihattin (26 b )
                  farmonining tugʻrosida «Sulton Mahmud gʻoziy» bitirlar edi.
                </span>
                <br />
                <span>
                  <b>Viloyoti:</b> Sulton Abusa’id mirzo Astrobodni berib edi.
                  Iroqvoki’asida Xurosongʻa kel-di. Ul fursat Qanbar Alibek
                  Hisor hokimi Sulton Abusa’id mirzoning hukmi bila Hinduston
                  cherikini cheriklab, Iroqqa mirzoning soʻngicha boradur edi,
                  Xurosongʻa etib edi, Sulton Mahmud mirzogʻa mulxaq boʻldi.
                  Sulton Husayn mirzoning ovozasini eshitgach, Xuroson elihujum
                  qilib, Sulton Mahmud mirzoni Xurosondin chiqardilar.
                  Samarqandgʻa Sulton Ahmad mirzoning qoshigʻa keldi. Necha
                  oydin soʻng Ahmad Mushtoq boshligʻ Sayyid Badr va Xisravshoh
                  va yana ba’zi yigitlar Sulton Mahmud mirzoni olib qochib,
                  Hisorgʻa Qanbar Alibek qoshigʻa keldilar. Andin beri Qahka
                  bila Koʻhtan togʻining janub tarafidagʻi viloyot, misli Tirmiz
                  va Chagʻoniyon va Hisor va Xatlon va Kunduz va Badaxshon
                  Hindukush togʻigacha Sulton Mahmud mirzoning tasarrufida edi.
                  Ogʻasi Sulton Ahmad mirzo oʻlgandin soʻng aning viloyoti dagʻi
                  muning tasarrufida boʻldi
                </span>
                <br />
                <span>
                  <b>Avlodi:</b> besh oʻgʻil, oʻn bir qiz edi. Bori
                  oʻgʻlonlaridin ulugʻ Sulton Mas’ud mirzo edi. Onasi (27 a )
                  Mir Buzurg Tirmiziyning qizi edi
                </span>
                <br />
                <span>
                  Yana bir oʻgʻul Boysunqur mirzo edi. Onasi Pashabegim edi.
                  Yana bir oʻgʻil Sulton Ali mirzo edi. Onasi Zuhrabegi ogʻa
                  edi, oʻzbak edi, gʻuma edi. Yana bir oʻgʻul Sulton Husayn
                  mirzo edi. Onasi Xonzodabegim, Mir Buzurgning nabirasi edi.
                  Mirzo hayotida oʻn uch yoshida Tengri rahmatigʻa bordi.
                </span>
                <br />
                <span>
                  Yana bir oʻgʻul Sulton Vays mirzo edi. Onasi Yunusxonning
                  qizi, mening onamning singli Sulton Nigorxonim edi. Bu toʻrt
                  mirzoning holoti bu tarixda yil vaqoyi’ida mazkur
                  boʻlgʻusidur. Uch qizi Boysunqur mirzo bila bir tuqqon edi.
                  Ulugʻrogʻini Sulton Mahmud mirzo obogʻasi Minuchehr mirzoning
                  oʻgʻli Malik Muhammad mirzogʻa chiqarib edi.
                </span>
                <br />
                <span>
                  Yana besh qiz Mir Buzurgning nabirasi Xonzodabegimdin edi.
                  Ulugʻini Sulton Mahmud mirzodin soʻngra Abobakr Koshgʻariygʻa
                  (27 b ) berdilar. Ikkinchi qiz Bikabegim edi. Sulton Husayn
                  mirzo Hisorni muhosara qilgʻonda Haydar mirzo otliq
                  oʻgʻligʻakim, Sulton Abusa’id mirzoning qizi Poyanda
                  Sultonbegimdin tuqqandur, olib yarashib, Hisorning ustidin
                  qoʻpti. Uchunchi qiz Oqbegim edi. Toʻrtunchi qizi Oybegim edi.
                  Sulton Husayn mirzo Qunduz ustiga kelganda Umarshayx mirzo
                  oʻgʻli Jahongir mirzoni Andijon cheriki bila koʻmak yiborganda
                  Jahongir mirzogʻa nomzad boʻlub edi. Tarix toʻqquz yuz oʻnda
                  Amu daryosi yoqasida Boqi Chagʻoniyoniy manga kelib mulozamat
                  qildi. Bu begimlar onalari bila Tirmizta edilar. Bular ham
                  Boqi Chagʻoniyonisining, koʻchi bila kelib qoʻshuldilar.
                  Kohmardqa kelganda, Jahongir mirzo oldi. Birgina qizi boʻldi.
                  Bu tarixda ulugʻ onasi Xonzodabegim bila Badaxshon
                  viloyatidadur. Beshinchi qiz Zaynab Sultonbegim edi. Kobulni
                  olgʻonda onam Qutluq Nigorxonimning sa’yi bilaoldim, xeyli
                  sozvorliq boʻlmadi. Ikki uch yildin soʻng obila zaxmati bila
                  olamdin bordi. Yana bir qiz Maxduma Sultonbegim edi. Sulton
                  Ali mirzoning bir tuqqon egachisidur. Holo Badaxshon
                  viloyatidadur. Va yana ikki qiz gʻunchachidin boʻlub edi.
                  Birining oti Rajab Sulton, yana biri (28 a) ning oti Muhib
                  Sultondur
                </span>
                <br />
                <span>
                  <b>Xavotin va sarori:</b> ulugʻ xotuni Mir Buzurg Tirmiziyning
                  qizi Xonzodabegim edi. Mirzo bisyor sevar edi. Sulton Mas’ud
                  mirzoning onasi edi. Ul oʻlganda mirzo bisyor kattiq ta’ziyat
                  tutqondur. Andin soʻng Mir Buzurgning nabirasi bu
                  Xonzodabegimning birodarzodasini oldi. Ani ham Xonzodabegim
                  derlar edi. Besh qiz va bir oʻgʻulning onasi edi.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Yana bir Pashabegim edi. Qorakoʻyluq Bahorlu aymogʻi turkman
                  beklaridin Ali Shukurbekning qizi edi. Jahonshoh mirzo Boroniy
                  Qorakoʻylukning oʻgʻli Muhammadiy mirzo olib edi. Ozarbayjon
                  va Iroqni bu Jahonshoh avlodidin Oqqoʻyluq Uzun Hasan olgʻonda
                  Ali Shukurbekning ugʻlonlari toʻrt-besh ming uyluk qorakoʻyluq
                  turkmanlar bila Sulton Abusa’id mirzo mulozamatigʻa kelib
                  edilar. Sulton Abusa’id mirzo shikast topqonda bu
                  viloyatlargʻa tushtilar. Sulton Mahmud mirzo Samarqanddin
                  Hisor kelganda Sulton Mahmud mirzo mulozamatigʻa keldilar. Bu
                  Pashabegimni mirzo ul mahalda olib edi. Bir oʻgʻul, uch
                  qizining onasi edi. Yana bir Sulton Nigorxonim edi. Nasabi
                  xonlar vaqoyi’ida mashruh va mazkur boʻlubtur
                </span>
                <br />
                <span>
                  Gʻuma (28 6 ) va gʻunchachisi xeyli bor edi. Mu’tabar gʻumasi
                  Zuhrabegi ogʻa edi. Oʻzbakdin edi. Sulton Abusa’id mirzoning
                  tirikligida yigitligida olib edi. Bir oʻgʻul, bir qizining
                  onasi edi va gʻunchachi xeyli bor edi. Ikkisidin ikki qiz
                  boʻlub erdikim, mazkur boʻldi
                </span>
                <br />
                <span>
                  <b>Umarosi:</b> Xisravshox, edi. Turkistonliq qipchoqdindur.
                  Kichikligida tarxon beklariga yovuq xizmat qilur edi. Balki
                  chuxra edi, andin soʻng Mazidbek argʻungʻa navkar boʻldi.
                  Filjumla, rioyat qilib edi. Iroq buzugʻlugʻida Sulton Mahmud
                  mirzogʻa qoʻshulub, yoʻlda kelurda shoyista xizmatlar qilgʻon
                  uchun Sulton Mahmud mirzo rioyat qilib edi. Soʻngralar asru
                  koʻp ulgʻayib edi. Sulton Mahmud mirzoning zamonida-oʻq
                  navkari besh-olti mingga etib edi. Amu daryosidin Hindukush
                  togʻigʻacha viloyat, gʻayri Badaxshon tamom munga taalluq edi.
                  Darbast er edi. Shiloni va saxovati yaxshi edi. Bovujudi
                  turkluk mahkam paydokunanda edi, nechukkim paydo kilur edi,
                  yaxshi ham xarj qilur edi.
                </span>
                <br />
                <span>
                  Sulton Mahmud mirzodin soʻng oʻgʻlonlarining zamonida xud asru
                  koʻp ulgʻoyib edi. Navkari yigirma mingga yovushub edi.
                  Agarchi Namoziqilur edi va taomda parhiz qilur edi, vale tiyra
                  va fosiq edi, gavdan va befahm va bevafo (29 a ) va haromnamak
                  kishi edi. Besh kun oʻtar dunyo uchun bir oʻzi oʻsturgʻon
                  valine’matzodasini koʻr kildi. Yana birini oʻlturdi. Tengri
                  qoshida osiy va xalq oldida mardud boʻlubdur. Domani
                  kiyomatgacha la’nat va nafrin sazovori boʻldi. Bu oʻtar dunyo
                  uchun mundoq yomon ishlar qildi. Mundoq bisyor ma’mur viloyat
                  va muncha qalin yarokliq navkar bila bir mokiyon bila ham
                  tutushmadi. Bu tarixda zikri kelgusidur.
                </span>
                <br />
                <span>
                  Yana bir PirMuhammad Elchi boʻgʻa edi. Qavchin edi. Balx
                  eshigida xazora urushida Sulton Abusa’id mirzo olida da’vo
                  bila musht tegurubdur. Mardona kishi edi. Mirzogʻa doim
                  mulozamat qilur edi. Mirzo ra’yi bila amal qilur edi. Sulton
                  Husayn mirzo Qunduzni qabagʻonda Xisravshoxning taassubigʻa oz
                  kishi bila yaroqsiz behisob shabixun keldi. Ish ham qila
                  olmadi. Andoq qalin cherikka ne ish qila olgʻay edi. Soʻngicha
                  qovgʻunchi bordi, oʻzin daryogʻa soldi, gʻarq boʻldi.
                </span>
                <br />
                <span>
                  Yana bir Ayyub edi. Sulton Abusa’id mirzo qoshida Xuroson
                  chuhrasi chargasida xizmat qilur edi. Mardona kishi edi.
                  Boysunqur mirzoning bek atkasi edi. Emak va kiymagi sirfa bila
                  edi. Hazzol va harrof edi. Sulton Mahmud mirzo (29 6 )
                  «behayo» deb muxotib qilur ekandur.
                </span>
                <br />
                <span>
                  Yana bir Vali edi. Xisravshoxning tuqqon inisi edi. Navkarini
                  yaxshi saxlar edi. Sulton Mas’ud mirzoning koʻziga mil
                  tortmogʻigʻa va Boysunqur mirzoning oʻlturmakiga bois ul edi.
                  Jami’ elni gʻiybat kilur edi. Badzabon va faxshgoʻy va
                  xudpisand va tiyramagʻz mardak edi. Uzidan oʻzga hech kishini
                  hech ishta pisand tutmas edi. Kunduz viloyatidin kelganda va
                  Dushiy navohisida Xisravshoxni navkar, savdaridin ayirib,
                  ruxsat bergan fursatta ul dogʻi oʻzbakning qoʻrqunchidin
                  Andarob va Serobka kelib edi. Ul navohidagʻi aymoqlarni bosib
                  talab, bizni deb Kobulgʻa keldilar. Vali Muhammad Shayboniyxon
                  qoshigʻa bordi. Samarqand shahrida boʻynigʻa urdurdi.
                </span>
                <br />
                <span>
                  Yana bir Shayx Abdullo barlos edi. Shoh Sulton Muhammadning
                  bir qizi munda erdikim, Abobakr mirzo bila Sulton
                  Mahmudxonning holasi boʻlgʻay. Toʻnni purshaqq va tor kiyar
                  edi. Odmi va asil kishi edi.
                </span>
                <br />
                <span>
                  Yana bir Mahmud barlos edi. Navandokliq barloslardindir.
                  Sulton Abusa’id mirzo krshida xdm bek edi. Sulton Abusa’id
                  mirzogʻa Iroq viloyati musaxxar boʻlgʻonda Kirmonni Mahmud
                  barlosgʻa berib edi. Abobakr mirzogʻa (30 a ) Mazidbek argʻun
                  va qorakoʻyluq turkman beklari qoʻshulub, Sulton Mahmud
                  mirzoning ustiga Hisorda kelganda SultonMahmud mirzo ogʻasigʻa
                  Samarqandgʻa bordi. Mahmud barlos Hisorni bermay, yaxshi
                  saxladi. Shoir edi, devon tartib qilib edi.
                </span>
                <br />
                <span>
                  Sulton Mahmud mirzoning favtidin soʻngra Xisravshoh bu
                  voqi’ani eldin yashurub xazinagʻa dastandozliq qildi. Mundoq
                  xabar nechuk yashurun qolur, filhol bori shahr eliga bu xabar
                  yoyildi. Samarqand ahligʻa ul kun bir ulugʻ iyd edi. Sipohi va
                  raiyat Xisravshoxning ustiga xujum qilmoq maqomida boʻldilar.
                  Ahmad Hojibek va tarxon beklari gʻavgʻoni bosib, Xisravshoxni
                  chiqarib Hisor uzattilarSulton Mahmud mirzo hayotida ulugʻ
                  oʻgʻli Sulton Mas’ud mirzogʻa Hisorni berib, Boysunqur
                  mirzogʻa Buxoroni berib, oʻgʻlonlarigʻa ruxsat berib edi, bu
                  voqi’ada hech qaysi hozir emas edi
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Xisravshoxni chiqorgʻondin soʻng Samarqand va Hisor beklari
                  ittifoq bila Buxorogʻa Boysunqur mirzogʻa kishi yiborib va
                  kelturub, Samarqand taxtigʻa oʻlturgʻuzdilar. Boysunqur mirzo
                  podshoh boʻlgʻonda oʻn sekkiz yashar edi
                </span>
                <br />
                <span>
                  Ushal fursatta Sulton Mahmudxon Sulton Junayd (30 b )
                  barlosning va Samarqandning ba’zi akobirining soʻzi bila
                  Samarqand doiyasi bila cherik tortib, Kanboy navohisigʻa
                  keldi. Samarqandtin ham Boysunqur mirzo qalin va koʻchum va
                  yarogʻliq cherik bila chiqib, Kanboy navohisida masof
                  urushtilar. Haydar koʻkaldoshkim, moʻgʻul cherikining rukni
                  a’zami edi, erovul edi, tamom ottin tushub, shiba qoʻymokka
                  mashgʻul boʻldi. Qalin otliq, taassubluq Samarqand va Hisor
                  yigitlari ot solgʻon bila Xaydarbek boshliq tushganlar tamom
                  ot oyogʻining ostigʻa-oʻq qoldilar. Muni oldurgʻon bila urusha
                  ham olmadilar, bosturdilar. Qalin moʻgʻul kishisi qirildi.
                  Boysunqur mirzo oʻz oldida ham qalin kishining boʻynini
                  urdurubtur. Andoqkim, oʻlukning kasratidin uch erda xirgoni
                  buyutkabdurlar..
                </span>
                <br />
                <span>
                  Bu fursatta Ibrohim sorukim, mingligʻ elidin edi, otamning
                  ollida kichikdin xizmatlar qilib, beklik martabasigʻa etib
                  edi, bir jarima jihatidin soʻngralar mardud edi, Isfara
                  qoʻrgʻonigʻa kirib Boysunqur mirzoning otigʻa xutba oʻkub,
                  muxolafat makrmida boʻldi.
                </span>
                <br />
                <span>
                  Sha’bon oyi Ibrohim soruning fitnasining daf’igʻa azimat
                  qilib, (31 a ) cherik otlanildi. Ushbu oyning oyogʻida
                  Isfarani qabab tushtuk. Ul kuni yigitlar shoʻxluq qilib etgan
                  bila-oʻq qoʻrgʻonining toshida yangi tom koʻporib, soladurgʻon
                  qoʻrgʻonni oldilar. Sayyid Qosim eshikoqa bu kun borchadin
                  yaxshiroq yurub, oʻzub kilich tegurdi. Sulton Ahmad Tanbal ham
                  qilich tegurdi. Muhammad Doʻst tagʻoyi ham qilich tegurdi,
                  vale bahodurluq ulushini Sayyid Qosim oldi. Bahodurluq ulushi
                  moʻgʻulda qadimiy rasmdur. Har toʻy va osh boʻlgʻon da, har
                  kimki eldin uzub kilich tegurgon boʻlsa, ululushni ul olur.
                  Shohruxiyada borib, tagʻoyim Sulton Mahmudxonni koʻrganda
                  bahodurluq ulushini Sayyid Qosim oldi. Avvalgʻi kun urushida
                  Xudoyberdi atkamga taxsh oʻqi tegib oʻldi. Chun yaroqsiz urush
                  solilib edi, ba’zi yigit-yalang zoyi’ boʻlub, xeyli kishi
                  yaraliq boʻldi. Ibrohim soruning qoshida bir taxshandoz bor
                  edi, bisyor yaxshi otar edi, oncha taxshandoz koʻrulmaydur
                  edi. Aksar elni ul yaraligʻ qildi. Qoʻrgʻon fathidin soʻng
                  mening qoshimda boʻlur edi, muhosara mumtad boʻldi.
                  Buyurildikim, ikki-uch erda sarkoʻblar yasab, naqblar (31 b)
                  solgʻaylar. Qal’agirliq asbobigʻa bajidd mashgʻul boʻlgʻaylar.
                  Muhosara imtidodi kirq kunga tortti
                </span>
                <br />
                <span>
                  Oxir Ibrohim soru ojiz boʻlub, Xoja Mavlonoyi Qozining
                  tavassuti bila qullukni ixtiyor qilib, shavvol oyida kilich,
                  sogʻdogʻini boʻynigʻa osib kelib, mulozamat qilib, qoʻrgʻonni
                  topshurdi.
                </span>
                <br />
                <span>
                  Xoʻjand ham muddati madid erdikim, Umarshayx mirzo devonigʻa
                  taalluq edi, bu fataratta ul sarkorda futur boʻlgʻon uchun
                  Sulton Ahmad mirzogʻa boqib edi. Chun muncha takarrub boʻldi,
                  aning ustigʻa ham borildi. Xoʻjand ichida Mir Moʻgʻulning
                  otasi Abdulvahhob shigʻovul edi, men etgach-oʻq qoʻrgʻonni
                  bemuzoyaqa topshudi.
                </span>
                <br />
                <span>
                  Bu fursatda Sulton Mahmudxon Shoxruxiyagʻa kelib edi. Mundin
                  burunroq Sulton Ahmad mirzo Andijon navohisigʻa kelganda xon
                  ham kelib, Axsini kabab edi. Nechukki, mazkur boʻldi, xotirgʻa
                  ettikim, ora muncha yovuq boʻlgʻonda xon, chun ota ogʻadurlar,
                  borib mulozamat qilsam, oʻtgan kuduratlar raf’ boʻlgʻay,
                  iroqda-yovuqta eshitur, koʻrarga yaxshi boʻlgʻay deb kelib,
                  Shohruxiyadan tashqari Haydarbek solgʻon bogʻda xongʻa
                  mulozamat qildim. Xon bogʻning oʻrtasida solgʻon ulugʻ
                  chordara (32 a ) uyda oʻlturub edilar. Uydin kirgach, uch
                  yukundum. Xon ham ta’zim qilib koʻptilar. Koʻrushub, yonib
                  yukungandin soʻng yonlarigʻa tilab, qalin shafqat va
                  mexribonliklar koʻrsattilar.
                </span>
                <span>
                  Bir-ikki kundin soʻng Kandirlik doboni bila Axsi va Andijon
                  sari azimat qildim. Axsigʻa etib otamning mazorini tavof
                  qildim. Axsidin namozi jum’a vaqtida chiqib, Bandi Solor yoʻli
                  bila namozi shom bila namozi xuftan orasida Andijongʻa keldim.
                  Bu yoʻlkim, Bandi Solor yoʻli boʻlgʻay, toʻqquz yigʻoch
                  yoʻldir. Andijon viloyatining sahronishinlaridin bir Chakrak
                  elidur, qalin eldur. Besh-olti ming uyluk el bordur. Fargʻona
                  bila Koshgʻar orasidagʻi togʻlarda boʻlurlar, otlari koʻp va
                  qoʻylari qalindur. Ul togʻlarda oʻy oʻrnigʻa qoʻtos saxlarlar.
                  Qoʻtoslari ham bisyor boʻlur. Chun togʻlari berk va sarxadta
                  voqi’ boʻlubtur, mol bermakta royij emasturlar.
                  CherikniQosimbekka boshlatib Chakrakka yiborildikim,
                  Chakrakdin mol olib, cherikka nima tegurgay. Qosimbek borib,
                  yigirma mingga yovuq qoʻy va ming, ming besh yuz ot olib,
                  cherik eliga ulashti
                </span>
                <br />
                <span>
                  Cherik Chakrakdin yongʻondin soʻng Oʻratepaning ustiga (32 6 )
                  kim, muddatlar Umarshayx mirzo tasarrufida edi, mirzo oʻlar
                  yili ilikdin chikib edi, bu fursatta Boysunqur mirzo jonibidin
                  inisi Sulton Ali mirzo anda edi, azimat qilildi. Sulton Ali
                  mirzo xabar topib, oʻzi Falgʻar va Macho koʻxistonlarigʻa
                  chikib, atkasi Shayx Zunnunni Uratepada koʻyub edi, Xoʻjanddin
                  oʻtub ora yoʻlgʻa etganda Xalifani Shayx Zunnungʻa risolat
                  tariqi bila yiborildi.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <br />
                <span>
                  Ul behush mardak javobi shofiy bermay, Xalifani tutturub
                  oʻlumga buyurdi. Chun xost yoʻq ekandur, Xalifa xalos boʻlub,
                  yuz tuman mashaqqat va azoblar bila ikki-uch kundin soʻng
                  yayoq va yalangʻoch keldi
                </span>
                <br />
                <span>
                  Oʻratepaning navohisigʻa kelduk. Chun qish yovuq boʻlub edi,
                  el oshliq-toʻluqini tamom koʻtarib edilar, bu jihatlardin
                  necha kundin soʻng Andijon sari murojaat kilildi. Biz
                  yongʻondin soʻng xon kishisi Oʻratepa ustiga yurudi. Oʻratepa
                  kishisi tura olmay solib chiqdi. Xon Oʻratepani Muhammad
                  Husayn koʻragonga berdi. Ushul tarixdan toʻqqiz yuz
                  sekkizgacha Oʻratepa Muhammad Husayn koʻragonda edi.
                </span>
                <br />
                <h4 style={{ textAlign: "center" }}>
                  Vaqoi’i sanayi ihdo va tis’a mia*
                </h4>
                <span>
                  Sulton Husayn mirzo Xurosondin Hisor (33 a ) ustiga cherik
                  tortib, kish Tirmiz toʻgʻrisi keldi. Sulton Mas’ud mirzo ham
                  cherik yigʻib, Tirmizgʻa muqobalada kelib oʻlturdi. Xisravshoh
                  oʻzi Qunduzni maxhkam qilib, inisi Valini cherikka yibordi.
                  Qishning aksarini suv yoqasida oʻtkardilar, oʻta olmadilar.
                  Sulton Husayn mirzo kordon va sohib tajriba podshoh edi.
                  Kunduz sari suv yuqqori boqa koʻchti. Oʻtrudagʻi cherikni
                  gʻofil qilib Abdullatif baxshi boshliq besh-olti yuz oʻbdon
                  kishini Kilif guzariga yibordi. Ul cherik vokif boʻlgʻuncha
                  Abdullatif baxshi ta’yin boʻlgʻon el bila Kilif guzaridin
                  oʻtub suv yoqasini mazbut qildi. Bu xabar Sulton Mas’ud
                  mirzogʻa kelgach, Vali Xisravshohkim, bu kechgan kishining
                  ustiga bormoqni harchand sa’y qildi, Sulton Mas’ud mirzo
                  bedilligʻidin yo Boqi Chagʻoniyoniyningkim, Valining ziddi
                  edi, sa’yidin bu kechgan kishining ustiga bormadi. Buzulgʻon
                  yoʻsunluq Hisor sari yondilar
                </span>
                <br />
                <span>
                  Sulton Husayn mirzo suv kechib, Badi’uzzamon mirzoni va
                  Ibrohim Husayn mirzo va Muhammad Valibek va Zunnun argʻunni
                  Xisravshoh ustiga ilgʻor yibordi. Muzaffar mirzo (336) va
                  Muhammad Burunduq barlosniXatlon ustiga yibordi. Oʻzi Hisor
                  ustiga keldi. Evuq etkanda xabardor boʻldilar
                </span>
                <br />
                <span>
                  Sulton Mas’ud mirzo Hisorda turmoqning maslaxatini topmay,
                  Kamrud rudi yukkrri Siri togʻ yoʻli bila inisi Boysunqur mirzo
                  qoshigʻa Samarqandgʻa bordi. Vali xam Xatlon sari tortti.
                  Hisor qoʻrgʻonini Boqi Chagʻoniyoniy va Mahmud barlos va
                  Sulton Ahmad Koʻchbekning otasi berkittilar
                </span>
                <br />
                <span>
                  Hamza Sulton va Mahdiy Sulton necha yil erdikim,
                  Shayboniyxondin ayrilib kelib, Sulton Mahmud mirzo
                  mulozamatida edilar. Jami’ oʻzbaklari bila Muhammad dugʻlat
                  Sulton Husayn dugʻlat va jami’ Hisor viloyati oʻlturushluq
                  moʻgʻullar bila bu buzugʻluqta Qorategin sari torttilar.
                </span>
                <br />
                <span>
                  Sulton Husayn mirzo bu xabarlarni topib, Abulmuhsin mirzoni va
                  ba’zi yigitlarni Kamrud darasi yuqori, Sulton Mas’ud mirzo
                  keyniga yibordi. Tangiga kirgan mahalda keynidin etarlar,
                  oncha ish kila olmaslar, Mirzobek farangiboz anda qilich
                  tegurur
                </span>
                <br />
                <span>
                  Ibrohim tarxon va Ya’kub Ayyub va yana ba’zi cherikni Hamza
                  Sultonning va moʻgʻullarning ustiga Qorateginga yibordi.
                  Qorateginda keynidin etib urushtilar. Sulton Husayn mirzo (34
                  a ) ning ilgʻorini bosib, bu beklarning aksarini tushurub yana
                  qoʻya berdilar.
                </span>
                <br />
                <span>
                  Ushul chiqqon bila Hamza Sulton va Mahdiy Sulton va Hamza
                  Sultonning oʻgʻli Mamoq Sulton va Muhammad dugʻlatkim,
                  soʻngralar Muhammad Hisoriygʻa mashhur boʻlub edi, Sulton
                  Husayn dugʻlat va bu sultonlargʻa taalluq oʻzbaklar Hisor
                  viloyati oʻlturushluq Sulton Mahmud mirzo navkari moʻgʻullar
                  bizni deb ramazon oyi Andijongʻa keldilar
                </span>
                <br />
                <span>
                  Ul fursatlar Temuriya salotini dasturi bila toʻshak ustida
                  oʻlturur erdim. Hamza Sulton bila Mahdiy Sulton va Mamoq
                  Sultonkim keldilar, bu salotinning ta’zimigʻa koʻpub
                  toʻshakdin tushub, bu sultonlar bila koʻrushtum. Sultonlarni
                  oʻng koʻlda bogʻishda oʻlturgʻuzdum. Muhammad Hisoriy boshliq
                  borcha moʻgʻullar keldilar. Borcha mulozamatni ixtiyor
                  kildilar.
                </span>
                <br />
                <span>
                  Sulton Husayn mirzo kelib Hisor qoʻrgʻonini qabab tushti. Naqb
                  solmoq va qoʻrgʻon olmoq va tosh urmoq va qazon kurmokning
                  ish-kuchida kecha va kunduz orom va karori yoʻq edi.
                  Toʻrt-besh erda naqb soldi. Shahr sari darvozada solgʻon naqb
                  xeyli ilgari kelib edi. Qoʻrgʻon eli dagʻi naqb solib, bu
                  naqbini toptilar. Qoʻrgʻon eli, (34 b ) yuqqoridin bulargʻa
                  dud kildilar. Alar toʻshukni berkitgan bila tutun yukkrri
                  qoʻrgʻon elita-oʻq yonib, qoʻrgʻon eli oʻlum ichi boʻlub,
                  krchib chiktilar. Oxir koʻza-koʻza suv keturubquyib, tashqi
                  elni naqbdin qochurdilar. Yana bir navbat bir pora ildam
                  yigitlar chiqib, naqb ustidagi yigitlarni qochurdilar. Yana
                  mirzo tushgan shimol tarafidin qozon qurub, qalin tosh urub,
                  bir burjni qovoq qilib edilar. Namozi xuftan burj uchti. Ba’zi
                  yigitlar tezlik qilib urushgʻa ruxsat tiladilar. «Kechadur»
                  deb mirzo ruxsat bermadi. Tong otquncha xud qoʻrgʻon eli
                  burjni tamom qoʻparib edilar. Tonglasi urush ham solmadilar.
                  Bu ikki oyikki yarim oyda gʻayr az siyosat va naqb solmoq,
                  sarkoʻb qoʻpormoq va tosh otmoqdin oʻzga yaxshi urush solmadi
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Badi’uzzamon mirzo va, ul jamoatnikim, Xisravshox, ustiga
                  yiborib edi, Qunduzdin uch-toʻrt yigʻoch quyiroq tushganda
                  Xisravshox, boʻlgʻan kishisi bila yasatib Qunduzdin chiqib ora
                  qoʻnub, Badi’uzzamon mirzo va bu cherikning ustiga bosib
                  keldi. Bular muncha mirzolar va muncha sardor beklar, (35 a )
                  bovujudkim, kishilari ikki Xisravshoxning kishisicha boʻlmasa,
                  bir yarim onchada xud ne soʻz, jazm rioyat qilib, xandakdin
                  chiqmadilar. Xisravshoxning yaxshi-yomon, ulugʻ-kichik navkari
                  toʻrt-besh ming boʻlgʻay edi.
                </span>
                <br />
                <span>
                  Xisravshox, bu oʻtar dunyoyi bebaqo uchun va bu ketar navkari
                  bevafo uchun muncha yomonliq va badnomlikni ixtiyor qilib va
                  muncha zulm va bedod qilmokni oʻziga shior qilib, muncha ulugʻ
                  viloyatlar olib, muncha qalin navkar va savdar saxlamoq tarxin
                  solib, balki soʻngralar navkar va chokari yigirma-oʻttuz
                  mingga tortib viloyot va parganoti oʻz podshohi va
                  mirzolaridin ortib, umrida qilgʻon ishi ushbu boʻldi.
                  Ushmuncha bila Xisravshox, va tavobiining oti sardorliqqa
                  chiqib, mardona boʻldilar.
                </span>
                <br />
                <span>
                  Xandakdin chiqmagʻonlar qoʻrqoklikqa otiqib, bedillik bila
                  afsona boʻldilar. Badi’uzzamon mirzo andin koʻchub necha koʻch
                  bila Toliqonning Olgʻu togʻigʻa kelib tushdi. Xisravshox,
                  Qunduz qoʻrgʻonida edi. Inisi Valini bir pora oʻbdon yigitlar
                  bila Ishkamish va Fulul va ul togʻ domanalarigʻa yiborib
                  erdikim, yana tashqaridin xaduk va tashvish bergay, yana Muhib
                  Ali qoʻrchi bir pora oʻbdon yigitlarni olib kelib, Xatlon
                  suyining (35 b ) yoqasida bularning kishisiga uchrab bosib bir
                  pora kishi tushurub, bir necha bosh kesib bordi. Soʻnggi
                  navbat muning taassubigʻa Saydim Ali darbon va inisi Qulibek
                  va Bahlul Ayyub bir pora oʻbdon yigitlar bila kelib, Anbarkoʻh
                  domanasida Xoja Changol navohisida Xuroson cheriki koʻchgan
                  mahalda ilik olishurlar, qalin kishi etib Saydim Ali va
                  Qulboboni va yana bir pora oʻbdon yigitlarni tamom tushurdilar
                </span>
                <br />
                <span>
                  Bu xabar Sulton Husayn mirzogʻa etishti. Dagʻi Hisorning bahor
                  yogʻinlari jihatidin ham cherik xoli az tashvish emas edi,
                  yarash tarhin oragʻasolib ichkilardin Mahmud barlos keldi.
                  Tashqaridin Xoja Pir bakovul va oʻlugʻ ogʻalar va nekim
                  boʻlgʻon sozanda va xonanda kelib, Sulton Mahmud mirzoning
                  Xonzodabegimdin boʻlgʻon ulugʻ qizini Haydar mirzogʻakim,
                  Poyanda Sultonbegimdin boʻlub edi, Sulton Abusa’id mirzoning
                  qiz nabirasi edi, olib Hisor ustidin koʻpub Qunduz sari
                  yuzlandilar. Qunduzgʻa kelib xam bir pora siyosat qilib,
                  muhosara maqomida boʻldi. Oxir Badi’uzzamon mirzo oragʻa
                  tushub yarashib, ichkari, tashkari tushgan yigitlarni olishib
                  (36 a) yondilar. Xisravshoxning muncha ulgʻaymogʻigʻa va
                  muncha haddi etmas ishlarni qilmogʻigʻa Sulton Husayn
                  mirzoning ikki qatla kelib ola olmay yonmogʻi sabab boʻldi.
                  Sulton Husayn mirzo Balxgʻa etganda Movarounnahr viloyati
                  maslahati uchun Balxni Badi’uzzamon mirzogʻa berib, aning
                  viloyatinikim, Astrobod boʻlgʻay, Muzaffar Husayn mirzogʻa
                  berdi. Haar ikkalasini Balxqa va Astrobodka bir majlista
                  yukundurdi. Bu jihatdin Badi’uzzamon mirzo tar boʻldi. Muncha
                  yil yogʻiy-ikdar va fitnalarning sababi ul edi
                </span>
                <br />
                <span>
                  Ushbu ramazon oyi Samarqandta tarxoniylarning fitnasi edi.
                  Sharhi budurkim, Boysunqur mirzo, ul miqdorkim, Hisor beklari
                  va sipohiylari bila ixtilot omizish qilur edi, Samarqand
                  beklari va sipohiylari bila oncha qilmas edi. Shayx Abdullo
                  barlos ulugʻ ixtiyor bek edi. Ugʻlonlari andoq muqarrab va
                  ichki edilarkim, oshiqliq bila ma’shuqluqqa nisbat qilurlar
                  edi. Tarxon beklari va ba’zi Samarqand beklari bu jihatlardan
                  tar boʻldilar.
                </span>
                <br />
                <span>
                  Darvesh Muhammad tarxon Buxorodin kelib, Sulton Ali mirzoni
                  Qarshidin kelturtub, podshoh koʻtarib, Bogʻi Navgʻa keldilar.
                  Boysunqur mirzo Bogʻi Navda edi. Boysunqur mirzoni tutqun
                  yoʻsunluq (36 b ) qilib navkar, savdaridin ayirib arkka
                  kelturdilar. Ikkala mirzoni bir erda oʻlturgʻuzdilar. Kech
                  namozi digar Boysunqur mirzoni Koʻksaroygʻa chiqorur xayoli
                  kildilar. Boysunqur mirzo tahorat qilmoq bahonasi bila Boʻston
                  saroyining sharq-shimol tarafidagʻi imoratlardin bir uyga
                  kirdi. Eshikta tarxoniylar turub edilar, Mirzo bila Muhammad
                  Quli qavchin Hasan sharbatchi bila kirdilar. Alqazo, mirzo
                  tahoratga kirgan uyning orqa tarafida xisht bila tigʻa
                  qoʻborgʻon eshigi bor ekandurkim, havlidin tashqari chiqar
                  ekandur. Filhol, bu tigʻani yiqib chiqib, arkning Gʻotfar
                  tarafidagʻi fasilidin biridin obmoʻri bila chiqib, dutahiy
                  fasilidin tashlab Xoja Kafshirga, Xojago Xojaning uyiga
                  bordilar. Obxonaning eshigida turgʻonlar bir zamondin soʻng
                  mulohaza qilurlar, koʻrarlarkim, mirzo qochib-tur.
                </span>
                <br />
                <span>
                  Tonglasi, tarxoniylar yigʻilib Xojago Xojaning eshigiga
                  borurlar. Xoja «yoʻqtur», deb bermas. Bular ham zoʻr bila ola
                  olmaslar. Xojalarning janobiandin oliy erdikim, zoʻr kila
                  olgʻaylar edi. Bir-ikki kundin soʻng Xoja Abulmakorim va Ahmad
                  Hojibek va yana ba’zi bek va bekot va sipohiylar va jami’
                  shahr eli hujumi om qilib, (37 a) Xojaning uyidan mirzoni
                  kelturub Sulton Ali mirzoni va tarxoniylarni arkta qabadilar.
                  Arkni bir kun ham saxlay olmadilar
                </span>
                <br />
                <span>
                  Muhammad Mazid tarxon Chorraha darvozasi bila chiqib qochib
                  Buxoro bordi. Sulton Ali mirzo bila Darvesh Muhammad tarxon
                  ilikka tushti.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Boysunqur mirzo Ahmad Hojibekning uyida erdikim, Darvesh
                  Muhammad tarxonni kelturdilar. Bir-ikki soʻz soʻrdi. Yaxshi
                  javob bera olmadi. Andoq ish qilmaydur erdikim, javob bera
                  olgʻay. Mirzo oʻlumga buyurdi. Darvesh Muhammad tarxon
                  betoqatliqtin sutungʻa yopushti, sutungʻa yopushqon bila
                  qoʻygʻaylarmu?! Siyosatqa etkurdilar. Sulton Ali mirzoni
                  buyurdikim, Koʻksaroygʻa chiqarib koʻzlariga mil tortqaylar.
                </span>
                <br />
                <span>
                  Temurbek solgʻon oliy imoratlardin biri Koʻksaroydurkim,
                  Samarqandning arkida voqi’ boʻlubtur. Ajab xosiyatliq
                  imorattur. Temurbek avlodidin xar kim bosh koʻtarib taxtka
                  oʻltursa xam munda oʻlturur, xar kim taxt doiyasi bila bosh
                  qoʻysa ham munda koʻyar, hattokim, kinoyati boʻlub erdikim,
                  falon podshoxeodani Koʻksaroygʻa chiqardilar, ya’ni
                  oʻlturdilar.
                </span>
                <br />
                <span>
                  Sulton Ali mirzoni Koʻksaroyga chiqarib koʻzlariga mil
                  torttilar. Jarrohning (37 b ) ixtiyori bila yo bexost milidin
                  Sulton Ali mirzoning koʻzlariga osibe etmadi. Filhol izhor
                  kilmadi. Xoja Yaxyoning uyiga bordi. Ikki-uch kundin soʻng
                  qochib Buxorogʻa tarxonlargʻa bordi. Hazrati Xoja
                  Ubaydulloning avlodining orasida bu sababdin taassub tushti.
                  Ulugʻi ulugʻigʻa murabbiy boʻldi, kichigi kichikiga muqavviy.
                </span>
                <br />
                <span>
                  Bir necha kundin soʻng Xoja Yahyo xam Buxorogʻa bordi.
                  Boysunqur mirzo cherik tortib Buxorogʻa Sulton Ali mirzoning
                  ustiga bordi. Buxorogʻa yovuq etgan bila Sulton Ali mirzo va
                  tarxon beklari yasab chiqtilar. Ozagʻloq urush boʻldi. Fath
                  Sulton Ali mirzo sari boʻlub, Boysunqur mirzo shikast topti.
                  Ahmad Hojibek va yana bir pora oʻbdon yigitlar ilikka tushti,
                  aksarini oʻlturdilar. Ahmad Hojibekni Darvesh Muhammad
                  tarxonning qonining tuhmati bila beizzatona oʻlturdilar.
                </span>
                <br />
                <span>
                  Sulton Ali mirzo Boysunqur mirzoning keynicha-oʻq Samarqandgʻa
                  yurudi. Bu xabar shavvol oyi Andijonda bizga keldi. Biz ham
                  Samarqand doiyasi bila oʻshul shavvol oyi-oʻq cherik
                  otlandduq. Hisor va Qunduzdin Sulton Husayn mirzo yonib edi.
                  Sulton Mas’ud mirzoning va Xisravshoxning xotiri jam’ boʻlub
                  edi. Sulton (38 a ) Mas’ud mirzo ham Samarqand dagʻdagʻasi
                  bila Shahrisabz ustiga keldi. Xisravshox, inisi Valini
                  mirzogʻaqopti. Uch-toʻrt oy bu uch tarafdin Samarqandni
                  muhosara qilduq. Xoja Yaxyo Sulton Ali mirzo qoshidin kelib
                  ittifoq va yakjihatliq soʻzini oragʻa soldi. Soʻzni
                  koʻrushmakka qoʻyub, Samarqandtin ikki-uch shar’iy quyiroq
                  Soʻgʻd tarafidin men cherikim bila bordim.
                </span>
                <br />
                <span>
                  Ul tarafdin Sulton Ali mirzo cheriki bila keldi. Naridin
                  toʻrt-besh kishi bila men Koʻhaq suyining oraligʻigʻa kechib,
                  ot ustida-oʻq koʻrushub va soʻz soʻrushub, alar ul taraf
                  bordilar, men bu taraf keldim. Mullo Binoiyni va Muhammad
                  Solihni anda Xoja xizmatida koʻrdum. Muhammad Solihni oʻshul
                  bir katla-oʻq koʻrdum. Mullo Binoiy xud soʻngralar xeyli
                  mening xizmatimda boʻldi. Sulton Ali mirzo bila koʻrushgondin
                  soʻng chun qish yovuq kelib edi, Samarqand elining ham xeyli
                  tanqisligʻi yoʻq edi. Men Andijongʻa, Sulton Ali mirzo
                  Buxorogʻa murojaat qilduq.
                </span>
                <br />
                <span>
                  Sulton Mas’ud mirzo Shayx Abdullo barlosning qizigʻa bisyor
                  moyil edi. Ani olib, mulkgirlik dagʻdagʻasini qoʻyub, Hisorgʻa
                  (38 b ) yondi. Balki bu kelmaktin gʻaraz ushbu ekandur. Sheroz
                  va Kanboy navohisidin Mahdiy Sulton qochib Samarqand bordi.
                  Hamza Sulton Zomindin ijozat bila Samarqand bordi.
                </span>
                <h3 style={{ textAlign: "center" }}>
                  Vaqoi’i sanayi isno va tis’a mia*
                </h3>
                <small
                  style={{
                    textAlign: "center",
                    margin: "0 auto",
                    display: "block",
                  }}
                >
                  ( Toʻqquz yuz ikkinchi (1496-1497) yil voqealari)
                </small>
                <br />
                <span>
                  Ushbu qishliqta Boysunqur mirzoning ishi filjumla taraqqiyda
                  edi. Abdulkarim ashritkim, Sulton Ali mirzo jonibidin Koʻfin
                  va ul navohigʻa kelib edi, Samarqandtin Mahdiy Sulton
                  Boysunqur mirzoning ilgʻorini boshlab kelib, bularning ustiga
                  yurudilar. Abdulkarim ashrit bila Mahdiy Sulton-oʻq roʻbaroʻ
                  boʻldi. Abdulkarimning otini Mahdiy Sulton cherkasiy kilich
                  bila sanchqoch-oʻq oti yikildi. Oʻzi qoʻpar holatda Mahdiy
                  Sulton iligini bandidin tushura chopti. Ani olib ul ilgʻorini
                  yaxshi bostilar. Bu sultonlar Samarqand ishini va mirzolarning
                  eshigini muzabzab koʻrub, erta yozigʻa, Shayboniyxon qoshigʻa
                  bordilar. Ushmuncha bila Samarqand kishisi umoqlanib, Sulton
                  Ali mirzoning roʻbaroʻyigʻa cherik tortib chiqtilar. Boysunqur
                  mirzo Saripul keldi, Sulton Ali mirzo Xojayi Kordzan keldi.
                  Ushbu fursatda Xoja Munir Oʻshiyning angizi bila Xoja
                  Abulmakorim va Andijon beklaridin (39 a ) Vays Logʻariy va
                  Muhammad Boqir va yana Qosim doʻldoy va Boysunqur mirzoning
                  bir pora ichkilaridin Buxoro ustigailgʻadilar. Yovuq eta,
                  Buxorodagʻilar xabardor boʻldilar, bularning ishi yurumay
                  yondilar.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Sulton Ali mirzo bila koʻrushgonda andoq muqarrar boʻlub
                  erdikim, yoz alar Buxorodin, men Andijondin kelib, Samarqandni
                  muhosara qilgʻaybiz. Oʻshul miod bila ramazon oyi Andijondin
                  otlanib, Yoryayloq navohisigʻa etganda, mirzolarning roʻbaroʻ
                  oʻlturgan xabarini topib, Toʻlun Xoja moʻgʻulni ikki-uch yuz
                  qazoq yigitlar bila ilgʻor ayirduk. Bular yovuq etgan mahalda
                  Boysunqur mirzo bizning xabarimizni topib, buzulgʻon yoʻsunluq
                  yonar. Bu yigitlar oʻshal kecha koʻndalangdin kirib, qalin
                  kishini oʻqlab olib, qalin oʻlja kelturdilar
                </span>
                <br />
                <span>
                  Biz bir-ikki kundin soʻng Sheroz qoʻrgʻonigʻa ettuk. Sheroz
                  Qosim doʻldoyda edi. Dorugʻasi Sherozni saxlay olmay,
                  qoʻrgʻonni berdi. Sheroz qoʻrgʻoni Ibrohim sorugʻa uhda
                  boʻldi. Tonglasi iydi fitr namozini anda qilib, Samarqand
                  ustiga mutavajjih boʻlub, Obyor qoʻrugʻigʻa tushtuk. Ushbu kun
                  Qosim doʻldoy, Vays Logʻariy, Hasan nabira, Sulton Muhammad
                  Sayfal, (39 b ) Sulton Muhammad Vays uch-toʻrt yuz kishi bila
                  kelib, mulozamat kildilar. Soʻzlari bu erdikim, Boysunqur
                  mirzo koʻchub, yongʻoch, biz ayrilib podshoh qullugʻigʻa
                  kelduk. Oxir ma’lum boʻldukim, bular, da’vo bila Boysunqur
                  mirzodin ayrilib, Sherozni saxlagʻali kelgan ekandurlar.
                  Sheroz ishi mundoq boʻlgʻoch, bechora boʻlub kelibturlar.
                </span>
                <br />
                <span>
                  Qorabuloqqa tushganda ba’zi kirgan kend-kesakka boshsizliq
                  kilgʻon moʻgʻullarni tutub keturdilar. Qosimbek siyosat uchun
                  ikki-uchini pora-pora qildurdi. Toʻrt-besh yildin soʻngra
                  qazoqliklarda Maschodin xon krshigʻa mutavajjix, boʻlgʻonda,
                  Krsimbek ushbu jihatdin bizdin ayrilib Hisorgʻa bordi.
                  Qorabulokdin koʻchub, suv kechib, Yom toʻgʻrisida tushtuk.
                  Ushbu kun ba’zi ichki beklar Xiyobon boshida Boysunqur
                  mirzoning kishisi bila ilik olishtilar. Sulton Ahmad
                  Tanbalning boʻgʻzigʻa nayzalab yiqtilar, vale tushmadi. Xojago
                  Mullo Sadrkim, Xoja Kalonning ulugʻ ogʻasi edi, yoʻgʻon
                  boʻyinigʻa oʻq tegdi. Ushal zamon Tengri rahmatigʻa bordi.
                  Xeyli yaxshi yigit edi. Otam xam rioyat qilib, muxrdor qilib
                  edi. Tolibi ilm (40 a ) ligʻi bor edi, lugʻatni xeyli bilur
                  edi, inshosi ham yaxshi edi. Kushchiligʻni va yadachiligʻni
                  ham bilur edi
                </span>
                <br />
                <span>
                  Yom navohisida ekanda shahrdin qalin el bozori va gʻayri
                  bozori chiqib, oʻrdu bozorda boʻlub, sud va savdo qilurlar
                  edi. Bir namozi digar bayakbor gʻavgʻoyi omi boʻlub, bu
                  musulmonlar tamom talongʻa bordilar. Cherik zabti bu martabada
                  erdikim, farmon boʻldukim, jami’ elning jihotinihech kim
                  saxlamay tamom yondura bergaylar. Tonglasi bir pahar
                  boʻlmaydur erdikim, ip uchi, igna sinugʻicha nima cherik
                  iligida qolmadi, borchasini egalariga yondura berdilar.
                </span>
                <br />
                <span>
                  Andin koʻchub Samarqandning sharq tarafi Xon yurtigʻa
                  tushuldi, Samarqandtin uch kuroʻh boʻlgʻay. Qirq-ellik kun bu
                  yurtta oʻlturuldi. Bu yurtta ekanda necha navbat
                  tashkaridin-ichkaridin koʻngulluk yigitlar Xiyobonda yaxshilar
                  chopqulashtilar. Bir martaba Xiyobonda Ibrohim Bekchik
                  chopqulashti, yuziga choptilar. Mundin soʻng Ibrohim chopuq
                  derlar edi. Yana bir navbat ham, Xiyobonda Puli Magʻokta
                  Abulqosim koʻhbur piyozi tegurdi. Yana bir qatla ham Xiyobonda
                  Tarnov navohisida chopqulash (40 b ) boʻldi. Mirzoshoh qavchin
                  piyozi tegurdi. Mirshoh qavchinni andoq choptilarkim,
                  boʻynining yarmigʻa yovuq chopilib edi, gʻoyatash shahragi
                  kesilmaydur edi.
                </span>
                <br />
                <span>
                  Xon yurtida ekanda, qoʻrgʻondagʻilar firib bila kishi yiborib,
                  dedilarkim, kecha bila Gʻori Oshiqon tarafigʻa kelingkim,
                  qoʻrgʻonni berurbiz. Bu xayol bila kecha otlanib Puli Magʻokka
                  keldim. Bir pora oʻbdon yigitlarni va piyodalarni miod eriga
                  yiborildi. Ichkaridin bizning piyodalardin toʻrt-besh piyodani
                  chiqarib edilarkim, voqif boʻldilar. Xeyli jald piyodalar
                  edilar. Birisining oti Hoji edi. Manga kichiktin xizmat qilib
                  edi. Yana birini Mahmud Kunduri Sangak der edilar. Borchasini
                  oʻlturdilar.
                </span>
                <br />
                <span>
                  Bu yurtta ekanda, Samarqandtin shahriy va bozoriy ul miqdor
                  chiqib erdikim, oʻrdu shahri boʻlub edi. Har ne shahrlarda
                  tilasalar, oʻrduda topilur edi. Bu muddatta bir Samarqandtin
                  oʻzga tamom qoʻrgʻonlar va togʻ va tuz kirib edi. Shovdor
                  togʻining domanasida Urgut otliq qoʻrgʻonni bir jamoat
                  berkittilar. Zarurat boʻlub bu yurttin koʻchub Urgut ustiga
                  borildi. Toqat keltura olmay Xoja Qozini (41 a ) oragʻa solib
                  kirdilar. Biz dogʻi gunohlarini afv qilduk. Yana Samarqand
                  muhosarasigʻa yonduk.
                </span>
                <br />
                <span>
                  Ushbu yil Sulton Husayn mirzo bila Badi’uzzamon mirzo
                  orasidagʻi nifoqlr urushgʻa tortti. Tafsili budurkim, oʻtgan
                  yil Balxni va Astrobodni Badi’uzzamon mirzogʻa va Muzaffar
                  mirzogʻa berib yukundurub edilar, nechukkim mazkur boʻldi,
                  oʻshul muddattin bu muddatqacha gʻalaba elchilar bordilar va
                  keldilar.
                </span>
                <br />
                <span>
                  Oxir Alisherbek xam elchilikka keldi. Harchand sa’y qildilar,
                  Astrobodni inisiga bermakka rizo boʻlmadi. Dedikim, mening
                  oʻgʻlum Muhammad Moʻmin mirzoni xatna kilgʻonda mirzo anga
                  bagʻishlabtur
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Bir kun Alisherbek bila mirzoning orasida bir suxbate
                  oʻttikim, mirzoning tez faxmligʻigʻa va Alisherbekning riqqati
                  qalbigʻa doldur.Alisherbek sirriy soʻzlarni mirzogʻa goʻshaki
                  gʻala-ba aytti. Dagʻi dedikim: «Bu soʻzlarni unutung!» Mirzo
                  filhol ayttikim: «Kaysi soʻzlarni?» Alisherbek bisyor
                  mutaassir boʻlub koʻp yigʻladi.
                </span>
                <br />
                <span>
                  Oxir otaliq oʻgʻulluk orasida bu guftugoʻylar anga munjar
                  boʻldukim, otasi otasining ustiga va oʻgʻli oʻgʻlining ustiga
                  Balx va Astrobodka cherik torttilar. Gurzivonning oyogʻida (41
                  b ) Yakchirogʻ oʻlangiga quyidin Sulton Husayn mirzo,
                  yuqqoridin Badi’uzzamon mirzo keldilar. Chahorshanba kuni,
                  ramazon oyining gʻurrasida Abulmuhsin mirzo Sulton Husayn
                  mirzoning bir necha beklari va bir pora ilgʻori bila ilgarrak
                  keldi. Andoq urush ham boʻlmadi, bosildi. Qalin oʻbdon
                  yigitlari ilikka tushti. Sulton Husayn mirzo barchasining
                  boʻynigʻa urdurdi. Ne yolgʻuz munda emas edi, har kachon bir
                  oʻgʻlikim, yogʻiygʻa yurudi, bosti. Ilikka tushgan
                  navkarlarining tamom boʻynigʻa urdurdi. Ne kilsun, Haq aning
                  tarafi ekandur.
                </span>
                <br />
                <span>
                  Bu mirzolar andoq ifrot bila fisq va ayshgʻa mashgʻul
                  edilarkim, otasidek kordida va kordon podshox, tushchilik yoʻl
                  kelib, ramazondek mutabarrak va aziz oygʻa kechalik fursat
                  krlib, otasi-din iymanmay, Tengridin koʻr&may, xanuz ishi
                  chogʻir ichmak edi — nashot bila, majlisoroliq edi — inbisot
                  bila. Mukarrardurkim, mundoq boʻlgʻon kishi andoq shikast
                  topkay va bu nav’ oʻtgan elga xar kim dast topkay.
                </span>
                <br />
                <span>
                  Necha yilkim, Astrobod hukumati Badi’uzzamon mirzoda edi,
                  havoli va havoshisi va yigit-yalangi bisyor purzavq va purzeb
                  boʻlur edi. Oltun va kumush olot va adavoti bisyor boʻlub edi.
                  Va kumoshpoʻsh yigiti (42 a ) va tupchoq oti beshumor boʻlub
                  edi. Borchasini munda boy berdi. Qocharda, togʻ ioʻligʻa
                  uchrab, enish va uchma erga yoʻlukub, oʻzi tashvish bila bu
                  uchmadin tushti. Koʻp eli bu uchmada zoyi’ boʻldi.
                </span>
                <br />
                <span>
                  Sulton Husayn mirzo oʻgʻlini bosqondin soʻng Balxqa keldi.
                  Badi’uzzamon mirzo Balxta Shayx Ali tagʻoyini qoʻyub edi.
                  Chora qila olmay, kirib Balxni topshurdi. Sulton Husayn mirzo
                  Balxni Ibrohim Husayn mirzogʻa berib, Muhammad Valibek va Shoh
                  Husayn chuhrani aning bila qoʻydi. Oʻzi Xurosongʻa murojaat
                  qildi.
                </span>
                <br />
                <span>
                  Badi’uzzamon mirzo shikasttin soʻng talanib, oldurub, yigit
                  yalangi va yayoq-yalangi bila Qunduzgʻa Xisravshoxgʻa tortti.
                  Xisravshox, ham yaxshi xizmatlar qildi. Ot va tevadin va xayma
                  va xirgox,-din, balki jami’ sipohiyliq yarogʻidin mirzogʻa va
                  mirzo bila boʻlgʻonlarigʻa ul , miqdor xizmat va odamigarlik
                  qildikim, koʻrganlar dedilarkim, burungʻi yarogʻ bila bu
                  yarogʻning orasida tafovut magar tilla olot va nuqra olot
                  boʻlgʻay edi.
                </span>
                <br />
                <span>
                  Sulton Mas’ud mirzo bila Xisravshoxning orasida aning
                  bee’tidolligʻlaridin va muning ulgʻaymoqlaridin niqorlar va
                  kuduratlar boʻlub edi. Valini va Boqini (42 b ) Badi’uzzamon
                  mirzogʻa qoʻshub, Sulton Mas’ud mirzoning ustiga Hisorgʻa
                  yibordi. Qoʻrgʻongʻa yakin ham kela olmadilar. Atrof va
                  navohida bir-ikki qatla ul tarafdin, bu tarafdin qilich
                  olishtilar. Bir navbat Hisorning shimol tarafi Qushxonada
                  Muhib Ali qoʻrchi eldin ayrilib kelib, yaxshi chopti. Ottin
                  yiqilib olur mahalda yana ul tarafidin zoʻrlab xalos kildilar.
                </span>
                <br />
                <span>
                  Bir necha kundin soʻngra gurgoshtiroq qilib yondilar. Bir
                  necha kundin soʻng Badi’uzzamon mirzo togʻ yoʻli bila Qandahor
                  va Zamini Dovargʻa va Zunnun argʻun va oʻgʻli Shoh Shujo’
                  argʻungʻa oʻzini tortti. Zunnun argʻun bovujudi xissat va
                  baxillik yaxshi xizmatlar kildi. Bir peshkash qilgʻonda qirq
                  ming qoʻy peshkash qildi.
                </span>
                <br />
                <span>
                  Bu gʻaroyib voqiottindurkim, oʻshul chahorshanba kunikim,
                  Sulton Husayn mirzo Badi’uzzamon mirzoni bosar. Ushul kuni
                  Astrobodta Muzaffar mirzo Muhammad Moʻmin mirzoni bosar. Yana
                  bu ajabroqkim, Chahor shanba otliq kishi Muhammad Moʻmin
                  mirzoni tushurub kelturur.
                </span>
                <h3 style={{ textAlign: "center" }}>
                  Vaqoi’i sanayi salos va tis’a mia*
                </h3>
                <small
                  style={{
                    textAlign: "center",
                    margin: "0 auto",
                    display: "block",
                  }}
                >
                  (Toʻqquz yuz uchinchi (1497—1498) yil voqealari)
                </small>
                <span>
                  Bogʻi Maydonning orqasi Qoʻlba oʻlangiga tushuldi. Samarqand
                  eli sipohiy va shahriy Puli Muhammad Chab navohisigʻa qalin
                  chiqtilar. Chun bizning el tayyor emas edilar, (43 a) yigitlar
                  mustaid boʻlgʻuncha Sultonquli va Boboqulini tushurub,
                  qoʻrgʻongʻa elttilar. Bir necha kundin soʻng koʻchub,
                  Koʻhakning orqasi Qoʻlbaning boshigʻa tushuldi. Sayyid
                  Yusufbekni ushbu kun Samarqandtin chiqardilar. Ushbu yurtta
                  kelib mulozamat qildi.
                </span>
                <span>
                  Samarqanddagʻilar ul yurttin koʻchub, bu yurtka kelganimizni
                  yondi tasavvur qilib, koʻmaki sipohiy va shahriy birla Mirzo
                  koʻprugigacha chiqtilar. Buyurdukkim, boʻlgʻon yigitlar
                  yaroqlanib otlandilar. Ikki tarafdin Puli Mirzodin va Puli
                  Muhammad Chabdin zoʻr kelturdilar. Tengri rost kelturdi,
                  yogʻiy bosildi.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Ubdon-oʻbdon beklarni va yaxshi-yaxshi yigitlarni tushurub
                  kelturdilar. Ul jumladin bir Muhammad Miskin Hofiz doʻldoy
                  edi. Shahodat barmogʻini tushura chopib, olib kelturdilar.
                  Yana Muhammad Qosim nabirani inisi Hasan nabira tushurub
                  kelturdi.
                </span>
                <br />
                <span>
                  Mundoq sipohiy va el tonigʻudek yigitlardin xeyli bor edi.
                  Yana shahr yatimlaridin Devonayi Jomabofni va Kal Qoshukni
                  kelturdilarkim, jangsangda va yatim (43 b ) likda xira va
                  saromad edilar. Gʻori Oshiqonda oʻlgan piyodalarning qasosiga
                  buyuruldikim, azoblar bila oʻlturdilar. Samaqand eliga bu
                  qulliy shikast edi. Mundin soʻngra qoʻrgʻondin chiqmoqlari
                  bartaraf boʻldi. Ish anga ettikim, bizning el xandaq
                  yokasigʻacha borib, qul va dodak keltururlar edi.
                </span>
                <br />
                <span>
                  Oftob mezongʻa tahvil kildi, sovuq tushti. Bori kengashga
                  kirar beklarni tilab, kengashib soʻz munga karor toptikim,
                  shahar kishisi muncha ojiz boʻlubtur, Tengri inoyati bila bu
                  kun ham boʻlsa olurbiz, tongla ham boʻlsa olurbiz. Tashqari
                  sovuqta tashvish tortquncha shahrning yovugʻidin qoʻpub, bir
                  qoʻrgʻonda qishloq solmoq kerak.
                </span>
                <br />
                <span>
                  Ketari ham boʻlsa ul mahalda betaraddudroq ketar boʻlur.
                  Qishloqqa Xoja Diydorning olidagʻi oʻlangga tushuldi.
                  Qoʻrgʻongʻa kirib uy va kapa erlarini ta’yin qilib, ustakor va
                  muhassil qoʻyub yurtqa kelduk. Necha kun qishloqi uylar tayyor
                  boʻlgʻuncha oʻlangda oʻlturuldi
                </span>
                <br />
                <span>
                  Bu muddatda Boysunqur mirzo Turkistongʻa Shayboniyxongʻa,
                  mutavotir kishilar yiborib, Shayboniyxonni koʻmak tilabdur.
                  Qishloq uylari tayyor boʻlub qoʻrgʻonga (44a) kirduk.
                  Shayboniyxon Turkistondin ilgʻab oʻshul sahari bizning
                  yurtumiz ustiga kelib turdi. Bizning cherikimiz yaqin emas
                  edi. Qishloq maslaxatigʻa ba’zi Raboti Xojagʻa, ba’zi
                  Kobudgʻa, ba’zi Sherozgʻa borib edilar. Bovujud hozir cherik
                  kishisi bila yasab chiqildi. Shayboniyxon turush bermay,
                  Samarqand sari oʻzini tortti, Samarqand navohisigʻa bordi.
                  Chun Boysunqur mirzoning muddaosidek boʻlmadi, yaxshi ixtilot
                  qilmadi. Necha kundin soʻng hech ish qila olmay ma’yus
                  Turkistongʻa murojaat qildi.
                </span>
                <br />
                <span>
                  Boysunqur mirzo etti oy qabal tortti. Bir umidvorligʻi mundin
                  edi, mundin ham noumid boʻldi. Ikki-uch yuz och urugʻi bila
                  Qunduzgʻa Xisravshoxgʻa oʻzini tortti. Tirmiz navohisidin
                  Amuni kechaturgʻon mahalda Sayyid Husayn Akbarkim, Sulton
                  Mas’ud mirzoning ham urugʻi, ham mu’tabar kishisi edi, Tirmiz
                  hokimi edi, xabar topib, Boysunqur mirzoning ustiga keldi.
                  Mirzo suvdin oʻtub edi. Mirim Tarxon anda suvgʻa bordi. Keyin
                  qolgʻon kishi-qaro partol-martolni oldi. Boysunqur mirzoning
                  Tohir Muhammad otliq chuxrasi dagʻi ilikka tushti. Boysunqur
                  mirzoni Xisravshox, dagʻi yaxshi koʻrdi. (4 4 b )
                </span>
                <br />
                <span>
                  Boysunqur mirzo chiqqach, bizga xabar keldi. Xoja Diydordin
                  otlanib, Samarqandgʻa mutavajjih boʻlduk. Yoʻlda akobir va
                  beklar va yigitlar mutaoqib istiqbolgʻa keldilar. Rabiul avval
                  oyining avoxirida kelib, arktaBoʻstonsaroygʻa tushtum. Tengri
                  taolo inoyati bila Samarqand shahri va viloyati muyassar va
                  musaxxar boʻldi.
                </span>
                <br />
                <span>
                  Rub’i maskunda Samarqandcha latif shahr kamrokdur. Beshinchi
                  iqlimdindur. Tuli (99*) ramzi nujumiy (56*) daraja va
                  daqiqadur, arzi (40*) daraja va daqiqadur. Shahri
                  Samarqanddur, viloyatini Movarounnahr derlar. Hech yogʻiy qaxr
                  va gʻalaba bila munga dast topmagʻon uchun baldayi mahfuza
                  derlar. Samarqand hazrati amirul moʻ’minin Usmon zamonida
                  musulmon boʻlgʻondur. Sahobadin Qusam ibn Abbos anda
                  borgʻondur. Qabri Ohanin darvozasining toshidadur. Holo Mazori
                  Shohgʻa mashhurdur. Samarqandni Iskandar bino qilgʻondur.
                  Moʻgʻul va turk ulusi Semirqand derlar. Temurbek poytaxt qilib
                  edi. Temurbekdin burun Temurbekdek ulugʻ podshoh Samarqandni
                  poytaxt qilgʻon emastur. Qoʻrgʻonini, fasilning ustidin
                  buyurdumkim, qadam urdilar. Oʻn ming olti yuz qadam chiqti.
                </span>
                <br />
                <span>
                  Eli tamom sunniy va pokmazhab va mutasharri’ va mutadayyin
                  eldur. Hazrati Risolat sallallohu alayhi va sallam zamonidin
                  beri ul miqdor aimmayi islomkim, Movarounnahrdin paydo
                  boʻlubtur, hech viloyattin ma’lum (45 a ) emaskim, muncha
                  paydo boʻlmish boʻlgʻay. Shayx Abu Mansurkim, aimmayi
                  kalomdindur, Samarqandning Moturid otliq mahallasidindur.
                  Aimmayi kalom ikki firqadur, birni «moturidiya» derlar, birni
                  «ash’ariya». Moturidiya Shayx Abu Mansurgʻa mansubdur. Yana
                  sohibi «Sahihi Buxoriy» Xoja Ismoil Xartanak ham
                  Movarounnahrdindur, yana sohibi «Hidoyakim, Imom Abu Xanifa
                  mazhabida «Hidoya»din mu’tabarroq kitobi fiqx, kam boʻlgʻay,
                  Fargʻonaning Margʻinon otliq viloyatidindur, ul ham doxili
                  Movarounnahrdur.
                </span>
                <br />
                <span>
                  Ma’muraning kanorasida voki’ boʻlubtur, sharqi Fargʻona va
                  Koshgʻar, gʻarbi Buxoro va Xorazm, shimoli Toshkand va
                  Shohruxiyakim, Shosh va Banokat bitirlar, janubi Balx va
                  Tirmiz, Koʻhak suyi shimolidin oqar, Samarqandtin ikki kuroʻh
                  boʻlgʻay.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  {" "}
                  Bu suv bila Samarqand orasida bir pushta tushubtur, Koʻhak
                  derlar. Bu rud muning tubidin oqar uchun Koʻhak suyi derlar.
                  Bu suvdin bir ulugʻ rud ayiribturlar, balki daryochadur,
                  Dargʻam suyi derlar. Samarqandning janubidin oqar,
                  Samarqandtin bir shar’iy boʻlgʻay. Samarqandning bogʻot va
                  mahalloti va yana necha tumonoti bu suv bila ma’murdur. Buxoro
                  va Qorakoʻlgachakim, oʻttuz-kirq yigʻoch yoʻlgʻa yovuqlashur,
                  Koʻhak suyi bila ma’mur va mazru’dur. Mundoq ulugʻ (45 b )
                  daryo aslo ziroattin va imorattin ortmas, balki yozlar
                  uch-toʻrt oy Buxorogʻa suv etmas. Uzumi va qovuni va olmasi va
                  anori, balki jami’ mevasi xoʻb boʻlur. Vale ikki meva
                  Samarqandtin mashhurdur: sebi Samarqand vasohibiyi Samarqand.
                  Qishi mahkam sovuqtur, qori agarchi Kobul qoricha tushmas.
                  Yozlar yaxshi havosi bor, agarchi Kobulcha yoʻqtur.
                </span>
                <br />
                <span>
                  Temurbekning va Ulugʻbek mirzoning imoroti va bogʻoti
                  Samarqand mahallotida koʻptur. Samarqand arkida Temurbek bir
                  ulugʻ koʻshk solibtur, toʻrt oshyonliq, Koʻksaroygʻa mavsum va
                  mashhur va bisyor oliy imorattur. Yana Ohanin darvozasigʻa
                  yovuq qal’aning ichida bir masjidi jum’a solibtur, sangin,
                  aksar Hindustondin eltgan sangtaroshlar anda ish qilibturlar.
                  Masjidning peshtoqi kitobasida bu oyatni «Va ‘iz yarfa’u
                  Ibrohim al-qavoida (ilo oxirihi)»ni andoq ulugʻ xat bila
                  bitibturlarkim, bir kuroʻh; yovuq erdin oʻkusa boʻlur. Bu ham
                  bisyor oliy imorattur. Samarqandning sharqida ikki bogʻ
                  solibtur, birikim yiroqroktur, Bogʻi Boʻldudur, yovuqrogʻi
                  Bogʻi Dilkushodur. Andin Feruza darvo-zasigʻacha xiyobon
                  qilib, ikki tarafida terak yigʻochlari ekturubtur. Dilkushoda
                  ham ulugʻ koʻshk soldurubtur, ul koʻshkta (46 a ) Temurbekning
                  Hinduston urushini tasvir qilibturlar. Yana Pushtayi
                  Koʻhakning domanasida Konigilning qora suyining ustidakim, bu
                  suvni Obi Rahmat ham derlar, bir bogʻ solibtur. Nakshi
                  Jaxrngʻa mavsum. Men koʻrgan mahalda bu bogʻ buzulub edi, oti
                  besh qolmaydur edi. Yana Samarqandning janubida Bogʻi
                  Chanordur, Kal’agʻa yovuqtur. Yana Samarqandning quyi yonida
                  Bogʻi Shamol va Bogʻi Bihishttur. Temurbekning nabirasi,
                  Jahongir mirzoning oʻgʻli Muhammad Sulton mirzo Samarqandning
                  tosh qoʻrgʻonida — chaqarda bir madrasa solibtur. Temurbekning
                  qabri va avlodidin har kimki Samarqandta podshohlik qilibtur,
                  alarning qabri ul madrasadadur.
                </span>
                <br />
                <span>
                  Ulugʻbek mirzoning imoratlaridin Samarqand qal’asining ichida
                  madrasa va xonaqoxdur. Xonaqohning gunbazi bisyor ulugʻ
                  gunbazdur, olamda oncha ulugʻ gunbaz yoʻq deb nishon berurlar.
                  Yana ushbu madrasa va xonaqohgʻa yovuq bir yaxshi hammom
                  solibtur, Mirzo hammomigʻa mashhurdur, har nav’ toshlardin
                  farshlar qilibtur. Xuroson va Samarqandta oncha hammom ma’lum
                  emaskim, boʻlgʻay. Yana (46 b ) bu madrasaning janubida bir
                  masjid solibtur, masjidi Muqatta’ derlar. Bu jihattin Muqatta’
                  derlarkim, qit’a-qit’a yigʻochlarni tarosh qilib, islimiy va
                  xitoiy naqshlar solibturlar, tamom devorlari va saqfi ushbu
                  yoʻsunluqtur. Bu masjidning qiblasi bila madrasa qiblasining
                  orasida bisyor tafovuttur. Gʻolibo bu masjid qiblasining samti
                  munajjim tariqi bila amal qilibturlar. Yana bir oliy imorati
                  Pushtayi Koʻhak domanasida rasaddurkim, zich bitmakning
                  olatidur. Uch oshyonlikdur. Ulugʻbek mirzo bu rasad bila «Ziji
                  Koʻragoniy»ni bitibturkim, olamda holo bu zij musta’maldur.
                  Oʻzga zij bila kam amal qilurlar. Mundinburun «Ziji Elxoniy»
                  musta’mal erdikim, Xoja Nosir Tusiy Halokuxon zamonida
                  Marogʻada rasad bogʻlatibtur, Halokuxondurkim, Elxon ham
                  derlar. Gʻolibo, olamda etti-sekkiz rasad besh
                  bogʻlamaydurlar. Ul jumladin bir, Ma’mun xalifa rasad
                  bogʻlabturkim, «Ziji Ma’muniy»ni andin bitibturlar. Bir
                  Batlimus ham rasad bogʻlabtur. Yana bir Hindustonda raaja
                  Bikramajit hindu zamonida Ujjayn va Dhardakim, Maloʻt
                  mulkidur, holo Mandugʻa mashhurdur, yana bir rasad
                  qilibturlar, holo hindularning musta’mal Hindustonda ul
                  zijdur. Bu rasadni bogʻlagʻoni (47 a ) ming besh yuz sekson
                  toʻrt yildur. Bu ul zijlargʻa boqa noqisroqtur.
                </span>
                <br />
                <span>
                  Yana Pushtayi Koʻhakning domanasida gʻarb sari bogʻe solibtur,
                  Bogʻi Maydongʻa mavsum. Bu bogʻning oʻrtasida bir oliy imorat
                  qilibtur, Chilsutun derlar, du oshyona, sutunlari tamom
                  toshdin. Bu imoratning toʻrt burchida toʻrt manordek burjlar
                  quporibturlarkim, yuqqorigʻa chiqar yoʻllar bu toʻrt
                  burjdindur. Oʻzga tamom erlarda toshdin sutunlardur. Ba’zini
                  morpech xiyora qilibturlar. Yuqqorigʻi oshyonining toʻrt
                  tarafi ayvondur, sutunlari toshdin. Oʻrtasi chordara uydur.
                  Imorat kursisini tamom toshdin farsh qilibturlar. Bu imorattin
                  pushtayi Koʻhak sari domanada yana bir boqcha solibtur, anda
                  bir ulugʻ ayvon imorat qilibtur, bu ayvonning ichida bir ulugʻ
                  tosh taxt qoʻyubtur, tuli taxminan oʻn toʻrt-oʻn besh qari
                  boʻlgʻoy, arzi etti-sekkiz qari, umki bir qari. Mundoq ulugʻ
                  toshni xeyli yiroq yoʻldin kelturubturlar. Oʻrtasida darz
                  boʻlubtur. Derlarkim, ushbu erda keltirgandin soʻng bu darz
                  boʻlgʻondur. Ushbu bogʻchada yana bir chordara (4 7 6)
                  solibtur, izorasi tamom chiniy, Chinixona derlar. Xitoydin
                  kishi yiborib kelturubtur.
                </span>
                <br />
                <span>
                  Samarqandning qal’asining ichida yana bir qadimiy imorattur,
                  Masjidi Laqlaqa derlar. Ul gunbazning oʻrtasida erga tepsalar
                  tamom gunbazdin laqlaq un kelur, gʻarib amredur, hech kim
                  muning sirrini bilmas.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Sulton Ahmad mirzoning zamonida ham bek va bekot kalin bogʻ va
                  bogʻcha soldilar. Ul jumladin, Darvesh Muhammad tarxonning
                  chorbogʻicha safoliq va havoliq va maddi nazarliq chorbogʻ kam
                  boʻlgʻay. Bogʻi Maydondin kuyiroq balandining ustida Qulba
                  oʻlangiga mushrif bir chorbogʻ solibtur, tamom bu oʻlang oyogʻ
                  ostidadur. Chorbogʻda ham martabamartaba erlarni siyoq bila
                  tuzatib, yaxshi norvanlar va sarv va safedorlar tikibturlar,
                  xeyli saromad manzilidur. Aybi budurkim, ulugʻ suyi yoʻqtur.
                </span>
                <br />
                <span>
                  Samarqand shahri ajab orosta shahredur, bu shahrda bir
                  xususiyati borkim, oʻzga kam shahrda andoq boʻlgʻay. Har
                  xirfagarning bir boshka bozori bor, bir-birlariga maxlut
                  emastur, tavr rasmedur. Xoʻb nonvoliklari vaoshpazliklari
                  bordur. Olamda yaxshi qogʻaz Samarqanddin chiqar. Juvozi
                  qogʻazlar suyi tamom Konigildin keladur. Konigil Siyohob
                  yoqasidadurkim, (48 a ) bu Qora suvni Obi Rahmat ham derlar.
                </span>
                <br />
                <span>
                  Samarqandning yana bir matoyi qirmizi mahmaldurkim, atrof va
                  javonibka eltarlar.
                </span>
                <br />
                <span>
                  Girdo-girdida yaxshi oʻlanglari bor. Bir mashhur oʻlang
                  Konigil oʻlangidur. Samarqand shahridin sharq tarafidadur, bir
                  nima shimolgʻa moyil, bir shar’iy boʻlgʻoy, qora suvkim, Obi
                  Rahmat ham derlar, Konigilning oʻrtasidin oqar, etti-sekkiz
                  tegirmon suyi boʻlgʻoy. Bu suvning atrofi tamom obgirdur.
                  Ba’zi derlarkim, bu oʻlangning asli oti Konobgir ekandur, vale
                  tarixlarda tamom Konigil bitirlar, xeyli yaxshi oʻlangdur.
                  Samarqand salotini hamisha bu oʻlangni qoʻruq kilurlar. Har
                  yil bu oʻlangga chiqib bir oy, ikki oy oʻltururlar. Bu
                  oʻlangdin yuqqorroq sharqi-janub sari yana bir oʻlang voqi’
                  boʻlubtur: Xon yurtigʻa mavsum, Samarqandning sharqidur,
                  Samarqandtin bir yigʻoch boʻlgʻay. Bu qora suv aning orasi
                  bila oʻtub, Konigil borur. Xon yurtida bu qora suv andoq
                  yuqoridin evrulub kelibturkim, ichida bir oʻrdu tushguncha er
                  boʻlgʻay. Chiqar eri xeyli tor voqi’ boʻlubtur. Bu erning
                  sirfasini koʻzlab, Samarqand muhosarasida necha mahal munda
                  oʻlturulub edi. Yana bir oʻlang (48 b ) Boʻdana qoʻrugʻidur,
                  Dilkusho bogʻi bila Samarkand orasida voqi’ boʻlubtur. Yana
                  bir Qoʻli magʻok oʻlangidur, Samarqandtin ikki shar’iyga
                  yovushkay, gʻarb saridur, bir nima shimolgʻa moyil. Bu ham
                  tavr oʻlangedur. Bir yonida bir ulugʻ koʻl voqi’ boʻlubtur, bu
                  jihattin Koʻli magʻok oʻlangi derlar. Samarqand muhosarasida
                  men Xon yurtida oʻlturgʻonda bu oʻlangda Sulton Ali mirzo
                  oʻlturub edi. Yana bir Qulba oʻlangidur, bu muxtasarroq
                  oʻlangdur. Shimoli Qulba kenti va Koʻhak daryosi, janubi Bogʻi
                  Maydon va Darvesh Muhammad tarxonning chorbogʻi, sharqi
                  Pushtayi Koʻhak.
                </span>
                <br />
                <span>
                  Yaxshi viloyoti va tumonoti bor. Ulugʻ viloyatikim, Samarqand
                  qarinasidur, Buxorodur. Samarkandning gʻarbi tarafi yigirma
                  besh yigʻoch yoʻldur, Buxoroning ham necha tumonoti bor. Tavr
                  shahre voqi’ boʻlubtur. Mevasi koʻp boʻlur va xoʻb boʻlur,
                  qovuni bisyor yaxshi boʻlur, Movarounnahrda Buxoro qovunicha
                  koʻb va xoʻb qovun boʻlmas. Agarchi Fargʻona viloyatidin
                  Axsining bir nav’ qovunikim, «mirtemuriy» derlar, muning
                  qovunidin chuchukroq va nozukroq boʻlur, vale Buxoroda har
                  jins qovundin koʻb boʻlur va yaxshi boʻlur. Yana «oluyi
                  buxoriy» mashhurdur. Buxoro olusidek hech erda boʻlmas,
                  terisini soʻyub qurutub tabarrukluklar bila viloyattin (49 a )
                  viloyatqa eltarlar. Talyin uchun bisyor yaxshitadovidur,
                  parvori tovugʻi va qozi bisyor boʻlur. Movarounnahrda Buxoro
                  chogʻirlaridin tundroq chogʻir boʻlmas. Men Samarqandta avval
                  ichganda Buxoro chogʻirlarini ichar erdim.
                </span>
                <br />
                <span>
                  Yana Kesh viloyatidur, Samarqandning janubidadur, toʻqquz
                  yigʻoch yoʻldur. Samarqand bila Kesh orasida bir togʻ
                  tushubtur, Itmak doboni derlar, sangtaroshliq qilur toshlarni
                  tamom bu togʻdin eltarlar. Bahorlar sahrosi va shahri va bomi
                  va tomi xoʻb sabz boʻlur uchun Shahrisabz ham derlar.
                  Temurbekning zodu budi Keshdin uchun, shahr va poytaxt
                  qilurigʻa koʻp sa’y va ehtimomlar qildi, oliy imoratlar Keshta
                  bino qildi. Oʻziga devon oʻlturur uchun bir ulugʻ peshtoq va
                  yana ung enida va sul enida tavochi beklari bila devon beklari
                  oʻlturub devon soʻrar uchun, ikki kichikrak peshtoq qilibtur.
                  Yana savrun eli oʻlturur uchun bu devonxonaning har zil’ida
                  kichik-kichik toqchalar qilibtur, muncha oliy toq olamda kam
                  nishon berurlar. Derlarkim, Kisro toqidin bu biyikraktur. Yana
                  Keshda madrasa va maqbara qilibtur. Jahongir mirzo va yana
                  ba’zi avlodining maqobiri (49 b ) andadur. Chun Keshning
                  qobiliyati shahr boʻlmoqqa Samarqandcha emas edi, oxir poytaxt
                  uchun Temurbek Samarqandni-oʻq ixtiyor qildi.
                </span>
                <br />
                <span>
                  Yana Qarshi viloyatidurkim, Nasaf va Naxshab ham derlar,
                  Qarshi moʻgʻulcha ottur, goʻrxonani moʻgʻul tili bila «qarshi»
                  derlar. Gʻolibo, bu ot Chingizxon tasallutidin soʻng
                  boʻlgʻondur. Kamobroq erdur, bahori xoʻb boʻlur, ekini va
                  qovuni yaxshi boʻlur. Samarqandtin janub saridur, bir nima
                  gʻarbqa moyil, oʻn sekkiz yigʻoch yoʻldur. Bagʻriqaro
                  yoʻsunluq qushkina boʻlurkim, qilquyruq derlar, Qarshi
                  viloyatida behad va benihoyat boʻlur uchun ul navohida
                  murgʻaki qarshi derlar.
                </span>
                <br />
                <span>
                  Yana Xuzor viloyatidur. <br /> Yana Karmina viloyatidur,
                  Samarqand bila Buxoro orasidadur.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Yana Qorakoʻl viloyatidur. Borchadin poyonobroqdur. Buxorodin
                  etti yigʻoch gʻarbi-shimolidur. Yaxshi tumonoti bor. Ul
                  jumladin, Soʻgʻd tumani va Soʻgʻdgʻa payvast tumanlardur.
                  Boshi Yoryayloq, oyogʻi Buxoro, bir yigʻoch yoʻl yoʻqturkim,
                  kent va ma’mura boʻlmogʻoy. Andoq mashhurdurkim, Temurbek
                  degandurkim: mening bir bogʻim borkim, tuli oʻttuz yigʻachtur.
                  Bu tumonotni degandur.
                </span>
                <br />
                <span>
                  Yana Shovdor tumanidur. Shahr va mahallotqa payvasttur. Xeyli
                  yaxshi tumandur. Bir tarafi Samarqand bila Shahrisabz orasidan
                  togʻ (50 a ) voqi’ boʻlubtur, kentlari aksar bu togʻning
                  domanasida tushubtur. Yana bir tarafy Koʻhak daryosidur,
                  xushxavo va pursafo, suyi farovon. Ne’mati arzon xeyli yaxshi
                  tuman tushubtur. Misr va Shom koʻrgan ravandalar
                  munchachogʻliq er nishon bermaydurlar. Agarchi yana tumanlari
                  ham bor, bu mazkur boʻlgʻonlarcha emas. Ushmuncha bila iktifo
                  qilildi.
                </span>
                <br />
                <span>
                  Temurbek Samarqandning hukumatini Jahongir mirzogʻa berib edi.
                  Jahongir mirzoning favtidin soʻng, ulugʻ oʻgʻli Muhammad
                  Sulton Jahongirga berdi. Shohrux mirzo jami’ Movarounnahr
                  viloyatini ulugʻ oʻgʻli Ulugʻbek mirzogʻa berib edi. Ulugʻbek
                  mirzodin oʻgʻli Abdullatif mirzo oldi. Bu besh kunluk oʻtar
                  dunyo uchun andoq donishmand va qari otasini shahid qildi.
                  Ulugʻbek mirzoning favtining tarixi tavre voqi’ boʻlubtur.
                  Nazm:
                </span>
                <br />
                <span>
                  <i>Ulugʻbek bahri ulumu xirad</i>
                </span>
                <br />
                <span>
                  <i>Ki dunyovu dinro az oʻ bud pusht.</i>
                </span>
                <br />
                <span>
                  <i>Zi Abbos shaxdi shahodat chashid,</i>
                </span>
                <br />
                <span>
                  <i>Shudash harfi ta’rix “Abbos kusht”</i>
                </span>
                <br />
                <span>
                  Agarchi oʻzi ham besh-olti oy besh saltanat qilmadi, bu bayt
                  mashxurdurkim:
                </span>
                <br />
                <span>
                  <i>Padarkush podshohiro nashoyad</i>
                </span>
                <br />
                <span>
                  <i>Agar shoyad ba shash mohash napoyad</i>
                </span>
                <br />
                <span>
                  <i>Aning tarixi ham tavre voqi’ boʻlubtur.</i>
                </span>
                <br />
                <span>
                  <i>Abdullatif xisravi Jamshidfar ki bud, (50 b )</i>
                </span>
                <br />
                <span>
                  <i>Dar silki bandagonash Faridunu Zarduhusht</i>
                </span>
                <br />
                <span>
                  <i>Bobo Husayn kusht jum’aash ba tir,</i>
                </span>
                <br />
                <span>
                  <i>Ta’rixash in naviski «Bobo Husain kusht».</i>
                </span>
                <br />
                <span>
                  Abdullatif mirzodin soʻngra Shohrux mirzoning nabirasi Ibrohim
                  Sulton mirzoning oʻgʻli Abdullo mirzokim, Ulugʻbek mirzoning
                  kuyovi edi, taxtka oʻlturdi. Bir yarim yil-ikki yilgʻa
                  yovukgʻa podshohlik qildi. Andin soʻngra Sulton Abusa’id mirzo
                  oldi, oʻz hayotida ulugʻ oʻgʻli Sulton Ahmad mirzogʻa berib
                  edi. Sulton Abusa’id mirzodin soʻng Sulton Ahmad mirzo
                  PODSHOXDIQ qildi. Sulton Abusa’id mirzoning favtidin soʻng
                  Sulton Mahmud mirzo Samarqand taxtigʻa oʻlturdi. Sulton Mahmud
                  mirzodin soʻng Boysunqur mirzoni podshoh qildilar.
                  Tarxonlarning gʻavgʻosida Boysunqur mirzoni tutub, inisi
                  Sulton Ali mirzoni bir-ikki kun oʻlturgʻuzdilar.
                </span>
                <br />
                <span>
                  Yana Boysunqur mirzo-oʻq oldi. Nechukkim, bu tarixda mazkur
                  boʻldi. Boysunqur mirzodin men oldim, mundin soʻnggi vaqoyi’da
                  oʻzga kayfiyatlar ma’lum boʻlgʻusidur. Samarqand taxtigʻa
                  oʻlturgʻoch, Samarqand beklarini burungudek-oʻq rioyat va
                  inoyat kildim. Bizning bila boʻlgʻon beklarni ham faroxoʻri
                  hollarigʻa (51 a ) yarasha tarbiyat va shafqat kildim. Sulton
                  Ahmad Tanbalning borasigʻa rioyat koʻprak voqi’ boʻldi. Ichki
                  beklar chargasida edi,ulugʻ beklar chargasida rioyat qildim.
                  Samarqandnikim, etti oy muhosara qilib tashvishlar bila olduq
                  avval kelganda cherik eliga oʻlja-moʻljadek nima tushib edi.
                  Bir Samarqandtin oʻzga jami’ viloyatlar manga kirib edi, to
                  Sulton Ali mirzogʻa bu kirgan viloyatlarni chopib boʻlmas edi.
                  Muncha talon va toroj tortgʻon viloyatlardin nima olmoq xud
                  nechuk muyassar boʻlgʻay.
                </span>
                <br />
                <span>
                  Cherik elining oʻljasi tugandi. Samarqandni olgʻonda Samarqand
                  andoq harob erdikim, madad va tuxm va taqovigʻa ehtiyoj bor
                  edi. Chi joyi ulkim, kishi andin nima ola olgʻay. Bu
                  jihatlar-din cherik eli koʻp tanqislik torttilar. Biz ham elga
                  nima etkura olmaduk. Uylarini ham sogʻindilar. Birarikkirar
                  qochmoqgʻa yuz koʻydilar. Avval kishikim, qochti, Xonkuli
                  Bayonquli edi, yana Ibrohim Bekchik edi. Moʻgʻullar tamom
                  qochtilar. Soʻngra Sulton Ahmad Tanbal ham qochti. Bu
                  fitnaning taskini uchun Xoja Qozini yibordukkim, Uzun Hasan
                  (51 b ) Xojagʻa oʻzini xeyli muxlis va mu’takid tutar edi.
                  Uzun Hasanning ittifoqi bila qochqonlarning ba’zisigʻa sazo
                  bergaylar, ba’zisini bizning qoshimizgʻa yiborgaylar.
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog__info">
              <p>
                <span>
                  Bu fitnalarni angiz kilgʻuchi, mundin qochib borgʻonlarni
                  yomonliqqa tez qilgʻuchi xud Uzun Hasan haromnamak ekandur.
                  Borchasi Sulton Ahmad Tanbal borgʻon bila zohir va oshkoro
                  yomonliq maqomida boʻldilar. Samarqandni olmoq doiyasi bila
                  necha yilkim bajid cherik tortar eduq Sulton Mahmudxondin
                  agarchi mu’taddun bih madad va koʻmak boʻlmas edi, vale
                  Samarqand fathidin soʻng Andijonni tama’ qilur edi. Bu
                  fursattakim aksar cherik eli va moʻgʻullar tamom qochib
                  Andijon, Axsigʻa bordilar, Uzun Hasan va Tanbal ul
                  viloyatlarni Jahongir mirzogʻa tama’ qildilar. Necha jihatdin
                  mumkin emas erdikim, alargʻa berilgay. Biri ulkim, agarchi
                  xongʻa bu viloyatlarni va’da qililmaydur edi, vale xon tilab
                  edi. Xon tilab turub, Jahongir mirzogʻa berilsa, xon bila
                  tamom yakroʻ boʻlmoq kerak edi. Yana bir bukim mundoq
                  mahaldakim, el qochib ul viloyatqa bordi, taxakkum tariki bila
                  tama’ kiladur, agar burunroq (52 a ) bu soʻz aroda boʻlsa edi,
                  filjumla vajxi bor edi alarning tahakkumini kim tortor
                  boʻlgʻay? Moʻgʻul va Andijon cheriki va ba’zi beklardin
                  ichkilardin ham Andijongʻa borib edilar.
                </span>
                <br />
                <span>
                  Mening bila Samarkdndta bek va bekot, yaxshi va yomon mingga
                  yovukcha kishi qolib edi. Alarning istid’osidek chun muyassar
                  boʻlmadi, qochib borgʻon tavaxxumluq ellarni tamom tilab
                  oʻzlariga qoʻshtilar. Tavahhumluq ellar xud mundoq voqi’ani
                  oʻz qoʻrqunchidin Tengridin tilar edilar. Axsidin Andijon
                  ustiga cherik tortib yomonliq va yogʻiylikni sarih va oshkoro
                  qildilar.
                </span>
                <br />
                <span>
                  Toʻlun Xoja otlikq Borinning mardona va saromad va qazoq
                  yigitlaridin edi. Otam Umarshayx mirzo rioyat qilib edi va
                  xanuz rioyat qilmokta edi. Men xud tarbiyat qilib bek qilib
                  erdim. Ajab mardona va qazoq yigit edi. Rioyat arzandasi edi.
                  Moʻgʻullar ichida rioyat qilgʻon e’timodliq kishimiz Toʻlun
                  Xoja uchun Samarqandtin moʻgʻul ulusi qocha kirishganda Toʻlun
                  Xojani yiborilib erdikim, elga nasihat qilib tavahhumni
                  xotirlaridan chiqargʻoy, to el qoʻrqunchtin sar ba bod
                  bermagʻaylar. Elni (52 b ) xud bu mufattinlar bila
                  haromnamaklar andoq qilib edilarkim, va’da va vaid va nasihat
                  va tahdid hech foyda kilmas edi. Toʻlun Xojaning koʻchi Ikki
                  suv orasida erdikim, bu Ikki suv orasini Rabotak oʻrchini
                  derlar. Uzun Hasan bila Sulton Ahmad Tanbal bir pora ilgʻor
                  Toʻlun Xojaning ustiga yibordilar. Borib gʻofillikta olib
                  kelturub oʻlturdilar. Uzun Hasan va Tanbal Jahongirni olib
                  kelib, Andijonni muhosara qildilar.
                </span>
                <br />
                <span>
                  Cherik otlanurda Andijonda Ali Doʻst tagʻoyini va Axsida Uzun
                  Hasanni qoʻyulub edi. Soʻngra Xoja qozi ham kelib edi.
                  Samarqandtin borgʻon cherik elidin ham xeyli yigitlar bor edi.
                  Xoja Qozi ul qal’adorlikta mening davlatxohligʻim uchun oʻn
                  sekkiz ming qoʻyni qoʻrgʻondagʻi yigitlarga va bizning bila
                  boʻlgʻon yigitlarning koʻchlarigʻa ulashti. Muhosara muddatida
                  mening volidalarimdin va Xoja Qozidin muttasil bu mazmun bila
                  xatlar kelur erdikim, bizlarni mundoq muhosara qilibturlar.
                  Agar kelib faryodimizgʻa etmasangiz ish vubol boʻlgʻusidur.
                  Samarqand Andijon kuchi bila olilib edi. (53 a ) Agar Andijon
                  ilikta boʻlsa, yana Tengri rost keltursa, Samarqandni iliklasa
                  boʻlur. Mutaoqib bu mazmun bila xatlar keldi.
                </span>
                <br />
                <span>
                  Ul fursatta bir martaba bexuzur boʻlub, yaxshi boʻlub erdim.
                  Nakrxat ayyomini oʻbdon rioyat kila olmadim, uzuldum. Bu
                  navbat yomon bexuzur boʻldum. Andokkim, toʻrt kungacha tilim
                  tutuldi, ogʻzimgʻa paxta bila suv tomizurlar edi. Mening bila
                  krlgʻon bek va bekot va yigit-yalang mening tirilmagimdin
                  ma’yus boʻlub, har kim oʻz fikrida boʻldilar. Ushmundoq
                  mahalda Uzun Hasanning navkarinikim, elchilikka kelib,
                  parishon soʻzlar kelturub edi, beklar ra’yda gʻalat qilib meni
                  koʻrsatib ruhsat berdilar. Toʻrtbesh kundin soʻng ul xrldin
                  bir nima yaxshiroq boʻldum. Vale tilimda kalolat qoldi. Necha
                  kundin soʻng oʻz holimgʻa keldi.
                </span>
                <br />
                <span>
                  Chun onalarimdinkim, onam va onamning onasi Esan Davlatbegim
                  boʻlgʻay, yana ustod va pirimdinkim, Xoja Mavlonoyi Qozi
                  boʻlgʻay, bu nav’ xatlar kelib, mundoq extimom bila
                  tilagʻaylar, ne koʻngul bila kishi turgʻay.
                </span>
                <br />
                <span>
                  Rajab oyi, shanba kuni Andijon azimati bila Samarkandtin
                  chiqtuk. Bu navbat Samarqand (53 b) shahrida yuz kun
                  podshohlik qildim. Yana shanba erdikim, Xoʻjandgʻa ettim.
                  Ushul kuni Andijondin bir kishi bu xabarni kelturdikim, etti
                  kun mundin burun, oʻshul shanbakim, biz Samarqandtin
                  chikibturbiz, oʻshul shanba Ali Doʻst tagʻoyi Andijon
                  qal’asini muxoliflargʻa beribtur. Tafsili budurkim, Uzun
                  Hasanning navkarinikim, mening behuzurlugʻumda manga koʻrsatib
                  ijozat berdilar, muxoliflar Andijon qoʻrgʻonini qabagʻonda
                  borib debturkim, podshohning tili tutulub edi, ogʻzigʻa paxta
                  bila suv tomizadurlar dedi. Ushbu ta’rif qilgʻon yoʻsunluq
                  borib, Ali Doʻstning qoshida ont ichib aytibdur. Jakan
                  darvozasida Ali Doʻst edi. Bu soʻzdin bepoy boʻlub,
                  muxoliflarni ilgʻab ahd shart qilib, qal’ani berdi. Zahiradin
                  va urushur kishidin qoʻrgʻonda hech kamlik yoʻq edi. Gʻoyatash
                  ul munofiqi namakharom mardakning nomardligʻi edi. Bu mazkur
                  boʻlgʻon soʻzlarni oʻziga bahonayi rost kildi. Andijonni
                  olgʻondin soʻng mening Xoʻjand kelganimni eshitib, Xoja
                  Mavlonayi Qozini ark darvozasida osib shahid qildilar.
                </span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Blog;
