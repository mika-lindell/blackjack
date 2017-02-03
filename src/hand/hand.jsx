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

    this.score = total;
  }

  clear(){
    this.cards = new Array();
    this.score = 0;
  }

}

export default Hand;