import rawData from '@/data/siteData.json';
import type { SiteData } from './types';

// Single source of truth: every section of the site reads from this object,
// which is parsed from /data/siteData.json. Update that JSON file to change
// site content — no component edits required.
export const siteData = rawData as unknown as SiteData;
