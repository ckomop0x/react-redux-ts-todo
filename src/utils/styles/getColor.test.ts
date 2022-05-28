import { COLORS, getColor } from './getColor';

describe('getColor', () => {
  it('Should return success color', () => {
    expect(getColor('success')).toBe(COLORS.success);
  });
  it('Should return alert color', () => {
    expect(getColor('alert')).toBe(COLORS.alert);
  });
  it('Should return disabled color', () => {
    expect(getColor('disabled')).toBe(COLORS.disabled);
  });
  it('Should return default color', () => {
    expect(getColor(undefined)).toBe(COLORS.default);
  });
});
