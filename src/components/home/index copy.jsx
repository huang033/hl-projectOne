import React from 'react';
import './home.css';
import path from '../../asset/video/bg.mp4'
import {
  Player,
  ControlBar,
  PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
  ReplayControl, // 后退按钮
  ForwardControl,  // 前进按钮
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,  // 倍速播放选项
  VolumeMenuButton
} from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"; // import css

//首页
class Home extends React.Component{
  componentDidMount() {
    console.log(this.player)
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    console.log(state)
  }

  render(){
    return (
      <div className="home-top">
         <div>
        <div style={{ width: 500, height: 300, margin: 50 }}>
          <Player
            ref={c => {
              this.player = c;
            }}
          >
            <source
              src={path}
              type="video/mp4"
            />
            <ControlBar autoHide={false} disableDefaultControls={false}>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={1.2} />
              <PlayToggle />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
              <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
              <VolumeMenuButton />
            </ControlBar>
          </Player>
        </div>
            {/* <video src={require('../../asset/video/bg.mp4')} controls autoPlay></video> */}
            <video width="620" height="400"controls>
                <source src={path} />
            </video>
          </div>
        <div className="nav-top">
          这是首页
        </div>
        <div className="nav-top">
          这是首页
        </div>
        <div className="nav-top">
          这是首页
        </div>
       </div>
    );
  }
}

export default Home;