import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export const state = {
  nodes: []
};

export const actions = {
  remove: id => async (_, actions) => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      return alert("削除に失敗しました");
    }

    // リストを再取得
    actions.get();
  },

  get: () => async (_, actions) => {
    const response = await fetch("http://localhost:3000/users");

    if (!response.ok) {
      return alert("通信エラー");
    }

    const result = await response.json();

    actions.set(result);
  },

  set: users => () => {
    return { nodes: users };
  }
};

export default () => (state, actions) => (
  <main oncreate={actions.users.get}>
    <h1>users</h1>
    <table border="1" style={{ width: "30rem" }}>
      <tr>
        <th>id</th>
        <th>名前</th>
        <th>性別</th>
        <th>action</th>
      </tr>

      {state.users.nodes.map((user, index) => (
        <tr key={index}>
          <td>
            <Link to={`/users/${user.id}`}>{user.id}</Link>
          </td>
          <td>{user.name}</td>
          <td>{user.genderCode == "1" ? "男性" : "女性"}</td>
          <td>
            <button onclick={() => actions.users.remove(user.id)}>削除</button>
          </td>
        </tr>
      ))}
    </table>
  </main>
);
