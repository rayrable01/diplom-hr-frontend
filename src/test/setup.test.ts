import { describe, it, expect } from 'vitest';

describe('Базовый сетап окружения тестирования', () => {
  it('проверяет полифилл window.matchMedia', () => {
    expect(window.matchMedia).toBeDefined();
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    expect(media.matches).toBe(false);
  });
});
