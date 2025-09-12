import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    articles: [],
    article: null,
    error: null,
};

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticlesStart: (state, action) => {
            state.isLoading = true;
        },

        getArticlesSuccess: (state, action) => {
            state.isLoading = false;
            state.articles = action.payload;
        },

        getArticlesFailure: (state, action) => {
            state.error = action.payload;
        },

        getArticleStart: (state, action) => {
            state.isLoading = true;
        },

        getArticleSuccess: (state, action) => {
            state.isLoading = false;
            state.article = action.payload;
        },

        getArticleFailure: (state, action) => {
            state.error = false;
        }
    }
});

export const {
    getArticlesStart, getArticlesSuccess, getArticlesFailure,
    getArticleStart, getArticleSuccess, getArticleFailure
} = articleSlice.actions;

export default articleSlice.reducer;