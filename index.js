const natural = require('natural');

const tokenizer = new natural.WordTokenizer();
const text = 'giftlink search items and listings';
console.log(tokenizer.tokenize(text));
