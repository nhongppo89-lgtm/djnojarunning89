# DJ N.O. จะRunning Artist Website

## ภาพรวม

เว็บไซต์ศิลปินภาษาไทยของ DJ N.O. จะRunning สร้างด้วย TanStack Start, React 19, TypeScript, Vite และ deploy บน Netlify งานออกแบบเน้นภาพจริง, Typography, พื้นที่ว่าง และ motion ตามการ scroll

## โครงสร้างสำคัญ

- `src/routes/index.tsx` — หน้า Artist หลัก, navigation, sections และ scroll interaction
- `src/routes/__root.tsx` — document shell, metadata, Open Graph และฟอนต์
- `src/data/artist.ts` — ข้อมูลศิลปิน, ผลงาน, genre, timeline, social และ gallery
- `src/components/MediaEmbed.tsx` — Click-to-load player สำหรับ Mixcloud และ YouTube
- `src/styles.css` — visual system, responsive layout, animation และ reduced motion
- `public/images/` — ภาพจริงและ artwork ที่ผู้ใช้ส่งมา
- `netlify.toml` — build settings, cache และ security headers

## แนวทางแก้ไข

- ใช้ชื่อใน HTML/UI ว่า `DJ N.O. จะRunning` เท่านั้น และชื่ออ่านว่า `เอ็นโอจะรันนิ่ง`
- ภาษาไทยเป็นภาษาหลัก หลีกเลี่ยงข้อความแนวองค์กรหรือโฆษณาเกินจริง
- ห้ามสร้างประวัติ, รางวัล, ยอดผู้ติดตาม, สถานที่เล่น หรือ URL ขึ้นเอง
- เพิ่ม Mix, Video หรือ Gallery ใน `src/data/artist.ts` แทนการสร้าง component ใหม่
- External media ต้องเป็น player จริงแบบ click-to-load ห้ามทำ player หรือ progress bar ปลอม
- Animation ใช้ `transform` และ `opacity` เป็นหลัก พร้อม fallback ใน `prefers-reduced-motion`
- รูปนอก viewport ต้อง lazy load และใช้ Netlify Image CDN ผ่าน helper `imageUrl`

## คำสั่ง

- `pnpm dev` — รัน local development
- `pnpm build` — สร้าง production build

## ข้อควรระวัง

Mixcloud URL และ social URL เป็นข้อมูลจริงจากผู้ใช้ ห้ามปรับ slug หรือ query string โดยไม่ยืนยันก่อน ภาพต้นฉบับบางภาพมีข้อความเก่าอยู่ใน artwork ซึ่งใช้ได้ตามต้นฉบับ แต่ห้ามนำข้อความนั้นมาใช้เป็น HTML text
