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
  { id: 1, category: 'Saludos', emoji: '👋', quechua: 'Allillanchu', pronunciation: 'ah-yee-yan-choo', translation: { es: '¿Cómo estás?', en: 'How are you?' }, audioSrc: '/audio/allillanchu.mp3' },
  { id: 2, category: 'Saludos', emoji: '😊', quechua: 'Allillámi', pronunciation: 'ah-yee-YAH-mee', translation: { es: 'Estoy bien', en: 'I am well' }, audioSrc: '/audio/allillami.mp3' },
  { id: 3, category: 'Saludos', emoji: '🙏', quechua: 'Rimaykullayki', pronunciation: 'ree-mai-koo-YAI-kee', translation: { es: 'Disculpa / Permiso', en: 'Excuse me / Permission' }, audioSrc: '/audio/rimaykullayki.mp3' },
  { id: 4, category: 'Saludos', emoji: '💖', quechua: 'Yusulpayki', pronunciation: 'yoo-sool-PAI-kee', translation: { es: 'Gracias', en: 'Thank you' }, audioSrc: '/audio/yusulpayki.mp3' },
  { id: 5, category: 'Saludos', emoji: '🤝', quechua: 'Tupananchiskama', pronunciation: 'too-pa-nan-chis-KA-ma', translation: { es: 'Hasta luego', en: 'See you later' }, audioSrc: '/audio/tupananchiskama.mp3' },
  { id: 6, category: 'Comida', emoji: '🍲', quechua: 'Mikuy', pronunciation: 'mee-KOOY', translation: { es: 'Comida', en: 'Food' }, audioSrc: '/audio/mikuy.mp3' },
  { id: 7, category: 'Comida', emoji: '💧', quechua: 'Unu', pronunciation: 'OO-noo', translation: { es: 'Agua', en: 'Water' }, audioSrc: '/audio/unu.mp3' },
  { id: 8, category: 'Comida', emoji: '😋', quechua: 'Sumaq mikuy', pronunciation: 'SOO-mak mee-KOOY', translation: { es: 'Comida deliciosa', en: 'Delicious food' }, audioSrc: '/audio/sumaq-mikuy.mp3' },
  { id: 9, category: 'Comida', emoji: '💰', quechua: 'Hayk\'an?', pronunciation: 'hay-KAHN', translation: { es: '¿Cuánto cuesta?', en: 'How much is it?' }, audioSrc: '/audio/haykan.mp3' },
  { id: 10, category: 'Cortesía', emoji: '😍', quechua: 'Sumaq', pronunciation: 'SOO-mak', translation: { es: 'Hermoso / Bonito', en: 'Beautiful / Nice' }, audioSrc: '/audio/sumaq.mp3' },
  { id: 11, category: 'Cortesía', emoji: '💪', quechua: 'Atiq', pronunciation: 'ah-TEEK', translation: { es: 'Valiente / Fuerte', en: 'Brave / Strong' }, audioSrc: '/audio/atiq.mp3' },
  { id: 12, category: 'Cortesía', emoji: '😄', quechua: 'Kusi', pronunciation: 'KOO-see', translation: { es: 'Feliz / Alegre', en: 'Happy / Joyful' }, audioSrc: '/audio/kusi.mp3' },
  { id: 13, category: 'Cortesía', emoji: '❤️', quechua: 'Munay', pronunciation: 'moo-NAI', translation: { es: 'Amoroso / Lindo', en: 'Loving / Cute' }, audioSrc: '/audio/munay.mp3' },
  { id: 14, category: 'General', emoji: '📍', quechua: 'Maypin?', pronunciation: 'mai-PEEN', translation: { es: '¿Dónde está?', en: "Where is it?" }, audioSrc: '/audio/maypin.mp3' },
  { id: 15, category: 'General', emoji: '🆘', quechua: 'Yanapaway', pronunciation: 'ya-na-pa-WAI', translation: { es: 'Ayúdame, por favor', en: 'Help me, please' }, audioSrc: '/audio/yanapaway.mp3' },
  { id: 16, category: 'General', emoji: '🤔', quechua: 'Manan hap\'inichu', pronunciation: 'MA-nan ha-PEE-nee-choo', translation: { es: 'No entiendo', en: "I don't understand" }, audioSrc: '/audio/manan-hapinichu.mp3' },
  { id: 17, category: 'General', emoji: '👍', quechua: 'Arí', pronunciation: 'ah-REE', translation: { es: 'Sí', en: 'Yes' }, audioSrc: '/audio/ari.mp3' },
  { id: 18, category: 'General', emoji: '👎', quechua: 'Manan', pronunciation: 'MA-nan', translation: { es: 'No', en: 'No' }, audioSrc: '/audio/manan.mp3' },
  { id: 19, category: 'Saludos', emoji: '❓', quechua: 'Imaynallan?', pronunciation: 'ee-mai-NA-yan', translation: { es: '¿Cómo estás? (alt.)', en: 'How are you? (alt.)' }, audioSrc: '/audio/imaynallan.mp3' },
  { id: 20, category: 'Saludos', emoji: '☀️', quechua: 'Allin p\'unchay', pronunciation: 'ah-YEEN POON-chai', translation: { es: 'Buen día', en: 'Good day' }, audioSrc: '/audio/allin-punchay.mp3' },
];

export const phraseCategories = ['Todo', ...Array.from(new Set(phrases.map(p => p.category)))];


export type MusicVideo = {
  id: number;
  youtubeId: string;
  title: string;
  artist: string;
};

export const musicVideos: MusicVideo[] = [
  { id: 1, youtubeId: 'viPKKHGdwHQ', title: 'Carnaval Despedida', artist: 'Roger Chino' },
  { id: 2, youtubeId: '58NMMld4gsk', title: 'Carnaval Solteritas', artist: 'Yeritza Corazon' },
  { id: 3, youtubeId: 'Jm7e3nE8hZE', title: 'Kachikachicha', artist: 'Coro Arpegio' },
  { id: 4, youtubeId: 'UquwGwUv4Oc', title: 'Ananau', artist: 'Alborada' },
  { id: 5, youtubeId: '1C-G0q_2T7g', title: 'Kaypachamanta', artist: 'Liberato Kani' },
];
