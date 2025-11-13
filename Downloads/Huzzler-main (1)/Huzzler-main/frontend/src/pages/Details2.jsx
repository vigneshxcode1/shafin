// import { useState } from 'react';
// import API from '../api/client';
// import { useSearchParams, useNavigate } from 'react-router-dom';

// export default function Details2() {
//   const [searchParams] = useSearchParams();
//   const email = searchParams.get('email');
//   const navigate = useNavigate();
//   useEffect(() => {
//   if (email) {
//     localStorage.setItem('userEmail', email);
//   }
// }, [email]);


//   const [professionalTitle, setProfessionalTitle] = useState('');
//   const [experienceLevel, setExperienceLevel] = useState('');
//   const [currentStatus, setCurrentStatus] = useState('');

//   const save = async () => {
//     if (!professionalTitle || !experienceLevel || !currentStatus)
//       return alert('Please fill all fields');

//     try {
//       await API.post('/auth/save-details2', {
//         email,
//         professionalTitle,
//         experienceLevel,
//         currentStatus,
//       });
//       console.log("Incoming saveDetails2 body:", req.body);

//       // ✅ store email for Dashboard fetching
//       localStorage.setItem('userEmail', email);

//       // ✅ redirect to Dashboard
//       navigate('/dashboard');
//     } catch (err) {
//       console.error(err);
//       alert('Error saving details');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto py-10">
//       <h3 className="text-lg mb-4">Detail 2</h3>

//       <input
//         className="p-2 border mb-3 w-full rounded-md"
//         placeholder="Professional Title"
//         value={professionalTitle}
//         onChange={e => setProfessionalTitle(e.target.value)}
//       />

//       <input
//         className="p-2 border mb-3 w-full rounded-md"
//         placeholder="Level of Experience"
//         value={experienceLevel}
//         onChange={e => setExperienceLevel(e.target.value)}
//       />

//       <input
//         className="p-2 border mb-4 w-full rounded-md"
//         placeholder="Current Status"
//         value={currentStatus}
//         onChange={e => setCurrentStatus(e.target.value)}
//       />

//       <button
//         className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//         onClick={save}
//       >
//         Finish
//       </button>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import API from '../api/client';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Details2() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const navigate = useNavigate();

  // ✅ Save Google email to localStorage
  useEffect(() => {
    if (email) {
      localStorage.setItem('userEmail', email);
    }
  }, [email]);

  const [professionalTitle, setProfessionalTitle] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');

  const save = async () => {
    if (!professionalTitle || !experienceLevel || !currentStatus)
      return alert('Please fill all fields');

    try {
      // ✅ correct backend route
      await API.post('/auth/save-details2', {
        email,
        professionalTitle,
        experienceLevel,
        currentStatus,
      });

      console.log("✅ Saved details2 for:", email);

      // ✅ store email for Dashboard fetching
      localStorage.setItem('userEmail', email);

      // ✅ redirect to Dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Error saving details');
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h3 className="text-lg mb-4 font-semibold text-gray-700">Details 2</h3>

      <input
        className="p-2 border mb-3 w-full rounded-md"
        placeholder="Professional Title"
        value={professionalTitle}
        onChange={(e) => setProfessionalTitle(e.target.value)}
      />

      <input
        className="p-2 border mb-3 w-full rounded-md"
        placeholder="Level of Experience"
        value={experienceLevel}
        onChange={(e) => setExperienceLevel(e.target.value)}
      />

      <input
        className="p-2 border mb-4 w-full rounded-md"
        placeholder="Current Status"
        value={currentStatus}
        onChange={(e) => setCurrentStatus(e.target.value)}
      />

      <button
        className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 w-full"
        onClick={save}
      >
        Finish
      </button>
    </div>
  );
}
