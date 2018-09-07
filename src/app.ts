import riot from 'riot'
import route from 'riot-route'

import './app.tag'

import './components/footer.tag'

import './pages/home.tag'
import './pages/second.tag'

riot.mount('*')

route.base('/')

route('/', () => riot.mount('content', 'home'))
route('/second', () => riot.mount('content', 'second'))

route.start(true)
