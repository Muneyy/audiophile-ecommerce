import { z } from 'zod'

const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email({ message: 'Please provide a valid email address' }),
  phone: z.string().refine((value) => /^\d{10}$/.test(value), {
    message: 'Please provide a valid 10-digit phone number',
  }),
  address: z
    .string()
    .min(5, { message: 'Address must be at least 5 characters long' }),
  'zip-code': z.string().min(3, { message: 'Please provide a valid ZIP Code' }),
  city: z
    .string()
    .min(3, { message: 'City name must be at least 3 characters long' }),
  country: z
    .string()
    .min(3, { message: 'Country name must be at least 3 characters long' }),
  'e-money-number': z
    .string()
    .min(9, { message: 'e-Money number must be at least 9 numbers long' }),
  'e-money-pin': z
    .string()
    .min(4, { message: 'e-Money PIN must be at least 4 numbers long' }),
  paymentMethod: z
    .string()
    .refine((value) => ['e-money', 'cash-on-delivery'].includes(value), {
      message: 'Please select a valid payment method',
    }),
})

export default userSchema
