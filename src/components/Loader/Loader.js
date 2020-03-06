import React, { Component } from "react";
import Text from '../Text/Text'
import Logo from '../Logo/Logo'
import { LoaderStyle, LoaderContent } from './LoaderStyle'

const Loader = ({ props }) => (
    <LoaderStyle>
        <Logo></Logo>
        <LoaderContent>
            <div className='hello'>
                <Text size='big'>Привет,</Text>
                <Text size='big' weight='bold'>Аргун</Text>
            </div>
            <div className='hello_content'>
                <div className='hello_content_1'>
                    <Text type='secondary'>
                        Добро пожаловать в
                    </Text> 
                    <Text type='brand' weight='bold'>
                        mentorium
                    </Text>
                </div>
                <Text type='secondary'>
                    Тут мы решаем тестовики по предметам и готовимся к ЕНТ.
                </Text>
            </div>

        </LoaderContent>
    </LoaderStyle>
);

Loader.propTypes = {
};

export default Loader;
