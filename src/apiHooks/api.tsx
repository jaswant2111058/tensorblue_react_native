import React, { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import axios from 'axios';

interface UserData {
  name: string;
  Student_ID_Number: string;
  Grade: string;
  Contact_Number: string;
  Email_Address: string;
  Guardian: string;
  Parent_Contact: string;
  Address: string;
}


interface DataProviderProps {
  children: ReactNode;
}

interface DataContextValue {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  user: UserData;
  setUser: Dispatch<SetStateAction<UserData>>;
  notifications: string[];
  baseURL: string;
}

const DateContext = createContext<DataContextValue | undefined>(undefined);

export const useData = (): DataContextValue => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {

  const [isLoading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>({
    name: "",
    Student_ID_Number: "",
    Grade: "",
    Contact_Number: "",
    Email_Address: "",
    Guardian: "",
    Parent_Contact: "",
    Address: ""
  });
  const [notifications, setNotifications] = useState<string[]>([]);
  const baseURL: string = "https://tensorblue-0zyo.onrender.com";

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    const getNotifications = async () => {
      try {
        startLoading();
        const response = await axios.get<string[]>(`${baseURL}/notification`);
        if (response) {
          setNotifications(response.data);
          stopLoading();
        }
      } catch (error) {
        console.error('Error searching:', error);
      }
    };

    getNotifications();

  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        startLoading();
        const response = await axios.get<UserData>(`${baseURL}/user`);
        if (response) {
          setUser(response.data);
          stopLoading();
        }
      } catch (error) {
        console.error('Error searching:', error);
      }
    };
    getUser();
  }, []);

  const contextValue: DataContextValue = {
    isLoading,
    startLoading,
    stopLoading,
    user,
    setUser,
    notifications,
    baseURL
  };

  return (
    <DateContext.Provider value={contextValue}>
      {children}
    </DateContext.Provider>
  );
};

export default DataProvider;
