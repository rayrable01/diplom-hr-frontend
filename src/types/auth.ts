import z from 'zod';

export const registerRequestSchema = z.object({
  email: z.email(),
  password: z.string(),
  fullName: z.string(),
  role: z.enum(['candidate', 'hr']),
});

export const registerFormSchema = z
  .object({
    firstName: z.string().trim().min(2, 'Имя должно содержать минимум 2 символа'),
    lastName: z.string().trim().min(2, 'Фамилия должна содержать минимум 2 символа'),
    email: z.string().trim().email('Некорректный email адрес'),
    password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
    confirmPassword: z.string().min(1, 'Подтвердите пароль'),
    role: z.enum(['candidate', 'hr']),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type RegisterFormValues = z.infer<typeof registerFormSchema>;

export const registerResponseSchema = z.object({
  id: z.number(),
  email: z.string(),
  role: z.enum(['candidate', 'hr']),
  fullName: z.string(),
  createdAt: z.string(),
});

export const loginRequestSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export const loginFormSchema = z.object({
  email: z.string().trim().email('Некорректный email адрес'),
  password: z.string().min(1, 'Введите пароль'),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export const userSchema = z.object({
  id: z.number(),
  email: z.email(),
  role: z.enum(['candidate', 'hr']),
  fullName: z.string(),
  createdAt: z.string(),
});

export const LoginResponseSchema = z.object({
  accessToken: z.string(),
  tokenType: z.string(),
  user: userSchema,
});

export const RefreshRequestSchema = z.object({
  refreshToken: z.string(),
});

export const RefreshResponseSchema = z.object({
  accessToken: z.string(),
  tokenType: z.string(),
});

export type RegisterRequest = z.infer<typeof registerRequestSchema>;
export type RegisterResponse = z.infer<typeof registerResponseSchema>;

export type User = z.infer<typeof userSchema>;

export type LoginRequest = z.infer<typeof loginRequestSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;

export type RefreshRequest = z.infer<typeof RefreshRequestSchema>;
export type RefreshResponse = z.infer<typeof RefreshResponseSchema>;
