import { makeStyles } from "@material-ui/core/styles";

const useLayout = makeStyles(({ spacing, palette }) => ({
  // Add your styles here
  fullHeight: {
    height: "100%",
  },
  fullVHeight: {
    height: "100vh",
  },
  fullWidth: {
    height: "100%",
  },
  verticalCenter: {
    margin: 0,
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
  flexCenterAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useLayout;
