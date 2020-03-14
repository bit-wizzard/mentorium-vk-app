import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import './index.css'
import Main from './components/Main/Main'
import Bottom from './components/Bottom/Bottom'
import CoursePage from './components/CoursePage/CoursePage';
import Test from './components/Test/Test'
import Submit from './components/Submit/Submit'

// Init VK  Mini App
bridge.send('VKWebAppInit');

let url = "mentorium-vk-app"

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// serviceWorker.registre();

ReactDOM.render(
    <BrowserRouter basename={url}>
        <App>
            <Route
                exact
                path="/"
                render={() => {
                    return (
                        <>
                            <Main />
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
                            <Main />
                            <Bottom type='session' />
                        </>
                    )
                }}
            />
            <Route
                exact
                path="/course/:id"
                render={() => {
                    return (
                        <>
                            <CoursePage />
                        </>
                    )
                }} />
            <Route
                exact
                path="/test/:test_id"
                render={() => {
                    return (
                        <>
                            <Test />
                        </>
                    )
                }}
            />
            <Route
                exact
                path="/submit/:test_id"
                render={() => {
                    return (
                        <>
                            <Submit />
                        </>
                    )
                }}
            />
        </App>
    </BrowserRouter>,
    document.getElementById("root")
)