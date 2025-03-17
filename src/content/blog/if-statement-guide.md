---
title: '【入門】条件分岐(if文)を理解してロジックを組み立てよう'
description: 'プログラミングの基本中の基本、if文による条件分岐の使い方を初心者向けにわかりやすく解説します。'
pubDate: 'Jul 25 2024'
heroImage: '/tech-blog/blog-placeholder-3.jpg'
---

# 【入門】条件分岐(if文)を理解してロジックを組み立てよう

プログラミングにおいて、条件に応じて処理を変えることは非常に重要です。この記事では、条件分岐の基本となるif文について、初心者にもわかりやすく解説します。

## if文とは？

if文は、「もし〜なら、これをする」という条件分岐を実現するための構文です。日常生活でも私たちは常に条件分岐を行っています：

- もし雨が降っているなら、傘を持っていく
- もし財布を忘れたなら、家に取りに戻る
- もし電車が遅れているなら、別のルートを検討する

これらと同じように、プログラムでも状況に応じて異なる処理を行いたい場合にif文を使用します。

## if文の基本構文

JavaScriptを例に、if文の基本的な書き方を見ていきましょう。

### 1. 単純なif文

```javascript
if (条件) {
    // 条件が真(true)の場合に実行される処理
}
```

具体例：
```javascript
let age = 20;

if (age >= 20) {
    console.log("成人です");
}
```

### 2. if-else文

```javascript
if (条件) {
    // 条件が真(true)の場合に実行される処理
} else {
    // 条件が偽(false)の場合に実行される処理
}
```

具体例：
```javascript
let age = 18;

if (age >= 20) {
    console.log("成人です");
} else {
    console.log("未成年です");
}
```

### 3. if-else if-else文

```javascript
if (条件1) {
    // 条件1が真の場合の処理
} else if (条件2) {
    // 条件2が真の場合の処理
} else {
    // どの条件も満たさない場合の処理
}
```

具体例：
```javascript
let score = 85;

if (score >= 90) {
    console.log("評価：A");
} else if (score >= 80) {
    console.log("評価：B");
} else if (score >= 70) {
    console.log("評価：C");
} else {
    console.log("評価：D");
}
```

## 条件式の書き方

### 1. 比較演算子

```javascript
// 等しい
if (x === y) {}

// 等しくない
if (x !== y) {}

// より大きい
if (x > y) {}

// より小さい
if (x < y) {}

// 以上
if (x >= y) {}

// 以下
if (x <= y) {}
```

### 2. 論理演算子

```javascript
// AND演算子（&&）：両方の条件が真
if (age >= 20 && hasLicense) {
    console.log("運転できます");
}

// OR演算子（||）：どちらかの条件が真
if (isHoliday || isWeekend) {
    console.log("お休みです");
}

// NOT演算子（!）：条件の否定
if (!isWorking) {
    console.log("仕事していません");
}
```

## 実践的な例

### 1. ユーザー認証

```javascript
function checkLogin(username, password) {
    if (username === "") {
        return "ユーザー名を入力してください";
    }
    
    if (password === "") {
        return "パスワードを入力してください";
    }
    
    if (username === "admin" && password === "12345") {
        return "ログイン成功！";
    } else {
        return "ユーザー名またはパスワードが間違っています";
    }
}

console.log(checkLogin("admin", "12345")); // "ログイン成功！"
console.log(checkLogin("admin", "wrong")); // "ユーザー名またはパスワードが間違っています"
```

### 2. 商品の割引計算

```javascript
function calculateDiscount(price, quantity, isPremiumMember) {
    let discount = 0;
    
    // 数量割引
    if (quantity >= 10) {
        discount = 0.1; // 10個以上で10%割引
    } else if (quantity >= 5) {
        discount = 0.05; // 5個以上で5%割引
    }
    
    // プレミアム会員割引
    if (isPremiumMember) {
        discount += 0.05; // さらに5%追加割引
    }
    
    // 最大割引率は20%まで
    if (discount > 0.2) {
        discount = 0.2;
    }
    
    const finalPrice = price * quantity * (1 - discount);
    return finalPrice;
}

console.log(calculateDiscount(1000, 6, true));  // 5700 (10%割引)
console.log(calculateDiscount(1000, 3, false)); // 3000 (割引なし)
```

### 3. 成績判定

```javascript
function evaluateGrade(score) {
    if (typeof score !== "number") {
        return "点数は数値で入力してください";
    }
    
    if (score < 0 || score > 100) {
        return "点数は0から100の間で入力してください";
    }
    
    let grade;
    let message;
    
    if (score >= 90) {
        grade = "A";
        message = "素晴らしい成績です！";
    } else if (score >= 80) {
        grade = "B";
        message = "良い成績です！";
    } else if (score >= 70) {
        grade = "C";
        message = "合格です";
    } else if (score >= 60) {
        grade = "D";
        message = "もう少し頑張りましょう";
    } else {
        grade = "F";
        message = "不合格です。再挑戦してください";
    }
    
    return `評価：${grade} - ${message}`;
}

console.log(evaluateGrade(95));  // "評価：A - 素晴らしい成績です！"
console.log(evaluateGrade(75));  // "評価：C - 合格です"
console.log(evaluateGrade(50));  // "評価：F - 不合格です。再挑戦してください"
```

## よくある間違いと注意点

### 1. 等価演算子の使い分け

```javascript
// 悪い例（型の変換が行われる）
if (x == "5") {}

// 良い例（型も含めて比較）
if (x === "5") {}
```

### 2. ブロックの省略

```javascript
// 悪い例（バグの原因になりやすい）
if (condition)
    doSomething();
    doSomethingElse(); // このコードは常に実行される

// 良い例
if (condition) {
    doSomething();
    doSomethingElse();
}
```

