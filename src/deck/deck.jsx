import Card from '../card/card.jsx';


class Deck {

  constructor(){
    this.cards = null;
  }

  generate(){

    const cards = Array.apply(null, Array(52));

    const suits = [
      "hearts", 
      "diamonds", 
      "clubs", 
      "spades"
    ];

    const named = {
      13: 'king',
      12: 'queen',
      11: 'jack'
    };

    this.cards = cards.map(
      (currentValue, index, array) => {

        const suitIndex = Math.floor( index / array.length * suits.length ); 
        const cardIndex = (index % ( array.length / suits.length )) + 1;

        const suit = (suits[suitIndex] || suitIndex);
        const card = named[cardIndex] || cardIndex;

        return new Card(
          suit, 
          card, 
          `${card}_of_${suit}`);
      }

    );

  }

  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   * http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   */
  shuffle() {
      let shuffled = this.cards.slice();

      for (var i = shuffled.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = shuffled[i];
          shuffled[i] = shuffled[j];
          shuffled[j] = temp;
      }

      this.cards =  shuffled;
  }

  draw(){
    return this.cards.shift();
  }

  collectAndShuffle(){
    this.generate();
    this.shuffle();
  }



}

export default Deck;