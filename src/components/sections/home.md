<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Wendy Nieto — Tech Sales Specialist</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@1,300;1,400;1,600&family=Space+Mono:ital@0;1&display=swap" rel="stylesheet">
<style>
:root {
  --navy-deep:    #050d1a;
  --navy-mid:     #071628;
  --navy-light:   #0d2040;
  --navy-glow:    #0f2d4a;
  --mint:         #5effd8;
  --mint-soft:    #a8fce8;
  --mint-dim:     rgba(94,255,216,0.15);
  --rose:         #e040a0;
  --rose-soft:    #f472d0;
  --purple:       #b44fdf;
  --purple-soft:  #d08ef8;
  --gradient-main: linear-gradient(135deg, var(--rose) 0%, var(--purple) 100%);
  --gradient-mint: linear-gradient(135deg, var(--mint) 0%, #00c9a7 100%);
  --glass-bg:     rgba(13,32,64,0.45);
  --glass-border: rgba(94,255,216,0.15);
  --glass-rose:   rgba(228,64,160,0.12);
  --text-main:    #e8f0ff;
  --text-muted:   rgba(180,200,240,0.55);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  background: var(--navy-deep);
  color: var(--text-main);
  font-family: 'Outfit', sans-serif;
  overflow-x: hidden;
  min-height: 100vh;
}

/* ── BACKGROUND ATMOSPHERE ── */
.bg-atmosphere {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.35;
}
.orb-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, #b44fdf 0%, transparent 70%);
  top: -150px; right: -100px;
  animation: orbDrift 14s ease-in-out infinite alternate;
}
.orb-2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, #e040a0 0%, transparent 70%);
  bottom: 10%; left: -120px;
  animation: orbDrift 18s ease-in-out infinite alternate-reverse;
}
.orb-3 {
  width: 350px; height: 350px;
  background: radial-gradient(circle, #5effd8 0%, transparent 70%);
  top: 40%; left: 40%;
  opacity: 0.18;
  animation: orbDrift 10s ease-in-out infinite alternate;
}
@keyframes orbDrift {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(40px, 30px) scale(1.08); }
}

/* Mesh grid */
.mesh-grid {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(94,255,216,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(94,255,216,0.04) 1px, transparent 1px);
  background-size: 72px 72px;
}

/* ── NAV ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 64px;
  background: rgba(5,13,26,0.7);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(94,255,216,0.08);
}
.nav-brand {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.nav-name {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.nav-role {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.3em;
  color: var(--mint);
  text-transform: uppercase;
  opacity: 0.8;
}
.nav-links {
  display: flex;
  gap: 40px;
  list-style: none;
}
.nav-links a {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 1px;
  background: var(--gradient-mint);
  transition: width 0.3s;
}
.nav-links a:hover { color: var(--mint); }
.nav-links a:hover::after { width: 100%; }

.nav-cta {
  background: var(--gradient-main);
  color: #fff;
  padding: 10px 28px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.3s, transform 0.3s;
  box-shadow: 0 0 24px rgba(180,79,223,0.4);
}
.nav-cta:hover { opacity: 0.9; transform: translateY(-1px); }

/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 120px 64px 80px;
  gap: 60px;
}

/* Left */
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 18px 6px 8px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 100px;
  backdrop-filter: blur(16px);
  margin-bottom: 32px;
  opacity: 0;
  animation: slideUp 0.7s ease 0.2s forwards;
}
.eyebrow-dot {
  width: 8px; height: 8px;
  background: var(--mint);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--mint);
  animation: pulse 2s ease infinite;
}
@keyframes pulse {
  0%,100% { box-shadow: 0 0 8px var(--mint); }
  50% { box-shadow: 0 0 20px var(--mint), 0 0 40px rgba(94,255,216,0.3); }
}
.eyebrow-text {
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.25em;
  color: var(--mint);
  text-transform: uppercase;
}

