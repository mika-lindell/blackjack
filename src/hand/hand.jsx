/**
@class Holds cards and score of a single hand.
**/
class Hand {

  constructor(){
    this.cards = new Array();
    this.score = 0
  }

  /**
  @method Calculate total score of the hand from cards
  **/
  calculateScore(){
    let total = 0;

    Array(this.cards.length).fill().map((_, i) => 
      total += this.cards[i].numeric
    );

    this.score = total;
  }

  /**
  @method Remove all cards and reset score.
  **/
  clear(){
    this.cards = new Array();
    this.score = 0;
  }

}

export default Hand;