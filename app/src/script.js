import '@babel/polyfill'
import { of } from 'rxjs'
import AragonApi from '@aragon/api'

const INITIALIZATION_TRIGGER = Symbol('INITIALIZATION_TRIGGER')

const api = new AragonApi()

api.store(
  async (state, event) => {
    let newState
    console.log("Event: ", event.event)
    switch (event.event) {
      case INITIALIZATION_TRIGGER:
        newState = { ...state, count: await getValue() }
        break
      case 'Plus':
        newState = { ...state, count: await getValue() }
        break
      case 'Minus':
        newState = { ...state, count: await getValue() }
        break
      case 'EntryAdded':
          newState = { ...state, entry: event.event }
          break
      case 'EntryRemoved':
          newState = { ...state, entry: event.event }
          break
      default:
        newState = state
    }

    return newState
  },
  [
    // Always initialize the store with our own home-made event
    of({ event: INITIALIZATION_TRIGGER }),
  ]
)

async function getValue() {
  return parseInt(await api.call('value').toPromise(), 10)
}
