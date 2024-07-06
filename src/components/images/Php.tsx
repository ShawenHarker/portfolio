import Image from "../../assests/images/php.svg";

const PhpImage = () => {
    return (
        <img
            src={Image}
            alt="Php"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default PhpImage;