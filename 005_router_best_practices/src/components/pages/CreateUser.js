import { h } from "hyperapp";

export const state = {
  input: {
    name: "",
    genderCode: "1"
  }
};

export const actions = {
  onInput: e => state => ({
    input: {
      ...state.input,
      [e.target.name]: e.target.value
    }
  }),
  resetInput: () => () => ({
    input: {
      name: "",
      genderCode: "1"
    }
  }),
  save: () => async (state, actions) => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state.input)
    });

    if (!response.ok) {
      return alert("登録に失敗しました");
    }

    actions.resetInput();
  }
};

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
