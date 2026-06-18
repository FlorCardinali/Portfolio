import './Title.css';

const Title = ({ title, content, colorFrom = 'gold', colorTo = 'gold-light' }) => {
    const resolveColor = (color) => {
        if (!color) return '';
        if (color.startsWith('var(') || color.startsWith('#') || color.startsWith('rgb') || color.startsWith('hsl')) {
            return color;
        }
        return `var(--color-${color})`;
    };

    const gradientFrom = resolveColor(colorFrom);
    const gradientTo = resolveColor(colorTo);

    return (
        <div className="title-container">
            <h2 
                className="title-heading"
                style={{
                    backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
                }}
            >
                {title}
            </h2>
            <p className="title-description">
                {content}
            </p>
        </div>
    );
}

export default Title;