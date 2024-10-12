export function add(numbers) {
    if (!numbers) return 0;
  
    let delimiters = [',', '\n'];
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
  
    if (customDelimiterMatch) {
      delimiters.push(customDelimiterMatch[1]);
      numbers = numbers.split('\n')[1]; // Remove the delimiter definition line
    }
  
    let nums = numbers.split(new RegExp(`[${delimiters.join('')}]`));
    
    let negatives = nums.filter(n => parseInt(n) < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return nums.reduce((sum, num) => sum + (parseInt(num) || 0), 0);
  }
  