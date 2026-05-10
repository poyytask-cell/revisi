// ==========================================
// TYPES & INTERFACES FOR DATA ARCHITECTURE
// ==========================================

/**
 * Video object untuk YouTube atau external video
 */
export interface Video {
  label: string
  ytId: string
}

/**
 * Base interface untuk semua project (Works section)
 */
export interface WorkProject {
  id: string
  title: string
  year: string
  category: string
  description?: string
  thumbnailUrl: string
  previewUrl: string
  videos: Video[]
}

/**
 * Interface untuk Ecosystem/Future Initiatives
 */
export interface EcosystemItem {
  id: string
  title: string
  subtitle?: string | null
  role: string
  description: string
  vibe: string
  status: 'COMING SOON' | 'LIVE' | 'IN PROGRESS'
  link?: string
}
