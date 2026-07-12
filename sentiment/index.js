const natural = require('natural');

const tokenizer = new natural.WordTokenizer();
const sample = 'GiftLink helps people give away items and find free things.';
console.log('Tokens:', tokenizer.tokenize(sample));

module.exports = { tokenizer };
