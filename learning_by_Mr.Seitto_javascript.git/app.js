const question = '私がエンジニアになりたい理由はどれでしょう？';
const answers = [
  '給料がいいから',
  'スキルを身につけて将来フリーランスになりたいから',
  '好奇心と発想力を活かしたいから',
  '父に言われたから',
];
const correct = '好奇心と発想力を活かしたいから';

const $button = document.getElementsByTagName('button')

// クイズの問題文、選択肢を定義(まとまりごとに関数に入れるとみやすくなる)
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = () => {
  if(correct === e.target.textContent){
    window.alert('当たり！');
  } else {
    window.alert('残念！');
  }
};


// ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', (e) => {
  clickHandler();
});
$button[1].addEventListener('click', (e) => {
  clickHandler();
});
$button[2].addEventListener('click', (e) => {
  clickHandler();
});
$button[3].addEventListener('click', (e) => {
  clickHandler();
});