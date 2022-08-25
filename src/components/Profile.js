import { useState, useEffect } from "react";
import {Col, Container, Row} from "react-bootstrap";
import 'animate.css';

export const Profile = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(500 - Math.random() * 300);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Nathan Hewett: Portfolio" ];
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 2) : fullText.substring(0, text.length + 2);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={13} md={7} xl={8}>
            <h1> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Nathan Hewett: Portfolio" ]'><span className="wrap">{text}</span></span></h1>
                <p id="profile" className="tagline">
                  I am a graduate software engineer and have developed various applications including;
                  GUI games, deep learning models, full-stack web applications, CLI tools, and IoT Arduino projects.
                  I also have experience with unit and automated testing tools, such as;
                  TestNG, JUnit and Selenium, and have gained knowledge of concepts including;
                  object-orientated programming, data structures & algorithms, data analytics, and cyber security.
                  <br /><br />
                  Covid X-Ray Image Classification: Comparing A Convolution Neural Network And Support Vector Machine:
                  <a href="https://colab.research.google.com/drive/1njoVp-RxlcpvlyWVjODnNblqSH6oE9Vo?usp=sharing"> Link</a>
                </p>
            <br />
          </Col>

          <Col id="languages" xs={10} md={4} xl={3} className="tagline">
                <br />
                  <li>
                    Java
                  </li>
                   <li>
                    Python
                  </li>
                   <li>
                    JavaScript
                  </li>
                   <li>
                    PHP
                  </li>
                    <li>
                    C++
                  </li>
              <br />
          </Col>
        </Row>
      </Container>
    </section>
  )
}