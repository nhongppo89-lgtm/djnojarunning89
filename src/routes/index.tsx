import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ExternalLink,
  Instagram,
  Menu,
  Music2,
  Phone,
  Play,
  X,
} from 'lucide-react'
import { MediaEmbed } from '@/components/MediaEmbed'
import {
  artist,
  booking,
  gallery,
  genres,
  heroIntro,
  heroLines,
  journey,
  liveEvents,
  mixes,
  navigation,
  video,
} from '@/data/artist'

export const Route = createFileRoute('/')({ component: ArtistHome })

function imageUrl(path: string, width: number, quality = 86) {
  return `/.netlify/images?url=${encodeURIComponent(path)}&w=${width}&q=${quality}`
}

function ArtistHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [personality, setPersonality] = useState<(typeof heroLines)[number]>(heroLines[0])

  useEffect(() => {
    setPersonality(heroLines[Math.floor(Math.random() * heroLines.length)])
  }, [])

  useEffect(() => {
    const root = document.documentElement
    let frame = 0

    const updateScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / window.innerHeight, 1)
        root.style.setProperty('--hero-progress', progress.toString())
        frame = 0
      })
    }

    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-35% 0px -55%', threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
      window.removeEventListener('scroll', updateScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <a className="skip-link" href="#about">ข้ามไปเนื้อหาหลัก</a>
      <header className="site-header" aria-label="เมนูหลัก">
        <a href="#home" className="mini-mark" onClick={closeMenu} aria-label="กลับหน้าแรก">
          <span>N.O.</span><i aria-hidden="true" />
        </a>
        <nav className="desktop-nav">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav id="mobile-menu" className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
          <p>DJ N.O. จะRunning</p>
          {navigation.map((item, index) => (
            <a key={item.id} href={`#${item.id}`} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              <small>{String(index + 1).padStart(2, '0')}</small>{item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="hero scene" aria-labelledby="hero-title">
        <div className="hero-image-wrap" aria-hidden="true">
          <picture>
            <source media="(min-width: 900px)" srcSet={`${imageUrl('/images/no-performing.jpeg', 1600)} 1x, ${imageUrl('/images/no-performing.jpeg', 2400)} 2x`} />
            <img src={imageUrl('/images/no-performing.jpeg', 1100)} alt="" fetchPriority="high" />
          </picture>
          <div className="hero-image-wash" />
        </div>
        <div className="running-line running-line--one" aria-hidden="true" />
        <div className="running-line running-line--two" aria-hidden="true" />
        <div className="hero-content content-shell">
          <p className="eyebrow">THAI / LAO REMIX</p>
          <h1 id="hero-title"><span>DJ N.O.</span><span className="running-word">จะRunning</span></h1>
          <p className="thai-name">เอ็นโอจะรันนิ่ง</p>
          <p className="hero-intro">{heroIntro}</p>
          <div className="hero-meta"><span>HIP-HOP · R&amp;B · EDM</span><span>EXPLORING</span></div>
          <div className="hero-actions">
            <a href="#mixes" className="button button--primary"><Play size={16} fill="currentColor" />ฟัง Mix</a>
            <a href="#live" className="button button--glass">ดูผลงาน</a>
            <a href="#contact" className="button button--quiet">Book N.O. <ArrowRight size={16} /></a>
          </div>
        </div>
        <p className="personality"><span aria-hidden="true">●</span>{personality}</p>
        <a className="scroll-cue" href="#about"><span>เลื่อนลง</span><ArrowDown size={17} /></a>
      </section>

      <section id="about" className="about scene" aria-labelledby="about-title">
        <div className="content-shell about-grid">
          <div className="section-number">01 / รู้จักกันก่อน</div>
          <div className="about-copy reveal-copy">
            <p className="eyebrow">รู้จัก N.O.</p>
            <h2 id="about-title">เริ่มจากลอง<br />แล้วก็ยังลองอยู่</h2>
            <p className="lead">ผมเป็น DJ หน้าใหม่ที่เรียนรู้ด้วยตัวเอง เริ่มจากลอง Mix เพลง ลองจัดเพลง ทำ Nonstop Mix แล้วค่อย ๆ หา Sound ที่เป็นตัวเอง</p>
            <p>จากวันแรกที่ฝึกอยู่กับ iPad กับ djay ตอนนี้เริ่มได้เล่นงานจริงแล้ว แต่ยังพัฒนาตัวเองอยู่ทุกวัน ยังฝึก ยังลอง และยังไปต่อ</p>
          </div>
          <figure className="about-portrait image-reveal">
            <img
              src={imageUrl('/images/no-performing.jpeg', 900)}
              srcSet={`${imageUrl('/images/no-performing.jpeg', 700)} 700w, ${imageUrl('/images/no-performing.jpeg', 1100)} 1100w`}
              sizes="(max-width: 800px) 88vw, 38vw"
              alt="DJ N.O. จะRunning กำลังเลือกและ Mix เพลง"
              loading="lazy"
            />
            <figcaption>เลือกเพลง · Mix เพลง · ลองใหม่</figcaption>
          </figure>
        </div>
      </section>

      <section id="sound" className="sound scene" aria-labelledby="sound-title">
        <div className="content-shell">
          <div className="sound-heading">
            <p className="eyebrow">ตอนนี้เปิดประมาณนี้</p>
            <h2 id="sound-title">ช่วงนี้ผม<br />เล่นอะไรบ้าง</h2>
          </div>
          <p className="sound-note">THAI / LAO REMIX คือแนวหลักที่เล่นตอนนี้ ส่วน HIP-HOP · R&amp;B · EDM · OPEN FORMAT คือแนวที่กำลังเรียนรู้และลองเล่น ไม่ใช่แนวที่เชี่ยวชาญ</p>
          <div className="genre-list">
            {genres.map((genre, index) => (
              <div className={`genre-row ${genre.main ? '' : 'genre-row--exploring'}`} key={genre.name}>
                <span className="genre-index">0{index + 1}</span>
                <h3>{genre.name}{!genre.main && <small>EXPLORING</small>}</h3>
                <p>{genre.note}</p>
                <span className="genre-pulse" aria-hidden="true" />
              </div>
            ))}
          </div>
          <p className="sound-note sound-note--after">แนวที่กำลังเรียนรู้ (Exploring) คือแนวที่ผมกำลังฝึกและหัดเล่นเพิ่ม ยังไม่ใช่ของหลัก</p>
        </div>
      </section>

      <section id="live" className="live scene" aria-labelledby="live-title">
        <div className="content-shell live-grid">
          <figure className="live-visual image-reveal">
            <img
              src={imageUrl('/images/no-performing.jpeg', 1100)}
              srcSet={`${imageUrl('/images/no-performing.jpeg', 700)} 700w, ${imageUrl('/images/no-performing.jpeg', 1300)} 1300w`}
              sizes="(max-width: 800px) 92vw, 52vw"
              alt="DJ N.O. จะRunning กำลังเล่นเพลงจริงหน้างานด้วย Hercules DJControl Inpulse 500"
              loading="lazy"
            />
            <figcaption>เล่นจริง · หน้างานจริง</figcaption>
          </figure>
          <div className="live-copy reveal-copy">
            <p className="eyebrow">ผลงาน DJ</p>
            <h2 id="live-title">เล่นจริง<br />หน้างานจริง</h2>
            <p className="live-lead">รับเล่นงานจริงแล้ว ทั้งงานเล็กและงานกลาง อ่านห้อง เลือกเพลงให้เข้ากับบรรยากาศของแต่ละงาน</p>
            <ul className="live-events" aria-label="ประเภทงานที่รองรับ">
              {liveEvents.map((event) => (
                <li key={event}>{event}</li>
              ))}
            </ul>
            <a href="#contact" className="button button--primary">Book N.O. <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="mixes" className="mixes scene" aria-labelledby="mixes-title">
        <div className="mixes-intro content-shell">
          <p className="eyebrow">เปิดฟังได้จริง</p>
          <h2 id="mixes-title">ผลงาน Mix</h2>
          <p>มี Mix อยู่ข้างล่าง เลือกอันที่อยากฟังแล้วกด Play ได้เลย</p>
        </div>
        <div className="mix-stack content-shell">
          {mixes.map((mix, index) => (
            <article className="mix-card" key={mix.id}>
              <div className="mix-art image-reveal">
                <img
                  src={imageUrl(mix.artwork, 900)}
                  srcSet={`${imageUrl(mix.artwork, 600)} 600w, ${imageUrl(mix.artwork, 1000)} 1000w`}
                  sizes="(max-width: 800px) 92vw, 45vw"
                  alt={`Artwork สำหรับ ${mix.title}`}
                  loading="lazy"
                />
                <span>0{index + 1}</span>
              </div>
              <div className="mix-info">
                <p className="eyebrow">{mix.type}</p>
                <h3>{mix.title}</h3>
                <p>{mix.description}</p>
                <MediaEmbed kind="mixcloud" title={mix.title} url={mix.url} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="video" className="video-section scene" aria-labelledby="video-title">
        <div className="content-shell video-heading">
          <div><p className="eyebrow">กดดูได้ ไม่เปิดเอง</p><h2 id="video-title">วิดีโอ</h2></div>
          <p>ไม่ช้าไม่เร็ว<br />แต่มั่วแน่ EP.1</p>
        </div>
        <div className="cinema-frame content-shell">
          <div className="cinema-top"><span>DJ N.O. จะRunning</span><span>PLAY / 01</span></div>
          <MediaEmbed kind="youtube" title={video.title} url={video.url} videoId={video.id} thumbnail={video.thumbnail} />
        </div>
      </section>

      <section id="journey" className="journey scene" aria-labelledby="journey-title">
        <div className="content-shell journey-grid">
          <div className="journey-heading">
            <p className="eyebrow">ไม่ได้รีบ แต่ไม่หยุด</p>
            <h2 id="journey-title">เส้นทาง<br />ของ N.O.</h2>
            <p>เริ่มจากของที่มี แล้วค่อย ๆ ไปทีละจังหวะ</p>
          </div>
          <ol className="timeline">
            {journey.map((item, index) => (
              <li key={item}>
                <span className="timeline-dot" />
                <small>{String(index + 1).padStart(2, '0')}</small>
                <strong>{item}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="setup scene" aria-labelledby="setup-title">
        <div className="content-shell setup-grid">
          <div className="setup-visual image-reveal">
            <img
              src={imageUrl('/images/no-performing.jpeg', 1300)}
              alt="Hercules DJControl Inpulse 500, iPad และ djay ที่ DJ N.O. จะRunning ใช้ฝึก Mix"
              loading="lazy"
            />
          </div>
          <div className="setup-copy">
            <p className="eyebrow">ชุดที่ใช้</p>
            <h2 id="setup-title">ของที่อยู่<br />ในทุกการฝึก</h2>
            <ul>
              <li><span>01</span>Hercules DJControl Inpulse 500</li>
              <li><span>02</span>iPad</li>
              <li><span>03</span>djay</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery scene" aria-labelledby="gallery-title">
        <div className="content-shell gallery-title-row">
          <div><p className="eyebrow">ภาพจริงระหว่างทาง</p><h2 id="gallery-title">แกลเลอรี</h2></div>
          <p>ผลงาน DJ จริงก่อน แล้วตามด้วย Artwork<br />รองรับรูปชุดใหม่เร็ว ๆ นี้</p>
        </div>
        <div className="gallery-stage content-shell">
          {gallery.map((image, index) => (
            <figure className={`gallery-item gallery-item--${index + 1} image-reveal`} key={image.src}>
              <img
                src={imageUrl(image.src, index === 0 ? 1200 : 900)}
                alt={image.alt}
                loading="lazy"
              />
              <figcaption><span>0{index + 1}</span>{image.category}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="contact" className="contact scene" aria-labelledby="contact-title">
        <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="content-shell contact-inner">
          <p className="eyebrow">Booking / คุยกันได้เลย</p>
          <h2 id="contact-title">ติดต่อ N.O.</h2>
          <p className="contact-lead">มีงานหรืออยากติดต่อ N.O. ทักมาได้เลย</p>
          <ul className="booking-list" aria-label="ข้อมูลการจอง">
            <li><span>{booking.based}</span>ตั้งอยู่ที่ประเทศไทย</li>
            <li><span>TH &amp; LAOS</span>{booking.coverage}</li>
            <li><span>งานที่รับ</span>Pub · Birthday · Event · Banquet · Social Gathering</li>
          </ul>
          <div className="contact-person"><span>{artist.contactName}</span><a href={`tel:${artist.phone}`}>{artist.phone}</a></div>
          <a className="button button--call" href={`tel:${artist.phone}`}><Phone size={18} />{booking.cta}</a>
          <div className="social-links" aria-label="Social ของ DJ N.O. จะRunning">
            <a href={artist.social.facebook} target="_blank" rel="noreferrer">Facebook <ExternalLink size={13} /></a>
            <a href={artist.social.instagram} target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram <ExternalLink size={13} /></a>
            <a href={artist.social.tiktok} target="_blank" rel="noreferrer">TikTok <ExternalLink size={13} /></a>
            <a href={artist.social.youtube} target="_blank" rel="noreferrer">YouTube <ExternalLink size={13} /></a>
            <a href={artist.social.mixcloud} target="_blank" rel="noreferrer"><Music2 size={15} /> Mixcloud <ExternalLink size={13} /></a>
          </div>
          <div className="contact-signoff"><span>DJ N.O.</span><span className="running-word">จะRunning</span></div>
          <p className="still-running">ยัง Running อยู่</p>
        </div>
      </section>

      <footer><span>DJ N.O. จะRunning</span><span>เอ็นโอจะรันนิ่ง</span><a href="#home">กลับขึ้นบน ↑</a></footer>
    </main>
  )
}
