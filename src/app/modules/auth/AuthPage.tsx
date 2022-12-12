/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {WalletWeb} from './components/WalletWeb'
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
      className='container d-flex flex-column flex-column-fluid bgi-position-y-top position-x-right bgi-no-repeat bgi-size-cover bgi-attachment-fluid'
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/ComDash-Background-Login.jpg')})`,
      }}
    >
      {/* begin::Content */}
      <div className='d-flex flex-column flex-column-fluid flex-lg-row'>
        {/* begin::Logo */}
        <div className='align-items-start d-flex flex-center flex-column w-lg-50 pt-15 pt-lg-0 px-10'>
          <a href='#' className='mb-7'>
            <img alt='Logo' src={toAbsoluteUrl('/media/logos/default.svg')} className='h-45px' />
          </a>
          <p className='text-white my-2'>ComDash - The Web3 Swiss-army Dashboard on the world's most decentralised blockchain, MultiversX.</p>
        </div>
        {/* end::Logo */}
        {/* begin::Button Panel */}
        <div className='d-flex flex-center w-lg-50 p-10'>
          <div className='com-navy rounded shadow-sm p-5'>
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
      <Route path='walletweb' element={<WalletWeb />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
