import Container from '@/ui/Container/Container';
import AnalyticMetricCard from '@/components/AnalyticMetricCard/AnalyticMetricCard';
import { Users, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import styles from './RecruiterAnalyticPage.module.css';

const RecruiterAnalyticPage = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Аналитика найма</h1>
          <p className={styles.subtitle}>
            Сводные метрики воронки рекрутмента, активность кандидатов и результаты автоматического
            AI-скоринга
          </p>
        </header>

        {/* Сетка ключевых показателей */}
        <div className={styles.metricsGrid}>
          <AnalyticMetricCard
            icon={<FileText size={24} />}
            label="Всего откликов"
            value="342"
            trend="+18% за месяц"
          />
          <AnalyticMetricCard
            icon={<Users size={24} />}
            label="На этапе интервью"
            value="28"
            trend="+4 кандидата"
          />
          <AnalyticMetricCard
            icon={<CheckCircle2 size={24} />}
            label="Принятые офферы"
            value="9"
            trend="+2 за неделю"
          />
          <AnalyticMetricCard
            icon={<Sparkles size={24} />}
            label="Средний AI-скоринг"
            value="86%"
            trend="+5% релевантности"
          />
        </div>

        {/* Детальные панели */}
        <div className={styles.dashboardGrid}>
          {/* Воронка найма */}
          <div className={styles.panelCard}>
            <h2 className={styles.panelTitle}>Конверсия воронки найма</h2>
            <div className={styles.funnelList}>
              <div className={styles.funnelStep}>
                <div className={styles.stepHeader}>
                  <span>Получено откликов</span>
                  <span>342 (100%)</span>
                </div>
                <div className={styles.stepBarBg}>
                  <div className={styles.stepBarFill} style={{ width: '100%' }} />
                </div>
              </div>

              <div className={styles.funnelStep}>
                <div className={styles.stepHeader}>
                  <span>Скрининг резюме пройден</span>
                  <span>148 (43%)</span>
                </div>
                <div className={styles.stepBarBg}>
                  <div className={styles.stepBarFill} style={{ width: '43%' }} />
                </div>
              </div>

              <div className={styles.funnelStep}>
                <div className={styles.stepHeader}>
                  <span>Техническое интервью</span>
                  <span>28 (8.2%)</span>
                </div>
                <div className={styles.stepBarBg}>
                  <div className={styles.stepBarFill} style={{ width: '28%' }} />
                </div>
              </div>

              <div className={styles.funnelStep}>
                <div className={styles.stepHeader}>
                  <span>Выставлен оффер</span>
                  <span>12 (3.5%)</span>
                </div>
                <div className={styles.stepBarBg}>
                  <div className={styles.stepBarFill} style={{ width: '15%' }} />
                </div>
              </div>

              <div className={styles.funnelStep}>
                <div className={styles.stepHeader}>
                  <span>Оффер принят</span>
                  <span>9 (2.6%)</span>
                </div>
                <div className={styles.stepBarBg}>
                  <div className={styles.stepBarFill} style={{ width: '10%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Рейтинг востребованных технологий */}
          <div className={styles.panelCard}>
            <h2 className={styles.panelTitle}>Топ навыков в откликах</h2>
            <div className={styles.skillsRatingList}>
              <div className={styles.skillRatingItem}>
                <span className={styles.skillName}>TypeScript</span>
                <span className={styles.skillScore}>94% кандидатов</span>
              </div>
              <div className={styles.skillRatingItem}>
                <span className={styles.skillName}>React</span>
                <span className={styles.skillScore}>91% кандидатов</span>
              </div>
              <div className={styles.skillRatingItem}>
                <span className={styles.skillName}>Redux Toolkit / RTK Query</span>
                <span className={styles.skillScore}>78% кандидатов</span>
              </div>
              <div className={styles.skillRatingItem}>
                <span className={styles.skillName}>Next.js</span>
                <span className={styles.skillScore}>64% кандидатов</span>
              </div>
              <div className={styles.skillRatingItem}>
                <span className={styles.skillName}>Node.js / Express</span>
                <span className={styles.skillScore}>42% кандидатов</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RecruiterAnalyticPage;
