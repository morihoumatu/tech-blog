---
title: '【実践】簡単なToDoリストを作ってみよう！（JavaScript編）'
description: 'JavaScriptを使って基本的なToDoリストアプリを作成する方法を、初心者向けにステップバイステップで解説します。'
pubDate: 'Mar 15 2025'
heroImage: '/tech-blog/blog-placeholder-1.jpg'
---

# 【実践】簡単なToDoリストを作ってみよう！（JavaScript編）

ToDoリストは、プログラミング学習の実践的なプロジェクトとして最適です。この記事では、JavaScriptを使って基本的なToDoリストアプリを作成する方法を、初心者向けにステップバイステップで解説します。

## 目標とする機能

今回作成するToDoリストアプリには、以下の機能を実装します：

1. タスクの追加
2. タスクの完了/未完了の切り替え
3. タスクの削除
4. タスクの一覧表示
5. データの永続化（ローカルストレージ）

## Step 1: HTMLの作成

まずは、アプリケーションの基本構造となるHTMLを作成します。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>シンプルToDoリスト</title>
    <style>
        /* スタイルは後で追加します */
    </style>
</head>
<body>
    <div class="container">
        <h1>ToDoリスト</h1>
        
        <!-- タスク入力フォーム -->
        <div class="input-section">
            <input type="text" id="taskInput" placeholder="新しいタスクを入力">
            <button id="addButton">追加</button>
        </div>
        
        <!-- タスク一覧 -->
        <ul id="taskList"></ul>
    </div>
    
    <script src="app.js"></script>
</body>
</html>
```

## Step 2: CSSでスタイリング

次に、アプリケーションの見た目を整えるCSSを追加します。

```html
<style>
    body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 20px;
        background-color: #f5f5f5;
    }

    .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
        text-align: center;
        color: #333;
    }

    .input-section {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    #taskInput {
        flex: 1;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
    }

    button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: #45a049;
    }

    #taskList {
        list-style: none;
        padding: 0;
    }

    .task-item {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #f9f9f9;
        margin-bottom: 10px;
        border-radius: 4px;
        gap: 10px;
    }

    .task-item.completed {
        background-color: #e8f5e9;
        text-decoration: line-through;
        color: #666;
    }

    .task-item input[type="checkbox"] {
        margin-right: 10px;
    }

    .task-item .task-text {
        flex: 1;
    }

    .delete-button {
        background-color: #f44336;
        padding: 5px 10px;
    }

    .delete-button:hover {
        background-color: #da190b;
    }
</style>
```

## Step 3: JavaScriptの実装

最後に、アプリケーションの機能を実装するJavaScriptコードを作成します。

```javascript
// ToDoリストの管理クラス
class TodoList {
    constructor() {
        // DOMの要素を取得
        this.taskInput = document.getElementById('taskInput');
        this.addButton = document.getElementById('addButton');
        this.taskList = document.getElementById('taskList');
        
        // ローカルストレージからタスクを読み込む
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        // イベントリスナーを設定
        this.addButton.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });
        
        // 初期表示
        this.renderTasks();
    }
    
    // タスクを追加
    addTask() {
        const taskText = this.taskInput.value.trim();
        
        if (taskText) {
            // 新しいタスクを追加
            this.tasks.push({
                id: Date.now(),
                text: taskText,
                completed: false
            });
            
            // 入力フィールドをクリア
            this.taskInput.value = '';
            
            // タスクを保存して表示を更新
            this.saveTasks();
            this.renderTasks();
        }
    }
    
    // タスクを削除
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
        this.renderTasks();
    }
    
    // タスクの完了状態を切り替え
    toggleTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.renderTasks();
        }
    }
    
    // タスクをローカルストレージに保存
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    // タスク一覧を表示
    renderTasks() {
        // タスクリストをクリア
        this.taskList.innerHTML = '';
        
        // 各タスクの要素を作成
        this.tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            
            // チェックボックス
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => this.toggleTask(task.id));
            
            // タスクのテキスト
            const taskText = document.createElement('span');
            taskText.className = 'task-text';
            taskText.textContent = task.text;
            
            // 削除ボタン
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.textContent = '削除';
            deleteButton.addEventListener('click', () => this.deleteTask(task.id));
            
            // 要素を組み立て
            li.appendChild(checkbox);
            li.appendChild(taskText);
            li.appendChild(deleteButton);
            
            // リストに追加
            this.taskList.appendChild(li);
        });
    }
}

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', () => {
    new TodoList();
});
```

## 完成したアプリケーションの機能解説

### 1. タスクの追加

タスクの追加は以下の手順で実装されています：

1. ユーザーがテキスト入力
2. 「追加」ボタンクリックまたはEnterキー押下
3. 入力値のバリデーション（空文字チェック）
4. タスクオブジェクトの作成と配列への追加
5. ローカルストレージへの保存
6. 画面の更新

```javascript
addTask() {
    const taskText = this.taskInput.value.trim();
    
    if (taskText) {
        this.tasks.push({
            id: Date.now(),
            text: taskText,
            completed: false
        });
        
        this.taskInput.value = '';
        this.saveTasks();
        this.renderTasks();
    }
}
```

### 2. タスクの完了/未完了の切り替え

チェックボックスをクリックすることで、タスクの状態を切り替えることができます：

1. チェックボックスの状態変更イベントを検知
2. 対象タスクの完了状態を反転
3. ローカルストレージに保存
4. 画面の更新

```javascript
toggleTask(taskId) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
        this.saveTasks();
        this.renderTasks();
    }
}
```

### 3. タスクの削除

削除ボタンをクリックすることで、タスクを削除できます：

1. 削除ボタンのクリックイベントを検知
2. 対象タスクを配列から削除
3. ローカルストレージに保存
4. 画面の更新

```javascript
deleteTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
    this.renderTasks();
}
```

### 4. データの永続化

ローカルストレージを使用してデータを保存することで、ページをリロードしてもタスクが維持されます：

```javascript
// データの保存
saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
}

