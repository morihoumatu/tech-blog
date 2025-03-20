---
title: '【初心者向け】VSCodeの基本設定と便利な拡張機能10選'
description: 'Visual Studio Codeの基本的な設定方法と、開発効率を上げる便利な拡張機能を初心者向けに解説します。'
pubDate: 'Mar 20 2025'
heroImage: '/tech-blog/blog-placeholder-2.jpg'
---

# 【初心者向け】VSCodeの基本設定と便利な拡張機能10選

Visual Studio Code（VSCode）は、現代のプログラミングで最も人気のあるコードエディタの1つです。この記事では、VSCodeの基本的な設定方法と、開発効率を大幅に向上させる便利な拡張機能を紹介します。

## VSCodeの基本設定

### 1. エディタの外観設定

設定は `settings.json` で管理できます。以下は基本的な設定例です：

```json
{
  // エディタの外観
  "editor.fontSize": 14,
  "editor.fontFamily": "'Source Code Pro', Consolas, 'Courier New', monospace",
  "editor.lineHeight": 1.5,
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "boundary",
  
  // カラーテーマ
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme",
  
  // タブとインデント
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": true,
  
  // 自動保存
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000
}
```

### 2. キーボードショートカット

よく使うキーボードショートカットを覚えておくと効率が上がります：

- **ファイル操作**
  - 新規ファイル: `Ctrl+N` (Windows) / `Cmd+N` (Mac)
  - ファイル保存: `Ctrl+S` / `Cmd+S`
  - ファイル検索: `Ctrl+P` / `Cmd+P`

- **編集操作**
  - 行の複製: `Shift+Alt+↓` / `Shift+Option+↓`
  - 行の削除: `Ctrl+Shift+K` / `Cmd+Shift+K`
  - マルチカーソル: `Alt+Click` / `Option+Click`

- **表示操作**
  - サイドバー表示/非表示: `Ctrl+B` / `Cmd+B`
  - 統合ターミナル表示/非表示: ``Ctrl+` `` / ``Cmd+` ``
  - コマンドパレット: `Ctrl+Shift+P` / `Cmd+Shift+P`

### 3. ワークスペース設定

プロジェクトごとの設定は `.vscode/settings.json` に保存できます：

