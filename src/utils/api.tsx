import { baseURL } from './constants';
import axios, { AxiosError } from 'axios';

export default axios.create({
  baseURL: baseURL,
  headers: { Accept: 'application/json' },
});

interface IApiError {
  status: string;
  statusCode?: number;
  errorMessage: string;
}

export class ApiError implements IApiError {
  status: string = '';
  statusCode: number | undefined = 0;
  errorMessage: string = '';

  constructor(err: AxiosError) {
    this.status = err.response?.data.status;
    this.statusCode = err.response?.status;
    this.errorMessage = err.response?.data.errorMessage;
  }
}
