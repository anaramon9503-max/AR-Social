const group = document.querySelector('[data-accordion-group]');
const items = [...document.querySelectorAll('.accordion-item')];

function setPanelHeight(item, open) {
  const panel = item.querySelector('.accordion-panel');
  const trigger = item.querySelector('.accordion-trigger');

  item.classList.toggle('open', open);
  trigger.setAttribute('aria-expanded', String(open));

  if (open) {
    panel.style.maxHeight = panel.scrollHeight + 'px';
  } else {
    panel.style.maxHeight = '0px';
  }
}

function closeAll(except = null) {
  items.forEach(item => {
    if (item !== except) setPanelHeight(item, false);
  });
}

items.forEach(item => {
  const trigger = item.querySelector('.accordion-trigger');

  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Professional accordion behavior:
    // one section open at a time, but the current one can also be closed.
    closeAll(item);
    setPanelHeight(item, !isOpen);
  });
});

// Set correct initial heights after fonts/images load.
window.addEventListener('load', () => {
  items.forEach(item => {
    setPanelHeight(item, item.classList.contains('open'));
  });
});

// Keep the open panel height correct on rotation / resize.
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    items.forEach(item => {
      if (item.classList.contains('open')) {
        const panel = item.querySelector('.accordion-panel');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }, 100);
});

document.getElementById('year').textContent = new Date().getFullYear();
