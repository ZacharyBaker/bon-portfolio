import React from 'react'
import Link from 'gatsby-link'
import s from './index.module.css'
// import sailBoatBg from '../assets/sailBoatBg.jpeg'

const IndexPage = () => (
  <div>
    <h1 className={s.middleTitle}>story.</h1>

    <div className={s.work}>
      <div className={`${s.workChild} ${s.bio}`}>
        <div className={s.section}>
          <h3 className={s.sectionTitle}>bio</h3>
        </div>
      </div>
      <div className={`${s.workChild} ${s.tv}`}>
        <div className={s.section}>
          <h3 className={s.sectionTitle}>tv</h3>
        </div>
      </div>
      <div className={`${s.workChild} ${s.stage}`}>
        <div className={s.section}>
          <h3 className={s.sectionTitle}>stage</h3>
        </div>
      </div>
      <div className={`${s.workChild} ${s.teach}`}>
        <div className={s.section}>
          <h3 className={s.sectionTitle}>teach</h3>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
