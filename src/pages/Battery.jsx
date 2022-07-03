import React, { useState, useEffect, useRef, forwardRef } from 'react';

import BatteryCharging20TwoToneIcon from '@mui/icons-material/BatteryCharging20TwoTone';
import BatteryCharging30TwoToneIcon from '@mui/icons-material/BatteryCharging30TwoTone';
import BatteryCharging50TwoToneIcon from '@mui/icons-material/BatteryCharging50TwoTone';
import BatteryCharging60TwoToneIcon from '@mui/icons-material/BatteryCharging60TwoTone';
import BatteryCharging80TwoToneIcon from '@mui/icons-material/BatteryCharging80TwoTone';
import BatteryCharging90TwoToneIcon from '@mui/icons-material/BatteryCharging90TwoTone';
import BatteryAlertTwoToneIcon from '@mui/icons-material/BatteryAlertTwoTone';

import Battery0BarTwoToneIcon from '@mui/icons-material/Battery0BarTwoTone';
import Battery1BarTwoToneIcon from '@mui/icons-material/Battery1BarTwoTone';
import Battery2BarTwoToneIcon from '@mui/icons-material/Battery2BarTwoTone';
import Battery3BarTwoToneIcon from '@mui/icons-material/Battery3BarTwoTone';
import Battery4BarTwoToneIcon from '@mui/icons-material/Battery4BarTwoTone';
import Battery5BarTwoToneIcon from '@mui/icons-material/Battery5BarTwoTone';
import Battery6BarTwoToneIcon from '@mui/icons-material/Battery6BarTwoTone';


import { themeContext } from "context/authContext";


export const Battery = () => {
    const [isCharging, setIsCharging] = useState(false);
    const [batteryLevel, setBatteryLevel] = useState(false);
    const batteryLevelText = useRef(); // => here is an example of using useRef by connecting it to the DOM element by adding hover effect

    useEffect(() => {
        const checkBattery = () => {
            navigator.getBattery().then(function(battery) {
            setIsCharging(battery.charging);
            setBatteryLevel(battery.level);
            });
        };

        setInterval(() => {
            checkBattery();
        }, 1000);
    },[]);


    const showBatteryLevel = (color) => {
        batteryLevelText.current.style.color = color;
    };

    return (
        <themeContext.Consumer>
        {({mainTheme}) => (
        <div style={{ position: 'absolute', top: '20px', right: '100px', padding: '10px 15px', borderRadius: '50%'}}>
            <button 
                style={{backgroundColor: 'transparent', border: 'none'}} 
                onMouseEnter={() => showBatteryLevel(mainTheme.colors.mainText)} 
                onMouseLeave={() => showBatteryLevel('transparent')}>
            {isCharging ? (
                <>
                    {batteryLevel <= 0.2  && <BatteryCharging20TwoToneIcon fontSize='large' style={{transform: 'rotate(90deg)'}} color='success'/> }
                    {(batteryLevel <= 0.5 && batteryLevel > 0.2) && <BatteryCharging30TwoToneIcon fontSize='large' style={{transform: 'rotate(90deg)'}} color='success'/> }
                    {(batteryLevel <= 0.6 && batteryLevel > 0.5) && <BatteryCharging50TwoToneIcon fontSize='large' style={{transform: 'rotate(90deg)'}} color='success'/> }
                    {(batteryLevel <= 0.8 && batteryLevel > 0.6) && <BatteryCharging60TwoToneIcon fontSize='large' style={{transform: 'rotate(90deg)'}} color='success'/> }
                    {(batteryLevel <= 0.9 && batteryLevel > 0.8) && <BatteryCharging80TwoToneIcon fontSize='large' style={{transform: 'rotate(90deg)'}} color='success'/> }
                    {(batteryLevel <= 1 && batteryLevel > 0.9) && <BatteryCharging90TwoToneIcon fontSize='large' style={{transform: 'rotate(90deg)'}} color='success'/> }
                    {batteryLevel === 1 && <BatteryAlertTwoToneIcon/> }
                </>
            ) : (
                <>
                    {batteryLevel <= 0.05  && <Battery0BarTwoToneIcon/> }
                    {(batteryLevel <= 0.2 && batteryLevel > 0.05) && <Battery1BarTwoToneIcon fontSize='large' style={{transform: 'rotate(90deg)'}} color={mainTheme.id === 'dark' ? 'secondary' : 'primary'}/> }
                    {(batteryLevel <= 0.5 && batteryLevel > 0.2) && <Battery2BarTwoToneIcon fontSize='large' style={{transform: 'rotate(90deg)'}} color={mainTheme.id === 'dark' ? 'secondary' : 'primary'}/> }
                    {(batteryLevel <= 0.6 && batteryLevel > 0.5) && <Battery3BarTwoToneIcon fontSize='large' style={{transform: 'rotate(90deg)'}} color={mainTheme.id === 'dark' ? 'secondary' : 'primary'}/> }
                    {(batteryLevel <= 0.8 && batteryLevel > 0.6) && <Battery4BarTwoToneIcon fontSize='large' style={{transform: 'rotate(90deg)'}} color={mainTheme.id === 'dark' ? 'secondary' : 'primary'}/> }
                    {(batteryLevel <= 0.9 && batteryLevel > 0.8) && <Battery5BarTwoToneIcon fontSize='large' style={{transform: 'rotate(90deg)'}} color={mainTheme.id === 'dark' ? 'secondary' : 'primary'}/> }
                    {(batteryLevel <= 1 && batteryLevel > 0.9) && <Battery6BarTwoToneIcon fontSize='large' style={{transform: 'rotate(90deg)'}} color={mainTheme.id === 'dark' ? 'secondary' : 'primary'}/> }
                </>
            )
            }
            </button>
        <Text ref={batteryLevelText} text={batteryLevel} />
        </div>
        )}
        </themeContext.Consumer>         
    );
};


const Text = forwardRef(({text}, ref) => { // => forwardRef helps to pass ref feature to child components | first argument - props, second - ref
return <p style={{color: 'transparent', position: 'absolute', top: '16px', left: '-30px'}} ref={ref}>{text*100}%</p>
});