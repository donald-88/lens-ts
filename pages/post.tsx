import Image from "next/image"
import Link from "next/link"
import Avatar from "../components/avatar"
import PrimaryButton from "../components/primaryButton"

const Post = () => {
    return (
        <div className="px-4">
            <div className="h-4"/>
            <div className="flex justify-end">
                <div className="w-16">
                    <PrimaryButton title="Post"/>
                </div>
            </div>
            <div>
            <div className='flex space-x-2'>
                <div className='w-[30px] h-[30px]'>
                    <Avatar>
                        <Image alt="profile picture" src="/empty.jpg" width="30px" height="30px" />
                    </Avatar>
                </div>
                <div className='flex flex-col justify-start leading-4'>
                    <Link href={`/profile/`}><p className="font-medium text-[12px] truncate hover:underline cursor-pointer">The Last Jedi</p></Link>
                    <p className="text-[11px] text-accent truncate">@jediLevelBitch</p>
                </div>
                
            </div>
            <div className="h-48 flex items-start py-4">
                <textarea className="break-all h-full bg-transparent text-[12px] w-full focus:outline-none break-normal" placeholder="Type something here..."/>
            </div>
            <div className="flex space-x-2">
                <button>Photo</button>
                <button>Gif</button>
                <button>Emoji</button>
            </div>
            </div>
            <div className="w-full flex justify-end ">
            <div className="w-12">
                <PrimaryButton title="+"/>
            </div>
            </div>
        </div>
        
    )
}

export default Post