 
import Avatar from './avatar'
import Image from 'next/image'

const ProfileCard = (props) => {
  return(
    <div className="w-[70px] h-[70px] ml-[16px] -mr-[8px] inline-block cursor-pointer">
      <div>
        <Avatar>
          <Image alt="profile picture" src={props.image} width="68px" height="68px" />
        </Avatar>
      </div>
      <p className="w-full text-[11px] text-center truncate py-1">
        {props.name}
      </p>
    </div>
  )
}

export default ProfileCard
