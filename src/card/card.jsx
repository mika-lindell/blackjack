class Card {

  constructor(args = {}){
    this.suit = args.suit || null;
    this.card = args.card || null;
    this.numeric = args.numeric || null;
    this.svg = args.svg || null;
  }

}

export default Card;