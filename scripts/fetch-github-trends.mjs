/**
 * fetch-github-trends.mjs
 * Script to automatically fetch the top 10 trending GitHub repositories from the last 7 days.
 * 
 * Usage: node scripts/fetch-github-trends.mjs
 */

import { writeFileSync } from 'fs';

async function fetchTrends() {
  console.log('🚀 Fetching trending GitHub repositories from the last 7 days...');

  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const dateStr = sevenDaysAgo.toISOString().split('T')[0];

  const query = `created:>${dateStr}`;
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=10`;

  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'PromptReady-Trends-Bot'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Format week metadata
    const dayOfMonth = now.getDate();
    const weekNumber = Math.ceil(dayOfMonth / 7);
    const monthName = now.toLocaleString('en-US', { month: 'long' });
    const year = now.getFullYear();
    
    const slug = `week-${weekNumber}-${monthName.toLowerCase()}-${year}`;
    const title = `10 Fastest Growing Repos - Week ${weekNumber} ${monthName} '${String(year).slice(-2)}`;
    
    const weekObj = {
      slug,
      title,
      description: "Automated analysis of the fastest growing repositories this week. (Edit this description)",
      coverImage: "/images/github-trends/placeholder.png",
      date: now.toISOString(),
      repos: data.items.map((repo, idx) => ({
        id: `r${Date.now()}-${idx}`,
        name: repo.name,
        description: repo.description || "No description provided.",
        url: repo.html_url,
        starsGained: repo.stargazers_count,
        language: repo.language || "Unknown"
      }))
    };

    console.log('\n✅ Successfully fetched 10 trending repositories!\n');
    console.log('--------------------------------------------------');
    console.log('COPY AND PASTE THE FOLLOWING INTO src/domin/data/github-trends.ts:');
    console.log('--------------------------------------------------\n');
    
    // Output formatted as a TypeScript object
    const output = JSON.stringify(weekObj, null, 2);
    // Add comma at the beginning to help with array insertion
    console.log(`, ${output}`);
    
    console.log('\n--------------------------------------------------');
    console.log('DONE!');
  } catch (error) {
    console.error('❌ Error fetching trends:', error.message);
  }
}

fetchTrends();
