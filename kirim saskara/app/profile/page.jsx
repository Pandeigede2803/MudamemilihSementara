import React from 'react'
import Hero from '../../components/profilepage/Hero'
import VisiMisi from '../../components/profilepage/VisiMisi'
import EventList from '../../components/profilepage/EventList'
import SocialMedia from '../../components/profilepage/SocialMedia'
import SiapaSaya from '../../components/profilepage/SiapaSaya'
import CandidateRecommended from '../../components/profilepage/CandidateRecommended'
import Event from '../../components/profilepage/Event'
import LikeButton from '../../components/profilepage/LikeButton'

function profile() {
  return (
    <div className='bg-[#F0F0F0]'>
        <Hero/>
        <SiapaSaya/>
        <VisiMisi/>
        <EventList/>
        <Event/>
        <LikeButton/>
        <SocialMedia/>
        <CandidateRecommended/>
    </div>
  )
}

export default profile