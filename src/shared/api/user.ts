import axios, { type AxiosHeaders, type AxiosResponse } from 'axios';
import { getCookie } from '../utils/cookie';

interface PostRequestParams<TData> {
  request: string;
  headers?: AxiosHeaders | { [key: string]: string };
  data?: TData;
}

interface GetRequestParams<TParams> {
  request: string;
  headers?: AxiosHeaders;
  params?: TParams;
}

const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

instance.interceptors.request.use(async (config) => {
  if (typeof window !== 'undefined') {
    const stored = getCookie('accessToken');
    if (stored) {
      const accessToken = stored;
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
});

export async function userGet<TResponse, TParams = unknown>(
  config: GetRequestParams<TParams>
): Promise<AxiosResponse<TResponse>> {
  const { request, headers, params } = config;
  try {
    const response = await instance.get<TResponse>(request, {
      params: params,
      headers: headers || undefined,
    });
    return response;
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) throw new Error(error.message);
    else throw new Error('에러가 발생했습니다');
  }
}

export async function userPost<TData, TResponse = unknown>(
  config: PostRequestParams<TData>
): Promise<AxiosResponse<TResponse>> {
  const { request, headers, data } = config;
  try {
    const response = await instance.post<TResponse, AxiosResponse<TResponse>, TData>(request, data, {
      headers: headers || undefined,
    });
    return response;
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) throw new Error(error.response?.data.message);
    else throw new Error('에러가 발생했습니다');
  }
}

export async function userPut<TData, TResponse = unknown>(
  config: PostRequestParams<TData>
): Promise<AxiosResponse<TResponse>> {
  const { request, headers, data } = config;
  try {
    const response = await instance.put<TResponse, AxiosResponse<TResponse>, TData>(request, data, {
      headers: headers || undefined,
    });
    return response;
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) throw new Error(error.response?.data.message);
    else throw new Error('에러가 발생했습니다');
  }
}

export async function userDel<TResponse = unknown>(
  config: Omit<PostRequestParams<unknown>, 'data'>
): Promise<AxiosResponse<TResponse>> {
  const { request, headers } = config;
  try {
    const response = await instance.delete<TResponse, AxiosResponse<TResponse>>(request, {
      headers: headers || undefined,
    });
    return response;
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) throw new Error(error.response?.data.message);
    else throw new Error('에러가 발생했습니다');
  }
}

export async function userPatch<TData, TResponse = unknown>(
  config: PostRequestParams<TData>
): Promise<AxiosResponse<TResponse>> {
  const { request, headers, data } = config;
  try {
    const response = await instance.patch<TResponse, AxiosResponse<TResponse>, TData>(request, data, {
      headers: headers || undefined,
    });
    return response;
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) throw new Error(error.response?.data.message);
    else throw new Error('에러가 발생했습니다');
  }
}
