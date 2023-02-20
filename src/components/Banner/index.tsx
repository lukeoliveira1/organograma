import './Banner.css'

interface BannerProps {
    urlImg: string;
    altText?: string;
}

export const Banner = ({ urlImg, altText } : BannerProps) => {
    return(
        <header className="banner">
            <img src={urlImg} alt={altText} />
        </header>
    )
}