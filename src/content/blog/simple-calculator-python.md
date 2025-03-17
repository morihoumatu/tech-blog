---
title: '【初心者向け】簡単な電卓アプリを作ってみよう！（Python編）'
description: 'Pythonを使って基本的な四則演算ができる電卓アプリを作成する方法を、初心者向けにステップバイステップで解説します。'
pubDate: 'Aug 01 2024'
heroImage: '/tech-blog/blog-placeholder-2.jpg'
---

# 【初心者向け】簡単な電卓アプリを作ってみよう！（Python編）

プログラミング学習の定番として、電卓アプリの作成があります。この記事では、Pythonを使って基本的な四則演算（足し算、引き算、掛け算、割り算）ができる電卓アプリを作成する方法を、初心者向けにステップバイステップで解説します。

## 目標とする機能

今回作成する電卓アプリには、以下の機能を実装します：

1. 二つの数値の入力を受け付ける
2. 四則演算（+、-、*、/）の選択
3. 計算結果の表示
4. 続けて計算するかどうかの選択
5. エラー処理（ゼロ除算、不正な入力など）

## Step 1: 基本構造の作成

まずは、プログラムの基本的な構造を作成します。

```python
def main():
    print("=== 簡単な電卓アプリ ===")
    
    while True:
        # メイン処理（後で実装）
        pass
        
        # 続けるかどうかの確認
        if not continue_calculation():
            break
    
    print("電卓アプリを終了します。")

def continue_calculation():
    while True:
        answer = input("続けて計算しますか？ (y/n): ").lower()
        if answer in ['y', 'n']:
            return answer == 'y'
        print("yまたはnを入力してください。")

if __name__ == "__main__":
    main()
```

このコードでは：
- `main()` 関数：プログラムのメインロジックを含む
- `continue_calculation()` 関数：ユーザーが計算を続けるかどうかを確認
- 無限ループと `break` を使用して、ユーザーが終了を選択するまで計算を続ける

## Step 2: 数値入力の実装

次に、ユーザーから数値を入力받る機能を実装します。

```python
def get_number(prompt):
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print("有効な数値を入力してください。")

def get_operator():
    valid_operators = ['+', '-', '*', '/']
    while True:
        operator = input("演算子を入力してください (+, -, *, /): ")
        if operator in valid_operators:
            return operator
        print("有効な演算子を入力してください。")
```

これらの関数は：
- `get_number()`: 数値の入力を受け付け、不正な入力の場合はエラーメッセージを表示
- `get_operator()`: 演算子の入力を受け付け、不正な入力の場合はエラーメッセージを表示

## Step 3: 計算ロジックの実装

計算を実行する関数を実装します。

```python
def calculate(num1, operator, num2):
    try:
        if operator == '+':
            return num1 + num2
        elif operator == '-':
            return num1 - num2
        elif operator == '*':
            return num1 * num2
        elif operator == '/':
            if num2 == 0:
                raise ZeroDivisionError("ゼロによる除算はできません。")
            return num1 / num2
    except ZeroDivisionError as e:
        print(f"エラー: {e}")
        return None
```

この関数は：
- 四則演算を実装
- ゼロ除算のエラー処理を含む
- エラーが発生した場合は `None` を返す

## Step 4: メイン処理の実装

これまでの部品を組み合わせて、メイン処理を完成させます。

```python
def main():
    print("=== 簡単な電卓アプリ ===")
    
    while True:
        # 数値と演算子の入力
        num1 = get_number("1つ目の数値を入力してください: ")
        operator = get_operator()
        num2 = get_number("2つ目の数値を入力してください: ")
        
        # 計算の実行
        result = calculate(num1, operator, num2)
        
        # 結果の表示
        if result is not None:
            print(f"\n{num1} {operator} {num2} = {result}\n")
        
        # 続けるかどうかの確認
        if not continue_calculation():
            break
    
    print("電卓アプリを終了します。")

# 他の関数の定義（前述のコード）...

if __name__ == "__main__":
    main()
```

## 完成したコード

以上の部品を組み合わせた完成版のコードです：

