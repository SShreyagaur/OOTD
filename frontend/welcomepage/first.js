const background = document.querySelector('.background');
const numHoops = 100; // Number of hoops

for (let i = 0; i < numHoops; i++) {
  const hoop = document.createElement('div');
  hoop.classList.add('hoop');
  
  // Set random size, position, duration
  const size = Math.random() * 80 + 20; // Random size between 20px and 100px
  hoop.style.width = `${size}px`;
  hoop.style.height = `${size}px`;
  
  hoop.style.top = `${Math.random() * 100}vh`;  // Random vertical position
  hoop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  
  // Random animation duration for more variation
  hoop.style.animationDuration = `${Math.random() * 20 + 10}s, ${Math.random() * 6 + 4}s`;

  background.appendChild(hoop);
}
