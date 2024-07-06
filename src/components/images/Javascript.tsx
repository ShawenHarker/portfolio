import Image from "../../assests/images/javascript.svg";

const JSImage = () => {
    return (
        <img
            src={Image}
            alt="JS"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default JSImage;