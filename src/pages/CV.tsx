import '../css/CV.css';

function CV() {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Curriculum Vitae</h1>
        <p className="cv-title">Visual Artist | Museum Educator | Musician - Please use the contact page to request full CV.</p>
        {/* <p className="cv-title">Please use the contact page to request full CV.</p> */}
      </header>

      <section className="cv-section">
        <h2>Education</h2>
        <div className="cv-education">
          <div className="cv-edu-item">
            <p><strong>Bachelor of Fine Arts</strong>, Virginia Commonwealth University – Painting & Printmaking | Minor: Art History | Expected 2026 | 4.0 GPA</p>
            <ul className="cv-list">
              <li>Santa Reparata International School of Art, Florence, Italy | 2025</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Awards & Scholarships</h2>
        <ul className="cv-list">
          <li>Andrew Gehr West Scholarship in Painting & Printmaking (2025)</li>
          <li>Doris Lansing VCUarts Portfolio Scholarship (2023)</li>
          <li>Virginia Merit Award Scholarship (2023-Present)</li>
          <li>VCUarts Dean's List (Fall 2023-Present)</li>
        </ul>
      </section>

      <section className='cv-section'>
        <h2>Leadership & Involvement</h2>
        <ul className="cv-list">
          <li>Vice President, Omicron Delta Kappa Society (Amber Circle), (Aug 2025-Present)</li>
          <li>Graduate School Mentoring Program (GSMP) at VCU, (2025-2026)</li>
          <li>VCUarts Student Advisory Council Painting and Printmaking, (2025-2026)</li>
          <li>Member, Alpha Omicron Pi (AOII) Sorority</li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        <div className="cv-timeline">
          <div className="cv-timeline-item">
            <span className="cv-date">2026 - Present</span>
            <p className="cv-desc"><strong>Photo Assistant</strong>, <i>Kip Dawkins Photography</i>, Richmond, VA</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2026 - Present</span>
            <p className="cv-desc"><strong>Chapter Leadership Consultant</strong>, <i>Changing Health Attitudes + Actions to Recreate Girls (CHAARG)</i>, Remote</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2025 - Present</span>
            <p className="cv-desc">
              <strong>Graphic Designer & Social Media Team Member</strong>, <i><a className="cv-link" href="https://www.instagram.com/hercampusatvcu" target="_blank" rel="noopener noreferrer">HerCampus VCU</a></i>, Richmond, VA
            </p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2024 - Present</span>
            <p className="cv-desc"><strong>Educator</strong>, <i>The Valentine Museum</i>, Richmond, VA</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2024 - 2026</span>
            <p className="cv-desc"><strong>Ambassador</strong>, <i>CHAARG at VCU</i>, Richmond, VA</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2020 - 2021</span>
            <p className="cv-desc"><strong>Percussion Tutor</strong>, <i>Music Mentors with Falls Church City Public Schools</i>, Falls Church, VA</p>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Selected Exhibitions & Publications</h2>
        <div className="cv-timeline">
          <div className="cv-timeline-item">
            <span className="cv-date">2026</span>
            <p className="cv-desc"><i>Painting & Printmaking Spring Salon Show</i>, VCU PAPR Exhibition, Virginia Commonwealth University, Richmond, VA</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2026</span>
            <p className="cv-desc"><i>Parc View Art Expo</i>, Parc View at Commonwealth, Richmond, VA (Podium Finalist)</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2025</span>
            <p className="cv-desc"><i>Summer A & B Student Shows</i>, Santa Reparata International School of Art, Florence, Italy</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2025</span>
            <p className="cv-desc"><i>Painting & Printmaking Spring Salon Show</i>, VCU PAPR Exhibition, Virginia Commonwealth University, Richmond, VA</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2024</span>
            <p className="cv-desc"><i>CONTENT</i>, Annual VCU Art Foundation Juried Student Show, Virginia Commonwealth University, Richmond, VA</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2023</span>
            <p className="cv-desc"><i>SPUKHAUS</i>, VCU Art Foundation Exhibition, Virginia Commonwealth University, Richmond, VA</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2022</span>
            <p className="cv-desc"><i>Celebrating Art Summer 2022 Art Anthology</i>, Featured Publication</p>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Music & Performance</h2>
        <div className="cv-timeline">
          <div className="cv-timeline-item">
            <span className="cv-date">2024 - 2025</span>
            <p className="cv-desc"><strong>Drummer</strong>, BL00m (Alternative Rock), Richmond, VA</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2025</span>
            <p className="cv-desc"><strong>Dancer</strong> (Bollywood style), Mock Mehndi for PSA at VCU, Richmond, VA</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2024</span>
            <p className="cv-desc"><strong>Drummer</strong>, Sinc. (Indie Rock), Awards Show Performance at Cafe Cinema, Chester, VA</p>
          </div>
          <div className="cv-timeline-item">
            <span className="cv-date">2021</span>
            <p className="cv-desc"><strong>Percussionist & Section Manager</strong>, Winter Jazz Concert, Solace Brewing Co., Falls Church, VA</p>
          </div>
        </div>
      </section>

      <footer className="cv-footer">
        <div className="cv-footer-links">
          <span onClick={() => window.open('https://www.instagram.com/gabi_oregan/', '_blank')} className="cv-footer-btn">Instagram</span>
          <span onClick={() => window.open('https://www.linkedin.com/in/abigail-oregan/', '_blank')} className="cv-footer-btn">LinkedIn</span>
        </div>
        <p className="cv-copyright">© 2025 Abigail O'Regan - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default CV;