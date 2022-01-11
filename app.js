const showp1 = document.getElementById('showp1');
const hiddenp1 = document.getElementById('hiddenp1');
const showp2 = document.getElementById('showp2');
const hiddenp2 = document.getElementById('hiddenp2');
const showp3 = document.getElementById('showp3');
const hiddenp3 = document.getElementById('hiddenp3');
const showp4 = document.getElementById('showp4');
const hiddenp4 = document.getElementById('hiddenp4');
const showp5 = document.getElementById('showp5');
const hiddenp5 = document.getElementById('hiddenp5');

showp1.addEventListener('click', () => {
  showp1.parentElement.style.display = 'none';
  hiddenp1.style.display = 'grid';
});
showp2.addEventListener('click', () => {
  showp2.parentElement.style.display = 'none';
  hiddenp2.style.display = 'grid';
});
showp3.addEventListener('click', () => {
  showp3.parentElement.style.display = 'none';
  hiddenp3.style.display = 'grid';
});
showp4.addEventListener('click', () => {
  showp4.parentElement.style.display = 'none';
  hiddenp4.style.display = 'grid';
});
showp5.addEventListener('click', () => {
  showp5.parentElement.style.display = 'none';
  hiddenp5.style.display = 'grid';
});

hiddenp1.onmouseout = () => {
  hiddenp1.style.display = 'none';
  // hiddenp1.previousElementSibling.style.display = 'grid';
  showp1.parentElement.style.display = 'grid';
};
hiddenp2.onmouseout = () => {
  hiddenp2.style.display = 'none';
  // hiddenp1.previousElementSibling.style.display = 'grid';
  showp2.parentElement.style.display = 'grid';
};
hiddenp3.onmouseout = () => {
  hiddenp3.style.display = 'none';
  // hiddenp1.previousElementSibling.style.display = 'grid';
  showp3.parentElement.style.display = 'grid';
};
hiddenp4.onmouseout = () => {
  hiddenp4.style.display = 'none';
  // hiddenp1.previousElementSibling.style.display = 'grid';
  showp4.parentElement.style.display = 'grid';
};
hiddenp5.onmouseout = () => {
  hiddenp5.style.display = 'none';
  // hiddenp1.previousElementSibling.style.display = 'grid';
  showp5.parentElement.style.display = 'grid';
};

// const projectcontent = document.getElementsByClassName('projectcontent');
