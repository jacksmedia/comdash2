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
      className={clsx('card h-175px bgi-no-repeat bgi-size-contain', className)}
      style={{
        backgroundColor: bgColor,
        backgroundPosition: 'right',
        backgroundImage: `url("${toAbsoluteUrl('/media/illustrations/Combots-Vector.png')}")`,
      }}
    >
      <div className='card-body d-flex flex-column justify-content-between'>
        <h2 className='text-white fw-bold mb-5'>
          {title} <br /> {title2}{' '}
        </h2>

        <div className='m-0'>
          <a
            href='#'
            className='btn btn-success px-4 py-2'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
          >
            Mint Combots
          </a>
        </div>
      </div>
    </div>
  )
}

export {TilesWidget2}
