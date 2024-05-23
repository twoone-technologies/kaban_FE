import FormControl from '~/components/reusable/FormControl';
import InputWrap from '../../reusables/InputWrap';
import { UseFormRegister } from 'react-hook-form';
import { EditProfileInputs } from '..';
import { useState } from 'react';

export default function SocialMedia({
  register,
}: {
  register: UseFormRegister<EditProfileInputs>;
}) {
  const [socialLinks, setSocialLinks] = useState({})
  return (
    <InputWrap>
      <h3>Social Media</h3>
      <fieldset className={`grid grid-cols-1 md:grid-cols-2 gap-1 flex-col`}>
        <FormControl
          as="input"
          type="text"
          register={register}
          labelText="Facebook"
          placeholder="your facebook link"
          onChange={(e) => setSocialLinks({ ...socialLinks, 'facebook': e.target.value })}
        />
        <FormControl
          as="input"
          type="text"
          register={register}
          labelText="X"
          placeholder="your X link"
          onChange={(e) => setSocialLinks({ ...socialLinks, 'x': e.target.value })}
        />
        <FormControl
          as="input"
          type="text"
          register={register}
          labelText="LinkedIn"
          placeholder="your linkedin link"
          onChange={(e) => setSocialLinks({ ...socialLinks, 'linkedin': e.target.value })}
        />
        <FormControl
          as="input"
          type="text"
          register={register}
          labelText="Instagram"
          placeholder="your instagram link"
          onChange={(e) => setSocialLinks({ ...socialLinks, 'instagram': e.target.value })}
        />
        <FormControl
          as="input"
          type="text"
          register={register}
          labelText="Youtube"
          placeholder="your youtube link"
          onChange={(e) => setSocialLinks({ ...socialLinks, 'youtube': e.target.value })}
        />
        <FormControl
          as="input"
          type="text"
          register={register}
          labelText="TikTok"
          placeholder="your TikTok link"
          onChange={(e) => setSocialLinks({ ...socialLinks, 'tiktok': e.target.value })}
        />
        <input type="text" hidden name='socials' value={JSON.stringify(socialLinks)} />
      </fieldset>
    </InputWrap>
  );
}
