import React from 'react'
import Image from 'next/image'

interface UserItemProps {
  data: any;
  id: number;
}

export const UserItem: React.FC<UserItemProps> = ({
  data,
  id
}) => {
  const { firstName, lastName, email, phone, image: imgSrc } = data;
  console.log('imgSrc :>>', imgSrc);
  return (
    <div className='user-sub-blk'>
      <div className='user-img-blk'>
        {/* <Image
          src={imgSrc}
          width={100}
          height={100}
          alt={firstName}
        /> */}
        <img
          src={imgSrc}
          style={{ width: '100', height: '100' }}
          alt={firstName} />
      </div>
      <div className='user-content-blk'>
        <p>{`${firstName} ${lastName}`}</p>
        <p>{`${email}`}</p>
        <p>{`${phone}`}</p>
      </div>
    </div>
  );
}
