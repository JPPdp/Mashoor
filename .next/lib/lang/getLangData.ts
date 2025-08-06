import en from './en/en.json';
import tr from './tr/tr.json';

export interface LangData {
  welcome: string;
  description: string;
  productName: string;
  productDescription: string;
}


export function getLangData(lang: string): LangData {
  if (lang === 'tr') return tr as LangData;
  return en as LangData; // default
}
