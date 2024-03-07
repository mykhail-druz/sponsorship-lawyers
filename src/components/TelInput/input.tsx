"use client";
import React, { useEffect, useState } from "react";
import { countries } from "./country";
import CustomSelect from "./select";
import { poppins } from "@/fonts/fonts";

interface MyPhoneInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFormData: (value: React.SetStateAction<any>) => void; 
  countryCode: string; 
  className?: string; 
}

export function MyPhoneInput({ value, onChange, setFormData, countryCode, className }: MyPhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState(countries[229]);

  const handleCountryChange = (country:any) => {
    setSelectedCountry(country);
    setFormData((currentFormData: any) => ({
      ...currentFormData,
      countryCode: country.dialCode,
    }));
  };

  return (
    <div className={`inputLarge ${className}`} style={{ display: "flex", alignItems: "center", color: "#BF996F" }}>
      <CustomSelect
        selectedCountry={selectedCountry}
        setSelectedCountry={handleCountryChange}
      />
      <input
        type="tel"
        name="phone"
        value={value}
        onChange={onChange}
        placeholder="Phone number"
        className={`input ${poppins.className}`}
      />
    </div>
  );
}