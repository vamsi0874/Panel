import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {CreateEmployeeSchema} from '../schemas'
import { createEmployee } from '../actions/create-employee';
import { FormError } from './form-error';
import { FormSuccess } from './form-success';
import { useNavigate } from 'react-router-dom';
import Upload from './upload';

export const CreateEmployee = () => {
const [isPending,startTransition] = useTransition()
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const navigate = useNavigate()
const [imageUrl, setImageUrl] = useState(null);
const [uploading, setUploading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(CreateEmployeeSchema),
  });

  
const onSubmit = async (values) => { // Make onSubmit async
  if (imageUrl) { // Check if imageUrl is available
      const newValues = { ...values, imageUrl };

      startTransition(async () => { // Make transition callback async
          try {
              const res = await createEmployee(newValues); // Use await
              console.log('values', newValues); // Log newValues

              if (res.data?.error) {
                  setError(res.data.error);
              }
              if (res.data?.success) {
                  navigate('/employee-list');
                  setSuccess(res.data.success);
              }
          } catch (error) {
              console.error('create employee error', error);
              setError(error.message || "An error occurred"); // More robust error handling
          }
      });
  } else if (!uploading) {
      setError("Please upload an image before submitting."); // User-friendly message
  }
};

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Create Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Name</label>
          <input
            type="text"
            {...register('name')}
            className="border p-2 w-full"
          />
          {errors.name && <span className="text-red-600">{errors.name.message}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            {...register('email')}
            className="border p-2 w-full"
          />
          {errors.email && <span className="text-red-600">{errors.email.message}</span>}
        </div>

        <div>
          <label>Mobile No</label>
          <input
            type="text"
            {...register('mobile')}
            className="border p-2 w-full"
          />
          {errors.mobile && <span className="text-red-600">{errors.mobile.message}</span>}
        </div>

        <div>
          <label>Designation</label>
          <select {...register('designation')} className="border p-2 w-full">
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
          {errors.designation && (
            <span className="text-red-600">{errors.designation.message}</span>
          )}
        </div>

        <div>
          <label>Gender</label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                value="Male"
                {...register('gender')}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                {...register('gender')}
              />
              Female
            </label>
          </div>
          {errors.gender && <span className="text-red-600">{errors.gender.message}</span>}
        </div>

        <div>
          <label>Course</label>
          <div className="space-x-4">
            <label>
              <input type="checkbox" value="MCA" {...register('course')} />
              MCA
            </label>
            <label>
              <input type="checkbox" value="BCA" {...register('course')} />
              BCA
            </label>
            <label>
              <input type="checkbox" value="BSC" {...register('course')} />
              BSC
            </label>
          </div>
          {errors.course && <span className="text-red-600">{errors.course.message}</span>}
        </div>

        <div>
        <Upload setImageUrl={setImageUrl} setUploading={setUploading}  />
        {uploading && <p>Uploading image...</p>}
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <button disabled={isPending} type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
       
      </form>
    </div>
  );
};


