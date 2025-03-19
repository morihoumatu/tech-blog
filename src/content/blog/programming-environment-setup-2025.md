---
title: '【2025年版】プログラミングを始めるための環境構築ガイド（Windows, Mac対応）'
description: '2025年最新版！WindowsとMacでのプログラミング環境構築方法を、初心者にもわかりやすく解説します。'
pubDate: 'Jun 15 2024'
heroImage: '/tech-blog/blog-placeholder-2.jpg'
---

# 【2025年版】プログラミングを始めるための環境構築ガイド（Windows, Mac対応）

プログラミングを始めるにあたって、最初の壁となるのが環境構築です。この記事では、WindowsとMac両方のOSに対応した、プログラミング環境の構築方法を詳しく解説します。2025年の最新情報に基づいて、初心者の方でも簡単に環境を整えられるようにステップバイステップで説明していきます。

## 目次

1. [基本的なツールのインストール](#基本的なツールのインストール)
2. [テキストエディタの設定](#テキストエディタの設定)
3. [プログラミング言語のインストール](#プログラミング言語のインストール)
4. [バージョン管理システムの設定](#バージョン管理システムの設定)
5. [ターミナルの設定](#ターミナルの設定)
6. [統合開発環境（IDE）のセットアップ](#統合開発環境のセットアップ)

## 基本的なツールのインストール

### Windowsの場合

1. **Windows Terminal**のインストール
   - Microsoft Storeを開く
   - "Windows Terminal"を検索
   - インストールボタンをクリック

2. **WSL2（Windows Subsystem for Linux）**のインストール
   ```powershell
   # PowerShellを管理者として実行
   wsl --install
   ```

3. **パッケージマネージャー（winget）**の確認
   ```powershell
   winget --version
   ```
   - 未インストールの場合はMicrosoft Storeからインストール

### Macの場合

1. **Homebrewのインストール**
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Command Line Tools for Xcode**のインストール
   ```bash
   xcode-select --install
   ```

## テキストエディタの設定

### Visual Studio Codeのインストール

#### Windows
```powershell
winget install Microsoft.VisualStudioCode
```

#### Mac
```bash
brew install --cask visual-studio-code
```

### 推奨拡張機能のインストール

1. **基本的な拡張機能**
   - ESLint
   - Prettier
   - GitLens
   - Live Server
   - Auto Close Tag
   - Auto Rename Tag
   - Path Intellisense

2. **言語特有の拡張機能**
   - Python
   - JavaScript and TypeScript
   - C/C++
   - Java Extension Pack
   - Go

### VS Codeの基本設定

```json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "files.autoSave": "onFocusChange",
  "workbench.colorTheme": "Default Dark Modern",
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "terminal.integrated.defaultProfile.osx": "zsh"
}
```

## プログラミング言語のインストール

### Node.js

#### Windows
```powershell
winget install OpenJS.NodeJS.LTS
```

#### Mac
```bash
brew install node@20
```

### Python

#### Windows
```powershell
winget install Python.Python.3.12
```

#### Mac
```bash
brew install python@3.12
```

### Java

#### Windows
```powershell
winget install Microsoft.OpenJDK.17
```

#### Mac
```bash
brew install openjdk@17
```

## バージョン管理システムの設定

### Gitのインストール

#### Windows
```powershell
winget install Git.Git
```

#### Mac
```bash
brew install git
```

### Gitの初期設定

```bash
# ユーザー名とメールアドレスの設定
git config --global user.name "あなたの名前"
git config --global user.email "あなたのメールアドレス"

# デフォルトブランチ名の設定
git config --global init.defaultBranch main

# 改行コードの設定
## Windows
git config --global core.autocrlf true
## Mac
git config --global core.autocrlf input
```

## ターミナルの設定

### Windows Terminal（Windows）

設定ファイル（`settings.json`）の推奨設定：

```json
{
    "defaultProfile": "{574e775e-4f2a-5b96-ac1e-a2962a402336}",
    "profiles": {
        "defaults": {
            "font": {
                "face": "Cascadia Code PL",
                "size": 11
            },
            "opacity": 95,
            "useAcrylic": true
        }
    }
}
```

### iTerm2（Mac）

```bash
# インストール
brew install --cask iterm2

# Oh My Zshのインストール
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

`.zshrc`の推奨設定：

```bash
# テーマの設定
ZSH_THEME="agnoster"

# プラグインの設定
plugins=(
  git
  docker
  node
  npm
  python
  vscode
)

# エイリアスの設定
alias gs='git status'
alias gc='git commit'
alias gp='git push'
alias ll='ls -la'
```

## 統合開発環境のセットアップ

### JetBrains IDEs

#### Windows
```powershell
winget install JetBrains.Toolbox
```

#### Mac
```bash
brew install --cask jetbrains-toolbox
```

推奨IDEs：
- IntelliJ IDEA（Java）
- PyCharm（Python）
- WebStorm（JavaScript/TypeScript）
- GoLand（Go）

### Visual Studio（Windows）

```powershell
winget install Microsoft.VisualStudio.2022.Community
```

### Xcode（Mac）

App Storeからインストール

## 開発環境の動作確認

### Node.jsの確認

```bash
# バージョン確認
node --version
npm --version

# テストプロジェクトの作成
mkdir test-project
cd test-project
npm init -y
npm install express
```

### Pythonの確認

```bash
# バージョン確認
python --version
pip --version

# 仮想環境の作成とパッケージのインストール
python -m venv venv
source venv/bin/activate  # Macの場合
.\venv\Scripts\activate   # Windowsの場合
pip install requests
```

### Javaの確認

```bash
# バージョン確認
java --version
javac --version

# テストプログラムの作成と実行
echo 'public class Hello { public static void main(String[] args) { System.out.println("Hello, World!"); } }' > Hello.java
javac Hello.java
java Hello
```

## トラブルシューティング

### よくある問題と解決方法

1. **パスが通っていない場合**

#### Windows
```powershell
# システム環境変数の確認
echo $env:Path

# パスの追加
$env:Path += ";C:\Program Files\nodejs"
```

#### Mac
```bash
# パスの確認
echo $PATH

# パスの追加（.zshrcに記述）
export PATH="/usr/local/bin:$PATH"
```

2. **権限の問題**

#### Windows
- PowerShellを管理者として実行
- セキュリティポリシーの確認：
  ```powershell
  Get-ExecutionPolicy
  Set-ExecutionPolicy RemoteSigned
  ```

#### Mac
```bash
# 権限の修正
sudo chown -R $(whoami) /usr/local/lib/node_modules
sudo chown -R $(whoami) /usr/local/bin
```

3. **SSL証明書の問題**

```bash
# Node.jsの場合
npm config set strict-ssl false

# Gitの場合
git config --global http.sslVerify false
```

## セキュリティ設定

### ファイアウォールの設定

#### Windows
- Windowsセキュリティを開く
- ファイアウォールとネットワーク保護を選択
- 開発用ポートの許可を設定

#### Mac
- システム環境設定 > セキュリティとプライバシー
- ファイアウォールタブ
- 開発用アプリケーションの通信を許可

### アンチウイルスソフトの除外設定

開発フォルダを除外リストに追加：

#### Windows Defender
```powershell
Add-MpPreference -ExclusionPath "C:\Dev"
```

## 推奨ツール

### 開発効率を上げるツール

1. **Postman** - APIテスト用
   ```bash
   # Mac
   brew install --cask postman
   # Windows
   winget install Postman.Postman
   ```

2. **Docker** - コンテナ化環境
   ```bash
   # Mac
   brew install --cask docker
   # Windows
   winget install Docker.DockerDesktop
   ```

3. **DBeaver** - データベース管理
   ```bash
   # Mac
   brew install --cask dbeaver-community
   # Windows
   winget install dbeaver.dbeaver
   ```

## まとめ

この記事では、2025年時点での最新のプログラミング環境構築方法について解説しました。主なポイントは：

1. **基本ツールの準備**
   - ターミナル
   - パッケージマネージャー
   - テキストエディタ

2. **言語環境の構築**
   - Node.js
   - Python
   - Java

3. **開発支援ツール**
   - Git
   - VS Code拡張機能
   - 統合開発環境

4. **セキュリティとトラブルシューティング**
   - 基本的なセキュリティ設定
   - 一般的な問題の解決方法

環境構築は一度しっかりと行えば、その後のプログラミング学習をスムーズに進めることができます。この記事を参考に、自分に適した開発環境を整えてください。

## 次のステップ

環境構築が完了したら、以下の記事も参考にしてください：

- [プログラミング初心者が最初に学ぶべき5つの概念](/tech-blog/blog/programming-concepts-for-beginners/)
- [【超初心者向け】Hello Worldを書いてみよう！（Python, JavaScript, Java）](/tech-blog/blog/hello-world-programming-guide/)
- [【コメントの書き方でコードが劇的にわかりやすくなる！】](/tech-blog/blog/how-to-write-better-comments/)