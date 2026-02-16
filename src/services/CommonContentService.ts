import { supabase } from '../lib/supabase';

export const CommonContentService = {
  getServicesContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('Services')
      .select(`${isEnglish ? 'nameEN, descriptionEN' : 'nameES, descriptionES'}, logo, isVisible, id`)
      .order('order', { ascending: true })
      .eq('isVisible', true);
    if (error) console.log('Error fetching services:', error);
    return data || [];
  },

  getEmployees: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('Employee')
      .select(`id, isVisible, imagePath, fullName, order, ${isEnglish ? 'jobPositionEN' : 'jobPositionES'}, id, imagePath, isVisible`)
      .eq('isVisible', true)
      .order('order', { ascending: true });
    if (error) console.log('Error fetching employees:', error);
    return data || [];
  },

  getHeroFooterContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('HeroFooter')
      .select(`${isEnglish ? 'titleEN, captionEN' : 'titleES, captionES'}, backgroundImg`)
      .neq('page', 'career')
      .single();
    if (error) console.log('Error fetching hero footer:', error);
    return data;
  },

  getFooterContent: async () => {
    const { data: locations, error: locationsError } = await supabase
      .from('Location')
      .select('address, isVisible')
      .eq('isVisible', true);

    const { data: contact, error: contactError } = await supabase
      .from('Contact')
      .select('facebook, instagram, linkedin, phone, email')
      .single();

    if (locationsError || contactError) {
      console.log('Error fetching footer:', locationsError || contactError);
    }

    return {
      locations: locations || [],
      contact: contact || {}
    };
  }
};
