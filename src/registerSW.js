import { register } from 'register-service-worker';
console.log(process.env.BASE_URL);
if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
        ready() {
            console.log(
                'App is being served from cache by a service worker.\n' +
                    'For more details, visit https://goo.gl/AFskqB'
            );
        },
        registered() {
            console.log('Service worker has been registered.');
        },
        cached() {
            console.log('content in cached');
        },
        updatefound() {
            console.log('New content is downloading.');
        },
        updated() {
            console.log('New content is available; please refresh.');
        },
        offline() {
            console.log('your are in offline');
        },
        error(error) {
            console.error('Error during service worker registration:', error);
        },
    });
}