import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import API from '../api/client';

export default function OTPVerify(){
  const [code,setCode] = useState('');
  const [loading,setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const nav = useNavigate();

  const verify = async ()=>{ setLoading(true);
    try{ await API.post('/auth/verify-otp', { email, code }); nav(`/details1?email=${encodeURIComponent(email)}`); }
    catch(err){ alert(err?.response?.data?.message || 'OTP error'); }finally{setLoading(false)}
  }

  const resend = async ()=>{ try{ await API.post('/auth/resend-otp', { email }); alert('OTP resent'); }catch(e){ alert('Error resending'); } }

  return (
    <div className="max-w-md mx-auto py-10">
      <h3 className="text-lg">Enter OTP sent to {email}</h3>
      <input className="p-2 border my-2" value={code} onChange={e=>setCode(e.target.value)} />
      <div className="flex gap-2">
        <button className="p-2 bg-green-600 text-white" onClick={verify} disabled={loading}>Verify</button>
        <button className="p-2 border" onClick={resend}>Resend</button>
      </div>
    </div>
  )
}
