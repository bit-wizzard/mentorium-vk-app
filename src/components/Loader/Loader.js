import React, { Component } from "react";
import Text from '../Text/Text'
import Logo from '../Logo/Logo'
import { LoaderStyle, LoaderContent } from './LoaderStyle'

const Loader = ({ props }) => (
    <LoaderStyle>
        <Logo></Logo>
        <LoaderContent>
            <div className='hello'>
                <Text>Привет, </Text>
                <Text>Аргун</Text>
            </div>
            <div className='hello_content'>
                <Text>
                    Добро пожаловать в mentorium
                    Тут мы решаем тестовики по предметам и готовимся к ЕНТ.
                </Text>
            </div>

        </LoaderContent>
    </LoaderStyle>
);

Loader.propTypes = {
};

export default Loader;
