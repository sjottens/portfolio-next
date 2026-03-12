/**
 * Shared TypeScript Types
 */

// Contact Form Data
export interface ContactFormData {
  name: string
  email: string
  message: string
}

// Contact Form Response
export interface ContactFormResponse {
  success: boolean
  message: string
  errors?: {
    [key in keyof ContactFormData]?: string
  }
}

// Navigation Item
export interface NavItem {
  label: string
  href: string
  target?: '_blank' | '_self'
}

// Social Link
export interface SocialLink {
  title: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  url: string
  ariaLabel: string
}
