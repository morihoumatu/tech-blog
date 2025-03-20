---
title: '【初心者向け】if文とfor文の違いをわかりやすく解説'
description: 'プログラミング初心者のために、if文とfor文の基本的な違いと使い方を具体例を交えてわかりやすく解説します。'
pubDate: 'Mar 3 2025'
heroImage: '/tech-blog/blog-placeholder-2.jpg'
---

# 【初心者向け】if文とfor文の違いをわかりやすく解説

プログラミングを学び始めると必ず出会う「if文」と「for文」。これらは最も基本的な制御構文ですが、初心者の方にとっては混乱しやすいポイントでもあります。この記事では、if文とfor文の違いを具体例を交えてわかりやすく解説します。

## if文とfor文の基本的な違い

まず、if文とfor文の基本的な違いを簡潔に説明します：

- **if文**：「条件分岐」のための構文。特定の条件が満たされたときだけ、処理を実行します。
- **for文**：「繰り返し」のための構文。同じ処理を決められた回数だけ繰り返し実行します。

つまり、if文は「もし〜なら、これをする」という判断を行い、for文は「これを〜回繰り返す」という反復を行います。

## if文の基本

### if文の構文

if文の基本的な構文は以下のようになります：

```javascript
if (条件) {
  // 条件が true のときに実行される処理
} else if (別の条件) {
  // 最初の条件が false で、別の条件が true のときに実行される処理
} else {
  // すべての条件が false のときに実行される処理
}
```

### if文の具体例

例えば、ユーザーの年齢に応じて異なるメッセージを表示するプログラムを考えてみましょう：

```javascript
let age = 25;

if (age < 20) {
  console.log("未成年です。");
} else if (age < 65) {
  console.log("成人です。");
} else {
  console.log("シニアです。");
}
// 出力: 成人です。
```

この例では：
1. まず `age < 20` という条件をチェック（falseなので次へ）
2. 次に `age < 65` という条件をチェック（trueなので対応する処理を実行）
3. 「成人です。」というメッセージが表示される

### if文のよくある使い方

if文は以下のようなシチュエーションでよく使われます：

1. **ユーザー入力の検証**
   ```javascript
   let userInput = ""; // ユーザーが何も入力しなかった場合
   
   if (userInput === "") {
     console.log("入力が必要です。");
   } else {
     console.log("入力を受け付けました。");
   }
   ```

2. **権限チェック**
   ```javascript
   let isAdmin = false;
   
   if (isAdmin) {
     console.log("管理者メニューを表示");
   } else {
     console.log("一般ユーザーメニューを表示");
   }
   ```

3. **エラーハンドリング**
   ```javascript
   let success = false;
   
   if (success) {
     console.log("処理が成功しました。");
   } else {
     console.log("エラーが発生しました。");
   }
   ```

## for文の基本

### for文の構文

for文の基本的な構文は以下のようになります：

```javascript
for (初期化; 条件; 更新) {
  // 条件が true の間、繰り返し実行される処理
}
```

各部分の役割は：
- **初期化**：ループの開始前に1回だけ実行される（通常はカウンター変数の初期化）
- **条件**：各繰り返しの前にチェックされ、trueならループを続行、falseなら終了
- **更新**：各繰り返しの最後に実行される（通常はカウンター変数の更新）

### for文の具体例

1から5までの数字を順番に表示するプログラムを考えてみましょう：

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// 出力:
// 1
// 2
// 3
// 4
// 5
```

この例では：
1. `let i = 1` でカウンター変数を初期化
2. `i <= 5` という条件をチェック（trueなのでループ内の処理を実行）
3. `console.log(i)` で現在の i の値を表示
4. `i++` で i の値を1増やす
5. 再び条件をチェックして、trueなら3と4を繰り返す
6. i が6になると条件がfalseになり、ループが終了

### for文のよくある使い方

for文は以下のようなシチュエーションでよく使われます：

1. **配列の要素を処理する**
   ```javascript
   let fruits = ["りんご", "バナナ", "オレンジ"];
   
   for (let i = 0; i < fruits.length; i++) {
     console.log(fruits[i]);
   }
   // 出力:
   // りんご
   // バナナ
   // オレンジ
   ```

2. **特定回数の処理を実行する**
   ```javascript
   for (let i = 0; i < 3; i++) {
     console.log("この処理は3回実行されます。");
   }
   ```

3. **テーブルや表を生成する**
   ```javascript
   let table = "";
   
   for (let i = 1; i <= 3; i++) {
     for (let j = 1; j <= 3; j++) {
       table += i * j + "\t";
     }
     table += "\n";
   }
   
   console.log(table);
   // 出力:
   // 1    2    3    
   // 2    4    6    
   // 3    6    9    
   ```

## if文とfor文の違いを理解するための具体例

### 例1：成績判定プログラム

クラスの生徒の点数を処理するプログラムを考えてみましょう。if文は各生徒の成績を判定し、for文はクラス全員の点数を処理します。

```javascript
// 生徒の点数リスト
let scores = [85, 45, 92, 78, 60];

