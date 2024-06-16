#!/usr/bin/env node
import sezer from './index.js';

console.log(`
  Name: ${sezer.name}
  City: ${sezer.city}
  Skills: ${sezer.skills.join(', ')}
  Description: ${sezer.description}
  Website: ${sezer.website}
  GitHub: ${sezer.github}
`);
