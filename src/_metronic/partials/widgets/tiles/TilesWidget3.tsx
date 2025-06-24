/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
/* import {toAbsoluteUrl} from '../../../helpers' */

type Props = {
  className?: string
  bgColor?: string
  title?: string
  title2?: string
}
const TilesWidget3 = ({
  className,
  bgColor = '#663259',
  title = 'You are currently Prime tier,',
  title2 = 'based on your current holdings.',
}: Props) => {
  return (
    <div className={clsx('card rounded', className)}>
        
      {/* begin::Body */}
      <div className='card-body d-flex flex-column justify-content-start'>
        {/* begin::Title */}
        <div className='text-white fw-bold fs-2 mb-5'>
          <h2 className='fw-bold text-white mx-2 mb-2 w-50'>You rewards rank is Prime tier, based on your current holdings.</h2>
        </div>
        {/* end::Title */}

        {/* begin::Link */}
        <a href='#' className='text-white font-italic my-5'>
          You have 98 NFTs with an average rarity of 378. You are 1.56 from achieving the next tier.
        </a>
        {/* end::Link */}
        {/* begin::Buttons */}
        <div className='my-2 d-flex flex-row justify-content-start my-3'>
          <button
            className='btn btn-success px-4 py-4'
            data-toggle='modal'
            data-target='#modal1'
          >
            See Benefits
          </button>
          <div className="modal fade" id="modal1" tab-index="-1" role="dialog" aria-labelledby="exampleModalSizeLg" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                Huzzah!
            </div>
          </div>
          <button
            className='btn btn-secondary px-4 py-4 mx-2'
            data-toggle='modal'
            data-target='#modal2'
          >
            Tiers / Ranks
          </button>
          <div className="modal fade" id="modal2" tab-index="-1" role="dialog" aria-labelledby="exampleModalSizeLg" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                Huzzah!
            </div>
          </div>
        </div>
        {/* end::Buttons */}


      {/* end::Body */}
      </div>
    </div>
  )
}

export {TilesWidget3}
