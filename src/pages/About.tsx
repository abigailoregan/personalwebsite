import '../css/About.css'

function About() {
  return (
    <div id='abt-container'>
      <h1 id='abt-title'>About the Artist</h1>
      <img id='abt-im1' src='/images/homepage-v2.png' alt="Abigail's portrait of herself" />
      <div id='abt-container-p'>
        <p className='abt-p'>Abigail O'Regan is an artist and museum professional based in Richmond, Virginia. She is a senior at Virginia Commonwealth University pursuing a Bachelor of Fine Arts in Painting and Printmaking with a minor in Art History.</p>
        <p className='abt-p'>Working primarily in oil painting, Abigail creates work that explores the meaning we attach to people, places, objects, and experiences. Her practice moves between realism and surrealism, often drawing from personal photographs, memories, and everyday imagery. Through layering, dripping, blending, and the physical materiality of oil paint, she allows her paintings to develop intuitively throughout the process, balancing control with unpredictability.</p>
        <p className='abt-p'>Alongside her studio practice, Abigail works as an Educator at The Valentine Museum and a Visitor Experience Specialist at the Virginia Museum of Fine Arts. Her experience in museums, education, and public engagement informs her broader interest in how people encounter, interpret, and form connections with art.</p>
        <p className='abt-p'>Abigail is also involved in community leadership and service through Omicron Delta Kappa, where she serves as President of VCU’s Circle and on the National Service Initiative Advisory Board. Across her artistic and professional work, she is interested in creating meaningful experiences that encourage curiosity, connection, and engagement with the world around us.</p>
      </div>
      <img id='abt-im2' src='/images/homepage-splash.png' alt="Abigail's landscape of Richmond" />
    </div>
  )
}

export default About
