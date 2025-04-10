import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface ShinnyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>{}

export const ShinnyButton = ({className, href, children, ...props} : ShinnyButtonProps) => {
    return <Link href={href ? href : "#"} {...props} className={cn(className, 
    "relative flex transform group items-center justify-center gap-2 rounded-full border border-[#000000] whitespace-nowrap ")}>
    </Link>
}