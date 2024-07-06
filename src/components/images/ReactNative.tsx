import Image from "../../assests/images/preact.svg";

const ReactNativeImage = () => {
    return (
        <img
            src={Image}
            alt="React Native"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default ReactNativeImage;