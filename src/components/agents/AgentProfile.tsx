import AgentDetailsCard from './AgentDetailsCard'
import { agentImg } from '~/assets/img'
import { BsTwitterX, BsWhatsapp } from 'react-icons/bs'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AgentReviews from './AgentReviews'

export default function AgentProfileComp() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const initialTab = query.get("tab") || "listings";
    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        setActiveTab(query.get("tab") || "listings");
    }, [location.search]);

    return (
        <section className="mt-20 md:mx-4">
            <div className="mb-14">
                <AgentDetailsCard
                    agentImg={agentImg}
                    agentName="Clinton Richard"
                    position="Sale Executive at HedgeStone Property"
                    officeAddress="89 Abak Road, Uyo, Akwa Ibom."
                    phoneNumber="+23481-6423-5383"
                    serviceAreas="Ewet Housing, Ikot Ekpene rd, Abak rd"
                    profileLink="/agents/29392239"
                    messageLink="/agents/message-me"
                    phoneNumberLink="string"
                    whatsappLink="string"
                />
            </div>
            <div className='flex items-center justify-center mb-16'>
                <div className='bg-white w-full lg:max-w-[80%]  gap-6 px-4 md:px-6 py-6 border border-[#EAEBF0] md:rounded-2xl'>
                    <p className='text-2xl font-semibold'>Bio</p>
                    <p className='my-8 text-base md:text-xl text-subtleGray'>
                        Lorem ipsum dolor sit amet consectetur. Aliquam et aliquam urna pulvinar in egestas.
                        Adipiscing sed ultrices eu tristique luctus viverra ultricies.
                        Ultricies sit morbi tristique vulputate pulvinar tortor vivamus commodo.
                        Duis id iaculis orci nunc pretium diam et. Tortor faucibus adipiscing maecenas ac eget.
                        Risus urna risus urna ornare fermentum at nullam. Senectus nibh fringilla pellentesque quis
                        ac nisi orci dolor. Tincidunt ipsum egestas eros lorem sed facilisi.
                        Nunc fermentum magna arcu dolor mattis posuere felis. Habitasse in dictum sed senectus
                        convallis. Quam ut eu quisque egestas elementum lacus. Egestas massa amet euismod fermentum
                        odio odio. Lectus leo magna commodo ut velit vitae semper ipsum in. Eget neque ut semper
                        mattis a id semper sit id. Viverra sit condimentum dui facilisi ultrices id euismod.
                        Enim nisi bibendum sed erat. Imperdiet egestas libero risus dictum adipiscing ornare.
                        Nulla nulla est vivamus eleifend elit enim pulvinar. Nullam gravida lobortis porta sed.
                    </p>
                    <div className='flex !gap-3'>
                        <div className='size-8 flex items-center justify-center border border-[#437EF7] rounded-full'>
                            <BsWhatsapp color='#437EF7' />
                        </div>
                        <div className='size-8 flex items-center justify-center border border-[#437EF7] rounded-full'>
                            <BsTwitterX color='#437EF7' />
                        </div>
                        <div className='size-8 flex items-center justify-center border border-[#437EF7] rounded-full'>
                            <FaFacebookF color='#437EF7' />
                        </div>
                        <div className='size-8 flex items-center justify-center border border-[#437EF7] rounded-full'>
                            <FaInstagram color='#437EF7' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mb-16'>
                <div className='bg-[#F5F5F5] w-full lg:max-w-[80%] flex items-center justify-center h-72 gap-6 px-4 md:px-6 py-6'>
                    <p className='text-5xl text-primaryColor text-center font-semibold'>Advert idea</p>
                </div>
            </div>
            <div className='px-4 md:px-8 lg:px-12 xl:px-16 mb-16'>
                <div className='px-4 md:px-8'>
                    <ul className='flex justify-between md:justify-start gap-8 text-xl md:text-2xl font-semibold border-b border-gray-200 transition-all'>
                        <li className={`py-2 px-2 md:px-4 text-subtleGray ${activeTab === "listings" && ('!text-black border-b-[5px] border-primaryColor')}`}>
                            <Link to={`?tab=listings`}>Listings {'(25)'}</Link>
                        </li>
                        <li className={`py-2 px-2 md:px-4 text-subtleGray ${activeTab === "reviews" && ('!text-black border-b-[5px] border-primaryColor')}`}>
                            <Link to={`?tab=reviews`}>Reviews {'(5)'}</Link>
                        </li>
                    </ul>
                </div>
                {activeTab === "listings" ? (<p>Listings</p>) : (<AgentReviews />)}
            </div>
        </section>
    )
}
