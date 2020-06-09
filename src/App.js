import React, { Component } from 'react';
import heroForeground from './img/hero-chart@2x.png';
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
import ContactForm3 from "./components/ContactForm3";



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideContact1: false,
      showHideContact2: false,
      showHideContact3: false
    };
    this.hideComponent = this.hideComponent.bind(this);
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
      case "showHideContact3":
        this.setState({ showHideContact3: !this.state.showHideContact3 });
        break;
      default:
        this.setState(null);
    }
  }

  

  render() {
  const { showHideContact1, showHideContact2, showHideContact3 } = this.state;
  return (
    <div className="">
        <SmallTweaksNavBar />
        <Jumbotron id="hero" className="py-0" fluid>
          <Container className="mx-auto px-0">
            <Image src={heroForeground} width={1080} />
            <h1 className="mx-auto">We help businesses improve their products by <span style={{textDecoration: 'underline'}}>11%</span> (or more).</h1>
          </Container>
        </Jumbotron>
        <Container id="intro">
        <Row className="align-middle" style={{paddingTop: 43}}>
          <Col md>
            <img src={satellite} className="satellite" alt="satellite-graphic" width={555}/>
          </Col>
          <Col md className="my-auto text-left">
            <p className="description" style={{fontSize: 25}}><span>
            <span className="highlighter"><b>A  small change can have a big impact.</b></span> That’s why we research, prototype, and implement product modifications, with a twist… we only focus on small tweaks.
            </span></p>
          </Col>
        </Row>
        <Row className="align-middle interlude">
          <Col className="my-auto">
            <span className="georgia"><i>We’ve found that if you can locate the right areas to improve, that many times just one  small tweak – <b>done the right way</b> – can get you a massive ROI.</i></span>
          </Col>
        </Row>
        <Row className="align-middle" id="examples">
        <Col md={{ span: 6, order: 2 }}>
            <img src={shadesOfBlue} alt="shades-of-blue" width={515} />
          </Col>
          <Col md={{ span: 6, order: 1 }} className="my-auto text-left">
            <h2 className="georgia" style={{marginTop: 33}}><b>A Couple Examples…</b></h2>
            <p className="description"><span>Back in 2010 Google made upwards of <span className="highlighter"><b>$200,000,000 in a year</b></span> just by tweaking the color of their search result links by one shade of blue. That’s it! Turns out people subconsciously preferred clicking on more of a purplish-blue vs a greenish-blue. Who knew?</span></p>
          </Col>
        </Row>
        <Row className="align-middle" style={{paddingTop: 52, paddingBottom: 54}}>
          <Col md>
          <img src={searsIllustration} alt="sears-catalogue-illustration" width={540} />
          </Col>
          <Col md className="my-auto text-left">
            <p className="description"><span>And you don’t have to be some big tech company for  small tweaks to work. Go all the way back to the 1800s when Americans got their goods by mail-order. Nearly everyone had two catalogs – one from Montgomery Ward, and one from <span className="highlighter"><b>an upstart called Sears Roebuck.</b></span><br /><br />
            One year Sears noticed that folks stacked both catalogs on their coffee table for easy access. So they decided to <span className="highlighter"><b>make their catalog  smaller</b></span> which caused people to stack it on top of their competitors, and in turn reach for it first. Shortly thereafter, their sales skyrocketed.</span></p>
          </Col>
        </Row>
        <Row className="align-middle interlude">
          <Col className="my-auto">
            <span className="georgia"><i>The beauty of  small tweaks is that in addition to having that massive ROI, they’re <b>cheaper</b>, they’re <b>faster</b>, and they’re <b>easier to implement</b>.</i></span>
          </Col>
        </Row>
        </Container>
        <Container className="how-it-works" id="howitworks">
          <Row className="text-center">
            <Col className="how-it-title">
            <h2 className="georgia"><b>How It Works</b></h2>
            <img src={howItWorks} alt="underline" width={96} />
            </Col>
          </Row>
          <Row className="align-middle">
            <Col className="text-center explanation">
            <img src={researchIllustration} alt="research-illustration" width={366.5} />
            </Col>
            <Col md className="my-auto text-left explanation">
              <div className="bullet">
                <img src={icOne} alt="bullet-one" className="align-middle my-auto" width={33} />
                <h3 className="d-inline-block align-middle my-auto mx-2"><b>RESEARCH</b></h3>
              </div>
              <p className="how-it"><span>We dive deep to understand your product and get insights by talking to and getting feedback from your <span>customers/stakeholders/market/etc.</span> It’s all then converted to <b>quantifiable data</b> to determine a baseline for measuring future tweaks against.</span></p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
            <img src={notchedBorder} alt="notched-border" width={935.9} style={{paddingTop: 27.5, paddingBottom: 29.5}} />
            </Col>
          </Row>
          <Row className="align-middle">
            <Col md className="text-center explanation">
            <img src={prototypeIllustration} alt="prototype-illustration" width={337} />
            </Col>
            <Col md className="my-auto text-left explanation">
              <div className="bullet" style={{marginTop: 23}}>
                <img src={icTwo} alt="bullet-two" className="" width={33} />
                <h3 className="d-inline-block align-middle my-auto mx-2"><b>PROTOTYPE</b></h3>
              </div>
              <p className="how-it"><span>We then take those findings and design a prototype to test in the field. We keep refining until the data shows us that the tweak will <b>improve product performance by 11% or more.</b> (This is our insurance of success.)</span></p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
            <img src={notchedBorder} alt="notched-border" width={935.9} style={{paddingTop: 52, paddingBottom: 33.5}} />
            </Col>
          </Row>
          <Row className="align-middle" style={{paddingBottom: 18}}>
            <Col md className="text-center explanation">
            <img src={implementIllustration} alt="implement-illustration" width={384.27}/>
            </Col>
            <Col md className="my-auto text-left explanation">
              <div className="bullet">
               <img src={icThree} alt="bullet-three" className="" width={33} />
               <h3 className="d-inline-block align-middle my-auto mx-2"><b>IMPLEMENT</b></h3>
              </div>
              <p className="how-it"><span>Finally, we actually help you bring the modifications to life by being the support system for your engineers. Want development specs and technical recommendations on a silver platter? You got it. <b>We’re not done until the tweak is launched.</b></span></p>
            </Col>
          </Row>
        </Container>
        <Container id="comparisons">
          <Row className="comparisons">
            <Col>
             <h2 className="georgia"><b>Before & Afters...</b></h2>
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
              <p className="description"><span>Avinew is an insurtech company that helps you save money on auto insurance when you use automated driving systems like Tesla’s Autopilot. They initially met resistance when asking customers to log in to their Tesla accounts to provide usage data. We fixed that.</span></p>
              </Col>
            </Row>
            <Row>
              <Col md className="text-center overflowing">
                <p className="comparison-title">Before</p>
                <img src={avinewBefore} alt="avinew-comparison-before" width={404} className="overflowing before" />
              </Col>
              <Col md="auto" className="text-center compare-arrow"><img src={compareArrow} alt="avinew-comparison-arrow" width={39} className="" /></Col>
              <Col md className="text-center overflowing">
                <p className="comparison-title">After</p>
                <img src={avinewAfter} alt="avinew-comparison-after" width={404} className="overflowing" />
              </Col>
            </Row>
            <Row>
              <Col className="roi georgia text-center">
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
              <p className="description"><span>Their software allows insurance adjusters, paralegals, etc to take and record statements over the phone. The pain point was that users were forced to use a touch-tone phone dialing system to make the call, link the call, and record the call. We helped create a button inside their web app that did this for them instead.</span></p>
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
              <Col className="roi georgia text-center">
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
              <Col className="roi georgia text-center">
              <h3 className="mx-auto"><b>This tweak netted a <span className="fireside-roi"><div className="circled-fireside">17%</div> increase</span> in user engagement overnight.</b></h3>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="testimonials">
          <Container>
            <Row>
              <Col className="text-center">
              <h2 className="georgia"><b>How We’ve Helped...</b></h2>
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
            <Row style={{paddingTop: 29, paddingBottom: 28}}>
              <Col className="text-right">
                <div className="testimonial brooke">
                  <p className="m-0">
                  “What I liked the most about working with their team was the confidence they gave us in the user experience. We knew changes being made would be <b>successful before they even launched</b>.”
                  </p>
                  <div className="brooke-arrow">
                  </div>
                  </div>
                  <div className="d-inline-block shoutout-right">
                  <div className="d-inline-block align-middle my-auto">
                    <h5 className="my-0 client-name">Brooke Lias</h5>
                    <span className="client-title">Chief Marketing Officer <span className="separator">•</span> Avinew</span>
                  </div>
                <img src={brookeLias} alt="Brooke Lias" width={68} className=""/>
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
              <Row className="align-middle interlude">
              <Col className="my-auto">
                <span className="georgia"><i>When it comes to developing new products or services, a lot of businesses don’t have the budget they used to. What you need is a tool to get the most out of what you’ve already got. <b>Let us be that tool for you.</b></i></span>
              </Col>
              </Row>
              <Row className="text-center">
                <Col>
                <h2 className="georgia" style={{marginTop: 27}}><b>Pick One...</b></h2>
                </Col>
              </Row>
              <Row className="contact-boxes text-center">
                <Col md className="contact-1">
                  {!showHideContact1 && <h3 className="mx-auto">I have a question.<span className="vertical-spacer"><br />&nbsp;</span></h3>}
                  {!showHideContact1 && 
                    <button className="mx-auto contact-button" onClick={() => this.hideComponent("showHideContact1")}>
                      Go
                    </button>}
                  {showHideContact1 && <Contact1 />}
                </Col>
                <Col md className="contact-2">
                  {!showHideContact2 && <h3 className="mx-auto">I'd like to chat with someone.</h3>}
                  {!showHideContact2 && 
                  <button className="mx-auto contact-button" onClick={() => this.hideComponent("showHideContact2")}>
                    Go
                  </button>}
                  {showHideContact2 && <ContactForm2 />}
                </Col>
                <Col md className="contact-3">
                  {!showHideContact3 && <h3 className="mx-auto">Deep down, I just want to be happy.</h3>}
                  {!showHideContact3 && <button className="mx-auto contact-button" onClick={() => this.hideComponent("showHideContact3")}>
                    Go
                  </button>}
                  {showHideContact3 && <ContactForm3 />}
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
