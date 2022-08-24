import { Container, Row, Col, Tab} from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={10}>
                <h2>Projects</h2>
                  <br />
                <Tab.Container id="projects-tabs" defaultActiveKey="first">

                    <Tab.Pane eventKey="first">
                      <Row>
                        <div className="col">
                          <div className="column_one">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/TQ1GdjonU44"
                                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
                          encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                       </div>
                     </div>

                       <div className="col">
                          <div className="column_two">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/E5evWfkxJos"
                                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
                          encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                       </div>
                     </div>

                      </Row>
                        <br />
                      <Row>
                        <div className="col">
                          <div className="column_three">
                            <iframe  width="560" height="315" src="https://www.youtube.com/embed/0YRO22eg8Gs"
                                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
                          encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                       </div>
                     </div>

                       <div className="col">
                          <div className="column_four">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/d55tFVT28ds"
                                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
                          encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                       </div>
                     </div>

                      </Row>

                    </Tab.Pane>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}