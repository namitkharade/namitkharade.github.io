// Google Analytics 4 Configuration
import { createApp } from 'vue'

// Analytics configuration
export const analyticsConfig = {
  measurementId: 'G-TBSZ11P2PF',
  enabled: true, // Enable in both dev and prod for testing
}

// Enhanced analytics events for portfolio tracking
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof gtag !== 'undefined' && analyticsConfig.enabled) {
    gtag('event', eventName, {
      ...parameters,
      timestamp: new Date().toISOString(),
    })
  }
}

// Portfolio-specific tracking events
export const portfolioEvents = {
  // Navigation tracking
  pageView: (pageName) => trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  }),
  
  // Contact interactions
  contactClick: (method) => trackEvent('contact_interaction', {
    contact_method: method,
    category: 'engagement'
  }),
  
  // Resume interactions
  resumeDownload: () => trackEvent('resume_download', {
    category: 'document',
    action: 'download'
  }),
  
  resumeView: () => trackEvent('resume_view', {
    category: 'document',
    action: 'view'
  }),
  
  // Project interactions
  projectView: (projectName) => trackEvent('project_view', {
    project_name: projectName,
    category: 'portfolio'
  }),
  
  githubClick: (repoName) => trackEvent('github_click', {
    repository: repoName,
    category: 'external_link'
  }),
  
  // Skill interactions
  skillHover: (skillName) => trackEvent('skill_interaction', {
    skill_name: skillName,
    interaction_type: 'hover'
  }),
  
  // Performance metrics
  pageLoadTime: (loadTime) => trackEvent('page_performance', {
    load_time: loadTime,
    category: 'performance'
  }),
  
  // Social media clicks
  socialClick: (platform) => trackEvent('social_click', {
    platform: platform,
    category: 'social'
  })
}

// Performance monitoring
export const performanceMonitor = {
  startTime: performance.now(),
  
  measurePageLoad() {
    window.addEventListener('load', () => {
      const loadTime = performance.now() - this.startTime
      portfolioEvents.pageLoadTime(Math.round(loadTime))
    })
  },
  
  measureUserEngagement() {
    let startTime = Date.now()
    
    // Track time on page
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - startTime
      trackEvent('user_engagement', {
        time_on_page: Math.round(timeOnPage / 1000), // in seconds
        category: 'engagement'
      })
    })
  }
}

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  performanceMonitor.measurePageLoad()
  performanceMonitor.measureUserEngagement()
}
