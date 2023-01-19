import "./featured.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={5}
            styles={buildStyles({
              pathColor: "plum",
              textColor: "#555",
              trailColor: "#DCDCDC",
              backgroundColor: "plum",
            })}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemresult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultamount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Week</div>
            <div className="itemresult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultmmount">$11.3k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Last Month</div>
            <div className="itemresult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultamount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
