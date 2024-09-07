/**
 * Copyright © 2024 ZazerConer's
 * Radio Stream Malaysia (Playlist JS)
 * https://github.com/ZazerConer/radio-stream-malaysia/blob/master/stream/playlist.js
 * Licensed under MIT (https://github.com/ZazerConer/radio-stream-malaysia/blob/master/LICENSE)
**/

function radioList(request) {
  const radio = {
    stream: [{
      name: "ERA",
      image: "stream/images/era.jpg",
      url: "https://stream.rcs.revma.com/crec9cmbv4uvv/4_rqzizbwd7wu801/playlist.m3u8",
      description: "Muzik Hit Terkini"
    }, {
      name: "ERA (Sabah)",
      image: "stream/images/era-sabah.png",
      url: "https://stream.rcs.revma.com/4p3nqmmbv4uvv/13_1e1tetlfpfj7o01/playlist.m3u8",
      description: "ERA Muzik Hit Terkini"
    }, {
      name: "ERA (Sarawak)",
      image: "stream/images/era-sarawak.png",
      url: "https://stream.rcs.revma.com/bkqfqkrbv4uvv/2_cwdt35suac7q01/playlist.m3u8",
      description: "ERA Muzik Hit Terkini"
    }, {
      name: "ERA Nusantera",
      image: "stream/images/era-nusantera.png",
      url: "https://stream.rcs.revma.com/sgzunsw711uvv/2_h0tn5k0fi5dk01/playlist.m3u8",
      description: "Lagu Hit Keren Banget!"
    }, {
      name: "ERA Flow",
      image: "stream/images/era-flow.png",
      url: "https://stream.rcs.revma.com/7g70h6v711uvv/6_1cjmq9sk8lezs01/playlist.m3u8",
      description: "Muzik Hip-hop Paling Lit"
    }, {
      name: "ERA Cintan",
      image: "stream/images/era-cintan.png",
      url: "https://stream.rcs.revma.com/0z5mdyv711uvv/7_1lbn2jrupc1dp01/playlist.m3u8",
      description: "Playlist Layan Perasaan Terbaik"
    }, {
      name: "ERA K-Hit",
      image: "stream/images/era-khit.png",
      url: "https://stream.rcs.revma.com/m1hzxaw711uvv/7_1lseh2jnqttx301/playlist.m3u8",
      description: "Muzik Kpop Paling Daebak!"
    }, {
      name: "ERA Throwbaek",
      image: "stream/images/era-throwbaek.png",
      url: "https://stream.rcs.revma.com/uq3kmtw711uvv/5_n32babbf8geq01/playlist.m3u8",
      description: "Throwback Lagu-lagu Thorbaekkk"
    }, {
      name: "ERA Nurock",
      image: "stream/images/era-nurock.png",
      url: "https://stream.rcs.revma.com/4fe3smw711uvv/6_1f0gua35b702d01/playlist.m3u8",
      description: "Rock On dengan muzik rock terbaik"
    }, {
      name: "SINAR",
      image: "stream/images/sinar.jpg",
      url: "https://stream-eu-a.rcs.revma.com/azatk0tbv4uvv/8_1ksmof3jo7vso01/playlist.m3u8",
      description: "Menyinari Hidupmu"
    }, {
      name: "SINAR Rock Kapak",
      image: "stream/images/sinar-rock.png",
      url: "https://stream-eu-a.rcs.revma.com/rz43weh811uvv/38_lwj92qdqradk01/playlist.m3u8",
      description: "Muzik Rock Terpaling Legend"
    }, {
      name: "SINAR Jiwang",
      image: "stream/images/sinar-jiwang.png",
      url: "https://stream-eu-a.rcs.revma.com/5s38zah811uvv/68_3ff8k7870ke801/playlist.m3u8",
      description: "Lagu Cinta Paling Layan"
    }, {
      name: "SINAR Irama 70'",
      image: "stream/images/sinar-irama70.png",
      url: "https://stream-eu-a.rcs.revma.com/bb4ey1g811uvv/49_k1nayd1txhif01/playlist.m3u8",
      description: "Irama Lagu 70'an"
    }, {
      name: "SINAR Irama 80'",
      image: "stream/images/sinar-irama80.png",
      url: "https://stream-eu-a.rcs.revma.com/xdz7f5g811uvv/68_1pxky7ia6kr2h01/playlist.m3u8",
      description: "Irama Lagu 80'an"
    }, {
      name: "SINAR IraMalaysia",
      image: "stream/images/sinar-iramalaysia.png",
      url: "https://stream-eu-a.rcs.revma.com/mm13z8g811uvv/57_m5qwugbgh2d701/playlist.m3u8",
      description: "Muzik Irama Malaysia"
    }, {
      name: "SINAR I-Musik",
      image: "stream/images/sinar-imusik.png",
      url: "https://stream-eu-a.rcs.revma.com/m0mha6g811uvv/3_9fekhebb81qw01/playlist.m3u8",
      description: "Muzik Indonesia Paling Keren"
    }, {
      name: "SINAR Sinema",
      image: "stream/images/sinar-sinema.png",
      url: "https://stream-eu-a.rcs.revma.com/h67e7gh811uvv/67_1h6oefm22wue501/playlist.m3u8",
      description: "Pilihan OST Paling Mantap"
    }, {
      name: "SINAR Pop Yeh Yeh",
      image: "stream/images/sinar-popyehyeh.png",
      url: "https://stream-eu-a.rcs.revma.com/1scz4dh811uvv/49_xtette8x8pni01/playlist.m3u8",
      description: "Lagu-lagu Pop Yeh Yeh"
    }, {
      name: "SURIA FM",
      image: "stream/images/suriafm.jpg",
      url: "https://playerservices.streamtheworld.com/api/livestream-redirect/SURIA_FM.mp3",
      description: "Segalanya Hiburan"
    }, {
      name: "Hot FM",
      image: "stream/images/hotfm.jpg",
      url: "https://mediaprima.rastream.com/mediaprima-hotfm",
      description: "Yang Hangat dan Terbaik"
    }, {
      name: "Kool 101",
      image: "stream/images/kool101.jpg",
      url: "https://mediaprima.rastream.com/mediaprima-koolfm",
      description: "Semasa, Sosial & Muzik Yang Familiar"
    }, {
      name: "Molek FM",
      image: "stream/images/molekfm.jpg",
      url: "https://mediaprima.rastream.com/mediaprima-molekfm",
      description: "Gu Pantai Timur"
    }, {
      name: "Fly FM",
      image: "stream/images/flyfm.jpg",
      url: "https://mediaprima.rastream.com/mediaprima-flyfm",
      description: "Playing Malaysia's Flyest Music"
    }, {
      name: "Eight FM",
      image: "stream/images/eightfm.jpg",
      url: "https://mediaprima.rastream.com/mediaprima-onefm",
      description: "每次突破0.1"
    }, {
      name: "ZAYAN",
      image: "stream/images/zayan.jpg",
      url: "https://stream.rcs.revma.com/7ww2a4tbv4uvv/7_1sxn09jf2b7kp01/playlist.m3u8",
      description: "Destinasi Nasyid Anda"
    }, {
      name: "ZAYAN Nasyeed",
      image: "stream/images/zayan-nasyeed.png",
      url: "https://stream.rcs.revma.com/0q89dxh811uvv/16_abj203u1zora01/playlist.m3u8",
      description: "Koleksi Lagu-lagu Nasyeed popular dan terbaik sepanjang zaman"
    }, {
      name: "ZAYAN Hawa Tunes",
      image: "stream/images/zayan-hawatunes.png",
      url: "https://stream.rcs.revma.com/9e7savh811uvv/15_14bmkb87meku301/playlist.m3u8",
      description: "Pilihan Lagu Muslimah Terindah"
    }, {
      name: "ZAYAN Surah",
      image: "stream/images/zayan-surah.png",
      url: "https://stream.rcs.revma.com/2uuaayh811uvv/2_mjyl8p27stg101/playlist.m3u8",
      description: "Pilihan Surah Al-Quran"
    }, {
      name: "ZAYAN Terjemah",
      image: "stream/images/zayan-terjemah.png",
      url: "https://stream.rcs.revma.com/dramduh811uvv/7_8foywg1bspqh01/playlist.m3u8",
      description: "Terjemahan surah surah ayat suci Al-Quran"
    }, {
      name: "GEGAR",
      image: "stream/images/gegar.jpg",
      url: "https://stream.rcs.revma.com/cn0zcqsbv4uvv/2_1tojr5u31ldjo01/playlist.m3u8",
      description: "Pilihan #1 Pantai Timur"
    }, {
      name: "GEGAR Hindi Power",
      image: "stream/images/gegar-hindipower.png",
      url: "https://stream.rcs.revma.com/ggn4nww711uvv/7_ppasje7g3tam01/playlist.m3u8",
      description: "Muzik Bollywood Paling POWER"
    }, {
      name: "GEGAR Tradisi",
      image: "stream/images/gegar-tradisi.png",
      url: "https://stream.rcs.revma.com/ad2y31w711uvv/16_y2wmz3h0dyq401/playlist.m3u8",
      description: "Alunan Tradisional Sepanjang Zaman"
    }, {
      name: "GEGAR Hoh Btabuh",
      image: "stream/images/gegar-hohbtabuh.png",
      url: "https://stream.rcs.revma.com/5u674yw711uvv/3_b3iuxi1yoeyk01/playlist.m3u8",
      description: "Hiburan Berjiwa Rakyat"
    }, {
      name: "GEGAR Maghi Gelek",
      image: "stream/images/gegar-maghigelek.png",
      url: "https://stream.rcs.revma.com/97gya1w711uvv/7_xhf0d00qx5m201/playlist.m3u8",
      description: "Lagu Dangdut Perancak Hari"
    }, {
      name: "RAKITA 107.9",
      image: "stream/images/rakita.png",
      url: "https://22283.live.streamtheworld.com/RAKITA_SC",
      description: "Muzik Paling Lit"
    }, {
      name: "Best FM",
      image: "stream/images/bestfm.png",
      url: "https://stream.rcs.revma.com/h34x4kgg9hhvv.m4a",
      description: "Terbaik Untuk Harimu"
    }, {
      name: "Manis FM",
      image: "stream/images/manisfm.png",
      url: "https://stream.rcs.revma.com/nzgauqq1v7zuv.m4a",
      description: "Gaya Pantai Timur"
    }, {
      name: "Nasional FM",
      image: "stream/images/nasionalfm.png",
      url: "https://22243.live.streamtheworld.com/NASIONAL_FM.mp3",
      description: "Sentiasa Di Hati"
    }, {
      name: "Radio Klasik FM",
      image: "stream/images/radioklasikfm.png",
      url: "https://28093.live.streamtheworld.com/RADIO_KLASIK.mp3",
      description: "Menggamit Kenangan"
    }, {
      name: "Minnal FM",
      image: "stream/images/minnalfm.png",
      url: "https://28093.live.streamtheworld.com/MINNAL_FMAAC.aac",
      description: "இளமை புதுமை இனிமை"
    }, {
      name: "Asyik FM",
      image: "stream/images/asyikfm.png",
      url: "https://22253.live.streamtheworld.com/ASYIK_FMAAC.aac",
      description: "Moi Num Moi"
    }, {
      name: "Ai FM",
      image: "stream/images/aifm.png",
      url: "https://22253.live.streamtheworld.com/AI_FMAAC_SC",
      description: "有情有爱，自由自在"
    }, {
      name: "TraXX FM",
      image: "stream/images/traxxfm.png",
      url: "https://22273.live.streamtheworld.com/TRAXX_FMAAC.aac",
      description: "Experience the Excitement"
    }, {
      name: "Muzik FM",
      image: "stream/images/muzikfm.jpg",
      url: "https://listen.radioking.com/radio/663445/stream/727324",
      description: "Stesen Muzik Anda"
    }, {
      name: "ASTRO AWANI",
      image: "stream/images/awani.png",
      url: "https://d37ey7ubht2hh2.cloudfront.net/out/v1/2d4a3d04aa404f3f8860da4a3ae25817/index.m3u8",
      description: "Saluran Berita 24-jam"
    }, {
      name: "Radio BBest SAKBA",
      image: "stream/images/radiobbest.jpg",
      url: "https://rlbbest.radioca.st/stream",
      description: "Muda dan Segar!"
    }, {
      name: "RADIOROSAK FM",
      image: "stream/images/radiorosak.jpg",
      url: "https://radiorosak.radioca.st/stream",
      description: "Muzik Tanpa Sempadan"
    }, {
      name: "Gegar Muzik FM",
      image: "stream/images/gegarmuzikfm.jpg",
      url: "https://usa3.fastcast4u.com/proxy/gegarmuzikfm?mp=/1",
      description: "Gegaran Muzik Dunia Anda"
    }, {
      name: "Amboi FM",
      image: "stream/images/amboifm.webp",
      url: "https://stream.zeno.fm/555kr7upam0uv",
      description: "Kepusasan Anda Inspirasi Kami!"
    }, {
      name: "BINTANG fm",
      image: "stream/images/bintangfm.webp",
      url: "https://stream.zeno.fm/1p0tmcfqq68uv",
      description: "Muzik Terbaik Sepanjang Hari"
    }, {
      name: "EXSTAR RADIO FM",
      image: "stream/images/exstarradiofm.webp",
      url: "https://stream.zeno.fm/ds7zx70ayf9uv",
      description: ""
    }, {
      name: "Melayu FM",
      image: "stream/images/melayufm.webp",
      url: "https://stream.zeno.fm/27umg0rw808uv",
      description: "Memainkan lagu Melayu dan Indonesia"
    }, {
      name: "Melayu Klasik",
      image: "stream/images/melayuklasik.webp",
      url: "https://stream.zeno.fm/4s44thh7yf9uv",
      description: "Klasik Terbaik"
    }, {
      name: "NADI FM",
      image: "stream/images/nadifm.webp",
      url: "https://stream.zeno.fm/73lqmdegbwbuv",
      description: "Memainkan lagu-lagu hit yang sentiasa digemari"
    }, {
      name: "Rock-Rock Kapak Lama",
      image: "stream/images/rockkapaklama.webp",
      url: "https://stream.zeno.fm/q6xy0didftcvv",
      description: "Lagu Menggamir Jiwa"
    }, {
      name: "Rock Kapak terbaik sepanjang zaman",
      image: "stream/images/slowrock90.webp",
      url: "https://stream.zeno.fm/hiut6cwfoneuv",
      description: "Dengarkan Rock Kapak selama 24 jam tanpa henti"
    }, {
      name: "Rockapak.FM",
      image: "stream/images/rockapakfm.webp",
      url: "https://stream.zeno.fm/aklrahowzzdtv",
      description: "SEKADAR HIBURAN"
    }, {
      name: "IRadio KuasaDimensi",
      image: "stream/images/kdimensi.webp",
      url: "https://stream.zeno.fm/vfenq4seprhvv",
      description: "Irama lagu-lagu Lama & Hits terkini"
    }, {
      name: "Syok FM",
      image: "stream/images/syokfm.webp",
      url: "https://stream.zeno.fm/993m1qbrtbruv",
      description: "Santai habeh!"
    }, {
      name: "IramaFM",
      image: "stream/images/iramafm.webp",
      url: "https://stream.zeno.fm/969trb91afhvv",
      description: "Irama Lagu Klasik"
    }, {
      name: "CTDK Music",
      image: "stream/images/ctdkmusic.webp",
      url: "https://stream.zeno.fm/p9zhhf6gachvv",
      description: "Dato' Sri Siti Nurhaliza - Voice of Asia"
    }, {
      name: "AqFad Radio",
      image: "stream/images/aqfadradio.webp",
      url: "https://stream.zeno.fm/92t6ctpayf9uv",
      description: "Back To The Beat"
    }, {
      name: "WanzoxMy.FM",
      image: "stream/images/wanzoxmyfm.webp",
      url: "https://stream.zeno.fm/gbq27z62qy8uv",
      description: "Rentak Burnproof Anda!"
    }, {
      name: "Radio MAB",
      image: "stream/images/radiomab.webp",
      url: "https://stream.zeno.fm/qb5q7a3r8k0uv",
      description: "INFORMASI TANPA SEMPADAN"
    }, {
      name: "CHEMOR FM",
      image: "stream/images/chemorfm.webp",
      url: "https://stream.zeno.fm/ph46tt5v7k0uv",
      description: "Muzik tanpa henti 24/7 dengan lagu-lagu kenangan dan menusuk jiwa"
    }, {
      name: "CHEMOR FM 80 90",
      image: "stream/images/chemorfm8090.webp",
      url: "https://stream.zeno.fm/23zbrwsr8k0uv",
      description: "Memutarkan lagu-lagu popular sekitar tahun 80an dan 90an"
    }, {
      name: "CHEMOR FM DANGDUT MANIA",
      image: "stream/images/chemorfmdangdutmania.webp",
      url: "https://stream.zeno.fm/07wm0kur8k0uv",
      description: "Lagu dangdut terbaik sepanjang masa"
    }, {
      name: "XcitedFM",
      image: "stream/images/xcitedfm.webp",
      url: "https://stream.zeno.fm/mnau6k172rhvv",
      description: "Semuanya Xcited"
    }, {
      name: "J-Rock FM",
      image: "stream/images/jrockfm.webp",
      url: "https://stream.zeno.fm/qd4ceh92kb3vv",
      description: "LETS ROCK N' ROLL WITH J-ROCK FM"
    }, {
      name: "Lejen FM",
      image: "stream/images/lejenfm.webp",
      url: "https://stream.zeno.fm/nez002cetv8uv",
      description: "The best Legend songs from yesterday & today"
    }, {
      name: "RE_PLAY TikTok Hits",
      image: "stream/images/replaytiktokhits.webp",
      url: "https://stream.zeno.fm/zhsy7rmbyf9uv",
      description: "Music You May Know"
    }, {
      name: "PuchongRadio",
      image: "stream/images/puchongradio.webp",
      url: "https://stream.zeno.fm/oeu0bm7ljnfvv",
      description: "English station that plays 80s 90s and early 2000s"
    }, {
      name: "BFM 89.9",
      image: "stream/images/bfm-89.9.png",
      url: "https://28103.live.streamtheworld.com/BFMAAC.aac",
      description: "The Business Station"
    }, {
      name: "HITZ",
      image: "stream/images/hitz.jpg",
      url: "https://stream.rcs.revma.com/488kt4sbv4uvv/8_onj1r77zxjbh01/playlist.m3u8",
      description: "Malaysia's #1 Hit Station"
    }, {
      name: "HITZ TikTok",
      image: "stream/images/hitz-tiktok.png",
      url: "https://stream.rcs.revma.com/4f3eyhz711uvv/3_je2t2smnzus701/playlist.m3u8",
      description: "Only the biggest Hits on TikTok"
    }, {
      name: "HITZ Dance",
      image: "stream/images/hitz-dance.png",
      url: "https://stream.rcs.revma.com/h580b8x711uvv/7_15q6rkq4az52q01/playlist.m3u8",
      description: "The place to dance to all your favorite hits"
    }, {
      name: "HITZ Urban",
      image: "stream/images/hitz-urban.png",
      url: "https://stream.rcs.revma.com/yvq1hpz711uvv/4_mvrogqljvllj01/playlist.m3u8",
      description: "The hottest RnB & Hip-Hop tracks of today"
    }, {
      name: "HITZ Throwback",
      image: "stream/images/hitz-throwback.png",
      url: "https://stream.rcs.revma.com/yycxhcz711uvv/14_1fxt3ho995kwx01/playlist.m3u8",
      description: "Rewind time with these hits from 2010-2017"
    }, {
      name: "HITZ Chillest",
      image: "stream/images/hitz-chillest.png",
      url: "https://stream.rcs.revma.com/p4cqmqx711uvv/1_15he1xadqw9ub01/playlist.m3u8",
      description: "Kickback & chill with all these acoustic and unplugged hits"
    }, {
      name: "HITZ KPOP",
      image: "stream/images/hitz-kpop.png",
      url: "https://stream.rcs.revma.com/nxcsfey711uvv/3_ogzw7y19hnyl01/playlist.m3u8",
      description: "The hottest hits from your favorite hallyu stars"
    }, {
      name: "MIX",
      image: "stream/images/mix.jpg",
      url: "https://stream.rcs.revma.com/v5pq3htbv4uvv/6_lrm6wj45jezi01/playlist.m3u8",
      description: "Today's Best Music"
    }, {
      name: "Mix 2000's",
      image: "stream/images/mix-2000.png",
      url: "https://stream.rcs.revma.com/zd54yee811uvv/9_dvv1dab2gr8301/playlist.m3u8",
      description: "The greatest anthems in the 2000’s"
    }, {
      name: "MIX 90's Mix Tape",
      image: "stream/images/mix-tape.png",
      url: "https://stream.rcs.revma.com/k9s688d811uvv/5_1gmsgvq1276sv01/playlist.m3u8",
      description: "From Boybands to grunge, all your 90s essentials in one playlist"
    }, {
      name: "MIX Lovesong",
      image: "stream/images/mix-lovesong.png",
      url: "https://stream.rcs.revma.com/hy2hmne811uvv/7_u7ycpkmtpl7j01/playlist.m3u8",
      description: "From power ballads, romantic R&B and modern hip-hop, this is the ultimate romatic playlist"
    }, {
      name: "LITE",
      image: "stream/images/lite.jpg",
      url: "https://stream.rcs.revma.com/bn4ex8sbv4uvv/16_c6yyid48a2f801/playlist.m3u8",
      description: "All Time Favourites"
    }, {
      name: "LITE your 70's & 80's Favourites",
      image: "stream/images/lite-7080.png",
      url: "https://stream.rcs.revma.com/axkpyf8711uvv/7_u2hb6zt64m001/playlist.m3u8",
      description: "Relax with these classics from the 70s & 80s"
    }, {
      name: "LITE Lovesongs",
      image: "stream/images/lite-lovesongs.png",
      url: "https://stream.rcs.revma.com/08ztvm8711uvv/15_1i35sl0nrxyqq01/playlist.m3u8",
      description: "Your classic love songs"
    }, {
      name: "LITE Acoustic",
      image: "stream/images/lite-acoustic.png",
      url: "https://stream.rcs.revma.com/mdnf6q8711uvv/13_4zimpre347u101/playlist.m3u8",
      description: "Unwind with these stripped down and unplugged relaxing favourites."
    }, {
      name: "Syok Classic Rock",
      image: "stream/images/syok-classicrock.png",
      url: "https://stream.rcs.revma.com/fk3507vbv4uvv/15_k9j19top4jtp01/playlist.m3u8",
      description: "Classic rock favourites all day"
    }, {
      name: "Syok Osai",
      image: "stream/images/syok-osai.png",
      url: "https://stream.rcs.revma.com/60s783vbv4uvv/7_ljx2zy02jmuy01/playlist.m3u8",
      description: "All the best variety of Osai"
    }, {
      name: "Syok India Beat",
      image: "stream/images/syok-indiabeat.png",
      url: "https://stream.rcs.revma.com/hrcdg9ubv4uvv/14_mw5kpyrh13h201/playlist.m3u8",
      description: "All Hindi Hits"
    }, {
      name: "Syok Opus",
      image: "stream/images/syok-opus.png",
      url: "https://stream.rcs.revma.com/aqvp4yvbv4uvv/12_vbdir3vgk3dk01/playlist.m3u8",
      description: "The Best in Classical"
    }, {
      name: "Syok Jazz",
      image: "stream/images/syok-jazz.png",
      url: "https://stream.rcs.revma.com/c718dfvbv4uvv/16_1eoamgnwwsq0h01/playlist.m3u8",
      description: "Jazz for every mood"
    }, {
      name: "Syok Gold",
      image: "stream/images/syok-gold.png",
      url: "https://stream.rcs.revma.com/fxq2n9tbv4uvv/6_d53ys2i41e3x01/playlist.m3u8",
      description: "Mixture of 1950s to 1970s songs"
    }, {
      name: "Syok Kenyalang",
      image: "stream/images/syok-kenyalang.png",
      url: "https://stream.rcs.revma.com/qyg9zmvbv4uvv/4_1piy5x0tsan5t01/playlist.m3u8",
      description: "Memainkan lagu-lagu Sarawak"
    }, {
      name: "Syok Bayu",
      image: "stream/images/syok-bayu.png",
      url: "https://stream.rcs.revma.com/ywpe7mqb54uvv/11_dm0nbovarel401/playlist.m3u8",
      description: "Seleksi lagu-lagu terbaik Sabah"
    }, {
      name: "Syok OST",
      image: "stream/images/syok-ost.png",
      url: "https://stream.rcs.revma.com/h67e7gh811uvv/6_mq5osoxh1e3x02/playlist.m3u8",
      description: "Soundtrack ke hati anda"
    }, {
      name: "Syok Jom Karok",
      image: "stream/images/syok-jomkarok.png",
      url: "https://stream.rcs.revma.com/dmwz90v711uvv/5_98s0a2j9n5ci02/playlist.m3u8",
      description: "Playlist Karaoke Feveret Ramai"
    }, {
      name: "Syok Indie Vibes",
      image: "stream/images/syok-indievibes.png",
      url: "https://stream.rcs.revma.com/qp67k3v711uvv/1_1n78hcj32pdof02/playlist.m3u8",
      description: "Platform Muzik Indie Korang"
    }, {
      name: "Syok Feel Good",
      image: "stream/images/syok-feelgood.png",
      url: "https://stream.rcs.revma.com/vm61pxz711uvv/6_w62hnd1nims001/playlist.m3u8",
      description: "The best feel-good hits from every era"
    }, {
      name: "Syok Fresh Hits",
      image: "stream/images/syok-freshhits.png",
      url: "https://stream.rcs.revma.com/u1kxmkz711uvv/4_1u7q7hlo0asac02/playlist.m3u8",
      description: "Today's hottest and freshest hits!"
    }, {
      name: "Syok Headbangers",
      image: "stream/images/syok-headbangers.png",
      url: "https://stream.rcs.revma.com/e2xkc1e811uvv/2_4d90p8t330s402/playlist.m3u8",
      description: "The ultimate place for rock and metal music!"
    }, {
      name: "Syok Relaxing Music",
      image: "stream/images/syok-relaxingmusic.png",
      url: "https://stream.rcs.revma.com/54g0f0e811uvv/9_1v9pcfzrbap4d01/playlist.m3u8",
      description: "Elevate your meditation experience"
    }, {
      name: "Syok 有嘻哈说唱",
      image: "stream/images/syok-hiphoprap.png",
      url: "https://stream.rcs.revma.com/dqc04fx711uvv/3_14r4vi8y91k1z02/playlist.m3u8",
      description: "给你最SYOK的嘻哈和说唱歌曲 ,SYOK HIPHOP & RAP"
    }, {
      name: "Syok 粤语K歌",
      image: "stream/images/syok-cantonesekaraoke.png",
      url: "https://stream.rcs.revma.com/dd3nf88711uvv/6_dmkqfjg1els702/playlist.m3u8",
      description: "你我最喜欢的K歌，越唱越 High Cantonese Karaoke"
    }, {
      name: "MY",
      image: "stream/images/my.jpg",
      url: "https://stream.rcs.revma.com/hc3unrtbv4uvv/6_op3aem4d8b8p01/playlist.m3u8",
      description: "全马收听率第一的中文电台 MY好玩"
    }, {
      name: "MY - Drop The Beat",
      image: "stream/images/my-upbeat.png",
      url: "https://stream.rcs.revma.com/r9s5n7e811uvv/6_1jlc6gdtddi6q01/playlist.m3u8",
      description: "跟着Dance Beat 跳起来 , MY FM Chi Upbeat Hits"
    }, {
      name: "MY - 最流行",
      image: "stream/images/my-pop.png",
      url: "https://stream.rcs.revma.com/84qe3ve811uvv/1_y6m8t0va76gr01/playlist.m3u8",
      description: "时下最潮最好听的歌单 , MY FM Hit Songs"
    }, {
      name: "MY - 卡拉唱不完",
      image: "stream/images/my-kara.png",
      url: "https://stream.rcs.revma.com/bk3zxpe811uvv/15_kvnf4e7fwy0v01/playlist.m3u8",
      description: "放胆高声唱，歌王歌后就是你！MY FM Singalong Songs"
    }, {
      name: "MY - LOVE UU",
      image: "stream/images/my-love.png",
      url: "https://stream.rcs.revma.com/rp0bsse811uvv/5_d9am1m8s8q0o01/playlist.m3u8",
      description: "情歌绵绵最暖心，爱心满满最甜蜜 , MY FM Love Songs"
    }, {
      name: "MELODY",
      image: "stream/images/melody.jpg",
      url: "https://stream.rcs.revma.com/2u1n6dtbv4uvv/11_mn6dsbmuv0l201/playlist.m3u8",
      description: "强打好歌，强大资讯"
    }, {
      name: "MELODY - 爱的专属区",
      image: "stream/images/melody-love.png",
      url: "https://stream.rcs.revma.com/7xatqr9711uvv/9_9k00zmp5cj7d01/playlist.m3u8",
      description: "欢迎来到LOVE SONGS专属区 , MELODY Chi Classic Love Songs"
    }, {
      name: "MELODY - 影视歌曲专属区",
      image: "stream/images/melody-ost.png",
      url: "https://stream.rcs.revma.com/8axr3x9711uvv/6_1brz2xdahyzij01/playlist.m3u8",
      description: "那些年，我们一起追过的电影电视剧歌曲 MELODY Chi Classic OST"
    }, {
      name: "MELODY - 经典90专属区",
      image: "stream/images/melody-90.png",
      url: "https://stream.rcs.revma.com/hg8dtm9711uvv/1_1xal7xn5ftj2801/playlist.m3u8",
      description: "90年代不可磨灭的音乐记忆 MELODY Chi Classic 90"
    }, {
      name: "MELODY - 经典70 & 80专属区",
      image: "stream/images/melody-7080.png",
      url: "https://stream.rcs.revma.com/3keq8g9711uvv/12_ssg9sptm83wv02/playlist.m3u8",
      description: "汇集70 & 80年代经典好歌的音乐频道 MELODY Chi Classic 70 & 80！"
    }, {
      name: "GOXUAN",
      image: "stream/images/goxuan.png",
      url: "https://stream.rcs.revma.com/xt9nhzsbv4uvv/9_1rky3el95h9qc01/playlist.m3u8",
      description: "GOXUAN Be Your Own Trend"
    }, {
      name: "GOXUAN - 中文最Trending",
      image: "stream/images/goxuan-trending.png",
      url: "https://stream.rcs.revma.com/mzrrzgx711uvv/2_1gadqvzqgzqrn01/playlist.m3u8",
      description: "最Trending的中文歌曲 , GOXUAN Trending C-Pop"
    }, {
      name: "GOXUAN Owh! Kpop!",
      image: "stream/images/goxuan-gokpop.png",
      url: "https://stream.rcs.revma.com/d54qr8w711uvv/3_1hdeyzjhhtylq01/playlist.m3u8",
      description: "全马唯一全年播放KPOP频道 GOXUAN Kpop"
    }, {
      name: "GOXUAN Emo so what?",
      image: "stream/images/goxuan-goemo.png",
      url: "https://stream.rcs.revma.com/xyva2dx711uvv/8_vxyrxgjycymf01/playlist.m3u8",
      description: "GOXUAN陪你度过EMO时刻！(GOXUAN always be with you!)"
    }, {
      name: "998 FM",
      image: "stream/images/998.png",
      url: "https://28093.live.streamtheworld.com/988_FMAAC.aac",
      description: "友聲有色"
    }, {
      name: "RAAGA",
      image: "stream/images/raaga.jpg",
      url: "https://stream.rcs.revma.com/1ut6qwtbv4uvv/10_4a99bfpystc102/playlist.m3u8",
      description: "Aaha… Sirantha Isai!"
    }, {
      name: "RAAGA IsaiMazhai",
      image: "stream/images/raaga-isaimazhai.png",
      url: "https://stream.rcs.revma.com/3gh3gyf811uvv/16_85vvjk6aivkk02/playlist.m3u8",
      description: "இனி என்றும் இசைதான் (Inni endrum Isaithan)...Kollywood’s best from the 2000s!"
    }, {
      name: "RAAGA Puthu Varavu",
      image: "stream/images/raaga-puthuvaravu.png",
      url: "https://stream.rcs.revma.com/8bk6hsf811uvv/1_1ri2uexj5bla702/playlist.m3u8",
      description: "எல்லாமே புதுசு! Ellame Puthusu! (All New Tamil Music)"
    }, {
      name: "RAAGA Evergreen 80's",
     image: "stream/images/raaga-evergreen80.png",
      url: "https://stream.rcs.revma.com/c9wuegf811uvv/13_1brxj6a4zcnk02/playlist.m3u8",
      description: "மனதை வருடும் பாடல்கள் (Manathai Varudum Paadalgal) Bringing back the Classics"
    }, {
      name: "RAAGA 90's Hits",
      image: "stream/images/raaga-90hits.png",
      url: "https://stream.rcs.revma.com/n1f3tpf811uvv/14_mi283vf48cl602/playlist.m3u8",
      description: "இசையின் சூராவளி (Isaiyin Sooravali). Just the way you like it!"
    }, {
      name: "RAAGA Nambe Area",
      image: "stream/images/raaga-nambearea.png",
      url: "https://stream.rcs.revma.com/acrte1f811uvv/9_7irmeytgjqpu02/playlist.m3u8",
      description: "Raaga Nambe Area"
    }, {
      name: "AR Rahman‘s Timeless Hits!",
      image: "stream/images/syok-arrahman.png",
      url: "https://stream.rcs.revma.com/eeugdaz711uvv/10_1p0s4rqww4ues02/playlist.m3u8",
      description: "AR Rahman songs from the 1990s up to the present day"
    }, {
      name: "KL FM",
      image: "stream/images/klfm.png",
      url: "https://28163.live.streamtheworld.com/KL_FMAAC.aac",
      description: "Rentak Interaktif Kota"
    }, {
      name: "Mutiara FM",
      image: "stream/images/mutiarafm.png",
      url: "https://28163.live.streamtheworld.com/MUTIARA_FMAAC.aac",
      description: "Segalanya Untukmu"
    },  {
      name: "Perlis FM",
      image: "stream/images/perlisfm.png",
      url: "https://22283.live.streamtheworld.com/PERLIS_FMAAC.aac",
      description: "Serasi Denganku"
    }, {
      name: "Kedah FM",
      image: "stream/images/kedahfm.png",
      url: "https://22283.live.streamtheworld.com/KEDAH_FMAAC.aac",
      description: "Mesra Harmoni"
    }, {
      name: "Perak FM",
      image: "stream/images/perakfm.png",
      url: "https://28103.live.streamtheworld.com/PERAK_FMAAC.aac",
      description: "Untuk Kome Aje"
    }, {
      name: "Selangor FM",
      image: "stream/images/selangorfm.png",
      url: "https://28103.live.streamtheworld.com/SELANGOR_FMAAC.aac",
      description: "Pilihan Tepat"
    }, {
      name: "Negeri FM",
      image: "stream/images/negerifm.png",
      url: "https://22243.live.streamtheworld.com/NEGERI_FMAAC.aac",
      description: "Ingat Sampai Bila-Bila"
    }, {
      name: "Johor FM",
      image: "stream/images/johorfm.png",
      url: "https://22283.live.streamtheworld.com/JOHOR_FMAAC.aac",
      description: "Permata Selatan"
    }, {
      name: "Melaka FM",
      image: "stream/images/melakafm.png",
      url: "https://28153.live.streamtheworld.com/MELAKA_FMAAC.aac",
      description: "Mempersonakan"
    }, {
      name: "Terengganu FM",
      image: "stream/images/terengganufm.png",
      url: "https://22243.live.streamtheworld.com/TERENGGANU_FMAAC.aac",
      description: "Mesra Ceria"
    }, {
      name: "Kelantan FM",
      image: "stream/images/kelantanfm.png",
      url: "https://25093.live.streamtheworld.com/KELANTAN_FMAAC.aac",
      description: "Penuhi Cita Rasa Anda"
    }, {
      name: "Pahang FM",
      image: "stream/images/pahangfm.png",
      url: "https://28093.live.streamtheworld.com/PAHANG_FMAAC.aac",
      description: "Satu Pilihan"
    }, {
      name: "Sabah FM",
      image: "stream/images/sabahfm.png",
      url: "https://28103.live.streamtheworld.com/SABAH_FMAAC.aac",
      description: "Bagus Bah!"
    }, {
      name: "Sarawak FM",
      image: "stream/images/sarawakfm.png",
      url: "https://22253.live.streamtheworld.com/SARAWAK_FMAAC.aac",
      description: "Sehati Sejiwa"
    }, {
      name: "Langkawi FM",
      image: "stream/images/langkawifm.png",
      url: "https://28163.live.streamtheworld.com/LANGKAWI_FMAAC.aac",
      description: "Ya! Untukmu"
    }, {
      name: "Sabah V FM",
      image: "stream/images/sabahvfm.png",
      url: "https://28103.live.streamtheworld.com/SABAH_VFMAAC.aac",
      description: "V Good"
    }, {
      name: "Keningau FM",
      image: "stream/images/keningaufm.png",
      url: "https://22273.live.streamtheworld.com/KENINGAU_FMAAC.aac",
      description: "Hebat Syoknya!"
    }, {
      name: "Sandakan FM",
      image: "stream/images/sandakanfm.png",
      url: "https://28163.live.streamtheworld.com/SANDAKAN_FMAAC.aac",
      description: "Bersamamu"
    }, {
      name: "Tawau FM",
      image: "stream/images/tawaufm.png",
      url: "https://22253.live.streamtheworld.com/TAWAU_FMAAC.aac",
      description: "Pilihan Anda"
    }, {
      name: "Labuan FM",
      image: "stream/images/labuanfm.png",
      url: "https://22283.live.streamtheworld.com/LABUAN_FMAAC.aac",
      description: "Suara Pesisir Anda"
    }, {
      name: "Wai FM Iban",
      image: "stream/images/waifm.png",
      url: "https://28103.live.streamtheworld.com/WAI_FM_IBANAAC.aac",
      description: "Segulai Sejalai"
    }, {
      name: "Red FM",
      image: "stream/images/redfm.png",
      url: "https://28103.live.streamtheworld.com/RED_FMAAC.aac",
      description: "For Variety"
    }, {
      name: "Limbang FM",
      image: "stream/images/limbangfm.png",
      url: "https://22273.live.streamtheworld.com/LIMBANGAAC.aac",
      description: "Pasti Di Hati"
    }, {
      name: "Miri FM",
      image: "stream/images/mirifm.png",
      url: "https://28163.live.streamtheworld.com/MIRI_FMAAC.aac",
      description: "Mesra Bermaklumat"
    }, {
      name: "Sibu FM",
      image: "stream/images/sibufm.png",
      url: "https://22253.live.streamtheworld.com/SIBU_FMAAC.aac",
      description: "Segalanya Untuk Anda"
    }, {
      name: "Sri Aman FM",
      image: "stream/images/sriamanfm.png",
      url: "https://28103.live.streamtheworld.com/SRIAMAN_FMAAC.aac",
      description: "Inspirasi Berinformasi"
    }, {
      name: "Bintulu FM",
      image: "stream/images/bintulufm.png",
      url: "https://22253.live.streamtheworld.com/BINTULU_FMAAC.aac",
      description: "Ceria Bermaklumat"
    }
  ]}

  if (request !== "") {
    return radio.stream;
  }
}
