import { useEffect, useState } from 'react'
import { Moon, Sun, Clock3 } from 'lucide-react'
import { bangkokTheme, savedTheme, type ThemeMode } from '@/lib/theme'

export function ThemeControl() {
  const [mode, setMode] = useState<ThemeMode>('auto')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setMode(savedTheme())
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    const apply = () => {
      const theme = mode === 'auto' ? bangkokTheme() : mode
      document.documentElement.dataset.theme = theme
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'night' ? '#080f20' : '#edf6ff')
    }
    apply()
    // Also catches a sleeping tab or a corrected device clock.
    const timer = window.setInterval(apply, 1000)
    document.addEventListener('visibilitychange', apply)
    window.addEventListener('focus', apply)
    document.documentElement.dataset.themeReady = 'true'
    return () => {
      clearInterval(timer)
      document.removeEventListener('visibilitychange', apply)
      window.removeEventListener('focus', apply)
    }
  }, [mode, ready])

  const select = (next: ThemeMode) => {
    document.cookie = `no-theme=${next}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`
    setMode(next)
  }

  return (
    <div className="theme-control" role="group" aria-label="เลือกบรรยากาศเว็บไซต์ Auto ตามเวลาไทย">
      {([
        ['auto', 'Auto', Clock3, 'อัตโนมัติตามเวลาไทย'],
        ['day', 'Day', Sun, 'กลางวัน'],
        ['night', 'Night', Moon, 'กลางคืน'],
      ] as const).map(([value, label, Icon, description]) => (
        <button key={value} type="button" aria-label={description} aria-pressed={ready && mode === value} onClick={() => select(value)}>
          <Icon size={13} aria-hidden="true" /><span>{label}</span>
        </button>
      ))}
    </div>
  )
}
