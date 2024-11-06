import {getTranslations} from "next-intl/server";

export const getNavMenu = async () => {
  const navMenuIndex = await getTranslations('NavMenu');
  return {
    name2: navMenuIndex('name2'),
    href2: navMenuIndex('href2'),
    name3: navMenuIndex('name3'),
    href3: navMenuIndex('href3'),
  };
}

export const getIndexLanguageText = async () => {
  const tIndex = await getTranslations('IndexPage');
  return {
    title: tIndex('title'),
    description: tIndex('description'),
    h1Text: tIndex('h1Text'),
    pDescription: tIndex('pDescription'),
    img_h2: tIndex('img_h2'),
    level_h2:tIndex('level_h2'),
    more_level:tIndex('more_level')
  };
}

export const getWalkthroughLanguageText = async () => {
  const tIndex = await getTranslations('walkthroughPage');
  return {
    title: tIndex('title'),
    description: tIndex('description'),
    h1Text: tIndex('h1Text'),
    pDescription: tIndex('pDescription'),
    level_h2:tIndex('level_h2')
  };
}

export const getModApkLanguageText = async () => {
  const tIndex = await getTranslations('modApkPage');
  return {
    title: tIndex('title'),
    description: tIndex('description'),
    h1Text: tIndex('h1Text'),
    pDescription: tIndex('pDescription'),
    h2_1: tIndex('h2_1'),
    h2_1_p1: tIndex('h2_1_p1'),
    h2_2: tIndex('h2_2'),
    h2_2_p1: tIndex('h2_2_p1'),
    h2_3: tIndex('h2_3'),
    h2_3_p1: tIndex('h2_3_p1'),
  };
}


export const getQuestionLanguageText = async () => {
  const tIndexQuestion = await getTranslations('indexQuestion');
  return {
    h2_0: tIndexQuestion('h2_0'),
    h2_1: tIndexQuestion('h2_1'),
    h2_1_p1: tIndexQuestion('h2_1_p1'),
    h2_2: tIndexQuestion('h2_2'),
    h2_2_p1: tIndexQuestion('h2_2_p1'),
    h2_3: tIndexQuestion('h2_3'),
    h2_3_p1: tIndexQuestion('h2_3_p1'),
    h2_4: tIndexQuestion('h2_4'),
    h2_4_p1: tIndexQuestion('h2_4_p1'),
    h2_5: tIndexQuestion('h2_5'),
    h2_5_p1: tIndexQuestion('h2_5_p1'),
    h2_6: tIndexQuestion('h2_6'),
    h2_6_p1: tIndexQuestion('h2_6_p1'),
    h2_7: tIndexQuestion('h2_7'),
    h2_7_p1: tIndexQuestion('h2_7_p1'),
  }
}


export const getWalkthroughQuestionLanguageText = async () => {
  const tIndexQuestion = await getTranslations('walkthroughQuestion');
  return {
    h2_0: tIndexQuestion('h2_0'),
    h2_1: tIndexQuestion('h2_1'),
    h2_1_p1: tIndexQuestion('h2_1_p1'),
    h2_2: tIndexQuestion('h2_2'),
    h2_2_p1: tIndexQuestion('h2_2_p1'),
    h2_3: tIndexQuestion('h2_3'),
    h2_3_p1: tIndexQuestion('h2_3_p1'),
    h2_4: tIndexQuestion('h2_4'),
    h2_4_p1: tIndexQuestion('h2_4_p1'),
    h2_5: tIndexQuestion('h2_5'),
    h2_5_p1: tIndexQuestion('h2_5_p1'),
    h2_6: tIndexQuestion('h2_6'),
    h2_6_p1: tIndexQuestion('h2_6_p1'),
    h2_7: tIndexQuestion('h2_7'),
    h2_7_p1: tIndexQuestion('h2_7_p1'),
  }
}

export const getPlayInfoLanguageText = async () => {
  const tIndexQuestion = await getTranslations('playInfos');
  return {
    h2_0: tIndexQuestion('h2_0'),
    h2_1: tIndexQuestion('h2_1'),
    h2_1_p1: tIndexQuestion('h2_1_p1'),
    h2_2: tIndexQuestion('h2_2'),
    h2_2_p1: tIndexQuestion('h2_2_p1'),
    h2_3: tIndexQuestion('h2_3'),
    h2_3_p1: tIndexQuestion('h2_3_p1'),
    h2_4: tIndexQuestion('h2_4'),
    h2_4_p1: tIndexQuestion('h2_4_p1'),
  }
}

