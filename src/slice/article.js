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
        },

        postArticleState: (state, action) => {
            state.isLoading = true;
        },

        postArticleSuccess: (state, action) => {
            state.isLoading = false;
        },

        postArticleFailure: (state, action) => {
            state.isLoading = false;
            state.error = 'Error'
        }
    }
});

export const {
    getArticlesStart, getArticlesSuccess, getArticlesFailure,
    getArticleStart, getArticleSuccess, getArticleFailure,
    postArticleState, postArticleSuccess, postArticleFailure
} = articleSlice.actions;

export default articleSlice.reducer;