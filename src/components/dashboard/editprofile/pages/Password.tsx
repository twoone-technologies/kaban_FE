import FormControl from '~/components/reusable/FormControl';
import InputWrap from '../../reusables/InputWrap';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { EditProfileInputs } from '..';

type PasswordProps = {
  idx: number;
  errors: FieldErrors<EditProfileInputs>;
  register: UseFormRegister<EditProfileInputs>;
};

export default function Password({ idx, register, errors }: PasswordProps) {
  return (
    <InputWrap>
      <h3>Change Password</h3>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1 flex-col`}
      >
        <FormControl
          as="input"
          type="password"
          required={idx === 2}
          name="current_password"
          error={errors.current_password && errors.current_password.message}
          registerOptions={{
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          register={idx === 2 ? register : undefined}
          labelText="Current Password"
          placeholder="Enter current password"
        />
        <FormControl
          as="input"
          type="password"
          required={idx === 2}
          name="new_password"
          error={errors.new_password && errors.new_password.message}
          registerOptions={{
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          register={idx === 2 ? register : undefined}
          labelText="New Password"
          placeholder="Enter New password"
        />
        <FormControl
          as="input"
          required={idx === 2}
          register={idx === 2 ? register : undefined}
          name="confirm_password"
          error={errors.confirm_password && errors.confirm_password.message}
          registerOptions={{
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          type="password"
          labelText="Confirm Password"
          placeholder="Confirm New password"
        />
      </div>
    </InputWrap>
  );
}
