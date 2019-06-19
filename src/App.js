import React from 'react';
import logo from './logo.svg';
import './styles/main.scss';
import SVG from 'react-inlinesvg';


function App() {
  return (
    <div className="grid-container full">
    <div className="grid-container full">
      <div className="grid-x header">
        <div className="cell small-9 medium-9 large-9 navigation">
          <ul class="menu navigation-menu">
            <li>Creatix</li>
            <li> How to get started</li>
            <li> About </li>
          </ul>
        </div>
        <div className="cell auto login">
          <div className="login-button">
            Log in 
          </div>
        </div>
        <div className="cell small-6 medium-6 large-6  creatix-sheet-block">
          <div className="creatix-sheet-content"> 
            <h1>
              Focus on what you know best
            </h1>
            <p>
            Creatix is all about creating your new idea by focusing on what you know best. It also offers the opportunity
            to share your ideas. In this way you can easily discover the market, investor interest and potential cofounders. 
            </p>
            <button>
              Get started 
            </button>
          </div>
        </div>
      </div>
      <div className="grid-container about-creatix">
      <div class="grid-x">
        <div class="cell small-6 medium-6 small-6 idea-card-1">
          <h2> #1 Write down your idea</h2> 
        </div>
      </div>
      <div class="grid-x">
      <div class="cell small-6 medium-6 small-6 idea-card-2">
          <h2> #2 Investigate your idea</h2>  
        </div>
      </div>
      <div class="grid-x">
        <div class="cell medium-6 large-4">12/6/4 cells</div>
        <div class="cell medium-6 large-8">12/6/8 cells</div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;
