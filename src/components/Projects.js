import React from 'react';
import movie from '../img/movie-recommendation.jpg'
import website from '../img/website.jpg'
import games from '../img/games.jpg'
import "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"

export default function  Projects () {
  return(
    <>
    <div className='projects' id='projects'>
      <div className='main-text'>
      <h2>Projects</h2>
      </div>

      <div className='project-content'>
        <div className='row'>
          <img src={movie} alt='movie-img'></img>
          <div className='layer'>
            <h5>Movie Recommender Website</h5>
            <p>This is an Machine Learning model which uses content-based filtering to recommends movies and series to the user.</p>
            <a href='a'><i class='bx bx-link-external'></i></a>
          </div>
        </div>

        <div className='row'>
          <img src={website} alt='movie-img'></img>
          <div className='layer'>
            <h5>Games</h5>
            <p>Basic games like classic snake,2048,etc using Python and User Interface with Tkinter GUI.
               Also some with using only HTML,CSS,and JavaScript</p>
            <a href='a'><i class='bx bx-link-external'></i></a>
          </div>
        </div>

        <div className='row'>
          <img src={games} alt='movie-img'></img>
          <div className='layer'>
            <h5>A Website</h5>
            <p>A website where one can play multiple games using HTML,CSS and JavaSript</p>
            <a href='a'><i class='bx bx-link-external'></i></a>

            
          </div>
        </div>

      </div>
    </div>
    
     </>
     )
}

// export default Projects;

 
