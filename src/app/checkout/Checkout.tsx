'use client'

import React from 'react'
import styles from './Checkout.module.sass'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
            <div className={styles.labelAndError}>
              <label htmlFor="name">Name</label>
              {errors.name && <p>{errors.name.message?.toString()}</p>}
            </div>
            <input
              {...register('name')}
              name="name"
              type="text"
              placeholder="Alexei Ward"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input name="email" type="email" placeholder="alexei@gmail.com" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input name="phone" type="tel" placeholder="+1 202-555-0135" />
          </div>
        </div>
        <div className={styles.formSection}>
          <span>SHIPPING INFO</span>
          <div className={`${styles.formGroup} ${styles.twoColumns}`}>
            <label htmlFor="address">Address</label>
            <input
              name="address"
              type="text"
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="zip-code">ZIP Code</label>
            <input name="zip-code" type="number" placeholder="10301" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <input name="city" type="text" placeholder="New York" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="country">Country</label>
            <input name="country" type="text" placeholder="United States" />
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
            <label htmlFor="e-money number">e-Money Number</label>
            <input
              name="e-money-number"
              type="number"
              placeholder="238521993"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="e-money-pin">e-Money PIN</label>
            <input name="e-money-pin" type="number" placeholder="6891" />
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
