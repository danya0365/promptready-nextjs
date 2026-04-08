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
    
    // Curated list of high-quality technology/abstract Unsplash image IDs
    const unsplashIds = [
      "1488590528505-98d2b5aba04b", // Tech setup abstract (Replaced broken ID)
      "1518770660439-4636190af475", // Circuit board
      "1550751827-4bd374c3f58b", // Cyber security
      "1485827404703-89b55fcc595e", // AI/Robotics
      "1488590528505-98d2b5aba04b", // Tech setup abstract
      "1519389950473-47ba027788c1", // Group coding
      "1558494949-ef01017911c5", // Global network
      "1531297484001-80022131f5a1", // Futuristic MacBook
      "1677442136019-21780ecad995", // AI head/concept
      "1498050108023-c5249f4df085", // Coding/Coffee
      "1504384308090-c894fdcc538d", // Modern workstation
      "1620712946848-116d8448ea61", // Abstract AI flow
      "1555066931-4365d14bab8c", // Code on screen
      "1581091226825-a6a2a5aee158", // Microchip
      "1525547710722-399a372d98a1", // Tech minimal
    ];

    // Generate deterministic cover image from Unsplash
    const week = Math.ceil(now.getDate() / 7);
    const month = now.getMonth();
    const idIndex = (week + month) % unsplashIds.length;
    const selectedId = unsplashIds[idIndex];
    const coverImage = `https://images.unsplash.com/photo-${selectedId}?auto=format&fit=crop&w=1200&q=80`;
    
    const slug = `week-${week}-${monthName.toLowerCase()}-${year}`;
    const title = `10 Fastest Growing Repos - Week ${week} ${monthName} '${String(year).slice(-2)}`;
    
    const weekObj = {
      slug,
      title,
      description: "Automated analysis of the fastest growing repositories this week. (Edit this description)",
      coverImage: coverImage,
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
