---
title: 'オブジェクト指向って何？初心者向けに超ざっくり解説'
description: 'プログラミング初心者のために、オブジェクト指向プログラミングの基本概念をわかりやすく解説します。'
pubDate: 'Jun 28 2024'
heroImage: '/blog-placeholder-4.jpg'
---

[前半部分は同じなので省略...]

### 3. ポリモーフィズム（Polymorphism）

ポリモーフィズムとは、**異なるオブジェクトに対して共通のインターフェース（メソッド）を提供し、統一的な方法でアクセスできるようにすること**です。これにより、コードの再利用性が高まり、より柔軟なプログラミングが可能になります。

例えば、さまざまな形状の面積を計算する場合：

```javascript
// 親クラス（共通のインターフェースを定義）
class Shape {
  calculateArea() {
    // 基本的な実装（子クラスで具体的な計算方法を提供）
    return 0;
  }
}

// 子クラス
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// 子クラス
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  calculateArea() {
    return this.width * this.height;
  }
}

// 使用例
const shapes = [
  new Circle(5),
  new Rectangle(4, 6)
];

// 共通のインターフェース（calculateArea）を通じて
// 各図形の面積を計算できる
shapes.forEach(shape => {
  console.log(`面積: ${shape.calculateArea()}`);
});
// 出力:
// 面積: 78.53981633974483
// 面積: 24
```

この例では、`Shape`クラスが`calculateArea`という共通のインターフェースを定義し、`Circle`と`Rectangle`がそれぞれ独自の計算方法を提供しています。利用する側は、具体的なクラスの違いを意識することなく、同じインターフェースを通じて面積を計算できます。

これがポリモーフィズムの本質で、共通のインターフェースを通じて異なるオブジェクトを統一的に扱えることが重要なポイントです。

[残りの部分は同じなので省略...]