import React, { useState } from "react";
import MoreMenu from "../../assets/images/more.png";
import { AnnouncementContainer, 
  Heading, Subtitle, SubtitleTitle, SubtitleDivider, 
  Contents, Author, OptionsList, OptionItem, OptionsIcon, 
  IconContainer, DeleteButton, DeleteOptionButton  
} from "./style";


const Announcement = ({ 
  announcement, 
  onDelete, 
  onBulkDelete, 
  handleShowDeleteModal, 
  setCardData, 
  setSummary, 
  setHeaderShow,
  setBulkDeletePage 
}) => {
  const { title, subtitle, content, author, date } = announcement;
  const [showOptions, setShowOptions] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  const handleDeleteClick = () => {
    setShowOptions(false);
    onDelete();
  };
  const handleBulkClick = () => {
    setShowOptions(false);
    onBulkDelete();
  };

  return (
    <AnnouncementContainer>
      <div className="left"  
         onClick={() => {
           setSummary("summary");
            setHeaderShow("hide");
          }}>
      <Heading>{title}</Heading>
      <Subtitle>
        <SubtitleTitle>{subtitle.country}</SubtitleTitle>
        <SubtitleDivider />
        <SubtitleTitle>{subtitle.language}</SubtitleTitle>
        <SubtitleDivider />
        <SubtitleTitle>{subtitle.serialCode}</SubtitleTitle>
      </Subtitle>
      <Contents className="content">{content}</Contents>
      <Author>
        <p> By: {author}</p>
        <h5>{date}</h5>
      </Author>
      </div>
      <div className="right">
      <IconContainer>
        <OptionsIcon onClick={handleOptionsClick}> <img src={MoreMenu}  alt="" /> </OptionsIcon>
        {showOptions && (
          <OptionsList>
            <OptionItem>
              <DeleteOptionButton onClick={handleOptionsClick}>
                Reuse
              </DeleteOptionButton>
            </OptionItem>
            <OptionItem>
              <DeleteButton onClick={() => {
                handleDeleteClick()
                handleShowDeleteModal()
                }}>
                  Delete</DeleteButton>
            </OptionItem>
            <OptionItem>
              <DeleteOptionButton onClick={() => {
                setBulkDeletePage(true)
                handleBulkClick()
              }}>
                Bulk Delete
              </DeleteOptionButton>
            </OptionItem>
          </OptionsList>
        )}
      </IconContainer>
      </div>
    </AnnouncementContainer>
  );
};

export default Announcement;
