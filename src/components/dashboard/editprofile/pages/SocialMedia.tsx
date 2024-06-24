import FormControl from '~/components/reusable/FormControl';
import InputWrap from '../../reusables/InputWrap';
import { useState } from 'react';
import { Realtor } from '~/utils/types/realtor.types';

export default function SocialMedia({ data }: { data: Realtor }) {
  const [socialLinks, setSocialLinks] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };

  return (
    <InputWrap>
      <h3>Social Media</h3>
      <fieldset className={`grid grid-cols-1 md:grid-cols-2 gap-1 flex-col`}>
        <FormControl
          as="input"
          type="text"
          name="facebook"
          onChange={handleInputChange}
          labelText="Facebook link"
          defaultValue={data.socials.facebook}
          placeholder="your facebook link"
        />
        <FormControl
          as="input"
          type="text"
          name="twitter"
          onChange={handleInputChange}
          labelText="Twitter link"
          defaultValue={data.socials.twitter}
          placeholder="your X link"
        />
        <FormControl
          as="input"
          type="text"
          name="linkedin"
          onChange={handleInputChange}
          labelText="LinkedIn link"
          defaultValue={data.socials.linkedin}
          placeholder="your linkedin link"
        />
        <FormControl
          as="input"
          type="text"
          name="Instagram"
          onChange={handleInputChange}
          labelText="Instagram link"
          defaultValue={data.socials.instagram}
          placeholder="your instagram link"
        />
        <FormControl
          as="input"
          type="text"
          name="youtube"
          onChange={handleInputChange}
          labelText="Youtube link"
          defaultValue={data.socials.youtube}
          placeholder="your youtube link"
        />
        <FormControl
          as="input"
          type="text"
          name="tiktok"
          onChange={handleInputChange}
          labelText="TikTok link"
          defaultValue={data.socials.tiktok}
          placeholder="your TikTok link"
        />
        <input
          type="text"
          hidden
          readOnly
          name="socials"
          value={socialLinks && JSON.stringify(socialLinks)}
        />
      </fieldset>
    </InputWrap>
  );
}
