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
    <div
      className={clsx('card h-100 bgi-no-repeat bgi-size-cover', className)}
      style={{backgroundImage: `url("${toAbsoluteUrl('/media/illustrations/tier-elite.png')}")`}}
    >
      {/* begin::Body */}
      <div className='card-body d-flex flex-column justify-content-between'>
        {/* begin::Title */}
        <div className='text-white fw-bold fs-2'>
          <h2 className='fw-bold text-white mb-2'>You are currently ELITE tier,</h2>
          based on your current holdings.
        </div>
        {/* end::Title */}

        {/* begin::Link */}
        <a href='#' className='text-warning fw-semibold'>
          You are 8 NFT with an average ranking of 750, from achieving the next tier.
        </a>
        {/* end::Link */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TilesWidget3}
