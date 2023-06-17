# Learn-Redux


* [1]Folder : `Redux-Demo` : Contains lessons on redux, which use a simple `redux` library.

    - `Lession1.js` : Basic of Redux that how to create store ,action and how to dispatch certain action with subscribe and unsubscribe feature. 

    - `Lession2.js` : Regarding the `combineReducers` functionality in redux

    - `Lession3.js` : Regarding `immer` library functionality in redux whitch further used by `@reduxjs/toolkit` in backend of library.

    - `Lession4.js` : Integrating `middleware` in redux using `applyMiddleware` functionality.

    - `Lession5.js` : Regarding integration of redux-thunk library for creating async action creators.


* [2]Folder : `Redux-TK-Demo` : Contains lessons on redux, which uses the `redux-toolkit` aka `@reduxjs/toolkit` library.

    - `Lession1.js` : Basics reagarding the `@reduxjs/toolkit` library that how make store , reducers and all which furthur is in `features`,`app` folders.
    
    - `Lession2.js` : Consists integration of  middlewares such as logger inside `@reduxjs/toolkit`.

    - `Lession3.js` : Dealing with extra reducers using `extraReducers` property of createSlice funtion.

    - `Lession4.js` : Regarding `createAsyncThunk` functionality in `@reduxjs/toolkit`.


* [3]Folder : *redux-rtk-demo*  : Demonstration of toolkit using react.
    
    - `STEP1:` This react repo is created using `vite` used `npm create vite@latest react-rtk-demo`

    - `STEP2`: These folders such as app,features and files such as cakeSlice,canSlice  are copied from above folder `Redux-TK-Demo` except the import and exports are changed into `ES6 Module` Syntax.

    - `STEP3` : Installing `react-redux` library which has some inbuilt hooks which gives us the direct access to the `redux-store`

    - `STEP4` : As mentioned above regarding `react-redux` it has a hool called `useSelector` which allows to get current state of store using a small function snippet.

```
    import {useSelector} from 'react-redux';

    funtion X(){
        const numOfCakes=useSelector((state)=> state.cake.numOfCakes);

        return (
            <div>
                <h2>Num Of Cakes : {numOfCakes}</h2>
            </div>
        )
    }

```
<div>
- `STEP5`: For dispatching a particular action we have useDispatch hook instroduced by `react-redux` whihc allows us to dispatch anyparticular function.
</div>



```
    import {useDispatch} from 'react-redux';
    import {ordered} from './cakeSlice.js';

    funtion X(){
        const dispatch =useDispatch();
        return (
            <div>
                <button onClick={()=>dispatch(ordered())}> Order </button>

            </div>
        )
    }

```



