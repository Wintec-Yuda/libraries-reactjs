import React from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
  // Menggunakan useForm hook dari React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Fungsi untuk menangani submit
  const onSubmit = (data) => {
    console.log(data); // Menampilkan data form di konsol
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Field Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: 'Invalid email address',
              }
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>

        {/* Field Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
