const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <p className="text-yellow-600 text-center mb-6">---{subHeading}---</p>
            <p className="text-center uppercase text-3xl"><span className="border-y-2 py-2">{heading}</span></p>
        </div>
    );
};

export default SectionTitle;