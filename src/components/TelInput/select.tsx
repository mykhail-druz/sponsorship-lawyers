import React from 'react';
import Select from 'react-select';
import { countries } from './country'

const CustomSelect = ({ selectedCountry, setSelectedCountry }) => {
    const sortedCountries = [...countries].sort((a, b) => a.name.localeCompare(b.name));
    const options = sortedCountries.map(country => ({
        label: `(${country.dialCode})`, // Updated to include country name
        value: country.code, // Consider using country.code as the unique value
        flagUrl: `/images/flags/${country.code.toLowerCase()}.svg`,
    }));
    const handleChange = (selectedOption) => {
        const country = countries.find(c => c.code === selectedOption.value);
        setSelectedCountry(country);
    };

    return (
        <Select
            options={options}
            value={options.find(option => option.value === selectedCountry.code)}
            onChange={handleChange}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    border:0,
                    background:'#F5F5F5',
                    fill:'#BF996F'
                }),
                dropdownIndicator: (styles) => ({
                    ...styles,
                    color: '#BF996F'
                }),
                indicatorSeparator: (styles) => ({
                    ...styles,
                    display:'none',
                })
            }}
            
            getOptionLabel={e => (
                <div style={{ display: 'flex', alignItems: 'center', color:'#BF996F' }}>
                    <img src={e.flagUrl} alt="flag" className="circleFlag" />
                    {e.label}
                </div>
            )}
        />
    );
};

export default CustomSelect;
