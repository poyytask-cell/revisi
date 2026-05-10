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
    videos: [{ label: 'Main Reveal', ytId: 'VHCaAFy88oU' }],
  },
  {
    id: '02',
    title: 'Maswood Campaign',
    year: '2026',
    category: 'Commercial Advertising',
    description: 'Comfy homeliving theme brand campaign.',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778081349/GRIDS_2_ewpon8.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/MW-4_uqqqon.mp4',
    videos: [{ label: 'Main Reveal', ytId: 'uR-QbWZLSeg' }],
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
      { label: 'Affiliate Version A', ytId: '_l70j_2t91U' },
      { label: 'Affiliate Version B', ytId: '9bDhQ5h7z9U' },
      { label: 'Affiliate Version C', ytId: 'SSeRB_ZD-W4' },
    ],
  },
  {
    id: '04',
    title: 'Amar Bank — DEMO',
    year: '2026',
    category: 'Commercial Advertising',
    description: 'DEMO video for Amar Bank digital banking services.',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778081349/GRIDS_4_hztzvl.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/AB_demo.mp4',
    videos: [{ label: 'Main Reveal', ytId: 'demoYT1' }],
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
