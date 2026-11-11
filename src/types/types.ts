export interface HealthPositiveResponse {
  status: 'ok';
  version: string;
}

export interface HealthBadResponse {
  status: 'fail';
  detail: string;
  version: string;
}

export type Role = 'candidate' | 'hr';