### 3. 複雑な条件のネスト

```javascript
// 悪い例（ネストが深い）
if (condition1) {
    if (condition2) {
        if (condition3) {
            // 処理
        }
    }
}

// 良い例（早期リターン）
if (!condition1) return;
if (!condition2) return;
if (!condition3) return;
// 処理
```

## 条件分岐をシンプルに書くテクニック

### 1. 三項演算子

シンプルな条件分岐は三項演算子を使うと1行で書けます。

```javascript
// if文を使った場合
let message;
if (age >= 20) {
    message = "成人";
} else {
    message = "未成年";
}

// 三項演算子を使った場合
let message = age >= 20 ? "成人" : "未成年";
```

### 2. オブジェクトを使ったマッピング

多くのif-elseを使う代わりに、オブジェクトでマッピングする方法もあります。

```javascript
// if文を使った場合
function getDayName(dayNumber) {
    if (dayNumber === 0) return "日曜日";
    if (dayNumber === 1) return "月曜日";
    if (dayNumber === 2) return "火曜日";
    if (dayNumber === 3) return "水曜日";
    if (dayNumber === 4) return "木曜日";
    if (dayNumber === 5) return "金曜日";
    if (dayNumber === 6) return "土曜日";
    return "不正な値です";
}

// オブジェクトを使った場合
const dayNames = {
    0: "日曜日",
    1: "月曜日",
    2: "火曜日",
    3: "水曜日",
    4: "木曜日",
    5: "金曜日",
    6: "土曜日"
};

function getDayName(dayNumber) {
    return dayNames[dayNumber] || "不正な値です";
}
```

### 3. 早期リターンパターン

条件のネストを避けるために、条件を満たさない場合は早めにリターンする方法です。

```javascript
// ネストが深い例
function processUser(user) {
    if (user) {
        if (user.isActive) {
            if (user.hasPermission) {
                // 処理
                return "処理成功";
            } else {
                return "権限がありません";
            }
        } else {
            return "アカウントが無効です";
        }
    } else {
        return "ユーザーが見つかりません";
    }
}

// 早期リターンを使った例
function processUser(user) {
    if (!user) return "ユーザーが見つかりません";
    if (!user.isActive) return "アカウントが無効です";
    if (!user.hasPermission) return "権限がありません";
    
    // 処理
    return "処理成功";
}
```

## 実践的な例：ショッピングカートの実装

以下は、if文を使用したショッピングカートの実装例です：

```javascript
class ShoppingCart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }
    
    addItem(item) {
        // 入力値の検証
        if (!item.name || !item.price) {
            throw new Error("商品名と価格は必須です");
        }
        
        if (item.price < 0) {
            throw new Error("価格は0以上である必要があります");
        }
        
        // 既存の商品かチェック
        const existingItem = this.items.find(i => i.name === item.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...item,
                quantity: 1
            });
        }
        
        this.calculateTotal();
    }
    
    removeItem(itemName) {
        const index = this.items.findIndex(item => item.name === itemName);
        if (index === -1) {
            throw new Error("指定された商品が見つかりません");
        }
        
        this.items.splice(index, 1);
        this.calculateTotal();
    }
    
    calculateTotal() {
        let total = 0;
        
        this.items.forEach(item => {
            let price = item.price * item.quantity;
            
            // 数量割引の適用
            if (item.quantity >= 5) {
                price *= 0.9; // 5個以上で10%割引
            }
            
            total += price;
        });
        
        // 合計金額による割引
        if (total >= 10000) {
            total *= 0.95; // 10000円以上で5%割引
        }
        
        this.totalPrice = Math.floor(total); // 小数点以下切り捨て
    }
    
    getTotal() {
        return this.totalPrice;
    }
    
    getSummary() {
        if (this.items.length === 0) {
            return "カートは空です";
        }
        
        let summary = "カートの中身:\n";
        this.items.forEach(item => {
            summary += `${item.name}: ${item.price}円 × ${item.quantity}個\n`;
        });
        summary += `合計: ${this.totalPrice}円`;
        
        return summary;
    }
}

// 使用例
const cart = new ShoppingCart();

try {
    cart.addItem({ name: "りんご", price: 200 });
    cart.addItem({ name: "りんご", price: 200 });
    cart.addItem({ name: "バナナ", price: 100 });
    
    console.log(cart.getSummary());
    // 出力:
    // カートの中身:
    // りんご: 200円 × 2個
    // バナナ: 100円 × 1個
    // 合計: 500円
    
} catch (error) {
    console.error("エラーが発生しました:", error.message);
}
```

## まとめ

if文による条件分岐は、プログラミングの基本中の基本です。以下のポイントを押さえておきましょう：

1. **基本構文を理解する**
   - 単純なif文
   - if-else文
   - if-else if-else文

2. **条件式の書き方を学ぶ**
   - 比較演算子の使い方
   - 論理演算子の使い方
   - 複合条件の作り方

3. **実践的なテクニックを身につける**
   - 三項演算子の活用
   - オブジェクトによるマッピング
   - 早期リターンパターン

条件分岐は、プログラムの流れを制御する重要な要素です。基本をしっかり理解し、実践を重ねることで、より効率的で読みやすいコードが書けるようになります。

## 次のステップ

条件分岐の基本を理解したら、以下の記事も参考にしてください：

- [【基礎から学ぶ】関数の作り方と使い方を徹底解説](/blog/function-basics-guide/)
- [プログラミング初心者が最初に学ぶべき5つの概念](/blog/programming-concepts-for-beginners/)
- [【図解】アルゴリズムとは？初心者が知るべき基本概念](/blog/algorithm-basics-explained/)