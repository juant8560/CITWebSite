import { supabase } from '../lib/supabase';

export const CaseStudiesContentService = {
  getHeroContent: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('Hero')
      .select(
        isEnglish
          ? 'backgroundImage, titleEN, captionEN, linkedPage'
          : 'backgroundImage, titleES, captionES, linkedPage'
      )
      .eq('linkedPage', 'case-studies')
      .eq('isVisible', true)
      .single();
    if (error) console.log('Error fetching CS hero:', error);
    return data;
  },

  getCaseStudiesCategory: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('CaseStudyCategory')
      .select(`${isEnglish ? 'nameEN' : 'nameES'}, id`)
      .eq('isVisible', true);
    if (error) console.log('Error fetching CS categories:', error);
    return data || [];
  },

  getCaseStudies: async (locale: string = 'es') => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('CaseStudy')
      .select(
        `${isEnglish
          ? 'id, name, titleEN, descriptionEN, idCategories, picture'
          : 'id, name, titleES, descriptionES, idCategories, picture'
        }, picture`
      )
      .eq('isVisible', true);
    if (error) console.log('Error fetching case studies:', error);
    return data || [];
  }
};

export const CaseStudyDetailService = {
  getCaseStudyInfo: async (csid: number) => {
    const { data, error } = await supabase
      .from('CaseStudy')
      .select('id, idCategories, logo, name')
      .match({ id: csid, isVisible: true })
      .single();
    if (error) console.log('Error fetching CS info:', error);
    return data;
  },

  getCaseStudyDetailContent: async (locale: string, csid: number) => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('CaseStudyDetail')
      .select(
        `idTechnologies, idsServices, pdf, ${
          isEnglish
            ? 'heroTitleEN, heroDescriptionEN, companySizeEN, goalEN'
            : 'heroTitleES, heroDescriptionES, companySizeES, goalES'
        }`
      )
      .eq('idCase', csid)
      .single();
    if (error) console.log('Error fetching CS detail:', error);
    return data;
  },

  getMetrics: async (locale: string, csid: number) => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('CaseStudyMetrics')
      .select(`id, isVisible, idCase, metricValue, ${isEnglish ? 'suffixEN, descriptionEN' : 'suffixES, descriptionES'}`)
      .match({ idCase: csid, isVisible: true });
    if (error) console.log('Error fetching CS metrics:', error);
    return data || [];
  },

  getAchievements: async (locale: string, csid: number) => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('CaseStudyAchievement')
      .select(`id, idCase, isVisible, order, picture, ${isEnglish ? 'titleEN, descriptionEN' : 'titleES, descriptionES'}`)
      .match({ idCase: csid, isVisible: true });
    if (error) console.log('Error fetching achievements:', error);
    return data || [];
  },

  getAppStack: async (locale: string, csid: number) => {
    const isEnglish = locale === 'en';
    const { data: appStack } = await supabase
      .from('CaseStudyApp')
      .select(`id, idCase, isVisible, order, ${isEnglish ? 'titleEN' : 'titleES'}`)
      .match({ idCase: csid, isVisible: true });
    const { data: image } = await supabase
      .from('CaseStudyInfrastructure')
      .select('idCase, isVisible, picture')
      .match({ idCase: csid, isVisible: true })
      .single();
    return { appStack: appStack || [], image };
  },

  getOurProcess: async (locale: string, csid: number) => {
    const isEnglish = locale === 'en';
    const { data, error } = await supabase
      .from('CaseStudyProcess')
      .select(`id, idCase, isVisible, order, picture, ${isEnglish ? 'titleEN, descriptionEN' : 'titleES, descriptionES'}`)
      .match({ idCase: csid, isVisible: true });
    if (error) console.log('Error fetching process:', error);
    return data || [];
  },

  getGallery: async (csid: number) => {
    const { data, error } = await supabase
      .from('CaseStudyGallery')
      .select('id, idCase, isVisible, pathImage')
      .match({ idCase: csid, isVisible: true });
    if (error) console.log('Error fetching gallery:', error);
    return data || [];
  },

  getTechnologies: async (idTechnologies: number[]) => {
    const { data, error } = await supabase
      .from('Technology')
      .select('id, name, logo')
      .in('id', idTechnologies);
    if (error) console.log('Error fetching techs:', error);
    return data || [];
  },

  getCategories: async (idCategories: number[]) => {
    const { data, error } = await supabase
      .from('CaseStudyCategory')
      .select('*')
      .in('id', idCategories)
      .is('isVisible', true);
    if (error) console.log('Error fetching categories:', error);
    return data || [];
  }
};
