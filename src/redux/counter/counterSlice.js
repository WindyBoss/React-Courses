import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeValue: (state, { payload }) => {
            state.value += payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeValue } = counterSlice.actions;

export default counterSlice.reducer;



/*

! ---------------------------------------------------------------- Notes ----------------------------------------------------------------------

! ---------------------------------------------------------------- Redux ----------------------------------------------------------------------

* Redux - library used for global state management in the case of high level of complication of global state.

^ Main concept: Creation of global store - wrap of all application, which will collect all data and can provide it to all components.
Is used usually when global state is complicated (like, theme, user data, and other data which, can be necessary in a lot of different components)

& Main elements:
1. Store,
2. Reducers - functions, created for individual state update,
3. Actions - user actions, presented as object with features type (name of action) & payload (the result of action),
4. Store Provider - The same wrap as BrowserRouter
5. connection with UI (hooks: [useSelector, useDispatch], components: [mapStateToProps, mapDispatchToProps, connect ])
6. Slice - combo-function, which replace action and reducer

! ---------------------------------------------------------------- Store ----------------------------------------------------------------------

^ Created with functions createStore (vanilla Redux) or configureStore (Redux Toolkit).

& Main elements of Store:
1. Reducer - combination of all reducers (created by one of combineReducers functions)
2. middleware - middleware function, which is used for additional configurations (for ex. logger - which shows all action in console)
3. devTools - bool - param of store, responsible for presence of redux developer tools in browser
4. preloadedState - store state before loading (some variable)
5. enhancers - additional callback functions, which is called during state update

? example:
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ^ ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], -- the code force code to ignore actions, for mistake preventing
            },
        }).concat(logger),
    ^ devTools: process.env.NODE_ENV !== 'production', -- the code command webpack not to add devTools to production mode
    enhancers: defaultEnhancers => {
        console.log(defaultEnhancers);
        return defaultEnhancers;
    },
});

! ---------------------------------------------------------------- Reducer ----------------------------------------------------------------------

Reducer - function for redux state update

Created with function createReducer.

There are 3 types of reducers structure:

* Redux (usually made by switch)
? Example:
const counter(state, action) {
    if (typeof state === 'undefined') {
      return 0
    }
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

* Redux Toolkit
^ 1. builder
? Example:
export const todoReducer = createReducer(initialState, builder => {
    builder
        .addCase(addTodo, (state, { payload }) => {
            state.push(payload);
        })
});

^ 2. inline actions
? Example:
export const todoReducer = createReducer(initialState, {
    [addTodo]: (state, { payload }) => {
        state.push(payload);
    },
});

! ---------------------------------------------------------------- Actions ----------------------------------------------------------------------


* Redux
& Actions are declared during the user activity and are written directly into the component

* Redux Toolkit
& Actions are defined in separate file by function * createAction *, where prepare function can be added (as in example)

? Example  (prepared function)
function addTodoPrepare(data) {
  if (!data) {
    return {
      payload: {},
    };
  }

  const { name, description, deadline, priority } = data;
  return {
    payload: {
      name: name,
      deadline: deadline,
      description: description,
      id: nanoid(),
      completed: false,
      priority: priority,
    },
  };
}

const addTodo = createAction('todos/addTodo', addTodoPrepare);

! ---------------------------------------------------------------- Slice ----------------------------------------------------------------------

^ Slice is create by using function createSlice (only Toolkit)

? Example
export const todoSlice = createSlice({
    name: 'todos',
    initialState: { todos: [...todos], filter: '' },
    reducers: {
        addTodo: {
            reducer(state, { payload }) {
                state.todos.push(payload);
            },
            & prepare(payload) { -- action prepare function
                return addTodoPrepare(payload);
            },
        },
        deleteTodo: (state, { payload }) => {
            return {
                ...state,
                todos: [...state.todos.filter(({ id }) => id !== payload)],
            };
        },

    },
});

? Example 2
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeValue: (state, { payload }) => {
            state.value += payload;
        },
    },
});

^ Slice Export (reducers & actions)
export const { changeValue } = counterSlice.actions;
export default counterSlice.reducer;

! ---------------------------------------------------------------- Provider ----------------------------------------------------------------------

Provider - Wrapper of whole application with store attribute, which gives access to store to all components

! ---------------------------------------------------------------- localStorage ----------------------------------------------------------------------------

With redux toolkit it is better to use redux toolkit persist library, which guarantees that that code firstly will check localStorage,
and later will initialize the store and application

& https://github.com/ryanwillis/reduxjs-toolkit-persist
^ npm install reduxjs-toolkit-persist

* Necessary elements from persist library:
1. persistStore
2. persistReducer
3. storage
4. PersistGate - wrapper of all application

? Example:
import { createStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  ^ reducer: persistedReducer, - normal reducer must be replaced by persistedReducer
  middleware: getDefaultMiddleware({
    ^ serializableCheck: { - persist adds functions inside localStorage, which can cause mistakes in production mode
      ^ ignoredActions: [ - it is better to add them as ignored by babble
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),
});

! ---------------------------------------------------------------- Redux Toolkit --------------------------------------------------------------

Redux Toolkit - bigger abstraction of redux where all redux magic is hidden in simplifier behind the code

& Additional features:
* createSlice
* Immer - library, which allow mutating directly inside slices & reducers

! ------------------------------------------------------------ action console log ------------------------------------------------------------

& console.log(
  addTodo({
    deadline: 'tomorrow',
    description: 'no',
    name: 'no name',
    priority: 'high',
  })
);

* Always will the object with features 'type' & 'payload'

--  Type - name of our action
--  payload - the result of action

In this case was used action prepare function, which already possessed the features:
1. id (generated by nanoid)
2. completed: false (by default)

{
    "type": "todos/addTodo",
    "payload": {
        "name": "no name",
        "deadline": "tomorrow",
        "description": "no",
        "id": "1nUQuIsc0x91OmZWQixy3",
        "completed": false,
        "priority": "high"
    }
}

& toString() - action function, which return the name of action as string, which is used in reducer
console.log(addTodo.toString()); -- 'todos/addTodo';

? Example
    [addTodo]: (state, { payload }) => {
        state.push(payload);
    },


*/