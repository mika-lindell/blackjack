import Deck from '../deck/deck.jsx';
import Hand from '../hand/hand.jsx';

/**
@class Functionality related to dealer in a blackjack-game.
**/
class Dealer{
  
    constructor(){
      this.hands = new Map();
      this.deck = null;
    }

    /**
    @method Let dealer know about the players in this game.
    @param {string} The name of the hand.
    @param {Hand} 
    @return {void}
    **/
    addPlayer(hand){
      this.hands.set(hand.name, hand);
      console.log(this.hands);    
    }

    setDeck(deck){
      this.deck = deck;
    }

    /**
    @method Reset and deal card(s) to every known hand
    @param  {integer} The amount of cards to be dealt for single hand.
    @return {void}
    **/
    deal(howMany = 2){
      
      this.hands.forEach((hand, key) => {
        hand.clear();
        this.hit(key, howMany); 
        hand.calculateScore();

        if(hand.score > 21){
          hand.clear();
          this.hit(key, howMany)
        }

      });

    }

    /**
    @method Add card(s) to a hand known by dealer
    @param  {string} The name of the hand card(s) will be added to.
    @param  {integer} The amount of cards to be added.
    @return {void}
    **/
    hit(name, howMany = 1){

      const hand = this.hands.get(name);
      let upsideDown = false;

      if(!this.deck.cards || this.deck.cards.length < howMany) 
        this.deck.collectAndShuffle();

      Array(howMany).fill().forEach( (_, i) => {
        if(name === 'dealer' && i === 1)
          upsideDown = true;
        else
          upsideDown = false;

        hand.addCard(this.deck.draw(upsideDown));
      });

      hand.calculateScore();

    }

    // Stub
    stand(){
    }

    /**
    @method Play a hand.
    @param  {string} The name of the hand to be played.
    @return {void}
    **/
    play(name){

      console.log('play():');

      const hitConditions = new Array(
        'a.score <= 21', 
        'b.score <= 21',  // Not if player is busted
        'a.score < b.score', // Yes if we are lower than player
      );
      let a = this.hands.get(name);
      let trophies = 0;

      this.hands.forEach((b, bKey) => {
        if(a === b) return;

        hitConditions.forEach((value, i) => {
          // If all conditions eval() true, will take another card
          if(eval(value)){ 
            trophies++;
          }
          
          console.log(value, eval(value), name, a.score, '=>', bKey, b.score);

        });
      });

      if(trophies === hitConditions.length){
        this.hit(name);
        this.play(name); // Repeat
      }

    }

    flip(name, upsideDown = false){
      const hand = this.hands.get(name);

      hand.cards.forEach((card, i) => {
        card.isUpsideDown = upsideDown;
      });
    }

    /**
    @method Detect the would-be winner in current state of the game.
    @return {void}
    **/
    calculateWinner(){

      console.log('calculateWinner():');

      const winConditions = new Array(
        'a.score <= 21', 
        '!(a.score > 21)', // Lose if busted
        'a.score > b.score', // Win if higher score
      );

      let trophies = new Object();

      this.hands.forEach((a, aKey) => {

          a.calculateScore();

          if(!(trophies[aKey])) trophies[aKey] = 0;

          this.hands.forEach((b, bKey) => {
            if(a === b) return;

            winConditions.forEach((value, i) => {
              if(eval(value)){ 
                trophies[aKey]++;
              }
              
              console.log(value, eval(value), aKey, a.score, '=>', bKey, b.score);
            });

          });
      });

      const winner = Object.keys(trophies).reduce(
        (a, b) => { return trophies[a] > trophies[b] ? a : b });

      return winner;

    }

}

export default Dealer;