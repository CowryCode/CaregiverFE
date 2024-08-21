import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CssBaseline, Container, Grid } from '@mui/material';
import Navigation from './Navigation'
import CoreTopics1 from './CoreTopics1';
import CoreTopics2 from './CoreTopics2';
import CoreTopics3 from './CoreTopics3';
import CoreTopics4 from './CoreTopics4';
import CoreTopics5 from './CoreTopics5';
import LocalStorageService from '../../utils/LocalStorageService';

const coreTopics = [
  { path: "core-topic1", component: <CoreTopics1 />, title: "Core-Topic1 Taking Care of Yourself" },
  { path: "core-topic2", component: <CoreTopics2 />, title: "Core-Topic2 Support for You" },
  { path: "core-topic3", component: <CoreTopics3 />, title: "Core-Topic3 Supporting the Person Living with Dementia" },
  { path: "core-topic4", component: <CoreTopics4 />, title: "Core-Topic4 Communication" },
  { path: "core-topic5", component: <CoreTopics5 />, title: "Core-Topic5 Time Management" },

];

function CoreTopics() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const liborder = LocalStorageService.getArray('libraryorder');

  
  // const jsonString = JSON.stringify(libraryOrder);
  //const order = location.state?.order || [3, 2, 1, 5, 4]; // Static array for development purposes
  const order = location.state?.order || liborder;
  console.log('ORDER TTTTTT : ' + liborder);
  console.log('ORDER LENGTH : ' + liborder.length);
  const orderedTopics = order.map(index => coreTopics[index - 1]);


  // useEffect(() => {
  //   const liborder = LocalStorageService.getItem('libraryorder');
  //   if (liborder.) {
  //       updateUserID(userData.id);
  //   }
  // }, []);

  const handleTopicChange = (index) => {
    navigate(orderedTopics[index].path);
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Navigation topics={orderedTopics.map(topic => topic.title)} onTopicChange={handleTopicChange} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: mobileOpen ? '250px' : '0', transition: 'padding-left 0.3s ease' }}>
            <Routes>
              {orderedTopics.map((topic, index) => (
                <Route key={index} path={`${topic.path}/*`} element={topic.component} />
              ))}
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CoreTopics;
