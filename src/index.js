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

let url = "https://y4m4t0.github.io/mentorium-vk-app"

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
    // serviceWorker.registre();
    
ReactDOM.render(
    <BrowserRouter>
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
                        <Bottom/>
                    </>
                )
            }}
            />
            <Route
            exact
            path="/course-selector"
            render={() => {
                return (
                    <>
                        <Main/>
                        <CourseSelector activated/>
                        <Bottom activated/>
                    </>
                )
            }}
            />
        </App>
    </BrowserRouter>,
    document.getElementById("root")
)