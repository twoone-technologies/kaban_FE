import FormControl from '~/components/reusable/FormControl';
import InputWrap from '../../reusables/InputWrap';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { EditProfileInputs } from '..';
import { useState } from 'react';
import { useActionData } from 'react-router-dom';
type PasswordProps = {
  idx: number;
  errors: FieldErrors<EditProfileInputs>;
  register: UseFormRegister<EditProfileInputs>;
};

export default function Password({ idx, register, errors }: PasswordProps) {
  const [password, setPassword] = useState({
    new_password: '',
    confirm_password: '',
    current_password: '',
    status: '',
    passwordJson: '',
  });

  const res = useActionData() as { message?: string; error?: string };

  const confirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): string | void => {
    setPassword((prev) => ({ ...prev, confirm_password: e.target.value }));
    if (password.new_password !== e.target.value) {
      setPassword((prev) => ({ ...prev, status: 'Password does not match' }));
    } else {
      setPassword((prev) => ({ ...prev, status: '' }));
      setPassword((prev) => ({
        ...prev,
        passwordJson: JSON.stringify({
          new_password: password.new_password,
          current_password: password.current_password,
        }),
      }));
    }
  };
  return (
    <InputWrap>
      <h3 className="flex s-btw">
        <span className="text-xl">Change Password</span>
        <span className="text-red-500 text-lg">
          {res?.error || password.status}
        </span>
      </h3>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1 flex-col`}
      >
        <input type="hidden" name="intent" value="password" />
        <FormControl
          as="input"
          type="password"
          required={idx === 2}
          name="current_password"
          value={password.current_password}
          autoComplete={'false'}
          error={errors.current_password && errors.current_password.message}
          registerOptions={{
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
            onChange: (e) => {
              setPassword((prev) => ({
                ...prev,
                current_password: e.target.value,
              }));
            },
          }}
          register={register}
          labelText="Current Password"
          placeholder="Enter current password"
        />
        <FormControl
          as="input"
          type="password"
          required
          name="new_password"
          value={password.new_password}
          error={errors.new_password && errors.new_password.message}
          registerOptions={{
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
            onChange: (e) => {
              setPassword((prev) => ({
                ...prev,
                new_password: e.target.value,
              }));
            },
          }}
          register={register}
          labelText="New Password"
          placeholder="Enter New password"
        />
        <FormControl
          as="input"
          required={password.passwordJson === ''}
          register={register}
          name="confirm_password"
          value={password.confirm_password}
          error={errors.confirm_password && errors.confirm_password.message}
          registerOptions={{
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
            onChange: confirmPassword,
          }}
          type="password"
          labelText="Confirm Password"
          placeholder="Confirm New password"
        />
        <FormControl
          as="input"
          required={password.passwordJson === ''}
          value={password.passwordJson}
          register={register}
          name="passwordObject"
          type="hidden"
          placeholder="Confirm New password"
        />
      </div>
    </InputWrap>
  );
}
