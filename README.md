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
* 005_router_bundle
 * ルーティング追加（できるだけファイルを一つにまとめる構成）
* 006_router_global
 * ルーティング追加（actionsを全てユニーク命名にして、どの画面でも跨いで使うようにして実装スピードを早める構成）


## mockサーバーの起動（各サンプルの起動はmockサーバーをローカルで実行している前提になっています）

```
cd mock-server
npm i
npm run mock
```
