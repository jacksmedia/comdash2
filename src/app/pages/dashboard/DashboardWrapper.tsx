import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget4,
  TilesWidget1,
  TilesWidget2,
  TilesWidget4,
  TilesWidget5,
} from '../../../_metronic/partials/widgets'

const DashboardPage = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-4'>
        <TilesWidget1 className='card-xl-stretch mb-5 mb-xl-8' />
      </div>
      <div className='col-xl-8'>
        <TilesWidget5
          className='card-xxl-stretch bg-body'
          svgIcon='/media/icons/duotune/general/gen002.svg'
          titleClass='text-dark'
          descriptionClass='text-muted'
          iconClass='svg-icon-success'
          title='8,600'
          description='New Customers'
        />
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <TilesWidget2 className='card-xl-stretch mb-5 mb-xl-8' />
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
