import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

const title = 'DJ N.O. จะRunning — เอ็นโอจะรันนิ่ง | DJ Portfolio'
const description = 'DJ N.O. จะRunning — เอ็นโอจะรันนิ่ง DJ หน้าใหม่จากประเทศไทย สาย Thai / Lao Remix และ Nonstop Mix กำลังสร้าง Sound ของตัวเอง รับเล่นงาน Pub, Birthday, Event, Banquet และ Social Gathering'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { title },
      { name: 'description', content: description },
      { name: 'theme-color', content: '#050708' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: '/images/no-artwork.jpeg' },
      { property: 'og:locale', content: 'th_TH' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: '/images/no-artwork.jpeg' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.png', type: 'image/png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/images/no-performing.jpeg', as: 'image' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <HeadContent />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600&family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
