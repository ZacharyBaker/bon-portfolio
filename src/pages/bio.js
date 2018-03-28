import React from 'react'
import Link from 'gatsby-link'
import s from './bio.module.css'
import orange from '../assets/orange-cell.jpg'
// import sailBoatBg from '../assets/sailBoatBg.jpeg'

const BioPage = () => (
  <div className={s.bioPageWrap}>
    <h1 className={s.bioHeader}>Bons bio page</h1>
    <div className={s.imgWrap}>
      <img className={s.headerImage} src={orange} alt=""/>
    </div>
    <p className={s.p1}></p>
    <p className={s.p1}>EMMY AWARD Winning director/choreographer Bonnie Story is one of the country’s most in demand dance makers, whose work has repeatedly been featured on the hit FOX dance show "So You Think You Can Dance".</p>
    <p>She was a choreographer on all three of Disney Channel's smash hit “High School Musical” films, directed by Kenny Ortega, which won her the prestigious EMMY award and another nomination, to add to her list of accomplishments.</p>
    <p>Bonnie served as co-choreographer for the opening and closing ceremonies of the 2002 Salt Lake City Winter Olympics.</p>
    <p>She has choreographed many films including: MTV's "American Mall", "America's Greatest Past Time", "Saturday's Warrior", Hallmark Channel's "My Christmas Love" (highest rated Hallmark telecast of the year),  and just recently released, Hallmark Channels  "Enchanted Christmas", starring Dancing with the Stars actors Alexa PenaVegaand Carlos PenaVega. </p>
    <p>In addition to her work on several seasons of "So You Think You Can Dance", her additional television credits include "Touched By an Angel", Disney's "Suite Life of Zack and Cody", Disney segments with the Muppets and stars including Ashley Tisdale and Miley Cyrus.  </p>
    <p>Bonnie has choreographed commercials for Miche Bags, Columbus Zoo (starring Jack Hanna), Courtyard Marriott (winner World Choregraphy Award - "Best Commercial") and "Creativefuture" for Macmillan Publishing. </p>
    <p>Bonnie just finished choreographing a music video for Disney star Sofia Wylie and commercial for "American Greeting Cards" starring Donny Osmond. </p>
    <p>Bonnie just recently restaged and choreographed the "Donny and Marie Show" at the Flamingo in Las Vegas, winner "Best of Las Vegas" 2017!</p>
  </div>
)

export default BioPage
