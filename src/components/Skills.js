import React from 'react'
import "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"

export default function Skills() {
  return (
    <>
    <section>
    <div className='container1' id="skills" >
          <h1 className='head'>Technical Skills</h1>
          <div className='Technical-bars'>

              <div className='bar'>
                  <div className='info'><box-icon name='java' type='logo' color='#ffd700'></box-icon>
                      <span>JAVA</span>
                  </div>
                  <div className='progress-line java'>
                  <span></span></div>
              </div>

              <div className='bar'>
                  <div className='info'><box-icon name='python' type='logo' color='#9222ad'></box-icon>
                      <span>PYTHON</span>
                  </div>
                  <div className='progress-line python'>
                  <span></span></div>
              </div>

              <div className='bar'>
                  <div className='info'><box-icon name='html5' type='logo' color='#F06529'></box-icon>
                      <span>HTML</span>
                  </div>
                  <div className='progress-line html'>
                  <span></span></div>
              </div>
              <div className='bar'>
                  <div className='info'><box-icon name='css3' type='logo' color='#2367b4'></box-icon>
                      <span>CSS</span>
                  </div>
                  <div className='progress-line css'>
                  <span></span></div>
              </div>
              <div className='bar'>
                  <div className='info'><box-icon name='javascript' type='logo' color='#e8ee63'></box-icon>
                      <span>JavaSript</span>
                  </div>
                  <div className='progress-line js'>
                  <span></span></div>
              </div>
              <div className='bar'>
                  <div className='info'><box-icon name='react' type='logo' color='#61dbfb'></box-icon>
                      <span>React</span>
                  </div>
                  <div className='progress-line react'>
                    <span></span></div>
              </div>
          </div>
      </div>

      <div className='container1'>
      <h1 className='head'>Professional Skills</h1>
      <div className='radial-bars'>
         <div className='radial-bar'>
            <svg x='0px' y='0px' viewBox='0 0 200 300'>
              <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
              <circle className='path path-1' cx='100' cy='100' r='80'></circle>
            </svg>
          <div className='percentage'>80%</div>
          <div className='text'>Problem Solving</div>
         </div>
         {/* </div> */}
         

         {/* <div className='radial-bars'> */}
         <div className='radial-bar'>
            <svg x='0px' y='0px' viewBox='0 0 200 300'>
              <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
              <circle className='path path-2' cx='100' cy='100' r='80'></circle>
            </svg>
          <div className='percentage'>60%</div>
          <div className='text'>Creativity</div>
         </div>
         {/* </div> */}


         {/* <div className='radial-bars'> */}
         <div className='radial-bar'>
            <svg x='0px' y='0px' viewBox='0 0 200 300'>
              <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
              <circle className='path path-3' cx='100' cy='100' r='80'></circle>
            </svg>
            

          <div className='percentage'>85%</div>
          <div className='text'>Communication</div>
         </div>
         {/* </div> */}

         {/* <div className='radial-bars'> */}
         <div className='radial-bar'>
            <svg x='0px' y='0px' viewBox='0 0 200 300'>
              <circle className='progress-bar' cx='100' cy='100' r='80'></circle>
              <circle className='path path-4' cx='100' cy='100' r='80'></circle>
            </svg>
           

          <div className='percentage'>70%</div>
          <div className='text'>Team Work</div>
         </div>
          </div>
      

      </div>

      </section>
      
      
      </>
    
    
    
  

  )
}
