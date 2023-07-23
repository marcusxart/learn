import {
  PreviewAnnoucementContainer,
  PreviewAnnoucementContent,
} from "./index.styled";
import ArrowLeft from "../../../../assets/svg/arrowLeft";

const PreviewAnnoucement = ({ data, back }) => {
  return (
    <PreviewAnnoucementContainer>
      <h1 onClick={back}>
        <ArrowLeft />
        <span>Back</span>
      </h1>
      <PreviewAnnoucementContent>
        <div className="wrapper">
          <h2>{data?.title}</h2>
          <p className="content">{data?.content}</p>
          <div className="footer">
            <p>{data?.date}</p>
          </div>
        </div>
      </PreviewAnnoucementContent>
    </PreviewAnnoucementContainer>
  );
};

export default PreviewAnnoucement;
