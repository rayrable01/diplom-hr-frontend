export type Field = Record<string, string>;

export interface Error {
  statusCode: number;
  errorCode: string;
  message: string;
  fields: Field;
}
