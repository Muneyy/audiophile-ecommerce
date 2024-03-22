'use client'

import React from 'react'
import styles from './Checkout.module.sass'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import FormField from './FormField'

const Checkout = () => {
  const userSchema = z.object({
    name: z.string().min(3, { message: 'Name is too short' }),
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
    <section className={styles.checkoutSection}>
      <h1>CHECKOUT</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <label htmlFor="paymentMethod">Payment Method</label>
          <div className={`${styles.formGroup}`}>
            <label className={styles.radioGroup}>
              <input
                type="radio"
                name="paymentMethod"
                id="e-money"
                value="e-money"
              />{' '}
              e-Money
            </label>
            <label className={styles.radioGroup}>
              <input
                type="radio"
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
        <div className={styles.formSection}>
          <button type="submit">PLACE ORDER</button>
        </div>
      </form>
    </section>
  )
}

export default Checkout
