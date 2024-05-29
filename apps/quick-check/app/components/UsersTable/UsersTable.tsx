import { type FC } from "react"

import { useOutletContext } from "~/utils/outletContext"

import { UserRow } from "./components/UserRow"

import type { UserTableProps } from "./UsersTable.types"

export const UsersTable: FC<UserTableProps> = ({ users, link }) => {
  const { isAdminEnabled } = useOutletContext()

  return (
    <table className="min-w-full table-auto text-left text-sm">
      <thead className="border-b bg-white font-medium">
        <tr>
          <th scope="col" className="p-4">
            Name
          </th>
          <th scope="col" className="p-4">
            Email
          </th>
          <th scope="col" className="w-1 whitespace-nowrap p-4">
            Leaderboard
          </th>
          <th scope="col" className="w-1 whitespace-nowrap p-4">
            Daily Email
          </th>
          <th scope="col" className="w-1 whitespace-nowrap p-4">
            Language
          </th>

          {isAdminEnabled && (
            <th scope="col" className="w-1 whitespace-nowrap p-4">
              New Token
            </th>
          )}

          <th scope="col" className="w-1 whitespace-nowrap p-4">
            Login
          </th>

          {isAdminEnabled && (
            <>
              <th scope="col" className="w-1 whitespace-nowrap p-4">
                Reset User
              </th>
              <th scope="col" className="w-1 whitespace-nowrap p-4">
                Send Email
              </th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserRow key={user.user_id} user={user} row={index} link={link} />
        ))}
      </tbody>
    </table>
  )
}
