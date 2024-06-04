import { cn } from '@/lib/utils';
import React from 'react'
import {
  FieldErrors, FieldValues, UseFormRegister
} from 'react-hook-form'

export const Input = ({ id, label, required, register, errors, disabled, type, placeholder }: {
  id: string; label: string; required: boolean; register: UseFormRegister<FieldValues>; errors: FieldErrors, disabled: boolean, type: string; placeholder?: string
}) => {
  return (
    <div className='mb-2'>
      <div className=''>
        <input placeholder={placeholder} autoComplete={id} type={type} id={id} disabled={disabled} {...register(id, { required })} className={cn('w-full flex-grow h-12 px-4 transition duration-100 bg-neutral-200 rounded-full border  focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline', errors[id] && "border-red-100", disabled && "opacity-50 cursor-default ")} />
        {
          errors[id] && <div className='my-1 flex justify-start items-center p-1 bg-neutral-50 w-full text-red-800 rounded-full font-extrabold tracking-wide'>{errors[id]?.message?.toString()}</div>
        }
      </div>
    </div>
  )
}
