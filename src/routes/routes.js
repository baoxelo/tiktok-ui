import config from '~/config'
//Layout
import { HeaderOnly } from '~/layouts';
//Page
import Home from '~/pages/Home';
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';
import Explore from '~/pages/Explore';



const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly }

    
]
const privateRoutes = [

]
export { privateRoutes, publicRoutes}