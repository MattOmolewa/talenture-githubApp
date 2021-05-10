const TOKEN = "";

function fetchUsers() {
  const endPoint = window.encodeURI(`https://api.github.com/users?per_page=10`);

  return fetch(endPoint, {
    method: "GET",
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  }).then((res) => res.json());
}
export default fetchUsers;
