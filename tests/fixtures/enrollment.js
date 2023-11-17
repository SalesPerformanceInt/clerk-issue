const { invalidUser, user, fetchUserReset } = require("./user");
const { BASE_URL, API_AUTH } = require("./env");

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const days = day.toString().length === 1 ? `0${day}` : day;
  return `${year}-${month}-${days}`;
};

const now = new Date();
const expiry = new Date();
expiry.setDate(now.getDate() + 14);

const enrollment = {
  user,
  enrollment_id: "b88ff454-3e2b-4db7-9dba-9c895118b630",
  cms_topic_id: "blt38ecbc80bb8dee1f", // Sprint Prospecting on Dev-tantalum
  start_date: formatDate(now),
  expiration_date: formatDate(expiry),
};

const invalidEnrollment = {
  invalidUser,
  enrollment_id: "notvalid",
  cms_topic_id: "blt38ecbc80bb8dee1f", // Sprint Prospecting on Dev-tantalum
  start_date: formatDate(now),
  expiration_date: formatDate(expiry),
};

const fetchEnrollmentImport = async (enr) => {
  const response = await fetch(`${BASE_URL}/api/enrollment/import`, {
    method: "POST",
    headers: {
      Authorization: API_AUTH,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(enr),
  });

  const parsed = await response.json();
  console.log({ parsed, enr });
  return { status: response.status, ...parsed };
};

module.exports = { invalidEnrollment, enrollment, fetchEnrollmentImport };
