export type Language = "en" | "fr";

export interface TranslationShape {
  nav: {
    home: string;
    about: string;
    developments: string;
    services: string;
    realEstate: string;
    portfolio: string;
    areas: string;
    blog: string;
    contact: string;
    languageLabel: string;
    currencyLabel: string;
    whatsappUs: string;
    developmentsMenu: {
      bp: string;
      virunga: string;
      cottage: string;
      kigaliRetreat: string;
      nyungweRetreat: string;
      huyeVillas: string;
      nyanzaVillas: string;
      akageraRetreat: string;
      viewAll: string;
    };
    servicesMenu: {
      architecture: string;
      construction: string;
      villaManagement: string;
      landSourcing: string;
      developmentPartnerships: string;
      developerGuide: string;
      howToBuy: string;
    };
  };
  hero: {
    label: string;
    headlineBold: string;
    headlineLight: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trustBar: {
    title: string;
    subtitle: string;
    stat1Label: string;
    stat2Label: string;
  };
  heroCommon: {
    enquireNow: string;
    learnMore: string;
    viewVillaTypes: string;
    salesNowOpen: string;
    facadeLabel: string;
    bothLabel: string;
    terracottaLabel: string;
    greyLabel: string;
    chatOnWhatsApp: string;
  };
  statsBarSection: {
    villasBuiltLabel: string;
    teamMembersLabel: string;
    yearsBuildingLabel: string;
    avgOccupancyLabel: string;
  };
  whyEverRetreatSection: {
    eyebrow: string;
    heading: string;
    headingLight: string;
    headingBold: string;
    paragraph: string;
    talkToUs: string;
    seeCaseStudy: string;
    reason1Title: string;
    reason1Desc: string;
    reason2Title: string;
    reason2Desc: string;
    reason3Title: string;
    reason3Desc: string;
    reason4Title: string;
    reason4Desc: string;
    reason5Title: string;
    reason5Desc: string;
    reason6Title: string;
    reason6Desc: string;
    reason7Title: string;
    reason7Desc: string;
    reason8Title: string;
    reason8Desc: string;
  };
  buildCalculatorSection: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    villaSizeLabel: string;
    sqmSuffix: string;
    finishLevelLabel: string;
    standardLabel: string;
    premiumLabel: string;
    luxuryLabel: string;
    bedroomsLabel: string;
    bedroomOption2: string;
    bedroomOption3: string;
    bedroomOption4: string;
    bedroomOption5Plus: string;
    calculateButton: string;
    resultsHeading: string;
    baseConstructionLabel: string;
    landCostLabel: string;
    permitsLabel: string;
    totalLabel: string;
    rentalReturnsHeading: string;
    annualYieldLabel: string;
    roiTimelineLabel: string;
    dailyRateLabel: string;
    perYearSuffix: string;
    perNightSuffix: string;
    yearsSuffix: string;
    disclaimerText: string;
  };
  servicesSubNavOverview: string;
  footer: {
    tagline: string;
    hours: string;
    companyHeading: string;
    servicesHeading: string;
    investHeading: string;
    company: {
      about: string;
      howWeWork: string;
      portfolio: string;
      villaTours: string;
      testimonials: string;
      blog: string;
      caseStudy: string;
      clientForms: string;
      payDeposit: string;
      referFriend: string;
      contact: string;
    };
    services: {
      architecture: string;
      construction: string;
      villaManagement: string;
      landSourcing: string;
      developmentPartnerships: string;
      choosingDeveloper: string;
      villaPackages: string;
      buildCalculator: string;
    };
    invest: {
      developments: string;
      areaGuides: string;
      investInRwanda: string;
      howToBuy: string;
      fractionalOwnership: string;
      landZoning: string;
      faq: string;
    };
    rwandaHq: string;
    everRetreatOffice: string;
    ourLocation: string;
    copyright: string;
    privacy: string;
    terms: string;
    licensed: string;
  };
  about: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    paragraph: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    ctaAbout: string;
    ctaContact: string;
  };
  featuredIn: {
    title: string;
    subtitle: string;
  };
  heroSlideshow: {
    label: string;
    explorePrefix: string;
  };
  developmentsSection: {
    sectionLabel: string;
    heading: string;
    headingLight: string;
    headingBold: string;
    viewAll: string;
    explorePrefix: string;
    items: Record<
      "nara-villas" | "suku-residences" | "solas-uluwatu" | "nyungwe-retreat" | "huye-villas" | "nyanza-villas" | "akagera-retreat" | "kigali-retreat",
      { description: string; features: string[] }
    >;
    badges: {
      prototype: string;
      comingSoon: string;
    };
    notForSale: string;
    propertyType: string;
  };
  ctaSections: {
    getPrices: {
      eyebrow: string;
      heading: string;
      headingLight: string;
      headingBold: string;
      paragraph: string;
    };
    bringToLife: {
      eyebrow: string;
      heading: string;
      enquire: string;
      chatWhatsapp: string;
    };
    investInRwanda: {
      eyebrow: string;
      heading: string;
      enquire: string;
    };
  };
  forms: {
    fullName: string;
    emailAddress: string;
    whatsappNumber: string;
    tellUsMore: string;
    sendEnquiry: string;
    sending: string;
    successTitle: string;
    successBody: string;
    errorRequired: string;
    errorEmail: string;
    errorPhone: string;
    yourName: string;
    yourEmail: string;
    yourPhone: string;
    friendsName: string;
    friendsEmail: string;
    friendsWhatsapp: string;
    messageOptional: string;
    submitReferral: string;
    interestedIn: string;
    interestedInOptions: {
      villaBuild: string;
      landSourcing: string;
      villaInvestment: string;
      villaManagement: string;
      general: string;
    };
    message: string;
    sendMessage: string;
    searchCountry: string;
    errorVerification: string;
    verifying: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    headingLight: string;
    headingBold: string;
    paragraph: string;
    pricePrefix: string;
    items: {
      architecture: { title: string; priceSuffix: string; description: string };
      construction: { title: string; priceSuffix: string; description: string };
      villaManagement: { title: string; price: string; description: string };
      landSourcing: { title: string; price: string; description: string };
    };
    partnershipsEyebrow: string;
    partnershipsTitle: string;
    partnershipsDescription: string;
    learnMore: string;
    packagesTitle: string;
    packagesDescriptionPrefix: string;
    viewPackages: string;
    fixedPriceQuestion: string;
  };
  whyRwanda: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    stats: { value: string; label: string }[];
    cta: string;
  };
  portfolioSection: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    items: Record<"bp" | "virunga" | "everRetreat" | "everDesign", { title: string; description: string; cta: string }>;
  };
  investmentMarket: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    stat1: string;
    stat2: string;
    stat3: string;
    cta: string;
    sideStat1Label: string;
    sideStat2Label: string;
    sideStat3Label: string;
    sideStat4Label: string;
  };
  socialFollowing: {
    joinLine: string;
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    steps: { timeline: string; title: string; description: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  calculator: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    cta: string;
  };
  freeGuide: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    points: string[];
    sendGuide: string;
  };
  areasSection: {
    eyebrow: string;
    heading: string;
    headingLight: string;
    headingBold: string;
    paragraph: string;
    viewAll: string;
    items: Record<"kigali" | "musanze" | "rubavu" | "nyungwe" | "huye" | "nyanza" | "evane" | "akagera", { description: string }>;
  };
  portfolioGallery: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    viewFull: string;
    filterAllLabel: string;
    categoryExteriors: string;
    categoryInteriors: string;
    categoryAmenities: string;
    showingCount: string;
  };
  testimonials: {
    quotes: { quote: string; author: string }[];
    readAll: string;
  };
  team: {
    eyebrow: string;
    heading: string;
    headingLight: string;
    headingBold: string;
    paragraph: string;
    meetTeam: string;
    otherPeople: string;
    roles: {
      ceo: string;
      architectureManager: string;
      hospitalityManager: string;
      accountant: string;
      operationsManager: string;
      siteEngineer: string;
      it: string;
      procurementOfficer: string;
    };
    roleDescriptions: {
      ceo: string;
      architectureManager: string;
      hospitalityManager: string;
      accountant: string;
      operationsManager: string;
      siteEngineer: string;
      it: string;
      procurementOfficer: string;
    };
  };
  faqSection: {
    eyebrow: string;
    heading: string;
    headingLight: string;
    headingBold: string;
    paragraph: string;
    viewAll: string;
    items: { question: string; answer: string }[];
  };
  blogSection: {
    eyebrow: string;
    heading: string;
    headingLight: string;
    headingBold: string;
    readMore: string;
    viewAll: string;
    posts: { title: string; excerpt: string }[];
  };
  blogCategories: {
    investment: string;
    location: string;
    legal: string;
    building: string;
  };
  newsletter: {
    eyebrow: string;
    heading: string;
    headingLight: string;
    headingBold: string;
    paragraph: string;
    placeholder: string;
    cta: string;
  };
  finalCta: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    benefits: string[];
  };
  realEstatePage: {
    hero: {
      eyebrow: string;
      headlineLight: string;
      headlineBold: string;
      subtext: string;
      stat1Label: string;
      stat2Label: string;
      stat3Label: string;
      stat4Value: string;
      stat4Label: string;
    };
    about: {
      eyebrow: string;
      headingLight: string;
      headingBold: string;
      paragraphs: string[];
      statLegalTeam: string;
      statLegalTeamLabel: string;
      statFixedPrice: string;
      statFixedPriceLabel: string;
      statRwanda: string;
      statRwandaLabel: string;
      statEndToEnd: string;
      statEndToEndLabel: string;
      cta: string;
    };
    advantage: {
      eyebrow: string;
      headingLight: string;
      headingBold: string;
      intro: string;
      highlights: { number: string; title: string; description: string }[];
      buyingProcessTitle: string;
      buyingSteps: { label: string; text: string }[];
      freeholdTitle: string;
      freeholdParagraphs: string[];
      ctaEnquire: string;
      ctaViewAll: string;
    };
    services: {
      eyebrow: string;
      heading: string;
      items: { number: string; title: string; price: string; description: string; href: string }[];
      learnMore: string;
    };
    featured: {
      eyebrow: string;
      heading: string;
      paragraph: string;
      viewDetails: string;
      viewAll: string;
    };
    routes: {
      eyebrow: string;
      headingLight: string;
      headingBold: string;
      items: {
        title: string;
        description: string;
        stat1Label: string;
        stat1Value: string;
        stat2Label: string;
        stat2Value: string;
      }[];
      learnMore: string;
      note: string;
    };
    whyChoose: {
      eyebrow: string;
      heading: string;
      items: { title: string; description: string }[];
      talkToUs: string;
      seeCaseStudy: string;
      viewDevelopments: string;
    };
    faq: {
      headingLight: string;
      headingBold: string;
      stillHaveQuestionsTitle: string;
      stillHaveQuestionsText: string;
      contactUs: string;
      viewAllFaqs: string;
    };
    areas: {
      headingLight: string;
      headingBold: string;
      explorePrefix: string;
    };
    finalCta: {
      eyebrow: string;
      headingLight: string;
      headingBold: string;
      paragraph: string;
      enquireNow: string;
      viewDevelopments: string;
      quickLinksLabel: string;
      linkServices: string;
      linkPortfolio: string;
      linkAreas: string;
      linkAbout: string;
      statShowcaseLabel: string;
      statDevelopmentsLabel: string;
      statRegionsLabel: string;
    };
  };
  servicesPage: {
    trustBar: {
      stat1Value: string;
      stat1Label: string;
      stat2Value: string;
      stat2Label: string;
      stat3Value: string;
      stat3Label: string;
      stat4Value: string;
      stat4Label: string;
    };
    servicesEyebrow: string;
    servicesHeadingLight: string;
    servicesHeadingBold: string;
    serviceItems: {
      architecture: { tagline: string; description1: string; description2: string; feature1: string; feature2: string; feature3: string; cta: string };
      construction: { tagline: string; description1: string; description2: string; feature1: string; feature2: string; feature3: string; cta: string };
      villaManagement: { tagline: string; description1: string; description2: string; feature1: string; feature2: string; feature3: string; cta: string };
      landSourcing: { tagline: string; description1: string; description2: string; feature1: string; feature2: string; feature3: string; cta: string };
      developmentPartnerships: { tagline: string; description1: string; description2: string; feature1: string; feature2: string; feature3: string; cta: string };
    };
    promise: {
      eyebrow: string;
      heading: string;
      paragraph1: string;
      paragraph2: string;
    };
    moreServicesEyebrow: string;
    moreServicesHeading: string;
    moreServiceItems: {
      interiorDesign: { title: string; description: string };
      landscape: { title: string; description: string };
      projectManagement: { title: string; description: string };
      packages: { title: string; description: string };
      developerGuide: { title: string; description: string };
    };
    moreServicesLearnMore: string;
    closingEyebrow: string;
    closingHeadingLight: string;
    closingHeadingBold: string;
    closingParagraph: string;
    closingCtaPrimary: string;
    closingCtaSecondary: string;
  };
  faqPage: {
    topicBuying: string;
    topicInvestment: string;
    topicBuilding: string;
    topicOngoing: string;
    resourcesEyebrow: string;
    resourcesHeading: string;
    servicesEyebrow: string;
    servicesHeading: string;
    exploreLabel: string;
    closingEyebrow: string;
    closingHeadingLight: string;
    closingHeadingBold: string;
    closingParagraph: string;
    closingCtaPrimary: string;
    closingCtaSecondary: string;
  };
  developmentsPage: {
    heroEyebrow: string;
    heroHeadingLine1: string;
    heroHeadingLine2: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    stat4Label: string;
    ctaPrimary: string;
    ctaSecondary: string;
    activeEyebrow: string;
    activeHeading: string;
    activeHeadingLight: string;
    activeHeadingBold: string;
  };
  pricingFormSection: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    feature1: string;
    feature2: string;
    feature3: string;
  };
  interestedInInvesting: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    ctaEnquire: string;
  };
  previousDevelopments: {
    eyebrow: string;
    heading: string;
    viewProject: string;
    calloutTitle: string;
    footnote: string;
  };
  investmentGuidesSection: {
    eyebrow: string;
    heading: string;
    headingLight: string;
    headingBold: string;
    readMore: string;
    viewAll: string;
  };
  contactPage: {
    heroEyebrow: string;
    heroHeading: string;
    heroParagraph: string;
    heroCta: string;
    officeRwandaHqLabel: string;
    officeDesignStudioLabel: string;
    whatsappLabel: string;
    whatsappHours: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
    formEyebrow: string;
    formHeading: string;
    formHeadingLight: string;
    formHeadingBold: string;
    formParagraph: string;
    faqEyebrow: string;
    faqHeading: string;
    faqHeadingLight: string;
    faqHeadingBold: string;
  };
  portfolioPage: {
    heroEyebrow: string;
    heroHeadingLight: string;
    heroHeadingBold: string;
    heroParagraph: string;
    theWorkHeadingLight: string;
    theWorkHeadingBold: string;
    theWorkParagraphPart1: string;
    theWorkParagraphLinkLabel: string;
    theWorkParagraphPart2: string;
    filterEyebrow: string;
    resultsHeading: string;
    resultsParagraph: string;
    notableHeading: string;
    notableBpDescription: string;
    notableCottageDescription: string;
    notableVirungaDescription: string;
    closingHeading: string;
    closingParagraph: string;
    closingCtaPrimary: string;
    closingCtaSecondary: string;
  };
  blogIndexPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    heroIntro: string;
    postsEyebrow: string;
  };
  blogRentalIncomePage: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    yieldHeading: string;
    yieldIntro: string;
    tableAreaHeader: string;
    tableNightlyRateHeader: string;
    tableOccupancyHeader: string;
    tableYieldHeader: string;
    managementHeading: string;
    managementIntro: string;
    managementItems: string[];
  };
  blogBestAreaPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    statsLandPriceLabel: string;
    statsGrossYieldLabel: string;
    statsOccupancyLabel: string;
    kigaliHeading: string;
    kigaliParagraph: string;
    musanzeHeading: string;
    musanzeParagraph: string;
    rubavuHeading: string;
    rubavuParagraph: string;
    nyungweHeading: string;
    nyungweParagraph: string;
    akageraHeading: string;
    akageraParagraph: string;
    recommendationHeading: string;
    recommendationPart1: string;
    recommendationStrong1: string;
    recommendationPart2: string;
    recommendationStrong2: string;
    recommendationPart3: string;
    recommendationStrong3: string;
    recommendationPart4: string;
  };
  blogForeignersPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    dateLabel: string;
    section1Heading: string;
    section1Paragraph: string;
    leaseholdHeading: string;
    leaseholdParagraph: string;
    leaseholdItems: string[];
    companyHeading: string;
    companyParagraph: string;
    companyItems: string[];
    mistakesHeading: string;
    mistakesItems: string[];
    processHeading: string;
    processItems: string[];
    workWithUsHeading: string;
    workWithUsParagraph: string;
  };
  blogLakeKivuPage: {
    pageTitle: string;
    pageSubtitle: string;
    atGlanceHeading: string;
    tableFactorHeader: string;
    tableAvgLandPrice: string;
    tableAvgGrossYield: string;
    tableAvgOccupancyRow: string;
    tableNightlyRateRange: string;
    tableCapitalAppreciation: string;
    lakeKivuHeading: string;
    lakeKivuProsLabel: string;
    lakeKivuPros: string;
    lakeKivuConsLabel: string;
    lakeKivuCons: string;
    musanzeHeading: string;
    musanzeProsLabel: string;
    musanzePros: string;
    musanzeConsLabel: string;
    musanzeCons: string;
    whichHeading: string;
    whichParagraph1Pre: string;
    whichParagraph1Strong1: string;
    whichParagraph1Mid: string;
    whichParagraph1Strong2: string;
    whichParagraph1Post: string;
    whichParagraph2: string;
  };
  blogCostToBuildPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    breakdownHeading: string;
    breakdownParagraph: string;
    costBySizeHeading: string;
    tableVillaType: string;
    tableBuiltArea: string;
    tableCostRange: string;
    row1Type: string;
    row2Type: string;
    row3Type: string;
    row4Type: string;
    landCostsHeading: string;
    landCostsParagraph: string;
    landPriceRangesHeading: string;
    landPriceKigaliDesc: string;
    landPriceRubavuDesc: string;
    landPriceMusanzeDesc: string;
    landPriceNyungweDesc: string;
    landPriceAkageraDesc: string;
    totalBudgetHeading: string;
    totalBudgetParagraph1: string;
    totalBudgetParagraph2: string;
  };
  blogHowToBuildPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    landSourcingHeading: string;
    landSourcingParagraph: string;
    whatWeCheckHeading: string;
    whatWeCheckItems: string[];
    designHeading: string;
    designParagraph: string;
    permitHeading: string;
    permitParagraph: string;
    constructionHeading: string;
    constructionParagraph: string;
    timelineHeading: string;
    timelineItems: string[];
    rentalSetupHeading: string;
    rentalSetupParagraph: string;
  };
  howToBuyPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    heroSlide3Title: string;
    heroSlide3Subtitle: string;
    introEyebrow: string;
    introHeadingLight: string;
    introHeadingBold: string;
    introParagraph1: string;
    introParagraph2: string;
    stepsEyebrow: string;
    stepsHeadingLight: string;
    stepsHeadingBold: string;
    budgetingEyebrow: string;
    budgetingHeadingLight: string;
    budgetingHeadingBold: string;
    budgetingIntro: string;
    budgetingRow1Label: string;
    budgetingRow1Value: string;
    budgetingRow1Desc: string;
    budgetingRow2Label: string;
    budgetingRow2Value: string;
    budgetingRow2Desc: string;
    budgetingRow3Label: string;
    budgetingRow3Value: string;
    budgetingRow3Desc: string;
    budgetingRow4Label: string;
    budgetingRow4Value: string;
    budgetingRow4Desc: string;
    budgetingNote: string;
    foreignersEyebrow: string;
    foreignersHeadingLight: string;
    foreignersHeadingBold: string;
    foreignersLinkLabel: string;
    villasEyebrow: string;
    villasHeadingLight: string;
    villasHeadingBold: string;
    villasParagraph: string;
    closingEyebrow: string;
    closingHeadingLight: string;
    closingHeadingBold: string;
    closingParagraph: string;
    closingCtaPrimary: string;
    closingCtaSecondary: string;
  };
  investInRwandaPage: {
    introParagraph: string;
    strategyHeading: string;
    strategyParagraph: string;
    strategyAreas: { description: string }[];
    roiHeading: string;
    roiSubheading: string;
    roiTableStrategy: string;
    roiTableYield: string;
    roiTableNotes: string;
    roiData: { strategy: string; notes: string }[];
    comparisonHeading: string;
    comparisonParagraph: string;
    comparisonTableMetric: string;
    comparisonData: { metric: string }[];
    standOutHeading: string;
    standOutParagraph: string;
    standOutLabels: { label: string }[];
    tiersHeading: string;
    tiers: { title: string; description: string; breakEven: string }[];
    tierReturnPrefix: string;
    tiersCta: string;
    developmentsHeading: string;
    developmentsParagraph: string;
    developmentPrototype: string;
    developmentComingSoon: string;
    developmentNotForSale: string;
    viewDevelopment: string;
    viewAllDevelopments: string;
    considerationsHeading: string;
    considerationsParagraph: string;
    considerations: { title: string; description: string }[];
    considerationsClosing: string;
    processHeading: string;
    processSubheading: string;
    processSteps: { step: string; description: string }[];
    processCta: string;
    faqHeading: string;
    faqItems: { q: string; a: string }[];
  };
  packagesPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    heroSlide3Title: string;
    heroSlide3Subtitle: string;
    statFixedPriceLabel: string;
    statFixedPriceSub: string;
    statTimelineSub: string;
    statYieldSub: string;
    statDesignFeesSub: string;
    packagesEyebrow: string;
    packagesHeading: string;
    packagesParagraph: string;
    packages: { name: string; description: string; features: string[] }[];
    mostPopular: string;
    enquireNow: string;
    includedHeading: string;
    includedParagraph: string;
    includedItems: string[];
    includedClosing: string;
  };
  landZoningPage: {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    heroTitle: string;
    heroSubtitle: string;
    introHeading: string;
    introParagraph: string;
    badgeVerify: string;
    badgePermits: string;
    classificationsHeading: string;
    zones: { title: string; description: string; features: string[] }[];
    zoneLabel: string;
    complianceHeading: string;
    complianceParagraph: string;
    verifyLandCta: string;
    landSourcingCta: string;
    noticeHeading: string;
    noticeParagraph: string;
    ctaHeading: string;
    ctaParagraph: string;
    contactCta: string;
  };
  areasPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    heroSlide3Title: string;
    heroSlide3Subtitle: string;
    sectionEyebrow: string;
    sectionHeading: string;
    sectionParagraph: string;
    metricsHeading: string;
    metricsParagraph: string;
    tableArea: string;
    tableLandPrice: string;
    tableAvgYield: string;
    tableOccupancy: string;
    tableBestFor: string;
    bestForKigali: string;
    bestForMusanze: string;
    bestForRubavu: string;
    bestForNyungwe: string;
    bestForAkagera: string;
    bestForHuye: string;
    bestForEvane: string;
    bestForNyanza: string;
  };
  areaMetricLabels: {
    heading: string;
    landPrice: string;
    grossYield: string;
    avgOccupancy: string;
    appreciation: string;
  };
  areaKigaliPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    marketHeading: string;
    marketParagraph1: string;
    whyInvestHeading: string;
    whyInvestItem1Title: string;
    whyInvestItem1Description: string;
    whyInvestItem2Title: string;
    whyInvestItem2Description: string;
    whyInvestItem3Title: string;
    whyInvestItem3Description: string;
    whyInvestItem4Title: string;
    whyInvestItem4Description: string;
  };
  areaMusanzePage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    marketHeading: string;
    marketParagraph1Pre: string;
    marketParagraph1Post: string;
    whyInvestHeading: string;
    whyInvestItem1Title: string;
    whyInvestItem1Description: string;
    whyInvestItem2Title: string;
    whyInvestItem2Description: string;
    whyInvestItem3Title: string;
    whyInvestItem3Description: string;
    whyInvestItem4Title: string;
    whyInvestItem4Description: string;
  };
  areaRubavuPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    marketHeading: string;
    marketParagraph1Pre: string;
    marketParagraph1Mid: string;
    marketParagraph1Post: string;
    whyInvestHeading: string;
    whyInvestItem1Title: string;
    whyInvestItem1Description: string;
    whyInvestItem2Title: string;
    whyInvestItem2Description: string;
    whyInvestItem3Title: string;
    whyInvestItem3Description: string;
    whyInvestItem4Title: string;
    whyInvestItem4Description: string;
  };
  areaNyungwePage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    marketHeading: string;
    marketParagraph1: string;
    marketParagraph2: string;
    whyInvestHeading: string;
    whyInvestItem1Title: string;
    whyInvestItem1Description: string;
    whyInvestItem2Title: string;
    whyInvestItem2Description: string;
    whyInvestItem3Title: string;
    whyInvestItem3Description: string;
    whyInvestItem4Title: string;
    whyInvestItem4Description: string;
  };
  areaHuyePage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    marketHeading: string;
    marketParagraph1: string;
    marketParagraph2: string;
    whyInvestHeading: string;
    whyInvestItem1Title: string;
    whyInvestItem1Description: string;
    whyInvestItem2Title: string;
    whyInvestItem2Description: string;
    whyInvestItem3Title: string;
    whyInvestItem3Description: string;
    whyInvestItem4Title: string;
    whyInvestItem4Description: string;
  };
  areaAkageraPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    marketHeading: string;
    marketParagraph1: string;
    marketParagraph2: string;
    whyInvestHeading: string;
    whyInvestItem1Title: string;
    whyInvestItem1Description: string;
    whyInvestItem2Title: string;
    whyInvestItem2Description: string;
    whyInvestItem3Title: string;
    whyInvestItem3Description: string;
    whyInvestItem4Title: string;
    whyInvestItem4Description: string;
  };
  areaNyanzaPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    marketHeading: string;
    marketParagraph1: string;
    marketParagraph2: string;
    whyInvestHeading: string;
    whyInvestItem1Title: string;
    whyInvestItem1Description: string;
    whyInvestItem2Title: string;
    whyInvestItem2Description: string;
    whyInvestItem3Title: string;
    whyInvestItem3Description: string;
    whyInvestItem4Title: string;
    whyInvestItem4Description: string;
  };
  areaEvanePage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    marketHeading: string;
    marketParagraph1: string;
    marketParagraph2: string;
    whyInvestHeading: string;
    whyInvestItem1Title: string;
    whyInvestItem1Description: string;
    whyInvestItem2Title: string;
    whyInvestItem2Description: string;
    whyInvestItem3Title: string;
    whyInvestItem3Description: string;
    whyInvestItem4Title: string;
    whyInvestItem4Description: string;
  };
  aboutPageExtra: {
    heroEyebrow: string;
    heroTitle: string;
    heroTitleLight: string;
    heroTitleLine2: string;
    heroTitleBold: string;
    heroSubtitle: string;
    villasHeading: string;
    villasParagraph: string;
    originEyebrow: string;
    originHeading: string;
    originHeadingLight: string;
    originHeadingBold: string;
    originParagraph1: string;
    originParagraph2: string;
    originParagraph3: string;
    visionHeading: string;
    visionText: string;
    missionHeading: string;
    missionText: string;
    teamStatsEyebrow: string;
    teamStatsHeading: string;
    teamStatsParagraph: string;
  };
  buildCalculatorPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    heroSlide3Title: string;
    heroSlide3Subtitle: string;
    processHeading: string;
    processIntro: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    step5Title: string;
    step5Desc: string;
  };
  choosingDeveloperPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    heroSlide3Title: string;
    heroSlide3Subtitle: string;
    redFlagsHeading: string;
    redFlagsIntro: string;
    flag1Title: string;
    flag1Desc: string;
    flag2Title: string;
    flag2Desc: string;
    flag3Title: string;
    flag3Desc: string;
    flag4Title: string;
    flag4Desc: string;
    checklistEyebrow: string;
    checklistHeading: string;
    checklistItem1: string;
    checklistItem2: string;
    checklistItem3: string;
    checklistItem4: string;
    checklistItem5: string;
    checklistItem6: string;
    checklistItem7: string;
    checklistItem8: string;
    checklistItem9: string;
    checklistItem10: string;
    beforeYouPayHeading: string;
    developerQuestionsHeading: string;
    roleComparisonEyebrow: string;
    roleComparisonHeading: string;
    roleColRole: string;
    roleColFocus: string;
    roleColPaidBy: string;
    roleColWatch: string;
    roleAgentName: string;
    roleAgentFocus: string;
    roleAgentPaidBy: string;
    roleAgentWatch: string;
    roleArchitectName: string;
    roleArchitectFocus: string;
    roleArchitectPaidBy: string;
    roleArchitectWatch: string;
    roleBuilderName: string;
    roleBuilderFocus: string;
    roleBuilderPaidBy: string;
    roleBuilderWatch: string;
    roleManagerName: string;
    roleManagerFocus: string;
    roleManagerPaidBy: string;
    roleManagerWatch: string;
    roleComparisonIntro: string;
    roleComparisonClosing: string;
    whyChooseHeading: string;
    whyChooseParagraph1: string;
    whyChooseParagraph2: string;
    stakesEyebrow: string;
    stakesHeadingLight: string;
    stakesHeadingBold: string;
    stakesParagraph1: string;
    stakesParagraph2: string;
    flagsEyebrow: string;
    legalEyebrow: string;
    legalHeadingLight: string;
    legalHeadingBold: string;
    legalParagraph1: string;
    legalParagraph2: string;
    paymentEyebrow: string;
    paymentHeadingLight: string;
    paymentHeadingBold: string;
    paymentParagraph1: string;
    paymentParagraph2: string;
    whyItMattersEyebrow: string;
    whyItMattersHeadingLight: string;
    whyItMattersHeadingBold: string;
    whyItMattersParagraph1: string;
    whyItMattersParagraph2: string;
    proofEyebrow: string;
    proofHeadingLight: string;
    proofHeadingBold: string;
    proofIntro: string;
    proofItem1Title: string;
    proofItem1Desc: string;
    proofItem2Title: string;
    proofItem2Desc: string;
    proofItem3Title: string;
    proofItem3Desc: string;
    proofItem4Title: string;
    proofItem4Desc: string;
    proofItem5Title: string;
    proofItem5Desc: string;
    proofItem6Title: string;
    proofItem6Desc: string;
    developmentsSubheadingLight: string;
    developmentsSubheadingBold: string;
    developmentsSubIntro: string;
    faq1Question: string;
    faq1Answer: string;
    faq2Question: string;
    faq2Answer: string;
    faq3Question: string;
    faq3Answer: string;
    closingEyebrow: string;
    closingHeadingLight: string;
    closingHeadingBold: string;
    closingParagraph: string;
    closingListItem1: string;
    closingListItem2: string;
    closingListItem3: string;
    closingCtaPrimary: string;
    closingCtaSecondary: string;
  };
  fractionalOwnershipPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    heroSlide3Title: string;
    heroSlide3Subtitle: string;
    howItWorksEyebrow: string;
    howItWorksHeadingLine1: string;
    howItWorksHeadingLine2: string;
    howItWorksParagraph1: string;
    howItWorksParagraph2: string;
    viewSharesButton: string;
    enquireNowButton: string;
    occupancyBadgeValue: string;
    occupancyBadgeLabel: string;
    sharesEyebrow: string;
    sharesHeading: string;
    sharesIntro: string;
    shareWeeksValue: string;
    bestValueBadge: string;
    ecoLuxuryBadge: string;
    labelShare: string;
    labelWeeksPerYear: string;
    labelPrice: string;
    labelYield: string;
    enquireAboutShareButton: string;
    benefitsEyebrow: string;
    benefitsHeading: string;
    benefitsIntro: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    benefit4Title: string;
    benefit4Desc: string;
    benefit5Title: string;
    benefit5Desc: string;
    benefit6Title: string;
    benefit6Desc: string;
    glanceEyebrow: string;
    glanceHeading: string;
    glanceShareLabel: string;
    glanceShareValue: string;
    glanceUsageLabel: string;
    glanceUsageValue: string;
    glanceOccupancyLabel: string;
    glanceOccupancyValue: string;
    glanceExitLabel: string;
    glanceExitValue: string;
    glanceCostsLabel: string;
    glanceCostsValue: string;
    tiersEyebrow: string;
    tiersHeading: string;
    tiersIntro: string;
    tier1Label: string;
    tier1Price: string;
    tier1Weeks: string;
    tier1Note: string;
    tier2Label: string;
    tier2Price: string;
    tier2Weeks: string;
    tier2Note: string;
    tier3Label: string;
    tier3Price: string;
    tier3Weeks: string;
    tier3Note: string;
    comparisonEyebrow: string;
    comparisonHeading: string;
    comparisonIntro: string;
    comparisonFeatureLabel: string;
    comparisonFractionalLabel: string;
    comparisonFullLabel: string;
    comparisonRows: { feature: string; fractional: string; full: string }[];
    fitEyebrow: string;
    fitHeading: string;
    fitIntro: string;
    goodFitHeading: string;
    goodFitItems: string[];
    notFitHeading: string;
    notFitItems: string[];
    crossPromoHeading: string;
    seeTestimonialsLabel: string;
    meetTeamLabel: string;
  };
  referAFriendPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    contentHeading: string;
    contentParagraph: string;
    howItWorksHeading: string;
    step1: string;
    step2: string;
    step3: string;
    termsHeading: string;
    term1: string;
    term2: string;
    term3: string;
    term4: string;
    faqHeading: string;
    faqItems: { question: string; answer: string }[];
  };
  villaToursPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    scheduleEyebrow: string;
    scheduleHeading: string;
    scheduleHeadingLight: string;
    scheduleHeadingBold: string;
    scheduleParagraph: string;
    onGroundTitle: string;
    onGroundDesc: string;
    virtualTourTitle: string;
    virtualTourDesc: string;
    bookTourButton: string;
  };
  serviceArchitecturePage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    heroSlide3Title: string;
    heroSlide3Subtitle: string;
    approachEyebrow: string;
    approachHeading: string;
    approachParagraph1: string;
    approachParagraph2: string;
    processEyebrow: string;
    processHeading: string;
    stage1Title: string;
    stage1Desc: string;
    stage2Title: string;
    stage2Desc: string;
    stage3Title: string;
    stage3Desc: string;
    stage4Title: string;
    stage4Desc: string;
    stage5Title: string;
    stage5Desc: string;
    philosophyHeading: string;
    philosophyParagraph: string;
    projectsHeading: string;
    projectBpDescription: string;
    projectCottageDescription: string;
    projectVirungaDescription: string;
    pricingEyebrow: string;
    pricingHeading: string;
    pricingIntro: string;
    pricingColService: string;
    pricingColPrice: string;
    pricingColNotes: string;
    pricingRow1Label: string;
    pricingRow1Note: string;
    pricingRow2Label: string;
    pricingRow2Note: string;
    pricingNote: string;
    galleryEyebrow: string;
    galleryHeading: string;
    galleryIntro: string;
    crossLinksEyebrow: string;
    crossLinksHeading: string;
    crossLinksCta: string;
    crossLinkCalculatorTitle: string;
    crossLinkCalculatorDesc: string;
    checklistItem1: string;
    checklistItem2: string;
    checklistItem3: string;
    checklistItem4: string;
    checklistItem5: string;
    checklistItem6: string;
    checklistItem7: string;
    advantageEyebrow: string;
    advantageHeadingLight: string;
    advantageHeadingBold: string;
    advantageParagraph1: string;
    advantageParagraph2: string;
    advantageItem1: string;
    advantageItem2: string;
    advantageItem3: string;
    advantageItem4: string;
    advantageItem5: string;
    stylesEyebrow: string;
    stylesHeadingLight: string;
    stylesHeadingBold: string;
    stylesIntro: string;
    style1Title: string;
    style1Desc: string;
    style2Title: string;
    style2Desc: string;
    style3Title: string;
    style3Desc: string;
    style4Title: string;
    style4Desc: string;
    oneTeamEyebrow: string;
    oneTeamHeadingLight: string;
    oneTeamHeadingBold: string;
    oneTeamParagraph1: string;
    oneTeamParagraph2: string;
    closingEyebrow: string;
    closingHeadingLight: string;
    closingHeadingBold: string;
    closingParagraph: string;
    closingCtaPrimary: string;
    closingCtaSecondary: string;
    faq1Question: string;
    faq1Answer: string;
    faq2Question: string;
    faq2Answer: string;
    faq3Question: string;
    faq3Answer: string;
  };
  serviceConstructionPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    heroSlide3Title: string;
    heroSlide3Subtitle: string;
    approachEyebrow: string;
    approachHeadingLight: string;
    approachHeadingBold: string;
    approachParagraph1: string;
    approachParagraph2: string;
    introChecklistItem1: string;
    introChecklistItem2: string;
    introChecklistItem3: string;
    introChecklistItem4: string;
    introChecklistItem5: string;
    introChecklistItem6: string;
    pricingEyebrow: string;
    pricingHeading: string;
    pricingIntro: string;
    tierStandardDesc: string;
    tierPremiumDesc: string;
    tierLuxuryDesc: string;
    pricingDisclaimer: string;
    pricingCalculatorCta: string;
    atGlanceEyebrow: string;
    atGlanceHeading: string;
    atGlanceItems: string[];
    includedLabel: string;
    quotedSeparatelyLabel: string;
    quotedSeparatelyItems: string[];
    processHeading: string;
    step1Title: string;
    step1Desc: string;
    step1Duration: string;
    step2Title: string;
    step2Desc: string;
    step2Duration: string;
    step3Title: string;
    step3Desc: string;
    step3Duration: string;
    step4Title: string;
    step4Desc: string;
    step4Duration: string;
    step5Title: string;
    step5Desc: string;
    step5Duration: string;
    whyChooseEyebrow: string;
    whyChooseHeadingLight: string;
    whyChooseHeadingBold: string;
    whyChooseParagraph1: string;
    whyChooseParagraph2: string;
    whyChooseItem1: string;
    whyChooseItem2: string;
    whyChooseItem3: string;
    whyChooseItem4: string;
    whyChooseItem5: string;
    whyChooseItem6: string;
    remoteEyebrow: string;
    remoteHeadingLight: string;
    remoteHeadingBold: string;
    remoteParagraph1: string;
    remoteParagraph2: string;
    remoteItem1: string;
    remoteItem2: string;
    remoteItem3: string;
    remoteItem4: string;
    fearEyebrow: string;
    fearHeadingLight: string;
    fearHeadingBold: string;
    commonFearLabel: string;
    fear1Label: string;
    fear1Rebuttal: string;
    fear2Label: string;
    fear2Rebuttal: string;
    fear3Label: string;
    fear3Rebuttal: string;
    fear4Label: string;
    fear4Rebuttal: string;
    fear5Label: string;
    fear5Rebuttal: string;
    materialsEyebrow: string;
    materialsHeading: string;
    materialsIntro: string;
    materialsCategoryTitle: string;
    materialsCategoryDesc: string;
    caseStudyEyebrow: string;
    caseStudyHeading: string;
    caseStudyParagraph: string;
    caseStudyCta: string;
    faq1Question: string;
    faq1Answer: string;
    faq2Question: string;
    faq2Answer: string;
    faq3Question: string;
    faq3Answer: string;
    builtManagedEyebrow: string;
    builtManagedHeadingLight: string;
    builtManagedHeadingBold: string;
    builtManagedParagraph1: string;
    builtManagedParagraph2: string;
    builtManagedItem1: string;
    builtManagedItem2: string;
    builtManagedItem3: string;
    builtManagedItem4: string;
    closingEyebrow: string;
    closingHeadingLight: string;
    closingHeadingBold: string;
    closingParagraph: string;
    closingCtaWhatsApp: string;
  };
  serviceVillaManagementPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    heroSlide3Title: string;
    heroSlide3Subtitle: string;
    statLabelVillasManaged: string;
    statLabelOccupancy: string;
    statLabelGuestSupport: string;
    introEyebrow: string;
    introHeadingLight: string;
    introHeadingBold: string;
    introParagraph1: string;
    introParagraph2: string;
    introChecklistItem1: string;
    introChecklistItem2: string;
    introChecklistItem3: string;
    introChecklistItem4: string;
    introChecklistItem5: string;
    introChecklistItem6: string;
    introChecklistItem7: string;
    yieldEyebrow: string;
    yieldHeadingLight: string;
    yieldHeadingBold: string;
    yieldIntro: string;
    yieldColArea: string;
    yieldColYield: string;
    yieldColOccupancy: string;
    yieldSourceNote: string;
    yieldCta: string;
    includedEyebrow: string;
    includedHeadingLight: string;
    includedHeadingBold: string;
    includedIntro: string;
    included1Title: string;
    included1Desc: string;
    included2Title: string;
    included2Desc: string;
    included3Title: string;
    included3Desc: string;
    included4Title: string;
    included4Desc: string;
    included5Title: string;
    included5Desc: string;
    included6Title: string;
    included6Desc: string;
    onboardingEyebrow: string;
    onboardingHeadingLight: string;
    onboardingHeadingBold: string;
    onboardingIntro: string;
    onboardStep1Title: string;
    onboardStep1Desc: string;
    onboardStep2Title: string;
    onboardStep2Desc: string;
    onboardStep3Title: string;
    onboardStep3Desc: string;
    onboardStep4Title: string;
    onboardStep4Desc: string;
    onboardStep5Title: string;
    onboardStep5Desc: string;
    comparisonEyebrow: string;
    comparisonHeadingLight: string;
    comparisonHeadingBold: string;
    comparisonIntro: string;
    selfManagedLabel: string;
    managedLabel: string;
    selfManagedItem1: string;
    selfManagedItem2: string;
    selfManagedItem3: string;
    selfManagedItem4: string;
    selfManagedItem5: string;
    selfManagedItem6: string;
    managedItem1: string;
    managedItem2: string;
    managedItem3: string;
    managedItem4: string;
    managedItem5: string;
    managedItem6: string;
    whyChooseEyebrow: string;
    whyChooseHeadingLight: string;
    whyChooseHeadingBold: string;
    whyChooseParagraph1: string;
    whyChooseParagraph2: string;
    whyChooseItem1: string;
    whyChooseItem2: string;
    whyChooseItem3: string;
    whyChooseItem4: string;
    whyChooseItem5: string;
    whyChooseItem6: string;
    builtManagedEyebrow: string;
    builtManagedHeadingLight: string;
    builtManagedHeadingBold: string;
    builtManagedParagraph1: string;
    builtManagedParagraph2: string;
    builtManagedItem1: string;
    builtManagedItem2: string;
    builtManagedItem3: string;
    builtManagedItem4: string;
    faq1Question: string;
    faq1Answer: string;
    faq2Question: string;
    faq2Answer: string;
    faq3Question: string;
    faq3Answer: string;
    closingEyebrow: string;
    closingHeadingLight: string;
    closingHeadingBold: string;
    closingParagraph: string;
    closingCtaWhatsApp: string;
  };
  serviceLandPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    heroSlide2Title: string;
    heroSlide2Subtitle: string;
    heroSlide3Title: string;
    heroSlide3Subtitle: string;
    processEyebrow: string;
    processHeading: string;
    processParagraph1: string;
    processParagraph2: string;
    areasEyebrow: string;
    areasHeading: string;
    areasParagraph: string;
    areaDescLakeKivu: string;
    areaDescMusanze: string;
    areaDescRubavu: string;
    areaDescKigali: string;
    areaDescNyungwe: string;
    areaDescAkagera: string;
    includedHeading: string;
    includedItems: string[];
    tenureEyebrow: string;
    tenureHeading: string;
    tenureColAspect: string;
    tenureColLeasehold: string;
    tenureColFreehold: string;
    tenureRowTermLabel: string;
    tenureRowTermLeasehold: string;
    tenureRowTermFreehold: string;
    tenureRowAccessLabel: string;
    tenureRowAccessLeasehold: string;
    tenureRowAccessFreehold: string;
    tenureRowAdminLabel: string;
    tenureRowAdminLeasehold: string;
    tenureRowAdminFreehold: string;
    tenureRowRentalLabel: string;
    tenureRowRentalLeasehold: string;
    tenureRowRentalFreehold: string;
    tenureNote: string;
    acquisitionEyebrow: string;
    acquisitionHeading: string;
    acquisitionStep1Title: string;
    acquisitionStep1Desc: string;
    acquisitionStep2Title: string;
    acquisitionStep2Desc: string;
    acquisitionStep3Title: string;
    acquisitionStep3Desc: string;
    acquisitionStep4Title: string;
    acquisitionStep4Desc: string;
    acquisitionStep5Title: string;
    acquisitionStep5Desc: string;
    acquisitionStep6Title: string;
    acquisitionStep6Desc: string;
    crossLinksEyebrow: string;
    crossLinksHeading: string;
    crossLinksCta: string;
    quickRefTitle: string;
    quickRefPriceLabel: string;
    quickRefPriceValue: string;
    quickRefTermLabel: string;
    quickRefTermValue: string;
    quickRefAreasLabel: string;
    quickRefAreasValue: string;
    quickRefDiscountLabel: string;
    quickRefDiscountValue: string;
    whyBuyEyebrow: string;
    whyBuyHeading: string;
    whyBuyIntro: string;
    whyBuyItem1Title: string;
    whyBuyItem1Desc: string;
    whyBuyItem2Title: string;
    whyBuyItem2Desc: string;
    whyBuyItem3Title: string;
    whyBuyItem3Desc: string;
    whyBuyItem4Title: string;
    whyBuyItem4Desc: string;
    whyBuyItem5Title: string;
    whyBuyItem5Desc: string;
    foreignersEyebrow: string;
    foreignersHeading: string;
    foreignersOption1Label: string;
    foreignersOption1Title: string;
    foreignersOption1Desc: string;
    foreignersOption2Label: string;
    foreignersOption2Title: string;
    foreignersOption2Desc: string;
    pricesEyebrow: string;
    pricesHeading: string;
    pricesIntro: string;
    pricesColArea: string;
    pricesColPrice: string;
    pricesColYield: string;
    pricesColGuide: string;
    bestAreasEyebrow: string;
    bestAreasHeading: string;
    bestAreasParagraph: string;
    bestAreasCtaLabel: string;
    dueDiligenceEyebrow: string;
    dueDiligenceHeading: string;
    dueDiligenceIntro: string;
    dueDiligenceItem1Title: string;
    dueDiligenceItem1Desc: string;
    dueDiligenceItem2Title: string;
    dueDiligenceItem2Desc: string;
    dueDiligenceItem3Title: string;
    dueDiligenceItem3Desc: string;
    dueDiligenceItem4Title: string;
    dueDiligenceItem4Desc: string;
    mistakesEyebrow: string;
    mistakesHeading: string;
    mistakesIntro: string;
    mistakesItem1Title: string;
    mistakesItem1Desc: string;
    mistakesItem2Title: string;
    mistakesItem2Desc: string;
    mistakesItem3Title: string;
    mistakesItem3Desc: string;
    crossSellEyebrow: string;
    crossSellHeadingLight: string;
    crossSellHeadingBold: string;
    crossSellParagraph1: string;
    crossSellParagraph2: string;
    crossSellChecklistItem1: string;
    crossSellChecklistItem2: string;
    crossSellChecklistItem3: string;
    crossSellChecklistItem4: string;
    closingEyebrow: string;
    closingHeadingLight: string;
    closingHeadingBold: string;
    closingParagraph: string;
    closingCtaPrimary: string;
    closingCtaSecondary: string;
  };
  serviceDevelopmentPartnershipsPage: {
    heroSlide1Title: string;
    heroSlide1Subtitle: string;
    introEyebrow: string;
    introHeadingLight: string;
    introHeadingBold: string;
    introParagraph1: string;
    introParagraph2: string;
    introChecklistItem1: string;
    introChecklistItem2: string;
    introChecklistItem3: string;
    introChecklistItem4: string;
    introChecklistItem5: string;
    introChecklistItem6: string;
    modelsEyebrow: string;
    modelsHeadingLight: string;
    modelsHeadingBold: string;
    modelsIntro: string;
    landownerTitle: string;
    landownerDesc: string;
    landownerYourRole: string;
    landownerOurRole: string;
    investorTitle: string;
    investorDesc: string;
    investorYourRole: string;
    investorOurRole: string;
    customTitle: string;
    customDesc: string;
    customYourRole: string;
    customOurRole: string;
    flexEyebrow: string;
    flexHeadingLight: string;
    flexHeadingBold: string;
    flexIntro: string;
    flexTile1Label: string;
    flexTile1Title: string;
    flexTile1Desc: string;
    flexTile1Services: string;
    flexTile2Label: string;
    flexTile2Title: string;
    flexTile2Desc: string;
    flexTile2Services: string;
    flexTile3Label: string;
    flexTile3Title: string;
    flexTile3Desc: string;
    flexTile3Services: string;
    financeEyebrow: string;
    financeHeadingLight: string;
    financeHeadingBold: string;
    financeIntro: string;
    financeBuildLabel: string;
    financeBuildValue: string;
    financeYieldLabel: string;
    financeYieldValue: string;
    financeFeeLabel: string;
    financeFeeValue: string;
    financeShareLabel: string;
    financeShareValue: string;
    financeNote: string;
    processEyebrow: string;
    processHeadingLight: string;
    processHeadingBold: string;
    processIntro: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    step5Title: string;
    step5Desc: string;
    oneTeamEyebrow: string;
    oneTeamHeadingLight: string;
    oneTeamHeadingBold: string;
    oneTeamParagraph1: string;
    oneTeamParagraph2: string;
    oneTeamItem1: string;
    oneTeamItem2: string;
    oneTeamItem3: string;
    oneTeamItem4: string;
    oneTeamItem5: string;
    oneTeamItem6: string;
    projectsEyebrow: string;
    projectsHeading: string;
    projectsParagraph: string;
    projectUnitsShowcase: string;
    projectUnitsInDesign: string;
    faq1Question: string;
    faq1Answer: string;
    faq2Question: string;
    faq2Answer: string;
    faq3Question: string;
    faq3Answer: string;
    closingEyebrow: string;
    closingHeadingLight: string;
    closingHeadingBold: string;
    closingParagraph: string;
    closingCtaPrimary: string;
    closingCtaSecondary: string;
  };
  serviceInteriorDesignPage: {
    heroTitle: string;
    heroSubtitle: string;
    approachEyebrow: string;
    approachHeading: string;
    approachParagraph1: string;
    approachParagraph2: string;
    stylesEyebrow: string;
    stylesHeading: string;
    style1Title: string;
    style1Desc: string;
    style2Title: string;
    style2Desc: string;
    style3Title: string;
    style3Desc: string;
    style4Title: string;
    style4Desc: string;
    includedHeading: string;
    includedItems: string[];
    discountParagraph: string;
  };
  serviceLandscapePage: {
    heroTitle: string;
    heroSubtitle: string;
    approachEyebrow: string;
    approachHeading: string;
    approachParagraph1: string;
    approachParagraph2: string;
    elementsEyebrow: string;
    elementsHeading: string;
    elementsParagraph: string;
    element1Title: string;
    element1Desc: string;
    element2Title: string;
    element2Desc: string;
    element3Title: string;
    element3Desc: string;
    includedHeading: string;
    includedItems: string[];
  };
  serviceProjectManagementPage: {
    heroTitle: string;
    heroSubtitle: string;
    processEyebrow: string;
    processHeading: string;
    processParagraph1: string;
    processParagraph2: string;
    reportingEyebrow: string;
    reportingHeading: string;
    reportingParagraph: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    servicesHeading: string;
    servicesItems: string[];
  };
  buyPage: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    trustPoint1Title: string;
    trustPoint1Desc: string;
    trustPoint2Title: string;
    trustPoint2Desc: string;
    trustPoint3Title: string;
    trustPoint3Desc: string;
    formEyebrow: string;
    formHeading: string;
    formParagraph: string;
    developmentLabel: string;
    developmentPlaceholder: string;
    unitLabel: string;
    unitPlaceholder: string;
  };
  caseStudyPage: {
    pageTitle: string;
    pageSubtitle: string;
    challengeHeading: string;
    challengeParagraph: string;
    solutionHeading: string;
    solutionParagraph: string;
    resultsHeading: string;
    resultsParagraph: string;
    timelineEyebrow: string;
    timelineHeading: string;
    timelineHeadingLight: string;
    timelineHeadingBold: string;
    phaseLabel: string;
    outcomeEyebrow: string;
    outcomeHeading: string;
    outcomeHeadingLight: string;
    outcomeHeadingBold: string;
  };
  testimonialsPage: {
    heroTitle: string;
    heroSubtitle: string;
    sectionEyebrow: string;
    sectionHeading: string;
    sectionHeadingLight: string;
    sectionHeadingBold: string;
    statsEyebrow: string;
    statsHeading: string;
    statsHeadingLight: string;
    statsHeadingBold: string;
  };
  termsPage: {
    heroSubtitle: string;
    lastUpdatedLabel: string;
    lastUpdatedValue: string;
    questionsLabel: string;
    section1Heading: string;
    section1Body: string;
    section2Heading: string;
    section2Body: string;
    section3Heading: string;
    section3Body: string;
    section4Heading: string;
    section4Body: string;
    section5Heading: string;
    section5Body: string;
    section6Heading: string;
    section6Body: string;
    section7Heading: string;
    section7Body: string;
    section8Heading: string;
    section8Body: string;
    section9Heading: string;
    section9BodyPre: string;
    section9BodyPost: string;
    ctaHeading: string;
    ctaParagraph: string;
    contactUsButton: string;
    returnHomeButton: string;
  };
  privacyPage: {
    heroSubtitle: string;
    lastUpdatedLabel: string;
    lastUpdatedValue: string;
    questionsLabel: string;
    section1Heading: string;
    section1Intro: string;
    section1Item1: string;
    section1Item2: string;
    section1Item3: string;
    section2Heading: string;
    section2Intro: string;
    section2Item1: string;
    section2Item2: string;
    section2Item3: string;
    section2Item4: string;
    section3Heading: string;
    section3Body: string;
    section4Heading: string;
    section4Body: string;
    section5Heading: string;
    section5Body: string;
    section6Heading: string;
    section6BodyPre: string;
    section6BodyPost: string;
    section7Heading: string;
    section7Body: string;
    section8Heading: string;
    section8BodyPre: string;
    section8BodyMid: string;
    section8BodyPost: string;
    ctaHeading: string;
    ctaParagraph: string;
    contactUsButton: string;
    returnHomeButton: string;
  };
  processPage: {
    heroTitle: string;
    heroSubtitle: string;
  };
  processStepsSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    step5Title: string;
    step5Desc: string;
    step6Title: string;
    step6Desc: string;
    step7Title: string;
    step7Desc: string;
    step8Title: string;
    step8Desc: string;
    step9Title: string;
    step9Desc: string;
    step10Title: string;
    step10Desc: string;
    step11Title: string;
    step11Desc: string;
    step12Title: string;
    step12Desc: string;
    step1Bullets: string[];
    step2Bullets: string[];
    step3Bullets: string[];
    step4Bullets: string[];
    step5Bullets: string[];
    step6Bullets: string[];
    step7Bullets: string[];
    step8Bullets: string[];
    step9Bullets: string[];
    step10Bullets: string[];
    step11Bullets: string[];
    step12Bullets: string[];
    faqEyebrow: string;
    faqHeading: string;
  };
  formsPage: {
    heroTitle: string;
    heroSubtitle: string;
    sectionEyebrow: string;
    sectionHeading: string;
    sectionHeadingLight: string;
    sectionHeadingBold: string;
    sectionParagraph: string;
    item1Title: string;
    item1Time: string;
    item1Desc: string;
    item2Title: string;
    item2Time: string;
    item2Desc: string;
    item3Title: string;
    item3Time: string;
    item3Desc: string;
    item4Title: string;
    item4Time: string;
    item4Desc: string;
    availableLabel: string;
    requestButtonLabel: string;
    notSureHeading: string;
    notSureBody: string;
    notSureCta: string;
  };
  realEstatePageExtras: {
    inventoryDevelopmentsLabel: string;
    inventoryAreasLabel: string;
    propertyTypesEyebrow: string;
    propertyTypesHeading: string;
    villasCardTitle: string;
    villasCardDesc: string;
    villasCardCta: string;
    landCardTitle: string;
    landCardDesc: string;
    landCardPriceLabel: string;
    landCardPriceValue: string;
    landCardCta: string;
    areaFromLabel: string;
  };
  developmentsPageExtras: {
    serviceLinksEyebrow: string;
    serviceLinksHeading: string;
    calculatorKicker: string;
    calculatorTitle: string;
    calculatorDesc: string;
    calculatorCta: string;
    constructionKicker: string;
    constructionTitle: string;
    constructionDesc: string;
    constructionCta: string;
    villaManagementKicker: string;
    villaManagementTitle: string;
    villaManagementDesc: string;
    villaManagementCta: string;
  };
  devDetailExtras: {
    relatedEyebrow: string;
    relatedHeading: string;
    relatedViewLabel: string;
    faqEyebrow: string;
    faqHeading: string;
    naraFaq: { question: string; answer: string }[];
    solasFaq: { question: string; answer: string }[];
    sukuFaq: { question: string; answer: string }[];
    solasRoiEyebrow: string;
    solasRoiHeading: string;
    solasRoiParagraph: string;
    solasRoiYieldLabel: string;
    solasRoiYieldValue: string;
    solasRoiOccupancyLabel: string;
    solasRoiOccupancyValue: string;
    solasRoiNote: string;
    sukuRoiEyebrow: string;
    sukuRoiHeading: string;
    sukuRoiParagraph: string;
    sukuRoiYieldLabel: string;
    sukuRoiYieldValue: string;
    sukuRoiOccupancyLabel: string;
    sukuRoiOccupancyValue: string;
    sukuRoiNote: string;
  };
  areasHubExtras: {
    statAreasLabel: string;
    statYieldLabel: string;
    statYearsLabel: string;
  };
  relatedAreasSection: {
    eyebrow: string;
    heading: string;
    viewLabel: string;
  };
  naraVillasPage: {
    heroName: string;
    heroTagline: string;
    heroSubtitle: string;
    heroImageAlt: string;
    heroSecondaryCtaLabel: string;
    heroStatusBadge: string;
    developmentEyebrow: string;
    developmentHeading: string;
    developmentParagraph1: string;
    developmentParagraph2: string;
    developmentParagraph3: string;
    locationLabel: string;
    locationValue: string;
    totalVillasLabel: string;
    totalVillasValue: string;
    statusLabel: string;
    statusValue: string;
    buildStatusLabel: string;
    buildStatusValue: string;
    glanceEyebrow: string;
    glanceDevelopmentLabel: string;
    glanceDevelopmentValue: string;
    glanceDeveloperLabel: string;
    glanceDeveloperValue: string;
    glanceLocationLabel: string;
    glanceLocationValue: string;
    glanceZoneLabel: string;
    glanceZoneValue: string;
    glanceTotalVillasLabel: string;
    glanceTotalVillasValue: string;
    glanceBuildStatusLabel: string;
    glanceBuildStatusValue: string;
    glanceStatusLabel: string;
    glanceStatusValue: string;
    longViewLabel: string;
    longViewText: string;
    longViewImageAlt: string;
    featuresEyebrow: string;
    featuresHeading: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    feature5Title: string;
    feature5Desc: string;
    attractionsEyebrow: string;
    attractionsHeading: string;
    exploreAreaLink: string;
    lakeKivuImageAlt: string;
    lakeKivuBadge: string;
    lakeKivuTitle: string;
    lakeKivuDesc: string;
    attraction1Name: string;
    attraction1Time: string;
    attraction1Desc: string;
    attraction2Name: string;
    attraction2Time: string;
    attraction2Desc: string;
    ctaEyebrow: string;
    ctaHeading: string;
    ctaParagraph: string;
    ctaEnquireLabel: string;
    ctaViewAllLabel: string;
  };
  solasUluwatuPage: {
    heroName: string;
    heroTagline: string;
    heroSubtitle: string;
    heroImageAlt: string;
    heroSecondaryCtaLabel: string;
    heroStatusBadge: string;
    developmentEyebrow: string;
    developmentHeading: string;
    developmentParagraph1: string;
    developmentParagraph2: string;
    developmentParagraph3: string;
    locationLabel: string;
    locationValue: string;
    bedroomsLabel: string;
    bedroomsValue: string;
    statusLabel: string;
    statusValue: string;
    buildStatusLabel: string;
    buildStatusValue: string;
    glanceEyebrow: string;
    glanceDevelopmentLabel: string;
    glanceDevelopmentValue: string;
    glanceDeveloperLabel: string;
    glanceDeveloperValue: string;
    glanceLocationLabel: string;
    glanceLocationValue: string;
    glanceZoneLabel: string;
    glanceZoneValue: string;
    glanceTotalVillasLabel: string;
    glanceTotalVillasValue: string;
    glanceBedroomsLabel: string;
    glanceBedroomsValue: string;
    glanceBuildAreaLabel: string;
    glanceBuildAreaValue: string;
    glanceBuildStatusLabel: string;
    glanceBuildStatusValue: string;
    glanceStatusLabel: string;
    glanceStatusValue: string;
    longViewLabel: string;
    longViewText: string;
    longViewImageAlt: string;
    featuresEyebrow: string;
    featuresHeading: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    attractionsEyebrow: string;
    attractionsHeading: string;
    exploreAreaLink: string;
    attraction1ImageAlt: string;
    attraction1Badge: string;
    attraction1Title: string;
    attraction1Desc: string;
    attraction2ImageAlt: string;
    attraction2Time: string;
    attraction2Title: string;
    attraction2Desc: string;
    ctaEyebrow: string;
    ctaHeading: string;
    ctaParagraph: string;
    ctaEnquireLabel: string;
    ctaViewAllLabel: string;
  };
  sukuResidencesPage: {
    heroName: string;
    heroTagline: string;
    heroSubtitle: string;
    heroImageAlt: string;
    heroStatusBadge: string;
    developmentEyebrow: string;
    developmentHeading: string;
    developmentParagraph1: string;
    developmentParagraph2: string;
    developmentParagraph3: string;
    locationLabel: string;
    locationValue: string;
    bedroomsLabel: string;
    bedroomsValue: string;
    statusLabel: string;
    statusValue: string;
    tenureLabel: string;
    tenureValue: string;
    glanceEyebrow: string;
    glanceDevelopmentLabel: string;
    glanceDevelopmentValue: string;
    glanceDeveloperLabel: string;
    glanceDeveloperValue: string;
    glanceLocationLabel: string;
    glanceLocationValue: string;
    glanceZoneLabel: string;
    glanceZoneValue: string;
    glanceTotalVillasLabel: string;
    glanceTotalVillasValue: string;
    glanceBedroomsLabel: string;
    glanceBedroomsValue: string;
    glanceBuildAreaLabel: string;
    glanceBuildAreaValue: string;
    glanceLandAreaLabel: string;
    glanceLandAreaValue: string;
    glanceStatusLabel: string;
    glanceStatusValue: string;
    glanceTenureLabel: string;
    glanceTenureValue: string;
    villaTypesEyebrow: string;
    villaTypesHeading: string;
    bedCardStatusLabel: string;
    bed1Label: string;
    bed1Build: string;
    bed1Land: string;
    bed2Label: string;
    bed2Build: string;
    bed2Land: string;
    bed3Label: string;
    bed3Build: string;
    bed3Land: string;
    featuresEyebrow: string;
    featuresHeading: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    feature5Title: string;
    feature5Desc: string;
    feature6Title: string;
    feature6Desc: string;
    ctaEyebrow: string;
    ctaHeading: string;
    ctaParagraph: string;
    ctaEnquireLabel: string;
    ctaViewAllLabel: string;
  };
  zoneMattersSection: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
  };
}

export const translations: Record<Language, TranslationShape> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      developments: "Developments",
      services: "Services",
      realEstate: "Real Estate",
      portfolio: "Portfolio",
      areas: "Areas",
      blog: "Blog",
      contact: "Contact",
      languageLabel: "Language",
      currencyLabel: "Show Prices In",
      whatsappUs: "WhatsApp Us",
      developmentsMenu: {
        bp: "B&P Ever Retreat Villa",
        virunga: "Virunga Villas",
        cottage: "Cottage",
        kigaliRetreat: "Kigali Retreat",
        nyungweRetreat: "Nyungwe Retreat",
        huyeVillas: "Huye Villas",
        nyanzaVillas: "Nyanza Villas",
        akageraRetreat: "Akagera Retreat",
        viewAll: "View All Developments",
      },
      servicesMenu: {
        architecture: "Architecture & Design",
        construction: "Construction",
        villaManagement: "Villa Management",
        landSourcing: "Land Sourcing",
        developmentPartnerships: "Development Partnerships",
        developerGuide: "Choosing a Developer",
        howToBuy: "How to Buy",
      },
    },
    hero: {
      label: "Rwanda-Based Property Developer",
      headlineBold: "Rwanda Eco-Retreats",
      headlineLight: "Built by Ever Retreat",
      subtext: "Luxury eco-retreats across Rubavu, Musanze, Kigali, and Nyungwe, with full rental management. From",
      ctaPrimary: "Explore Developments",
      ctaSecondary: "Enquire Now",
    },
    trustBar: {
      title: "Rwanda-Based Property Developer",
      subtitle: "Architecture, construction, villa management, and property investment — all under one roof.",
      stat1Label: "Showcase Villas Completed",
      stat2Label: "Developments Across Rwanda",
    },
    heroCommon: {
      enquireNow: "Enquire Now",
      learnMore: "Learn More",
      viewVillaTypes: "View Villa Types",
      salesNowOpen: "Sales Now Open",
      facadeLabel: "Facade",
      bothLabel: "Both",
      terracottaLabel: "Terracotta",
      greyLabel: "Grey",
      chatOnWhatsApp: "Chat on WhatsApp",
    },
    statsBarSection: {
      villasBuiltLabel: "Villas Built",
      teamMembersLabel: "Team Members",
      yearsBuildingLabel: "Years Building in Rwanda",
      avgOccupancyLabel: "Avg Occupancy",
    },
    whyEverRetreatSection: {
      eyebrow: "Why Ever Retreat",
      heading: "Why Choose Ever Retreat Over Other Rwanda Developers?",
      headingLight: "Investors Deserve",
      headingBold: "A Higher Standard",
      paragraph:
        "Rwanda has no shortage of builders offering low prices. But underqualified operators, permit issues, and abandoned projects are common. We exist because investors deserve better.",
      talkToUs: "Talk to Us",
      seeCaseStudy: "See Case Study",
      reason1Title: "Ethically-Owned & Managed",
      reason1Desc: "Western project management, transparent pricing, full accountability.",
      reason2Title: "120 Completed Projects",
      reason2Desc: "10+ years building across Rwanda. Visible, verifiable track record.",
      reason3Title: "Eco-Conscious Architecture",
      reason3Desc: "Sustainable design principles applied to every villa, built for Rwanda's climate and landscape.",
      reason4Title: "In-House Legal Team",
      reason4Desc: "Permits, land titles, zoning, and foreign ownership handled in-house.",
      reason5Title: "82 In-House Professionals",
      reason5Desc: "Architects, engineers, project managers, designers - all under one roof.",
      reason6Title: "End-to-End Under One Roof",
      reason6Desc: "Land to rental income. One company, one point of contact.",
      reason7Title: "Fixed-Price Contracts",
      reason7Desc: "No surprise costs. Payments tied to real construction milestones.",
      reason8Title: "Physical Offices in Rwanda",
      reason8Desc: "Offices in Kigali. Walk in and meet the team.",
    },
    buildCalculatorSection: {
      eyebrow: "Free Calculator",
      heading: "Calculate Your Build Cost",
      paragraph: "Input your villa size and preferred finish level to get an instant estimate of construction costs in Rwanda.",
      villaSizeLabel: "Villa Size (sqm)",
      sqmSuffix: "sqm",
      finishLevelLabel: "Finish Level",
      standardLabel: "Standard",
      premiumLabel: "Premium",
      luxuryLabel: "Luxury",
      bedroomsLabel: "Number of Bedrooms",
      bedroomOption2: "2 Bedrooms",
      bedroomOption3: "3 Bedrooms",
      bedroomOption4: "4 Bedrooms",
      bedroomOption5Plus: "5+ Bedrooms",
      calculateButton: "Calculate Estimate",
      resultsHeading: "Your Estimated Costs",
      baseConstructionLabel: "Base Construction",
      landCostLabel: "Land Cost",
      permitsLabel: "Permits & Design",
      totalLabel: "Total Estimated Cost",
      rentalReturnsHeading: "Projected Rental Returns",
      annualYieldLabel: "Annual Rental Yield",
      roiTimelineLabel: "ROI Timeline (cost recovery)",
      dailyRateLabel: "Daily Rate (est.)",
      perYearSuffix: "/year",
      perNightSuffix: "/night",
      yearsSuffix: "years",
      disclaimerText: "Projections based on historical data. Actual results may vary. Consult our team for a detailed feasibility study.",
    },
    servicesSubNavOverview: "Overview",
    footer: {
      tagline: "Ever retreat company in Rwanda. Architecture, construction, villa management all under one roof.",
      hours: "Mon-Fri 8am-5pm CAT",
      companyHeading: "Company",
      servicesHeading: "Services",
      investHeading: "Invest",
      company: {
        about: "About",
        howWeWork: "How We Work",
        portfolio: "Portfolio",
        villaTours: "Villa Tours",
        testimonials: "Testimonials",
        blog: "Blog",
        caseStudy: "Case Study",
        clientForms: "Client Forms",
        payDeposit: "Pay Villa Deposit",
        referFriend: "Refer a Friend",
        contact: "Contact",
      },
      services: {
        architecture: "Architecture & Design",
        construction: "Construction",
        villaManagement: "Villa Management",
        landSourcing: "Land Sourcing",
        developmentPartnerships: "Development Partnerships",
        choosingDeveloper: "Choosing a Developer",
        villaPackages: "Villa Packages",
        buildCalculator: "Build Calculator",
      },
      invest: {
        developments: "Developments",
        areaGuides: "Area Guides",
        investInRwanda: "Invest in Rwanda",
        howToBuy: "How to Buy Property in Rwanda",
        fractionalOwnership: "Fractional Ownership",
        landZoning: "Land Zoning Guide",
        faq: "FAQ",
      },
      rwandaHq: "Rwanda HQ",
      everRetreatOffice: "Ever retreat Office",
      ourLocation: "Our Location",
      copyright: "© 2026 Ever Retreat. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      licensed: "Fully Licensed",
    },
    about: {
      badge: "About Ever Retreat",
      headingLine1: "Rwanda-Based",
      headingLine2: "Property Developer",
      paragraph:
        "Ever Retreat is an Rwandan-owned, Rwanda-based property company. 120 projects completed. 82 in-house professionals. Architecture, construction, villa management, and real estate - everything under one roof. The most complete property proposition in East Africa.",
      stat1Label: "Projects Built",
      stat2Label: "Team Members",
      stat3Label: "Years in Rwanda",
      ctaAbout: "About Us",
      ctaContact: "Talk to Us",
    },
    featuredIn: {
      title: "Our Partners",
      subtitle: "Trusted by leading organizations across Africa",
    },
    heroSlideshow: {
      label: "Featured Developments",
      explorePrefix: "Explore",
    },
    developmentsSection: {
      sectionLabel: "Current Developments",
      heading: "Invest in Our Latest Projects",
      headingLight: "Invest in Our",
      headingBold: "Latest Projects",
      viewAll: "View All Developments",
      explorePrefix: "Explore",
      items: {
        "nara-villas": {
          description: "Our completed showcase villa in Rubavu with a private pool, designed to demonstrate our design and construction standard.",
          features: ["Rubavu", "Showcase Villa", "Private Pool"],
        },
        "suku-residences": {
          description: "A boutique community of wellness villas in Musanze, blending modern design with mountain living.",
          features: ["Wellness Villas", "Musanze Location", "Mountain Views"],
        },
        "solas-uluwatu": {
          description: "Our completed showcase villa in Rubavu with panoramic lake views.",
          features: ["Lake View", "Showcase Villa", "Rubavu"],
        },
        "nyungwe-retreat": {
          description: "A new off-plan, income-generating villa development in Nyungwe, currently in design - full ownership, built for short-term rental income, not just residential living.",
          features: ["Nyungwe", "Off-Plan"],
        },
        "huye-villas": {
          description: "A new off-plan, income-generating villa development in Huye, currently in design - full ownership, built for short-term rental income, not just residential living.",
          features: ["Huye", "Off-Plan"],
        },
        "nyanza-villas": {
          description: "A new off-plan, income-generating villa development in Nyanza, currently in design - full ownership, built for short-term rental income, not just residential living.",
          features: ["Nyanza", "Off-Plan"],
        },
        "akagera-retreat": {
          description: "A new off-plan, income-generating villa development in Akagera, currently in design - full ownership, built for short-term rental income, not just residential living.",
          features: ["Akagera", "Off-Plan"],
        },
        "kigali-retreat": {
          description: "A new income-generating villa development in Kigali, currently in design — full ownership, built for rental revenue, not just residential living.",
          features: ["Kigali", "Income-Generating"],
        },
      },
      badges: {
        prototype: "Prototype",
        comingSoon: "Off-Plan",
      },
      notForSale: "Not For Sale",
      propertyType: "Residential Villa",
    },
    ctaSections: {
      getPrices: {
        eyebrow: "See a villa you like?",
        heading: "Get prices and availability",
        headingLight: "Get prices and",
        headingBold: "availability",
        paragraph:
          "Tell us your budget and timeline. We send back the developments that fit, with current pricing, what is still available, and honest yield figures. No sales pressure.",
      },
      bringToLife: {
        eyebrow: "Design and build",
        heading: "Let's bring your villa to life",
        enquire: "Enquire",
        chatWhatsapp: "Chat on WhatsApp",
      },
      investInRwanda: {
        eyebrow: "Invest in Rwanda",
        heading: "Ready to invest in Rwanda?",
        enquire: "Enquire",
      },
    },
    forms: {
      fullName: "Full Name",
      emailAddress: "Email Address",
      whatsappNumber: "WhatsApp number",
      tellUsMore: "Tell us more",
      sendEnquiry: "Send Enquiry",
      sending: "Sending...",
      successTitle: "Thanks — almost done!",
      successBody: "We've opened WhatsApp with your message ready to send. Just hit send there to reach our team.",
      errorRequired: "This field is required.",
      errorEmail: "Enter a valid email address.",
      errorPhone: "Enter a valid phone number.",
      yourName: "Your Name",
      yourEmail: "Your Email",
      yourPhone: "Your WhatsApp Number",
      friendsName: "Friend's Name",
      friendsEmail: "Friend's Email",
      friendsWhatsapp: "Friend's WhatsApp",
      messageOptional: "Message (optional)",
      submitReferral: "Submit Referral",
      interestedIn: "I'm Interested In",
      interestedInOptions: {
        villaBuild: "Building a villa in Rwanda",
        landSourcing: "Land sourcing",
        villaInvestment: "Villa investment",
        villaManagement: "Villa management",
        general: "General enquiry",
      },
      message: "Message",
      sendMessage: "Send Message",
      searchCountry: "Search country",
      errorVerification: "Please complete the verification check.",
      verifying: "Verifying...",
    },
    services: {
      eyebrow: "What We Do",
      heading: "End-to-End Property Services",
      headingLight: "End-to-End",
      headingBold: "Property Services",
      paragraph:
        "From finding land to managing your completed villa, our 82-strong in-house team handles every stage of the property lifecycle. No middlemen, no handoffs.",
      pricePrefix: "From",
      items: {
        architecture: {
          title: "Architecture & Design",
          priceSuffix: "· 50% off with build",
          description:
            "In-house architecture team. 120 tropical modern villas designed for the Rwandan climate. Custom architecture built for rental performance and climate compliance.",
        },
        construction: {
          title: "Construction",
          priceSuffix: "/sqm",
          description:
            "End-to-end build management with an 82-strong in-house team. Fixed-price contracts from foundation to handover.",
        },
        villaManagement: {
          title: "Villa Management",
          price: "From 20% per booking",
          description:
            "Hands-off rental income. Listing, guest management, dynamic pricing, and maintenance - all handled.",
        },
        landSourcing: {
          title: "Land Sourcing",
          price: "Freehold & Leasehold",
          description:
            "We source and evaluate land across Rwanda's prime investment zones. Legal due diligence, zoning checks, and negotiation - all before you commit.",
        },
      },
      partnershipsEyebrow: "For Landowners & Investors",
      partnershipsTitle: "Development Partnerships",
      partnershipsDescription:
        "Already own land or looking to develop? We partner with landowners and investors to design, build, sell, and manage full villa developments.",
      learnMore: "Learn More",
      packagesTitle: "Villa Packages",
      packagesDescriptionPrefix: "Browse our popular villa packages from",
      viewPackages: "View Villa Packages",
      fixedPriceQuestion: "Looking for a fixed-price option?",
    },
    whyRwanda: {
      eyebrow: "Why Rwanda",
      heading: "Rwanda's Premier Property Investment Destination",
      paragraph:
        "Rwanda is one of Africa's strongest emerging property investment markets. Consistent tourism growth, limited developable land in prime areas, and high rental yields make Rwanda one of the best property investment destinations in the world.",
      stats: [
        { value: "#1", label: "Investment Market in Rwanda" },
        { value: "1.5M+", label: "Annual Visitors" },
        { value: "15-20%", label: "Rental Yield" },
        { value: "7-15%", label: "Annual Appreciation" },
        { value: "85%+", label: "Avg. Occupancy Rate" },
      ],
      cta: "Read our Rwanda property investment guide",
    },
    portfolioSection: {
      eyebrow: "Our Portfolio",
      heading: "Designed for Living. Built for Investment.",
      paragraph:
        "Explore selected villas, architectural concepts, and development projects that showcase our approach to modern design, quality construction, and investment-focused property development in Rwanda.",
      items: {
        bp: {
          title: "B&P Ever Retreat Villa",
          description: "Luxury villa architecture inspired by the landscape and lifestyle of Lake Kivu.",
          cta: "Explore project",
        },
        virunga: {
          title: "Virunga Villas",
          description: "Contemporary villas designed for comfort, privacy, and long-term investment value.",
          cta: "Explore project",
        },
        everRetreat: {
          title: "Ever Retreat",
          description: "A hospitality destination combining architecture, nature, and the unique experience of Lake Kivu.",
          cta: "Discover Ever Retreat",
        },
        everDesign: {
          title: "Ever Design",
          description: "Architecture and construction solutions for clients looking to create their own property in Rwanda.",
          cta: "Start your project",
        },
      },
    },
    investmentMarket: {
      eyebrow: "Why Rwanda",
      heading: "A Proven Investment Market",
      paragraph:
        "Rwanda property investment means buying or building villas in Rwanda for rental income and capital growth. With consistent 15-20% gross rental yields, high occupancy rates, and strong capital appreciation, our 82-strong in-house team handles everything from land sourcing to rental income.",
      stat1: "Gross Yield",
      stat2: "Team Members",
      stat3: "Management",
      cta: "Learn About Investing in Rwanda",
      sideStat1Label: "Gross Rental Yield",
      sideStat2Label: "Avg Occupancy",
      sideStat3Label: "Projects Built",
      sideStat4Label: "Years in Rwanda",
    },
    socialFollowing: {
      joinLine: "Follow our journey",
    },
    howItWorks: {
      eyebrow: "How It Works",
      heading: "How Does Investing In An Ever Retreat Villa Work?",
      paragraph:
        "From first enquiry to rental income in four straightforward steps. No hidden stages, no complexity.",
      steps: [
        {
          timeline: "WEEK 1",
          title: "Pick Your Development",
          description: "Browse our developments and find the one that fits your goals and budget.",
        },
        {
          timeline: "WEEK 2-4",
          title: "Reserve With {price}",
          description: "A {price} deposit holds your villa. The rest comes in stages tied to construction.",
        },
        {
          timeline: "MONTH 3-18",
          title: "Pay As It's Built",
          description: "Four payments tied to real construction milestones. No surprises.",
        },
        {
          timeline: "MONTH 18+",
          title: "Start Earning",
          description: "Villa goes under management and starts generating rental income.",
        },
      ],
      ctaPrimary: "Start Your Journey",
      ctaSecondary: "See Full Process",
    },
    calculator: {
      eyebrow: "Free Tool",
      heading: "What Will Your Villa Cost?",
      paragraph:
        "Use our build calculator to estimate construction costs, land prices, and projected returns for your Rwanda villa project.",
      cta: "Try the Calculator",
    },
    freeGuide: {
      eyebrow: "Free 2026 Edition",
      heading: "The Ever Retreat Guide to Investing in Rwanda",
      paragraph:
        "Eighty pages of what we wish every investor knew before they bought. Legal structures, area-by-area yield data, build costs, tax treatment, and the real risks. Updated for 2026.",
      points: [
        "How foreigners can legally own property in Rwanda",
        "Yield ranges for every key area, with 2026 land prices",
        "What an all-in 2-bedroom build actually costs",
        "The tax obligations most agents skip past",
      ],
      sendGuide: "Send Me the Guide",
    },
    areasSection: {
      eyebrow: "Explore Rwanda",
      heading: "Where to Invest",
      headingLight: "Where to",
      headingBold: "Invest",
      paragraph:
        "Each area of Rwanda has its own character, price point, and investment profile. Here is where our clients are building villas.",
      viewAll: "View All Areas",
      items: {
        kigali: { description: "Capital city with the highest land values and consistent rental demand from expats and business travelers." },
        musanze: { description: "Volcanoes region — gorilla trekking, luxury lodges, and mountain retreats with strong tourism demand." },
        rubavu: { description: "Lake Kivu waterfront — premium holiday rentals and luxury lakeside villas with high nightly rates." },
        nyungwe: { description: "Forest edge — eco-tourism accommodation and sustainable lodge investments with growing demand." },
        huye: { description: "Southern province cultural hub — university town near Nyungwe and Lake Kivu with affordable land." },
        nyanza: { description: "Former capital city near Lake Kivu and Nyungwe — historical hub with growing tourism and affordable entry." },
        evane: { description: "Northern highlands hill station between Kigali and Musanze — scenic landscapes at accessible prices." },
        akagera: { description: "National park proximity — safari lodges and exclusive eco-retreats with luxury pricing." },
      },
    },
    portfolioGallery: {
      eyebrow: "Our Work",
      heading: "120 Projects Built. Still Counting.",
      paragraph: "Ten years building across Rwanda - from Rubavu to Musanze, Kigali to Huye.",
      viewFull: "View Full Portfolio",
      filterAllLabel: "All",
      categoryExteriors: "Exteriors",
      categoryInteriors: "Interiors",
      categoryAmenities: "Amenities",
      showingCount: "Showing {shown} of {total}",
    },
    testimonials: {
      quotes: [
        {
          quote:
            "They made the process extremely easy and take care of absolutely everything. We loved the weekly updates with photos during construction. Seeing those renders come to life was awesome. Highly recommend Ever Retreat and their management team to work with.",
          author: "Virginia B.",
        },
        {
          quote:
            "Investing abroad may be scary but the Ever Retreat team has made this very easy and safe, making me feel comfortable that my money is secured. The team has been very supportive and understanding since day 1.",
          author: "Joseph D.",
        },
        {
          quote:
            "The process was smooth on every stage. The whole team is professional and responsive, everyone we interacted with was so nice. The result is better than we could imagine. Special thanks to the team for the best communication.",
          author: "Dmitry D.",
        },
      ],
      readAll: "Read All Reviews",
    },
    team: {
      eyebrow: "Our Team",
      heading: "The People Behind the Build",
      headingLight: "The People",
      headingBold: "Behind the Build",
      paragraph:
        "A hands-on team of 82 architects, engineers, project managers, legal advisors, and property managers based in Rwanda. You deal directly with the people doing the work.",
      meetTeam: "Meet the Full Team",
      otherPeople: "Part of Ever Retreat's 82-person team",
      roles: {
        ceo: "CEO",
        architectureManager: "Architecture Manager",
        hospitalityManager: "Hospitality Manager",
        accountant: "Accountant",
        operationsManager: "Operations Manager",
        siteEngineer: "Site Engineer",
        it: "IT",
        procurementOfficer: "Procurement Officer",
      },
      roleDescriptions: {
        ceo: "Leads Ever Retreat's overall strategy, operations, and client relationships.",
        architectureManager: "Leads architectural design and planning across all Ever Retreat developments.",
        hospitalityManager: "Oversees villa management, guest experience, and rental operations.",
        accountant: "Manages company finances, budgeting, and financial reporting.",
        operationsManager: "Coordinates daily operations across departments and active projects.",
        siteEngineer: "Supervises on-site construction, quality control, and safety.",
        it: "Maintains the company's technology systems and digital infrastructure.",
        procurementOfficer: "Sources materials and manages supplier relationships and procurement logistics.",
      },
    },
    faqSection: {
      eyebrow: "Common Questions",
      heading: "Investing in Rwanda Real Estate",
      headingLight: "Investing in",
      headingBold: "Rwanda Real Estate",
      paragraph: "New to Rwanda real estate? These are the questions our clients ask most. Our team is always available to walk you through the details.",
      viewAll: "View All FAQs",
      items: [
        {
          question: "Can foreigners buy property in Rwanda?",
          answer:
            "Foreigners cannot hold freehold land title in Rwanda under personal name. However, foreigners can legally secure land in Rwanda through leasehold agreements (up to 99-year leases) or via company structures. Our in-house legal team ensures every acquisition is fully compliant with Rwanda's land laws.",
        },
        {
          question: "What is the difference between freehold and leasehold?",
          answer:
            "In Rwanda, foreigners cannot own freehold land under personal name. However, foreigners can legally secure land in Rwanda through leasehold agreements (up to 99-year leases) or via company structures. The leasehold route is the standard option for foreign buyers, with extension options available through the Rwanda Land Management and Use Authority (RMLA).",
        },
        {
          question: "What ROI can I expect from a Rwanda villa?",
          answer:
            "Ever Retreat-managed villas typically achieve 15-20% gross rental yield annually, depending on location, villa size, and occupancy. Returns vary by area and management quality.",
        },
        {
          question: "How long does it take to build a villa in Rwanda?",
          answer:
            "Most villa builds take 12 to 18 months from design approval to handover. All our builds use concrete structures which require proper curing time at each stage.",
        },
        {
          question: "How does the deposit and payment process work?",
          answer:
            "A deposit secures your reservation. The remaining balance is paid in stages tied to real construction milestones, not fixed calendar dates, so you only pay as work is actually completed.",
        },
        {
          question: "Does Ever Retreat manage the property after handover?",
          answer:
            "Yes. Villa management is optional but available on every development, from 20% per booking. It covers listing, guest management, dynamic pricing, and maintenance, so ownership can be hands-off.",
        },
        {
          question: "Which areas in Rwanda does Ever Retreat build in?",
          answer:
            "Our developments and land sourcing currently cover Kigali, Musanze, Rubavu, Nyungwe, Huye, and Nyanza. Each area is evaluated for tourism demand, access, and long-term land value before we commit to a project there.",
        },
        {
          question: "What if I already own land in Rwanda?",
          answer:
            "We offer development partnerships for landowners: our team designs, builds, and can manage a villa development on land you already own, under the same fixed-price, in-house model we use for our own projects.",
        },
        {
          question: "What currency are prices shown in?",
          answer:
            "Prices across our site are listed in USD by default, with a live toggle to view them in Rwandan Francs (RWF). Contracts and final invoices are issued in the currency agreed with your account manager.",
        },
      ],
    },
    blogSection: {
      eyebrow: "From the Blog",
      heading: "Latest Insights",
      headingLight: "Latest",
      headingBold: "Insights",
      readMore: "Read More",
      viewAll: "View All Posts",
      posts: [
        {
          title: "How Much Rental Income Does a Rwanda Villa Actually Earn?",
          excerpt:
            "Nightly rates, occupancy data, and net yield breakdowns by area, and what's included in full rental management.",
        },
        {
          title: "Best Area to Invest in Rwanda (2026)",
          excerpt:
            "Comparing Rubavu, Musanze, Kigali, Nyungwe, and Huye. Real yield data and land prices from a team that builds across all five areas.",
        },
        {
          title: "Can Foreigners Buy Property in Rwanda?",
          excerpt:
            "Yes, through leasehold or company structures. Complete guide to legal ownership structures, costs, common mistakes, and a step-by-step buying process.",
        },
        {
          title: "Lake Kivu vs Musanze Investment Comparison",
          excerpt:
            "Comparing land prices, yields, and lifestyle factors between Rwanda's two premier villa investment destinations.",
        },
        {
          title: "What Does It Cost to Build a Villa in Rwanda?",
          excerpt: "Real construction costs from $1,000 per sqm, plus land price ranges by area and total project budgets.",
        },
        {
          title: "How to Build a Villa in Rwanda",
          excerpt: "The full process from land sourcing and permits to construction, handover, and rental setup.",
        },
      ],
    },
    blogCategories: {
      investment: "Investment",
      location: "Location",
      legal: "Legal",
      building: "Building",
    },
    newsletter: {
      eyebrow: "Stay Ahead of the Market",
      heading: "Get Exclusive Investment Insights",
      headingLight: "Get Exclusive",
      headingBold: "Investment Insights",
      paragraph: "Market reports, new development launches, and ROI data. Delivered monthly to serious investors. No fluff.",
      placeholder: "Your email address",
      cta: "Send Me the Reports",
    },
    finalCta: {
      eyebrow: "Free Consultation",
      heading: "Ready to Build in Rwanda?",
      paragraph:
        "Whether you have a plot or are still exploring options, our team gives you straight answers. No obligation, no pressure - just real advice from people who have done this 120 times.",
      benefits: [
        "Honest advice on locations, budgets, and returns",
        "Clear answers on foreign ownership and legal structures",
        "No sales pressure - we answer questions, you decide",
        "Respond within 24 hours, Mon-Fri 8am-5pm CAT",
      ],
    },
    realEstatePage: {
      hero: {
        eyebrow: "Real Estate",
        headlineLight: "Ever Retreat",
        headlineBold: "Properties",
        subtext:
          "From completed showcase villas to developments in design, across Rwanda's most desirable areas.",
        stat1Label: "Showcase Villas Completed",
        stat2Label: "Developments Across Rwanda",
        stat3Label: "Regions Covered",
        stat4Value: "Full",
        stat4Label: "End-To-End Service",
      },
      about: {
        eyebrow: "About Our Real Estate",
        headingLight: "Built On Trust,",
        headingBold: "Backed By Experience",
        paragraphs: [
          "Ever Retreat is a Rwandan-owned, Rwanda-based property company. Architecture, construction, villa management, and real estate — everything under one roof.",
          "We handle every stage of the property lifecycle in-house, so you deal directly with the people doing the work, not a chain of subcontractors and middlemen.",
          "Our current developments range from completed showcase villas in Rubavu to new projects in design across Rwanda's most desirable areas.",
          "Whether you're buying a finished villa, reserving a unit off-plan, or developing land you already own, one team sees it through from first design sketch to first guest booking.",
        ],
        statLegalTeam: "In-House",
        statLegalTeamLabel: "Legal Team",
        statFixedPrice: "Fixed-Price",
        statFixedPriceLabel: "Contracts",
        statRwanda: "Rwanda",
        statRwandaLabel: "Based & Owned",
        statEndToEnd: "End-to-End",
        statEndToEndLabel: "Delivery",
        cta: "View All Developments",
      },
      advantage: {
        eyebrow: "Why Buy With Ever Retreat",
        headingLight: "The Ever Retreat",
        headingBold: "Advantage",
        intro:
          "Rwanda real estate rewards buyers who work with a team that handles legal, design, construction, and management under one roof — not a patchwork of subcontractors.",
        highlights: [
          {
            number: "01",
            title: "In-House Legal Team",
            description: "Permits, land titles, zoning, and foreign ownership handled in-house.",
          },
          {
            number: "02",
            title: "Fixed-Price Contracts",
            description: "No surprise costs. Payments tied to real construction milestones.",
          },
          {
            number: "03",
            title: "End-to-End Under One Roof",
            description: "Land to rental income. One company, one point of contact.",
          },
        ],
        buyingProcessTitle: "The Buying Process",
        buyingSteps: [
          { label: "Property search", text: "We find properties matching your criteria, budget, and investment goals." },
          { label: "Legal due diligence", text: "Title verification, zoning compliance, and permit checks." },
          { label: "Negotiation", text: "Price negotiation and terms agreement." },
          { label: "Reservation deposit", text: "A deposit secures the unit while contracts and structures are finalized." },
          { label: "Purchase & transfer", text: "Notary coordination and deed or leasehold transfer." },
          { label: "Rental setup", text: "Property listing, furnishing, and ongoing management (optional)." },
        ],
        freeholdTitle: "Freehold vs Leasehold",
        freeholdParagraphs: [
          "In Rwanda, foreigners cannot own freehold land under personal name. However, foreigners can legally secure land through leasehold agreements (up to 99-year leases) or via company structures.",
          "The leasehold route is the standard option for foreign buyers, with extension options available through the Rwanda Land Management and Use Authority (RMLA).",
          "A company structure is the alternative path, and is often used by investors buying more than one unit or planning to hold property for the long term.",
          "Our in-house legal team handles both routes, so you don't need to hire outside counsel to verify title or negotiate lease terms.",
          "Whichever structure fits your situation, every acquisition is checked against Rwanda's current land laws before contracts are signed.",
        ],
        ctaEnquire: "Enquire Now",
        ctaViewAll: "View All Developments",
      },
      services: {
        eyebrow: "Full-Service Support",
        heading: "Everything Under One Roof",
        items: [
          {
            number: "01",
            title: "Architecture & Design",
            price: "From $7K",
            description: "In-house architecture team designing tropical modern villas for the Rwandan climate.",
            href: "/services/architecture",
          },
          {
            number: "02",
            title: "Construction",
            price: "From $1,000/sqm",
            description: "End-to-end build management, fixed-price from foundation to handover.",
            href: "/services/construction",
          },
          {
            number: "03",
            title: "Villa Management",
            price: "From 20% per booking",
            description:
              "Hands-off rental income — listing, guest management, dynamic pricing, and maintenance, all handled.",
            href: "/services/villa-management",
          },
        ],
        learnMore: "Learn More",
      },
      featured: {
        eyebrow: "Current Developments",
        heading: "Explore Our Developments",
        paragraph:
          "From completed showcase villas to developments still in design — here is a selection of what Ever Retreat is building across Rwanda.",
        viewDetails: "View Details",
        viewAll: "View All 8 Developments",
      },
      routes: {
        eyebrow: "More Than One Way In",
        headingLight: "Other Ways To",
        headingBold: "Invest With Us",
        items: [
          {
            title: "Buy A Completed Villa",
            description: "Walk through a finished, furnished prototype before you commit to your own build.",
            stat1Label: "Type",
            stat1Value: "Prototype",
            stat2Label: "Status",
            stat2Value: "Viewable Now",
          },
          {
            title: "Reserve A Development In Design",
            description: "Secure a unit early in one of our upcoming developments before ground is broken.",
            stat1Label: "Type",
            stat1Value: "Off-Plan",
            stat2Label: "Status",
            stat2Value: "Coming Soon",
          },
          {
            title: "Fractional Ownership",
            description: "Own a share of a villa's rental income without funding the full build cost yourself.",
            stat1Label: "Type",
            stat1Value: "Shared Equity",
            stat2Label: "Status",
            stat2Value: "Open",
          },
          {
            title: "Source Land First",
            description: "Already have a location in mind? We evaluate and secure land before you design.",
            stat1Label: "Type",
            stat1Value: "Land Only",
            stat2Label: "Status",
            stat2Value: "Ongoing",
          },
          {
            title: "Develop Land You Already Own",
            description: "Partner with us to design, build, sell, and manage a full villa development on your land.",
            stat1Label: "Type",
            stat1Value: "Partnership",
            stat2Label: "Status",
            stat2Value: "Ongoing",
          },
          {
            title: "Villa Management Only",
            description: "Already own a villa in Rwanda? We can take over rental management without a build contract.",
            stat1Label: "Type",
            stat1Value: "Management",
            stat2Label: "Status",
            stat2Value: "Ongoing",
          },
        ],
        learnMore: "Learn More",
        note: "Not sure which route fits? Talk to us and we'll point you the right way.",
      },
      whyChoose: {
        eyebrow: "Why Choose Us",
        heading: "Why Choose Ever Retreat",
        items: [
          {
            title: "Ethically-Owned & Managed",
            description: "Western project management, transparent pricing, full accountability.",
          },
          {
            title: "Eco-Conscious Architecture",
            description:
              "Sustainable design principles applied to every villa, built for Rwanda's climate and landscape.",
          },
          {
            title: "In-House Legal Team",
            description: "Permits, land titles, zoning, and foreign ownership handled in-house.",
          },
          {
            title: "End-to-End Under One Roof",
            description: "Land to rental income. One company, one point of contact.",
          },
          {
            title: "Fixed-Price Contracts",
            description: "No surprise costs. Payments tied to real construction milestones.",
          },
          {
            title: "Physical Offices In Rwanda",
            description: "Offices in Kigali. Walk in and meet the team.",
          },
        ],
        talkToUs: "Talk To Us",
        seeCaseStudy: "See Case Study",
        viewDevelopments: "View Developments",
      },
      faq: {
        headingLight: "Real Estate",
        headingBold: "Questions",
        stillHaveQuestionsTitle: "Still Have Questions?",
        stillHaveQuestionsText:
          "Our team can walk you through pricing, legal structures, and timelines directly.",
        contactUs: "Contact Us",
        viewAllFaqs: "view all FAQs",
      },
      areas: {
        headingLight: "Explore By",
        headingBold: "Area",
        explorePrefix: "Explore",
      },
      finalCta: {
        eyebrow: "Ready When You Are",
        headingLight: "Let's Find Your",
        headingBold: "Rwanda Property",
        paragraph:
          "Whether you're buying a completed villa, reserving one off-plan, or developing land you already own, our team can walk you through the options in a single call.",
        enquireNow: "Enquire Now",
        viewDevelopments: "View Developments",
        quickLinksLabel: "Quick Links",
        linkServices: "Services",
        linkPortfolio: "Portfolio",
        linkAreas: "Areas",
        linkAbout: "About Us",
        statShowcaseLabel: "Showcase Villas Completed",
        statDevelopmentsLabel: "Developments Across Rwanda",
        statRegionsLabel: "Regions We Build In",
      },
    },
    servicesPage: {
      trustBar: {
        stat1Value: "82",
        stat1Label: "In-House Team",
        stat2Value: "120",
        stat2Label: "Projects Delivered",
        stat3Value: "8",
        stat3Label: "Developments Across Rwanda",
        stat4Value: "2",
        stat4Label: "Showcase Villas Completed",
      },
      servicesEyebrow: "What We Do",
      servicesHeadingLight: "Everything Under",
      servicesHeadingBold: "One Roof",
      serviceItems: {
        architecture: {
          tagline: "Tropical Modern, Built For Rwanda",
          description1:
            "Our in-house architecture team has designed 120 eco-lodges and villas across Rwanda. Every plan balances modern aesthetics with Rwanda's highland climate, seasonal rainfall patterns, and local building traditions.",
          description2:
            "We design for rental performance as much as beauty — kitchens positioned for service access, bedrooms facing away from road noise, and a dedicated staff and laundry area in every villa.",
          feature1: "5-stage design process, from site analysis to construction documents",
          feature2: "50% off design fees when you build with us",
          feature3: "3D renders and virtual walkthroughs before you commit",
          cta: "Explore Architecture & Design",
        },
        construction: {
          tagline: "Built For Rwanda's Terrain & Climate",
          description1:
            "Constructing villas in Rwanda requires understanding laterite soil, seasonal rainfall, and seismic considerations. Our 82-strong in-house team uses reinforced concrete structures with laterite-adapted foundations and climate-responsive design.",
          description2:
            "From B&P Ever Retreat Villa at Lake Kivu to Virunga Villas near the volcanoes, every project is managed by certified engineers with local expertise, on fixed-price contracts from foundation to handover.",
          feature1: "Certified materials meeting Rwandan building standards",
          feature2: "6-9 month average build timeline",
          feature3: "Fixed-price contracts, no surprise costs",
          cta: "Explore Construction",
        },
        villaManagement: {
          tagline: "Maximise Your Rwanda Property Income",
          description1:
            "Whether you own a villa at Lake Kivu, a mountain retreat near the volcanoes, or a city home in Kigali, our management team handles everything — professional photography, listings on all platforms, dynamic pricing, guest communication, cleaning, and 24/7 maintenance support.",
          description2:
            "We manage 120 properties across Kigali, Musanze, Rubavu, Nyungwe, and Akagera, with monthly performance reports and an owner portal for live booking and revenue data.",
          feature1: "Listed on Airbnb, VRBO, Booking.com, and local platforms",
          feature2: "Daily dynamic pricing adjustments",
          feature3: "Management fees from 20% per booking",
          cta: "Explore Villa Management",
        },
        landSourcing: {
          tagline: "Finding The Right Land In Rwanda",
          description1:
            "Buying land in Rwanda requires understanding local zoning laws, title verification, and terrain suitability. Our team sources and evaluates land across Rwanda's prime investment zones — from Lake Kivu waterfront to Musanze highlands.",
          description2:
            "Both leasehold and freehold-eligible structures are available. Our in-house legal team handles title verification, environmental compliance, and all transfer documentation, with full due diligence and negotiation before you commit.",
          feature1: "Full legal due diligence before you commit",
          feature2: "Zoning and environmental compliance checks",
          feature3: "Coverage across Kigali, Musanze, Rubavu, Nyungwe, and Lake Kivu",
          cta: "Explore Land Sourcing",
        },
        developmentPartnerships: {
          tagline: "Already Own Land? Develop It With Us.",
          description1:
            "If you own land in Rwanda — whether at Lake Kivu, in the Musanze highlands, or near Kigali — we can partner with you to transform it into a profitable villa development. We bring architecture, construction, marketing, sales, and rental management. You bring the land.",
          description2:
            "Profits are shared based on contribution, typically 50/50 or 60/40, with one team handling design through to guest bookings.",
          feature1: "Joint-venture structures tailored to your contribution",
          feature2: "One team from concept to first guest booking",
          feature3: "Proven across Lake Kivu, Musanze, and Kigali developments",
          cta: "Explore Development Partnerships",
        },
      },
      promise: {
        eyebrow: "Our Promise",
        heading: "Fixed-Price, No Surprises",
        paragraph1:
          "Every Ever Retreat contract is fixed-price from the start. Payments are tied to real construction milestones, not calendar dates, so you only pay as work is actually completed.",
        paragraph2:
          "Architecture, construction, villa management, and land sourcing all sit under one roof, with one in-house team and one point of contact — no subcontractor handoffs, no scope creep, no surprise change orders.",
      },
      moreServicesEyebrow: "More Ways We Help",
      moreServicesHeading: "Beyond The Core Services",
      moreServiceItems: {
        interiorDesign: {
          title: "Interior Design",
          description:
            "Tropical modern, Scandinavian minimal, Rwanda modern, or Japandi interiors, styled to match your villa's architecture and rental positioning.",
        },
        landscape: {
          title: "Landscape Design",
          description:
            "Native planting, water features, and outdoor living spaces designed for Rwanda's climate and your guests' experience.",
        },
        projectManagement: {
          title: "Project Management",
          description:
            "Independent oversight of your build, from contractor coordination to quality control and handover.",
        },
        packages: {
          title: "Villa Packages",
          description:
            "Pre-designed villa packages with transparent, all-in pricing — browse a range built for different budgets and sites.",
        },
        developerGuide: {
          title: "Choosing A Developer",
          description:
            "Not ready to commit? Our guide walks through what to check before choosing any Rwanda developer, including us.",
        },
      },
      moreServicesLearnMore: "Learn More",
      closingEyebrow: "Ready To Start?",
      closingHeadingLight: "Let's Talk About",
      closingHeadingBold: "Your Rwanda Project",
      closingParagraph:
        "Whether you're designing from scratch, building on land you already own, or looking for hands-off rental income, our team can walk you through the right service in a single call.",
      closingCtaPrimary: "Enquire Now",
      closingCtaSecondary: "View Developments",
    },
    faqPage: {
      topicBuying: "Buying & Ownership",
      topicInvestment: "Investment & Returns",
      topicBuilding: "Building & Timeline",
      topicOngoing: "Ongoing & Areas",
      resourcesEyebrow: "Keep Reading",
      resourcesHeading: "From The Blog",
      servicesEyebrow: "Explore Further",
      servicesHeading: "Our Core Services",
      exploreLabel: "Read More",
      closingEyebrow: "Still Have Questions?",
      closingHeadingLight: "Let's Talk About",
      closingHeadingBold: "Your Rwanda Project",
      closingParagraph:
        "Our team can walk you through pricing, legal structures, and timelines directly — no obligation, no pressure.",
      closingCtaPrimary: "Contact Us",
      closingCtaSecondary: "View Developments",
    },
    developmentsPage: {
      heroEyebrow: "Off-Plan and Ready-to-Buy",
      heroHeadingLine1: "Invest in Our",
      heroHeadingLine2: "Developments",
      stat1Label: "From",
      stat2Label: "Yield",
      stat3Label: "Developments",
      stat4Label: "Management",
      ctaPrimary: "Enquire Now",
      ctaSecondary: "WhatsApp Us",
      activeEyebrow: "Available Now",
      activeHeading: "Active Developments",
      activeHeadingLight: "Active",
      activeHeadingBold: "Developments",
    },
    pricingFormSection: {
      eyebrow: "See a villa you like?",
      heading: "Which One Fits You?",
      paragraph:
        "Tell us your budget and timeline and we send back the developments that match, with current pricing, what is still available, and honest yield figures. No sales pressure.",
      feature1: "Matched to your budget and goals",
      feature2: "Current pricing and real availability",
      feature3: "Straight answers on yields, ownership, and timelines",
    },
    interestedInInvesting: {
      eyebrow: "Free Consultation",
      heading: "Interested in Investing?",
      paragraph:
        "Whether you have a plot or are still exploring options, our team gives you straight answers. No obligation, no pressure - just real advice from people who have done this 120 times.",
      feature1: "Honest advice on locations, budgets, and returns",
      feature2: "Clear answers on foreign ownership and legal structures",
      feature3: "No sales pressure - we answer questions, you decide",
      feature4: "Respond within 24 hours, Mon-Fri 8am-5pm CAT",
      ctaEnquire: "Enquire Now",
    },
    previousDevelopments: {
      eyebrow: "Completed",
      heading: "Our Showcase Villas",
      viewProject: "View Project",
      calloutTitle: "What \"Prototype\" Means Here",
      footnote:
        "Both villas are fully built and walkthrough-ready, but not currently for sale. We use them to prove our design and construction quality firsthand, before you commit to an off-plan unit at one of our active developments across Kigali, Musanze, Rubavu, and the Volcanoes region.",
    },
    investmentGuidesSection: {
      eyebrow: "Before You Buy",
      heading: "Investment Guides",
      headingLight: "Investment",
      headingBold: "Guides",
      readMore: "Read More",
      viewAll: "View All Posts",
    },
    contactPage: {
      heroEyebrow: "Contact Us",
      heroHeading: "Start Your Rwanda Villa Project",
      heroParagraph:
        "Whether you have a plot or are still exploring options, our team gives you straight answers. No obligation, no pressure.",
      heroCta: "Enquire Now",
      officeRwandaHqLabel: "Rwanda HQ",
      officeDesignStudioLabel: "Design Studio",
      whatsappLabel: "WhatsApp",
      whatsappHours: "Mon-Fri 8am-5pm CAT",
      emailLabel: "Email",
      hoursLabel: "Office Hours",
      hoursValue: "8:00 AM - 5:00 PM (CAT)",
      formEyebrow: "Send Us a Message",
      formHeading: "Tell Us About Your Project",
      formHeadingLight: "Tell Us About",
      formHeadingBold: "Your Project",
      formParagraph:
        "Whether it's a new villa build, land acquisition, or rental management inquiry, our team will respond within 24 hours.",
      faqEyebrow: "FAQ",
      faqHeading: "Need More Help?",
      faqHeadingLight: "Need More",
      faqHeadingBold: "Help?",
    },
    portfolioPage: {
      heroEyebrow: "120+ Designs Across Rwanda",
      heroHeadingLight: "Villa Design",
      heroHeadingBold: "Portfolio",
      heroParagraph:
        "Every villa is designed from scratch — specific to its site, Rwanda's highland climate, and the people who will actually live in it or rent it out.",
      theWorkHeadingLight: "The",
      theWorkHeadingBold: "Work",
      theWorkParagraphPart1:
        "120+ villa designs across Rwanda's real investment areas — Rubavu, Musanze, Kigali, and Huye. From boutique cottages to full villa developments. Each one begins with our ",
      theWorkParagraphLinkLabel: "architecture team",
      theWorkParagraphPart2: " and a blank page.",
      filterEyebrow: "Featured Projects",
      resultsHeading: "Investment Results",
      resultsParagraph:
        "Every villa in our portfolio is eligible for our rental management program, giving owners a hands-off path to consistent occupancy and long-term appreciation.",
      notableHeading: "Notable Projects",
      notableBpDescription: "our completed showcase villa at Lake Kivu.",
      notableCottageDescription: "our completed showcase villa at Lake Kivu.",
      notableVirungaDescription: "mountain retreat in Musanze, in design.",
      closingHeading: "Have a Project in Mind?",
      closingParagraph:
        "Tell us what you want to build — a rental villa, an eco-lodge, or a private retreat — and our team will take it from there.",
      closingCtaPrimary: "Enquire Now",
      closingCtaSecondary: "WhatsApp Us",
    },
    blogIndexPage: {
      heroEyebrow: "Ever Retreat Rwanda",
      heroTitle: "Blog",
      heroSubtitle: "Insights & Guides",
      heroIntro:
        "Market analysis, area guides, legal explainers, and honest investment data from a team that has been operating in Rwanda property for 10+ years.",
      postsEyebrow: "Latest Articles",
    },
    blogRentalIncomePage: {
      heroEyebrow: "Ever Retreat Blog",
      heroTitle: "How Much Rental Income Does a Rwanda Villa Actually Earn?",
      heroSubtitle: "Nightly rates, occupancy data, and net yield breakdowns by area.",
      yieldHeading: "Yield by Area",
      yieldIntro: "Here's what Ever Retreat-managed villas achieve as of 2026:",
      tableAreaHeader: "Area",
      tableNightlyRateHeader: "Avg Nightly Rate",
      tableOccupancyHeader: "Avg Occupancy",
      tableYieldHeader: "Gross Yield",
      managementHeading: "What We Include in Management",
      managementIntro: "Ever Retreat's full rental management covers:",
      managementItems: [
        "Professional photography and listing creation",
        "Dynamic pricing optimization",
        "Guest communication and 24/7 support",
        "Cleaning and maintenance",
        "Accounting and tax reporting",
        "Legal compliance and permit renewals",
      ],
    },
    blogBestAreaPage: {
      heroEyebrow: "Ever Retreat Blog",
      heroTitle: "Best Area to Invest in Rwanda (2026)",
      heroSubtitle:
        "Comparing land prices, yields, and lifestyle factors across Rwanda's top investment areas.",
      statsLandPriceLabel: "Land price:",
      statsGrossYieldLabel: "Gross yield:",
      statsOccupancyLabel: "Occupancy:",
      kigaliHeading: "Kigali",
      kigaliParagraph:
        "Rwanda's capital and business hub. Best for stable, consistent returns with minimal management effort. Highest resale liquidity.",
      musanzeHeading: "Musanze",
      musanzeParagraph:
        "Northern highlands, gateway to Volcanoes National Park. Highest yields in the country, growing expat community, and adventure tourism demand.",
      rubavuHeading: "Rubavu",
      rubavuParagraph:
        "Lake Kivu waterfront. Premium nightly rates, family-friendly atmosphere, and strong long-stay demand. Limited supply keeps entry costs high but potential is significant.",
      nyungweHeading: "Nyungwe",
      nyungweParagraph:
        "Forest edge near Nyungwe National Park. Lower entry costs, emerging market, and growing eco-tourism demand. Higher risk but potential for early-stage appreciation.",
      akageraHeading: "Akagera",
      akageraParagraph:
        "Eastern province near Akagera National Park. Lowest entry cost, safari lodge demand, and significant upside potential. Best for patient investors willing to wait for infrastructure development.",
      recommendationHeading: "Our Recommendation",
      recommendationPart1: "For ",
      recommendationStrong1: "balanced returns with lower risk",
      recommendationPart2: ", invest in Rubavu or Kigali. For ",
      recommendationStrong2: "highest yield potential",
      recommendationPart3: ", focus on Musanze. For ",
      recommendationStrong3: "early-stage entry",
      recommendationPart4: ", consider Nyungwe or Akagera.",
    },
    blogForeignersPage: {
      heroEyebrow: "Ever Retreat Blog",
      heroTitle: "Can Foreigners Buy Property in Rwanda?",
      heroSubtitle: "Complete guide to legal ownership structures in Rwanda.",
      dateLabel: "March 2026",
      section1Heading: "Yes, Foreigners Can Own Property in Rwanda",
      section1Paragraph:
        "Under Rwanda law, foreigners cannot hold freehold freehold land title under personal name. However, there are two legal pathways for foreign ownership:",
      leaseholdHeading: "Leasehold (Most Common)",
      leaseholdParagraph:
        "Foreigners can secure land through leasehold agreements issued by the Rwanda Land Management and Use Authority (RMLA). Standard lease terms are 99 years for residential/commercial use, with extension options. Leasehold is the standard route for villa investment and permits short-term rental operations.",
      leaseholdItems: [
        "99-year initial lease term",
        "Renewable for additional terms",
        "Full transferability to other foreign buyers",
        "Permits short-term tourist accommodation",
      ],
      companyHeading: "Company Structure",
      companyParagraph:
        "Foreigners can establish a Rwandan company (limited liability company registered with the Rwanda Development Board) that holds the property. This structure is useful for developments with multiple investors or commercial operations.",
      companyItems: [
        "Requires local director or nominee arrangement",
        "RDB registration and annual filings",
        "Allows freehold ownership through the company",
        "More complex but offers full control",
      ],
      mistakesHeading: "Common Mistakes to Avoid",
      mistakesItems: [
        "Buying without verifying zoning — Ensure the land is in a tourism-designated zone before purchase.",
        "Skipping title verification — Always engage our legal team to verify the title chain and encumbrances.",
        "Ignoring permit requirements — Tourism permits must be secured before operating short-term rentals.",
        "Not budgeting for transfer costs — Allow 10-15% of land value for stamp duty, transfer fees, and legal costs.",
      ],
      processHeading: "Step-by-Step Process",
      processItems: [
        "Due diligence on land (zoning, title, utilities)",
        "Reserve the land with signed PSR (Preliminary Sale Agreement)",
        "Company registration (if applicable)",
        "Finalize legal documentation and title transfer",
        "Pay transfer taxes and stamp duty",
        "Register lease/company with RMLA and RDB",
      ],
      workWithUsHeading: "Work With Us",
      workWithUsParagraph:
        "Our in-house legal team handles the entire purchase process, from due diligence to title transfer. We work with the RMLA, RDB, and local authorities to ensure every step is fully compliant and your ownership structure is properly registered.",
    },
    blogLakeKivuPage: {
      pageTitle: "Lake Kivu vs Musanze: Investment Comparison",
      pageSubtitle: "Two premier destinations, two different investment profiles.",
      atGlanceHeading: "At a Glance",
      tableFactorHeader: "Factor",
      tableAvgLandPrice: "Avg Land Price",
      tableAvgGrossYield: "Avg Gross Yield",
      tableAvgOccupancyRow: "Avg Occupancy",
      tableNightlyRateRange: "Nightly Rate Range",
      tableCapitalAppreciation: "Capital Appreciation",
      lakeKivuHeading: "Lake Kivu (Rubavu)",
      lakeKivuProsLabel: "Pros:",
      lakeKivuPros:
        "Premium nightly rates, consistently high occupancy, scenic waterfront location, established tourism infrastructure.",
      lakeKivuConsLabel: "Cons:",
      lakeKivuCons:
        "Higher entry cost, limited developable land availability, more competitive market.",
      musanzeHeading: "Musanze",
      musanzeProsLabel: "Pros:",
      musanzePros:
        "Lower land prices, strong capital appreciation potential, growing expat community, adventure tourism demand.",
      musanzeConsLabel: "Cons:",
      musanzeCons: "More seasonal demand, lower nightly rates, infrastructure still developing.",
      whichHeading: "Which Should You Choose?",
      whichParagraph1Pre: "If you prioritise ",
      whichParagraph1Strong1: "immediate cash flow",
      whichParagraph1Mid: " with premium nightly rates, Lake Kivu is the better choice. If you prefer ",
      whichParagraph1Strong2: "capital appreciation",
      whichParagraph1Post: " with growing demand and lower entry cost, Musanze wins.",
      whichParagraph2:
        "Many investors diversify across both — allocating 60% to Lake Kivu for cash flow and 40% to Musanze for growth.",
    },
    blogCostToBuildPage: {
      heroEyebrow: "Ever Retreat Blog",
      heroTitle: "What Does It Cost to Build a Villa in Rwanda?",
      heroSubtitle: "Real construction costs from $1,000 per sqm.",
      breakdownHeading: "Construction Cost Breakdown",
      breakdownParagraph:
        "In Rwanda, villa construction costs range from $1,000 to $2,200 per square metre depending on design complexity, finishes, and location. Here's what you need to know when budgeting.",
      costBySizeHeading: "Cost by Villa Size",
      tableVillaType: "Villa Type",
      tableBuiltArea: "Built Area",
      tableCostRange: "Cost Range",
      row1Type: "2-Bedroom Starter",
      row2Type: "3-Bedroom Mid-Range",
      row3Type: "4-Bedroom Luxury",
      row4Type: "5-Bedroom Premium",
      landCostsHeading: "Land Costs by Area",
      landCostsParagraph:
        "Land prices vary significantly by location and proximity to tourism infrastructure.",
      landPriceRangesHeading: "Land Price Ranges",
      landPriceKigaliDesc: "in prime residential areas",
      landPriceRubavuDesc: "for waterfront plots",
      landPriceMusanzeDesc: "in the highlands",
      landPriceNyungweDesc: "near forest reserves",
      landPriceAkageraDesc: "near national park",
      totalBudgetHeading: "Total Project Budget",
      totalBudgetParagraph1:
        "Our fixed-price packages start at $220K and include everything from land sourcing to rental setup. This covers architecture, permits, construction, interior design, and project management.",
      totalBudgetParagraph2:
        "Most investors budget 10-15% above the base package for custom upgrades, premium finishes, or land acquisition in prime areas.",
    },
    blogHowToBuildPage: {
      heroEyebrow: "Ever Retreat Blog",
      heroTitle: "How to Build a Villa in Rwanda",
      heroSubtitle: "The full process from land to first guest.",
      landSourcingHeading: "Land Sourcing & Due Diligence",
      landSourcingParagraph:
        "The first step is finding suitable land. In Rwanda, this means identifying properties in tourism-designated zones where short-term rental licences are permitted. Our in-house team uses GIS mapping and local relationships to find plots that meet both lifestyle and investment criteria.",
      whatWeCheckHeading: "What We Check",
      whatWeCheckItems: [
        "Zoning compliance (tourism vs residential)",
        "Soil conditions and topography",
        "Access to utilities (water, power, internet)",
        "Proximity to attractions and infrastructure",
        "Title verification and encumbrance checks",
      ],
      designHeading: "Architectural Design",
      designParagraph:
        "Once the land is secured, our in-house architects develop custom designs that maximize the site's potential. We use 3D renders and virtual walkthroughs so you can see exactly what you're building. All designs incorporate cross-ventilation, natural light, and open-plan layouts suited to Rwanda's climate.",
      permitHeading: "Permit Application",
      permitParagraph:
        "Getting permits in Rwanda is a multi-agency process. We handle everything: building permits from local authorities, tourism operation permits from the Rwanda Development Board (RDB), and environmental approvals where required. Our legal team ensures full compliance before construction begins.",
      constructionHeading: "Construction Management",
      constructionParagraph:
        "With permits secured, construction begins. Our certified project managers oversee the build with weekly photo updates, real-time budget tracking, and milestone-based payments. All structures use reinforced concrete for durability and compliance with Rwanda's building codes.",
      timelineHeading: "Average Timeline",
      timelineItems: [
        "Land sourcing & due diligence: 2-4 months",
        "Design & permitting: 3-5 months",
        "Construction: 10-16 months",
        "Rental setup: 2-4 weeks",
      ],
      rentalSetupHeading: "Rental Income Setup",
      rentalSetupParagraph:
        "The final stage is getting your villa rented. We handle professional photography, listing creation across all major platforms (Airbnb, Booking.com, VRBO), furnishing with hotel-grade amenities, and pricing optimization. Most of our clients achieve first bookings within 4 weeks of handover.",
    },
    howToBuyPage: {
      heroSlide1Title: "How to Buy Property in Rwanda",
      heroSlide1Subtitle:
        "The complete, start-to-finish process for buying a villa, land, or house in Rwanda safely.",
      heroSlide2Title: "Legal Clarity",
      heroSlide2Subtitle: "Foreign buyers can secure property through leasehold, freehold, and corporate structures.",
      heroSlide3Title: "Expert Support",
      heroSlide3Subtitle: "Our in-house legal team guides you through every step, stress-free.",
      introEyebrow: "Start Here",
      introHeadingLight: "Buying in Rwanda,",
      introHeadingBold: "Done Properly",
      introParagraph1:
        "Buying property in Rwanda is more straightforward than it can seem from the outside, as long as you understand how ownership works and do your due diligence in the right order. Done well, it is one of the strongest real estate plays in East Africa. Done in a rush, it is where buyers run into trouble.",
      introParagraph2:
        "This is the full process, start to finish: how foreigners legally own property here, the real steps to buying safely, what it actually costs, and the villas already available today. Our in-house legal, architecture, construction, and villa management teams handle the whole journey if you'd rather talk it through.",
      stepsEyebrow: "The Process",
      stepsHeadingLight: "Six Steps to",
      stepsHeadingBold: "Buying Safely",
      budgetingEyebrow: "What It Costs",
      budgetingHeadingLight: "Budgeting",
      budgetingHeadingBold: "Realistically",
      budgetingIntro:
        "Prices vary by area, structure, and whether you buy a finished villa or build from scratch. As a real orientation, based on what our team actually quotes:",
      budgetingRow1Label: "Fixed-Price Villa Package",
      budgetingRow1Value: "$220K – $450K",
      budgetingRow1Desc:
        "2 to 5-bedroom villas, land sourcing to rental setup included — architecture, permits, construction, interior design, and project management in one fixed price.",
      budgetingRow2Label: "Land Only (per sqm)",
      budgetingRow2Value: "$10 – $120/sqm",
      budgetingRow2Desc:
        "Varies by area, from emerging zones like Akagera and Nyungwe to prime Kigali and Lake Kivu plots.",
      budgetingRow3Label: "Construction Only (per sqm)",
      budgetingRow3Value: "$1,000 – $2,200/sqm",
      budgetingRow3Desc: "Fixed-price by finish level if you already have land — standard, premium, or luxury.",
      budgetingRow4Label: "Architecture Design Fee",
      budgetingRow4Value: "From $7,000",
      budgetingRow4Desc: "50% off when you build with our construction team.",
      budgetingNote:
        "Legal due diligence, permits, and land acquisition are quoted separately when a project isn't bought as one of our fixed-price packages. Try the build calculator to model your own project, or get in touch for a fixed quote specific to your site.",
      foreignersEyebrow: "The Part That Trips People Up",
      foreignersHeadingLight: "How Foreigners",
      foreignersHeadingBold: "Own Property",
      foreignersLinkLabel: "Read more on foreign ownership",
      villasEyebrow: "Ready When You Are",
      villasHeadingLight: "Villas You Can",
      villasHeadingBold: "Buy Now",
      villasParagraph:
        "Off-plan and prototype developments across Rwanda, each one a real project with our team behind it.",
      closingEyebrow: "Buy With Confidence",
      closingHeadingLight: "Let Us Walk You",
      closingHeadingBold: "Through It",
      closingParagraph:
        "From finding the right property to the legal structure, the due diligence, and the keys, we handle the whole journey — and manage the villa afterwards if you want it to earn. Tell us what you're looking for and we'll map the next step.",
      closingCtaPrimary: "Contact Our Team",
      closingCtaSecondary: "WhatsApp Us",
    },
    investInRwandaPage: {
      introParagraph:
        "Rwanda property investment means buying or building villas and land in Rwanda for rental income and capital growth. Once a frontier market, it has become a serious real estate asset class. Infrastructure is expanding, digital nomad migration is rising, and international buyers are putting more capital into the country's property market. The window to buy at pre-appreciation prices in emerging sub-markets is narrowing. Whether you want to buy an off-plan villa or browse existing properties for sale, we can guide you through the process.",
      strategyHeading: "Our Strategy",
      strategyParagraph:
        "We deliberately avoid saturated markets where yields have been compressed by oversupply. Instead, we target emerging and under-served areas where infrastructure is improving and demand is building, giving our clients first-mover advantage across Rwanda.",
      strategyAreas: [
        { description: "Capital city, consistent rental demand" },
        { description: "Volcanoes region, gorilla tourism" },
        { description: "Lake Kivu waterfront, premium" },
        { description: "Rainforest edge, eco-tourism" },
        { description: "National park, safari lodge" },
        { description: "Cultural tourism, up & coming" },
      ],
      roiHeading: "Returns by Strategy",
      roiSubheading: "ROI Breakdown",
      roiTableStrategy: "Strategy",
      roiTableYield: "Typical Yield",
      roiTableNotes: "Notes",
      roiData: [
        { strategy: "Short-Term Holiday Rental", notes: "Kigali, Musanze, Rubavu prime locations" },
        { strategy: "Long-Term Lease", notes: "Stable income, lower management overhead" },
        { strategy: "Capital Appreciation", notes: "Prime land in emerging sub-markets" },
        { strategy: "Combined (Rental + Capital)", notes: "Best-in-class locations, ROI-designed builds" },
      ],
      comparisonHeading: "Rwanda vs Other African Investment Markets",
      comparisonParagraph:
        "International property investors are increasingly comparing Rwanda with other African markets like Kenya, Tanzania, Uganda, and South Africa. Here is how the numbers stack up across the metrics that matter most.",
      comparisonTableMetric: "Metric",
      comparisonData: [
        { metric: "Entry Price (2BR Villa)" },
        { metric: "Management Cost" },
        { metric: "Foreign Ownership" },
        { metric: "Capital Appreciation" },
        { metric: "Break-Even Period" },
      ],
      standOutHeading: "Why Rwanda Stands Out in East Africa",
      standOutParagraph:
        "For East African investors, Rwanda offers a compelling combination of stability, ease of doing business, and investor-friendly policies. The Rwanda Development Board (RDB) has simplified property acquisition, and the country consistently ranks as one of Africa's easiest places to do business.",
      standOutLabels: [
        { label: "Ease of Doing Business" },
        { label: "Property Registration Time" },
        { label: "Rental Yields" },
        { label: "Annual GDP Growth" },
      ],
      tiersHeading: "Investment Tiers",
      tiers: [
        {
          title: "Starter Investment",
          description:
            "A compact 1-2 bedroom villa in an emerging area like Nyanza or Nyungwe outskirts. Simple, modern design with private garden. Ideal for first-time Rwanda investors.",
          breakEven: "Break-even in 5 to 7 years with professional management",
        },
        {
          title: "Premium Investment",
          description:
            "A 2-3 bedroom villa in a prime location like Kigali, Musanze, or Rubavu. High-end finishes, designed landscaping. Strong rental appeal with higher nightly rates.",
          breakEven: "The sweet spot for investors wanting both strong returns and a personal-use holiday home.",
        },
        {
          title: "Luxury / Multi-Unit",
          description:
            "A 3-4 bedroom luxury villa with resort-grade finishes, or a multi-unit development with 2-4 villas on a single plot. Lake Kivu views, Musanze mountain views, or boutique resort concepts.",
          breakEven: "Multiple revenue streams with portfolio-level diversification.",
        },
      ],
      tierReturnPrefix: "Expected annual rental income:",
      tiersCta: "Browse Current Developments",
      developmentsHeading: "Where We're Building",
      developmentsParagraph:
        "Every Ever Retreat development is designed, built, and managed in-house — from completed showcase villas to developments in design across Rwanda.",
      developmentPrototype: "Prototype",
      developmentComingSoon: "Coming Soon",
      developmentNotForSale: "Not For Sale",
      viewDevelopment: "View Development",
      viewAllDevelopments: "View All Developments",
      considerationsHeading: "What to Consider Before You Invest in Rwanda",
      considerationsParagraph:
        "No investment is without risk, and we believe you deserve an honest picture before committing capital. Here are the main considerations for Rwanda property investors.",
      considerations: [
        {
          title: "Leasehold vs Freehold",
          description:
            "Foreign investors typically hold property on leasehold (20-99 years) or freehold (Title Deed) in designated areas. Lease extensions are common but not guaranteed.",
        },
        {
          title: "Regulatory Changes Can Happen",
          description:
            "Rwanda property law has become more investor-friendly over the past decade, but regulations can change. Working with a licensed, locally established company like Ever Retreat reduces your exposure.",
        },
        {
          title: "Not All Areas Perform Equally",
          description:
            "Rwanda is not one market. Occupancy rates, nightly rates, and capital appreciation vary significantly by location. Our investment strategy focuses on emerging areas with strong demand.",
        },
        {
          title: "Construction Quality Varies Widely",
          description:
            "Rwanda has many builders, but quality and accountability range from excellent to disastrous. This is why we manage every build with our own team.",
        },
        {
          title: "Currency Risk",
          description:
            "Rwanda rental income is typically earned in USD or RWF, while your home currency may be AUD, EUR, or GBP. Exchange rate movements can impact your returns.",
        },
      ],
      considerationsClosing:
        "None of these risks are deal-breakers for the right investor, but they should be understood clearly. Our job is to help you make an informed decision — not to oversell an opportunity.",
      processHeading: "The Process",
      processSubheading: "How It Works",
      processSteps: [
        {
          step: "Discovery Call",
          description:
            "We learn your goals, budget, and preferred timeline. No obligation, just a straight conversation about what is possible in Rwanda.",
        },
        {
          step: "Land and Strategy",
          description:
            "Our land sourcing team identifies opportunities across Kigali, Musanze, Rubavu, Nyungwe, Akagera, and Nyanza that match your criteria.",
        },
        {
          step: "Design and Build",
          description:
            "Our architects design for ROI from day one. We project manage the full construction process, keeping you informed at every stage.",
        },
        {
          step: "Rental Management",
          description:
            "Our villa management team lists, manages, and optimises your property for maximum occupancy. You collect returns while we handle operations.",
        },
      ],
      processCta: "Start Your Investment Journey",
      faqHeading: "Frequently Asked Questions",
      faqItems: [
        {
          q: "Can foreigners buy property in Rwanda?",
          a: "Yes, foreigners can legally secure property in Rwanda through leasehold agreements (20-99 years), freehold title deeds in designated areas, or corporate structures. Our legal team ensures every acquisition is fully compliant.",
        },
        {
          q: "Is Rwanda a good investment compared to other African countries?",
          a: "Rwanda offers competitive returns with entry prices comparable to other African markets. Gross yields of 12-18% with 85%+ occupancy rates make it one of Africa's strongest property investment markets.",
        },
        {
          q: "What rental income can I expect from a Rwanda villa?",
          a: "Depending on location and property type, annual rental income ranges from $18,000 for starter villas to $60,000+ for luxury properties in prime locations like Kigali, Musanze, and Rubavu.",
        },
        {
          q: "How much does it cost to build a villa in Rwanda?",
          a: "Build costs in Rwanda are competitive, typically ranging from $150,000 to $350,000+ depending on size, location, and finishes. Contact our team for a detailed quote.",
        },
        {
          q: "What are the ongoing costs of owning a villa in Rwanda?",
          a: "Ongoing costs include management fees (typically 15-20% of rental income), maintenance, utilities, and property insurance. These are significantly lower than in Western markets.",
        },
        {
          q: "What is the difference between freehold and leasehold in Rwanda?",
          a: "Freehold (Title Deed) offers perpetual ownership and is available in designated areas. Leasehold (PDL/Lease) is a 20-99 year renewable lease, standard for foreigners and the most common structure.",
        },
      ],
    },
    packagesPage: {
      heroSlide1Title: "Ready-Made Villa Packages",
      heroSlide1Subtitle: "Fixed-price, end-to-end service from land to completion in Rwanda.",
      heroSlide2Title: "Prime Locations",
      heroSlide2Subtitle: "Build in Kigali, Musanze, Rubavu, Nyungwe, or Akagera.",
      heroSlide3Title: "From $220K",
      heroSlide3Subtitle: "Complete villa packages with everything included.",
      statFixedPriceLabel: "Fixed Price",
      statFixedPriceSub: "No hidden costs",
      statTimelineSub: "Construction timeline",
      statYieldSub: "Projected rental yield",
      statDesignFeesSub: "Design fees included",
      packagesEyebrow: "Villa Packages",
      packagesHeading: "Four Sizes. One Process.",
      packagesParagraph:
        "All packages include architecture, permits, construction, interior design, and project management. Build in Kigali, Musanze, Rubavu, Nyungwe, or Akagera.",
      packages: [
        {
          name: "2-Bedroom Villa",
          description: "Perfect starter villa or rental investment. Open-plan living, private pool, modern design.",
          features: [
            "Open-plan living & dining",
            "Modern kitchen with appliances",
            "Private pool (6x3m)",
            "Timber decking",
            "Air-conditioning throughout",
            "Security system",
          ],
        },
        {
          name: "3-Bedroom Villa",
          description:
            "Premium rental-ready villa with chef's kitchen and gym. High rental demand in Kigali and Musanze.",
          features: [
            "Chef's kitchen with stone benchtops",
            "Private gym / office space",
            "Swimming pool (8x3m)",
            "Outdoor living deck",
            "Smart home automation",
            "Staff quarters (optional)",
          ],
        },
        {
          name: "4-Bedroom Villa",
          description:
            "Luxury family villa with home cinema, sauna, and entertainment space. Premium finishes throughout.",
          features: [
            "Home cinema room",
            "Sauna & steam room",
            "Large swimming pool (10x4m)",
            "Alfresco entertaining deck",
            "Spa bathroom in master",
            "Two-car carport",
          ],
        },
        {
          name: "5-Bedroom Villa",
          description:
            "Ultimate family or group villa with staff quarters, elevator, and rooftop terrace. Turnkey rental-ready.",
          features: [
            "Full staff quarters (2 rooms)",
            "Rooftop entertainment terrace",
            "Large swimming pool (12x4m)",
            "Elevator access",
            "Home automation system",
            "Three-car garage",
          ],
        },
      ],
      mostPopular: "Most Popular",
      enquireNow: "Enquire Now",
      includedHeading: "What's Included",
      includedParagraph:
        "Every villa package includes everything from design to completion, with the option to add land sourcing and rental management:",
      includedItems: [
        "Land acquisition service (optional)",
        "Architectural design & 3D renders",
        "Building permits & RDC compliance",
        "Full construction with quality materials",
        "Interior design & furniture selection",
        "Project management throughout",
        "Rental management & booking system setup",
        "Ongoing maintenance program",
      ],
      includedClosing:
        "All packages are fixed-price with transparent cost breakdowns. You will never pay more than the agreed amount.",
    },
    landZoningPage: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Land Zoning Guide",
      heroTitle: "Rwanda Land Zoning Guide",
      heroSubtitle: "Understanding Rwanda's land use regulations and zoning classifications.",
      introHeading: "Understanding Rwanda Land Zoning",
      introParagraph:
        "Rwanda uses a structured land-use planning system to manage development across the country. Understanding the zoning classification of your land is critical before purchasing or developing a property for tourism or residential use.",
      badgeVerify: "Always verify zoning before purchase",
      badgePermits: "Permits required for development",
      classificationsHeading: "Zoning Classifications in Rwanda",
      zones: [
        {
          title: "Residential Zones",
          description:
            "Residential zones permit villa construction and private residences. These zones cover most suburban and peri-urban areas around Kigali, Musanze, Rubavu, and other urban centres.",
          features: [
            "Low-density zones ideal for standalone villas",
            "Medium-density zones allow townhouses",
            "High-density zones permit multi-unit developments",
            "Building height restrictions apply",
          ],
        },
        {
          title: "Tourism & Hospitality Zones",
          description:
            "Tourism-designated zones permit short-term rental accommodation and hospitality businesses. These zones cover areas near Lake Kivu, Volcanoes National Park, Akagera National Park, and along the convention centre corridor in Kigali.",
          features: [
            "Short-term rentals permitted",
            "Hotel and lodge development allowed",
            "Villa developments in Kigali, Rubavu, and Musanze",
            "Tourism infrastructure support",
          ],
        },
        {
          title: "Agricultural Zones",
          description:
            "Agricultural zones primarily allow farming and agricultural use. Converting land from agricultural to residential or tourism use requires specific permits from the relevant local authority.",
          features: [
            "Farming and agricultural use permitted",
            "Limited residential development possible",
            "Conversion requires permits",
            "Subject to local authority approval",
          ],
        },
        {
          title: "Commercial & Mixed-Use Zones",
          description:
            "These zones allow commercial development, offices, retail, and mixed-use buildings. Areas along the Kigali business district and major arterial roads fall within these zones.",
          features: [
            "Commercial development permitted",
            "Retail and office spaces allowed",
            "Mixed-use residential-commercial buildings",
            "Higher density permitted",
          ],
        },
        {
          title: "Protected & Green Zones",
          description:
            "Protected zones include national parks, forest reserves, and wetlands. Development is heavily restricted and requires special permits from the Rwanda Development Board (RDB) and the Ministry of Environment.",
          features: [
            "National parks and forest reserves",
            "Wetland protection areas",
            "Special permits required",
            "Environmental impact assessments needed",
          ],
        },
      ],
      zoneLabel: "Zone",
      complianceHeading: "Zoning Compliance & Due Diligence",
      complianceParagraph:
        "Our legal and planning team handles all zoning verification before purchase. We check the site plan against the land title to ensure your intended use is permitted, and coordinate all permit applications for your development.",
      verifyLandCta: "Verify Your Land",
      landSourcingCta: "Land Sourcing Services",
      noticeHeading: "Important Notice",
      noticeParagraph:
        "Zoning regulations are subject to change. Always verify with the Rwanda Development Board (RDB) and the relevant local authority before making any land purchase or development decision.",
      ctaHeading: "Ready to Find Your Perfect Land?",
      ctaParagraph:
        "Our team can help you navigate Rwanda's zoning regulations and find the ideal property for your development.",
      contactCta: "Contact Our Team",
    },
    areasPage: {
      heroSlide1Title: "Rwanda Investment Areas",
      heroSlide1Subtitle:
        "From Kigali's business district to Akagera's safari lodges — each area offers distinct investment potential.",
      heroSlide2Title: "Prime Locations",
      heroSlide2Subtitle: "Curated properties across Rwanda's most desirable areas.",
      heroSlide3Title: "Proven Returns",
      heroSlide3Subtitle: "15-20% gross yields across our developments in Kigali, Musanze, and Rubavu.",
      sectionEyebrow: "Where We Build",
      sectionHeading: "Prime Investment Areas",
      sectionParagraph:
        "Each area of Rwanda has its own character, price point, and investment profile. Here is where our clients are building villas.",
      metricsHeading: "Investment Metrics by Area",
      metricsParagraph:
        "Each Rwanda investment area offers different advantages. Here is a quick comparison to help you decide where to focus:",
      tableArea: "Area",
      tableLandPrice: "Land Price",
      tableAvgYield: "Avg Yield",
      tableOccupancy: "Occupancy",
      tableBestFor: "Best For",
      bestForKigali: "Capital growth, stable demand",
      bestForMusanze: "Tourism, mountain retreats",
      bestForRubavu: "Waterfront, holiday rentals",
      bestForNyungwe: "Eco-tourism, lower entry",
      bestForAkagera: "Safari lodges, exclusivity",
      bestForHuye: "Eco-tourism, student rentals",
      bestForEvane: "Mountain retreats, hill stations",
      bestForNyanza: "Cultural tourism, gateway location",
    },
    areaMetricLabels: {
      heading: "Investment Metrics",
      landPrice: "Land Price",
      grossYield: "Gross Yield",
      avgOccupancy: "Avg Occupancy",
      appreciation: "Appreciation",
    },
    areaKigaliPage: {
      heroSlide1Title: "Kigali",
      heroSlide1Subtitle:
        "Rwanda's capital city — consistent demand, modern infrastructure, and strong capital growth.",
      heroSlide2Title: "Business Hub",
      heroSlide2Subtitle: "Expats, diplomats, and business travelers create year-round rental demand.",
      marketHeading: "Kigali Property Market",
      marketParagraph1:
        "Kigali is Rwanda's capital and business hub, home to international organisations, embassies, and a growing expat community. The demand for quality housing and short-term rentals is consistent year-round, making it one of Rwanda's most stable property investment markets.",
      whyInvestHeading: "Why Invest in Kigali",
      whyInvestItem1Title: "Stable demand",
      whyInvestItem1Description: "Year-round demand from expats, diplomats, and business travelers.",
      whyInvestItem2Title: "Modern infrastructure",
      whyInvestItem2Description: "Growing business district with new developments and amenities.",
      whyInvestItem3Title: "Capital growth",
      whyInvestItem3Description: "Strong long-term appreciation as Kigali develops into a regional hub.",
      whyInvestItem4Title: "Liquidity",
      whyInvestItem4Description: "High resale demand from incoming expats and investors.",
    },
    areaMusanzePage: {
      heroSlide1Title: "Musanze",
      heroSlide1Subtitle:
        "Rwanda's northern highlands — gorilla tourism, luxury lodges, and mountain retreats.",
      heroSlide2Title: "Volcanoes Region",
      heroSlide2Subtitle: "Home to Virunga Villas and premium eco-retreats near Volcanoes National Park.",
      marketHeading: "Musanze Property Market",
      marketParagraph1Pre:
        "Musanze sits in Rwanda's northern highlands, bordering Volcanoes National Park. It's the gateway to gorilla trekking and home to our ",
      marketParagraph1Post:
        " development — a premium mountain eco-retreat designed for both private use and rental income.",
      whyInvestHeading: "Why Invest in Musanze",
      whyInvestItem1Title: "Gorilla tourism",
      whyInvestItem1Description: "Year-round demand from international visitors to Volcanoes National Park.",
      whyInvestItem2Title: "Luxury segment",
      whyInvestItem2Description: "High nightly rates for mountain retreats and eco-lodges.",
      whyInvestItem3Title: "Growing infrastructure",
      whyInvestItem3Description: "New roads and developments improving accessibility.",
      whyInvestItem4Title: "Lower entry cost",
      whyInvestItem4Description: "More affordable than Kigali or Rubavu, improving ROI potential.",
    },
    areaRubavuPage: {
      heroSlide1Title: "Rubavu",
      heroSlide1Subtitle: "Lake Kivu waterfront — premium holiday rentals and luxury lakeside villas.",
      heroSlide2Title: "Lake Kivu Lifestyle",
      heroSlide2Subtitle: "Home to B&P Ever Retreat Villa and Cottage — our completed showcase villas.",
      marketHeading: "Rubavu Property Market",
      marketParagraph1Pre:
        "Rubavu sits on the shores of Lake Kivu, one of Rwanda's most scenic and sought-after destinations. The area attracts high-spending tourists year-round for water sports, sunset cruises, and lakeside relaxation. Our ",
      marketParagraph1Mid: " and ",
      marketParagraph1Post: " showcase villas are both located here.",
      whyInvestHeading: "Why Invest in Rubavu",
      whyInvestItem1Title: "Premium rental rates",
      whyInvestItem1Description:
        "Lake Kivu waterfront villas command some of Rwanda's highest nightly rates.",
      whyInvestItem2Title: "Consistent demand",
      whyInvestItem2Description:
        "Tourism to Lake Kivu is strong year-round, with peak seasons in December and July.",
      whyInvestItem3Title: "Luxury segment",
      whyInvestItem3Description: "High-net-worth tourists and expats create demand for premium accommodations.",
      whyInvestItem4Title: "Lifestyle investment",
      whyInvestItem4Description: "Beautiful location for personal use and rental income.",
    },
    areaNyungwePage: {
      heroSlide1Title: "Nyungwe",
      heroSlide1Subtitle: "Forest edge — eco-tourism accommodation and sustainable lodge investments.",
      heroSlide2Title: "Eco-Tourism Hub",
      heroSlide2Subtitle: "Growing demand for sustainable lodges and forest-edge retreats.",
      marketHeading: "Nyungwe Property Market",
      marketParagraph1:
        "Nyungwe is centered around Rwanda's famous Nyungwe National Park — home to the world's largest mountain chimpanzee forest. The area attracts eco-tourists, researchers, and adventure travelers seeking canopy walks, bird watching, and forest experiences.",
      marketParagraph2:
        "Land prices here are among Rwanda's most affordable, making it ideal for eco-lodge developers and sustainable retreat operators. The growing community tourism initiative brings steady demand for accommodation.",
      whyInvestHeading: "Why Invest in Nyungwe",
      whyInvestItem1Title: "Low entry cost",
      whyInvestItem1Description: "Most affordable land prices in Rwanda's prime tourism zones.",
      whyInvestItem2Title: "Eco-tourism growth",
      whyInvestItem2Description: "Increasing international visitors to Nyungwe National Park.",
      whyInvestItem3Title: "Niche market",
      whyInvestItem3Description: "Less competition, higher margins for unique eco-accommodations.",
      whyInvestItem4Title: "Sustainability focus",
      whyInvestItem4Description: "Strong alignment with Rwanda's green tourism initiatives.",
    },
    areaHuyePage: {
      heroSlide1Title: "Huye",
      heroSlide1Subtitle: "Southern province cultural hub — near Nyungwe National Park and Lake Kivu.",
      heroSlide2Title: "Educational Center",
      heroSlide2Subtitle:
        "Home to the University of Rwanda, with steady rental demand from students and staff.",
      marketHeading: "Huye Property Market",
      marketParagraph1:
        "Huye (formerly Butare) is a city in Rwanda's southern province, located between Kigali and Lake Kivu. It serves as a cultural and educational hub, home to the University of Rwanda College of Arts and Social Sciences and the National Museum of Rwanda. The area is also a gateway to Nyungwe National Park and Lake Kivu, attracting tourists and researchers year-round.",
      marketParagraph2:
        "Land prices here offer strong value compared to Kigali and Rubavu, making it attractive for mid-range residential developments and eco-lodges serving the growing tourism corridor.",
      whyInvestHeading: "Why Invest in Huye",
      whyInvestItem1Title: "Affordable entry",
      whyInvestItem1Description: "Lower land prices than Kigali or Rubavu with growing demand.",
      whyInvestItem2Title: "Educational demand",
      whyInvestItem2Description: "Steady rental demand from university students and staff.",
      whyInvestItem3Title: "Tourism access",
      whyInvestItem3Description: "Gateway to Nyungwe National Park and Lake Kivu attractions.",
      whyInvestItem4Title: "Developing infrastructure",
      whyInvestItem4Description: "Government investment in roads and utilities improving accessibility.",
    },
    areaAkageraPage: {
      heroSlide1Title: "Akagera",
      heroSlide1Subtitle: "National park proximity — safari lodges and exclusive eco-retreats.",
      heroSlide2Title: "Safari Tourism",
      heroSlide2Subtitle: "Growing luxury safari market with high-end accommodation demand.",
      marketHeading: "Akagera Property Market",
      marketParagraph1:
        "Akagera is centred around Rwanda's oldest national park, home to lions, elephants, rhinos, and vast savannah landscapes. The area attracts high-spending safari tourists and luxury travelers seeking exclusive, off-the-beaten-path accommodations.",
      marketParagraph2:
        "Safari lodges here command premium nightly rates due to their exclusivity and unique wildlife experiences. Land is relatively affordable, but the market is niche and specialized.",
      whyInvestHeading: "Why Invest in Akagera",
      whyInvestItem1Title: "Exclusive market",
      whyInvestItem1Description: "Limited luxury safari accommodation creates scarcity value.",
      whyInvestItem2Title: "High nightly rates",
      whyInvestItem2Description: "Safari lodges command premium rates from international tourists.",
      whyInvestItem3Title: "Growing tourism",
      whyInvestItem3Description:
        "Rwanda's tourism sector is expanding, with Akagera seeing increased visitor numbers.",
      whyInvestItem4Title: "Unique experience",
      whyInvestItem4Description: "Wildlife viewing and exclusive retreats command premium pricing.",
    },
    areaNyanzaPage: {
      heroSlide1Title: "Nyanza",
      heroSlide1Subtitle: "Southern province former capital — rich history near Lake Kivu and Nyungwe.",
      heroSlide2Title: "Historical Hub",
      heroSlide2Subtitle: "Close to Lake Kivu and Nyungwe National Park, with consistent tourism demand.",
      marketHeading: "Nyanza Property Market",
      marketParagraph1:
        "Nyanza is a city in Rwanda's southern province, located along the road between Kigali and Lake Kivu. Once the capital of the Kingdom of Rwanda, the area is steeped in history and features the iconic King's Palace. It sits at the foot of the Nyungwe highlands and is a natural stopover for travelers heading to Lake Kivu and Nyungwe National Park.",
      marketParagraph2:
        "With affordable land prices and growing tourism infrastructure, Nyanza presents opportunities for boutique hotels, cultural retreats, and residential developments serving both local and international markets.",
      whyInvestHeading: "Why Invest in Nyanza",
      whyInvestItem1Title: "Cultural tourism",
      whyInvestItem1Description: "Historical sites and the King's Palace attract visitors year-round.",
      whyInvestItem2Title: "Gateway location",
      whyInvestItem2Description:
        "Natural stopover between Kigali, Lake Kivu, and Nyungwe creates steady foot traffic.",
      whyInvestItem3Title: "Moderate entry",
      whyInvestItem3Description: "Affordable land with better accessibility than Evane or Nyungwe.",
      whyInvestItem4Title: "Growing infrastructure",
      whyInvestItem4Description: "Improvements to the Kigali-Lake Kivu corridor benefit the area.",
    },
    areaEvanePage: {
      heroSlide1Title: "Evane",
      heroSlide1Subtitle: "Northern Rwanda hill station — scenic highlands between Kigali and Musanze.",
      heroSlide2Title: "Scenic Highlands",
      heroSlide2Subtitle:
        "Affordable land with growing interest from buyers seeking tranquil mountain living.",
      marketHeading: "Evane Property Market",
      marketParagraph1:
        "Evane is a district in Rwanda's northern province, nestled in the rolling hills between Kigali and Musanze. The area offers scenic landscapes and fresh mountain air, appealing to those seeking a quieter alternative to the capital while still benefiting from Kigali's growing economic influence.",
      marketParagraph2:
        "Land prices in Evane are among Rwanda's most accessible, presenting opportunities for residential developments and small-scale eco-lodges. The improving road network connecting it to Kigali and Musanze is driving gradual interest from local buyers and investors.",
      whyInvestHeading: "Why Invest in Evane",
      whyInvestItem1Title: "Low entry cost",
      whyInvestItem1Description: "Among the most affordable land prices in Rwanda's tourism zones.",
      whyInvestItem2Title: "Scenic appeal",
      whyInvestItem2Description: "Attractive for mountain retreats and wellness developments.",
      whyInvestItem3Title: "Improving connectivity",
      whyInvestItem3Description: "Better roads to Kigali and Musanze increasing accessibility.",
      whyInvestItem4Title: "Early market",
      whyInvestItem4Description: "Lower competition with potential for early mover advantages.",
    },
    aboutPageExtra: {
      heroEyebrow: "About Ever Retreat",
      heroTitle: "We Design, Build & Manage",
      heroTitleLight: "We Design,",
      heroTitleLine2: "Build &",
      heroTitleBold: "Manage",
      heroSubtitle:
        "Ever Retreat is an Rwandan-owned, Rwanda-based property company. 120 projects completed. 82 in-house professionals. Architecture, construction, villa management, and real estate - everything under one roof. The most complete property proposition in East Africa.",
      villasHeading: "120 Villas. Still Counting.",
      villasParagraph:
        "Ten years building across Kigali, Musanze, Rubavu, Huye, and Nyanza. Each project a testament to quality, design, and investment performance.",
      originEyebrow: "Our Story",
      originHeading: "Born From a Simple Idea",
      originHeadingLight: "Born From a",
      originHeadingBold: "Simple Idea",
      originParagraph1:
        "Ever Retreat was built on one principle: property investment in Rwanda deserves the same standards investors expect anywhere else in the world. No cutting corners. No disappearing contractors. No surprise costs.",
      originParagraph2:
        "What started as a small in-house team has grown into an 82-strong group of architects, engineers, project managers, interior designers, and property managers - all under one roof. From land sourcing to guest check-in, we handle architecture, construction, interior design, and villa management as a single integrated service, so clients deal directly with the people doing the work, not a chain of contractors and middlemen.",
      originParagraph3:
        "With 120 completed projects across Kigali, Musanze, Rubavu, Huye, and Nyanza over more than 10 years, Ever Retreat has built a track record investors can see and verify firsthand - from showcase villas on Lake Kivu to developments now underway across the country.",
      visionHeading: "Our Vision",
      visionText:
        "The most complete property proposition in East Africa - a Rwanda where property investment is simple, transparent, and fully managed from land sourcing through to guest check-in.",
      missionHeading: "Our Mission",
      missionText:
        "To deliver every villa through one in-house team - architecture, construction, and villa management - so owners and investors deal directly with the people doing the work, at every stage of the process.",
      teamStatsEyebrow: "Our Team",
      teamStatsHeading: "82 In-House Professionals",
      teamStatsParagraph:
        "Ever Retreat's in-house team spans leadership, architecture, hospitality and villa management, finance, site engineering, procurement, IT, and operations - all coordinated from Rwanda.",
    },
    buildCalculatorPage: {
      heroSlide1Title: "Build Cost Calculator",
      heroSlide1Subtitle:
        "Estimate construction costs, land prices, and projected rental returns for your Rwanda villa project.",
      heroSlide2Title: "Rwanda Pricing",
      heroSlide2Subtitle: "Accurate cost estimates for building in Kigali, Musanze, Rubavu, and beyond.",
      heroSlide3Title: "Smart Investment",
      heroSlide3Subtitle: "Built-in yield projections based on real Rwanda market data.",
      processHeading: "Our Build Process in Rwanda",
      processIntro:
        "Once you have your estimate, our end-to-end service handles everything from land acquisition to villa completion across Rwanda:",
      step1Title: "Land sourcing",
      step1Desc: "We find and assess properties in your target area (Kigali, Musanze, Rubavu, Nyungwe, Akagera).",
      step2Title: "Design & permits",
      step2Desc: "Architect-designed plans with full RDC permitting and compliance.",
      step3Title: "Construction",
      step3Desc: "Managed build with weekly progress updates, built for Rwanda's climate.",
      step4Title: "Rental setup",
      step4Desc: "Furnishing, photos, and listing on all platforms.",
      step5Title: "Ongoing management",
      step5Desc: "Full rental management and maintenance.",
    },
    choosingDeveloperPage: {
      heroSlide1Title: "Choosing a Developer",
      heroSlide1Subtitle: "Your guide to selecting the right partner for your Rwanda property investment.",
      heroSlide2Title: "Quality Matters",
      heroSlide2Subtitle: "The right developer makes the difference between profit and loss.",
      heroSlide3Title: "Proven Track Record",
      heroSlide3Subtitle: "120 completed projects across Kigali, Musanze, Rubavu, and Nyungwe.",
      redFlagsHeading: "Red Flags to Watch For",
      redFlagsIntro:
        "Rwanda has no shortage of builders offering low prices. But underqualified operators, permit issues, and abandoned projects are common. Here is what to look for:",
      flag1Title: "1. No Physical Office or Website",
      flag1Desc:
        "Always meet your developer in person. If they only operate online or avoid face-to-face meetings, walk away. We have offices in Kigali — walk in and meet the team.",
      flag2Title: "2. Vague or Missing Permits",
      flag2Desc:
        "Ask for copies of building permits (RDC), zoning clearance, and title verification. A reputable developer provides these upfront. Our in-house legal team handles all permit acquisition.",
      flag3Title: "3. No References or Completed Projects",
      flag3Desc:
        "Look for completed projects you can visit. Our showcase villas, B&P Ever Retreat Villa and Cottage at Lake Kivu, are completed projects you can see in person.",
      flag4Title: "4. Unrealistic Timelines or Prices",
      flag4Desc:
        "If a quote is significantly below market rate, they're likely cutting corners. Our fixed-price contracts guarantee no surprises, with payments tied to real construction milestones.",
      checklistEyebrow: "What to Look For",
      checklistHeading: "Checklist Before Committing",
      checklistItem1: "Physical office in Kigali",
      checklistItem2: "Licensed, experienced architects on staff",
      checklistItem3: "Completed projects you can visit",
      checklistItem4: "Transparent, fixed-price contracts",
      checklistItem5: "In-house legal and permit team",
      checklistItem6: "Google reviews with real client names",
      checklistItem7: "Full insurance coverage on projects",
      checklistItem8: "English-speaking project manager assigned",
      checklistItem9: "Weekly progress photo updates",
      checklistItem10: "10-year structural warranty included",
      beforeYouPayHeading: "Questions to Ask Before You Pay",
      developerQuestionsHeading: "Questions to Ask a Developer",
      roleComparisonEyebrow: "Know Who You're Hiring",
      roleComparisonHeading: "Agent vs Architect vs Builder vs Manager",
      roleColRole: "Role",
      roleColFocus: "Primary Focus",
      roleColPaidBy: "Typically Paid Via",
      roleColWatch: "What to Watch For",
      roleAgentName: "Agent",
      roleAgentFocus: "Finding and shortlisting land or property",
      roleAgentPaidBy: "Commission on sale price",
      roleAgentWatch: "No obligation to verify title, zoning, or construction quality",
      roleArchitectName: "Architect",
      roleArchitectFocus: "Design, drawings, and permit-ready plans",
      roleArchitectPaidBy: "Flat design fee or % of build cost",
      roleArchitectWatch: "Not responsible for construction quality or timelines",
      roleBuilderName: "Builder",
      roleBuilderFocus: "Physical construction from foundation to handover",
      roleBuilderPaidBy: "Fixed-price contract or cost-plus billing",
      roleBuilderWatch: "Vague contracts, no milestone payments, no warranty",
      roleManagerName: "Manager",
      roleManagerFocus: "Rental listing, guest service, and upkeep after handover",
      roleManagerPaidBy: "Percentage per booking",
      roleManagerWatch: "No reporting on occupancy, revenue, or maintenance spend",
      roleComparisonIntro:
        "In Rwanda these are often four different companies, and that's where the cracks appear. Each one can point at the others when something goes wrong.",
      roleComparisonClosing:
        "Ever Retreat is all four roles in one company. We design, build, sell, and manage the villa ourselves, so there's no one else to point at but us.",
      whyChooseHeading: "Why Choose Ever Retreat?",
      whyChooseParagraph1:
        "We built B&P Ever Retreat Villa and Cottage, our showcase villas at Lake Kivu, and have Virunga Villas underway in Musanze. See our developments for the current status of each.",
      whyChooseParagraph2:
        "Unlike solo operators, we handle everything in-house: architecture, construction, legal, permits, and rental management. One company, one point of contact.",
      stakesEyebrow: "Why This Decision Carries Real Risk",
      stakesHeadingLight: "The Stakes Are",
      stakesHeadingBold: "Higher Here",
      stakesParagraph1:
        "Choosing a developer for a Rwanda villa means trusting a company with a sum most buyers never spend in one go, often years before the finished product exists. The good operators build exactly what they promise. The bad ones leave behind half-finished shells, blown budgets, and land titles that were never properly checked.",
      stakesParagraph2:
        "The difference is not luck, it's due diligence. This guide walks through who actually does what, the warning signs worth walking away from, the paperwork to verify before you pay, and the questions that separate a real developer from a good salesperson. We build in Rwanda ourselves, so we know exactly where buyers get caught out.",
      flagsEyebrow: "Walk Away If You See These",
      legalEyebrow: "Verify Before You Pay",
      legalHeadingLight: "Licences, Legal",
      legalHeadingBold: "& Land Title",
      legalParagraph1:
        "Most horror stories trace back to paperwork no one checked. Foreigners cannot hold freehold land title in Rwanda under personal name, but can legally secure land through leasehold agreements of up to 99 years, administered by the Rwanda Land Management and Use Authority (RMLA), or through a company structure registered with the Rwanda Development Board (RDB). Getting that structure right before you pay is the single biggest thing to verify.",
      legalParagraph2:
        "Ask for copies of the building permit (RDC), zoning clearance, and title verification before any money moves — a reputable developer provides these upfront. Our in-house legal team handles title verification, zoning compliance, and all permit acquisition directly, rather than farming it out to a third party.",
      paymentEyebrow: "Your Biggest Off-Plan Fear",
      paymentHeadingLight: "Paying Before",
      paymentHeadingBold: "It Exists",
      paymentParagraph1:
        "Buying off-plan means paying for a villa that doesn't exist yet. The real protection isn't a promise, it's the payment structure: your instalments should be tied to real construction milestones you can verify, not to fixed calendar dates.",
      paymentParagraph2:
        "Every Ever Retreat contract is fixed-price from the start. The figure you sign is the figure you pay, payments release against work you can see with weekly progress photo updates, and the same team that builds your villa also manages it afterwards — so a defect gets fixed rather than argued over.",
      whyItMattersEyebrow: "Why It Matters",
      whyItMattersHeadingLight: "One Team Beats a",
      whyItMattersHeadingBold: "Fragmented Chain",
      whyItMattersParagraph1:
        "Every handoff in a build is a place where something can break. A separate agent, architect, builder, and manager means four contracts and four parties who can blame each other when the villa is late, over budget, or built wrong.",
      whyItMattersParagraph2:
        "Ever Retreat removes those seams. The same in-house team of 82+ professionals that designs your villa also builds it, sells it, and manages it afterwards, with our own project managers overseeing every trade on site. One company, one point of contact, for the whole project.",
      proofEyebrow: "How We De-Risk Your Build",
      proofHeadingLight: "Proof, Not",
      proofHeadingBold: "Promises",
      proofIntro:
        "The vetting questions above are the ones we built the company to answer. Here's what that looks like in practice.",
      proofItem1Title: "One Company, Every Discipline",
      proofItem1Desc:
        "Architecture, construction, legal, and villa management sit in-house, with 82+ professionals accountable for your villa from design to handover.",
      proofItem2Title: "Rwandan-Owned and Accountable",
      proofItem2Desc:
        "A Rwanda-based team, transparent pricing, and a management team that answers to you directly, not through a chain of subcontractors.",
      proofItem3Title: "Fixed-Price, Milestone Payments",
      proofItem3Desc:
        "The price is locked at signing. Payments release against real construction milestones you can verify, not against a calendar.",
      proofItem4Title: "A Track Record You Can Visit",
      proofItem4Desc:
        "120 completed projects across Kigali, Musanze, Rubavu, Huye, and Nyanza, including showcase villas you can walk through in person.",
      proofItem5Title: "10+ Years Building in Rwanda",
      proofItem5Desc:
        "A decade of construction experience and 8 developments across the country, not a company that appeared overnight to catch the off-plan wave.",
      proofItem6Title: "Built, Then Managed",
      proofItem6Desc:
        "The team that builds your villa also runs it afterwards, from listing and guest service to maintenance, so accountability doesn't end at handover.",
      developmentsSubheadingLight: "Developments You Can",
      developmentsSubheadingBold: "Vet Yourself",
      developmentsSubIntro: "Real projects, available to see now. Walk through one before you decide.",
      faq1Question: "What if I already own land in Rwanda?",
      faq1Answer:
        "We offer development partnerships for landowners: our team designs, builds, and can manage a villa development on land you already own, under the same fixed-price, in-house model we use for our own projects.",
      faq2Question: "Which areas does Ever Retreat build in?",
      faq2Answer:
        "Our developments and land sourcing currently cover Kigali, Musanze, Rubavu, Nyungwe, Huye, and Nyanza. Each area is evaluated for tourism demand, access, and long-term land value before we commit to a project there.",
      faq3Question: "What happens if my developer disappears mid-project?",
      faq3Answer:
        "That risk is exactly why the checklist above matters: a registered company with a physical office, completed projects you can visit, and fixed-price contracts with milestone payments means you're never paying in full for work that hasn't happened. Every Ever Retreat contract ties payment to verified progress, and our in-house team has completed 120 projects over 10+ years without handing a build off to a third party.",
      closingEyebrow: "Talk to Ever Retreat",
      closingHeadingLight: "Vet Us the",
      closingHeadingBold: "Same Way",
      closingParagraph:
        "Bring the checklist. Ask us the hard questions, see the paperwork, and walk through a finished villa. If we're the right fit, we'll show you exactly how we work.",
      closingListItem1: "A straight answer on permits, contracts, and warranty",
      closingListItem2: "Completed projects you can visit in person",
      closingListItem3: "A fixed-price quote with milestone payments, in writing",
      closingCtaPrimary: "See Our Track Record",
      closingCtaSecondary: "Chat on WhatsApp",
    },
    fractionalOwnershipPage: {
      heroSlide1Title: "Fractional Ownership",
      heroSlide1Subtitle: "Own a share of premium Rwanda villas without the full cost.",
      heroSlide2Title: "Luxury Access",
      heroSlide2Subtitle: "Premium villas in Kigali, Musanze, Rubavu, and Nyungwe.",
      heroSlide3Title: "Smart Investment",
      heroSlide3Subtitle: "Rental income, shared costs, and professional management.",
      howItWorksEyebrow: "How It Works",
      howItWorksHeadingLine1: "Co-Own Luxury.",
      howItWorksHeadingLine2: "Pay Less. Earn More.",
      howItWorksParagraph1:
        "Fractional ownership lets you own a percentage of a premium villa in Rwanda's most desirable locations. Typically 1/2, 1/3, or 1/4 shares, each granting you exclusive weeks of use plus rental income when you're not there.",
      howItWorksParagraph2: "Our current offerings include shares in Nyungwe Eco-Lodges in the rainforest.",
      viewSharesButton: "View Available Shares",
      enquireNowButton: "Enquire Now",
      occupancyBadgeValue: "95%",
      occupancyBadgeLabel: "Occupancy Rate",
      sharesEyebrow: "Investment Opportunities",
      sharesHeading: "Available Shares",
      sharesIntro:
        "Choose from our current fractional ownership offerings in Rwanda's most sought-after locations.",
      shareWeeksValue: "13 weeks",
      bestValueBadge: "Best Value",
      ecoLuxuryBadge: "Eco-Luxury",
      labelShare: "Share",
      labelWeeksPerYear: "Weeks/Year",
      labelPrice: "Price",
      labelYield: "Yield",
      enquireAboutShareButton: "Enquire About This Share",
      benefitsEyebrow: "Why Choose Fractional",
      benefitsHeading: "Key Benefits",
      benefitsIntro: "Fractional ownership offers a smarter way to invest in Rwanda's luxury villa market.",
      benefit1Title: "Lower Entry Cost",
      benefit1Desc: "Own luxury for a fraction of the full price — typically 1/2, 1/3, or 1/4 shares.",
      benefit2Title: "Rental Income",
      benefit2Desc:
        "Earn rental returns when you're not using your villa — all properties achieve 90-95% occupancy.",
      benefit3Title: "Full Management",
      benefit3Desc:
        "Our team handles everything: maintenance, cleaning, guest communication, and dynamic pricing.",
      benefit4Title: "Shared Costs",
      benefit4Desc: "Maintenance, taxes, and insurance are split proportionally among all co-owners.",
      benefit5Title: "Guaranteed Usage",
      benefit5Desc: "Each share grants you exclusive weeks of use every year, scheduled in advance.",
      benefit6Title: "Exit Flexibility",
      benefit6Desc: "Shares can be sold or transferred after a minimum holding period of 12-24 months.",
      glanceEyebrow: "At a Glance",
      glanceHeading: "Fractional Ownership: The Quick Terms",
      glanceShareLabel: "Share Sizes",
      glanceShareValue: "1/2, 1/3, or 1/4 shares",
      glanceUsageLabel: "Guaranteed Usage",
      glanceUsageValue: "Set weeks per year, scheduled in advance",
      glanceOccupancyLabel: "Occupancy Rate",
      glanceOccupancyValue: "90-95%",
      glanceExitLabel: "Minimum Hold Period",
      glanceExitValue: "12-24 months before sale or transfer",
      glanceCostsLabel: "Costs & Management",
      glanceCostsValue: "Maintenance, taxes, and insurance split proportionally; fully managed by our team",
      tiersEyebrow: "Investment Scenarios",
      tiersHeading: "What a Share Costs",
      tiersIntro:
        "Our current listing is a 1/4 share in Nyungwe Eco-Lodges at $210,000. The larger shares below are calculated pro-rata from that listed price, not separately priced offerings, so treat them as indicative until confirmed with our team.",
      tier1Label: "1/4 Share",
      tier1Price: "$210,000",
      tier1Weeks: "13 weeks/year",
      tier1Note: "Current listed price for Nyungwe Eco-Lodges.",
      tier2Label: "1/2 Share",
      tier2Price: "$420,000",
      tier2Weeks: "26 weeks/year",
      tier2Note: "Calculated pro-rata from the 1/4-share listing.",
      tier3Label: "Full Ownership",
      tier3Price: "$840,000",
      tier3Weeks: "Year-round",
      tier3Note: "Calculated pro-rata; contact us to confirm full-ownership availability.",
      comparisonEyebrow: "Compare",
      comparisonHeading: "Fractional vs Full Ownership",
      comparisonIntro: "The same villa, two ways to own it. Here's how they differ structurally.",
      comparisonFeatureLabel: "Feature",
      comparisonFractionalLabel: "Fractional Ownership",
      comparisonFullLabel: "Full Ownership",
      comparisonRows: [
        { feature: "Upfront Cost", fractional: "A fraction of the full price (1/2, 1/3, or 1/4 share)", full: "100% of the purchase price" },
        { feature: "Usage", fractional: "Set weeks per year, scheduled in advance", full: "Unlimited, year-round access" },
        { feature: "Rental Income", fractional: "Shared income during your off-weeks", full: "Optional, if you self-manage or list it yourself" },
        { feature: "Maintenance & Costs", fractional: "Split proportionally among co-owners", full: "Fully the owner's responsibility" },
        { feature: "Management", fractional: "Included, handled by Ever Retreat", full: "Owner arranges their own management" },
        { feature: "Exit", fractional: "Sell or transfer your share after a 12-24 month hold", full: "Sell the property outright at any time" },
      ],
      fitEyebrow: "Is This Right for You?",
      fitHeading: "Check the Fit",
      fitIntro: "Fractional ownership suits some investors far better than others. Be honest with yourself before enquiring.",
      goodFitHeading: "This Could Be Right for You If",
      goodFitItems: [
        "You want a holiday home in Rwanda without needing it year-round",
        "You're comfortable coordinating usage weeks with co-owners",
        "You want rental income without managing bookings yourself",
        "You prefer a lower upfront cost than a full villa purchase",
      ],
      notFitHeading: "Consider Full Ownership Instead If",
      notFitItems: [
        "You want unrestricted, year-round access to the property",
        "You plan to live in the villa full-time",
        "You want sole decision-making over the property",
        "You want to renovate or modify the villa without co-owner agreement",
      ],
      crossPromoHeading: "Want to hear from current owners or meet the team behind it?",
      seeTestimonialsLabel: "Read Client Testimonials",
      meetTeamLabel: "Meet Our Team",
    },
    referAFriendPage: {
      heroEyebrow: "Ever Retreat Rwanda",
      heroTitle: "Refer a Friend",
      heroSubtitle: "Share the Ever Retreat experience and both benefit.",
      contentHeading: "Refer a Friend, Get Rewarded",
      contentParagraph:
        "When your friend builds a villa with Ever Retreat and you refer them, both of you benefit. As a thank you, you receive a USD $5,000 credit towards your construction costs, and your friend receives priority scheduling and a complimentary design consultation.",
      howItWorksHeading: "How It Works",
      step1: "Submit your friend's details via the form below or contact us directly.",
      step2: "Your friend mentions your referral when they enquire about their project.",
      step3: "Both credits are applied once your friend's project commences construction.",
      termsHeading: "Terms",
      term1: "The referrer must have an active or completed project with Ever Retreat",
      term2: "The referred friend must be new to Ever Retreat",
      term3: "Credits are applied at the start of construction phase",
      term4: "Program closes when either party reaches final payment",
      faqHeading: "Referral Program FAQ",
      faqItems: [
        {
          question: "How much is the referral credit?",
          answer: "You receive a USD $5,000 credit towards your construction costs once your friend's project commences construction, and your friend receives priority scheduling and a complimentary design consultation.",
        },
        {
          question: "Does my friend need to be new to Ever Retreat?",
          answer: "Yes. The referred friend must be new to Ever Retreat, and the referrer must have an active or completed project with us.",
        },
        {
          question: "When is the credit applied?",
          answer: "Credits are applied at the start of the construction phase, once your friend's project commences. The program closes when either party reaches final payment.",
        },
      ],
    },
    villaToursPage: {
      heroEyebrow: "Ever Retreat Rwanda",
      heroTitle: "Villa Tours",
      heroSubtitle: "Schedule a private viewing of our completed developments and off-plan projects across Rwanda.",
      scheduleEyebrow: "Schedule a Tour",
      scheduleHeading: "Experience Our Developments Firsthand",
      scheduleHeadingLight: "Experience Our",
      scheduleHeadingBold: "Developments Firsthand",
      scheduleParagraph:
        "We arrange private tours of our completed villas and off-plan developments. See the quality of our craftsmanship, the detail in our designs, and the lifestyle our villas offer.",
      onGroundTitle: "On the Ground",
      onGroundDesc:
        "Visit our office in Kigali. Meet our team, browse development plans, and discuss your project in person.",
      virtualTourTitle: "Virtual Tour",
      virtualTourDesc:
        "Prefer to explore remotely? We can arrange private virtual tours of our developments via video call.",
      bookTourButton: "Book a Villa Tour",
    },
    serviceArchitecturePage: {
      heroSlide1Title: "Architecture & Design",
      heroSlide1Subtitle: "Tropical modern villas designed for Rwanda's climate and rental performance.",
      heroSlide2Title: "Bespoke Design",
      heroSlide2Subtitle: "Custom architecture built for Rwanda's terrain, climate, and investment returns.",
      heroSlide3Title: "50% Off Design",
      heroSlide3Subtitle: "When you build with us, our in-house architects design your villa at half price.",
      approachEyebrow: "Our Approach",
      approachHeading: "Tropical Modern. Built for Rwanda.",
      approachParagraph1:
        "Our in-house architecture team has designed 120 eco-lodges and villas across Rwanda. Every plan balances modern aesthetics with Rwanda's highland climate, seasonal rainfall patterns, and local building traditions.",
      approachParagraph2:
        "We design for rental performance as much as beauty. Kitchens are positioned for service access, bedrooms face away from road noise, and every villa includes a dedicated laundry and staff area.",
      processEyebrow: "Design Process",
      processHeading: "5-Stage Design Process",
      stage1Title: "Site Analysis",
      stage1Desc: "Topography, orientation, views, and regulatory constraints.",
      stage2Title: "Concept Design",
      stage2Desc: "Block diagrams, massing studies, and 3D concepts.",
      stage3Title: "Design Development",
      stage3Desc: "Detailed drawings, material palette, and finishes.",
      stage4Title: "3D Renders",
      stage4Desc: "Photorealistic renders and virtual walkthroughs.",
      stage5Title: "Construction Docs",
      stage5Desc: "Full working drawings and permit set ready for build.",
      philosophyHeading: "Our Design Philosophy",
      philosophyParagraph:
        "We design villas that work year-round. B&P Ever Retreat Villa at Lake Kivu uses natural ventilation to combat humidity, and Virunga Villas near the volcanoes incorporates stone from local quarries.",
      projectsHeading: "Projects",
      projectBpDescription: "showcase villa at Lake Kivu",
      projectCottageDescription: "showcase villa at Lake Kivu",
      projectVirungaDescription: "mountain retreat near Volcanoes NP, in design",
      pricingEyebrow: "Investment",
      pricingHeading: "Design Pricing",
      pricingIntro:
        "Our architectural design fee is a flat rate per villa, covering all 5 stages from site analysis to construction documents.",
      pricingColService: "Service",
      pricingColPrice: "Price",
      pricingColNotes: "Notes",
      pricingRow1Label: "Design Only",
      pricingRow1Note: "Full 5-stage architectural design package for a single villa.",
      pricingRow2Label: "Design + Build",
      pricingRow2Note: "50% off design fees when you build the villa with Ever Retreat.",
      pricingNote:
        "Design pricing above is per villa. Construction is quoted separately — see our Construction pricing.",
      galleryEyebrow: "Our Work",
      galleryHeading: "Designs Brought to Life",
      galleryIntro: "A look at the developments our in-house architecture team has designed across Rwanda.",
      crossLinksEyebrow: "Next Steps",
      crossLinksHeading: "Related Services",
      crossLinksCta: "Learn More",
      crossLinkCalculatorTitle: "Build Cost Calculator",
      crossLinkCalculatorDesc: "Estimate your total build cost and rental returns before you commit to a design.",
      checklistItem1: "Premium 3D renders and walkthroughs",
      checklistItem2: "Full floorplans and elevations",
      checklistItem3: "Construction documentation package",
      checklistItem4: "Interior layout and flow optimisation",
      checklistItem5: "Rwanda climate and zoning compliance",
      checklistItem6: "Direct handoff to our in-house construction team",
      checklistItem7: "Design revisions included",
      advantageEyebrow: "Our Advantage",
      advantageHeadingLight: "What Sets Our",
      advantageHeadingBold: "Architecture Apart",
      advantageParagraph1:
        "Most architecture firms design beautiful buildings. The problem is that beauty alone does not generate rental income, survive Rwanda's rainy season, or stay within budget. We approach every project as both architects and investment advisors.",
      advantageParagraph2:
        "Every villa we draw is designed with rental performance, local climate, and real construction costs in mind from the first sketch — not as an afterthought once the design is already finished.",
      advantageItem1: "Our architects work alongside our construction team from day one",
      advantageItem2: "Cross-ventilation and rainfall management built into every design",
      advantageItem3: "We design to budget — no concept that cannot actually be built",
      advantageItem4: "Material selection rated for humidity and highland UV exposure",
      advantageItem5: "82 in-house professionals across design, construction, and management",
      stylesEyebrow: "Architectural Range",
      stylesHeadingLight: "Our Portfolio of",
      stylesHeadingBold: "Styles",
      stylesIntro:
        "We do not impose a single house style. Your villa should reflect your site, your climate, and your investment goals. Here are the four design directions our clients request most.",
      style1Title: "Tropical Modern",
      style1Desc: "Open-plan living, cross-ventilation, and indoor-outdoor flow suited to Rwanda's highland climate.",
      style2Title: "Contemporary Rwandan",
      style2Desc: "Locally-sourced stone and timber with pitched rooflines built for seasonal rainfall.",
      style3Title: "Eco-Lodge",
      style3Desc: "Natural materials and low-impact design that blends into national-park-adjacent sites.",
      style4Title: "Minimalist Retreat",
      style4Desc: "Clean lines and floor-to-ceiling glazing framing views of Lake Kivu or the volcanoes.",
      oneTeamEyebrow: "One Team, Zero Gaps",
      oneTeamHeadingLight: "From Design",
      oneTeamHeadingBold: "to Build",
      oneTeamParagraph1:
        "The biggest risk in any villa project is the gap between architect and builder — a design that looks beautiful on paper but is expensive or impractical to actually build. Ever Retreat closes that gap by keeping design and construction under one roof.",
      oneTeamParagraph2:
        "The same in-house team that draws your villa also builds it, so every design decision is made with real Rwanda construction costs, materials, and timelines in mind from day one — not discovered after you've already paid for permits.",
      closingEyebrow: "Start Your Design",
      closingHeadingLight: "Ready to",
      closingHeadingBold: "Build?",
      closingParagraph:
        "Share your brief with our architecture team. We'll come back to you with initial thoughts and a design direction within a few days.",
      closingCtaPrimary: "Enquire Now",
      closingCtaSecondary: "WhatsApp Us",
      faq1Question: "What does the design process look like?",
      faq1Answer:
        "We start with site analysis, then move through concept design, design development, 3D renders, and final construction documentation. You have input and sign-off at every stage.",
      faq2Question: "Can you design for a plot I have already found?",
      faq2Answer:
        "Yes. If you already own land, we design around your plot's dimensions, orientation, and local zoning requirements. If you don't yet have land, our land sourcing team can help you find a suitable site first.",
      faq3Question: "How long does architectural design take?",
      faq3Answer:
        "Design timelines vary by villa size and complexity. Get in touch with your brief and we'll come back with a realistic timeline for your specific project.",
    },
    serviceConstructionPage: {
      heroSlide1Title: "Construction",
      heroSlide1Subtitle: "End-to-end build management with Rwanda's leading construction team.",
      heroSlide2Title: "Quality Build",
      heroSlide2Subtitle: "Fixed-price contracts from foundation to handover. 95% on-time completion.",
      heroSlide3Title: "Proven Track Record",
      heroSlide3Subtitle: "120 completed projects across Kigali, Musanze, Rubavu, and Nyungwe.",
      approachEyebrow: "End-to-End Build Management",
      approachHeadingLight: "Built for Rwanda's",
      approachHeadingBold: "Terrain & Climate",
      approachParagraph1:
        "Constructing villas in Rwanda requires understanding of laterite soil, seasonal rainfall patterns, and seismic considerations. Our 82-strong in-house team uses reinforced concrete structures with laterite-adapted foundations, proper drainage, and climate-responsive design — all included in our fixed-price contracts.",
      approachParagraph2:
        "From B&P Ever Retreat Villa at Lake Kivu to Virunga Villas near the volcanoes, every project is managed by certified engineers with local expertise.",
      introChecklistItem1: "Fixed-price contracts, payments tied to milestones",
      introChecklistItem2: "Weekly photo progress reports",
      introChecklistItem3: "One point of contact throughout your build",
      introChecklistItem4: "Certified engineers on every project",
      introChecklistItem5: "10-year structural warranty included",
      introChecklistItem6: "Materials meet Rwandan building standards",
      processHeading: "Construction Timeline",
      step1Title: "Site preparation",
      step1Desc: "Clearing, excavation, and foundation layout. Laterite soil stabilisation and drainage.",
      step1Duration: "3-4 weeks",
      step2Title: "Structural work",
      step2Desc: "Reinforced concrete frame, roof structure, and waterproofing suitable for seasonal rains.",
      step2Duration: "9-11 weeks",
      step3Title: "Mechanical & electrical",
      step3Desc: "Plumbing, electrical systems, and solar power integration.",
      step3Duration: "5-7 weeks",
      step4Title: "Finishes",
      step4Desc: "Locally-sourced stone, hardwood, and tropical-appropriate materials.",
      step4Duration: "7-9 weeks",
      step5Title: "Final inspection",
      step5Desc: "Quality control, snagging, and handover documentation.",
      step5Duration: "2-3 weeks",
      pricingEyebrow: "Build Cost",
      pricingHeading: "Rwanda Building Costs",
      pricingIntro:
        "Fixed-price contracts by finish level, based on our build cost calculator. Land and design are quoted separately.",
      tierStandardDesc: "Quality build to Rwandan code, functional finishes throughout.",
      tierPremiumDesc: "Our most-requested tier — upgraded materials and detailing.",
      tierLuxuryDesc: "Premium materials and fittings for top-tier rental performance.",
      pricingDisclaimer:
        "Prices are indicative and exclude land costs, permits, and interior furnishing — see what's quoted separately below. Get in touch for a fixed quote specific to your site and finish level.",
      pricingCalculatorCta: "Try the Build Calculator",
      atGlanceEyebrow: "Scope",
      atGlanceHeading: "What Is Included in Your Build",
      atGlanceItems: [
        "82-strong in-house construction team",
        "6-9 month average build timeline",
        "95% on-time completion rate",
        "Fixed-price contracts, payments tied to milestones",
        "Certified engineers on every project",
        "Materials meet Rwandan building standards",
      ],
      includedLabel: "Included in Construction Cost",
      quotedSeparatelyLabel: "Quoted Separately",
      quotedSeparatelyItems: [
        "Land acquisition (see Land Sourcing)",
        "Architectural design and permits (see Architecture — 50% off when you build with us)",
        "Interior design and furnishing (see Interior Design)",
        "Ongoing villa rental management (see Villa Management)",
      ],
      whyChooseEyebrow: "Why Choose Us",
      whyChooseHeadingLight: "Why Choose Our",
      whyChooseHeadingBold: "Construction Company",
      whyChooseParagraph1:
        "Rwanda has no shortage of builders offering low prices, but underqualified operators, permit issues, and abandoned projects are common. Our 82-strong in-house team designs, builds, and manages every villa under one roof, so there are no subcontractor handoffs and no one else to answer for a problem on site.",
      whyChooseParagraph2:
        "Every contract is fixed-price with payments tied to real construction milestones, not calendar dates, and every project is managed by certified engineers with local expertise.",
      whyChooseItem1: "82-strong in-house construction team",
      whyChooseItem2: "Fixed-price contracts, payments tied to milestones",
      whyChooseItem3: "Weekly photo progress reports",
      whyChooseItem4: "One point of contact throughout your build",
      whyChooseItem5: "95% on-time completion rate",
      whyChooseItem6: "In-house legal team for permits and compliance",
      remoteEyebrow: "Remote Build Management",
      remoteHeadingLight: "Build From",
      remoteHeadingBold: "Anywhere",
      remoteParagraph1:
        "Many of our clients are diaspora Rwandans or foreign investors managing their build from overseas. You do not need to be on-site to build with us — our certified project managers oversee every stage and keep you updated the whole way through.",
      remoteParagraph2:
        "Updates come to you directly over WhatsApp, the same channel we use to manage enquiries and site communication across every one of our projects, so you are never left chasing a status update.",
      remoteItem1: "One point of contact throughout your build",
      remoteItem2: "Weekly photo progress reports",
      remoteItem3: "Real-time budget tracking",
      remoteItem4: "Site visits welcome at key milestones",
      fearEyebrow: "Common Concerns",
      fearHeadingLight: "How We Build",
      fearHeadingBold: "Differently",
      commonFearLabel: "Common Fear",
      fear1Label: "Unlicensed builders",
      fear1Rebuttal:
        "Every project is managed by certified engineers, and our in-house team has completed 120 projects across Rwanda over more than 10 years.",
      fear2Label: "Cost overruns",
      fear2Rebuttal:
        "Fixed-price contracts mean the price you sign is the price you pay, with payments released against real construction milestones, not fixed calendar dates.",
      fear3Label: "Poor communication",
      fear3Rebuttal:
        "You get weekly photo progress reports and one point of contact throughout your build, backed by a team of 82 in-house professionals.",
      fear4Label: "Quality shortcuts",
      fear4Rebuttal:
        "Every build uses reinforced concrete structures and materials that meet Rwandan building standards, with quality control and snagging before handover.",
      fear5Label: "No accountability after handover",
      fear5Rebuttal:
        "Every structural build is backed by a 10-year structural warranty, and our team stays reachable from our physical offices in Kigali.",
      materialsEyebrow: "Build Quality",
      materialsHeading: "Premium Materials. No Shortcuts.",
      materialsIntro:
        "We do not cut corners on structure or foundation. Every Ever Retreat build follows the same standard, regardless of finish tier.",
      materialsCategoryTitle: "Structure & Foundation",
      materialsCategoryDesc:
        "Reinforced concrete structures on laterite-adapted foundations with proper drainage, waterproofed for Rwanda's seasonal rainfall, and finished with locally-sourced stone and hardwood — the same standard used from B&P Ever Retreat Villa to Virunga Villas.",
      caseStudyEyebrow: "Real Results",
      caseStudyHeading: "See a Real Build from Start to Finish",
      caseStudyParagraph:
        "B&P Ever Retreat Villa at Lake Kivu was built and is managed entirely by our in-house team, from land acquisition through to handover and rental income.",
      caseStudyCta: "Read the Case Study",
      faq1Question: "How much does it cost to build a villa in Rwanda?",
      faq1Answer:
        "Construction costs range from $1,000/sqm for a Standard finish to $1,500/sqm for Premium and $2,200/sqm for Luxury, based on our build cost calculator. Land, design, and interior furnishing are quoted separately.",
      faq2Question: "How long does construction take?",
      faq2Answer:
        "Construction itself typically takes 6-9 months once we break ground. Including design approval and permitting beforehand, most villa builds take 12 to 18 months from design approval to handover.",
      faq3Question: "What's included in the build contract?",
      faq3Answer:
        "Your fixed-price contract covers site preparation, structural work, mechanical and electrical systems, finishes, and final inspection, using materials that meet Rwandan building standards. Land, architectural design and permits, interior design, and ongoing villa management are quoted separately.",
      builtManagedEyebrow: "After Handover",
      builtManagedHeadingLight: "Built and",
      builtManagedHeadingBold: "Managed",
      builtManagedParagraph1:
        "Construction does not have to end your relationship with us. The same company that built your villa can manage it for rental income afterward, with fees starting from 20% per booking.",
      builtManagedParagraph2:
        "Because our construction and villa management teams sit under one roof, there is no finger-pointing between a separate builder and manager if something needs attention after handover.",
      builtManagedItem1: "We know the villa inside out because we built it",
      builtManagedItem2: "No finger-pointing between separate builder and manager",
      builtManagedItem3: "Management fees from 20% per booking",
      builtManagedItem4: "One company, one point of contact, from foundation to booking",
      closingEyebrow: "Ready to Build?",
      closingHeadingLight: "Get a",
      closingHeadingBold: "Quote",
      closingParagraph:
        "Share your brief with our construction team over WhatsApp. We'll come back to you with initial thoughts and next steps.",
      closingCtaWhatsApp: "WhatsApp Us",
    },
    serviceVillaManagementPage: {
      heroSlide1Title: "Villa Management",
      heroSlide1Subtitle: "Hands-off rental income across Rwanda's top destinations.",
      heroSlide2Title: "Full Service",
      heroSlide2Subtitle: "From listings to guest communication, we handle everything.",
      heroSlide3Title: "Proven Results",
      heroSlide3Subtitle: "85%+ average occupancy. 16-20% gross yields across all properties.",
      statLabelVillasManaged: "Villas Managed",
      statLabelOccupancy: "Avg Occupancy",
      statLabelGuestSupport: "Guest Support",
      introEyebrow: "Complete Rental Service",
      introHeadingLight: "Hands-Off",
      introHeadingBold: "Income",
      introParagraph1:
        "Whether you own a villa at Lake Kivu, a mountain retreat near the volcanoes, or a city home in Kigali, our management team handles everything — professional photography, listings on all platforms, dynamic pricing, guest communication, cleaning, and maintenance and repair coordination.",
      introParagraph2:
        "We manage 120 properties across Kigali, Musanze, Rubavu, Nyungwe, and Akagera with an average occupancy of 85% and gross yields of 16-20%. Management fees start from 20% per booking, with no lock-in contracts and no setup fees.",
      introChecklistItem1: "Professional photography and staging",
      introChecklistItem2: "Listing on Airbnb, VRBO, Booking.com, and local platforms",
      introChecklistItem3: "Dynamic pricing with daily adjustments",
      introChecklistItem4: "Guest communication and 24/7 support",
      introChecklistItem5: "Professional cleaning between bookings",
      introChecklistItem6: "Monthly performance reports and an owner portal",
      introChecklistItem7: "Management fees from 20% per booking, no lock-in contracts",
      yieldEyebrow: "Rwanda Rental Income",
      yieldHeadingLight: "What Can Your",
      yieldHeadingBold: "Villa Earn?",
      yieldIntro:
        "Yield depends on location, size, and management quality. Below are indicative annual gross yields by area, based on our land and investment market data.",
      yieldColArea: "Area",
      yieldColYield: "Est. Annual Yield",
      yieldColOccupancy: "Avg Occupancy",
      yieldSourceNote:
        "Figures are indicative estimates based on our land and investment market data, not guarantees. Get a projection for your own villa with our Build Calculator.",
      yieldCta: "Try the Build Calculator",
      includedEyebrow: "Full-Service Management",
      includedHeadingLight: "What Ever Retreat",
      includedHeadingBold: "Management Includes",
      includedIntro:
        "Our management fee starts from 20% per booking and covers every part of your villa's rental operation, from listing to reporting.",
      included1Title: "Listing & Photography",
      included1Desc:
        "Professional photography and staging, with listings on Airbnb, VRBO, Booking.com, and local platforms.",
      included2Title: "Guest Communication",
      included2Desc: "Guest communication and 24/7 support, from initial enquiry through to checkout.",
      included3Title: "Dynamic Pricing",
      included3Desc:
        "Daily pricing adjustments based on demand and season, so nightly rates keep pace with the market.",
      included4Title: "Cleaning & Turnover",
      included4Desc: "Professional cleaning between every booking, so your villa is guest-ready for every arrival.",
      included5Title: "Maintenance & Repairs",
      included5Desc:
        "Maintenance and repair coordination from a team that knows the property, not a subcontractor meeting it for the first time.",
      included6Title: "Financial Reporting",
      included6Desc: "Monthly performance reports and an owner portal for live booking and revenue data.",
      onboardingEyebrow: "From Handover to First Booking",
      onboardingHeadingLight: "How We Take Over",
      onboardingHeadingBold: "Your Villa",
      onboardingIntro: "Here is what happens from the day you sign with us to your villa's first booking.",
      onboardStep1Title: "Property Assessment",
      onboardStep1Desc:
        "We visit your villa, inspect its condition, photograph every room, and flag any maintenance or presentation issues to address before going live.",
      onboardStep2Title: "Photography & Listing",
      onboardStep2Desc:
        "Professional photography captures your villa at its best, and we write optimised listings for Airbnb, VRBO, Booking.com, and local platforms.",
      onboardStep3Title: "Pricing & Calendar Setup",
      onboardStep3Desc:
        "We set baseline pricing, configure dynamic pricing rules, and build out your booking calendar.",
      onboardStep4Title: "Team Briefing",
      onboardStep4Desc:
        "Our housekeeping, maintenance, and guest communication teams are briefed on your property, access, and any special instructions.",
      onboardStep5Title: "Go Live & Ongoing Optimisation",
      onboardStep5Desc:
        "Listings go live across all platforms, and we monitor performance closely, refining pricing and content as bookings come in.",
      comparisonEyebrow: "The Difference",
      comparisonHeadingLight: "Self-Managed vs",
      comparisonHeadingBold: "Professionally Managed",
      comparisonIntro: "Many villa owners start by managing their own rental. Here is what changes with professional management.",
      selfManagedLabel: "Self-Managed",
      managedLabel: "Ever Retreat Managed",
      selfManagedItem1: "Guest messages at all hours, including your own timezone",
      selfManagedItem2: "Finding reliable cleaners and maintenance help yourself",
      selfManagedItem3: "Static pricing that can leave money on the table",
      selfManagedItem4: "No visibility on comparable rates or occupancy nearby",
      selfManagedItem5: "Handling complaints and reviews alone",
      selfManagedItem6: "Coordinating maintenance remotely, especially from overseas",
      managedItem1: "24/7 guest communication and support",
      managedItem2: "In-house maintenance and repair coordination",
      managedItem3: "Dynamic pricing with daily adjustments",
      managedItem4: "Professional photography and multi-platform listings",
      managedItem5: "Professional cleaning between every booking",
      managedItem6: "Monthly performance reports and an owner portal",
      whyChooseEyebrow: "Why Choose Us",
      whyChooseHeadingLight: "Why Choose Our",
      whyChooseHeadingBold: "Management Company",
      whyChooseParagraph1:
        "Most villa management companies only manage. We design, build, and manage. Because our own 82-strong in-house team constructs many of the villas we manage, we understand each property at a structural level — what maintenance is preventative and what is urgent.",
      whyChooseParagraph2:
        "Management fees start from 20% per booking, with no lock-in contracts and no setup fees, so we keep your business by performing, not by locking you into a long agreement.",
      whyChooseItem1: "82-strong in-house team across design, construction, and management",
      whyChooseItem2: "Design, build, and manage under one roof",
      whyChooseItem3: "120 properties managed across Kigali, Musanze, Rubavu, Nyungwe, and Akagera",
      whyChooseItem4: "85%+ average occupancy across the managed portfolio",
      whyChooseItem5: "Monthly performance reports and an owner portal for full transparency",
      whyChooseItem6: "No lock-in contracts, no setup fees",
      builtManagedEyebrow: "The Full Lifecycle",
      builtManagedHeadingLight: "Built and",
      builtManagedHeadingBold: "Managed",
      builtManagedParagraph1:
        "Ever Retreat is one of the few companies in Rwanda that can take a villa from an empty plot to a fully managed, income-generating property, with architecture, construction, and management all under one roof.",
      builtManagedParagraph2:
        "When our management team takes over a villa our own construction team built, they already know the layout, the materials, and the systems, so maintenance is faster and more effective because nothing is a mystery.",
      builtManagedItem1: "We know the villa inside out because we built it",
      builtManagedItem2: "No finger-pointing between a separate builder and manager",
      builtManagedItem3: "Management fees from 20% per booking",
      builtManagedItem4: "One company, one point of contact, from foundation to booking",
      faq1Question: "How much does villa management cost?",
      faq1Answer:
        "Management fees start from 20% per booking, covering listing and photography, guest communication, cleaning, maintenance coordination, dynamic pricing, and monthly financial reporting, with no separate setup fees.",
      faq2Question: "What's included in villa management?",
      faq2Answer:
        "Everything from professional photography and listings on Airbnb, VRBO, Booking.com, and local platforms, to daily dynamic pricing, 24/7 guest communication, cleaning between bookings, and maintenance coordination. You also get monthly performance reports and an owner portal for live booking and revenue data.",
      faq3Question: "How do payouts and reporting work?",
      faq3Answer:
        "You receive a monthly performance report through your owner portal covering occupancy, revenue, and any maintenance activity. Get in touch with our team for the specific payout schedule for your property.",
      closingEyebrow: "Ready to Hand Over?",
      closingHeadingLight: "Let Us",
      closingHeadingBold: "Manage It",
      closingParagraph:
        "Whether your villa is newly built or already operating, share the details with our management team over WhatsApp and we'll come back with next steps. No lock-in contracts, no setup fees.",
      closingCtaWhatsApp: "WhatsApp Us",
    },
    serviceLandPage: {
      heroSlide1Title: "Land Sourcing",
      heroSlide1Subtitle: "Prime land identified, evaluated, and secured — before you commit.",
      heroSlide2Title: "Local Expertise",
      heroSlide2Subtitle: "We know where the best land values are across Kigali, Musanze, and beyond.",
      heroSlide3Title: "Waterfront Opportunities",
      heroSlide3Subtitle: "Lake Kivu and Akagera properties with unbeatable potential.",
      processEyebrow: "Our Process",
      processHeading: "Finding the Right Land in Rwanda",
      processParagraph1:
        "Buying land in Rwanda requires understanding local zoning laws, title verification, and terrain suitability. Our team sources and evaluates land across Rwanda's prime investment zones — from Lake Kivu waterfront to Musanze highlands — with full legal due diligence, zoning checks, and negotiation, all before you commit.",
      processParagraph2:
        "Both leasehold and freehold options are available. Our in-house legal team handles title verification, environmental compliance, and all transfer documentation.",
      areasEyebrow: "Prime Areas",
      areasHeading: "Where We Source",
      areasParagraph:
        "We identify land in Rwanda's highest-performing investment zones, each with distinct advantages for villa development.",
      areaDescLakeKivu: "Waterfront and hillside plots with high rental demand.",
      areaDescMusanze: "Volcanoes National Park proximity, growing tourism.",
      areaDescRubavu: "Lake Kivu beaches and emerging resort market.",
      areaDescKigali: "Capital city, business district, consistent demand.",
      areaDescNyungwe: "Forest edge, eco-tourism, lower entry cost.",
      areaDescAkagera: "National park proximity, luxury safari lodge market.",
      includedHeading: "What's Included",
      includedItems: [
        "Area selection consultation based on budget and goals",
        "Land search and property viewings",
        "Legal due diligence (title, zoning, permits)",
        "Negotiation and price haggling",
        "Purchase contract review",
        "Notary coordination and transfer",
        "Post-purchase site measurement and survey",
      ],
      tenureEyebrow: "Land Tenure",
      tenureHeading: "Freehold vs Leasehold",
      tenureColAspect: "Aspect",
      tenureColLeasehold: "Leasehold",
      tenureColFreehold: "Freehold",
      tenureRowTermLabel: "Term",
      tenureRowTermLeasehold: "Up to 99 years, renewable",
      tenureRowTermFreehold: "Perpetual (Title Deed)",
      tenureRowAccessLabel: "Foreign Access",
      tenureRowAccessLeasehold: "Standard route for foreign individuals",
      tenureRowAccessFreehold: "Not available to foreigners under personal name — accessible via a registered Rwandan company",
      tenureRowAdminLabel: "Administered By",
      tenureRowAdminLeasehold: "Rwanda Land Management and Use Authority (RMLA)",
      tenureRowAdminFreehold: "RMLA, via company registration with the Rwanda Development Board (RDB)",
      tenureRowRentalLabel: "Short-Term Rental Use",
      tenureRowRentalLeasehold: "Permitted, standard for villa investment",
      tenureRowRentalFreehold: "Permitted once held through a compliant company structure",
      tenureNote:
        "Our in-house legal team handles both routes, verifying title and negotiating terms so you don't need outside counsel.",
      acquisitionEyebrow: "Our Process",
      acquisitionHeading: "The Land Acquisition Process",
      acquisitionStep1Title: "Define Your Zone & Budget",
      acquisitionStep1Desc: "We start with your budget and goals to shortlist Rwanda's prime investment zones for you.",
      acquisitionStep2Title: "Land Search & Shortlisting",
      acquisitionStep2Desc: "Our team sources and shortlists sites across Rwanda's prime zones, from Lake Kivu waterfront to Musanze highlands.",
      acquisitionStep3Title: "Site Visit & Terrain Review",
      acquisitionStep3Desc: "We evaluate terrain suitability and zoning classification before you commit to any site.",
      acquisitionStep4Title: "Legal Due Diligence",
      acquisitionStep4Desc: "Full title verification, zoning checks, and negotiation, completed before you sign anything.",
      acquisitionStep5Title: "Choose Your Structure",
      acquisitionStep5Desc: "We help you decide between a leasehold agreement or a company structure for freehold-eligible ownership.",
      acquisitionStep6Title: "Purchase, Transfer & Compliance",
      acquisitionStep6Desc: "Our legal team handles title verification, environmental compliance, and all transfer documentation to close.",
      crossLinksEyebrow: "Next Steps",
      crossLinksHeading: "Related Services",
      crossLinksCta: "Learn More",
      quickRefTitle: "Land in Rwanda",
      quickRefPriceLabel: "Land Price Range",
      quickRefPriceValue: "$10 - $120 / sqm",
      quickRefTermLabel: "Typical Lease Term",
      quickRefTermValue: "Up to 99 years",
      quickRefAreasLabel: "Areas Served",
      quickRefAreasValue: "8 regions across Rwanda",
      quickRefDiscountLabel: "Architecture Discount",
      quickRefDiscountValue: "50% off design fees when you build with us",
      whyBuyEyebrow: "The Investment Case",
      whyBuyHeading: "Why Buy Land in Rwanda",
      whyBuyIntro:
        "Rwanda land is one of the strongest real estate investment plays in East Africa. Here is why our clients are buying land now.",
      whyBuyItem1Title: "15-20% Rental Yield",
      whyBuyItem1Desc:
        "Ever Retreat-managed villas typically achieve 15-20% gross rental yield annually, depending on location, villa size, and occupancy.",
      whyBuyItem2Title: "7-15% Annual Appreciation",
      whyBuyItem2Desc:
        "Land in Rwanda's prime areas has been appreciating 7-15% annually, driven by consistent tourism growth and limited developable land in prime zones.",
      whyBuyItem3Title: "1.5M+ Annual Visitors",
      whyBuyItem3Desc:
        "Rwanda welcomes over 1.5 million visitors a year, driving consistent tourism demand for land near Volcanoes National Park, Lake Kivu, and Akagera.",
      whyBuyItem4Title: "Complete Package With Ever Retreat",
      whyBuyItem4Desc:
        "Buy land with us and unlock our full pipeline: design your villa with our architecture team at 50% off, build it with our construction team, and earn rental income through our management division.",
      whyBuyItem5Title: "Affordable Entry Point",
      whyBuyItem5Desc:
        "Land is the lowest-cost way into the Rwanda property market, with prices starting from around $10/sqm in emerging areas like Akagera and Nyungwe.",
      foreignersEyebrow: "Foreign Ownership in Rwanda",
      foreignersHeading: "Can Foreigners Buy Land in Rwanda?",
      foreignersOption1Label: "Most common for foreign villa investors",
      foreignersOption1Title: "Leasehold Agreement",
      foreignersOption1Desc:
        "Leasehold is the standard route for foreign buyers, administered by the Rwanda Land Management and Use Authority (RMLA) for terms of up to 99 years, renewable. It supports villa construction and short-term rental income, and requires no company structure.",
      foreignersOption2Label: "For freehold-eligible ownership",
      foreignersOption2Title: "Company Structure",
      foreignersOption2Desc:
        "Freehold land title is not available to foreigners under personal name. It can be accessed through a registered Rwandan company via the Rwanda Development Board (RDB), suiting commercial-scale projects or investors who want full freehold rights.",
      pricesEyebrow: "Price Guide",
      pricesHeading: "Rwanda Land Prices",
      pricesIntro:
        "Land prices vary considerably by area, access, and proximity to tourism demand. These are the real per-sqm ranges and yields our team quotes across Rwanda's key investment areas.",
      pricesColArea: "Area",
      pricesColPrice: "Price per sqm",
      pricesColYield: "Avg Yield",
      pricesColGuide: "Area Guide",
      bestAreasEyebrow: "Where We Source Land",
      bestAreasHeading: "Best Areas to Buy Land",
      bestAreasParagraph:
        "We source land across Rwanda's prime and emerging markets. Each area has distinct investment characteristics, price points, and development potential.",
      bestAreasCtaLabel: "Area Guide",
      dueDiligenceEyebrow: "Buyer's Due Diligence Guide",
      dueDiligenceHeading: "What to Look For When Buying Land",
      dueDiligenceIntro:
        "The right land purchase comes down to more than location and price. These are the factors our team evaluates on every site before we recommend it to a client.",
      dueDiligenceItem1Title: "Title Verification",
      dueDiligenceItem1Desc:
        "Confirm the land title is registered and free of disputes before any payment changes hands. Our in-house legal team verifies every title before you commit.",
      dueDiligenceItem2Title: "Zoning Classification",
      dueDiligenceItem2Desc:
        "Rwanda's land-use planning system designates residential, tourism, agricultural, commercial, and protected zones, each with different building rights. Always confirm zoning before purchase.",
      dueDiligenceItem3Title: "Road Access & Utilities",
      dueDiligenceItem3Desc:
        "Legal road access, electricity connection, and water source should be verified on site, not assumed from a listing.",
      dueDiligenceItem4Title: "Survey & Boundaries",
      dueDiligenceItem4Desc:
        "A licensed surveyor should confirm boundaries and plot size match the title before you sign, particularly on undeveloped or rural plots.",
      mistakesEyebrow: "Buyer Protection",
      mistakesHeading: "Common Mistakes When Buying Land",
      mistakesIntro:
        "We have helped clients avoid - and recover from - the pitfalls that catch first-time buyers most often in Rwanda.",
      mistakesItem1Title: "Skipping Title Verification",
      mistakesItem1Desc:
        "Buying land without confirming registered title ownership is the single most common and costly mistake foreign buyers make in Rwanda.",
      mistakesItem2Title: "Ignoring Zoning Restrictions",
      mistakesItem2Desc:
        "Land zoned as agricultural or protected cannot legally be developed for residential or tourism use without a permit and conversion process. Check zoning before you buy, not after.",
      mistakesItem3Title: "Proceeding Without Legal Review",
      mistakesItem3Desc:
        "Our in-house legal team handles title verification, environmental compliance, and transfer documentation on every acquisition, so you are never negotiating a Rwandan land contract unprotected.",
      crossSellEyebrow: "The Complete Journey",
      crossSellHeadingLight: "From Land to",
      crossSellHeadingBold: "Income-Generating Villa",
      crossSellParagraph1:
        "Buying land is step one. With Ever Retreat, that single purchase unlocks a complete pipeline - from bare plot to designed villa, finished construction, and managed rental income, all under one in-house team.",
      crossSellParagraph2:
        "Clients who purchase land with us and proceed to build receive a 50% discount on architectural design fees, making Ever Retreat the most cost-effective route from bare land to a completed, income-generating villa.",
      crossSellChecklistItem1: "Design your villa at 50% off with our in-house architecture team",
      crossSellChecklistItem2: "Fixed-price construction from foundation to handover",
      crossSellChecklistItem3: "Villa management from 20% per booking once complete",
      crossSellChecklistItem4: "One team, zero gaps - from land search to rental income",
      closingEyebrow: "Find Your Plot",
      closingHeadingLight: "Start Your",
      closingHeadingBold: "Land Search",
      closingParagraph:
        "Tell us your preferred area, budget, and intended use. Our team will put together a shortlist of available sites that match your criteria, with full legal due diligence before you commit.",
      closingCtaPrimary: "Contact Our Team",
      closingCtaSecondary: "WhatsApp Us",
    },
    serviceDevelopmentPartnershipsPage: {
      heroSlide1Title: "Development Partnerships",
      heroSlide1Subtitle: "Joint venture villa developments on land you already own — we handle everything else.",
      introEyebrow: "A True End-to-End Partnership",
      introHeadingLight: "Your Investment.",
      introHeadingBold: "Our Expertise.",
      introParagraph1:
        "Developing property in Rwanda is complex. Zoning, permits, construction quality, and ongoing management all need to work together. Most landowners lack the local team and track record to execute at the standard the market demands.",
      introParagraph2:
        "That's where Ever Retreat comes in. With 120 villas completed and 82 in-house professionals spanning architecture, construction, legal, and villa management, we bring everything needed to turn land you already own into a finished, income-generating development — under a profit-share partnership rather than a standard client contract.",
      introChecklistItem1: "In-house architecture, construction, and legal teams under one roof",
      introChecklistItem2: "Fixed-price construction contracts, the same standard we use on our own developments",
      introChecklistItem3: "Optional villa management after handover, from 20% per booking",
      introChecklistItem4: "120 villas completed across Lake Kivu, Musanze, and Kigali",
      introChecklistItem5: "You keep ownership of the land throughout",
      introChecklistItem6: "Every partnership scoped and agreed in writing before work begins",
      modelsEyebrow: "How We Work Together",
      modelsHeadingLight: "Partnership",
      modelsHeadingBold: "Models",
      modelsIntro:
        "Every development is different. Here's how our two partnership structures work, depending on whether you're bringing land or capital.",
      landownerTitle: "Landowner Partnership",
      landownerDesc:
        "You bring land in Rwanda — at Lake Kivu, in the Musanze highlands, or near Kigali. We bring architecture, construction, marketing, sales, and rental management. Profits are shared based on contribution, typically 50/50 or 60/40.",
      landownerYourRole: "Land contribution, approval at key milestones",
      landownerOurRole: "Design, permits, construction, and optional management",
      investorTitle: "Investor Partnership",
      investorDesc:
        "Prefer to contribute capital instead of land? We can structure a joint venture around funding a development, with Ever Retreat sourcing the land and handling design, construction, sales, and management. Profit share is agreed based on your contribution — talk to us about structuring terms for your situation.",
      investorYourRole: "Capital investment, financial oversight",
      investorOurRole: "Land sourcing, design, construction, reporting",
      customTitle: "Custom Development",
      customDesc:
        "Every partnership is structured around what each party brings to the table. If your situation combines land, capital, or specific requirements that don't fit a standard structure, our team will work with you to design an arrangement covering design, build, sales, and management from concept to completion.",
      customYourRole: "Brief, vision, approvals, funding",
      customOurRole: "Design, engineering, construction, delivery",
      flexEyebrow: "Full Pipeline or Selected Services",
      flexHeadingLight: "Use All of Our Services.",
      flexHeadingBold: "Or Just Some.",
      flexIntro:
        "Not every landowner needs the full pipeline. Our architecture, construction, and villa management services are each real standalone offerings, so we structure our involvement around what you already have.",
      flexTile1Label: "You want a design only",
      flexTile1Title: "Architecture",
      flexTile1Desc:
        "Our in-house architects design the villa or development for your land. Take the drawings to your own builder, or come back to us for construction later.",
      flexTile1Services: "Architecture, 3D renders, construction documentation",
      flexTile2Label: "You want design and build",
      flexTile2Title: "Architecture + Construction",
      flexTile2Desc:
        "We design and build under a fixed-price contract, the same standard we use across our own developments, with weekly progress reporting.",
      flexTile2Services: "Architecture, permits, fixed-price construction",
      flexTile3Label: "You want the full pipeline",
      flexTile3Title: "Design, Build, and Manage",
      flexTile3Desc:
        "We design, build, and then manage the finished villas for rental income, under a profit-share partnership rather than a standard client contract.",
      flexTile3Services: "Architecture, construction, villa management, profit-share terms",
      financeEyebrow: "How the Numbers Work",
      financeHeadingLight: "What Does a Partnership",
      financeHeadingBold: "Look Like Financially?",
      financeIntro:
        "Every partnership is modelled around your specific land, villa mix, and location — we won't quote a project total without seeing the site. The same real figures we use across our other services apply here too:",
      financeBuildLabel: "Construction cost",
      financeBuildValue: "$1,000–$2,200 per sqm, depending on finish tier (standard, premium, or luxury)",
      financeYieldLabel: "Rental yield",
      financeYieldValue: "15–20% gross, once complete and under management",
      financeFeeLabel: "Management fee",
      financeFeeValue: "From 20% per booking, if you opt into ongoing villa management",
      financeShareLabel: "Profit share",
      financeShareValue: "Typically 50/50 or 60/40 between landowner and Ever Retreat, based on each party's contribution",
      financeNote:
        "We present a full, project-specific financial model — build cost, timeline, and proposed profit split — before any partnership agreement is signed.",
      processEyebrow: "From Land to Rental Income",
      processHeadingLight: "The Development",
      processHeadingBold: "Process",
      processIntro: "A high-level look at how we move from your land to a completed, income-generating villa.",
      step1Title: "Land evaluation",
      step1Desc: "Site analysis, zoning compliance, and feasibility study.",
      step2Title: "Design",
      step2Desc: "Architectural plans and 3D renders.",
      step3Title: "Construction",
      step3Desc: "Build management with quality control and timeline tracking.",
      step4Title: "Sales & marketing",
      step4Desc: "Launch campaign, listings, and buyer outreach.",
      step5Title: "Rental management",
      step5Desc: "Optional ongoing management for retained units.",
      oneTeamEyebrow: "Why Partner With Ever Retreat",
      oneTeamHeadingLight: "One Team.",
      oneTeamHeadingBold: "Every Discipline.",
      oneTeamParagraph1:
        "Most development partnerships involve cobbling together separate companies for design, construction, and management. Each handoff introduces delay and cost. At Ever Retreat, every discipline sits under one roof.",
      oneTeamParagraph2:
        "Our architects design what our own builders know how to build efficiently, under the same fixed-price standard we use on every project. And if you choose ongoing villa management, the same company that built your villa can manage it for rental income afterward.",
      oneTeamItem1: "120 villas designed and built across Rwanda",
      oneTeamItem2: "82 in-house professionals across architecture, construction, and management",
      oneTeamItem3: "In-house legal team for permits and land compliance",
      oneTeamItem4: "Fixed-price construction contracts as standard",
      oneTeamItem5: "Weekly progress reports and photo documentation throughout",
      oneTeamItem6: "Optional villa management from 20% per booking after handover",
      projectsEyebrow: "Our Projects",
      projectsHeading: "Completed Developments",
      projectsParagraph: "120 villas across Rwanda's most desirable locations.",
      projectUnitsShowcase: "Showcase villa",
      projectUnitsInDesign: "In design",
      faq1Question: "What if I already own land in Rwanda?",
      faq1Answer:
        "We offer development partnerships for landowners: our team designs, builds, and can manage a villa development on land you already own, under the same fixed-price, in-house model we use for our own projects.",
      faq2Question: "What partnership structures are available?",
      faq2Answer:
        "Our main structure is a profit-share partnership: you contribute the land, we handle design, construction, and optional management, and profits are split based on contribution, typically 50/50 or 60/40. If you'd rather contribute capital instead of land, or your situation doesn't fit either structure, get in touch and we'll work out terms case-by-case.",
      faq3Question: "Does Ever Retreat handle permits and legal work?",
      faq3Answer:
        "Yes. Our in-house legal team handles building permits, title verification, and compliance documentation for every partnership, so you don't need to hire outside counsel.",
      closingEyebrow: "Start a Conversation",
      closingHeadingLight: "Have Land?",
      closingHeadingBold: "Let's Talk.",
      closingParagraph:
        "Share your land details and development goals. We'll come back with an honest read on what's possible and a proposed partnership structure.",
      closingCtaPrimary: "Get In Touch",
      closingCtaSecondary: "WhatsApp Us",
    },
    serviceInteriorDesignPage: {
      heroTitle: "Interior Design",
      heroSubtitle: "Bespoke interior design that balances tropical aesthetics with modern comfort.",
      approachEyebrow: "Our Approach",
      approachHeading: "Design That Performs",
      approachParagraph1:
        "Our in-house interior designers create spaces that are beautiful, functional, and optimised for rental performance. Every piece of furniture and finish is selected for durability in Rwanda's tropical climate, whilst maintaining a sophisticated aesthetic that commands premium nightly rates.",
      approachParagraph2:
        "We source materials locally where possible and work with Rwandan artisans for custom pieces, supporting the local economy while creating unique, authentic spaces.",
      stylesEyebrow: "Design Styles",
      stylesHeading: "Signature Styles",
      style1Title: "Tropical Modern",
      style1Desc: "Clean lines, natural materials, and cross-ventilation designed for Rwanda's climate.",
      style2Title: "Scandinavian Minimal",
      style2Desc: "Light woods, neutral tones, and functional design for a calm atmosphere.",
      style3Title: "Rwanda Modern",
      style3Desc: "Modern interpretations of traditional Rwandan elements and craftsmanship.",
      style4Title: "Japandi",
      style4Desc: "Japanese minimalism meets Scandinavian functionality for serene spaces.",
      includedHeading: "What's Included",
      includedItems: [
        "Concept design and mood boards",
        "Material and furniture sourcing",
        "Custom joinery and built-in design",
        "Styling and soft furnishings",
        "Procurement and logistics coordination",
        "Installation and styling completion",
      ],
      discountParagraph:
        "50% off interior design fees when you build with us — our designers work alongside our construction team for seamless execution from structure to styling.",
    },
    serviceLandscapePage: {
      heroTitle: "Landscape Design",
      heroSubtitle: "Transform your outdoor space with stunning tropical landscapes and gardens.",
      approachEyebrow: "Our Approach",
      approachHeading: "Outdoor Living, Designed for Rwanda",
      approachParagraph1:
        "The landscape is just as important as the villa itself. Our landscape team designs tropical gardens, water features, and outdoor living spaces that complement Rwanda's natural beauty while creating functional, rentable outdoor areas.",
      approachParagraph2:
        "We use native and adapted plant species that thrive in Rwanda's climate, reducing maintenance costs while creating stunning visual impact. Every design considers seasonal changes, irrigation efficiency, and long-term growth patterns.",
      elementsEyebrow: "Design Elements",
      elementsHeading: "Design Elements",
      elementsParagraph: "We incorporate these elements into every landscape design:",
      element1Title: "Native Planting",
      element1Desc: "Tropical palms, frangipani, and native species adapted to Rwanda's climate.",
      element2Title: "Water Features",
      element2Desc: "Reflection pools, water walls, and natural stone elements.",
      element3Title: "Outdoor Living",
      element3Desc: "Decking, pergolas, outdoor kitchens, and lounge areas.",
      includedHeading: "Services Included",
      includedItems: [
        "Site analysis and soil testing",
        "Concept design and 3D renders",
        "Plant selection and sourcing",
        "Irrigation system design",
        "Hard landscaping (decking, stonework, water features)",
        "Installation and planting",
        "Ongoing maintenance program",
      ],
    },
    serviceProjectManagementPage: {
      heroTitle: "Project Management",
      heroSubtitle: "Expert oversight ensuring your villa build stays on time, on budget, and to spec.",
      processEyebrow: "Our Process",
      processHeading: "On-Time. On-Budget. On-Spec.",
      processParagraph1:
        "Managing a villa build in Rwanda from overseas is challenging. Our certified project managers handle everything — scheduling, quality control, budgeting, and communication. You get weekly progress reports, photo updates, and transparent billing.",
      processParagraph2:
        "We manage 120 projects across Rwanda with an average on-time completion rate of 95%. Our team includes English-fluent managers, certified engineers, and skilled site supervisors.",
      reportingEyebrow: "Weekly Reporting",
      reportingHeading: "Stay Informed",
      reportingParagraph:
        "Our project management platform gives you real-time visibility into your build, from anywhere in the world.",
      feature1Title: "Daily Photos",
      feature1Desc: "Photo updates uploaded daily to your client portal.",
      feature2Title: "Weekly Reports",
      feature2Desc: "Detailed progress reports with budget and timeline updates.",
      feature3Title: "Budget Tracking",
      feature3Desc: "Real-time budget tracking with transparent invoicing.",
      feature4Title: "Schedule Alerts",
      feature4Desc: "Notifications for milestones, delays, and decision points.",
      servicesHeading: "Our Management Services",
      servicesItems: [
        "Project scheduling and timeline management",
        "Budget tracking and cost control",
        "Quality assurance and inspections",
        "Subcontractor coordination and oversight",
        "Permit and compliance management",
        "Communication and reporting",
        "Risk assessment and mitigation",
        "Final handover and snagging",
      ],
    },
    buyPage: {
      heroEyebrow: "Reserve Your Villa",
      heroTitle: "Reserve Your Villa",
      heroSubtitle:
        "Secure your unit across our active developments with a reservation deposit. This is a deposit request, not a live payment — our team confirms every reservation with you directly on WhatsApp.",
      trustPoint1Title: "Deposit Secures Your Unit",
      trustPoint1Desc: "A deposit secures the unit while contracts and structures are finalized.",
      trustPoint2Title: "Balance Tied to Construction Milestones",
      trustPoint2Desc:
        "The remaining balance is paid in stages tied to real construction milestones, not fixed calendar dates, so you only pay as work is actually completed.",
      trustPoint3Title: "Legal Due Diligence Included",
      trustPoint3Desc: "Title verification, zoning compliance, and permit checks handled before contracts are signed.",
      formEyebrow: "Request a Reservation",
      formHeading: "Tell Us Which Villa You Want",
      formParagraph:
        "Share your details and preferred unit below. We'll reply on WhatsApp with next steps, contract terms, and the deposit amount for your chosen development.",
      developmentLabel: "Development",
      developmentPlaceholder: "Select a development",
      unitLabel: "Villa / Unit Type",
      unitPlaceholder: "e.g. 3 Bedroom, 4 Bedroom",
    },
    caseStudyPage: {
      pageTitle: "Case Study: B&P Ever Retreat Villa",
      pageSubtitle: "How we designed and built our showcase villa at Lake Kivu.",
      challengeHeading: "The Challenge",
      challengeParagraph:
        "The site is a waterfront plot at Lake Kivu with steep terrain and panoramic lake views. Building safely on the shoreline required specialized engineering and foundation work.",
      solutionHeading: "The Solution",
      solutionParagraph:
        "Our team designed a single showcase villa positioned for maximum lake views, with a private plunge pool. We used reinforced concrete foundations and cantilevered terraces.",
      resultsHeading: "Results",
      resultsParagraph:
        "The completed villa now serves as a live showcase of Ever Retreat's design and construction standard — a hands-on reference our clients and partners can visit in person.",
      timelineEyebrow: "How It Came Together",
      timelineHeading: "Project Timeline",
      timelineHeadingLight: "Project",
      timelineHeadingBold: "Timeline",
      phaseLabel: "Phase",
      outcomeEyebrow: "The Outcome",
      outcomeHeading: "Project at a Glance",
      outcomeHeadingLight: "Project at a",
      outcomeHeadingBold: "Glance",
    },
    testimonialsPage: {
      heroTitle: "Client Stories",
      heroSubtitle: "Real stories from villa owners and investors who built with us in Rwanda.",
      sectionEyebrow: "In Their Words",
      sectionHeading: "What Our Clients Say",
      sectionHeadingLight: "What Our",
      sectionHeadingBold: "Clients Say",
      statsEyebrow: "By the Numbers",
      statsHeading: "The Track Record Behind the Reviews",
      statsHeadingLight: "The Track Record",
      statsHeadingBold: "Behind the Reviews",
    },
    termsPage: {
      heroSubtitle: "Terms and conditions for using the Ever Retreat website and services.",
      lastUpdatedLabel: "Last Updated:",
      lastUpdatedValue: "January 2026",
      questionsLabel: "Questions?",
      section1Heading: "Acceptance of Terms",
      section1Body:
        "By accessing or using the Ever Retreat website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.",
      section2Heading: "Property Listings",
      section2Body:
        "Property listings, pricing, and availability on this website are subject to change without notice. We make no warranties regarding the accuracy or completeness of any listing information.",
      section3Heading: "Property Investment",
      section3Body:
        "All property investment decisions involve risks. You should conduct your own due diligence and seek independent legal and financial advice before making any investment.",
      section4Heading: "User Content",
      section4Body:
        "You are responsible for any content you submit through our website. By submitting content, you grant us a non-exclusive right to use, modify, and display it.",
      section5Heading: "Intellectual Property",
      section5Body:
        "All content on this website, including text, images, logos, and trademarks, is the property of Ever Retreat or its licensors. You may not reproduce or distribute our content without permission.",
      section6Heading: "Limitation of Liability",
      section6Body:
        "To the fullest extent permitted by law, Ever Retreat shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.",
      section7Heading: "Governing Law",
      section7Body:
        "These terms are governed by the laws of Rwanda. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kigali, Rwanda.",
      section8Heading: "Changes to Terms",
      section8Body:
        "We may update these terms from time to time. The latest version will be posted on this page.",
      section9Heading: "Contact",
      section9BodyPre: "For questions regarding these terms, contact us at",
      section9BodyPost: ".",
      ctaHeading: "Have Questions About Our Terms?",
      ctaParagraph: "Our team is here to help clarify any questions you may have.",
      contactUsButton: "Contact Us",
      returnHomeButton: "Return Home",
    },
    privacyPage: {
      heroSubtitle: "How we collect, use, and protect your personal information.",
      lastUpdatedLabel: "Last Updated:",
      lastUpdatedValue: "January 2026",
      questionsLabel: "Questions?",
      section1Heading: "Information We Collect",
      section1Intro: "We collect personal information that you provide directly to us, including:",
      section1Item1: "Name and contact information (email, phone)",
      section1Item2: "Property preferences and investment goals",
      section1Item3: "Communication records and correspondence",
      section2Heading: "How We Use Your Information",
      section2Intro: "We use your information to:",
      section2Item1: "Respond to your enquiries and provide property services",
      section2Item2: "Send you newsletters and updates (if opted in)",
      section2Item3: "Improve our website and services",
      section2Item4: "Comply with legal obligations",
      section3Heading: "Cookies",
      section3Body:
        "We use cookies to remember your preferences and improve your experience on our website. You can control cookie settings through your browser.",
      section4Heading: "Third-Party Services",
      section4Body:
        "We may share your information with trusted partners for property services, marketing, and analytics. All partners are contractually bound to protect your data.",
      section5Heading: "Data Security",
      section5Body:
        "We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.",
      section6Heading: "Your Rights",
      section6BodyPre: "You have the right to access, correct, or delete your personal information. Contact us at",
      section6BodyPost: "to exercise these rights.",
      section7Heading: "Changes to This Policy",
      section7Body: "We may update this privacy policy from time to time. Any changes will be posted on this page.",
      section8Heading: "Contact Us",
      section8BodyPre: "If you have questions about this privacy policy, please contact us at",
      section8BodyMid: "or WhatsApp",
      section8BodyPost: ".",
      ctaHeading: "Have Questions About Your Privacy?",
      ctaParagraph: "Our team is here to help with any privacy concerns you may have.",
      contactUsButton: "Contact Us",
      returnHomeButton: "Return Home",
    },
    processPage: {
      heroTitle: "The Process",
      heroSubtitle: "Building a villa in Rwanda doesn't have to be overwhelming. Here is exactly what happens, step by step.",
    },
    processStepsSection: {
      eyebrow: "From Vision to Villa",
      heading: "The 12-Step Process",
      subheading: "Every project follows the same proven path - from your initial brief to receiving the first guest booking.",
      step1Title: "Project Brief",
      step1Desc: "We start with a 90-minute call to understand your site, budget, and goals for your Rwanda villa.",
      step2Title: "Land Sourcing",
      step2Desc: "If you don't yet own land, we search our network of listings and shortlist 3-5 sites that match your brief.",
      step3Title: "Site Visit",
      step3Desc: "We arrange a site visit where you meet the local agent, review zoning, and confirm the land is suitable.",
      step4Title: "Due Diligence",
      step4Desc: "Our legal team verifies the land certificate, checks zoning compliance, and reviews any encumbrances.",
      step5Title: "Purchase & Contracts",
      step5Desc: "We negotiate the purchase price, arrange transfer funds through our nominated lawyer, and sign the sale and purchase agreement.",
      step6Title: "Design Brief",
      step6Desc: "We brief our architects on your style, villa size, and program - then create 3 concept designs.",
      step7Title: "Architectural Design",
      step7Desc: "Our architects produce detailed drawings, 3D renders, and structural plans - ready for permit submission.",
      step8Title: "Permit Submission",
      step8Desc: "We submit all documents to the relevant authorities and track approvals through the process.",
      step9Title: "Construction",
      step9Desc: "Our construction team builds the villa from foundations to handover, with weekly photo updates.",
      step10Title: "Interiors & Styling",
      step10Desc: "We handle interior design, furniture selection, and styling - or project-manage your own selections.",
      step11Title: "Handover",
      step11Desc: "We conduct a final walkthrough, fix any punch list items, and hand you the keys.",
      step12Title: "Rental Setup",
      step12Desc: "Our villa management team sets up listings, professional photography, dynamic pricing, and guest management.",
      step1Bullets: ["90-minute project brief call", "Site, budget, and goals review"],
      step2Bullets: ["Access to our land listings network", "3-5 shortlisted sites matched to your brief"],
      step3Bullets: ["Guided site visit", "Local agent introduction", "Zoning and suitability review"],
      step4Bullets: ["Land certificate verification", "Zoning compliance check", "Encumbrance review"],
      step5Bullets: ["Purchase price negotiation", "Funds transfer via nominated lawyer", "Sale and purchase agreement signed"],
      step6Bullets: ["Architect briefing on style and program", "Villa size and layout planning", "3 concept designs delivered"],
      step7Bullets: ["Detailed architectural drawings", "3D renders", "Structural plans ready for permitting"],
      step8Bullets: ["Document submission to authorities", "Approval tracking throughout the process"],
      step9Bullets: ["Construction from foundations to handover", "Weekly photo updates"],
      step10Bullets: ["Interior design and furniture selection", "Styling, or project management of your own selections"],
      step11Bullets: ["Final walkthrough", "Punch list corrections", "Key handover"],
      step12Bullets: ["Listing setup", "Professional photography", "Dynamic pricing and guest management"],
      faqEyebrow: "Common Questions",
      faqHeading: "Process FAQs",
    },
    formsPage: {
      heroTitle: "Forms & Documents",
      heroSubtitle: "Download the forms you need for your Rwanda property project.",
      sectionEyebrow: "Downloadable Forms",
      sectionHeading: "Forms & Documents",
      sectionHeadingLight: "Forms &",
      sectionHeadingBold: "Documents",
      sectionParagraph: "Request the forms you need for your property purchase, build agreement, or management setup.",
      item1Title: "Property Purchase Agreement",
      item1Time: "15 min",
      item1Desc: "The purchase contract covering price, payment schedule, and title transfer terms for your property.",
      item2Title: "Build Management Agreement",
      item2Time: "10 min",
      item2Desc: "Defines scope, construction timeline, and payment milestones for your villa build.",
      item3Title: "Villa Management Agreement",
      item3Time: "10 min",
      item3Desc: "Sets out how we list, manage, and maintain your villa once it is rental-ready.",
      item4Title: "Investment Return Projection Template",
      item4Time: "5 min",
      item4Desc: "A template for estimating rental income and ROI on your Rwanda property investment.",
      availableLabel: "Available on request",
      requestButtonLabel: "Request",
      notSureHeading: "Not sure which form you need?",
      notSureBody: "Tell us about your project and we'll point you to the right document, or walk you through the paperwork directly.",
      notSureCta: "Ask Us",
    },
    naraVillasPage: {
      heroName: "B&P Ever Retreat Villa",
      heroTagline: "Prototype | Rubavu, Rwanda",
      heroSubtitle: "Showcase Villa | Lake Views | Private Pool | Lake Kivu",
      heroImageAlt: "B&P Ever Retreat Villa - Rubavu Lake Kivu",
      heroSecondaryCtaLabel: "Learn More",
      heroStatusBadge: "Prototype — Not For Sale",
      developmentEyebrow: "The Development",
      developmentHeading: "A showcase villa on a peaceful Rubavu hillside",
      developmentParagraph1:
        "Steps from Lake Kivu's western shore, with a private pool throughout. Designed with a modern tropical approach, the architecture centres on wellness living from the very start. Clean lines, open layouts, and natural light work together with greenery and fresh airflow.",
      developmentParagraph2:
        "B&P Ever Retreat Villa sits on the shores of Lake Kivu — moments from Rubavu town and Gisenyi. The location attracts visitors for sunset cruises, water sports, and lakeside relaxation, with consistent weekend and holiday demand from regional and international visitors.",
      developmentParagraph3:
        "B&P Ever Retreat Villa is our completed showcase villa, built to the same design and construction standard as every Ever Retreat development. It is not currently for sale.",
      locationLabel: "Location",
      locationValue: "Rubavu, Lake Kivu, Rwanda",
      totalVillasLabel: "Total Villas",
      totalVillasValue: "1",
      statusLabel: "Status",
      statusValue: "Not For Sale",
      buildStatusLabel: "Build Status",
      buildStatusValue: "Completed",
      glanceEyebrow: "At a Glance",
      glanceDevelopmentLabel: "Development",
      glanceDevelopmentValue: "B&P Ever Retreat Villa",
      glanceDeveloperLabel: "Developer",
      glanceDeveloperValue: "Ever Retreat",
      glanceLocationLabel: "Location",
      glanceLocationValue: "Rubavu, Lake Kivu, Rwanda",
      glanceZoneLabel: "Zone",
      glanceZoneValue: "Residential / Tourism Designated",
      glanceTotalVillasLabel: "Total Villas",
      glanceTotalVillasValue: "1",
      glanceBuildStatusLabel: "Build Status",
      glanceBuildStatusValue: "Completed",
      glanceStatusLabel: "Status",
      glanceStatusValue: "Prototype — Not For Sale",
      longViewLabel: "The Long View",
      longViewText: "A showcase of the design and craftsmanship behind every Ever Retreat villa.",
      longViewImageAlt: "B&P Ever Retreat Villa long view",
      featuresEyebrow: "Included With The Villa",
      featuresHeading: "Designed for wellness.",
      feature1Title: "Private Pool",
      feature1Desc:
        "The villa includes a private pool, positioned for privacy and designed for both morning laps and evening lounging.",
      feature2Title: "Modern Tropical Design",
      feature2Desc:
        "Clean lines, open layouts, and natural light work together with greenery and fresh airflow to create calm, effortless spaces.",
      feature3Title: "Lake Transfer Service",
      feature3Desc:
        "Dedicated transfer service to lakeside locations and Gisenyi included. Easy access to everything the lake has to offer.",
      feature4Title: "Dedicated Villa Management",
      feature4Desc: "In-house management handles guest operations, maintenance, and monthly reporting.",
      feature5Title: "Optional Sauna & Ice Bath",
      feature5Desc:
        "Wellness infrastructure built in from the start. Optional sauna and ice bath installations available.",
      attractionsEyebrow: "Nearby Attractions",
      attractionsHeading: "On Rubavu's shores of Lake Kivu",
      exploreAreaLink: "Explore the Rubavu Area Guide →",
      lakeKivuImageAlt: "Lake Kivu area",
      lakeKivuBadge: "Shores of Lake Kivu",
      lakeKivuTitle: "Lake Kivu",
      lakeKivuDesc:
        "Lake Kivu's western shore. Lakeside relaxation, sunset cruises, and consistent weekend and holiday demand from regional and international visitors.",
      attraction1Name: "Gisenyi Waterfront",
      attraction1Time: "5 minutes away",
      attraction1Desc: "Lively lakeside promenade with cafes, boat cruises, and the vibrant Gisenyi town centre.",
      attraction2Name: "Lake Kivu Sunset Cruises",
      attraction2Time: "15 minutes away",
      attraction2Desc: "Scenic boat trips across Lake Kivu with views of the surrounding hills and islands.",
      ctaEyebrow: "Our Rubavu Showcase Villa",
      ctaHeading: "Prototype — Not For Sale",
      ctaParagraph:
        "B&P Ever Retreat Villa is our completed showcase villa on Lake Kivu, built to demonstrate the design and construction standard behind every Ever Retreat development. Get in touch to learn more.",
      ctaEnquireLabel: "Enquire Now",
      ctaViewAllLabel: "View All Developments",
    },
    solasUluwatuPage: {
      heroName: "Cottage",
      heroTagline: "Prototype | Rubavu, Rwanda",
      heroSubtitle: "Showcase Villa | Panoramic Views | Lakeside Living",
      heroImageAlt: "Cottage - Lake Kivu",
      heroSecondaryCtaLabel: "Learn More",
      heroStatusBadge: "Prototype — Not For Sale",
      developmentEyebrow: "The Development",
      developmentHeading: "A showcase villa on the Rubavu hillside",
      developmentParagraph1:
        "Cottage is a 3-bedroom showcase villa positioned on the hillside above Rubavu, offering panoramic views over Lake Kivu. It sits moments from the lake shore and Rubavu town centre.",
      developmentParagraph2:
        "The villa features floor-to-ceiling windows, a private plunge pool, and a design that maximises indoor-outdoor living. The architecture combines modern tropical elements with local stone and timber craftsmanship.",
      developmentParagraph3:
        "Cottage is our completed showcase villa in a tourism-designated zone in Rubavu — built to the same design and construction standard as every Ever Retreat development. It is not currently for sale.",
      locationLabel: "Location",
      locationValue: "Rubavu, Lake Kivu, Rwanda",
      bedroomsLabel: "Bedrooms",
      bedroomsValue: "3",
      statusLabel: "Status",
      statusValue: "Not For Sale",
      buildStatusLabel: "Build Status",
      buildStatusValue: "Completed",
      glanceEyebrow: "At a Glance",
      glanceDevelopmentLabel: "Development",
      glanceDevelopmentValue: "Cottage",
      glanceDeveloperLabel: "Developer",
      glanceDeveloperValue: "Ever Retreat",
      glanceLocationLabel: "Location",
      glanceLocationValue: "Rubavu, Lake Kivu, Rwanda",
      glanceZoneLabel: "Zone",
      glanceZoneValue: "Residential / Tourism Designated",
      glanceTotalVillasLabel: "Total Villas",
      glanceTotalVillasValue: "1",
      glanceBedroomsLabel: "Bedrooms",
      glanceBedroomsValue: "3",
      glanceBuildAreaLabel: "Build Area",
      glanceBuildAreaValue: "250 sqm",
      glanceBuildStatusLabel: "Build Status",
      glanceBuildStatusValue: "Completed",
      glanceStatusLabel: "Status",
      glanceStatusValue: "Prototype — Not For Sale",
      longViewLabel: "The Long View",
      longViewText: "A showcase of the design and craftsmanship behind every Ever Retreat villa.",
      longViewImageAlt: "Cottage lake view",
      featuresEyebrow: "Included With The Villa",
      featuresHeading: "Designed for wellness.",
      feature1Title: "Panoramic Lake Views",
      feature1Desc: "The villa is positioned for unobstructed views over Lake Kivu and the surrounding volcanoes.",
      feature2Title: "Modern Tropical Design",
      feature2Desc:
        "Clean lines, natural materials, and open-plan living spaces that blend indoor and outdoor living.",
      feature3Title: "Lakeside Wellness",
      feature3Desc: "Private plunge pool, yoga deck, and an optional sauna installation built from the start.",
      attractionsEyebrow: "Nearby Attractions",
      attractionsHeading: "On Rubavu's shores of Lake Kivu",
      exploreAreaLink: "Explore the Rubavu Area Guide →",
      attraction1ImageAlt: "Lake Kivu area",
      attraction1Badge: "Shores of Lake Kivu",
      attraction1Title: "Rubavu",
      attraction1Desc:
        "Rubavu is Rwanda's lakeside town on the northern shore of Lake Kivu. Known for its relaxed atmosphere, water sports, and stunning sunset views over the lake.",
      attraction2ImageAlt: "Gisenyi area",
      attraction2Time: "10 minutes away",
      attraction2Title: "Gisenyi",
      attraction2Desc: "Gisenyi's lively lakeside promenade with cafes, boat cruises, and waterfront dining.",
      ctaEyebrow: "Our Rubavu Showcase Villa",
      ctaHeading: "Prototype — Not For Sale",
      ctaParagraph:
        "Cottage is our completed showcase villa in Rubavu, built to demonstrate the design and construction standard behind every Ever Retreat development. Get in touch to learn more.",
      ctaEnquireLabel: "Enquire Now",
      ctaViewAllLabel: "View All Developments",
    },
    sukuResidencesPage: {
      heroName: "Virunga Villas",
      heroTagline: "Coming Soon | Musanze, Rwanda",
      heroSubtitle: "2, 3 & 4 Bed | Mountain Community | Private Pools | Musanze",
      heroImageAlt: "Virunga Villas Musanze",
      heroStatusBadge: "Coming Soon",
      developmentEyebrow: "The Development",
      developmentHeading: "Virunga is designed deliberately small",
      developmentParagraph1:
        "Nine villas across 2, 3, and 4-bedroom configurations, set on a single boutique site in Musanze's tourism-designated zone. The compact site plan creates the community feel that drives repeat bookings and lifts nightly rates above standalone villas.",
      developmentParagraph2:
        "Designed as both a retreat and a long-term home, Virunga blends nature, design, and livability in a way that feels quietly luxurious and confidently different. Finished in Terracotta and Grey, every villa comes with a private pool, dedicated butler, airport transfer service, and round-the-clock security.",
      developmentParagraph3:
        "Virunga Villas offers freehold and leasehold ownership options in a tourism-designated zone, which legally permits tourist accommodation and short-term rentals. Full eligibility for the required rental licences, alignment with government-approved tourism activities, and long-term security for your investment.",
      locationLabel: "Location",
      locationValue: "Musanze, Volcanoes Region, Rwanda",
      bedroomsLabel: "Bedrooms",
      bedroomsValue: "2, 3 & 4",
      statusLabel: "Status",
      statusValue: "Coming Soon",
      tenureLabel: "Tenure",
      tenureValue: "Freehold & Leasehold",
      glanceEyebrow: "At a Glance",
      glanceDevelopmentLabel: "Development",
      glanceDevelopmentValue: "Virunga Villas",
      glanceDeveloperLabel: "Developer",
      glanceDeveloperValue: "Ever Retreat",
      glanceLocationLabel: "Location",
      glanceLocationValue: "Musanze, Volcanoes Region, Rwanda",
      glanceZoneLabel: "Zone",
      glanceZoneValue: "Residential / Tourism Designated",
      glanceTotalVillasLabel: "Total Villas",
      glanceTotalVillasValue: "9",
      glanceBedroomsLabel: "Bedrooms",
      glanceBedroomsValue: "2, 3 & 4",
      glanceBuildAreaLabel: "Build Area",
      glanceBuildAreaValue: "165 - 280 sqm",
      glanceLandAreaLabel: "Land Area",
      glanceLandAreaValue: "120 - 220 sqm",
      glanceStatusLabel: "Status",
      glanceStatusValue: "Coming Soon",
      glanceTenureLabel: "Tenure",
      glanceTenureValue: "Freehold & Leasehold Options",
      villaTypesEyebrow: "Villa Types",
      villaTypesHeading: "Three layouts. Each with a private pool.",
      bedCardStatusLabel: "Coming Soon",
      bed1Label: "2 Bedroom",
      bed1Build: "165 sqm build",
      bed1Land: "120 sqm land",
      bed2Label: "3 Bedroom",
      bed2Build: "210 sqm build",
      bed2Land: "160 sqm land",
      bed3Label: "4 Bedroom",
      bed3Build: "280 sqm build",
      bed3Land: "220 sqm land",
      featuresEyebrow: "Included With Every Villa",
      featuresHeading: "Everything. Handled.",
      feature1Title: "Private Pools",
      feature1Desc: "Every villa includes a private pool, sized to match the layout and positioned for privacy and sun.",
      feature2Title: "Dedicated Butler",
      feature2Desc: "On-site butler service handles everything from early morning coffee to late-night requests.",
      feature3Title: "Airport Transfer",
      feature3Desc:
        "Complimentary transfer service to Kigali International Airport. No parking, no hassle, just a comfortable ride to your flight.",
      feature4Title: "Round-the-Clock Security",
      feature4Desc: "24/7 gated entry and security personnel. Peace of mind for owners and guests alike.",
      feature5Title: "Additional Features Package",
      feature5Desc:
        "Every villa includes a features package worth up to $25,000 — furniture, appliances, and smart home setup.",
      feature6Title: "Mountain Community",
      feature6Desc: "A deliberately small site with nine villas. The compact plan creates the community feel that lifts nightly rates.",
      ctaEyebrow: "Virunga Villas",
      ctaHeading: "Coming Soon",
      ctaParagraph:
        "Virunga Villas is currently in design for Musanze. Register your interest to be the first to hear when details are confirmed.",
      ctaEnquireLabel: "Enquire Now",
      ctaViewAllLabel: "View All Developments",
    },
    realEstatePageExtras: {
      inventoryDevelopmentsLabel: "Active Developments",
      inventoryAreasLabel: "Areas Covered",
      propertyTypesEyebrow: "What You Can Invest In",
      propertyTypesHeading: "Property Types",
      villasCardTitle: "Villas",
      villasCardDesc: "Off-plan and in-build villas across our active developments, fully managed from land to rental income.",
      villasCardCta: "View Developments",
      landCardTitle: "Land",
      landCardDesc: "Due-diligence-checked land across Rwanda's key investment areas, priced by location.",
      landCardPriceLabel: "From",
      landCardPriceValue: "$10 – $120/sqm depending on area",
      landCardCta: "Explore Land",
      areaFromLabel: "Land from",
    },
    developmentsPageExtras: {
      serviceLinksEyebrow: "Go Further",
      serviceLinksHeading: "Plan, Build, and Manage",
      calculatorKicker: "Estimate Costs",
      calculatorTitle: "Build Calculator",
      calculatorDesc: "Estimate construction costs, land prices, and projected returns for your Rwanda villa project.",
      calculatorCta: "Try the Calculator",
      constructionKicker: "Custom Build",
      constructionTitle: "Villa Construction",
      constructionDesc: "Turn a design into a built villa with our in-house construction team, from foundation to handover.",
      constructionCta: "View Construction",
      villaManagementKicker: "After Purchase",
      villaManagementTitle: "Villa Management",
      villaManagementDesc: "Rental listing, guest management, and upkeep once your villa is built and ready to earn.",
      villaManagementCta: "View Villa Management",
    },
    devDetailExtras: {
      relatedEyebrow: "Explore More",
      relatedHeading: "Related Developments",
      relatedViewLabel: "View Development",
      faqEyebrow: "Common Questions",
      faqHeading: "Frequently Asked Questions",
      naraFaq: [
        {
          question: "Where is B&P Ever Retreat Villa located?",
          answer: "The development is in Rubavu, on the shores of Lake Kivu.",
        },
        {
          question: "Is the villa available for sale?",
          answer: "B&P Ever Retreat Villa is our prototype build and is not currently for sale. Register your interest to be notified about future availability.",
        },
        {
          question: "What is the current build status?",
          answer: "The build status and total villa count are shown in the At a Glance table above, which we keep up to date as construction progresses.",
        },
      ],
      solasFaq: [
        {
          question: "Where is the Cottage development located?",
          answer: "The Cottage is in Rubavu, near Lake Kivu.",
        },
        {
          question: "How many bedrooms does the Cottage have?",
          answer: "Bedroom count is listed in the At a Glance table above.",
        },
        {
          question: "Is the Cottage for sale now?",
          answer: "The Cottage is currently a prototype build. Use the enquiry form on this page to register interest and receive updates on availability.",
        },
      ],
      sukuFaq: [
        {
          question: "Where are Virunga Villas located?",
          answer: "Virunga Villas is planned for Musanze, near the Volcanoes region.",
        },
        {
          question: "What villa sizes are available?",
          answer: "Three configurations are planned: a 2 Bedroom (165 sqm build, 120 sqm land), a 3 Bedroom (210 sqm build, 160 sqm land), and a 4 Bedroom (280 sqm build, 220 sqm land).",
        },
        {
          question: "What is included with each villa?",
          answer: "Every villa includes a private pool, dedicated butler service, complimentary Kigali airport transfer, 24/7 security, and a features package worth up to $25,000.",
        },
        {
          question: "When will Virunga Villas be available?",
          answer: "Virunga Villas is currently in design for Musanze. Register your interest to be the first to hear when details are confirmed.",
        },
      ],
      solasRoiEyebrow: "Investment Snapshot",
      solasRoiHeading: "What the Rubavu Market Looks Like",
      solasRoiParagraph:
        "The Cottage sits in Rubavu, on Lake Kivu — the same area covered in our market data below. These are Rubavu-wide figures, not a guaranteed return for this specific villa.",
      solasRoiYieldLabel: "Gross Rental Yield (Rubavu)",
      solasRoiYieldValue: "15-20%",
      solasRoiOccupancyLabel: "Average Occupancy (Rubavu)",
      solasRoiOccupancyValue: "85%",
      solasRoiNote: "Source: Ever Retreat area market data for Rubavu. Actual returns depend on unit, pricing, and management terms agreed at reservation.",
      sukuRoiEyebrow: "Investment Snapshot",
      sukuRoiHeading: "Why Musanze Works for This Villa",
      sukuRoiParagraph:
        "Virunga Villas sits in Musanze, gateway to gorilla trekking and the Volcanoes National Park - one of Rwanda's most consistent tourism draws. These are Musanze-wide figures, not a guaranteed return for this specific villa.",
      sukuRoiYieldLabel: "Gross Rental Yield (Musanze)",
      sukuRoiYieldValue: "12-18%",
      sukuRoiOccupancyLabel: "Average Occupancy (Musanze)",
      sukuRoiOccupancyValue: "80%",
      sukuRoiNote: "Source: Ever Retreat area market data for Musanze. Actual returns depend on unit, pricing, and management terms agreed at reservation.",
    },
    areasHubExtras: {
      statAreasLabel: "Areas Covered",
      statYieldLabel: "Gross Yield Range",
      statYearsLabel: "Years in Rwanda",
    },
    relatedAreasSection: {
      eyebrow: "Keep Exploring",
      heading: "Related Areas",
      viewLabel: "Explore Area",
    },
    zoneMattersSection: {
      eyebrow: "Tourism Designated Zone",
      heading: "Why the Zoning Matters",
      paragraph:
        "This development sits in a tourism-designated zone, which permits short-term rental and hospitality use under Rwanda's land zoning rules. That matters for your investment — you're operating with the zone, not against it.",
      benefit1Title: "Legal Short-Term Rentals",
      benefit1Desc: "Short-term and holiday rentals are a permitted use in this zone, not a legal grey area you have to work around.",
      benefit2Title: "Aligned With Local Regulations",
      benefit2Desc: "Your rental operation matches what this zone is actually designated for, rather than relying on an exception or workaround.",
      benefit3Title: "Simpler Permitting",
      benefit3Desc: "Tourism and hospitality permit applications align with the zone's intended use, rather than fighting against it.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      developments: "Résidences",
      services: "Services",
      realEstate: "Immobilier",
      portfolio: "Portefeuille",
      areas: "Régions",
      blog: "Blog",
      contact: "Contact",
      languageLabel: "Langue",
      currencyLabel: "Afficher Les Prix En",
      whatsappUs: "WhatsApp",
      developmentsMenu: {
        bp: "Villa B&P Ever Retreat",
        virunga: "Villas Virunga",
        cottage: "Cottage",
        kigaliRetreat: "Kigali Retreat",
        nyungweRetreat: "Nyungwe Retreat",
        huyeVillas: "Villas Huye",
        nyanzaVillas: "Villas Nyanza",
        akageraRetreat: "Akagera Retreat",
        viewAll: "Voir Toutes Les Résidences",
      },
      servicesMenu: {
        architecture: "Architecture et design",
        construction: "Construction",
        villaManagement: "Gestion de villas",
        landSourcing: "Recherche de terrains",
        developmentPartnerships: "Partenariats de développement",
        developerGuide: "Choisir un promoteur",
        howToBuy: "Comment acheter",
      },
    },
    hero: {
      label: "Promoteur immobilier basé au Rwanda",
      headlineBold: "Écoretraites Rwandaises",
      headlineLight: "Construites par Ever Retreat",
      subtext: "Des écoretraites de luxe à Rubavu, Musanze, Kigali et Nyungwe, avec gestion locative complète. À partir de",
      ctaPrimary: "Découvrir les résidences",
      ctaSecondary: "Nous contacter",
    },
    trustBar: {
      title: "Promoteur immobilier basé au Rwanda",
      subtitle: "Architecture, construction, gestion de villas et investissement immobilier — tout sous un même toit.",
      stat1Label: "Villas modèles achevées",
      stat2Label: "Résidences à travers le Rwanda",
    },
    heroCommon: {
      enquireNow: "Nous Contacter",
      learnMore: "En Savoir Plus",
      viewVillaTypes: "Voir les Types de Villas",
      salesNowOpen: "Ventes Ouvertes",
      facadeLabel: "Façade",
      bothLabel: "Les Deux",
      terracottaLabel: "Terracotta",
      greyLabel: "Gris",
      chatOnWhatsApp: "Discuter sur WhatsApp",
    },
    statsBarSection: {
      villasBuiltLabel: "Villas Construites",
      teamMembersLabel: "Membres de l'Équipe",
      yearsBuildingLabel: "Années de Construction au Rwanda",
      avgOccupancyLabel: "Taux d'Occupation Moyen",
    },
    whyEverRetreatSection: {
      eyebrow: "Pourquoi Ever Retreat",
      heading: "Pourquoi Choisir Ever Retreat Plutôt Qu'un Autre Promoteur au Rwanda ?",
      headingLight: "Les Investisseurs Méritent",
      headingBold: "Un Standard Plus Élevé",
      paragraph:
        "Le Rwanda ne manque pas de constructeurs proposant des prix bas. Mais les opérateurs peu qualifiés, les problèmes de permis et les projets abandonnés sont fréquents. Nous existons parce que les investisseurs méritent mieux.",
      talkToUs: "Parlez-Nous",
      seeCaseStudy: "Voir l'Étude de Cas",
      reason1Title: "Propriété et Gestion Éthiques",
      reason1Desc: "Gestion de projet à l'occidentale, tarification transparente, responsabilité totale.",
      reason2Title: "120 Projets Réalisés",
      reason2Desc: "Plus de 10 ans de construction à travers le Rwanda. Un historique visible et vérifiable.",
      reason3Title: "Architecture Éco-Responsable",
      reason3Desc: "Des principes de conception durable appliqués à chaque villa, conçus pour le climat et le paysage du Rwanda.",
      reason4Title: "Équipe Juridique Interne",
      reason4Desc: "Permis, titres fonciers, zonage et propriété étrangère gérés en interne.",
      reason5Title: "82 Professionnels Internes",
      reason5Desc: "Architectes, ingénieurs, chefs de projet, designers - tous sous un même toit.",
      reason6Title: "De Bout en Bout, Sous un Même Toit",
      reason6Desc: "Du terrain aux revenus locatifs. Une entreprise, un seul point de contact.",
      reason7Title: "Contrats à Prix Fixe",
      reason7Desc: "Aucun coût surprise. Paiements liés à de véritables jalons de construction.",
      reason8Title: "Bureaux Physiques au Rwanda",
      reason8Desc: "Bureaux à Kigali. Venez rencontrer l'équipe.",
    },
    buildCalculatorSection: {
      eyebrow: "Calculateur Gratuit",
      heading: "Calculez le Coût de Votre Construction",
      paragraph: "Indiquez la taille de votre villa et le niveau de finition souhaité pour obtenir une estimation instantanée des coûts de construction au Rwanda.",
      villaSizeLabel: "Taille de la Villa (m²)",
      sqmSuffix: "m²",
      finishLevelLabel: "Niveau de Finition",
      standardLabel: "Standard",
      premiumLabel: "Premium",
      luxuryLabel: "Luxe",
      bedroomsLabel: "Nombre de Chambres",
      bedroomOption2: "2 Chambres",
      bedroomOption3: "3 Chambres",
      bedroomOption4: "4 Chambres",
      bedroomOption5Plus: "5 Chambres et Plus",
      calculateButton: "Calculer l'Estimation",
      resultsHeading: "Vos Coûts Estimés",
      baseConstructionLabel: "Construction de Base",
      landCostLabel: "Coût du Terrain",
      permitsLabel: "Permis et Conception",
      totalLabel: "Coût Total Estimé",
      rentalReturnsHeading: "Rendements Locatifs Projetés",
      annualYieldLabel: "Rendement Locatif Annuel",
      roiTimelineLabel: "Délai de Retour sur Investissement",
      dailyRateLabel: "Tarif Journalier (est.)",
      perYearSuffix: "/an",
      perNightSuffix: "/nuit",
      yearsSuffix: "ans",
      disclaimerText: "Projections basées sur des données historiques. Les résultats réels peuvent varier. Consultez notre équipe pour une étude de faisabilité détaillée.",
    },
    servicesSubNavOverview: "Aperçu",
    footer: {
      tagline: "Ever Retreat, une entreprise basée au Rwanda. Architecture, construction et gestion de villas, tout sous un même toit.",
      hours: "Lun-Ven 8h-17h CAT",
      companyHeading: "Entreprise",
      servicesHeading: "Services",
      investHeading: "Investir",
      company: {
        about: "À propos",
        howWeWork: "Comment nous travaillons",
        portfolio: "Portefeuille",
        villaTours: "Visites de villas",
        testimonials: "Témoignages",
        blog: "Blog",
        caseStudy: "Étude de cas",
        clientForms: "Formulaires clients",
        payDeposit: "Payer un acompte",
        referFriend: "Parrainer un ami",
        contact: "Contact",
      },
      services: {
        architecture: "Architecture et design",
        construction: "Construction",
        villaManagement: "Gestion de villas",
        landSourcing: "Recherche de terrains",
        developmentPartnerships: "Partenariats de développement",
        choosingDeveloper: "Choisir un promoteur",
        villaPackages: "Formules villas",
        buildCalculator: "Calculateur de construction",
      },
      invest: {
        developments: "Résidences",
        areaGuides: "Guides des régions",
        investInRwanda: "Investir au Rwanda",
        howToBuy: "Comment acheter une propriété au Rwanda",
        fractionalOwnership: "Copropriété fractionnée",
        landZoning: "Guide du zonage foncier",
        faq: "FAQ",
      },
      rwandaHq: "Siège Rwanda",
      everRetreatOffice: "Bureau Ever Retreat",
      ourLocation: "Notre emplacement",
      copyright: "© 2026 Ever Retreat. Tous droits réservés.",
      privacy: "Confidentialité",
      terms: "Conditions",
      licensed: "Entièrement agréé",
    },
    about: {
      badge: "À propos d'Ever Retreat",
      headingLine1: "Promoteur immobilier",
      headingLine2: "basé au Rwanda",
      paragraph:
        "Ever Retreat est une entreprise immobilière rwandaise, basée au Rwanda. 120 projets réalisés. 82 professionnels internes. Architecture, construction, gestion de villas et immobilier - tout sous un même toit. L'offre immobilière la plus complète d'Afrique de l'Est.",
      stat1Label: "Projets réalisés",
      stat2Label: "Membres de l'équipe",
      stat3Label: "Années au Rwanda",
      ctaAbout: "À propos de nous",
      ctaContact: "Nous parler",
    },
    featuredIn: {
      title: "Nos partenaires",
      subtitle: "La confiance d'organisations de premier plan à travers l'Afrique",
    },
    heroSlideshow: {
      label: "Résidences en vedette",
      explorePrefix: "Découvrir",
    },
    developmentsSection: {
      sectionLabel: "Résidences actuelles",
      heading: "Investissez dans nos derniers projets",
      headingLight: "Investissez dans nos",
      headingBold: "derniers projets",
      viewAll: "Voir toutes les résidences",
      explorePrefix: "Découvrir",
      items: {
        "nara-villas": {
          description: "Notre villa modèle achevée à Rubavu, avec piscine privée, conçue pour illustrer notre niveau de conception et de construction.",
          features: ["Rubavu", "Villa modèle", "Piscine privée"],
        },
        "suku-residences": {
          description: "Une communauté de villas bien-être à Musanze, alliant design moderne et vie en montagne.",
          features: ["Villas bien-être", "Musanze", "Vue sur la montagne"],
        },
        "solas-uluwatu": {
          description: "Notre villa modèle achevée à Rubavu, avec vue panoramique sur le lac.",
          features: ["Vue sur le lac", "Villa modèle", "Rubavu"],
        },
        "nyungwe-retreat": {
          description: "Une nouvelle résidence génératrice de revenus à Nyungwe, sur plan et actuellement en conception - pleine propriété, conçue pour le revenu locatif de courte durée, pas seulement pour l'habitation.",
          features: ["Nyungwe", "Sur Plan"],
        },
        "huye-villas": {
          description: "Une nouvelle résidence génératrice de revenus à Huye, sur plan et actuellement en conception - pleine propriété, conçue pour le revenu locatif de courte durée, pas seulement pour l'habitation.",
          features: ["Huye", "Sur Plan"],
        },
        "nyanza-villas": {
          description: "Une nouvelle résidence génératrice de revenus à Nyanza, sur plan et actuellement en conception - pleine propriété, conçue pour le revenu locatif de courte durée, pas seulement pour l'habitation.",
          features: ["Nyanza", "Sur Plan"],
        },
        "akagera-retreat": {
          description: "Une nouvelle résidence génératrice de revenus à Akagera, sur plan et actuellement en conception - pleine propriété, conçue pour le revenu locatif de courte durée, pas seulement pour l'habitation.",
          features: ["Akagera", "Sur Plan"],
        },
        "kigali-retreat": {
          description: "Une nouvelle résidence génératrice de revenus à Kigali, actuellement en conception - pleine propriété, conçue pour le revenu locatif, pas seulement pour l'habitation.",
          features: ["Kigali", "Génératrice de Revenus"],
        },
      },
      badges: {
        prototype: "Prototype",
        comingSoon: "Sur Plan",
      },
      notForSale: "Pas à vendre",
      propertyType: "Villa résidentielle",
    },
    ctaSections: {
      getPrices: {
        eyebrow: "Une villa vous plaît ?",
        heading: "Obtenez les prix et la disponibilité",
        headingLight: "Obtenez les prix et",
        headingBold: "la disponibilité",
        paragraph:
          "Indiquez-nous votre budget et votre échéancier. Nous vous proposons les résidences qui correspondent, avec les prix actuels, ce qui est encore disponible, et des chiffres de rendement honnêtes. Aucune pression commerciale.",
      },
      bringToLife: {
        eyebrow: "Conception et construction",
        heading: "Donnons vie à votre villa",
        enquire: "Nous contacter",
        chatWhatsapp: "Discuter sur WhatsApp",
      },
      investInRwanda: {
        eyebrow: "Investir au Rwanda",
        heading: "Prêt à investir au Rwanda ?",
        enquire: "Nous contacter",
      },
    },
    forms: {
      fullName: "Nom complet",
      emailAddress: "Adresse e-mail",
      whatsappNumber: "Numéro WhatsApp",
      tellUsMore: "Dites-nous en plus",
      sendEnquiry: "Envoyer la demande",
      sending: "Envoi en cours...",
      successTitle: "Merci — presque terminé !",
      successBody: "Nous avons ouvert WhatsApp avec votre message prêt à envoyer. Il ne vous reste qu'à l'envoyer pour joindre notre équipe.",
      errorRequired: "Ce champ est obligatoire.",
      errorEmail: "Saisissez une adresse e-mail valide.",
      errorPhone: "Saisissez un numéro de téléphone valide.",
      yourName: "Votre nom",
      yourEmail: "Votre e-mail",
      yourPhone: "Votre numéro WhatsApp",
      friendsName: "Nom de votre ami(e)",
      friendsEmail: "E-mail de votre ami(e)",
      friendsWhatsapp: "WhatsApp de votre ami(e)",
      messageOptional: "Message (facultatif)",
      submitReferral: "Envoyer la recommandation",
      interestedIn: "Je suis intéressé(e) par",
      interestedInOptions: {
        villaBuild: "Construire une villa au Rwanda",
        landSourcing: "Recherche de terrain",
        villaInvestment: "Investissement dans une villa",
        villaManagement: "Gestion de villa",
        general: "Demande générale",
      },
      message: "Message",
      sendMessage: "Envoyer le message",
      searchCountry: "Rechercher un pays",
      errorVerification: "Veuillez compléter la vérification.",
      verifying: "Vérification en cours...",
    },
    services: {
      eyebrow: "Ce que nous faisons",
      heading: "Services immobiliers complets",
      headingLight: "Des services immobiliers",
      headingBold: "de bout en bout",
      paragraph:
        "De la recherche de terrain à la gestion de votre villa achevée, notre équipe interne de 82 personnes gère chaque étape du cycle de vie immobilier. Sans intermédiaires, sans transferts.",
      pricePrefix: "À partir de",
      items: {
        architecture: {
          title: "Architecture et design",
          priceSuffix: "· 50 % de réduction avec construction",
          description:
            "Équipe d'architecture interne. 120 villas modernes tropicales conçues pour le climat rwandais. Architecture sur mesure conçue pour la performance locative et la conformité climatique.",
        },
        construction: {
          title: "Construction",
          priceSuffix: "/m²",
          description:
            "Gestion complète de la construction avec une équipe interne de 82 personnes. Contrats à prix fixe, des fondations à la remise des clés.",
        },
        villaManagement: {
          title: "Gestion de villas",
          price: "À partir de 20 % par réservation",
          description:
            "Revenus locatifs sans effort. Annonces, gestion des clients, tarification dynamique et entretien - tout est pris en charge.",
        },
        landSourcing: {
          title: "Recherche de terrains",
          price: "Pleine propriété et bail",
          description:
            "Nous recherchons et évaluons des terrains dans les zones d'investissement les plus prisées du Rwanda. Diligence raisonnable juridique, vérifications de zonage et négociation - avant tout engagement.",
        },
      },
      partnershipsEyebrow: "Pour propriétaires fonciers et investisseurs",
      partnershipsTitle: "Partenariats de développement",
      partnershipsDescription:
        "Vous possédez déjà un terrain ou souhaitez développer un projet ? Nous nous associons aux propriétaires fonciers et aux investisseurs pour concevoir, construire, vendre et gérer des résidences de villas complètes.",
      learnMore: "En savoir plus",
      packagesTitle: "Formules villas",
      packagesDescriptionPrefix: "Découvrez nos formules villas populaires à partir de",
      viewPackages: "Voir les formules villas",
      fixedPriceQuestion: "Vous cherchez une option à prix fixe ?",
    },
    whyRwanda: {
      eyebrow: "Pourquoi le Rwanda",
      heading: "La première destination d'investissement immobilier du Rwanda",
      paragraph:
        "Le Rwanda est l'un des marchés d'investissement immobilier émergents les plus solides d'Afrique. Une croissance touristique constante, un terrain constructible limité dans les zones prisées et des rendements locatifs élevés font du Rwanda l'une des meilleures destinations d'investissement immobilier au monde.",
      stats: [
        { value: "N°1", label: "Marché d'investissement au Rwanda" },
        { value: "1,5M+", label: "Visiteurs annuels" },
        { value: "15-20 %", label: "Rendement locatif" },
        { value: "7-15 %", label: "Appréciation annuelle" },
        { value: "85 %+", label: "Taux d'occupation moyen" },
      ],
      cta: "Lire notre guide d'investissement immobilier au Rwanda",
    },
    portfolioSection: {
      eyebrow: "Notre portefeuille",
      heading: "Conçu pour vivre. Construit pour investir.",
      paragraph:
        "Découvrez une sélection de villas, de concepts architecturaux et de projets de développement qui illustrent notre approche du design moderne, de la construction de qualité et du développement immobilier axé sur l'investissement au Rwanda.",
      items: {
        bp: {
          title: "Villa B&P Ever Retreat",
          description: "Architecture de villa de luxe inspirée du paysage et du style de vie du lac Kivu.",
          cta: "Découvrir le projet",
        },
        virunga: {
          title: "Villas Virunga",
          description: "Villas contemporaines conçues pour le confort, l'intimité et la valeur d'investissement à long terme.",
          cta: "Découvrir le projet",
        },
        everRetreat: {
          title: "Ever Retreat",
          description: "Une destination hôtelière alliant architecture, nature et l'expérience unique du lac Kivu.",
          cta: "Découvrir Ever Retreat",
        },
        everDesign: {
          title: "Ever Design",
          description: "Des solutions d'architecture et de construction pour les clients souhaitant créer leur propre propriété au Rwanda.",
          cta: "Démarrer votre projet",
        },
      },
    },
    investmentMarket: {
      eyebrow: "Pourquoi le Rwanda",
      heading: "Un marché d'investissement éprouvé",
      paragraph:
        "Investir dans l'immobilier au Rwanda, c'est acheter ou construire des villas pour générer des revenus locatifs et une plus-value en capital. Avec des rendements locatifs bruts constants de 15 à 20 %, des taux d'occupation élevés et une forte appréciation du capital, notre équipe de 82 personnes gère tout, de la recherche de terrain aux revenus locatifs.",
      stat1: "Rendement brut",
      stat2: "Membres de l'équipe",
      stat3: "Gestion",
      cta: "En savoir plus sur l'investissement au Rwanda",
      sideStat1Label: "Rendement brut moyen",
      sideStat2Label: "Taux d'occupation moyen",
      sideStat3Label: "Projets réalisés",
      sideStat4Label: "Années au Rwanda",
    },
    socialFollowing: {
      joinLine: "Suivez notre parcours",
    },
    howItWorks: {
      eyebrow: "Comment ça marche",
      heading: "Comment fonctionne l'investissement dans une villa Ever Retreat ?",
      paragraph:
        "De la première demande aux revenus locatifs, en quatre étapes simples. Aucune étape cachée, aucune complexité.",
      steps: [
        {
          timeline: "SEMAINE 1",
          title: "Choisissez votre résidence",
          description: "Parcourez nos résidences et trouvez celle qui correspond à vos objectifs et à votre budget.",
        },
        {
          timeline: "SEMAINE 2-4",
          title: "Réservez avec {price}",
          description: "Un acompte de {price} réserve votre villa. Le reste est versé par étapes liées à la construction.",
        },
        {
          timeline: "MOIS 3-18",
          title: "Payez au fur et à mesure de la construction",
          description: "Quatre paiements liés à de véritables jalons de construction. Aucune surprise.",
        },
        {
          timeline: "MOIS 18+",
          title: "Commencez à générer des revenus",
          description: "La villa passe sous gestion et commence à générer des revenus locatifs.",
        },
      ],
      ctaPrimary: "Commencez votre parcours",
      ctaSecondary: "Voir le processus complet",
    },
    calculator: {
      eyebrow: "Outil gratuit",
      heading: "Combien coûtera votre villa ?",
      paragraph:
        "Utilisez notre calculateur de construction pour estimer les coûts de construction, les prix des terrains et les rendements projetés pour votre projet de villa au Rwanda.",
      cta: "Essayer le calculateur",
    },
    freeGuide: {
      eyebrow: "Édition gratuite 2026",
      heading: "Le guide Ever Retreat pour investir au Rwanda",
      paragraph:
        "Quatre-vingts pages de tout ce que nous aurions aimé savoir avant d'acheter. Structures juridiques, données de rendement par région, coûts de construction, fiscalité et risques réels. Mis à jour pour 2026.",
      points: [
        "Comment les étrangers peuvent légalement posséder une propriété au Rwanda",
        "Fourchettes de rendement pour chaque région clé, avec les prix des terrains 2026",
        "Le coût réel d'une construction 2 chambres tout compris",
        "Les obligations fiscales que la plupart des agents passent sous silence",
      ],
      sendGuide: "Envoyez-moi le guide",
    },
    areasSection: {
      eyebrow: "Explorer le Rwanda",
      heading: "Où investir",
      headingLight: "Où",
      headingBold: "investir",
      paragraph:
        "Chaque région du Rwanda a son propre caractère, son niveau de prix et son profil d'investissement. Voici où nos clients construisent leurs villas.",
      viewAll: "Voir toutes les régions",
      items: {
        kigali: { description: "Capitale avec les valeurs foncières les plus élevées et une demande locative constante d'expatriés et de voyageurs d'affaires." },
        musanze: { description: "Région des volcans — trekking des gorilles, lodges de luxe et retraites de montagne avec une forte demande touristique." },
        rubavu: { description: "Front de mer du lac Kivu — locations de vacances haut de gamme et villas de luxe au bord du lac avec des tarifs nocturnes élevés." },
        nyungwe: { description: "Lisière de forêt — hébergement écotouristique et investissements dans des lodges durables avec une demande croissante." },
        huye: { description: "Pôle culturel de la province du Sud — ville universitaire proche de Nyungwe et du lac Kivu, avec des terrains abordables." },
        nyanza: { description: "Ancienne capitale proche du lac Kivu et de Nyungwe — pôle historique avec un tourisme croissant et une entrée abordable." },
        evane: { description: "Station d'altitude des hauts plateaux du nord, entre Kigali et Musanze — paysages pittoresques à prix accessibles." },
        akagera: { description: "Proximité du parc national — lodges safari et éco-retraites exclusives à tarification haut de gamme." },
      },
    },
    portfolioGallery: {
      eyebrow: "Notre travail",
      heading: "120 projets réalisés. Et ça continue.",
      paragraph: "Dix ans de construction à travers le Rwanda - de Rubavu à Musanze, de Kigali à Huye.",
      viewFull: "Voir tout le portefeuille",
      filterAllLabel: "Tous",
      categoryExteriors: "Extérieurs",
      categoryInteriors: "Intérieurs",
      categoryAmenities: "Équipements",
      showingCount: "Affichage de {shown} sur {total}",
    },
    testimonials: {
      quotes: [
        {
          quote:
            "Ils ont rendu le processus extrêmement simple et se sont occupés de absolument tout. Nous avons adoré les mises à jour hebdomadaires avec photos pendant la construction. Voir ces rendus prendre vie était formidable. Je recommande vivement Ever Retreat et son équipe de gestion.",
          author: "Virginia B.",
        },
        {
          quote:
            "Investir à l'étranger peut faire peur, mais l'équipe d'Ever Retreat a rendu cela très simple et sûr, me donnant confiance que mon argent est en sécurité. L'équipe a été très présente et compréhensive dès le premier jour.",
          author: "Joseph D.",
        },
        {
          quote:
            "Le processus s'est déroulé sans accroc à chaque étape. Toute l'équipe est professionnelle et réactive, tout le monde a été très agréable. Le résultat dépasse nos attentes. Merci à toute l'équipe pour leur excellente communication.",
          author: "Dmitry D.",
        },
      ],
      readAll: "Lire tous les avis",
    },
    team: {
      eyebrow: "Notre équipe",
      heading: "Les personnes derrière la construction",
      headingLight: "Les personnes",
      headingBold: "derrière la construction",
      paragraph:
        "Une équipe de terrain de 82 architectes, ingénieurs, chefs de projet, conseillers juridiques et gestionnaires immobiliers basés au Rwanda. Vous traitez directement avec les personnes qui font le travail.",
      meetTeam: "Rencontrer toute l'équipe",
      otherPeople: "Une partie de l'équipe de 82 personnes d'Ever Retreat",
      roles: {
        ceo: "PDG",
        architectureManager: "Responsable Architecture",
        hospitalityManager: "Responsable Hôtellerie",
        accountant: "Comptable",
        operationsManager: "Responsable des Opérations",
        siteEngineer: "Ingénieur de Chantier",
        it: "Informatique",
        procurementOfficer: "Responsable des Achats",
      },
      roleDescriptions: {
        ceo: "Dirige la stratégie globale, les opérations et les relations clients d'Ever Retreat.",
        architectureManager: "Dirige la conception architecturale et la planification de tous les développements Ever Retreat.",
        hospitalityManager: "Supervise la gestion des villas, l'expérience des clients et les opérations de location.",
        accountant: "Gère les finances de l'entreprise, le budget et les rapports financiers.",
        operationsManager: "Coordonne les opérations quotidiennes entre les départements et les projets en cours.",
        siteEngineer: "Supervise la construction sur site, le contrôle qualité et la sécurité.",
        it: "Maintient les systèmes technologiques et l'infrastructure numérique de l'entreprise.",
        procurementOfficer: "Approvisionne en matériaux et gère les relations fournisseurs et la logistique d'achat.",
      },
    },
    faqSection: {
      eyebrow: "Questions fréquentes",
      heading: "Investir dans l'immobilier au Rwanda",
      headingLight: "Investir dans",
      headingBold: "l'immobilier au Rwanda",
      paragraph: "Nouveau dans l'immobilier rwandais ? Voici les questions les plus posées par nos clients. Notre équipe est toujours disponible pour vous accompagner dans les détails.",
      viewAll: "Voir toutes les FAQ",
      items: [
        {
          question: "Les étrangers peuvent-ils acheter une propriété au Rwanda ?",
          answer:
            "Les étrangers ne peuvent pas détenir un titre foncier en pleine propriété au Rwanda à titre personnel. Cependant, ils peuvent légalement sécuriser un terrain au Rwanda via des accords de bail (jusqu'à 99 ans) ou via des structures d'entreprise. Notre équipe juridique interne veille à ce que chaque acquisition soit entièrement conforme à la législation foncière rwandaise.",
        },
        {
          question: "Quelle est la différence entre pleine propriété et bail ?",
          answer:
            "Au Rwanda, les étrangers ne peuvent pas posséder un terrain en pleine propriété à titre personnel. Cependant, ils peuvent légalement sécuriser un terrain via des accords de bail (jusqu'à 99 ans) ou via des structures d'entreprise. Le bail est l'option standard pour les acheteurs étrangers, avec des possibilités de prolongation via l'Office rwandais de gestion et d'utilisation des terres (RMLA).",
        },
        {
          question: "Quel retour sur investissement puis-je attendre d'une villa au Rwanda ?",
          answer:
            "Les villas gérées par Ever Retreat atteignent généralement un rendement locatif brut de 15 à 20 % par an, selon l'emplacement, la taille de la villa et l'occupation. Les rendements varient selon la région et la qualité de la gestion.",
        },
        {
          question: "Combien de temps faut-il pour construire une villa au Rwanda ?",
          answer:
            "La plupart des constructions de villas prennent de 12 à 18 mois, de l'approbation du design à la remise des clés. Toutes nos constructions utilisent des structures en béton nécessitant un temps de séchage approprié à chaque étape.",
        },
        {
          question: "Comment fonctionne l'acompte et le paiement ?",
          answer:
            "Un acompte sécurise votre réservation. Le solde restant est payé par étapes liées à l'avancement réel de la construction, et non à des dates fixes, afin que vous ne payiez qu'à mesure que les travaux sont réellement réalisés.",
        },
        {
          question: "Ever Retreat gère-t-il le bien après la remise des clés ?",
          answer:
            "Oui. La gestion de la villa est optionnelle mais disponible sur chaque développement, à partir de 20 % par réservation. Elle couvre la mise en ligne, la gestion des voyageurs, la tarification dynamique et l'entretien, pour une propriété sans contrainte.",
        },
        {
          question: "Dans quelles régions du Rwanda Ever Retreat construit-il ?",
          answer:
            "Nos développements et la recherche de terrains couvrent actuellement Kigali, Musanze, Rubavu, Nyungwe, Huye et Nyanza. Chaque région est évaluée selon la demande touristique, l'accès et la valeur foncière à long terme avant tout engagement.",
        },
        {
          question: "Que faire si je possède déjà un terrain au Rwanda ?",
          answer:
            "Nous proposons des partenariats de développement aux propriétaires fonciers : notre équipe conçoit, construit et peut gérer un développement de villas sur un terrain que vous possédez déjà, selon le même modèle à prix fixe et interne que nos propres projets.",
        },
        {
          question: "Dans quelle devise les prix sont-ils affichés ?",
          answer:
            "Les prix sur notre site sont affichés par défaut en USD, avec une bascule en temps réel vers le franc rwandais (RWF). Les contrats et factures finales sont émis dans la devise convenue avec votre conseiller.",
        },
      ],
    },
    blogSection: {
      eyebrow: "Sur le blog",
      heading: "Dernières analyses",
      headingLight: "Dernières",
      headingBold: "Analyses",
      readMore: "Lire la suite",
      viewAll: "Voir tous les articles",
      posts: [
        {
          title: "Combien rapporte réellement une villa au Rwanda en location ?",
          excerpt:
            "Tarifs nocturnes, données d'occupation et répartition du rendement net par région, ainsi que ce qui est inclus dans la gestion locative complète.",
        },
        {
          title: "Meilleure région où investir au Rwanda (2026)",
          excerpt:
            "Comparaison de Rubavu, Musanze, Kigali, Nyungwe et Huye. Données de rendement réelles et prix des terrains d'une équipe qui construit dans ces cinq régions.",
        },
        {
          title: "Les étrangers peuvent-ils acheter une propriété au Rwanda ?",
          excerpt:
            "Oui, via un bail ou des structures d'entreprise. Guide complet des structures de propriété légales, des coûts, des erreurs courantes et du processus d'achat étape par étape.",
        },
        {
          title: "Comparaison d'investissement : lac Kivu contre Musanze",
          excerpt:
            "Comparaison des prix des terrains, des rendements et des facteurs de style de vie entre les deux principales destinations d'investissement en villas du Rwanda.",
        },
        {
          title: "Combien Coûte La Construction D'Une Villa Au Rwanda ?",
          excerpt: "Coûts de construction réels à partir de 1 000 $ par m², prix des terrains par région et budgets totaux de projet.",
        },
        {
          title: "Comment Construire Une Villa Au Rwanda",
          excerpt: "Le processus complet, de la recherche de terrain et des permis à la construction, la remise des clés et la mise en location.",
        },
      ],
    },
    blogCategories: {
      investment: "Investissement",
      location: "Emplacement",
      legal: "Juridique",
      building: "Construction",
    },
    newsletter: {
      eyebrow: "Restez en avance sur le marché",
      heading: "Recevez des analyses d'investissement exclusives",
      headingLight: "Recevez des analyses",
      headingBold: "d'investissement exclusives",
      paragraph: "Rapports de marché, lancements de nouvelles résidences et données de rendement. Livrés chaque mois aux investisseurs sérieux. Sans fioritures.",
      placeholder: "Votre adresse e-mail",
      cta: "Envoyez-moi les rapports",
    },
    finalCta: {
      eyebrow: "Consultation gratuite",
      heading: "Prêt à construire au Rwanda ?",
      paragraph:
        "Que vous ayez déjà un terrain ou que vous exploriez encore vos options, notre équipe vous donne des réponses claires. Sans obligation, sans pression - juste de vrais conseils de personnes qui ont fait cela 120 fois.",
      benefits: [
        "Des conseils honnêtes sur les emplacements, les budgets et les rendements",
        "Des réponses claires sur la propriété étrangère et les structures juridiques",
        "Aucune pression commerciale - nous répondons à vos questions, vous décidez",
        "Réponse sous 24 heures, du lundi au vendredi, 8h-17h CAT",
      ],
    },
    realEstatePage: {
      hero: {
        eyebrow: "Immobilier",
        headlineLight: "Ever Retreat",
        headlineBold: "Propriétés",
        subtext:
          "Des villas vitrines achevées aux résidences en cours de conception, dans les régions les plus recherchées du Rwanda.",
        stat1Label: "Villas Vitrines Achevées",
        stat2Label: "Résidences À Travers Le Rwanda",
        stat3Label: "Régions Couvertes",
        stat4Value: "Complet",
        stat4Label: "Service De Bout En Bout",
      },
      about: {
        eyebrow: "À Propos De Notre Immobilier",
        headingLight: "Fondé Sur La Confiance,",
        headingBold: "Porté Par L'Expérience",
        paragraphs: [
          "Ever Retreat est une société immobilière rwandaise, basée au Rwanda et détenue par des Rwandais. Architecture, construction, gestion de villas et immobilier — tout sous un même toit.",
          "Nous gérons chaque étape du cycle de vie du bien en interne, afin que vous traitiez directement avec les personnes qui font le travail, et non avec une chaîne de sous-traitants et d'intermédiaires.",
          "Nos résidences actuelles vont de villas vitrines achevées à Rubavu à de nouveaux projets en conception dans les régions les plus recherchées du Rwanda.",
          "Que vous achetiez une villa terminée, réserviez une unité sur plan, ou développiez un terrain que vous possédez déjà, une seule équipe vous accompagne du premier croquis à la première réservation d'invité.",
        ],
        statLegalTeam: "Interne",
        statLegalTeamLabel: "Équipe Juridique",
        statFixedPrice: "Prix Fixe",
        statFixedPriceLabel: "Contrats",
        statRwanda: "Rwanda",
        statRwandaLabel: "Basé Et Détenu",
        statEndToEnd: "De Bout En Bout",
        statEndToEndLabel: "Livraison",
        cta: "Voir Toutes Les Résidences",
      },
      advantage: {
        eyebrow: "Pourquoi Acheter Avec Ever Retreat",
        headingLight: "L'Avantage",
        headingBold: "Ever Retreat",
        intro:
          "L'immobilier rwandais récompense les acheteurs qui travaillent avec une équipe qui gère le juridique, la conception, la construction et la gestion sous un même toit — pas une mosaïque de sous-traitants.",
        highlights: [
          {
            number: "01",
            title: "Équipe Juridique Interne",
            description: "Permis, titres fonciers, zonage et propriété étrangère gérés en interne.",
          },
          {
            number: "02",
            title: "Contrats À Prix Fixe",
            description: "Aucun coût surprise. Les paiements sont liés à l'avancement réel de la construction.",
          },
          {
            number: "03",
            title: "Tout Sous Un Même Toit",
            description: "Du terrain au revenu locatif. Une seule entreprise, un seul interlocuteur.",
          },
        ],
        buyingProcessTitle: "Le Processus D'Achat",
        buyingSteps: [
          { label: "Recherche de propriété", text: "Nous trouvons des propriétés correspondant à vos critères, votre budget et vos objectifs d'investissement." },
          { label: "Diligence juridique", text: "Vérification du titre, conformité du zonage et contrôles des permis." },
          { label: "Négociation", text: "Négociation du prix et accord sur les conditions." },
          { label: "Acompte de réservation", text: "Un acompte sécurise l'unité pendant que les contrats et structures sont finalisés." },
          { label: "Achat et transfert", text: "Coordination notariale et transfert de l'acte ou du bail." },
          { label: "Mise en location", text: "Mise en ligne du bien, ameublement et gestion continue (optionnel)." },
        ],
        freeholdTitle: "Pleine Propriété vs Bail",
        freeholdParagraphs: [
          "Au Rwanda, les étrangers ne peuvent pas posséder de terrain en pleine propriété à titre personnel. Cependant, ils peuvent légalement sécuriser un terrain via des accords de bail (jusqu'à 99 ans) ou via des structures d'entreprise.",
          "Le bail est l'option standard pour les acheteurs étrangers, avec des possibilités de prolongation via l'Office rwandais de gestion et d'utilisation des terres (RMLA).",
          "La structure d'entreprise est l'autre voie possible, souvent utilisée par les investisseurs achetant plusieurs unités ou prévoyant de conserver le bien sur le long terme.",
          "Notre équipe juridique interne gère les deux voies, afin que vous n'ayez pas besoin d'engager un conseil externe pour vérifier le titre ou négocier les conditions du bail.",
          "Quelle que soit la structure adaptée à votre situation, chaque acquisition est vérifiée selon la législation foncière rwandaise en vigueur avant la signature des contrats.",
        ],
        ctaEnquire: "Nous Contacter",
        ctaViewAll: "Voir Toutes Les Résidences",
      },
      services: {
        eyebrow: "Un Service Complet",
        heading: "Tout Sous Un Même Toit",
        items: [
          {
            number: "01",
            title: "Architecture Et Design",
            price: "À partir de 7 000 $",
            description: "Équipe d'architecture interne concevant des villas modernes tropicales adaptées au climat rwandais.",
            href: "/services/architecture",
          },
          {
            number: "02",
            title: "Construction",
            price: "À partir de 1 000 $/m²",
            description: "Gestion complète de la construction, à prix fixe, des fondations à la remise des clés.",
            href: "/services/construction",
          },
          {
            number: "03",
            title: "Gestion De Villa",
            price: "À partir de 20 % par réservation",
            description:
              "Revenu locatif sans contrainte — mise en ligne, gestion des voyageurs, tarification dynamique et entretien, tout est pris en charge.",
            href: "/services/villa-management",
          },
        ],
        learnMore: "En Savoir Plus",
      },
      featured: {
        eyebrow: "Résidences Actuelles",
        heading: "Découvrez Nos Résidences",
        paragraph:
          "Des villas vitrines achevées aux résidences encore en conception — voici une sélection de ce qu'Ever Retreat construit à travers le Rwanda.",
        viewDetails: "Voir Les Détails",
        viewAll: "Voir Les 8 Résidences",
      },
      routes: {
        eyebrow: "Plus D'Une Façon D'Investir",
        headingLight: "D'Autres Façons",
        headingBold: "D'Investir Avec Nous",
        items: [
          {
            title: "Acheter Une Villa Terminée",
            description: "Visitez un prototype achevé et meublé avant de vous engager dans votre propre construction.",
            stat1Label: "Type",
            stat1Value: "Prototype",
            stat2Label: "Statut",
            stat2Value: "Visible Maintenant",
          },
          {
            title: "Réserver Une Résidence En Conception",
            description: "Sécurisez une unité tôt dans l'une de nos prochaines résidences avant le début des travaux.",
            stat1Label: "Type",
            stat1Value: "Sur Plan",
            stat2Label: "Statut",
            stat2Value: "Bientôt Disponible",
          },
          {
            title: "Propriété Fractionnée",
            description: "Possédez une part du revenu locatif d'une villa sans financer vous-même la totalité de la construction.",
            stat1Label: "Type",
            stat1Value: "Capital Partagé",
            stat2Label: "Statut",
            stat2Value: "Ouvert",
          },
          {
            title: "Sourcer Le Terrain D'Abord",
            description: "Vous avez déjà un emplacement en tête ? Nous évaluons et sécurisons le terrain avant la conception.",
            stat1Label: "Type",
            stat1Value: "Terrain Seul",
            stat2Label: "Statut",
            stat2Value: "En Cours",
          },
          {
            title: "Développer Un Terrain Que Vous Possédez",
            description: "Associez-vous à nous pour concevoir, construire, vendre et gérer une résidence de villas complète sur votre terrain.",
            stat1Label: "Type",
            stat1Value: "Partenariat",
            stat2Label: "Statut",
            stat2Value: "En Cours",
          },
          {
            title: "Gestion De Villa Uniquement",
            description: "Vous possédez déjà une villa au Rwanda ? Nous pouvons reprendre la gestion locative sans contrat de construction.",
            stat1Label: "Type",
            stat1Value: "Gestion",
            stat2Label: "Statut",
            stat2Value: "En Cours",
          },
        ],
        learnMore: "En Savoir Plus",
        note: "Vous ne savez pas quelle option vous convient ? Parlez-nous en et nous vous orienterons.",
      },
      whyChoose: {
        eyebrow: "Pourquoi Nous Choisir",
        heading: "Pourquoi Choisir Ever Retreat",
        items: [
          {
            title: "Détenu Et Géré De Façon Éthique",
            description: "Gestion de projet à l'occidentale, tarification transparente, responsabilité totale.",
          },
          {
            title: "Architecture Éco-Responsable",
            description:
              "Principes de conception durable appliqués à chaque villa, conçue pour le climat et le paysage du Rwanda.",
          },
          {
            title: "Équipe Juridique Interne",
            description: "Permis, titres fonciers, zonage et propriété étrangère gérés en interne.",
          },
          {
            title: "Tout Sous Un Même Toit",
            description: "Du terrain au revenu locatif. Une seule entreprise, un seul interlocuteur.",
          },
          {
            title: "Contrats À Prix Fixe",
            description: "Aucun coût surprise. Les paiements sont liés à l'avancement réel de la construction.",
          },
          {
            title: "Bureaux Physiques Au Rwanda",
            description: "Bureaux à Kigali. Venez rencontrer l'équipe.",
          },
        ],
        talkToUs: "Nous Parler",
        seeCaseStudy: "Voir L'Étude De Cas",
        viewDevelopments: "Voir Les Résidences",
      },
      faq: {
        headingLight: "Questions",
        headingBold: "Immobilières",
        stillHaveQuestionsTitle: "Encore Des Questions ?",
        stillHaveQuestionsText:
          "Notre équipe peut vous expliquer directement la tarification, les structures juridiques et les délais.",
        contactUs: "Nous Contacter",
        viewAllFaqs: "voir toutes les FAQ",
      },
      areas: {
        headingLight: "Explorer Par",
        headingBold: "Région",
        explorePrefix: "Explorer",
      },
      finalCta: {
        eyebrow: "Prêt Quand Vous L'Êtes",
        headingLight: "Trouvons Votre",
        headingBold: "Propriété Au Rwanda",
        paragraph:
          "Que vous achetiez une villa terminée, en réserviez une sur plan, ou développiez un terrain que vous possédez déjà, notre équipe peut vous présenter les options en un seul appel.",
        enquireNow: "Nous Contacter",
        viewDevelopments: "Voir Les Résidences",
        quickLinksLabel: "Liens Rapides",
        linkServices: "Services",
        linkPortfolio: "Portfolio",
        linkAreas: "Régions",
        linkAbout: "À Propos",
        statShowcaseLabel: "Villas Vitrines Achevées",
        statDevelopmentsLabel: "Résidences À Travers Le Rwanda",
        statRegionsLabel: "Régions Où Nous Construisons",
      },
    },
    servicesPage: {
      trustBar: {
        stat1Value: "82",
        stat1Label: "Équipe Interne",
        stat2Value: "120",
        stat2Label: "Projets Réalisés",
        stat3Value: "8",
        stat3Label: "Résidences À Travers Le Rwanda",
        stat4Value: "2",
        stat4Label: "Villas Vitrines Achevées",
      },
      servicesEyebrow: "Ce Que Nous Faisons",
      servicesHeadingLight: "Tout Sous",
      servicesHeadingBold: "Un Même Toit",
      serviceItems: {
        architecture: {
          tagline: "Moderne Tropical, Conçu Pour Le Rwanda",
          description1:
            "Notre équipe d'architecture interne a conçu 120 éco-lodges et villas à travers le Rwanda. Chaque plan équilibre esthétique moderne et climat d'altitude du Rwanda, régime pluvial saisonnier et traditions de construction locales.",
          description2:
            "Nous concevons autant pour la performance locative que pour l'esthétique — cuisines positionnées pour l'accès de service, chambres à l'écart du bruit de la route, et un espace dédié au personnel et à la buanderie dans chaque villa.",
          feature1: "Processus de conception en 5 étapes, de l'analyse du site aux documents de construction",
          feature2: "50 % de réduction sur les frais de conception si vous construisez avec nous",
          feature3: "Rendus 3D et visites virtuelles avant de vous engager",
          cta: "Découvrir l'Architecture et le Design",
        },
        construction: {
          tagline: "Conçu Pour Le Terrain Et Le Climat Du Rwanda",
          description1:
            "Construire des villas au Rwanda exige une bonne compréhension des sols latéritiques, des pluies saisonnières et des considérations sismiques. Notre équipe interne de 82 personnes utilise des structures en béton armé avec des fondations adaptées à la latérite et une conception adaptée au climat.",
          description2:
            "De la Villa B&P Ever Retreat au lac Kivu aux Villas Virunga près des volcans, chaque projet est géré par des ingénieurs certifiés ayant une expertise locale, avec des contrats à prix fixe des fondations à la remise des clés.",
          feature1: "Matériaux certifiés conformes aux normes de construction rwandaises",
          feature2: "Délai de construction moyen de 6 à 9 mois",
          feature3: "Contrats à prix fixe, sans coûts surprises",
          cta: "Découvrir la Construction",
        },
        villaManagement: {
          tagline: "Maximisez Les Revenus De Votre Propriété Au Rwanda",
          description1:
            "Que vous possédiez une villa au lac Kivu, une retraite de montagne près des volcans, ou une maison à Kigali, notre équipe de gestion s'occupe de tout — photographie professionnelle, annonces sur toutes les plateformes, tarification dynamique, communication avec les voyageurs, ménage et support 24h/24.",
          description2:
            "Nous gérons 120 propriétés à Kigali, Musanze, Rubavu, Nyungwe et Akagera, avec des rapports de performance mensuels et un portail propriétaire pour les réservations et revenus en temps réel.",
          feature1: "Annoncé sur Airbnb, VRBO, Booking.com et les plateformes locales",
          feature2: "Ajustements de tarification dynamique quotidiens",
          feature3: "Frais de gestion à partir de 20 % par réservation",
          cta: "Découvrir la Gestion de Villa",
        },
        landSourcing: {
          tagline: "Trouver Le Bon Terrain Au Rwanda",
          description1:
            "Acheter un terrain au Rwanda exige de comprendre les règles de zonage locales, la vérification des titres et l'adéquation du terrain. Notre équipe recherche et évalue des terrains dans les zones d'investissement prioritaires du Rwanda — du front de lac Kivu aux hauteurs de Musanze.",
          description2:
            "Des structures en bail ou éligibles à la pleine propriété sont disponibles. Notre équipe juridique interne gère la vérification des titres, la conformité environnementale et toute la documentation de transfert, avec une diligence raisonnable complète avant votre engagement.",
          feature1: "Diligence raisonnable juridique complète avant votre engagement",
          feature2: "Vérifications de zonage et de conformité environnementale",
          feature3: "Couverture à Kigali, Musanze, Rubavu, Nyungwe et le lac Kivu",
          cta: "Découvrir la Recherche de Terrain",
        },
        developmentPartnerships: {
          tagline: "Vous Possédez Déjà Un Terrain ? Développons-Le Ensemble.",
          description1:
            "Si vous possédez un terrain au Rwanda — au lac Kivu, dans les hauteurs de Musanze, ou près de Kigali — nous pouvons nous associer à vous pour le transformer en un développement de villas rentable. Nous apportons l'architecture, la construction, le marketing, la vente et la gestion locative. Vous apportez le terrain.",
          description2:
            "Les profits sont partagés selon la contribution, généralement 50/50 ou 60/40, avec une seule équipe gérant tout, de la conception aux premières réservations.",
          feature1: "Structures de coentreprise adaptées à votre contribution",
          feature2: "Une seule équipe, du concept à la première réservation",
          feature3: "Modèle éprouvé sur des développements au lac Kivu, à Musanze et à Kigali",
          cta: "Découvrir les Partenariats de Développement",
        },
      },
      promise: {
        eyebrow: "Notre Engagement",
        heading: "Prix Fixe, Sans Surprises",
        paragraph1:
          "Chaque contrat Ever Retreat est à prix fixe dès le départ. Les paiements sont liés à l'avancement réel de la construction, et non à des dates fixes, afin que vous ne payiez qu'à mesure que les travaux sont réellement réalisés.",
        paragraph2:
          "Architecture, construction, gestion de villas et recherche de terrain sont tous réunis sous un même toit, avec une seule équipe interne et un seul interlocuteur — sans transferts de sous-traitants, sans dérive de périmètre, sans avenants surprises.",
      },
      moreServicesEyebrow: "D'Autres Façons De Vous Aider",
      moreServicesHeading: "Au-Delà Des Services Principaux",
      moreServiceItems: {
        interiorDesign: {
          title: "Design d'Intérieur",
          description:
            "Intérieurs moderne tropical, scandinave minimaliste, moderne rwandais ou japandi, conçus pour correspondre à l'architecture de votre villa et à son positionnement locatif.",
        },
        landscape: {
          title: "Aménagement Paysager",
          description:
            "Plantations locales, points d'eau et espaces de vie extérieurs conçus pour le climat du Rwanda et l'expérience de vos voyageurs.",
        },
        projectManagement: {
          title: "Gestion de Projet",
          description:
            "Supervision indépendante de votre construction, de la coordination des entrepreneurs au contrôle qualité et à la remise des clés.",
        },
        packages: {
          title: "Formules Villa",
          description:
            "Des formules de villas préconçues avec une tarification transparente et tout compris — parcourez une gamme adaptée à différents budgets et terrains.",
        },
        developerGuide: {
          title: "Choisir Un Promoteur",
          description:
            "Pas encore prêt à vous engager ? Notre guide explique ce qu'il faut vérifier avant de choisir un promoteur au Rwanda, y compris nous.",
        },
      },
      moreServicesLearnMore: "En Savoir Plus",
      closingEyebrow: "Prêt À Commencer ?",
      closingHeadingLight: "Parlons De",
      closingHeadingBold: "Votre Projet Au Rwanda",
      closingParagraph:
        "Que vous conceviez à partir de zéro, construisiez sur un terrain que vous possédez déjà, ou recherchiez un revenu locatif sans contrainte, notre équipe peut vous présenter le bon service en un seul appel.",
      closingCtaPrimary: "Nous Contacter",
      closingCtaSecondary: "Voir Les Résidences",
    },
    faqPage: {
      topicBuying: "Achat Et Propriété",
      topicInvestment: "Investissement Et Rendement",
      topicBuilding: "Construction Et Délais",
      topicOngoing: "Gestion Et Régions",
      resourcesEyebrow: "À Lire Aussi",
      resourcesHeading: "Sur Le Blog",
      servicesEyebrow: "Aller Plus Loin",
      servicesHeading: "Nos Services Principaux",
      exploreLabel: "Lire La Suite",
      closingEyebrow: "Encore Des Questions ?",
      closingHeadingLight: "Parlons De",
      closingHeadingBold: "Votre Projet Au Rwanda",
      closingParagraph:
        "Notre équipe peut vous expliquer directement la tarification, les structures juridiques et les délais — sans obligation, sans pression.",
      closingCtaPrimary: "Nous Contacter",
      closingCtaSecondary: "Voir Les Résidences",
    },
    developmentsPage: {
      heroEyebrow: "Sur Plan Et Prêtes À L'Achat",
      heroHeadingLine1: "Investissez Dans Nos",
      heroHeadingLine2: "Résidences",
      stat1Label: "À Partir De",
      stat2Label: "Rendement",
      stat3Label: "Résidences",
      stat4Label: "Gestion",
      ctaPrimary: "Nous Contacter",
      ctaSecondary: "WhatsApp",
      activeEyebrow: "Disponible Maintenant",
      activeHeading: "Résidences Actives",
      activeHeadingLight: "Résidences",
      activeHeadingBold: "Actives",
    },
    pricingFormSection: {
      eyebrow: "Une villa vous plaît ?",
      heading: "Laquelle Vous Correspond ?",
      paragraph:
        "Indiquez-nous votre budget et vos délais, et nous vous proposons les résidences correspondantes, avec les prix actuels, les disponibilités réelles et des chiffres de rendement honnêtes. Sans pression commerciale.",
      feature1: "Adapté à votre budget et à vos objectifs",
      feature2: "Prix actuels et disponibilité réelle",
      feature3: "Réponses claires sur les rendements, la propriété et les délais",
    },
    interestedInInvesting: {
      eyebrow: "Consultation Gratuite",
      heading: "Intéressé Par L'Investissement ?",
      paragraph:
        "Que vous ayez déjà un terrain ou que vous exploriez encore vos options, notre équipe vous donne des réponses claires. Sans obligation, sans pression - juste de vrais conseils de personnes qui ont fait cela 120 fois.",
      feature1: "Des conseils honnêtes sur les emplacements, les budgets et les rendements",
      feature2: "Des réponses claires sur la propriété étrangère et les structures juridiques",
      feature3: "Aucune pression commerciale - nous répondons à vos questions, vous décidez",
      feature4: "Réponse sous 24 heures, du lundi au vendredi, 8h-17h CAT",
      ctaEnquire: "Nous Contacter",
    },
    previousDevelopments: {
      eyebrow: "Achevées",
      heading: "Nos Villas Vitrines",
      viewProject: "Voir Le Projet",
      calloutTitle: "Ce Que Signifie \"Prototype\" Ici",
      footnote:
        "Les deux villas sont entièrement construites et prêtes à être visitées, mais ne sont pas actuellement à vendre. Nous les utilisons pour prouver la qualité de notre conception et de notre construction, avant que vous ne vous engagiez sur une unité sur plan dans l'une de nos résidences actives à Kigali, Musanze, Rubavu et dans la région des Volcans.",
    },
    investmentGuidesSection: {
      eyebrow: "Avant D'Acheter",
      heading: "Guides D'Investissement",
      headingLight: "Guides",
      headingBold: "D'Investissement",
      readMore: "Lire La Suite",
      viewAll: "Voir Tous Les Articles",
    },
    contactPage: {
      heroEyebrow: "Nous Contacter",
      heroHeading: "Démarrez Votre Projet De Villa Au Rwanda",
      heroParagraph:
        "Que vous ayez déjà un terrain ou que vous exploriez encore vos options, notre équipe vous donne des réponses claires. Sans obligation, sans pression.",
      heroCta: "Nous Contacter",
      officeRwandaHqLabel: "Siège Au Rwanda",
      officeDesignStudioLabel: "Studio De Design",
      whatsappLabel: "WhatsApp",
      whatsappHours: "Lun-Ven 8h-17h CAT",
      emailLabel: "E-mail",
      hoursLabel: "Horaires D'Ouverture",
      hoursValue: "8h00 - 17h00 (CAT)",
      formEyebrow: "Envoyez-Nous Un Message",
      formHeading: "Parlez-Nous De Votre Projet",
      formHeadingLight: "Parlez-Nous De",
      formHeadingBold: "Votre Projet",
      formParagraph:
        "Qu'il s'agisse d'une nouvelle construction de villa, d'une acquisition de terrain ou d'une demande de gestion locative, notre équipe vous répondra sous 24 heures.",
      faqEyebrow: "FAQ",
      faqHeading: "Besoin D'Aide Supplémentaire ?",
      faqHeadingLight: "Besoin D'Aide",
      faqHeadingBold: "Supplémentaire ?",
    },
    portfolioPage: {
      heroEyebrow: "120+ Créations à Travers le Rwanda",
      heroHeadingLight: "Portfolio de",
      heroHeadingBold: "Villas",
      heroParagraph:
        "Chaque villa est conçue à partir de zéro — adaptée à son terrain, au climat des hautes terres du Rwanda, et aux personnes qui l'habiteront ou la loueront.",
      theWorkHeadingLight: "Notre",
      theWorkHeadingBold: "Travail",
      theWorkParagraphPart1:
        "Plus de 120 conceptions de villas dans les vraies zones d'investissement du Rwanda — Rubavu, Musanze, Kigali et Huye. Des cottages de charme aux résidences complètes. Chaque projet commence avec notre ",
      theWorkParagraphLinkLabel: "équipe d'architecture",
      theWorkParagraphPart2: " et une page blanche.",
      filterEyebrow: "Projets Vedettes",
      resultsHeading: "Résultats D'Investissement",
      resultsParagraph:
        "Chaque villa de notre portefeuille est éligible à notre programme de gestion locative, offrant aux propriétaires une voie sans contrainte vers une occupation constante et une appréciation à long terme.",
      notableHeading: "Projets Notables",
      notableBpDescription: "notre villa vitrine achevée au lac Kivu.",
      notableCottageDescription: "notre villa vitrine achevée au lac Kivu.",
      notableVirungaDescription: "retraite de montagne à Musanze, en conception.",
      closingHeading: "Un Projet en Tête ?",
      closingParagraph:
        "Dites-nous ce que vous voulez construire — une villa locative, un éco-lodge ou une retraite privée — et notre équipe prendra le relais.",
      closingCtaPrimary: "Contactez-Nous",
      closingCtaSecondary: "Discuter Sur WhatsApp",
    },
    blogIndexPage: {
      heroEyebrow: "Ever Retreat Rwanda",
      heroTitle: "Blog",
      heroSubtitle: "Conseils et Ressources",
      heroIntro:
        "Analyses de marché, guides des régions, explications juridiques et données d'investissement honnêtes d'une équipe présente sur le marché immobilier rwandais depuis plus de 10 ans.",
      postsEyebrow: "Derniers Articles",
    },
    blogRentalIncomePage: {
      heroEyebrow: "Blog Ever Retreat",
      heroTitle: "Combien Une Villa Au Rwanda Rapporte-t-elle Réellement En Revenus Locatifs ?",
      heroSubtitle:
        "Tarifs nocturnes, données d'occupation et répartition des rendements nets par région.",
      yieldHeading: "Rendement Par Région",
      yieldIntro: "Voici ce qu'obtiennent les villas gérées par Ever Retreat en 2026 :",
      tableAreaHeader: "Région",
      tableNightlyRateHeader: "Tarif Nocturne Moyen",
      tableOccupancyHeader: "Occupation Moyenne",
      tableYieldHeader: "Rendement Brut",
      managementHeading: "Ce Que Comprend Notre Gestion",
      managementIntro: "La gestion locative complète d'Ever Retreat comprend :",
      managementItems: [
        "Photographie professionnelle et création d'annonces",
        "Optimisation tarifaire dynamique",
        "Communication avec les clients et assistance 24h/24 et 7j/7",
        "Nettoyage et entretien",
        "Comptabilité et déclarations fiscales",
        "Conformité légale et renouvellement des permis",
      ],
    },
    blogBestAreaPage: {
      heroEyebrow: "Blog Ever Retreat",
      heroTitle: "Meilleure Région Où Investir Au Rwanda (2026)",
      heroSubtitle:
        "Comparaison des prix des terrains, des rendements et des facteurs de style de vie dans les meilleures régions d'investissement du Rwanda.",
      statsLandPriceLabel: "Prix du terrain :",
      statsGrossYieldLabel: "Rendement brut :",
      statsOccupancyLabel: "Occupation :",
      kigaliHeading: "Kigali",
      kigaliParagraph:
        "La capitale et le pôle d'affaires du Rwanda. Idéal pour des rendements stables et constants avec un effort de gestion minimal. Liquidité de revente la plus élevée.",
      musanzeHeading: "Musanze",
      musanzeParagraph:
        "Hauts plateaux du nord, porte d'entrée du Parc National des Volcans. Les rendements les plus élevés du pays, une communauté d'expatriés en croissance et une demande touristique axée sur l'aventure.",
      rubavuHeading: "Rubavu",
      rubavuParagraph:
        "Front de mer du lac Kivu. Tarifs nocturnes premium, ambiance familiale et forte demande de longs séjours. L'offre limitée maintient des coûts d'entrée élevés, mais le potentiel est important.",
      nyungweHeading: "Nyungwe",
      nyungweParagraph:
        "En bordure de forêt près du Parc National de Nyungwe. Coûts d'entrée plus bas, marché émergent et demande croissante en écotourisme. Risque plus élevé mais potentiel d'appréciation en phase précoce.",
      akageraHeading: "Akagera",
      akageraParagraph:
        "Province de l'Est près du Parc National de l'Akagera. Coût d'entrée le plus bas, demande de lodges safari et potentiel de hausse important. Idéal pour les investisseurs patients prêts à attendre le développement des infrastructures.",
      recommendationHeading: "Notre Recommandation",
      recommendationPart1: "Pour des ",
      recommendationStrong1: "rendements équilibrés avec un risque plus faible",
      recommendationPart2: ", investissez à Rubavu ou à Kigali. Pour un ",
      recommendationStrong2: "potentiel de rendement le plus élevé",
      recommendationPart3: ", concentrez-vous sur Musanze. Pour une ",
      recommendationStrong3: "entrée en phase précoce",
      recommendationPart4: ", envisagez Nyungwe ou Akagera.",
    },
    blogForeignersPage: {
      heroEyebrow: "Blog Ever Retreat",
      heroTitle: "Les Étrangers Peuvent-ils Acheter Une Propriété Au Rwanda ?",
      heroSubtitle: "Guide complet des structures de propriété légale au Rwanda.",
      dateLabel: "Mars 2026",
      section1Heading: "Oui, Les Étrangers Peuvent Posséder Une Propriété Au Rwanda",
      section1Paragraph:
        "Selon la loi rwandaise, les étrangers ne peuvent pas détenir de titre foncier en pleine propriété en leur nom personnel. Cependant, il existe deux voies légales pour la propriété étrangère :",
      leaseholdHeading: "Bail Emphytéotique (Le Plus Courant)",
      leaseholdParagraph:
        "Les étrangers peuvent obtenir un terrain par le biais de contrats de bail délivrés par la Rwanda Land Management and Use Authority (RMLA). La durée standard du bail est de 99 ans pour un usage résidentiel/commercial, avec des options de prolongation. Le bail emphytéotique est la voie standard pour l'investissement en villa et permet les opérations de location de courte durée.",
      leaseholdItems: [
        "Durée initiale du bail de 99 ans",
        "Renouvelable pour des durées supplémentaires",
        "Pleine transférabilité à d'autres acheteurs étrangers",
        "Permet l'hébergement touristique de courte durée",
      ],
      companyHeading: "Structure D'Entreprise",
      companyParagraph:
        "Les étrangers peuvent créer une société rwandaise (société à responsabilité limitée enregistrée auprès du Rwanda Development Board) qui détient la propriété. Cette structure est utile pour les projets impliquant plusieurs investisseurs ou des opérations commerciales.",
      companyItems: [
        "Nécessite un directeur local ou un arrangement de nominé",
        "Enregistrement auprès du RDB et déclarations annuelles",
        "Permet la pleine propriété par l'intermédiaire de la société",
        "Plus complexe mais offre un contrôle total",
      ],
      mistakesHeading: "Erreurs Courantes À Éviter",
      mistakesItems: [
        "Acheter sans vérifier le zonage — Assurez-vous que le terrain se trouve dans une zone désignée pour le tourisme avant l'achat.",
        "Négliger la vérification du titre — Faites toujours appel à notre équipe juridique pour vérifier la chaîne de titres et les charges.",
        "Ignorer les exigences de permis — Les permis touristiques doivent être obtenus avant d'exploiter des locations de courte durée.",
        "Ne pas budgétiser les frais de transfert — Prévoyez 10 à 15 % de la valeur du terrain pour les droits de timbre, les frais de transfert et les frais juridiques.",
      ],
      processHeading: "Processus Étape Par Étape",
      processItems: [
        "Diligence raisonnable sur le terrain (zonage, titre, réseaux)",
        "Réservation du terrain avec un accord préliminaire de vente (PSR) signé",
        "Enregistrement de la société (le cas échéant)",
        "Finalisation de la documentation légale et transfert du titre",
        "Paiement des taxes de transfert et des droits de timbre",
        "Enregistrement du bail/de la société auprès de la RMLA et du RDB",
      ],
      workWithUsHeading: "Travaillez Avec Nous",
      workWithUsParagraph:
        "Notre équipe juridique interne gère l'ensemble du processus d'achat, de la diligence raisonnable jusqu'au transfert du titre. Nous travaillons avec la RMLA, le RDB et les autorités locales pour garantir que chaque étape est pleinement conforme et que votre structure de propriété est correctement enregistrée.",
    },
    blogLakeKivuPage: {
      pageTitle: "Lac Kivu vs Musanze : Comparaison D'Investissement",
      pageSubtitle: "Deux destinations de premier choix, deux profils d'investissement différents.",
      atGlanceHeading: "En Un Coup D'Œil",
      tableFactorHeader: "Facteur",
      tableAvgLandPrice: "Prix Moyen Du Terrain",
      tableAvgGrossYield: "Rendement Brut Moyen",
      tableAvgOccupancyRow: "Occupation Moyenne",
      tableNightlyRateRange: "Fourchette De Tarif Nocturne",
      tableCapitalAppreciation: "Appréciation Du Capital",
      lakeKivuHeading: "Lake Kivu (Rubavu)",
      lakeKivuProsLabel: "Avantages :",
      lakeKivuPros:
        "Tarifs nocturnes premium, taux d'occupation constamment élevé, emplacement pittoresque en bord de lac, infrastructure touristique établie.",
      lakeKivuConsLabel: "Inconvénients :",
      lakeKivuCons:
        "Coût d'entrée plus élevé, disponibilité limitée de terrains constructibles, marché plus concurrentiel.",
      musanzeHeading: "Musanze",
      musanzeProsLabel: "Avantages :",
      musanzePros:
        "Prix des terrains plus bas, fort potentiel d'appréciation du capital, communauté d'expatriés en croissance, demande touristique axée sur l'aventure.",
      musanzeConsLabel: "Inconvénients :",
      musanzeCons:
        "Demande plus saisonnière, tarifs nocturnes plus bas, infrastructure encore en développement.",
      whichHeading: "Lequel Choisir ?",
      whichParagraph1Pre: "Si vous privilégiez ",
      whichParagraph1Strong1: "des liquidités immédiates",
      whichParagraph1Mid:
        " avec des tarifs nocturnes premium, le lac Kivu est le meilleur choix. Si vous préférez ",
      whichParagraph1Strong2: "l'appréciation du capital",
      whichParagraph1Post:
        " avec une demande croissante et un coût d'entrée plus bas, Musanze l'emporte.",
      whichParagraph2:
        "De nombreux investisseurs diversifient entre les deux — en allouant 60 % au lac Kivu pour les liquidités et 40 % à Musanze pour la croissance.",
    },
    blogCostToBuildPage: {
      heroEyebrow: "Blog Ever Retreat",
      heroTitle: "Combien Coûte La Construction D'Une Villa Au Rwanda ?",
      heroSubtitle: "Coûts de construction réels à partir de 1 000 $ par m².",
      breakdownHeading: "Répartition Des Coûts De Construction",
      breakdownParagraph:
        "Au Rwanda, les coûts de construction d'une villa varient de 1 000 $ à 2 200 $ par mètre carré selon la complexité du design, les finitions et l'emplacement. Voici ce qu'il faut savoir pour établir votre budget.",
      costBySizeHeading: "Coût Par Taille De Villa",
      tableVillaType: "Type De Villa",
      tableBuiltArea: "Surface Construite",
      tableCostRange: "Fourchette De Coût",
      row1Type: "2 Chambres, Entrée De Gamme",
      row2Type: "3 Chambres, Milieu De Gamme",
      row3Type: "4 Chambres, Luxe",
      row4Type: "5 Chambres, Premium",
      landCostsHeading: "Coûts Des Terrains Par Région",
      landCostsParagraph:
        "Les prix des terrains varient considérablement selon l'emplacement et la proximité des infrastructures touristiques.",
      landPriceRangesHeading: "Fourchettes De Prix Des Terrains",
      landPriceKigaliDesc: "dans les zones résidentielles de premier choix",
      landPriceRubavuDesc: "pour les parcelles en bord de lac",
      landPriceMusanzeDesc: "dans les hauts plateaux",
      landPriceNyungweDesc: "près des réserves forestières",
      landPriceAkageraDesc: "près du parc national",
      totalBudgetHeading: "Budget Total Du Projet",
      totalBudgetParagraph1:
        "Nos forfaits à prix fixe démarrent à 220 000 $ et incluent tout, de la recherche du terrain à la mise en location. Cela couvre l'architecture, les permis, la construction, la décoration intérieure et la gestion de projet.",
      totalBudgetParagraph2:
        "La plupart des investisseurs prévoient un budget supplémentaire de 10 à 15 % au-dessus du forfait de base pour des améliorations personnalisées, des finitions haut de gamme ou l'acquisition de terrains dans des zones de premier choix.",
    },
    blogHowToBuildPage: {
      heroEyebrow: "Blog Ever Retreat",
      heroTitle: "Comment Construire Une Villa Au Rwanda",
      heroSubtitle: "Le processus complet, du terrain au premier client.",
      landSourcingHeading: "Recherche De Terrain Et Diligence Raisonnable",
      landSourcingParagraph:
        "La première étape consiste à trouver un terrain adapté. Au Rwanda, cela signifie identifier des propriétés dans des zones désignées pour le tourisme où les licences de location de courte durée sont autorisées. Notre équipe interne utilise la cartographie SIG et ses relations locales pour trouver des parcelles répondant à la fois aux critères de style de vie et d'investissement.",
      whatWeCheckHeading: "Ce Que Nous Vérifions",
      whatWeCheckItems: [
        "Conformité du zonage (tourisme ou résidentiel)",
        "Conditions du sol et topographie",
        "Accès aux réseaux (eau, électricité, internet)",
        "Proximité des attractions et des infrastructures",
        "Vérification du titre et des charges éventuelles",
      ],
      designHeading: "Conception Architecturale",
      designParagraph:
        "Une fois le terrain sécurisé, nos architectes internes élaborent des designs sur mesure qui maximisent le potentiel du site. Nous utilisons des rendus 3D et des visites virtuelles pour que vous puissiez voir exactement ce que vous construisez. Tous les designs intègrent la ventilation croisée, la lumière naturelle et des plans ouverts adaptés au climat du Rwanda.",
      permitHeading: "Demande De Permis",
      permitParagraph:
        "L'obtention des permis au Rwanda est un processus impliquant plusieurs agences. Nous nous occupons de tout : permis de construire auprès des autorités locales, permis d'exploitation touristique auprès du Rwanda Development Board (RDB), et approbations environnementales lorsque nécessaire. Notre équipe juridique garantit une conformité totale avant le début de la construction.",
      constructionHeading: "Gestion De La Construction",
      constructionParagraph:
        "Une fois les permis obtenus, la construction commence. Nos chefs de projet certifiés supervisent le chantier avec des mises à jour photo hebdomadaires, un suivi budgétaire en temps réel et des paiements par étapes. Toutes les structures utilisent du béton armé pour la durabilité et la conformité avec les normes de construction du Rwanda.",
      timelineHeading: "Délai Moyen",
      timelineItems: [
        "Recherche de terrain et diligence raisonnable : 2 à 4 mois",
        "Conception et obtention des permis : 3 à 5 mois",
        "Construction : 10 à 16 mois",
        "Mise en location : 2 à 4 semaines",
      ],
      rentalSetupHeading: "Mise En Place De La Location",
      rentalSetupParagraph:
        "La dernière étape consiste à mettre votre villa en location. Nous nous occupons de la photographie professionnelle, de la création d'annonces sur toutes les grandes plateformes (Airbnb, Booking.com, VRBO), de l'ameublement avec des équipements de qualité hôtelière et de l'optimisation tarifaire. La plupart de nos clients obtiennent leurs premières réservations dans les 4 semaines suivant la remise des clés.",
    },
    howToBuyPage: {
      heroSlide1Title: "Comment Acheter Une Propriété Au Rwanda",
      heroSlide1Subtitle:
        "Le processus complet, de A à Z, pour acheter une villa, un terrain ou une maison au Rwanda en toute sécurité.",
      heroSlide2Title: "Clarté Juridique",
      heroSlide2Subtitle:
        "Les acheteurs étrangers peuvent sécuriser une propriété via un bail, une pleine propriété ou une structure d'entreprise.",
      heroSlide3Title: "Accompagnement D'Experts",
      heroSlide3Subtitle: "Notre équipe juridique interne vous accompagne à chaque étape, en toute sérénité.",
      introEyebrow: "Commencez Ici",
      introHeadingLight: "Acheter Au Rwanda,",
      introHeadingBold: "En Toute Rigueur",
      introParagraph1:
        "Acheter une propriété au Rwanda est plus simple qu'il n'y paraît de l'extérieur, à condition de comprendre les structures de propriété et de mener votre diligence raisonnable dans le bon ordre. Bien fait, c'est l'un des placements immobiliers les plus solides d'Afrique de l'Est. Fait dans la précipitation, c'est là que les acheteurs rencontrent des difficultés.",
      introParagraph2:
        "Voici le processus complet, de A à Z : comment les étrangers possèdent légalement une propriété ici, les vraies étapes pour acheter en toute sécurité, ce que cela coûte réellement, et les villas déjà disponibles aujourd'hui. Nos équipes internes de juristes, d'architectes, de constructeurs et de gestion de villas prennent en charge tout le parcours si vous préférez en discuter directement.",
      stepsEyebrow: "Le Processus",
      stepsHeadingLight: "Six Étapes Pour",
      stepsHeadingBold: "Acheter En Toute Sécurité",
      budgetingEyebrow: "Ce Que Cela Coûte",
      budgetingHeadingLight: "Établir Un Budget",
      budgetingHeadingBold: "Réaliste",
      budgetingIntro:
        "Les prix varient selon la région, la structure de propriété et selon que vous achetez une villa achevée ou que vous construisez à partir de zéro. Voici un ordre de grandeur réel, basé sur ce que notre équipe facture réellement :",
      budgetingRow1Label: "Forfait Villa À Prix Fixe",
      budgetingRow1Value: "220 000 $ – 450 000 $",
      budgetingRow1Desc:
        "Villas de 2 à 5 chambres, de la recherche du terrain à la mise en location incluse — architecture, permis, construction, décoration intérieure et gestion de projet en un seul prix fixe.",
      budgetingRow2Label: "Terrain Seul (Par M²)",
      budgetingRow2Value: "10 $ – 120 $/m²",
      budgetingRow2Desc:
        "Varie selon la région, des zones émergentes comme Akagera et Nyungwe aux parcelles prisées de Kigali et du lac Kivu.",
      budgetingRow3Label: "Construction Seule (Par M²)",
      budgetingRow3Value: "1 000 $ – 2 200 $/m²",
      budgetingRow3Desc:
        "Prix fixe selon le niveau de finition si vous possédez déjà un terrain — standard, premium ou luxe.",
      budgetingRow4Label: "Frais De Conception Architecturale",
      budgetingRow4Value: "À Partir De 7 000 $",
      budgetingRow4Desc: "50 % de réduction si vous construisez avec notre équipe de construction.",
      budgetingNote:
        "La diligence raisonnable juridique, les permis et l'acquisition du terrain sont facturés séparément lorsque le projet n'est pas acheté sous forme d'un de nos forfaits à prix fixe. Essayez le calculateur de construction pour estimer votre projet, ou contactez-nous pour un devis fixe adapté à votre terrain.",
      foreignersEyebrow: "Le Point Qui Pose Le Plus De Questions",
      foreignersHeadingLight: "Comment Les Étrangers",
      foreignersHeadingBold: "Possèdent Une Propriété",
      foreignersLinkLabel: "En savoir plus sur la propriété étrangère",
      villasEyebrow: "Prêtes Quand Vous L'Êtes",
      villasHeadingLight: "Les Villas Disponibles",
      villasHeadingBold: "Dès Maintenant",
      villasParagraph:
        "Des résidences sur plan et prototypes partout au Rwanda, chacune un projet réel porté par notre équipe.",
      closingEyebrow: "Achetez En Toute Confiance",
      closingHeadingLight: "Nous Vous Accompagnons",
      closingHeadingBold: "À Chaque Étape",
      closingParagraph:
        "De la recherche de la bonne propriété à la structure juridique, en passant par la diligence raisonnable et la remise des clés, nous gérons tout le parcours — et gérons la villa par la suite si vous souhaitez qu'elle génère des revenus. Dites-nous ce que vous recherchez et nous vous indiquerons la prochaine étape.",
      closingCtaPrimary: "Contactez Notre Équipe",
      closingCtaSecondary: "Contactez-Nous Sur WhatsApp",
    },
    investInRwandaPage: {
      introParagraph:
        "Investir dans l'immobilier au Rwanda consiste à acheter ou construire des villas et des terrains au Rwanda pour générer des revenus locatifs et une plus-value en capital. Autrefois marché de niche, il est devenu une classe d'actifs immobiliers sérieuse. Les infrastructures se développent, la migration de nomades numériques augmente, et les acheteurs internationaux investissent davantage de capitaux dans le marché immobilier du pays. La fenêtre pour acheter à des prix d'avant-appréciation dans les sous-marchés émergents se réduit. Que vous souhaitiez acheter une villa sur plan ou parcourir les propriétés existantes à vendre, nous pouvons vous guider tout au long du processus.",
      strategyHeading: "Notre Stratégie",
      strategyParagraph:
        "Nous évitons délibérément les marchés saturés où les rendements ont été comprimés par la surabondance de l'offre. Nous ciblons plutôt les régions émergentes et sous-desservies où les infrastructures s'améliorent et la demande se développe, donnant à nos clients un avantage de précurseur partout au Rwanda.",
      strategyAreas: [
        { description: "Capitale, demande locative constante" },
        { description: "Région des volcans, tourisme de gorilles" },
        { description: "Front de mer du lac Kivu, premium" },
        { description: "Lisière de forêt tropicale, écotourisme" },
        { description: "Parc national, lodge safari" },
        { description: "Tourisme culturel, en plein essor" },
      ],
      roiHeading: "Rendements Par Stratégie",
      roiSubheading: "Répartition Du Retour Sur Investissement",
      roiTableStrategy: "Stratégie",
      roiTableYield: "Rendement Typique",
      roiTableNotes: "Remarques",
      roiData: [
        { strategy: "Location De Vacances Courte Durée", notes: "Kigali, Musanze, Rubavu, emplacements de premier choix" },
        { strategy: "Location Longue Durée", notes: "Revenu stable, coûts de gestion plus faibles" },
        { strategy: "Plus-Value En Capital", notes: "Terrains de premier choix dans les sous-marchés émergents" },
        { strategy: "Combiné (Location + Capital)", notes: "Emplacements haut de gamme, constructions conçues pour le rendement" },
      ],
      comparisonHeading: "Le Rwanda Face Aux Autres Marchés D'Investissement Africains",
      comparisonParagraph:
        "Les investisseurs immobiliers internationaux comparent de plus en plus le Rwanda à d'autres marchés africains comme le Kenya, la Tanzanie, l'Ouganda et l'Afrique du Sud. Voici comment les chiffres se comparent sur les indicateurs les plus importants.",
      comparisonTableMetric: "Indicateur",
      comparisonData: [
        { metric: "Prix D'Entrée (Villa 2BR)" },
        { metric: "Coût De Gestion" },
        { metric: "Propriété Étrangère" },
        { metric: "Plus-Value En Capital" },
        { metric: "Période De Rentabilité" },
      ],
      standOutHeading: "Pourquoi Le Rwanda Se Démarque En Afrique De L'Est",
      standOutParagraph:
        "Pour les investisseurs d'Afrique de l'Est, le Rwanda offre une combinaison convaincante de stabilité, de facilité à faire des affaires et de politiques favorables aux investisseurs. Le Rwanda Development Board (RDB) a simplifié l'acquisition de propriétés, et le pays se classe régulièrement parmi les endroits les plus faciles pour faire des affaires en Afrique.",
      standOutLabels: [
        { label: "Facilité À Faire Des Affaires" },
        { label: "Délai D'Enregistrement De La Propriété" },
        { label: "Rendements Locatifs" },
        { label: "Croissance Annuelle Du PIB" },
      ],
      tiersHeading: "Niveaux D'Investissement",
      tiers: [
        {
          title: "Investissement De Départ",
          description:
            "Une villa compacte de 1 à 2 chambres dans une région émergente comme Nyanza ou les abords de Nyungwe. Design simple et moderne avec jardin privé. Idéale pour les investisseurs qui découvrent le Rwanda.",
          breakEven: "Rentabilité en 5 à 7 ans avec une gestion professionnelle",
        },
        {
          title: "Investissement Premium",
          description:
            "Une villa de 2 à 3 chambres dans un emplacement de premier choix comme Kigali, Musanze ou Rubavu. Finitions haut de gamme, aménagement paysager conçu. Fort attrait locatif avec des tarifs nocturnes plus élevés.",
          breakEven:
            "Le juste équilibre pour les investisseurs qui souhaitent à la fois de solides rendements et une résidence de vacances à usage personnel.",
        },
        {
          title: "Luxe / Multi-Unités",
          description:
            "Une villa de luxe de 3 à 4 chambres avec des finitions de standing hôtelier, ou un développement multi-unités de 2 à 4 villas sur une seule parcelle. Vue sur le lac Kivu, vue sur les montagnes de Musanze, ou concepts de resort-boutique.",
          breakEven: "Plusieurs sources de revenus avec une diversification au niveau du portefeuille.",
        },
      ],
      tierReturnPrefix: "Revenu locatif annuel prévu :",
      tiersCta: "Parcourir Les Résidences Actuelles",
      developmentsHeading: "Là Où Nous Construisons",
      developmentsParagraph:
        "Chaque résidence Ever Retreat est conçue, construite et gérée en interne — des villas vitrines achevées aux résidences en cours de conception partout au Rwanda.",
      developmentPrototype: "Prototype",
      developmentComingSoon: "Bientôt Disponible",
      developmentNotForSale: "Pas À Vendre",
      viewDevelopment: "Voir La Résidence",
      viewAllDevelopments: "Voir Toutes Les Résidences",
      considerationsHeading: "Ce Qu'il Faut Considérer Avant D'Investir Au Rwanda",
      considerationsParagraph:
        "Aucun investissement n'est sans risque, et nous pensons que vous méritez une image honnête avant d'engager votre capital. Voici les principales considérations pour les investisseurs immobiliers au Rwanda.",
      considerations: [
        {
          title: "Bail Ou Pleine Propriété",
          description:
            "Les investisseurs étrangers détiennent généralement leur propriété en bail (20 à 99 ans) ou en pleine propriété (titre foncier) dans des zones désignées. Les prolongations de bail sont courantes mais non garanties.",
        },
        {
          title: "Des Changements Réglementaires Peuvent Survenir",
          description:
            "La législation immobilière rwandaise est devenue plus favorable aux investisseurs au cours de la dernière décennie, mais la réglementation peut évoluer. Travailler avec une entreprise agréée et établie localement comme Ever Retreat réduit votre exposition.",
        },
        {
          title: "Toutes Les Régions Ne Performent Pas De La Même Façon",
          description:
            "Le Rwanda n'est pas un marché unique. Les taux d'occupation, les tarifs nocturnes et la plus-value en capital varient considérablement selon l'emplacement. Notre stratégie d'investissement cible les régions émergentes à forte demande.",
        },
        {
          title: "La Qualité De Construction Varie Fortement",
          description:
            "Le Rwanda compte de nombreux constructeurs, mais la qualité et la fiabilité varient de l'excellent au désastreux. C'est pourquoi nous gérons chaque construction avec notre propre équipe.",
        },
        {
          title: "Risque De Change",
          description:
            "Les revenus locatifs au Rwanda sont généralement perçus en USD ou en RWF, alors que votre devise nationale peut être l'AUD, l'EUR ou le GBP. Les fluctuations des taux de change peuvent affecter vos rendements.",
        },
      ],
      considerationsClosing:
        "Aucun de ces risques n'est rédhibitoire pour le bon investisseur, mais ils doivent être clairement compris. Notre rôle est de vous aider à prendre une décision éclairée — pas de survendre une opportunité.",
      processHeading: "Le Processus",
      processSubheading: "Comment Ça Fonctionne",
      processSteps: [
        {
          step: "Appel Découverte",
          description:
            "Nous apprenons vos objectifs, votre budget et votre calendrier préféré. Sans engagement, juste une conversation franche sur ce qui est possible au Rwanda.",
        },
        {
          step: "Terrain Et Stratégie",
          description:
            "Notre équipe de recherche foncière identifie des opportunités à Kigali, Musanze, Rubavu, Nyungwe, Akagera et Nyanza qui correspondent à vos critères.",
        },
        {
          step: "Conception Et Construction",
          description:
            "Nos architectes conçoivent pour le rendement dès le premier jour. Nous gérons l'ensemble du processus de construction en tant que chef de projet, en vous tenant informé à chaque étape.",
        },
        {
          step: "Gestion Locative",
          description:
            "Notre équipe de gestion de villas met en ligne, gère et optimise votre propriété pour une occupation maximale. Vous collectez les revenus pendant que nous gérons les opérations.",
        },
      ],
      processCta: "Démarrer Votre Parcours D'Investissement",
      faqHeading: "Questions Fréquemment Posées",
      faqItems: [
        {
          q: "Les étrangers peuvent-ils acheter une propriété au Rwanda ?",
          a: "Oui, les étrangers peuvent légalement sécuriser une propriété au Rwanda via des accords de bail (20 à 99 ans), des titres fonciers en pleine propriété dans des zones désignées, ou des structures d'entreprise. Notre équipe juridique veille à ce que chaque acquisition soit entièrement conforme.",
        },
        {
          q: "Le Rwanda est-il un bon investissement comparé à d'autres pays africains ?",
          a: "Le Rwanda offre des rendements compétitifs avec des prix d'entrée comparables à d'autres marchés africains. Des rendements bruts de 12 à 18 % avec des taux d'occupation de plus de 85 % en font l'un des marchés immobiliers les plus solides d'Afrique.",
        },
        {
          q: "Quel revenu locatif puis-je attendre d'une villa au Rwanda ?",
          a: "Selon l'emplacement et le type de propriété, le revenu locatif annuel varie de $18,000 pour les villas d'entrée de gamme à $60,000+ pour les propriétés de luxe dans des emplacements de premier choix comme Kigali, Musanze et Rubavu.",
        },
        {
          q: "Combien coûte la construction d'une villa au Rwanda ?",
          a: "Les coûts de construction au Rwanda sont compétitifs, allant généralement de $150,000 à $350,000+ selon la taille, l'emplacement et les finitions. Contactez notre équipe pour un devis détaillé.",
        },
        {
          q: "Quels sont les coûts continus liés à la possession d'une villa au Rwanda ?",
          a: "Les coûts continus comprennent les frais de gestion (généralement 15 à 20 % des revenus locatifs), l'entretien, les charges et l'assurance de la propriété. Ils sont nettement inférieurs à ceux des marchés occidentaux.",
        },
        {
          q: "Quelle est la différence entre la pleine propriété et le bail au Rwanda ?",
          a: "La pleine propriété (titre foncier) offre une propriété perpétuelle et est disponible dans des zones désignées. Le bail (PDL/Bail) est un bail renouvelable de 20 à 99 ans, standard pour les étrangers et la structure la plus courante.",
        },
      ],
    },
    packagesPage: {
      heroSlide1Title: "Villas Clés En Main",
      heroSlide1Subtitle: "Un service à prix fixe, de bout en bout, du terrain à la livraison au Rwanda.",
      heroSlide2Title: "Emplacements De Premier Choix",
      heroSlide2Subtitle: "Construisez à Kigali, Musanze, Rubavu, Nyungwe ou Akagera.",
      heroSlide3Title: "À Partir De $220K",
      heroSlide3Subtitle: "Des packages de villa complets avec tout inclus.",
      statFixedPriceLabel: "Prix Fixe",
      statFixedPriceSub: "Aucun coût caché",
      statTimelineSub: "Délai de construction",
      statYieldSub: "Rendement locatif projeté",
      statDesignFeesSub: "Frais de conception inclus",
      packagesEyebrow: "Packages De Villa",
      packagesHeading: "Quatre Tailles. Un Seul Processus.",
      packagesParagraph:
        "Tous les packages incluent l'architecture, les permis, la construction, la décoration intérieure et la gestion de projet. Construisez à Kigali, Musanze, Rubavu, Nyungwe ou Akagera.",
      packages: [
        {
          name: "Villa 2 Chambres",
          description: "Villa de départ idéale ou investissement locatif. Espace de vie ouvert, piscine privée, design moderne.",
          features: [
            "Séjour et salle à manger ouverts",
            "Cuisine moderne équipée",
            "Piscine privée (6x3m)",
            "Terrasse en bois",
            "Climatisation partout",
            "Système de sécurité",
          ],
        },
        {
          name: "Villa 3 Chambres",
          description:
            "Villa premium prête à louer avec cuisine de chef et salle de sport. Forte demande locative à Kigali et Musanze.",
          features: [
            "Cuisine de chef avec plans de travail en pierre",
            "Salle de sport privée / bureau",
            "Piscine (8x3m)",
            "Terrasse de vie extérieure",
            "Domotique intelligente",
            "Logement du personnel (en option)",
          ],
        },
        {
          name: "Villa 4 Chambres",
          description:
            "Villa familiale de luxe avec cinéma maison, sauna et espace de divertissement. Finitions haut de gamme partout.",
          features: [
            "Salle de cinéma maison",
            "Sauna et hammam",
            "Grande piscine (10x4m)",
            "Terrasse de réception extérieure",
            "Salle de bain spa dans la suite parentale",
            "Carport pour deux voitures",
          ],
        },
        {
          name: "Villa 5 Chambres",
          description:
            "Villa familiale ou de groupe ultime avec logement du personnel, ascenseur et terrasse sur le toit. Prête à louer, clé en main.",
          features: [
            "Logement complet du personnel (2 chambres)",
            "Terrasse de divertissement sur le toit",
            "Grande piscine (12x4m)",
            "Accès par ascenseur",
            "Système domotique",
            "Garage pour trois voitures",
          ],
        },
      ],
      mostPopular: "Le Plus Populaire",
      enquireNow: "Faire Une Demande",
      includedHeading: "Ce Qui Est Inclus",
      includedParagraph:
        "Chaque package de villa inclut tout, de la conception à la livraison, avec la possibilité d'ajouter la recherche de terrain et la gestion locative :",
      includedItems: [
        "Service d'acquisition de terrain (en option)",
        "Conception architecturale et rendus 3D",
        "Permis de construire et conformité RDC",
        "Construction complète avec des matériaux de qualité",
        "Décoration intérieure et sélection de mobilier",
        "Gestion de projet de bout en bout",
        "Gestion locative et mise en place du système de réservation",
        "Programme d'entretien continu",
      ],
      includedClosing:
        "Tous les packages sont à prix fixe avec une répartition transparente des coûts. Vous ne paierez jamais plus que le montant convenu.",
    },
    landZoningPage: {
      breadcrumbHome: "Accueil",
      breadcrumbCurrent: "Guide De Zonage Foncier",
      heroTitle: "Guide De Zonage Foncier Au Rwanda",
      heroSubtitle: "Comprendre la réglementation d'utilisation des sols et les classifications de zonage au Rwanda.",
      introHeading: "Comprendre Le Zonage Foncier Au Rwanda",
      introParagraph:
        "Le Rwanda utilise un système structuré de planification de l'utilisation des sols pour gérer le développement à travers le pays. Comprendre la classification de zonage de votre terrain est essentiel avant d'acheter ou de développer une propriété à usage touristique ou résidentiel.",
      badgeVerify: "Vérifiez toujours le zonage avant l'achat",
      badgePermits: "Permis requis pour le développement",
      classificationsHeading: "Classifications De Zonage Au Rwanda",
      zones: [
        {
          title: "Zones Résidentielles",
          description:
            "Les zones résidentielles autorisent la construction de villas et de résidences privées. Ces zones couvrent la plupart des zones suburbaines et périurbaines autour de Kigali, Musanze, Rubavu et d'autres centres urbains.",
          features: [
            "Zones à faible densité idéales pour des villas individuelles",
            "Zones à densité moyenne permettant des maisons de ville",
            "Zones à haute densité permettant des développements multi-unités",
            "Des restrictions de hauteur de construction s'appliquent",
          ],
        },
        {
          title: "Zones De Tourisme Et D'Hôtellerie",
          description:
            "Les zones désignées pour le tourisme autorisent l'hébergement de location de courte durée et les activités hôtelières. Ces zones couvrent les régions proches du lac Kivu, du Parc National des Volcans, du Parc National de l'Akagera, et le long du corridor du centre de conférences à Kigali.",
          features: [
            "Locations de courte durée autorisées",
            "Développement d'hôtels et de lodges autorisé",
            "Développements de villas à Kigali, Rubavu et Musanze",
            "Soutien aux infrastructures touristiques",
          ],
        },
        {
          title: "Zones Agricoles",
          description:
            "Les zones agricoles autorisent principalement l'agriculture et l'usage agricole. La conversion d'un terrain agricole en usage résidentiel ou touristique nécessite des permis spécifiques de l'autorité locale compétente.",
          features: [
            "Agriculture et usage agricole autorisés",
            "Développement résidentiel limité possible",
            "La conversion nécessite des permis",
            "Soumis à l'approbation de l'autorité locale",
          ],
        },
        {
          title: "Zones Commerciales Et Mixtes",
          description:
            "Ces zones permettent le développement commercial, les bureaux, le commerce de détail et les bâtiments à usage mixte. Les zones le long du quartier des affaires de Kigali et des grands axes routiers relèvent de ces zones.",
          features: [
            "Développement commercial autorisé",
            "Espaces de vente au détail et de bureaux autorisés",
            "Bâtiments résidentiels-commerciaux à usage mixte",
            "Densité plus élevée autorisée",
          ],
        },
        {
          title: "Zones Protégées Et Vertes",
          description:
            "Les zones protégées comprennent les parcs nationaux, les réserves forestières et les zones humides. Le développement y est fortement restreint et nécessite des permis spéciaux du Rwanda Development Board (RDB) et du Ministère de l'Environnement.",
          features: [
            "Parcs nationaux et réserves forestières",
            "Zones de protection des zones humides",
            "Permis spéciaux requis",
            "Études d'impact environnemental nécessaires",
          ],
        },
      ],
      zoneLabel: "Zone",
      complianceHeading: "Conformité De Zonage Et Diligence Raisonnable",
      complianceParagraph:
        "Notre équipe juridique et d'urbanisme gère toute la vérification de zonage avant l'achat. Nous vérifions le plan du site par rapport au titre foncier pour nous assurer que l'usage prévu est autorisé, et coordonnons toutes les demandes de permis pour votre développement.",
      verifyLandCta: "Vérifier Votre Terrain",
      landSourcingCta: "Services De Recherche De Terrain",
      noticeHeading: "Avis Important",
      noticeParagraph:
        "La réglementation de zonage est sujette à modification. Vérifiez toujours auprès du Rwanda Development Board (RDB) et de l'autorité locale compétente avant de prendre toute décision d'achat ou de développement foncier.",
      ctaHeading: "Prêt À Trouver Le Terrain Idéal ?",
      ctaParagraph:
        "Notre équipe peut vous aider à naviguer dans la réglementation de zonage du Rwanda et à trouver la propriété idéale pour votre développement.",
      contactCta: "Contacter Notre Équipe",
    },
    areasPage: {
      heroSlide1Title: "Régions D'Investissement Au Rwanda",
      heroSlide1Subtitle:
        "Du quartier d'affaires de Kigali aux lodges safari d'Akagera — chaque région offre un potentiel d'investissement distinct.",
      heroSlide2Title: "Emplacements De Premier Choix",
      heroSlide2Subtitle: "Propriétés sélectionnées dans les régions les plus prisées du Rwanda.",
      heroSlide3Title: "Rendements Éprouvés",
      heroSlide3Subtitle: "15 à 20 % de rendement brut sur nos résidences à Kigali, Musanze et Rubavu.",
      sectionEyebrow: "Où Nous Construisons",
      sectionHeading: "Régions D'Investissement Prioritaires",
      sectionParagraph:
        "Chaque région du Rwanda a son propre caractère, son niveau de prix et son profil d'investissement. Voici où nos clients construisent leurs villas.",
      metricsHeading: "Indicateurs D'Investissement Par Région",
      metricsParagraph:
        "Chaque région d'investissement au Rwanda offre des avantages différents. Voici une comparaison rapide pour vous aider à choisir :",
      tableArea: "Région",
      tableLandPrice: "Prix Du Terrain",
      tableAvgYield: "Rendement Moyen",
      tableOccupancy: "Occupation",
      tableBestFor: "Idéal Pour",
      bestForKigali: "Croissance du capital, demande stable",
      bestForMusanze: "Tourisme, retraites de montagne",
      bestForRubavu: "Front de mer, locations de vacances",
      bestForNyungwe: "Écotourisme, entrée à prix accessible",
      bestForAkagera: "Lodges safari, exclusivité",
      bestForHuye: "Écotourisme, locations étudiantes",
      bestForEvane: "Retraites de montagne, stations d'altitude",
      bestForNyanza: "Tourisme culturel, ville porte d'entrée",
    },
    areaMetricLabels: {
      heading: "Indicateurs D'Investissement",
      landPrice: "Prix Du Terrain",
      grossYield: "Rendement Brut",
      avgOccupancy: "Occupation Moyenne",
      appreciation: "Appréciation",
    },
    areaKigaliPage: {
      heroSlide1Title: "Kigali",
      heroSlide1Subtitle:
        "La capitale du Rwanda — une demande constante, des infrastructures modernes et une forte croissance du capital.",
      heroSlide2Title: "Pôle D'Affaires",
      heroSlide2Subtitle:
        "Expatriés, diplomates et voyageurs d'affaires créent une demande locative toute l'année.",
      marketHeading: "Marché Immobilier De Kigali",
      marketParagraph1:
        "Kigali est la capitale et le pôle d'affaires du Rwanda, abritant des organisations internationales, des ambassades et une communauté d'expatriés en pleine croissance. La demande de logements de qualité et de locations de courte durée est constante toute l'année, ce qui en fait l'un des marchés immobiliers les plus stables du Rwanda.",
      whyInvestHeading: "Pourquoi Investir À Kigali",
      whyInvestItem1Title: "Demande stable",
      whyInvestItem1Description:
        "Une demande constante toute l'année de la part des expatriés, diplomates et voyageurs d'affaires.",
      whyInvestItem2Title: "Infrastructures modernes",
      whyInvestItem2Description:
        "Un quartier d'affaires en pleine croissance avec de nouveaux aménagements et équipements.",
      whyInvestItem3Title: "Croissance du capital",
      whyInvestItem3Description:
        "Une forte appréciation à long terme à mesure que Kigali devient un pôle régional.",
      whyInvestItem4Title: "Liquidité",
      whyInvestItem4Description:
        "Une forte demande de revente de la part des expatriés et investisseurs arrivant dans le pays.",
    },
    areaMusanzePage: {
      heroSlide1Title: "Musanze",
      heroSlide1Subtitle:
        "Les hauts plateaux du nord du Rwanda — tourisme des gorilles, lodges de luxe et retraites de montagne.",
      heroSlide2Title: "Région Des Volcans",
      heroSlide2Subtitle:
        "Site de Virunga Villas et de retraites écologiques haut de gamme près du Parc National des Volcans.",
      marketHeading: "Marché Immobilier De Musanze",
      marketParagraph1Pre:
        "Musanze se situe dans les hauts plateaux du nord du Rwanda, à la frontière du Parc National des Volcans. C'est la porte d'entrée du trekking des gorilles et le site de notre ",
      marketParagraph1Post:
        " — une retraite écologique de montagne haut de gamme conçue à la fois pour un usage privé et pour la location.",
      whyInvestHeading: "Pourquoi Investir À Musanze",
      whyInvestItem1Title: "Tourisme des gorilles",
      whyInvestItem1Description:
        "Une demande constante toute l'année de la part des visiteurs internationaux du Parc National des Volcans.",
      whyInvestItem2Title: "Segment de luxe",
      whyInvestItem2Description:
        "Des tarifs nocturnes élevés pour les retraites de montagne et les éco-lodges.",
      whyInvestItem3Title: "Infrastructures en développement",
      whyInvestItem3Description:
        "De nouvelles routes et de nouveaux aménagements améliorant l'accessibilité.",
      whyInvestItem4Title: "Coût d'entrée plus faible",
      whyInvestItem4Description:
        "Plus abordable que Kigali ou Rubavu, ce qui améliore le potentiel de retour sur investissement.",
    },
    areaRubavuPage: {
      heroSlide1Title: "Rubavu",
      heroSlide1Subtitle:
        "Bord du lac Kivu — locations de vacances haut de gamme et villas de luxe au bord du lac.",
      heroSlide2Title: "L'Art De Vivre Du Lac Kivu",
      heroSlide2Subtitle: "Site de B&P Ever Retreat Villa et Cottage — nos villas vitrines achevées.",
      marketHeading: "Marché Immobilier De Rubavu",
      marketParagraph1Pre:
        "Rubavu se situe au bord du lac Kivu, l'une des destinations les plus pittoresques et prisées du Rwanda. La région attire toute l'année des touristes à fort pouvoir d'achat pour les sports nautiques, les croisières au coucher du soleil et la détente en bord de lac. Nos villas vitrines ",
      marketParagraph1Mid: " et ",
      marketParagraph1Post: " sont toutes deux situées ici.",
      whyInvestHeading: "Pourquoi Investir À Rubavu",
      whyInvestItem1Title: "Tarifs de location premium",
      whyInvestItem1Description:
        "Les villas au bord du lac Kivu affichent certains des tarifs nocturnes les plus élevés du Rwanda.",
      whyInvestItem2Title: "Demande constante",
      whyInvestItem2Description:
        "Le tourisme au lac Kivu est soutenu toute l'année, avec des pics de fréquentation en décembre et en juillet.",
      whyInvestItem3Title: "Segment de luxe",
      whyInvestItem3Description:
        "Les touristes fortunés et les expatriés créent une demande pour des hébergements haut de gamme.",
      whyInvestItem4Title: "Investissement art de vivre",
      whyInvestItem4Description: "Un emplacement magnifique pour un usage personnel et des revenus locatifs.",
    },
    areaNyungwePage: {
      heroSlide1Title: "Nyungwe",
      heroSlide1Subtitle:
        "En lisière de forêt — hébergement écotouristique et investissements dans des lodges durables.",
      heroSlide2Title: "Pôle D'Écotourisme",
      heroSlide2Subtitle: "Une demande croissante pour des lodges durables et des retraites en lisière de forêt.",
      marketHeading: "Marché Immobilier De Nyungwe",
      marketParagraph1:
        "Nyungwe est centrée autour du célèbre Parc National de Nyungwe — abritant la plus grande forêt de chimpanzés de montagne au monde. La région attire écotouristes, chercheurs et voyageurs en quête d'aventure, venus pour les parcours de cimes, l'observation des oiseaux et les expériences en forêt.",
      marketParagraph2:
        "Les prix des terrains y sont parmi les plus abordables du Rwanda, ce qui en fait un lieu idéal pour les développeurs d'éco-lodges et les exploitants de retraites durables. L'initiative croissante de tourisme communautaire génère une demande constante d'hébergement.",
      whyInvestHeading: "Pourquoi Investir À Nyungwe",
      whyInvestItem1Title: "Coût d'entrée faible",
      whyInvestItem1Description:
        "Les prix des terrains les plus abordables dans les zones touristiques prisées du Rwanda.",
      whyInvestItem2Title: "Croissance de l'écotourisme",
      whyInvestItem2Description: "Un nombre croissant de visiteurs internationaux au Parc National de Nyungwe.",
      whyInvestItem3Title: "Marché de niche",
      whyInvestItem3Description:
        "Moins de concurrence et des marges plus élevées pour des hébergements écologiques uniques.",
      whyInvestItem4Title: "Accent sur la durabilité",
      whyInvestItem4Description: "Une forte adéquation avec les initiatives de tourisme vert du Rwanda.",
    },
    areaHuyePage: {
      heroSlide1Title: "Huye",
      heroSlide1Subtitle:
        "Pôle culturel de la province Sud — à proximité du Parc National de Nyungwe et du lac Kivu.",
      heroSlide2Title: "Pôle Éducatif",
      heroSlide2Subtitle:
        "Site de l'Université du Rwanda, avec une demande locative constante des étudiants et du personnel.",
      marketHeading: "Marché Immobilier De Huye",
      marketParagraph1:
        "Huye (anciennement Butare) est une ville de la province Sud du Rwanda, située entre Kigali et le lac Kivu. Elle constitue un pôle culturel et éducatif, abritant le Collège des Arts et des Sciences Sociales de l'Université du Rwanda ainsi que le Musée National du Rwanda. La région est également une porte d'entrée vers le Parc National de Nyungwe et le lac Kivu, attirant touristes et chercheurs toute l'année.",
      marketParagraph2:
        "Les prix des terrains y offrent un excellent rapport qualité-prix par rapport à Kigali et Rubavu, ce qui rend la région attractive pour les développements résidentiels de milieu de gamme et les éco-lodges desservant ce corridor touristique en pleine croissance.",
      whyInvestHeading: "Pourquoi Investir À Huye",
      whyInvestItem1Title: "Entrée abordable",
      whyInvestItem1Description:
        "Des prix de terrain inférieurs à ceux de Kigali ou Rubavu, avec une demande croissante.",
      whyInvestItem2Title: "Demande liée à l'éducation",
      whyInvestItem2Description:
        "Une demande locative constante de la part des étudiants et du personnel universitaire.",
      whyInvestItem3Title: "Accès touristique",
      whyInvestItem3Description:
        "Porte d'entrée vers le Parc National de Nyungwe et les attractions du lac Kivu.",
      whyInvestItem4Title: "Infrastructures en développement",
      whyInvestItem4Description:
        "Des investissements publics dans les routes et les services publics améliorant l'accessibilité.",
    },
    areaAkageraPage: {
      heroSlide1Title: "Akagera",
      heroSlide1Subtitle: "Proximité du parc national — lodges safari et éco-retraites exclusives.",
      heroSlide2Title: "Tourisme Safari",
      heroSlide2Subtitle:
        "Un marché safari de luxe en pleine croissance avec une demande d'hébergement haut de gamme.",
      marketHeading: "Marché Immobilier D'Akagera",
      marketParagraph1:
        "Akagera est centrée autour du plus ancien parc national du Rwanda, abritant lions, éléphants, rhinocéros et de vastes paysages de savane. La région attire des touristes safari à fort pouvoir d'achat et des voyageurs de luxe en quête d'hébergements exclusifs, hors des sentiers battus.",
      marketParagraph2:
        "Les lodges safari y pratiquent des tarifs nocturnes premium en raison de leur exclusivité et de leurs expériences uniques avec la faune sauvage. Les terrains y sont relativement abordables, mais le marché reste de niche et spécialisé.",
      whyInvestHeading: "Pourquoi Investir À Akagera",
      whyInvestItem1Title: "Marché exclusif",
      whyInvestItem1Description: "Un nombre limité d'hébergements safari de luxe crée une valeur de rareté.",
      whyInvestItem2Title: "Tarifs nocturnes élevés",
      whyInvestItem2Description:
        "Les lodges safari pratiquent des tarifs premium auprès des touristes internationaux.",
      whyInvestItem3Title: "Tourisme en croissance",
      whyInvestItem3Description:
        "Le secteur touristique rwandais est en expansion, et Akagera enregistre une hausse du nombre de visiteurs.",
      whyInvestItem4Title: "Expérience unique",
      whyInvestItem4Description:
        "L'observation de la faune et les retraites exclusives justifient une tarification premium.",
    },
    areaNyanzaPage: {
      heroSlide1Title: "Nyanza",
      heroSlide1Subtitle:
        "Ancienne capitale de la province Sud — une histoire riche près du lac Kivu et de Nyungwe.",
      heroSlide2Title: "Pôle Historique",
      heroSlide2Subtitle:
        "À proximité du lac Kivu et du Parc National de Nyungwe, avec une demande touristique constante.",
      marketHeading: "Marché Immobilier De Nyanza",
      marketParagraph1:
        "Nyanza est une ville de la province Sud du Rwanda, située le long de la route reliant Kigali au lac Kivu. Ancienne capitale du Royaume du Rwanda, la région est riche en histoire et abrite l'emblématique Palais Royal. Elle se trouve au pied des hauts plateaux de Nyungwe et constitue une étape naturelle pour les voyageurs se rendant au lac Kivu et au Parc National de Nyungwe.",
      marketParagraph2:
        "Avec des prix de terrain abordables et des infrastructures touristiques en développement, Nyanza offre des opportunités pour des hôtels-boutiques, des retraites culturelles et des développements résidentiels desservant à la fois les marchés locaux et internationaux.",
      whyInvestHeading: "Pourquoi Investir À Nyanza",
      whyInvestItem1Title: "Tourisme culturel",
      whyInvestItem1Description: "Les sites historiques et le Palais Royal attirent des visiteurs toute l'année.",
      whyInvestItem2Title: "Emplacement porte d'entrée",
      whyInvestItem2Description:
        "Une étape naturelle entre Kigali, le lac Kivu et Nyungwe génère un flux constant de visiteurs.",
      whyInvestItem3Title: "Entrée modérée",
      whyInvestItem3Description: "Des terrains abordables avec une meilleure accessibilité qu'Evane ou Nyungwe.",
      whyInvestItem4Title: "Infrastructures en développement",
      whyInvestItem4Description: "Les améliorations apportées au corridor Kigali-lac Kivu profitent à la région.",
    },
    areaEvanePage: {
      heroSlide1Title: "Evane",
      heroSlide1Subtitle:
        "Station de montagne du nord du Rwanda — hauts plateaux pittoresques entre Kigali et Musanze.",
      heroSlide2Title: "Hauts Plateaux Pittoresques",
      heroSlide2Subtitle:
        "Des terrains abordables suscitant un intérêt croissant chez les acheteurs en quête d'une vie tranquille en montagne.",
      marketHeading: "Marché Immobilier D'Evane",
      marketParagraph1:
        "Evane est un district de la province Nord du Rwanda, niché dans les collines vallonnées entre Kigali et Musanze. La région offre des paysages pittoresques et un air de montagne pur, séduisant ceux qui recherchent une alternative plus calme à la capitale tout en bénéficiant de l'influence économique croissante de Kigali.",
      marketParagraph2:
        "Les prix des terrains à Evane comptent parmi les plus accessibles du Rwanda, offrant des opportunités pour des développements résidentiels et de petits éco-lodges. L'amélioration du réseau routier reliant la région à Kigali et Musanze suscite un intérêt croissant de la part des acheteurs et investisseurs locaux.",
      whyInvestHeading: "Pourquoi Investir À Evane",
      whyInvestItem1Title: "Coût d'entrée faible",
      whyInvestItem1Description: "Parmi les prix de terrain les plus abordables des zones touristiques du Rwanda.",
      whyInvestItem2Title: "Attrait paysager",
      whyInvestItem2Description: "Attrayant pour les retraites de montagne et les développements de bien-être.",
      whyInvestItem3Title: "Connectivité en amélioration",
      whyInvestItem3Description: "De meilleures routes vers Kigali et Musanze améliorant l'accessibilité.",
      whyInvestItem4Title: "Marché émergent",
      whyInvestItem4Description:
        "Une concurrence plus faible offrant un potentiel d'avantage aux premiers investisseurs.",
    },
    aboutPageExtra: {
      heroEyebrow: "À Propos d'Ever Retreat",
      heroTitle: "Nous Concevons, Construisons et Gérons",
      heroTitleLight: "Nous Concevons,",
      heroTitleLine2: "Construisons et",
      heroTitleBold: "Gérons",
      heroSubtitle:
        "Ever Retreat est une entreprise immobilière rwandaise, basée au Rwanda et détenue par des Rwandais. 120 projets réalisés. 82 professionnels internes. Architecture, construction, gestion de villas et immobilier - tout sous un même toit. La proposition immobilière la plus complète d'Afrique de l'Est.",
      villasHeading: "120 Villas. Et Ça Continue.",
      villasParagraph:
        "Dix ans de construction à Kigali, Musanze, Rubavu, Huye et Nyanza. Chaque projet témoigne de notre qualité, de notre design et de la performance de nos investissements.",
      originEyebrow: "Notre Histoire",
      originHeading: "Née D'Une Idée Simple",
      originHeadingLight: "Née D'Une",
      originHeadingBold: "Idée Simple",
      originParagraph1:
        "Ever Retreat repose sur un principe simple : l'investissement immobilier au Rwanda mérite les mêmes standards que partout ailleurs dans le monde. Pas de raccourcis. Pas d'entrepreneurs qui disparaissent. Pas de coûts surprises.",
      originParagraph2:
        "Ce qui a commencé comme une petite équipe interne est devenu un groupe de 82 architectes, ingénieurs, chefs de projet, designers d'intérieur et gestionnaires immobiliers - tous sous un même toit. De la recherche de terrain jusqu'à l'arrivée des voyageurs, nous assurons l'architecture, la construction, le design d'intérieur et la gestion de villas comme un service unique et intégré, afin que les clients traitent directement avec les personnes qui font le travail, et non avec une chaîne de sous-traitants et d'intermédiaires.",
      originParagraph3:
        "Avec 120 projets achevés à Kigali, Musanze, Rubavu, Huye et Nyanza en plus de 10 ans, Ever Retreat a bâti un historique que les investisseurs peuvent voir et vérifier eux-mêmes - des villas vitrines au bord du lac Kivu aux développements aujourd'hui en cours à travers le pays.",
      visionHeading: "Notre Vision",
      visionText:
        "La proposition immobilière la plus complète d'Afrique de l'Est - un Rwanda où investir dans l'immobilier est simple, transparent et entièrement géré, de la recherche de terrain jusqu'à l'arrivée des voyageurs.",
      missionHeading: "Notre Mission",
      missionText:
        "Livrer chaque villa grâce à une seule équipe interne - architecture, construction et gestion de villas - afin que propriétaires et investisseurs traitent directement avec les personnes qui font le travail, à chaque étape du processus.",
      teamStatsEyebrow: "Notre Équipe",
      teamStatsHeading: "82 Professionnels Internes",
      teamStatsParagraph:
        "L'équipe interne d'Ever Retreat couvre la direction, l'architecture, l'hôtellerie et la gestion de villas, la finance, l'ingénierie de chantier, les achats, l'informatique et les opérations - le tout coordonné depuis le Rwanda.",
    },
    buildCalculatorPage: {
      heroSlide1Title: "Calculateur de Coût de Construction",
      heroSlide1Subtitle:
        "Estimez les coûts de construction, les prix des terrains et les rendements locatifs projetés pour votre projet de villa au Rwanda.",
      heroSlide2Title: "Tarification au Rwanda",
      heroSlide2Subtitle: "Estimations de coûts précises pour construire à Kigali, Musanze, Rubavu, et au-delà.",
      heroSlide3Title: "Investissement Intelligent",
      heroSlide3Subtitle: "Projections de rendement intégrées basées sur des données réelles du marché rwandais.",
      processHeading: "Notre Processus de Construction au Rwanda",
      processIntro:
        "Une fois votre estimation obtenue, notre service de bout en bout gère tout, de l'acquisition du terrain à l'achèvement de la villa, partout au Rwanda :",
      step1Title: "Recherche de terrain",
      step1Desc:
        "Nous trouvons et évaluons des propriétés dans votre zone cible (Kigali, Musanze, Rubavu, Nyungwe, Akagera).",
      step2Title: "Conception et permis",
      step2Desc: "Des plans conçus par des architectes avec permis RDC complets et conformité.",
      step3Title: "Construction",
      step3Desc: "Construction gérée avec des mises à jour hebdomadaires, adaptée au climat du Rwanda.",
      step4Title: "Mise en location",
      step4Desc: "Ameublement, photos et mise en ligne sur toutes les plateformes.",
      step5Title: "Gestion continue",
      step5Desc: "Gestion locative et entretien complets.",
    },
    choosingDeveloperPage: {
      heroSlide1Title: "Choisir un Développeur",
      heroSlide1Subtitle: "Votre guide pour choisir le bon partenaire pour votre investissement immobilier au Rwanda.",
      heroSlide2Title: "La Qualité Compte",
      heroSlide2Subtitle: "Le bon développeur fait la différence entre profit et perte.",
      heroSlide3Title: "Un Bilan Éprouvé",
      heroSlide3Subtitle: "120 projets achevés à Kigali, Musanze, Rubavu et Nyungwe.",
      redFlagsHeading: "Signaux d'Alerte à Surveiller",
      redFlagsIntro:
        "Le Rwanda ne manque pas de constructeurs proposant des prix bas. Mais les opérateurs peu qualifiés, les problèmes de permis et les projets abandonnés sont courants. Voici ce qu'il faut surveiller :",
      flag1Title: "1. Aucun Bureau Physique ou Site Web",
      flag1Desc:
        "Rencontrez toujours votre développeur en personne. S'il opère uniquement en ligne ou évite les rencontres en face à face, passez votre chemin. Nous avons des bureaux à Kigali — venez rencontrer l'équipe.",
      flag2Title: "2. Permis Vagues ou Manquants",
      flag2Desc:
        "Demandez des copies des permis de construire (RDC), de l'autorisation de zonage et de la vérification du titre. Un développeur réputé les fournit d'emblée. Notre équipe juridique interne gère l'obtention de tous les permis.",
      flag3Title: "3. Aucune Référence ou Projet Achevé",
      flag3Desc:
        "Recherchez des projets achevés que vous pouvez visiter. Nos villas vitrines, B&P Ever Retreat Villa et Cottage au lac Kivu, sont des projets achevés que vous pouvez voir en personne.",
      flag4Title: "4. Délais ou Prix Irréalistes",
      flag4Desc:
        "Si un devis est nettement inférieur au prix du marché, il est probable que des raccourcis soient pris. Nos contrats à prix fixe garantissent l'absence de surprises, avec des paiements liés à de véritables étapes de construction.",
      checklistEyebrow: "Ce Qu'il Faut Rechercher",
      checklistHeading: "Liste de Vérification Avant de Vous Engager",
      checklistItem1: "Bureau physique à Kigali",
      checklistItem2: "Architectes licenciés et expérimentés en interne",
      checklistItem3: "Projets achevés que vous pouvez visiter",
      checklistItem4: "Contrats transparents à prix fixe",
      checklistItem5: "Équipe juridique et de permis en interne",
      checklistItem6: "Avis Google avec de vrais noms de clients",
      checklistItem7: "Couverture d'assurance complète sur les projets",
      checklistItem8: "Chef de projet anglophone assigné",
      checklistItem9: "Mises à jour photo hebdomadaires de l'avancement",
      checklistItem10: "Garantie structurelle de 10 ans incluse",
      beforeYouPayHeading: "Questions à Vérifier Avant de Payer",
      developerQuestionsHeading: "Questions à Poser à un Développeur",
      roleComparisonEyebrow: "Sachez Qui Vous Engagez",
      roleComparisonHeading: "Agent vs Architecte vs Constructeur vs Gestionnaire",
      roleColRole: "Rôle",
      roleColFocus: "Mission Principale",
      roleColPaidBy: "Généralement Rémunéré Par",
      roleColWatch: "Ce Qu'il Faut Surveiller",
      roleAgentName: "Agent",
      roleAgentFocus: "Recherche et présélection de terrains ou de biens",
      roleAgentPaidBy: "Commission sur le prix de vente",
      roleAgentWatch: "Aucune obligation de vérifier le titre, le zonage ou la qualité de construction",
      roleArchitectName: "Architecte",
      roleArchitectFocus: "Conception, plans et dossiers prêts pour le permis",
      roleArchitectPaidBy: "Honoraires fixes ou pourcentage du coût de construction",
      roleArchitectWatch: "Non responsable de la qualité de construction ni des délais",
      roleBuilderName: "Constructeur",
      roleBuilderFocus: "Construction physique, des fondations à la remise des clés",
      roleBuilderPaidBy: "Contrat à prix fixe ou facturation au coût réel",
      roleBuilderWatch: "Contrats vagues, absence de paiements par étapes, absence de garantie",
      roleManagerName: "Gestionnaire",
      roleManagerFocus: "Annonces locatives, service aux voyageurs et entretien après la remise des clés",
      roleManagerPaidBy: "Pourcentage par réservation",
      roleManagerWatch: "Aucun rapport sur l'occupation, les revenus ou les dépenses d'entretien",
      roleComparisonIntro:
        "Au Rwanda, il s'agit souvent de quatre entreprises différentes, et c'est là que les failles apparaissent. Chacune peut rejeter la faute sur les autres quand quelque chose tourne mal.",
      roleComparisonClosing:
        "Ever Retreat réunit ces quatre rôles au sein d'une seule entreprise. Nous concevons, construisons, vendons et gérons la villa nous-mêmes, il n'y a donc personne d'autre à blâmer que nous.",
      whyChooseHeading: "Pourquoi Choisir Ever Retreat ?",
      whyChooseParagraph1:
        "Nous avons construit B&P Ever Retreat Villa et Cottage, nos villas vitrines au lac Kivu, et Virunga Villas est actuellement en cours à Musanze. Consultez nos développements pour connaître le statut actuel de chacun.",
      whyChooseParagraph2:
        "Contrairement aux opérateurs indépendants, nous gérons tout en interne : architecture, construction, juridique, permis et gestion locative. Une seule entreprise, un seul point de contact.",
      stakesEyebrow: "Pourquoi Cette Décision Comporte un Risque Réel",
      stakesHeadingLight: "L'Enjeu Est",
      stakesHeadingBold: "Plus Élevé Ici",
      stakesParagraph1:
        "Choisir un développeur pour une villa au Rwanda signifie confier à une entreprise une somme que la plupart des acheteurs ne dépensent jamais en une seule fois, souvent des années avant que le bien ne soit terminé. Les bons opérateurs construisent exactement ce qu'ils promettent. Les mauvais laissent derrière eux des coquilles inachevées, des budgets explosés et des titres fonciers jamais réellement vérifiés.",
      stakesParagraph2:
        "La différence n'est pas une question de chance, mais de diligence raisonnable. Ce guide explique qui fait réellement quoi, les signaux d'alerte à surveiller, les documents à vérifier avant de payer, et les questions qui distinguent un véritable développeur d'un bon vendeur. Nous construisons nous-mêmes au Rwanda, nous savons donc exactement où les acheteurs se font piéger.",
      flagsEyebrow: "Partez Si Vous Constatez Ceci",
      legalEyebrow: "Vérifiez Avant de Payer",
      legalHeadingLight: "Permis, Juridique",
      legalHeadingBold: "et Titre Foncier",
      legalParagraph1:
        "La plupart des mésaventures trouvent leur origine dans des documents que personne n'a vérifiés. Les étrangers ne peuvent pas détenir un titre foncier en pleine propriété à titre personnel au Rwanda, mais peuvent légalement sécuriser un terrain via des accords de bail allant jusqu'à 99 ans, administrés par l'Office rwandais de gestion et d'utilisation des terres (RMLA), ou via une structure d'entreprise enregistrée auprès du Rwanda Development Board (RDB). Bien structurer cela avant de payer est le point le plus important à vérifier.",
      legalParagraph2:
        "Demandez des copies du permis de construire (RDC), de l'autorisation de zonage et de la vérification du titre avant que le moindre paiement ne soit effectué — un développeur réputé les fournit d'emblée. Notre équipe juridique interne gère directement la vérification des titres, la conformité au zonage et l'obtention de tous les permis, plutôt que de sous-traiter cela.",
      paymentEyebrow: "Votre Plus Grande Crainte en Achat Sur Plan",
      paymentHeadingLight: "Payer Avant",
      paymentHeadingBold: "Que Ça Existe",
      paymentParagraph1:
        "Acheter sur plan signifie payer pour une villa qui n'existe pas encore. La véritable protection n'est pas une promesse, c'est la structure de paiement : vos versements doivent être liés à de véritables étapes de construction que vous pouvez vérifier, et non à des dates fixes du calendrier.",
      paymentParagraph2:
        "Chaque contrat Ever Retreat est à prix fixe dès le départ. Le montant signé est le montant payé, les paiements sont libérés en fonction de travaux visibles grâce à des mises à jour photo hebdomadaires, et la même équipe qui construit votre villa la gère ensuite — un défaut est donc corrigé plutôt que contesté.",
      whyItMattersEyebrow: "Pourquoi C'est Important",
      whyItMattersHeadingLight: "Une Seule Équipe Bat Une",
      whyItMattersHeadingBold: "Chaîne Fragmentée",
      whyItMattersParagraph1:
        "Chaque transmission dans une construction est un endroit où quelque chose peut mal tourner. Un agent, un architecte, un constructeur et un gestionnaire séparés signifient quatre contrats et quatre parties qui peuvent se rejeter la faute quand la villa est en retard, dépasse le budget ou est mal construite.",
      whyItMattersParagraph2:
        "Ever Retreat élimine ces failles. La même équipe interne de plus de 82 professionnels qui conçoit votre villa la construit, la vend et la gère ensuite, avec nos propres chefs de projet supervisant chaque corps de métier sur site. Une seule entreprise, un seul point de contact, pour l'ensemble du projet.",
      proofEyebrow: "Comment Nous Réduisons Les Risques",
      proofHeadingLight: "Des Preuves, Pas",
      proofHeadingBold: "Des Promesses",
      proofIntro:
        "Les questions de vérification ci-dessus sont celles auxquelles nous avons construit l'entreprise pour répondre. Voici à quoi cela ressemble en pratique.",
      proofItem1Title: "Une Seule Entreprise, Toutes Les Disciplines",
      proofItem1Desc:
        "Architecture, construction, juridique et gestion locative sont internes, avec plus de 82 professionnels responsables de votre villa, de la conception à la remise des clés.",
      proofItem2Title: "Rwandaise et Responsable",
      proofItem2Desc:
        "Une équipe basée au Rwanda, une tarification transparente et une direction qui vous répond directement, sans chaîne de sous-traitants.",
      proofItem3Title: "Prix Fixe, Paiements par Étapes",
      proofItem3Desc:
        "Le prix est verrouillé à la signature. Les paiements sont libérés en fonction de véritables étapes de construction que vous pouvez vérifier, et non selon un calendrier.",
      proofItem4Title: "Un Bilan Que Vous Pouvez Visiter",
      proofItem4Desc:
        "120 projets achevés à Kigali, Musanze, Rubavu, Huye et Nyanza, y compris des villas vitrines que vous pouvez visiter en personne.",
      proofItem5Title: "Plus de 10 Ans de Construction au Rwanda",
      proofItem5Desc:
        "Une décennie d'expérience en construction et 8 résidences à travers le pays, pas une entreprise apparue du jour au lendemain pour profiter de la vague de la vente sur plan.",
      proofItem6Title: "Construit, Puis Géré",
      proofItem6Desc:
        "L'équipe qui construit votre villa la gère aussi ensuite, de l'annonce à l'accueil des voyageurs en passant par l'entretien, afin que la responsabilité ne s'arrête pas à la remise des clés.",
      developmentsSubheadingLight: "Des Résidences Que Vous Pouvez",
      developmentsSubheadingBold: "Vérifier Vous-Même",
      developmentsSubIntro: "De vrais projets, à voir dès maintenant. Visitez-en un avant de décider.",
      faq1Question: "Que se passe-t-il si je possède déjà un terrain au Rwanda ?",
      faq1Answer:
        "Nous proposons des partenariats de développement pour les propriétaires fonciers : notre équipe conçoit, construit et peut gérer un développement de villas sur un terrain que vous possédez déjà, selon le même modèle interne à prix fixe que nous utilisons pour nos propres projets.",
      faq2Question: "Dans quelles régions Ever Retreat construit-il ?",
      faq2Answer:
        "Nos développements et notre recherche de terrains couvrent actuellement Kigali, Musanze, Rubavu, Nyungwe, Huye et Nyanza. Chaque zone est évaluée en fonction de la demande touristique, de l'accès et de la valeur foncière à long terme avant tout engagement.",
      faq3Question: "Que se passe-t-il si mon développeur disparaît en cours de projet ?",
      faq3Answer:
        "C'est exactement pour ce risque que la liste de vérification ci-dessus est importante : une entreprise enregistrée avec un bureau physique, des projets achevés que vous pouvez visiter et des contrats à prix fixe avec paiements par étapes signifient que vous ne payez jamais intégralement un travail qui n'a pas été réalisé. Chaque contrat Ever Retreat lie le paiement à une progression vérifiée, et notre équipe interne a achevé 120 projets en plus de 10 ans sans jamais confier une construction à un tiers.",
      closingEyebrow: "Parlez à Ever Retreat",
      closingHeadingLight: "Vérifiez-Nous de la",
      closingHeadingBold: "Même Façon",
      closingParagraph:
        "Apportez la liste de vérification. Posez-nous les questions difficiles, consultez les documents et visitez une villa achevée. Si nous sommes le bon choix, nous vous montrerons exactement comment nous travaillons.",
      closingListItem1: "Une réponse claire sur les permis, les contrats et la garantie",
      closingListItem2: "Des projets achevés que vous pouvez visiter en personne",
      closingListItem3: "Un devis à prix fixe avec paiements par étapes, par écrit",
      closingCtaPrimary: "Voir Notre Bilan",
      closingCtaSecondary: "Discuter sur WhatsApp",
    },
    fractionalOwnershipPage: {
      heroSlide1Title: "Propriété Fractionnée",
      heroSlide1Subtitle: "Possédez une part de villas rwandaises haut de gamme sans en payer le coût total.",
      heroSlide2Title: "Accès au Luxe",
      heroSlide2Subtitle: "Villas haut de gamme à Kigali, Musanze, Rubavu et Nyungwe.",
      heroSlide3Title: "Investissement Intelligent",
      heroSlide3Subtitle: "Revenus locatifs, coûts partagés et gestion professionnelle.",
      howItWorksEyebrow: "Comment Ça Marche",
      howItWorksHeadingLine1: "Copropriété de Luxe.",
      howItWorksHeadingLine2: "Payez Moins. Gagnez Plus.",
      howItWorksParagraph1:
        "La propriété fractionnée vous permet de posséder un pourcentage d'une villa haut de gamme dans les emplacements les plus prisés du Rwanda. Généralement des parts de 1/2, 1/3 ou 1/4, chacune vous accordant des semaines d'utilisation exclusives ainsi que des revenus locatifs lorsque vous n'êtes pas sur place.",
      howItWorksParagraph2: "Nos offres actuelles comprennent des parts dans les Nyungwe Eco-Lodges, en pleine forêt tropicale.",
      viewSharesButton: "Voir les Parts Disponibles",
      enquireNowButton: "Se Renseigner",
      occupancyBadgeValue: "95%",
      occupancyBadgeLabel: "Taux d'Occupation",
      sharesEyebrow: "Opportunités d'Investissement",
      sharesHeading: "Parts Disponibles",
      sharesIntro:
        "Choisissez parmi nos offres actuelles de propriété fractionnée dans les emplacements les plus recherchés du Rwanda.",
      shareWeeksValue: "13 semaines",
      bestValueBadge: "Meilleur Rapport",
      ecoLuxuryBadge: "Éco-Luxe",
      labelShare: "Part",
      labelWeeksPerYear: "Semaines/An",
      labelPrice: "Prix",
      labelYield: "Rendement",
      enquireAboutShareButton: "Se Renseigner Sur Cette Part",
      benefitsEyebrow: "Pourquoi Choisir la Propriété Fractionnée",
      benefitsHeading: "Avantages Clés",
      benefitsIntro:
        "La propriété fractionnée offre une manière plus intelligente d'investir dans le marché des villas de luxe au Rwanda.",
      benefit1Title: "Coût d'Entrée Réduit",
      benefit1Desc: "Possédez le luxe pour une fraction du prix total — généralement des parts de 1/2, 1/3 ou 1/4.",
      benefit2Title: "Revenus Locatifs",
      benefit2Desc:
        "Gagnez des revenus locatifs lorsque vous n'utilisez pas votre villa — toutes nos propriétés atteignent un taux d'occupation de 90 à 95 %.",
      benefit3Title: "Gestion Complète",
      benefit3Desc:
        "Notre équipe s'occupe de tout : entretien, nettoyage, communication avec les clients et tarification dynamique.",
      benefit4Title: "Coûts Partagés",
      benefit4Desc: "L'entretien, les taxes et l'assurance sont répartis proportionnellement entre tous les copropriétaires.",
      benefit5Title: "Utilisation Garantie",
      benefit5Desc: "Chaque part vous accorde des semaines d'utilisation exclusives chaque année, programmées à l'avance.",
      benefit6Title: "Flexibilité de Sortie",
      benefit6Desc: "Les parts peuvent être vendues ou transférées après une période de détention minimale de 12 à 24 mois.",
      glanceEyebrow: "En Bref",
      glanceHeading: "Propriété Fractionnée : Les Conditions Essentielles",
      glanceShareLabel: "Tailles de Parts",
      glanceShareValue: "Parts de 1/2, 1/3 ou 1/4",
      glanceUsageLabel: "Utilisation Garantie",
      glanceUsageValue: "Semaines fixes par an, programmées à l'avance",
      glanceOccupancyLabel: "Taux d'Occupation",
      glanceOccupancyValue: "90 à 95 %",
      glanceExitLabel: "Période de Détention Minimale",
      glanceExitValue: "12 à 24 mois avant vente ou transfert",
      glanceCostsLabel: "Coûts et Gestion",
      glanceCostsValue: "Entretien, taxes et assurance répartis proportionnellement ; gestion complète par notre équipe",
      tiersEyebrow: "Scénarios d'Investissement",
      tiersHeading: "Le Coût d'une Part",
      tiersIntro:
        "Notre offre actuelle est une part de 1/4 dans les Nyungwe Eco-Lodges à 210 000 $. Les parts plus importantes ci-dessous sont calculées au prorata de ce prix affiché, et non des offres au prix distinct — à considérer comme indicatives jusqu'à confirmation par notre équipe.",
      tier1Label: "Part de 1/4",
      tier1Price: "210 000 $",
      tier1Weeks: "13 semaines/an",
      tier1Note: "Prix actuel affiché pour les Nyungwe Eco-Lodges.",
      tier2Label: "Part de 1/2",
      tier2Price: "420 000 $",
      tier2Weeks: "26 semaines/an",
      tier2Note: "Calculé au prorata de l'offre de la part de 1/4.",
      tier3Label: "Pleine Propriété",
      tier3Price: "840 000 $",
      tier3Weeks: "Toute l'année",
      tier3Note: "Calculé au prorata ; contactez-nous pour confirmer la disponibilité en pleine propriété.",
      comparisonEyebrow: "Comparer",
      comparisonHeading: "Propriété Fractionnée vs Pleine Propriété",
      comparisonIntro: "La même villa, deux façons de la posséder. Voici les différences structurelles.",
      comparisonFeatureLabel: "Critère",
      comparisonFractionalLabel: "Propriété Fractionnée",
      comparisonFullLabel: "Pleine Propriété",
      comparisonRows: [
        { feature: "Coût Initial", fractional: "Une fraction du prix total (part de 1/2, 1/3 ou 1/4)", full: "100 % du prix d'achat" },
        { feature: "Utilisation", fractional: "Semaines fixes par an, programmées à l'avance", full: "Accès illimité toute l'année" },
        { feature: "Revenus Locatifs", fractional: "Revenus partagés pendant vos semaines non utilisées", full: "Facultatif, si vous gérez ou louez vous-même" },
        { feature: "Entretien et Coûts", fractional: "Répartis proportionnellement entre copropriétaires", full: "Entièrement à la charge du propriétaire" },
        { feature: "Gestion", fractional: "Incluse, assurée par Ever Retreat", full: "Le propriétaire organise sa propre gestion" },
        { feature: "Sortie", fractional: "Vendez ou transférez votre part après 12 à 24 mois de détention", full: "Vendez le bien directement à tout moment" },
      ],
      fitEyebrow: "Est-ce Fait Pour Vous ?",
      fitHeading: "Vérifiez Si Cela Vous Convient",
      fitIntro: "La propriété fractionnée convient bien mieux à certains investisseurs qu'à d'autres. Soyez honnête avec vous-même avant de nous contacter.",
      goodFitHeading: "Cela Pourrait Vous Convenir Si",
      goodFitItems: [
        "Vous voulez une maison de vacances au Rwanda sans en avoir besoin toute l'année",
        "Vous êtes à l'aise pour coordonner les semaines d'utilisation avec les copropriétaires",
        "Vous voulez des revenus locatifs sans gérer vous-même les réservations",
        "Vous préférez un coût initial plus faible qu'un achat de villa complet",
      ],
      notFitHeading: "Envisagez Plutôt la Pleine Propriété Si",
      notFitItems: [
        "Vous voulez un accès illimité au bien toute l'année",
        "Vous prévoyez de vivre dans la villa à temps plein",
        "Vous voulez être seul décisionnaire sur le bien",
        "Vous voulez rénover ou modifier la villa sans l'accord des copropriétaires",
      ],
      crossPromoHeading: "Envie d'entendre nos propriétaires actuels ou de rencontrer notre équipe ?",
      seeTestimonialsLabel: "Lire les Témoignages Clients",
      meetTeamLabel: "Rencontrer Notre Équipe",
    },
    referAFriendPage: {
      heroEyebrow: "Ever Retreat Rwanda",
      heroTitle: "Parrainer un Ami",
      heroSubtitle: "Partagez l'expérience Ever Retreat et profitez-en tous les deux.",
      contentHeading: "Parrainez un Ami, Soyez Récompensé",
      contentParagraph:
        "Lorsque votre ami construit une villa avec Ever Retreat et que vous le parrainez, vous en profitez tous les deux. En guise de remerciement, vous recevez un crédit de 5 000 USD sur vos coûts de construction, et votre ami bénéficie d'une planification prioritaire et d'une consultation de conception gratuite.",
      howItWorksHeading: "Comment Ça Marche",
      step1: "Soumettez les coordonnées de votre ami via le formulaire ci-dessous ou contactez-nous directement.",
      step2: "Votre ami mentionne votre parrainage lorsqu'il se renseigne sur son projet.",
      step3: "Les deux crédits sont appliqués une fois que le projet de votre ami démarre sa construction.",
      termsHeading: "Conditions",
      term1: "Le parrain doit avoir un projet actif ou achevé avec Ever Retreat",
      term2: "L'ami parrainé doit être nouveau chez Ever Retreat",
      term3: "Les crédits sont appliqués au début de la phase de construction",
      term4: "Le programme se termine lorsque l'une des parties atteint le paiement final",
      faqHeading: "FAQ du Programme de Parrainage",
      faqItems: [
        {
          question: "Quel est le montant du crédit de parrainage ?",
          answer: "Vous recevez un crédit de 5 000 USD sur vos coûts de construction une fois que le projet de votre ami démarre sa construction, et votre ami bénéficie d'une planification prioritaire et d'une consultation de conception gratuite.",
        },
        {
          question: "Mon ami doit-il être nouveau chez Ever Retreat ?",
          answer: "Oui. L'ami parrainé doit être nouveau chez Ever Retreat, et le parrain doit avoir un projet actif ou achevé avec nous.",
        },
        {
          question: "Quand le crédit est-il appliqué ?",
          answer: "Les crédits sont appliqués au début de la phase de construction, une fois le projet de votre ami lancé. Le programme se termine lorsque l'une des parties atteint le paiement final.",
        },
      ],
    },
    villaToursPage: {
      heroEyebrow: "Ever Retreat Rwanda",
      heroTitle: "Visites de Villas",
      heroSubtitle:
        "Planifiez une visite privée de nos développements achevés et de nos projets sur plan à travers le Rwanda.",
      scheduleEyebrow: "Planifier une Visite",
      scheduleHeading: "Découvrez Nos Développements en Personne",
      scheduleHeadingLight: "Découvrez Nos",
      scheduleHeadingBold: "Développements en Personne",
      scheduleParagraph:
        "Nous organisons des visites privées de nos villas achevées et de nos développements sur plan. Découvrez la qualité de notre savoir-faire, le soin apporté à nos designs et le style de vie qu'offrent nos villas.",
      onGroundTitle: "Sur Place",
      onGroundDesc:
        "Visitez notre bureau à Kigali. Rencontrez notre équipe, parcourez les plans de développement et discutez de votre projet en personne.",
      virtualTourTitle: "Visite Virtuelle",
      virtualTourDesc:
        "Vous préférez explorer à distance ? Nous pouvons organiser des visites virtuelles privées de nos développements par appel vidéo.",
      bookTourButton: "Réserver une Visite de Villa",
    },
    serviceArchitecturePage: {
      heroSlide1Title: "Architecture et Design",
      heroSlide1Subtitle:
        "Des villas modernes tropicales conçues pour le climat du Rwanda et la performance locative.",
      heroSlide2Title: "Design Sur Mesure",
      heroSlide2Subtitle:
        "Une architecture personnalisée conçue pour le terrain, le climat et le rendement de l'investissement au Rwanda.",
      heroSlide3Title: "50 % De Réduction Sur Le Design",
      heroSlide3Subtitle:
        "Lorsque vous construisez avec nous, nos architectes internes conçoivent votre villa à moitié prix.",
      approachEyebrow: "Notre Approche",
      approachHeading: "Moderne Tropical. Conçu Pour Le Rwanda.",
      approachParagraph1:
        "Notre équipe d'architecture interne a conçu 120 éco-lodges et villas à travers le Rwanda. Chaque plan allie esthétique moderne, climat des hauts plateaux du Rwanda, régime des pluies saisonnier et traditions de construction locales.",
      approachParagraph2:
        "Nous concevons autant pour la performance locative que pour l'esthétique. Les cuisines sont positionnées pour faciliter le service, les chambres sont orientées à l'écart du bruit de la route, et chaque villa comprend une buanderie et un espace du personnel dédiés.",
      processEyebrow: "Processus De Design",
      processHeading: "Processus De Design En 5 Étapes",
      stage1Title: "Analyse Du Site",
      stage1Desc: "Topographie, orientation, vues et contraintes réglementaires.",
      stage2Title: "Design Conceptuel",
      stage2Desc: "Diagrammes de blocs, études volumétriques et concepts 3D.",
      stage3Title: "Développement Du Design",
      stage3Desc: "Plans détaillés, palette de matériaux et finitions.",
      stage4Title: "Rendus 3D",
      stage4Desc: "Rendus photoréalistes et visites virtuelles.",
      stage5Title: "Documents De Construction",
      stage5Desc: "Plans d'exécution complets et dossier de permis prêt pour la construction.",
      philosophyHeading: "Notre Philosophie De Design",
      philosophyParagraph:
        "Nous concevons des villas qui fonctionnent toute l'année. La Villa B&P Ever Retreat au lac Kivu utilise une ventilation naturelle pour lutter contre l'humidité, et les Virunga Villas près des volcans intègrent de la pierre provenant de carrières locales.",
      projectsHeading: "Projets",
      projectBpDescription: "villa vitrine au lac Kivu",
      projectCottageDescription: "villa vitrine au lac Kivu",
      projectVirungaDescription: "retraite de montagne près du Parc National des Volcans, en cours de conception",
      pricingEyebrow: "Investissement",
      pricingHeading: "Tarifs De Design",
      pricingIntro:
        "Nos honoraires de design sont un forfait par villa, couvrant les 5 étapes, de l'analyse du site aux documents de construction.",
      pricingColService: "Service",
      pricingColPrice: "Prix",
      pricingColNotes: "Remarques",
      pricingRow1Label: "Design Seul",
      pricingRow1Note: "Forfait complet de design architectural en 5 étapes pour une villa.",
      pricingRow2Label: "Design + Construction",
      pricingRow2Note: "50 % de réduction sur les honoraires de design lorsque vous construisez la villa avec Ever Retreat.",
      pricingNote:
        "Le tarif ci-dessus concerne le design par villa. La construction est facturée séparément — voir nos tarifs de Construction.",
      galleryEyebrow: "Nos Réalisations",
      galleryHeading: "Des Designs Concrétisés",
      galleryIntro: "Un aperçu des développements conçus par notre équipe d'architecture interne à travers le Rwanda.",
      crossLinksEyebrow: "Prochaines Étapes",
      crossLinksHeading: "Services Associés",
      crossLinksCta: "En Savoir Plus",
      crossLinkCalculatorTitle: "Calculateur De Coût De Construction",
      crossLinkCalculatorDesc: "Estimez votre coût de construction total et vos revenus locatifs avant de vous engager sur un design.",
      checklistItem1: "Rendus 3D premium et visites virtuelles",
      checklistItem2: "Plans complets et élévations",
      checklistItem3: "Dossier de documentation de construction",
      checklistItem4: "Optimisation de l'agencement intérieur",
      checklistItem5: "Conformité climatique et de zonage du Rwanda",
      checklistItem6: "Transmission directe à notre équipe de construction interne",
      checklistItem7: "Révisions de design incluses",
      advantageEyebrow: "Notre Avantage",
      advantageHeadingLight: "Ce Qui Distingue Notre",
      advantageHeadingBold: "Architecture",
      advantageParagraph1:
        "La plupart des cabinets d'architecture conçoivent de beaux bâtiments. Le problème est que la beauté seule ne génère pas de revenus locatifs, ne résiste pas à la saison des pluies du Rwanda et ne respecte pas le budget. Nous abordons chaque projet à la fois comme architectes et conseillers en investissement.",
      advantageParagraph2:
        "Chaque villa que nous dessinons est conçue en tenant compte de la performance locative, du climat local et des coûts de construction réels dès le premier croquis — pas comme une réflexion après coup une fois le design déjà terminé.",
      advantageItem1: "Nos architectes travaillent avec notre équipe de construction dès le premier jour",
      advantageItem2: "Ventilation croisée et gestion des pluies intégrées à chaque design",
      advantageItem3: "Nous concevons selon le budget — aucun concept qui ne peut pas être réellement construit",
      advantageItem4: "Sélection de matériaux adaptés à l'humidité et aux UV des hauts plateaux",
      advantageItem5: "82 professionnels internes en design, construction et gestion",
      stylesEyebrow: "Gamme Architecturale",
      stylesHeadingLight: "Notre Portefeuille De",
      stylesHeadingBold: "Styles",
      stylesIntro:
        "Nous n'imposons pas un style unique. Votre villa doit refléter votre terrain, votre climat et vos objectifs d'investissement. Voici les quatre orientations de design les plus demandées par nos clients.",
      style1Title: "Moderne Tropical",
      style1Desc: "Espaces ouverts, ventilation croisée et continuité intérieur-extérieur adaptés au climat des hauts plateaux du Rwanda.",
      style2Title: "Rwandais Contemporain",
      style2Desc: "Pierre et bois d'origine locale, toitures en pente conçues pour les pluies saisonnières.",
      style3Title: "Éco-Lodge",
      style3Desc: "Matériaux naturels et design à faible impact qui s'intègre aux sites proches des parcs nationaux.",
      style4Title: "Retraite Minimaliste",
      style4Desc: "Lignes épurées et baies vitrées du sol au plafond encadrant les vues sur le lac Kivu ou les volcans.",
      oneTeamEyebrow: "Une Seule Équipe, Zéro Écart",
      oneTeamHeadingLight: "Du Design",
      oneTeamHeadingBold: "À La Construction",
      oneTeamParagraph1:
        "Le plus grand risque dans un projet de villa est l'écart entre l'architecte et le constructeur — un design magnifique sur papier mais coûteux ou impossible à construire. Ever Retreat élimine cet écart en gardant le design et la construction sous un même toit.",
      oneTeamParagraph2:
        "La même équipe interne qui dessine votre villa la construit aussi, si bien que chaque décision de design tient compte des coûts, matériaux et délais réels de construction au Rwanda dès le premier jour — et non après avoir déjà payé les permis.",
      closingEyebrow: "Démarrez Votre Design",
      closingHeadingLight: "Prêt À",
      closingHeadingBold: "Construire ?",
      closingParagraph:
        "Partagez votre projet avec notre équipe d'architecture. Nous reviendrons vers vous avec nos premières réflexions et une orientation de design sous quelques jours.",
      closingCtaPrimary: "Contactez-Nous",
      closingCtaSecondary: "Discuter Sur WhatsApp",
      faq1Question: "À quoi ressemble le processus de design ?",
      faq1Answer:
        "Nous commençons par l'analyse du site, puis passons par le design conceptuel, le développement du design, les rendus 3D et la documentation de construction finale. Vous validez chaque étape clé.",
      faq2Question: "Pouvez-vous concevoir pour un terrain que j'ai déjà trouvé ?",
      faq2Answer:
        "Oui. Si vous possédez déjà un terrain, nous concevons en fonction de ses dimensions, de son orientation et des règles de zonage locales. Si vous n'avez pas encore de terrain, notre équipe de sourcing foncier peut vous aider à en trouver un.",
      faq3Question: "Combien de temps prend le design architectural ?",
      faq3Answer:
        "Les délais de design varient selon la taille et la complexité de la villa. Contactez-nous avec votre projet et nous reviendrons avec un délai réaliste.",
    },
    serviceConstructionPage: {
      heroSlide1Title: "Construction",
      heroSlide1Subtitle:
        "Gestion de construction de bout en bout avec la principale équipe de construction du Rwanda.",
      heroSlide2Title: "Construction De Qualité",
      heroSlide2Subtitle: "Contrats à prix fixe, des fondations à la remise des clés. 95 % d'achèvement dans les délais.",
      heroSlide3Title: "Un Bilan Éprouvé",
      heroSlide3Subtitle: "120 projets achevés à Kigali, Musanze, Rubavu et Nyungwe.",
      approachEyebrow: "Gestion De Construction De Bout En Bout",
      approachHeadingLight: "Conçu Pour Le Terrain",
      approachHeadingBold: "Et Le Climat Du Rwanda",
      approachParagraph1:
        "Construire des villas au Rwanda exige une bonne compréhension du sol latéritique, du régime des pluies saisonnier et des considérations sismiques. Notre équipe interne de 82 personnes utilise des structures en béton armé avec des fondations adaptées à la latérite, un drainage adéquat et une conception adaptée au climat — le tout inclus dans nos contrats à prix fixe.",
      approachParagraph2:
        "De la Villa B&P Ever Retreat au lac Kivu aux Virunga Villas près des volcans, chaque projet est géré par des ingénieurs certifiés disposant d'une expertise locale.",
      introChecklistItem1: "Contrats à prix fixe, paiements liés aux étapes du chantier",
      introChecklistItem2: "Rapports photo hebdomadaires sur l'avancement",
      introChecklistItem3: "Un seul point de contact tout au long de votre projet",
      introChecklistItem4: "Ingénieurs certifiés sur chaque projet",
      introChecklistItem5: "Garantie structurelle de 10 ans incluse",
      introChecklistItem6: "Matériaux conformes aux normes de construction rwandaises",
      processHeading: "Calendrier De Construction",
      step1Title: "Préparation du site",
      step1Desc: "Déblaiement, excavation et implantation des fondations. Stabilisation du sol latéritique et drainage.",
      step1Duration: "3 à 4 semaines",
      step2Title: "Gros œuvre",
      step2Desc: "Ossature en béton armé, structure de toiture et étanchéité adaptées aux pluies saisonnières.",
      step2Duration: "9 à 11 semaines",
      step3Title: "Mécanique et électricité",
      step3Desc: "Plomberie, systèmes électriques et intégration de l'énergie solaire.",
      step3Duration: "5 à 7 semaines",
      step4Title: "Finitions",
      step4Desc: "Pierre, bois dur et matériaux adaptés au climat tropical, d'origine locale.",
      step4Duration: "7 à 9 semaines",
      step5Title: "Inspection finale",
      step5Desc: "Contrôle qualité, levée des réserves et documentation de remise des clés.",
      step5Duration: "2 à 3 semaines",
      pricingEyebrow: "Coût De Construction",
      pricingHeading: "Coûts De Construction Au Rwanda",
      pricingIntro:
        "Contrats à prix fixe par niveau de finition, basés sur notre calculateur de coût de construction. Le terrain et le design sont facturés séparément.",
      tierStandardDesc: "Construction de qualité conforme aux normes rwandaises, finitions fonctionnelles.",
      tierPremiumDesc: "Notre niveau le plus demandé — matériaux et finitions améliorés.",
      tierLuxuryDesc: "Matériaux et équipements haut de gamme pour une performance locative optimale.",
      pricingDisclaimer:
        "Les prix sont indicatifs et n'incluent pas le terrain, les permis ni l'ameublement intérieur — voir ce qui est facturé séparément ci-dessous. Contactez-nous pour un devis fixe adapté à votre terrain et à votre niveau de finition.",
      pricingCalculatorCta: "Essayer Le Calculateur De Construction",
      atGlanceEyebrow: "Périmètre",
      atGlanceHeading: "Ce Qui Est Inclus Dans Votre Construction",
      atGlanceItems: [
        "Équipe de construction interne de 82 personnes",
        "Délai de construction moyen de 6 à 9 mois",
        "Taux d'achèvement dans les délais de 95 %",
        "Contrats à prix fixe, paiements liés aux étapes du chantier",
        "Ingénieurs certifiés sur chaque projet",
        "Matériaux conformes aux normes de construction rwandaises",
      ],
      includedLabel: "Inclus Dans Le Coût De Construction",
      quotedSeparatelyLabel: "Facturé Séparément",
      quotedSeparatelyItems: [
        "Acquisition du terrain (voir Recherche de Terrains)",
        "Design architectural et permis (voir Architecture — 50 % de réduction si vous construisez avec nous)",
        "Design d'intérieur et ameublement (voir Design D'Intérieur)",
        "Gestion locative continue de la villa (voir Gestion De Villas)",
      ],
      whyChooseEyebrow: "Pourquoi Nous Choisir",
      whyChooseHeadingLight: "Pourquoi Choisir Notre",
      whyChooseHeadingBold: "Entreprise De Construction",
      whyChooseParagraph1:
        "Le Rwanda ne manque pas de constructeurs proposant des prix bas, mais les opérateurs peu qualifiés, les problèmes de permis et les projets abandonnés sont fréquents. Notre équipe interne de 82 personnes conçoit, construit et gère chaque villa sous un même toit, sans transfert vers des sous-traitants et sans personne d'autre à qui s'adresser en cas de problème sur le chantier.",
      whyChooseParagraph2:
        "Chaque contrat est à prix fixe, avec des paiements liés à des étapes de construction réelles, et non à des dates calendaires, et chaque projet est géré par des ingénieurs certifiés disposant d'une expertise locale.",
      whyChooseItem1: "Équipe de construction interne de 82 personnes",
      whyChooseItem2: "Contrats à prix fixe, paiements liés aux étapes du chantier",
      whyChooseItem3: "Rapports photo hebdomadaires sur l'avancement",
      whyChooseItem4: "Un seul point de contact tout au long de votre projet",
      whyChooseItem5: "Taux d'achèvement dans les délais de 95 %",
      whyChooseItem6: "Équipe juridique interne pour les permis et la conformité",
      remoteEyebrow: "Gestion De Construction À Distance",
      remoteHeadingLight: "Construisez Depuis",
      remoteHeadingBold: "N'Importe Où",
      remoteParagraph1:
        "Beaucoup de nos clients sont des Rwandais de la diaspora ou des investisseurs étrangers qui gèrent leur projet depuis l'étranger. Vous n'avez pas besoin d'être sur place pour construire avec nous — nos chefs de projet certifiés supervisent chaque étape et vous tiennent informé tout au long du processus.",
      remoteParagraph2:
        "Les mises à jour vous parviennent directement via WhatsApp, le même canal que nous utilisons pour gérer les demandes et la communication de chantier sur tous nos projets, afin que vous n'ayez jamais à réclamer une mise à jour.",
      remoteItem1: "Un seul point de contact tout au long de votre projet",
      remoteItem2: "Rapports photo hebdomadaires sur l'avancement",
      remoteItem3: "Suivi budgétaire en temps réel",
      remoteItem4: "Visites de chantier bienvenues aux étapes clés",
      fearEyebrow: "Préoccupations Courantes",
      fearHeadingLight: "Notre Façon De Construire",
      fearHeadingBold: "Différemment",
      commonFearLabel: "Crainte Courante",
      fear1Label: "Constructeurs non agréés",
      fear1Rebuttal:
        "Chaque projet est géré par des ingénieurs certifiés, et notre équipe interne a réalisé 120 projets à travers le Rwanda depuis plus de 10 ans.",
      fear2Label: "Dépassements de coûts",
      fear2Rebuttal:
        "Nos contrats à prix fixe garantissent que le prix signé est le prix payé, avec des paiements libérés selon des étapes de construction réelles, et non des dates calendaires fixes.",
      fear3Label: "Mauvaise communication",
      fear3Rebuttal:
        "Vous recevez des rapports photo hebdomadaires et un seul point de contact tout au long de votre projet, avec le soutien d'une équipe de 82 professionnels internes.",
      fear4Label: "Raccourcis sur la qualité",
      fear4Rebuttal:
        "Chaque construction utilise des structures en béton armé et des matériaux conformes aux normes rwandaises, avec un contrôle qualité et une levée des réserves avant la remise des clés.",
      fear5Label: "Aucune responsabilité après la remise des clés",
      fear5Rebuttal:
        "Chaque construction est couverte par une garantie structurelle de 10 ans, et notre équipe reste joignable depuis nos bureaux physiques à Kigali.",
      materialsEyebrow: "Qualité De Construction",
      materialsHeading: "Des Matériaux Premium. Sans Compromis.",
      materialsIntro:
        "Nous ne faisons aucun compromis sur la structure ou les fondations. Chaque construction Ever Retreat suit la même norme, quel que soit le niveau de finition.",
      materialsCategoryTitle: "Structure Et Fondations",
      materialsCategoryDesc:
        "Structures en béton armé sur des fondations adaptées à la latérite avec un drainage adéquat, étanchéifiées pour les pluies saisonnières du Rwanda, et finies avec de la pierre et du bois dur d'origine locale — la même norme utilisée de la Villa B&P Ever Retreat aux Virunga Villas.",
      caseStudyEyebrow: "Résultats Concrets",
      caseStudyHeading: "Découvrez Une Construction Réelle De A À Z",
      caseStudyParagraph:
        "La Villa B&P Ever Retreat au lac Kivu a été construite et est gérée entièrement par notre équipe interne, de l'acquisition du terrain jusqu'à la remise des clés et aux revenus locatifs.",
      caseStudyCta: "Lire L'Étude De Cas",
      faq1Question: "Combien coûte la construction d'une villa au Rwanda ?",
      faq1Answer:
        "Les coûts de construction vont de 1 000 $/m² pour une finition Standard à 1 500 $/m² pour Premium et 2 200 $/m² pour Luxe, selon notre calculateur de coût de construction. Le terrain, le design et l'ameublement intérieur sont facturés séparément.",
      faq2Question: "Combien de temps dure la construction ?",
      faq2Answer:
        "La construction elle-même prend généralement de 6 à 9 mois une fois le chantier lancé. En incluant l'approbation du design et l'obtention des permis en amont, la plupart des constructions de villas prennent de 12 à 18 mois entre l'approbation du design et la remise des clés.",
      faq3Question: "Qu'est-ce qui est inclus dans le contrat de construction ?",
      faq3Answer:
        "Votre contrat à prix fixe couvre la préparation du site, le gros œuvre, les systèmes mécaniques et électriques, les finitions et l'inspection finale, avec des matériaux conformes aux normes de construction rwandaises. Le terrain, le design architectural et les permis, le design d'intérieur et la gestion locative continue sont facturés séparément.",
      builtManagedEyebrow: "Après La Remise Des Clés",
      builtManagedHeadingLight: "Construite Et",
      builtManagedHeadingBold: "Gérée",
      builtManagedParagraph1:
        "La construction ne doit pas mettre fin à notre relation. La même entreprise qui a construit votre villa peut ensuite la gérer pour en tirer des revenus locatifs, avec des frais à partir de 20 % par réservation.",
      builtManagedParagraph2:
        "Comme nos équipes de construction et de gestion locative sont réunies sous un même toit, il n'y a aucun renvoi de responsabilité entre un constructeur et un gestionnaire distincts si un problème survient après la remise des clés.",
      builtManagedItem1: "Nous connaissons la villa dans les moindres détails car nous l'avons construite",
      builtManagedItem2: "Aucun renvoi de responsabilité entre un constructeur et un gestionnaire distincts",
      builtManagedItem3: "Frais de gestion à partir de 20 % par réservation",
      builtManagedItem4: "Une seule entreprise, un seul point de contact, des fondations à la réservation",
      closingEyebrow: "Prêt À Construire ?",
      closingHeadingLight: "Obtenez Un",
      closingHeadingBold: "Devis",
      closingParagraph:
        "Partagez votre projet avec notre équipe de construction sur WhatsApp. Nous reviendrons vers vous avec nos premières réflexions et les prochaines étapes.",
      closingCtaWhatsApp: "Discuter Sur WhatsApp",
    },
    serviceVillaManagementPage: {
      heroSlide1Title: "Gestion De Villas",
      heroSlide1Subtitle: "Des revenus locatifs sans effort dans les meilleures destinations du Rwanda.",
      heroSlide2Title: "Service Complet",
      heroSlide2Subtitle: "Des annonces à la communication avec les voyageurs, nous gérons tout.",
      heroSlide3Title: "Des Résultats Prouvés",
      heroSlide3Subtitle:
        "Plus de 85 % de taux d'occupation moyen. 16-20 % de rendement brut sur l'ensemble des propriétés.",
      statLabelVillasManaged: "Villas Gérées",
      statLabelOccupancy: "Taux D'occupation Moyen",
      statLabelGuestSupport: "Assistance Voyageurs",
      introEyebrow: "Service Locatif Complet",
      introHeadingLight: "Des Revenus",
      introHeadingBold: "Sans Effort",
      introParagraph1:
        "Que vous possédiez une villa au lac Kivu, une retraite de montagne près des volcans ou une maison en ville à Kigali, notre équipe de gestion s'occupe de tout — photographie professionnelle, annonces sur toutes les plateformes, tarification dynamique, communication avec les voyageurs, ménage et coordination de la maintenance et des réparations.",
      introParagraph2:
        "Nous gérons 120 propriétés à Kigali, Musanze, Rubavu, Nyungwe et Akagera, avec un taux d'occupation moyen de 85 % et des rendements bruts de 16-20 %. Les frais de gestion démarrent à 20 % par réservation, sans engagement ni frais de mise en place.",
      introChecklistItem1: "Photographie professionnelle et mise en scène",
      introChecklistItem2: "Annonces sur Airbnb, VRBO, Booking.com et les plateformes locales",
      introChecklistItem3: "Tarification dynamique avec ajustements quotidiens",
      introChecklistItem4: "Communication avec les voyageurs et assistance 24h/24 et 7j/7",
      introChecklistItem5: "Ménage professionnel entre chaque séjour",
      introChecklistItem6: "Rapports de performance mensuels et portail propriétaire",
      introChecklistItem7: "Frais de gestion à partir de 20 % par réservation, sans engagement",
      yieldEyebrow: "Revenus Locatifs Au Rwanda",
      yieldHeadingLight: "Que Peut Rapporter",
      yieldHeadingBold: "Votre Villa ?",
      yieldIntro:
        "Le rendement dépend de l'emplacement, de la taille et de la qualité de la gestion. Voici des rendements bruts annuels indicatifs par région, basés sur nos données de marché foncier et d'investissement.",
      yieldColArea: "Région",
      yieldColYield: "Rendement Annuel Estimé",
      yieldColOccupancy: "Occupation Moyenne",
      yieldSourceNote:
        "Ces chiffres sont des estimations indicatives basées sur nos données de marché foncier et d'investissement, pas des garanties. Obtenez une projection pour votre propre villa avec notre Calculateur de Construction.",
      yieldCta: "Essayer Le Calculateur De Construction",
      includedEyebrow: "Gestion Complète",
      includedHeadingLight: "Ce Que La Gestion",
      includedHeadingBold: "Ever Retreat Inclut",
      includedIntro:
        "Nos frais de gestion démarrent à 20 % par réservation et couvrent chaque aspect de l'exploitation locative de votre villa, des annonces aux rapports.",
      included1Title: "Annonces & Photographie",
      included1Desc:
        "Photographie professionnelle et mise en scène, avec des annonces sur Airbnb, VRBO, Booking.com et les plateformes locales.",
      included2Title: "Communication Voyageurs",
      included2Desc: "Communication avec les voyageurs et assistance 24h/24 et 7j/7, de la première demande jusqu'au départ.",
      included3Title: "Tarification Dynamique",
      included3Desc:
        "Ajustements de prix quotidiens en fonction de la demande et de la saison, pour que les tarifs suivent le marché.",
      included4Title: "Ménage & Rotation",
      included4Desc: "Ménage professionnel entre chaque séjour, pour que votre villa soit prête à accueillir à chaque arrivée.",
      included5Title: "Maintenance & Réparations",
      included5Desc:
        "Coordination de la maintenance et des réparations par une équipe qui connaît déjà la propriété, et non un sous-traitant qui la découvre.",
      included6Title: "Rapports Financiers",
      included6Desc: "Rapports de performance mensuels et portail propriétaire pour un suivi en direct des réservations et des revenus.",
      onboardingEyebrow: "De La Remise Des Clés À La Première Réservation",
      onboardingHeadingLight: "Comment Nous Prenons",
      onboardingHeadingBold: "En Charge Votre Villa",
      onboardingIntro:
        "Voici ce qui se passe entre le jour de la signature et la première réservation de votre villa.",
      onboardStep1Title: "Évaluation De La Propriété",
      onboardStep1Desc:
        "Nous visitons votre villa, inspectons son état, photographions chaque pièce et identifions les points de maintenance ou de présentation à traiter avant la mise en ligne.",
      onboardStep2Title: "Photographie & Annonces",
      onboardStep2Desc:
        "Une photographie professionnelle met votre villa en valeur, et nous rédigeons des annonces optimisées pour Airbnb, VRBO, Booking.com et les plateformes locales.",
      onboardStep3Title: "Tarification & Calendrier",
      onboardStep3Desc:
        "Nous fixons une tarification de base, configurons les règles de tarification dynamique et construisons votre calendrier de réservation.",
      onboardStep4Title: "Briefing De L'Équipe",
      onboardStep4Desc:
        "Nos équipes de ménage, de maintenance et de communication avec les voyageurs sont briefées sur votre propriété, les accès et toute instruction particulière.",
      onboardStep5Title: "Mise En Ligne & Optimisation Continue",
      onboardStep5Desc:
        "Les annonces sont publiées sur toutes les plateformes, et nous suivons les performances de près, en ajustant la tarification et le contenu au fil des réservations.",
      comparisonEyebrow: "La Différence",
      comparisonHeadingLight: "Autogéré vs",
      comparisonHeadingBold: "Géré Par Des Professionnels",
      comparisonIntro:
        "De nombreux propriétaires commencent par gérer eux-mêmes leur location. Voici ce qui change avec une gestion professionnelle.",
      selfManagedLabel: "Autogéré",
      managedLabel: "Géré Par Ever Retreat",
      selfManagedItem1: "Messages des voyageurs à toute heure, y compris dans votre propre fuseau horaire",
      selfManagedItem2: "Trouver soi-même des agents de ménage et de maintenance fiables",
      selfManagedItem3: "Tarification statique qui peut laisser des revenus de côté",
      selfManagedItem4: "Aucune visibilité sur les tarifs ou l'occupation comparables à proximité",
      selfManagedItem5: "Gérer seul les réclamations et les avis",
      selfManagedItem6: "Coordonner la maintenance à distance, en particulier depuis l'étranger",
      managedItem1: "Communication avec les voyageurs et assistance 24h/24 et 7j/7",
      managedItem2: "Coordination de la maintenance et des réparations en interne",
      managedItem3: "Tarification dynamique avec ajustements quotidiens",
      managedItem4: "Photographie professionnelle et annonces multi-plateformes",
      managedItem5: "Ménage professionnel entre chaque réservation",
      managedItem6: "Rapports de performance mensuels et portail propriétaire",
      whyChooseEyebrow: "Pourquoi Nous Choisir",
      whyChooseHeadingLight: "Pourquoi Choisir Notre",
      whyChooseHeadingBold: "Société De Gestion",
      whyChooseParagraph1:
        "La plupart des sociétés de gestion de villas ne font que gérer. Nous concevons, construisons et gérons. Comme notre équipe interne de 82 personnes construit elle-même de nombreuses villas que nous gérons, nous comprenons chaque propriété au niveau structurel — ce qui relève de la maintenance préventive et ce qui est urgent.",
      whyChooseParagraph2:
        "Les frais de gestion démarrent à 20 % par réservation, sans engagement ni frais de mise en place, afin de fidéliser nos clients par la performance plutôt que par un contrat contraignant.",
      whyChooseItem1: "Équipe interne de 82 personnes en design, construction et gestion",
      whyChooseItem2: "Design, construction et gestion sous un même toit",
      whyChooseItem3: "120 propriétés gérées à Kigali, Musanze, Rubavu, Nyungwe et Akagera",
      whyChooseItem4: "Plus de 85 % de taux d'occupation moyen sur l'ensemble du portefeuille géré",
      whyChooseItem5: "Rapports de performance mensuels et portail propriétaire pour une transparence totale",
      whyChooseItem6: "Aucun engagement, aucun frais de mise en place",
      builtManagedEyebrow: "Le Cycle Complet",
      builtManagedHeadingLight: "Construite Et",
      builtManagedHeadingBold: "Gérée",
      builtManagedParagraph1:
        "Ever Retreat est l'une des rares entreprises au Rwanda capables d'accompagner une villa d'un terrain vide jusqu'à une propriété entièrement gérée et génératrice de revenus, avec l'architecture, la construction et la gestion sous un même toit.",
      builtManagedParagraph2:
        "Lorsque notre équipe de gestion prend en charge une villa construite par notre propre équipe de construction, elle en connaît déjà l'agencement, les matériaux et les systèmes, ce qui rend la maintenance plus rapide et plus efficace car rien n'est un mystère.",
      builtManagedItem1: "Nous connaissons la villa dans ses moindres détails car nous l'avons construite",
      builtManagedItem2: "Aucun renvoi de responsabilité entre un constructeur et un gestionnaire distincts",
      builtManagedItem3: "Frais de gestion à partir de 20 % par réservation",
      builtManagedItem4: "Une seule entreprise, un seul point de contact, des fondations à la réservation",
      faq1Question: "Combien coûte la gestion d'une villa ?",
      faq1Answer:
        "Les frais de gestion démarrent à 20 % par réservation, couvrant les annonces et la photographie, la communication avec les voyageurs, le ménage, la coordination de la maintenance, la tarification dynamique et les rapports financiers mensuels, sans frais de mise en place séparés.",
      faq2Question: "Qu'est-ce qui est inclus dans la gestion de villa ?",
      faq2Answer:
        "Tout, de la photographie professionnelle et des annonces sur Airbnb, VRBO, Booking.com et les plateformes locales, à la tarification dynamique quotidienne, la communication avec les voyageurs 24h/24 et 7j/7, le ménage entre les séjours et la coordination de la maintenance. Vous recevez aussi des rapports de performance mensuels et un portail propriétaire pour un suivi en direct des réservations et des revenus.",
      faq3Question: "Comment fonctionnent les versements et les rapports ?",
      faq3Answer:
        "Vous recevez un rapport de performance mensuel via votre portail propriétaire, couvrant l'occupation, les revenus et toute activité de maintenance. Contactez notre équipe pour connaître le calendrier de versement spécifique à votre propriété.",
      closingEyebrow: "Prêt À Nous Confier Votre Villa ?",
      closingHeadingLight: "Laissez-Nous",
      closingHeadingBold: "La Gérer",
      closingParagraph:
        "Que votre villa soit récemment construite ou déjà en exploitation, partagez les détails avec notre équipe de gestion sur WhatsApp et nous reviendrons vers vous avec les prochaines étapes. Aucun engagement, aucun frais de mise en place.",
      closingCtaWhatsApp: "Discuter Sur WhatsApp",
    },
    serviceLandPage: {
      heroSlide1Title: "Recherche De Terrains",
      heroSlide1Subtitle:
        "Des terrains de premier choix identifiés, évalués et sécurisés — avant même votre engagement.",
      heroSlide2Title: "Expertise Locale",
      heroSlide2Subtitle: "Nous savons où se trouvent les meilleures valeurs foncières, de Kigali à Musanze et au-delà.",
      heroSlide3Title: "Opportunités En Bord De Lac",
      heroSlide3Subtitle: "Des propriétés au lac Kivu et à Akagera au potentiel imbattable.",
      processEyebrow: "Notre Processus",
      processHeading: "Trouver Le Bon Terrain Au Rwanda",
      processParagraph1:
        "Acheter un terrain au Rwanda exige une bonne compréhension des règles de zonage locales, de la vérification des titres et de l'adéquation du terrain. Notre équipe recherche et évalue des terrains dans les zones d'investissement les plus prisées du Rwanda — du bord de lac à Lake Kivu aux hauts plateaux de Musanze — avec une vérification juridique complète, des contrôles de zonage et une négociation, le tout avant votre engagement.",
      processParagraph2:
        "Des options en bail emphytéotique et en pleine propriété sont disponibles. Notre équipe juridique interne s'occupe de la vérification des titres, de la conformité environnementale et de toute la documentation de transfert.",
      areasEyebrow: "Zones Privilégiées",
      areasHeading: "Où Nous Recherchons",
      areasParagraph:
        "Nous identifions des terrains dans les zones d'investissement les plus performantes du Rwanda, chacune offrant des avantages distincts pour le développement de villas.",
      areaDescLakeKivu: "Parcelles en bord de lac et à flanc de colline avec une forte demande locative.",
      areaDescMusanze: "Proximité du Parc National des Volcans, tourisme en croissance.",
      areaDescRubavu: "Plages du lac Kivu et marché touristique émergent.",
      areaDescKigali: "Ville capitale, quartier d'affaires, demande constante.",
      areaDescNyungwe: "Lisière de forêt, écotourisme, coût d'entrée plus faible.",
      areaDescAkagera: "Proximité du parc national, marché des lodges de safari de luxe.",
      includedHeading: "Ce Qui Est Inclus",
      includedItems: [
        "Consultation de sélection de zone selon budget et objectifs",
        "Recherche de terrains et visites de propriétés",
        "Vérification juridique (titre, zonage, permis)",
        "Négociation et marchandage des prix",
        "Examen du contrat d'achat",
        "Coordination notariale et transfert",
        "Mesurage et arpentage du site après achat",
      ],
      tenureEyebrow: "Régime Foncier",
      tenureHeading: "Pleine Propriété vs Bail",
      tenureColAspect: "Aspect",
      tenureColLeasehold: "Bail",
      tenureColFreehold: "Pleine Propriété",
      tenureRowTermLabel: "Durée",
      tenureRowTermLeasehold: "Jusqu'à 99 ans, renouvelable",
      tenureRowTermFreehold: "Perpétuelle (Titre de Propriété)",
      tenureRowAccessLabel: "Accès Pour Les Étrangers",
      tenureRowAccessLeasehold: "Voie standard pour les particuliers étrangers",
      tenureRowAccessFreehold: "Non accessible aux étrangers à titre personnel — accessible via une société rwandaise enregistrée",
      tenureRowAdminLabel: "Administré Par",
      tenureRowAdminLeasehold: "Office rwandais de gestion et d'utilisation des terres (RMLA)",
      tenureRowAdminFreehold: "RMLA, via l'enregistrement d'une société auprès du Rwanda Development Board (RDB)",
      tenureRowRentalLabel: "Location De Courte Durée",
      tenureRowRentalLeasehold: "Autorisée, voie standard pour l'investissement en villa",
      tenureRowRentalFreehold: "Autorisée une fois détenue via une structure de société conforme",
      tenureNote:
        "Notre équipe juridique interne gère les deux voies, vérifiant le titre et négociant les conditions sans que vous ayez besoin d'un conseil externe.",
      acquisitionEyebrow: "Notre Processus",
      acquisitionHeading: "Le Processus D'Acquisition De Terrain",
      acquisitionStep1Title: "Définir Votre Zone Et Votre Budget",
      acquisitionStep1Desc: "Nous partons de votre budget et de vos objectifs pour présélectionner les zones d'investissement prisées du Rwanda.",
      acquisitionStep2Title: "Recherche Et Présélection De Terrains",
      acquisitionStep2Desc: "Notre équipe recherche et présélectionne des sites dans les zones prisées du Rwanda, du bord de lac à Lake Kivu aux hauts plateaux de Musanze.",
      acquisitionStep3Title: "Visite Du Site Et Étude Du Terrain",
      acquisitionStep3Desc: "Nous évaluons l'adéquation du terrain et sa classification de zonage avant tout engagement de votre part.",
      acquisitionStep4Title: "Vérification Juridique",
      acquisitionStep4Desc: "Vérification complète du titre, contrôles de zonage et négociation, réalisés avant toute signature.",
      acquisitionStep5Title: "Choisir Votre Structure",
      acquisitionStep5Desc: "Nous vous aidons à choisir entre un accord de bail et une structure de société pour une propriété éligible à la pleine propriété.",
      acquisitionStep6Title: "Achat, Transfert Et Conformité",
      acquisitionStep6Desc: "Notre équipe juridique gère la vérification du titre, la conformité environnementale et toute la documentation de transfert jusqu'à la clôture.",
      crossLinksEyebrow: "Prochaines Étapes",
      crossLinksHeading: "Services Associés",
      crossLinksCta: "En Savoir Plus",
      quickRefTitle: "Terrain Au Rwanda",
      quickRefPriceLabel: "Fourchette De Prix",
      quickRefPriceValue: "10 $ - 120 $ / m²",
      quickRefTermLabel: "Durée De Bail Typique",
      quickRefTermValue: "Jusqu'à 99 ans",
      quickRefAreasLabel: "Zones Couvertes",
      quickRefAreasValue: "8 régions à travers le Rwanda",
      quickRefDiscountLabel: "Remise Architecture",
      quickRefDiscountValue: "50% de réduction sur les frais de conception si vous construisez avec nous",
      whyBuyEyebrow: "L'Argument D'Investissement",
      whyBuyHeading: "Pourquoi Acheter Un Terrain Au Rwanda",
      whyBuyIntro:
        "Le terrain au Rwanda est l'un des placements immobiliers les plus solides d'Afrique de l'Est. Voici pourquoi nos clients achètent dès maintenant.",
      whyBuyItem1Title: "15-20% De Rendement Locatif",
      whyBuyItem1Desc:
        "Les villas gérées par Ever Retreat atteignent généralement un rendement locatif brut de 15 à 20% par an, selon l'emplacement, la taille de la villa et le taux d'occupation.",
      whyBuyItem2Title: "7-15% D'Appréciation Annuelle",
      whyBuyItem2Desc:
        "Le terrain dans les zones privilégiées du Rwanda s'apprécie de 7 à 15% par an, porté par une croissance touristique constante et une offre limitée de terrains constructibles dans les zones prisées.",
      whyBuyItem3Title: "Plus D'1,5M De Visiteurs Par An",
      whyBuyItem3Desc:
        "Le Rwanda accueille plus de 1,5 million de visiteurs par an, soutenant une demande touristique constante pour les terrains près du Parc National des Volcans, du lac Kivu et d'Akagera.",
      whyBuyItem4Title: "L'Offre Complète Ever Retreat",
      whyBuyItem4Desc:
        "Achetez un terrain avec nous et accédez à notre chaîne complète : concevez votre villa avec notre équipe d'architecture à 50% de réduction, construisez-la avec notre équipe de construction, et générez des revenus locatifs grâce à notre division gestion.",
      whyBuyItem5Title: "Le Point D'Entrée Le Plus Abordable",
      whyBuyItem5Desc:
        "Le terrain est le moyen le moins coûteux d'accéder au marché immobilier rwandais, avec des prix à partir d'environ 10 $/m² dans des zones émergentes comme Akagera et Nyungwe.",
      foreignersEyebrow: "Propriété Étrangère Au Rwanda",
      foreignersHeading: "Les Étrangers Peuvent-Ils Acheter Un Terrain Au Rwanda ?",
      foreignersOption1Label: "La voie la plus courante pour les investisseurs étrangers en villa",
      foreignersOption1Title: "Accord De Bail",
      foreignersOption1Desc:
        "Le bail est la voie standard pour les acheteurs étrangers, administré par l'Office rwandais de gestion et d'utilisation des terres (RMLA) pour des durées allant jusqu'à 99 ans, renouvelables. Il permet la construction de villas et les revenus de location courte durée, sans nécessiter de structure de société.",
      foreignersOption2Label: "Pour une propriété éligible à la pleine propriété",
      foreignersOption2Title: "Structure De Société",
      foreignersOption2Desc:
        "Le titre de pleine propriété n'est pas accessible aux étrangers à titre personnel. Il peut être obtenu via une société rwandaise enregistrée auprès du Rwanda Development Board (RDB), adapté aux projets à échelle commerciale ou aux investisseurs souhaitant des droits de pleine propriété complets.",
      pricesEyebrow: "Guide Des Prix",
      pricesHeading: "Prix Des Terrains Au Rwanda",
      pricesIntro:
        "Les prix des terrains varient considérablement selon la zone, l'accès et la proximité de la demande touristique. Voici les fourchettes réelles au m² et les rendements que notre équipe pratique dans les principales zones d'investissement du Rwanda.",
      pricesColArea: "Zone",
      pricesColPrice: "Prix Au M²",
      pricesColYield: "Rendement Moyen",
      pricesColGuide: "Guide De La Zone",
      bestAreasEyebrow: "Où Nous Recherchons Des Terrains",
      bestAreasHeading: "Meilleures Zones Pour Acheter Un Terrain",
      bestAreasParagraph:
        "Nous recherchons des terrains dans les marchés privilégiés et émergents du Rwanda. Chaque zone présente des caractéristiques d'investissement, des prix et un potentiel de développement distincts.",
      bestAreasCtaLabel: "Guide De La Zone",
      dueDiligenceEyebrow: "Guide De Diligence Raisonnable De L'Acheteur",
      dueDiligenceHeading: "Ce Qu'il Faut Vérifier Avant D'Acheter Un Terrain",
      dueDiligenceIntro:
        "Un bon achat de terrain dépend de bien plus que l'emplacement et le prix. Voici les facteurs que notre équipe évalue sur chaque site avant de le recommander à un client.",
      dueDiligenceItem1Title: "Vérification Du Titre",
      dueDiligenceItem1Desc:
        "Confirmez que le titre foncier est enregistré et sans litige avant tout paiement. Notre équipe juridique interne vérifie chaque titre avant votre engagement.",
      dueDiligenceItem2Title: "Classification De Zonage",
      dueDiligenceItem2Desc:
        "Le système de planification foncière du Rwanda désigne des zones résidentielles, touristiques, agricoles, commerciales et protégées, chacune avec des droits de construction différents. Confirmez toujours le zonage avant l'achat.",
      dueDiligenceItem3Title: "Accès Routier Et Services",
      dueDiligenceItem3Desc:
        "L'accès routier légal, le raccordement électrique et la source d'eau doivent être vérifiés sur place, et non supposés à partir d'une annonce.",
      dueDiligenceItem4Title: "Bornage Et Limites",
      dueDiligenceItem4Desc:
        "Un géomètre agréé doit confirmer que les limites et la superficie de la parcelle correspondent au titre avant signature, en particulier sur des terrains non aménagés ou ruraux.",
      mistakesEyebrow: "Protection De L'Acheteur",
      mistakesHeading: "Erreurs Courantes Lors De L'Achat D'Un Terrain",
      mistakesIntro:
        "Nous avons aidé des clients à éviter - et à se remettre - des pièges qui touchent le plus souvent les acheteurs novices au Rwanda.",
      mistakesItem1Title: "Sauter La Vérification Du Titre",
      mistakesItem1Desc:
        "Acheter un terrain sans confirmer la propriété du titre enregistré est l'erreur la plus courante et la plus coûteuse que commettent les acheteurs étrangers au Rwanda.",
      mistakesItem2Title: "Ignorer Les Restrictions De Zonage",
      mistakesItem2Desc:
        "Un terrain classé agricole ou protégé ne peut pas légalement être aménagé à usage résidentiel ou touristique sans permis et procédure de conversion. Vérifiez le zonage avant d'acheter, pas après.",
      mistakesItem3Title: "Avancer Sans Contrôle Juridique",
      mistakesItem3Desc:
        "Notre équipe juridique interne gère la vérification du titre, la conformité environnementale et la documentation de transfert sur chaque acquisition, afin que vous ne négociiez jamais un contrat foncier rwandais sans protection.",
      crossSellEyebrow: "Le Parcours Complet",
      crossSellHeadingLight: "Du Terrain À La",
      crossSellHeadingBold: "Villa Génératrice De Revenus",
      crossSellParagraph1:
        "Acheter un terrain n'est que la première étape. Avec Ever Retreat, cet achat unique débloque une chaîne complète - du terrain nu à la villa conçue, construite et gérée en location, le tout sous une seule équipe interne.",
      crossSellParagraph2:
        "Les clients qui achètent un terrain avec nous et poursuivent avec la construction bénéficient d'une remise de 50% sur les frais de conception architecturale, faisant d'Ever Retreat la voie la plus rentable du terrain nu à la villa génératrice de revenus.",
      crossSellChecklistItem1: "Concevez votre villa à 50% de réduction avec notre équipe d'architecture interne",
      crossSellChecklistItem2: "Construction à prix fixe, de la fondation à la livraison",
      crossSellChecklistItem3: "Gestion de villa à partir de 20% par réservation une fois terminée",
      crossSellChecklistItem4: "Une seule équipe, aucune lacune - de la recherche de terrain aux revenus locatifs",
      closingEyebrow: "Trouvez Votre Parcelle",
      closingHeadingLight: "Commencez Votre",
      closingHeadingBold: "Recherche De Terrain",
      closingParagraph:
        "Indiquez-nous votre zone préférée, votre budget et l'usage prévu. Notre équipe préparera une présélection de sites disponibles correspondant à vos critères, avec une diligence juridique complète avant votre engagement.",
      closingCtaPrimary: "Contactez Notre Équipe",
      closingCtaSecondary: "Contactez-Nous Sur WhatsApp",
    },
    serviceDevelopmentPartnershipsPage: {
      heroSlide1Title: "Partenariats De Développement",
      heroSlide1Subtitle: "Des développements de villas en coentreprise sur un terrain que vous possédez déjà — nous gérons le reste.",
      introEyebrow: "Un Véritable Partenariat De Bout En Bout",
      introHeadingLight: "Votre Investissement.",
      introHeadingBold: "Notre Expertise.",
      introParagraph1:
        "Développer un terrain au Rwanda est complexe. Zonage, permis, qualité de construction et gestion continue doivent tous fonctionner ensemble. La plupart des propriétaires fonciers n'ont pas l'équipe locale ni l'expérience nécessaires pour exécuter au niveau exigé par le marché.",
      introParagraph2:
        "C'est là qu'Ever Retreat intervient. Avec 120 villas achevées et 82 professionnels internes couvrant l'architecture, la construction, le juridique et la gestion locative, nous apportons tout ce qu'il faut pour transformer un terrain que vous possédez déjà en un développement achevé et générateur de revenus — dans le cadre d'un partenariat à partage de bénéfices plutôt qu'un contrat client standard.",
      introChecklistItem1: "Équipes internes d'architecture, de construction et juridique sous un même toit",
      introChecklistItem2: "Contrats de construction à prix fixe, le même standard que sur nos propres développements",
      introChecklistItem3: "Gestion locative optionnelle après livraison, à partir de 20 % par réservation",
      introChecklistItem4: "120 villas achevées au lac Kivu, à Musanze et à Kigali",
      introChecklistItem5: "Vous conservez la propriété du terrain tout au long du projet",
      introChecklistItem6: "Chaque partenariat est cadré et convenu par écrit avant le début des travaux",
      modelsEyebrow: "Comment Nous Travaillons Ensemble",
      modelsHeadingLight: "Modèles De",
      modelsHeadingBold: "Partenariat",
      modelsIntro:
        "Chaque développement est différent. Voici comment fonctionnent nos deux structures de partenariat, selon que vous apportez un terrain ou des capitaux.",
      landownerTitle: "Partenariat Propriétaire Foncier",
      landownerDesc:
        "Vous apportez un terrain au Rwanda — au lac Kivu, dans les hauts plateaux de Musanze ou près de Kigali. Nous apportons l'architecture, la construction, le marketing, la vente et la gestion locative. Les bénéfices sont partagés selon la contribution, généralement 50/50 ou 60/40.",
      landownerYourRole: "Apport du terrain, validation aux étapes clés",
      landownerOurRole: "Design, permis, construction et gestion optionnelle",
      investorTitle: "Partenariat Investisseur",
      investorDesc:
        "Vous préférez apporter des capitaux plutôt qu'un terrain ? Nous pouvons structurer une coentreprise autour du financement d'un développement, Ever Retreat se chargeant de trouver le terrain et de gérer le design, la construction, la vente et la gestion. Le partage des bénéfices est convenu selon votre contribution — contactez-nous pour structurer les modalités adaptées à votre situation.",
      investorYourRole: "Apport de capitaux, supervision financière",
      investorOurRole: "Recherche de terrain, design, construction, reporting",
      customTitle: "Développement Sur Mesure",
      customDesc:
        "Chaque partenariat est structuré autour de ce que chaque partie apporte. Si votre situation combine terrain, capitaux ou exigences spécifiques qui ne correspondent pas à une structure standard, notre équipe travaillera avec vous pour concevoir un montage couvrant le design, la construction, la vente et la gestion, du concept à l'achèvement.",
      customYourRole: "Brief, vision, validations, financement",
      customOurRole: "Design, ingénierie, construction, livraison",
      flexEyebrow: "Filière Complète Ou Services Sélectionnés",
      flexHeadingLight: "Utilisez Tous Nos Services.",
      flexHeadingBold: "Ou Seulement Certains.",
      flexIntro:
        "Tous les propriétaires fonciers n'ont pas besoin de la filière complète. Nos services d'architecture, de construction et de gestion locative sont chacun de véritables offres autonomes, nous adaptons donc notre implication à ce que vous avez déjà.",
      flexTile1Label: "Vous voulez uniquement un design",
      flexTile1Title: "Architecture",
      flexTile1Desc:
        "Nos architectes internes conçoivent la villa ou le développement pour votre terrain. Confiez ensuite les plans à votre propre constructeur, ou revenez vers nous pour la construction plus tard.",
      flexTile1Services: "Architecture, rendus 3D, dossier de construction",
      flexTile2Label: "Vous voulez le design et la construction",
      flexTile2Title: "Architecture + Construction",
      flexTile2Desc:
        "Nous concevons et construisons dans le cadre d'un contrat à prix fixe, le même standard que sur nos propres développements, avec un reporting hebdomadaire.",
      flexTile2Services: "Architecture, permis, construction à prix fixe",
      flexTile3Label: "Vous voulez la filière complète",
      flexTile3Title: "Design, Construction Et Gestion",
      flexTile3Desc:
        "Nous concevons, construisons, puis gérons les villas terminées pour générer des revenus locatifs, dans le cadre d'un partenariat à partage de bénéfices plutôt qu'un contrat client standard.",
      flexTile3Services: "Architecture, construction, gestion locative, conditions de partage des bénéfices",
      financeEyebrow: "Comment Fonctionnent Les Chiffres",
      financeHeadingLight: "À Quoi Ressemble Un Partenariat",
      financeHeadingBold: "Sur Le Plan Financier ?",
      financeIntro:
        "Chaque partenariat est modélisé en fonction de votre terrain, de la composition des villas et de l'emplacement — nous ne chiffrons pas un projet sans avoir vu le site. Les mêmes chiffres réels que nous utilisons pour nos autres services s'appliquent ici aussi :",
      financeBuildLabel: "Coût de construction",
      financeBuildValue: "1 000 $ à 2 200 $ par m², selon le niveau de finition (standard, premium ou luxe)",
      financeYieldLabel: "Rendement locatif",
      financeYieldValue: "15 à 20 % brut, une fois achevé et sous gestion",
      financeFeeLabel: "Frais de gestion",
      financeFeeValue: "À partir de 20 % par réservation, si vous optez pour la gestion locative continue",
      financeShareLabel: "Partage des bénéfices",
      financeShareValue: "Généralement 50/50 ou 60/40 entre le propriétaire foncier et Ever Retreat, selon la contribution de chacun",
      financeNote:
        "Nous présentons un modèle financier complet et propre au projet — coût de construction, calendrier et répartition des bénéfices proposée — avant la signature de tout accord de partenariat.",
      processEyebrow: "Du Terrain Aux Revenus Locatifs",
      processHeadingLight: "Le Processus De",
      processHeadingBold: "Développement",
      processIntro: "Un aperçu général de la façon dont nous passons de votre terrain à une villa achevée et génératrice de revenus.",
      step1Title: "Évaluation du terrain",
      step1Desc: "Analyse du site, conformité au zonage et étude de faisabilité.",
      step2Title: "Design",
      step2Desc: "Plans architecturaux et rendus 3D.",
      step3Title: "Construction",
      step3Desc: "Gestion de la construction avec contrôle qualité et suivi du calendrier.",
      step4Title: "Vente et marketing",
      step4Desc: "Campagne de lancement, annonces et prospection d'acheteurs.",
      step5Title: "Gestion locative",
      step5Desc: "Gestion continue optionnelle pour les unités conservées.",
      oneTeamEyebrow: "Pourquoi S'Associer À Ever Retreat",
      oneTeamHeadingLight: "Une Équipe.",
      oneTeamHeadingBold: "Toutes Les Disciplines.",
      oneTeamParagraph1:
        "La plupart des partenariats de développement impliquent d'assembler des entreprises séparées pour le design, la construction et la gestion. Chaque transition ajoute des délais et des coûts. Chez Ever Retreat, chaque discipline est réunie sous un même toit.",
      oneTeamParagraph2:
        "Nos architectes conçoivent ce que nos propres constructeurs savent bâtir efficacement, selon le même standard à prix fixe que nous utilisons sur chaque projet. Et si vous choisissez la gestion locative continue, la même entreprise qui a construit votre villa peut ensuite la gérer pour générer des revenus.",
      oneTeamItem1: "120 villas conçues et construites à travers le Rwanda",
      oneTeamItem2: "82 professionnels internes en architecture, construction et gestion",
      oneTeamItem3: "Équipe juridique interne pour les permis et la conformité foncière",
      oneTeamItem4: "Contrats de construction à prix fixe en standard",
      oneTeamItem5: "Rapports d'avancement hebdomadaires et documentation photo tout au long du projet",
      oneTeamItem6: "Gestion locative optionnelle à partir de 20 % par réservation après la livraison",
      projectsEyebrow: "Nos Projets",
      projectsHeading: "Développements Achevés",
      projectsParagraph: "120 villas dans les emplacements les plus prisés du Rwanda.",
      projectUnitsShowcase: "Villa vitrine",
      projectUnitsInDesign: "En cours de conception",
      faq1Question: "Et si je possède déjà un terrain au Rwanda ?",
      faq1Answer:
        "Nous proposons des partenariats de développement aux propriétaires fonciers : notre équipe conçoit, construit et peut gérer un développement de villas sur un terrain que vous possédez déjà, selon le même modèle interne à prix fixe que nous utilisons pour nos propres projets.",
      faq2Question: "Quelles structures de partenariat sont disponibles ?",
      faq2Answer:
        "Notre structure principale est un partenariat à partage de bénéfices : vous apportez le terrain, nous gérons le design, la construction et la gestion optionnelle, et les bénéfices sont répartis selon la contribution, généralement 50/50 ou 60/40. Si vous préférez apporter des capitaux plutôt qu'un terrain, ou si votre situation ne correspond à aucune des deux structures, contactez-nous et nous établirons les conditions au cas par cas.",
      faq3Question: "Ever Retreat gère-t-il les permis et le juridique ?",
      faq3Answer:
        "Oui. Notre équipe juridique interne gère les permis de construire, la vérification des titres et les documents de conformité pour chaque partenariat, afin que vous n'ayez pas besoin de recourir à un conseil externe.",
      closingEyebrow: "Entamons La Discussion",
      closingHeadingLight: "Vous Avez Un Terrain ?",
      closingHeadingBold: "Parlons-En.",
      closingParagraph:
        "Partagez les détails de votre terrain et vos objectifs de développement. Nous reviendrons vers vous avec une évaluation honnête de ce qui est possible et une structure de partenariat proposée.",
      closingCtaPrimary: "Nous Contacter",
      closingCtaSecondary: "WhatsApp",
    },
    serviceInteriorDesignPage: {
      heroTitle: "Design D'Intérieur",
      heroSubtitle: "Un design d'intérieur sur mesure qui allie esthétique tropicale et confort moderne.",
      approachEyebrow: "Notre Approche",
      approachHeading: "Un Design Qui Fait Ses Preuves",
      approachParagraph1:
        "Nos designers d'intérieur internes créent des espaces à la fois beaux, fonctionnels et optimisés pour la performance locative. Chaque meuble et chaque finition est choisi pour sa durabilité dans le climat tropical du Rwanda, tout en conservant une esthétique raffinée qui justifie des tarifs nocturnes premium.",
      approachParagraph2:
        "Nous nous approvisionnons localement autant que possible et collaborons avec des artisans rwandais pour des pièces sur mesure, soutenant ainsi l'économie locale tout en créant des espaces uniques et authentiques.",
      stylesEyebrow: "Styles De Design",
      stylesHeading: "Styles Signature",
      style1Title: "Moderne Tropical",
      style1Desc: "Lignes épurées, matériaux naturels et ventilation croisée conçus pour le climat du Rwanda.",
      style2Title: "Minimalisme Scandinave",
      style2Desc: "Bois clairs, tons neutres et design fonctionnel pour une atmosphère apaisante.",
      style3Title: "Rwanda Moderne",
      style3Desc: "Des interprétations modernes des éléments et du savoir-faire traditionnels rwandais.",
      style4Title: "Japandi",
      style4Desc: "Le minimalisme japonais rencontre la fonctionnalité scandinave pour des espaces sereins.",
      includedHeading: "Ce Qui Est Inclus",
      includedItems: [
        "Design conceptuel et planches d'ambiance",
        "Approvisionnement en matériaux et mobilier",
        "Menuiserie sur mesure et design d'éléments intégrés",
        "Stylisme et textiles d'ameublement",
        "Coordination des achats et de la logistique",
        "Installation et finalisation du stylisme",
      ],
      discountParagraph:
        "50 % de réduction sur les frais de design d'intérieur lorsque vous construisez avec nous — nos designers travaillent aux côtés de notre équipe de construction pour une exécution fluide, de la structure au stylisme.",
    },
    serviceLandscapePage: {
      heroTitle: "Aménagement Paysager",
      heroSubtitle: "Transformez votre espace extérieur avec de superbes jardins et paysages tropicaux.",
      approachEyebrow: "Notre Approche",
      approachHeading: "Un Art De Vivre Extérieur, Conçu Pour Le Rwanda",
      approachParagraph1:
        "Le paysage compte tout autant que la villa elle-même. Notre équipe paysagiste conçoit des jardins tropicaux, des jeux d'eau et des espaces de vie extérieurs qui subliment la beauté naturelle du Rwanda tout en créant des espaces extérieurs fonctionnels et rentables.",
      approachParagraph2:
        "Nous utilisons des espèces végétales indigènes et adaptées qui prospèrent dans le climat du Rwanda, réduisant les coûts d'entretien tout en créant un impact visuel saisissant. Chaque design tient compte des changements saisonniers, de l'efficacité de l'irrigation et de la croissance à long terme.",
      elementsEyebrow: "Éléments De Design",
      elementsHeading: "Éléments De Design",
      elementsParagraph: "Nous intégrons ces éléments à chaque design paysager :",
      element1Title: "Plantation D'Espèces Indigènes",
      element1Desc: "Palmiers tropicaux, frangipaniers et espèces indigènes adaptées au climat du Rwanda.",
      element2Title: "Jeux D'Eau",
      element2Desc: "Bassins miroirs, murs d'eau et éléments en pierre naturelle.",
      element3Title: "Vie Extérieure",
      element3Desc: "Terrasses, pergolas, cuisines extérieures et espaces de détente.",
      includedHeading: "Services Inclus",
      includedItems: [
        "Analyse du site et étude des sols",
        "Design conceptuel et rendus 3D",
        "Sélection et approvisionnement des plantes",
        "Conception du système d'irrigation",
        "Aménagements paysagers durs (terrasses, maçonnerie, jeux d'eau)",
        "Installation et plantation",
        "Programme d'entretien continu",
      ],
    },
    serviceProjectManagementPage: {
      heroTitle: "Gestion De Projet",
      heroSubtitle:
        "Une supervision experte pour que la construction de votre villa respecte les délais, le budget et les spécifications.",
      processEyebrow: "Notre Processus",
      processHeading: "Dans Les Délais. Dans Le Budget. Selon Les Spécifications.",
      processParagraph1:
        "Gérer la construction d'une villa au Rwanda depuis l'étranger est un défi. Nos chefs de projet certifiés s'occupent de tout — planification, contrôle qualité, budgétisation et communication. Vous recevez des rapports d'avancement hebdomadaires, des mises à jour photo et une facturation transparente.",
      processParagraph2:
        "Nous gérons 120 projets à travers le Rwanda avec un taux moyen d'achèvement dans les délais de 95 %. Notre équipe comprend des chefs de projet parlant couramment anglais, des ingénieurs certifiés et des superviseurs de chantier qualifiés.",
      reportingEyebrow: "Rapports Hebdomadaires",
      reportingHeading: "Restez Informé",
      reportingParagraph:
        "Notre plateforme de gestion de projet vous offre une visibilité en temps réel sur votre construction, où que vous soyez dans le monde.",
      feature1Title: "Photos Quotidiennes",
      feature1Desc: "Des mises à jour photo téléchargées quotidiennement sur votre portail client.",
      feature2Title: "Rapports Hebdomadaires",
      feature2Desc: "Des rapports d'avancement détaillés avec mises à jour du budget et du calendrier.",
      feature3Title: "Suivi Du Budget",
      feature3Desc: "Suivi du budget en temps réel avec une facturation transparente.",
      feature4Title: "Alertes De Calendrier",
      feature4Desc: "Des notifications pour les jalons, les retards et les points de décision.",
      servicesHeading: "Nos Services De Gestion",
      servicesItems: [
        "Planification de projet et gestion du calendrier",
        "Suivi du budget et contrôle des coûts",
        "Assurance qualité et inspections",
        "Coordination et supervision des sous-traitants",
        "Gestion des permis et de la conformité",
        "Communication et rapports",
        "Évaluation et atténuation des risques",
        "Remise finale et levée des réserves",
      ],
    },
    buyPage: {
      heroEyebrow: "Réservez Votre Villa",
      heroTitle: "Réservez Votre Villa",
      heroSubtitle:
        "Sécurisez votre unité dans nos résidences actives avec un acompte de réservation. Il s'agit d'une demande d'acompte, pas d'un paiement en ligne — notre équipe confirme chaque réservation directement avec vous sur WhatsApp.",
      trustPoint1Title: "Un Acompte Sécurise Votre Unité",
      trustPoint1Desc: "Un acompte sécurise l'unité pendant que les contrats et structures sont finalisés.",
      trustPoint2Title: "Solde Lié Aux Étapes De Construction",
      trustPoint2Desc:
        "Le solde restant est payé par étapes liées à de réelles étapes de construction, et non à des dates fixes, afin que vous ne payiez que pour les travaux réellement effectués.",
      trustPoint3Title: "Diligence Raisonnable Juridique Incluse",
      trustPoint3Desc: "Vérification du titre, conformité de zonage et vérifications de permis effectuées avant la signature des contrats.",
      formEyebrow: "Demander Une Réservation",
      formHeading: "Dites-Nous Quelle Villa Vous Voulez",
      formParagraph:
        "Partagez vos coordonnées et l'unité souhaitée ci-dessous. Nous répondrons sur WhatsApp avec les prochaines étapes, les conditions du contrat et le montant de l'acompte pour la résidence choisie.",
      developmentLabel: "Résidence",
      developmentPlaceholder: "Sélectionnez une résidence",
      unitLabel: "Villa / Type d'Unité",
      unitPlaceholder: "ex. 3 Chambres, 4 Chambres",
    },
    caseStudyPage: {
      pageTitle: "Étude de Cas : Villa B&P Ever Retreat",
      pageSubtitle: "Comment nous avons conçu et construit notre villa vitrine au Lac Kivu.",
      challengeHeading: "Le Défi",
      challengeParagraph:
        "Le site est une parcelle en bord de lac au Lac Kivu, avec un terrain escarpé et une vue panoramique sur le lac. Construire en toute sécurité sur le rivage a nécessité une ingénierie spécialisée et des travaux de fondation particuliers.",
      solutionHeading: "La Solution",
      solutionParagraph:
        "Notre équipe a conçu une villa vitrine unique, positionnée pour une vue maximale sur le lac, avec une piscine à débordement privée. Nous avons utilisé des fondations en béton armé et des terrasses en porte-à-faux.",
      resultsHeading: "Résultats",
      resultsParagraph:
        "La villa achevée sert désormais de vitrine vivante des standards de conception et de construction d'Ever Retreat — une référence concrète que nos clients et partenaires peuvent visiter en personne.",
      timelineEyebrow: "Comment Tout S'est Construit",
      timelineHeading: "Calendrier du Projet",
      timelineHeadingLight: "Calendrier du",
      timelineHeadingBold: "Projet",
      phaseLabel: "Phase",
      outcomeEyebrow: "Le Résultat",
      outcomeHeading: "Le Projet en Un Coup D'œil",
      outcomeHeadingLight: "Le Projet en Un",
      outcomeHeadingBold: "Coup D'œil",
    },
    testimonialsPage: {
      heroTitle: "Témoignages Clients",
      heroSubtitle: "De vraies histoires de propriétaires et investisseurs qui ont construit avec nous au Rwanda.",
      sectionEyebrow: "Dans Leurs Mots",
      sectionHeading: "Ce Que Disent Nos Clients",
      sectionHeadingLight: "Ce Que Disent",
      sectionHeadingBold: "Nos Clients",
      statsEyebrow: "En Chiffres",
      statsHeading: "Les Résultats Derrière Les Avis",
      statsHeadingLight: "Les Résultats",
      statsHeadingBold: "Derrière Les Avis",
    },
    termsPage: {
      heroSubtitle: "Conditions générales d'utilisation du site web et des services d'Ever Retreat.",
      lastUpdatedLabel: "Dernière Mise à Jour :",
      lastUpdatedValue: "Janvier 2026",
      questionsLabel: "Des Questions ?",
      section1Heading: "Acceptation des Conditions",
      section1Body:
        "En accédant au site web d'Ever Retreat ou en l'utilisant, vous acceptez d'être lié par ces Conditions Générales. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.",
      section2Heading: "Annonces Immobilières",
      section2Body:
        "Les annonces, les prix et la disponibilité des biens sur ce site peuvent changer sans préavis. Nous ne garantissons pas l'exactitude ou l'exhaustivité des informations des annonces.",
      section3Heading: "Investissement Immobilier",
      section3Body:
        "Toute décision d'investissement immobilier comporte des risques. Vous devez mener vos propres vérifications et consulter des conseils juridiques et financiers indépendants avant tout investissement.",
      section4Heading: "Contenu des Utilisateurs",
      section4Body:
        "Vous êtes responsable de tout contenu que vous soumettez via notre site. En soumettant du contenu, vous nous accordez un droit non exclusif de l'utiliser, le modifier et l'afficher.",
      section5Heading: "Propriété Intellectuelle",
      section5Body:
        "Tout le contenu de ce site, y compris les textes, images, logos et marques, est la propriété d'Ever Retreat ou de ses concédants. Vous ne pouvez pas reproduire ou distribuer notre contenu sans autorisation.",
      section6Heading: "Limitation de Responsabilité",
      section6Body:
        "Dans toute la mesure permise par la loi, Ever Retreat ne pourra être tenu responsable de tout dommage indirect, accessoire ou consécutif résultant de l'utilisation de notre site ou de nos services.",
      section7Heading: "Droit Applicable",
      section7Body:
        "Ces conditions sont régies par les lois du Rwanda. Tout litige relèvera de la compétence exclusive des tribunaux de Kigali, Rwanda.",
      section8Heading: "Modifications des Conditions",
      section8Body:
        "Nous pouvons mettre à jour ces conditions de temps à autre. La version la plus récente sera publiée sur cette page.",
      section9Heading: "Contact",
      section9BodyPre: "Pour toute question concernant ces conditions, contactez-nous à",
      section9BodyPost: ".",
      ctaHeading: "Des Questions Sur Nos Conditions ?",
      ctaParagraph: "Notre équipe est là pour répondre à toutes vos questions.",
      contactUsButton: "Nous Contacter",
      returnHomeButton: "Retour à l'Accueil",
    },
    privacyPage: {
      heroSubtitle: "Comment nous collectons, utilisons et protégeons vos informations personnelles.",
      lastUpdatedLabel: "Dernière Mise à Jour :",
      lastUpdatedValue: "Janvier 2026",
      questionsLabel: "Des Questions ?",
      section1Heading: "Informations Que Nous Collectons",
      section1Intro: "Nous collectons les informations personnelles que vous nous fournissez directement, y compris :",
      section1Item1: "Nom et coordonnées (e-mail, téléphone)",
      section1Item2: "Préférences immobilières et objectifs d'investissement",
      section1Item3: "Historique de communication et correspondance",
      section2Heading: "Comment Nous Utilisons Vos Informations",
      section2Intro: "Nous utilisons vos informations pour :",
      section2Item1: "Répondre à vos demandes et fournir des services immobiliers",
      section2Item2: "Vous envoyer des newsletters et mises à jour (si vous y avez consenti)",
      section2Item3: "Améliorer notre site web et nos services",
      section2Item4: "Nous conformer à nos obligations légales",
      section3Heading: "Cookies",
      section3Body:
        "Nous utilisons des cookies pour mémoriser vos préférences et améliorer votre expérience sur notre site. Vous pouvez gérer les paramètres des cookies via votre navigateur.",
      section4Heading: "Services Tiers",
      section4Body:
        "Nous pouvons partager vos informations avec des partenaires de confiance pour des services immobiliers, le marketing et l'analyse. Tous les partenaires sont contractuellement tenus de protéger vos données.",
      section5Heading: "Sécurité des Données",
      section5Body:
        "Nous mettons en œuvre des mesures de sécurité conformes aux normes du secteur pour protéger vos informations personnelles. Cependant, aucune méthode de transmission sur internet n'est sécurisée à 100 %.",
      section6Heading: "Vos Droits",
      section6BodyPre: "Vous avez le droit d'accéder à vos informations personnelles, de les corriger ou de les supprimer. Contactez-nous à",
      section6BodyPost: "pour exercer ces droits.",
      section7Heading: "Modifications de Cette Politique",
      section7Body: "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Tout changement sera publié sur cette page.",
      section8Heading: "Nous Contacter",
      section8BodyPre: "Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à",
      section8BodyMid: "ou par WhatsApp",
      section8BodyPost: ".",
      ctaHeading: "Des Questions Sur Votre Confidentialité ?",
      ctaParagraph: "Notre équipe est là pour répondre à toutes vos préoccupations en matière de confidentialité.",
      contactUsButton: "Nous Contacter",
      returnHomeButton: "Retour à l'Accueil",
    },
    processPage: {
      heroTitle: "Le Processus",
      heroSubtitle: "Construire une villa au Rwanda n'a pas à être compliqué. Voici exactement ce qui se passe, étape par étape.",
    },
    processStepsSection: {
      eyebrow: "De la Vision à la Villa",
      heading: "Le Processus en 12 Étapes",
      subheading: "Chaque projet suit le même parcours éprouvé - de votre brief initial jusqu'à la première réservation d'invité.",
      step1Title: "Brief du Projet",
      step1Desc: "Nous commençons par un appel de 90 minutes pour comprendre votre terrain, votre budget et vos objectifs pour votre villa au Rwanda.",
      step2Title: "Recherche de Terrain",
      step2Desc: "Si vous ne possédez pas encore de terrain, nous parcourons notre réseau d'annonces et présélectionnons 3 à 5 sites correspondant à votre brief.",
      step3Title: "Visite du Site",
      step3Desc: "Nous organisons une visite du site où vous rencontrez l'agent local, examinez le zonage et confirmez que le terrain convient.",
      step4Title: "Vérifications Préalables",
      step4Desc: "Notre équipe juridique vérifie le certificat foncier, contrôle la conformité au zonage et examine toute charge éventuelle.",
      step5Title: "Achat et Contrats",
      step5Desc: "Nous négocions le prix d'achat, organisons le transfert de fonds via notre avocat désigné et signons le contrat de vente.",
      step6Title: "Brief de Conception",
      step6Desc: "Nous briefons nos architectes sur votre style, la taille de la villa et le programme - puis créons 3 concepts de design.",
      step7Title: "Conception Architecturale",
      step7Desc: "Nos architectes produisent des plans détaillés, des rendus 3D et des plans structurels - prêts pour le dépôt de permis.",
      step8Title: "Dépôt de Permis",
      step8Desc: "Nous soumettons tous les documents aux autorités compétentes et suivons les approbations tout au long du processus.",
      step9Title: "Construction",
      step9Desc: "Notre équipe de construction bâtit la villa des fondations à la remise des clés, avec des mises à jour photo hebdomadaires.",
      step10Title: "Intérieurs et Stylisme",
      step10Desc: "Nous gérons le design d'intérieur, la sélection du mobilier et le stylisme - ou assurons la gestion de projet pour vos propres choix.",
      step11Title: "Remise des Clés",
      step11Desc: "Nous effectuons une visite finale, corrigeons les points en suspens et vous remettons les clés.",
      step12Title: "Mise en Location",
      step12Desc: "Notre équipe de gestion de villa met en place les annonces, la photographie professionnelle, la tarification dynamique et la gestion des invités.",
      step1Bullets: ["Appel de brief de 90 minutes", "Examen du terrain, du budget et des objectifs"],
      step2Bullets: ["Accès à notre réseau d'annonces de terrains", "3 à 5 sites présélectionnés correspondant à votre brief"],
      step3Bullets: ["Visite du site guidée", "Présentation de l'agent local", "Examen du zonage et de la conformité"],
      step4Bullets: ["Vérification du certificat foncier", "Contrôle de conformité au zonage", "Examen des charges éventuelles"],
      step5Bullets: ["Négociation du prix d'achat", "Transfert de fonds via l'avocat désigné", "Signature du contrat de vente"],
      step6Bullets: ["Briefing des architectes sur le style et le programme", "Planification de la taille et de l'agencement", "3 concepts de design livrés"],
      step7Bullets: ["Plans architecturaux détaillés", "Rendus 3D", "Plans structurels prêts pour le permis"],
      step8Bullets: ["Soumission des documents aux autorités", "Suivi des approbations tout au long du processus"],
      step9Bullets: ["Construction des fondations à la remise des clés", "Mises à jour photo hebdomadaires"],
      step10Bullets: ["Design d'intérieur et sélection du mobilier", "Stylisme, ou gestion de projet pour vos propres choix"],
      step11Bullets: ["Visite finale", "Corrections des points en suspens", "Remise des clés"],
      step12Bullets: ["Mise en place des annonces", "Photographie professionnelle", "Tarification dynamique et gestion des invités"],
      faqEyebrow: "Questions Fréquentes",
      faqHeading: "FAQ sur le Processus",
    },
    formsPage: {
      heroTitle: "Formulaires et Documents",
      heroSubtitle: "Téléchargez les formulaires dont vous avez besoin pour votre projet immobilier au Rwanda.",
      sectionEyebrow: "Formulaires Téléchargeables",
      sectionHeading: "Formulaires et Documents",
      sectionHeadingLight: "Formulaires et",
      sectionHeadingBold: "Documents",
      sectionParagraph: "Demandez les formulaires dont vous avez besoin pour votre achat immobilier, votre contrat de construction ou votre contrat de gestion.",
      item1Title: "Contrat d'Achat Immobilier",
      item1Time: "15 min",
      item1Desc: "Le contrat d'achat couvrant le prix, l'échéancier de paiement et les modalités de transfert de titre.",
      item2Title: "Contrat de Gestion de Construction",
      item2Time: "10 min",
      item2Desc: "Définit le périmètre, le calendrier de construction et les jalons de paiement de votre projet de villa.",
      item3Title: "Contrat de Gestion de Villa",
      item3Time: "10 min",
      item3Desc: "Précise comment nous mettons en location, gérons et entretenons votre villa une fois prête à louer.",
      item4Title: "Modèle de Projection de Rendement Locatif",
      item4Time: "5 min",
      item4Desc: "Un modèle pour estimer les revenus locatifs et le retour sur investissement de votre bien au Rwanda.",
      availableLabel: "Disponible sur demande",
      requestButtonLabel: "Demander",
      notSureHeading: "Vous ne savez pas quel formulaire choisir ?",
      notSureBody: "Parlez-nous de votre projet et nous vous orienterons vers le bon document, ou nous vous accompagnerons directement dans les démarches.",
      notSureCta: "Nous Demander",
    },
    naraVillasPage: {
      heroName: "B&P Ever Retreat Villa",
      heroTagline: "Prototype | Rubavu, Rwanda",
      heroSubtitle: "Villa Vitrine | Vue sur le Lac | Piscine Privée | Lake Kivu",
      heroImageAlt: "B&P Ever Retreat Villa - Rubavu Lake Kivu",
      heroSecondaryCtaLabel: "En Savoir Plus",
      heroStatusBadge: "Prototype — Pas À Vendre",
      developmentEyebrow: "Le Projet",
      developmentHeading: "Une villa vitrine sur une colline paisible de Rubavu",
      developmentParagraph1:
        "À quelques pas de la rive occidentale du Lake Kivu, avec une piscine privée sur toute la propriété. Conçue selon une approche tropicale moderne, l'architecture place le bien-être au cœur de la conception dès le départ. Des lignes épurées, des espaces ouverts et une lumière naturelle abondante se conjuguent à la végétation et à une circulation d'air fraîche.",
      developmentParagraph2:
        "B&P Ever Retreat Villa se trouve sur les rives du Lake Kivu, à quelques instants de la ville de Rubavu et de Gisenyi. Le site attire les visiteurs pour les croisières au coucher du soleil, les sports nautiques et la détente au bord du lac, avec une demande constante des visiteurs régionaux et internationaux les week-ends et jours fériés.",
      developmentParagraph3:
        "B&P Ever Retreat Villa est notre villa vitrine achevée, construite selon les mêmes normes de conception et de construction que chaque projet Ever Retreat. Elle n'est actuellement pas à vendre.",
      locationLabel: "Emplacement",
      locationValue: "Rubavu, Lake Kivu, Rwanda",
      totalVillasLabel: "Total des Villas",
      totalVillasValue: "1",
      statusLabel: "Statut",
      statusValue: "Pas À Vendre",
      buildStatusLabel: "État de Construction",
      buildStatusValue: "Achevée",
      glanceEyebrow: "En Bref",
      glanceDevelopmentLabel: "Projet",
      glanceDevelopmentValue: "B&P Ever Retreat Villa",
      glanceDeveloperLabel: "Promoteur",
      glanceDeveloperValue: "Ever Retreat",
      glanceLocationLabel: "Emplacement",
      glanceLocationValue: "Rubavu, Lake Kivu, Rwanda",
      glanceZoneLabel: "Zone",
      glanceZoneValue: "Résidentielle / Désignée Tourisme",
      glanceTotalVillasLabel: "Total des Villas",
      glanceTotalVillasValue: "1",
      glanceBuildStatusLabel: "État de Construction",
      glanceBuildStatusValue: "Achevée",
      glanceStatusLabel: "Statut",
      glanceStatusValue: "Prototype — Pas À Vendre",
      longViewLabel: "La Vue d'Ensemble",
      longViewText: "Une vitrine du design et du savoir-faire qui caractérisent chaque villa Ever Retreat.",
      longViewImageAlt: "B&P Ever Retreat Villa vue d'ensemble",
      featuresEyebrow: "Inclus Avec la Villa",
      featuresHeading: "Conçue pour le bien-être.",
      feature1Title: "Piscine Privée",
      feature1Desc:
        "La villa comprend une piscine privée, positionnée pour l'intimité et conçue pour les longueurs matinales comme pour la détente en soirée.",
      feature2Title: "Design Tropical Moderne",
      feature2Desc:
        "Des lignes épurées, des espaces ouverts et une lumière naturelle se conjuguent à la végétation et à une circulation d'air fraîche pour créer des espaces calmes et sans effort.",
      feature3Title: "Service de Transfert vers le Lac",
      feature3Desc:
        "Service de transfert dédié vers les sites au bord du lac et vers Gisenyi inclus. Accès facile à tout ce que le lac a à offrir.",
      feature4Title: "Gestion Dédiée de la Villa",
      feature4Desc: "Une équipe interne gère les opérations liées aux invités, l'entretien et les rapports mensuels.",
      feature5Title: "Sauna et Bain de Glace en Option",
      feature5Desc:
        "Infrastructure bien-être intégrée dès la conception. Installations de sauna et de bain de glace disponibles en option.",
      attractionsEyebrow: "Attractions à Proximité",
      attractionsHeading: "Sur les rives du Lake Kivu à Rubavu",
      exploreAreaLink: "Découvrir le Guide de la Région de Rubavu →",
      lakeKivuImageAlt: "Région du Lake Kivu",
      lakeKivuBadge: "Rives du Lake Kivu",
      lakeKivuTitle: "Lake Kivu",
      lakeKivuDesc:
        "La rive occidentale du Lake Kivu. Détente au bord du lac, croisières au coucher du soleil et demande constante des visiteurs régionaux et internationaux les week-ends et jours fériés.",
      attraction1Name: "Gisenyi Waterfront",
      attraction1Time: "À 5 minutes",
      attraction1Desc: "Promenade animée au bord du lac avec cafés, croisières en bateau et le centre-ville dynamique de Gisenyi.",
      attraction2Name: "Lake Kivu Sunset Cruises",
      attraction2Time: "À 15 minutes",
      attraction2Desc: "Balades en bateau pittoresques sur le Lake Kivu avec vue sur les collines et les îles environnantes.",
      ctaEyebrow: "Notre Villa Vitrine à Rubavu",
      ctaHeading: "Prototype — Pas À Vendre",
      ctaParagraph:
        "B&P Ever Retreat Villa est notre villa vitrine achevée sur le Lake Kivu, construite pour démontrer les normes de conception et de construction de chaque projet Ever Retreat. Contactez-nous pour en savoir plus.",
      ctaEnquireLabel: "Nous Contacter",
      ctaViewAllLabel: "Voir Toutes Les Résidences",
    },
    solasUluwatuPage: {
      heroName: "Cottage",
      heroTagline: "Prototype | Rubavu, Rwanda",
      heroSubtitle: "Villa Vitrine | Vue Panoramique | Vie au Bord du Lac",
      heroImageAlt: "Cottage - Lake Kivu",
      heroSecondaryCtaLabel: "En Savoir Plus",
      heroStatusBadge: "Prototype — Pas À Vendre",
      developmentEyebrow: "Le Projet",
      developmentHeading: "Une villa vitrine sur la colline de Rubavu",
      developmentParagraph1:
        "Cottage est une villa vitrine de 3 chambres située sur la colline surplombant Rubavu, offrant une vue panoramique sur le Lake Kivu. Elle se trouve à quelques instants de la rive du lac et du centre-ville de Rubavu.",
      developmentParagraph2:
        "La villa dispose de baies vitrées du sol au plafond, d'une piscine à débordement privée, et d'une conception qui maximise la vie intérieure-extérieure. L'architecture combine des éléments tropicaux modernes avec la pierre locale et le savoir-faire artisanal du bois.",
      developmentParagraph3:
        "Cottage est notre villa vitrine achevée dans une zone désignée tourisme à Rubavu — construite selon les mêmes normes de conception et de construction que chaque projet Ever Retreat. Elle n'est actuellement pas à vendre.",
      locationLabel: "Emplacement",
      locationValue: "Rubavu, Lake Kivu, Rwanda",
      bedroomsLabel: "Chambres",
      bedroomsValue: "3",
      statusLabel: "Statut",
      statusValue: "Pas À Vendre",
      buildStatusLabel: "État de Construction",
      buildStatusValue: "Achevée",
      glanceEyebrow: "En Bref",
      glanceDevelopmentLabel: "Projet",
      glanceDevelopmentValue: "Cottage",
      glanceDeveloperLabel: "Promoteur",
      glanceDeveloperValue: "Ever Retreat",
      glanceLocationLabel: "Emplacement",
      glanceLocationValue: "Rubavu, Lake Kivu, Rwanda",
      glanceZoneLabel: "Zone",
      glanceZoneValue: "Résidentielle / Désignée Tourisme",
      glanceTotalVillasLabel: "Total des Villas",
      glanceTotalVillasValue: "1",
      glanceBedroomsLabel: "Chambres",
      glanceBedroomsValue: "3",
      glanceBuildAreaLabel: "Surface Construite",
      glanceBuildAreaValue: "250 m²",
      glanceBuildStatusLabel: "État de Construction",
      glanceBuildStatusValue: "Achevée",
      glanceStatusLabel: "Statut",
      glanceStatusValue: "Prototype — Pas À Vendre",
      longViewLabel: "La Vue d'Ensemble",
      longViewText: "Une vitrine du design et du savoir-faire qui caractérisent chaque villa Ever Retreat.",
      longViewImageAlt: "Cottage vue sur le lac",
      featuresEyebrow: "Inclus Avec la Villa",
      featuresHeading: "Conçue pour le bien-être.",
      feature1Title: "Vue Panoramique sur le Lac",
      feature1Desc: "La villa est positionnée pour offrir une vue dégagée sur le Lake Kivu et les volcans environnants.",
      feature2Title: "Design Tropical Moderne",
      feature2Desc:
        "Des lignes épurées, des matériaux naturels et des espaces de vie ouverts qui fusionnent la vie intérieure et extérieure.",
      feature3Title: "Bien-être au Bord du Lac",
      feature3Desc: "Piscine à débordement privée, terrasse de yoga et installation de sauna en option dès la conception.",
      attractionsEyebrow: "Attractions à Proximité",
      attractionsHeading: "Sur les rives du Lake Kivu à Rubavu",
      exploreAreaLink: "Découvrir le Guide de la Région de Rubavu →",
      attraction1ImageAlt: "Région du Lake Kivu",
      attraction1Badge: "Rives du Lake Kivu",
      attraction1Title: "Rubavu",
      attraction1Desc:
        "Rubavu est la ville lacustre du Rwanda sur la rive nord du Lake Kivu. Réputée pour son atmosphère détendue, ses sports nautiques et ses magnifiques couchers de soleil sur le lac.",
      attraction2ImageAlt: "Région de Gisenyi",
      attraction2Time: "À 10 minutes",
      attraction2Title: "Gisenyi",
      attraction2Desc: "La promenade animée de Gisenyi au bord du lac, avec ses cafés, ses croisières en bateau et ses restaurants en bord de lac.",
      ctaEyebrow: "Notre Villa Vitrine à Rubavu",
      ctaHeading: "Prototype — Pas À Vendre",
      ctaParagraph:
        "Cottage est notre villa vitrine achevée à Rubavu, construite pour démontrer les normes de conception et de construction de chaque projet Ever Retreat. Contactez-nous pour en savoir plus.",
      ctaEnquireLabel: "Nous Contacter",
      ctaViewAllLabel: "Voir Toutes Les Résidences",
    },
    sukuResidencesPage: {
      heroName: "Virunga Villas",
      heroTagline: "Bientôt Disponible | Musanze, Rwanda",
      heroSubtitle: "2, 3 et 4 Chambres | Communauté de Montagne | Piscines Privées | Musanze",
      heroImageAlt: "Virunga Villas Musanze",
      heroStatusBadge: "Bientôt Disponible",
      developmentEyebrow: "Le Projet",
      developmentHeading: "Virunga est conçu délibérément à petite échelle",
      developmentParagraph1:
        "Neuf villas réparties en configurations de 2, 3 et 4 chambres, sur un site unique et raffiné dans la zone désignée tourisme de Musanze. Le plan compact du site crée le sentiment de communauté qui favorise les réservations répétées et augmente les tarifs nocturnes par rapport aux villas isolées.",
      developmentParagraph2:
        "Conçu à la fois comme une retraite et un lieu de vie durable, Virunga mêle nature, design et qualité de vie d'une manière discrètement luxueuse et résolument différente. Finies en Terracotta et Gris, chaque villa dispose d'une piscine privée, d'un majordome dédié, d'un service de transfert aéroport et d'une sécurité 24h/24.",
      developmentParagraph3:
        "Virunga Villas propose des options de propriété en pleine propriété et en bail dans une zone désignée tourisme, ce qui permet légalement l'hébergement touristique et la location de courte durée. Pleine éligibilité aux licences de location requises, conformité aux activités touristiques approuvées par le gouvernement, et sécurité à long terme pour votre investissement.",
      locationLabel: "Emplacement",
      locationValue: "Musanze, Région des Volcans, Rwanda",
      bedroomsLabel: "Chambres",
      bedroomsValue: "2, 3 et 4",
      statusLabel: "Statut",
      statusValue: "Bientôt Disponible",
      tenureLabel: "Régime Foncier",
      tenureValue: "Pleine Propriété et Bail",
      glanceEyebrow: "En Bref",
      glanceDevelopmentLabel: "Projet",
      glanceDevelopmentValue: "Virunga Villas",
      glanceDeveloperLabel: "Promoteur",
      glanceDeveloperValue: "Ever Retreat",
      glanceLocationLabel: "Emplacement",
      glanceLocationValue: "Musanze, Région des Volcans, Rwanda",
      glanceZoneLabel: "Zone",
      glanceZoneValue: "Résidentielle / Désignée Tourisme",
      glanceTotalVillasLabel: "Total des Villas",
      glanceTotalVillasValue: "9",
      glanceBedroomsLabel: "Chambres",
      glanceBedroomsValue: "2, 3 et 4",
      glanceBuildAreaLabel: "Surface Construite",
      glanceBuildAreaValue: "165 - 280 m²",
      glanceLandAreaLabel: "Surface du Terrain",
      glanceLandAreaValue: "120 - 220 m²",
      glanceStatusLabel: "Statut",
      glanceStatusValue: "Bientôt Disponible",
      glanceTenureLabel: "Régime Foncier",
      glanceTenureValue: "Options de Pleine Propriété et Bail",
      villaTypesEyebrow: "Types de Villas",
      villaTypesHeading: "Trois configurations. Chacune avec une piscine privée.",
      bedCardStatusLabel: "Bientôt Disponible",
      bed1Label: "2 Chambres",
      bed1Build: "165 m² construits",
      bed1Land: "120 m² de terrain",
      bed2Label: "3 Chambres",
      bed2Build: "210 m² construits",
      bed2Land: "160 m² de terrain",
      bed3Label: "4 Chambres",
      bed3Build: "280 m² construits",
      bed3Land: "220 m² de terrain",
      featuresEyebrow: "Inclus Avec Chaque Villa",
      featuresHeading: "Tout est pris en charge.",
      feature1Title: "Piscines Privées",
      feature1Desc: "Chaque villa comprend une piscine privée, dimensionnée selon la configuration et positionnée pour l'intimité et l'ensoleillement.",
      feature2Title: "Majordome Dédié",
      feature2Desc: "Le service de majordome sur place s'occupe de tout, du café matinal aux demandes tardives dans la soirée.",
      feature3Title: "Transfert Aéroport",
      feature3Desc:
        "Service de transfert gratuit vers l'aéroport international de Kigali. Pas de stationnement, pas de tracas, juste un trajet confortable vers votre vol.",
      feature4Title: "Sécurité 24h/24",
      feature4Desc: "Entrée sécurisée et personnel de sécurité 24h/24 et 7j/7. Tranquillité d'esprit pour les propriétaires et les invités.",
      feature5Title: "Pack de Prestations Supplémentaires",
      feature5Desc:
        "Chaque villa comprend un pack de prestations d'une valeur allant jusqu'à 25 000 $ — mobilier, électroménager et installation domotique.",
      feature6Title: "Communauté de Montagne",
      feature6Desc: "Un site délibérément restreint avec neuf villas. Le plan compact crée le sentiment de communauté qui augmente les tarifs nocturnes.",
      ctaEyebrow: "Virunga Villas",
      ctaHeading: "Bientôt Disponible",
      ctaParagraph:
        "Virunga Villas est actuellement en phase de conception pour Musanze. Inscrivez votre intérêt pour être parmi les premiers informés dès que les détails seront confirmés.",
      ctaEnquireLabel: "Nous Contacter",
      ctaViewAllLabel: "Voir Toutes Les Résidences",
    },
    realEstatePageExtras: {
      inventoryDevelopmentsLabel: "Résidences Actives",
      inventoryAreasLabel: "Régions Couvertes",
      propertyTypesEyebrow: "Dans Quoi Investir",
      propertyTypesHeading: "Types de Biens",
      villasCardTitle: "Villas",
      villasCardDesc: "Des villas sur plan et en construction dans nos résidences actives, entièrement gérées du terrain aux revenus locatifs.",
      villasCardCta: "Voir Les Résidences",
      landCardTitle: "Terrain",
      landCardDesc: "Des terrains vérifiés par diligence raisonnable dans les principales régions d'investissement du Rwanda, au prix selon l'emplacement.",
      landCardPriceLabel: "À partir de",
      landCardPriceValue: "10 $ – 120 $/m² selon la région",
      landCardCta: "Explorer Les Terrains",
      areaFromLabel: "Terrain à partir de",
    },
    developmentsPageExtras: {
      serviceLinksEyebrow: "Aller Plus Loin",
      serviceLinksHeading: "Planifier, Construire et Gérer",
      calculatorKicker: "Estimer les Coûts",
      calculatorTitle: "Calculateur de Construction",
      calculatorDesc: "Estimez les coûts de construction, les prix des terrains et les rendements projetés pour votre projet de villa au Rwanda.",
      calculatorCta: "Essayer le Calculateur",
      constructionKicker: "Construction Sur Mesure",
      constructionTitle: "Construction de Villa",
      constructionDesc: "Transformez un plan en villa construite avec notre équipe de construction interne, des fondations à la remise des clés.",
      constructionCta: "Voir la Construction",
      villaManagementKicker: "Après l'Achat",
      villaManagementTitle: "Gestion de Villa",
      villaManagementDesc: "Mise en location, gestion des invités et entretien une fois votre villa construite et prête à générer des revenus.",
      villaManagementCta: "Voir la Gestion de Villa",
    },
    devDetailExtras: {
      relatedEyebrow: "Explorer Davantage",
      relatedHeading: "Résidences Associées",
      relatedViewLabel: "Voir la Résidence",
      faqEyebrow: "Questions Fréquentes",
      faqHeading: "Questions Fréquemment Posées",
      naraFaq: [
        {
          question: "Où se trouve la Villa B&P Ever Retreat ?",
          answer: "La résidence se trouve à Rubavu, sur les rives du lac Kivu.",
        },
        {
          question: "La villa est-elle disponible à la vente ?",
          answer: "La Villa B&P Ever Retreat est notre construction prototype et n'est actuellement pas à vendre. Inscrivez votre intérêt pour être informé de sa disponibilité future.",
        },
        {
          question: "Quel est l'état actuel de la construction ?",
          answer: "L'état de la construction et le nombre total de villas sont indiqués dans le tableau En Un Coup d'Œil ci-dessus, que nous mettons à jour au fur et à mesure de l'avancement des travaux.",
        },
      ],
      solasFaq: [
        {
          question: "Où se trouve la résidence Cottage ?",
          answer: "Le Cottage se trouve à Rubavu, près du lac Kivu.",
        },
        {
          question: "Combien de chambres compte le Cottage ?",
          answer: "Le nombre de chambres est indiqué dans le tableau En Un Coup d'Œil ci-dessus.",
        },
        {
          question: "Le Cottage est-il à vendre actuellement ?",
          answer: "Le Cottage est actuellement une construction prototype. Utilisez le formulaire de demande sur cette page pour inscrire votre intérêt et recevoir des mises à jour sur sa disponibilité.",
        },
      ],
      sukuFaq: [
        {
          question: "Où se trouvent les Virunga Villas ?",
          answer: "Virunga Villas est prévue à Musanze, près de la région des Volcans.",
        },
        {
          question: "Quelles tailles de villas sont disponibles ?",
          answer: "Trois configurations sont prévues : une 2 Chambres (165 m² construits, 120 m² de terrain), une 3 Chambres (210 m² construits, 160 m² de terrain) et une 4 Chambres (280 m² construits, 220 m² de terrain).",
        },
        {
          question: "Qu'est-ce qui est inclus avec chaque villa ?",
          answer: "Chaque villa comprend une piscine privée, un service de majordome dédié, un transfert gratuit vers l'aéroport de Kigali, une sécurité 24h/24 et un pack de prestations d'une valeur allant jusqu'à 25 000 $.",
        },
        {
          question: "Quand les Virunga Villas seront-elles disponibles ?",
          answer: "Virunga Villas est actuellement en phase de conception pour Musanze. Inscrivez votre intérêt pour être parmi les premiers informés dès que les détails seront confirmés.",
        },
      ],
      solasRoiEyebrow: "Aperçu de l'Investissement",
      solasRoiHeading: "À Quoi Ressemble le Marché de Rubavu",
      solasRoiParagraph:
        "Le Cottage se trouve à Rubavu, sur le lac Kivu — la même région couverte par nos données de marché ci-dessous. Ce sont des chiffres à l'échelle de Rubavu, pas un rendement garanti pour cette villa spécifique.",
      solasRoiYieldLabel: "Rendement Locatif Brut (Rubavu)",
      solasRoiYieldValue: "15-20%",
      solasRoiOccupancyLabel: "Taux d'Occupation Moyen (Rubavu)",
      solasRoiOccupancyValue: "85%",
      solasRoiNote: "Source : données de marché Ever Retreat pour la région de Rubavu. Les rendements réels dépendent de l'unité, du prix et des conditions de gestion convenues lors de la réservation.",
      sukuRoiEyebrow: "Aperçu de l'Investissement",
      sukuRoiHeading: "Pourquoi Musanze Fonctionne pour Cette Villa",
      sukuRoiParagraph:
        "Virunga Villas se trouve à Musanze, porte d'entrée du trekking des gorilles et du Parc National des Volcans - l'un des attraits touristiques les plus constants du Rwanda. Ce sont des chiffres à l'échelle de Musanze, pas un rendement garanti pour cette villa spécifique.",
      sukuRoiYieldLabel: "Rendement Locatif Brut (Musanze)",
      sukuRoiYieldValue: "12-18%",
      sukuRoiOccupancyLabel: "Taux d'Occupation Moyen (Musanze)",
      sukuRoiOccupancyValue: "80%",
      sukuRoiNote: "Source : données de marché Ever Retreat pour la région de Musanze. Les rendements réels dépendent de l'unité, du prix et des conditions de gestion convenues lors de la réservation.",
    },
    areasHubExtras: {
      statAreasLabel: "Régions Couvertes",
      statYieldLabel: "Fourchette de Rendement Brut",
      statYearsLabel: "Années au Rwanda",
    },
    relatedAreasSection: {
      eyebrow: "Continuer à Explorer",
      heading: "Régions Associées",
      viewLabel: "Explorer la Région",
    },
    zoneMattersSection: {
      eyebrow: "Zone à Vocation Touristique",
      heading: "Pourquoi le Zonage Compte",
      paragraph:
        "Cette résidence se trouve dans une zone à vocation touristique, qui autorise la location de courte durée et l'usage hôtelier selon les règles de zonage foncier du Rwanda. C'est important pour votre investissement : vous travaillez avec la zone, pas contre elle.",
      benefit1Title: "Location de Courte Durée Légale",
      benefit1Desc: "La location de courte durée et de vacances est un usage autorisé dans cette zone, pas une zone grise juridique à contourner.",
      benefit2Title: "Conforme à la Réglementation Locale",
      benefit2Desc: "Votre activité locative correspond à l'usage prévu pour cette zone, plutôt que de reposer sur une exception ou un contournement.",
      benefit3Title: "Permis Simplifiés",
      benefit3Desc: "Les demandes de permis touristiques et hôteliers correspondent à l'usage prévu de la zone, au lieu d'aller à son encontre.",
    },
  },
};
