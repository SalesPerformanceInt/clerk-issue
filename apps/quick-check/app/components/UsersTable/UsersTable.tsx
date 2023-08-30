import { type FC } from "react";

import { UserRow } from "./components/UserRow";

import type { UserTableProps } from "./UsersTable.types";

export const UsersTable: FC<UserTableProps> = ({ users }) => {
  return (
    <table className="min-w-full table-auto text-left text-sm">
      <thead className="border-b bg-white font-medium">
        <tr>
          <th scope="col" className="px-6 py-4">
            Name
          </th>
          <th scope="col" className="px-6 py-4">
            Email
          </th>
          <th scope="col" className="px-6 py-4">
            Phone
          </th>
          <th scope="col" className="w-1 whitespace-nowrap px-6 py-4">
            SMS Enabled
          </th>
          <th scope="col" className="w-1 whitespace-nowrap px-6 py-4">
            New Token
          </th>
          <th scope="col" className="w-1 whitespace-nowrap px-6 py-4">
            Login
          </th>
          <th scope="col" className="w-1 whitespace-nowrap px-6 py-4">
            Reset
          </th>
          <th scope="col" className="w-1 whitespace-nowrap px-6 py-4">
            Send Email
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserRow key={user.user_id} user={user} row={index} />
        ))}
      </tbody>
    </table>
  );
};
