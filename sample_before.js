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

  // 画像のリストの定義
  const photoList = [
    { id: 1, src: 'img/spring.jpeg', title: '春の桜' },
    { id: 2, src: 'img/summer.jpeg', title: '夏のひまわり' },
    { id: 3, src: 'img/autumn.jpeg', title: '秋の紅葉' },
    { id: 4, src: 'img/winter.jpeg', title: '冬の山' },
  ];

  //　要素の取得
  const photo = document.getElementById('photo');
  const nextBtn = document.getElementById('nextBtn');
  const title = document.getElementById('title');

  // 現在のインデックスを保存するための変数
  let currentIndex = 0;

  /*================================================================
   * 関数の定義
   *===============================================================*/

  // 指定の画像に表示を切り替える関数
  const showPhoto = (index) => {

    // すべての画像を非表示
    photoList.map(item => {
      // 各要素の表示を非表示に設定
      item.elem.style.display = 'none';
    });

    // 表示する対象の要素を取得
    const targetPhoto = photoList[index];

    // タイトルの表示
    title.innerHTML = `[${targetPhoto.id}] ${targetPhoto.title}`;

    // 画像の表示
    targetPhoto.elem.style.display = 'inline';
  }

  /*================================================================
   * イベントの設定
   *===============================================================*/

  // nextボタンを押したときの処理
  nextBtn.onclick = () => {
    // 表示する画像のインデックスを計算
    currentIndex = (currentIndex + 1) % photoList.length;

    // 画像の切り替え
    showPhoto(currentIndex);
  }

  /*================================================================
   * 初期化処理
   *===============================================================*/

  // img要素をHTMLに追加
  photoList.map(item => {
    // img要素の作成
    const img = document.createElement('img');

    // 作成したimg要素に属性を設定
    img.src = item.src;
    img.alt = item.title;

    // 作成したimg要素をHTMLに追加
    photo.appendChild(img);

    // img要素をキャッシュする
    item.elem = img;
  });

  // 初期表示のためにshowPhoto関数を実行する
  showPhoto(currentIndex);
}


