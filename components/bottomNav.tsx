import Link from "next/link"

const BottomNav = () => {
    return(
        <nav className="fixed bottom-0 left-0 w-full">
            <ul className="flex justify-around">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/search">Search</Link></li>
                <li><Link href="/private">Private</Link></li>
                <li><Link href="/post">Post</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>
        </nav>
    )
}

export default BottomNav