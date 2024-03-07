"use client";
import React, { useState } from "react";
import { countries } from "./country";
import CustomSelect from "./select";

interface MyPhoneInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function MyPhoneInput({ value, onChange }: MyPhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState(countries[229]);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div
      className="inputLarge"
      style={{ display: "flex", alignItems: "center", color: "#BF996F" }}
    >
      <CustomSelect
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <input
      id="phone"
      name="phone"
        type="tel"
        value={value}
        onChange={onChange}
        placeholder="Phone number"
        className="input"
      />
    </div>
  );
}
