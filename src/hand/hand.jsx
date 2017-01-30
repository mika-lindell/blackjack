class Hand {

  constructor(){
    this.cards = Array(); 
  }

  hit(card){
    this.cards.push(card);
  }

}

export default Hand;