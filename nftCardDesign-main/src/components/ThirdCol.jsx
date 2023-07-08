import React from 'react'
import '../ThirdCol.css'

const ThirdCol = () => {
  return <>
    <div className='main-card-container'>
      {/* first row  */}
      <div className="main-card-row1">
        {/* first column */}
        <div className="main-card-col1">
          <div className="main-nft-img">
            <img src="./image/nft-card.svg" alt="" />
          </div>
          <div className="main-nft-img-content">
            <h4>LVL2</h4>
          </div>
        </div>
        {/* second column */}
        <div className="main-card-col2">
          <h2 className='main-first-heading'>
            dingaling.eth
          </h2>
          <h2 className='main-second-heading'>
            Oxadgf....jkid
          </h2>
        </div>
      </div>

      {/* second row  */}

      <div className="main-card-row2">
        <div className="main-card-col3">
          <div className="icon">
            <img src="./image/icon.svg" alt="" />
          </div>
          <div className="user mt-2">
            <h4>@dingalingts</h4>
          </div>
        </div>

        <div className="main-card-col4">
          <img src="./image/socialicon.svg" alt="" />
        </div>
      </div> 

      <p className='main-card-content'>
        An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner of 📦  @nftboxes
        </p>

        <div className="main-card-row3">
          <p className="common-communites">
          Common communties (3)
          </p>
          <div className="main-nft-card">

            <div className="nft-first"><img src="./image/rectangle-nft-card1.svg" alt="" /></div>

            <div className="nft-second"><img src="./image/rectangle-nft-card2.svg" alt="" /></div>
            
            <div className="nft-third"><img src="./image/rectangle-nft-card3.svg" alt="" /></div>
            
            <div className="nft-third"><img src="./image/rectangle-nft-card4.svg" alt="" /></div>
          
          </div>
        </div>


        <div className="main-card-row4">
          
          <div className="main-card-content-info">

            <div className="main-card-art-content">
              <div className="art"><h3>Art</h3></div>
              <div className="art-number"><h3>12%</h3></div>
            </div>
          
            <div className="main-card-utilit-content">
              <div className="utility"><h3>Utility</h3></div>
              <div className="utility-number"><h3>12%</h3></div>
            </div>

            <div className="main-card-pfp-content">
              <div className="pfp"><h3>PFP</h3></div>
              <div className="pfp-number"><h3>12%</h3></div>
            </div>

          </div>   
      
         <div className="main-card-col5">

         
          <div className="metaverse-content">
            <div className="metaverse"><h3>Metaverse</h3></div>
            <div className="metaverse-number"><h3>12%</h3></div>
          </div>
         
          <div className="gaming-content">
            <div className="gaming"><h3>Gaming</h3></div>
            <div className="gaming-number"><h3>12%</h3></div>
          </div>
        
        </div>

        <div className="main-card-col6">

        <div className="main-card-pfp-content">
              <div className="pfp"><h3>PFP</h3></div>
              <div className="pfp-number"><h3>12%</h3></div>
        </div>

        <div className="main-card-pfp-content">
              <div className="pfp"><h3>ene</h3></div>
              <div className="pfp-number"><h3>12%</h3></div>
        </div>
        </div>

      <div className="main-card-btn mt-2">
        <div className="subscribe">

        <h3 className='btn'>Subscribe</h3>
        </div>
        <div className="sub-icon mt-1">
          <img src="./image/subicon.svg" alt="" />
        </div>

      </div>
      </div>


      </div>
  </>
}

export default ThirdCol