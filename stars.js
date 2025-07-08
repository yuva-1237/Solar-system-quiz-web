
const starContainer = document.getElementById('stars');
const numStars = 160;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  const size = Math.random() * 1.5 + 0.5;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.animationDuration = `${Math.random() * 2 + 1.5}s`;
  starContainer.appendChild(star);
}
