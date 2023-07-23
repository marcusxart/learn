import UserSwitchHeader from "../../../components/UserSwitchHeader";
import { CreateAnnouncementContainer } from "./index.styled";
import ArrowLeft from "../../../assets/svg/arrowLeft";
import SelectAndCheckboxDropdown from "../../../components/select and checkbox dropdown";

const CreateAnnouncement = () => {
  const options = [
    "French for Complete beginners1",
    "French for Complete beginners2",
    "French for Complete beginners3",
    "French for Complete beginners4",
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
        allSelect
      />
    </CreateAnnouncementContainer>
  );
};

export default CreateAnnouncement;
