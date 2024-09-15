const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alts = {
  'pic1.jpg': 'baihehua',
  'pic2.jpg': 'shanchahua',
  'pic3.jpg': 'shinanhua',
  'pic4.jpg': 'lameihua',
  'pic5.jpg': 'shanchahua'
};

let currentImageIndex = 0;

  
// 添加点击事件监听器到左右箭头按钮  
prevButton.addEventListener('click', () => {  
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;  
  updateDisplayedImage(currentImageIndex);  
});  
  
nextButton.addEventListener('click', () => {  
  currentImageIndex = (currentImageIndex + 1) % images.length;  
  updateDisplayedImage(currentImageIndex);  
});  
  

function updateDisplayedImage(index) {
  displayedImage.src = `images/${images[index]}`;
  displayedImage.alt = alts[images[index]];
  currentImageIndex = index;
}

// 初始化显示第一张图片
updateDisplayedImage(currentImageIndex);

// 循环添加缩略图
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
    currentImageIndex = images.indexOf(image);
  });
}

// 添加点击事件监听器到暗化/亮化按钮
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

