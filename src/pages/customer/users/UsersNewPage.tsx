import React, { useEffect, useState } from 'react';

import ListUsers from 'parts/users/ListUsers';
import { NavLink, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { toast } from 'react-hot-toast';
import classNames from 'classnames';
import {
  addUser, selectUsers, updateUser, UserDataState,
} from '../../../state/users/usersSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import UserForm from '../../../parts/users/UserForm';

export default function UsersNewPage(props: any) {
  const dispatch = useAppDispatch();

  const schema = yup.object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().email(),
    avatar: yup.string().required(),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(addUser(data));
    toast.success('User successfully added !');
  };

  return (
    <UserForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      submitText="New User"
    />
  );
}
