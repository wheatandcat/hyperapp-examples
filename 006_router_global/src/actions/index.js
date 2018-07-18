export default {
  // 入力は全てこれを使う
  // keyNameは、「data-input-name="*****""」で指定
  onInput: e => state => ({
    [e.target.getAttribute("data-input-name")]: {
      input: { ...state.createUser.input, [e.target.name]: e.target.value }
    }
  }),

  resetCreateUserInput: () => () => ({
    createUser: {
      input: {
        name: "",
        genderCode: "1"
      }
    }
  }),

  /* Users */
  getUsers: () => async (_, actions) => {
    const response = await fetch("http://localhost:3000/users");

    if (!response.ok) {
      return alert("通信エラー");
    }

    const result = await response.json();

    actions.setUsers(result);
  },
  setUsers: users => () => {
    return {
      users: {
        nodes: users
      }
    };
  },

  /* User */
  getUser: id => async (_, actions) => {
    const response = await fetch(`http://localhost:3000/users/${id}`);

    if (!response.ok) {
      return alert("通信エラー");
    }

    const result = await response.json();

    actions.setUser(result);
  },
  setUser: user => () => {
    return {
      user: {
        data: user
      }
    };
  },
  saveUser: () => async (state, actions) => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state.createUser.input)
    });

    if (!response.ok) {
      return alert("登録に失敗しました");
    }

    actions.resetCreateUserInput();
  },
  removeUser: id => async (_, actions) => {
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
    actions.getUsers();
  }
};
