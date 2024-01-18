export interface FormStep1Props { }

export interface FormStepOneProps {
    name: string;
    dob: string;
    gender: string;
    mobile: string;
    govId?: string;
    govIdType?: string;
}


export interface FormStep2Props { }

export interface FormDataStep2 {
    address?: string;
    state?: string;
    city?: string;
    country?: string;
    pincode?: string;
}
