import { useState } from "react";
import {
  DashboardContainer,
  CardContainer,
  AccordionBody,
  AccordionStyledContainer,
} from "../index.styled";
import avatar from "../../../assets/images/dashboardImage.png";
import { NavLink } from "react-router-dom";
import ArrowLeft from "../../../assets/svg/arrowLeft";
import { PlayIcon } from "../../../assets/svg/play";
import { CloseIcon } from "../../../assets/svg/close";
import { CorrectIcon } from "../../../assets/svg/correct";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { FaChevronDown } from "react-icons/fa";
import photo1 from "../../../assets/images/item1.png";
import photo2 from "../../../assets/images/item2.png";
import photo3 from "../../../assets/images/item3.png";

const ManageStudentsReport = (props) => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <DashboardContainer>
      <div className="courses__tab">
        <h1> Reports: </h1>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/reports"
        >
          Report Card
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeI" : "")}
          to="/reports/instructor"
        >
          My Courses
        </NavLink>
      </div>

      <CardContainer>
        <div className="header__section">
          <h1>
            <ArrowLeft /> Test 1
          </h1>
        </div>
        <AccordionStyledContainer>
          <Accordion transition transitionTimeout={200}>
            <AccordionItem
              header={
                <>
                  {"Question 1"} <FaChevronDown className="chevron" />
                </>
              }
              initialEntered
            ></AccordionItem>
            <AccordionItem
              header={
                <>
                  {"Question 2: Wordplay"} <FaChevronDown className="chevron" />
                </>
              }
            >
              <AccordionBody>
                <div className="question__section">
                  <h2> Word play </h2>
                  <div className="answer__row">
                    <div className="answer__box">
                      <div className="answer__wrapper">My Answer</div>
                      <div className="answer__play">
                        <PlayIcon />
                      </div>
                    </div>
                    <div className="answer__box">
                      <div className="answer__wrapper">Correct Answer</div>
                      <div className="answer__play">
                        <PlayIcon />
                      </div>
                    </div>
                    <div className="answer__box">
                      <div className="answer__wrapper">Grade</div>
                      <div className="answer__grade_green fw-bold"> 95%</div>
                    </div>
                  </div>

                  <h3> Comments </h3>

                  <div className="comments__section">
                    <div className="comments__details">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis harum quisquam eius sed odit fugiat iusto fuga
                      praesentium optio, eaque rerum! Provident similique
                      accusantium nemo autem.
                    </div>

                    <div className="social__handle">
                      linkedin.com/in/ayobami-paul-a97607180/{" "}
                    </div>
                    <div className="media__contents">
                      <div className="media__box">
                        <img src={photo1} alt="" />
                        <p> image1528_3t2...</p>
                      </div>
                      <div className="media__box">
                        <img src={photo2} alt="" />
                        <div className="has__video">Play Video </div>
                        <p> image1528_3t2...</p>
                      </div>
                      <div className="media__box">
                        <img src={photo3} alt="" />
                        <p> image1528_3t2...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem
              header={
                <>
                  {"Question 3: Essay"} <FaChevronDown className="chevron" />
                </>
              }
            >
              <AccordionBody>
                <div className="question__section">
                  <h2>
                    Write an essay on the effect of language in France Ecconomy
                  </h2>
                  <div className="answer__column">
                    <div className="answer__box_col">
                      <div className="answer__wrapper">My Answer</div>
                      <div className="answer__details">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Maxime mollitia, molestiae
                        quas vel sint commodi repudiandae consequuntur
                        voluptatum laborum numquam blanditiis harum quisquam
                        eius sed odit fugiat iusto fuga praesentium optio, eaque
                        rerum! Provident similique accusantium nemo autem.
                      </div>
                    </div>
                    <div className="answer__box_col">
                      <div className="answer__wrapper">Correct Answer</div>
                      <div className="answer__details">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Maxime mollitia, molestiae
                        quas vel sint commodi repudiandae consequuntur
                        voluptatum laborum numquam blanditiis harum quisquam
                        eius sed odit fugiat iusto fuga praesentium optio, eaque
                        rerum! Provident similique accusantium nemo autem.
                      </div>
                    </div>
                    <div className="answer__box">
                      <div className="answer__wrapper">Grade</div>
                      <div className="answer__grade_red fw-bold"> 15%</div>
                    </div>
                  </div>
                  <h3> Comments </h3>
                  <p className="no-comment"> No Comment</p>
                </div>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem
              header={
                <>
                  {"Question 4: Dialogue"} <FaChevronDown className="chevron" />
                </>
              }
            >
              <AccordionBody>
                <div className="question__section">
                  <h2> Word play </h2>
                  <div className="answer__column">
                    <div className="answer__box_row mt-20">
                      <div className="answer__box">
                        <div className="answer__wrapper_other">Question </div>
                        <div className="answer__play_primary">
                          Would you like tea or coffee{" "}
                          <PlayIcon fill={"#ffffff"} />
                        </div>
                      </div>
                    </div>
                    <div className="answer__box_row">
                      <div className="answer__box">
                        <div className="answer__wrapper_other">My Answer</div>
                        <div className="answer__play_secondary">
                          I want to eat pizza next <PlayIcon />
                        </div>
                        <div className="answer__grade_red">
                          Wrong <CloseIcon />
                        </div>
                      </div>
                    </div>
                    <div className="answer__box_row">
                      <div className="answer__box">
                        <div className="answer__wrapper_other">
                          Correct Answer
                        </div>
                        <div className="answer__play_secondary">
                          I want to eat pizza next <PlayIcon />
                        </div>
                      </div>
                    </div>
                    <div className="answer__box_row mt-20">
                      <div className="answer__box">
                        <div className="answer__wrapper_other">Question </div>
                        <div className="answer__play_primary">
                          Would you like tea or coffee{" "}
                          <PlayIcon fill={"#ffffff"} />
                        </div>
                      </div>
                    </div>
                    <div className="answer__box_row">
                      <div className="answer__box">
                        <div className="answer__wrapper_other">My Answer</div>
                        <div className="answer__play_secondary">
                          I want to eat pizza next <PlayIcon />
                        </div>
                        <div className="answer__grade_green">
                          Correct <CorrectIcon />
                        </div>
                      </div>
                    </div>

                    <div className="answer__box_row mt-20">
                      <div className="answer__box">
                        <div className="answer__wrapper_other">Question </div>
                        <div className="answer__play_primary">
                          Would you like tea or coffee{" "}
                          <PlayIcon fill={"#ffffff"} />
                        </div>
                      </div>
                    </div>
                    <div className="answer__box_row">
                      <div className="answer__box">
                        <div className="answer__wrapper_other">My Answer</div>
                        <div className="answer__play_secondary">- </div>
                        <div className="answer__grade_red">
                          No Answer <CloseIcon />
                        </div>
                      </div>
                    </div>
                    <div className="answer__box_row">
                      <div className="answer__box">
                        <div className="answer__wrapper_other">
                          Correct Answer
                        </div>
                        <div className="answer__play_secondary">
                          I want to eat pizza next <PlayIcon />
                        </div>
                      </div>
                    </div>

                    <div className="answer__box">
                      <div className="answer__wrapper">Grade</div>
                      <div className="answer__grade_red"> 15%</div>
                    </div>
                  </div>
                  <h3> Comments </h3>
                  <p className="no-comment"> No Comment</p>
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </AccordionStyledContainer>
      </CardContainer>
    </DashboardContainer>
  );
};

export default ManageStudentsReport;