.hero-h1 {
  font-size: clamp(48px, 5.5vw, 82px);
  font-weight: 900;
  line-height: 1.0;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
  opacity: 0;
  animation: slideUp 0.8s ease 0.4s forwards;
}
.hero-h1 .line-plain { display: block; color: var(--text-main); }
.hero-h1 .line-italic {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 300;
  font-size: clamp(54px, 6.5vw, 96px);
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}
.hero-h1 .line-accent {
  display: block;
  background: var(--gradient-mint);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 16px;
  line-height: 1.85;
  color: var(--text-muted);
  max-width: 460px;
  margin-bottom: 44px;
  font-weight: 400;
  opacity: 0;
  animation: slideUp 0.8s ease 0.6s forwards;
}
.hero-desc strong { color: var(--mint-soft); font-weight: 600; }

.hero-btns {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  opacity: 0;
  animation: slideUp 0.8s ease 0.8s forwards;
}
.btn-glow {
  padding: 15px 36px;
  background: var(--gradient-main);
  color: #fff;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.03em;
  box-shadow: 0 8px 32px rgba(180,79,223,0.45), 0 0 0 0 rgba(180,79,223,0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}
.btn-glow:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 48px rgba(180,79,223,0.6), 0 0 0 6px rgba(180,79,223,0.1);
}
.btn-ghost {
  padding: 15px 36px;
  background: var(--glass-bg);
  color: var(--mint);
  border: 1px solid var(--glass-border);
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  backdrop-filter: blur(12px);
  transition: background 0.3s, transform 0.3s, border-color 0.3s;
}
.btn-ghost:hover {
  background: rgba(94,255,216,0.1);
  border-color: var(--mint);
  transform: translateY(-3px);
}

/* Stats row */
.hero-stats {
  display: flex;
  gap: 0;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid rgba(94,255,216,0.1);
  opacity: 0;
  animation: slideUp 0.8s ease 1s forwards;
}
.stat-item {
  flex: 1;
  padding-right: 32px;
  border-right: 1px solid rgba(94,255,216,0.1);
}
.stat-item:last-child { border-right: none; padding-right: 0; padding-left: 32px; }
.stat-item:not(:first-child) { padding-left: 32px; }
.stat-num {
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -0.04em;
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
}
.stat-label {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.18em;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-top: 6px;
  display: block;
}

/* ── HERO RIGHT — VISUAL ── */
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 560px;
  opacity: 0;
  animation: fadeIn 1.2s ease 0.5s forwards;
}

/* Main glass card */
.profile-glass {
  width: 300px;
  background: var(--glass-bg);
  border: 1px solid rgba(180,79,223,0.3);
  border-radius: 28px;
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  padding: 40px 32px;
  text-align: center;
  position: relative;
  z-index: 5;
  box-shadow:
    0 0 0 1px rgba(94,255,216,0.08) inset,
    0 32px 80px rgba(5,13,26,0.6),
    0 0 60px rgba(180,79,223,0.15);
}
.profile-glass::before {
  content: '';
  position: absolute;
  top: 0; left: 20%; right: 20%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(94,255,216,0.5), transparent);
}

.profile-avatar {
  width: 90px; height: 90px;
  border-radius: 50%;
  background: var(--gradient-main);
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  position: relative;
  box-shadow: 0 0 40px rgba(180,79,223,0.5);
}
.profile-avatar::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 1.5px solid transparent;
  background: var(--gradient-main) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: rotateBorder 4s linear infinite;
}
@keyframes rotateBorder {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.profile-name {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #fff;
}
.profile-title {
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--mint);
  text-transform: uppercase;
  margin-top: 6px;
  opacity: 0.9;
}

.profile-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(94,255,216,0.2), transparent);
  margin: 24px 0;
}

