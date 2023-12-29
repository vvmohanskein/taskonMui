import { Card, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./login.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
  import { ValidateData } from "../validation/Errorhandle";
import moment from "moment";
import { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";


/**
 * The function allowsOnlyNumeric prevents non-numeric characters from being entered in an input field.
 * @param e - The parameter "e" is an event object that represents the event that triggered the
 * function. In this case, it is likely an event object related to a key press event.
 */


export function allowsOnlyNumeric(e) {
  const re = /^[0-9\b]+$/;
  if (!re.test(e.key)) {
    e.preventDefault();
  }
}

export function Login() {


/* The `initialState` constant is defining an initial state for the form data. It is an object with two
properties: `username` and `mobilenumber`, both initially set to an empty string. This initial state
will be used in the `useState` hook to initialize the `formData` state variable. */
  const initialState = {
    username :'', 
    mobilenumber :'',

  }


  const [formData,setFormData] = useState(initialState)
  const [formError,setFormError] = useState(initialState)
  const [dobDate,setDobDate]= useState(null)
  const [dobError,setDobError] = useState('')
  const formattedMaxDate = new Date("2000-12-31").toISOString().split("T")[0];
  const formattedDate = new Date("01-01-1970").toISOString().split("T")[0];
const navigate = useNavigate()

  const today = moment().subtract(22,"year")
  // const maxFormat = new Date(today).toISOString().split("T")[0];
  const maxFormat = moment(today).format('YYYY-MM-DD')

  const minDay = moment().subtract(53, "year")
  // const minFormat = new Date(minDay).toISOString().split("T")[0];
  const minFormat = moment(minDay).format('YYYY-MM-DD')
  console.log(minFormat, maxFormat);
  const shouldDisable =(date)=>{
    console.log(date, formattedMaxDate)
    return dayjs(date) > dayjs(formattedMaxDate)

  }

  /**
   * The function `handleInputChange` logs the value of an input element and updates the form data with
   * the trimmed value.
   * @param e - The parameter `e` is an event object that is passed to the `handleInputChange`
   * function. It represents the event that occurred, such as a change in the input field value.
   */
  const handleInputChange =(e)=>{
    console.log(e.target.value);
    const  { name, value } = e.target;
    const trimmedValue = value.trim()
    setFormData((formData) => ({
      ...formData,
      [name]: trimmedValue,
    }));

  }
  
/**
 * The `handleChange` function takes an event object as a parameter, extracts the name and value
 * properties from the event object, formats the selected date using Moment.js, and logs the formatted
 * date to the console.
 * @param e - The parameter `e` is an event object that is passed to the `handleChange` function. It
 * likely contains information about the event that triggered the function, such as the target element
 * and the value of the input field.
 */
  const handleChange = (e) => {

    const  { name, value } = e.$d;

 const selectedDate = e.$d
//  const selectionDate = new Date(selectedDate).toISOString().split("T")[0];
const selected = moment(selectedDate).format('YYYY-MM-DD')
console.log(selected);
setDobDate(selected)
// if(maxFormat == selected){
//   console.log("dateee");
// }
// else{
//   console.log("failed");
// }


    // console.log(e?.$d);
    // var date = e.$d
    // const selectedDate = new Date(date)
    // console.log(selectedDate);
    // const datevalidate = ValidateData.dateValidate(selectedDate).dateLimitCheck()

    // if(datevalidate.message){
    //   console.log("12345",datevalidate.message)
    // }
    // else if ( datevalidate.dateLimitCheck){
    //   console.log(datevalidate.dateLimitCheck)
    // }
    // else{
    //   return null
    // }

  };

/**
 * The handleSubmit function is used to handle form submission and perform validation checks on the
 * form data.
 * @param e - The parameter `e` is an event object that is passed to the `handleSubmit` function when
 * it is called. It is typically used to prevent the default behavior of a form submission, in this
 * case, preventing the page from refreshing when the form is submitted.
 */
  const handleSubmit=(e)=>{
    e.preventDefault();
console.log(formData);
    const errors = {}
    let isFormValid = true;
    if(!formData.username){
      isFormValid = false
      errors['username']="Requried"
      console.log("qwerty");

    }
    if(!formData.mobilenumber){
      isFormValid = false
      errors['mobilenumber']="Requried"
      console.log("qwerty");

    }

  if(!dobDate){
console.log("datee Requried");
setDobError("Requried")

  }else if (dobDate > maxFormat){
    console.log('max Dateee Printed');
    setDobError("Invalid & Maximum Date Entered")

  }
  else if (dobDate < minFormat){
    console.log('min Dateee Printed');
    setDobError("Invalid & Minimum Date Entered")

  }
  else{
    setDobError(null)
  }
    setFormError(errors)

    if(Object.keys(errors).length == 0 && dobError == null){
      navigate('/dashboard')
    }
  }

  console.log(formData);
  return (
    <div className="main-div">
      <form>
        <Card className="main-card">
          <TextField
          value={formData.username}
          name="username"
          onChange={handleInputChange}
            className="name-input"
            variant="outlined"
            label="Enter Your Name"
          />

          
          {
            ! formData.username && formError.username ? <span className="span-error ">{formError.username}</span> :""
          }
               <TextField
          value={formData.mobilenumber}
          name="mobilenumber"
          onChange={handleInputChange}
          onKeyPress={allowsOnlyNumeric}
            className="name-input"
            variant="outlined"
            label="Enter Your Number"
          />
              {
            ! formData.mobilenumber && formError.mobilenumber ? <span className="span-error ">{formError.mobilenumber}</span> :""
          }



  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={ ["DesktopDatePicker"]}>
 <DesktopDatePicker
format="YYYY-MM-DD"
 name ='dob'
 value={dobDate}
// maxDate={maxFormat}
// minDate={minFormat}
 onChange={handleChange}

 />
 {
  ! dobDate  && dobError ? <span className="span-error ">{dobError}</span>: dobDate && dobError ? <span className="span-error ">{dobError}</span> :''
 }
    </DemoContainer>
  </LocalizationProvider>
            
{/* <LocalizationProvider
dateAdapter={AdapterDayjs}
>
<DemoContainer
 components={["DatePicker"]}
>
  <DatePicker
  // disableFuture
  defaultValue={maxFormat}
minDate={minFormat}
maxDate={maxFormat}
views={['year', 'month', 'day']}
onChange={handleChange}
  name="dob"
   value={dob}
  />

</DemoContainer>
</LocalizationProvider> */}

          {/* <LocalizationProvider
            className="name-input"
            dateAdapter={AdapterDayjs}
          >
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                minDate={dayjs(formattedDate)}
                format="DD-MM-YYYY"
                onChange={handleChange}
                value={formData.dob}
                
                // shouldDisableDate={shouldDisable}
                
                // maxDate={moment().subtract(18, "years")}

                 maxDate={dayjs(formattedMaxDate)}
                // disableFuture= {shouldDisable}  
                label="Date of Birth"
              />
            </DemoContainer>
          </LocalizationProvider> */}


          <Button 
          className="submit-btn"

          onClick={handleSubmit}
          >
            Submit
          </Button>

          
     
        </Card>
      </form>
    </div>
  );
}
