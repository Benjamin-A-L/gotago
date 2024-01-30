import * as React from "react"
import '@fontsource/rubik'
import './styles.css'
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from "styled-components"
import { NavBar, NavBarMobile } from "../components/navbar";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import myImage from '../images/holdtml-banner.jpg'


export const LogoStyled = styled.div`
    font-size: 46px;
    font-family: "Rubik", "sans-serif";
    color: black;
    padding: 8px;
    justify-self: center;
`

export const Logo = () => {
  return <LogoStyled><b>&lt;H</b><span style={{ color: 'rgb(241, 151, 32)' }}>old</span><b>TML/&gt;</b></LogoStyled>
}

const IndexPage = () => {
  return (
    <main>
      <NavBar></NavBar>
      <NavBarMobile></NavBarMobile>
      <section className="header-section">
        <div className='header-container'>

          <h1>The access to the digital era for your business</h1>
          <div className="header-cta-container">
            <p>sign up for a free call to chat with us</p>
            <button className='header-cta-btn' onClick={()=>scrollTo('.booking-section')}>take me there</button>
          </div>

          <div className='header-image'>
            <StaticImage id='header-img' src='../images/Designer.jpeg'></StaticImage>
          </div>
        </div>
      </section>


      <section className="help-section">
        <div className="how-container">
        
          <h2>How we can benefit your company</h2>
          <p className='how-paragraph-1 how-paragraph'>We make websites to help your potential customers find out about your business, and become recurrent.</p>
          <p className='how-paragraph-2 how-paragraph'>our area of expertise is making fast and atractive websites, that you can easily edit without needing to learn code</p>
          
          <div className="how-we-do-it-explanation">
            <div className="gatsby-container how-item-container">
              <p><a href='https://gatsbyjs.com' target='_blank'>gatsby</a> is a static site generator, that we use to build your website, this means that all of its static content is served almost nstantaneously</p>
              <a href='https://gatsbyjs.com' target='_blank'>
                <StaticImage className='icon' src='../images/icon.png'></StaticImage>
              </a>
            </div>
        
            <div className='prismic-container how-item-container'>
              <a href='https://prismic.io' target='_blank'>
                <StaticImage className='icon' src='../images/prismic-logo.png'></StaticImage>
              </a>
              <p>we integrate <a href='https://prismic.io' target='_blank'>prismic</a> into your website, so that its content can be easily be edited without you needing to hire any additional web developers, or learning how to code</p>
            </div>
        
          </div>
        
          <div className="insights-results"></div>
        </div>
      </section>
      
      
      <section className="booking-section">
        <h2>book a free no pressure call if your interested, and we can see if our services can help you</h2>
        <div className="calendly-responsive-wrapper">
            <Helmet>
              <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
            </Helmet>
            <div id="calendly-imbed">
              <div className="calendly-inline-widget" data-url="https://calendly.com/holdtml-benjamin/reunion-inicial?primary_color=df7b1e" style={{ minWidth: '320px', height: '92dvh', width: '100%', margin: ' 0px 0px 120px 0px', padding: '0px' }}></div>
            </div>
          </div>

      </section>
 
      <footer className="home-footer">
        <a className='footer-email sm-icon' type="email" target='_blank' href="mailto:benjamin.astudilloloyer@holdtml.com">benjamin.astudilloloyer@holdtml.com</a>
        <div className="social-media-container">
          <a target='_blank' href="https://instagram.com/benjamin_astudilloloyer/" className="instagram sm-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a target='_blank' href="https://facebook.com/benjamin.holdtml" className="facebook sm-icon"><FontAwesomeIcon icon={faFacebook} /></a>
          <a target='_blank' href="https://linkedin.com" className="linkedin sm-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage;

export const Head = () => {
  return (
    <>
      <title>HoldTML - High-End Web Development for Bars and Restaurants</title>
      <meta name='description' content='We are a web development agency that makes extremely fast websites with Gatsby for bar and restaurant owners looking to make a positive change on their online precence.' />
      <meta property='og:image' content={myImage} />
      <meta property='og:title' content='HoldTML' />
      <meta property='og:description' content='High-End Web Development for Bars and Restaurants' />
    </>
  );
};
