import Avatar from "./avatar"
import Image from 'next/image'

const SearchResult = (props) => {
    return (
        <>
            <div className="flex space-x-4 my-4">
                <div className="w-[70px] h-[70px]">
                    <Avatar>
                        <Image src={props.image} width="70px" height="70px"/>
                    </Avatar>
                </div>
                <div className="flex flex-col justify-center leading-4">
                    <h3>thatGuy</h3>
                    <p>@stopplayin</p>
                </div>
            </div>
            
        </>
    )
}

export default SearchResult