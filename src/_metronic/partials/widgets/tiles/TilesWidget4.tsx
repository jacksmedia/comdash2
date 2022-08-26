/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  className?: string
}
const TilesWidget4 = ({className}: Props) => {
  return (
    <div className={clsx('card', className)}>
      <div className='card-body d-flex align-items-center justify-content-between flex-wrap'>
        <div className='me-2'>
          <h2 className='fw-bold text-gray-800 mb-3'>You are currently ELITE tier,
based on your current holdings.</h2>

          <div className='text-muted fw-semibold fs-6'>
            You are 8 NFT with an average ranking of 750, from achieving the next tier.
          </div>
        </div>
        <div
          className={clsx('card bgi-no-repeat bgi-size-contain', className)}
          style={{
            backgroundPosition: 'right',
            backgroundImage: `url("${toAbsoluteUrl('/media/illustrations/tier-elite.png')}")`,
          }}
        >
          <a
          href='#'
          className='btn btn-success fw-semibold'
          data-bs-toggle='modal'
          data-bs-target='#kt_modal_create_campaign'
          >
            See Benefits
          </a>
        </div>
      </div>
    </div>
  )
}

export {TilesWidget4}
