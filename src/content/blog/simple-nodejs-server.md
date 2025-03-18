---
title: '【実践】Node.jsで簡単なサーバーを作ってみよう！'
description: 'Node.jsを使って基本的なWebサーバーを作成する方法を、初心者向けにステップバイステップで解説します。'
pubDate: 'Aug 20 2024'
heroImage: '/tech-blog/blog-placeholder-5.jpg'
---

# 【実践】Node.jsで簡単なサーバーを作ってみよう！

Node.jsを使ってWebサーバーを作成することは、バックエンド開発の基本的なスキルの一つです。この記事では、シンプルなWebサーバーを作成する方法を、初心者向けにステップバイステップで解説します。

## 目標とする機能

今回作成するWebサーバーには、以下の機能を実装します：

1. 基本的なHTTPサーバー
2. 静的ファイルの配信
3. 簡単なAPIエンドポォイント
4. フォームデータの処理
5. エラーハンドリング

## Step 1: プロジェクトの準備

まず、新しいプロジェクトを作成し、必要なパッケージをインストールします。

```bash
# プロジェクトディレクトリの作成
mkdir simple-node-server
cd simple-node-server

# package.jsonの初期化
npm init -y

# 必要なパッケージのインストール
npm install express
```

## Step 2: 基本的なサーバーの作成

最初に、シンプルなHTTPサーバーを作成します。

```javascript
// server.js
const express = require('express');
const app = express();
const port = 3000;

// ミドルウェアの設定
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルートパスへのGETリクエスト
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// サーバーの起動
app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました`);
});
```

このコードでは：
- Expressフレームワークを使用
- JSONとフォームデータの処理を有効化
- ルートパス（/）へのGETリクエストを処理
- ポート3000でサーバーを起動

## Step 3: 静的ファイルの配信

HTMLファイルやCSSファイルなどの静的ファイルを配信する機能を追加します。

```javascript
// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// ミドルウェアの設定
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ルートパスへのGETリクエスト
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// サーバーの起動
app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました`);
});
```

静的ファイルの例：

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>シンプルWebサーバー</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to My Server</h1>
        <form action="/submit" method="POST">
            <input type="text" name="message" placeholder="メッセージを入力">
            <button type="submit">送信</button>
        </form>
    </div>
</body>
</html>
```

```css
/* public/styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f0f0f0;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

form {
    margin-top: 20px;
}

input {
    padding: 10px;
    width: 200px;
    margin-right: 10px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
```

## Step 4: APIエンドポイントの作成

JSONデータを返すAPIエンドポイントを追加します。

```javascript
// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// ミドルウェアの設定
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// データストア（実際のアプリケーションではデータベースを使用）
let messages = [];

// ルートパスへのGETリクエスト
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// メッセージ一覧を取得するAPI
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// 新しいメッセージを追加するAPI
app.post('/api/messages', (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'メッセージは必須です' });
  }
  
  const newMessage = {
    id: Date.now(),
    text: message,
    createdAt: new Date()
  };
  
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

// フォームの送信を処理
app.post('/submit', (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).send('メッセージは必須です');
  }
  
  messages.push({
    id: Date.now(),
    text: message,
    createdAt: new Date()
  });
  
  res.redirect('/');
});

// エラーハンドリング
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 404ハンドリング
app.use((req, res) => {
  res.status(404).send('ページが見つかりません');
});

// サーバーの起動
app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました`);
});
```

## Step 5: フロントエンドの機能拡張

APIを使用するためのJavaScriptコードを追加します。

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>シンプルWebサーバー</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to My Server</h1>
        
        <!-- メッセージフォーム -->
        <form id="messageForm">
            <input type="text" name="message" id="messageInput" placeholder="メッセージを入力">
            <button type="submit">送信</button>
        </form>
        
        <!-- メッセージ一覧 -->
        <div id="messageList" class="message-list">
            <h2>メッセージ一覧</h2>
            <ul></ul>
        </div>
    </div>

    <script>
        // DOMの読み込み完了後に実行
        document.addEventListener('DOMContentLoaded', () => {
            const messageForm = document.getElementById('messageForm');
            const messageInput = document.getElementById('messageInput');
            const messageList = document.querySelector('#messageList ul');

            // メッセージ一覧を取得する関数
            async function fetchMessages() {
                try {
                    const response = await fetch('/api/messages');
                    const messages = await response.json();
                    
                    // メッセージ一覧を表示
                    messageList.innerHTML = messages
                        .map(msg => `
                            <li class="message-item">
                                <p>${msg.text}</p>
                                <small>${new Date(msg.createdAt).toLocaleString()}</small>
                            </li>
                        `)
                        .join('');
                } catch (error) {
                    console.error('メッセージの取得に失敗:', error);
                }
            }

            // フォームの送信をハンドル
            messageForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const message = messageInput.value.trim();
                if (!message) return;

                try {
                    const response = await fetch('/api/messages', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ message })
                    });

                    if (response.ok) {
                        messageInput.value = '';
                        await fetchMessages();
                    }
                } catch (error) {
                    console.error('メッセージの送信に失敗:', error);
                }
            });

            // 初期表示時にメッセージを取得
            fetchMessages();
        });
    </script>
</body>
</html>
```

追加のスタイル：

```css
/* public/styles.css に追加 */
.message-list {
    margin-top: 30px;
}

