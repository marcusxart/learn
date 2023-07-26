import FlagDropdawn from "../../../../components/flag dropdown";
import {
  EnrollAnalyticsContainer,
  EnrollAnalyticsHeader,
  EnrollAnalyticsSKillsList,
  EnrollAnalyticsSKillItem,
  EnrollAnalyticsFooter,
} from "./index.styled";
import { ButtonComponent as Button } from "l-min-components/src/components";
import { general } from "../../../../assets/images/charts";
import {
  Japan,
  France,
  Spain,
  UnitedKingdom,
} from "../../../../assets/svg/flags";
import { studentEnrollAnalyticsData } from "../../../../exports/students";
import AddSuggestionsModal from "../add suggestions modal";
import { useState } from "react";

const EnrollAnalytics = () => {
  const testArr = [1, 1];
  const [textModal, setTextModal] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const dropdawnOptions = [
    { text: "French", icon: France, value: "france" },
    { text: "English", icon: UnitedKingdom, value: "united kingdom" },
    { text: "Japanese", icon: Japan, value: "japan" },
    { text: "Spainsh", icon: Spain, value: "spain" },
  ];
  return (
    <>
      {textModal && <AddSuggestionsModal close={() => setTextModal(false)} />}
      {videoModal && (
        <AddSuggestionsModal type="video" close={() => setVideoModal(false)} />
      )}
      <EnrollAnalyticsContainer>
        <EnrollAnalyticsHeader>
          <div className="left">
            <FlagDropdawn
              defaultValue={dropdawnOptions[0]}
              label="Langauge"
              options={dropdawnOptions}
            />
          </div>
          <div className="right">
            <img src={general} alt="" />
            <div className="desc">
              <p>General Proficiency Level</p>
              <p>Adventurer</p>
              <span>Expert</span>
            </div>
          </div>
        </EnrollAnalyticsHeader>
        <EnrollAnalyticsSKillsList>
          {studentEnrollAnalyticsData?.map(
            ({ image, title, message, tab, color1, color2, color3 }, idx) => (
              <SkillItem
                key={idx}
                image={image}
                title={title}
                message={message}
                tab={tab}
                color1={color1}
                color2={color2}
                color3={color3}
              />
            )
          )}
        </EnrollAnalyticsSKillsList>
        <EnrollAnalyticsFooter>
          <div className="header">
            <p>Words Shaney needs to improve on</p>
          </div>
          <ul>
            {testArr.map((i, idx) => (
              <li key={idx}>
                <p>b, k, ch, f </p>
                <div className="right">
                  <div className="wrap">
                    <span>Add Suggestions:</span>
                    <Button
                      onClick={() => setVideoModal(true)}
                      type="secondary"
                      text="Add Video"
                      styles={{
                        padding: "3px 18px",
                        background: "transparent",
                      }}
                    />
                  </div>
                  <div className="wrap">
                    <span>OR</span>
                    <Button
                      onClick={() => setTextModal(true)}
                      type="secondary"
                      text="Add Text"
                      styles={{
                        padding: "3px 18px",
                        background: "transparent",
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </EnrollAnalyticsFooter>
      </EnrollAnalyticsContainer>
    </>
  );
};

const SkillItem = ({ image, title, message, tab, color1, color2, color3 }) => {
  return (
    <EnrollAnalyticsSKillItem color1={color1} color2={color2} color3={color3}>
      <img src={image} alt="" />
      <div className="desc">
        <h2>{title}</h2>
        <div className="bottom">
          <div>
            <span>{tab}</span>
          </div>
          <p>{message}</p>
        </div>
      </div>
    </EnrollAnalyticsSKillItem>
  );
};
export default EnrollAnalytics;
