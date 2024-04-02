'use client'

import React, { useContext, useState } from 'react'
import styles from './Checkout.module.sass'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormField from './FormField'
import Summary from './Summary'
import userSchema from './_formSchema/formSchema'
import CODIcon from '@/svgs/CODIcon'
import { CartContext } from '@/context/CartContext'

const FORM_ID = 'checkout-form'

const Checkout = () => {
  const [CODSelected, setCODSelected] = useState(false)
  const { cartQuantity } = useContext(CartContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  })

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  const toggleCODSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCODSelected(e.target.value === 'cash-on-delivery')
  }

  const renderForm = () => {
    if (cartQuantity === 0) {
      return (
        <div className={styles.emptyCart}>
          <p className={styles.emptyCartText}>
            Please add items to your cart first before filling out the checkout
            form.
          </p>
        </div>
      )
    }
    return (
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
            <span className={styles.paymentMethodSpan}>Payment Method</span>
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
                onChange={toggleCODSelection}
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
                onChange={toggleCODSelection}
              />{' '}
              Cash on Delivery
            </label>
          </div>
          {CODSelected ? (
            <div className={`${styles.notice} ${styles.twoColumns}`}>
              <div>
                <CODIcon />
              </div>
              <p className={styles.noticeText}>
                {`The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.`}
              </p>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </form>
    )
  }

  return (
    <>
      <section className={styles.checkoutSection}>
        <h1>CHECKOUT</h1>
        {renderForm()}
      </section>
      <Summary FORM_ID={FORM_ID} />
    </>
  )
}

export default Checkout
