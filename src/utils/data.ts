export interface InquiryFormData {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  location: string;
  eventDate?: string;
  headsetCount?: string;
  estimatedBudget?: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateInquiryForm(data: Partial<InquiryFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your name or organization name.';
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.serviceType) {
    errors.serviceType = 'Please select the type of VR experience or coverage.';
  }

  if (!data.message || data.message.trim().length < 5) {
    errors.message = 'Please share a brief description of your project or moment.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface JourneyItem {
  id: string;
  nameEn: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  region: 'Egypt Desert' | 'Cairo Heritage' | 'Red Sea' | 'Arabian Gulf';
  coordinates: string;
  elevation: string;
  descriptionEn: string;
  descriptionAr: string;
  historicalContextEn: string;
  historicalContextAr: string;
  recordedIn: string;
  audioFormat: string;
  opticsSpecs: string;
  imageUrl: string;
  yearFilmed: string;
}

export const JOURNEYS: JourneyItem[] = [
  {
    id: 'siwa',
    nameEn: 'Siwa Oasis',
    nameAr: 'واحة سيوة',
    category: 'Oasis & Salt Lakes',
    categoryAr: 'الواحات وبحيرات الملح',
    region: 'Egypt Desert',
    coordinates: '29.2032° N, 25.5195° E',
    elevation: '-19m Below Sea Level',
    descriptionEn: 'Sacred waters, palm groves, and silence carved from ancient salt crystals across Lake Siwa.',
    descriptionAr: 'مياه مقدسة، واحات نخيل وارفة، وصمت محفور في بلورات الملح القديمة عبر بحيرة سيوة.',
    historicalContextEn: 'Isolated for millennia in the Western Desert, Siwa represents one of Egypt’s most preserved Amazigh cultural sanctuaries.',
    historicalContextAr: 'معزولة لآلاف السنين في الصحراء الغربية، تمثل سيوة أحد أكثر المحميات التراثية الأمازيغية عراقة وأصالة في مصر.',
    recordedIn: '360° 8K Stereoscopic',
    audioFormat: 'Tetrahedral 1st-Order Ambisonics',
    opticsSpecs: 'Dual 200° Fisheye Optics · 60fps HDR',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    yearFilmed: '2024 · Sunset Season',
  },
  {
    id: 'amun',
    nameEn: 'Amun Temple',
    nameAr: 'معبد آمون (الوحي)',
    category: 'Sacred Sanctuary',
    categoryAr: 'المعابد المقدسة',
    region: 'Egypt Desert',
    coordinates: '29.2045° N, 25.5398° E',
    elevation: '+14m',
    descriptionEn: 'The Oracle where Alexander the Great sought destiny, standing timeless under desert constellations.',
    descriptionAr: 'معبد الوحي حيث سأل الإسكندر الأكبر عن قدره ومجده، صامداً تحت سماء الصحراء ونجومها الخالدة.',
    historicalContextEn: 'Built during the 26th Dynasty, the Oracle of Amun drew monarchs across the Mediterranean seeking divine prophecies.',
    historicalContextAr: 'شُيّد في عهد الأسرة السادسة والعشرين، وكان مقصداً لملوك وحكام حوض البحر المتوسط طلباً للنبؤات الإلهية.',
    recordedIn: '8K VR Architectural Scan',
    audioFormat: 'Binaural Impulse Response Decay',
    opticsSpecs: 'Multi-Exposure Bracketing 360°',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    yearFilmed: '2024 · Night Expedition',
  },
  {
    id: 'shali',
    nameEn: 'Shali Citadel',
    nameAr: 'قلعة شالي القديمة',
    category: 'Mudbrick Citadel',
    categoryAr: 'القلاع التاريخية',
    region: 'Egypt Desert',
    coordinates: '29.2036° N, 25.5178° E',
    elevation: '+28m',
    descriptionEn: 'The labyrinthine kershef fortress melting into the Saharan dusk.',
    descriptionAr: 'قلعة الكرشيف الطينية العتيقة التي تذوب في ضوء الشفق الصحراوي الساحر.',
    historicalContextEn: 'Constructed in 1203 AD from kershef (salt, mud, and clay chunks), Shali protected Siwi tribes from nomadic raiders.',
    historicalContextAr: 'أُسست عام 1203م من مادة الكرشيف المتوارثة (الملح الصخري والطمي)، لتحصين القبائل السيوية ضد الغزوات.',
    recordedIn: '360° 8K Night Cinema',
    audioFormat: 'Desert Wind Ambisonic Matrix',
    opticsSpecs: 'Low-Light Optimized 360° Rigs',
    imageUrl: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80',
    yearFilmed: '2024 · Nocturnal Reel',
  },
  {
    id: 'old-cairo',
    nameEn: 'Old Cairo',
    nameAr: 'مصر القديمة الفسطاط',
    category: 'Historic Urban Realm',
    categoryAr: 'التراث الحضري التاريخي',
    region: 'Cairo Heritage',
    coordinates: '30.0055° N, 31.2302° E',
    elevation: '+22m',
    descriptionEn: 'Narrow stone alleys echoing with millennium-old church bells and market echoes.',
    descriptionAr: 'أزقة حجرية ضيقة تردد أصداء أجراس الكنائس التليدة وأصوات الأسواق منذ ألف عام.',
    historicalContextEn: 'The historic heart of Cairo incorporating Roman Babylon Fortress, ancient synagogues, and Coptic basilicas.',
    historicalContextAr: 'القلب التاريخي للقاهرة المحتضن لحصن بابليون الروماني وأعرق الكنائس القبطية والمساجد الجامعة.',
    recordedIn: 'Spatial 360° Streetscape',
    audioFormat: '360° Binaural Spatial Sound',
    opticsSpecs: 'Compact Mobile Stabilized Rig',
    imageUrl: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1200&q=80',
    yearFilmed: '2025 · Dawn Walkthrough',
  },
  {
    id: 'el-moez',
    nameEn: 'El Moez Street',
    nameAr: 'شارع المعز لدين الله',
    category: 'Fatimid Architecture',
    categoryAr: 'العمارة الفاطمية والمملوكية',
    region: 'Cairo Heritage',
    coordinates: '30.0489° N, 31.2612° E',
    elevation: '+26m',
    descriptionEn: 'The greatest open-air museum of Islamic architecture in the world.',
    descriptionAr: 'أعظم وأبهى متحف مفتوح للعمارة الإسلامية والمملوكية في العالم بأسره.',
    historicalContextEn: 'Commissioned in 969 AD by the Fatimid Caliphate, this royal corridor contains unmatched architectural minarets and madrasas.',
    historicalContextAr: 'شُرع في تخطيطه عام 969م في العصر الفاطمي، ويضم أروع القباب والمآذن والمدارس الأثرية.',
    recordedIn: 'High Dynamic Range 360°',
    audioFormat: 'Resonant Acoustic Ambisonics',
    opticsSpecs: '8K Stereoscopic Cinema Rigs',
    imageUrl: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&w=1200&q=80',
    yearFilmed: '2025 · Evening Session',
  },
  {
    id: 'dahab',
    nameEn: 'Dahab & Blue Hole',
    nameAr: 'دهب والبلو هول',
    category: 'Red Sea & Sinai',
    categoryAr: 'البحر الأحمر وجبال سيناء',
    region: 'Red Sea',
    coordinates: '28.5097° N, 34.5136° E',
    elevation: 'Sea Level to -100m',
    descriptionEn: 'Where rugged Sinai mountain ranges dive straight into turquoise abysses and living coral reefs.',
    descriptionAr: 'حيث تتعانق جبال سيناء الجرانيتية الشامخة مع المياه الفيروزية الصافية والشعاب المرجانية البديعة.',
    historicalContextEn: 'Sinai’s legendary coast where Bedouin hospitality meets submarine topography renowned across the globe.',
    historicalContextAr: 'ساحل سيناء الأسطوري الذي يجمع كرم الضيافة البدوية مع تضاريس بحرية عميقة تأسر الألباب.',
    recordedIn: 'Submarine & Drone 360°',
    audioFormat: 'Hydrophone Sub-Surface Audio',
    opticsSpecs: 'Custom Waterproof 360 Enclosure',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    yearFilmed: '2025 · Summer Expedition',
  },
  {
    id: 'wadi-degla',
    nameEn: 'Wadi Degla Reserve',
    nameAr: 'محمية وادي دجلة',
    category: 'Canyon Reserve',
    categoryAr: 'الأخاديد الجيرية',
    region: 'Cairo Heritage',
    coordinates: '29.9572° N, 31.3328° E',
    elevation: '+110m',
    descriptionEn: 'Prehistoric limestone canyon carved by ancient torrents on Cairo’s quiet desert edge.',
    descriptionAr: 'أخدود جيري مهيب من عصور ما قبل التاريخ نحتته السيول على أطراف القاهرة الهادئة.',
    historicalContextEn: 'Formed during the Eocene epoch over 50 million years ago, harboring fossilized coral and desert fauna.',
    historicalContextAr: 'تكون في عصر الإيوسين الجيولوجي قبل أكثر من 50 مليون سنة، ويحتضن حفريات بحرية نادرة وكائنات صحراوية فريدة.',
    recordedIn: '8K Canyon Sweep',
    audioFormat: 'Wind Tunnel Spatial Echo',
    opticsSpecs: 'Drone Cable-Cam 360 Rig',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    yearFilmed: '2024 · Dawn Horizon',
  },
  {
    id: 'doha',
    nameEn: 'Doha Corniche',
    nameAr: 'كورنيش الدوحة',
    category: 'Gulf Metropole',
    categoryAr: 'آفاق العواصم الخليجية',
    region: 'Arabian Gulf',
    coordinates: '25.2854° N, 51.5310° E',
    elevation: '+5m',
    descriptionEn: 'Futuristic architectural silhouettes reflecting over shimmering Arabian Gulf night horizons.',
    descriptionAr: 'ناطحات سحاب معمارية مستقبلية تنعكس أضواؤها الخلابة على مياه الخليج العربي ليلاً.',
    historicalContextEn: 'Modern spatial achievements representing the dramatic rapid evolution of Arabian Gulf skylines.',
    historicalContextAr: 'نهضة معمارية متقدمة تعكس التحول السريع والمبهر لعواصم الخليج العربي في القرن الحادي والعشرين.',
    recordedIn: 'Night Skyline 360°',
    audioFormat: 'Harbor Waves Binaural Ambience',
    opticsSpecs: 'High Dynamic Range Low-Noise 360',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    yearFilmed: '2025 · Winter Session',
  },
  {
    id: 'souq-waqif',
    nameEn: 'Souq Waqif',
    nameAr: 'سوق واقف التراثي',
    category: 'Heritage Marketplace',
    categoryAr: 'الأسواق التراثية',
    region: 'Arabian Gulf',
    coordinates: '25.2867° N, 51.5333° E',
    elevation: '+8m',
    descriptionEn: 'Scent of oud, incense, spices, and vibrant evening majlis gatherings.',
    descriptionAr: 'عبق العود والبخور والتوابل وجلسات السمر الحيوية في قلب التراث القطري الأصيل.',
    historicalContextEn: 'A century-old trading marketplace faithfully restored with clay, timber, and traditional gypsum architecture.',
    historicalContextAr: 'سوق تجاري يعود لأكثر من قرن، رُمم بدقة بأخشاب الدنجل والطين والجبس ليحفظ نبض التجارة القديمة.',
    recordedIn: '360° Cultural Streetscape',
    audioFormat: 'Crowd & Oud Ambisonics',
    opticsSpecs: 'Gimbal Walkthrough 60fps',
    imageUrl: 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1200&q=80',
    yearFilmed: '2025 · Evening Reel',
  },
  {
    id: 'lusail',
    nameEn: 'Lusail City',
    nameAr: 'مدينة لوسيل الحديثة',
    category: 'Architectural Frontier',
    categoryAr: 'المعالم المعمارية الحديثة',
    region: 'Arabian Gulf',
    coordinates: '25.4217° N, 51.4908° E',
    elevation: '+12m',
    descriptionEn: 'Hyper-modern spatial monuments designed for the centuries and summits ahead.',
    descriptionAr: 'صروح معمارية فائقة التطور صُممت لقمم وفعاليات قرون المستقبل.',
    historicalContextEn: 'Masterplanned as a sustainable hyper-city hosting global athletic, leadership, and cultural milestones.',
    historicalContextAr: 'مدينة مستدامة مخططة بأعلى المعايير العالمية لاستضافة أضخم الفعاليات القيادية والرياضية الدولية.',
    recordedIn: '8K VR Architectural Drone',
    audioFormat: 'Atmospheric Spatial Drone',
    opticsSpecs: 'Heavy-Lift Drone 8K Payload',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    yearFilmed: '2025 · Horizon Scan',
  },
];

export interface PromoSlide {
  slideNumber: string;
  badge: string;
  heading: string;
  subheading: string;
  bodyEn: string;
  bodyAr: string;
  targetAudienceEn: string;
  targetAudienceAr: string;
  detailedInsightEn: string;
  detailedInsightAr: string;
}

export const PROMO_SLIDES: PromoSlide[] = [
  {
    slideNumber: '01 / 07',
    badge: 'SPATIAL PRESERVATION',
    heading: 'BEYOND FLAT SCREENS.',
    subheading: 'EXPERIENCE — Total spatial immersion.',
    bodyEn: 'MEMORY RECLAIMED AS REALITY.',
    bodyAr: 'استعادة الذكرى كواقع حي ملموس.',
    targetAudienceEn: 'Cultural institutions · Elite private galas · Historic milestones',
    targetAudienceAr: 'المؤسسات الثقافية · الفعاليات الكبرى · اللحظات التاريخية الخالدة',
    detailedInsightEn: 'A conventional video camera crops 95% of reality into a miniature flat rectangle. Vision VR preserves the full 360-degree volume of air, acoustics, and presence.',
    detailedInsightAr: 'الكاميرات العادية تقطع 95% من تفاصيل الواقع في مستطيل مسطح. نحن نوثق كامل الحجم المكاني والصوتي والحضور الإنساني بزاوية 360 درجة.',
  },
  {
    slideNumber: '02 / 07',
    badge: 'EXECUTIVE ATTENDANCE',
    heading: 'NO FLIGHTS REQUIRED.',
    subheading: 'PRESENCE — Real-time and archival executive attendance.',
    bodyEn: 'STAND ON THE STAGE.',
    bodyAr: 'الوقوف على المنصة مباشرة.',
    targetAudienceEn: 'Global board members · International investors · Remote keynote audiences',
    targetAudienceAr: 'أعضاء مجلس الإدارة حول العالم · المستثمرون الدوليون · الحضور البعيد',
    detailedInsightEn: 'When board members or partners cannot board private aircraft to Cairo or Doha, our spatial headsets place them in the front row with natural depth cues.',
    detailedInsightAr: 'حين يتعذر على الشركاء الدوليين السفر، تنقلهم نظاراتنا إلى الصف الأول على المنصة بإحساس حقيقي بالأبعاد والعمق.',
  },
  {
    slideNumber: '03 / 07',
    badge: 'HARDWARE & OPTICS',
    heading: 'RECORDED IN 8K STEREOSCOPIC 360.',
    subheading: 'RESOLUTION — Custom dual-optic rig with spatial ambisonics.',
    bodyEn: 'HEADSET READY TODAY.',
    bodyAr: 'جاهز لنظارات الواقع الافتراضي الحديثة.',
    targetAudienceEn: 'Meta Quest 3 · Apple Vision Pro · DeoVR · Custom Web Player',
    targetAudienceAr: 'ميتا كويست 3 · آبل فيجن برو · منصة ديو في آر · مشغل الويب الخاص',
    detailedInsightEn: 'Engineered specifically for micro-OLED panels inside Apple Vision Pro, eliminating screen-door artifacts and providing 1:1 physical presence.',
    detailedInsightAr: 'مُصمم خصيصاً لشاشات Micro-OLED المتقدمة لنظارة Apple Vision Pro لمنع أي تشويش وتوفير حضور مادي واقعي.',
  },
  {
    slideNumber: '04 / 07',
    badge: 'ACOUSTIC GEOMETRY',
    heading: 'FULL-ORDER AMBISONIC AUDIO.',
    subheading: 'SOUND — Soundwaves mapped in 3D sphere.',
    bodyEn: 'TURN YOUR HEAD. HEAR THE ROOM.',
    bodyAr: 'التفت برأسك. واستمع لصوت القاعة يتغير.',
    targetAudienceEn: 'Auditoriums · Palaces · Open Desert Arenas · Acoustic Halls',
    targetAudienceAr: 'القاعات الكبرى · القصور التراثية · ساحات الصحراء المفتوحة',
    detailedInsightEn: 'Using tetrahedral microphone capsules, sound sources remain anchored in physical space. Look right, the keynote speaker moves to your left ear.',
    detailedInsightAr: 'بفضل مصفوفات الصوت المكاني، تظل مصادر الصوت مثبتة في مكانها الفيزيائي؛ التفت يميناً ينتقل صوت المتحدث لأذنك اليسرى فوراً وبدقة تامة.',
  },
  {
    slideNumber: '05 / 07',
    badge: 'WHO STEPS INSIDE',
    heading: "THEY WON'T WATCH YOUR MOMENT.",
    subheading: 'FUTURE — Ready for the people who join you next year.',
    bodyEn: "THEY'LL STAND IN IT.",
    bodyAr: "سوف يقفون في قلب الحدث.",
    targetAudienceEn: "The CEO who couldn't fly in · Your regional teams · The partners you'll pitch next year",
    targetAudienceAr: "المدير الذي لم يستطع الحضور. فريقك في الفروع. شركاؤك في العام القادم.",
    detailedInsightEn: 'Your most important stakeholders next year were not in the room today. A spatial master ensures they can step into your triumph as if they were there.',
    detailedInsightAr: 'أهم شركائك في العام القادم ربما لم يكونوا حاضرين اليوم. الأرشيف المكاني يتيح لهم الوقوف في قلب إنجازك وكأنهم كانوا معك لحظة بلحظة.',
  },
  {
    slideNumber: '06 / 07',
    badge: 'TURNKEY DEPLOYMENT',
    heading: 'HEADSETS DELIVERED TO DOORS.',
    subheading: 'LOGISTICS — Pre-loaded hardware dispatch.',
    bodyEn: 'UNBOX & IMMERSE.',
    bodyAr: 'افتح الصندوق وعش التجربة فوراً.',
    targetAudienceEn: 'VIP Investors · Global Executives · Alumni & Founders',
    targetAudienceAr: 'كبار المستثمرين · المدراء التنفيذيون · المؤسسون والرواد',
    detailedInsightEn: 'We configure and ship branded Meta Quest or Apple Vision Pro headsets loaded with your private spatial film directly to executive suites globally.',
    detailedInsightAr: 'نقوم ببرمجة وشحن نظارات الواقع الافتراضي الفاخرة المحملة مسبقاً بفيلمك الخاص إلى مكاتب المدراء التنفيذيين في أي مكان في العالم.',
  },
  {
    slideNumber: '07 / 07',
    badge: 'CENTURY ARCHIVE',
    heading: 'PRESERVED FOR THE CENTURY.',
    subheading: 'LONGEVITY — Future-proof raw spatial assets.',
    bodyEn: 'UNCOMPROMISED TIME CAPSULE.',
    bodyAr: 'كبسولة زمنية خالدة لا تفقد قيمتها.',
    targetAudienceEn: 'Family Offices · Historical Archives · Presidential Foundations',
    targetAudienceAr: 'المكاتب العائلية · الأرشيفات الوطنية · المؤسسات الرئاسية',
    detailedInsightEn: 'Mastered in uncompressed 12-bit RAW 8K and archival B-Format ambisonics, ensuring full compatibility with future holographic displays.',
    detailedInsightAr: 'تسجيل خام 12-bit بدقة 8K مع صوت مكاني غير مضغوط، لضمان التوافق مع شاشات الهولوجرام وعوالم المستقبل لعقود قادمة.',
  },
];

export function getJourneyPath(journeyId: string): string {
  return `/journeys/${encodeURIComponent(journeyId)}`;
}

export function getVRScenePath(sceneId: string = 'siwa'): string {
  return `/vr/${encodeURIComponent(sceneId)}`;
}

export function getSlide(index: number, slides: PromoSlide[] = PROMO_SLIDES): PromoSlide {
  const safeIndex = ((index % slides.length) + slides.length) % slides.length;
  return slides[safeIndex];
}

export function getProjectPath(projectKey: 'siwa' | 'service' | 'journeys'): string {
  if (projectKey === 'siwa') return '/work/siwa-oasis';
  if (projectKey === 'service') return '/work/service-explained';
  if (projectKey === 'journeys') return '/journeys';
  return '/work';
}
