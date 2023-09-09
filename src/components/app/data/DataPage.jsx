import { useState } from "react";
import { useEffect } from "react";
import DataCard from "./dataComponents/DataCard";

const DataPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const uri = "https://api.punkapi.com/v2/beers?page=1&per_page=9";

        fetch(uri)
            .then(res => res.json())
            .then(resData => setData(resData))
    }, [])

    const handleScroll = async() => {
        try{
           const scroll = document.documentElement.scrollHeight
           console.log(scroll);
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        document.addEventListener("scroll", handleScroll())
    },[])

    return (
        <div className="w-8/12 mx-auto">
            <div className="grid grid-cols-3">
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