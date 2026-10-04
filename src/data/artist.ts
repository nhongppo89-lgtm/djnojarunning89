export const artist = {
  name: 'DJ N.O. จะRunning',
  thaiName: 'เอ็นโอจะรันนิ่ง',
  phone: '0949574773',
  contactName: 'โหน่ง',
  social: {
    facebook: 'https://www.facebook.com/8nh.9ng',
    instagram:
      'https://www.instagram.com/8nh.27n.o?stkn=cW5sd2p4Y3pkeGFm&utm_source=qr',
    tiktok: 'https://www.tiktok.com/@nh_ng08?_r=1&_t=ZS-99Vvm5xnsHN',
    youtube: 'https://youtu.be/ePzCSFNFnPo?si=k1owDgEEkdQlRVPv',
    mixcloud: 'https://www.mixcloud.com/nhongppo89/',
  },
} as const

export const navigation = [
  { id: 'home', label: 'หน้าแรก' },
  { id: 'about', label: 'รู้จัก N.O.' },
  { id: 'sound', label: 'แนวเพลง' },
  { id: 'live', label: 'ผลงาน DJ' },
  { id: 'mixes', label: 'Mix' },
  { id: 'video', label: 'วิดีโอ' },
  { id: 'journey', label: 'เส้นทาง' },
  { id: 'gallery', label: 'แกลเลอรี' },
  { id: 'contact', label: 'ติดต่อ' },
] as const

export const heroIntro =
  'DJ หน้าใหม่จากประเทศไทย กำลังสร้าง Sound ของตัวเอง ทีละเพลง ทีละ Mix' as const

export const heroLines = [
  'วันนี้ฟังอะไรดี',
  'กดฟังดูก่อน',
  'ยัง Running อยู่',
  'มี Mix อยู่ข้างล่าง',
  'วันนี้เปิดยาวหน่อย',
  'ยังมีเพลงให้เล่นอีกเยอะ',
  'ไว้เจอกันใน Mix',
  'เข้ามาแล้วก็ลองฟังดิ',
] as const

export const genres = [
  { name: 'THAI REMIX', note: 'เพลงไทยที่คุ้น แต่จัดทางใหม่', main: true },
  { name: 'LAO REMIX', note: 'จังหวะลาวที่หยิบมาไหลต่อกัน', main: true },
  { name: 'NONSTOP MIX', note: 'เปิดยาว ฟังต่อได้เรื่อย ๆ', main: true },
  { name: 'HIP-HOP', note: 'แนวที่กำลังเรียนรู้ ยังลองอยู่', main: false },
  { name: 'R&B', note: 'แนวที่กำลังเรียนรู้ ยังลองอยู่', main: false },
  { name: 'EDM', note: 'แนวที่กำลังเรียนรู้ ยังลองอยู่', main: false },
  { name: 'OPEN FORMAT', note: 'อ่านห้อง แล้วเลือกเพลงให้เข้ากับงาน', main: false },
] as const

export const liveEvents = [
  'Pub',
  'Birthday',
  'Event',
  'Social Gathering',
  'Banquet',
] as const

