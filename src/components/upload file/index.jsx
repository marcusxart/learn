import { useRef } from "react";
import { UploadFileContainer, InputBox } from "./index.styled";
import PropTypes from "prop-types";
import UploadIcon from "../../assets/svg/UploadIcon";
import CloseIcon from "../../assets/svg/CloseWithCircle";
import PlayIcon from "../../assets/svg/playIcon";

const UploadFile = ({ label, value, onSelect, type = "image" }) => {
  const inputRef = useRef(null);
  console.log(value);

  return (
    <UploadFileContainer>
      <p className="label">{label}</p>
      <input
        type="file"
        onChange={({ target: { files } }) => {
          files[0] &&
            onSelect({
              fileData: files[0],
              url: URL.createObjectURL(files[0]),
            });
        }}
        ref={inputRef}
        accept={type === "image" ? "image/*" : "video/mp4,video/x-m4v,video/*"}
      />
      <InputBox>
        {value ? (
          <div className="content">
            <CloseIcon onClick={() => onSelect(null)} />
            {type === "image" ? (
              <img src={value.url} alt="" />
            ) : (
              <>
                <PlayIcon />
                <video src={value.url} muted />
              </>
            )}
          </div>
        ) : (
          <div className="wrapper" onClick={() => inputRef.current.click()}>
            <UploadIcon />
            <p>
              Click here to upload{" "}
              <span>{type === "image" ? "thumbnail" : "Video"}</span>
            </p>
          </div>
        )}
      </InputBox>
    </UploadFileContainer>
  );
};

UploadFile.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.shape({
      file: PropTypes.object,
      url: PropTypes.string,
    }).isRequired,
  ]),
  onSelect: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["image", "video"]),
};

export default UploadFile;
