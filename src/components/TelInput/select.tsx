import React from 'react';
import Select, { StylesConfig } from 'react-select';
import { countries } from './country';

interface Country {
    name: string;
    dialCode: string;
    code: string;
}

interface Option {
    label: string;
    value: string;
    flagUrl: string;
}

interface CustomSelectProps {
    selectedCountry: Country;
    setSelectedCountry: (country: Country | null) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ selectedCountry, setSelectedCountry }) => {
    const sortedCountries: Country[] = [...countries].sort((a, b) => a.name.localeCompare(b.name));

    const options: Option[] = sortedCountries.map(country => ({
        label:` (${country.dialCode})`,
        value: country.code,
        flagUrl: `/images/flags/${country.code.toLowerCase()}.svg`,
    }));

    const handleChange = (selectedOption: Option | null) => {
        if (selectedOption) {
            const country = countries.find(c => c.code === selectedOption.value);
            setSelectedCountry(country !== undefined ? country : null);
        } else {
            setSelectedCountry(null);
        }
    };

    const customStyles: StylesConfig<Option, false> = {
        control: (baseStyles) => ({
            ...baseStyles,
            border: 0,
            background: '#F5F5F5',
            width:'140px',
            height:'10px',
            flexDirection:'row',
            display:'flex'
        }),
        dropdownIndicator: (styles) => ({
            ...styles,
            color: '#BF996F'
        }),
        indicatorSeparator: (styles) => ({
            ...styles,
            display: 'none',
        }),
    };

    const formatOptionLabel = (option: Option) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={option.flagUrl} alt="" style={{ marginRight: 10, width: 16, height: 16 }} />
            {option.label}
        </div>
    );

    return (
        <Select<Option>
            options={options}
            getOptionValue={option => option.value}
            formatOptionLabel={formatOptionLabel}
            styles={customStyles}
            onChange={handleChange}
            value={options.find(option => option.value === selectedCountry.code)}
        />
    );
};

export default CustomSelect;
