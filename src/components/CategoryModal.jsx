import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { CateModalState } from "..";

export default function CategoryModal() {
  const [modal, setModal] = useRecoilState(CateModalState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  document.body.style.overflow = "hidden";
  function onSub(e) {
    e.preventDefault();
    const form = {
      id: localStorage.getItem("id"),
      categorie: title,
    };
    axios
      .post("http://192.168.72.124:8080/addcategorie", form)
      .then((res) => {
        console.log(res);
        document.location.href = "/mypage";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <StyledModal>
      <Popup>
        <div className="head">
          <p>카테고리 추가</p>
          <button
            onClick={() => {
              setModal(false);
              console.log(modal);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          <form onSubmit={onSub}>
            <input
              type="text"
              placeholder="카테고리명 입력"
              className="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="sub">
              추가
            </button>
          </form>
        </div>
      </Popup>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  top: 190px;
  position: absolute;
  z-index: 2;
  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 3px 1000px 1000px rgba(0, 0, 0, 0.5);
`;

const Popup = styled.div`
  position: relative;
  width: 500px;
  height: 350px;
  box-shadow: 1px 1px 2px 2px #979797;
  border-radius: 20px;
  .head {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px #979797;
  }
  .head button {
    position: absolute;
    top: 14px;
    right: 15px;
    border-radius: 99999px;
    width: 40px;
    height: 40px;
    border: none;
    background-color: #bac8ff;
    color: #4263eb;
    cursor: pointer;
  }
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .head p {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
  }
  .body {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .body .title {
    padding-left: 10px;
    border-radius: 20px;
    border: 1px solid;
    outline: none;
    margin-top: 30px;
    width: 390px;
    height: 40px;
  }
  textarea {
    padding-top: 20px;
    padding-left: 20px;
    margin-top: 30px;
    border-radius: 10px;
    border: 1px solid;
    width: 590px;
  }
  .sub {
    margin-top: 100px;
    width: 150px;
    height: 40px;
    border-radius: 20px;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    background: #4263eb;
    cursor: pointer;
  }
`;
