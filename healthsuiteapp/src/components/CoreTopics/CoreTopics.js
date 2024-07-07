import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CssBaseline, Container, Grid } from '@mui/material';
import Navigation from './Navigation'
import CoreTopics1 from './CoreTopics1';
import CoreTopics2 from './CoreTopics2';
import CoreTopics3 from './CoreTopics3';
import CoreTopics4 from './CoreTopics4';
import CoreTopics5 from './CoreTopics5';

const coreTopics = [
  { path: "core-topic1", component: <CoreTopics1 />, title: "Taking Care of Yourself" },
  { path: "core-topic2", component: <CoreTopics2 />, title: "Support for You" },
  { path: "core-topic3", component: <CoreTopics3 />, title: "Supporting the Person Living with Dementia" },
  { path: "core-topic4", component: <CoreTopics4 />, title: "Communication" },
  { path: "core-topic5", component: <CoreTopics5 />, title: "Time Management" },
];

function CoreTopics() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order || [3, 2, 4, 5, 1]; // Static array for development purposes

  const orderedTopics = order.map(index => coreTopics[index - 1]);

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
