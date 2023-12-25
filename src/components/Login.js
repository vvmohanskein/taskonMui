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



export function allowsOnlyNumeric(e) {
  const re = /^[0-9\b]+$/;
  if (!re.test(e.key)) {
    e.preventDefault();
  }
}

export function Login() {


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

  const handleInputChange =(e)=>{
    console.log(e.target.value);
    const  { name, value } = e.target;
    const trimmedValue = value.trim()
    setFormData((formData) => ({
      ...formData,
      [name]: trimmedValue,
    }));

  }
  
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
