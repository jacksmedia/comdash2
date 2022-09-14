/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  className?: string
  bgColor?: string
  title?: string
  title2?: string
}
const TilesWidget3 = ({
  className,
  bgColor = '#663259',
  title = 'You are currently ELITE tier,',
  title2 = 'based on your current holdings.',
}: Props) => {
  return (
    <div className='card h-100'>
      {/* begin::Body */}
      <div className='card-body d-flex flex-column justify-content-start'>
        {/* begin::Title */}
        <div className='text-white fw-bold fs-2'>
          <h2 className='fw-bold text-white mb-2'>You are currently ELITE tier,</h2>
          based on your current holdings.
        </div>
        {/* end::Title */}

        {/* begin::Link */}
        <a href='#' className='text-warning fw-semibold'>
          You have 8 NFTs with an average ranking of 750. You are ___ from achieving the next tier.
        </a>
        {/* end::Link */}
        {/* begin::Buttons */}
        <div className='my-4 d-flex flex-row justify-content-start'>
          <a
            href='#'
            className='btn btn-success px-4 py-2'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
          >
            See Benefits
          </a>
          <a
            href='#'
            className='btn btn-secondary px-4 py-2 mx-2'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
          >
            Tiers / Ranks
          </a>
        </div>
        {/* end::Buttons */}


      </div>
      {/* end::Body */}
      <div
        className={clsx('card rounded float-end', className)}
        style={{backgroundImage: `url("${toAbsoluteUrl('/media/illustrations/tier-elite.png')}")`}}
      >
      </div>
    </div>
  )
}

export {TilesWidget3}
