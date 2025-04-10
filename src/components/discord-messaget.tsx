import { cn } from "@/lib/utils"
import { Clock } from "lucide-react"
import Image from "next/image"

interface DiscordMessageProps {

    avatarAlt: string
    avatarSrc: string
    content: {
        [key: string]: string
    }
    timestamp: string
    title: string
    username: string
    badgeColor?: string
    badgeText: string
}

const object: {[key: string] : string | number | {[key: string] : string}} = {
    test: 'test',
    test2: 5,
    test3: {
        test: 'test'
    }
}

type colorType = '#43b581' | '#faa61a' | string & {}

const getColorBadge = (color: colorType) => {
    switch (color) {
        case "#43b581":
            return "bg-green-500/10 text-green-400 ring-green-500/20"; 
        case "#faa61a":
            return "bg-orange-500/10 text-orange-400 ring-orange-500/20";
        default:
            return "bg-gray-500/10 text-gray-400 ring-gray-400/20" 
    }
}

export const DiscordMessage = ({avatarAlt, avatarSrc, badgeColor = '#43b581', badgeText, content, timestamp, title, username}: DiscordMessageProps) => {
    return (
        <div className="w-full flex items-start justify-start">
            <div className="flex items-center mb-2">
                <Image src={avatarSrc} alt={avatarAlt} width={32} height={32} className="rounded-full mr-3 object-cover"/>
            </div>

            <div className="w-full max-w-xl">
                <div className="items-center flex ">
                    <p>{username}</p>
                    <span className="ml-2 px-1.5 py-0.5 text-xs font-semibold bg-[#466ab8] rounded">
                        APP 
                    </span>
                    <span className="text-gray-500 ml-1.5 text-xs font-normal">
                        {timestamp}
                    </span>
                </div>

                <div className="bg-[#2f3136] text-sm w-full rounded p-3 mb-4 mt-1.5">
                    <div className="flex flex-row justify-between mb-2"> 
                        {badgeText? (
                            <span className={cn("items-center flex order-2 rounded-md px-2 py-1 text-xs font-medium ring-1 ", getColorBadge(badgeColor))}>
                                {badgeText}
                            </span>
                        ) : null}
                        <p className="text-white text-base/7 font-semibold order-1">
                            {title}
                        </p>
                    </div>

                    {Object.entries(content).map(([key, value]) => (
                        <div key={key}>
                            <span className="text-gray-400 text-sm">
                                {key} : {value}
                            </span>
                        </div>
                    ))}

                    <p className="text-[#72767d] text-xs mt-2 flex items-center">
                        <Clock className="size-3 mr-1" />
                        {timestamp}
                    </p>

                </div>

            </div>

        </div>
    )
}