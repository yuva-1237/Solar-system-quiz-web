// --- Solar system animation (as before) ---
const planets = [
  { selector: '.orbit-mercury',  speed: 4.7,  el: null, angle: 0 },
  { selector: '.orbit-venus',    speed: 3.5,  el: null, angle: 0 },
  { selector: '.orbit-earth',    speed: 3.0,  el: null, angle: 0 },
  { selector: '.orbit-mars',     speed: 2.4,  el: null, angle: 0 },
  { selector: '.orbit-jupiter',  speed: 1.3,  el: null, angle: 0 },
  { selector: '.orbit-saturn',   speed: 1.0,  el: null, angle: 0 },
  { selector: '.orbit-uranus',   speed: 0.7,  el: null, angle: 0 },
  { selector: '.orbit-neptune',  speed: 0.5,  el: null, angle: 0 }
];

const moonOrbit = document.querySelector('.moon-orbit');
let moonAngle = 0;

planets.forEach(p => p.el = document.querySelector(p.selector));

function animateSolar() {
  planets.forEach((p, i) => {
    p.angle += p.speed * 0.005;
    const planet = p.el.querySelector('.planet');
    const r = p.el.offsetWidth/2;
    planet.style.left = 50 + r * Math.cos(p.angle) / r * 50 + '%';
    planet.style.top  = 50 + r * Math.sin(p.angle) / r * 50 + '%';
    if (i === 5) {
      const ring = p.el.querySelector('.ring');
      ring.style.left = planet.style.left;
      ring.style.top = planet.style.top;
    }
  });

  // Animate the moon around earth
  if (moonOrbit) {
    moonAngle += 0.02;
    const moon = moonOrbit.querySelector('.moon');
    const r = moonOrbit.offsetWidth/2;
    moon.style.left = 50 + r * Math.cos(moonAngle) / r * 50 + '%';
    moon.style.top  = 50 + r * Math.sin(moonAngle) / r * 50 + '%';
  }

  requestAnimationFrame(animateSolar);
}
animateSolar();

// --- Navigation and Modal Logic ---
const navLinks = document.querySelectorAll('.navbar li a');
const sections = document.querySelectorAll('.content-section');
const aboutModal = document.getElementById('about-modal');
const contactModal = document.getElementById('contact-modal');
const closeAbout = document.getElementById('close-about');
const closeContact = document.getElementById('close-contact');
const navUnderline = document.querySelector('.nav-underline');
const navList = document.querySelector('.navbar ul');

function showSection(sectionId) {
  sections.forEach(sec => sec.classList.remove('active'));
  document.querySelector(sectionId).classList.add('active');
}
function deactivateNav() {
  navLinks.forEach(link => link.classList.remove('active'));
}
function moveUnderline(link) {
  if (!link) return navUnderline.style.width = 0;
  const rect = link.getBoundingClientRect();
  const navRect = navList.getBoundingClientRect();
  navUnderline.style.left = (rect.left - navRect.left) + "px";
  navUnderline.style.width = rect.width + "px";
}
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    deactivateNav();
    this.classList.add('active');
    moveUnderline(this);
    if (this.id === 'nav-home') {
      showSection('#home-section');
      document.getElementById('home-content').style.display = '';
      document.getElementById('quiz-container').style.display = 'none';
    } else if (this.id === 'nav-about') {
      aboutModal.style.display = 'flex';
      moveUnderline(document.getElementById('nav-home'));
      deactivateNav();
      document.getElementById('nav-home').classList.add('active');
    } else if (this.id === 'nav-contact') {
      contactModal.style.display = 'flex';
      moveUnderline(document.getElementById('nav-home'));
      deactivateNav();
      document.getElementById('nav-home').classList.add('active');
    }
  });
  link.addEventListener('mouseenter', function() {
    moveUnderline(this);
  });
  link.addEventListener('mouseleave', function() {
    const active = document.querySelector('.navbar li a.active');
    moveUnderline(active);
  });
});
window.addEventListener('DOMContentLoaded', () => {
  const active = document.querySelector('.navbar li a.active');
  moveUnderline(active);
});
closeAbout.onclick = () => { aboutModal.style.display = 'none'; };
closeContact.onclick = () => { contactModal.style.display = 'none'; };
window.onclick = function(event) {
  if (event.target == aboutModal) aboutModal.style.display = "none";
  if (event.target == contactModal) contactModal.style.display = "none";
};

