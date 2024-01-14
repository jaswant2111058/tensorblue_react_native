import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const DateContext = createContext();


export const useData = () => {
    return useContext(DateContext);
};

export const DataProvider = ({ children }) => {

    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState({})
    const [notifications, setNotifications] = useState([])
    const baseURL = "https://tensorblue-0zyo.onrender.com"


    const startLoading = () => {
        setLoading(true);
    };


    const stopLoading = () => {
        setLoading(false);
    };


    useEffect(() => {
        const getNotifications = async () => {
            try {
                startLoading()
                const response = await axios.get(`${baseURL}/notification`);
                if (response) {
                    setNotifications(response.data);
                    stopLoading()
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
                startLoading()
                const response = await axios.get(`${baseURL}/user`);
                if (response) {
                    setUser(response.data);
                    stopLoading()
                }
            } catch (error) {
                console.error('Error searching:', error);
            }
        };
        getUser();
    }, []);


    return (
        <DateContext.Provider value={{

            isLoading,
            startLoading,
            stopLoading,
            user,
            setUser,
            notifications,
            setNotifications,
            baseURL
        }}>
            {children}
        </DateContext.Provider>
    );
};