import { useEffect, useState } from 'react'
import { getFormattedListOfCountry } from '../utils/helper';

const useGetAllCountriesList = () => {
    const [allCountries, setAllCountries] = useState<Array<{ title: string }>>([]);

    const getAllCountries = async () => {
        try {
            // const response = await fetch(process.env.COUNTRY_API_PATH!);
            const response = await fetch('https://restcountries.com/v3.1/all');
            const result = await response.json();

            setAllCountries(getFormattedListOfCountry(result));

        } catch (error) {
            console.error('Failed to fetch countries list', error);
        }
    }

    useEffect(() => {

        getAllCountries();

    }, [setAllCountries])


    return { allCountries }
}

export default useGetAllCountriesList