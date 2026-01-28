export interface SnippetTranslations {
  // Hero section
  selectedWork: string

  // Project cards
  viewProject: string
  shots: string

  // Modal
  screenshots: string
  whatWasDelivered: string
  close: string

  // CTA section
  haveProjectInMind: string
  haveProjectDescription: string
  startConversation: string

  // Lightbox
  previousImage: string
  nextImage: string
  closeLightbox: string
}

export const snippetTranslations: Record<'en' | 'ar', SnippetTranslations> = {
  en: {
    // Hero section
    selectedWork: 'Selected Work',

    // Project cards
    viewProject: 'View Project',
    shots: 'shots',

    // Modal
    screenshots: 'Screenshots',
    whatWasDelivered: 'What was delivered',
    close: 'Close',

    // CTA section
    haveProjectInMind: 'Have a project in mind?',
    haveProjectDescription: "Let's talk about how we can bring your idea to life. Fast turnaround, quality results.",
    startConversation: 'Start a conversation',

    // Lightbox
    previousImage: 'Previous image',
    nextImage: 'Next image',
    closeLightbox: 'Close lightbox',
  },
  ar: {
    // Hero section
    selectedWork: 'أعمالنا المختارة',

    // Project cards
    viewProject: 'عرض المشروع',
    shots: 'الصور',

    // Modal
    screenshots: 'لقطات الشاشة',
    whatWasDelivered: 'ما تم تسليمه',
    close: 'إغلاق',

    // CTA section
    haveProjectInMind: 'عندك مشروع في بالك؟',
    haveProjectDescription: 'راسلنا وخلينا نشوف كيف ممكن نحول فكرتك الى واقع.',
    startConversation: 'كلمنا الآن',

    // Lightbox
    previousImage: 'الصورة السابقة',
    nextImage: 'الصورة التالية',
    closeLightbox: 'إغلاق',
  },
}
