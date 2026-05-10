// ==========================================
// COMMERCIAL WORKS DATA
// ==========================================
// Untuk menambah/mengubah/menghapus project:
// 1. Edit array di bawah ini
// 2. Tidak perlu menyentuh kode UI
// ==========================================

import type { WorkProject } from './types'

export const commercialData: WorkProject[] = [
  {
    id: '01',
    title: 'Hyundai Evolution',
    year: '2026',
    category: 'Commercial Advertising',
    description: 'Cinematic commercial showcasing the of Hyundai Palisade features.',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778081349/GRIDS_1_xzlstn.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/HY_hyrio2.mp4',
    videos: [{ label: 'Main Reveal', ytId: 'cUStoP13sh0' }],
  },
  {
    id: '02',
    title: 'Maswood Campaign',
    year: '2026',
    category: 'Commercial Advertising',
    description: 'Comfy homeliving theme brand campaign.',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778081349/GRIDS_2_ewpon8.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/MW-4_uqqqon.mp4',
    videos: [{ label: 'Main Reveal', ytId: 'nBV8jU3Q5ss' }],
  },
  {
    id: '03',
    title: 'Maswood Campaign - Affiliate',
    year: '2026',
    category: 'Commercial Advertising',
    description: 'Short commercial affiliate videos campaign brand.',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778081349/GRIDS_3_ycludv.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/MW-1_hoedi1.mp4',
    videos: [
      { label: 'Affiliate Version A', ytId: 'GjUE_2KPlN0' },
      { label: 'Affiliate Version B', ytId: 'Wbr9di4uAIE' },
      { label: 'Affiliate Version C', ytId: 'oPnzASEWpA0' },
    ],
  },
  {
    id: '04',
    title: 'Amar Bank Campaign',
    year: '2026',
    category: 'Commercial Advertising',
    description: 'DEMO Video for Amar Bank digital services.',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778406311/GRIDS_4_z50lwy.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778406902/AB_zhgenv.mp4',
    videos: [
      { label: 'Affiliate Version A', ytId: 'BSekxHywunQ' },
      { label: 'Affiliate Version B', ytId: '5eJqDxxqM-c' },
    ],
  },
  {
    id: '05',
    title: 'COMING SOON',
    year: 'COMING SOON',
    category: 'Commercial Advertising',
    description: 'COMING SOON',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778081349/GRIDS_5_vdc8gm.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/PF_preview.mp4',
    videos: [{ label: 'Main Reveal', ytId: 'projectYT1' }],
  },
  {
    id: '06',
    title: 'COMING SOON',
    year: 'COMING SOON',
    category: 'Commercial Advertising',
    description: 'COMING SOON',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778081349/GRIDS_6_ngwssq.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/PS_preview.mp4',
    videos: [{ label: 'Main Reveal', ytId: 'projectYT2' }],
  },
]
