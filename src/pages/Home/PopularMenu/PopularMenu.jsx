import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="pt-10">
            <SectionTitle heading={'From Our Menu'} subHeading={'Popular Items'}></SectionTitle>
            <div className="max-w-7xl mx-auto py-20">
                <MenuCategory items={popular}></MenuCategory>
            </div>
        </section>
    );
};

export default PopularMenu;