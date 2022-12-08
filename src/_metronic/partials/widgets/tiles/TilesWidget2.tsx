/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  className?: string
  bgColor?: string
  title?: string
  title2?: string
}
const TilesWidget2 = ({
  className,
  bgColor = '#1E1E2D',
  title = 'Not part of the',
  title2 = 'Combased Community yet?',
}: Props) => {
  return (
    <div
      className={clsx('card', className)}
      style={{
        backgroundColor: bgColor,
        backgroundImage: `url("${toAbsoluteUrl('/media/illustrations/combiens-teaser.png')}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20rem',
        backgroundPosition: 'center center',
        minHeight: '20rem',
      }}
    >
      <div className='card-body d-flex flex-column justify-content-between'>
        <h2 className='fw-bold mb-5 text-center'>
          {title} <br /> {title2}{' '}
        </h2>

        <div className='my-2 d-flex flex-row justify-content-start my-3'>
          <a
            href='#'
            className='btn btn-success px-3 py-2'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
          >
            WL for Combiens
          </a>
          <a
            href='#'
            className='btn btn-secondary px-3 py-2 mx-2'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
          >
            Our Roadmap
          </a>
        </div>
      </div>
    </div>
  )
}

export {TilesWidget2}
