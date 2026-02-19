import en from './en.json';
import es from './es.json';

const translations: Record<string, Record<string, string>> = { en, es };

export function t(key: string, locale: string = 'es'): string {
  return translations[locale]?.[key] || translations['es'][key] || key;
}
