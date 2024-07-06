import Image from "../../assests/images/css-3.svg";

const CssImage = () => {
    return (
        <img
            src={Image}
            alt="CSS"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default CssImage;