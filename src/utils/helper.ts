export const getFormattedListOfCountry = (inputList: []) => {
    return inputList?.map((country: { name: { common: string } }) => ({
        title: country?.name?.common
    }))
}