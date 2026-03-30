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
    { time: 102, text: { es: '¿Qué queriendo me estás cantando?', en: 'Why are you singing to me like that?', fr: 'Que veux-tu en me chantant así ?' } },
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
    { time: 156, text: { es: 'Cholita bonita, linda cusqueñita', en: 'Pretty cholita, lovely girl from Cusco', fr: 'Jolie cholita, belle fille de Cusco' } },
    { time: 159, text: { es: 'Mi dulce encanto', en: 'My sweet enchantment', fr: 'Mon doux enchantement' } },
    { time: 161, text: { es: 'Mirando, mirando tu carita', en: 'Looking, looking at your little face', fr: 'Regardant, regardant ton petit visage' } },
    { time: 165, text: { es: 'Te estoy queriendo', en: 'I am falling for you', fr: 'Je tombe amoureux de toi' } },
    { time: 167, text: { es: 'Cholita bonita, linda caneñita', en: 'Pretty cholita, lovely girl from Canas', fr: 'Jolie cholita, belle fille de Canas' } },
    { time: 170, text: { es: 'Mi dulce encanto', en: 'My sweet enchantment', fr: 'Mon doux enchantement' } },
    { time: 172, text: { es: 'Mirando, mirando tu carita', en: 'Looking, looking at your little face', fr: 'Regardant, regardant ton petit visage' } },
    { time: 176, text: { es: 'Te estoy queriendo', en: 'I am falling for you', fr: 'Je tombe amoureux de toi' } },
    { time: 179, text: { es: 'Diciendo, la besaría', en: 'Saying I would kiss her', fr: 'Disant que je l\'embrasserais' } },
    { time: 181, text: { es: 'Te estoy mirando', en: 'I’m looking at you', fr: 'Je te regarde' } },
    { time: 184, text: { es: 'Me la llevaría', en: 'I would take her with me', fr: 'Je l\'emmènerais avec moi' } },
    { time: 186, text: { es: 'Te estoy dando vuelta', en: 'I am spinning around you', fr: 'Je tourne autour de toi' } },
    { time: 188, text: { es: 'Como el cóndor dando vuelta', en: 'Like a condor circling above', fr: 'Comme le condor qui tourne' } },
    { time: 191, text: { es: 'Te estoy dando vuelta', en: 'I am spinning around you', fr: 'Je tourne autour de toi' } },
    { time: 193, text: { es: 'Si no vas a querer', en: 'If you’re not going to love me', fr: 'Si tu ne vas pas m\'aimer' } },
    { time: 195, text: { es: 'Te voy a robar', en: 'I’m going to steal you away', fr: 'Je vais te voler' } },
    { time: 198, text: { es: 'Me vas a hacer embrujar', en: 'You’re going to put a spell on me', fr: 'Tu vas m\'ensorceler' } },
    { time: 199, text: { es: '¿O qué me vas a hacer?', en: 'Or what are you going to do to me?', fr: 'Ou que vas-tu me faire ?' } },
    { time: 201, text: { es: 'Jovencito caneño', en: 'Young man from Canas', fr: 'Jeune homme de Canas' } },
    { time: 203, text: { es: 'Mi corazón te quiere', en: 'My heart wants you', fr: 'Mon cœur te veut' } },
    { time: 205, text: { es: 'Mi cabeza te odia', en: 'My mind hates you', fr: 'Mon esprit te déteste' } },
    { time: 207, text: { es: 'Oye, travieso soltero', en: 'Hey, you mischievous bachelor', fr: 'Hé, toi célibataire espiègle' } },
    { time: 209, text: { es: 'Me vas a hacer embrujar', en: 'You’re going to put a spell on me', fr: 'Tu vas m\'ensorceler' } },
    { time: 210, text: { es: '¿O qué me vas a hacer?', en: 'Or what are you going to do to me?', fr: 'Ou que vas-tu me faire ?' } },
    { time: 212, text: { es: 'Jovencito caneño', en: 'Young man from Canas', fr: 'Jeune homme de Canas' } },
    { time: 214, text: { es: 'Mi corazón te quiere', en: 'My heart wants you', fr: 'Mon cœur te veut' } },
    { time: 216, text: { es: 'Mi cabeza te odia', en: 'My mind hates you', fr: 'Mon esprit te déteste' } },
    { time: 218, text: { es: 'Oye, travieso soltero', en: 'Hey, you mischievous bachelor', fr: 'Hé, toi célibataire espiègle' } },
    { time: 221, text: { es: 'Te quiero botar', en: 'I want to push you away', fr: 'Je veux te repousser' } },
    { time: 223, text: { es: 'Pero no puedo', en: 'But I can’t', fr: 'Mais je ne peux pas' } },
    { time: 225, text: { es: 'Me quiero ir', en: 'I want to leave', fr: 'Je veux partir' } },
    { time: 228, text: { es: 'Pero no tengo fuerzas', en: 'But I don’t have the strength', fr: 'Mais je n\'ai pas la force' } },
    { time: 230, text: { es: 'Y tú, travieso joven', en: 'And you, mischievous young man', fr: 'Et toi, jeune homme espiègle' } },
    { time: 232, text: { es: 'Estás a mi lado', en: 'You are by my side', fr: 'Tu es à mes côtés' } },
    { time: 235, text: { es: 'Las noches y las mañanas', en: 'Nights and mornings', fr: 'Les nuits et les matins' } },
    { time: 237, text: { es: 'Diciendo: te amo', en: 'Saying: I love you', fr: 'Disant : je t\'aime' } },
    { time: 239, text: { es: '🎶', en: '🎶', fr: '🎶' } },
    { time: 263, text: { es: 'Baila, hermanita', en: 'Dance, little sister', fr: 'Danse, petite sœur' } },
    { time: 265, text: { es: 'Toca, hermanito', en: 'Play, little brother', fr: 'Joue, petit frère' } },
    { time: 267, text: { es: 'En esta hermosa fiesta', en: 'At this beautiful celebration', fr: 'Dans cette belle fête' } },
    { time: 269, text: { es: 'Vamos a bailar', en: 'Let’s dance', fr: 'Allons danser' } },
    { time: 272, text: { es: 'Charango mañoso', en: 'Mischievous charango', fr: 'Charango espiègle' } },
    { time: 274, text: { es: 'Roba corazones', en: 'Heart stealer', fr: 'Voleur de cœurs' } },
    { time: 277, text: { es: 'Tú vas a tocar', en: 'You are going to play', fr: 'Tu vas jouer' } },
    { time: 279, text: { es: 'Yo voy a cantar', en: 'I am going to sing', fr: 'Je vais chanter' } },
    { time: 281, text: { es: '🎶', en: '🎶', fr: '🎶' } }
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
    { time: 68, text: { es: 'Yo estoy viniendo', en: 'I\'m coming', fr: 'Je viens'}},
    { time: 70, text: { es: 'señorita vivaz y solita', en: 'lively and single lady', fr: 'demoiselle vive et seule'}},
    { time: 73, text: { es: 'Yo estoy viniendo', en: 'I\'m coming', fr: 'Je viens'}},
    {time: 75, text: { es: 'joven y solita', en: 'young and alone', fr: 'jeune et seule'}},
    {time: 77, text: { es: 'En el pueblo de Chumbivilcas', en: 'In the town of Chumbivilcas', fr: 'Dans la ville de Chumbivilcas'}},
    {time: 80, text: { es: 'Una vieja como zorrillo, sombra sucia', en: 'An old woman like a skunk, dirty shadow', fr: 'Une vieille comme una mouffette, ombre sale'}},
    {time: 82, text: { es: 'En el pueblo de Chumbivilcas', en: 'In the town of Chumbivilcas', fr: 'Dans la ville de Chumbivilcas'}},
    {time: 84, text: { es: 'Un viejo como zorro, sombra sucia', en: 'An old man like a fox, dirty shadow', fr: 'Un vieux comme un renard, ombre sale'}},
    {time: 87, text: { es: '🎶', en: '🎶', fr: '🎶'}},
    {time: 110, text: { es: 'Yo soy solterita', en: 'I am single', fr: 'Je suis célibataire'}},
    {time: 112, text: { es: 'Que besa a todo los jovenes', en: 'Who kisses all the young men', fr: 'Qui embrasse tous les jeunes hommes'}},
    {time: 115, text: { es: 'Yo soy jovencita dulce', en: 'I am a sweet young girl', fr: 'Je suis une douce jeune fille'}},
    {time: 117, text: { es: 'Que tumba a todos los jovenes', en: 'Who knocks down all the young men', fr: 'Qui fait tomber tous les jeunes hommes'}},
    {time: 119, text: { es: 'Quienes son estos', en: 'Who are these', fr: 'Qui sont ceux-là'}},
    {time: 121, text: { es: 'Que no pueden con los jovenes', en: 'Who can\'t handle the young men', fr: 'Qui ne peuvent pas gérer les jeunes hommes'}},
    {time: 124, text: { es: 'Quienes son estos', en: 'Who are these', fr: 'Qui sont ceux-là'}},
    {time: 126, text: { es: 'Que no pueden con los jovenes', en: 'Who can\'t handle the young men', fr: 'Qui ne peuvent pas gérer les jeunes hommes'}},
    {time: 129, text: { es: '🎶', en: '🎶', fr: '🎶'}},
    {time: 131, text: { es: 'Solterito de Chumbivilcas', en: 'Bachelor from Chumbivilcas', fr: 'Célibataire de Chumbivilcas'}},
    {time: 133, text: { es: 'Vamos vamos hay que irnos', en: 'Let\'s go, we must leave', fr: 'Allons, il faut partir'}},
    {time: 136, text: { es: 'Solterito de Qolquemarca', en: 'Bachelor from Qolquemarca', fr: 'Célibataire de Qolquemarca'}},
    {time: 138, text: { es: 'Vamos vamos hay que irnos', en: 'Let\'s go, we must leave', fr: 'Allons, il faut partir'}},
    {time: 140, text: { es: 'Conmigo no mas hagamos pareja', en: 'Let\'s just be a couple with me', fr: 'Soyons juste en couple avec moi'}},
    {time: 142, text: { es: 'Conmigo no mas nos acompañaremos', en: 'Let\'s just keep each other company', fr: 'Accompagnons-nous simplement'}},
    {time: 145, text: { es: 'aunque sea bajo la lluvia hagamos pareja', en: 'even if it\'s in the rain let\'s be a couple', fr: 'même si c\'est sous la pluie soyons en couple'}},
    {time: 147, text: { es: 'incluso con granizo sigamos juntos', en: 'even with hail let\'s stay together', fr: 'même avec la grêle restons ensemble'}},
    {time: 150, text: { es: '🎶', en: '🎶', fr: '🎶'}},
    {time: 173, text: { es: 'Hasta al joven de Chumbivilcas', en: 'Even to the young man from Chumbivilcas', fr: 'Même au jeune homme de Chumbivilcas'}},
    {time: 175, text: { es: 'De su papá le estoy repartiendo', en: 'I am distributing from his father', fr: 'Je distribue de son père'}},
    {time: 177, text: { es: 'Hasta al joven de Qolquemarca', en: 'Even to the young man from Qolquemarca', fr: 'Même au jeune homme de Qolquemarca'}},
    {time: 179, text: { es: 'De su mamá le estoy separando', en: 'I am separating him from his mother', fr: 'Je le sépare de sa mère'}},
    {time: 182, text: { es: 'Del cerro donde esta la apacheta', en: 'From the hill where the apacheta is', fr: 'De la colline où se trouve l\'apacheta'}},
    {time: 184, text: { es: 'Riendome estoy pasando ya el cerro', en: 'Laughing I am already passing the hill', fr: 'Riant je passe déjà la colline'}},
    {time: 187, text: { es: 'Hasta al joven de Qolquemarca', en: 'Even to the young man from Qolquemarca', fr: 'Même au jeune homme de Qolquemarca'}},
    {time: 189, text: { es: 'Riendome me lo estoy robando', en: 'Laughing I am stealing him', fr: 'Riant je suis en train de le voler'}},
    {time: 192, text: { es: '🎶', en: '🎶', fr: '🎶'}},
    {time: 194, text: { es: '🎶', en: '🎶', fr: '🎶'}},
    {time: 196, text: { es: 'Bailando le he dado vuelta', en: 'Dancing I turned him around', fr: 'Dansant je l\'ai fait tourner'}},
    {time: 199, text: { es: '🎶', en: '🎶', fr: '🎶'}},
    {time: 201, text: { es: 'Filmando le he dado vuelta', en: 'Filming I turned him around', fr: 'Filmant je l\'ai fait tourner'}},
    {time: 203, text: { es: 'Al joven de chumbivilcas', en: 'To the young man from Chumbivilcas', fr: 'Au jeune homme de Chumbivilcas'}},
    {time: 206, text: { es: 'Llorando le estoy llevando', en: 'Crying I am taking him', fr: 'Pleurant je l\'emmène'}},
    {time: 208, text: { es: 'A su mamá y papá', en: 'To his mother and father', fr: 'À sa mère et son père'}},
    {time: 210, text: { es: 'Les deje llorando', en: 'I left them crying', fr: 'Je les ai laissés pleurer'}},
    {time: 212, text: { es: '🎶', en: '🎶', fr: '🎶'}},
  ]},
  { id: 12, youtubeId: '2L_GlRfefWU', title: 'Chaska Ñawi Niñucha', artist: 'K\'ana wawakunas', languages: 'Quechua', translation: { es: 'Niño de ojos de estrella', en: 'Star-eyed boy', fr: 'Garçon aux yeux d\'étoiles' } },
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
    {time: 52, text: { es: 'Por ser pobre, por ser humilde', en: 'For being poor, for being humble', fr: 'Pour être pauvre, pour être humble'}},
    {time: 55, text: { es: 'Te hice dormir en el cuero de la cabra', en: 'I made you sleep on the goat skin', fr: 'Je t\'ai fait dormir sur la peau de chèvre'}},
    {time: 58, text: { es: 'Por ser pobre, por ser humilde', en: 'For being poor, for being humble', fr: 'Pour être pauvre, pour être humble'}},
    {time: 60, text: { es: 'Te hice dormir en el cuero de la cabra', en: 'I made you sleep on the goat skin', fr: 'Je t\'ai fait dormir sur la peau de chèvre'}},
    {time: 64, text: { es: 'El cuero de la cabra', en: 'The goat skin', fr: 'La peau de chèvre'}},
    {time: 65, text: { es: 'Tampoco era mio', en: 'It wasn\'t mine either', fr: 'Ce n\'était pas à moi non plus'}},
    {time: 66, text: { es: 'Es lo que me preste de mi vecina', en: 'It\'s what I borrowed from my neighbor', fr: 'C\'est ce que j\'ai emprunté à ma voisine'}},
    {time: 69, text: { es: 'De mi vecina', en: 'From my neighbor', fr: 'De ma voisine'}},
    {time: 70, text: { es: 'Tampoco es', en: 'It isn\'t either', fr: 'Ce n\'est pas non plus'}},
    {time: 71, text: { es: 'Es lo que se presto de la asienda', en: 'It\'s what was borrowed from the estate', fr: 'C\'est ce qui a été emprunté à la propriété'}},
    {time: 74, text: { es: '🎶', en: '🎶', fr: '🎶'}},
    {time: 99, text: { es: 'De la asienda', en: 'From the estate', fr: 'De la propriété'}},
    {time: 100, text: { es: 'Tampoco es', en: 'It isn\'t either', fr: 'Ce n\'est pas non plus'}},
    {time: 102, text: { es: 'Lo que lo quitaron del hervajero', en: 'What they took from the herbalist', fr: 'Ce qu\'ils ont pris à l\'herboriste'}},
    {time: 105, text: { es: 'De la asienda', en: 'From the estate', fr: 'De la propriété'}},
    {time: 106, text: { es: 'Tampoco es', en: 'It isn\'t either', fr: 'Ce n\'est pas non plus'}},
    {time: 107, text: { es: 'Es lo que se prestaron del hevajero', en: 'It\'s what was borrowed from the herbalist', fr: 'C\'est ce qui a été emprunté à l\'herboriste'}},
    {time: 110, text: { es: 'Del hervajero', en: 'From the herbalist', fr: 'De l\'herboriste'}},
    {time: 111, text: { es: 'Tampoco es', en: 'It isn\'t either', fr: 'Ce n\'est pas non plus'}},
    {time: 112, text: { es: 'Es lo que le quito del zorrito', en: 'It\'s what was taken from the little fox', fr: 'C\'est ce qui a été pris au petit renard'}},
    {time: 116, text: { es: 'Del hervajero', en: 'From the herbalist', fr: 'De l\'herboriste'}},
    {time: 117, text: { es: 'Tampoco es', en: 'It isn\'t either', fr: 'Ce n\'est pas non plus'}},
    {time: 118, text: { es: 'Es lo que le quito del zorrito', en: 'It\'s what was taken from the little fox', fr: 'C\'est ce qui a été pris au petit renard'}},
    {time: 120, text: { es: '🎶', en: '🎶', fr: '🎶'}},
    {time: 146, text: { es: 'Por tu carita no mas', en: 'Just for your little face', fr: 'Juste pour ton petit visage'}},
    {time: 147, text: { es: 'Te estoy rondando', en: 'I am hanging around you', fr: 'Je rode autour de toi'}},
    {time: 150, text: { es: 'Por tu ojos negros', en: 'For your black eyes', fr: 'Pour tes yeux noirs'}},
    {time: 151, text: { es: 'Te estoy mirando', en: 'I am looking at you', fr: 'Je te regarde'}},
    {time: 153, text: { es: 'Te estoy rondando', en: 'I am hanging around you', fr: 'Je rode autour de toi'}},
    {time: 156, text: { es: 'Por tu carita no mas', en: 'Just for your little face', fr: 'Juste pour ton petit visage'}},
    {time: 157, text: { es: 'Te estoy rondando', en: 'I am hanging around you', fr: 'Je rode autour de toi'}},
    {time: 160, text: { es: 'Por tu ojos negros', en: 'For your black eyes', fr: 'Pour tes yeux noirs'}},
    {time: 161, text: { es: 'Te estoy mirando', en: 'I am looking at you', fr: 'Je te regarde'}},
    {time: 163, text: { es: 'Te estoy rondando', en: 'I am hanging around you', fr: 'Je rode autour de toi'}},
    {time: 166, text: { es: '🎶', en: '🎶', fr: '🎶'}},
    
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
