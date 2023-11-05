// スクロール時のアニメーションを設定する関数
function animatePortfolioImages() {
  const portfolioImages = document.querySelectorAll('img'); // ポートフォリオセクション内の画像を取得
  const windowHeight = window.innerHeight;

  portfolioImages.forEach((image, index) => {
    const imageTop = image.getBoundingClientRect().top;
    if (imageTop < windowHeight) {
      setTimeout(() => {
        image.classList.add('animate'); // 画像が画面内に入ったらクラスを追加
      }, index * 200); // インデックスに応じて時間差を設定
    }
  });
}

// スクロール時に画像アニメーションを実行
window.addEventListener('scroll', animatePortfolioImages);
window.addEventListener('load', animatePortfolioImages);
