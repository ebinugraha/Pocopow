import { Navbar } from "@/components/navbar"

const MarketingLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="">
            <Navbar/>
            {children}
        </div>
    )
}
export default MarketingLayout