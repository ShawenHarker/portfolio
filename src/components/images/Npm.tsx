import Image from "../../assests/images/npm.svg";

const NpmImage = () => {
    return (
        <img
            src={Image}
            alt="Npm"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default NpmImage;