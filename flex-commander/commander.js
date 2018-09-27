const MAX_WIDTH = 1200;
const MIN_WIDTH = 100;

const boxes = document.querySelectorAll('.box');

const resetBoxBtn = document.querySelector('#reset-boxes');
const resetCntBtn = document.querySelector('#reset-container');

random.addEventListener('click', () => {
  boxes.forEach(box => {
    const randomNum = Math.floor(Math.random() * 6) - 2; // -2 .. +3
    const newSize = `${100 + randomNum * 10}px`;

    box.style.width = box.style.height = newSize;
  });
});

reduce.addEventListener('click', () => {
  boxes.forEach(box => {
    const newSize = `${box.offsetWidth - 10}px`;

    box.style.width = box.style.height = newSize;
  });
});

expand.addEventListener('click', () => {
  boxes.forEach(box => {
    const newSize = `${box.offsetWidth + 10}px`;

    box.style.width = box.style.height = newSize;
  });
});

resetBoxBtn.addEventListener('click', () => {
  boxes.forEach(box => {
    box.style.width = box.style.height = '100px';
  });
});

center.addEventListener('click', () => {
  container.style.alignItems = 'center';
});

baseline.addEventListener('click', () => {
  container.style.alignItems = 'baseline';
});

widen.addEventListener('click', () => {
  const newSize = container.offsetWidth + 100;

  if (newSize <= MAX_WIDTH) container.style.width = `${newSize}px`;

  setButtons();
});

narrow.addEventListener('click', () => {
  const newSize = container.offsetWidth - 100;

  if (newSize >= MIN_WIDTH) container.style.width = `${newSize}px`;

  setButtons();
});

resetCntBtn.addEventListener('click', () => {
  container.style.width = '600px';

  setButtons();
});

setButtons = () => {
  setTimeout(() => {
    const cwidth = container.offsetWidth;

    widen.disabled = cwidth >= MAX_WIDTH;
    narrow.disabled = cwidth <= MIN_WIDTH;
  }, 400);
};
