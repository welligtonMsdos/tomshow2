export interface Result<T> {
  success: boolean;
  data: T;
  message: string;
  errors: any; // Aqui virão os erros do FluentValidation
}
