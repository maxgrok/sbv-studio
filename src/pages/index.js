import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SocialLinks from '../components/shared/social/SocialLinks'
import '@fortawesome/fontawesome-free/css/all.css';
import IconSBV1 from '../images/sbv__icon1.svg'
import IconSBV2 from '../images/sbv__icon2.svg'
import IconSBV3 from '../images/sbv__icon3.svg'

const IndexPage = () => (
  <Layout>
    <div className="Hero Home" id="home">
      <div className="Hero__Contents">
        <h2>STUDIO</h2>
        <p className="light">
        We are a values-aligned venture studio for incubating discrete projects in Crypto, Web3, and DeFi. 
        </p>
        <p className="light">
        The Web's founding principles of sovreignty, freedom, privacy, and community have guided each phase of its evolution. At SBV Studio, we're focused on building that next evolutionary wave. 
        </p>
        <div className="ButtonGroup">
{/* <SocialLinks /> */}
        </div>
      </div>
      <div className="HeroBorder BackgroundImage" />
    </div>

    <div className="Block Join">
      <div className="Block__Contents" id="wave-one">
      <h4 style={{fontSize: `1.5em`}}>Wave One</h4>
      <img src={IconSBV1} />
     <p className="light">Studio's first cohort of projects are focused on: </p><br/>
        <div className="Grid">
          <div className="Column Column--35">
            <i class="fas fa-icons fa-3x"style={{margin: `0 auto`,opacity: `0.8`}}></i>
            <p style={{margin: `1em auto`}}>Community Media</p>
            {/*
            <p className="light">
            Description of Media?
            </p> */}
          </div>
          <div className="Column Column--35">
          <i class="fas fa-home fa-3x" style={{margin: `0 auto`, opacity: `0.8`}}></i>
            <p style={{margin: `1em auto`}}>Housing</p>
            {/* <p className="light">
            Housing info...
            </p> */}
          </div>

          <div className="Column Column--35">
          <i class="fas fa-shapes fa-3x" style={{margin: `0 auto`, opacity: `0.8`}}></i>
            <p style={{margin: `1em auto`}}> Innovation Design</p>
            {/* <p className="light">
           Description or icon?  
            </p> */}
          </div>

          <div className="Column Column--35">
          <i class="fas fa-balance-scale fa-3x" style={{margin: `0 auto`, opacity: `0.8`}}></i>
            <p style={{margin: `1em auto`}}> Legal </p>
            {/* <p className="light">
            Description or icon? 
            </p> */}
          </div>
        </div> 
      </div>
    </div>
    
    <div className="Block CommunityTokens" id="community-tokens"> {/* was get-involved change the id in the scss file*/}
      <div className="Block__Contents">
        <h4  style={{fontSize: `1.5em`}}>Community Tokens</h4>
        <div className="GetInvolved_Contents">
            <img src={IconSBV2} /> <br/><br/><br/>
            <p className="light">
            Basic info on social tokens - creator and community<br/>
            What they are, why the future, membership not audience, etc. 
            </p>
            <p className="light">
              <strong>Form link here: </strong>
            </p>
        </div>
      </div>
    </div>
    <div className="Block WorkWithUs" id="work-with-us"> {/* was -get-involved change the id in the scss file*/}
      <div className="Block__Contents">
        <h4  style={{fontSize: `1.5em`}}>Work with Us</h4>
        <div className="GetInvolved_Contents">
            <img src={IconSBV3} />
            <p className="light">
            SBV Studio is a rotating group of innovators and contributors incubating values-aligned crypto projects. 
            </p>
            <p>
              We're taking that values-aligned approach to venture building - inspired by the web3 movement itself. If you'd like to work with us to incubate a new project - <strong> please reach out!</strong> <br/>
                <strong>Insert form link here.</strong> 
            </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
