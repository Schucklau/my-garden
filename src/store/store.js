import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import { message } from 'antd'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
const initState = {
  
}
const sagaMiddleware = createSagaMiddleware()
function logger() {
  return next => action => {
    next(action)
  }
}

function handleError() {
  return next => action => {
    if (action.payload.code !== 200) {
      // message.error('请求错误')
    }
    next(action)
  }
}
const store = createStore(
  reducers,
  initState,
  applyMiddleware(thunkMiddleware, sagaMiddleware, logger, handleError)
)

sagaMiddleware.run(rootSaga)

export default store