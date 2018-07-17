import { h, app } from "hyperapp";

const state = {
  users: []
};

const actions = {
  getUsers: () => async () => {
    const response = await fetch("http://localhost:3000/users");

    if (!response.ok) {
      return alert("通信エラー");
    }

    const result = await response.json();

    main.setUsers(result);
  },
  setUsers: users => () => ({ users })
};

const view = (state, actions) => (
  <main>
    <h1>users</h1>
    <ul>
      {state.users.map((user, index) => <li key={index}>{user.name}</li>)}
    </ul>
    <button onclick={actions.getUsers}>更新</button>
  </main>
);

export const main = app(state, actions, view, document.body);

// 表示の際にfetchする
main.getUsers();
