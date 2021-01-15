import React, {Component} from 'react';
import './App.css';
import rock from './assets/icons/rock.svg';
import paper from './assets/icons/paper.svg';
import scissor from './assets/icons/scissors.svg';

class Rps extends Component {
  render(){
    return (
        <div className="Rps_container">
            <div className="Rps_box">
              <div className="Player_box">
                <label className="Top_label">YOU</label><br/>
                <label className="Top_label" name="Player_Score">0</label>
              </div>
              <div className="Opponent_box">
                <label className="Top_label" >AI</label><br />
                <label className="Top_label" name="AI_Score">0</label>
              </div>
              <label className="scoreboard">SCOREBOARD</label>
              <label className="Indicator" name="result">CHOOSE YOUR ITEM</label>  {/* Win Or lose Indicator text */}
              <div className="Item_box">
                <button className="rock_button" name="rock" value="">
                  <img className="img_style" src={rock} alt="meteor" />
                  ROCK
                </button>
                <button className="paper_button" name="rock" value="">
                  <img className="img_style" src={paper} alt="paper" />
                  PAPER
                </button>
                <button className="scissor_button" name="rock" value="">
                  <img className="img_style" src={scissor} alt="scissor" />
                  SCISSOR
                </button>
              </div>
              <button className="proceed" name="proceed" value="PROCEED">PROCEED</button> {/* Button for Proceed and Try Again */}
            </div>
        </div>
    );
  }
}

export default Rps;