import React from 'react';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="alll" id="allo">
    <div className="pagehead">
      <div className="heading" id="header"><h1 id="title">The BOcT</h1></div>
      <div className="bot-head">
        <button className="bot-btn" id="BOcT" title="The BOcT">
          <svg viewBox="0 0 640 512"><path id="svg0"/></svg>
        </button>
      </div>
    </div>

    <div className="arrow_box" id="chatter">
      <div className="talk_box" id="chatspace"></div>
      <div className="type_box">
        <form className="type_box-inner">
          <input className="typespace" id="typespace-id" type="text" placeholder="Wanna talk with BOcT? Then type here..!" autoComplete="off"/>
          <button className="typespace-enter" id="typespace-enter-id" type="submit">
            <svg viewBox="0 0 448 512"><path id="svg1"/></svg>
          </button>
        </form>
      </div>
    </div>

    <div className="about">
      <fieldset>
        <legend>About BOcT</legend>
        <div className="aboutbtns">
          <button id="settingg" title="Settings">
            <svg viewBox="0 0 512 512"><path id="svg2"/></svg></button>
          <button id="i-btn" title="Info">
            <svg viewBox="0 0 512 512"><path id="svg3"/></svg></button>
          <button className="toggleTheme" data-themenow="dark" title="Toggle Dark/Light Mode">
            <svg viewBox="0 0 512 512"><path id="svg4"/></svg></button>
        </div>
        <p className="releaseVer">Version 3.1.3 | Oct 2020 Release</p>
        <hr/>
        <p>BOcT is a Static Browser Chatbot</p>
        <p>It's currently in Lazy Development</p>
        <p>Future Updates to BOcT can make it perform basic Maths, Maybe suggest you some Movies...</p>
      </fieldset>
    </div>
  </div>

  );
}

export default App;
