import { FormsData } from '@/types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type RulesState = {
  blueTeam: string;
  redTeam: string;
  banpickMode: 'tournament' | 'peerless3' | 'peerless5';
  peopleMode: 'solo' | 'team';
  timeUnlimited: string;
  teamSide: 'red' | 'blue' | 'solo';
  blueImg: string;
  redImg: string;
  setRules: (data: FormsData) => void;
};

export const useRulesStore = create<RulesState>()(
  persist(
    (set) => ({
      blueTeam: '블루팀',
      redTeam: '레드팀',
      banpickMode: 'tournament',
      peopleMode: 'solo',
      timeUnlimited: 'true',
      teamSide: 'solo',
      blueImg: '/images/t1.webp',
      redImg: '/images/hanwha.webp',
      setRules: (data: FormsData) =>
        set({
          blueTeam: data.blueTeam !== '' ? data.blueTeam : '블루팀',
          redTeam: data.redTeam !== '' ? data.redTeam : '레드팀',
          banpickMode: data.banpickMode,
          peopleMode: data.peopleMode,
          timeUnlimited: data.peopleMode !== 'solo' ? 'false' : data.timeUnlimited,
          teamSide: data.peopleMode === 'solo' ? 'solo' : data.teamSide,
          blueImg: data.blueImg,
          redImg: data.redImg,
        }),
    }),
    { name: 'rules-store' },
  ),
);
