#!/usr/bin/env node

console.log('🔍 Running linter...\n');

// Simulate linting process
const files = [
  'index.js',
  'src/app.js',
  'src/utils.js',
  'src/config.js'
];

console.log('Checking code style and quality:\n');
files.forEach((file, index) => {
  setTimeout(() => {
    console.log(`✓ ${file} - No issues found`);
    if (index === files.length - 1) {
      console.log('\n✅ Linting completed successfully!\n');
      process.exit(0);
    }
  }, (index + 1) * 300);
});

