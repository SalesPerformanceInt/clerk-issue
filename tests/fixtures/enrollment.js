const { invalidUser, user, fetchUserReset } = require("./user");
const { BASE_URL, API_AUTH } = require("./env");

const zeroPad = (num, places) => String(num).padStart(places, "0");

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const months = zeroPad(month, 2);
  const day = date.getDate();
  const days = zeroPad(day, 2);
  return `${year}-${months}-${days}`;
};

const now = new Date();
const expiry = new Date();
expiry.setDate(now.getDate() + 14);

const enrollment = {
  user,
  enrollment_id: "b88ff454-3e2b-4db7-9dba-9c895118b630",
  cms_topic_id: "bltaf3e7b9abde0e86a", // Prosperous Account Strategy on Tantalum
  start_date: formatDate(now),
  expiration_date: formatDate(expiry),
};

const invalidEnrollment = {
  user: invalidUser,
  enrollment_id: "notvalid",
  cms_topic_id: "bltaf3e7b9abde0e86a", // Prosperous Account Strategy on Tantalum
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

  const res_obj = await response.json();
  console.log({ BASE_URL, enr, res_obj });
  return { status: response.status, ...res_obj };
};

module.exports = { invalidEnrollment, enrollment, fetchEnrollmentImport };
