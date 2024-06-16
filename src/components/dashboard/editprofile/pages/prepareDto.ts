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
  if (formData.has('realtors_certificates')) {
    dto.append(
      'realtors_certificates',
      formData.get('realtors_certificates') as Blob,
    );
  }
  if (formData.has('govt_issued_id')) {
    dto.append('govt_issued_id', formData.get('govt_issued_id') as Blob);
  }
  return dto;
}