// for文を使って全生徒の点数を処理
for (let i = 0; i < scores.length; i++) {
  let score = scores[i];
  
  // if文を使って各生徒の成績を判定
  if (score >= 90) {
    console.log(`生徒${i+1}の点数は${score}点で、評価はAです。`);
  } else if (score >= 80) {
    console.log(`生徒${i+1}の点数は${score}点で、評価はBです。`);
  } else if (score >= 70) {
    console.log(`生徒${i+1}の点数は${score}点で、評価はCです。`);
  } else if (score >= 60) {
    console.log(`生徒${i+1}の点数は${score}点で、評価はDです。`);
  } else {
    console.log(`生徒${i+1}の点数は${score}点で、評価はFです。`);
  }
}
// 出力:
// 生徒1の点数は85点で、評価はBです。
// 生徒2の点数は45点で、評価はFです。
// 生徒3の点数は92点で、評価はAです。
// 生徒4の点数は78点で、評価はCです。
// 生徒5の点数は60点で、評価はDです。
```

この例では：
- **for文**：生徒の点数リスト全体をループ処理
- **if文**：各生徒の点数に応じて適切な評価を判定

### 例2：パスワード検証プログラム

ユーザーが入力したパスワードが条件を満たしているかチェックするプログラムを考えてみましょう。

```javascript
let password = "Abc123!";
let isValid = true;
let errorMessage = "";

// パスワードの長さをチェック
if (password.length < 8) {
  isValid = false;
  errorMessage = "パスワードは8文字以上必要です。";
} else {
  // 各文字をチェックするためのフラグ
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  let hasSpecial = false;
  
  // for文を使って各文字をチェック
  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    
    if (char >= 'A' && char <= 'Z') {
      hasUpperCase = true;
    } else if (char >= 'a' && char <= 'z') {
      hasLowerCase = true;
    } else if (char >= '0' && char <= '9') {
      hasNumber = true;
    } else {
      hasSpecial = true;
    }
  }
  
  // 各条件をチェック
  if (!hasUpperCase) {
    isValid = false;
    errorMessage = "大文字が含まれていません。";
  } else if (!hasLowerCase) {
    isValid = false;
    errorMessage = "小文字が含まれていません。";
  } else if (!hasNumber) {
    isValid = false;
    errorMessage = "数字が含まれていません。";
  } else if (!hasSpecial) {
    isValid = false;
    errorMessage = "特殊文字が含まれていません。";
  }
}

// 結果を表示
if (isValid) {
  console.log("パスワードは有効です。");
} else {
  console.log("パスワードが無効です: " + errorMessage);
}
// 出力: パスワードが無効です: パスワードは8文字以上必要です。
```

この例では：
- **if文**：パスワードの長さや各種条件を満たしているかの判定
- **for文**：パスワードの各文字を順番にチェック

## if文とfor文を組み合わせる際のよくある間違い

初心者がよく混乱するポイントとして、if文とfor文の組み合わせ方があります。以下によくある間違いと修正例を示します。

### 間違い1：条件分岐と繰り返しの混同

```javascript
// 間違った例
let number = 5;
if (number < 10) {
  for (let i = 0; i < number; i++) {
    console.log(i);
  }
}
```

この例では問題ありませんが、初心者は「number < 10」という条件を繰り返しの条件と混同してしまうことがあります。

### 間違い2：ループ内での条件変更

```javascript
// 間違った例
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    i = 10; // ループを「抜ける」つもりで書いている
  }
  console.log(i);
}

// 正しい例（ループを抜ける場合）
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // breakを使ってループを抜ける
  }
  console.log(i);
}
```

### 間違い3：不要なループ

```javascript
// 非効率な例
let age = 25;
for (let i = 0; i < 1; i++) { // 1回しか実行されないループは不要
  if (age >= 20) {
    console.log("成人です。");
  } else {
    console.log("未成年です。");
  }
}

