import { Action, ActionType } from './actions';

export interface State {
  username?: string;
}

export default function reducer(state: State = {}, action: Action) {
  switch (action.type) {
    case ActionType.username:
      return { ...state, username: action.username };

    default:
      return state;
  }
}