```python
def get_number(prompt):
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print("有効な数値を入力してください。")

def get_operator():
    valid_operators = ['+', '-', '*', '/']
    while True:
        operator = input("演算子を入力してください (+, -, *, /): ")
        if operator in valid_operators:
            return operator
        print("有効な演算子を入力してください。")

def calculate(num1, operator, num2):
    try:
        if operator == '+':
            return num1 + num2
        elif operator == '-':
            return num1 - num2
        elif operator == '*':
            return num1 * num2
        elif operator == '/':
            if num2 == 0:
                raise ZeroDivisionError("ゼロによる除算はできません。")
            return num1 / num2
    except ZeroDivisionError as e:
        print(f"エラー: {e}")
        return None

def continue_calculation():
    while True:
        answer = input("続けて計算しますか？ (y/n): ").lower()
        if answer in ['y', 'n']:
            return answer == 'y'
        print("yまたはnを入力してください。")

def main():
    print("=== 簡単な電卓アプリ ===")
    
    while True:
        # 数値と演算子の入力
        num1 = get_number("1つ目の数値を入力してください: ")
        operator = get_operator()
        num2 = get_number("2つ目の数値を入力してください: ")
        
        # 計算の実行
        result = calculate(num1, operator, num2)
        
        # 結果の表示
        if result is not None:
            print(f"\n{num1} {operator} {num2} = {result}\n")
        
        # 続けるかどうかの確認
        if not continue_calculation():
            break
    
    print("電卓アプリを終了します。")

if __name__ == "__main__":
    main()
```

## 使用例

このプログラムを実行すると、以下のような対話形式で計算を行うことができます：

```
=== 簡単な電卓アプリ ===
1つ目の数値を入力してください: 10
演算子を入力してください (+, -, *, /): +
2つ目の数値を入力してください: 5

10.0 + 5.0 = 15.0

続けて計算しますか？ (y/n): y
1つ目の数値を入力してください: 20
演算子を入力してください (+, -, *, /): /
2つ目の数値を入力してください: 0
エラー: ゼロによる除算はできません。
続けて計算しますか？ (y/n): n
電卓アプリを終了します。
```

## プログラムの解説

### 1. エラー処理

プログラムには以下のようなエラー処理が実装されています：

- 数値入力時の不正な値（`ValueError`）
- ゼロによる除算（`ZeroDivisionError`）
- 不正な演算子の入力
- 不正な継続確認の回答

### 2. 関数の役割

各関数の役割を詳しく見ていきましょう：

1. **get_number(prompt)**
   - 数値の入力を受け付ける
   - 文字列を浮動小数点数に変換
   - 不正な入力の場合は再入力を要求

2. **get_operator()**
   - 演算子の入力を受け付ける
   - 有効な演算子かどうかをチェック
   - 不正な入力の場合は再入力を要求

3. **calculate(num1, operator, num2)**
   - 実際の計算を行う
   - 演算子に応じて適切な計算を実行
   - ゼロ除算のエラー処理を含む

4. **continue_calculation()**
   - 計算を続けるかどうかの確認
   - y/n以外の入力を防ぐ

5. **main()**
   - プログラムの全体の流れを制御
   - 各関数を適切な順序で呼び出し

### 3. プログラムの拡張性

このプログラムは以下のような方向に拡張可能です：

1. **追加の演算機能**
   - べき乗（`**`）
   - 剰余（`%`）
   - 切り捨て除算（`//`）

2. **高度な機能**
   - 計算履歴の保存
   - 複数の数値の連続計算
   - 数式の解析と計算

3. **ユーザーインターフェースの改善**
   - GUIの実装（tkinterなど）
   - より詳細なエラーメッセージ
   - ヘルプ機能の追加

## まとめ

この記事では、Pythonを使って基本的な電卓アプリを作成する方法を学びました。

実装したポイント：
1. 基本的な四則演算
2. エラー処理
3. ユーザー入力の検証
4. プログラムの構造化（関数分割）

このプログラムを基礎として、より高度な機能を追加したり、GUIを実装したりすることで、プログラミングの理解を深めることができます。

## 次のステップ

電卓アプリの基本を理解したら、以下の記事も参考にしてください：

- [変数・データ型・関数とは？初心者向けに超わかりやすく解説](/blog/programming-basics-for-beginners/)
- [【入門】条件分岐(if文)を理解してロジックを組み立てよう](/blog/if-statement-guide/)
- [【初心者向け】for文とwhile文の使い分け完全ガイド](/blog/loop-statement-guide/)