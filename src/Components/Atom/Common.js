import { makeStyles } from "@material-ui/core/styles";

const useCommon = makeStyles(({ typography, palette }) => ({
  // Add your styles here
  pointer: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default useCommon;
