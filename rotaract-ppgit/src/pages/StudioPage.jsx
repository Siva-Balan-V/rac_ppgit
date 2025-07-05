import { Studio } from 'sanity'
import config from '../../sanity.config'

const StudioPage = () => {
  return (
    <div className="h-screen">
      <Studio config={config} />
    </div>
  )
}

export default StudioPage
