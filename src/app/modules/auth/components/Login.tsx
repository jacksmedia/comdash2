/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {getUserByToken, login} from '../core/_requests'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useAuth} from '../core/Auth'


const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: 'admin@demo.com',
  password: 'demo',
}


export function Login() {
  const [loading, setLoading] = useState(false)

  const {saveAuth, setCurrentUser} = useAuth()
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await login(values.email, values.password)
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  return (
    <form
      className='form w-100 com-navy'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-10 p-5'>
        <h1 className='my-3 text-white'>Sign In</h1>
        <div className='text-gray-400 fw-semibold fs-4'>
          Wallet-Aware Gateway
        </div>
      </div>
      {/* end::Heading */}

        {/* begin::Action */}
        <div className='text-center p-2'>
        <div className='row justify-content-evenly p-lg-5'>
          
          {/* begin::btn1 link */}
          <button
            type='submit'
            id='kt_sign_in_submit'
            className='btn btn-flex flex-center text-white btn-lg w-100 btn-w-border'
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {!loading && <div className='indicator-label'>            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/web-wallet.svg')}
              className='h-20px me-3'
            />
            <span>Web Wallet</span>
           </div>}
            {loading && (
              <span className='indicator-progress' style={{display: 'block'}}>
                Mocking Web Wallet login. Please wait...
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
          {/* end::btn1 link */}

          {/* begin::btn2 link */}
          <button
            type='submit'
            id='kt_sign_in_submit'
            className='btn btn-flex flex-center text-white btn-lg w-100 btn-w-border'
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {!loading && <div className='indicator-label'>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/svg/brand-logos/ledger-wallet.svg')}
                className='h-20px me-3'
              />
              <span>Ledger Hardware Wallet</span>
            </div>}
            {loading && (
              <span className='indicator-progress' style={{display: 'block'}}>
                Mocking Hardware Wallet login. Please wait...
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
          {/* end::btn2 link */}
        </div>

        {/* begin::Separator */}
        <div className="row my-14 flex-center">
          <div className="separator separator-content">
            <span className="w-125px text-gray-500 fw-semibold text-uppercase fs-7 mb-5">OR</span>
          </div>
        </div>
        {/* end::Separator */}

        {/* begin::btn3 link */}
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-success w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid}
          >
          {!loading && <div className='indicator-label'>
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/egld-new-logo.svg')}
              className='h-20px me-3'
            />
            <span>xPortal App</span>
          </div>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Mocking  login. Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        {/* end::btn3 link */}
      </div>
      {/* end::Action */}
    </form>
  )
}