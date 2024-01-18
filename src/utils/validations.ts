
import * as yup from "yup";


export const step1Schema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    gender: yup.string().required("Gender is a required field"),
    dob: yup.string().required("DOB is required field"),
    govId: yup.string(),
    govIdType: yup.string(),
    mobile: yup
        .string()
        .required("Phone is a required field")
        .matches(
            /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            "Invalid phone number format"
        ),

});

export const step2Schema = yup.object().shape({
    address: yup.string(),
    country: yup.string(),
    city: yup.string(),
    state: yup.string(),
    pincode: yup.string().matches(/^\d{5}(?:[-\s]\d{4})?$/, "Invalid pincode format"),
});


