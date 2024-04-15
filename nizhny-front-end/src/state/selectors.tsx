import { selector } from 'recoil';
import { createTeamState } from './atom';

const createTeamMutation = selector({
  key: 'createTeamState',
  set: ({ set }, newValue) => set(createTeamState, newValue),
});

export { createTeamMutation };
