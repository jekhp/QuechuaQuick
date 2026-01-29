export type Subtitle = {
  time: number;
  text: {
    es: string;
    en: string;
  };
};

export type Phrase = {
  id: number;
  category: 'Saludos' | 'Comida' | 'Cortesía' | 'General' |'Familia' | 'Colores' |'Numeros'|'Animales';
  emoji: string;
  quechua: string;
  pronunciation: string;
  translation: {
    es: string;
    en: string;
  };
  audioSrc: string;
};

export const phrases: Phrase[] = [
  // --- SALUDOS (existentes) ---
  { id: 1, category: 'Saludos', emoji: '👋', quechua: 'Allillanchu', pronunciation: 'a-lli-llan-chu', translation: { es: '¿Cómo estás?', en: 'How are you?' }, audioSrc: '/audio/allillanchu.mp3' },
  { id: 2, category: 'Saludos', emoji: '😊', quechua: 'Allillanmi', pronunciation: 'a-lli-llan-mi', translation: { es: 'Estoy bien', en: 'I am well' }, audioSrc: '/audio/allillanmi.mp3' },
  { id: 3, category: 'Saludos', emoji: '🙏', quechua: 'Rimaykullayki', pronunciation: 'ri-may-ku-llay-ki', translation: { es: 'Disculpa / Permiso', en: 'Excuse me / Permission' }, audioSrc: '/audio/rimaykullayki.mp3' },
  { id: 5, category: 'Saludos', emoji: '🤝', quechua: 'Tupananchiskama', pronunciation: 'tu-pa-nan-chis-ka-ma', translation: { es: 'Hasta luego', en: 'See you later' }, audioSrc: '/audio/tupananchiskama.mp3' },
  { id: 8, category: 'Saludos', emoji: '🤝', quechua: 'Allin Tuta', pronunciation: 'a-llin tu-ta', translation: { es: 'Buenas Noches', en: 'Good Evening' }, audioSrc: '/audio/allinTuta.mp3' },
  { id: 19, category: 'Saludos', emoji: '❓', quechua: '¿Imaynallan?', pronunciation: 'i-mai-na-llan', translation: { es: '¿Cómo estás?', en: 'How are you?' }, audioSrc: '/audio/imaynallan.mp3' },
  { id: 20, category: 'Saludos', emoji: '☀️', quechua: 'Allin p\'unchay', pronunciation: 'a-llin Pun-chai', translation: { es: 'Buen día', en: 'Good day' }, audioSrc: '/audio/allinPunchay.mp3' },
  { id: 21, category: 'Saludos', emoji: '🤝', quechua: 'Allin Sukha', pronunciation: 'a-llin su-kja', translation: { es: 'Buenas Tardes', en: 'Good afternoons' }, audioSrc: '/audio/allinSukha.mp3' },
  
  // --- COMIDA (existentes) ---
  { id: 6, category: 'Comida', emoji: '🍲', quechua: 'Mijuy', pronunciation: 'mi-jui', translation: { es: 'Comida', en: 'Food' }, audioSrc: '/audio/mikuy.mp3' },
  { id: 7, category: 'Comida', emoji: '💧', quechua: 'Unu', pronunciation: 'u-nu', translation: { es: 'Agua', en: 'Water' }, audioSrc: '/audio/unu.mp3' },
  { id: 9, category: 'Comida', emoji: '💰', quechua: 'Hayk\'an?', pronunciation: 'jai-kan', translation: { es: '¿Cuánto es?', en: 'How much is it?' }, audioSrc: '/audio/haykan.mp3' },

  // --- CORTESÍA (existentes) ---
  { id: 10, category: 'Cortesía', emoji: '😍', quechua: 'Sumaq', pronunciation: 'su-mak', translation: { es: 'Delicioso', en: 'Delicious' }, audioSrc: '/audio/sumak.mp3' },
  { id: 11, category: 'Cortesía', emoji: '💪', quechua: 'Atiq', pronunciation: 'a-tik', translation: { es: 'Valiente / Fuerte', en: 'Brave / Strong' }, audioSrc: '/audio/atiq.mp3' },
  { id: 12, category: 'Cortesía', emoji: '😄', quechua: 'Kusi', pronunciation: 'ku-si', translation: { es: 'Feliz / Alegre', en: 'Happy / Joyful' }, audioSrc: '/audio/kusi.mp3' },
  { id: 13, category: 'Cortesía', emoji: '❤️', quechua: 'Munay', pronunciation: 'mu-nai', translation: { es: 'Hermnosa/ hermoso', en: 'Cute/beautiful' }, audioSrc: '/audio/munay.mp3' },

  // --- GENERAL (existentes) ---
  { id: 14, category: 'General', emoji: '📍', quechua: '¿Maypin?', pronunciation: 'mai-pin', translation: { es: '¿Dónde está?', en: "Where is it?" }, audioSrc: '/audio/maypin.mp3' },
  { id: 15, category: 'General', emoji: '🆘', quechua: 'Yanapaway', pronunciation: 'ya-na-pa-wai', translation: { es: 'Ayúdame', en: 'Help me' }, audioSrc: '/audio/yanapaway.mp3' },
  { id: 16, category: 'General', emoji: '🤔', quechua: 'Manan', pronunciation: 'Ma-nan', translation: { es: 'No', en: "No" }, audioSrc: '/audio/manan.mp3' },
  { id: 17, category: 'General', emoji: '👍', quechua: 'Ari', pronunciation: 'a-Ri', translation: { es: 'Sí', en: 'Yes' }, audioSrc: '/audio/ari.mp3' },
  { id: 18, category: 'General', emoji: '👎', quechua: 'Manan', pronunciation: 'Ma-nan', translation: { es: 'No', en: 'No' }, audioSrc: '/audio/manan.mp3' },
  { id: 30, category: 'General', emoji: '👵', quechua: 'Nanay', pronunciation: 'na-nai', translation: { es: 'Doler', en: 'Pain' }, audioSrc: '/audio/nanay.mp3' },

  // --- FAMILIA (existentes + ampliados) ---
  { id: 22, category: 'Familia', emoji: '👨', quechua: 'Taytay', pronunciation: 'tai-tai', translation: { es: 'Papá', en: 'Father' }, audioSrc: '/audio/taytay.mp3' },
  { id: 23, category: 'Familia', emoji: '👩', quechua: 'Mamay', pronunciation: 'ma-mai', translation: { es: 'Mamá', en: 'Mother' }, audioSrc: '/audio/mamay.mp3' },
  { id: 26, category: 'Familia', emoji: '👦', quechua: 'Churi', pronunciation: 'chu-ri', translation: { es: 'Hijo (dicho por el padre)', en: 'Son (said by father)' }, audioSrc: '/audio/churi.mp3' },
  { id: 27, category: 'Familia', emoji: '👧', quechua: 'Ususi', pronunciation: 'u-su-si', translation: { es: 'Hija (dicho por el padre)', en: 'Daughter (said by father)' }, audioSrc: '/audio/ususi.mp3' },
  { id: 28, category: 'Familia', emoji: '👶', quechua: 'Wawa', pronunciation: 'wa-wa', translation: { es: 'Bebé / Niño/a', en: 'Baby / Child' }, audioSrc: '/audio/wawa.mp3' },
  { id: 29, category: 'Familia', emoji: '👴', quechua: 'Awki', pronunciation: 'au-ki', translation: { es: 'Abuelo', en: 'Grandfather' }, audioSrc: '/audio/awki.mp3' },
  { id: 36, category: 'Familia', emoji: '🧑', quechua: 'Wayqey', pronunciation: 'wai-qei', translation: { es: 'Hermano (entre hombres)', en: 'Brother (man to man)' }, audioSrc: '/audio/wayqey.mp3' },
  { id: 37, category: 'Familia', emoji: '👭', quechua: 'Ñaña', pronunciation: 'ña-ña', translation: { es: 'Hermana (entre mujeres)', en: 'Sister (woman to woman)' }, audioSrc: '/audio/ñañay.mp3' },
  { id: 38, category: 'Familia', emoji: '🧑‍🤝‍🧑', quechua: 'Panay', pronunciation: 'pa-nai', translation: { es: 'Hermana (dicho por el hombre)', en: 'Sister (said by man)' }, audioSrc: '/audio/panay.mp3' },
  { id: 39, category: 'Familia', emoji: '🧑‍🤝‍🧑', quechua: 'Tura', pronunciation: 'tu-ra', translation: { es: 'Hermano (dicho por la mujer)', en: 'Brother (said by woman)' }, audioSrc: '/audio/turay.mp3' },

  // --- COLORES (existentes + ampliados) ---
  { id: 24, category: 'Colores', emoji: '🔴', quechua: 'Puka', pronunciation: 'pu-ka', translation: { es: 'Rojo', en: 'Red' }, audioSrc: '/audio/puka.mp3' },
  { id: 25, category: 'Colores', emoji: '🟡', quechua: 'Q\'ello', pronunciation: 'qe-llo', translation: { es: 'Amarillo', en: 'Yellow' }, audioSrc: '/audio/qello.mp3' },
  { id: 31, category: 'Colores', emoji: '⚫', quechua: 'Yana', pronunciation: 'ya-na', translation: { es: 'Negro', en: 'Black' }, audioSrc: '/audio/yana.mp3' },
  { id: 32, category: 'Colores', emoji: '⚪', quechua: 'Yuraq', pronunciation: 'yu-rak', translation: { es: 'Blanco', en: 'White' }, audioSrc: '/audio/yuraq.mp3' },
  { id: 33, category: 'Colores', emoji: '🔵', quechua: 'Anqas', pronunciation: 'an-kas', translation: { es: 'Azul', en: 'Blue' }, audioSrc: '/audio/anqas.mp3' },
  { id: 34, category: 'Colores', emoji: '🟢', quechua: 'Q\'umir', pronunciation: 'ku-mir', translation: { es: 'Verde', en: 'Green' }, audioSrc: '/audio/qumir.mp3' },
  { id: 35, category: 'Colores', emoji: '🟤', quechua: 'Oq\'e', pronunciation: 'o-qe', translation: { es: 'Marrón / Plomo', en: 'Brown / Grey' }, audioSrc: '/audio/oqhe.mp3' },
  { id: 40, category: 'Colores', emoji: '🟣', quechua: 'Kulli', pronunciation: 'ku-lli', translation: { es: 'Morado', en: 'Purple' }, audioSrc: '/audio/kulli.mp3' },

  // --- NÚMEROS (Nuevos) ---
  { id: 41, category: 'Numeros', emoji: '1️⃣', quechua: 'Huk', pronunciation: 'huk', translation: { es: 'Uno', en: 'One' }, audioSrc: '/audio/huk.mp3' },
  { id: 42, category: 'Numeros', emoji: '2️⃣', quechua: 'Iskay', pronunciation: 'is-kai', translation: { es: 'Dos', en: 'Two' }, audioSrc: '/audio/iskay.mp3' },
  { id: 43, category: 'Numeros', emoji: '3️⃣', quechua: 'Kinsa', pronunciation: 'kin-sa', translation: { es: 'Tres', en: 'Three' }, audioSrc: '/audio/kinsa.mp3' },
  { id: 44, category: 'Numeros', emoji: '4️⃣', quechua: 'Tawa', pronunciation: 'ta-wa', translation: { es: 'Cuatro', en: 'Four' }, audioSrc: '/audio/tawa.mp3' },
  { id: 45, category: 'Numeros', emoji: '5️⃣', quechua: 'Pichqa', pronunciation: 'pich-qa', translation: { es: 'Cinco', en: 'Five' }, audioSrc: '/audio/pichqa.mp3' },
  { id: 46, category: 'Numeros', emoji: '🔟', quechua: 'Chunka', pronunciation: 'chun-ka', translation: { es: 'Diez', en: 'Ten' }, audioSrc: '/audio/chunka.mp3' },

  // --- ANIMALES (Nuevos) ---
  { id: 47, category: 'Animales', emoji: '🐕', quechua: 'Allqo', pronunciation: 'all-qo', translation: { es: 'Perro', en: 'Dog' }, audioSrc: '/audio/allqo.mp3' },
  { id: 48, category: 'Animales', emoji: '🐈', quechua: 'Misi', pronunciation: 'mi-si', translation: { es: 'Gato', en: 'Cat' }, audioSrc: '/audio/michi.mp3' },
  { id: 49, category: 'Animales', emoji: '🐴', quechua: 'Kawallu', pronunciation: 'ka-wa-llu', translation: { es: 'Caballo', en: 'Horse' }, audioSrc: '/audio/kawallu.mp3' },

  // --- CORTESÍA / GENERAL ADICIONAL (Nuevos) ---
  { id: 4, category: 'General', emoji: '❓', quechua: '¿Imataq sutiyki?', pronunciation: 'i-ma-tak su-ti-i-ki', translation: { es: '¿Cuál es tu nombre?', en: 'What is your name?' }, audioSrc: '/audio/imataqsutiyki.mp3' },
  { id: 50, category: 'Cortesía', emoji: '🙏', quechua: 'Sulpayki', pronunciation: 'sul-pai-ki', translation: { es: 'Gracias', en: 'Thank you' }, audioSrc: '/audio/sulpayki.mp3' },
  { id: 51, category: 'Cortesía', emoji: '😅', quechua: 'Ama hinachu kay', pronunciation: 'a-ma hi-na-chu kai', translation: { es: 'Por favor', en: 'Please' }, audioSrc: '/audio/amahinachukay.mp3' },
];

