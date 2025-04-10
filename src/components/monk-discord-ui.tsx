import { Cog, Gift, Headphones, HelpCircle, Inbox, Menu, Mic, Phone, Pin, PlusCircle, PlusIcon, Search, ShoppingBag, Smile, Sticker, UserCircle, Video } from "lucide-react"
import { Icons } from "./icons"
import Image from "next/image"

export const MockDiscordUI = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="flex min-h-[800px] w-full max-w-[1290px] bg-[#393939] 
        text-white rounded-lg overflow-hidden shadow-xl">
            {/* server list */}
            <div className="hidden sm:flex w-[72px] bg-[#202225] py-3 flex-col items-center">
                <div className="size-12 bg-[#5865f2] rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
                    <Icons.discord className="size-3/5 text-white" />
                </div>
                <div className="w-8 h-[2px] bg-[#393939] rounded-full my-2" />
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="size-12 bg-[#393939] rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-[#5865f2] cursor-not-allowed">
                        <span className="text-lg font-semibold text-gray-400">
                            {String.fromCharCode(65 + index)}
                        </span>
                    </div>
                ))}

                <div className="group size-12 bg-[#393939] rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all
                duration-200 hover:bg-[#5865f2] cursor-not-allowed">
                    <PlusCircle className="text-[#3ba55c] group-hover:text-white"/>
                </div>


            </div>
            <div className="hidden md:flex w-60 bg-[#2f3136] flex-col">
                <div className="px-4 h-16 border-b border-[#202225] flex items-center shadow-sm">
                    <div className="w-full bg-[#202225] text-sm rounded px-2 h-8 flex items-center justify-center text-gray-500 cursor-not-allowed">
                        Find or start a conversation
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto pt-4 ">
                    <div className="px-2 mb-4">
                        <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
                            <UserCircle className="mr-4 size-8 text-[#b9bbbe]"/>
                            <span className="font-medium text-sm">Friend</span>
                        </div>

                        <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
                            <Inbox   className="mr-4 size-8 text-[#b9bbbe]"/>
                            <span className="font-medium text-sm">Friend</span>
                        </div>

                        <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
                            <ShoppingBag   className="mr-4 size-8 text-[#b9bbbe]"/>
                            <span className="font-medium text-sm">Shop</span>
                        </div>

                    </div>


                    <div className="px-2">
                        <div className="flex items-center justify-between px-2 group">
                            <span className="text-sm text-gray-500 group-hover:text-white">Direct Message</span>
                            <PlusIcon className="size-3 text-gray-500 group-hover:text-white"/>
                        </div>

                        <div className="mt-2 flex-row">
                            <div className="flex items-center space-x-3 group hover:bg-[#393c43] cursor-not-allowed p-2 rounded-md">
                                <Image src={"/picture-brand.png"} alt="logo" width={30} height={30} className="rounded-full" />
                                <span className="text-gray-500 group-hover:text-white text-sm">Pocopow</span>
                            </div>

                            {['#eeaa41', '#db504c', '#777e89', '#5a65ea'].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 group hover:bg-[#393c43] cursor-not-allowed p-2 rounded-md">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{background: item}}>
                                        <Icons.discord className="size-3/5 text-white" />
                                    </div>
                                    <span className="text-gray-500 group-hover:text-white text-sm">User {index + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>                     
                </div>

                <div className="h-16 flex items-center justify-between px-3 border-t border-[#202225]">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="ring-[#2f3136] ring-4 absolute bottom-0 right-[-2px] w-2 h-2 bg-[#43b581] rounded-full"></div>
                            <Image src={"/picture-brand.png"} alt="logo" width={30} height={30} className="rounded-full" />
                        </div>
                        <span className="text-gray-500 text-sm">Pocopow</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Mic className="size-4 text-gray-500 hover:text-white"/>
                        <Headphones className="size-4 text-gray-500 hover:text-white"/>
                        <Cog className="size-4 text-gray-500 hover:text-white"/>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex h-16 bg-[#34373d] items-center px-4 shadow-sm border-b border-[#202225]">
                    <div className="md:hidden mr-4">
                        <Menu className="size-4 text-gray-500 hover:text-white cursor-pointer"/>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <div className="relative">
                            <Image src={"/picture-brand.png"} alt="logo" width={30} height={30} className="rounded-full" />
                            <div className="ring-[#2f3136] ring-2 absolute bottom-0 right-[-2px] w-2 h-2 bg-[#43b581] rounded-full"/>
                        </div>
                        <span className="text-white text ml-2">Pocopow</span>
                    </div>

                    <div className="flex ml-auto items-center gap-x-3">
                        <Phone className="size-4 text-gray-500 hover:text-white cursor-pointer"/>
                        <Video className="size-4 text-gray-500 hover:text-white cursor-pointer"/>
                        <Search className="size-4 text-gray-500 hover:text-white cursor-pointer"/>
                        <Pin className="size-4 text-gray-500 hover:text-white cursor-pointer"/>
                        <HelpCircle className="size-4 text-gray-500 hover:text-white cursor-pointer"/>
                        <Inbox className="size-4 text-gray-500 hover:text-white cursor-pointer"/>
                    </div>
                </div>

                {/* Message */}
                <div className="flex-1 overflow-y-auto p-4 bg-[#34373d] flex flex-col-reverse">{children}</div>

                {/* Input */}
                <div className="p-4 bg-[#34373d]">
                    <div className="flex items-center bg-[#40444b] rounded-lg p-2">
                        <PlusCircle className="mx-3  text-[#b9bbbe] hover:text-white cursor-not-allowed size-5"/>
                        <input
                            readOnly
                            type="text"
                            placeholder="Type a message"
                            className="text-sm flex-1 bg-transparent outline-none px-1 text-white placeholder:text-[#b9bbbe] focus:outline-none cursor-not-allowed"
                        />
                        <div className="flex items-center space-x-3 mx-3 text-[#b9bbbe]">
                            <Gift className="size-4 hover:text-white cursor-not-allowed"/>
                            <Sticker className="size-4 hover:text-white cursor-not-allowed"/>
                            <Smile className="size-4 hover:text-white cursor-not-allowed"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
