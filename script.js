const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElement = document.querySelectorAll('.hiddens');
const hiddensElement = document.querySelectorAll('.hiddenz');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

hiddenElements.forEach((element) => observer.observe(element));
hiddenElement.forEach((element) => observer.observe(element));
hiddensElement.forEach((element) => observer.observe(element));

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}
