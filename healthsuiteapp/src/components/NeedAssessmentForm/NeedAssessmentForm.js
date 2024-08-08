import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, MenuItem, Button, Container, Typography, Grid } from '@mui/material';
import './NeedAssessmentForm.css';
import Sidebar from '../SidebarMenu/SideBar';
import { FaBars } from 'react-icons/fa';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const NeedAssessmentForm = () => {
    const navigate = useNavigate();
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

    const [formData, setFormData] = useState({
        Difficulty_Supporting: {
            Dressing: 0,
            Bathing_showering: 0,
            Grooming: 0,
            Meal_preparation_eating: 0,
            Medications: 0,
            Household_work: 0,
        },
        Difficulty_with_changes: 0,
        Experiencing_changes: {
            Your_family_member: 0,
            Your_spouse_partner: 0,
            Coworkers_employer: 0,
        },
        Difficulty_with_any_D: {
            Sleep: 0,
            Physical_health: 0,
            Emotional_health: 0,
        },
        Difficulty_with_any_E: {
            Finding_enough_time: 0,
            Participating_in_social: 0,
            Spending_time_with_others: 0,
            Maintaining_hobbies: 0,
            Managing_your_various: 0,
            Interruptions: 0,
        },
    });

    const handleChange = (category, field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [category]: {
                ...prevData[category],
                [field]: value,
            },
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
        alert(JSON.stringify(formData, null, 2));
        handleLibraryClick();
    };

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
                                value={formData.Difficulty_Supporting.Dressing}
                                onChange={(e) =>
                                    handleChange('Difficulty_Supporting', 'Dressing', parseInt(e.target.value))
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
                                value={formData.Difficulty_Supporting.Bathing_showering}
                                onChange={(e) =>
                                    handleChange('Difficulty_Supporting', 'Bathing_showering', parseInt(e.target.value))
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
                                value={formData.Difficulty_Supporting.Grooming}
                                onChange={(e) =>
                                    handleChange('Difficulty_Supporting', 'Grooming', parseInt(e.target.value))
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
                                value={formData.Difficulty_Supporting.Meal_preparation_eating}
                                onChange={(e) =>
                                    handleChange('Difficulty_Supporting', 'Meal_preparation_eating', parseInt(e.target.value))
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
                                value={formData.Difficulty_Supporting.Medications}
                                onChange={(e) =>
                                    handleChange('Difficulty_Supporting', 'Medications', parseInt(e.target.value))
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
                                value={formData.Difficulty_Supporting.Household_work}
                                onChange={(e) =>
                                    handleChange('Difficulty_Supporting', 'Household_work', parseInt(e.target.value))
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
                                value={formData.Difficulty_with_changes}
                                onChange={(e) => handleChange('Difficulty_with_changes', null, parseInt(e.target.value))}
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
                                value={formData.Experiencing_changes.Your_family_member}
                                onChange={(e) =>
                                    handleChange('Experiencing_changes', 'Your_family_member', parseInt(e.target.value))
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
                                value={formData.Experiencing_changes.Your_spouse_partner}
                                onChange={(e) =>
                                    handleChange('Experiencing_changes', 'Your_spouse_partner', parseInt(e.target.value))
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
                                value={formData.Experiencing_changes.Coworkers_employer}
                                onChange={(e) =>
                                    handleChange('Experiencing_changes', 'Coworkers_employer', parseInt(e.target.value))
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
                                value={formData.Difficulty_with_any_D.Sleep}
                                onChange={(e) =>
                                    handleChange('Difficulty_with_any_D', 'Sleep', parseInt(e.target.value))
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
                                value={formData.Difficulty_with_any_D.Physical_health}
                                onChange={(e) =>
                                    handleChange('Difficulty_with_any_D', 'Physical_health', parseInt(e.target.value))
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
                                value={formData.Difficulty_with_any_D.Emotional_health}
                                onChange={(e) =>
                                    handleChange('Difficulty_with_any_D', 'Emotional_health', parseInt(e.target.value))
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
                                value={formData.Difficulty_with_any_E.Finding_enough_time}
                                onChange={(e) =>
                                    handleChange('Difficulty_with_any_E', 'Finding_enough_time', parseInt(e.target.value))
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
                                value={formData.Difficulty_with_any_E.Participating_in_social}
                                onChange={(e) =>
                                    handleChange('Difficulty_with_any_E', 'Participating_in_social', parseInt(e.target.value))
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
                                value={formData.Difficulty_with_any_E.Spending_time_with_others}
                                onChange={(e) =>
                                    handleChange('Difficulty_with_any_E', 'Spending_time_with_others', parseInt(e.target.value))
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
                                value={formData.Difficulty_with_any_E.Maintaining_hobbies}
                                onChange={(e) =>
                                    handleChange('Difficulty_with_any_E', 'Maintaining_hobbies', parseInt(e.target.value))
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
                                value={formData.Difficulty_with_any_E.Managing_your_various}
                                onChange={(e) =>
                                    handleChange('Difficulty_with_any_E', 'Managing_your_various', parseInt(e.target.value))
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
                                value={formData.Difficulty_with_any_E.Interruptions}
                                onChange={(e) =>
                                    handleChange('Difficulty_with_any_E', 'Interruptions', parseInt(e.target.value))
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
