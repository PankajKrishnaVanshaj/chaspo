"use client";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

type UpdateCreditUsageContextType = {
  updateCreditUsage: number;
  setUpdateCreditUsage: Dispatch<SetStateAction<number>>;
};

const UpdateCreditUsageContext = createContext<UpdateCreditUsageContextType>({
  updateCreditUsage: 0,
  setUpdateCreditUsage: () => {},
});

type UpdateCreditUsageProviderProps = {
  children: ReactNode;
};

export const UpdateCreditUsageProvider: React.FC<
  UpdateCreditUsageProviderProps
> = ({ children }) => {
  const [updateCreditUsage, setUpdateCreditUsage] = useState<number>(0);

  return (
    <UpdateCreditUsageContext.Provider
      value={{ updateCreditUsage, setUpdateCreditUsage }}
    >
      {children}
    </UpdateCreditUsageContext.Provider>
  );
};

export default UpdateCreditUsageContext;
