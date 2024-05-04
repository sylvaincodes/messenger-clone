import { cn } from '@/lib/utils';
import React from 'react'
import {
  FieldErrors, FieldValues, UseFormRegister
} from 'react-hook-form'

export const Input = ({ id, label, required, register, errors, disabled, type }: {
  id: string; label: string; required: boolean; register: UseFormRegister<FieldValues>; errors: FieldErrors, disabled: boolean, type: string
}) => {
  return (
    <div className='mb-1 sm:mb-2'>
      <label
        htmlFor={id}
        className="inline-block mb-1 font-medium"
      >
        {label}
      </label>      <div>
        <input autoComplete={id} type={type} id={id} disabled={disabled} {...register(id, { required })} className={cn('flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline', errors[id] && "focus:ring-rose-500", disabled && "opacity-50 cursor-default ")} />
      </div>
    </div>
  )
}