// --- Home Start Quiz Button ---
document.getElementById('start-quiz-btn').onclick = () => {
  document.getElementById('home-content').style.display = 'none';
  const quizDiv = document.getElementById('quiz-container');
  quizDiv.style.display = '';
  loadQuiz();
};

// --- Quiz Logic ---
const quizData = [
  {
    q: "Which planet is known as the Red Planet?",
    opts: ["Venus", "Mars", "Jupiter", "Mercury"],
    ans: 1
  },
  {
    q: "Which planet is the largest in our solar system?",
    opts: ["Saturn", "Neptune", "Jupiter", "Earth"],
    ans: 2
  },
  {
    q: "Which planet is closest to the Sun?",
    opts: ["Venus", "Mars", "Mercury", "Earth"],
    ans: 2
  },
  {
    q: "Which planet is famous for its rings?",
    opts: ["Uranus", "Saturn", "Neptune", "Jupiter"],
    ans: 1
  },
  {
    q: "Which planet is known as the Earth's twin?",
    opts: ["Venus", "Mars", "Mercury", "Jupiter"],
    ans: 0
  },
  {
    q: "Which is the farthest planet from the Sun?",
    opts: ["Neptune", "Uranus", "Pluto", "Saturn"],
    ans: 0
  },
  {
    q: "What is the hottest planet in the solar system?",
    opts: ["Venus", "Mercury", "Mars", "Jupiter"],
    ans: 0
  },
  {
    q: "Which planet rotates on its side (almost 98° tilt)?",
    opts: ["Neptune", "Uranus", "Saturn", "Jupiter"],
    ans: 1
  },
  {
    q: "Which planet has the largest volcano in the solar system?",
    opts: ["Venus", "Jupiter", "Mars", "Earth"],
    ans: 2
  },
  {
    q: "Which planet has the fastest winds in the solar system?",
    opts: ["Saturn", "Neptune", "Mercury", "Mars"],
    ans: 1
  }
];
let quizIndex = 0, quizScore = 0;

function loadQuiz() {
  quizIndex = 0; quizScore = 0;
  showQuizQ();
}

function showQuizQ() {
  const container = document.getElementById('quiz-container');
  if (quizIndex >= quizData.length) {
    container.innerHTML = `<div class="quiz-score">Your score: ${quizScore} / ${quizData.length}</div>
      <button class="quiz-next-btn" onclick="restartQuiz()">Play Again</button>`;
    return;
  }
  const q = quizData[quizIndex];
  container.innerHTML = `
    <div class="quiz-q">${quizIndex+1}. ${q.q}</div>
    <div>
      ${q.opts.map((opt, i) => `<button class="quiz-opt" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
    </div>
    <div class="quiz-feedback" id="quiz-feedback"></div>
    <button class="quiz-skip-btn" onclick="skipQuiz()">Skip <i class="fa-solid fa-forward-fast"></i></button>
  `;
}
window.answerQuiz = function(optIdx) {
  const q = quizData[quizIndex];
  const feedback = document.getElementById('quiz-feedback');
  if (optIdx === q.ans) {
    feedback.textContent = "Correct!";
    feedback.style.color = "#FFD700";
    quizScore++;
  } else {
    feedback.textContent = `Wrong! Correct answer: ${q.opts[q.ans]}`;
    feedback.style.color = "#ff4e50";
  }
  document.querySelectorAll('.quiz-opt').forEach(btn => btn.disabled = true);
  document.querySelector('.quiz-skip-btn').disabled = true;
  setTimeout(() => {
    quizIndex++;
    showQuizQ();
  }, 1300);
};
window.skipQuiz = function() {
  document.querySelectorAll('.quiz-opt').forEach(btn => btn.disabled = true);
  document.querySelector('.quiz-skip-btn').disabled = true;
  const feedback = document.getElementById('quiz-feedback');
  feedback.textContent = 'Skipped!';
  feedback.style.color = '#ffd700';
  setTimeout(() => {
    quizIndex++;
    showQuizQ();
  }, 750);
};
window.restartQuiz = function() {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('home-content').style.display = '';
};
