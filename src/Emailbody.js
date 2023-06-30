import React from "react";
import "./css/emaillist.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useDispatch } from "react-redux";
import { openMessage } from "./features/mailSlice";
import { useNavigate } from "react-router-dom";
function Emailbody({name,email,subject,message,time}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setMail =()=>{
      dispatch(openMessage({
          name,
          subject,
          message,
          email,
          time
      }))
console.log(name,subject,message,email,time)
      navigate('/mail')
  }
  return (
    <div
      className="emailbody"
      onClick={setMail}
    >
      <div className="emailbody__left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelOutlinedIcon />

        <h4>{name}</h4>
      </div>

      <div className="emailbody__middle">
        <div className="emailbody__middle__msg">
          <p>
            <b>
                {subject}
                </b>
            {message}
          </p>
        </div>
      </div>

      <div className="emailbody__right">
        <p>
            {time}
            </p>
      </div>
    </div>
  );
}

export default Emailbody;
