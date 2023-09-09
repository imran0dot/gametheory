import { useState } from "react";
import { useEffect } from "react";
import DataCard from "./dataComponents/DataCard";

const DataPage = () => {
    const [data, setData] = useState([]);
    const [limit, setLimite] = useState(9)

    useEffect(() => {
        const uri = `https://api.punkapi.com/v2/beers?page=1&per_page=${limit}`;
        fetch(uri)
            .then(res => res.json())
            .then(resData => setData(resData))
    }, [limit])

    
    const handleScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.scrollingElement.scrollHeight) {
                    setLimite((prev) => prev + 9)
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        window.document.addEventListener("scroll", () => handleScroll())
    }, [])

    return (
        <div className="w-11/12 md:w-8/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data?.map((item, index) => {
                        return (
                            <DataCard key={index} item={item} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DataPage;