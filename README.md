# 一夜城 初単独ライブ LP

お笑いコンビ「一夜城」の初単独ライブ『第一回 参勤交代 金沢編』用ランディングページです。

## ファイル構成

```text
.
├── index.html
├── style.css
├── script.js
└── assets
    ├── ichiyajo-hero.jpeg
    ├── ichiyajo-profile.jpeg
    └── ichiyajo-other.jpeg
```

## 公開方法

このフォルダ内のファイルを、そのままGitHubリポジトリへアップロードしてください。

GitHub Pagesで公開する場合:

1. GitHubのリポジトリにこのフォルダ内のファイルをアップロード
2. `Settings` → `Pages`
3. `Deploy from a branch` を選択
4. `main` ブランチの `/root` を指定
5. 表示されたURLにアクセス

## 後日差し替える箇所

チケット販売URLが決まり次第、`index.html` 内の以下のリンクを書き換えてください。

```html
<a class="button button-primary" href="#ticket">チケットはこちら</a>
```

外部チケットサイトへ遷移させる場合:

```html
<a class="button button-primary" href="https://example.com" target="_blank" rel="noreferrer">チケットはこちら</a>
```

## 仕様

- HTML / CSS / JavaScriptのみで実装
- スマホファースト対応
- IntersectionObserverによるスクロール演出
- Google Map埋め込み
- YouTubeティザー動画を将来ファーストビュー背景に差し替え可能
