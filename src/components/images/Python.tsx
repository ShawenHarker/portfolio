import Image from "../../assests/images/python.svg";

const PythonImage = () => {
    return (
        <img
            src={Image}
            alt="Python"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default PythonImage;