import { AdButton, AdContainer, AdImage, AdText } from "./styled";
import AdsImage from "../../assets/images/ad.png";
const Ad = () => {
  return (
    <AdContainer>
      <div className="texts">
        <AdText>You can now schedule classes!</AdText>
        <AdButton>Try Now</AdButton>
      </div>
      <AdImage src={AdsImage} alt="Ads image" />
    </AdContainer>
  );
};

export default Ad;
