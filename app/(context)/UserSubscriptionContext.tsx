"use client";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

type UserSubscription = {
  id: string;
  name: string;
  plan: string;
};

type ContextType = {
  userSubscription: UserSubscription | null;
  setUserSubscription: Dispatch<SetStateAction<UserSubscription | null>>;
};

const UserSubscriptionContext = createContext<ContextType>({
  userSubscription: null,
  setUserSubscription: () => {},
});

type UserSubscriptionProviderProps = {
  children: ReactNode;
};

export const UserSubscriptionProvider: React.FC<
  UserSubscriptionProviderProps
> = ({ children }) => {
  const [userSubscription, setUserSubscription] =
    useState<UserSubscription | null>(null);

  return (
    <UserSubscriptionContext.Provider
      value={{ userSubscription, setUserSubscription }}
    >
      {children}
    </UserSubscriptionContext.Provider>
  );
};

export default UserSubscriptionContext;
