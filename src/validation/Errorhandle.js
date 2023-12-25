import dayjs from "dayjs";

export const required = (v) => {
  if (v === null || v === undefined) {
    console.log(v);
    return "Requried";
  } else {
    console.log("else Activated", v);
    return null;
  }
};

export const dateMinMaxCheck = (selectedChangedDate) => {
  console.log(selectedChangedDate);

  const maxDate = new Date("2000-12-31")
  const minDate =  new Date("1970-01-01")
  const formattedMaxDate = new Date(maxDate).toISOString().split("T")[0];
  const formattedDate = new Date(minDate).toISOString().split("T")[0];
const  selectedChangeDate = (new Date(selectedChangedDate)).toISOString().split("T")[0]
console.log(selectedChangeDate);
  console.log("*******",selectedChangeDate);
  console.log("minnnnnnn",formattedDate);
  console.log("maxxxxxx",formattedMaxDate);

  if (isNaN(selectedChangeDate)&& selectedChangeDate >= formattedMaxDate) {
    console.log("iff uhhh", selectedChangeDate > formattedMaxDate);
    return "Invalid Date and Maximum value";
  } 
  else if (isNaN(selectedChangeDate) && selectedChangeDate < formattedDate) {
    console.log("else if uhhhh", selectedChangeDate < formattedDate);
    return "Invalid Date and Minimum Value";
  } else {
    console.log("elssse UUHHHH");

    return null;
  }
};

export const ValidateData = {
  dateValidate: (v) => {
    console.log(v);
   ;

    console.log("selected Date", v);
    const checkEmpty = required(v);
    console.log(checkEmpty);
    return {
      message: checkEmpty,

      dateLimitCheck: () => {
        const checkingLimit = dateMinMaxCheck(v);
        console.log(checkingLimit);

        return {
          message: checkEmpty,
          dateLimitCheck: checkingLimit,
        };
      },
    };
  },
};
