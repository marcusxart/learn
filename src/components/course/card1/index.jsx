import React from "react";
import { styled } from "styled-components";
import { StarIcon } from "../../../assets/svg/star";

const Card1 = ({ img, descId, title, learners, rating }) => {
  return (
    <Card>
      <div className="course_img_box">
        <img src={img} alt="" />
      </div>
      <div className="left_wrap">
        <p className="course_id">{descId}</p>
        <p className="title">{title}</p>

        <div>
          <p>{learners}</p>
          <span className="line"></span>
          <div>
            <StarIcon />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Card1;

const Card = styled.div`
  background: #ffffff;
  width: 243px;
  padding: 10px;
  border: 0.8px solid #dfe6e6;
  border-radius: 21px;
  display: flex;
  gap: 10px;
  .course_img_box {
    width: 76px;
    height: 76px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 17px;
    background: #dfe6e6;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  > .left_wrap {
    line-height: 15px;
    .course_id {
      font-size: 10px;
      color: #7c8080;
    }
    > .title {
      font-size: 12px;
      margin-bottom: 8px;
    }
    > div {
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 11.5px;
      color: #4a4d4d;
      font-weight: 600;

      .line {
        display: inline-block;
        background: #d9d9d9;
        border-radius: 27px;
        width: 2px;
        width: 2px;
        margin: 0 10px;
        height: 16px;
      }

      > div {
        display: flex;
        gap: 2px;
        align-items: center;
      }
    }
  }
`;
