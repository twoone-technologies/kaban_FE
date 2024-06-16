import FormControl from '~/components/reusable/FormControl';
import InputWrap from '../../reusables/InputWrap';
import { useState } from 'react';

export default function SocialMedia() {
  const [socialLinks, setSocialLinks] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
          onChange={handleInputChange}
          labelText="Facebook"
          placeholder="your facebook link"
        />
        <FormControl
          as="input"
          type="text"
          onChange={handleInputChange}
          labelText="Twitter"
          placeholder="your X link"
        />
        <FormControl
          as="input"
          type="text"
          onChange={handleInputChange}
          labelText="LinkedIn"
          placeholder="your linkedin link"
        />
        <FormControl
          as="input"
          type="text"
          onChange={handleInputChange}
          labelText="Instagram"
          placeholder="your instagram link"
        />
        <FormControl
          as="input"
          type="text"
          onChange={handleInputChange}
          labelText="Youtube"
          placeholder="your youtube link"
        />
        <FormControl
          as="input"
          type="text"
          onChange={handleInputChange}
          labelText="TikTok"
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
