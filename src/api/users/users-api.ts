import { client } from '@/services/http/client'
import type { FetchUsers } from './interface'

export const fetchUsers: FetchUsers = (query) => {
  return client.get('/publication/suggest-mention', {
    params: query,
  })
}
