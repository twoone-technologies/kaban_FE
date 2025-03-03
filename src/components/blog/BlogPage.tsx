// import React from 'react'

// import { useParams } from "react-router-dom";
import Headline from '../aboutUsSection/Headline';
import Container from '../reusable/Container';
import { blankPic } from '~/assets/img';
// type Props = {}

export default function BlogPage() {
  // const params = useParams<{id: string}>();
  // const { id } = params;

  return (
    <Container element="section" className="w-full">
      <div className="mt-20 w-full">
        <img src={blankPic} alt="blank" className={'w-full md:max-h-[30rem]'} />
        <div className={'flex flex-col-reverse gap-1 md:flex-row justify-between mt-2'}>
          <div className={'flex gap-1 md:gap-3 flex-col md:flex-row'}>
            <div>
              <p className="text-accentColor">Written by</p>
              <p>written by</p>
            </div>
            <div>
              <p className="text-accentColor">Published on</p>
              <p>written by</p>
            </div>
            <div>
              <p className="text-accentColor">Time</p>
              <p>written by</p>
            </div>
          </div>
          <div>
            <p className="text-accentColor">Category</p>
            <p>written by</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8 mx-auto mb-8 md:max-w-[80%] gap-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aliquid
          cupiditate possimus modi doloribus fuga. Modi, commodi soluta
          architecto assumenda perferendis doloremque iusto similique tempore et
          non ea possimus pariatur illum eligendi nemo. Tempora omnis rerum
          iusto. Ad in similique reprehenderit repellat quam aperiam accusamus
          nesciunt voluptas magnam, saepe laborum?
        </p>
        <img src={blankPic} alt="blank" className={'w-full md:max-h-[15rem]'} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aliquid
          cupiditate possimus modi doloribus fuga. Modi, commodi soluta
          architecto assumenda perferendis doloremque iusto similique tempore et
          non ea possimus pariatur illum eligendi nemo. Tempora omnis rerum
          iusto. Ad in similique reprehenderit repellat quam aperiam accusamus
          nesciunt voluptas magnam, saepe laborum?
        </p>
        <h3>Conclusion</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aliquid
          cupiditate possimus modi doloribus fuga. Modi, commodi soluta
          architecto assumenda perferendis doloremque iusto similique tempore et
          non ea possimus pariatur illum eligendi nemo. Tempora omnis rerum
          iusto. Ad in similique reprehenderit repellat quam aperiam accusamus
          nesciunt voluptas magnam, saepe laborum?
        </p>
        <h3 className='text-center'>Check out related posts</h3>
        <div className='w-full flex flex-col gap-1'>
        {[...Array(3)].map((_, i) => (
          <div className="blogWrap border gap-1 ">
            <Headline id={i} key={i} />
          </div>
        ))}
        </div>
      </div>
    </Container>
  );
}
