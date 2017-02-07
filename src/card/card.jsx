/**
@class Single card held in Deck or in Hand
**/
class Card {

  constructor(args = {}){
    this.suit = args.suit || null;
    this.card = args.card || null;
    this.hidden = args.hidden || false;
    this.numeric = args.numeric || null;
    this.name = args.name || null;
    this.image = args.image || null;
  }

}

export default Card;