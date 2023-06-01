import { useState } from "react";
import { useEffect } from "react";
import { useActionData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        });
    }, []);


    return (
        <section className="pt-10">
            <SectionTitle heading={'From Our Menu'} subHeading={'Popular Items'}></SectionTitle>
            <div className="max-w-7xl mx-auto py-20">
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        menu.map(item => <MenuItem 
                            key={item._id}
                            item={item}
                            ></MenuItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularMenu;