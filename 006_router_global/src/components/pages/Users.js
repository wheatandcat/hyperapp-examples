import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <main oncreate={actions.getUsers}>
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
            <button onclick={() => actions.removeUser(user.id)}>削除</button>
          </td>
        </tr>
      ))}
    </table>
  </main>
);
