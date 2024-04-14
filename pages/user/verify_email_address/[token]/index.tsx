import { useParams } from 'next/navigation';
import React from 'react'
import VerificationRequest from './VerificationRequest';

const index = () => {
    const params = useParams<{ token: string; }>()
 
    console.log(params)
  return (
    <div>
      <VerificationRequest token={params?.token} />
    </div>
  )
}

export default index