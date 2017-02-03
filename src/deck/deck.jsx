import Card from '../card/card.jsx';

/**
@class Holds the cards available for the game.
**/
class Deck {

  constructor(){
    this.cards = null;
  }

  /**
  @method Generate standard 52-card deck without jokers.
  @return void
  **/
  generate(){

    const cards = Array(52).fill();

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
          {
            suit:     suit,
            card:     card, 
            numeric:  cardIndex, 
            svg:      `${card}_of_${suit}`
          }
        );
      }

    );

  }

  /**
  @Method Randomize array element order in-place Using Durstenfeld shuffle algorithm.
  http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  @return void
  **/
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

  /**
  @method Draw a card from deck.
  @return {void}
  **/
  draw(){
    return this.cards.shift();
  }

  /**
  @method Reset the deck and shuffle.
  @return {void}
  **/
  collectAndShuffle(){
    this.generate();
    this.shuffle();
  }



}

export default Deck;