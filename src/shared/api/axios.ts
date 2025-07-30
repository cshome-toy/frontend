import axios, { type AxiosResponse } from 'axios';

interface PostRequestParams<TData> {
  request: string;
  headers?: { [key: string]: string };
  data?: TData;
}

interface DeleteRequestParams {
  request: string;
  headers?: { [key: string]: string };
}

interface GetRequestParams<TParams> {
  request: string;
  headers?: { [key: string]: string };
  params?: TParams;
}

const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

export async function get<TResponse, TParams = unknown>(
  config: GetRequestParams<TParams>
): Promise<AxiosResponse<TResponse>> {
  const { request, headers, params } = config;
  try {
    const response = await instance.get<TResponse>(request, {
      withCredentials: true,
      params: params,
      headers: headers || undefined,
    });
    return response;
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) throw new Error(error.response?.data.message);
    else throw new Error('에러가 발생했습니다');
  }
}

export async function post<TData, TResponse = unknown>(
  config: PostRequestParams<TData>
): Promise<AxiosResponse<TResponse>> {
  const { request, data, headers } = config;
  try {
    const response = await instance.post<TResponse, AxiosResponse<TResponse>, TData>(request, data, {
      withCredentials: true,
      headers: headers || undefined,
    });
    return response;
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) throw new Error(error.response?.data.message);
    else throw new Error('에러가 발생했습니다');
  }
}

export async function put<TData, TResponse = unknown>(
  config: PostRequestParams<TData>
): Promise<AxiosResponse<TResponse>> {
  const { request, data, headers } = config;
  try {
    const response = await instance.put<TResponse, AxiosResponse<TResponse>, TData>(request, data, {
      withCredentials: true,
      headers: headers || undefined,
    });
    return response;
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) throw new Error(error.response?.data.message);
    else throw new Error('에러가 발생했습니다');
  }
}

export async function del<TResponse = unknown>(config: DeleteRequestParams): Promise<AxiosResponse<TResponse>> {
  const { request, headers } = config;
  try {
    const response = await instance.delete<TResponse, AxiosResponse<TResponse>>(request, {
      withCredentials: true,
      headers: headers || undefined,
    });
    return response;
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) throw new Error(error.response?.data.message);
    else throw new Error('에러가 발생했습니다');
  }
}
