import Container from '@/ui/Container/Container';
import CandidateCard from '@/components/CandidateCard/CandidateCard';
import { Search, ChevronDown } from 'lucide-react';
import styles from './RecruiterCandidatesPage.module.css';

const RecruiterCandidatesPage = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>База кандидатов</h1>
          <p className={styles.subtitle}>
            Поиск специалистов, умный AI-скоринг соответствия профиля и приглашение на открытые
            вакансии
          </p>
        </header>

        {/* Панель поиска */}
        <div className={styles.searchBar}>
          <div className={styles.searchInputWrapper}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              className={styles.input}
              placeholder="Поиск по имени, должности, технологиям (например: React, TypeScript)..."
            />
          </div>

          <button type="button" className={styles.filterSelect}>
            <span>Опыт: от 3 лет</span>
            <ChevronDown size={15} />
          </button>

          <button type="button" className={styles.filterSelect}>
            <span>Город: Любой</span>
            <ChevronDown size={15} />
          </button>
        </div>

        {/* Список кандидатов */}
        <div className={styles.cardsList}>
          <CandidateCard
            fullName="Алексей Смирнов"
            targetTitle="Senior Frontend Developer"
            experienceYears={5}
            expectedSalary={260000}
            education="МГТУ им. Н.Э. Баумана"
            skills={['React', 'TypeScript', 'Redux Toolkit', 'Next.js', 'RTK Query']}
            matchScore={96}
            avatarBg="#2563eb"
          />

          <CandidateCard
            fullName="Елена Васильева"
            targetTitle="Middle Frontend Developer"
            experienceYears={3}
            expectedSalary={190000}
            education="НИУ ВШЭ, Программная инженерия"
            skills={['React', 'TypeScript', 'CSS Modules', 'Zustand', 'Vite']}
            matchScore={91}
            avatarBg="#9333ea"
          />

          <CandidateCard
            fullName="Дмитрий Кузнецов"
            targetTitle="Fullstack React / Node.js Developer"
            experienceYears={6}
            expectedSalary={310000}
            education="СПбПУ, Компьютерные науки"
            skills={['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker']}
            matchScore={87}
            avatarBg="#10b981"
          />
        </div>
      </Container>
    </section>
  );
};

export default RecruiterCandidatesPage;
