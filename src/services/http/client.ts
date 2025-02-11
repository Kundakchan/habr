import axios from 'axios'
import type { AddRequestInterceptor, AddResponseInterceptor } from './interface'
import {
  defaultErrorInterceptor,
  defaultRequestInterceptor,
  defaultResponseInterceptor,
} from './interceptors/default'

export const addRequestInterceptor: AddRequestInterceptor = ({ request, error }) => {
  const interceptor = client.interceptors.request.use(
    request ?? defaultRequestInterceptor,
    error ?? defaultErrorInterceptor,
  )
  return () => {
    client.interceptors.request.eject(interceptor)
  }
}

export const addResponseInterceptor: AddResponseInterceptor = ({ response, error }) => {
  const interceptor = client.interceptors.response.use(
    response ?? defaultResponseInterceptor,
    error ?? defaultErrorInterceptor,
  )
  return () => {
    client.interceptors.response.eject(interceptor)
  }
}

export const client = axios.create({
  baseURL: 'https://habr.com/kek/v2',
  timeout: 3000,
})
