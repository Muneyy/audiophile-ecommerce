import React from 'react'
import styles from './FormField.module.sass'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface FormFieldProps {
  name: string
  label: string
  type: string
  placeholder: string
  errors: FieldErrors<FieldValues>
  register: UseFormRegister<FieldValues>
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type,
  placeholder,
  errors,
  register,
}) => {
  return (
    <>
      <div className={styles.labelAndError}>
        <label htmlFor={name}>{label}</label>
        {errors.name && <p>{errors.name.message?.toString()}</p>}
      </div>
      <input
        {...register(name)}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </>
  )
}

export default FormField
