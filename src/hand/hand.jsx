class Hand {

  constructor(){
    this.cards = new Array();
    this.score = 0
  }

  updateScore(){
    let total = 0;

    Array(this.cards.length).fill().map((_, i) => 
      total += this.cards[i].numeric
    );

    return total;
  }

}

export default Hand;