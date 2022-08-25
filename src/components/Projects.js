import { Container, Row, Col, Tab} from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {

  const hack_neurons = {
    title: "Hacking Neural Networks ",
    description: "Scenery classification model determining safe emergency landing areas. " +
        "This example shows how a backdoor can be inserted into the model to provide a detrimental outcome.",
    url: "https://www.youtube.com/embed/BPsiS0C0TVI",
  }
  const jungle_game = {
    title: "Java Jungle GUI Game",
    description: "2-D, GUI game built using in Java. " +
      "This two-dimensional game has been created utilising Object-Orientated Programming principles and " +
      "the Model-View-Controller (MVC) architecture. It enables player character customisation and two-player.",
    url: "https://www.youtube.com/embed/TQ1GdjonU44"
    }
  const water_bowser = {
    title: "Water Bowser Web Application",
    description: "Database application for water bowser companies. Built with PHP and MySQL. " +
      "The platform includes functions for bowser deployment, monitoring and other operational services " +
      "including bowser loaning, invoicing, and maintenance. As shown in the video, Google Maps API's are used to " +
      "enable features such as marker placement and geo-location.",
    url: "https://www.youtube.com/embed/E5evWfkxJos",
    }
  const flight_sched = {
    title: "Flight Scheduling App",
    description: "Flight scheduling application built in Java, for a Data Structures and Algorithms assignment. " +
      "Includes Binary Search Tree, Graphs, Queues and sorting algorithms such as Radix sort.",
    url: "https://www.youtube.com/embed/0YRO22eg8Gs",
    }

  const social_media = {
    title: "Social Media Webpage",
    description: "A social media web application built with PHP and MySQL. Contains post feed, " +
      "friend direct-messaging, events, and marketplace.",
    url: "https://www.youtube.com/embed/d55tFVT28ds",
    }

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
                            <iframe width="560" height="315" src={hack_neurons.url}
                                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
                          encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                           <h5>{hack_neurons.description}</h5>
                       </div>

                       <div className="col">
                            <iframe width="560" height="315" src={hack_neurons.url}
                                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
                          encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                           <h5>{hack_neurons.description}</h5>
                       </div>
                      </Row>
                        <br />
                      <Row>

                    <div className="col">
                        <iframe width="560" height="315" src={jungle_game.url}
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
                      encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <h5>{jungle_game.description}</h5>
                   </div>

                   <div className="col">
                        <iframe width="560" height="315" src={water_bowser.url}
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
                      encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                       <h5>{water_bowser.description}</h5>
                   </div>
                  </Row>
                    <br />
                  <Row>

                    <div className="col">
                        <iframe  width="560" height="315" src={flight_sched.url}
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
                      encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <h5>{flight_sched.description}</h5>
                   </div>

                   <div className="col">
                        <iframe width="560" height="315" src={social_media.url}
                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
                      encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                       <h5>{social_media.description}</h5>
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