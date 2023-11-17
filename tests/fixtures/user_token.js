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

  const parsed = await response.json();
  return { status: response.status, ...parsed };
};

module.exports = { user, fetchUserToken };
