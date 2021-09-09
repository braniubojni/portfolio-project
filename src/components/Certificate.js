import { withStyles } from "@material-ui/core/styles";
import acaImg from "../icons/aca";

const styles = () => ({
  cards: {
    display: "flex",
  },
});

function Certificate(props) {
  const { classes } = props;
  return (
    <div className={classes.cards}>
      <div className={classes.card}>Armenian Code Academy</div>
      <div className={classes.card}>Training concerning IT</div>
      <div className={classes.card}>SoloLearn</div>
    </div>
  );
}

export default withStyles(styles)(Certificate);
