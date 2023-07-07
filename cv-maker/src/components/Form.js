import React, { useState } from "react";

const Form = ({submitForm}) => {

    // handlers for data changes
    const handleFirstNameChange  = (e) => {
        setData({
            ...data,
            name: e.target.value,
        })
    }
    const handleLastNameChange  = (e) => {
        setData({
            ...data,
            lastName: e.target.value,
        })
    }
    const handlePhoneChange  = (e) => {
        setData({
            ...data,
            phoneNumber: e.target.value,
        })
    }
    const handleUniversityChange  = (e) => {
        setData({
            ...data,
            university: e.target.value,
        })
    }
    const handleStudyTitleChange  = (e) => {
        setData({
            ...data,
            titleOfStudy: e.target.value,
        })
    }
    const handleDateTitleChange  = (e) => {
        setData({
            ...data,
            dateOfTitle: e.target.value,
        })
    }
    const handleCompanyChange  = (e) => {
        setData({
            ...data,
            companyName: e.target.value,
        })
    }
    const handlePositionChange  = (e) => {
        setData({
            ...data,
            positionTitle: e.target.value,
        })
    }
    const handleMainTaskChange  = (e) => {
        setData({
            ...data,
            mainTask: e.target.value,
        })
    }
    const handleStartDateChange  = (e) => {
        setData({
            ...data,
            startDate: e.target.value,
        })
    }
    const handleEndDateChange  = (e) => {
        setData({
            ...data,
            endDate: e.target.value,
        })
    }

    const [data, setData]  = useState('')
    return (
        <form className="form" onSubmit={e => {
                e.preventDefault();
                submitForm(data);
                }
            }>
            <div>
                <h1>Personal information</h1>
                <label>First Name:</label>
                <input type="text" onChange={handleFirstNameChange}></input>
                <br/>
                <label>Last Name:</label>
                <input type="text" onChange={handleLastNameChange}></input>
                <br/>
                <label>Phone number:</label>
                <input type="tel" onChange={handlePhoneChange}></input>
            </div>
            <div>
                <h1>University information</h1>
                <label> University Name:</label>
                <input type="text" onChange={handleUniversityChange}></input>
                <br/>
                <label>Degree Title:</label>
                <input type="text" onChange={handleStudyTitleChange}></input>
                <br/>
                <label>Degree Date:</label>
                <input type="date" onChange={handleDateTitleChange}></input>
            </div>
            <div>
                <h1>Work information</h1>
                <label>Company Name:</label>
                <input type="text" onChange={handleCompanyChange}></input>
                <br/>
                <label>Job Position:</label>
                <input type="text" onChange={handlePositionChange}></input>
                <br/>
                <label>Main Tasks:</label>
                <input type="text" onChange={handleMainTaskChange}></input>
                <br/>
                <label>Start Date :</label>
                <input type="date" onChange={handleStartDateChange}></input>
                <br/>
                <label>End Date :</label>
                <input type="date" onChange={handleEndDateChange}></input>
            </div>
            <input type="submit"/>
        </form>
    );
}

export default Form