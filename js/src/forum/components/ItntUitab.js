import app from 'flarum/app';
import Component from 'flarum/Component';

export default class ItntUitab extends Component {

    view() {
        const uitabHome = app.data['itnt-uitab.home_page'];
        const uitabTags = app.data['itnt-uitab.tags_page'];
        const uitabCreate = app.data['itnt-uitab.create_page'];
        const uitabSettings = app.data['itnt-uitab.settings_page'];
        const uitabNotifications = app.data['itnt-uitab.notifications_page'];

        if (typeof app.session.user === 'undefined') {
            return (
                <div id="ItntUitab">
                    <div class="foureightheight"></div>
                    <div class="mobile-app-icon-bar" id="myDIV">
                        <a href={app.forum.attribute('itnt-uitab.home_page')}>
                            <button class="buttonstyle"><i class="fa fa-home"></i><span class="spanstyle"></span></button>
                        </a>
                        <a href={app.forum.attribute('itnt-uitab.create_page')}>
                            <button class="buttonstyle"><i class="fas fa-edit"></i><span class="spanstyle"></span></button>
                        </a>
                        <a href={app.forum.attribute('itnt-uitab.tags_page')}>
                            <button class="buttonstyle"><i class="fas fa-tags"></i><span class="spanstyle"></span></button>
                        </a>
                    </div>
                </div>
            );
    
        }else{
            return (
                <div id="ItntUitab">
                    <div class="foureightheight"></div>
                    <div class="mobile-app-icon-bar" id="myDIV">
                        <a href={app.data['itnt-uitab.home_page']}>
                            <button class="buttonstyle"><i class="fa fa-home"></i><span class="spanstyle"></span></button>
                        </a>
                        <a href={uitabTags}>
                            <button class="buttonstyle"><i class="fas fa-tags"></i><span class="spanstyle"></span></button>
                        </a>
                        <a href={uitabCreate}>
                            <button class="buttonstyle"><i class="fas fa-edit"></i><span class="spanstyle"></span></button>
                        </a>
                        <a href={uitabSettings}>
                            <button class="buttonstyle"><i class="fas fa-user-cog"></i><span class="spanstyle"></span></button>
                        </a>
                        <a href={uitabNotifications}>
                            <button class="buttonstyle"><i class="fas fa-bell"></i><span class="spanstyle"></span></button>
                        </a>
                    </div>
                </div>
            );
    
        }

    }
}