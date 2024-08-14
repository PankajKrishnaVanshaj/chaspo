"use client";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

type TotalUsageContextType = {
  totalUsage: number;
  setTotalUsage: Dispatch<SetStateAction<number>>;
};

const TotalUsageContext = createContext<TotalUsageContextType>({
  totalUsage: 0,
  setTotalUsage: () => {},
});

type TotalUsageProviderProps = {
  children: ReactNode;
};

export const TotalUsageProvider: React.FC<TotalUsageProviderProps> = ({
  children,
}) => {
  const [totalUsage, setTotalUsage] = useState<number>(0);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      {children}
    </TotalUsageContext.Provider>
  );
};

export default TotalUsageContext;
