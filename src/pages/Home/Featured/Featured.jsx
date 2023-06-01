import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <section className="bg-[url('/src/assets/home/featured.jpg')] relative bg-fixed">
            <div className="bg-gray-900 absolute left-0 w-full h-[100%] opacity-50"></div>
            <div className="py-10">
                <SectionTitle heading={'From Our Menu'} subHeading={'Check it out'}></SectionTitle>
            </div>
            <div className="max-w-7xl mx-auto py-20 flex items-center justify-between z-10 relative">
                <div className="w-[45%]">
                    <img className="" src={img} alt="" />
                </div>
                <div className="w-[45%] space-y-4 text-white">
                    <p className="text-xl">20, Aug, 2023</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate totam, quae quos impedit corporis dolore eveniet dolorum tempore error natus!</p>
                    <button className="btn btn-outline">Default</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;