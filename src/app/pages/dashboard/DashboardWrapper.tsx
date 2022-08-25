import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget4,
  MixedWidget8,
  TilesWidget1,
  TilesWidget4,
  TilesWidget2,
  TilesWidget5,
} from '../../../_metronic/partials/widgets'

const DashboardPage = () => (
  <>
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-4'>
        <MixedWidget8
          className='card-xxl-stretch mb-xl-3'
          chartColor='success'
          chartHeight='150px'
        />
      </div>

      <div className='col-xl-8'>
        

        <div className='row gx-5 gx-xl-8 mb-5 mb-xl-8'>
          <div className='col-xl-6'>
            <TilesWidget2 className='card-xl-stretch mb-5 mb-xl-8' />
            <div className='row gx-5 gx-xl-8'>
              <div className='col-xl-6'>
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
          </div>
         
        </div>
      </div>
    </div>

    



    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
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
