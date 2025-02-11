export interface FetchUsersResponse {
  type: string
  alias: string
  name: string | null
  avatar: string | null
}

export interface FetchUsersRequest {
  q: string
}
export interface FetchUsers {
  (payload: FetchUsersRequest): Promise<FetchUsersResponse>
}
