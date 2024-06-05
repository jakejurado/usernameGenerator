import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useUsername from '../hooks/useUsername';
import '../styles/UsernameForm.css';
import { FormData } from '../types/types';

const UsernameForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [dateOfBirthColor, setDateOfBirthColor] = useState<string>('rgb(128, 128, 128)');
  const { generateUsername } = useUsername();

  const changeInputColor = (): void => {
    setDateOfBirthColor('#000000');
  };

  const onSubmit = async (data: FormData) => {
    await generateUsername(data);
  };

  return (
    <form id='usernameForm' onSubmit={handleSubmit(onSubmit)}>
      <ul>
        <li>
          <label htmlFor='firstName'><b>First Name</b></label>
          <input
            id='firstName'  
            type="text"
            placeholder="jane"
            aria-label="First Name"
            {...register('firstName', {
              required: 'First name is required',
              pattern: {
                value: /^[a-zA-Z ]+$/,
                message: 'First name must contain only letters'
              }
            })}
          />
          {errors.firstName && <span className="error">{errors.firstName.message}</span>}
        </li>

        <li>
          <label htmlFor='lastName'><b>Last Name</b></label>
          <input
            id='lastName'
            type="text"
            aria-label="Last Name"
            placeholder="doe"
            {...register('lastName', {
              required: 'Last name is required',
              pattern: {
                value: /^[a-zA-Z ]+$/,
                message: 'Last name must contain only letters'
              }
            })}
          />
          {errors.lastName && <span className="error">{errors.lastName.message}</span>}
        </li>

        <li>
          <label htmlFor='dateOfBirth'><b>Date of Birth</b></label>
          <input
            id='dateOfBirth'
            onFocus={changeInputColor}
            style={{ color: dateOfBirthColor }}
            type="date"
            aria-label="Date of Birth"
            {...register('dateOfBirth', {
              required: 'Date of birth is required',
              max: {
                value: new Date().toISOString().split('T')[0],
                message: 'Please enter a valid date of birth'
              }
            })}
          />
          {errors.dateOfBirth && <span className="error">{errors.dateOfBirth.message}</span>}
        </li>

        <li>
          <label htmlFor='favoriteColor'><b>Favorite Color</b></label>
          <input
            id='favoriteColor'
            type="text"
            aria-label="Favorite Fruit"
            placeholder="apple"
            {...register('favoriteFruit', {
              required: 'Favorite fruit is required',
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Fruit name must contain only letters'
              }
            })}
          />
          {errors.favoriteFruit && <span className="error">{errors.favoriteFruit.message}</span>}
        </li>
      </ul>
      <button type="submit">Generate Username</button>
    </form>
  );
};

export default UsernameForm;
