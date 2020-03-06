import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import './index.css'

import Main from './components/Main/Main'
import Loader from './components/Loader/Loader';
import Bottom from './components/Bottom/Bottom'
import CourseSelector from './components/CourseSelector/CourseSelector';

// Init VK  Mini App
bridge.send('VKWebAppInit');


// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

let url = 'http://localhost:10888/'
ReactDOM.render(
    <BrowserRouter basename={url}>
        <App>
            <Route
            exact
            path="/"
            render={() => {
                return (
                    <>
                        <Main/>
                        <Bottom/>
                    </>
                )
            }}
            />
            <Route
            exact
            path="/new"
            render={() => {
                return (
                    <>
                        <Main/>
                        <CourseSelector/>
                        <Bottom new/>
                    </>
                )
            }}
            />
            {/* <Route
            exact
            path="/loader"
            render={() => {
                return (
                    <>
                        <Loader/>
                    </>
                )
            }}
            /> */}
        </App>
    </BrowserRouter>,
    document.getElementById("root")
)