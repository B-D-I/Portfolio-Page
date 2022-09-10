import { useState} from "react";
import {Container, Row} from "react-bootstrap";
import 'animate.css';
import hackNeuron from '../assets/pdf/hacking_neurons.pdf';
import deeplearn from '../assets/pdf/AI_Assign.pdf';
import datastruct from '../assets/pdf/DataStructures&Algorithms.pdf';

export const Profile = () => {
  const [text, setText] = useState('');

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
            <div id="text_area">
          <h1>Nathan Hewett: Portfolio</h1>
          <p id="profile" >
                  I am a graduate software engineer and have developed various applications including;
                  GUI games, deep learning models, full-stack web applications, CLI tools, and IoT Arduino projects.
                  I also have experience with unit and automated testing tools, such as;
                  TestNG, JUnit and Selenium, and have gained knowledge of concepts including;
                  object-orientated programming, data structures & algorithms, data analytics, and cyber security.
              Programming languages I have experience with include; Java, Python, C++, JavaScript, and PHP.
                  <br /><br />
              <h2>Reports:</h2>
                <li><a href={hackNeuron} target="_blank">Hacking Neurons: An analysis of deep learning vulnerabilities</a></li>
                <li><a href={deeplearn} target="_blank">Deep Learning: Image Classification using a Convolutional Neural Network and Support Vector
                    Machine </a></li>
                <li><a href={datastruct} target="_blank">Data Structures & Algorithms: Flight Scheduling Application </a></li>
                </p>
          </div>
        </Row>
      </Container>
    </section>
  )
}