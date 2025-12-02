export type Phrase = {
  id: number;
  category: 'Saludos' | 'Comida' | 'Cortesía' | 'General';
  emoji: string;
  quechua: string;
  pronunciation: string;
  translation: string;
  audioSrc: string;
};

export const phrases: Phrase[] = [
  { id: 1, category: 'Saludos', emoji: '👋', quechua: 'Allillanchu', pronunciation: 'ah-yee-yan-choo', translation: '¿Cómo estás?', audioSrc: '/audio/1.mp3' },
  { id: 2, category: 'Saludos', emoji: '😊', quechua: 'Allillámi', pronunciation: 'ah-yee-YAH-mee', translation: 'Estoy bien', audioSrc: '/audio/2.mp3' },
  { id: 3, category: 'Saludos', emoji: '🙏', quechua: 'Rimaykullayki', pronunciation: 'ree-mai-koo-YAI-kee', translation: 'Disculpa / Permiso', audioSrc: '/audio/3.mp3' },
  { id: 4, category: 'Saludos', emoji: '💖', quechua: 'Yusulpayki', pronunciation: 'yoo-sool-PAI-kee', translation: 'Gracias', audioSrc: '/audio/4.mp3' },
  { id: 5, category: 'Saludos', emoji: '🤝', quechua: 'Tupananchiskama', pronunciation: 'too-pa-nan-chis-KA-ma', translation: 'Hasta luego', audioSrc: '/audio/5.mp3' },
  { id: 6, category: 'Comida', emoji: '🍲', quechua: 'Mikuy', pronunciation: 'mee-KOOY', translation: 'Comida', audioSrc: '/audio/6.mp3' },
  { id: 7, category: 'Comida', emoji: '💧', quechua: 'Unu', pronunciation: 'OO-noo', translation: 'Agua', audioSrc: '/audio/7.mp3' },
  { id: 8, category: 'Comida', emoji: '😋', quechua: 'Sumaq mikuy', pronunciation: 'SOO-mak mee-KOOY', translation: 'Comida deliciosa', audioSrc: '/audio/8.mp3' },
  { id: 9, category: 'Comida', emoji: '💰', quechua: 'Hayk\'an?', pronunciation: 'hay-KAHN', translation: '¿Cuánto cuesta?', audioSrc: '/audio/9.mp3' },
  { id: 10, category: 'Cortesía', emoji: '😍', quechua: 'Sumaq', pronunciation: 'SOO-mak', translation: 'Hermoso / Bonito', audioSrc: '/audio/10.mp3' },
  { id: 11, category: 'Cortesía', emoji: '💪', quechua: 'Atiq', pronunciation: 'ah-TEEK', translation: 'Valiente / Fuerte', audioSrc: '/audio/11.mp3' },
  { id: 12, category: 'Cortesía', emoji: '😄', quechua: 'Kusi', pronunciation: 'KOO-see', translation: 'Feliz / Alegre', audioSrc: '/audio/12.mp3' },
  { id: 13, category: 'Cortesía', emoji: '❤️', quechua: 'Munay', pronunciation: 'moo-NAI', translation: 'Amoroso / Lindo', audioSrc: '/audio/13.mp3' },
  { id: 14, category: 'General', emoji: '📍', quechua: 'Maypin?', pronunciation: 'mai-PEEN', translation: '¿Dónde está?', audioSrc: '/audio/14.mp3' },
  { id: 15, category: 'General', emoji: '🆘', quechua: 'Yanapaway', pronunciation: 'ya-na-pa-WAI', translation: 'Ayúdame, por favor', audioSrc: '/audio/15.mp3' },
  { id: 16, category: 'General', emoji: '🤔', quechua: 'Manan hap\'inichu', pronunciation: 'MA-nan ha-PEE-nee-choo', translation: 'No entiendo', audioSrc: '/audio/16.mp3' },
  { id: 17, category: 'General', emoji: '👍', quechua: 'Arí', pronunciation: 'ah-REE', translation: 'Sí', audioSrc: '/audio/17.mp3' },
  { id: 18, category: 'General', emoji: '👎', quechua: 'Manan', pronunciation: 'MA-nan', translation: 'No', audioSrc: '/audio/18.mp3' },
  { id: 19, category: 'Saludos', emoji: '❓', quechua: 'Imaynallan?', pronunciation: 'ee-mai-NA-yan', translation: '¿Cómo estás? (alt.)', audioSrc: '/audio/19.mp3' },
  { id: 20, category: 'Saludos', emoji: '☀️', quechua: 'Allin p\'unchay', pronunciation: 'ah-YEEN POON-chai', translation: 'Buen día', audioSrc: '/audio/20.mp3' },
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
