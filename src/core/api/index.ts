import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: 'https://codingtest.op.gg/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'ko'
  },
  timeout: 10000
});

interface Request extends AxiosRequestConfig {
  url: string;
  body?: FormData;
  lang?: string;
}

export async function request<R>({
  method = 'GET',
  url,
  params,
  lang = 'ko'
}: Request) {
  let data;
  if (method !== 'GET' && params) data = params;

  const { data: result } = await api.request<R>({
    method: method || 'GET',
    url,
    headers: { 'Accept-Language': lang },
    ...(data && { data }),
    ...(params && method === 'GET' && { params })
  });
  return result;
}
