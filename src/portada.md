<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Wendy Sales — Tech Sales Strategist</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;0,700;1,300;1,600&family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root {
  --bg:    #060610;
  --em:    #c084fc;   /* purple */
  --em2:   #e879f9;   /* hot pink-purple */
  --teal:  #f472b6;   /* pink */
  --gold:  #818cf8;   /* indigo/blue */
  --gold2: #a5b4fc;   /* soft blue-lavender */
  --navy:  #1e1b4b;   /* deep navy */
  --text:  #f0eaff;
  --muted: rgba(240,234,255,0.45);
  --border: rgba(192,132,252,0.13);
  --glass: rgba(192,132,252,0.04);
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{
  background:var(--bg);
  background-image: radial-gradient(ellipse at 20% 0%, rgba(109,40,217,.18) 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 100%, rgba(30,27,75,.6) 0%, transparent 55%);
  color:var(--text);
  font-family:'Outfit',sans-serif;
  min-height:100vh;
  overflow-x:hidden;
  cursor:none;
}

/* ── CURSOR ── */
#cur{
  position:fixed;z-index:9999;pointer-events:none;
  width:10px;height:10px;
  background:var(--em);border-radius:50%;
  transform:translate(-50%,-50%);
  transition:width .25s,height .25s,background .25s;
  mix-blend-mode:screen;
}
#cur-ring{
  position:fixed;z-index:9998;pointer-events:none;
  width:32px;height:32px;
  border:1px solid rgba(192,132,252,.5);border-radius:50%;
  transform:translate(-50%,-50%);
  transition:all .15s ease;
}

/* ── GRID BG ── */
.grid-bg{
  position:fixed;inset:0;z-index:0;pointer-events:none;
  background-image:
    linear-gradient(rgba(192,132,252,.05) 1px,transparent 1px),
    linear-gradient(90deg,rgba(192,132,252,.05) 1px,transparent 1px);
  background-size:60px 60px;
  animation:gridPulse 8s ease-in-out infinite alternate;
}
@keyframes gridPulse{from{opacity:.55}to{opacity:1}}

.glow-tl{
  position:fixed;top:-250px;left:-250px;
  width:700px;height:700px;z-index:0;pointer-events:none;
  background:radial-gradient(circle,rgba(192,132,252,.2) 0%,transparent 65%);
  animation:glowDrift 11s ease-in-out infinite alternate;
}
.glow-br{
  position:fixed;bottom:-250px;right:-250px;
  width:750px;height:750px;z-index:0;pointer-events:none;
  background:radial-gradient(circle,rgba(244,114,182,.15) 0%,transparent 65%);
  animation:glowDrift 13s ease-in-out infinite alternate-reverse;
}
/* Extra navy glow center-right */
.glow-mid{
  position:fixed;top:30%;right:-100px;
  width:500px;height:500px;z-index:0;pointer-events:none;
  background:radial-gradient(circle,rgba(99,102,241,.13) 0%,transparent 65%);
  animation:glowDrift 9s ease-in-out infinite alternate;
}
@keyframes glowDrift{from{transform:translate(0,0)}to{transform:translate(40px,-40px)}}

.scanline{
  position:fixed;top:0;left:0;right:0;z-index:0;pointer-events:none;
  height:2px;
  background:linear-gradient(90deg,transparent,var(--em2),var(--teal),transparent);
  opacity:.13;animation:scanDown 7s linear infinite;
}
@keyframes scanDown{from{top:-4px}to{top:100vh}}

.noise{
  position:fixed;inset:0;z-index:1;pointer-events:none;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-size:160px;opacity:.28;
}

/* ── WRAP ── */
.wrap{position:relative;z-index:2;}

