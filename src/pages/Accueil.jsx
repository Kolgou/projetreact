import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../css/Accueil.css'

function Accueil() {

    return(
        <div className='accueil'>
                <Header/>

                <main className='accueil-content'>
                    <div className='accueil-intro'>
                        <div className='text'>    
                            <h1 className='accueil-title'>Bonjour, je suis John Doe</h1>
                            <h2 className='accueil-subtitle'>Développeur web full stack</h2>                     
                        </div>
                        <div className='more'>
                        <button className='button-more'><a href="#to-propos" className='more-link'>En savoir plus</a></button>
                        </div>
                    </div>
                    
                    <section className='a-propos container'>
                        <div className='row'>
                            <div className='propos-content col-sm-12 col-md-6'>
                                <h3 id='to-propos' className='propos-title'>À propos</h3> 
                                <p className='propos-txt'>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
                                <p className='propos-txt'>Basé à Lyon, je suis en alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
                                <p className='propos-txt'>J'accord une attention particulière à la quallité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                            </div>

                            <div className='col-sm-12 col-md-6'>
                                    <img src="../public/assets/images/illustration.jpg" alt="Homme travaillant devant un ordinateur sur un bureau en bois" className='img-fluid illustration'/>
                                <div className='skills-section'>   
                                    <h4 className='skills-title'>Mes compétences</h4>

                                    <p>HTML 90%</p>
                                    <div className='progress'>
                                        <div className='progress-bar w-90 p1' role='progressbar' style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>

                                    <p>CSS3 80%</p>
                                    <div className='progress'>
                                        <div className='progress-bar w-80 p2' role='progressbar' style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>

                                    <p>JAVASCRIPT 70%</p>
                                    <div className='progress'>
                                        <div className='progress-bar w-70 p3' role='progressbar' style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>

                                    <p>PHP 60%</p>
                                    <div className='progress'>
                                        <div className='progress-bar w-60 p4' role='progressbar' style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>

                                    <p>REACT 50%</p>
                                    <div className='progress'>
                                        <div className='progress-bar w-50 p5' role='progressbar' style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </section>
                </main>
                <Footer/>
        </div>
    );
  }
  
  export default Accueil;