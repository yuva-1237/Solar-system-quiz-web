body {
    min-height: 100vh;
    width: 100vw;
    /* overflow: hidden;  REMOVE THIS LINE FOR MOBILE SCROLL */
    color: #fff;
    font-family: 'Segoe UI', Arial, sans-serif;
    text-align: center;
    background: linear-gradient(120deg, #0f2027 0%, #2c5364 100%) fixed;
    position: relative;
    letter-spacing: 0.02em;
}
html {
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
.solar-bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    z-index: 0;
    pointer-events: none;
}
/* Star field styles */
#stars {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    pointer-events: none;
    z-index: 0;
}
.star {
    position: absolute;
    background: white;
    border-radius: 50%;
    opacity: 0.7;
    width: 1.5px; height: 1.5px;
    box-shadow: 0 0 2px 1px #fff8;
    animation: twinkle 2s infinite alternate;
}
@keyframes twinkle { 0% { opacity: 0.6; } 100% { opacity: 1; } }

.solar-system-wrapper {
    position: fixed;
    left: 0; top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    pointer-events: none;
}
.solar-system {
    position: relative;
    width: 380px;
    height: 380px;
    max-width: 90vw;
    max-height: 90vw;
    aspect-ratio: 1/1;
    perspective: 1200px;
    margin: 0 auto;
    display: block;
    z-index: 2;
    pointer-events: none;
    filter: drop-shadow(0 0 24px #ffd70033);
}
.sun {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, #fffde0 60%, #ffd700 100%);
    border-radius: 50%;
    box-shadow:
        0 0 24px 12px #fffbe0,
        0 0 60px 25px #ffd700,
        0 0 120px 50px #ffdd66,
        0 0 250px 100px #ffe06633;
    transform: translate(-50%, -50%);
    z-index: 10;
    cursor: pointer;
    animation: sun-glow 2.2s infinite alternate;
}
@keyframes sun-glow {
    0% {
        box-shadow:
        0 0 24px 12px #fffbe0,
        0 0 60px 25px #ffd700,
        0 0 120px 50px #ffdd66,
        0 0 250px 100px #ffe06633;
    }
    100% {
        box-shadow:
        0 0 40px 28px #fffbe0,
        0 0 80px 35px #ffd700,
        0 0 180px 80px #ffdd66,
        0 0 280px 140px #ffe06633;
    }
}
.orbit {
    position: absolute;
    left: 50%;
    top: 50%;
    border: 2px solid rgba(255,255,255,0.27);
    border-style: dotted;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    box-shadow: 0 0 10px 2px rgba(255,255,255,0.17);
}
.planet {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow: 0 0 14px 3px rgba(0,0,0,0.28);
}
.mercury { width: 10px; height: 10px; background: #bbb; }
.venus   { width: 18px; height: 18px; background: #e6c28b; }
.earth   { width: 20px; height: 20px; background: linear-gradient(135deg,#2193b0 60%,#6dd5ed 100%);}
.mars    { width: 16px; height: 16px; background: #b55328; }
.jupiter { width: 36px; height: 36px; background: #e7cba9; }
.saturn  { width: 32px; height: 32px; background: #ede3b3; }
.uranus  { width: 26px; height: 26px; background: #aeeaff; }
.neptune { width: 24px; height: 24px; background: #3756ff; }
.orbit-mercury { width: 120px; height: 120px; z-index: 1;}
.orbit-venus   { width: 170px; height: 170px; z-index: 2;}
.orbit-earth   { width: 220px; height: 220px; z-index: 3;}
.orbit-mars    { width: 270px; height: 270px; z-index: 4;}
.orbit-jupiter { width: 340px; height: 340px; z-index: 5;}
.orbit-saturn  { width: 410px; height: 410px; z-index: 6;}
.orbit-uranus  { width: 480px; height: 480px; z-index: 7;}
.orbit-neptune { width: 550px; height: 550px; z-index: 8;}
.ring { position: absolute; top: 50%; left: 50%; width: 50px; height: 13px; border-radius: 50%; border: 2px solid #e1c87a; opacity: 0.6; transform: translate(-50%, -50%) rotate(-10deg); z-index: 1; }
.moon-orbit { position: absolute; width: 36px; height: 36px; left: 50%; top: 50%; border: 1.5px dotted rgba(255,255,255,0.18); border-radius: 50%; transform: translate(-50%, -50%);}
.moon { position: absolute; width: 6px; height: 6px; background: #eee; border-radius: 50%; left: 100%; top: 50%; transform: translate(-50%, -50%); box-shadow: 0 0 8px 2px #fff;}

@media (max-width: 900px) {
    .solar-system { width: 60vw; height: 60vw; max-width: 98vw; max-height: 70vw; }
}
@media (max-width: 600px) {
    .solar-system {
        width: 97vw;
        height: 97vw;
        max-width: 97vw;
        max-height: 97vw;
        min-width: 170px;
        min-height: 170px;
    }
    .solar-footer {
        font-size: 0.93em;
        padding: 7px 0;
    }
}

/* --- Reduced Navbar --- */
.navbar {
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 44px;
    background: rgba(8,12,30,0.85);
    backdrop-filter: blur(7px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 20;
    box-shadow: 0 2px 26px #001c;
    border-bottom: 2px solid #ffd70033;
    font-size: 0.97em;
}
.navbar .logo {
    font-size: 1.15em;
    margin-left: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #FFD700;
    text-shadow: 0 0 8px #fff5;
    display: flex;
    align-items: center;
    gap: 10px;
}
.spin { display: inline-block; animation: spin 2.2s linear infinite; }
@keyframes spin { 100% { transform: rotate(360deg); } }
.navbar ul {
    list-style: none;
    display: flex;
    gap: 16px;
    margin-right: 18px;
    position: relative;
}
.navbar li {
    position: relative;
}
.navbar li a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 0.97em;
    padding: 6px 14px;
    border-radius: 40px;
    transition: background 0.13s, color 0.13s, box-shadow 0.2s;
    position: relative;
    z-index: 2;
}
.navbar li a.active,
.navbar li a:hover {
    background: linear-gradient(90deg, #FFD700 40%, #ff4e50 100%);
    color: #111;
    box-shadow: 0 0 8px 2px #ffd70044;
}
.nav-underline {
    position: absolute;
    bottom: 4px; left: 0;
    height: 2.5px;
    width: 0;
    border-radius: 2px;
    background: linear-gradient(90deg,#FFD700,#ff4e50);
    transition: all 0.25s cubic-bezier(.86,0,.07,1);
    z-index: 1;
}

.cosmic-gradient {
    background: linear-gradient(90deg, #FFD700 30%, #ff4e50 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-emphasis-color: transparent;
    filter: drop-shadow(0 0 8px #ffd70088);
}

main {
    position: relative;
    z-index: 5;
    margin-top: 65px;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 80px; /* Enough for footer */
    width: 100vw;
}

.content-section {
    background: rgba(22,32,54,0.41);
    margin: 32px auto 0;
    padding: 48px 40px 34px 40px;
    border-radius: 28px;
    box-shadow: 0 8px 44px 8px #000c, 0 1.5px 0 #ffd70030;
    min-width: 0;
    max-width: 500px;
    color: #fff;
    text-align: left;
    backdrop-filter: blur(13px);
    border: 2px solid #ffd70036;
    animation: fadeIn 0.5s cubic-bezier(.86,0,.07,1);
    font-size: 1.08em;
    position: relative;
    width: 95vw;
    box-sizing: border-box;
    overflow: visible;
}
@keyframes fadeIn { from { opacity: 0; transform: scale(0.95);} to { opacity: 1; transform: scale(1);} }

#home-section h1 {
    color: #FFD700;
    text-shadow: 0 0 16px #fff8;
    text-align: center;
    font-size: 2em;
}
#start-quiz-btn {
    margin-top: 28px;
    font-size: 1.15em;
    background: linear-gradient(90deg, #FFD700 40%, #ff4e50 100%);
    color: #111;
    border: none;
    border-radius: 40px;
    padding: 12px 38px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 0 14px 3px #ffd70044;
    transition: background 0.17s, color 0.17s, transform 0.12s;
    letter-spacing: 1.2px;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: auto;
    margin-right: auto;
}
#start-quiz-btn:hover {
    background: linear-gradient(90deg, #ff4e50 10%, #FFD700 100%);
    color: #111;
    transform: scale(1.05);
}

ul { padding-left: 24px; }

.modal {
    display: none;
    position: fixed;
    z-index: 30;
    left: 0; top: 0;
    width: 100vw; height: 100vh;
    background: rgba(12,12,20,0.66);
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.24s;
    overflow-y: auto;
}
.modal-content {
    background: rgba(26,28,44,0.97);
    color: #fff;
    margin: auto;
    padding: 44px 40px 30px 40px;
    border-radius: 26px;
    width: 95vw;
    max-width: 460px;
    box-shadow: 0 8px 36px #111b, 0 1.5px 0 #ffd70030;
    position: relative;
    animation: modalFadeIn 0.25s;
    border: 2px solid #ffd70033;
    text-align: left;
    font-size: 1.08em;
    overflow-y: auto;
    max-height: 90vh;
}
@keyframes modalFadeIn { from { opacity: 0; transform: scale(0.92);} to { opacity: 1; transform: scale(1);} }
.close {
    color: #FFD700;
    position: absolute;
    top: 16px; right: 20px;
    font-size: 2em;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s;
}
.close:hover { color: #ff4e50; }
.modal-content h2 {
    font-size: 1.3em;
    margin-bottom: 18px;
}
.modal-content ul {
    padding-left: 20px;
    margin-top: 0;
    margin-bottom: 0;
}
.modal-scroll {
    max-height: 55vh;
    overflow-y: auto;
    padding-right: 4px;
}
.contact-block {
    margin-top: 18px;
    text-align: left;
}
.contact-link {
    color: #FFD700;
    text-decoration: none;
    font-weight: bold;
    margin-left: 6px;
}
.contact-link:hover { text-decoration: underline; color: #ff4e50; }
.socials {
    margin-top: 12px;
    display: flex;
    gap: 22px;
}
.socials a {
    color: #FFD700;
    font-size: 1.7em;
    transition: color 0.19s, transform 0.13s;
    text-shadow: 0 1px 12px #ffd70022;
}
.socials a:hover {
    color: #ff4e50;
    transform: scale(1.18) rotate(-6deg);
}
.follow-block {
    margin-top: 28px;
    text-align: center;
}
.follow-divider {
    border: none;
    border-top: 2px solid #ffd70044;
    margin: 18px auto 16px auto;
    width: 60%;
}
.follow-title {
    font-size: 1.08em;
    margin-bottom: 10px;
    color: #ffd700;
    letter-spacing: 1px;
}
.follow-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 8px;
    flex-wrap: wrap;
}
.follow-icons a {
    color: #FFD700;
    font-size: 1.8em;
    margin: 0 4px;
    transition: color 0.17s, transform 0.13s;
}
.follow-icons a:hover { color: #ff4e50; transform: scale(1.19) rotate(7deg); }

.quiz-q {
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 1.16em;
    color: #FFD700;
    text-shadow: 0 0 6px #ffd70044;
    letter-spacing: 0.5px;
}
.quiz-opt {
    display: block;
    margin: 13px 0;
    padding: 13px 18px;
    background: linear-gradient(90deg, #FFD70018 60%, #ff4e5019 100%);
    color: #fff;
    border: none;
    border-radius: 15px;
    font-size: 1.11em;
    cursor: pointer;
    transition: background 0.19s, color 0.19s, transform 0.12s, filter 0.17s;
    box-shadow: 0 1px 9px #ffd70018;
    font-family: inherit;
    font-weight: 500;
}
.quiz-opt:disabled {
    background: #444b;
    color: #ffe5;
    cursor: not-allowed;
    filter: grayscale(0.5) brightness(0.92);
}
.quiz-opt:hover:not(:disabled) {
    background: linear-gradient(90deg, #FFD700 40%, #ff4e50 100%);
    color: #111;
    transform: scale(1.045);
}
.quiz-feedback {
    margin-top: 20px;
    font-weight: bold;
    font-size: 1.08em;
    min-height: 1.8em;
    transition: color 0.19s;
    letter-spacing: 1px;
}
.quiz-next-btn, .quiz-skip-btn {
    margin-top: 19px;
    background: linear-gradient(90deg,#FFD700 40%,#ff4e50 100%);
    color: #111;
    border: none;
    border-radius: 19px;
    padding: 9px 28px;
    font-size: 1.09em;
    cursor: pointer;
    font-weight: bold;
    margin-right: 12px;
    transition: background 0.18s, color 0.14s, box-shadow 0.13s, transform 0.13s;
    box-shadow: 0 1px 12px #ffd70033;
    letter-spacing: 1px;
}
.quiz-skip-btn {
    background: linear-gradient(90deg,#ff4e50 10%,#FFD700 90%);
    color: #fff;
}
.quiz-next-btn:hover, .quiz-skip-btn:hover {
    background: linear-gradient(90deg,#ff4e50 20%,#FFD700 90%);
    color: #111;
    transform: scale(1.07);
}
.quiz-score {
    margin: 23px 0 0 0;
    font-size: 1.22em;
    color: #FFD700;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1.4px;
}

/* --- Reduced Footer --- */
.solar-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    min-height: 28px;
    padding: 4px 0 2px 0;
    background: rgba(22,32,54,0.85);
    color: #FFD700;
    font-family: inherit;
    font-size: 0.86em;
    letter-spacing: 1px;
    text-align: center;
    z-index: 50;
    border-top: 2px solid #ffd70033;
    box-shadow: 0 -2px 26px #001c;
    backdrop-filter: blur(7px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}
.solar-footer i {
    color: #ff4e50;
    margin: 0 3px;
}

/* Responsive tweaks for modal and content */
@media (max-width: 600px) {
    .content-section, .modal-content { padding: 16px 2vw; min-width: 0; max-width: 99vw;}
    .solar-system { width: 97vw; height: 97vw; }
    .navbar .logo { margin-left: 7px; font-size: 1.1em;}
    .navbar ul { margin-right: 4px;}
    .solar-footer {
        font-size: 0.78em;
        padding: 3px 0 2px 0;
    }
    .content-section {
        margin: 12px auto 0;
        padding: 12px 2vw 8px 2vw;
        min-width: 0;
        max-width: 99vw;
        font-size: 1em;
    }
}
