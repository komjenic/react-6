import React, { Component } from 'react';

const API ='AIzaSyAQy3X2_oJqbglzvtRCEacIXETisI7J5hg';
const channelID = 'UCRu4Stv2mLoUaLw2kWsowSA';
const Results = 5;

let finalURL =`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${Results}`;

class Youtube extends Component {
  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this)
  }

  clicked(){
    console.log('clicked')
    fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId)
      this.setState({resultyt})
      // console.log(this.state.resultyt)
    })
    .catch((error) => {
      console.error(error);
    });
  }


  render() {
    // console.log(finalURL)
    return (

      <div>
        <button onClick={this.clicked}>Get youtube videos</button>
        {
          this.state.resultyt.map((link, i) => {
            console.log(link)
            let frame =<div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            return frame
            })
          }
          {this.frame}


      </div>
    );
  }

}

export default Youtube;
