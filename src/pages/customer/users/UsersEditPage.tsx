import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { selectUsers, updateUser, UserDataState } from 'state/users/usersSlice';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import UserForm from 'parts/users/UserForm';

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
    <UserForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      submitText="Update User"
    />
  );
}
