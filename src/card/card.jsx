/**
@class Single card held in Deck or in Hand
**/
class Card {

  constructor(args = {}){
    this.suit = args.suit || null;
    this.card = args.card || null;
    this.isUpsideDown = args.isUpsideDown || false;
    this.numeric = args.numeric || null;
    this.name = args.svg || null;
  }

}

export default Card;