import { useContext } from "react";
import { LoginUserContext, LoginUserContextType  } from "../propviders/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
