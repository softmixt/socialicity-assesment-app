import React, { BaseSyntheticEvent } from 'react';
import classNames from 'classnames';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface UserFormPropTypes {
  errors: { [x: string]: any; },
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>,
  register: UseFormRegister<FieldValues>,
  submitText: string,
}
export default function UserForm({
  errors, onSubmit, register, submitText,
}: UserFormPropTypes) {
  return (
    <div className="row g-5 m-5">
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>

        <form className="p-0" onSubmit={onSubmit}>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">First name</label>
              <input
                {...register('first_name')}
                id="firstName"
                className={classNames(['form-control', 'form-control-sm', { 'is-invalid': errors.first_name }])}
              />
              {errors.first_name && (
                <div id="validationFirstNameFeedback" className="invalid-feedback">
                  <p>{errors.first_name?.message}</p>
                </div>
              )}
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input
                {...register('last_name')}
                id="lastName"
                className={classNames(['form-control', 'form-control-sm', { 'is-invalid': errors.last_name }])}
              />
              {errors.last_name && (
                <div id="validationLastNameFeedback" className="invalid-feedback">
                  <p>{errors.last_name?.message}</p>
                </div>
              )}
            </div>

            <div className="col-sm-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                {...register('email')}
                id="email"
                className={classNames(['form-control', 'form-control-sm', { 'is-invalid': errors.email }])}
              />
              {errors.email && (
                <div id="validationEmailFeedback" className="invalid-feedback">
                  <p>{errors.email?.message}</p>
                </div>
              )}
            </div>
            <div className="col-sm-6">
              <label htmlFor="avatar" className="form-label">Avatar</label>
              <input
                {...register('avatar')}
                id="avatar"
                className={classNames(['form-control', 'form-control-sm', { 'is-invalid': errors.avatar }])}
              />
              {errors.avatar && (
                <div id="validationAvatarFeedback" className="invalid-feedback">
                  <p>{errors.avatar?.message}</p>
                </div>
              )}
            </div>
          </div>
          <hr className="my-4" />
          <button className=" btn btn-primary btn-sm" type="submit">
            <i className="fa-solid fa-file-pen" />
            {' '}
            {submitText}
          </button>
        </form>

      </div>

    </div>
  );
}