/* ── NAV ── */
nav{
  display:flex;align-items:center;justify-content:space-between;
  padding:24px 60px;
  border-bottom:1px solid rgba(192,132,252,.12);
  backdrop-filter:blur(18px);
  background:rgba(6,6,16,.7);
  position:sticky;top:0;z-index:200;
}
.logo-mark{display:flex;align-items:center;gap:12px;text-decoration:none;}
.logo-hex{width:34px;height:34px;position:relative;display:flex;align-items:center;justify-content:center;}
.logo-hex svg{position:absolute;}
.logo-text{font-family:'Space Mono',monospace;font-size:.88rem;font-weight:700;color:var(--em);letter-spacing:.06em;}
.nav-links{display:flex;gap:38px;list-style:none;}
.nav-links a{
  font-size:.75rem;color:var(--muted);text-decoration:none;
  letter-spacing:.07em;text-transform:uppercase;font-weight:500;
  font-family:'Space Mono',monospace;transition:color .2s;
}
.nav-links a:hover{color:var(--em);}
.nav-btn{
  padding:9px 22px;
  border:1px solid var(--em);
  background:rgba(16,185,129,.07);
  color:var(--em);font-family:'Space Mono',monospace;
  font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;
  text-decoration:none;cursor:none;
  clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
  transition:all .3s;
}
.nav-btn:hover{background:var(--em);color:var(--bg);box-shadow:0 0 26px rgba(16,185,129,.4);}

/* ── HERO SECTION ── */
.hero{
  padding:32px 60px 60px;
  min-height:calc(100vh - 77px);
  display:flex;flex-direction:column;
  position:relative;
}

/* Topbar */
.hero-topbar{
  display:flex;align-items:center;justify-content:space-between;
  margin-bottom:28px;
  font-family:'Space Mono',monospace;
  font-size:.62rem;color:var(--muted);letter-spacing:.1em;
  opacity:0;animation:fadeIn .6s ease .2s forwards;
}
.tbar-line{flex:1;height:1px;margin:0 18px;}
.tbar-line.l{background:linear-gradient(90deg,var(--em),transparent);}
.tbar-line.r{background:linear-gradient(90deg,transparent,var(--em));}

/* ── THE BIG MIRROR CARD ── */
.mirror-card{
  flex:1;
  border-radius:20px;
  border:1px solid rgba(192,132,252,.2);
  background:rgba(192,132,252,.028);
  backdrop-filter:blur(28px) saturate(1.5);
  position:relative;
  overflow:hidden;
  display:grid;
  grid-template-columns:1fr 1fr;
  min-height:580px;
  opacity:0;animation:cardReveal .9s cubic-bezier(.23,1,.32,1) .35s forwards;
}

@keyframes cardReveal{
  from{opacity:0;transform:translateY(30px) scale(.98);}
  to  {opacity:1;transform:translateY(0) scale(1);}
}

/* Outer glow */
.mirror-card::before{
  content:'';position:absolute;inset:0;border-radius:20px;pointer-events:none;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.07),
    inset 0 -1px 0 rgba(192,132,252,.1),
    0 0 80px rgba(192,132,252,.1),
    0 0 160px rgba(244,114,182,.06),
    0 40px 120px rgba(0,0,0,.6);
  z-index:2;
}

/* Top accent stripe */
.card-top-stripe{
  position:absolute;top:0;left:0;right:0;height:2px;z-index:3;
  background:linear-gradient(90deg,transparent 0%,var(--em) 25%,var(--em2) 50%,var(--teal) 75%,transparent 100%);
  animation:stripeShimmer 4s ease-in-out infinite;
}
@keyframes stripeShimmer{
  0%,100%{opacity:1;}
  50%{background:linear-gradient(90deg,transparent 0%,var(--teal) 25%,var(--gold2) 50%,var(--em) 75%,transparent 100%);}
}

/* Mirror sweep — continuous slow pass */
.card-mirror-sweep{
  position:absolute;top:0;left:-80%;
  width:40%;height:100%;z-index:3;pointer-events:none;
  background:linear-gradient(105deg,transparent 0%,rgba(255,255,255,.04) 50%,transparent 100%);
  transform:skewX(-12deg);
  animation:mirrorLoop 6s ease-in-out infinite;
}
@keyframes mirrorLoop{
  0%  {left:-80%;opacity:0;}
  10% {opacity:1;}
  90% {opacity:1;}
  100%{left:160%;opacity:0;}
}

/* Corner brackets */
.cbr{position:absolute;width:18px;height:18px;border-color:rgba(192,132,252,.35);border-style:solid;}
.cbr.tl{top:16px;left:16px;border-width:1px 0 0 1px;}
.cbr.tr{top:16px;right:16px;border-width:1px 1px 0 0;}
.cbr.bl{bottom:16px;left:16px;border-width:0 0 1px 1px;}
.cbr.br{bottom:16px;right:16px;border-width:0 1px 1px 0;}

