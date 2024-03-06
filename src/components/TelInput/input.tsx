"use client"
import React, { useState } from 'react';
import { countries } from './country'
import CustomSelect from './select';


export function MyPhoneInput() {
    const [selectedCountry, setSelectedCountry] = useState(countries[229]);
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <div className='inputLarge' style={{ display: 'flex', alignItems: 'center', color:'#BF996F' }}>
            <CustomSelect selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
            <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone number"
                className='input'
            />
        </div>
    );
}