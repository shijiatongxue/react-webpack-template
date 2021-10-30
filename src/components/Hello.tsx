import React from 'react';
import { Button } from '@douyinfe/semi-ui';
// @ts-ignore
import SemiLogo from '../common/images/SemiLogo.png';
// @ts-ignore
import SemiLogoSVG from '../common/svgs/semi_logo.svg';

export default function Hello() {
    return (
        <div>
            <Button>Hello Semi</Button>
            <img src={SemiLogo} alt="Semi Logo" />
            <img src={SemiLogoSVG} alt="Semi Logo" />
        </div>
    );
}