/* Vertical divider */
.card-divider{
  position:absolute;top:10%;left:50%;bottom:10%;width:1px;
  background:linear-gradient(to bottom,transparent,rgba(192,132,252,.2) 30%,rgba(244,114,182,.2) 70%,transparent);
  z-index:3;
}

/* ── LEFT CONTENT ── */
.card-left{
  padding:52px 48px;
  display:flex;flex-direction:column;
  justify-content:center;
  position:relative;z-index:4;
}

.label-row{
  display:flex;align-items:center;gap:12px;margin-bottom:22px;
  opacity:0;animation:fadeUp .6s ease .7s forwards;
}
.label-badge{
  font-family:'Space Mono',monospace;
  font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;
  padding:5px 14px;
  border:1px solid rgba(192,132,252,.35);
  color:var(--em);
  clip-path:polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);
  background:rgba(192,132,252,.07);
}
.label-dot{width:5px;height:5px;border-radius:50%;background:var(--em2);animation:blink 1.8s infinite;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.15}}

/* Giant name */
.giant-name{
  font-family:'Cormorant Garamond',serif;
  font-weight:700;
  font-size:clamp(4.5rem,8vw,8rem);
  line-height:.88;
  letter-spacing:-.03em;
  margin-bottom:4px;
  position:relative;
  opacity:0;animation:fadeUp .8s ease .85s forwards;
}
.giant-name .w{
  display:block;
  background:linear-gradient(135deg,#fff 0%,var(--gold2) 35%,var(--em) 70%,var(--em2) 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  background-size:200%;
  animation:nameShimmer 5s ease infinite;
}
.giant-name .s{
  display:block;font-style:italic;
  background:linear-gradient(135deg,var(--teal) 0%,var(--em2) 50%,var(--em) 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
}
@keyframes nameShimmer{
  0%,100%{background-position:0% 50%}
  50%{background-position:100% 50%}
}

/* Ghost behind name */
.ghost{
  position:absolute;top:-6px;left:-3px;
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(4.5rem,8vw,8rem);font-weight:700;line-height:.88;letter-spacing:-.03em;
  -webkit-text-stroke:1px rgba(192,132,252,.07);color:transparent;
  user-select:none;pointer-events:none;z-index:-1;
}

.role-line{
  font-family:'Space Mono',monospace;
  font-size:clamp(.68rem,.9vw,.82rem);
  color:var(--muted);letter-spacing:.09em;text-transform:uppercase;
  margin-top:18px;margin-bottom:24px;
  opacity:0;animation:fadeUp .6s ease 1.05s forwards;
}
.role-line em{color:var(--teal);font-style:normal;}

.hero-desc{
  font-size:1rem;line-height:1.8;color:var(--muted);
  font-weight:300;max-width:430px;
  opacity:0;animation:fadeUp .6s ease 1.2s forwards;
}

/* CTA */
.cta-row{
  display:flex;align-items:center;gap:16px;margin-top:36px;flex-wrap:wrap;
  opacity:0;animation:fadeUp .6s ease 1.35s forwards;
}
.btn-em{
  display:inline-flex;align-items:center;gap:8px;
  padding:13px 30px;
  background:linear-gradient(135deg,var(--em),var(--em2),var(--teal));
  color:#fff;font-family:'Space Mono',monospace;
  font-size:.74rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;
  text-decoration:none;cursor:none;
  clip-path:polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%);
  transition:all .35s;
  box-shadow:0 8px 28px rgba(192,132,252,.35);
}
.btn-em:hover{transform:translateY(-3px);box-shadow:0 16px 44px rgba(232,121,249,.5);}
.btn-line{
  display:inline-flex;align-items:center;gap:8px;
  padding:12px 26px;
  border:1px solid rgba(165,180,252,.35);
  color:var(--gold2);font-family:'Space Mono',monospace;
  font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;
  text-decoration:none;cursor:none;
  clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
  transition:all .3s;background:rgba(165,180,252,.05);
}
.btn-line:hover{background:rgba(165,180,252,.12);border-color:var(--gold2);box-shadow:0 0 22px rgba(165,180,252,.25);}

/* Stats inside card */
.stats-bar{
  display:flex;gap:0;margin-top:40px;
  border:1px solid rgba(192,132,252,.13);
  background:rgba(192,132,252,.03);
  clip-path:polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%);
  opacity:0;animation:fadeUp .6s ease 1.5s forwards;
}
.stat-item{
  flex:1;padding:18px 22px;
  border-right:1px solid rgba(192,132,252,.1);
  position:relative;overflow:hidden;transition:background .3s;
}
.stat-item:last-child{border-right:none;}
.stat-item:hover{background:rgba(192,132,252,.06);}
.stat-item::before{
  content:'';position:absolute;top:0;left:0;right:0;height:1.5px;
  background:linear-gradient(90deg,var(--em),var(--teal),var(--gold));
  transform:scaleX(0);transform-origin:left;transition:transform .4s;
}
.stat-item:hover::before{transform:scaleX(1);}
.stat-num{
  font-family:'Cormorant Garamond',serif;
  font-size:2.2rem;font-weight:700;line-height:1;
  background:linear-gradient(135deg,var(--em2),var(--gold2),var(--teal));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
}
.stat-lbl{
  font-family:'Space Mono',monospace;
  font-size:.55rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em;margin-top:4px;
}

