import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';

import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Our Menu | Bistro Boss</title>
            </Helmet>

            <Cover img={img} title="Our Menu"></Cover>
            <section className="pt-10">
                <SectionTitle heading={'From Our Menu'} subHeading={'Popular Items'}></SectionTitle>
                <div className="max-w-7xl mx-auto py-20">
                    <MenuCategory items={offered}></MenuCategory>
                </div>
            </section>

            <Cover img={dessertImg} title="Desserts"></Cover>
            <section className="pt-10">
                <div className="max-w-7xl mx-auto py-20">
                    <MenuCategory items={dessert}></MenuCategory>
                </div>
            </section>

            <Cover img={pizzaImg} title="Pizza"></Cover>
            <section className="pt-10">
                <div className="max-w-7xl mx-auto py-20">
                    <MenuCategory items={pizza}></MenuCategory>
                </div>
            </section>

            <Cover img={saladImg} title="Salad"></Cover>
            <section className="pt-10">
                <div className="max-w-7xl mx-auto py-20">
                    <MenuCategory items={salad}></MenuCategory>
                </div>
            </section>

            <Cover img={soupImg} title="Soup"></Cover>
            <section className="pt-10">
                <div className="max-w-7xl mx-auto py-20">
                    <MenuCategory items={soup}></MenuCategory>
                </div>
            </section>

        </div>
    );
};

export default Menu;