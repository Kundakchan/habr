import type { UsersApi } from './users-api.interface'
import { fetchUsers } from './users-api'

export const usersApi: UsersApi = {
  fetchUsers,
}

export type { FetchUsers, FetchUsersRequest, FetchUsersResponse } from './interface'
