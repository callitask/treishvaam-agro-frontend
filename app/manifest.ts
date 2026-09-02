import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Treishvaam Agro — Enterprise B2B Powders',
    short_name: 'Treishvaam Agro',
    description: '24 B2B fruit, vegetable & herbal powders for global manufacturing. FOB India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1F4524',
    icons: [
      { src: '/Treishvaam_Agro_Logo.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
  };
}
