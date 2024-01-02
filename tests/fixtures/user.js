const { tenant } = require("./tenant");
const { BASE_URL, API_AUTH } = require("./env");

const user = {
  user_id: "ea9342c1-6abc-4906-88c1-cf2265d77de7",
  account_subdomain: tenant.subdomain,
  first_name: "Erlich",
  last_name: "Bachman",
  email: "erlich@bachmanity.com",
  language: "en-US",
};

const invalidUser = {
  user_id: "oops",
  account_subdomain: tenant.subdomain,
  first_name: "Peter",
  last_name: "Gregory",
  email: "peter.gregory@raviga.com",
  language: "en-US",
};

const fetchUserReset = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/user/reset`, {
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

module.exports = { user, invalidUser, fetchUserReset };
