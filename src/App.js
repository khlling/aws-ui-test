import "./App.css";
import { makeStyles } from "@material-ui/styles";
import { Button, DatePicker, PieChart, Toggle } from "@awsui/components-react";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      AWS UI
      <div className={classes.components}>
        <div className={classes.row}>
          <Button>AWS UI Button</Button>
        </div>
        <div className={classes.row}>
          <DatePicker />
        </div>
        <div className={classes.row}>
          <Toggle />
        </div>
        <div className={classes.row}>
          <PieChart data={[20, 50, 30]} size="large"/>
        </div>
      </div>
    </div>
  );
}

export default App;
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "10px 30px",
    fontSize: 50
  },
  components: {
    flex: 1,
    paddingTop: "100px",
    justifyContent: "space-around"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    margin: "8px"
  },
});
