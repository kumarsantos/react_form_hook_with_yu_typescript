import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { handleStep, storeFirstStep } from '../../redux/slices/formSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { yupResolver } from '@hookform/resolvers/yup';
import DropDown from '../FormElements/DropDown';
import { TextField } from '@mui/material';
import { step1Schema } from '../../utils/validations';
import { FormStep1Props, FormStepOneProps } from '../../types';


const FormStep1: React.FC<FormStep1Props> = () => {
    const dispatch = useAppDispatch();
    const formData = useAppSelector(state => state.formEnterData);

    const { register, handleSubmit, formState: { errors } } = useForm<FormStepOneProps>({
        resolver: yupResolver(step1Schema), defaultValues: {
            name: formData.name,
            dob: formData.dob,
            gender: formData.gender,
            mobile: formData.mobile,
            govId: formData.govId,
            govIdType: formData.govIdType,
        }
    });


    const onSubmit: SubmitHandler<FormStepOneProps> = (data) => {
        dispatch(storeFirstStep(data));
        dispatch(handleStep(2));
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}  >
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <label htmlFor="name" style={{ width: '80px' }}>Name <span>*</span></label>
                        <TextField
                            id="name" {...register('name')}
                            placeholder='Name'
                        />
                    </div>
                    {errors.name && <p style={{ marginLeft: '100px', marginTop: '0.8rem', color: 'red', fontSize: '0.8rem', letterSpacing: '0.4px' }}>{errors.name.message}</p>}
                </div>
                <div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <label htmlFor="dob">Date of Birth or Age <span>*</span></label>
                        <TextField
                            id="dob" {...register('dob')}
                            placeholder='DD/MM/YYYY or Age in Years'
                        />
                    </div>
                    {errors.dob && <p style={{ marginLeft: '165px', marginTop: '0.8rem', color: 'red', fontSize: '0.8rem', letterSpacing: '0.4px' }}>{errors.dob.message}</p>}
                </div>

                <div >
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <label htmlFor="gender">Gender <span>*</span>:</label>
                        <DropDown
                            options={['Male', 'Female']}
                            placeholder='Select gender'
                            value={formData.gender}
                            id='gender'
                            name='gender'
                            sx={{ width: '220px' }}
                            error={errors.gender?.message}
                            onChange={register('gender').onChange}
                        />
                    </div>
                </div>
                <div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <label htmlFor="mobile">Mobile:</label>
                        <TextField
                            id="mobile" {...register('mobile')}
                            placeholder='Enter Mobile'
                        />
                    </div>
                    {errors.mobile && <p style={{ marginLeft: '70px', marginTop: '0.8rem', color: 'red', fontSize: '0.8rem', letterSpacing: '0.4px' }}>{errors.mobile.message}</p>}
                </div>

                <div>
                    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                        <label htmlFor="govIdType">Govt. Issued ID:</label>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>

                            <DropDown
                                options={['Adhar', 'PAN', 'Driving Licence']}
                                placeholder='Select ID Type'
                                value={formData.govIdType}
                                id='govIdType'
                                name='govIdType'
                                onChange={register('govIdType').onChange}
                                sx={{ width: '220px' }}
                                error={errors.govIdType?.message}
                            />
                            <TextField
                                id="govId" {...register('govId')}
                                placeholder='Enter Govt ID'
                                sx={{ width: '330px' }}
                            />
                        </div>
                    </div>
                    {errors.govId && <p>{errors.govId.message}</p>}
                </div>
            </div>
            <button style={{ width: '200px', marginTop: '2rem', height: '2.5rem', background: '#036fcb', color: 'white', outline: 'none', border: 'none' }} type="submit">Next</button>
        </form>
    );
};

export default FormStep1;