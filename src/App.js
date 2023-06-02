import React, { Component } from 'react';
import ReactGA from 'react-ga';
import {hotjar} from 'react-hotjar';
import Scrollspy from 'react-scrollspy';
import {Fade} from 'react-awesome-reveal';
import VisibilitySensor from 'react-visibility-sensor';
import logo from './img/logo@2x.png';
import beforeText from './img/before-text@2x.png';
import afterText from './img/after-text@2x.png';
import satellite from './img/satellite-illustration@2x.png';
import uxAudit from './img/ux-audit@2x.png';
import priceSqueeze from './img/price-squeeze@2x.png';
import majorImpact from './img/major-impact-markertext@2x.png';
import blackArrowright from './img/black-arrow-right@2x.png';
import blackArrowLeft from './img/black-arrow-left@2x.png';
import blueArrowRight from './img/blue-arrow-right@2x.png';
import blueArrowLeft from './img/blue-arrow-left@2x.png';
import shadesOfBlue from './img/shades-of-blue-illustration@2x.png';
import howItWorks from './img/how-it-works-underline@2x.png';
import icOne from './img/ic-one@2x.png';
import icTwo from './img/ic-two@2x.png';
import icThree from './img/ic-three@2x.png';
import researchIllustration from './img/research-illustration@2x.png';
import prototypeIllustration from './img/prototype-illustration@2x.png';
import implementIllustration from './img/implement-illustration@2x.png';
import beautyInterlude from './img/beauty-interlude@2x.png';
import notchedBorder from './img/notched-border.svg';
import fireside from './img/fireside@2x.png';
import avinewBefore from './img/avinew-before@2x.png';
import n2uitiveBefore from './img/n2uitive-before@2x.png';
import firesideBefore from './img/fireside-before@2x.png';
import avinewAfter from './img/avinew-after@2x.png';
import n2uitiveAfter from './img/n2uitive-after@2x.png';
import firesideAfter from './img/fireside-after@2x.png';
import n2uitive from './img/n2uitive@2x.png';
import compareArrow from './img/comparison-arrow@2x.png';
import daveRich from './img/dave-rich@2x.png';
import brookeLias from './img/brooke-lias@2x.png';
import phillipNewlin from './img/Phillip@2x.png';
import faqArrow from './img/accordion-arrow-down.svg';
import faqArrowDark from './img/accordion-arrow-up.svg';
import contactInterlude from './img/contact-interlude@2x.png';
import linkedin from './img/linkedin@2x.png';
import facebook from './img/facebook@2x.png';
import instagram from './img/instagram-sketched@2x.png';
import avinewOverlayCircle from './img/avinew-overlay-oval@2x.png';
import avinewOverlayTextWhy from './img/avinew-overlay-text-why@2x.png';
import avinewOverlayX from './img/avinew-overlay-x@2x.png';
import avinewOverlayTextTrust from './img/avinew-overlay-text-trust@2x.png';
import avinewOverlaySquare from './img/avinew-overlay-square@2x.png';
import avinewOverlayTextTooSoon from './img/avinew-overlay-text-too-soon@2x.png';
import avinewMarkup from './img/Markup-Avinew-white-background.gif'

//import stoneStrickland from './img/stone-strickland@2x.png';
import './App.css';
import SmallTweaksNavBar from './components/SmallTweaksNavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';
import ContactForm from './components/ContactForm';

