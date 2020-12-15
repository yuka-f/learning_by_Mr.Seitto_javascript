const question = '私がエンジニアになりたい理由はどれでしょう？';
const answers = [
  '給料がいいから',
  'スキルを身につけて将来フリーランスになりたいから',
  '好奇心と発想力を活かしたいから',
  '父に言われたから',
];
const correct = '好奇心と発想力を活かしたいから';

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義(まとまりごとに関数に入れるとみやすくなる)
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('当たり！');
  } else {
    window.alert('残念！');
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
