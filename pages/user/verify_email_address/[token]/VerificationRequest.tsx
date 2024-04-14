import { useState, useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '@/constants/constants';

const VerificationRequest = ({ token }: {token: string}) => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (token) {
      handleVerificationRequest();
    }
  }, [token]);

  const handleVerificationRequest = async () => {
    try {
      const response = await axios.post(`${serverUrl}/api/testing_route/user/verify_email_address`, { token });
      setMessage('Success: Email verified successfully');
    } catch (error) {
      setMessage('Error: Unable to verify email due to invalid or expired token');
      console.log(error);
      
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      {loading ? (
        <p className="text-blue-500">Verifying Email...</p>
      ) : (
        <p className="text-purple-500">{message}</p>
      )}
    </div>
  );
};

export default VerificationRequest;
