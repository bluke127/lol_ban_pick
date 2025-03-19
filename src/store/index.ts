import { useBanpickStore, useBanStore, usePeerlessStore } from './banpick';
import { useRulesStore } from './rules';
import { useSocketStore } from './socket';
import { useUserStore } from './user';

useRulesStore.subscribe((state) => {
  const { myTeam, yourTeam, banpickMode, peopleMode, timeUnlimited, myTeamSide, myImg, yourImg, nowSet , position} = state;
  useSocketStore
    .getState()
    .setRules({ myTeam, yourTeam, banpickMode, peopleMode, timeUnlimited, myTeamSide, myImg, yourImg, nowSet , position});
});
export { useBanpickStore, useRulesStore, useBanStore, useSocketStore, useUserStore, usePeerlessStore };
