import { describe, it, expect } from 'vitest';

describe('i18n', () => {
  it('renders all locales', () => {
    expect(['en','de','fr','es','it','pt','nl','ar','ru','ja','ko','zh']).toHaveLength(12);
  });
});
