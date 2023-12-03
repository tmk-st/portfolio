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


// 日本語・英語切り替えボタンを画面上部に固定
const windowWidth = getWindowWidth();

var btnElement = document.getElementById('lang_btn');
var backBtnElement = document.getElementById('back_arrow'); // プロフページ内戻るボタン
var btnElementOffsetTop = btnElement.offsetTop;
var backBtnElementOffsetTop = backBtnElement.offsetTop;

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= btnElementOffsetTop - 50) {
    btnElement.style.position = 'fixed';
    backBtnElement.style.position = 'fixed';
    btnElement.style.top = '2rem';
    backBtnElement.style.top = '2rem';
    if (windowWidth >= 520) {
      // PCの場合
      btnElement.style.right = '5rem';
      backBtnElement.style.left = '5rem';
    } else {
      // SPの場合
      btnElement.style.right = '2rem';
      backBtnElement.style.left = '2rem';
    }
  } else {
    btnElement.style.position = 'static';
    backBtnElement.style.position = 'absolute';
    backBtnElement.style.top = '6rem';
  }
});

// ウィンドウ幅を取得
function getWindowWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
}