/* ── RIGHT — PHOTO ZONE ── */
.card-right{
  position:relative;z-index:4;
  display:flex;align-items:flex-end;justify-content:center;
  overflow:hidden;
  background:linear-gradient(135deg, rgba(109,40,217,.04) 0%, rgba(30,27,75,.08) 50%, rgba(244,114,182,.03) 100%);
}

.photo-zone{
  position:absolute;inset:0;
  display:flex;flex-direction:column;align-items:center;justify-content:flex-end;
}

.photo-floor{
  position:absolute;bottom:0;left:0;right:0;height:55%;
  background:linear-gradient(to top,rgba(192,132,252,.05) 0%,transparent 100%);
}

.photo-light{
  position:absolute;bottom:0;left:50%;transform:translateX(-50%);
  width:220px;height:90%;
  background:radial-gradient(ellipse at 50% 100%,rgba(192,132,252,.12) 0%,rgba(244,114,182,.06) 40%,transparent 70%);
  animation:lightBreath 4s ease-in-out infinite alternate;
}
@keyframes lightBreath{
  from{opacity:.7;transform:translateX(-50%) scaleX(1);}
  to  {opacity:1;transform:translateX(-50%) scaleX(1.08);}
}

.silhouette{
  position:absolute;bottom:0;left:50%;transform:translateX(-50%);
  width:200px;height:380px;
  opacity:.05;
}

.photo-tags{
  position:absolute;
  display:flex;flex-direction:column;gap:10px;
  opacity:0;animation:fadeUp .7s ease 1.6s forwards;
}
.photo-tags.left-tags{left:20px;bottom:80px;align-items:flex-start;}
.photo-tags.right-tags{right:20px;top:80px;align-items:flex-end;}

.ptag{
  font-family:'Space Mono',monospace;
  font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;
  padding:5px 12px;
  border:1px solid rgba(192,132,252,.25);
  color:rgba(192,132,252,.75);
  background:rgba(192,132,252,.07);
  backdrop-filter:blur(8px);
  clip-path:polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%);
  white-space:nowrap;
}
.ptag.alt{border-color:rgba(244,114,182,.25);color:rgba(244,114,182,.75);background:rgba(244,114,182,.07);}
.ptag.blue{border-color:rgba(165,180,252,.25);color:rgba(165,180,252,.75);background:rgba(165,180,252,.07);}

.photo-hint{
  position:absolute;bottom:32px;left:50%;transform:translateX(-50%);
  font-family:'Space Mono',monospace;
  font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;
  color:rgba(192,132,252,.2);
  white-space:nowrap;text-align:center;
  animation:hintPulse 3s ease-in-out infinite;
}
@keyframes hintPulse{0%,100%{opacity:.4}50%{opacity:.8}}

.photo-lines{
  position:absolute;inset:0;pointer-events:none;
  background:repeating-linear-gradient(
    0deg,
    transparent,transparent 3px,
    rgba(192,132,252,.01) 3px,rgba(192,132,252,.01) 4px
  );
}

