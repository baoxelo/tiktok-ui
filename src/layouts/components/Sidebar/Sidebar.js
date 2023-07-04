import classNames from "classnames/bind";
import styles from "./sidebar.module.scss"
import Menu, {MenuItem} from '~/layouts/components/Sidebar/Menu';
import config from "~/config";
import { HomeIcon, UsersIcon, LiveIcon, ExploreIcon, HomeIconSolid, UsersIconSolid, ExploreIconSolid, LiveIconSolid } from "~/components/Icons";
const cx = classNames.bind(styles)
function Sidebar() {
    return ( 
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} iconRegular={<HomeIcon />} iconActive={<HomeIconSolid />}/>
                <MenuItem title="Following" to={config.routes.following} iconRegular={<UsersIcon/>} iconActive={<UsersIconSolid/>}/>
                <MenuItem title="Explore" to={config.routes.explore} iconRegular={<ExploreIcon/>} iconActive={<ExploreIconSolid/>}/>
                <MenuItem title="LIVE" to={config.routes.live} iconRegular={<LiveIcon/>} iconActive={<LiveIconSolid/>}/>
            </Menu>
        </aside>
    );
}

export default Sidebar;