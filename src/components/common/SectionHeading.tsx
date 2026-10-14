interface SectionHeadingProps {
    title: string;
    description: string;
}
export const SectionHeading : React.FC<SectionHeadingProps> = ({title,description}) => {

    return(
    <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-7 md:gap-10 mb-12 md:mb-20 text-center md:text-left">

        <h2 className="inline-block bg-positivus-green text-positivus-dark font-medium text-3xl md:text-4xl px-2.5 py-1 rounded-[7px] shrink-0">
            {title}
        </h2>

        
        <p className="text-base md:text-lg text-positivus-dark max-w-[580px]">
            {description}
        </p>
    </div>
    )
} 