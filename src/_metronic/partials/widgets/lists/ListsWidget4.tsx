/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
  items?: number
}

const ListsWidget4: React.FC<Props> = ({className, items = 6}) => {
  return (
    <div className='card card-xl-stretch mb-xl-8 com-navy'>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Genesis CDO Wallet Statistics</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Updated 1 day, 2 hours, 37 minutes ago</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5'>
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label'>
              <img
                src={toAbsoluteUrl('/media/svg/brand-logos/egld.svg')}
                className='h-50 align-self-center'
                alt=''
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Section */}
          <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
            <div className='col'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                EGLD Staking
              </a>
              <span className='text-muted fw-semibold d-block fs-7'>30% Distribution</span>
            </div>
            <div className='col'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>4</span>
              <span className='text-muted fw-semibold d-block fs-7'>Staking Agencies</span>
            </div>
            <div className='col'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>95 EGLD</span>
              <span className='text-muted fw-semibold d-block fs-7'>1 Week Ago</span>
            </div>
            <div className='col text-end'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>99 EGLD</span>
              <span className='text-muted fw-semibold d-block fs-7'>Current Update</span>
            </div>
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol com-navy symbol-50px me-5'>
            <span className='symbol-label'>
              <img
                src={toAbsoluteUrl('/media/svg/brand-logos/ride.svg')}
                className='h-50 align-self-center'
                alt=''
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Section */}
          <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
            <div className='col'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                RIDE
              </a>
              <span className='text-muted fw-semibold d-block fs-7'>30% Distribution</span>
            </div>
            <div className='col'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>13.2252</span>
              <span className='text-muted fw-semibold d-block fs-7'>RIDEEGLDLPStakedLK</span>
            </div>
            <div className='col'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>~44.4 EGLD & 13.370k RIDE</span>
              <span className='text-muted fw-semibold d-block fs-7'>1 Week Ago</span>
            </div>
            <div className='col text-end'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>~45.2 EGLD & 13.130k RIDE (I.L. Only)</span>
              <span className='text-muted fw-semibold d-block fs-7'>Current Update</span>
            </div>
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label'>
              <img
                src={toAbsoluteUrl('/media/svg/brand-logos/utk.svg')}
                className='h-50 align-self-center'
                alt=''
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Section */}
          <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
            <div className='col'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                UTK
              </a>
              <span className='text-muted fw-semibold d-block fs-7'>30% Distribution</span>
            </div>
            <div className='col'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>47.5743</span>
              <span className='text-muted fw-semibold d-block fs-7'>UTKWEGLDLPStakedLK</span>
            </div>
            <div className='col'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>~48.9 EGLD & ~21k UTK</span>
              <span className='text-muted fw-semibold d-block fs-7'>1 Week Ago</span>
            </div>
            <div className='col text-end'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>~49.3 EGLD & ~20.9k UTK (I.L. Only)</span>
              <span className='text-muted fw-semibold d-block fs-7'>Current Update</span>
            </div>
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-sm-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label'>
              <img
                src={toAbsoluteUrl('/media/svg/brand-logos/crt.svg')}
                className='h-50 align-self-center'
                alt=''
              />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Section */}
          <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
            <div className='col'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                CRT 1
              </a>
              <span className='text-muted fw-semibold d-block fs-7'>30% Distribution</span>
            </div>
            <div className='col'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>2.2142</span>
              <span className='text-muted fw-semibold d-block fs-7'>CRTWEGLDLPStakedLK</span>
            </div>
            <div className='col'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>N/A</span>
              <span className='text-muted fw-semibold d-block fs-7'>Last Week</span>
            </div>
            <div className='col text-end'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>~1.92 EGLD & ~467 CRT</span>
              <span className='text-muted fw-semibold d-block fs-7'>Current Update</span>
            </div>
          </div>
          {/* end::Section */}
        </div>
        {/* end::Item */}

        {items > 4 && (
          <div className='d-flex align-items-sm-center mb-7'>
            {/* begin::Symbol */}
            <div className='symbol symbol-50px me-5'>
              <span className='symbol-label'>
                <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/crt.svg')}
                  className='h-50 align-self-center'
                  alt=''
                />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Section */}
          <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
            <div className='col'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                CRT 2
              </a>
              <span className='text-muted fw-semibold d-block fs-7'>30% Distribution</span>
            </div>
            <div className='col'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>1.1244</span>
              <span className='text-muted fw-semibold d-block fs-7'>CRTWEGLDLPStakedLK</span>
            </div>
            <div className='col'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>N/A</span>
              <span className='text-muted fw-semibold d-block fs-7'>Last Week</span>
            </div>
            <div className='col text-end'>
              <span className='text-gray-800 text-primary fs-6 fw-bold'>~0.97 EGLD & ~237 CRT</span>
              <span className='text-muted fw-semibold d-block fs-7'>Current Update</span>
            </div>
          </div>
          {/* end::Section */}
          </div>
        )}

        {items > 5 && (
          <div className='d-flex align-items-sm-center'>
            {/* begin::Symbol */}
            <div className='symbol symbol-50px me-5'>
              <span className='symbol-label'>
                <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/fox-hub.svg')}
                  className='h-50 align-self-center'
                  alt=''
                />
              </span>
            </div>
            {/* end::Symbol */}
            {/* begin::Section */}
            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
              <div className='flex-grow-1 me-2'>
                <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                  Fox Broker App
                </a>
                <span className='text-muted fw-semibold d-block fs-7'>Finance, Corporate, Apps</span>
              </div>
              <span className='badge badge-light fw-bold my-2'>+4500$</span>
            </div>
            {/* end::Section */}
          </div>
        )}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget4}
