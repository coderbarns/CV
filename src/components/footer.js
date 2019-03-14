import React from 'react';
import Fade from 'react-reveal/Fade';

var createReactClass = require('create-react-class');

var Footer = createReactClass({

  getInitialState() {
    return({fade_text_array: ["OOOUU ICONS :)", 
                              "GEAR: SKILLS, MEDAL: ACHIEVEMENTS, SCHOOL BAG...you get it",
                              "CLICK AN ICON TO FIND OUT MORE ABOUT ME!",
                              "WHAT ARE YOU WAITING FOR???"],
            fade_text_index: 0, 
            show_fade_text: false})
  },

  componentDidMount() {
    this.showFade()
  },

  showFade() {
    var next_idx = (this.state.fade_text_index + 1) % this.state.fade_text_array.length
    this.setState({fade_text_index: next_idx})
    this.setState({show_fade_text: true})
    setTimeout(this.hideFade, 6000)
  },

  hideFade() {
    this.setState({show_fade_text: false})
    setTimeout(this.showFade, 8000)
  },

  render() {

    return (
      <div className="footer">
        <Fade when={this.state.show_fade_text} bottom={true} duration={2000} distance={'0.2em'}>
          <div className='fade-text'> 
            {this.state.fade_text_array[this.state.fade_text_index]}
          </div>
        </Fade>
      </div>
    );
  }
})

export default Footer;