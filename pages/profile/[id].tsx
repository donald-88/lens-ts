import { useQuery } from "@apollo/client"
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from 'next/router'
import Avatar from "../../components/avatar"
import PostCard from "../../components/postCard"
import PrimaryButton from "../../components/primaryButton"
import SecondaryButton from "../../components/secondaryButton"
import ExplorePublications from '../../graphql/explorePublications.graphql'
import GetPublications from '../../graphql/getPublications.graphql'
import GetProfiles from '../../graphql/getProfile.graphql'
import { ethers } from 'ethers'
import { Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'

import ABI from '../../abi.json'
import Loader from "../../components/loader"

const address = '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d'

const Profile = () => {

    const [type, setType] = useState("POST")
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    const { id } = router.query

    const { data: profileData, loading: profileLoad, error: profileError } = useQuery(GetProfiles, {variables: {id: id}})
    const { data: pubData, loading: pubLoad, error: pubErr } = useQuery(GetPublications, {variables: { id: id, type: type }})

    if(profileLoad){ return (<Loader/>)}
    if(profileError){ return <div>{profileError.message}</div>}
    if(!profileData){ return <div>Nothing to show</div>}
    if(profileData){() => setIsLoading(isLoading!)}
    const profile = profileData.profiles.items[0]


    if(pubLoad){ return (<Loader/>)}
    if(pubErr){ return <div>{pubErr.message}</div>}
    if(!pubData){ return <div>No Posts Yet</div>}
    if(pubData){() => setIsLoading(isLoading!)}
    const pubs = pubData.publications.items

    

    async function connect(){
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        })
        console.log({accounts})
    }

    async function follow(){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        const contract = new ethers.Contract(
            address,
            ABI,
            signer
        )
        try {
            const tx = await contract.follow(
                [id], [0x0]
            )
            await tx.wait()
            console.log("Followed user")
        } catch (err) {
            console.log({ err })
        }
    }

    


    const tabContent = <div>
        {
                    pubs.map((pub, index) => (
                        <div key={index}>
                            <PostCard key={pub.profile.id} image={pub.profile.picture.original.url} name={pub.profile.name} handle={pub.profile.handle} content={pub.metadata.content} mirrors={pub.stats.totalAmountOfMirrors} collects={pub.stats.totalAmountOfCollects} comments={pub.stats.totalAmountOfComments}/>
                        </div>
                    ))
                }
    </div>
    return (
        
        <>
        
        <div>
            <div className='flex flex-col items-center w-full h-[170px]'>
                <div className="w-full h-[140px] bg-accent overflow-hidden relative">
                    {
                        profile.coverPicture ? (
                            <Image src={profile.coverPicture.original.url} layout='fill' objectFit='cover'/>
                        ) : (
                            <div className="bg-black h-full w-full"/>
                        )
                    }
                </div>
                <div className="w-[70px] h-[70px] -mt-[35px]">
                    <Avatar>
                        {
                            profile.picture ? (
                                <Image src={profile.picture.original.url} width="70px" height="70px"/>
                            ) : (
                                <div className="w-40 h-40 bg-black"/>
                            )
                        }
                    </Avatar>
                </div>
                <div>

                </div>
            </div>

            <div className="w-full text-center">
                <h3>{profile.name}</h3>
                <p className="text-accent text-[12px]">{profile.handle}</p>
                <p className="px-4">{profile.bio}</p>
            </div>
            <div className="w-full flex justify-evenly leading-4 mt-4">
                <div className="text-center">
                    <h3>{profile.stats.totalFollowers}</h3>
                    <p className="text-accent">Followers</p>
                </div>

                <div className="text-center">
                    <h3>{profile.stats.totalFollowing}</h3>
                    <p className="text-accent">Following</p>
                </div>

                <div className="text-center">
                    <h3>{profile.stats.totalPublications}</h3>
                    <p className="text-accent">Following</p>
                </div>
            </div>
            

            <div className="w-full flex justify-center space-x-2 mt-4">
                <div className="w-32">
                    <PrimaryButton title="Follow" onClick={follow}/>
                </div>
                
                <SecondaryButton onClick={connect}/>
            </div>

            <div>
                <Tab.Group>
                    <Tab.List className="flex justify-evenly w-full text-sm py-4">
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button onClick={() =>setType("POST")} className={selected? 'text-black' : 'text-accent'}>
                                    Post
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button onClick={() => setType("MIRROR")} className={selected? 'text-black' : 'text-accent'}>
                                    Mirrors
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button onClick={() => setType("COMMENT")} className={selected? 'text-black' : 'text-accent'}>
                                    Comments
                                </button>
                            )}
                        </Tab>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                                <button className={selected? 'text-black' : 'text-accent'}>
                                    Media
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>{tabContent}</Tab.Panel>
                        <Tab.Panel>{tabContent}</Tab.Panel>
                        <Tab.Panel>{tabContent}</Tab.Panel>
                        <Tab.Panel>Content 4</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
                <div className="h-12"/>
            </div>
            <div>
                
            </div>
        </div>
        </>
    )
}

export default Profile
