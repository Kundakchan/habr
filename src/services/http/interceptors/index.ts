import { addRequestInterceptor, addResponseInterceptor } from '../client'

import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export function requestCamelToSnake(
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  return {
    ...config,
    params: config.params,
    data: config.data,
  }
}

export function responseSnakeToCamel(response: AxiosResponse) {
  return response.data.data
}

export default function initializeHttpInterceptors() {
  addRequestInterceptor({ request: requestCamelToSnake })
  addResponseInterceptor({
    response: responseSnakeToCamel,
  })
}
