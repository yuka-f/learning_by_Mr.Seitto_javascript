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
document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];

// ボタンをクリックしたら正誤判定
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  if(){
    window.alert('当たり！')
  } else {
    window.alert('残念！')
  }
});