import Image from "../../assests/images/linux.svg";

const LinuxImage = () => {
    return (
        <img
            src={Image}
            alt="Linux"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default LinuxImage;