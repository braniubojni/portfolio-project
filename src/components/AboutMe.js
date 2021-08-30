import { withStyles } from "@material-ui/core/styles";
import ProfileImg from "../icons/I_am.jpg";

const styles = () => ({
  myInfo: {
    display: "inline-flex",
    padding: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  ProfileImg: {
    margin: "0 auto",
    alignSelf: "center",
    borderRadius: "1.25rem",
  },
  ProfileImgCont: {
    marginRight: 22,
  },
  text: {
    paddingLeft: "15%",
    wordBreak: "break-word",
    alignSelf: "center",
  },
});

function AboutMe(props) {
  let { classes, appWidth } = props;
  return (
    <div className="container">
      <div
        className={classes.myInfo}
        style={{ flexWrap: appWidth < 768 ? "wrap" : "nowrap" }}
      >
        <div
          className={classes.ProfileImg}
          style={{ marginBottom: appWidth < 768 ? "2%" : "0" }}
        >
          <img
            className={`img-fluid ${classes.ProfileImg}`}
            src={ProfileImg}
            alt={"pretty boy"}
          />
        </div>
        <p
          className={classes.text}
          style={{ paddingTop: appWidth < 768 ? "2%" : "0" }}
        >
          Hello! I am Erik. I'am IT support and network specialist at KT.Also I
          have been developing automation programs for networking with python
          programming language. In parallel, I began to study html/css/js. Here
          in Yerevan I started to handle Twilio and Mailgun API's on python and
          started to dive into html/css/js/bootstap. Last year I started to
          learn React in ACA.
        </p>
      </div>
    </div>
  );
}

export default withStyles(styles)(AboutMe);
