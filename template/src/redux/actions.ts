export enum ActionType {
  username = 'ROOT_RENAME',
}

export interface UsernameAction {
  type: ActionType.username;
  username?: string;
}

export function rename(username?: string): UsernameAction {
  return {
    type: ActionType.username,
    username,
  };
}
export type Action = UsernameAction;
