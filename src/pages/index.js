import React from 'react'
import Link from 'gatsby-link'
import s from './index.module.css'
import ocean from '../assets/ocean.jpeg'
import track from '../assets/tracks.jpg'
import fallLeaves from '../assets/fallLeaves.jpeg'
import roofFeet from '../assets/roofFeet.jpeg'
import Youtube from '../components/Youtube'

const IndexPage = () => (
  <div>
    <h1 className={s.middleTitle}>story</h1>
    <h6 className={s.subTitle}>I love what I do.</h6>

    <div className={s.work}>

        <Link to="/bio" className={`${s.workChild} ${s.bio}`}>
          <div className={s.section}>
            <div className={s.hidden}>
              <h3 className={s.sectionTitle}>bio</h3>
            </div>
          </div>
          <img src={ocean} alt=""/>
        </Link>


        <Link to="/tv" className={`${s.workChild} ${s.tv}`}>
          <div className={s.section}>
            <div className={s.hidden}>
              <h3 className={s.sectionTitle}>tv</h3>
            </div>
          </div>
          <img src={track} alt=""/>
        </Link>



        <Link to="/stage" className={`${s.workChild} ${s.stage}`}>
          <div className={s.section}>
            <div className={s.hidden}>
              <h3 className={s.sectionTitle}>stage</h3>
            </div>
          </div>
          <img src={roofFeet} alt=""/>
        </Link>


        <Link to="/teach" className={`${s.workChild} ${s.teach}`}>
          <div className={s.section}>
            <div className={s.hidden}>
              <h3 className={s.sectionTitle}>teach</h3>
            </div>
          </div>
          <img src={fallLeaves} alt=""/>
        </Link>

    </div>

  </div>
)

export default IndexPage
