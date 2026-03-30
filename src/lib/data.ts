export type Subtitle = {
  time: number;
  text: {
    es: string;
    en: string;
    fr: string;
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
    fr: string;
  };
  audioSrc: string;
};

export const phrases: Phrase[] = [
  // --- SALUDOS ---
  { id: 1, category: 'Saludos', emoji: '👋', quechua: 'Allillanchu', pronunciation: 'a-lli-llan-chu', translation: { es: '¿Cómo estás?', en: 'How are you?', fr: 'Comment ça va ?' }, audioSrc: '/audio/allillanchu.mp3' },
  { id: 2, category: 'Saludos', emoji: '😊', quechua: 'Allillanmi', pronunciation: 'a-lli-llan-mi', translation: { es: 'Estoy bien', en: 'I am well', fr: 'Je vais bien' }, audioSrc: '/audio/allillanmi.mp3' },
  { id: 3, category: 'Saludos', emoji: '🙏', quechua: 'Rimaykullayki', pronunciation: 'ri-may-ku-llay-ki', translation: { es: 'Disculpa / Permiso', en: 'Excuse me / Permission', fr: 'Excusez-moi / Permission' }, audioSrc: '/audio/rimaykullayki.mp3' },
  { id: 5, category: 'Saludos', emoji: '🤝', quechua: 'Tupananchiskama', pronunciation: 'tu-pa-nan-chis-ka-ma', translation: { es: 'Hasta luego', en: 'See you later', fr: 'À plus tard' }, audioSrc: '/audio/tupananchiskama.mp3' },
  { id: 8, category: 'Saludos', emoji: '🤝', quechua: 'Allin Tuta', pronunciation: 'a-llin tu-ta', translation: { es: 'Buenas Noches', en: 'Good Evening', fr: 'Bonsoir' }, audioSrc: '/audio/allinTuta.mp3' },
  { id: 19, category: 'Saludos', emoji: '❓', quechua: '¿Imaynallan?', pronunciation: 'i-mai-na-llan', translation: { es: '¿Cómo estás?', en: 'How are you?', fr: 'Comment vas-tu ?' }, audioSrc: '/audio/imaynallan.mp3' },
  { id: 20, category: 'Saludos', emoji: '☀️', quechua: 'Allin p\'unchay', pronunciation: 'a-llin Pun-chai', translation: { es: 'Buen día', en: 'Good day', fr: 'Bonne journée' }, audioSrc: '/audio/allinPunchay.mp3' },
  { id: 21, category: 'Saludos', emoji: '🤝', quechua: 'Allin Sukha', pronunciation: 'a-llin su-kja', translation: { es: 'Buenas Tardes', en: 'Good afternoon', fr: 'Bon après-midi' }, audioSrc: '/audio/allinSukha.mp3' },
  
  // --- COMIDA ---
  { id: 6, category: 'Comida', emoji: '🍲', quechua: 'Mijuy', pronunciation: 'mi-jui', translation: { es: 'Comida', en: 'Food', fr: 'Nourriture' }, audioSrc: '/audio/mikuy.mp3' },
  { id: 7, category: 'Comida', emoji: '💧', quechua: 'Unu', pronunciation: 'u-nu', translation: { es: 'Agua', en: 'Water', fr: 'Eau' }, audioSrc: '/audio/unu.mp3' },
  { id: 9, category: 'Comida', emoji: '💰', quechua: 'Hayk\'an?', pronunciation: 'jai-kan', translation: { es: '¿Cuánto es?', en: 'How much is it?', fr: 'Combien ça coûte ?' }, audioSrc: '/audio/haykan.mp3' },

  // --- CORTESÍA ---
  { id: 10, category: 'Cortesía', emoji: '😍', quechua: 'Sumaq', pronunciation: 'su-mak', translation: { es: 'Delicioso', en: 'Delicious', fr: 'Délicieux' }, audioSrc: '/audio/sumak.mp3' },
  { id: 11, category: 'Cortesía', emoji: '💪', quechua: 'Atiq', pronunciation: 'a-tik', translation: { es: 'Valiente / Fuerte', en: 'Brave / Strong', fr: 'Courageux / Fort' }, audioSrc: '/audio/atiq.mp3' },
  { id: 12, category: 'Cortesía', emoji: '😄', quechua: 'Kusi', pronunciation: 'ku-si', translation: { es: 'Feliz / Alegre', en: 'Happy / Joyful', fr: 'Heureux / Joyeux' }, audioSrc: '/audio/kusi.mp3' },
  { id: 13, category: 'Cortesía', emoji: '❤️', quechua: 'Munay', pronunciation: 'mu-nai', translation: { es: 'Hermosa/ hermoso', en: 'Cute/beautiful', fr: 'Beau / Belle' }, audioSrc: '/audio/munay.mp3' },

  // --- GENERAL ---
  { id: 14, category: 'General', emoji: '📍', quechua: '¿Maypin?', pronunciation: 'mai-pin', translation: { es: '¿Dónde está?', en: "Where is it?", fr: 'Où est-ce ?' }, audioSrc: '/audio/maypin.mp3' },
  { id: 15, category: 'General', emoji: '🆘', quechua: 'Yanapaway', pronunciation: 'ya-na-pa-wai', translation: { es: 'Ayúdame', en: 'Help me', fr: 'Aidez-moi' }, audioSrc: '/audio/yanapaway.mp3' },
  { id: 16, category: 'General', emoji: '🤔', quechua: 'Manan', pronunciation: 'Ma-nan', translation: { es: 'No', en: "No", fr: 'Non' }, audioSrc: '/audio/manan.mp3' },
  { id: 17, category: 'General', emoji: '👍', quechua: 'Ari', pronunciation: 'a-Ri', translation: { es: 'Sí', en: 'Yes', fr: 'Oui' }, audioSrc: '/audio/ari.mp3' },
  { id: 18, category: 'General', emoji: '👎', quechua: 'Manan', pronunciation: 'Ma-nan', translation: { es: 'No', en: 'No', fr: 'Non' }, audioSrc: '/audio/manan.mp3' },
  { id: 30, category: 'General', emoji: '👵', quechua: 'Nanay', pronunciation: 'na-nai', translation: { es: 'Doler', en: 'Pain', fr: 'Douleur' }, audioSrc: '/audio/nanay.mp3' },

  // --- FAMILIA ---
  { id: 22, category: 'Familia', emoji: '👨', quechua: 'Taytay', pronunciation: 'tai-tai', translation: { es: 'Papá', en: 'Father', fr: 'Père' }, audioSrc: '/audio/taytay.mp3' },
  { id: 23, category: 'Familia', emoji: '👩', quechua: 'Mamay', pronunciation: 'ma-mai', translation: { es: 'Mamá', en: 'Mother', fr: 'Mère' }, audioSrc: '/audio/mamay.mp3' },
  { id: 26, category: 'Familia', emoji: '👦', quechua: 'Churi', pronunciation: 'chu-ri', translation: { es: 'Hijo (por el padre)', en: 'Son (by father)', fr: 'Fils (par le père)' }, audioSrc: '/audio/churi.mp3' },
  { id: 27, category: 'Familia', emoji: '👧', quechua: 'Ususi', pronunciation: 'u-su-si', translation: { es: 'Hija (por el padre)', en: 'Daughter (by father)', fr: 'Fille (par le père)' }, audioSrc: '/audio/ususi.mp3' },
  { id: 28, category: 'Familia', emoji: '👶', quechua: 'Wawa', pronunciation: 'wa-wa', translation: { es: 'Bebé / Niño/a', en: 'Baby / Child', fr: 'Bébé / Enfant' }, audioSrc: '/audio/wawa.mp3' },
  { id: 29, category: 'Familia', emoji: '👴', quechua: 'Awki', pronunciation: 'au-ki', translation: { es: 'Abuelo', en: 'Grandfather', fr: 'Grand-père' }, audioSrc: '/audio/awki.mp3' },
  { id: 36, category: 'Familia', emoji: '🧑', quechua: 'Wayqey', pronunciation: 'wai-qei', translation: { es: 'Hermano (entre hombres)', en: 'Brother (man to man)', fr: 'Frère (entre hommes)' }, audioSrc: '/audio/wayqey.mp3' },
  { id: 37, category: 'Familia', emoji: '👭', quechua: 'Ñaña', pronunciation: 'ña-ña', translation: { es: 'Hermana (entre mujeres)', en: 'Sister (woman to woman)', fr: 'Sœur (entre femmes)' }, audioSrc: '/audio/ñañay.mp3' },
  { id: 38, category: 'Familia', emoji: '🧑‍🤝‍🧑', quechua: 'Panay', pronunciation: 'pa-nai', translation: { es: 'Hermana (por el hombre)', en: 'Sister (by man)', fr: 'Sœur (par l\'homme)' }, audioSrc: '/audio/panay.mp3' },
  { id: 39, category: 'Familia', emoji: '🧑‍🤝‍🧑', quechua: 'Tura', pronunciation: 'tu-ra', translation: { es: 'Hermano (por la mujer)', en: 'Brother (by woman)', fr: 'Frère (par la femme)' }, audioSrc: '/audio/turay.mp3' },

  // --- COLORES ---
  { id: 24, category: 'Colores', emoji: '🔴', quechua: 'Puka', pronunciation: 'pu-ka', translation: { es: 'Rojo', en: 'Red', fr: 'Rouge' }, audioSrc: '/audio/puka.mp3' },
  { id: 25, category: 'Colores', emoji: '🟡', quechua: 'Q\'ello', pronunciation: 'qe-llo', translation: { es: 'Amarillo', en: 'Yellow', fr: 'Jaune' }, audioSrc: '/audio/qello.mp3' },
  { id: 31, category: 'Colores', emoji: '⚫', quechua: 'Yana', pronunciation: 'ya-na', translation: { es: 'Negro', en: 'Black', fr: 'Noir' }, audioSrc: '/audio/yana.mp3' },
  { id: 32, category: 'Colores', emoji: '⚪', quechua: 'Yuraq', pronunciation: 'yu-rak', translation: { es: 'Blanco', en: 'White', fr: 'Blanc' }, audioSrc: '/audio/yuraq.mp3' },
  { id: 33, category: 'Colores', emoji: '🔵', quechua: 'Anqas', pronunciation: 'an-kas', translation: { es: 'Azul', en: 'Blue', fr: 'Bleu' }, audioSrc: '/audio/anqas.mp3' },
  { id: 34, category: 'Colores', emoji: '🟢', quechua: 'Q\'umir', pronunciation: 'ku-mir', translation: { es: 'Verde', en: 'Green', fr: 'Vert' }, audioSrc: '/audio/qumir.mp3' },
  { id: 35, category: 'Colores', emoji: '🟤', quechua: 'Oq\'e', pronunciation: 'o-qe', translation: { es: 'Marrón / Plomo', en: 'Brown / Grey', fr: 'Marron / Gris' }, audioSrc: '/audio/oqhe.mp3' },
  { id: 40, category: 'Colores', emoji: '🟣', quechua: 'Kulli', pronunciation: 'ku-lli', translation: { es: 'Morado', en: 'Purple', fr: 'Violet' }, audioSrc: '/audio/kulli.mp3' },

  // --- NÚMEROS ---
  { id: 41, category: 'Numeros', emoji: '1️⃣', quechua: 'Huk', pronunciation: 'huk', translation: { es: 'Uno', en: 'One', fr: 'Un' }, audioSrc: '/audio/huk.mp3' },
  { id: 42, category: 'Numeros', emoji: '2️⃣', quechua: 'Iskay', pronunciation: 'is-kai', translation: { es: 'Dos', en: 'Two', fr: 'Deux' }, audioSrc: '/audio/iskay.mp3' },
  { id: 43, category: 'Numeros', emoji: '3️⃣', quechua: 'Kinsa', pronunciation: 'kin-sa', translation: { es: 'Tres', en: 'Three', fr: 'Trois' }, audioSrc: '/audio/kinsa.mp3' },
  { id: 44, category: 'Numeros', emoji: '4️⃣', quechua: 'Tawa', pronunciation: 'ta-wa', translation: { es: 'Cuatro', en: 'Four', fr: 'Quatre' }, audioSrc: '/audio/tawa.mp3' },
  { id: 45, category: 'Numeros', emoji: '5️⃣', quechua: 'Pichqa', pronunciation: 'pich-qa', translation: { es: 'Cinco', en: 'Five', fr: 'Cinq' }, audioSrc: '/audio/pichqa.mp3' },
  { id: 46, category: 'Numeros', emoji: '🔟', quechua: 'Chunka', pronunciation: 'chun-ka', translation: { es: 'Diez', en: 'Ten', fr: 'Dix' }, audioSrc: '/audio/chunka.mp3' },

  // --- ANIMALES ---
  { id: 47, category: 'Animales', emoji: '🐕', quechua: 'Allqo', pronunciation: 'all-qo', translation: { es: 'Perro', en: 'Dog', fr: 'Chien' }, audioSrc: '/audio/allqo.mp3' },
  { id: 48, category: 'Animales', emoji: '🐈', quechua: 'Misi', pronunciation: 'mi-si', translation: { es: 'Gato', en: 'Cat', fr: 'Chat' }, audioSrc: '/audio/michi.mp3' },
  { id: 49, category: 'Animales', emoji: '🐴', quechua: 'Kawallu', pronunciation: 'ka-wa-llu', translation: { es: 'Caballo', en: 'Horse', fr: 'Cheval' }, audioSrc: '/audio/kawallu.mp3' },

  // --- CORTESÍA / GENERAL ADICIONAL ---
  { id: 4, category: 'General', emoji: '❓', quechua: '¿Imataq sutiyki?', pronunciation: 'i-ma-tak su-ti-i-ki', translation: { es: '¿Cuál es tu nombre?', en: 'What is your name?', fr: 'Quel est ton nom ?' }, audioSrc: '/audio/imataqsutiyki.mp3' },
  { id: 50, category: 'Cortesía', emoji: '🙏', quechua: 'Sulpayki', pronunciation: 'sul-pai-ki', translation: { es: 'Gracias', en: 'Thank you', fr: 'Merci' }, audioSrc: '/audio/sulpayki.mp3' },
  { id: 51, category: 'Cortesía', emoji: '😅', quechua: 'Ama hinachu kay', pronunciation: 'a-ma hi-na-chu kai', translation: { es: 'Por favor', en: 'Please', fr: 'S\'il vous plaît' }, audioSrc: '/audio/amahinachukay.mp3' },
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
  { id: 1, youtubeId: 'viPKKHGdwHQ', title: 'Carnaval Despedida (Sub)', artist: 'Roger Chino', languages: 'Quechua', startTime: 5, subtitles: [
    { time: 48, text: { es: '¿A dónde estás yendo? (bis)', en: 'Where are you going? (repeat)', fr: 'Où vas-tu ? (bis)' } },
    { time: 51, text: { es: 'Regresa, hermanita', en: 'Come back, little sister', fr: 'Reviens, petite sœur' } },
    { time: 54, text: { es: 'No te vayas (bis)', en: 'Don’t go (repeat)', fr: 'Ne pars pas (bis)' } },
    { time: 57, text: { es: 'Vamos a bailar todavía', en: 'Let’s keep dancing', fr: 'Nous allons encore danser' } },
    { time: 60, text: { es: '¿A dónde estás yendo? (bis)', en: 'Where are you going? (repeat)', fr: 'Où vas-tu ? (bis)' } },
    { time: 63, text: { es: 'Regresa, hermanita', en: 'Come back, little sister', fr: 'Reviens, petite sœur' } },
    { time: 66, text: { es: 'No te vayas (bis)', en: 'Don’t go (repeat)', fr: 'Ne pars pas (bis)' } },
    { time: 69, text: { es: 'Vamos a bailar todavía', en: 'Let’s keep dancing', fr: 'Nous allons encore danser' } },
    { time: 72, text: { es: 'Ven pues, hermanita', en: 'Come along, little sister', fr: 'Viens donc, petite sœur' } },
    { time: 74, text: { es: 'Ponte frente a mí', en: 'Stand in front of me', fr: 'Mets-toi devant moi' } },
    { time: 77, text: { es: 'Este es nuestro traguito', en: 'This is our little drink', fr: 'C\'est notre petit verre' } },
    { time: 78, text: { es: 'Vamos a tomar', en: 'Let’s have a drink', fr: 'Allons boire' } },
    { time: 81, text: { es: 'Baila, soltera', en: 'Dance, single girl', fr: 'Danse, célibataire' } },
    { time: 83, text: { es: 'Sin avergonzarce', en: 'Without shame', fr: 'Sans honte' } },
    { time: 86, text: { es: 'En esta hermosa fiesta', en: 'At this beautiful celebration', fr: 'Dans cette belle fête' } },
    { time: 88, text: { es: 'Vamos a bailar', en: 'Let’s dance', fr: 'Allons danser' } },
    { time: 90, text: { es: '¿Qué queriendo me estás cantando?', en: 'Why are you singing to me like that?', fr: 'Que veux-tu en me chantant ainsi ?' } },
    { time: 94, text: { es: 'Jovencito caneño', en: 'Young man from Canas', fr: 'Jeune homme de Canas' } },
    { time: 96, text: { es: '¿Qué diciendo te me estarás riendo?', en: 'Why are you laughing at me like that?', fr: 'Que dis-tu en te moquant de moi ?' } },
    { time: 100, text: { es: 'Oye, atrevido jovencito', en: 'Hey, you daring young man', fr: 'Hé, jeune homme audacieux' } },
    { time: 102, text: { es: '¿Qué queriendo me estás cantando?', en: 'Why are you singing to me like that?', fr: 'Que veux-tu en me chantant ainsi ?' } },
    { time: 106, text: { es: 'Jovencito caneño', en: 'Young man from Canas', fr: 'Jeune homme de Canas' } },
    { time: 108, text: { es: '¿Qué diciendo te me estarás riendo?', en: 'Why are you laughing at me like that?', fr: 'Que dis-tu en te moquant de moi ?' } },
    { time: 112, text: { es: 'Oye, atrevido jovencito', en: 'Hey, you daring young man', fr: 'Hé, jeune homme audacieux' } },
    { time: 114, text: { es: 'Tenías tu mujer', en: 'You already had your woman', fr: 'Tu avais ta femme' } },
    { time: 116, text: { es: 'Me había fijado', en: 'I had noticed', fr: 'Je l\'avais remarqué' } },
    { time: 118, text: { es: 'Conóceme bien', en: 'Get to know me well', fr: 'Connais-moi bien' } },
    { time: 121, text: { es: 'Quién soy yo', en: 'Who I am', fr: 'Qui je suis' } },
    { time: 123, text: { es: 'Yo soy solterita', en: 'I am a single girl', fr: 'Je suis célibataire' } },
    { time: 125, text: { es: 'Amor enterita', en: 'With a whole heart for love', fr: 'Amour tout entière' } },
    { time: 128, text: { es: 'Muchacha bonita', en: 'Pretty young woman', fr: 'Jolie fille' } },
    { time: 130, text: { es: 'No para cualquiera', en: 'Not for just anyone', fr: 'Pas pour n\'importe qui' } },
    { time: 132, text: { es: '🎶', en: '🎶', fr: '🎶' } },
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
  { id: 11, youtubeId: '7dci-GAE550', title: 'Carnaval Chunbivilcano', artist: 'Veronica Ccompi', languages: 'Quechua', startTime: 26, subtitles: [
    { time: 47, text: { es: 'Vamos a encontrarnos, vamos a reunirnos', en: 'Let’s meet, let’s gather', fr: 'Allons nous rencontrer, allons nous réunir' }},
    { time: 49, text: { es: 'Solterito de Chumbivilcas', en: 'single man from Chumbivilcas', fr: 'Célibataire de Chumbivilcas'}},
    { time: 51, text: { es: 'Vamos a encontrarnos, vamos a reunirnos', en: 'Let’s meet, let’s gather', fr: 'Allons nous rencontrer, allons nous réunir' }},
    { time: 54, text: { es: 'Solterito de poncho rojo', en: 'Single man in a red poncho', fr: 'Célibataire au poncho rouge'}},
    { time: 57, text: { es: 'Aqui aqui ya estoy viniendo', en: 'I\'m coming here.', fr: 'Ici, ici, je viens déjà'}},
    { time: 59, text: { es: 'Cargando el carnaval', en: 'Loading the carnival', fr: 'Chargement du carnaval'}},
    { time: 61, text: { es: 'Aqui aqui ya estoy viniendo', en: 'I\'m coming here.', fr: 'Ici, ici, je viens déjà'}},
    { time: 64, text: { es: 'Jalando el carnaval', en: 'Pulling the carnival', fr: 'Tirant le carnaval'}},
    { time: 66, text: { es: '🎶', en: '🎶', fr: '🎶'}},
  ]},
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
  { id: 28, youtubeId: 'J4FZ9Tpeuqg', title: 'Cabra Q\'aracha', artist: 'Gualberto Apaza', languages: 'Quechua',startTime: 50, subtitles: [
    {time: 52, text: { es: 'Por ser pobre, por ser humilde', en: 'Because I am poor, because I am humble', fr: 'Parce que je suis pauvre, parce que je suis humble'}},
    {time: 55, text: { es: 'Te hice dormir en el cuero de la cabra', en: 'I made you sleep on the goat skin', fr: 'Je t\'ai fait dormir sur la peau de chèvre'}},
  ]},
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
  { id: 41, youtubeId: 'PPjg86WxD4s', title: 'Cerveza tomasqay', artist: 'Ccasita Record', languages: 'Quechua',startTime: 30},
  { id: 42, youtubeId: 'TwWlkbM5nPQ', title: 'Chiwillituy', artist: 'Ayrampito', languages: 'Quechua',startTime: 18},
];
