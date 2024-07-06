import Image from "../../assests/images/github.svg";

const GithubImage = () => {
    return (
        <img
            src={Image}
            alt="Github"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default GithubImage;