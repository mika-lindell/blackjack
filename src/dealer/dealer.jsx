import Deck from '../deck/deck.jsx';
import Hand from '../hand/hand.jsx';

class Dealer{
  
    constructor(){
      this.hands = new Array();
      this.deck = null;
    }

    addHand(name, hand){
      this.hands.push(hand);
      console.log(this.hands);    }

    setDeck(deck){
      this.deck = deck;
    }

    deal(){
      this.deck.collectAndShuffle();
      for(let hand of this.hands){
        console.log(hand);
        hand.clear();
        this.hit(hand, 2); 
      }
    }

    /**
    @method Add card(s) to a hand known by dealer
    @param  {Hand} The hand card(s) will be added to.
    @param  {Integer} The amount of cards to be added.
    @param  {Function} The function to be called after the cards have been aded
    @return void
    **/
    hit(hand, howMany = 1){

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