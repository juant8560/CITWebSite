import { supabase } from '../lib/supabase';

export const AboutUsService = {
  getHeroContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('AboutUsHero')
      .select(`imagePath, ${isEnglish ? 'titleEN, captionEN' : 'titleES, captionES'}`)
      .single();
    if (error) console.log('Error fetching about us hero:', error);
    return data;
  },

  getMetricsContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('AboutUsMetricContent')
      .select(isEnglish ? 'titleEN, captionEN' : 'titleES, captionES')
      .single();
    if (error) console.log('Error fetching metrics content:', error);
    return data;
  },

  getMetrics: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('AboutMetric')
      .select(`prefix, value, ${isEnglish ? 'descriptionEN' : 'descriptionES'}`)
      .eq('isVisible', true);
    if (error) console.log('Error fetching metrics:', error);
    return data || [];
  },

  getCompanyValues: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('AboutCompanyValue')
      .select(`imagePath, ${isEnglish ? 'misionEN, visionEN, itemsEN' : 'misionES, visionES, itemsES'}`)
      .single();
    if (error) console.log('Error fetching company values:', error);
    return data;
  },

  getCoComment: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('AboutCoComment')
      .select(`coName, ${isEnglish ? 'captionEN, chargeEN' : 'captionES, chargeES'}`)
      .single();
    if (error) console.log('Error fetching co comment:', error);
    return data;
  },

  getCustomers: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('AboutCustomer')
      .select(`customersImagePaths, ${isEnglish ? 'titleEN, captionEN, titleSmallEN' : 'titleES, captionES, titleSmallES'}`)
      .single();
    if (error) console.log('Error fetching about customers:', error);
    return data;
  }
};