// 正しい例
let age = 25;
if (age >= 20) {
  console.log("成人です。");
} else {
  console.log("未成年です。");
}
```

## if文とfor文の使い分け方

if文とfor文をいつ使うべきかを判断するためのガイドラインを紹介します：

### if文を使うべき場合

1. **条件に基づいて処理を分岐させたいとき**
   - ユーザーの入力が有効かどうかをチェックする
   - 年齢に応じて異なるメッセージを表示する
   - ログイン状態に応じて表示内容を変える

2. **エラーハンドリングを行いたいとき**
   - ファイルが存在するかチェックしてから開く
   - ネットワーク接続が成功したかどうかを確認する

3. **特定の条件を満たす場合のみ処理を実行したいとき**
   - 管理者のみが特定の機能を使えるようにする
   - 残高が十分ある場合のみ取引を実行する

### for文を使うべき場合

1. **同じ処理を複数回実行したいとき**
   - 1から10までの数字を表示する
   - 特定のメッセージを5回表示する

2. **配列やリストの各要素に対して処理を行いたいとき**
   - ユーザーリストの全員に通知を送る
   - 商品リストの各アイテムを表示する

3. **特定の回数または条件を満たすまで処理を繰り返したいとき**
   - ファイルの各行を読み込む
   - ユーザーが正しい入力をするまで繰り返し質問する

## 実践的な例：ショッピングカートプログラム

最後に、if文とfor文を組み合わせた実践的な例として、シンプルなショッピングカートプログラムを見てみましょう。

```javascript
// 商品データ
const products = [
  { id: 1, name: "Tシャツ", price: 2500, stock: 10 },
  { id: 2, name: "ジーンズ", price: 5000, stock: 5 },
  { id: 3, name: "スニーカー", price: 8000, stock: 3 },
  { id: 4, name: "帽子", price: 1500, stock: 0 }
];

// ショッピングカート
const cart = [
  { productId: 1, quantity: 2 },
  { productId: 3, quantity: 1 }
];

// 合計金額を計算する関数
function calculateTotal() {
  let total = 0;
  
  // for文: カート内の各商品をループ
  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    
    // for文: 商品データから対応する商品を検索
    for (let j = 0; j < products.length; j++) {
      const product = products[j];
      
      // if文: 商品IDが一致するかチェック
      if (cartItem.productId === product.id) {
        // if文: 在庫があるかチェック
        if (product.stock >= cartItem.quantity) {
          // 在庫がある場合は金額を加算
          total += product.price * cartItem.quantity;
          console.log(`${product.name} x ${cartItem.quantity}: ${product.price * cartItem.quantity}円`);
        } else if (product.stock > 0) {
          // 在庫が足りない場合は利用可能な分だけ加算
          total += product.price * product.stock;
          console.log(`${product.name} x ${product.stock}（在庫不足）: ${product.price * product.stock}円`);
        } else {
          // 在庫がない場合はメッセージを表示
          console.log(`${product.name}: 在庫切れ`);
        }
        break; // 商品が見つかったらループを抜ける
      }
    }
  }
  
  return total;
}

// 合計金額を計算して表示
const totalAmount = calculateTotal();
console.log(`合計金額: ${totalAmount}円`);

// 出力:
// Tシャツ x 2: 5000円
// スニーカー x 1: 8000円
// 合計金額: 13000円
```

この例では：
- **外側のfor文**：ショッピングカート内の各商品をループ
- **内側のfor文**：商品データから対応する商品を検索
- **if文（商品ID）**：カート内の商品と商品データを照合
- **if文（在庫チェック）**：商品の在庫状況に応じて処理を分岐

## まとめ

この記事では、if文とfor文の基本的な違いと使い方について解説しました。

- **if文**は条件分岐のための構文で、「もし〜なら、これをする」という判断を行います。
- **for文**は繰り返しのための構文で、「これを〜回繰り返す」という反復を行います。

両者は異なる目的を持ちますが、組み合わせることで複雑な処理を実現できます。プログラミングを学ぶ上で、これらの基本的な制御構文を理解することは非常に重要です。

実際のコードを書く際は、「条件によって処理を変えたいのか」それとも「同じ処理を繰り返したいのか」を考えて、適切な構文を選択しましょう。練習を重ねるうちに、自然と使い分けられるようになります。

次回は、配列やオブジェクトの操作方法について詳しく解説する予定です。お楽しみに！