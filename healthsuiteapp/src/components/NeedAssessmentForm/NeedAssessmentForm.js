import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, MenuItem, Button, Container, Typography, Grid } from '@mui/material';
import './NeedAssessmentForm.css';
import Sidebar from '../SidebarMenu/SideBar';
import { FaBars } from 'react-icons/fa';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import axiosInstance from '../../apicall/AxiosInstance';
import LoadingComponent from '../loader/LoadingComponent';
import LocalStorageService from '../../utils/LocalStorageService';

const NeedAssessmentForm = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
    };

    const handleLibraryClick = () => {
        // THIS ARRAY IS GENERATED AFTER SUBMITTING NEED ASSESSMENT
        const data = [3, 2, 4, 5, 1]; // Static array for development purposes
        if (data.length > 0) {
            //const firstTopic = data[0];
            const firstTopic = 1;
            
            navigate(`/library/core-topic${firstTopic}`);
        } else {
            navigate(`/need-assessment`);
        }
    };

    const [formData, setFormData] = useState(
        {
        userID : 0,
        difficulty_Supporting: {
            dressing: 0,
            bathing_showering: 0,
            grooming: 0,
            meal_preparation_eating: 0,
            medications: 0,
            household_work: 0,
        },
        difficulty_with_changes: 0,
        experiencing_changes: {
            your_family_member: 0,
            your_spouse_partner: 0,
            coworkers_employer: 0,
        },
        difficulty_with_any_D: {
            sleep: 0,
            physical_health: 0,
            emotional_health: 0,
        },
        difficulty_with_any_E: {
            finding_enough_time: 0,
            participating_in_social: 0,
            spending_time_with_others: 0,
            maintaining_hobbies: 0,
            managing_your_various: 0,
            interruptions: 0,
        },
    });


    const [formData2, setFormData2] = useState(
        {
            userID : 0,
            dressing: 0,
            bathing_showering: 0,
            grooming: 0,
            meal_preparation_eating: 0,
            medications: 0,
            household_work: 0,
            difficulty_with_changes: 0,
            your_family_member: 0,
            your_spouse_partner: 0,
            coworkers_employer: 0,
            sleep: 0,
            physical_health: 0,
            emotional_health: 0,
            finding_enough_time: 0,
            participating_in_social: 0,
            spending_time_with_others: 0,
            maintaining_hobbies: 0,
            managing_your_various: 0,
            interruptions: 0
        }
);





    const handleChange = (category, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [category]: {
                ...prevData[category],
                [field]: value,
            },
        }));

        setFormData2((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Commented out code for sending data to backend
        // fetch('/api/need-assessment', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // }).then(response => response.json()).then(data => console.log(data));
       // alert(JSON.stringify(formData, null, 2));
        submitToAPI();
        handleLibraryClick();
    };

    const updateUserID = (newUserID) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            userID: newUserID
        }));

        setFormData2((prevFormData) => ({
            ...prevFormData,
            userID: newUserID
        }));
    };

    useEffect(() => {
        const userData = LocalStorageService.getItem('profile');
        if (userData) {
            updateUserID(userData.id);
        }
    }, []);

    const submitToAPI = () => {
        setLoading(true);

        // const payload = {
        //     userID : formData.userID,
        //     Dressing: formData.Difficulty_Supporting.Dressing,
        //     Bathing_showering: formData.Difficulty_Supporting.Bathing_showering,
        //     Grooming: formData.Difficulty_Supporting.Grooming,
        //     Meal_preparation_eating: formData.Difficulty_Supporting.Meal_preparation_eating,
        //     Medications: formData.Difficulty_Supporting.Medications,
        //     Household_work: formData.Difficulty_Supporting.Household_work,
        //     Difficulty_with_changes: formData.Difficulty_with_changes.Difficulty_with_changes,
        //     Your_family_member: formData.Experiencing_changes.Your_family_member,
        //     Your_spouse_partner: formData.Experiencing_changes.Your_spouse_partner,
        //     Coworkers_employer: formData.Experiencing_changes.Coworkers_employer,
        //     Sleep: formData.Difficulty_with_any_D.Sleep,
        //     Physical_health: formData.Difficulty_with_any_D.Physical_health,
        //     Emotional_health: formData.Difficulty_with_any_D.Emotional_health,
        //     Finding_enough_time: formData.Difficulty_with_any_E.Finding_enough_time,
        //     Participating_in_social: formData.Difficulty_with_any_E.Participating_in_social,
        //     Spending_time_with_others: formData.Difficulty_with_any_E.Spending_time_with_others,
        //     Maintaining_hobbies: formData.Difficulty_with_any_E.Maintaining_hobbies,
        //     Managing_your_various: formData.Difficulty_with_any_E.Managing_your_various,
        //     Interruptions: formData.Difficulty_with_any_E.Interruptions
        // }
         const jsonString = JSON.stringify(formData2);
          alert(jsonString);

        axiosInstance.post('/caregiver/v1/save-need-assessment', formData2) 
        .then(response => {
             const jsonString = JSON.stringify(response.data);
             console.log('Successful' + jsonString);
        })
        .catch(error => {
           // window.location.href = '/baseline-questionnaire-f1';
            console.error('Error', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    const options = [
        { value: 0, label: 'None/Little' },
        { value: 1, label: 'Some/Significant' },
        { value: 2, label: 'Extreme' },
    ];

    return (
        <div className={`app-container ${isSidebarOpen ? 'with-sidebar' : ''}`}>
            <button className="sidebar-toggle" onClick={handleSidebarToggle}>
                <FaBars />
            </button>
            {isSidebarOpen && <Sidebar />}
            <Header />
            <Container maxWidth="md" className="form-container">
                <Typography variant="h4" gutterBottom>
                    Needs Assessment Questionnaire
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h6">A. Difficulty supporting with any of the following:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Dressing"
                                value={formData.difficulty_Supporting.dressing}
                                onChange={(e) =>
                                    handleChange('difficulty_Supporting', 'dressing', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Bathing/showering"
                                value={formData.difficulty_Supporting.bathing_showering}
                                onChange={(e) =>
                                    handleChange('difficulty_Supporting', 'bathing_showering', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Grooming"
                                value={formData.difficulty_Supporting.grooming}
                                onChange={(e) =>
                                    handleChange('difficulty_Supporting', 'grooming', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Meal preparation/eating"
                                value={formData.difficulty_Supporting.meal_preparation_eating}
                                onChange={(e) =>
                                    handleChange('difficulty_Supporting', 'meal_preparation_eating', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Medications"
                                value={formData.difficulty_Supporting.medications}
                                onChange={(e) =>
                                    handleChange('difficulty_Supporting', 'medications', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Household work (cleaning, laundry)"
                                value={formData.difficulty_Supporting.household_work}
                                onChange={(e) =>
                                    handleChange('difficulty_Supporting', 'household_work', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h6">B. Difficulty with changes in your family member’s behavior or how they are responding/interacting with you/others</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Difficulty with changes"
                                value={formData.difficulty_with_changes}
                                onChange={(e) => handleChange('difficulty_with_changes', null, parseInt(e.target.value))}
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h6">C. Experiencing changes/conflicts in your relationships with</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Your family member living with dementia"
                                value={formData.experiencing_changes.your_family_member}
                                onChange={(e) =>
                                    handleChange('experiencing_changes', 'your_family_member', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Your spouse/partner or other family members"
                                value={formData.experiencing_changes.your_spouse_partner}
                                onChange={(e) =>
                                    handleChange('experiencing_changes', 'your_spouse_partner', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Coworkers/employer"
                                value={formData.experiencing_changes.coworkers_employer}
                                onChange={(e) =>
                                    handleChange('experiencing_changes', 'coworkers_employer', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h6">D. Difficulty with any of the following:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Sleep – not enough, interruptions, getting to sleep, waking up"
                                value={formData.difficulty_with_any_D.sleep}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_D', 'sleep', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Physical health – unintended weight gain/loss, increased illness, back aches, headaches, tiredness"
                                value={formData.difficulty_with_any_D.physical_health}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_D', 'physical_health', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Emotional health – feelings of sadness, worry, frustration, overwhelmed, anger, nervousness"
                                value={formData.difficulty_with_any_D.emotional_health}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_D', 'emotional_health', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h6">E. Difficulty with any of the following:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Finding enough time for myself"
                                value={formData.difficulty_with_any_E.finding_enough_time}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_E', 'finding_enough_time', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Participating in social activities"
                                value={formData.difficulty_with_any_E.participating_in_social}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_E', 'participating_in_social', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Spending time with others"
                                value={formData.difficulty_with_any_E.spending_time_with_others}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_E', 'spending_time_with_others', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Maintaining hobbies/personal interests"
                                value={formData.difficulty_with_any_E.maintaining_hobbies}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_E', 'maintaining_hobbies', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Managing your various responsibilities/commitments"
                                value={formData.difficulty_with_any_E.managing_your_various}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_E', 'managing_your_various', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                select
                                fullWidth
                                label="Interruptions/absences from work"
                                value={formData.difficulty_with_any_E.interruptions}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_E', 'interruptions', parseInt(e.target.value))
                                }
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
            <Footer />
        </div>
    );
};

export default NeedAssessmentForm;
