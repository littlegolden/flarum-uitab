import { extend } from 'flarum/extend';
import Application from 'flarum/Application';

import ItntUitab from './components/ItntUitab';

app.initializers.add('itnt-uitab', () => {
    extend(Application.prototype, 'mount', () => {
        const footer = document.createElement('div');

        m.mount(document.body.appendChild(footer), ItntUitab);
    });
});