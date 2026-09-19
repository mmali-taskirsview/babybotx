import { describe, it, expect } from 'vitest';
import { countryToLocale } from '../../i18n/geo-map';

describe('geo-map', () => {
  it('maps DE to de', () => {
    expect(countryToLocale['DE']).toBe('de');
  });
  it('maps SA to ar (RTL)', () => {
    expect(countryToLocale['SA']).toBe('ar');
  });
});