.profile-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}
.skill-pill {
  padding: 5px 14px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.skill-pill.mint {
  background: rgba(94,255,216,0.1);
  border: 1px solid rgba(94,255,216,0.25);
  color: var(--mint);
}
.skill-pill.rose {
  background: rgba(228,64,160,0.1);
  border: 1px solid rgba(228,64,160,0.25);
  color: var(--rose-soft);
}
.skill-pill.purple {
  background: rgba(180,79,223,0.1);
  border: 1px solid rgba(180,79,223,0.25);
  color: var(--purple-soft);
}

/* Floating micro cards */
.micro-card {
  position: absolute;
  background: rgba(13,32,64,0.6);
  border-radius: 16px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 16px 20px;
  z-index: 6;
}
.mc-1 {
  top: 40px; right: -20px;
  border: 1px solid rgba(94,255,216,0.2);
  animation: floatA 5s ease-in-out infinite;
}
.mc-2 {
  bottom: 60px; left: -30px;
  border: 1px solid rgba(228,64,160,0.2);
  animation: floatB 6s ease-in-out infinite;
}
.mc-3 {
  top: 50%; right: -50px;
  transform: translateY(-50%);
  border: 1px solid rgba(180,79,223,0.2);
  animation: floatA 7s ease-in-out infinite reverse;
}
@keyframes floatA {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}
@keyframes floatB {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.mc-label {
  font-family: 'Space Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.2em;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 4px;
}
.mc-val {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
}
.mc-val.mint { color: var(--mint); }
.mc-val.rose { color: var(--rose-soft); }
.mc-val.purple { color: var(--purple-soft); }
.mc-sub {
  font-size: 10px;
  color: var(--text-muted);
  margin-top: 2px;
}

/* Decorative ring */
.deco-ring {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.ring-a {
  width: 460px; height: 460px;
  border: 1px solid rgba(180,79,223,0.12);
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  animation: spinSlow 40s linear infinite;
}
.ring-b {
  width: 360px; height: 360px;
  border: 1px solid rgba(94,255,216,0.08);
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  animation: spinSlow 28s linear infinite reverse;
}
@keyframes spinSlow {
  from { transform: translate(-50%,-50%) rotate(0deg); }
  to   { transform: translate(-50%,-50%) rotate(360deg); }
}

/* ── SERVICES ── */
.services {
  padding: 120px 64px;
  position: relative;
  z-index: 1;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 64px;
  gap: 40px;
  flex-wrap: wrap;
}
.section-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.3em;
  color: var(--mint);
  text-transform: uppercase;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.section-eyebrow::before {
  content: '';
  width: 24px; height: 1px;
  background: var(--mint);
}
.section-title {
  font-size: clamp(34px, 3.8vw, 58px);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
}
.section-title em {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 300;
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.section-sub {
  max-width: 340px;
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-muted);
  text-align: right;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.s-card {
  background: var(--glass-bg);
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  padding: 40px 32px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  transition: transform 0.4s, border-color 0.4s, box-shadow 0.4s;
  cursor: default;
}
.s-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(94,255,216,0.3), transparent);
  opacity: 0;
  transition: opacity 0.4s;
}
.s-card:hover::before { opacity: 1; }
.s-card:hover {
  transform: translateY(-6px);
  border-color: rgba(94,255,216,0.25);
  box-shadow: 0 24px 60px rgba(5,13,26,0.5), 0 0 40px rgba(94,255,216,0.06);
}
.s-card:nth-child(even):hover {
  border-color: rgba(228,64,160,0.25);
  box-shadow: 0 24px 60px rgba(5,13,26,0.5), 0 0 40px rgba(228,64,160,0.06);
}

/* Mirror/shine effect */
.s-card::after {
  content: '';
  position: absolute;
  top: -60%; left: -60%;
  width: 60%; height: 60%;
  background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%);
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.4s;
}

.s-num {
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  color: var(--text-muted);
  margin-bottom: 28px;
}
.s-icon {
  font-size: 36px;
  margin-bottom: 20px;
  display: block;
  filter: drop-shadow(0 0 12px rgba(94,255,216,0.3));
}
.s-name {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
  color: #fff;
}
.s-desc {
  font-size: 13.5px;
  line-height: 1.85;
  color: var(--text-muted);
  font-weight: 400;
}
.s-tag {
  display: inline-block;
  margin-top: 24px;
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 100px;
}
.s-tag.mint {
  color: var(--mint);
  background: rgba(94,255,216,0.08);
  border: 1px solid rgba(94,255,216,0.2);
}
.s-tag.rose {
  color: var(--rose-soft);
  background: rgba(228,64,160,0.08);
  border: 1px solid rgba(228,64,160,0.2);
}
.s-tag.purple {
  color: var(--purple-soft);
  background: rgba(180,79,223,0.08);
  border: 1px solid rgba(180,79,223,0.2);
}

/* ── MARQUEE ── */
.marquee-section {
  padding: 40px 0;
  overflow: hidden;
  border-top: 1px solid rgba(94,255,216,0.07);
  border-bottom: 1px solid rgba(94,255,216,0.07);
  position: relative;
  z-index: 1;
}
.marquee-track {
  display: flex;
  gap: 60px;
  animation: marqueeScroll 20s linear infinite;
  width: max-content;
}
.marquee-item {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  white-space: nowrap;
}
.marquee-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.marquee-dot.mint { background: var(--mint); box-shadow: 0 0 8px var(--mint); }
.marquee-dot.rose { background: var(--rose-soft); box-shadow: 0 0 8px var(--rose-soft); }
.marquee-dot.purple { background: var(--purple-soft); box-shadow: 0 0 8px var(--purple-soft); }
@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ── CTA SECTION ── */
.cta-section {
  margin: 80px 64px;
  position: relative;
  z-index: 1;
  border-radius: 28px;
  overflow: hidden;
}
.cta-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(180,79,223,0.25) 0%, rgba(228,64,160,0.2) 50%, rgba(94,255,216,0.1) 100%);
  backdrop-filter: blur(40px);
}
.cta-border {
  position: absolute;
  inset: 0;
  border-radius: 28px;
  border: 1px solid rgba(180,79,223,0.3);
  pointer-events: none;
}
.cta-border::before {
  content: '';
  position: absolute;
  top: 0; left: 15%; right: 15%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(228,64,160,0.7), transparent);
}
.cta-content {
  position: relative;
  z-index: 2;
  padding: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  flex-wrap: wrap;
}
.cta-left h2 {
  font-size: clamp(32px, 3.5vw, 52px);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.1;
  color: #fff;
}
.cta-left h2 em {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 300;
  background: var(--gradient-mint);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.cta-left p {
  margin-top: 16px;
  font-size: 15px;
  color: rgba(232,240,255,0.65);
  line-height: 1.8;
  max-width: 380px;
}
.cta-right {
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
}
.cta-email {
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  color: var(--mint);
  letter-spacing: 0.05em;
  opacity: 0.8;
}

/* ── FOOTER ── */
footer {
  padding: 44px 64px;
  border-top: 1px solid rgba(94,255,216,0.07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
  gap: 20px;
}
.footer-brand {
  font-size: 15px;
  font-weight: 700;
}
.footer-brand span {
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.footer-copy {
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  margin-top: 4px;
}
.footer-links {
  display: flex;
  gap: 32px;
}
.footer-links a {
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s;
}
.footer-links a:hover { color: var(--mint); }

/* ── ANIMATIONS ── */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── RESPONSIVE ── */
@media (max-width: 960px) {
  nav { padding: 20px 30px; }
  .nav-links { display: none; }
  .hero { grid-template-columns: 1fr; padding: 100px 30px 60px; }
  .hero-visual { display: none; }
  .services { padding: 80px 30px; }
  .services-grid { grid-template-columns: 1fr; }
  .section-sub { text-align: left; }
  .cta-section { margin: 60px 30px; }
  .cta-content { padding: 48px 32px; }
  footer { padding: 36px 30px; }
}
</style>
</head>
<body>

<!-- Background atmosphere -->
<div class="bg-atmosphere">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>
</div>
<div class="mesh-grid"></div>

<!-- NAV -->
<nav>
  <div class="nav-brand">
    <div class="nav-name">Wendy Nieto</div>
    <div class="nav-role">Tech Sales Specialist</div>
  </div>
  <ul class="nav-links">
    <li><a href="#services">Servicios</a></li>
    <li><a href="#about">Sobre mí</a></li>
    <li><a href="#contact">Contacto</a></li>
  </ul>
  <a href="#contact" class="nav-cta">Agendar llamada</a>
</nav>

<!-- HERO -->
<section class="hero">
  <!-- Left -->
  <div class="hero-left">
    <div class="hero-eyebrow">
      <span class="eyebrow-dot"></span>
      <span class="eyebrow-text">Disponible para proyectos</span>
    </div>
    <h1 class="hero-h1">
      <span class="line-plain">Especialista en</span>
      <span class="line-italic">Tech Sales</span>
      <span class="line-accent">que cierra deals.</span>
    </h1>
    <p class="hero-desc">
      Hola, soy <strong>Wendy Nieto</strong>. Ayudo a empresas tech a escalar su revenue con estrategia consultiva, pipelines sólidos y relaciones que duran. No solo vendo — <strong>construyo.</strong>
    </p>
    <div class="hero-btns">
      <a href="#contact" class="btn-glow">Trabajemos juntos →</a>
      <a href="#services" class="btn-ghost">Ver servicios</a>
    </div>
    <div class="hero-stats">
      <div class="stat-item">
        <span class="stat-num">+$5M</span>
        <span class="stat-label">Deals cerrados</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">120%</span>
        <span class="stat-label">Quota achieved</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">8+ yrs</span>
        <span class="stat-label">En tech sales</span>
      </div>
    </div>
  </div>

  <!-- Right visual -->
  <div class="hero-visual">
    <div class="deco-ring ring-a"></div>
    <div class="deco-ring ring-b"></div>

    <!-- Profile glass card -->
    <div class="profile-glass">
      <div class="profile-avatar">👩‍💼</div>
      <div class="profile-name">Wendy Nieto</div>
      <div class="profile-title">Tech Sales · LATAM & USA</div>
      <div class="profile-divider"></div>
      <div class="profile-skills">
        <span class="skill-pill mint">SaaS</span>
        <span class="skill-pill rose">Enterprise</span>
        <span class="skill-pill purple">B2B</span>
        <span class="skill-pill mint">Pipeline</span>
        <span class="skill-pill rose">RevOps</span>
        <span class="skill-pill purple">GTM</span>
      </div>
    </div>

    <!-- Micro floating cards -->
    <div class="micro-card mc-1">
      <div class="mc-label">Win Rate</div>
      <div class="mc-val mint">67%</div>
      <div class="mc-sub">Industry avg 21%</div>
    </div>
    <div class="micro-card mc-2">
      <div class="mc-label">Pipeline activo</div>
      <div class="mc-val rose">$2.4M</div>
      <div class="mc-sub">↑ 34% vs Q anterior</div>
    </div>
    <div class="micro-card mc-3">
      <div class="mc-label">Avg Deal</div>
      <div class="mc-val purple">$85K</div>
      <div class="mc-sub">Enterprise focus</div>
    </div>
  </div>
</section>

<!-- MARQUEE -->
<div class="marquee-section">
  <div class="marquee-track">
    <!-- Duplicated for seamless loop -->
    <div class="marquee-item"><span class="marquee-dot mint"></span>Sales Strategy</div>
    <div class="marquee-item"><span class="marquee-dot rose"></span>Pipeline Development</div>
    <div class="marquee-item"><span class="marquee-dot purple"></span>Enterprise Deals</div>
    <div class="marquee-item"><span class="marquee-dot mint"></span>GTM Planning</div>
    <div class="marquee-item"><span class="marquee-dot rose"></span>RevOps</div>
    <div class="marquee-item"><span class="marquee-dot purple"></span>Sales Coaching</div>
    <div class="marquee-item"><span class="marquee-dot mint"></span>LATAM & USA</div>
    <div class="marquee-item"><span class="marquee-dot rose"></span>SaaS & Tech</div>
    <div class="marquee-item"><span class="marquee-dot mint"></span>Sales Strategy</div>
    <div class="marquee-item"><span class="marquee-dot rose"></span>Pipeline Development</div>
    <div class="marquee-item"><span class="marquee-dot purple"></span>Enterprise Deals</div>
    <div class="marquee-item"><span class="marquee-dot mint"></span>GTM Planning</div>
    <div class="marquee-item"><span class="marquee-dot rose"></span>RevOps</div>
    <div class="marquee-item"><span class="marquee-dot purple"></span>Sales Coaching</div>
    <div class="marquee-item"><span class="marquee-dot mint"></span>LATAM & USA</div>
    <div class="marquee-item"><span class="marquee-dot rose"></span>SaaS & Tech</div>
  </div>
</div>

<!-- SERVICES -->
<section class="services" id="services">
  <div class="section-header">
    <div>
      <div class="section-eyebrow">Servicios</div>
      <h2 class="section-title">Lo que puedo hacer<br>por tu <em>negocio</em></h2>
    </div>
    <p class="section-sub">Estrategia de ventas tech con enfoque consultivo, orientada a resultados reales y escalables.</p>
  </div>
  <div class="services-grid">
    <div class="s-card reveal">
      <div class="s-num">01</div>
      <span class="s-icon">🎯</span>
      <div class="s-name">Sales Strategy</div>
      <p class="s-desc">Diseño de procesos end-to-end desde prospección hasta cierre. Metodologías consultivas para productos tech B2B y SaaS.</p>
      <span class="s-tag mint">Estrategia</span>
    </div>
    <div class="s-card reveal">
      <div class="s-num">02</div>
      <span class="s-icon">🚀</span>
      <div class="s-name">Pipeline Development</div>
      <p class="s-desc">Construcción y optimización de pipelines de alta conversión. ICP definition, qualification frameworks y deal acceleration.</p>
      <span class="s-tag rose">Crecimiento</span>
    </div>
    <div class="s-card reveal">
      <div class="s-num">03</div>
      <span class="s-icon">🤝</span>
      <div class="s-name">Enterprise Partnerships</div>
      <p class="s-desc">Relaciones estratégicas con C-suite. Negociaciones complejas con múltiples stakeholders y ciclos largos de venta.</p>
      <span class="s-tag purple">Enterprise</span>
    </div>
    <div class="s-card reveal">
      <div class="s-num">04</div>
      <span class="s-icon">📊</span>
      <div class="s-name">Sales Coaching</div>
      <p class="s-desc">Entrenamiento de equipos: objection handling, discovery calls efectivas y demos de alto impacto que cierran.</p>
      <span class="s-tag mint">Coaching</span>
    </div>
    <div class="s-card reveal">
      <div class="s-num">05</div>
      <span class="s-icon">⚙️</span>
      <div class="s-name">RevOps Consulting</div>
      <p class="s-desc">Optimización de tu stack de ventas: CRM, automatización, analytics y enablement para escalar revenue de forma sostenida.</p>
      <span class="s-tag rose">RevOps</span>
    </div>
    <div class="s-card reveal">
      <div class="s-num">06</div>
      <span class="s-icon">🌐</span>
      <div class="s-name">GTM Strategy</div>
      <p class="s-desc">Go-to-market para productos tech. Segmentación, positioning, pricing y expansión a nuevos mercados en LATAM y USA.</p>
      <span class="s-tag purple">GTM</span>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section" id="contact">
  <div class="cta-bg"></div>
  <div class="cta-border"></div>
  <div class="cta-content">
    <div class="cta-left">
      <h2>¿Lista para cerrar<br>tu próximo <em>big deal?</em></h2>
      <p>Conversemos sobre cómo escalar tus ventas tech, construir un pipeline ganador y superar tus objetivos de revenue este año.</p>
    </div>
    <div class="cta-right">
      <div class="cta-email">wendy@wendynieto.com</div>
      <a href="mailto:wendy@wendynieto.com" class="btn-glow">Agendar llamada →</a>
      <a href="#" class="btn-ghost">Ver LinkedIn</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div>
    <div class="footer-brand"><span>Wendy Nieto</span> — Tech Sales</div>
    <div class="footer-copy">© 2025 · Ciudad de México · LATAM & USA</div>
  </div>
  <div class="footer-links">
    <a href="#">LinkedIn</a>
    <a href="#">Twitter</a>
    <a href="#">Calendly</a>
    <a href="#">Email</a>
  </div>
</footer>

<script>
// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = Array.from(el.parentElement.children).indexOf(el) * 90;
      setTimeout(() => el.classList.add('visible'), delay);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mirror/shine effect on cards
document.querySelectorAll('.s-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', `${x}%`);
    card.style.setProperty('--my', `${y}%`);
    const rx = (e.clientY - rect.top - rect.height / 2) / 18;
    const ry = -(e.clientX - rect.left - rect.width / 2) / 18;
    card.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
</script>
</body>
</html>