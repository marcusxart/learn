import { SoundPlayContainer, SoundPlayHeader } from "./index.styled";
import ArrowDown from "../../../../assets/svg/arrowDown";
const SoundPlaySection = () => {
  return (
    <SoundPlayContainer>
      <SoundPlayHeader>
        <div className="left">
          <p>Question 1. Sound Play</p>
          <span>Scripted</span>
        </div>
        <ArrowDown />
      </SoundPlayHeader>
    </SoundPlayContainer>
  );
};

export default SoundPlaySection;
