const { user } = require("./user");
const { BASE_URL, API_AUTH } = require("./env");

const fetchUserToken = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/user/token`, {
    method: "POST",
    headers: {
      Authorization: API_AUTH,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ userId }),
  });

  const res_obj = await response.json();
  console.log(res_obj.loginUrl)
  return { status: response.status, ...res_obj };
};

module.exports = { user, fetchUserToken };
