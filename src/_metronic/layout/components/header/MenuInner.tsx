import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuInnerWithSub
        title='Help'
        to='/help'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        {/* MENU CHOICE 1 */}
        <MenuItem
          title='Combased Whitepaper'
          to='/crafted/accounts'
          icon='/media/icons/duotune/communication/com006.svg'
          hasBullet={false}
        />
        {/* MENU CHOICE 2 */}
        <MenuItem
          title='Documentation'
          to='/crafted/accounts'
          icon='/media/icons/duotune/communication/com006.svg'
          hasBullet={false}
        />
        {/* MENU CHOICE 3 */}
        <MenuItem
          title='Get in Touch'
          to='/crafted/accounts'
          icon='/media/icons/duotune/communication/com006.svg'
          hasBullet={false}
        />
      </MenuInnerWithSub>

      
    </>
  )
}
