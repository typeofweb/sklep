import { parse } from 'url';

import type { Nil } from '@sklep/types';

type NameToType = {
  readonly CART_COOKIE_PASSWORD: string;
  readonly COOKIE_DOMAIN: string;
  readonly COOKIE_PASSWORD: string;
  readonly DATABASE_URL: string;
  readonly DB_HOSTNAME: string;
  readonly DB_NAME: string;
  readonly DB_PASSWORD: string;
  readonly DB_USERNAME: string;
  readonly ENV: 'production' | 'staging' | 'development' | 'test';
  readonly HOST: string;
  readonly NODE_ENV: 'production' | 'development';
  readonly PORT: number;
  readonly STRIPE_API_KEY: string;
  readonly STRIPE_WEBHOOK_SECRET: string;
};

function getConfigForName<T extends keyof NameToType>(name: T): Nil<NameToType[T]>;
function getConfigForName(name: keyof NameToType): Nil<NameToType[keyof NameToType]> {
  const val = process.env[name];
  const parsed = parse(process.env.DATABASE_URL || '');

  switch (name) {
    case 'NODE_ENV':
      return val || 'development';
    case 'ENV':
      return val || 'development';
    case 'PORT':
      return Number.parseInt(val?.trim() || '3000', 10);
    case 'DB_USERNAME':
      return val || parsed.auth?.split(':')[0];
    case 'DB_PASSWORD':
      return val || parsed.auth?.split(':')[1];
    case 'DB_NAME':
      return val || parsed.pathname?.slice(1);
    case 'DB_HOSTNAME':
      return val || parsed.hostname;
    default:
      return val;
  }
}

export function getConfig<T extends keyof NameToType>(name: T): NameToType[T];
export function getConfig(name: keyof NameToType): NameToType[keyof NameToType] {
  const val = getConfigForName(name);

  if (!val) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }

  return val;
}

export const isProd = () => getConfig('ENV') === 'production';
export const isStaging = () => getConfig('ENV') === 'staging';
