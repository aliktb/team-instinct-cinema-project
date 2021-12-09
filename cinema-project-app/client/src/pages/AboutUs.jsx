import "../css/center.css";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardText,
  Button,
  List,
} from "reactstrap";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2 class="center">
          <strong>A Little Bit About QA Cinemas!...</strong>
        </h2>
        <div>
          <div>
            <h4>
              QA Cinemas have been providing you with action packed
              entertainment for over 20 years!
            </h4>
          </div>
        </div>
        <p>
          At QA Cinemas, just like all our film fanatics we love to indulge in
          the extraordinary and share our experiences.
        </p>
        <p>
          Since being established in 1999 we have invited over 2,000,000 film
          watchers and premiered over 1,500 films in our inhouse cinemas!
        </p>
        <p>
          We have 7 large screens which can accomodate up to 120 people each!
        </p>
        <p>Finished watching a film at QA Cinemas? Oh were not done...</p>
        <p>At our cinema we have also have a restaurant and arcade! </p>
        <p>So, why not join us for an action packed day!</p>
        <p>
          We believe that it is important to give back to the community and the
          next generation.<br></br> Our company set up our own charity in 2008
          which provides children with a chance to take up acting
        </p>
        <br />
        <img
          src="https://miro.medium.com/max/600/1*9y2sMFou3w-FjWBVt_2ibA.png"
          alt="ScrumLogo"
          class="center"
        />
        <p>
          The scrum framework is iteritive and will produce a potentially
          shippable increment at the end of every sprint. A potentially
          shippable increment means that it will add functionality on what was
          there previously, therefore adding value. The additional code should
          be "shippable" (it shouldn't be half broken, it should be ready to
          distribute).
        </p>
        <p>
          Within the Scrum framework you have a sprint, product backlog, sprint
          backlog.
        </p>
        <p>
          Once we decided the sprint and created our Jira board plus user
          stories we assigned these scrum roles within our team: Project Manager
          (PM) PM's manage projects and will overview expenses. They will also
          try to reduce risk on the project Product Owner (PO) PO's are the sole
          person responsible for managing the Product Backlog (i.e. the list of
          features to be worked on). Business Analyst (BA) Support the product
          owner by gathering requirements, provide guidance on what to build.
          They usually work across many products. Development Team A
          multi-disciplinary team usually comprised of software architects,
          designers, programmers and testers. Scrum Master (SM) Facilitates
          Scrum. The scrum master helps those outside the scrum team understand
          which interactions are beneficial. The scrum masters services the
          development team by removing impediments, facilitates meetings and
          coaches in self-organisation Stakeholder Anyone with an interest in or
          an influence on the product For more information please visit &#160;
          <a href="https://www.scrum.org">Scrum.Org</a>
          <br />
        </p>
      </div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Hamza Shah</CardTitle>

          <CardText>
            <List>
              <li>
                <a href="https://github.com/hamza12618">GitHub</a>
              </li>
              <li>QA Academy</li>
              <li>
                <a href="https://twitter.com/qa_ltd?lang=en">@QA_Ltd </a>
              </li>
            </List>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Hamid Mohammed</CardTitle>

          <CardText>
            <List>
              <li>
                <a href="https://github.com/HMohammed96">GitHub</a>
              </li>
              <li>QA Academy</li>
              <li>
                <a href="https://twitter.com/qa_ltd?lang=en">@QA_Ltd</a>
              </li>
            </List>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Eamon Moradi</CardTitle>

          <CardText>
            <List>
              <li>
                <a href="https://github.com/Eamon97">GitHub</a>
              </li>
              <li>QA Academy</li>
              <li>
                <a href="https://twitter.com/qa_ltd?lang=en">@QA_Ltd</a>
              </li>
            </List>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Adam Yusuf Mussa</CardTitle>

          <CardText>
            <List>
              <li>
                <a href="https://github.com/AMussa123">GitHub</a>
              </li>
              <li>QA Academy</li>
              <li>
                <a href="https://twitter.com/qa_ltd?lang=en">@QA_Ltd </a>
              </li>
            </List>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Ali Khattab</CardTitle>

          <CardText>
            <List>
              <li>
                <a href="https://github.com/Aliktb">GitHub</a>
              </li>
              <li>QA Academy</li>
              <li>
                <a href="https://twitter.com/qa_ltd?lang=en">@QA_Ltd </a>{" "}
              </li>
            </List>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Sean Fernyhough</CardTitle>

          <CardText>
            <List>
              <li>
                <a href="https://github.com/sean-fernyhough">GitHub</a>
              </li>
              <li>QA Academy</li>
              <li>
                <a href="https://twitter.com/qa_ltd?lang=en">@QA_Ltd </a>{" "}
              </li>
            </List>
          </CardText>
        </CardBody>
      </Card>
      v
    </div>
  );
};

export default AboutUs;
<div></div>;
