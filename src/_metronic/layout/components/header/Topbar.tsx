/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import clsx from 'clsx'
import {toAbsoluteUrl} from '../../../helpers'
import {
  HeaderUserMenu,
} from '../../../partials'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px'

const Topbar: FC = () => {
  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      <div className='topbar d-flex align-items-stretch flex-shrink-0'>
       
        {/* begin::User */}
        <div
          className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
          id='kt_header_user_menu_toggle'
        >
          {/* begin::Toggle */}
          <div
            className={clsx('cursor-pointer symbol', toolbarUserAvatarHeightClass)}
            data-kt-menu-trigger='click'
            data-kt-menu-attach='parent'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='bottom'
          >
            <img
              className='h-30px w-30px rounded'
              src={toAbsoluteUrl('/media/avatars/300-9.jpg')}
              alt='metronic'
            />
          </div>

          {/* end::Toggle */}
        </div>
        {/* end::User */}
      </div>
    </div>
  )
}

export {Topbar}
