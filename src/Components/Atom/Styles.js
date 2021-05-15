// @flow
import { makeStyles } from "@material-ui/core/styles";

import useCommon from "./Common";
import useFonts from "./Fonts";
import useLayout from "./Layout";
import useColor from "./Color";

type atom = {
  Layout: typeof useLayout,
  Font: typeof useFonts,
  Common: typeof useCommon,
};

export const useAtom = (): atom => {
  return {
    Layout: useLayout(),
    Font: useFonts(),
    Common: useCommon(),
    Color: useColor(),
  };
};
