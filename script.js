// クリック時のスクロールをスムーズにする
document.addEventListener('click', function(event) {
    if (event.target.matches('a[href^="#"]')) {
      event.preventDefault();
      const target = document.querySelector(event.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
  

// 日本語・英語切り替え
const enBtn = document.getElementById('en_btn');
const jpBtn = document.getElementById('jp_btn');
const en = document.getElementsByClassName('en');
const jp = document.getElementsByClassName('jp');

const toggleDisplay = (elements, displayValue) => {
  Array.from(elements).forEach(element => {
    element.style.display = displayValue;
  });
};

toggleDisplay(en, 'none');

jpBtn.addEventListener('click', function() {
  toggleDisplay(en, 'none');
  toggleDisplay(jp, 'block');
});

enBtn.addEventListener('click', function() {
  toggleDisplay(jp, 'none');
  toggleDisplay(en, 'block');
});

// ボタンを画面上に固定する共通処理
function handleScroll(element, offsetTop, position, top, side) {
  var scrollTop = document.documentElement.scrollTop;

  if (scrollTop >= offsetTop - 50) {
    element.style.position = position;
    element.style.top = top;
    element.style[side] = windowWidth >= 520 ? '5rem' : '2rem';
  } else {
    element.style.position = 'static';
  }
}

const windowWidth = window.innerWidth;

// 日本語・英語切り替えボタン
var langBtnElements = document.getElementsByClassName('lang_btn');
var langBtn = langBtnElements[0];
var langBtnOffsetTop = langBtn.offsetTop;

window.addEventListener('scroll', function() {
  handleScroll(langBtn, langBtnOffsetTop, 'fixed', '2rem', 'right');
});

// プロフページ内戻るボタン
var backBtn = document.getElementById('back_arrow');
var backBtnOffsetTop = backBtn.offsetTop;

window.addEventListener('scroll', function() {
  handleScroll(backBtn, backBtnOffsetTop, 'fixed', '2rem', 'left');
  if (document.documentElement.scrollTop < langBtnOffsetTop - 50) {
    backBtn.style.position = 'absolute';
    backBtn.style.top = '6rem';
  }
});

// ウィンドウ幅を取得
function getWindowWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
}