/**
@class Holds cards and score of a single hand.
**/
class Hand {

  constructor(name){
    this.name = name;
    this.cards = new Array();
    this.score = 0;
    this.prevScore = 0;
  }

  addCard(card){
    this.cards.push(card);
  }

  /**
  @method Calculate total score of the hand from cards
  **/
  calculateScore(){
    let total = 0;

    Array(this.cards.length).fill().map((_, i) => {
      if(!this.cards[i].isUpsideDown)
        total += this.cards[i].numeric
    });

    this.prevScore = this.score;
    this.score = total;
  }

  /**
  @method Remove all cards from hand and reset score.
  **/
  clear(){
    this.cards = new Array();
    this.score = 0;
  }

}

export default Hand;