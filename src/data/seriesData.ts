// ==========================================
// CINEMATIC SERIES DATA
// ==========================================
// Untuk menambah/mengubah/menghapus series:
// 1. Edit array di bawah ini
// 2. Tidak perlu menyentuh kode UI
// ==========================================

import type { WorkProject } from './types'

export const seriesData: WorkProject[] = [
  {
    id: '01',
    title: 'Dirty Country',
    year: '2026',
    category: 'Cinematic Series.',
    description: 'The destruction of a country that started from a public transport driver.',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778084986/GRIDS_1_lewatc.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/DC_preview.mp4',
    videos: [{ label: 'Watch Series', ytId: 'dirtycountry1' }],
  },
  {
    id: '02',
    title: 'Shift Malam',
    year: '2026',
    category: 'Cinematic Series.',
    description: 'Supernatural disturbance felt by the morgue guard from drawer number 4.',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778084213/GRIDS_2_btbsdl.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/SM_preview.mp4',
    videos: [{ label: 'Watch Series', ytId: 'shiftmalam1' }],
  },
  {
    id: '03',
    title: 'Lah Itu Kan Saya',
    year: 'COMING SOON',
    category: 'Cinematic Series.',
    description: 'A man whose photo became famous for creating playlists in stafa band website.',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778081340/GRIDS_3_nsmm1r.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/LIKS_preview.mp4',
    videos: [{ label: 'Watch Series', ytId: 'lahituransaya1' }],
  },
  {
    id: '04',
    title: 'Aku Kamu dan AI',
    year: 'COMING SOON',
    category: 'Cinematic Series.',
    description: 'A handsome, introverted college student is more likely to be attracted to AI than to a real human who crush him.',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778081340/GRIDS_4_iuli7q.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/AKDAI_preview.mp4',
    videos: [{ label: 'Watch Series', ytId: 'akukamudanai1' }],
  },
  {
    id: '05',
    title: 'Namanya Juga Hidup..',
    year: 'COMING SOON',
    category: 'Cinematic Series.',
    description: 'Life story of someone experiencing various difficult twists and turns.',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778081340/GRIDS_5_ydrzsb.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/NJH_preview.mp4',
    videos: [{ label: 'Watch Series', ytId: 'namanyajugahidup1' }],
  },
  {
    id: '06',
    title: 'Nasi Uduk Semur Ganja',
    year: 'COMING SOON',
    category: 'Cinematic Series.',
    description: 'A drug cartel leader disguised as a "Nasi Uduk" seller in the morning.',
    thumbnailUrl: 'https://res.cloudinary.com/dyromez82/image/upload/v1778081340/GRIDS_6_d6nuds.webp',
    previewUrl: 'https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778068097/NUSG_preview.mp4',
    videos: [{ label: 'Watch Series', ytId: 'nasiuduksemurganja1' }],
  },
]
