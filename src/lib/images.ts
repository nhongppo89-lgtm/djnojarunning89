export function imageUrl(path: string, width: number, quality = 86) {
  return `/.netlify/images?url=${encodeURIComponent(path)}&w=${width}&q=${quality}`
}

export function imageSrcSet(path: string, widths = [400, 700, 1100]) {
  return widths.map((width) => `${imageUrl(path, width)} ${width}w`).join(', ')
}
