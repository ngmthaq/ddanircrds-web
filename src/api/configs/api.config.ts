import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios, { AxiosError } from "axios";
import { EventBusUtils } from "@/common/utils";
import { ApiConst } from "@/configs/const";

/**
 * Api logic base on Axios
 */
export class Api {
  protected instance: AxiosInstance;

  public constructor() {
    const baseURL = process.env.REACT_APP_API_BASE_URL;
    const timeout = process.env.REACT_APP_API_TIMEOUT;
    this.instance = axios.create({ baseURL: baseURL, timeout: parseInt(timeout || "30000") });
    this.default();
  }

  /**
   * Common API request logic
   *
   * @param url
   * @param method
   * @param params
   * @param data
   * @param configs
   * @returns response
   */
  protected async request(
    url: string,
    method: string,
    params: any = {},
    data: any = {},
    configs: AxiosRequestConfig = {},
    loading: boolean = true,
  ) {
    try {
      if (loading) EventBusUtils.emit<boolean>("openAppLoading", true);
      const requestConfigs: AxiosRequestConfig = { ...configs, url, method, params, data };
      const response = await this.instance.request(requestConfigs);
      return response;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      EventBusUtils.emit<boolean>("openAppLoading", false);
    }
  }

  /**
   * Request with GET method
   *
   * @param url
   * @param params
   * @param configs
   * @returns response
   */
  public async get<T, D = any>(
    url: string,
    params: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "get", params, {}, configs);
  }

  /**
   * Request with GET method without loading
   *
   * @param url
   * @param params
   * @param configs
   * @returns response
   */
  public async getInSilence<T, D = any>(
    url: string,
    params: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "get", params, {}, configs, false);
  }

  /**
   * Request with POST method
   *
   * @param url
   * @param data
   * @param configs
   * @returns response
   */
  public async post<T, D = any>(
    url: string,
    data: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "post", {}, data, configs);
  }

  /**
   * Request with POST method without loading
   *
   * @param url
   * @param data
   * @param configs
   * @returns response
   */
  public async postInSilence<T, D = any>(
    url: string,
    data: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "post", {}, data, configs, false);
  }

  /**
   * Request with PUT method
   *
   * @param url
   * @param data
   * @param configs
   * @returns response
   */
  public async put<T, D = any>(
    url: string,
    data: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "put", {}, data, configs);
  }

  /**
   * Request with PUT method without loading
   *
   * @param url
   * @param data
   * @param configs
   * @returns response
   */
  public async putInSilence<T, D = any>(
    url: string,
    data: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "put", {}, data, configs, false);
  }

  /**
   * Request with PATCH method
   *
   * @param url
   * @param data
   * @param configs
   * @returns response
   */
  public async patch<T, D = any>(
    url: string,
    data: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "patch", {}, data, configs);
  }

  /**
   * Request with PATCH method without loading
   *
   * @param url
   * @param data
   * @param configs
   * @returns response
   */
  public async patchInSilence<T, D = any>(
    url: string,
    data: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "patch", {}, data, configs, false);
  }

  /**
   * Request with DELETE method
   *
   * @param url
   * @param data
   * @param configs
   * @returns response
   */
  public async delete<T, D = any>(
    url: string,
    data: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "delete", {}, data, configs);
  }

  /**
   * Request with DELETE method without loading
   *
   * @param url
   * @param data
   * @param configs
   * @returns response
   */
  public async deleteInSilence<T, D = any>(
    url: string,
    data: any = {},
    configs: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T, D>> {
    return this.request(url, "delete", {}, data, configs, false);
  }

  /**
   * Default interceptors
   *
   * @returns this
   */
  public default() {
    this.instance.interceptors.request.clear();
    this.instance.interceptors.response.clear();
    this.instance.interceptors.request.use(
      (configs) => this.handleDefaultRequestSuccess(configs),
      (error) => this.handleDefaultRequestError(error),
    );
    this.instance.interceptors.response.use(
      (response) => this.handleDefaultResponseSuccess(response),
      (error) => this.handleDefaultResponseError(error),
    );
    return this;
  }

  /**
   * Handle default request success interceptor
   *
   * @param {InternalAxiosRequestConfig} configs
   * @returns {Promise<InternalAxiosRequestConfig>} configs
   */
  protected async handleDefaultRequestSuccess<C>(
    configs: InternalAxiosRequestConfig<C>,
  ): Promise<InternalAxiosRequestConfig<C>> {
    return configs;
  }

  /**
   * Handle default request error interceptor
   *
   * @param {any} error
   * @returns {Promise<any>} error
   */
  protected async handleDefaultRequestError<C>(error: C): Promise<any> {
    return Promise.reject(error);
  }

  /**
   * Handle default response success interceptor
   *
   * @param {AxiosResponse} response
   * @returns {Promise<AxiosResponse>} response
   */
  protected async handleDefaultResponseSuccess(response: AxiosResponse): Promise<AxiosResponse> {
    return response;
  }

  /**
   * Handle default response error interceptor
   *
   * @param {any} error
   * @returns {Promise<any>} error
   */
  protected async handleDefaultResponseError(error: any): Promise<any> {
    return Promise.reject(error);
  }
}

export const api = new Api();

export function responseSuccess<T>(response: AxiosResponse, data?: T) {
  return { status: response.status, data: data || response.data, ok: true, message: null };
}

export function responseError(error: any) {
  console.error(error);

  if (error instanceof AxiosError && error.response) {
    return {
      status: error.response.status,
      data: error.response.data,
      ok: false,
      message: error.response.statusText,
    };
  }

  if (error instanceof AxiosError && error.request) {
    return {
      status: ApiConst.HTTPS_STT_CODE.internalServerError,
      data: null,
      ok: false,
      message: "The request was made but no response was received",
    };
  }

  return {
    status: ApiConst.HTTPS_STT_CODE.internalServerError,
    data: null,
    ok: false,
    message: error.message,
  };
}