ReactGA.initialize('UA-168952995-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function ContextAwareToggle ({ children, eventKey, callback }) {
  const currentEventKey = React.useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <div onClick={decoratedOnClick} className="custom-toggle">
      <p
        className="d-inline-block" 
        style={{ 
          color: isCurrentEventKey ? '#36A7C4' : '#222629',
          fontWeight: isCurrentEventKey ? 'bold' : 'normal' }}
        onClick={decoratedOnClick}
      >
        {children}
      </p>
      <img
        src={isCurrentEventKey ? faqArrowDark : faqArrow} width={13} alt="expansion-arrow" className="d-inline-block"
        onClick={decoratedOnClick}
      />
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    // initialize intercom
    window.Intercom("boot", {
      app_id: "qev44m0l"
    });

    hotjar.initialize(1886255, 6);

    this.state = {
      name: "React",
      showHideContact1: false,
      showHideContact2: false,
      buttonVisibility: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    this.setState({ buttonVisibility: isVisible ? false : true });
    
  }


  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideContact1":
        this.setState({ showHideContact1: !this.state.showHideContact1 });
        break;
      case "showHideContact2":
        this.setState({ showHideContact2: !this.state.showHideContact2 });
        break;
      default:
        this.setState(null);
    }
  }


  render() {
  return (
    <div className="">
      <SmallTweaksNavBar dataFromParent = {this.state.buttonVisibility} />
      <div>
        <Container id="hero" className="">
          <Row>
            <h1 className="mx-auto">Your application is losing money.<br /><span className="highlighter-yellow">&nbsp;Do you know why?&nbsp;</span></h1>
          </Row>
        </Container>
        <div className="case-study">
          <Container>
            <Row>
              <Col md className="text-center">
                <div className="text-center ml-auto overflowing">
                  <img src={beforeText} width={118} alt="Before" className="comparison-text" />
                  <div>
                   {/*<img src={avinewMarkup} alt="avinew-markup" id="avinew-markup" width={384} />*/}
                    <img src={avinewBefore} alt="avinew-comparison-before" width={404} className="overflowing before" />
                    <div className="desktop">
                    <Fade cascade fraction={0.2} duration={1000} damping={1.2}>
                      <img src={avinewOverlayCircle} alt="overlay circle" width={385} id="avinew-overlay-circle" />
                      <img src={avinewOverlayTextWhy} alt="overlay text" width={345.8} id="avinew-overlay-text-why" />
                      <img src={avinewOverlayX} alt="overlay X" width ={184} id="avinew-overlay-x" />
                      <img src={avinewOverlayTextTrust} alt="overlay text" width={149} id="avinew-overlay-text-trust" />
                      <img src={avinewOverlaySquare} alt="overlay square" width={160} id="avinew-overlay-square" />
                      <img src={avinewOverlayTextTooSoon} alt="overlay text" width={136} id="avinew-overlay-text-too-soon" />
                    </Fade>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="auto" className="text-center compare-arrow" style={{paddingLeft: 23, paddingRight: 21.6}}><img src={compareArrow} alt="avinew-comparison-arrow" width={50.4} className="" /></Col>
              <Col md className="text-center">
                <div className="text-center mr-auto overflowing">
                <div width={100}><img src={afterText} width={103.2} alt="After" className="comparison-text aftertext" /></div>
                  <img src={avinewAfter} alt="avinew-comparison-after" width={404} className="overflowing glowing-yellow" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
              <p className="">Our client Avinew <b>initially met resistance</b> when requesting <b>sensitive data</b> during onboarding. This caused many users to request <b>immediate cancellation</b>. By tweaking their app’s UI and messaging, we restored customer confidence and <span className="highlighter-yellow">saved our client from serious losses.</span></p>
              </Col>
            </Row>
            <Row>
              <Col className="roi text-center">
              <h3 className="mx-auto"><b>These subtle tweaks reversed potential losses by an astonishing <div className="circled-avinew"><span className="avinew-roi">80%</span></div></b></h3>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="floating-nav">
            <div className="nav-wrapper">
            <Fade fraction={1} duration={1500}>
              <div style={{height: 600}}>
              <div className="text-logo"><a href="#hero"><img src={logo} alt="logo" width={170} /></a></div>
              <div className="tagline"><span>Get the most out of what you've got.</span></div>
              <nav style={{marginBottom: 37}}>
                <Scrollspy offset={-160} items={ ['intro', 'howitworks', 'testimonials', 'faq', 'contact'] } currentClassName="is-current">
                  <li><a href="#intro">What We Do</a></li>
                  <li><a href="#howitworks">How It Works</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#contact">Contact</a></li>
                </Scrollspy>
              </nav>
              <a href="https://app.monstercampaigns.com/c/yismlgmgd8uw9zenwo7c/" target="_blank" rel="noopener noreferrer" className="contact-button smallblue">Request My UX Audit</a>
              </div>
            </Fade>
            </div>
          </div>
        <div id="intro">
        <Container>
          <Row className="align-middle text-center">
            <Col md>
              <img src={satellite} className="satellite" alt="satellite-graphic" width={638}/>
            </Col>
          </Row>
          <Row className="text-center">
          <Col md className="my-auto">
            <img src={majorImpact} alt="Small tweaks can have a major impact." width={970} className="headline-marker"/>
          </Col>
          </Row>
          <Row className="align-middle">
            <Col md={{span: 7, order: 1}} className="d-flex">
              <p  className="description text-right my-auto ml-auto" style={{width: 555}}><b>We’re a Research & Development firm</b> specialized in finding small tweaks<span className="highlighter-yellow"> that make the biggest impact.</span>  First, we start with <span className="ux-auditing">UX auditing</span> to help businesses (large or small) <b>expose underperformance</b> in their web or mobile applications.
              </p>
            </Col>
            <Col md={{span: 5, order: 2}} className="text-center align-middle my-auto">
              <img src={uxAudit} width={360} alt="ux audit"/>
            </Col>
          </Row>
          <Row className="tweaked-here">
            <Col  md={{span: 7, order: 2}} className="d-flex">
              <p className="description my-auto">We then design, prototype, and test <b>UX optimizations</b> and <b>system simplifications</b> that will improve your web or mobile app’s performance, better satisfy your end-users, and<span className="highlighter-yellow"> dramatically boost your ROI.</span>
              </p>
            </Col>
            <Col md={{span: 5, order: 1}} className="text-center align-middle my-auto">
              <img src={priceSqueeze} width={361} alt="Price Squeeze" />
            </Col>
          </Row>
          <Row className="align-middle">
            <Col className="my-auto text-center mx-auto">
              <img src={blackArrowright} alt="pointing-arrow" width={50} className="pointing-arrow-right desktop" />
              <VisibilitySensor onChange={this.handleChange}>
                <div className="d-inline" style={{height: 74, marginTop: 46}}>
                  <a href="https://app.monstercampaigns.com/c/yismlgmgd8uw9zenwo7c/" target="_blank" rel="noopener noreferrer" style={{paddingTop: 16, paddingBottom: 16, paddingLeft: 55, paddingRight: 55, fontSize: 20}} className="contact-button smallblue">Request Your UX Audit</a>
                </div>
              </VisibilitySensor>
                <img src={blackArrowLeft} alt="pointing-arrow" width={50} className="pointing-arrow-left desktop"/>
                <span className="d-block button-subtext">No Contract, Commitment, or <span className="bs">B.S.!</span></span>
                <span className="d-block final-upsell" style={{color: '#36A7C4'}}>(Takes 6 Seconds)</span>
            </Col>
          </Row>
        </Container>
        <div id="comparisons">
        <div className="case-study">
          <Container>
            <Row>
              <Col className="text-center">
              <img src={n2uitive} alt="n2uitive-logo" width={161} className="clients" />
              </Col>
            </Row>
            <Row>
              <Col md className="text-center overflowing">
              <img src={beforeText} width={118} alt="Before" className="comparison-text" />
                <img src={n2uitiveBefore} alt="n2uitive-comparison-before" width={500} className="overflowing before" />
              </Col>
              <Col md="auto" className="text-center compare-arrow"><img src={compareArrow} alt="comparison-arrow" width={50.4} className="" /></Col>
              <Col md className="text-center overflowing">
                <img src={afterText} width={103.2} alt="After" className="comparison-text aftertext" />
                <img src={n2uitiveAfter} alt="n2uitive-comparison-after" width={500} className="overflowing glowing-yellow" />
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
              <p className="">N2uitive’s users were forced to use a touch-tone phone dialing system to make, link, and record their client statements. By streamlining their system it dramatically<span className="highlighter-yellow"> simplified their user’s process.</span></p>
              </Col>
            </Row>
            <Row>
              <Col className="roi text-center" style={{marginBottom: 108}}>
              <h3 className="mx-auto"><b>This system simplification increased user satisfaction by <div className="circled-n2uitive"><span className="n2uitive-roi">57%</span></div></b></h3>
              </Col>
            </Row>
          </Container>
        </div>
        <Container style={{paddingTop: 144, paddingBottom: 121}}>
        <Row className="align-middle" id="examples">
        <Col md={{ span: 6, order: 1 }} className="my-auto text-center mobile">
            <h2 style={{marginBottom: 25}}><b>One small tweak can net a massive ROI.</b></h2>
        </Col>
        <Col md={{ span: 6, order: 2 }} className="align-middle my-auto">
            <img src={shadesOfBlue} alt="shades-of-blue" width={515} />
          </Col>
          <Col md={{ span: 6, order: 1 }} className="my-auto text-right">
            <h2 className="desktop"><b>One small tweak can net a massive ROI.</b></h2>
            <p className="description aftertext" style={{fontSize: 22}}>For example... Google made an<span className="highlighter-yellow"> additional $200 million in one year </span>after implementing a <b>small tweak in color</b> for their search result links. That’s it! Turns out people subconsciously prefer clicking on a <span className="purplish-blue">purplish-blue</span> over a <span className="greenish-blue">greenish-blue.</span></p>
          </Col>
        </Row>
        </Container>
        <div className="case-study" id="fireside">
          <Container>
            <Row>
              <Col className="text-center">
              <img src={fireside} alt="fireside-logo" width={161} className="clients" />
              </Col>
            </Row>
            <Row>
              <Col md className="text-center overflowing">
                <img src={beforeText} width={118} alt="Before" className="comparison-text" />
                <img src={firesideBefore} alt="fireside-comparison-before" width={500} className="overflowing before" />
              </Col>
              <Col md="auto" className="text-center compare-arrow"><img src={compareArrow} alt="comparison-arrow" width={50.4} className="" /></Col>
              <Col md className="text-center overflowing">
                <img src={afterText} width={103.2} alt="After" className="comparison-text aftertext" />
                <img src={firesideAfter} alt="fireside-comparison-after" width={500} className="overflowing glowing-yellow" />
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
              <p className="">Fireside is an application to explore the relationships in your life, with yourself and others. We identified an opportunity to tweak their communication system from a focus on text,<span className="highlighter-yellow"> to a focus on people.</span></p>
              </Col>
            </Row>
            <Row>
              <Col className="roi text-center">
              <h3 className="mx-auto"><b>These tweaks in UI netted a <div className="circled-fireside"><span className="fireside-roi">17%</span></div> increase in user engagement.</b></h3>
              </Col>
            </Row>
          </Container>
        </div>
        </div>
        </div>
        <Container className="how-it-works" id="howitworks">
          <Row className="text-center">
            <Col className="how-it-title">
            <h2>How It Works</h2>
            <img src={howItWorks} alt="underline" width={96} />
            </Col>
          </Row>
          <Row className="align-middle">
            <Col md className="my-auto text-left explanation mobile">
              <div className="bullet highlighter-yellow mx-auto">
                <img src={icOne} alt="bullet-one" className="align-middle my-auto" width={33} />
                <h3 className="align-middle my-auto d-inline-block mx-2"><span className="" ><b>UX Auditing &<br /> Market Research </b></span></h3>
              </div>
            </Col>
            <Col className="text-center">
            <img src={researchIllustration} alt="research-illustration" width={366.5} />
            </Col>
            <Col md className="my-auto text-left explanation">
              <div className="bullet desktop highlighter-yellow">
                <img src={icOne} alt="bullet-one" className="align-middle my-auto highlighter-yellow" width={33} />
                <h3 className="d-inline-block align-middle my-auto mx-2"><span className="highlighter-yellow" ><b>UX Auditing & Market Research</b></span></h3>
              </div>
              <p className="how-it">Our research team kicks off each project by diving deep into their understanding of your business, market, and product. We then use the insights gained from the feedback of your team/customers/stakeholders/etc. and convert our findings into <span className="tiempos-semi">quantifiable data</span>.  This is later used as your product’s measurable baseline for future testing.</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
            <img src={notchedBorder} alt="notched-border" className="notched-border" width={935.9} style={{paddingTop: 51, paddingBottom: 29.5}} />
            </Col>
          </Row>
          <Row className="align-middle">
            <Col md className="my-auto text-left explanation mobile">
              <div className="bullet highlighter-yellow mx-auto" >
                <img src={icTwo} alt="bullet-two" className="" width={33} />
                <h3 className="d-inline-block align-middle my-auto mx-2"><b>Rapid Prototyping<br /> & Usability Testing</b></h3>
              </div>
            </Col>
            <Col md className="text-center">
            <img src={prototypeIllustration} alt="prototype-illustration" width={337} />
            </Col>
            <Col md className="my-auto text-left explanation">
              <div className="bullet desktop highlighter-yellow">
                <img src={icTwo} alt="bullet-two" className="" width={33} />
                <h3 className="d-inline-block align-middle my-auto mx-2"><b>Rapid Prototyping & Usability Testing</b></h3>
              </div>
              <p className="how-it">Our design team then takes these research findings and begins their design process. We focus on UX optimizations via rapid prototyping and testing with your user base. We continue this iterative process until data shows us that our tweaks will <span className="tiempos-semi">improve your product’s  performance by 11% or more</span>. (This is our insurance for success.)</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
            <img src={notchedBorder} alt="notched-border" className="notched-border" width={935.9} style={{paddingTop: 52, paddingBottom: 33.5}} />
            </Col>
          </Row>
          <Row className="align-middle" style={{paddingBottom: 59}}>
            <Col md className="my-auto text-left explanation mobile">
              <div className="bullet highlighter-yellow mx-auto">
               <img src={icThree} alt="bullet-three" className="" width={33} />
               <h3 className="d-inline-block align-middle my-auto mx-2"><b>Implementation<br /> & Documentation</b></h3>
              </div>
            </Col>
            <Col md className="text-center">
              <img src={implementIllustration} alt="implement-illustration" width={384.27}/>
            </Col>
            <Col md className="my-auto text-left explanation">
              <div className="bullet desktop highlighter-yellow">
               <img src={icThree} alt="bullet-three" className="" width={33} />
               <h3 className="d-inline-block align-middle my-auto mx-2"><b>Implementation & Documentation</b></h3>
              </div>
              <p className="how-it">We later bring these design modifications to life by supporting your engineering team. You’ll receive development specs and technical recommendations on a silver platter.  <span className="tiempos-semi">And we’re not done until the tweak is launched</span>.</p>
            </Col>
          </Row>
        </Container>
        <Container>
        <Row className="align-middle">
          <Col>
            <img src={beautyInterlude} width={1105} id="beauty-interlude" alt="The beauty of  small tweaks is that in addition to that massive ROI, they’re cheaper, they’re faster, and they’re easier to implement." />
          </Col>
        </Row>
        <Row className="align-middle">
            <Col className="my-auto text-center mx-auto">
              <img src={blackArrowright} alt="pointing-arrow" width={50} className="pointing-arrow-right desktop" />
              <VisibilitySensor onChange={this.handleChange}>
                <div className="d-inline" style={{height: 74, marginTop: 46}}>
                  <a href="https://app.monstercampaigns.com/c/yismlgmgd8uw9zenwo7c/" target="_blank" rel="noopener noreferrer" style={{paddingTop: 16, paddingBottom: 16, paddingLeft: 55, paddingRight: 55, fontSize: 20}} className="contact-button smallyellow">Request Your UX Audit</a>
                </div>
              </VisibilitySensor>
                <img src={blackArrowLeft} alt="pointing-arrow" width={50} className="pointing-arrow-left desktop"/>
                <span className="d-block button-subtext">No Contract, Commitment, or <span className="bs">B.S.!</span></span>
                <span className="d-block final-upsell" style={{color: '#EAC70D'}}>(Takes 6 Seconds)</span>
            </Col>
          </Row>
        </Container>
        <div id="testimonials">
          <Container className="overflow-hidden">
            <Row>
              <Col className="text-center">
              <h2><b>What Our Clients Are Saying</b></h2>
              </Col>
            </Row>
            <Row>
              <Col className="text-left">
                <div className="testimonial dave">
                  <p className="m-0">
                  “With small tweaks, it's like having the support of a <b>world class product R&D team</b>. Love the access to top talent on-demand without the high cost of dedicated staff or a full service firm.” 
                  </p>
                  <div className="dave-arrow">
                  </div>
                </div>
                <div className="d-inline-block shoutout">
                  <img src={daveRich} alt="Dave Rich" width={68} className="dave"/>
                  <div className="d-inline-block align-middle my-auto">
                  <h5 className="my-0 client-name">Dave Rich</h5>
                  <span className="client-title">Chief Product Officer <span className="separator">•</span> n2uitive</span>
                </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-right">
                <div className="testimonial brooke">
                  <p className="m-0">
                  “What I liked the most about working with their team was the confidence they gave us in the user experience. We knew changes being made would be <b>successful before they even launched</b>.”
                  </p>
                  <div className="brooke-arrow">
                  </div>
                </div>
                <div className="d-flex shoutout-right">
                  <img src={brookeLias} alt="Brooke Lias" width={68} style={{maxHeight: 68}} />
                  <div className="d-inline-block align-middle my-auto">
                    <h5 className="my-0 client-name">Brooke Lais</h5>
                    <span className="client-title">Chief Marketing Officer <span className="separator">•</span> Avinew</span>
                  </div>
                </div>
             </Col>           
            </Row>
            <Row>
              <Col className="text-left">
                <div className="testimonial phil">
                  <p className="m-0">
                  “I was convinced by their tenacity and responsiveness that they can handle anything. <b>They know what they can deliver, and back it up</b>.”
                  </p>
                  <div className="phil-arrow">
                  </div>
                </div>
                <div className="d-inline-block shoutout">
                  <img src={phillipNewlin} alt="Philip Newlin" width={68} className="phil"/>
                  <div className="d-inline-block align-middle my-auto">
                  <h5 className="my-0 client-name">Philip Newlin</h5>
                  <span className="client-title">Senior Product Manager <span className="separator">•</span> Beaubois</span>
                </div>
                </div>
              </Col>
            </Row>
            
            {/* <Row>
              <Col className="text-left">
                <div className="testimonial stone">
                  <p className="m-0">
                  “Seeing the data is what did it for us. We didn’t have the a lot of capital to spend initially, so <b>removing all the guesswork out of the process</b> was invaluable to say the least. Definitely planning on using ST a lot in the future to optimize our app even more.”
                  </p>
                  </div>
                  <div className="stone-arrow">
                  </div>
                  <div className="d-inline-block shoutout">
                  <img src={stoneStrickland} alt="Stone Strickland" width={68} className="dave"/>
                  <div className="d-inline-block align-middle my-auto">
                  <h5 className="my-0 client-name">Stone Strickland</h5>
                  <span className="client-title">Chief Product Officer <span className="separator">•</span> fireside</span>
                </div>
                </div>
              </Col>
            </Row> */}
          </Container>
        </div>
        <div id="faq">
        <Container>
          <Row>
            <Col className="text-center">
            <h2><b>Frequently Answered Questions</b></h2>
            </Col>
          </Row>
          <Accordion>
            <Card>
              <Card.Header>
                <ContextAwareToggle eventKey="0">
                    What does it cost?
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <span className="tiempos-semi">Option 1</span>: For tweaks that are directly tied to revenue (e.g. an improvement in purchase conversions, a decrease in customer support calls, etc.) we do a 50/50 split in additional revenue made. We are so confident in our ability to improve your application that we will not charge you a single penny to do the work up front. 
                  <br /><br />
                  <span className="tiempos-semi">Option 2</span>: For tweaks not easily tracked to revenue (e.g. improvement in efficiency, improving customer satisfaction, etc.) we charge $150-250/hr. A typical tweak takes anywhere from 10-15 hours.
                  <br /><br />
                  If you’d like to get a sample of our services without any commitment, we offer a 1-hour in-depth review of your mobile or web application, AKA a UX Audit for $100.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <ContextAwareToggle eventKey="1">
                  What types of businesses do you typically help? 
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  We work with <span className="tiempos-semi">startups</span> that don’t have the capacity, employees, or budget to hire a full-time R&D team. We also work with <b>enterprises</b> with dated software and/or customer-interfaces that may have the budget to hire R&D staff but don’t update their web or mobile applications regularly enough to justify the cost.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <ContextAwareToggle eventKey="2">
                    So who are you guys anyways?
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Our founder started Small Tweaks in 2018 after finally getting fed up with the waste of time and money spent on typical application design and development. After 20+ years of experience designing software solutions, one trend kept occurring over and over... the smaller tweaks ALWAYS had the biggest ROI. So why not find the right areas to tweak right off the bat and build from there?
                  <br /><br />
                  It was also realized that application improvements executed with a large team over a long period of time were wholly unnecessary. Tackling the changes in smaller chunks, which are validated through user testing, allows a piece-by-piece deployment model. This approach enables our clients to utilize our services ad-hoc when needed. Why rent a car when you can Uber?
                  <br /><br />
                  Since our founding, we've had the pleasure of working with companies in the fields of AI, Medical, Insurtech, Social, Legal, and Healthcare.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <ContextAwareToggle eventKey="3">
                  How is Small Tweaks different from a traditional UX consulting agency?
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  We differ from traditional UX consulting agencies as our services don't require a long term commitment. Think of us as a tool that can be utilized for one-time redesign projects, complete product overhauls, or continuous on demand UX services. We stick around!
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <ContextAwareToggle eventKey="4">
                  How long does a project take to complete?
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  Some clients seek out our services for a one time project, while others seek out our services for long term in-house solutions. There are also cases in which clients use our services as a tool for occasional design overhauls. That said, the duration for each project is dependent on your unique needs and desires.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <ContextAwareToggle eventKey="5">
                  Do you offer a satisfaction guarantee & warranty?
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  Yes! If we agree to take on a particular tweak, we continue the iterative process of rapid prototyping and usability testing until the data shows us that our tweaks will improve your application’s performance by 11% or more. If we can’t, you don’t pay. This is our insurance for success and satisfaction guarantee.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <ContextAwareToggle eventKey="6">
                  How do we get started?
                </ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  Simply submit your request for your UX audit and we’ll contact you to get started. Before each audit, we touch base with a 15-minute interview to ensure we know what we’ll be reviewing. Please note that we charge an initial fee of $100 to weed out any non-serious parties. From there, we’ll do a 1-hour in-depth “sampler review” of your mobile or web application and you’ll receive a video report detailing all of our findings and areas for improvement. Consider this as a sort of precursor to kick-off your project.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
        </div>
        <div className="contact-area text-center">
          <Container id="contact">
              <Row className="text-center">
                <Col>
                <img 
                src={contactInterlude} 
                className="d-block mx-auto" 
                alt="How can we help?" 
                width={1070} 
                style={{marginBottom: 21}}
                />
                </Col>
              </Row>
              <Row className="align-middle">
                <Col className="my-auto text-center mx-auto">
                  <img src={blueArrowRight} alt="pointing-arrow" width={50} className="pointing-arrow-right desktop" />
                  <VisibilitySensor onChange={this.handleChange}>
                    <div className="d-inline-block" style={{marginTop: 46}}><a href="https://app.monstercampaigns.com/c/yismlgmgd8uw9zenwo7c/" target="_blank" rel="noopener noreferrer" style={{paddingTop: 16, paddingBottom: 16, paddingLeft: 55, paddingRight: 55, fontSize: 20}} className="contact-button smallblack">Request My UX Audit Today</a></div>
                  </VisibilitySensor>
                    <img src={blueArrowLeft} alt="pointing-arrow" width={56} className="pointing-arrow-left desktop"/>
                    <span className="d-block button-subtext">No Contract, Commitment, or <span className="bs">B.S.!</span></span>
                    <span className="d-block final-upsell" style={{color: '#A7B6C1'}}>(Takes 6 Seconds)</span>
                </Col>
              </Row>
              {/*<Row className="contact-boxes text-center">
                <Col md className="contact-1">
                    <h3 className="mx-auto">I'd like the product review.</h3>
                    <a href="https://app.monstercampaigns.com/c/yismlgmgd8uw9zenwo7c/" target="_blank" rel="noopener noreferrer" className="mx-auto contact-button smallred desktop" style={{display: "inline-block"}}>
                      Yes :)
                    </a>
                    <a href="https://calendly.com/smalltweaks/productreview" target="_blank" rel="noopener noreferrer" className="mx-auto contact-button smallred mobile" style={{display: "inline-block"}}>
                      Yes :)
                    </a>
                </Col>
                <Col md className="contact-2">
                  {!showHideContact1 && <h3 className="mx-auto">I have a question. <span className="desktop"><br></br>&nbsp;</span></h3>}
                  {!showHideContact1 && 
                  <button className="mx-auto contact-button smallgold" onClick={() => this.hideComponent("showHideContact1")}>
                    Yes :)
                  </button>}
                  {showHideContact1 && <Contact1 />}
                </Col>
                <Col md className="contact-3">
                  {!showHideContact2 && <h3 className="mx-auto">I'd like to chat with someone.</h3>}
                  {!showHideContact2 && <button className="mx-auto contact-button smallblue" onClick={() => this.hideComponent("showHideContact2")}>
                    Yes :)
                  </button>}
                  {showHideContact2 && <ContactForm2 />}
                </Col>
                  </Row>*/}
                  <ContactForm />
          </Container>
        <div>
      </div>
      </div>
      <div id="footer">
        <Container>
          <Row style={{marginBottom: 21}}>
            <Col className="text-center">
              <a href="https://www.linkedin.com/company/smalltweaks/"  target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" width={35} className="d-inline" /></a>
              <a href="https://www.facebook.com/smalltweaks/"  target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" width={35} className="d-inline" style={{marginLeft: 17, marginRight: 17}} /></a>
              <a href="https://www.instagram.com/smalltweaks/"  target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" width={35} className="d-inline" /></a>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <span className="georgia">Copyright © {new Date().getFullYear()} <b>small<i>tweaks</i></b>. <span style={{whiteSpace: "nowrap"}}>All rights reserved.</span></span>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    </div>
  );
  }
}

export default App;
