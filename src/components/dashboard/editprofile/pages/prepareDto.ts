export function prepareRealtorDto(formData: FormData) {
  const dto = new FormData();

  if (formData.has('bio')) {
    dto.append('bio', formData.get('bio')?.toString() as string);
  }
  if (formData.has('company')) {
    dto.append('company', formData.get('company')?.toString() as string);
  }
  if (formData.has('socials')) {
    dto.append('socials', formData.get('socials')?.toString() as string);
  }
  if (formData.has('service_area')) {
    dto.append('service_area', formData.get('service_area')?.toString() as string);
  }
  if (formData.has('office_address')) {
    dto.append('office_address', formData.get('office_address')?.toString() as string);
  }
  if (formData.has('mobile_number')) {
    dto.append(
      'mobile_number',
      formData.get('mobile_number')?.toString() as string,
    );
  }
  if (formData.has('whatsapp_number')) {
    dto.append(
      'whatsapp_number',
      formData.get('whatsapp_number')?.toString() as string,
    );
  }
  if (formData.has('realtor_pic')) {
    dto.append('realtor_pic', formData.get('realtor_pic') as Blob);
  }
  if (formData.has('realtor_certification')) {
    dto.append(
      'realtor_certification',
      formData.get('realtor_certification') as Blob,
    );
  }
  if (formData.has('government_id')) {
    dto.append('government_id', formData.get('government_id') as Blob);
  }
  return dto;
}

export function preparePasswordDto(formData: FormData) {
  return {
    current_password: formData.get('current_password') as string,
    new_password: formData.get('new_password') as string,
  };
}