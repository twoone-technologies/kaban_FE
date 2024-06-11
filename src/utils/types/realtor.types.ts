export type Realtor = {
    rating: number,
    realtor_pic: string | null,
    verified: boolean,
    bio: string,
    company: string,
    createdAt: string,
    id: string,
    kyc: Record<string, string>,
    mobile_number: string,
    office_address: string,
    position: string,
    service_area: string,
    socials: Record<string, string>,
    specialty: string,
    updatedAt: string,
    user: {
        email: string,
        full_name: string
        id: string,
        role: string,
        _id: string,
    }
    whatsapp_number: string,
    _id: string,
}