export const phraseCategories = ['Todo', ...Array.from(new Set(phrases.map(p => p.category)))];


export type MusicVideo = {
  id: number;
  youtubeId: string;
  title: string;
  artist: string;
  languages: string;
  startTime?: number;
  endTime?: number;
  subtitles?: Subtitle[];
};

export const musicVideos: MusicVideo[] = [
  { id: 1, youtubeId: 'viPKKHGdwHQ', title: 'Carnaval Despedida', artist: 'Roger Chino', languages: 'Quechua', startTime: 5, subtitles: [
    { time: 48, text: { es: '¿A dónde estás yendo? (bis)', en: 'Where are you going? (repeat)' } },
    { time: 51, text: { es: 'Regresa, hermanita', en: 'Come back, little sister' } },
    { time: 54, text: { es: 'No te vayas (bis)', en: 'Don’t go (repeat)' } },
    { time: 57, text: { es: 'Vamos a bailar todavía', en: 'Let’s keep dancing' } },
    { time: 60, text: { es: '¿A dónde estás yendo? (bis)', en: 'Where are you going? (repeat)' } },
    { time: 63, text: { es: 'Regresa, hermanita', en: 'Come back, little sister' } },
    { time: 66, text: { es: 'No te vayas (bis)', en: 'Don’t go (repeat)' } },
    { time: 69, text: { es: 'Vamos a bailar todavía', en: 'Let’s keep dancing' } },
    { time: 72, text: { es: 'Ven pues, hermanita', en: 'Come along, little sister' } },
    { time: 74, text: { es: 'Ponte frente a mí', en: 'Stand in front of me' } },
    { time: 77, text: { es: 'Este es nuestro traguito', en: 'This is our little drink' } },
    { time: 78, text: { es: 'Vamos a tomar', en: 'Let’s have a drink' } },
    { time: 81, text: { es: 'Baila, soltera', en: 'Dance, single girl' } },
    { time: 83, text: { es: 'Sin avergonzarce', en: 'Without shame' } },
    { time: 86, text: { es: 'En esta hermosa fiesta', en: 'At this beautiful celebration' } },
    { time: 88, text: { es: 'Vamos a divertirnos', en: 'Let’s have fun' } },
    { time: 90, text: { es: '¿Qué queriendo me estás cantando?', en: 'Why are you singing to me like that?' } },
    { time: 94, text: { es: 'Jovencito caneño', en: 'Young man from Canas' } },
    { time: 96, text: { es: '¿Qué diciendo te me estarás riendo?', en: 'Why are you laughing at me like that?' } },
    { time: 100, text: { es: 'Oye, atrevido jovencito', en: 'Hey, you daring young man' } },
    { time: 102, text: { es: '¿Qué queriendo me estás cantando?', en: 'Why are you singing to me like that?' } },
    { time: 106, text: { es: 'Jovencito caneño', en: 'Young man from Canas' } },
    { time: 108, text: { es: '¿Qué diciendo te me estarás riendo?', en: 'Why are you laughing at me like that?' } },
    { time: 112, text: { es: 'Oye, atrevido jovencito', en: 'Hey, you daring young man' } },
    { time: 114, text: { es: 'Tenías tu mujer', en: 'You already had your woman' } },
    { time: 116, text: { es: 'Me había fijado', en: 'I had noticed' } },
    { time: 118, text: { es: 'Conóceme bien', en: 'Get to know me well' } },
    { time: 121, text: { es: 'Quién soy yo', en: 'Who I am' } },
    { time: 123, text: { es: 'Yo soy solterita', en: 'I am a single girl' } },
    { time: 125, text: { es: 'Amor enterita', en: 'With a whole heart for love' } },
    { time: 128, text: { es: 'Muchacha bonita', en: 'Pretty young woman' } },
    { time: 130, text: { es: 'No para cualquiera', en: 'Not for just anyone' } },
    { time: 132, text: { es: '🎶', en: '🎶' } },
    { time: 156, text: { es: 'Cholita bonita, linda cusqueñita', en: 'Pretty cholita, lovely girl from Cusco' } },
    { time: 159, text: { es: 'Mi dulce encanto', en: 'My sweet enchantment' } },
    { time: 161, text: { es: 'Mirando, mirando tu carita', en: 'Looking, looking at your little face' } },
    { time: 165, text: { es: 'Te estoy queriendo', en: 'I am falling for you' } },
    { time: 167, text: { es: 'Cholita bonita, linda caneñita', en: 'Pretty cholita, lovely girl from Canas' } },
    { time: 170, text: { es: 'Mi dulce encanto', en: 'My sweet enchantment' } },
    { time: 172, text: { es: 'Mirando, mirando tu carita', en: 'Looking, looking at your little face' } },
    { time: 176, text: { es: 'Te estoy queriendo', en: 'I am falling for you' } },
    { time: 179, text: { es: 'Diciendo, la besaría', en: 'Saying I would kiss her' } },
    { time: 181, text: { es: 'Te estoy mirando', en: 'I’m looking at you' } },
    { time: 184, text: { es: 'Me la llevaría', en: 'I would take her with me' } },
    { time: 186, text: { es: 'Te estoy dando vuelta', en: 'I am spinning around you' } },
    { time: 188, text: { es: 'Como el cóndor dando vuelta', en: 'Like a condor circling above' } },
    { time: 191, text: { es: 'Te estoy dando vuelta', en: 'I am spinning around you' } },
    { time: 193, text: { es: 'Si no vas a querer', en: 'If you’re not going to love me' } },
    { time: 195, text: { es: 'Te voy a robar', en: 'I’m going to steal you away' } },
    { time: 198, text: { es: 'Me vas a hacer embrujar', en: 'You’re going to put a spell on me' } },
    { time: 199, text: { es: '¿O qué me vas a hacer?', en: 'Or what are you going to do to me?' } },
    { time: 201, text: { es: 'Jovencito caneño', en: 'Young man from Canas' } },
    { time: 203, text: { es: 'Mi corazón te quiere', en: 'My heart wants you' } },
    { time: 205, text: { es: 'Mi cabeza te odia', en: 'My mind hates you' } },
    { time: 207, text: { es: 'Oye, travieso soltero', en: 'Hey, you mischievous bachelor' } },
    { time: 209, text: { es: 'Me vas a hacer embrujar', en: 'You’re going to put a spell on me' } },
    { time: 210, text: { es: '¿O qué me vas a hacer?', en: 'Or what are you going to do to me?' } },
    { time: 212, text: { es: 'Jovencito caneño', en: 'Young man from Canas' } },
    { time: 214, text: { es: 'Mi corazón te quiere', en: 'My heart wants you' } },
    { time: 216, text: { es: 'Mi cabeza te odia', en: 'My mind hates you' } },
    { time: 218, text: { es: 'Oye, travieso soltero', en: 'Hey, you mischievous bachelor' } },
    { time: 221, text: { es: 'Te quiero botar', en: 'I want to push you away' } },
    { time: 223, text: { es: 'Pero no puedo', en: 'But I can’t' } },
    { time: 225, text: { es: 'Me quiero ir', en: 'I want to leave' } },
    { time: 228, text: { es: 'Pero no tengo fuerzas', en: 'But I don’t have the strength' } },
    { time: 230, text: { es: 'Y tú, travieso joven', en: 'And you, mischievous young man' } },
    { time: 232, text: { es: 'Estás a mi lado', en: 'You are by my side' } },
    { time: 235, text: { es: 'Las noches y las mañanas', en: 'Nights and mornings' } },
    { time: 237, text: { es: 'Diciendo: te amo', en: 'Saying: I love you' } },
    { time: 239, text: { es: '🎶', en: '🎶' } },
    { time: 263, text: { es: 'Baila, hermanita', en: 'Dance, little sister' } },
    { time: 265, text: { es: 'Toca, hermanito', en: 'Play, little brother' } },
    { time: 267, text: { es: 'En esta hermosa fiesta', en: 'At this beautiful celebration' } },
    { time: 269, text: { es: 'Vamos a divertirnos', en: 'Let’s have fun' } },
    { time: 272, text: { es: 'Charango mañoso', en: 'Mischievous charango' } },
    { time: 274, text: { es: 'Roba corazones', en: 'Heart stealer' } },
    { time: 277, text: { es: 'Tú vas a tocar', en: 'You are going to play' } },
    { time: 279, text: { es: 'Yo voy a cantar', en: 'I am going to sing' } },
    { time: 281, text: { es: '🎶', en: '🎶' } }
  ] },
  { id: 2, youtubeId: '58NMMld4gsk', title: 'Carnaval Solteritas', artist: 'Yeritza Corazón', languages: 'Quechua/Español',startTime: 5 },
  { id: 3, youtubeId: 'mF25iEGUmNc', title: 'Urpituchata', artist: 'Gualberto Apaza', languages: 'Quechua', startTime: 38},
  { id: 4, youtubeId: 'RoVutuzlJS8', title: 'Ananau', artist: 'Alborada', languages: 'Quechua', startTime: 19},
  { id: 5, youtubeId: 'iaPMyWQz6cQ', title: 'Zisary Lucero', artist: 'Alborada', languages: 'Quechua' },
  { id: 6, youtubeId: 'AMKr90k6HeA', title: 'TusuyKusun', artist: 'Damaris', languages: 'Quechua/Español', startTime: 10 },
  { id: 7, youtubeId: 'y9tUqjRcuQY', title: 'Sikinanay', artist: 'Grupo Ocobamba', languages: 'Quechua/Español', startTime: 15 },
  { id: 8, youtubeId: 'TIesiNvurvM', title: 'Siqracha', artist: 'Afinación Diablo', languages: 'Quechua', startTime: 19 },
  { id: 9, youtubeId: '7VZkR-4ZAVA', title: 'Me tienes loca', artist: 'Grupo Ocobamba', languages: 'Quechua/Español', startTime: 17 },
  { id: 10, youtubeId: '8KvzZpS4E70', title: 'Enfermera', artist: 'Porfirio Ayvar', languages: 'Quechua', startTime: 33 },
  { id: 11, youtubeId: '7dci-GAE550', title: 'Carnaval Chunbivilcano', artist: 'Veronica Ccompi', languages: 'Quechua', startTime: 26},
  { id: 12, youtubeId: '2L_GlRfefWU', title: 'Chaska Ñawi Niñucha', artist: 'K\'ana wawakunas', languages: 'Quechua'},
  { id: 13, youtubeId: 'ziLjYCCo4WM', title: 'Chata Chata', artist: 'Yeritza Corazón', languages: 'Quechua', startTime: 18},
  { id: 14, youtubeId: '0vHusNucTOY', title: 'Blanca Palomita', artist: 'Veronica Ccompi', languages: 'Quechua', startTime: 32},
  { id: 15, youtubeId: 'jdWbtJYpCUM', title: 'Carnaval Cusqueño', artist: 'Veronica Ccompi', languages: 'Quechua',startTime: 20},
  { id: 16, youtubeId: '1ZDmvAy9JEs', title: 'Mueve Que Mueve Cholita', artist: 'Yeritza Corazon', languages: 'Quechua/Español',startTime: 39},
  { id: 17, youtubeId: 'MQ3z-pIwxmQ', title: 'Challwaschallay', artist: 'Apus del Perú', languages: 'Quechua',startTime: 27},
  { id: 18, youtubeId: 'wpIrEmUWL9Q', title: 'Chachacomaschay', artist: 'Rosita de Espinar', languages: 'Quechua',startTime: 40},
  { id: 19, youtubeId: '7a8a0Jzf00M', title: 'Chachacomaschay', artist: 'Ricardina Rayme', languages: 'Quechua',startTime: 30},
  { id: 20, youtubeId: '_JwzS6_V_W0', title: 'Taxichalla', artist: 'Rosita de Espinar', languages: 'Quechua',startTime: 23},
  { id: 21, youtubeId: '-GtToBsC3GE', title: 'Maypirac Tragucha', artist: 'Illary Del Cusco', languages: 'Quechua/Español',startTime: 40},
  { id: 22, youtubeId: 'GcWmgKH8A5Y', title: 'Urcos Plazachapi', artist: 'Condemayta de Acomayo', languages: 'Quechua',startTime: 27},
  { id: 23, youtubeId: 'R3nVncDD8VY', title: 'Eucaliptucha', artist: 'Acomaino Comerciante', languages: 'Quechua',startTime: 30},
  { id: 24, youtubeId: 'fpUeQO151Vw', title: 'Mix Kempor de Cusipata', artist: 'Afinación Diablo', languages: 'Quechua',startTime: 30},
  { id: 25, youtubeId: 'ggnoG5S_VNU', title: 'Cuerpo soltero', artist: 'Condemayta de Acomayo', languages: 'Quechua/Español',startTime: 18},
  { id: 26, youtubeId: 'crJdcHcKbgM', title: 'Kaychu Buena vida', artist: 'Afinación Diablo', languages: 'Quechua',startTime: 18},
  { id: 27, youtubeId: 'MDazdh7FGMw', title: 'Ichucha Mana Mamayoc', artist: 'Siwina de Accha', languages: 'Quechua',startTime: 17},
  { id: 28, youtubeId: 'J4FZ9Tpeuqg', title: 'Cabra Q\'aracha', artist: 'Yeritza Corazón', languages: 'Quechua',startTime: 50},
  { id: 29, youtubeId: 'c6pJ7C9ioOs', title: 'Sisascha', artist: 'Gualberto Apaza', languages: 'Quechua',startTime: 15},
  { id: 30, youtubeId: '9u7pcM7e9D8', title: 'Qhayna Nihuranki', artist: 'Gualberto Apaza', languages: 'Quechua',startTime: 15},
  { id: 31, youtubeId: 'R1HhY5XIeF4', title: 'AY URPICHAY URPI', artist: 'Gualberto Apaza', languages: 'Quechua',startTime: 15},
  { id: 32, youtubeId: 'XfL7NCINiMg', title: 'Carnaval Traicionera', artist: 'Roger Chino', languages: 'Quechua',startTime: 15},
  { id: 33, youtubeId: 'fmx_x2rwMIQ', title: 'SUEGRA MALDITA', artist: 'Gualberto Apaza', languages: 'Quechua/Español',startTime: 20},
  { id: 34, youtubeId: 'SNRif7ujbBM', title: 'MARIACHA', artist: 'Gualberto Apaza', languages: 'Quechua',startTime: 15},
  { id: 35, youtubeId: 'WMNOllvIFnE', title: 'AVIONCHA', artist: 'Gualberto Apaza', languages: 'Quechua',startTime: 20},
  { id: 36, youtubeId: 'hQcIwmtJ1cY', title: 'SIRENITA', artist: 'Gualberto Apaza', languages: 'Quechual',startTime: 11},
  { id: 37, youtubeId: 'd8g6x-SGQVU', title: 'BORRACHO', artist: 'Gualberto Apaza', languages: 'Quechua',startTime: 29},
  { id: 38, youtubeId: 'xWQMXx6nkco', title: 'VERDE VIOLETA', artist: 'Gualberto Apaza', languages: 'Quechua',startTime: 20},
  { id: 39, youtubeId: 'adxbfuFiDb4', title: 'Soltera Warmi', artist: 'Gato Del Arpa', languages: 'Quechua',startTime: 24},
  { id: 40, youtubeId: 'FBbd2Jqgidg', title: 'Chiririnkacha', artist: 'Gato Del Arpa', languages: 'Quechua',startTime: 35},
];
