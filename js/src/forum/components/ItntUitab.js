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

        const discussionsIcon = app.forum.attribute('discussions_icon') ? app.forum.attribute('discussions_icon') : 'fas fa-home';
        const tagsIcon = app.forum.attribute('tags_icon') ? app.forum.attribute('tags_icon') : 'fas fa-tags';
        const composerIcon = app.forum.attribute('composer_icon') ? app.forum.attribute('composer_icon') : 'fas fa-edit';
        const settingsIcon = app.forum.attribute('settings_icon') ? app.forum.attribute('settings_icon') : 'fas fa-user-cog';
        const notificationsIcon = app.forum.attribute('notifications_icon') ? app.forum.attribute('notifications_icon') : 'fas fa-bell';

        if (typeof app.session.user === 'undefined') {
            return (
                <div id="ItntUitab">
                    <div class="foureightheight" />
                    <div class="mobile-app-icon-bar" id="myDIV">
                        <Link href={uitabHome}>
                            <button class="buttonstyle">
                                <i class={discussionsIcon} />
                                <span class="spanstyle" />
                            </button>
                        </Link>
                        <Link onclick={() => (this.newDiscussionAction().catch(() => {}))}>
                            <button class="buttonstyle">
                                <i class={composerIcon} />
                                <span class="spanstyle" />
                            </button>
                        </Link>
                        <Link href={uitabHome + 'tags'}>
                            <button class="buttonstyle">
                                <i class={tagsIcon} />
                                <span class="spanstyle" />
                            </button>
                        </Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="ItntUitab">
                    <div class="foureightheight" />
                    <div class="mobile-app-icon-bar" id="myDIV">
                        <Link href={uitabHome}>
                            <button class="buttonstyle">
                                <i class={discussionsIcon} />
                                <span class="spanstyle" />
                            </button>
                        </Link>
                        <Link href={uitabHome + 'tags'}>
                            <button class="buttonstyle">
                                <i class={tagsIcon} />
                                <span class="spanstyle">
                              </span>
                            </button>
                        </Link>
                        <Link onclick={() => (this.newDiscussionAction().catch(() => {
                        }))}>
                            <button class="buttonstyle">
                                <i class={composerIcon} />
                                <span class="spanstyle" />
                            </button>
                        </Link>
                        <Link href={uitabHome + 'settings'}>
                            <button class="buttonstyle">
                                <i class={settingsIcon} />
                                <span class="spanstyle" />
                            </button>
                        </Link>
                        <Link href={uitabHome + 'notifications'}>
                            <button class="buttonstyle">
                                <i class={notificationsIcon} />
                                <span class="spanstyle" />
                            </button>
                        </Link>
                    </div>
                </div>
            );
        }
    }

    newDiscussionAction() {
        return new Promise((resolve, reject) => {
            if (app.session.user) {
                app.composer.load(DiscussionComposer, {user: app.session.user});
                app.composer.show();

                return resolve(app.composer);
            } else {
                app.modal.show(LogInModal);

                return reject();
            }
        });
    }
}