.message-list ul {
    list-style: none;
    padding: 0;
}

.message-item {
    background-color: #f8f9fa;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.message-item p {
    margin: 0 0 5px 0;
}

.message-item small {
    color: #666;
}
```

## プロジェクトの構成

完成したプロジェクトの構成は以下のようになります：

```
simple-node-server/
├── package.json
├── server.js
└── public/
    ├── index.html
    └── styles.css
```

## サーバーの起動方法

1. 必要なパッケージをインストール：
```bash
npm install
```

2. サーバーを起動：
```bash
node server.js
```

3. ブラウザで `http://localhost:3000` にアクセス

## エラーハンドリングの実装

より堅牢なエラーハンドリングを実装するには、以下のようなミドルウェアを追加します：

```javascript
// エラーハンドリングミドルウェア
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  
  // エラーの種類に応じて適切なレスポンスを返す
  if (err.type === 'validation') {
    return res.status(400).json({
      error: 'バリデーションエラー',
      message: err.message
    });
  }
  
  // 予期しないエラー
  res.status(500).json({
    error: '内部サーバーエラー',
    message: 'サーバーで問題が発生しました'
  });
}

// バリデーションミドルウェア
function validateMessage(req, res, next) {
  const { message } = req.body;
  
  if (!message) {
    const error = new Error('メッセージは必須です');
    error.type = 'validation';
    return next(error);
  }
  
  if (message.length > 100) {
    const error = new Error('メッセージは100文字以内で入力してください');
    error.type = 'validation';
    return next(error);
  }
  
  next();
}

// ミドルウェアの適用
app.post('/api/messages', validateMessage, (req, res, next) => {
  try {
    // メッセージの処理
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);
```

## セキュリティ対策

実際のアプリケーションでは、以下のようなセキュリティ対策も必要です：

1. **Helmet**の使用：
```javascript
const helmet = require('helmet');
app.use(helmet());
```

2. **CORS**の設定：
```javascript
const cors = require('cors');
app.use(cors({
  origin: 'http://allowed-domain.com'
}));
```

3. **レート制限**の実装：
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15分
  max: 100 // IPアドレスごとのリクエスト制限
});

app.use('/api/', limiter);
```

## まとめ

この記事では、Node.jsとExpressを使用して基本的なWebサーバーを作成する方法を学びました：

1. **基本的なHTTPサーバーの作成**
   - Expressの設定
   - ルーティングの実装
   - ミドルウェアの使用

2. **静的ファイルの配信**
   - HTMLファイルの配信
   - CSSファイルの配信
   - 静的アセットの管理

3. **APIエンドポイントの実装**
   - GETリクエストの処理
   - POSTリクエストの処理
   - JSONデータの送受信

4. **フロントエンドとの連携**
   - フォームデータの処理
   - 非同期通信の実装
   - UIの更新

5. **エラーハンドリングとセキュリティ**
   - エラーミドルウェア
   - バリデーション
   - セキュリティ対策

このベースとなるコードをもとに、データベースとの連携やユーザー認証など、より高度な機能を追加していくことができます。

## 次のステップ

基本的なWebサーバーの作成を理解したら、以下の記事も参考にしてください：

- [【入門】データベースとは？SQLの基本を理解しよう](/tech-blog/blog/database-sql-basics/)
- [【初心者向け】APIとは？使い方と実装方法をわかりやすく解説](/tech-blog/blog/api-basics-guide/)
- [【初心者向け】プログラミングのエラーの種類と対処法](/tech-blog/blog/programming-error-handling-guide/)