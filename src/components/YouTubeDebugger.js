import React from "react";

class YoutubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p",
      },
    },
  };

  // this.setState({
  //   addressInfo: {
  //     ...this.state.addressInfo,
  //     city: 'New York City'
  //   }
  // })

  changeBitrate = () => {
    this.setState((prevState) => {
      return {
        settings: {
          ...prevState.settings,
          bitrate: 12,
        },
      };
    });
  };

  changeResolution = () => {
    this.setState((prevState) => {
      return {
        settings: {
          ...prevState.settings,
          video: {
            resolution: "720p",
          },
        },
      };
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>
          Change Bitrate
        </button>
        <button className="resolution" onClick={this.changeResolution}>
          Change Resolution
        </button>
      </div>
    );
  }
}

export default YoutubeDebugger;
