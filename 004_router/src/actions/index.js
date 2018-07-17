export default {
  createUser: {
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
  },

  users: {
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
  },

  user: {
    get: id => async (_, actions) => {
      const response = await fetch(`http://localhost:3000/users/${id}`);

      if (!response.ok) {
        return alert("通信エラー");
      }

      const result = await response.json();

      actions.set(result);
    },

    set: user => () => {
      return { data: user };
    }
  }
};
