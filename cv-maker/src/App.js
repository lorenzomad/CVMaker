import Form from "./components/Form";
import Preview from "./components/Preview";
import { useState } from "react";

function App() {

  const [fieldValues, setFields] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    university: '',
    titleOfStudy: '',
    dateOfTitle: '',
    companyName: '',
    positionTitle: '',
    mainTask: '',
    startDate: '',
    endDate: '',
  })

  const submitForm = (data) => {
    setFields(data);
  }

  return (
    <div className="container">
      <div className="form">
        <h1>Insert your data</h1>
        <Form submitForm={submitForm}></Form>
      </div>
      <div className="preview">
        <h1>Preview</h1>
        <Preview data= {fieldValues}></Preview>
      </div>
    </div>
  );
}

export default App;
