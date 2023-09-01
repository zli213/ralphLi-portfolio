import './index.scss';

const AnimatedLetters = ({ letterClass, strArray = [], idx }) => {
    console.log("strArray:", strArray);
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};
export default AnimatedLetters;
