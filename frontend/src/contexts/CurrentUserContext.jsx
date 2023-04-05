import PropTypes from "prop-types";
import { createContext, useContext, useState, useMemo } from "react";

const CurrentUserContext = createContext();

export const useCurrentUserContext = () => useContext(CurrentUserContext);

function CurrentUserContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const [cartId, setCartId] = useState(localStorage.getItem("cartId") || null);

  const userMemo = useMemo(
    () => ({
      user,
      setUser,
      userId,
      setUserId,
      cartId,
      setCartId,
    }),
    [user, setUser, userId, setUserId, cartId, setCartId]
  );
  return (
    <CurrentUserContext.Provider value={userMemo}>
      {children}
    </CurrentUserContext.Provider>
  );
}

CurrentUserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CurrentUserContextProvider;
