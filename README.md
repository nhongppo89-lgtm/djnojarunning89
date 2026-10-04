# DJ N.O. จะRunning — Artist Website

เว็บไซต์ Portfolio ศิลปินแบบเต็มรูปแบบสำหรับ **DJ N.O. จะRunning (เอ็นโอจะรันนิ่ง)** เน้นประสบการณ์แบบ cinematic editorial ที่เล่าเรื่องผ่านภาพจริง, ผลงาน Mix จริง, วิดีโอจริง และ motion ที่สื่อถึงการเดินหน้าต่อ

## จุดเด่น

- ภาษาไทยเป็นหลัก พร้อมโทนข้อความที่สั้นและเป็นธรรมชาติ
- Hero เต็มหน้าจอและ scroll-linked motion
- Mixcloud 3 ผลงานแบบ click-to-load official player
- YouTube แบบ click-to-load ไม่มี autoplay
- Timeline, setup และ gallery ที่ใช้ภาพจริงของศิลปิน
- Navigation แบบ floating พร้อม active section และ mobile menu
- Responsive สำหรับมือถือ, tablet และ desktop
- รองรับ keyboard, focus state และ reduced motion
- SEO, Open Graph, favicon และ Netlify Image CDN

## เทคโนโลยี

- TanStack Start + TanStack Router
- React 19 + TypeScript
- Vite + Tailwind CSS 4
- Netlify Image CDN
- Lucide React

## เริ่มต้นใช้งาน

```bash
pnpm install
pnpm dev
```

สำหรับ production:

```bash
pnpm build
```

ข้อมูลผลงานและ social แก้ไขได้ที่ `src/data/artist.ts` โดย UI จะอ่านข้อมูลจากไฟล์นี้อัตโนมัติ
