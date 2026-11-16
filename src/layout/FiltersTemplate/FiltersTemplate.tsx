import { Search, ChevronDown, MapPin, RotateCcw } from 'lucide-react';
import styles from './FiltersTemplate.module.css';

export const FiltersTemplate = () => {
  return (
    <aside className={styles.filtersContainer} aria-label="Фильтры вакансий">
      {/* Шапка фильтров */}
      <div className={styles.header}>
        <h2 className={styles.title}>Фильтры</h2>
        <button type="button" className={styles.resetButton}>
          <span>Сбросить всё</span>
          <RotateCcw className={styles.resetIcon} />
        </button>
      </div>

      {/* Ключевые слова */}
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel} htmlFor="keywords">
          Ключевые слова
        </label>
        <div className={styles.inputWrapper}>
          <input
            id="keywords"
            type="text"
            className={`${styles.input} ${styles.inputWithIconRight}`}
            placeholder="Например, React, TypeScript..."
          />
          <Search size={16} className={styles.iconRight} />
        </div>
      </div>

      {/* Категория */}
      <div className={styles.filterGroup}>
        <span className={styles.filterLabel}>Категория</span>
        <button type="button" className={styles.selectButton}>
          <span>Все категории</span>
          <ChevronDown size={16} className={styles.iconRight} />
        </button>
      </div>

      {/* Локация */}
      <div className={styles.filterGroup}>
        <span className={styles.filterLabel}>Локация</span>
        <button type="button" className={styles.selectButton}>
          <div className={styles.selectButtonContent}>
            <MapPin size={16} />
            <span>Все города</span>
          </div>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Формат работы */}
      <div className={styles.filterGroup}>
        <span className={styles.filterLabel}>Формат работы</span>
        <div className={styles.checkboxList}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} defaultChecked />
            <span>Удалённо</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            <span>Офис</span>
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            <span>Гибридный</span>
          </label>
        </div>
      </div>

      {/* Опыт работы */}
      <div className={styles.filterGroup}>
        <span className={styles.filterLabel}>Опыт работы</span>
        <button type="button" className={styles.selectButton}>
          <span>Любой опыт</span>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Зарплата */}
      <div className={styles.filterGroup}>
        <span className={styles.filterLabel}>Зарплата</span>
        <div className={styles.salaryRow}>
          <div className={styles.salaryInputWrapper}>
            <input type="text" className={styles.input} placeholder="от" />
          </div>
          <div className={styles.salaryInputWrapper}>
            <input type="text" className={styles.input} placeholder="до" />
          </div>
          <span className={styles.currencyBadge}>₽</span>
        </div>
      </div>

      {/* Технологии */}
      <div className={styles.filterGroup}>
        <span className={styles.filterLabel}>Технологии</span>
        <button type="button" className={styles.selectButton}>
          <span className={styles.selectPlaceholder}>Выберите технологии</span>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Кнопка применения */}
      <button type="button" className={styles.applyButton}>
        Применить фильтры
      </button>
    </aside>
  );
};

export default FiltersTemplate;
