import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import socket from '../libs/socket.io';
import reducer from '../reducers';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import App from './app.jsx';
import Channels from './channels.jsx';
import Signin from './signin.jsx';

const store = createStore(combineReducers({reducer: reducer, routing: routerReducer}));
const history = syncHistoryWithStore(browserHistory, store);
socket.listen(store);

class Wrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<Route path='/' component={App}>
						<Route path='signin' component={Signin} />
            <Route path='index' component={Channels} />
					</Route>
				</Router>
			</Provider>
		);
	}
}

export default Wrapper;
ReactDOM.render(
	<Wrapper/>, document.getElementById('app'));
