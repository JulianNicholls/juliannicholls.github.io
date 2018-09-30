document.addEventListener('DOMContentLoaded', init);

const words = ['Developer', 'Maker'];

class Typewriter {
  constructor() {
    this.holder = document.getElementById('text-holder');
    this.words = words;
    this.listIndex = 0;
    this.wordIndex = 0;
    this.deleting = false;
  }

  type() {
    const { deleting, words, listIndex, wordIndex, holder } = this;
    let delay = 300;

    if (deleting) {
      delay = 200;

      if (--this.wordIndex < 0) {
        this.deleting = false;
        this.listIndex = (listIndex + 1) % words.length;

        delay = 500;
      }
    } else if (++this.wordIndex > words[listIndex].length) {
      this.wordIndex -= 1;
      this.deleting = true;

      delay = 3000;
    }

    const text = wordIndex > 0 ? words[listIndex].substr(0, wordIndex) : ' ';
    holder.innerHTML = `<span class="text">${text}</span>`;

    setTimeout(() => this.type(), delay);
  }
}

function init() {
  const tw = new Typewriter();

  tw.type();
}
