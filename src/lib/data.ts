export type Phrase = {
  id: number;
  category: 'Saludos' | 'Comida' | 'Cortesía' | 'General' |'Familia' | 'Colores';
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
  { id: 1, category: 'Saludos', emoji: '👋', quechua: 'Allillanchu', pronunciation: 'a-lli-llan-chu', translation: { es: '¿Cómo estás?', en: 'How are you?' }, audioSrc: '/audio/audio1.mp3' },
  { id: 2, category: 'Saludos', emoji: '😊', quechua: 'Allillanmi', pronunciation: 'a-lli-llan-mi', translation: { es: 'Estoy bien', en: 'I am well' }, audioSrc: '/audio/allillami.mp3' },
  { id: 3, category: 'Saludos', emoji: '🙏', quechua: 'Rimaykullayki', pronunciation: 'ri-may-ku-llay-ki', translation: { es: 'Disculpa / Permiso', en: 'Excuse me / Permission' }, audioSrc: '/audio/rimaykullayki.mp3' },
  { id: 5, category: 'Saludos', emoji: '🤝', quechua: 'Tupananchiskama', pronunciation: 'tu-pa-nan-chis-ka-ma', translation: { es: 'Hasta luego', en: 'See you later' }, audioSrc: '/audio/tupananchiskama.mp3' },
  { id: 8, category: 'Saludos', emoji: '🤝', quechua: 'Allin Tuta', pronunciation: 'a-llin su-kja', translation: { es: 'Buenas Noches', en: 'Good Evening' }, audioSrc: '/audio/allinTuta.mp3' },
  { id: 6, category: 'Comida', emoji: '🍲', quechua: 'Mijuy', pronunciation: 'mi-jui', translation: { es: 'Comida', en: 'Food' }, audioSrc: '/audio/mikuy.mp3' },
  { id: 7, category: 'Comida', emoji: '💧', quechua: 'Unu', pronunciation: 'u-nu', translation: { es: 'Agua', en: 'Water' }, audioSrc: '/audio/unu.mp3' },
  { id: 9, category: 'Comida', emoji: '💰', quechua: 'Hayk\'an?', pronunciation: 'jai-kan', translation: { es: '¿Cuánto es?', en: 'How much is it?' }, audioSrc: '/audio/haykan.mp3' },
  { id: 10, category: 'Cortesía', emoji: '😍', quechua: 'Sumaq', pronunciation: 'su-mak', translation: { es: 'Delicioso', en: 'Delicious' }, audioSrc: '/audio/sumaq.mp3' },
  { id: 11, category: 'Cortesía', emoji: '💪', quechua: 'Atiq', pronunciation: 'a-tik', translation: { es: 'Valiente / Fuerte', en: 'Brave / Strong' }, audioSrc: '/audio/atiq.mp3' },
  { id: 12, category: 'Cortesía', emoji: '😄', quechua: 'Kusi', pronunciation: 'ku-si', translation: { es: 'Feliz / Alegre', en: 'Happy / Joyful' }, audioSrc: '/audio/kusi.mp3' },
  { id: 13, category: 'Cortesía', emoji: '❤️', quechua: 'Munay', pronunciation: 'mu-nai', translation: { es: 'Hermnosa/ hermoso', en: 'Cute/beautiful' }, audioSrc: '/audio/munay.mp3' },
  { id: 14, category: 'General', emoji: '📍', quechua: '¿Maypin?', pronunciation: 'mai-pin', translation: { es: '¿Dónde está?', en: "Where is it?" }, audioSrc: '/audio/maypin.mp3' },
  { id: 15, category: 'General', emoji: '🆘', quechua: 'Yanapaway', pronunciation: 'ya-na-pa-wai', translation: { es: 'Ayúdame', en: 'Help me' }, audioSrc: '/audio/yanapaway.mp3' },
  { id: 16, category: 'General', emoji: '🤔', quechua: 'Manan', pronunciation: 'Ma-nan', translation: { es: 'No', en: "No" }, audioSrc: '/audio/manan-hapinichu.mp3' },
  { id: 17, category: 'General', emoji: '👍', quechua: 'Ari', pronunciation: 'a-Ri', translation: { es: 'Sí', en: 'Yes' }, audioSrc: '/audio/ari.mp3' },
  { id: 18, category: 'General', emoji: '👎', quechua: 'Manan', pronunciation: 'Ma-nan', translation: { es: 'No', en: 'No' }, audioSrc: '/audio/manan.mp3' },
  { id: 19, category: 'Saludos', emoji: '❓', quechua: '¿Imaynallan?', pronunciation: 'i-mai-na-llan', translation: { es: '¿Cómo estás?', en: 'How are you?' }, audioSrc: '/audio/imaynallan.mp3' },
  { id: 20, category: 'Saludos', emoji: '☀️', quechua: 'Allin p\'unchay', pronunciation: 'a-llin Pun-chai', translation: { es: 'Buen día', en: 'Good day' }, audioSrc: '/audio/allin-punchay.mp3' },
  { id: 21, category: 'Saludos', emoji: '🤝', quechua: 'Allin Sukha', pronunciation: 'a-llin su-kja', translation: { es: 'Buenas Tardes', en: 'Good afternoons' }, audioSrc: '/audio/allinSukha.mp3' },
  { id: 22, category: 'Familia', emoji: '🤝', quechua: 'Taytay', pronunciation: 'tai-tai', translation: { es: 'Papá', en: 'Father' }, audioSrc: '/audio/taytay.mp3' },
  { id: 23, category: 'Familia', emoji: '🤝', quechua: 'Mamay', pronunciation: 'ma-mai', translation: { es: 'Mamá', en: 'Mother' }, audioSrc: '/audio/mamay.mp3' },
  { id: 24, category: 'Colores', emoji: '🤝', quechua: 'Puka', pronunciation: 'pu-ka', translation: { es: 'Rojo', en: 'Red' }, audioSrc: '/audio/puka.mp3' },
  { id: 25, category: 'Colores', emoji: '🤝', quechua: 'Q\'ello', pronunciation: 'qe-llo', translation: { es: 'Amarillo', en: 'Yellow' }, audioSrc: '/audio/qello.mp3' },

];

export const phraseCategories = ['Todo', ...Array.from(new Set(phrases.map(p => p.category)))];


export type MusicVideo = {
  id: number;
  youtubeId: string;
  title: string;
  artist: string;
  startTime?: number;
};

export const musicVideos: MusicVideo[] = [
  { id: 1, youtubeId: 'viPKKHGdwHQ', title: 'Carnaval Despedida', artist: 'Roger Chino' },
  { id: 2, youtubeId: '58NMMld4gsk', title: 'Carnaval Solteritas', artist: 'Yeritza Corazon' },
  { id: 3, youtubeId: 'mF25iEGUmNc', title: 'Kachikachicha', artist: 'Ualberto Apaza', startTime: 38},
  { id: 4, youtubeId: 'UquwGwUv4Oc', title: 'Ananau', artist: 'Alborada' },
  { id: 5, youtubeId: '1C-G0q_2T7g', title: 'Kaypachamanta', artist: 'Liberato Kani' },
];
