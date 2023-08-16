window.onload = () => {
  // 指定の画像に表示を切り替える関数
  const showPhoto = (index) => {
    // すべての画像を非表示
    let imgs = photo.getElementsByTagName('img');
    let imgLength = imgs.length;
    for (let i = 0; i < imgLength; i++) {
      imgs[i].style.display = 'none';
    }
    // タイトルの表示
    let viewNumber = index + 1;
    title.innerHTML = `[${viewNumber}] ${photoList[index].title}`;

    // 画像の表示
    imgs[index].style.display = 'inline';
  }

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

  // タイトルの表示
  title.innerHTML = `[1] ${photoList[0].title}`;

  // 画像の表示
  let imgs = photo.getElementsByTagName('img');
  imgs[0].style.display = 'inline';

  // nextボタンを押したときの処理
  nextBtn.onclick = () => {
    console.log('clicked');
  }

  // 現在のインデックスを保存するための変数
  let currentIndex = 0;

  // nextボタンを押したときの処理
  nextBtn.onclick = () => {
    // 表示する画像のインデックスを計算
    currentIndex++;
    if (currentIndex === photoLength) {
      currentIndex = 0;
    }

    // 画像の切り替え
    showPhoto(currentIndex);
  }
}