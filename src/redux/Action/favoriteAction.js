import {createSlice} from '@reduxjs/toolkit';
import {gymData, classData} from '../../helper/DummyData';

const initialState = {
  gymData: gymData.gyms,
  popularFavClass: gymData.gyms[0].popular_classes,
  popularClass: classData,
};

const favoriteAction = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.gymData = state.gymData.map(gym => {
        if (gym.id === action.payload.id) {
          return {...gym, favorite: true};
        }
        return gym;
      });
    },
    removeFromFav: (state, action) => {
      state.gymData = state.gymData.map(gym => {
        if (gym.id === action.payload.id) {
          return {...gym, favorite: false};
        }
        return gym;
      });
    },
    addToPopularFav: (state, action) => {
      state.popularFavClass = state.popularFavClass.map(gym => {
        if (gym.price === action.payload.price) {
          return {...gym, favorite: true};
        }
        return gym;
      });
    },
    removeFromPopularFav: (state, action) => {
      state.popularFavClass = state.popularFavClass.map(gym => {
        if (gym.price === action.payload.price) {
          return {...gym, favorite: false};
        }
        return gym;
      });
    },
    addToPopularClass: (state, action) => {
      state.popularClass = state.popularClass.map(gym => {
        if (gym.id === action.payload.id) {
          return {...gym, include: true};
        }
        return gym;
      });
    },
    removePopularClass: (state, action) => {
      state.popularClass = state.popularClass.map(gym => {
        if (gym.id === action.payload.id) {
          return {...gym, include: false};
        }
        return gym;
      });
    },
  },
});

export const {
  addToFav,
  removeFromFav,
  addToPopularFav,
  removeFromPopularFav,
  addToPopularClass,
  removePopularClass,
} = favoriteAction.actions;

export default favoriteAction.reducer;
