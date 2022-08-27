/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    document.body.classList.add('com-black')
    return () => {
      document.body.classList.remove('com-black')
    }
  }, [])

  return (
    <div
      className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/sketchy-1/ComDash-Background-Login.jpg')})`,
      }}
    >
      {/* begin::Content */}
      <div className='row m-2 p-2'>
        {/* begin::Logo */}
        <div className='col-lg-6'>
          <a href='#' className='m-0 pb-2'>
            <img alt='Logo' src={toAbsoluteUrl('/media/logos/default.svg')} className='h-45px' />
          </a>
          <p className=''>ComDash - The Web3 Swiss-army Dashboard on The Elrond Blockchain.</p>
        </div>
        {/* end::Logo */}
        {/* begin::Button Panel */}
        <div className='col-lg-6'>
          <div className='com-navy rounded shadow-sm p-2'>
            <Outlet />
          </div>
        </div>
        {/* end::Button Panel */}
      </div>
      {/* end::Content */}
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
