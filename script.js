// ===== PIXEL CURSOR =====
const dot = document.getElementById('cursorDot');
document.addEventListener('mousemove', e => {
  dot.style.left = (e.clientX - 3) + 'px';
  dot.style.top = (e.clientY - 3) + 'px';
});

// ===== DAY TABS (SCHEDULE) =====
function showDay(idx) {
  document.querySelectorAll('.schedule-content').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
  document.querySelectorAll('.day-tab').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
}

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== FLOATING LIGHTNING BOLTS =====
function spawnBolt() {
  const bolt = document.createElement('div');
  bolt.className = 'float-bolt';
  bolt.textContent = '⚡';
  bolt.style.left = Math.random() * 100 + 'vw';
  bolt.style.bottom = '0';
  bolt.style.animationDuration = (3 + Math.random() * 3) + 's';
  bolt.style.animationDelay = '0s';
  bolt.style.fontSize = (1 + Math.random()) + 'rem';
  document.body.appendChild(bolt);
  setTimeout(() => bolt.remove(), 6000);
}

setInterval(spawnBolt, 2000);
