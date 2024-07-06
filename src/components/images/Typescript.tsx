import Image from "../../assests/images/typescript.svg";

const TSImage = () => {
    return (
        <img
            src={Image}
            alt="TS"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default TSImage;