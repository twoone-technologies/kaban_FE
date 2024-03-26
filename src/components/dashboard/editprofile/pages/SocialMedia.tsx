import FormControl from '~/components/reusable/FormControl';
import InputWrap from '../../reusables/InputWrap';
import { UseFormRegister } from 'react-hook-form';
import { EditProfileInputs } from '..';

export default function SocialMedia({
  register,
}: {
  register: UseFormRegister<EditProfileInputs>;
}) {
  return (
    <InputWrap>
      <h3>Social Media</h3>
      <fieldset className={`grid grid-cols-1 md:grid-cols-2 gap-1 flex-col`}>
        <FormControl
          as="input"
          type="text"
          name="facebook"
          register={register}
          labelText="Facebook"
          placeholder="your facebook handle"
        />
        <FormControl
          as="input"
          type="text"
          name="x"
          register={register}
          labelText="X"
          placeholder="your X handle"
        />
        <FormControl
          as="input"
          type="text"
          name="linkedin"
          register={register}
          labelText="LinkedIn"
          placeholder="your linkedin handle"
        />
        <FormControl
          as="input"
          type="text"
          name="instagram"
          register={register}
          labelText="Instagram"
          placeholder="your instagram handle"
        />
        <FormControl
          as="input"
          type="text"
          name="youtube"
          register={register}
          labelText="Youtube"
          placeholder="your youtube handle"
        />
        <FormControl
          as="input"
          type="text"
          name="tiktok"
          register={register}
          labelText="TikTok"
          placeholder="your TikTok handle"
        />
      </fieldset>
    </InputWrap>
  );
}
