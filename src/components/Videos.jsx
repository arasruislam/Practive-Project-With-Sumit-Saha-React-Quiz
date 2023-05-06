import classes from "../styles/Videos.module.css";
import Video from "./Video";
const Videos = () => {
  return (
    <div>
      <div className={classes.videos}>
        <Video/>
      </div>
    </div>
  );
};

export default Videos;
