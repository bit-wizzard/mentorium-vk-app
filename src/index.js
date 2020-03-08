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
import CourseSelector from './components/CourseSelector/CourseSelector';
import Verification from './components/Verification/Verification'
import CoursePage from './components/CoursePage/CoursePage';

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
                        <Main/>
                        <Bottom type='session'/>
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
                        <Bottom type='session'/>
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
                        <Bottom activated type='session'/>
                    </>
                )
            }}
            />
            <Route
            exact
            path="/close/:id"
            render={() => {
                return (
                    <>
                        <Main/>
                        <Bottom type='session'/>
                        <Verification/>
                    </>
                )
            }}/>
            <Route
            exact
            path="/course/:id"
            render={() => {
                return (
                    <>
                        <CoursePage/>
                        <Bottom type='test'/>
                    </>
                )
            }}/>
        </App>
    </BrowserRouter>,
    document.getElementById("root")
)