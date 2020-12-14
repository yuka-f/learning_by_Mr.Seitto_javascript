const question = '私がエンジニアになりたい理由はどれでしょう？';
const answers = [
  '給料がいいから',
  'スキルを身につけて将来フリーランスになりtらいから',
  '好奇心と発想力を活かしたいから',
  '父に言われたから',
];
const correct = '好奇心と発想力を活かしたいから';

// 定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button')

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength){
  // ここに命令
  buttonIndex++;
}

// ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', () => {
  if(correct === $button[0].textContent){
    window.alert('当たり！');
  } else {
    window.alert('残念！');
  }
});
$button[1].addEventListener('click', () => {
  if(correct === $button[1].textContent){
    window.alert('当たり！');
  } else {
    window.alert('残念！');
  }
});

$button[2].addEventListener('click', () => {
  if(correct === $button[2].textContent){
    window.alert('当たり！');
  } else {
    window.alert('残念！');
  }
});

$button[3].addEventListener('click', () => {
  if(correct === $button[3].textContent){
    window.alert('当たり！');
  } else {
    window.alert('残念！');
  }
});