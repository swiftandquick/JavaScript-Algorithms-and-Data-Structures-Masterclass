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
}
