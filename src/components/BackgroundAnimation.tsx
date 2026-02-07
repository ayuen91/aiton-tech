interface BackgroundAnimationProps {
    src: string;
    className?: string;
}

const BackgroundAnimation = ({ src, className = '' }: BackgroundAnimationProps) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <img
                src={src}
                className="min-w-full min-h-full object-cover object-center translate-z-0"
                alt="Background Animation"
                loading="eager"
            />
        </div>
    );
};

export default BackgroundAnimation;
