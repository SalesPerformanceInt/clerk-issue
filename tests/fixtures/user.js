const { randomTenant, tenant } = require("./tenant");
const { BASE_URL, API_AUTH } = require("./env");
const { v4: uuid } = require('uuid')

const user = {
  user_id: "ea9342c1-6abc-4906-88c1-cf2265d77de7",
  account_subdomain: tenant.subdomain,
  first_name: "QC",
  last_name: "Tester",
  email: "qc@test.com",
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

const randomUser = {
  user_id: uuid(),
  account_subdomain: randomTenant.subdomain,
  first_name: "Cucumber",
  last_name: "McTesterson",
  email: "cuke-test@richardson.com",
  language: "en-US",
}

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

module.exports = { user, invalidUser, randomUser, fetchUserReset };
