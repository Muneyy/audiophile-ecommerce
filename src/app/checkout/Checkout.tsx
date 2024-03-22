'use client'

import React from 'react'
import styles from './Checkout.module.sass'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import FormField from './FormField'
import Summary from './Summary'

const FORM_ID = 'checkout-form'

const Checkout = () => {
  const userSchema = z.object({
    name: z
      .string()
      .min(3, { message: 'Name must be at least 3 characters long' }),
    email: z
      .string()
      .email({ message: 'Please provide a valid email address' }),
    phone: z.string().refine((value) => /^\d{10}$/.test(value), {
      message: 'Please provide a valid 10-digit phone number',
    }),
    address: z
      .string()
      .min(5, { message: 'Address must be at least 5 characters long' }),
    'zip-code': z
      .string()
      .min(3, { message: 'Please provide a valid ZIP Code' }),
    city: z
      .string()
      .min(3, { message: 'City name must be at least 3 characters long' }),
    country: z
      .string()
      .min(3, { message: 'Country name must be at least 3 characters long' }),
    'e-money-number': z
      .string()
      .min(9, { message: 'e-Money number must be at least 9 characters long' }),
    'e-money-pin': z
      .string()
      .min(4, { message: 'e-Money PIN must be at least 4 characters long' }),
    paymentMethod: z
      .string()
      .refine((value) => ['e-money', 'cash-on-delivery'].includes(value), {
        message: 'Please select a valid payment method',
      }),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <>
      <section className={styles.checkoutSection}>
        <h1>CHECKOUT</h1>
        <form id={FORM_ID} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formSection}>
            <span>BILLING DETAILS</span>
            <div className={styles.formGroup}>
              <FormField
                name="name"
                label="Name"
                type="text"
                placeholder="Alexei Ward"
                register={register}
                errors={errors}
              />
            </div>
            <div className={styles.formGroup}>
              <FormField
                name="email"
                label="Email Address"
                type="email"
                placeholder="alexei@gmail.com"
                register={register}
                errors={errors}
              />
            </div>
            <div className={styles.formGroup}>
              <FormField
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="+1 202-555-0135"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className={styles.formSection}>
            <span>SHIPPING INFO</span>
            <div className={`${styles.formGroup} ${styles.twoColumns}`}>
              <FormField
                name="address"
                label="Address"
                type="text"
                placeholder="1137 Williams Avenue"
                register={register}
                errors={errors}
              />
            </div>
            <div className={styles.formGroup}>
              <FormField
                name="zip-code"
                label="ZIP Code"
                type="number"
                placeholder="10301"
                register={register}
                errors={errors}
              />
            </div>
            <div className={styles.formGroup}>
              <FormField
                name="city"
                label="City"
                type="text"
                placeholder="New York"
                register={register}
                errors={errors}
              />
            </div>
            <div className={styles.formGroup}>
              <FormField
                name="country"
                label="Country"
                type="text"
                placeholder="United States"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className={styles.formSection}>
            <span>SHIPPING INFO</span>
            <div className={styles.labelAndError}>
              <label htmlFor="paymentMethod">Payment Method</label>
              {errors.paymentMethod && (
                <p className={styles.error}>Please select a payment method</p>
              )}
            </div>
            <div className={`${styles.formGroup}`}>
              <label className={styles.radioGroup}>
                <input
                  type="radio"
                  {...register('paymentMethod')}
                  name="paymentMethod"
                  id="e-money"
                  value="e-money"
                />{' '}
                e-Money
              </label>
              <label className={styles.radioGroup}>
                <input
                  type="radio"
                  {...register('paymentMethod')}
                  name="paymentMethod"
                  id="cash-on-delivery"
                  value="cash-on-delivery"
                />{' '}
                Cash on Delivery
              </label>
            </div>
            <div className={styles.formGroup}>
              <FormField
                name="e-money-number"
                label="e-Money Number"
                type="number"
                placeholder="238521993"
                register={register}
                errors={errors}
              />
            </div>
            <div className={styles.formGroup}>
              <FormField
                name="e-money-pin"
                label="e-Money PIN"
                type="number"
                placeholder="6891"
                register={register}
                errors={errors}
              />
            </div>
          </div>
        </form>
      </section>
      <Summary FORM_ID={FORM_ID} />
    </>
  )
}

export default Checkout
