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
    @param {String} The name of the hand.
    @param {Hand} 
    @return {void}
    **/
    addHand(name, hand){
      this.hands.set(name, hand);
      console.log(this.hands);    }

    setDeck(deck){
      this.deck = deck;
    }

    /**
    @method Reset and deal card(s) to every known hand
    @param  {Integer} The amount of cards to be dealt for single hand.
    @return {void}
    **/
    deal(howMany = 2){
      this.deck.collectAndShuffle();
      for(let [key, hand] of this.hands){
        hand.clear();
        this.hit(key, howMany); 
      }
    }

    /**
    @method Add card(s) to a hand known by dealer
    @param  {string} The name of the hand card(s) will be added to.
    @param  {Integer} The amount of cards to be added.
    @param  {Function} The function to be called after the cards have been aded
    @return {void}
    **/
    hit(name, howMany = 1){

      const hand = this.hands.get(name);
      console.log(hand)

      Array(howMany).fill().forEach(() =>
        hand.cards.push(this.deck.draw())
      );

    }

    stand(){
      
    }

    // calculateWinner(){

    //   let status = {
    //     winner: '',
    //     reason: ''
    //   }

    //   if(playerScore > 21){
    //     status.winner = 'dealer';
    //     status.reason = 'player_busted';
    //   }

    //   return status;

    // }

}

export default Dealer;