// データの読み込み
constructor() {
    // ...
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // ...
}
```

## プログラムの拡張アイデア

このベースとなるToDoリストアプリに、以下のような機能を追加することで、より実践的なアプリケーションに発展させることができます：

### 1. タスクの編集機能

```javascript
// タスクのテキストをダブルクリックで編集可能にする
makeTaskEditable(taskElement, task) {
    const textSpan = taskElement.querySelector('.task-text');
    textSpan.addEventListener('dblclick', () => {
        const input = document.createElement('input');
        input.value = task.text;
        input.className = 'edit-input';
        
        input.addEventListener('blur', () => {
            task.text = input.value.trim();
            this.saveTasks();
            this.renderTasks();
        });
        
        textSpan.parentNode.replaceChild(input, textSpan);
        input.focus();
    });
}
```

### 2. タスクの優先度設定

```javascript
// タスクに優先度を追加
addTask() {
    const taskText = this.taskInput.value.trim();
    const priority = document.getElementById('prioritySelect').value;
    
    if (taskText) {
        this.tasks.push({
            id: Date.now(),
            text: taskText,
            completed: false,
            priority: priority
        });
        // ...
    }
}
```

### 3. タスクの期限設定

```javascript
// タスクに期限を追加
addTask() {
    const taskText = this.taskInput.value.trim();
    const dueDate = document.getElementById('dueDateInput').value;
    
    if (taskText) {
        this.tasks.push({
            id: Date.now(),
            text: taskText,
            completed: false,
            dueDate: dueDate
        });
        // ...
    }
}
```

### 4. タスクのフィルタリング機能

```javascript
// 完了状態でフィルタリング
filterTasks(status) {
    const filteredTasks = status === 'all' 
        ? this.tasks 
        : this.tasks.filter(task => 
            status === 'completed' ? task.completed : !task.completed
        );
    
    this.renderTasks(filteredTasks);
}
```

### 5. タスクの並び替え機能

```javascript
// タスクを並び替え
sortTasks(criteria) {
    switch (criteria) {
        case 'date':
            this.tasks.sort((a, b) => a.id - b.id);
            break;
        case 'priority':
            this.tasks.sort((a, b) => b.priority - a.priority);
            break;
        case 'alphabetical':
            this.tasks.sort((a, b) => a.text.localeCompare(b.text));
            break;
    }
    this.renderTasks();
}
```

## まとめ

この記事では、JavaScriptを使って基本的なToDoリストアプリを作成する方法を学びました。

実装したポイント：
1. クラスベースの設計
2. イベント処理
3. ローカルストレージの活用
4. DOMの操作

このプログラムを基礎として、より高度な機能を追加することで、実践的なWebアプリケーション開発のスキルを磨くことができます。

## 次のステップ

ToDoリストアプリの基本を理解したら、以下の記事も参考にしてください：

- [変数・データ型・関数とは？初心者向けに超わかりやすく解説](/blog/programming-basics-for-beginners/)
- [【入門】条件分岐(if文)を理解してロジックを組み立てよう](/blog/if-statement-guide/)
- [【図解】リスト（配列）と辞書（オブジェクト）の違いを解説](/blog/list-and-dictionary-explained/)