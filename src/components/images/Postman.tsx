import Image from "../../assests/images/postman.svg";

const PostmanImage = () => {
    return (
        <img
            src={Image}
            alt="Postman"
            style={{
                maxWidth: '250px',
                maxHeight: '250px'
            }}
        />
    );
};

export default PostmanImage;