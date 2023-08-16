window.onload = () => {
  // 画像のリストの定義
  let photoList = [
    { src: 'img/spring.jpeg', title: '春の桜' },
    { src: 'img/summer.jpeg', title: '夏のひまわり' },
    { src: 'img/autumn.jpeg', title: '秋の紅葉' },
    { src: 'img/winter.jpeg', title: '冬の山' },
  ];
  let photoLength = photoList.length;

  //　要素の取得
  let photo = document.getElementById('photo');
  let nextBtn = document.getElementById('nextBtn');
  let title = document.getElementById('title');
}