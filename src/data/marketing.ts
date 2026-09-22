export interface Step {
  index: string;
  title: string;
  items: string[];
}

export const campaignStages: Step[] = [
{ index: '01', title: 'Research', items: ['Audience', 'Product', 'Offer', 'Market'] },
{ index: '02', title: 'Strategy', items: ['Campaign objective', 'Audience', 'Platform', 'Budget direction'] },
{ index: '03', title: 'Creative', items: ['Poster', 'AI video', 'Storytelling', 'Copy'] },
{ index: '04', title: 'Launch', items: ['Meta Ads', 'TikTok Ads'] },
{ index: '05', title: 'Analyse', items: ['CTR', 'Reach', 'Messages', 'Calls', 'Conversions'] },
{ index: '06', title: 'Optimize', items: ['Audience refinement', 'Creative testing', 'Campaign adjustments'] }];


export const processSteps: Step[] = [
{ index: '01', title: 'Understand', items: ['Product', 'Offer', 'Audience', 'Business goal'] },
{ index: '02', title: 'Research', items: ['Audience', 'Competitors', 'Creative angles', 'Search intent'] },
{ index: '03', title: 'Create', items: ['Posters', 'Videos', 'Copy', 'Landing pages'] },
{ index: '04', title: 'Launch', items: ['Meta', 'TikTok', 'Organic social'] },
{ index: '05', title: 'Measure', items: ['Reach', 'Engagement', 'Leads', 'Calls', 'Sales'] },
{ index: '06', title: 'Optimize', items: ['Creative', 'Audience', 'Messaging', 'Campaign structure'] }];


export interface AdPlatform {
  name: string;
  objective: string;
  capabilities: string[];
  accent: 'violet' | 'electric' | 'coral';
}

export const adPlatforms: AdPlatform[] = [
{
  name: 'Meta Ads',
  objective: 'Sales & lead generation',
  capabilities: ['Meta Ads Manager', 'Meta Business Suite', 'Meta Ads Library', 'Audience targeting'],
  accent: 'violet'
},
{
  name: 'TikTok Ads',
  objective: 'Reach & short-form performance',
  capabilities: ['Campaign setup', 'Creative-led testing', 'Audience targeting', 'Sales campaigns'],
  accent: 'electric'
}];


export interface CalendarDay {
  day: string;
  short: string;
  type: string;
  format: string;
  accent: 'violet' | 'electric' | 'coral' | 'sun';
}

export const contentCalendar: CalendarDay[] = [
{ day: 'Monday', short: 'MON', type: 'Product Poster', format: 'Static creative', accent: 'violet' },
{ day: 'Tuesday', short: 'TUE', type: 'Storytelling Video', format: 'Short-form video', accent: 'electric' },
{ day: 'Wednesday', short: 'WED', type: 'Product Focus', format: 'Carousel', accent: 'coral' },
{ day: 'Thursday', short: 'THU', type: 'AI Video', format: 'AI-assisted video', accent: 'sun' },
{ day: 'Friday', short: 'FRI', type: 'Offer / Promotion', format: 'Campaign creative', accent: 'violet' }];


export interface Tool {
  name: string;
  use: string;
}

export const creativeTools: Tool[] = [
{ name: 'Canva', use: 'Social graphics & campaign creatives' },
{ name: 'CapCut', use: 'Short-form video editing' },
{ name: 'Photoshop', use: 'Image editing & promotional design' },
{ name: 'AI Video Generation', use: 'AI-assisted storytelling & creative production' }];


export const seoGroups: {title: string;items: string[];}[] = [
{ title: 'On-page SEO', items: ['Keyword research', 'Meta titles & descriptions', 'Content optimization', 'Internal linking', 'Image alt text'] },
{ title: 'Technical SEO', items: ['Site speed optimization', 'Mobile-friendliness', 'Crawlability & indexing', 'Structured data', 'Canonical tags'] },
{ title: 'Tools', items: ['Google Search Console', 'SEMrush', 'GA4'] }];


export const seoFlow: string[] = ['Search query', 'Search engine', 'Optimized page', 'Organic discovery', 'Customer'];

export const seoExtras: string[] = ['Product uploads', 'Website management', 'SEO-friendly web development'];

export const analyticsTools: string[] = ['GA4', 'Meta Pixel', 'Google Search Console', 'Campaign Reporting'];

export const analyticsMetrics: {label: string;hint: string;}[] = [
{ label: 'Reach', hint: 'Campaign metric' },
{ label: 'Engagement', hint: 'Campaign metric' },
{ label: 'Leads', hint: 'Campaign metric' },
{ label: 'Calls', hint: 'Campaign metric' },
{ label: 'Messages', hint: 'Campaign metric' },
{ label: 'Sales', hint: 'Campaign metric' }];


export const techCapabilities: string[] = [
'Next.js',
'Website Management',
'Product Uploads',
'SEO',
'Technical SEO',
'VPS',
'Web Development'];


export const techFunnel: string[] = ['Marketing funnel', 'Landing page', 'Website', 'Analytics', 'Conversion'];

export interface TrustMetric {
  value: string;
  label: string;
  footnote?: boolean;
}

export const trustMetrics: TrustMetric[] = [
{ value: '3', label: 'Brands managed' },
{ value: 'LKR 2M–5M', label: 'Monthly sales generated', footnote: true },
{ value: '5.5K–12.5K', label: 'Campaign reach per post', footnote: true },
{ value: '150–200', label: 'Calls / month — Empire Cars', footnote: true },
{ value: 'Meta + TikTok', label: 'Paid campaigns' }];


export const disclaimer =
'Results and campaign figures represent reported campaign performance during the stated work period.';