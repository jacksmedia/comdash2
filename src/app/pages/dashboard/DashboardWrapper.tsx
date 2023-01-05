import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget4,
  TilesWidget2,
  TilesWidget3,
  TilesWidget5,
} from '../../../_metronic/partials/widgets'

const DashboardPage = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8 mb-5'>

      <div className='col-xl-4'>
        <div className='rounded d-flex row flex-center card-xl-stretch mb-5 mx-2 mb-xl-8 testgreen'>
          <div className='row mx-5 my-10'>
            <h2 className='fw-bold text-white'>Hello, @joeiwu</h2>
            <p className='fw-bold text-white'>Thank you for being loyal and actively supporting Combased.</p>
          </div>
          <div className='row px-3 g-3 g-lg-6'>
            <TilesWidget5
              className='col my-2 mx-1 dark-card-bg'
              svgIcon='/media/svg/misc/cd-lines.svg'
              titleClass='text-white'
              descriptionClass='text-muted'
              iconClass='svg-icon-success'
              title='6.56'
              description='Tier Score'
            />
            <TilesWidget5
              className='col my-2 mx-1 dark-card-bg'
              svgIcon='/media/svg/misc/cd-boxes.svg'
              titleClass='text-white'
              descriptionClass='text-muted'
              iconClass='svg-icon-success'
              title='98'
              description='Combased NFTs'
            />
          </div>
        </div>
      </div>
      <div className='col-xl-8'>
        <TilesWidget3 className='card-xl-stretch mb-5 mb-xl-8 com-navy' />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <TilesWidget2 className='card-xl-stretch mb-5 mb-xl-8 com-navy' />
      </div>
      <div className='col-xl-8'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
