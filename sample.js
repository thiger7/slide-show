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

  // img要素をHTMLに追加
  let item, img;
  for (let i = 0; i < photoLength; i++) {
    item = photoList[i];

    // img要素の作成
    img = document.createElement('img');

    // 作成したimg要素に属性を設定
    img.src = item.src;
    img.alt = item.title;

    // 作成したimg要素をHTMLに追加
    photo.appendChild(img);
  }
}