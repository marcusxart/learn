import React from "react";
import { Modal, ModalContainer } from "./styles/modal.styled";
import Close from "../../assets/svg/closeIcon";
import {
  ToggleButtonComponent as ToggleButton,
  ButtonComponent as Button,
} from "l-min-components/src/components";

const ProfileSettingModal = ({ close }) => {
  return (
    <ModalContainer>
      <Modal>
        <div className="modal_header">
          <div>
            <Close onClick={close} />
          </div>
        </div>
        <div className="modal_content">
          <h2>Who sees your profile details?</h2>
          <div className="content">
            <div className="content_header">
              <p>Instructor</p>
              <p>Enterprise</p>
              <p>Students</p>
            </div>
            <div className="content_form">
              <div className="content_body">
                <div className="content_row">
                  <p>Your Enterprise(s)</p>
                  <ToggleButton />
                  <ToggleButton />
                  <ToggleButton />
                </div>
                <div className="content_row">
                  <p>Your Courses</p>
                  <ToggleButton />
                  <ToggleButton />
                  <ToggleButton />
                </div>
                <div className="content_row">
                  <p>Number of Students</p>
                  <ToggleButton />
                  <ToggleButton />
                  <ToggleButton />
                </div>
                <div className="content_row">
                  <p>Your Socials</p>
                  <ToggleButton />
                  <ToggleButton />
                  <ToggleButton />
                </div>
              </div>
              <Button text="Save Settings" />
            </div>
          </div>
        </div>
      </Modal>
    </ModalContainer>
  );
};

export default ProfileSettingModal;
