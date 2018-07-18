# hyperapp-examples

## ドキュメント
 * [hyperapp](https://github.com/hyperapp/hyperapp)
 * [hyperapp/router](https://github.com/hyperapp/router)
 
## examples

* 001_simple
 * 公式サンプルコード
* 002_fetch
　　* 画面アクセス時にmockサーバーにfetchして取得したデータを表示
* 003_form
　　* 入力フォームの値をmockサーバーにPOSTしてデータを追加
* 004_router
 * ルーティング追加
* 005_router_best_practices
 * ルーティング追加（できるだけファイルを一つにまとめる構成）

## mockサーバーの起動（各サンプルの起動はmockサーバーをローカルで実行している前提になっています）

```
cd mock-server
npm i
npm run mock
```