export const getTestimonialInfos = async () => {
  const tIndexQuestion = await getTranslations('testimonialInfos');
  return {
    h2_0: tIndexQuestion('h2_0'),
    h2_1_p1: tIndexQuestion('h2_1_p1'),
    h2_2_p1: tIndexQuestion('h2_2_p1'),
    h2_3_p1: tIndexQuestion('h2_3_p1'),
  }
}


export const getFeatureLanguageText = async () => {
  const tIndexQuestion = await getTranslations('featureInfos');
  return {
    h2_0: tIndexQuestion('h2_0'),
    h2_1: tIndexQuestion('h2_1'),
    h2_1_p1: tIndexQuestion('h2_1_p1'),
    h2_2: tIndexQuestion('h2_2'),
    h2_2_p1: tIndexQuestion('h2_2_p1'),
    h2_3: tIndexQuestion('h2_3'),
    h2_3_p1: tIndexQuestion('h2_3_p1'),
    h2_4: tIndexQuestion('h2_4'),
    h2_4_p1: tIndexQuestion('h2_4_p1'),
    h2_5: tIndexQuestion('h2_5'),
    h2_5_p1: tIndexQuestion('h2_5_p1'),
    h2_6: tIndexQuestion('h2_6'),
    h2_6_p1: tIndexQuestion('h2_6_p1'),
  }
}


export const getWorksPageLanguageText = async () => {
  const tWorks = null;
  return {
    title: tWorks('title'),
    description: tWorks('description'),
    h1Text: tWorks('h1Text'),
    pDescription: tWorks('pDescription'),
  }
}

export const getVideosPageLanguageText = async () => {
  const tVideosPage = null;
  return {
    title: tVideosPage('title'),
    description: tVideosPage('description'),
  }
}

export const getPrivacyPolicyLanguageText = async () => {
  const tPrivacyPolicy = await getTranslations('privacyPolicy');
  return {
    title: tPrivacyPolicy('title'),
    description: tPrivacyPolicy('description'),
    h1: tPrivacyPolicy('h1'),
    date: tPrivacyPolicy('date'),
    desc: tPrivacyPolicy('desc'),
    h4_1: tPrivacyPolicy('h4_1'),
    h4_1_pa: tPrivacyPolicy('h4_1_pa'),
    h4_1_pb: tPrivacyPolicy('h4_1_pb'),
    h4_2: tPrivacyPolicy('h4_2'),
    h4_2_p: tPrivacyPolicy('h4_2_p'),
    h4_3: tPrivacyPolicy('h4_3'),
    h4_3_p: tPrivacyPolicy('h4_3_p'),
    h4_4: tPrivacyPolicy('h4_4'),
    h4_4_p: tPrivacyPolicy('h4_4_p'),
    h4_5: tPrivacyPolicy('h4_5'),
    h4_5_p: tPrivacyPolicy('h4_5_p'),
    h4_6: tPrivacyPolicy('h4_6'),
    h4_6_p: tPrivacyPolicy('h4_6_p'),
  }
}

export const getTermsOfServiceLanguageText = async () => {
  const tTermsOfService = await getTranslations('termsOfService');
  return {
    title: tTermsOfService('title'),
    description: tTermsOfService('description'),
    h1: tTermsOfService('h1'),
    date: tTermsOfService('date'),
    desc: tTermsOfService('desc'),
    h4_1: tTermsOfService('h4_1'),
    h4_1_p: tTermsOfService('h4_1_p'),
    h4_2: tTermsOfService('h4_2'),
    h4_2_p: tTermsOfService('h4_2_p'),
    h4_3: tTermsOfService('h4_3'),
    h4_3_p: tTermsOfService('h4_3_p'),
    h4_4: tTermsOfService('h4_4'),
    h4_4_p: tTermsOfService('h4_4_p'),
    h4_5: tTermsOfService('h4_5'),
    h4_5_p: tTermsOfService('h4_5_p'),
    h4_6: tTermsOfService('h4_6'),
    h4_6_p: tTermsOfService('h4_6_p'),
    h4_7: tTermsOfService('h4_7'),
    h4_7_p: tTermsOfService('h4_7_p'),
    h4_8: tTermsOfService('h4_8'),
    h4_8_p: tTermsOfService('h4_8_p'),
  }
}
