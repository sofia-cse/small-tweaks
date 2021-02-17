import React, { Component } from 'react';
import ReactGA from 'react-ga';
import {hotjar} from 'react-hotjar';
import Scrollspy from 'react-scrollspy';
import Fade from 'react-reveal/Fade';
import VisibilitySensor from 'react-visibility-sensor';
import logo from './img/logo@2x.png';
import heroForeground from './img/hero-chart@2x.png';
import blueSeparator from './img/blue-separator@2x.png'
import satellite from './img/satellite-illustration@2x.png';
import shadesOfBlue from './img/shades-of-blue-illustration@2x.png';
import searsIllustration from './img/sears-illustration@2x.png';
import howItWorks from './img/how-it-works-underline@2x.png';
import icOne from './img/ic-one@2x.png';
import icTwo from './img/ic-two@2x.png';
import icThree from './img/ic-three@2x.png';
import researchIllustration from './img/research-illustration@2x.png';
import prototypeIllustration from './img/prototype-illustration@2x.png';
import implementIllustration from './img/implement-illustration@2x.png';
import notchedBorder from './img/notched-border@2x.png';
import fireside from './img/fireside@2x.png';
import avinew from './img/avinew-logo@2x.png';
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
import contactHeader from './img/contact-header@2x.png';
import contactFlow from './img/contact-flow@2x.png';

//import stoneStrickland from './img/stone-strickland@2x.png';
import './App.css';
import SmallTweaksNavBar from './components/SmallTweaksNavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Contact1 from "./components/Contact1";
import ContactForm2 from "./components/ContactForm2";