export const mixes = [
  {
    id: 'thai-remix-01',
    title: 'Mix ไหลไทยรีมิกซ์ N.O.ดิวะ!! | [ N.O.จะRunning ] Th Remix #01-Edit',
    type: 'THAI REMIX · NONSTOP MIX',
    description: 'ชุดแรกของ Mix ไหลไทยรีมิกซ์ กดฟังยาว ๆ ได้เลย',
    url: 'https://www.mixcloud.com/nhongppo89/mix-%E0%B9%84%E0%B8%AB%E0%B8%A5%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%8B-no%E0%B8%94%E0%B8%A7%E0%B8%B0-no%E0%B8%88%E0%B8%B0running-th-remix-01-edit/',
    artwork: '/images/no-artwork.jpeg',
  },
  {
    id: 'thai-remix-02',
    title: 'Mix ไหลไทยรีมิกซ์ N.O.ดิวะ!! | [ N.O.จะRunning ] Th Remix #02',
    type: 'THAI REMIX · CONTINUOUS MIX',
    description: 'Mix ไทยชุดที่สอง ลองจัดเพลงให้ไหลต่ออีกแบบ',
    url: 'https://www.mixcloud.com/nhongppo89/mix-%E0%B9%84%E0%B8%AB%E0%B8%A5%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%8B-02-no%E0%B8%94%E0%B8%A7%E0%B8%B0-no%E0%B8%88%E0%B8%B0running/',
    artwork: '/images/no-logo.png',
  },
  {
    id: 'flow-01',
    title: 'มิกซ์ไหลตามฟีล #1 | N.O.จะRunning',
    type: 'REMIX MIX · CONTINUOUS MIX',
    description: 'รอบนี้ปล่อยตามฟีล ลองฟังว่าพาไปทางไหน',
    url: 'https://www.mixcloud.com/nhongppo89/%E0%B8%A1%E0%B8%81%E0%B8%8B%E0%B9%84%E0%B8%AB%E0%B8%A5%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%9F%E0%B8%A5-1-no%E0%B8%88%E0%B8%B0running/',
    artwork: '/images/no-artwork.jpeg',
  },
  {
    id: 'flow-02-collagen',
    title: 'มิกซ์ไหลตามฟีล คอลลาเจน #02 | N.O.จะRunning',
    type: 'REMIX MIX · CONTINUOUS MIX',
    description: 'ต่อจากชุดแรก รอบนี้จัดชุด คอลลาเจน ลองฟังดูว่าไหลไปทางไหน',
    url: 'https://www.mixcloud.com/nhongppo89/mix%E0%B9%84%E0%B8%AB%E0%B8%A5%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%9F%E0%B8%A5-%E0%B8%84%E0%B8%AD%E0%B8%A5%E0%B8%A5%E0%B8%B2%E0%B9%80%E0%B8%88%E0%B8%99-02-no%E0%B8%88%E0%B8%B0running/',
    artwork: '/images/no-mix-collagen-02.jpeg',
  },
] as const

export const video = {
  id: 'ePzCSFNFnPo',
  title: 'ไม่ช้าไม่เร็วแต่มั้วแน่💯 EP.1 | N.O.จะRunning🫯',
  url: 'https://youtu.be/ePzCSFNFnPo?si=k1owDgEEkdQlRVPv',
  thumbnail: 'https://i.ytimg.com/vi/ePzCSFNFnPo/hqdefault.jpg',
} as const

export const journey = [
  'iPad / djay',
  'เรียนรู้ด้วยตัวเอง',
  'DDJ-200',
  'Hercules Inpulse 500',
  'ฝึก Mix',
  'เริ่มเล่นงานจริง',
  'DJ N.O. จะRunning',
  'ยังไปต่อ',
] as const

export const gallery = [
  {
    src: '/images/no-performing.jpeg',
    alt: 'DJ N.O. จะRunning กำลัง Mix เพลงด้วย Hercules DJControl Inpulse 500',
    category: 'DJ · Live',
  },
  {
    src: '/images/no-live-02.jpeg',
    alt: 'DJ N.O. จะRunning สะพายกระเป๋าอุปกรณ์ก่อนขึ้นเล่นงานกลางคืน',
    category: 'DJ · Live',
  },
  {
    src: '/images/no-artwork.jpeg',
    alt: 'Artwork จริงของ DJ N.O. จะRunning ขณะเล่น DJ',
    category: 'ศิลปิน · Artwork',
  },
  {
    src: '/images/no-logo.png',
    alt: 'Artwork โลโก้ต้นฉบับของ DJ N.O. จะRunning',
    category: 'Artwork',
  },
] as const

export const booking = {
  based: 'Based in Thailand',
  coverage: 'รับงานทั่วประเทศไทย และ สปป.ลาว',
  cta: 'BOOK N.O.',
} as const
