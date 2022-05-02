import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { selectUsers, updateUser, UserDataState } from 'state/users/usersSlice';
import classNames from 'classnames';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function UsersListPage() {
  const dispatch = useAppDispatch();

  const params = useParams();

  const { userId } = params;
  const [selectedUser, setSelectedUser] = useState<UserDataState | null>();

  const users: UserDataState[] = useAppSelector(selectUsers);

  useEffect(() => {
    const userData = users.filter((u: UserDataState) => (u.id === Number(userId)));
    setSelectedUser(userData[0]);
  }, [users]);

  const schema = yup.object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email(),
    avatar: yup.string().required(),
  }).required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset({
      first_name: selectedUser?.first_name,
      last_name: selectedUser?.last_name,
      email: selectedUser?.email,
      avatar: selectedUser?.avatar,
    });
  }, [selectedUser]);

  const onSubmit = (data) => {
    dispatch(updateUser({ ...data, id: selectedUser?.id }));
    toast.success('User successfully updated !');
  };

  return (
    <div className="row g-5 m-5">
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>

        <form className="p-0" onSubmit={handleSubmit(onSubmit)}>
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
            Update User
          </button>
        </form>

      </div>

    </div>
  );
}
