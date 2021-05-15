import { makeStyles } from "@material-ui/core/styles";

const useColor = makeStyles(({ typography, palette }) => ({
  // Add your styles here
  primary: {
    color: palette.primary.main,
  },
}));

export default useColor;
