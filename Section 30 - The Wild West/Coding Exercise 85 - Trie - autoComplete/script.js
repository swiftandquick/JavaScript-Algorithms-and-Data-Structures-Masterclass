class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      var char = word[index];
      var subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
  }
  getWords(words = [], currentWord = "") {
    if (this.isWord) {
      words.push(currentWord);
    }
    for (let char in this.characters) {
      words = this.characters[char].getWords(words, currentWord + char);
    }
    return words;
  }
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
