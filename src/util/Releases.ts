export const ReleasesCategories: { name: 'public' | 'beta';
  title: string;
  description: string;
  img: string; }[] = [
  { 
    name: 'public',
    title: 'Public Releases',
    description: "Releases that are safe for public usage",
    img: '%PUBLIC_PATH%/images/banners/1.13_technically_updated_java.jpg'
  },
  {
    name: 'beta',
    title: 'Beta Releases',
    description: "Releases that are work in progress",
    img: '%PUBLIC_PATH%/images/banners/1.15_buzzy_bees_update.jpg'
  }
]