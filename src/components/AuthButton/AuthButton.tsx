import type { FC } from 'react';
import { useState } from 'react';
import { Skeleton } from '@/ui/Skeleton/Skeleton';
import Modal from '@/ui/Modal/Modal';
import styles from './AuthButton.module.css';

interface AuthButtonProps {
  isLoading?: boolean;
}

export const AuthButton: FC<AuthButtonProps> = ({ isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return <Skeleton width="60px" height="24px" radius="4px" />;
  }

  return (
    <>
      <button type="button" className={styles.button} onClick={() => setIsOpen(true)}>
        Войти
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Авторизация" size="sm">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <button type="submit">Подтвердить</button>
        </form>
      </Modal>
    </>
  );
};
