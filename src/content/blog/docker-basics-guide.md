---
title: '【Dockerとは？初心者向けにコンテナ技術をわかりやすく解説】'
description: 'Dockerの基本概念からコマンドの使い方まで、初心者にもわかりやすく解説します。実践的な例を交えながら、コンテナ技術の理解を深めましょう。'
pubDate: 'Mar 24 2025'
heroImage: '/tech-blog/blog-placeholder-4.jpg'
---

# 【Dockerとは？初心者向けにコンテナ技術をわかりやすく解説】

Dockerは、アプリケーションを開発・配布・実行するためのプラットフォームです。この記事では、Dockerの基本概念から実践的な使い方まで、初心者にもわかりやすく解説します。

## Dockerとは？

### 簡単に言うと…

Dockerは、アプリケーションとその実行に必要な環境を「コンテナ」という単位でパッケージ化し、どこでも同じように動作させることができる技術です。

### なぜDockerが必要なのか？

1. **環境の統一**
   - 開発環境と本番環境の差異をなくす
   - チーム全員が同じ環境で開発できる
   - "自分の環境では動くのに…"という問題を解消

2. **簡単な環境構築**
   - 必要な環境を数行のコードで定義
   - コマンド一つで環境を構築
   - 新メンバーの環境構築が容易

3. **リソースの効率的な利用**
   - 仮想マシンより軽量
   - 起動が速い
   - システムリソースの使用効率が良い

## Dockerの基本概念

### 1. イメージ（Image）

Dockerイメージは、アプリケーションとその実行環境を含む「テンプレート」のようなものです。

```dockerfile
# シンプルなDockerfileの例
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### 2. コンテナ（Container）

イメージから作成された実行環境です。同じイメージから複数のコンテナを作成できます。

```bash
# コンテナの作成と起動
docker run -d -p 3000:3000 my-node-app

# コンテナの一覧表示
docker ps

# コンテナの停止
docker stop <container-id>
```

### 3. Dockerfile

イメージを作成するための設定ファイルです。

```dockerfile
# より詳細なDockerfileの例
FROM node:18

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# パッケージファイルのコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードのコピー
COPY . .

# ポートの公開
EXPOSE 3000

# アプリケーションの起動コマンド
CMD ["npm", "start"]
```

## Dockerの基本コマンド

### 1. イメージ関連

```bash
# イメージのビルド
docker build -t my-app:1.0 .

# イメージの一覧表示
docker images

# イメージの削除
docker rmi my-app:1.0
```

### 2. コンテナ関連

```bash
# コンテナの作成と起動
docker run -d -p 8080:3000 --name my-container my-app:1.0

# コンテナの一覧表示
docker ps
docker ps -a  # 停止中のコンテナも表示

# コンテナの停止
docker stop my-container

# コンテナの削除
docker rm my-container
```

### 3. ログとデバッグ

```bash
# コンテナのログ表示
docker logs my-container

# コンテナ内でコマンド実行
docker exec -it my-container bash

# コンテナの詳細情報表示
docker inspect my-container
```

## Docker Composeの使用

複数のコンテナを管理するためのツールです。

```yaml
# docker-compose.yml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/usr/src/app
    environment:
      - NODE_ENV=development
    depends_on:
      - db
  
  db:
    image: postgres:13
    environment:
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
      - POSTGRES_DB=mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Docker Composeコマンド

```bash
# サービスの起動
docker-compose up -d

# サービスの停止
docker-compose down

# サービスの再構築
docker-compose up -d --build
```

## 実践的な例：Node.jsアプリケーション

### 1. プロジェクト構造

```
my-node-app/
├── src/
│   └── index.js
├── package.json
├── Dockerfile
└── docker-compose.yml
```

### 2. アプリケーションコード

```javascript
// src/index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Docker!' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

### 3. Dockerfile

```dockerfile
# 開発環境用Dockerfile
FROM node:18

WORKDIR /usr/src/app

# パッケージファイルのコピー
COPY package*.json ./

# 開発用依存関係のインストール
RUN npm install

# ソースコードのコピー
COPY . .

# ポートの公開
EXPOSE 3000

# 開発サーバーの起動
CMD ["npm", "run", "dev"]
```

### 4. Docker Compose設定

```yaml
# docker-compose.yml
version: '3'
services:
  app:
    build: 
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - .:/usr/src/app
      - /usr/src/app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev
```

## 開発ワークフロー

### 1. ローカル開発

```bash
# 開発環境の起動
docker-compose up -d

# ログの確認
docker-compose logs -f

# コンテナ内でコマンド実行
docker-compose exec app npm install <package-name>
```

### 2. 本番環境用ビルド

```dockerfile
# 本番環境用Dockerfile
FROM node:18-alpine as builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production
EXPOSE 3000
CMD ["npm", "start"]
```

## ベストプラクティス

### 1. イメージサイズの最適化

```dockerfile
# マルチステージビルドの例
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production
CMD ["npm", "start"]
```

### 2. キャッシュの活用

```dockerfile
# 依存関係のインストールを先に行う
COPY package*.json ./
RUN npm install
COPY . .
```

### 3. セキュリティ対策

```dockerfile
# 非rootユーザーの使用
FROM node:18-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
WORKDIR /app
# ... 以下続く
```

## トラブルシューティング

### 1. よくあるエラーと対処法

1. **ポートの競合**
```bash
# エラーメッセージ
Error: listen EADDRINUSE: address already in use :::3000

# 対処法
docker-compose down
docker-compose up -d
```

2. **パーミッションエラー**
```bash
# エラーメッセージ
permission denied while trying to connect to the Docker daemon socket

# 対処法
sudo usermod -aG docker $USER
```

3. **メモリ不足**
```yaml
# docker-compose.yml
services:
  app:
    deploy:
      resources:
        limits:
          memory: 512M
```

### 2. デバッグ方法

```bash
# コンテナのログ確認
docker logs <container-id>

# コンテナ内でシェル実行
docker exec -it <container-id> sh

# コンテナの状態確認
docker inspect <container-id>
```

## Docker管理のTips

### 1. リソースの管理

```bash
# 未使用リソースの削除
docker system prune

# ボリュームの削除
docker volume prune

# イメージの削除
docker image prune
```

### 2. モニタリング

```bash
# コンテナのリソース使用状況
docker stats

# 特定のコンテナの詳細情報
docker inspect <container-id>
```

### 3. バックアップと復元

```bash
# コンテナのエクスポート
docker export <container-id> > backup.tar

# イメージの保存
docker save my-image:tag > image.tar

# イメージの読み込み
docker load < image.tar
```

## まとめ

Dockerの主要なポイントをまとめると：

1. **基本概念の理解**
   - イメージ
   - コンテナ
   - Dockerfile

2. **実践的なスキル**
   - 基本的なコマンド操作
   - Docker Composeの使用
   - 開発環境の構築

3. **運用管理**
   - トラブルシューティング
   - リソース管理
   - セキュリティ対策

Dockerは現代のソフトウェア開発において重要なツールとなっています。基本を理解し、実践を重ねることで、より効率的な開発環境を構築できます。

## 次のステップ

Dockerの基本を理解したら、以下の記事も参考にしてください：

- [【2025年版】プログラミングを始めるための環境構築ガイド](/tech-blog/blog/programming-environment-setup-2025/)
- [【初心者向け】APIとは？使い方と実装方法をわかりやすく解説](/tech-blog/blog/api-basics-guide/)
- [【GitHubの使い方完全ガイド！リポジトリの作成からプルリクまで】](/tech-blog/blog/github-usage-guide/)