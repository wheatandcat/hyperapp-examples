export default {
  createUser: {
    input: {
      name: "",
      genderCode: "1"
    }
  },
  // FIXME: 仕様で直下に配列にできないので連想配列にしている
  users: {
    nodes: []
  },
  user: {
    data: null
  }
};