.scroll-ind{
  position:absolute;bottom:28px;left:60px;
  display:flex;align-items:center;gap:12px;
  font-family:'Space Mono',monospace;
  font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);
  opacity:0;animation:fadeIn .6s ease 1.8s forwards;
}
.scroll-track{width:44px;height:1px;background:linear-gradient(90deg,var(--em),transparent);position:relative;overflow:hidden;}
.scroll-dot{position:absolute;top:-2px;left:-6px;width:5px;height:5px;border-radius:50%;background:var(--em2);animation:trackSlide 2s ease-in-out infinite;}
@keyframes trackSlide{0%{left:-6px;opacity:0}20%{opacity:1}100%{left:40px;opacity:0}}

/* ── ANIMATIONS ── */
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}

/* ── RESPONSIVE ── */
@media(max-width:900px){
  nav{padding:18px 20px;}
  .nav-links{display:none;}
  .hero{padding:20px 20px 60px;}
  .mirror-card{grid-template-columns:1fr;min-height:auto;}
  .card-right{display:none;}
  .card-divider{display:none;}
  .giant-name{font-size:4rem;}
}
</style>
</head>
<body>

<div id="cur"></div>
<div id="cur-ring"></div>

<div class="grid-bg"></div>
<div class="glow-tl"></div>
<div class="glow-br"></div>
<div class="glow-mid"></div>
<div class="scanline"></div>
<div class="noise"></div>

<div class="wrap">

  <!-- NAV -->
  <nav>
    <a class="logo-mark" href="#">
      <div class="logo-hex">
        <svg width="34" height="34" viewBox="0 0 34 34">
          <polygon points="17,2 31,10 31,24 17,32 3,24 3,10" fill="none" stroke="#c084fc" stroke-width="1.2" opacity=".7"/>
          <polygon points="17,7 26,12 26,22 17,27 8,22 8,12" fill="rgba(192,132,252,.09)" stroke="#c084fc" stroke-width=".6" opacity=".45"/>
        </svg>
      </div>
      <span class="logo-text">WS</span>
    </a>
    <ul class="nav-links">
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Casos</a></li>
      <li><a href="#">Recursos</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
    <a href="#" class="nav-btn">Agendar →</a>
  </nav>

  <!-- HERO -->
  <section class="hero">

    <div class="hero-topbar">
      <span>WENDY SALES · 2025</span>
      <div class="tbar-line l"></div>
      <span>TECH SALES STRATEGIST</span>
      <div class="tbar-line r"></div>
      <span>MDE · COL</span>
    </div>

    <!-- BIG MIRROR CARD -->
    <div class="mirror-card">

      <!-- Decorative elements on the card -->
      <div class="card-top-stripe"></div>
      <div class="card-mirror-sweep"></div>
      <div class="cbr tl"></div>
      <div class="cbr tr"></div>
      <div class="cbr bl"></div>
      <div class="cbr br"></div>
      <div class="card-divider"></div>

      <!-- LEFT: Text content -->
      <div class="card-left">

        <div class="label-row">
          <div class="label-badge">Especialista en Ventas Tech</div>
          <div class="label-dot"></div>
          <span style="font-family:'Space Mono',monospace;font-size:.58rem;color:var(--muted);letter-spacing:.1em;">DISPONIBLE · 2025</span>
        </div>

        <div class="giant-name">
          <div class="ghost" aria-hidden="true">Wendy<br>Sales</div>
          <span class="w">Wendy</span>
          <span class="s">Sales</span>
        </div>

        <div class="role-line">
          Estratega de Ventas &amp; <em>Tecnología</em> · Data · AI Tools
        </div>

        <p class="hero-desc">
          Asesoro equipos y empresas para escalar sus ventas con herramientas tecnológicas, automatización e inteligencia de datos. Transformo procesos comerciales en ventajas competitivas reales.
        </p>

        <div class="cta-row">
          <a href="#" class="btn-em">Trabajemos juntos ↗</a>
          <a href="#" class="btn-line">Ver portafolio ▸</a>
        </div>

        <div class="stats-bar">
          <div class="stat-item">
            <div class="stat-num">120+</div>
            <div class="stat-lbl">Empresas asesoradas</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">3×</div>
            <div class="stat-lbl">Crecimiento en ventas</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">8yr</div>
            <div class="stat-lbl">Experiencia Tech Sales</div>
          </div>
        </div>

      </div>

      <!-- RIGHT: Waiting for photo -->
      <div class="card-right">
        <div class="photo-zone">

          <!-- Horizontal scanlines texture -->
          <div class="photo-lines"></div>

          <!-- Soft spotlight on the floor -->
          <div class="photo-floor"></div>
          <div class="photo-light"></div>

          <!-- Silhouette SVG placeholder -->
          <svg class="silhouette" viewBox="0 0 200 380" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Head -->
            <ellipse cx="100" cy="52" rx="32" ry="36" fill="white"/>
            <!-- Neck -->
            <rect x="86" y="84" width="28" height="22" rx="6" fill="white"/>
            <!-- Shoulders & torso -->
            <path d="M30 140 Q60 104 100 106 Q140 104 170 140 L180 280 Q140 290 100 292 Q60 290 20 280 Z" fill="white"/>
            <!-- Arms -->
            <path d="M30 140 Q10 190 18 240 Q26 260 38 252 Q44 200 60 165" fill="white"/>
            <path d="M170 140 Q190 190 182 240 Q174 260 162 252 Q156 200 140 165" fill="white"/>
            <!-- Legs -->
            <path d="M60 292 Q55 330 52 380 L90 380 Q95 330 100 292" fill="white"/>
            <path d="M140 292 Q145 330 148 380 L110 380 Q105 330 100 292" fill="white"/>
          </svg>

          <!-- Floating tag chips -->
          <div class="photo-tags left-tags">
            <div class="ptag">Sales Strategy</div>
            <div class="ptag alt">AI Tools</div>
            <div class="ptag blue">Revenue Growth</div>
          </div>
          <div class="photo-tags right-tags">
            <div class="ptag blue">Data-Driven</div>
            <div class="ptag">CRM Expert</div>
            <div class="ptag alt">Tech Stack</div>
          </div>

          <!-- Photo placeholder hint -->
          <div class="photo-hint">[ tu foto aquí ]</div>

        </div>
      </div>

    </div>
    <!-- /mirror-card -->

    <div class="scroll-ind">
      <div class="scroll-track"><div class="scroll-dot"></div></div>
      <span>Scroll to explore</span>
    </div>

  </section>

