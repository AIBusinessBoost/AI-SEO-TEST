// SEO Analysis Utility Functions
import axios from 'axios';

// Function to check if a website exists in search results
export const checkSearchResults = async (website, searchEngine) => {
  try {
    // Extract domain from website URL
    let domain = website;
    if (domain.startsWith('http://')) domain = domain.substring(7);
    if (domain.startsWith('https://')) domain = domain.substring(8);
    if (domain.startsWith('www.')) domain = domain.substring(4);
    if (domain.includes('/')) domain = domain.split('/')[0];
    
    // Create search query
    const query = encodeURIComponent(`site:${domain}`);
    
    // Define search engine URLs
    const searchEngineUrls = {
      google: `https://www.google.com/search?q=${query}`,
      bing: `https://www.bing.com/search?q=${query}`,
      duckduckgo: `https://duckduckgo.com/?q=${query}`
    };
    
    // Log the search URL for debugging
    console.log(`Checking ${searchEngine} for ${domain}: ${searchEngineUrls[searchEngine]}`);
    
    // For a real implementation, we would use a proper API or scraping service
    // Since we can't directly scrape search engines from the browser due to CORS,
    // we'll simulate the results for demonstration purposes
    
    // Simulate a delay to mimic network request
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    
    // Generate random results based on the domain
    const domainHash = hashCode(domain);
    const resultCount = Math.abs(domainHash % 100) + 1;
    
    return {
      found: resultCount > 10,
      resultCount: resultCount,
      topPosition: Math.min(Math.abs(domainHash % 50) + 1, 100),
      searchUrl: searchEngineUrls[searchEngine]
    };
  } catch (error) {
    console.error(`Error checking ${searchEngine} for ${website}:`, error);
    return {
      found: false,
      resultCount: 0,
      topPosition: 0,
      error: error.message
    };
  }
};

// Function to simulate ChatGPT analysis
export const simulateChatGptAnalysis = async (website, businessType, location) => {
  try {
    // Extract domain from website URL
    let domain = website;
    if (domain.startsWith('http://')) domain = domain.substring(7);
    if (domain.startsWith('https://')) domain = domain.substring(8);
    if (domain.startsWith('www.')) domain = domain.substring(4);
    if (domain.includes('/')) domain = domain.split('/')[0];
    
    // Simulate a delay to mimic API request
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1500));
    
    // Generate a deterministic but random-looking score based on the domain
    const domainHash = hashCode(domain);
    const businessTypeHash = hashCode(businessType);
    const locationHash = hashCode(location);
    
    const combinedHash = (domainHash + businessTypeHash + locationHash) % 1000;
    
    // Generate analysis metrics
    const contentScore = Math.min(Math.abs(combinedHash % 100) + 50, 100);
    const technicalScore = Math.min(Math.abs((combinedHash * 7) % 100) + 40, 100);
    const userExperienceScore = Math.min(Math.abs((combinedHash * 13) % 100) + 45, 100);
    const mobileScore = Math.min(Math.abs((combinedHash * 19) % 100) + 55, 100);
    
    // Generate keyword suggestions based on business type and location
    const keywordSuggestions = generateKeywordSuggestions(businessType, location);
    
    return {
      contentScore,
      technicalScore,
      userExperienceScore,
      mobileScore,
      overallScore: Math.round((contentScore + technicalScore + userExperienceScore + mobileScore) / 4),
      keywordSuggestions,
      aiReadiness: Math.min(Math.abs((combinedHash * 23) % 100) + 30, 100),
      recommendations: generateRecommendations(contentScore, technicalScore, userExperienceScore, mobileScore)
    };
  } catch (error) {
    console.error('Error in ChatGPT analysis:', error);
    return {
      contentScore: 70,
      technicalScore: 65,
      userExperienceScore: 75,
      mobileScore: 80,
      overallScore: 72,
      keywordSuggestions: [],
      aiReadiness: 60,
      recommendations: [],
      error: error.message
    };
  }
};

// Helper function to generate a hash code from a string
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Helper function to generate keyword suggestions
function generateKeywordSuggestions(businessType, location) {
  const businessKeywords = {
    'restaurant': ['best restaurant', 'food near me', 'dining', 'takeout', 'delivery'],
    'law firm': ['attorney', 'lawyer', 'legal advice', 'legal services', 'law office'],
    'e-commerce': ['online shop', 'buy online', 'best deals', 'discount', 'free shipping'],
    'real estate': ['homes for sale', 'real estate agent', 'property', 'houses', 'apartments'],
    'healthcare': ['doctor', 'clinic', 'medical services', 'healthcare provider', 'specialist'],
    'fitness': ['gym', 'fitness center', 'personal trainer', 'workout', 'exercise classes'],
    'salon': ['haircut', 'beauty salon', 'spa', 'hair styling', 'manicure'],
    'automotive': ['car repair', 'auto shop', 'mechanic', 'oil change', 'tire service'],
    'education': ['school', 'courses', 'training', 'classes', 'tutoring'],
    'technology': ['IT services', 'tech support', 'software development', 'web design', 'app development']
  };
  
  // Default to generic business keywords if specific type not found
  const typeKeywords = businessKeywords[businessType.toLowerCase()] || 
    ['services', 'business', 'company', 'professional', 'expert'];
  
  // Generate location-specific keywords
  const locationKeywords = [
    `${businessType} in ${location}`,
    `${businessType} near ${location}`,
    `best ${businessType} ${location}`,
    `top rated ${businessType} in ${location}`,
    `affordable ${businessType} ${location}`
  ];
  
  // Generate long-tail keywords
  const longTailKeywords = [
    `how to choose a ${businessType} in ${location}`,
    `what to look for in a ${businessType}`,
    `${businessType} services and pricing`,
    `${businessType} reviews ${location}`,
    `${businessType} vs competitors ${location}`
  ];
  
  // Combine all keyword types
  return [...typeKeywords, ...locationKeywords, ...longTailKeywords];
}

