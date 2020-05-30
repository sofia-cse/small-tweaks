import React from 'react';
import logo from './img/logo.svg';
import hero from './img/hero-graphic@2x.png';
import satellite from './img/satellite-illustration@2x.png';
import shadesOfBlue from './img/shades-of-blue-illustration@2x.png';
import searsIllustration from './img/sears-illustration@2x.png';
import howItWorks from './img/how-it-works-underline@2x.png';
import icOne from './img/ic-one@2x.png';
import icTwo from './img/ic-two@2x.png';
import icThree from './img/ic-three@2x.png';
import n2uitiveQuote from './img/n2uitive-quote@2x.png';
import avinewQuote from './img/avinew-quote@2x.png';
import firesideQuote from './img/fireside-quote@2x.png';
import researchIllustration from './img/research-illustration@2x.png';
import prototypeIllustration from './img/prototype-illustration@2x.png';
import implementIllustration from './img/implement-illustration@2x.png';
import notchedBorder from './img/notched-border@2x.png';
import jaggedBorder from './img/jagged-line@2x.png';
import firesideComparison from './img/fireside-comparison@2x.png';
import fireside from './img/fireside@2x.png';
import avinew from './img/avinew-logo@2x.png';
import avinewComparison from './img/avinew-comparison@2x.png';
import n2uitive from './img/n2uitive@2x.png';
import n2uitiveComparison from './img/n2uitive-comparison@2x.png';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container fluid>
      <Row>
      <Navbar bg="light" expand="" className="">
        <Col></Col>
        <Col>
        <Navbar.Brand href="#home" className=""><img src={logo} alt="logo" className="nav-logo" /></Navbar.Brand>
        </Col>
        <Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#intro">Intro</Nav.Link>
          <Nav.Link href="#examples">Examples</Nav.Link>
          <Nav.Link href="#howitworks">How It Works</Nav.Link>
          <Nav.Link href="#comparisons">Before & Afters</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Col>
      </Navbar>
      </Row>
      <Row>
        <img src={hero} className="hero-image" alt="hero" width={1920} />
      </Row>
      <Container id="intro">
      <Row className="align-middle" style={{paddingTop: 43}}>
        <Col>
          <img src={satellite} className="satellite" alt="satellite-graphic" />
        </Col>
        <Col className="my-auto text-left">
          <p className="description" style={{fontSize: 25}}><span>
          <span className="highlighter"><b>A small change can have a big impact.</b></span> So we research, prototype, and implement product modifications, but with a twist… we only focus on small tweaks.
          </span></p>
        </Col>
      </Row>
      <Row className="align-middle interlude">
        <Col className="my-auto">
          <span className="georgia"><i>We’ve found that if you can locate the right areas to improve, that many times just one small tweak – <b>done the right way</b> – can get you a massive ROI.</i></span>
        </Col>
      </Row>
      <Row className="align-middle" id="examples">
        <Col className="my-auto text-left">
        <h2 className="georgia"><b>A Couple Examples…</b></h2>
        <p className="description"><span>Back in 2010 Google made upwards of <span className="highlighter"><b>$200,000,000 in a year</b></span> just by tweaking the color of their search result links by one shade of blue. That’s it! Turns out people subconsciously preferred clicking on more of a purplish-blue vs a greenish-blue. Who knew?</span></p>
        </Col>
        <Col>
        <img src={shadesOfBlue} alt="shades-of-blue" width={515} />
        </Col>
      </Row>
      <Row className="align-middle" style={{paddingTop: 52, paddingBottom: 54}}>
        <Col>
        <img src={searsIllustration} alt="sears-catalogue-illustration" width={540} />
        </Col>
        <Col className="my-auto text-left">
          <p className="description"><span>And you don’t have to be some big tech company for small tweaks to work. Go all the way back to the 1800s when Americans got their goods by mail-order. Nearly everyone had two catalogs – one from Montgomery Ward, and one from <span className="highlighter"><b>an upstart called Sears Roebuck.</b></span><br /><br />
          Well one year Sears noticed that folks stacked both catalogs on their coffee table for easy access. So they decided to <span className="highlighter"><b>make their catalog smaller</b></span> which caused people to stack it on top of their competitors, and in turn reach for it first. Shortly thereafter, their sales skyrocketed.</span></p>
        </Col>
      </Row>
      <Row className="align-middle interlude">
        <Col className="my-auto">
          <span className="georgia"><i>The beauty of small tweaks is that in addition to having that massive ROI, they’re <b>cheaper</b>, they’re <b>faster</b>, and they’re <b>easier to implement</b>.</i></span>
        </Col>
      </Row>
      </Container>
      <Container className="how-it-works" id="howitworks">
        <Row>
          <Col className="how-it-title">
          <h2 className="georgia"><b>How It Works</b></h2>
          <img src={howItWorks} alt="underline" width={96} />
          </Col>
        </Row>
        <Row className="align-middle">
          <Col>
          <img src={researchIllustration} alt="research-illustration" width={366.5} />
          </Col>
          <Col className="my-auto text-left">
            <img src={icOne} alt="bullet-one" className="bullet" width={33} />
            <h3 className="georgia d-inline-block"><b>Research</b></h3>
            <p className="how-it description"><span>We dive deep to understand your product and get insights by talking to and getting feedback from your customers/clients/stakeholders/market/etc. It’s all then converted to <b>quantifiable data</b> to determine a baseline for measuring future tweaks against.</span></p>
          </Col>
        </Row>
        <Row>
          <Col>
          <img src={notchedBorder} alt="notched-border" width={935.9} style={{paddingTop: 27.5, paddingBottom: 29.5}} />
          </Col>
        </Row>
        <Row className="align-middle">
          <Col>
          <img src={prototypeIllustration} alt="prototype-illustration" width={337} />
          </Col>
          <Col className="my-auto text-left">
            <img src={icTwo} alt="bullet-two" className="bullet" width={33} />
            <h3 className="georgia d-inline-block"><b>Prototype</b></h3>
            <p className="how-it description"><span>We then take those findings and design a prototype to test in the field. We keep refining until the data shows us that the tweak will <b>improve product performance by 11% or more.</b> (This is our insurance of success.)</span></p>
          </Col>
        </Row>
        <Row>
          <Col>
          <img src={notchedBorder} alt="notched-border" width={935.9} style={{paddingTop: 52, paddingBottom: 33.5}} />
          </Col>
        </Row>
        <Row className="align-middle" style={{paddingBottom: 18}}>
          <Col>
          <img src={implementIllustration} alt="implement-illustration" width={384.27}/>
          </Col>
          <Col className="my-auto text-left">
            <img src={icThree} alt="bullet-three" className="bullet" width={33} />
            <h3 className="georgia d-inline-block"><b>Implement</b></h3>
            <p className="how-it description"><span>Finally, we actually help you bring the tweak/modifications to life by being the support system for your engineers. Want development specs and technical recommendations on a silver platter? You got it. <b>We’re not done until the tweak is launched.</b></span></p>
          </Col>
        </Row>
      </Container>
      <Container id="comparisons">
        <Row className="comparisons">
        <h2 className="georgia"><b>Before & Afters...</b></h2>
        </Row>
      </Container>
      <Row className="case-study">
        <Container>
          <Row>
            <Col>
            <img src={avinew} alt="avinew-logo" width={161} className="clients" />
            </Col>
          </Row>
          <Row>
            <Col>
            <p className="description"><span>Avinew is an auto-insurance tech company that saves you money when your Tesla’s autopilot mode is on. They initially met resistance when asking customers for their Tesla.com credentials to log in. We fixed that.</span></p>
            </Col>
          </Row>
          <Row>
            <img src={avinewComparison} alt="avinew-comparison" width={1013} className="overflowing" />
          </Row>
          <Row>
            <Col className="roi georgia">
            <h3><b>This tweak increased brand trust by an unbelievable <span className="avinew-roi">80%</span></b></h3>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="case-study">
        <Container>
          <Row>
            <Col>
            <img src={n2uitive} alt="n2uitive-logo" width={161} className="clients" />
            </Col>
          </Row>
          <Row>
            <Col>
            <p className="description"><span>Their software allows insurance adjusters, paralegals, etc to take and record statements over the phone. The pain point was that users were forced to use a touch-tone phone dialing system to make the call, link the call, and record the call. We helped create a button inside their web app that did this for them instead.</span></p>
            </Col>
          </Row>
          <Row>
            <img src={n2uitiveComparison} alt="n2uitive-comparison" width={1230} className="overflowing" />
          </Row>
          <Row>
            <Col className="roi georgia">
            <h3><b>Usage rates went up 16% & satisfaction went up a whopping <span className="n2uitive-roi">57%!</span></b></h3>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="case-study">
        <Container>
          <Row>
            <Col>
            <img src={fireside} alt="fireside-logo" width={161} className="clients" />
            </Col>
          </Row>
          <Row>
            <Col>
            <p className="description"><span>Fireside is a platform to explore the relationships in your life, with yourself and others. We identified an opportunity to tweak their communication system from a focus on text, to a focus on people.</span></p>
            </Col>
          </Row>
          <Row>
            <img src={firesideComparison} alt="fireside-comparison" width={1230} className="overflowing" />
          </Row>
          <Row>
            <Col className="roi georgia">
            <h3><b>This tweak netted a <span className="fireside-roi">24% increase</span> in user engagement overnight.</b></h3>
            </Col>
          </Row>
        </Container>
      </Row>
      </Container>
      <Container style={{paddingTop: 98, paddingBottom: 70}} id="testimonials">
        <Row>
          <img src={n2uitiveQuote} alt="quote" />
        </Row>
        <Row style={{paddingTop: 29, paddingBottom: 28}}>
          <img src={avinewQuote} alt="quote" />
        </Row>
        <Row>
          <img src={firesideQuote} alt="quote" />
        </Row>
      </Container>
      <Row className="contact-area">
        <Container id="contact">
          <Row className="align-middle interlude">
          <Col className="my-auto">
            <span className="georgia"><i>When it comes to developing new products or services, a lot of businesses don’t have the budget they used to. What you need is a tool to get the most out of what you’ve already got. <b>Let us be that tool for you.</b></i></span>
          </Col>
          </Row>
          <Row>
            <Col>
            <h2 className="georgia"><b>Pick One...</b></h2>
            </Col>
          </Row>
          <Row className="contact-boxes">
            <Col>
              <p className="mx-auto">I have a question.</p>
            </Col>
            <Col>
              <p className="mx-auto">I'd like to chat with someone.</p>
            </Col>
            <Col>
              <p className="mx-auto">Deep down, I just want to be happy.</p>
            </Col>
          </Row>
          <Row className="contact-buttons">
            <Col>
              <p className="mx-auto">Go</p>
            </Col>
            <Col>
              <p className="mx-auto">Go</p>
            </Col>
            <Col>
              <p className="mx-auto">Go</p>
            </Col>
          </Row>
        </Container>
        <Row className="jagged">
        <img src={jaggedBorder} alt="jagged-border" />
        </Row>
      </Row>
    </div>
  );
}

export default App;
