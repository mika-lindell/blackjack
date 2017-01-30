import Card from '../card/card.jsx';


class Deck {

  constructor(){
    this.suits = ["hearts", "diamonds", "clubs", "spades"];
    this.cards = null;
  }

  generate(){

    let cards = Array.apply(null, Array(52));

    this.cards = cards.map(
      (currentValue, index, array) => {
        const suit = Math.floor((index) / array.length * this.suits.length); 
        const cardIndex = index % ( array.length /  this.suits.length); 
        return new Card(suit, cardIndex);
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

  }

  reset(){

  }



}

export default Deck;