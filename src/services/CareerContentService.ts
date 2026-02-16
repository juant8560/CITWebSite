import { supabase } from '../lib/supabase';

export const CareerContentService = {
  getHeroContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('CareerHero')
      .select(`${isEnglish ? 'titleEN, captionEN' : 'titleES, captionES'}, id, pathImages, isVisible`)
      .eq('isVisible', true)
      .single();
    if (error) console.log('Error fetching career hero:', error);
    return data;
  },

  getBenefits: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('CareerBenefit')
      .select(`${isEnglish ? 'nameEN' : 'nameES'}, id, isVisible`)
      .eq('isVisible', true);
    if (error) console.log('Error fetching benefits:', error);
    return data || [];
  },

  getOfficesPictures: async () => {
    const { data, error } = await supabase
      .from('CareerOffice')
      .select('id, imagePath, isVisible')
      .eq('isVisible', true);
    if (error) console.log('Error fetching offices:', error);
    return data || [];
  },

  getEmployeesFeedback: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('EmployeesFeedback')
      .select(`id, isVisible, employeeId, ${isEnglish ? 'commentEN' : 'commentES'}, Employee (*)`)
      .eq('isVisible', true);
    if (error) console.log('Error fetching employee feedback:', error);
    return data || [];
  },

  getHeroFooterContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('HeroFooter')
      .select(`${isEnglish ? 'titleEN, captionEN' : 'titleES, captionES'}, backgroundImg`)
      .eq('page', 'career')
      .single();
    if (error) console.log('Error fetching career hero footer:', error);
    return data;
  },

  getEmployeesContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('EmployeesContent')
      .select(`${isEnglish ? 'tittleEn, captionEn' : 'tittleEs, captionEs'}`)
      .range(0, 0)
      .single();
    if (error) console.log('Error fetching employees content:', error);
    return data;
  }
};
