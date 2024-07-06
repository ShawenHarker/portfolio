import Image from "../../assests/images/git.svg";

const GitImage = () => {
    return (
        <img
            src={Image}
            alt="Git"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default GitImage;