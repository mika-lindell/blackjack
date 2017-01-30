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

  draw(){

  }

  reset(){

  }



}

export default Deck;