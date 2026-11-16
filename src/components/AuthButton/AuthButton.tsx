import type { FC } from 'react';
import { useState } from 'react';
import { Skeleton } from '@/ui/Skeleton/Skeleton';
import Modal from '@/ui/Modal/Modal';
import styles from './AuthButton.module.css';
import RegisterTemplate from '@/layout/Authentication/RegisterTemplate/RegisterTemplate';
import LoginTemplate from '@/layout/Authentication/LoginTemplate/LoginTemplate';

interface AuthButtonProps {
  isLoading?: boolean;
}

export const AuthButton: FC<AuthButtonProps> = ({ isLoading }) => {
  const [isOpen, setIsModalOpen] = useState(false);
  const [authState, setAuthState] = useState<'auth' | 'register'>('register');

  const titleValue = authState === 'register' ? 'Зарегистрироваться' : 'Авторизация';

  if (isLoading) {
    return <Skeleton width="60px" height="24px" radius="4px" />;
  }

  return (
    <>
      <button type="button" className={styles.button} onClick={() => setIsModalOpen(true)}>
        Войти
      </button>

      <Modal
        className={styles.modalContainer}
        isOpen={isOpen}
        onClose={() => setIsModalOpen(false)}
        title={titleValue}
        size="sm"
      >
        {authState === 'register' ? (
          <RegisterTemplate onSwitchToLogin={setAuthState} onModalOpen={setIsModalOpen} />
        ) : (
          <LoginTemplate onSwitchToRegister={setAuthState} onModalOpen={setIsModalOpen} />
        )}
      </Modal>
    </>
  );
};
