import Image from "../../assests/images/node-js.svg";

const NodeImage = () => {
    return (
        <img
            src={Image}
            alt="Node"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default NodeImage;