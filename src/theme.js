import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
// Create a theme instance.
const theme = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    position: "relative",
    left: 0,
    right: 0,
    bottom: 0,
  },
}));



export default theme;
