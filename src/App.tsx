import React from 'react';
import svg from './svg';
import version from './version';

const PageHead = ()=>{
  return ( 
  <div className="pagehead">
    <div className="heading" id="header"><h1 id="title">The BOcT</h1></div>
    <div className="bot-head">
      <button className="bot-btn" id="BOcT" title="The BOcT">
        <svg viewBox="0 0 640 512"><path d={svg.boctHead}/></svg>
      </button>
    </div>
  </div>
)}
const ArrowBox = ()=>{
  return (
    <div className="arrow_box" id="chatter">
      <div className="talk_box" id="chatspace"></div>
      <div className="type_box">
        <form className="type_box-inner">
          <input className="typespace" id="typespace-id" type="text" placeholder="Wanna talk with BOcT? Then type here..!" autoComplete="off"/>
          <button className="typespace-enter" id="typespace-enter-id" type="submit">
            <svg viewBox="0 0 448 512"><path d={svg.sendBtn}/></svg>
          </button>
        </form>
      </div>
    </div>
)}
const AboutBox = ()=>{
  return (
    <div className="about">
      <fieldset>
        <legend>About BOcT</legend>
        <div className="aboutbtns">
          <button id="settingg" title="Settings">
            <svg viewBox="0 0 512 512"><path d={svg.settingBtn}/></svg></button>
          <button id="i-btn" title="Info">
            <svg viewBox="0 0 512 512"><path d={svg.infoBtn}/></svg></button>
          <button className="toggleTheme" data-themenow="dark" title="Toggle Dark/Light Mode">
            <svg viewBox="0 0 512 512"><path d={svg.themeBtn}/></svg></button>
        </div>
        <p className="releaseVer">v{version.main} | {version.release}</p>
        <hr/>
        <p>BOcT is a Static Browser Chatbot</p>
        <p>It's currently in Lazy Development</p>
        <p>Future Updates to BOcT can make it perform basic Maths, Maybe suggest you some Movies...</p>
      </fieldset>
    </div>
)}

const HTMLcode = (
  <div className="alll" id="allo">
    <PageHead />
    <ArrowBox />
    <AboutBox />
  </div>
);

function App(){
  return HTMLcode;
}

export default App;
