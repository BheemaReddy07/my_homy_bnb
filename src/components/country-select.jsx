import useCountries from '@/hooks/useCountries'
import React from 'react'
import Select from 'react-select';
import Flag from 'react-world-flags';

function CountrySelect({ value, onChange }) {
    const { getAll } = useCountries();

    return (
        <div>
            <Select
                placeholder="Choose a location"
                inClearable
                options={getAll()}
                value={value}
                onChange={value => onChange(value)}
                formatOptionLabel={(option) => (
                    <div className='flex items-center gap-2 py-1'>
                        <Flag code={option.value} className="w-5" />
                        {option.label}, {option.region}
                    </div>
                )}

            />
        </div>
    )
}

export default CountrySelect