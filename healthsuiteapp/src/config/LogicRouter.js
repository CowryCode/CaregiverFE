import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {saveRoute, getRoute, getUserProfile, getJustLoggedIn} from '../utils/localStorageHelpers';

const LogicRouter = ({ onComplete, justLoggedIn }) => {
    console.log("LOCATION:");
    const location = useLocation();
    const navigate = useNavigate();
  
    const currentPath = location.pathname;
    const userData = getUserProfile();
  
    console.log("LOCATION:", currentPath);
  
    useEffect(() => {
        const justIn = getJustLoggedIn();

      if (userData === null) {
        console.log("LOCATION: 1");
        saveRoute(currentPath);
        navigate(`/login`);
      } else {
        console.log("LOCATION: 2");
        const savedPath = getRoute();
        if (savedPath === "null") {
            console.log("LOCATION: 3");
          navigate(currentPath);
        } else {
            console.log(`SAVED ROUTE ${savedPath}`);
            console.log("LOCATION: 4");
            if(justIn !== "null"){
                console.log("LOCATION: 5");
                if (userData.preActiveScreenNumber === 0) {
                    saveRoute("null");
                    navigate(savedPath);
                    console.log("LOCATION: 6");
                  } else {
                    console.log("LOCATION: 7");
                    saveRoute("null");
                    switch (userData.preActiveScreenNumber) {
                      case 3:
                        navigate(`/baseline-questionnaire-f1`);
                        break;
                      case 4:
                        navigate(`/baseline-questionnaire-f2`);
                        break;
                      case 5:
                        navigate(`/baseline-questionnaire-f3`);
                        break;
                      case 7:
                        navigate(`/baseline-questionnaire-f4`);
                        break;
                      default:
                        navigate(`/login`);
                    }
                  }
            }else{
                console.log("LOCATION: 8");
               // DO NOTHING, REMAIN ON THIS PAGE
            }
        }
      }
      onComplete();
    }, [userData, currentPath, navigate, onComplete]);
  
    // Optional: return null or a loading spinner if needed
    return null;
}

export default LogicRouter;