ReactGA.initialize('UA-168952995-1');
ReactGA.pageview(window.location.pathname + window.location.search);



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
  const { showHideContact1, showHideContact2 } = this.state;
  
  
  return (
    <div className="">
        <SmallTweaksNavBar dataFromParent = {this.state.buttonVisibility} />
        <Jumbotron id="hero" className="py-0 overflow-hidden" fluid>
          <Container className="mx-auto px-0">
            <Image className="hero-image" src={heroForeground} width={1080} />
            <h1 className="mx-auto">Your application is losing money. We can help.</h1>
            <img src={blueSeparator} className="mx-auto separator" alt="blue-separator" width={38}/>
            <p style={{marginBottom: 42}} className="mx-auto">We're an R&D firm specializing in locating <span className="highlighter"><b>your app's underperformance.</b></span> Once found, we <span className="highlighter"><b>create optimizations</b></span> based on research and hard data.</p>
            <VisibilitySensor onChange={this.handleChange}>
            <div className="desktop" style={{height: 74, marginTop: 46}}><a href="https://app.monstercampaigns.com/c/yismlgmgd8uw9zenwo7c/" target="_blank" rel="noopener noreferrer" style={{paddingTop: 12, paddingBottom: 12, paddingLeft: 31, paddingRight: 31, fontSize: 20}} className="contact-button smallred">Review My App...</a></div>
            </VisibilitySensor>
            <div className="mobile" style={{height: 74, marginTop: 46}}><a href="https://calendly.com/smalltweaks/productreview" target="_blank" rel="noopener noreferrer" style={{paddingTop: 12, paddingBottom: 12, paddingLeft: 31, paddingRight: 31, fontSize: 20}} className="contact-button smallred">Review My App...</a></div>
          </Container>
        </Jumbotron>
        <Container>
        <Row className="align-middle" id="intro">
          <Col md style={{paddingBottom: 7}}>
            <img src={satellite} className="satellite" alt="satellite-graphic" width={555}/>
          </Col>
          <Col md className="my-auto text-left">
            <p className="description m-0"><span>
            <span className="highlighter"><b>A small change can have a big impact.</b></span> That’s why we research, prototype, and implement product optimizations, but with a twist… we only focus on small tweaks.
            </span></p>
          </Col>
        </Row>
        <Row className="align-middle interlude">
          <Col className="my-auto">
            <p className="m-0"><span className="georgia"><i>We’ve found that if you can locate the right areas to improve, that just one  <span className="text-nowrap">small tweak</span> <span className="text-nowrap">– <b>done the right way</b> –</span> can get you a massive ROI.</i></span></p>
          </Col>
        </Row>
        </Container>
        <div className="floating-nav">
          <div className="nav-wrapper">
            <Fade left big fraction={1}>
            <div className="text-logo"><img src={logo} alt="logo" width={170} /></div>
            <div className="tagline"><span>Get the most out of what you've got.</span></div>
            <nav style={{marginBottom: 37}}>
              <Scrollspy offset={-160} items={ ['intro', 'examples', 'comparisons', 'howitworks', 'testimonials', 'contact'] } currentClassName="is-current">
                <li><a href="#intro">Intro</a></li>
                <li><a href="#examples">Examples</a></li>
                <li><a href="#comparisons">Before & Afters</a></li>
                <li><a href="#howitworks">How It Works</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </Scrollspy>
            </nav>
            <a href="https://app.monstercampaigns.com/c/yismlgmgd8uw9zenwo7c/" target="_blank" rel="noopener noreferrer" className="contact-button smallred">Review My App...</a>
            </Fade>
          </div>
        </div>
        <Container>
        <Row className="align-middle" id="examples">
        <Col md={{ span: 6, order: 1 }} className="my-auto text-left mobile">
            <h2 className="tiempos-semi" style={{marginTop: 0}}><b>A Couple Examples…</b></h2>
        </Col>
        <Col md={{ span: 6, order: 2 }}>
            <img src={shadesOfBlue} alt="shades-of-blue" width={515} />
          </Col>
          <Col md={{ span: 6, order: 1 }} className="my-auto text-left">
            <h2 className="tiempos-semi desktop" style={{marginTop: 33}}><b>A Couple Examples…</b></h2>
            <p className="description"><span>Did you know Google made an additional<span className="highlighter"><b> $200 Million in a year </b></span>just by tweaking the color of their search result links by one shade of blue? That’s it! Turns out people subconsciously preferred clicking on a purplish-blue vs a greenish-blue. Who knew?</span></p>
          </Col>
        </Row>
        <Row className="align-middle" style={{marginTop: 108}}>
          <Col md>
          <img src={searsIllustration} alt="sears-catalogue-illustration" width={540} />
          </Col>
          <Col md className="my-auto text-left">
            <p className="description"><span>Or go back to the 1800's when Americans got their goods by mail-order. Nearly everyone had two catalogs – one from Montgomery Ward, and one from <span className="highlighter"><b>a new upstart, Sears Roebuck.</b></span><br /><br />
            One year Sears noticed that folks stacked both catalogs on their coffee table for easy access. So they decided to<span className="highlighter"><b> make their catalog  smaller,</b></span> causing people to stack it on top of their competitors. Shortly thereafter, sales skyrocketed.</span></p>
          </Col>
        </Row>
        <Row className="align-middle interlude" style={{marginBottom: 155}}>
          <Col className="my-auto">
            <span className="georgia"><i>The beauty of  small tweaks is that in addition to that massive ROI, they’re <b>cheaper</b>, they’re <b>faster</b>, and they’re <b>easier to implement</b>.</i></span>
          </Col>
        </Row>
        </Container>
        <div id="comparisons">
        <Container>
          <Row className="comparisons">
            <Col className="text-center">
             <h2 className="tiempos-semi"><b>Before & Afters...</b></h2>
            </Col>
          </Row>
        </Container>
        <div className="case-study">
          <Container>
            <Row>
              <Col className="text-center">
              <a href="https://www.avinew.com/"><img src={avinew} alt="avinew-logo" width={161} className="clients" /></a>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
              <p className="description"><span>Avinew is an insurtech company that initially met resistance when asking customers to log in to their Tesla accounts to provide usage data. We fixed that by putting the customers mind at ease.</span></p>
              </Col>
            </Row>
            <Row>
              <Col md className="text-right">
                <div className="text-center ml-auto overflowing">
                <p className="comparison-title">Before</p>
                <img src={avinewBefore} alt="avinew-comparison-before" width={404} className="overflowing before" />
                </div>
              </Col>
              <Col md="auto" className="text-center compare-arrow"><img src={compareArrow} alt="avinew-comparison-arrow" width={39} className="" /></Col>
              <Col md className="text-left">
                <div className="text-center overflowing">
                <p className="comparison-title">After</p>
                <img src={avinewAfter} alt="avinew-comparison-after" width={404} className="overflowing" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="roi tiempos-semi text-center">
              <h3 className="mx-auto"><b>This tweak increased brand trust by an unbelievable <div className="circled-avinew"><span className="avinew-roi">80%</span></div></b></h3>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="case-study">
          <Container>
            <Row>
              <Col className="text-center">
              <img src={n2uitive} alt="n2uitive-logo" width={161} className="clients" />
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
              <p className="description"><span>N2uitive’s users were forced to use a touch-tone phone dialing system to make, link, and record their client statements. We helped create a button inside their web app that dramatically simplified the process.</span></p>
              </Col>
            </Row>
            <Row>
              <Col md className="text-center overflowing">
                <p className="comparison-title">Before</p>
                <img src={n2uitiveBefore} alt="n2uitive-comparison-before" width={500} className="overflowing before" />
              </Col>
              <Col md="auto" className="text-center compare-arrow"><img src={compareArrow} alt="avinew-comparison-arrow" width={39} className="" /></Col>
              <Col md className="text-center overflowing">
                <p className="comparison-title">After</p>
                <img src={n2uitiveAfter} alt="n2uitive-comparison-after" width={500} className="overflowing" />
              </Col>
            </Row>
            <Row>
              <Col className="roi tiempos-semi text-center">
              <h3 className="mx-auto"><b>This tweak increased user satisfaction by a whopping <div className="circled-n2uitive"><span className="n2uitive-roi">57%!</span></div></b></h3>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="case-study">
          <Container>
            <Row>
              <Col className="text-center">
              <img src={fireside} alt="fireside-logo" width={161} className="clients" />
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
              <p className="description"><span>Fireside is a platform to explore the relationships in your life, with yourself and others. We identified an opportunity to tweak their communication system from a focus on text, to a focus on people.</span></p>
              </Col>
            </Row>
            <Row>
              <Col md className="text-center overflowing">
                <p className="comparison-title">Before</p>
                <img src={firesideBefore} alt="fireside-comparison-before" width={500} className="overflowing before" />
              </Col>
              <Col md="auto" className="text-center compare-arrow"><img src={compareArrow} alt="avinew-comparison-arrow" width={39} className="" /></Col>
              <Col md className="text-center overflowing">
                <p className="comparison-title">After</p>
                <img src={firesideAfter} alt="fireside-comparison-after" width={500} className="overflowing" />
              </Col>
            </Row>
            <Row>
              <Col className="roi tiempos-semi text-center">
              <h3 className="mx-auto"><b>This tweak netted a <div className="circled-fireside"><span className="fireside-roi">17%</span></div> increase in user engagement.</b></h3>
              </Col>
            </Row>
          </Container>
        </div>
        </div>
        <Container className="how-it-works" id="howitworks">
          <Row className="text-center">
            <Col className="how-it-title">
            <h2 className="tiempos-semi">How It Works</h2>
            <img src={howItWorks} alt="underline" width={96} />
            </Col>
          </Row>
          <Row className="align-middle">
            <Col md className="my-auto text-center explanation mobile">
              <div className="bullet">
                <img src={icOne} alt="bullet-one" className="align-middle my-auto" width={33} />
                <h3 className="d-inline-block align-middle my-auto mx-2"><b>RESEARCH</b></h3>
              </div>
            </Col>
            <Col className="text-center">
            <img src={researchIllustration} alt="research-illustration" width={366.5} />
            </Col>
            <Col md className="my-auto text-left explanation">
              <div className="bullet desktop">
                <img src={icOne} alt="bullet-one" className="align-middle my-auto" width={33} />
                <h3 className="d-inline-block align-middle my-auto mx-2"><b>RESEARCH</b></h3>
              </div>
              <p className="how-it"><span>Our scientist dives deep to understand your product and get insights via feedback from your customers/stakeholders/etc. It’s all then<span className="highlighter"> converted to quantifiable data </span>to get a baseline for measuring future tweaks against.</span></p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
            <img src={notchedBorder} alt="notched-border" className="notched-border" width={935.9} style={{paddingTop: 51, paddingBottom: 29.5}} />
            </Col>
          </Row>
          <Row className="align-middle">
            <Col md className="my-auto text-center explanation mobile">
              <div className="bullet" >
                <img src={icTwo} alt="bullet-two" className="" width={33} />
                <h3 className="d-inline-block align-middle my-auto mx-2"><b>PROTOTYPE</b></h3>
              </div>
            </Col>
            <Col md className="text-center">
            <img src={prototypeIllustration} alt="prototype-illustration" width={337} />
            </Col>
            <Col md className="my-auto text-left explanation">
              <div className="bullet desktop">
                <img src={icTwo} alt="bullet-two" className="" width={33} />
                <h3 className="d-inline-block align-middle my-auto mx-2"><b>PROTOTYPE</b></h3>
              </div>
              <p className="how-it"><span>A designer then takes those findings and designs a prototype to test in the field. We keep refining until the data shows us that the tweak will improve product performance<span className="highlighter"> by 11% </span>or more. (This is our insurance of success.)</span></p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
            <img src={notchedBorder} alt="notched-border" className="notched-border" width={935.9} style={{paddingTop: 52, paddingBottom: 33.5}} />
            </Col>
          </Row>
          <Row className="align-middle" style={{paddingBottom: 59}}>
            <Col md className="my-auto text-center explanation mobile">
              <div className="bullet">
               <img src={icThree} alt="bullet-three" className="" width={33} />
               <h3 className="d-inline-block align-middle my-auto mx-2"><b>IMPLEMENT</b></h3>
              </div>
            </Col>
            <Col md className="text-center">
              <img src={implementIllustration} alt="implement-illustration" width={384.27}/>
            </Col>
            <Col md className="my-auto text-left explanation">
              <div className="bullet desktop">
               <img src={icThree} alt="bullet-three" className="" width={33} />
               <h3 className="d-inline-block align-middle my-auto mx-2"><b>IMPLEMENT</b></h3>
              </div>
              <p className="how-it"><span>Finally, we help bring the modifications to life by being the support system for your engineers. Want development specs and technical recommendations on a silver platter? You got it.<span className="highlighter"> We’re not done until the tweak is launched.</span></span></p>
            </Col>
          </Row>
        </Container>
        <div id="testimonials">
          <Container className="overflow-hidden">
            <Row>
              <Col className="text-center">
              <h2 className="tiempos-semi"><b>What Others Say...</b></h2>
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
        <div className="contact-area">
          <Container id="contact">
              {/*<Row className="align-middle interlude">
              <Col className="my-auto">
                <span className="tiempos-med">
                  Are you looking to improve your bottom line?<br />
                  <span className="georgia-pro"><i><b>All it takes is one small tweak.</b></i></span>
                </span>
              </Col>
          </Row>*/}
              <Row className="text-center">
                <Col>
                <img src={contactHeader} className="d-block mx-auto" alt="How can we help?" width={403} />
                <img src={contactFlow} className="d-block mx-auto" id="contact-flow" alt="Flow Diagram" width={509} />
                </Col>
              </Row>
              <Row className="contact-boxes text-center">
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
              </Row>
          </Container>
        <div>
      </div>
      </div>
      <div id="footer">
        <Container>
        <Row>
          <Col className="text-center">
            <span className="georgia">Copyright © 2020 <b>small<i>tweaks</i></b>. <span style={{whiteSpace: "nowrap"}}>All rights reserved.</span></span>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
  }
}

export default App;
