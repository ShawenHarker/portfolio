import Image from "../../assests/images/react.svg";

const ReactImage = () => {
    return (
        <img
            src={Image}
            alt="React"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default ReactImage;