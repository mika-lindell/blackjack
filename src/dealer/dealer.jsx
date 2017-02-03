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
    addPlayer(name, hand){
      this.hands.set(name, hand);
      console.log(this.hands);    }

    setDeck(deck){
      this.deck = deck;
    }

    /**
    @method Reset and deal card(s) to every known hand
    @param  {integer} The amount of cards to be dealt for single hand.
    @return {void}
    **/
    deal(howMany = 2){
      this.deck.collectAndShuffle();

      this.hands.forEach((hand, key) => {
        hand.clear();
        this.hit(key, howMany); 
        hand.calculateScore();
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

      for(let i of [...Array(howMany)]){
        hand.cards.push(this.deck.draw())
      }

      hand.calculateScore();

    }

    // Stub
    stand(){
      this.calculateWinner()
    }

    /**
    @method Play a hand
    @param  {string} The name of the hand to be played.
    @return {void}
    **/
    play(name){
      const hand = this.hands.get(name);
      while(hand.score < 19){
        this.hit(name);
      }
    }

    calculateWinner(){

      const winConditions = new Array(
        '!(a.score > 21)',
        'a.score <= 21',
        'a.score > b.score'
      );

      this.hands.forEach((a, aKey) => {

          this.hands.forEach((b, bKey) => {

            if(a === b) return;

            winConditions.forEach((value, i) => {
              console.log(value, eval(value), aKey, a.score, '=>', bKey, b.score);
            });

          });
      });
    }

}

export default Dealer;