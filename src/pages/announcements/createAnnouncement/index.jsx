import UserSwitchHeader from "../../../components/UserSwitchHeader";
import { CreateAnnouncementContainer } from "./index.styled";
import ArrowLeft from "../../../assets/svg/arrowLeft";
import SelectAndCheckboxDropdown from "../../../components/select and checkbox dropdown";

const CreateAnnouncement = () => {
  const options = [
    "All",
    "French for Complete beginners",
    "French for Complete beginners",
    "French for Complete beginners",
  ];
  return (
    <CreateAnnouncementContainer>
      <UserSwitchHeader title="Frank Language Expert" />
      <h1>
        <ArrowLeft />
        <span>Create announcement</span>
      </h1>
      <SelectAndCheckboxDropdown
        label="Choose Audience"
        placeholder="Select course(s)"
        options={options}
      />
    </CreateAnnouncementContainer>
  );
};

export default CreateAnnouncement;
