import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'
import { imageSrcSet, imageUrl } from '@/lib/images'

type MediaEmbedProps =
  | {
      kind: 'mixcloud'
      title: string
      url: string
      linkLabel?: string
    }
  | {
      kind: 'youtube'
      title: string
      url: string
      videoId: string
      thumbnail: string
    }

export function MediaEmbed(props: MediaEmbedProps) {
  const [loaded, setLoaded] = useState(false)
  const playerRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (loaded) playerRef.current?.focus({ preventScroll: true })
  }, [loaded])

  if (props.kind === 'mixcloud') {
    const feed = new URL(props.url).pathname
    const source = `https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=0&feed=${encodeURIComponent(feed)}`

    return (
      <div className="media-embed media-embed--mixcloud">
        {loaded ? (
          <iframe
            ref={playerRef}
            title={`ฟัง ${props.title} บน Mixcloud`}
            src={source}
            width="100%"
            height="120"
            loading="lazy"
            allow="encrypted-media; fullscreen"
          />
        ) : (
          <button className="load-player" type="button" onClick={() => setLoaded(true)} aria-label={`โหลด Mixcloud Player: ${props.title}`}>
            <span className="play-icon" aria-hidden="true"><Play size={18} fill="currentColor" /></span>
            <span><strong>ฟัง Mix</strong><small>โหลด Mixcloud Player เมื่อกด</small></span>
          </button>
        )}
        <a className="text-link" href={props.url} target="_blank" rel="noopener noreferrer">
          {props.linkLabel ?? 'เปิดใน Mixcloud'} <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
    )
  }

  return (
    <div className="media-embed media-embed--video">
      {loaded ? (
        <iframe
          ref={playerRef}
          title={`ดู ${props.title} บน YouTube`}
          src={`https://www.youtube-nocookie.com/embed/${props.videoId}?rel=0`}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button className="video-poster" type="button" onClick={() => setLoaded(true)} aria-label={`โหลดวิดีโอ: ${props.title}`}>
          <img src={imageUrl(props.thumbnail, 480)} srcSet={imageSrcSet(props.thumbnail, [320, 480])} sizes="(min-width: 1352px) 1260px, calc(100vw - 40px)" width="480" height="360" alt="" loading="lazy" />
          <span className="video-shade" aria-hidden="true" />
          <span className="video-play"><Play size={25} fill="currentColor" aria-hidden="true" /> ดูวิดีโอ</span>
        </button>
      )}
      <a className="text-link" href={props.url} target="_blank" rel="noreferrer">
        ดูบน YouTube <ExternalLink size={14} aria-hidden="true" />
      </a>
    </div>
  )
}
