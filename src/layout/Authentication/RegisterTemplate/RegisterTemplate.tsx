import type { FC } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { registerFormSchema, type RegisterFormValues, type RegisterRequest } from '@/types/auth';
import styles from './RegisterTemplate.module.css';
import { useRegisterMutation } from '@/api/register';

export interface RegisterTemplateProps {
  serverError?: string | null;
  onSwitchToLogin: (arg: 'auth') => void;
  onModalOpen: (arg: boolean) => void;
}

export const RegisterTemplate: FC<RegisterTemplateProps> = ({
  serverError,
  onSwitchToLogin,
  onModalOpen,
}) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      role: 'candidate',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  });

  const [registerUser, { isLoading }] = useRegisterMutation();

  const selectedRole = useWatch({ control, name: 'role' }) ?? 'candidate';

  const handleRoleChange = (role: 'candidate' | 'hr') => {
    setValue('role', role, { shouldValidate: true });
  };

  const handleFormSubmit = async (values: RegisterFormValues) => {
    const fullName = `${values.firstName} ${values.lastName}`;
    const request: RegisterRequest = {
      email: values.email,
      password: values.password,
      fullName: fullName,
      role: values.role,
    };

    await registerUser(request).unwrap();

    onModalOpen(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)} noValidate>
      {/* Свитчер роли: Ищу работу / Ищу сотрудника */}
      <div className={styles.roleSwitcher} role="group" aria-label="Выбор роли">
        <button
          type="button"
          className={clsx(
            styles.roleButton,
            selectedRole === 'candidate' && styles.roleButtonActive,
          )}
          onClick={() => handleRoleChange('candidate')}
        >
          Ищу работу
        </button>
        <button
          type="button"
          className={clsx(styles.roleButton, selectedRole === 'hr' && styles.roleButtonActive)}
          onClick={() => handleRoleChange('hr')}
        >
          Ищу сотрудника
        </button>
      </div>

      {serverError && <div className={styles.serverError}>{serverError}</div>}

      {/* Имя и Фамилия */}
      <div className={styles.namesRow}>
        <div className={styles.fieldGroup}>
          <input
            type="text"
            placeholder="Имя"
            className={clsx(styles.input, errors.firstName && styles.inputError)}
            aria-invalid={Boolean(errors.firstName)}
            {...register('firstName')}
          />
          {errors.firstName && (
            <span className={styles.errorMessage}>{errors.firstName.message}</span>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <input
            type="text"
            placeholder="Фамилия"
            className={clsx(styles.input, errors.lastName && styles.inputError)}
            aria-invalid={Boolean(errors.lastName)}
            {...register('lastName')}
          />
          {errors.lastName && (
            <span className={styles.errorMessage}>{errors.lastName.message}</span>
          )}
        </div>
      </div>

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
          placeholder="Пароль (не менее 6 символов)"
          autoComplete="new-password"
          className={clsx(styles.input, errors.password && styles.inputError)}
          aria-invalid={Boolean(errors.password)}
          {...register('password')}
        />
        {errors.password && <span className={styles.errorMessage}>{errors.password.message}</span>}
      </div>

      {/* Подтверждение пароля */}
      <div className={styles.fieldGroup}>
        <input
          type="password"
          placeholder="Подтверждение пароля"
          autoComplete="new-password"
          className={clsx(styles.input, errors.confirmPassword && styles.inputError)}
          aria-invalid={Boolean(errors.confirmPassword)}
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <span className={styles.errorMessage}>{errors.confirmPassword.message}</span>
        )}
      </div>

      {/* Кнопка отправки формы */}
      <button type="submit" className={styles.submitButton} disabled={isLoading}>
        {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
      </button>

      {/* Переключение на логин */}
      {onSwitchToLogin && (
        <div className={styles.footer}>
          <span>Уже есть аккаунт?</span>
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => onSwitchToLogin('auth')}
          >
            Войти
          </button>
        </div>
      )}
    </form>
  );
};

export default RegisterTemplate;
