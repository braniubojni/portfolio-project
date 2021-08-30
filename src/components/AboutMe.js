import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  myInfo: {
    display: "flex",
  },
});

function AboutMe() {
  const [myImg, setMyImg] = useState(null);
  //   fetch(`https://api.github.com/users/braniubojni`)
  //     .then((resp) => resp.json())
  //     .then((gitPhoto) => {
  //       return setMyImg(<img src={gitPhoto.avatar_url} alt="Github" />);
  //     });
  return (
    <div>
      {/* {myImg} */}
      <p>
        Hello! I am Erik. I have been developing automation programs for
        networking at Karabakh Telecom with python programming language. In
        parallel, I began to study html/css/js
        <br />
        Here in Yerevan I started to handle Twilio and Mailgun API's on python
        and started to dive into html/css/js/bootstap. <br />
        Last year I started to learn React/Material-ui.
      </p>
    </div>
  );
}

export default withStyles(styles)(AboutMe);
