import { FaRegStar, FaStar } from 'react-icons/fa6'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import Svg from '../reusable/Svg'
import { messageIcon, phoneIcon2, whatsappIcon2 } from '~/assets/icons'
import { Link } from 'react-router-dom'

type AgentDetailsProps = {
  agentImg: string,
  agentName: string,
  position: string,
  officeAddress: string,
  phoneNumber: string,
  serviceAreas: string,
  profileLink: string,
  messageLink: string,
  phoneNumberLink: string,
  whatsappLink: string
}

export default function AgentDetailsCard({ agentImg, agentName, position, officeAddress, phoneNumber, serviceAreas, profileLink, messageLink, phoneNumberLink, whatsappLink }: AgentDetailsProps) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className='bg-white w-full lg:max-w-[80%] flex flex-col md:flex-row justify-between gap-6 px-4 md:px-6 py-6 border border-[#EAEBF0] rounded-2xl'>
        <div className="min-w-[250px] w-full md:w-[250px] h-[250px] md:h-[250px] min-h-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${agentImg})` }}>
        </div>
        <div className='w-full'>
          <div className='w-full flex justify-between !mb-4'>
            <div>
              <div className='flex !gap-2 items-center'>
                <p className="text-lg text-primaryColor md:text-2xl font-semibold">{agentName}</p>
                <RiVerifiedBadgeFill color='#437EF7' size={24} />
              </div>
              <div>
                <p className='text-sm md:text-base'>{position}</p>
              </div>
            </div>
            <div className='flex !gap-1'>
              <FaStar color='#F9B900' size={18} />
              <FaStar color='#F9B900' size={18} />
              <FaStar color='#F9B900' size={18} />
              <FaRegStar color='#F9B900' size={18} />
              <FaRegStar color='#F9B900' size={18} />
            </div>
          </div>
          <div className='flex justify-between items-center py-2' style={{ borderBottom: '1px solid #EAEBF0' }}>
            <p className='text-base md:text-xl font-semibold'>Office</p>
            <p className='text-base md:text-xl text-right max-w-52 md:max-w-96'>{officeAddress}</p>
          </div>
          <div className='flex justify-between py-2' style={{ borderBottom: '1px solid #EAEBF0' }}>
            <p className='text-base md:text-xl font-semibold'>Mobile</p>
            <p className='text-base md:text-xl'>{phoneNumber}</p>
          </div>
          <div className='flex justify-between items-center py-2' style={{ borderBottom: '1px solid #EAEBF0' }}>
            <p className='text-base md:text-xl font-semibold'>Service Area</p>
            <p className='text-base md:text-xl text-right max-w-48 md:max-w-96'>{serviceAreas}</p>
          </div>
          <div className='flex justify-between items-center pt-2'>
            <div className='flex !gap-4'>
              <Link to={messageLink}>
                <Svg href={messageIcon} height="34px" width='34px' />
              </Link>
              <Link to={phoneNumberLink}>
                <Svg href={phoneIcon2} height="34px" width='34px' />
              </Link>
              <Link to={whatsappLink}>
                <Svg href={whatsappIcon2} height="34px" width='34px' />
              </Link>
            </div>
            <Link to={profileLink} className='text-base md:text-xl text-primaryColor tracking-tighter'>View Profile</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
