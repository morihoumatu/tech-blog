---
title: '【超初心者向け】Hello Worldを書いてみよう！（Python, JavaScript, Java）'
description: 'プログラミング入門の第一歩、Hello World プログラムの書き方を3つの主要言語で解説します。'
pubDate: 'Jul 15 2024'
heroImage: '/blog-placeholder-1.jpg'
---

# 【超初心者向け】Hello Worldを書いてみよう！（Python, JavaScript, Java）

プログラミングを始める時、最初に書くのが「Hello World」プログラムです。これは画面に「Hello World」という文字を表示する、最もシンプルなプログラムです。この記事では、3つの主要なプログラミング言語でHello Worldを書く方法を解説します。

## なぜHello Worldから始めるの？

Hello Worldプログラムには、以下のような意義があります：

1. **最小限のコードで動作確認ができる**
   - 開発環境が正しく設定されているか確認できる
   - プログラムの基本的な構造を理解できる

2. **プログラミングの第一歩として最適**
   - 成功体験を得やすい
   - 言語の基本的な文法に触れられる

3. **伝統的な入門プログラム**
   - 1978年に出版された「プログラミング言語C」で紹介されて以来の伝統
   - 世界中のプログラマーの共通体験

## Python での Hello World

Pythonは、シンプルで読みやすい文法が特徴の言語です。初心者に最適です。

### コード
```python
print("Hello, World!")
```

### 解説

1. `print()` は画面に文字を表示する関数
2. `"Hello, World!"` は表示したい文字列（ダブルクォートで囲む）
3. 1行だけで完結する、非常にシンプルなコード

### 実行方法

1. テキストエディタで新規ファイル `hello.py` を作成
2. 上記のコードを入力して保存
3. ターミナルで以下のコマンドを実行：
```bash
python hello.py
```

## JavaScript での Hello World

JavaScriptは、Webブラウザで動作する言語として広く使われています。

### コード
```javascript
// ブラウザのコンソールに表示
console.log("Hello, World!");

// HTMLページに表示
document.write("Hello, World!");

// アラートとして表示
alert("Hello, World!");
```

### 解説

1. `console.log()`: 開発者ツールのコンソールに表示
2. `document.write()`: Webページに直接表示
3. `alert()`: ポップアップウィンドウで表示

### 実行方法

#### 方法1: HTMLファイルを作成

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <script>
        console.log("Hello, World!");
        document.write("Hello, World!");
        // alert("Hello, World!");  // コメントアウトしておくと邪魔になりません
    </script>
</body>
</html>
```

#### 方法2: ブラウザの開発者ツール

1. ブラウザで任意のページを開く
2. F12キーを押して開発者ツールを開く
3. コンソールタブで直接コードを入力

## Java での Hello World

Javaは、堅牢なエンタープライズアプリケーションの開発によく使われる言語です。

### コード
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### 解説

1. `public class HelloWorld`: クラスの定義（ファイル名と同じにする必要がある）
2. `public static void main(String[] args)`: プログラムの開始点（エントリーポイント）
3. `System.out.println()`: 画面に文字を表示するメソッド

### 実行方法

1. テキストエディタで `HelloWorld.java` を作成
2. 上記のコードを入力して保存
3. ターミナルで以下のコマンドを実行：
```bash
javac HelloWorld.java  # コンパイル
java HelloWorld        # 実行
```

## 各言語の比較

### コードの長さ

1. **Python**: 1行
2. **JavaScript**: 1行
3. **Java**: 5行

### 必要な前提知識

#### Python
- 関数の基本的な使い方
- 文字列の概念

#### JavaScript
- 関数の基本的な使い方
- 文字列の概念
- ブラウザの開発者ツールの使い方（オプション）

#### Java
- クラスとメソッドの基本概念
- 文字列の概念
- コンパイルと実行の違い
- 静的型付けの基本

### 開発環境の準備

#### Python
1. Python をインストール
2. テキストエディタ（VSCode, PyCharm など）をインストール

#### JavaScript
1. テキストエディタをインストール
2. Webブラウザ（すでにインストール済みの可能性が高い）

#### Java
1. JDK (Java Development Kit) をインストール
2. テキストエディタまたはIDE（Eclipse, IntelliJ IDEA など）をインストール

## よくある間違いと解決方法

### Python

#### 問題1: 構文エラー
```python
# 間違い
print("Hello, World!)  # クォートが閉じていない

# 正しい
print("Hello, World!")
```

#### 問題2: インデントエラー
```python
# 間違い
  print("Hello, World!")  # 不要なインデント

# 正しい
print("Hello, World!")
```

### JavaScript

#### 問題1: セミコロンの忘れ
```javascript
// これも動作します（自動セミコロン挿入）
console.log("Hello, World!")

// より明示的な書き方
console.log("Hello, World!");
```

#### 問題2: console のスペルミス
```javascript
// 間違い
consle.log("Hello, World!");  // console が間違っている

// 正しい
console.log("Hello, World!");
```

### Java

#### 問題1: クラス名とファイル名の不一致
```java
// ファイル名: hello.java
public class HelloWorld {  // クラス名とファイル名が一致していない
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

#### 問題2: メインメソッドの書き方
```java
// 間違い
public class HelloWorld {
    public void main() {  // static がない、引数がない
        System.out.println("Hello, World!");
    }
}

// 正しい
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## プログラミング学習の次のステップ

Hello Worldが書けたら、次は以下のような基本概念を学んでいきましょう：

1. **変数とデータ型**
   - 数値、文字列、真偽値など
   - 変数の宣言と代入

2. **制御構造**
   - if文による条件分岐
   - forループによる繰り返し処理

3. **関数（メソッド）**
   - 関数の定義と呼び出し
   - 引数と戻り値

4. **配列とコレクション**
   - データの集まりを扱う方法
   - 要素の追加、削除、検索

## まとめ

Hello Worldプログラムは、プログラミング入門の第一歩として最適です。各言語の特徴を以下にまとめます：

- **Python**: 最もシンプルで初心者向け
- **JavaScript**: Webブラウザで手軽に実行可能
- **Java**: やや複雑だが、プログラミングの重要な概念を学べる

どの言語を選んでも、Hello Worldを通じてプログラミングの基本を学ぶことができます。まずは興味のある言語で試してみましょう！

## 次のステップ

Hello Worldの基本を理解したら、以下の記事も参考にしてください：

- [変数・データ型・関数とは？初心者向けに超わかりやすく解説](/blog/programming-basics-for-beginners/)
- [プログラミング初心者が最初に学ぶべき5つの概念](/blog/programming-concepts-for-beginners/)
- [【初心者向け】プログラミングのエラーの種類と対処法](/blog/programming-error-handling-guide/)