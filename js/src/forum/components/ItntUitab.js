import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import LogInModal from 'flarum/forum/components/LogInModal';
import Link from 'flarum/forum/components/Link';

export default class ItntUitab extends Component {
    oninit(vnode) {
        super.oninit(vnode);
    }
    view() {
        const uitabHome = app.forum.attribute('home_page');
        if (typeof app.session.user === 'undefined') {
            return (
                <div id="ItntUitab">
                    <div class="foureightheight"></div>
                    <div class="mobile-app-icon-bar" id="myDIV">
                        <Link href={uitabHome}>
                            <button class="buttonstyle"><i class="fa fa-home"></i><span class="spanstyle"></span></button>
                        </Link>
                        <Link onclick={() => (this.newDiscussionAction().catch(() => { }))}>
                            <button class="buttonstyle"><i class="fas fa-edit"></i><span class="spanstyle"></span></button>
                        </Link>
                        <Link href={uitabHome + 'tags'}>
                            <button class="buttonstyle"><i class="fas fa-tags"></i><span class="spanstyle"></span></button>
                        </Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="ItntUitab">
                    <div class="foureightheight"></div>
                    <div class="mobile-app-icon-bar" id="myDIV">
                        <Link href={uitabHome}>
                            <button class="buttonstyle"><i class="fa fa-home"></i><span class="spanstyle"></span></button>
                        </Link>
                        <Link href={uitabHome + 'tags'}>
                            <button class="buttonstyle"><i class="fas fa-tags"></i><span class="spanstyle"></span></button>
                        </Link>
                        <Link onclick={() => (this.newDiscussionAction().catch(() => { }))}>
                            <button class="buttonstyle"><i class="fas fa-edit"></i><span class="spanstyle"></span></button>
                        </Link>
                        <Link href={uitabHome + 'settings'}>
                            <button class="buttonstyle"><i class="fas fa-user-cog"></i><span class="spanstyle"></span></button>
                        </Link>
                        <Link href={uitabHome + 'notifications'}>
                            <button class="buttonstyle"><i class="fas fa-bell"></i><span class="spanstyle"></span></button>
                        </Link>
                    </div>
                </div>
            );
        }

    }
    newDiscussionAction() {
        return new Promise((resolve, reject) => {
            if (app.session.user) {
                app.composer.load(DiscussionComposer, { user: app.session.user });
                app.composer.show();

                return resolve(app.composer);
            } else {
                app.modal.show(LogInModal);

                return reject();
            }
        });
    }
}