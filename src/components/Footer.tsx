import { FooterContainer } from '@/styles/globals';
import React from 'react';

function Footer () {
    return (<>
        <FooterContainer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                Using this <a href='https://api.rawg.io/docs/'>API  </a>
                   for gaming library</p>
            </div>
      
            <div className="col-xs-6 col-md-3">
              <h6>Links</h6>
              <ul className="footer-links">
                <li><a href="https://github.com/chiaraferrara">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/chiara-ferrara-41273a265/">LinkedIn</a></li>
              </ul>
            </div>
      
            <div className="col-xs-6 col-md-3">
              <h6>Docs</h6>
              <ul className="footer-links">
                <li><a href="https://nextjs.org/docs">Next Js</a></li>
                <li><a href="https://redux-toolkit.js.org/">Redux Toolkit</a></li>
                <li><a href="https://api.rawg.io/docs/">Rawg Api</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p>© 2023 Chiara Ferrara</p>
            </div>
    
          </div>
        </div>
      </FooterContainer>
      </>
    );
};

export default Footer;