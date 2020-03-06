import React,{ Component } from 'react'
import { LogoStyle } from './LogoStyle'
import Image from '../Image/Image'

import MentoriumLogo from '../../assets/logo.png'

class Logo extends Component {
    render() {
        return (
            <>
                <LogoStyle>
                    <Image src={MentoriumLogo} width='38px'></Image>
                </LogoStyle>
            </>
        )
    }
}

export default Logo