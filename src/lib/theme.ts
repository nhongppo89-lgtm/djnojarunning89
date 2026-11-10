export type ThemeMode = 'auto' | 'day' | 'night'

export function bangkokTheme(date = new Date()): 'day' | 'night' {
  const hour = Number(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Bangkok', hour: '2-digit', hourCycle: 'h23',
  }).format(date))
  return hour >= 6 && hour < 18 ? 'day' : 'night'
}

export function savedTheme(): ThemeMode {
  const value = document.cookie.split('; ').find((entry) => entry.startsWith('no-theme='))?.split('=')[1]
  return value === 'day' || value === 'night' ? value : 'auto'
}

// Runs before first paint; only decorative attributes differ from server HTML.
export const themeBootstrap = `(() => {
  const bangkokTheme = ${bangkokTheme.toString()};
  const savedTheme = ${savedTheme.toString()};
  const mode = savedTheme();
  document.documentElement.dataset.theme = mode === 'auto' ? bangkokTheme() : mode;
})();`
