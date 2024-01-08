const { v4: uuid } = require("uuid");
const { customAlphabet } = require("nanoid");
const { BASE_URL, API_AUTH } = require("./env");
const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);

const tenant = {
  id: "d61afea6-bdbb-4b66-93d9-377d4c06cc29",
  subdomain: "qctest",
};

const randomTenant = {
  id: uuid(),
  subdomain: "zzz" + nanoid(),
};

const fetchTenantClean = async () => {
  const response = await fetch(`${BASE_URL}/api/tenant/clean`, {
    method: "POST",
    headers: {
      Authorization: API_AUTH,
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const parsed = await response.json();
  return { status: response.status, ...parsed };
};

module.exports = { randomTenant, tenant, fetchTenantClean };