</div>

<script>
// Cursor
const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function tick(){
  cur.style.left=mx+'px';cur.style.top=my+'px';
  rx+=(mx-rx)*.13;ry+=(my-ry)*.13;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(tick);
})();
document.querySelectorAll('a,.stat-item,.btn-em,.btn-line,.nav-btn').forEach(el=>{
  el.addEventListener('mouseenter',()=>{
    cur.style.width='18px';cur.style.height='18px';
    ring.style.width='48px';ring.style.height='48px';
    ring.style.borderColor='rgba(244,114,182,.65)';
  });
  el.addEventListener('mouseleave',()=>{
    cur.style.width='10px';cur.style.height='10px';
    ring.style.width='32px';ring.style.height='32px';
    ring.style.borderColor='rgba(192,132,252,.5)';
  });
});

// Parallax
document.addEventListener('mousemove',e=>{
  const cx=(e.clientX/window.innerWidth-.5)*20;
  const cy=(e.clientY/window.innerHeight-.5)*20;
  document.querySelector('.grid-bg').style.transform=`translate(${cx*.4}px,${cy*.4}px)`;
  document.querySelector('.glow-tl').style.transform=`translate(${cx*.6}px,${cy*.6}px)`;
  document.querySelector('.glow-br').style.transform=`translate(${-cx*.5}px,${-cy*.5}px)`;
  document.querySelector('.glow-mid').style.transform=`translate(${-cx*.3}px,${cy*.3}px)`;
  const card=document.querySelector('.mirror-card');
  card.style.transform=`perspective(1800px) rotateY(${cx*.012}deg) rotateX(${-cy*.008}deg)`;
});

// Counter
document.querySelectorAll('.stat-num').forEach(el=>{
  const text=el.textContent;
  const num=parseFloat(text.replace(/[^0-9.]/g,''));
  const suffix=text.replace(/[0-9.]/g,'');
  if(!num)return;
  let start=null;const dur=1400;
  const obs=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting){
      function step(ts){
        if(!start)start=ts;
        const p=Math.min((ts-start)/dur,1);
        const ease=1-Math.pow(1-p,3);
        el.textContent=(num<10?(num*ease).toFixed(1):Math.round(num*ease))+suffix;
        if(p<1)requestAnimationFrame(step);
      }
      requestAnimationFrame(step);obs.disconnect();
    }
  });
  obs.observe(el);
});
</script>
</body>
</html>