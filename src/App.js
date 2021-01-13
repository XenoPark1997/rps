import React, {Component} from 'react';
import './App.css';
class Rps extends Component {
  render(){
    return (
        <div className="Rps_container">
            <div className="Rps_box">
              <div className="Player_box">
                <label className="Top_label">YOU</label><br/>
                <label className="Top_label">0</label>
              </div>
              <div className="Opponent_box">
                <label className="Top_label" value="AI" /><br />
                <label className="Top_label" value="0" />
              </div>
              <label> meow </label>
              <div className="Item_box">
                <button className="rock_button" name="rock" value="">
                  <img className="img_style" src="/Component/assets/icons/rock.svg" alt="meteor" />
                </button>
              </div>
            </div>
        </div>
        
    );
  }
}

export default Rps;