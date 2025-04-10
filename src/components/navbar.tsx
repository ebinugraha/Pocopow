import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const Navbar = () => {
    return (
        <nav className="sticky z-[100] h-16 top-0 w-full border-b
         border-black bg-white/80 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-16 items-center justify-between">
                    <Link href={"/"} className="flex z-40 font-semibold text-xl">
                        Poco<span className="text-[#f65807]">pow</span>
                    </Link>
                    <div className="flex items-center space-x-2">
                        <Button size={"lg"} variant={"secondary"}>
                            Pricing
                        </Button>
                        <SignInButton>
                            <Button size={"lg"} variant={"secondary"}>
                                Sign In
                            </Button>
                        </SignInButton>

                        <div className="h-7 w-[1px] bg-black"/>

                        <SignUpButton>
                            <Button size={"lg"}>
                                Sign Up <ArrowRight/>
                            </Button>
                        </SignUpButton>
                    </div>
                </div>


            </MaxWidthWrapper>
        </nav>
    )
}