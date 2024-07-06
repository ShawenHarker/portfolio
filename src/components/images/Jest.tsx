import Image from "../../assests/images/jest.svg";

const JestImage = () => {
    return (
        <img
            src={Image}
            alt="Jest"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default JestImage;