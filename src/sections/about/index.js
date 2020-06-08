import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram ,faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a Full Stack web developer working from home</h3>
                            <div className="separator" />
                            <p>Hello. glad to meet you at here my website. 
                                 <br/> It's wonderful day for your business
                                 <br/>
                                 <br/>I would like to introduce about my profile, I started programing development in 2010 years, and I had worked in Mexico and USA as system engineer and system programmer, also additionally, I had lived in Australia within Australia peoples and multinational countries peoples, and had worked in multinational global companies.
                                 <br/>
                                 <br/>For your successful internationally global business, I would like to provide multi languages(For example: English, Korea other etc) / SEO optimization for web browser / Responsive web design for various screen sizes such as like Mobile, Tablet, PC
                                 <br/>
                                 <br/>And I would try to registration your business in global world countries on IOS apple app store and Android Google play store that international global customers can uses your business

                                 <br/>Also I would try kindly and wholeheartedly to technical support ,after service(AS)
                                 <br/>
                                 <br/>Thank you for your interesting and for your time about me
                                 <br/>
                                 <br/>Yours sincerely.
                                 <br/>Best Regards.</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://www.github.com/skykim1016')}/>
                                {/* <FontAwesomeIcon icon={faTwitter} className="social_icon" onClick={() => window.open('https://www.twitter.com')} />
                                <FontAwesomeIcon icon={faYoutube} className="social_icon" onClick={() => window.open('https://www.youtube.com')} /> */}
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/haneul-kim-860691142/')} />
                                <FontAwesomeIcon icon={faInstagram} className="social_icon" onClick={() => window.open('https://www.instagram.com/skykim88')} /> 
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="Full Stack" value={95} delay={1100} />
                                <Progress name="NodeJS" value={80} delay={1100} />
                                <Progress name="Express" value={80} delay={1100} />
                                <Progress name="MongoDB" value={70} delay={1100} />
                                <Progress name="React / ReactNative" value={80} delay={1100} />
                                <Progress name="AWS / Linux" value={80} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero