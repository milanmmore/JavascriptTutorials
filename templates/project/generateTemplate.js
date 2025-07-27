
const fs = require('fs');
const path = require('path');

// Define paths
const templatePath = path.join(__dirname, 'templates', 'template.html');
const outputPath = path.join(__dirname, 'output', 'reverse_number_exercise.html');

// Read the template
let template = fs.readFileSync(templatePath, 'utf-8');

// Define replacements
const replacements = {
  '{{PAGE_TITLE}}': 'Reverse a Number Exercise',
  '{{HEADER_TITLE}}': 'JavaScript Coding Exercise – Reverse a Number',
  '{{SIDEBAR_LINKS}}': '<li><a href="#reverse">Reverse Number</a></li>',
  '{{MAIN_CONTENT}}': `
    <section id="reverse">
      <h2>Reverse a Number</h2>
      <p>Write a JavaScript function that takes a number and returns its reverse.</p>
      <button onclick="loadSolution('https://example.com/reverse.js')">Load Solution</button>
      <textarea id="solutionBox" readonly></textarea>
    </section>
  `
};

// Replace placeholders
for (const [key, value] of Object.entries(replacements)) {
  template = template.replace(key, value);
}

// Ensure output directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

// Write the final HTML
fs.writeFileSync(outputPath, template, 'utf-8');

console.log('✅ HTML page generated at:', outputPath);
