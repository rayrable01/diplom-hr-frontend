import type { FC } from 'react';
import styles from './UserProfileCard.module.css';

export interface UserProfileCardProps {
  fullName?: string;
  email?: string;
  role?: 'candidate' | 'hr';
  createdAt?: string;
}

export const UserProfileCard: FC<UserProfileCardProps> = ({
  fullName = 'Иван Иванов',
  email = 'candidate@example.com',
  role = 'candidate',
  createdAt = '1 марта 2026',
}) => {
  const roleLabel = role === 'candidate' ? 'Кандидат' : 'Рекрутер';
  const initials = fullName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <article className={styles.card}>
      {/* Шапка профиля */}
      <div className={styles.profileHeader}>
        <div className={styles.avatar} aria-hidden="true">
          {initials}
        </div>
        <div className={styles.userMainInfo}>
          <div className={styles.nameRow}>
            <h2 className={styles.name}>{fullName}</h2>
            <span className={styles.roleBadge}>{roleLabel}</span>
          </div>
          <p className={styles.emailText}>
            {email} • На платформе с {createdAt}
          </p>
        </div>
      </div>

      {/* Личные данные */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Персональные данные</h3>
        <div className={styles.formGrid}>
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="name-input">
              ФИО
            </label>
            <input id="name-input" type="text" className={styles.input} defaultValue={fullName} />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="email-input">
              Email
            </label>
            <input id="email-input" type="email" className={styles.input} defaultValue={email} />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="phone-input">
              Номер телефона
            </label>
            <input
              id="phone-input"
              type="tel"
              className={styles.input}
              placeholder="+7 (999) 000-00-00"
            />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="city-input">
              Город проживания
            </label>
            <input id="city-input" type="text" className={styles.input} defaultValue="Москва" />
          </div>
        </div>
      </section>

      {/* Безопасность */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Безопасность</h3>
        <div className={styles.formGrid}>
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="cur-pass">
              Текущий пароль
            </label>
            <input id="cur-pass" type="password" className={styles.input} placeholder="••••••••" />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="new-pass">
              Новый пароль
            </label>
            <input
              id="new-pass"
              type="password"
              className={styles.input}
              placeholder="Минимум 6 символов"
            />
          </div>
        </div>
      </section>

      {/* Уведомления */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Уведомления</h3>
        <div className={styles.checkboxList}>
          <label className={styles.checkboxItem}>
            <input type="checkbox" className={styles.checkbox} defaultChecked />
            <span>Получать уведомления о новых подходящих вакансиях</span>
          </label>
          <label className={styles.checkboxItem}>
            <input type="checkbox" className={styles.checkbox} defaultChecked />
            <span>Уведомлять об изменении статуса отклика на вакансию</span>
          </label>
        </div>
      </section>

      <button type="button" className={styles.saveButton}>
        Сохранить изменения
      </button>
    </article>
  );
};

export default UserProfileCard;
