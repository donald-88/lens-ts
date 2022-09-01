import Avatar from "./avatar"
import Image from 'next/image'

const SearchResult = (props) => {
    return (
        <>
            <div className="flex space-x-4 my-4">
                <div className="w-[60px] h-[60px]">
                    <Avatar>
                        <Image src={props.image} width="60px" height="60px"/>
                    </Avatar>
                </div>
                <div className="flex flex-col justify-center leading-4">
                    <h3>{props.name}</h3>
                    <p>@{props.handle}</p>
                </div>
            </div>
            
        </>
    )
}

export default SearchResult