interface HeadingProps {
    center?: boolean
    text: string
}
const Heading: React.FC<HeadingProps> = ({ center, text }) => {
    return (
        <div className={`text-slate-500 my-5 px-3 md:px-10 md:text-xl ${center ? 'items-center' : 'text-start'}`}>{text}</div>
    )
}
export default Heading