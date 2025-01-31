import React, { useState, useEffect } from 'react';
import { useNavigate , useLocation  } from 'react-router-dom';
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
    const location = useLocation();

    const [loading, setLoading] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("Sidebar is " + (isSidebarOpen ? "open" : "closed"));
    };

    const handleLibraryClick = (libraryOrder) => {
        const jsonString = JSON.stringify(libraryOrder);
        console.log('Raw Library Order : ' + jsonString);

        const firstItem = libraryOrder[0];

        // const data = [3, 2, 4, 5, 1]; 
        if (libraryOrder.length > 0) {
            navigate(`/library/core-topic${firstItem}`);
        } else {
            navigate(`/need-assessment`);
        }

        // const data = [3, 2, 4, 5, 1]; // Static array for development purposes
        // if (data.length > 0) {
        //     const firstTopic = 1;
        //     navigate(`/library/core-topic${firstTopic}`);
        // } else {
        //     navigate(`/need-assessment`);
        // }
    };

    const [formData, setFormData] = useState(
        {
            userID: 0,
            difficulty_Supporting: {
                dressing: "",
                bathing_showering: "",
                grooming: "",
                meal_preparation_eating: "",
                medications: "",
                household_work: "",
            },
            difficulty_with_changes: "",
            experiencing_changes: {
                your_family_member: "",
                your_spouse_partner: "",
                coworkers_employer: "",
            },
            difficulty_with_any_D: {
                sleep: "",
                physical_health: "",
                emotional_health: "",
            },
            difficulty_with_any_E: {
                finding_enough_time: "",
                participating_in_social: "",
                spending_time_with_others: "",
                maintaining_hobbies: "",
                managing_your_various: "",
                interruptions: "",
            },
        }
    );

    const [formData2, setFormData2] = useState(
        {
            userID: 0,
            dressing: "",
            bathing_showering: "",
            grooming: "",
            meal_preparation_eating: "",
            medications: "",
            household_work: "",
            difficulty_with_changes: "",
            your_family_member: "",
            your_spouse_partner: "",
            coworkers_employer: "",
            sleep: "",
            physical_health: "",
            emotional_health: "",
            finding_enough_time: "",
            participating_in_social: "",
            spending_time_with_others: "",
            maintaining_hobbies: "",
            managing_your_various: "",
            interruptions: ""
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

        if(field === null){
            setFormData((prevData) => ({
                ...prevData,
                'difficulty_with_changes': value,
            }));
        }
        setFormData2((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitToAPI();
        // handleLibraryClick();
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
        }else{
            navigate(`/login`);
        }
    }, []);

    // const preloadData = () => {
    //     setLoading(true);
    //     const currentPath = location.pathname;
    //     const parts = currentPath.split('=');
    //     const userId = parts[1];
      
    //     axiosInstance.get(`/caregiver/v1/get-demographics/${userId}`)
    //     .then(response => {
    //       if (response) {
    //         updateUserID(response.data.id);
    //     }
    //     })
    //     .catch(error => {
    //         console.error('Error', error);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    //   }

    const submitToAPI = () => {
        setLoading(true);

        axiosInstance.post('/caregiver/v1/save-need-assessment', formData2)
            .then(response => {
                const needSequence = response.data;
                const jsonString = JSON.stringify(needSequence);
                console.log(`Library Sequence : ${jsonString}`)
                const needSequenceArray = JSON.parse(jsonString);
                if(needSequenceArray.length > 0 ){
                    LocalStorageService.setArray('libraryorder', needSequenceArray);
                }
                handleLibraryClick(response.data);
            
            })
            .catch(error => {
                console.error('Error', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const options = [
        { value: 1, label: 'None/Little' },
        { value: 2, label: 'Some/Significant' },
        { value: 3, label: 'Extreme' },
    ];

    return (
        <div className={`app-container ${isSidebarOpen ? 'with-sidebar' : ''}`}>
            <button className="sidebar-toggle" onClick={handleSidebarToggle}>
                <FaBars />
            </button>
            {isSidebarOpen && <Sidebar />}
            <Header />
            <Container maxWidth="lg" className="form-container">
                <Typography variant="h4" gutterBottom>
                    Needs Assessment Questionnaire
                </Typography>
                <Typography gutterBottom>
                Experiencing some stress is part of everyday life, however, we also know that providing daily support to someone living with dementia can be exhausting. 
                When considering how best to meet the needs of a person with dementia, it is important to think about what's best for the person while also evaluating the impact that caregiving is having on your own well-being. 
                <br/>At this point in your caregiving journey, please select the best answer that most appropriately describes the level of difficulty you are experiencing with the following areas:  
                </Typography>
                {!loading && (
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
                                required
                                value={formData.difficulty_Supporting.dressing}
                                onChange={(e) =>
                                    handleChange('difficulty_Supporting', 'dressing', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_Supporting.dressing && formData.difficulty_Supporting.dressing !== ""}
                                helperText={!formData.difficulty_Supporting.dressing && formData.difficulty_Supporting.dressing !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_Supporting.bathing_showering}
                                onChange={(e) =>
                                    handleChange('difficulty_Supporting', 'bathing_showering', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_Supporting.bathing_showering && formData.difficulty_Supporting.bathing_showering !== ""}
                                helperText={!formData.difficulty_Supporting.bathing_showering && formData.difficulty_Supporting.bathing_showering !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_Supporting.grooming}
                                onChange={(e) =>
                                    handleChange('difficulty_Supporting', 'grooming', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_Supporting.grooming && formData.difficulty_Supporting.grooming !== ""}
                                helperText={!formData.difficulty_Supporting.grooming && formData.difficulty_Supporting.grooming !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_Supporting.meal_preparation_eating}
                                onChange={(e) =>
                                    handleChange('difficulty_Supporting', 'meal_preparation_eating', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_Supporting.meal_preparation_eating && formData.difficulty_Supporting.meal_preparation_eating !== ""}
                                helperText={!formData.difficulty_Supporting.meal_preparation_eating && formData.difficulty_Supporting.meal_preparation_eating !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_Supporting.medications}
                                onChange={(e) =>
                                    handleChange('difficulty_Supporting', 'medications', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_Supporting.medications && formData.difficulty_Supporting.medications !== ""}
                                helperText={!formData.difficulty_Supporting.medications && formData.difficulty_Supporting.medications !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_Supporting.household_work}
                                onChange={(e) =>
                                    handleChange('difficulty_Supporting', 'household_work', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_Supporting.household_work && formData.difficulty_Supporting.household_work !== ""}
                                helperText={!formData.difficulty_Supporting.household_work && formData.difficulty_Supporting.household_work !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_with_changes}
                                onChange={(e) => handleChange('difficulty_with_changes', null, parseInt(e.target.value))}
                                error={!formData.difficulty_with_changes && formData.difficulty_with_changes !== ""}
                                helperText={!formData.difficulty_with_changes && formData.difficulty_with_changes !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.experiencing_changes.your_family_member}
                                onChange={(e) =>
                                    handleChange('experiencing_changes', 'your_family_member', parseInt(e.target.value))
                                }
                                error={!formData.experiencing_changes.your_family_member && formData.experiencing_changes.your_family_member !== ""}
                                helperText={!formData.experiencing_changes.your_family_member && formData.experiencing_changes.your_family_member !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.experiencing_changes.your_spouse_partner}
                                onChange={(e) =>
                                    handleChange('experiencing_changes', 'your_spouse_partner', parseInt(e.target.value))
                                }
                                error={!formData.experiencing_changes.your_spouse_partner && formData.experiencing_changes.your_spouse_partner !== ""}
                                helperText={!formData.experiencing_changes.your_spouse_partner && formData.experiencing_changes.your_spouse_partner !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.experiencing_changes.coworkers_employer}
                                onChange={(e) =>
                                    handleChange('experiencing_changes', 'coworkers_employer', parseInt(e.target.value))
                                }
                                error={!formData.experiencing_changes.coworkers_employer && formData.experiencing_changes.coworkers_employer !== ""}
                                helperText={!formData.experiencing_changes.coworkers_employer && formData.experiencing_changes.coworkers_employer !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_with_any_D.sleep}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_D', 'sleep', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_with_any_D.sleep && formData.difficulty_with_any_D.sleep !== ""}
                                helperText={!formData.difficulty_with_any_D.sleep && formData.difficulty_with_any_D.sleep !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_with_any_D.physical_health}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_D', 'physical_health', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_with_any_D.physical_health && formData.difficulty_with_any_D.physical_health !== ""}
                                helperText={!formData.difficulty_with_any_D.physical_health && formData.difficulty_with_any_D.physical_health !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_with_any_D.emotional_health}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_D', 'emotional_health', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_with_any_D.emotional_health && formData.difficulty_with_any_D.emotional_health !== ""}
                                helperText={!formData.difficulty_with_any_D.emotional_health && formData.difficulty_with_any_D.emotional_health !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_with_any_E.finding_enough_time}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_E', 'finding_enough_time', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_with_any_E.finding_enough_time && formData.difficulty_with_any_E.finding_enough_time !== ""}
                                helperText={!formData.difficulty_with_any_E.finding_enough_time && formData.difficulty_with_any_E.finding_enough_time !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_with_any_E.participating_in_social}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_E', 'participating_in_social', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_with_any_E.participating_in_social && formData.difficulty_with_any_E.participating_in_social !== ""}
                                helperText={!formData.difficulty_with_any_E.participating_in_social && formData.difficulty_with_any_E.participating_in_social !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_with_any_E.spending_time_with_others}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_E', 'spending_time_with_others', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_with_any_E.spending_time_with_others && formData.difficulty_with_any_E.spending_time_with_others !== ""}
                                helperText={!formData.difficulty_with_any_E.spending_time_with_others && formData.difficulty_with_any_E.spending_time_with_others !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_with_any_E.maintaining_hobbies}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_E', 'maintaining_hobbies', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_with_any_E.maintaining_hobbies && formData.difficulty_with_any_E.maintaining_hobbies !== ""}
                                helperText={!formData.difficulty_with_any_E.maintaining_hobbies && formData.difficulty_with_any_E.maintaining_hobbies !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_with_any_E.managing_your_various}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_E', 'managing_your_various', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_with_any_E.managing_your_various && formData.difficulty_with_any_E.managing_your_various !== ""}
                                helperText={!formData.difficulty_with_any_E.managing_your_various && formData.difficulty_with_any_E.managing_your_various !== "" ? "This field is required" : ""}
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
                                required
                                value={formData.difficulty_with_any_E.interruptions}
                                onChange={(e) =>
                                    handleChange('difficulty_with_any_E', 'interruptions', parseInt(e.target.value))
                                }
                                error={!formData.difficulty_with_any_E.interruptions && formData.difficulty_with_any_E.interruptions !== ""}
                                helperText={!formData.difficulty_with_any_E.interruptions && formData.difficulty_with_any_E.interruptions !== "" ? "This field is required" : ""}
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
                 )}
                {loading && (
                <div>
                    <LoadingComponent/>
                </div>
                )}
            </Container>
            <Footer />
        </div>
    );
};

export default NeedAssessmentForm;
