import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
      <article className='service'>
      <div className='service_head'>
        <h3>Frontend development</h3>
      </div>
      <ul className='service_list'>
        <li><BiCheck className='service_list-icon'/>
        <p><a href="https://html.com/" target="_blank" rel="noreferrer">HTML</a></p>
        </li>
        <li><BiCheck className='service_list-icon'/>
        <p><a href="https://www.javascript.com/" target="_blank" rel="noreferrer">Javascript</a></p>
        </li>
        <li><BiCheck className='service_list-icon'/>
        <p><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a></p>
        </li>
        <li><BiCheck className='service_list-icon'/>
        <p><a href="https://reactjs.org/" target="_blank" rel="noreferrer">React.JS</a></p>
        </li> <li><BiCheck className='service_list-icon'/>
        <p><a href="https://angular.io/" target="_blank" rel="noreferrer">Angular</a></p>
        </li> <li><BiCheck className='service_list-icon'/>
        <p><a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue.js</a></p>
        </li>
      </ul>
        </article>
        {/*END OF front Developent*/}
        
        <article className='service'>
      <div className='service_head'>
        <h3>UI/UX Design</h3>
      </div>
      <ul className='service_list'>
        <li><BiCheck className='service_list-icon'/>
        <p><a href="https://angular-ui.github.io/bootstrap/" target="_blank" rel="noreferrer">UI Bootstrap</a></p>
        </li>
        <li><BiCheck className='service_list-icon'/>
        <p><a href="https://github.com/uoziod/suave-ui" target="_blank" rel="noreferrer">Suave UI framework</a></p>
        </li>
        <li><BiCheck className='service_list-icon'/>
        <p><a href="https://redux.js.org/" target="_blank" rel="noreferrer">Redux</a></p>
        </li>
       
      </ul>
        </article>
        {/*END OF UI/UX*/}

        <article className='service'>
      <div className='service_head'>
        <h3>Backend development</h3>
      </div>
      <ul className='service_list'>
        <li><BiCheck className='service_list-icon'/>
        <p><a href="https://www.javascript.com/" target="_blank" rel="noreferrer">Javascript</a></p>
        </li>
        <li><BiCheck className='service_list-icon'/>
        <p><a href="https://www.php.net/" target="_blank" rel="noreferrer">PHP</a></p>
        </li>
        <li><BiCheck className='service_list-icon'/>
        <p><a href="https://www.python.org/" target="_blank" rel="noreferrer">Python</a></p>
        </li>
        
      </ul>
        </article>
        {/*END BACK-END */}

      </div>
    </section>
  )
}

export default Services