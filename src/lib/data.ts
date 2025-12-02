export type Phrase = {
  id: number;
  category: 'Saludos' | 'Comida' | 'Cortesía' | 'General';
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
  { id: 1, category: 'Saludos', emoji: '👋', quechua: 'Allillanchu', pronunciation: 'ah-yee-yan-choo', translation: { es: '¿Cómo estás?', en: 'How are you?' }, audioSrc: '/audio/1.mp3' },
  { id: 2, category: 'Saludos', emoji: '😊', quechua: 'Allillámi', pronunciation: 'ah-yee-YAH-mee', translation: { es: 'Estoy bien', en: 'I am well' }, audioSrc: '/audio/2.mp3' },
  { id: 3, category: 'Saludos', emoji: '🙏', quechua: 'Rimaykullayki', pronunciation: 'ree-mai-koo-YAI-kee', translation: { es: 'Disculpa / Permiso', en: 'Excuse me / Permission' }, audioSrc: '/audio/3.mp3' },
  { id: 4, category: 'Saludos', emoji: '💖', quechua: 'Yusulpayki', pronunciation: 'yoo-sool-PAI-kee', translation: { es: 'Gracias', en: 'Thank you' }, audioSrc: '/audio/4.mp3' },
  { id: 5, category: 'Saludos', emoji: '🤝', quechua: 'Tupananchiskama', pronunciation: 'too-pa-nan-chis-KA-ma', translation: { es: 'Hasta luego', en: 'See you later' }, audioSrc: '/audio/5.mp3' },
  { id: 6, category: 'Comida', emoji: '🍲', quechua: 'Mikuy', pronunciation: 'mee-KOOY', translation: { es: 'Comida', en: 'Food' }, audioSrc: '/audio/6.mp3' },
  { id: 7, category: 'Comida', emoji: '💧', quechua: 'Unu', pronunciation: 'OO-noo', translation: { es: 'Agua', en: 'Water' }, audioSrc: '/audio/7.mp3' },
  { id: 8, category: 'Comida', emoji: '😋', quechua: 'Sumaq mikuy', pronunciation: 'SOO-mak mee-KOOY', translation: { es: 'Comida deliciosa', en: 'Delicious food' }, audioSrc: '/audio/8.mp3' },
  { id: 9, category: 'Comida', emoji: '💰', quechua: 'Hayk\'an?', pronunciation: 'hay-KAHN', translation: { es: '¿Cuánto cuesta?', en: 'How much is it?' }, audioSrc: '/audio/9.mp3' },
  { id: 10, category: 'Cortesía', emoji: '😍', quechua: 'Sumaq', pronunciation: 'SOO-mak', translation: { es: 'Hermoso / Bonito', en: 'Beautiful / Nice' }, audioSrc: '/audio/10.mp3' },
  { id: 11, category: 'Cortesía', emoji: '💪', quechua: 'Atiq', pronunciation: 'ah-TEEK', translation: { es: 'Valiente / Fuerte', en: 'Brave / Strong' }, audioSrc: '/audio/11.mp3' },
  { id: 12, category: 'Cortesía', emoji: '😄', quechua: 'Kusi', pronunciation: 'KOO-see', translation: { es: 'Feliz / Alegre', en: 'Happy / Joyful' }, audioSrc: '/audio/12.mp3' },
  { id: 13, category: 'Cortesía', emoji: '❤️', quechua: 'Munay', pronunciation: 'moo-NAI', translation: { es: 'Amoroso / Lindo', en: 'Loving / Cute' }, audioSrc: '/audio/13.mp3' },
  { id: 14, category: 'General', emoji: '📍', quechua: 'Maypin?', pronunciation: 'mai-PEEN', translation: { es: '¿Dónde está?', en: "Where is it?" }, audioSrc: '/audio/14.mp3' },
  { id: 15, category: 'General', emoji: '🆘', quechua: 'Yanapaway', pronunciation: 'ya-na-pa-WAI', translation: { es: 'Ayúdame, por favor', en: 'Help me, please' }, audioSrc: '/audio/15.mp3' },
  { id: 16, category: 'General', emoji: '🤔', quechua: 'Manan hap\'inichu', pronunciation: 'MA-nan ha-PEE-nee-choo', translation: { es: 'No entiendo', en: "I don't understand" }, audioSrc: '/audio/16.mp3' },
  { id: 17, category: 'General', emoji: '👍', quechua: 'Arí', pronunciation: 'ah-REE', translation: { es: 'Sí', en: 'Yes' }, audioSrc: '/audio/17.mp3' },
  { id: 18, category: 'General', emoji: '👎', quechua: 'Manan', pronunciation: 'MA-nan', translation: { es: 'No', en: 'No' }, audioSrc: '/audio/18.mp3' },
  { id: 19, category: 'Saludos', emoji: '❓', quechua: 'Imaynallan?', pronunciation: 'ee-mai-NA-yan', translation: { es: '¿Cómo estás? (alt.)', en: 'How are you? (alt.)' }, audioSrc: '/audio/19.mp3' },
  { id: 20, category: 'Saludos', emoji: '☀️', quechua: 'Allin p\'unchay', pronunciation: 'ah-YEEN POON-chai', translation: { es: 'Buen día', en: 'Good day' }, audioSrc: '/audio/20.mp3' },
];

export const phraseCategories = ['Todo', ...Array.from(new Set(phrases.map(p => p.category)))];


export type MusicVideo = {
  id: number;
  youtubeId: string;
  title: string;
  artist: string;
  thumbnailId: string;
};

export const musicVideos: MusicVideo[] = [
  { id: 1, youtubeId: '_gtmqk4x_8E', title: 'Tusurikusun', artist: 'Damaris', thumbnailId: 'video1' },
  { id: 2, youtubeId: 'zB2g_y4s3pE', title: 'Tijeras', artist: 'Renata Flores', thumbnailId: 'video2' },
  { id: 3, youtubeId: 'Jm7e3nE8hZE', title: 'Kachikachicha', artist: 'Coro Arpegio', thumbnailId: 'video3' },
  { id: 4, youtubeId: 'UquwGwUv4Oc', title: 'Ananau', artist: 'Alborada', thumbnailId: 'video4' },
  { id: 5, youtubeId: '1C-G0q_2T7g', title: 'Kaypachamanta', artist: 'Liberato Kani', thumbnailId: 'video5' },
];
