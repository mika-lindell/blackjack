/**
@class Holds cards and score of a single hand.
**/
class Hand {

  constructor(name){
    this.name = name;
    this.cards = new Array();
    this.score = 0;
    this.viewScore = 0;
  }

  addCard(card){
    this.cards.push(card);
  }

  /**
  @method Calculate total score of the hand from cards
  **/
  calculateScore(){
    let total = 0;
    let viewTotal = 0;

    Array(this.cards.length).fill().map((_, i) => {

       total += this.cards[i].numeric
      if(!this.cards[i].hidden)
        viewTotal += this.cards[i].numeric

    });

    this.score = total;
    this.viewScore = viewTotal;
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