class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  // If index equals word's length, return true.
  // If char exists in characters object, set subTrie to it, otherwise, set subTrie to a new Trie object.
  // The characters array is a nested object that's a letter containing a letter, until the word is formed, recursively invoke itself.
  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      let char = word[index];
      let subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
  }
  // Remove the word from the Trie.
  removeWord(word) {
    if (word[0] === undefined) {
      this.isWord = false;
      return this;
    } else if (Object.keys(this.characters[word[0]].characters).length === 1) {
      this.isWord = false;
      delete this.characters[word[0]];
    } else if (Object.keys(this.characters[word[0]].characters).length > 1) {
      let subTrie = this.characters[word[0]];
      subTrie.removeWord(word.substr(1));
    }
    return this;
  }
  // Find whether if the word exists in the Trie, if it is, return the last letter, otherwise, return undefined.
  findWord(word, index = 0) {
    let char = word[index];
    if (index < word.length - 1 && this.characters[char]) {
      index += 1;
      return this.characters[char].findWord(word, index);
    } else {
      return this.characters[char];
    }
  }
  // If the current letter makes a word, push currentWord into the words array.
  // If the current letter doesn't make a word, go to the next connected letter.
  getWords(words = [], currentWord = "") {
    if (this.isWord) {
      words.push(currentWord);
    }
    for (let char in this.characters) {
      words = this.characters[char].getWords(words, currentWord + char);
    }
    return words;
  }
  // Check if there's a letter up to the last letter of the prefix.
  // If there is not, return empty array.
  // If the prefix matches the trie's data, invoke getWords() to find the auto-completed words.
  autoComplete(prefix, index = 0) {
    if (index < prefix.length) {
      try {
        return this.characters[prefix[index]].autoComplete(prefix, index + 1);
      } catch (TypeError) {
        return [];
      }
    }
    return this.getWords([], prefix);
  }
}

const firstTrie = new Trie();
// index = 0, word.length = 3.
// char = 'fun'[0], char = 'f', 'f' doesn't exist in characters, subTrie = new Trie(), invoke addWord("fun", 1), add 'f' to characters object.
// index = 1, word.length = 3.
// char = 'fun'[1], char = 'u', 'u' doesn't exist in characters, subTrie = new Trie(), invoke addWord("fun", 2), add 'u' to characters object.
// index = 2, word.length = 3.
// char = 'fun'[2], char = 'n', 'n' doesn't exist in characters, subTrie = new Trie(), invoke addWord("fun", 3), add 'n' to characters object.
// index = 3, word.length = 3, set isWord to true.
// { 'f': { 'u': { 'n': {}, isWord: true }, isWord: false }, isWord: false }
console.log(firstTrie.addWord("fun"));

const secondTrie = new Trie();
console.log(secondTrie.addWord("ha"));
console.log(secondTrie.addWord("hat"));
console.log(secondTrie.addWord("has"));
console.log(secondTrie.addWord("have"));
console.log(secondTrie.addWord("hate"));

// word[0] = 'f', 'f'.length = 1, isWord = false, delete the key-value pair with the key of 'f' from characters.
// Return {}.
console.log(firstTrie.removeWord("fun"));

// word[0] = 'h', 0 < 2 && 'h' is in characters, index = 1.
// word[1] = 'a', 1 < 2 && 'a' is in characters, index = 2.
// word[2] = 't', 2 < 2, go to else, return 't'.
// Return { 't': { 'e', isWord: true }, isWord: true }.
console.log(secondTrie.findWord("hat"));

// words = []
// char = "h" "h" is in characters object, getWords("h").
// char = "a", "a" is in characters object, getWords("ha").
// a's isWord is true, currentWords = "ha", words = ["ha"].
// char = "t", "t" is in characters object, getWords("hat").
// t's isWord is true, currentWords = "hat", words = ["ha", "hat"].
// char = "e", "e" is in characters object, getWords("hate").
// e's isWord is true, currentWords = "hate", words = ["ha", "hat", "hate"].
// Dead end, return to recursive call when char = "a".
// char = "s", "s" is in character object, getWords("has").
// s's isWord is true, currentWord = "has", words = ["ha", "hat", "hate", "has"].
// Dead end, return to recursive call when char = "a".
// char = "v", "v" is in character object, getWords("hav").
// char = "e", "e" is in character object, getWords("have").
// e's isWord is true, currentWord = "have", words = ["ha", "hat", "hate", "has", "have"].
// Return ["ha", "hat", "hate", "has", "have"].
console.log(secondTrie.getWords());

// prefix = "hav", index = 0.
// 0 < 3, 'h'.autoComplete("hav", 1).
// 1 < 3, 'a'.autoComplete("hav", 2).
// 2 < 3, 'v'.autoComplete("hav", 3).
// 3 < 3, no more recursion.
// Invoke getWords() with currentWord as "hav".
console.log(secondTrie.autoComplete("hav"));
