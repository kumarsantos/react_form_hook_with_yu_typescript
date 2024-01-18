import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { yupResolver } from '@hookform/resolvers/yup';
import { handleStep, reset, storeSecondStep } from '../../redux/slices/formSlice';
import { createData } from '../../redux/slices/allDataSlice';
import { Autocomplete, TextField } from '@mui/material';
import useGetAllCountriesList from '../../hooks/useGetAllCountriesList';
import { step2Schema } from '../../utils/validations';
import { FormDataStep2, FormStep2Props } from '../../types';



const FormStep2: React.FC<FormStep2Props> = () => {
    const dispatch = useAppDispatch();
    const formData = useAppSelector((state) => state.formEnterData);
    const { allCountries } = useGetAllCountriesList();



    const { register, handleSubmit, formState: { errors } } = useForm<FormDataStep2>({
        resolver: yupResolver(step2Schema),
        defaultValues: {
            address: formData.address,
            state: formData.state,
            city: formData.city,
            country: formData.country,
            pincode: formData.pincode,
        }
    });

    const onSubmit: SubmitHandler<FormDataStep2> = (data) => {
        dispatch(storeSecondStep(data));
        dispatch(handleStep(1));
    };

    const handleFormSubmit = async () => {
        dispatch(createData(formData))
        dispatch(reset())
        dispatch(handleStep(1));
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <label htmlFor="address">Address</label>
                        <TextField
                            id="address" {...register('address')}
                            placeholder='Address'
                        />
                    </div>
                    {errors.address && <p>{errors.address.message}</p>}
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <label htmlFor="state">State</label>
                    <TextField
                        id="state" {...register('state')}
                        placeholder='State'
                    />
                    {errors.state && <p>{errors.state.message}</p>}
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <label htmlFor="city">City</label>
                    <TextField
                        id="city" {...register('city')}
                        placeholder='City'
                    />
                    {errors.city && <p>{errors.city.message}</p>}
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <label htmlFor="country">Country</label>
                    <Autocomplete
                        options={allCountries?.map((option: { title: string }) => option.title)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Search input"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'text',
                                }}
                                sx={{ minWidth: '250px' }}
                                value={formData.country}
                                id='country'
                                {...register('country')}
                            />
                        )}
                    />
                    {errors.country && <p>{errors.country.message}</p>}
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <label htmlFor="pincode">Pincode <span>*</span></label>
                    <TextField
                        id="pincode" {...register('pincode')}
                        placeholder='Enter pincode'
                    />
                    {errors.pincode && <p>{errors.pincode.message}</p>}
                </div>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>

                <button type='submit' style={{ width: '200px', marginTop: '2rem', height: '2.5rem', background: '#036fcb', color: 'white', outline: 'none', border: 'none' }}>
                    Previous
                </button>
                <button type='button' style={{ width: '200px', marginTop: '2rem', height: '2.5rem', background: '#036fcb', color: 'white', outline: 'none', border: 'none' }} onClick={handleFormSubmit} >Submit</button>
            </div>
        </form>
    );
};

export default FormStep2;