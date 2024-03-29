const Avatar = ({ children }) => {
    return(
        <div className="rounded-full w-full h-full bg-accent p-[2px]">
      <div className="rounded-full w-full h-full bg-accent overflow-hidden">
        { children }
      </div>
    </div>
    )
}

export default Avatar
