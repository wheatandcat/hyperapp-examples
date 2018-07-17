import { h } from "hyperapp";

export default () => (state, actions) => (
  <main>
    <h1>form</h1>
    名前:{" "}
    <input
      type="text"
      placeholder="name"
      name="name"
      value={state.createUser.input.name}
      oninput={actions.createUser.onInput}
    />
    <br />
    性別:{" "}
    <input
      type="radio"
      name="genderCode"
      value={1}
      checked={state.createUser.input.genderCode == 1}
      oninput={actions.createUser.onInput}
    />男性{" "}
    <input
      type="radio"
      name="genderCode"
      value={2}
      checked={state.createUser.input.genderCode == 2}
      oninput={actions.createUser.onInput}
    />女性
    <br />
    <br />
    <div>
      <button onclick={actions.createUser.save}>登録</button>
    </div>
  </main>
);