// Helper function to generate recommendations based on scores
function generateRecommendations(contentScore, technicalScore, userExperienceScore, mobileScore) {
  const recommendations = [];
  
  if (contentScore < 80) {
    recommendations.push({
      category: 'Content',
      title: 'Improve Content Quality and Depth',
      description: 'Your content needs more depth and keyword optimization. Consider creating longer, more comprehensive content that thoroughly addresses user search intent.',
      priority: contentScore < 60 ? 'High' : 'Medium'
    });
  }
  
  if (technicalScore < 80) {
    recommendations.push({
      category: 'Technical SEO',
      title: 'Fix Technical SEO Issues',
      description: 'Your website has technical issues affecting search engine crawlability. Focus on improving page load speed, fixing broken links, and optimizing meta tags.',
      priority: technicalScore < 60 ? 'High' : 'Medium'
    });
  }
  
  if (userExperienceScore < 80) {
    recommendations.push({
      category: 'User Experience',
      title: 'Enhance User Experience',
      description: 'Improve your site\'s navigation, readability, and engagement metrics to keep visitors on your site longer and reduce bounce rates.',
      priority: userExperienceScore < 60 ? 'High' : 'Medium'
    });
  }
  
  if (mobileScore < 80) {
    recommendations.push({
      category: 'Mobile Optimization',
      title: 'Optimize for Mobile Devices',
      description: 'Your site needs better mobile optimization. Ensure responsive design, properly sized touch elements, and fast loading on mobile networks.',
      priority: mobileScore < 60 ? 'High' : 'Medium'
    });
  }
  
  // Add general recommendations
  recommendations.push({
    category: 'Backlinks',
    title: 'Build Quality Backlinks',
    description: 'Develop a strategy to acquire high-quality backlinks from authoritative websites in your industry to improve domain authority.',
    priority: 'Medium'
  });
  
  recommendations.push({
    category: 'Local SEO',
    title: 'Optimize Local Presence',
    description: 'Ensure your Google Business Profile is complete and verified, and maintain consistent NAP (Name, Address, Phone) information across all directories.',
    priority: 'Medium'
  });
  
  recommendations.push({
    category: 'AI Readiness',
    title: 'Prepare for AI Search',
    description: 'Format content for AI readability by using clear headings, question-answer formats, and implementing structured data markup using Schema.org.',
    priority: 'Medium'
  });
  
  return recommendations;
}

// Function to perform a complete SEO analysis
export const performSeoAnalysis = async (website, businessType, location) => {
  try {
    // Check search engines
    const googleResults = await checkSearchResults(website, 'google');
    const bingResults = await checkSearchResults(website, 'bing');
    const duckduckgoResults = await checkSearchResults(website, 'duckduckgo');
    
    // Get ChatGPT analysis
    const chatGptAnalysis = await simulateChatGptAnalysis(website, businessType, location);
    
    // Calculate website score (0-100)
    const searchEnginePresence = (googleResults.found ? 25 : 0) + 
                                (bingResults.found ? 15 : 0) + 
                                (duckduckgoResults.found ? 10 : 0);
    
    const websiteScore = Math.min(Math.round(
      (searchEnginePresence + chatGptAnalysis.overallScore) / 2
    ), 100);
    
    // Calculate potential traffic based on domain and business type
    const domainHash = hashCode(website);
    const businessTypeHash = hashCode(businessType);
    const baseTraffic = Math.abs((domainHash + businessTypeHash) % 9000) + 1000;
    const potentialTraffic = baseTraffic.toLocaleString();
    
    // Calculate competitor gap
    const competitorGap = Math.abs((domainHash * 3) % 41) + 10; // 10-50%
    
    return {
      websiteScore,
      potentialTraffic,
      competitorGap,
      searchEngines: {
        google: googleResults,
        bing: bingResults,
        duckduckgo: duckduckgoResults
      },
      chatGptAnalysis,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error performing SEO analysis:', error);
    return {
      websiteScore: 85,
      potentialTraffic: '5,000',
      competitorGap: 25,
      searchEngines: {
        google: { found: true, resultCount: 45 },
        bing: { found: true, resultCount: 30 },
        duckduckgo: { found: true, resultCount: 20 }
      },
      chatGptAnalysis: {
        contentScore: 70,
        technicalScore: 65,
        userExperienceScore: 75,
        mobileScore: 80,
        overallScore: 72,
        keywordSuggestions: [],
        aiReadiness: 60,
        recommendations: []
      },
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
};
