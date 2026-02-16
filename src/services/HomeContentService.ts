import { supabase } from '../lib/supabase';

export const HomeContentService = {
  getHeroContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('Hero')
      .select(
        isEnglish
          ? 'backgroundImage, titleEN, subtitleStartEN, subtitleEndEN, subtitlePhrasesEN, captionEN, linkedPage'
          : 'backgroundImage, titleES, subtitleStartES, subtitleEndES, subtitlePhrasesES, captionES, linkedPage'
      )
      .eq('linkedPage', 'home')
      .eq('isVisible', true)
      .single();
    if (error) console.log('Error fetching hero:', error);
    return data;
  },

  getCustomerContent: async () => {
    const { data, error } = await supabase
      .from('Customer')
      .select('imagePath, isVisible, id')
      .eq('isVisible', true);
    if (error) console.log('Error fetching customers:', error);
    return data || [];
  },

  getAboutContent: async () => {
    const { data, error } = await supabase
      .from('About')
      .select('placeholderImage, videoPath')
      .single();
    if (error) console.log('Error fetching about:', error);
    return data;
  },

  getTechnologiesContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('Technology')
      .select(`id, name, ${isEnglish ? 'descriptionEN' : 'descriptionES'}, logo, ringLevel, isVisible`)
      .eq('isVisible', true);
    if (error) console.log('Error fetching technologies:', error);
    return data || [];
  },

  getCaseStudiesContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('CaseStudy')
      .select(
        `id, isVisible, idCategories, ${
          isEnglish
            ? 'descriptionEN, titleEN, tagEN'
            : 'descriptionES, titleES, tagES'
        }, logo, picture, CaseStudyDetail(${isEnglish ? 'heroTitleEN' : 'heroTitleES'})`
      )
      .eq('isVisible', true);
    if (error) console.log('Error fetching case studies:', error);
    return data || [];
  },

  getCustomerFeedbackContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('CustomerFeedback')
      .select(`id, name, rate, ${isEnglish ? 'commentEN' : 'commentES'}, picture, isVisible, companyName`)
      .eq('isVisible', true);
    if (error) console.log('Error fetching feedback:', error);
    return data || [];
  },

  getPortfolioContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('Portfolio')
      .select(`card_title, ${isEnglish ? 'descriptionEN' : 'descriptionES'}, background_image, picture, isVisible`)
      .eq('isVisible', true);
    if (error) console.log('Error fetching portfolio:', error);
    return data || [];
  },

  getGalleryContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('HomeGallery')
      .select(`images, ${isEnglish ? 'titleEN, captionEN' : 'titleES, captionES'}`)
      .single();
    if (error) console.log('Error fetching gallery:', error);
    return data;
  }
};
