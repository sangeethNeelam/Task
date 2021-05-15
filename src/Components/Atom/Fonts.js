import { makeStyles } from "@material-ui/core/styles";

const useFonts = makeStyles(({ typography, palette }) => ({
  // Add your styles here
  label: {
    fontSize: 14,
  },
  textCenter: {
    textAlign: "center",
  },
}));

export default useFonts;