```json
{
  // プロジェクト固有の設定
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5",
  
  // 言語固有の設定
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## おすすめの拡張機能10選

### 1. ESLint

JavaScript/TypeScriptのコード品質を維持するための必須拡張機能です。

```json
// .eslintrc.json の設定例
{
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error"
  }
}
```

**主な機能：**
- コードの問題をリアルタイムで検出
- 自動修正機能
- カスタマイズ可能なルール

### 2. Prettier

コードフォーマッターの定番です。チーム開発でコードスタイルを統一するのに最適です。

```json
// .prettierrc の設定例
{
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "printWidth": 80
}
```

**主な機能：**
- 自動コードフォーマット
- 多言語対応
- エディタ設定との統合

### 3. GitLens

Gitの機能を強化する拡張機能です。コードの変更履歴を視覚的に確認できます。

**主な機能：**
- 行ごとの最終変更者と日時の表示
- コミット履歴の可視化
- ブランチの比較機能

### 4. Live Server

HTMLファイルをローカルサーバーで簡単に確認できます。

**主な機能：**
- ライブリロード
- ローカルサーバーの起動
- カスタムポート設定

### 5. Auto Rename Tag

HTMLやXMLのタグを自動的にリネームします。

**主な機能：**
- 開始タグと終了タグの同時編集
- JSX/TSXのサポート
- 高速な動作

### 6. Code Spell Checker

コード内のスペルミスを検出します。

**設定例：**
```json
{
  "cSpell.language": "en,ja",
  "cSpell.words": [
    "typeof",
    "useState",
    "nextjs"
  ]
}
```

**主な機能：**
- マルチ言語対応
- カスタム辞書の追加
- キャメルケースのサポート

### 7. Path Intellisense

ファイルパスの入力を補完します。

**主な機能：**
- パスの自動補完
- ファイル拡張子の提案
- 相対パスと絶対パスのサポート

### 8. Material Icon Theme

ファイルアイコンをマテリアルデザインに変更します。

**主な機能：**
- 豊富なアイコンセット
- フォルダアイコンのカスタマイズ
- ファイル種別の視認性向上

### 9. Error Lens

エラーや警告をインライン表示します。

**設定例：**
```json
{
  "errorLens.enabledDiagnosticLevels": [
    "error",
    "warning",
    "info"
  ],
  "errorLens.messageEnabled": true
}
```

**主な機能：**
- エラーのインライン表示
- 警告レベルの色分け
- カスタマイズ可能な表示スタイル

### 10. Docker

Dockerファイルの編集とコンテナの管理を支援します。

**主な機能：**
- Dockerfileのシンタックスハイライト
- コンテナの管理
- Docker Composeのサポート

## 開発効率を上げるTips

### 1. スニペットの活用

よく使うコードブロックをスニペットとして登録できます：

```json
// .vscode/snippets.json
{
  "React Function Component": {
    "prefix": "rfc",
    "body": [
      "import React from 'react';",
      "",
      "interface ${1:ComponentName}Props {",
      "  $2",
      "}",
      "",
      "export const ${1:ComponentName}: React.FC<${1:ComponentName}Props> = (props) => {",
      "  return (",
      "    <div>",
      "      $0",
      "    </div>",
      "  );",
      "};",
      ""
    ],
    "description": "Creates a React Function Component with TypeScript"
  }
}
```

### 2. タスクの自動化

頻繁に実行するコマンドをタスクとして登録できます：

```json
// .vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build Project",
      "type": "npm",
      "script": "build",
      "group": {
        "kind": "build",
        "isDefault": true
      }
    },
    {
      "label": "Run Tests",
      "type": "npm",
      "script": "test",
      "group": {
        "kind": "test",
        "isDefault": true
      }
    }
  ]
}
```

### 3. デバッグ設定

デバッグ設定をカスタマイズして効率的なデバッグを実現できます：

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Node.js",
      "program": "${workspaceFolder}/src/index.js",
      "skipFiles": [
        "<node_internals>/**"
      ]
    },
    {
      "type": "chrome",
      "request": "launch",
      "name": "Debug React App",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

## トラブルシューティング

### 1. 拡張機能の競合

複数の拡張機能が競合する場合は、以下の手順で解決します：

1. 拡張機能を一時的に無効化
2. 競合している拡張機能を特定
3. 設定の調整または代替拡張機能の検討

### 2. パフォーマンスの問題

VSCodeが重くなった場合の対処法：

1. 不要な拡張機能の無効化
2. ワークスペースのファイル監視設定の調整
3. エディタの軽量化設定

```json
{
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true
  },
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "none",
  "editor.renderControlCharacters": false
}
```

### 3. 設定の同期

複数のマシンで設定を同期する方法：

1. Settings Syncの有効化
2. GitHubアカウントでのサインイン
3. 同期する項目の選択

## まとめ

VSCodeの基本設定と拡張機能を適切に組み合わせることで、開発効率を大幅に向上させることができます。以下のポイントを押さえておきましょう：

1. **基本設定の重要性**
   - エディタの外観
   - キーボードショートカット
   - ワークスペース設定

2. **必須の拡張機能**
   - ESLint
   - Prettier
   - GitLens

3. **開発効率化のTips**
   - スニペットの活用
   - タスクの自動化
   - デバッグ設定

これらの設定と拡張機能を活用することで、より快適な開発環境を構築できます。

## 次のステップ

VSCodeの基本を理解したら、以下の記事も参考にしてください：

- [【2025年版】プログラミングを始めるための環境構築ガイド](/tech-blog/blog/programming-environment-setup-2025/)
- [【コメントの書き方でコードが劇的にわかりやすくなる！】](/tech-blog/blog/how-to-write-better-comments/)
- [プログラミング初心者が最初に学ぶべき5つの概念](/tech-blog/blog/programming-concepts-for-beginners/)