import { extend } from 'flarum/common/extend';
import Application from 'flarum/common/Application';

import ItntUitab from './components/ItntUitab';

app.initializers.add('itnt-uitab', () => {
    extend(Application.prototype, 'mount', () => {
        const footer = document.createElement('div');

        m.mount(document.body.appendChild(footer), ItntUitab);
    });
});