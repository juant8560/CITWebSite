import { supabase } from '../lib/supabase';

export const ServiceDetailsService = {
  getServiceDetail: async (locale: string, sdid: number) => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('ServiceDetail')
      .select(`*, pathImage, ${isEnglish
        ? 'titleEN, descriptionEN, heroTitleEN, heroDescriptionEN, howWeDoTitleEN, howWeDoDescriptionEN, quoteTitleEN, quoteDescriptionEN'
        : 'titleES, descriptionES, heroTitleES, heroDescriptionES, howWeDoTitleES, howWeDoDescriptionES, quoteTitleES, quoteDescriptionES'
      }`)
      .eq('idService', sdid)
      .single();
    if (error) console.log('Error fetching service detail:', error);
    return data;
  },

  getServiceInfo: async (locale: string, sdid: number) => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('Services')
      .select(`id, logo, ${isEnglish ? 'nameEN, descriptionEN' : 'nameES, descriptionES'}`)
      .eq('id', sdid)
      .single();
    if (error) console.log('Error fetching service info:', error);
    return data;
  }
};
