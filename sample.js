// 追加でリファクタリングした
/**
 * 簡易スライドショー
 *
 * nextボタンを押したときに画像を切り替える簡単な
 * スライドショーのプログラムです。
 */

window.onload = () => {
  /*================================================================
   * 変数の定義
   *===============================================================*/
  const photoList = [
    { id: 1, src: 'img/spring.jpeg', title: '春の桜' },
    { id: 2, src: 'img/summer.jpeg', title: '夏のひまわり' },
    { id: 3, src: 'img/autumn.jpeg', title: '秋の紅葉' },
    { id: 4, src: 'img/winter.jpeg', title: '冬の山' },
  ];

  const photoContainer = document.getElementById('photo');
  const nextButton = document.getElementById('nextBtn');
  const titleElement = document.getElementById('title');

  let currentIndex = 0;

  /*================================================================
   * 関数の定義
   *===============================================================*/
  const hideAllPhotos = () => {
    photoList.forEach(item => {
      item.elem.style.display = 'none';
    });
  }

  const displayPhoto = (index) => {
    hideAllPhotos();

    const targetPhoto = photoList[index];

    titleElement.innerHTML = `[${targetPhoto.id}] ${targetPhoto.title}`;
    targetPhoto.elem.style.display = 'inline';
  }

  /*================================================================
   * イベントの設定
   *===============================================================*/
  const showNextPhoto = () => {
    currentIndex = (currentIndex + 1) % photoList.length;
    displayPhoto(currentIndex);
  }

  nextButton.onclick = showNextPhoto;

  /*================================================================
   * 初期化処理
   *===============================================================*/
  photoList.forEach(item => {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.title;
    photoContainer.appendChild(img);
    item.elem = img;
  });

  displayPhoto(currentIndex);
}
