import { createContext, useState } from "react";
import { IUser } from "@/utility/interfaces/user/user";
import { USER_KEY } from "@/constants";
type IUserContext = {
  isUserLoggedIn: boolean;
  user: IUser | null;
  signIn: (user: IUser) => void;
  signOut: () => void;
};
export const UserContext = createContext<IUserContext | null>(null);
const storageUser = localStorage.getItem(USER_KEY);
export function UserProvider({
  children,
}: IUserProviderProps): ReturnType<React.FC> {
  const [user, setUser] = useState<IUser | null>(
    storageUser ? JSON.parse(storageUser) : null
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(
    storageUser ? true : false
  );
  const signIn = (user: IUser) => {
    setUser(user);
    setIsUserLoggedIn(true);
    localStorage.setItem(USER_KEY,JSON.stringify(user));
  };
  const signOut = () => {
    setUser(null);
    localStorage.removeItem(USER_KEY);
    setIsUserLoggedIn(false);
  };

  const value = {
    isUserLoggedIn,
    signIn,
    user,
    signOut,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

interface IUserProviderProps {
  children: React.ReactNode;
}
