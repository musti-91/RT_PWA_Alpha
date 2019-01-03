import Immutable from 'seamless-immutable'


import  { HomeStateType, HomeState, Types } from "../../types"

const users: object[] = [
  {
    "gender": "female",
    "name": {
      "title": "ms",
      "first": "daisy",
      "last": "walker"
    },
    "location": {
      "street": "6589 w campbell ave",
      "city": "brownsville",
      "state": "north dakota",
      "postcode": 54591,
      "coordinates": {
        "latitude": "85.6005",
        "longitude": "33.3544"
      },
      "timezone": {
        "offset": "0:00",
        "description": "Western Europe Time, London, Lisbon, Casablanca"
      }
    },
    "email": "daisy.walker@example.com",
    "login": {
      "uuid": "3ed7ae1a-7b4f-49c1-8f08-69982299bfe9",
      "username": "lazykoala619",
      "password": "3232",
      "salt": "Tr7MWgd0",
      "md5": "86e1e8cd30f4363d7d6b46d74a203bef",
      "sha1": "4e07cb3292440c72dcc1acdf94653990b1e71423",
      "sha256": "959272bc8d9e1940ca769400494aff5229261b2c10f18c8926b3c998ce27459e"
    },
    "dob": {
      "date": "1975-10-03T10:10:33Z",
      "age": 43
    },
    "registered": {
      "date": "2011-04-19T09:51:17Z",
      "age": 7
    },
    "phone": "(155)-799-5985",
    "cell": "(276)-977-2573",
    "id": {
      "name": "SSN",
      "value": "548-81-3286"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/17.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/17.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
    },
    "nat": "US"
}]
const IState: HomeState = {
  loading: false,
  users: users,
  error: null,
}

export const INITIAL_STATE = Immutable.from(IState)

export const homeReducer = (state = INITIAL_STATE, action: any):HomeStateType => {
  switch(action.type) {

    case Types.LOADING_USERS_START : state = {... state, loading: true }

    case Types.LOADING_USERS_SUCCESS : state = {... state, loading: false, users: action.users }

    case Types.LOADING_USERS_FAILURE : state = {... state, loading: false, error: action.error }

    case Types.RESET_LOADING_USERS_ERROR : state = {... state, loading: false, error: null }

    default: state = {...state }

  }
  return state
}
