import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonComponent as Button,
  SearchComponent,
  SuccessCard,
  Checkbox,
} from "l-min-components/src/components/";
import Ad from "../../components/announcementBanner";
import SelectDropdown from "../../components/SelectDropdown";
import Sort from "../../assets/svg/sort";
import UserSwitchHeader from "../../components/UserSwitchHeader";
import { announcementsData } from "../../exports/announcementData";
import PreviewAnnoucement from "./components/preview annoucement";
import {
  AccouncementsPageContainer,
  AnnouncementPageContent,
  AnnouncementList,
  AnnouncementBulkActions,
  SuccessModal,
} from "./index.styled";
import MoreAlt from "../../assets/svg/moreAlt";
import goodCheck from "../../assets/images/good-check.png";

const Annoucements = () => {
  const navigate = useNavigate();
  const [toPreview, setToPreview] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [selectedAnnouncements, setSelectedAnnouncements] = useState([]);
  const [bulkDeleteActive, setBulkDeleteActive] = useState(false);
  const [successDeleteActive, setSucessDeleteActive] = useState(false);

  const handleFilterChange = (option) => {
    setSelectedOption(option);
  };

  const handleDropdownChange = (id) => {
    if (selectedDropdown === id) {
      setSelectedDropdown(null);
    } else {
      setSelectedDropdown(id);
    }
  };

  const handleBulkDelete = (announcement) => {
    // Check if announcement is already selected
    const index = selectedAnnouncements.findIndex(
      (a) => a.id === announcement.id
    );
    if (index === -1) {
      // Add announcement to selected list
      setSelectedAnnouncements([...selectedAnnouncements, announcement]);
    } else {
      // Remove announcement from selected list
      const newSelectedAnnouncements = [...selectedAnnouncements];
      newSelectedAnnouncements.splice(index, 1);
      setSelectedAnnouncements(newSelectedAnnouncements);
    }
  };

  const options = ["All", "This Week", "Last Week", "Last Month"];

  return (
    <>
      {successDeleteActive && (
        <SuccessModal onClick={() => setSucessDeleteActive(false)}>
          <SuccessCard
            title="Announcement deleted successfully"
            image={goodCheck}
          />
        </SuccessModal>
      )}
      <AccouncementsPageContainer>
        <UserSwitchHeader title="Frank Language Expert" />

        {!toPreview && (
          <div className="header">
            <p className="p-head">Annoucements</p>
            <div className="buttons">
              <Button
                text="Create annoucements"
                onClick={() => navigate("/announcements/create")}
                styles={{
                  marginRight: "20px",
                }}
              />
            </div>
          </div>
        )}
        <>
          {toPreview ? (
            <PreviewAnnoucement
              data={toPreview}
              back={() => setToPreview(null)}
            />
          ) : (
            <AnnouncementPageContent>
              <div className="header">
                <div className="search">
                  <SearchComponent
                    placeholder="Search Announcement"
                    border="1px solid #DFE6E6"
                  />
                </div>
                <div className="filter">
                  <SelectDropdown
                    placeholder="Filter"
                    options={options}
                    Icon={Sort}
                    value={selectedOption}
                    onSelect={handleFilterChange}
                    dropDownClassName="filter_dropdown"
                  />
                </div>
              </div>
              {/* Add banner */}
              <Ad />
              {bulkDeleteActive && (
                <AnnouncementBulkActions>
                  <Button
                    text="Delete announcements"
                    styles={{
                      background: "#F95454",
                    }}
                  />
                  <Button
                    text="Cancel bulk delete"
                    styles={{
                      background: "#ADB2B2",
                    }}
                    onClick={() => setBulkDeleteActive(false)}
                  />
                </AnnouncementBulkActions>
              )}
              <AnnouncementList>
                {announcementsData?.map((announcement) => (
                  <li key={announcement.id}>
                    {bulkDeleteActive && (
                      <Checkbox
                        color="#ffb834"
                        size="18px"
                        onChange={() => {
                          handleBulkDelete(announcement);
                        }}
                        checked={selectedAnnouncements.some(
                          (a) => a.id === announcement.id
                        )}
                      />
                    )}
                    <div
                      className="wrap"
                      onClick={() => setToPreview(announcement)}
                    >
                      <div className="announcement_header">
                        <div className="title_wrap">
                          <h2>{announcement.title}</h2>
                          <p>
                            {announcement.subtitle.title1} |{" "}
                            {announcement.subtitle?.title2} |{" "}
                            {announcement?.subtitle.title3}
                          </p>
                        </div>
                        <div className="dropdown_wrap">
                          <MoreAlt
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDropdownChange(announcement.id);
                            }}
                          />
                          {selectedDropdown === announcement.id && (
                            <div>
                              <p>Reuse</p>
                              <p
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSucessDeleteActive(true);
                                  setSelectedDropdown(null);
                                }}
                              >
                                Delete
                              </p>
                              <p
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setBulkDeleteActive(true);
                                  setSelectedDropdown(null);
                                }}
                              >
                                Bulk Delete
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="description">
                        <p>{announcement.content}</p>
                      </div>
                      <div className="announcement_footer">
                        <p>{announcement.author}</p>
                        <p>{announcement.date}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </AnnouncementList>
            </AnnouncementPageContent>
          )}
        </>
      </AccouncementsPageContainer>
    </>
  );
};

export default Annoucements;
