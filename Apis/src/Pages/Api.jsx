import axios from "axios"

export const Apifetching = async () => {
    const apidata = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    console.log("Apidata Fetching", apidata.data.categories)
    return apidata.data.categories
}