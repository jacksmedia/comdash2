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
      <div className='d-flex flex-center flex-row flex-row-fluid p-10 pb-lg-20'>
        {/* begin::Logo */}
        <div>
          <a href='#' className='m-10'>
            <img alt='Logo' src={toAbsoluteUrl('/media/logos/default.svg')} className='h-45px' />
          </a>
          <p>ComDash - The Web3 Swiss-army Dashboard on The Elrond Blockchain.</p>
        </div>
        {/* end::Logo */}
        {/* begin::Wrapper */}
        <div className='w-lg-500px com-navy rounded shadow-sm p-10 p-lg-15 mx-auto'>
          <Outlet />
        </div>
        {/* end::Wrapper */}
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
