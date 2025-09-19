import BundlesPage from '../bundles/page'
import PresetsPage from '../presets/page'

const ShopPage = () => {
  return (
    <>
      <BundlesPage />
      <PresetsPage isShopPage={true} />
    </>
  )
}

export default ShopPage