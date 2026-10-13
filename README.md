# DJ N.O. จะRunning — Artist Website

เว็บไซต์ Portfolio ศิลปินแบบเต็มรูปแบบสำหรับ **DJ N.O. จะRunning (เอ็นโอจะรันนิ่ง)** เน้นประสบการณ์แบบ cinematic editorial ที่เล่าเรื่องผ่านภาพจริง, ผลงาน Mix จริง, วิดีโอจริง และ motion ที่สื่อถึงการเดินหน้าต่อ

## จุดเด่น

- ภาษาไทยเป็นหลัก พร้อมโทนข้อความที่สั้นและเป็นธรรมชาติ
- Hero เต็มหน้าจอและ scroll-linked motion
- ผลงาน Mixcloud ทั้งหมดแบบ click-to-load official player
- YouTube แบบ click-to-load ไม่มี autoplay
- Timeline, setup และ gallery ที่ใช้ภาพจริงของศิลปิน
- Navigation แบบ floating พร้อม active section และ mobile menu แบบ native dialog
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

## ตรวจสอบก่อนเผยแพร่

ใช้ `pnpm exec tsc --noEmit` เพื่อตรวจ TypeScript และ `git diff --check` เพื่อตรวจ patch โดยไม่สร้างไฟล์ build

เมนูมือถือใช้ `<dialog>` ที่อยู่นอก header เพื่อไม่ให้ `transform` หรือ `backdrop-filter` ของ header จำกัดพื้นที่เมนู เบราว์เซอร์จัดการ focus และ background inert ให้ เมนูปิดด้วยปุ่มปิด, Escape, ลิงก์ section หรือเมื่อเปลี่ยนเป็น desktop ที่ 1020px รายการเมนูเลื่อนได้โดยปุ่มปิดยังอยู่ด้านบน

ตรวจทุก section ที่ความกว้าง 320, 375, 390, 430, 744, 768, 834, 1024, 1194, 1280, 1440 และ 1920px รวมถึงจอแนวนอนที่เตี้ย ตรวจ keyboard, touch, reduced motion และ player จริงแยกจากลิงก์สำรอง ก่อนยืนยันการเผยแพร่ผ่าน workflow Git เดิม

รูปใช้ helper ใน `src/lib/images.ts` และ Netlify Image CDN ส่วนภาพ YouTube ใช้เฉพาะโดเมน `i.ytimg.com` ที่อนุญาตใน `netlify.toml` ไม่ต้อง preload ภาพที่อยู่ใต้ hero
