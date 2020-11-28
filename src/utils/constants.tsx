import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const env = publicRuntimeConfig.NODE_ENV || 'development';

export const baseURL = publicRuntimeConfig.API_END_POINT || 'http://localhost:3000';

export const CountPerPage = 10;

export const NextLoadScrollWeight = 95;

export const ScrollThrottleWeight = 200;

export const TextTitle = '상품 카드 리스트';
