import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

// Polyfill window.matchMedia for jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Support relative URLs for Request and fetch in RTK Query jsdom tests
const OriginalRequest = globalThis.Request;
if (OriginalRequest) {
  globalThis.Request = class extends OriginalRequest {
    constructor(input: RequestInfo | URL, init?: RequestInit) {
      if (typeof input === 'string' && input.startsWith('/')) {
        super(`http://localhost${input}`, init);
      } else {
        super(input, init);
      }
    }
  };
}

const originalFetch = globalThis.fetch;
if (originalFetch) {
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    if (typeof input === 'string' && input.startsWith('/')) {
      return originalFetch(`http://localhost${input}`, init);
    }
    return originalFetch(input, init);
  };
}
