// 1 変数 書き換えできる
let unko = 'hello would';

// 2 定数　書き換えできない
const bigUnko = 'He..Hell...Hello world!';

// 3 配列　同じ並びで複数並べル事ができる　呼び出し方は→console.log(inoki[数字]);
let inoki = ['いーち','にー','さ-ん','ダーー！！'];

// 4 ループ文　繰り返し処理　同じ作業を何度も行いたい時に使われる
// while(条件){条件を満たしたら実行される内容}
// let index = 0; // カウント設定
// while(index < inoki.length){ // (index < inoki.length)配列と組み合わせる書き方もできる
//   // 繰り返したい命令
//   console.log(inoki[index]); // []の部分数字又は設定したカウントの変数などでも大丈夫
//   index++;　//index = 1
// }

// 5 if / else もし〜なら〜する。という仮定法
if(inoki.length > 10){
  console.log('ボンバイエ！');
} else {
  console.log('ボンバ...!');
}

// ６　関数　使用方法は２パターンある
// ・同じ命令を何度も使いたいとき
// ・任意のタイミングで命令を実行したい時
const test = () => {

};