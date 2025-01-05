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
import LoadingComponent from '../loader/LoadingComponent';
import Header from '../Header/Header';

import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";


const coreTopics = [
  { path: "core-topic1", component: <CoreTopics1 />, title: "Core-Topic: Taking Care of Yourself" },
  { path: "core-topic2", component: <CoreTopics2 />, title: "Core-Topic: Support for You" },
  { path: "core-topic3", component: <CoreTopics3 />, title: "Core-Topic: Supporting the Person Living with Dementia" },
  { path: "core-topic4", component: <CoreTopics4 />, title: "Core-Topic: Communication" },
  { path: "core-topic5", component: <CoreTopics5 />, title: "Core-Topic: Time Management" },
];

function CoreTopicsHome() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const liborder = LocalStorageService.getArray('libraryorder');


  const order = location.state?.order || liborder;
  const orderedTopics = order.map(index => coreTopics[index - 1]);



  const handleTopicChange = (index) => {
    navigate(orderedTopics[index].path);
  };

  //useEffect(() => {

    // const savedPath = LocalStorageService.getItem('libraryLastPage');
    // console.log(`PATH : ${savedPath}`);
    // if( savedPath != null) {
    //   console.log(`PATH 1 : ${savedPath}`);
    //   navigate(`${savedPath}`);
    //   setLoading(false);
    //  }else{
    //   console.log(`PATH 2 : ${savedPath}`);
    //   setLoading(false);
    //   //navigate(`/login`);
    //   navigate(`/library/core-topic1`);
    //  }
 //}, []);

  // return (
  //   <>
  //     <CssBaseline />
  //     <Container>
  //     {!loading && (
  //       <Grid container>
  //         <Grid item xs={12}>
  //           {/* <Navigation topics={orderedTopics.map(topic => topic.title)} onTopicChange={handleTopicChange} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} /> */}
  //           <Navigation
  //             topics={orderedTopics.map(({ title, path }) => ({ title, path }))}
  //             onTopicChange={handleTopicChange}
  //             mobileOpen={mobileOpen}
  //             setMobileOpen={setMobileOpen}
  //           />
  //         </Grid>
  //         <Grid item xs={12} style={{ paddingLeft: mobileOpen ? '250px' : '0', transition: 'padding-left 0.3s ease' }}>
  //           <Routes>
  //             {orderedTopics.map((topic, index) => (
  //               <Route key={index} path={`${topic.path}/*`} element={topic.component} />
  //             ))}
  //           </Routes>
  //         </Grid>
  //       </Grid>
  //     )}
  //     {loading && (
  //     <div>
  //       <LoadingComponent/>
  //     </div>
  //     )}
  //     </Container>
  //   </>
  // );

  const handleCardClick = (path) => {
    console.log(`Clicked on ${path}`);
    window.location.href = path;
  };

  const CardItem = ({ title, description, status, onClick }) => {
    return (
      <Card 
      variant="outlined" 
       sx={{ width: 250, textAlign: "center", p: 2,  cursor: "pointer", // Visual feedback for clickable cards
        "&:hover": {
          boxShadow: 6, // Add a hover effect for better UX
        }, }}
        onClick={onClick}
        >
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom color="primary">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {description}
          </Typography>
          <hr  />
          <Box mt={2}>
            <Chip
              label={status}
              color={status === "Completed" ? "success" : "warning"}
            />
          </Box>
        </CardContent>
      </Card>
    );
  };

 
    // const cardsData = [
    //   {
    //     title: "Taking Care of Yourself (Self-care)",
    //     description:
    //       "This topic emphasizes self-care and well-being for dementia caregivers through regular breaks.",
    //     status: "Completed",
    //   },
    //   {
    //     title: "Time Management",
    //     description:
    //       "This topic covers time management tips for balancing caregiving, community, and work commitments.",
    //     status: "Up Next",
    //   },
    //   {
    //     title: "Supporting the Person Living with Dementia",
    //     description:
    //       "This topic discusses supporting the changing needs of people with dementia, exploring living arrangements and understanding behaviors for their well-being and yours.",
    //     status: "Up Next",
    //   },
    //   {
    //     title: "Communication",
    //     description:
    //       "This topic covers communication tips for supporting people with dementia and working with care providers.",
    //     status: "Up Next",
    //   },
    //   {
    //     title: "Support for You",
    //     description:
    //       "This topic offers guidance on finding support and taking breaks from dementia caregiving.",
    //     status: "Up Next",
    //   },
    // ];

    const submenus = {
      "core-topic1": 
           {title: "Start: Taking Care of Yourself (Self-care)", 
            path: "/library/core-topic1/",
            description:
              "This topic emphasizes self-care and well-being for dementia caregivers through regular breaks.",
            status: "Completed",
          },  
      "core-topic2":  
           {title: "Start: Support for You", 
            path: "/library/core-topic1/",
            description:
              "This topic covers time management tips for balancing caregiving, community, and work commitments.",
            status: "completed",
          },  
      "core-topic3": 
           {title: "Start: Supporting the Person Living with Dementia", 
            path: "/library/core-topic3/",
            description:
              "This topic discusses supporting the changing needs of people with dementia, exploring living arrangements and understanding behaviors for their well-being and yours.",
            status: "Up Next",
          },
      "core-topic4": 
           {title: "Start: Communication", 
            path: "/library/core-topic4/",
            description:
              "This topic covers communication tips for supporting people with dementia and working with care providers.",
            status: "Up Next",
          },
      "core-topic5": 
           {title: "Start: Time Management", 
            path: "/library/core-topic5/",
            description:
              "This topic offers guidance on finding support and taking breaks from dementia caregiving.",
            status: "completed",
          },       
    }

      return (
    <>
      <CssBaseline />
      <Header />
      <Container sx={{ paddingBottom: 4 }}>
      {!loading && (
        <Grid container >
          <Grid item xs={12} >
            {/* <Navigation topics={orderedTopics.map(topic => topic.title)} onTopicChange={handleTopicChange} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} /> */}
            <Navigation
              topics={orderedTopics.map(({ title, path }) => ({ title, path }))}
              onTopicChange={handleTopicChange}
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
            />
          </Grid>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
           {/* {cardsData.map((card, index) => (
              <Grid item key={index}>
                <CardItem
                  title={card.title} 
                  description={card.description}
                  status={card.status}
                />
              </Grid>
            ))} */}
            {orderedTopics.map(({ title, path }, index) => (
              <Grid item key={index}>
                <CardItem 
                  title={title} 
                  description={`Description for ${submenus[path].description}`} 
                  status={submenus[path].status === "completed" ? "Completed" : "Up Next"}
                  onClick={() => handleCardClick(path)}
                />
              </Grid>
            ))}
       </Grid>
          {/* <Grid item xs={12} style={{ paddingLeft: mobileOpen ? '250px' : '0', transition: 'padding-left 0.3s ease' }}>
            <Routes>
              {orderedTopics.map((topic, index) => (
                <Route key={index} path={`${topic.path}/*`} element={topic.component} />
              ))}
            </Routes>
          </Grid> */}
        </Grid>
      )}
      {loading && (
      <div>
        <LoadingComponent/>
      </div>
      )}
      </Container>
    </>
  );

    // return (
    //   <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
    //     {cardsData.map((card, index) => (
    //       <Grid item key={index}>
    //         <CardItem
    //           title={card.title} 
    //           description={card.description}
    //           status={card.status}
    //         />
    //       </Grid>
    //     ))}
    //   </Grid>
    // );
  
}

export default CoreTopicsHome;
