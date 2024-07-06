import Image from "../../assests/images/html-5.svg";

const HtmlImage = () => {
    return (
            <img
                src={Image}
                alt="HTML"
                style={{
                    maxWidth: '250px',
                    maxHeight: '250px'
                }}
            />
    );
};

export default HtmlImage;