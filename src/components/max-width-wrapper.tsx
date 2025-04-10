import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
    className?: string;
    children?: React.ReactNode
}

export const MaxWidthWrapper = ({className, children}: MaxWidthWrapperProps) => {
    return (
        <div className={cn(className, "h-full mx-auto w-full max-w-[1400px] px-2.5 md:px-20")}>
            {children}
        </div>
    )
}