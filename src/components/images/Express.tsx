import Image from "../../assests/images/express.svg";

const ExpressImage = () => {
    return (
        <img
            src={Image}
            alt="Express"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default ExpressImage;