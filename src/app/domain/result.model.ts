export interface Result<T> {
  success: boolean;
  data: T;
  message: string;
  errors: { [key: string]: string[] } | null;
}
