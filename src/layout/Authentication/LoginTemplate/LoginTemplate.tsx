import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { loginFormSchema, type LoginFormValues, type LoginRequest } from '@/types/auth';
import styles from './LoginTemplate.module.css';
import { useLoginMutation } from '@/api/login';

export interface LoginTemplateProps {
  serverError?: string | null;
  onSwitchToRegister: (arg: 'register') => void;
  onModalOpen: (arg: boolean) => void;
}

export const LoginTemplate: FC<LoginTemplateProps> = ({
  serverError,
  onSwitchToRegister,
  onModalOpen,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const [loginUser, { isLoading }] = useLoginMutation();

  const handleFormSubmit = async (values: LoginFormValues) => {
    const request: LoginRequest = {
      email: values.email,
      password: values.password,
    };

    await loginUser(request).unwrap();

    onModalOpen(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)} noValidate>
      {serverError && <div className={styles.serverError}>{serverError}</div>}

      {/* Email */}
      <div className={styles.fieldGroup}>
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          className={clsx(styles.input, errors.email && styles.inputError)}
          aria-invalid={Boolean(errors.email)}
          {...register('email')}
        />
        {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
      </div>

      {/* Пароль */}
      <div className={styles.fieldGroup}>
        <input
          type="password"
          placeholder="Пароль"
          autoComplete="current-password"
          className={clsx(styles.input, errors.password && styles.inputError)}
          aria-invalid={Boolean(errors.password)}
          {...register('password')}
        />
        {errors.password && <span className={styles.errorMessage}>{errors.password.message}</span>}
      </div>

      {/* Кнопка отправки формы */}
      <button type="submit" className={styles.submitButton} disabled={isLoading}>
        {isLoading ? 'Вход...' : 'Войти'}
      </button>

      {/* Переключение на регистрацию */}
      {onSwitchToRegister && (
        <div className={styles.footer}>
          <span>Нет аккаунта?</span>
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => onSwitchToRegister('register')}
          >
            Зарегистрироваться
          </button>
        </div>
      )}
    </form>
  );
};

export default LoginTemplate;
