# About this directory 

defineで定義するパターンを試してみる

# Reference page

https://nulab.com/ja/blog/cacoo/web-components/

# Change log

1. template用HTMLファイルとJSファイルの作成・index.htmlから読み込み
2. テンプレートリテラルで実装してみる
3. slotなしでCustom ComponentsにDOM要素を注入する  
4. slotでCustom ComponentsにDOM要素を注入する
    - `attachShadow({mode: "open"})` を `super` 実行後に行い、 `this.shadowRoot.innerHTML` にテンプレート要素を入れないとSlotとして実行されない
    - `attachShadow` を行わないと、内部のDOMが親から注入しようとしたDOMにまるごと上書きされちゃってだめ❌
5. Templateの記述を `template.html` に移動