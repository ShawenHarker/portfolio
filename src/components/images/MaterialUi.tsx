import Image from "../../assests/images/materialui.svg";

const materialUiImage = () => {
    return (
        <img
            src={Image}
            alt="material UI"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default materialUiImage;