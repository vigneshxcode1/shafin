import { Routes, Route } from 'react-router-dom'
import RoleSelect from './pages/RoleSelect'
import RegisterStep1 from './pages/RegisterStep1'
import OTPVerify from './pages/OTPVerify'
import Details1 from './pages/Details1'
import Details2 from './pages/Details2'
import LoginSelect from './pages/LoginSelect'
import LoginForm from './pages/LoginForm'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import SkillHub from './pages/Skillhub'
import Services from './pages/Service'
import Settings from './pages/Settings'
import BuildProfile from './pages/BuildProfile';
import AfterSubmitBuildProfile from './pages/AfterSmbmiteBuildProfile'
import AddPortfolioPage from './pages/AddPortfolioPage'
import TestConnection from './pages/TestConnection'
import AddService from './pages/AddService'
import ViewMore from './pages/ViewMore'
import EditService from './pages/EditService'
import Dash from './pages/Dash'
import CreateService from './pages/CreateService'
import JobProposal from './pages/Jobproposal'


export default function App(){
  return (
    <Routes>
      <Route path='/' element={<RoleSelect />} />
      <Route path='/register' element={<RegisterStep1 />} />
      <Route path='/verify-otp' element={<OTPVerify />} />
      <Route path='/details1' element={<Details1 />} />
      <Route path='/details2' element={<Details2 />} />
      <Route path='/login-select' element={<LoginSelect />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/service' element={<Services />} />
      <Route path='/skill-hub' element={<SkillHub />} />
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/buildprofile' element={<BuildProfile/>}/>
      <Route path='/aftersubmitbuildprofile' element={<AfterSubmitBuildProfile/>}/>
      <Route path='/add-portfolio' element={<AddPortfolioPage/>}/>
      <Route path="/test" element={<TestConnection />} />
      <Route path="/add-service" element={<AddService />} />
      <Route path="/view-service/:id" element={<ViewMore />} />
      <Route path="/edit-service/:id" element={<EditService />} />

        <Route path="/dash" element={<Dash />} />
        <Route path="/createservice" element={<CreateService/>} />
        <Route path="/create-service24" element={<CreateService />} />

      <Route path='/Jobproposal' element={<JobProposal/>}/>

    </Routes>
  )
}

