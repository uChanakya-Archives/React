import React from 'react';
import Svg from './svg';

const HTMLcode = (
  <div className="alll" id="allo">
    <div className="pagehead">
      <div className="heading" id="header"><h1 id="title">The BOcT</h1></div>
      <div className="bot-head">
        <button className="bot-btn" id="BOcT" title="The BOcT">
          <svg viewBox="0 0 640 512"><path d={Svg.boctHead}/></svg>
        </button>
      </div>
    </div>
    <div className="arrow_box" id="chatter">
      <div className="talk_box" id="chatspace"></div>
      <div className="type_box">
        <form className="type_box-inner">
          <input className="typespace" id="typespace-id" type="text" placeholder="Wanna talk with BOcT? Then type here..!" autoComplete="off"/>
          <button className="typespace-enter" id="typespace-enter-id" type="submit">
            <svg viewBox="0 0 448 512"><path d={Svg.sendBtn}/></svg>
          </button>
        </form>
      </div>
    </div>
    <div className="about">
      <fieldset>
        <legend>About BOcT</legend>
        <div className="aboutbtns">
          <button id="settingg" title="Settings">
          <svg viewBox="0 0 512 512"><path d={Svg.settingBtn}/></svg></button>
          <button id="i-btn" title="Info">
          <svg viewBox="0 0 512 512"><path d={Svg.infoBtn}/></svg></button>
          <button className="toggleTheme" data-themenow="dark" title="Toggle Dark/Light Mode">
          <svg viewBox="0 0 512 512"><path d={Svg.themeBtn}/></svg></button>
        </div>
        <p className="releaseVer">Version 3.2 | Nov 2020 Release-1</p>
        <hr/>
        <p>BOcT is a Static Browser Chatbot</p>
        <p>It's currently in Lazy Development</p>
        <p>Future Updates to BOcT can make it perform basic Maths, Maybe suggest you some Movies...</p>
      </fieldset>
    </div>
  </div>
);
function App(){
  return HTMLcode;
}

export default App;
