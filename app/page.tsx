import Script from 'next/script';

const linkedInUrl = process.env.NEXT_LINKEDIN_URL;
const githubUrl = process.env.NEXT_GITHUB_URL;
const instagramUrl = process.env.NEXT_INSTAGRAM_URL;
const whatsAppUrl = process.env.NEXT_WHATSAPP_URL;

function Home() {
  return (
    <>
      <div className="hiro-loader"></div>
      <header className="hiro-header home-header" id="top">
        <nav>
          <div className="container">
            <div className="hiro-nav">
              <a href="#" className="nav-brand"></a>
              <button className="hiro-nav-popup-toggle">
                <svg width="20px" height="18px" viewBox="0 0 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Hiro" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="hiro-agency" transform="translate(-964.000000, -37.000000)" fill="#FFFFFF">
                      <g id="Menu" transform="translate(964.000000, 37.000000)">
                        <g id="menu">
                          <rect id="Rectangle" fillRule="nonzero" x="-8.05281767e-14" y="7.50795322" width="19.9609942" height="2.4951462"></rect>
                          <rect id="Rectangle" fillRule="nonzero" x="-8.05281767e-14" y="14.9964327" width="19.9609942" height="2.4951462"></rect>
                          <rect id="Rectangle" fillRule="nonzero" x="-8.05281767e-14" y="0.0194736842" width="19.9609942" height="2.4951462"></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div className="container wow fadeInUp">
          <div id="hiroHeaderCarousel" className="hiro-header-carousel carousel slide" data-ride="carousel" data-interval="3500">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="carousel-item-title" data-animation="animated fadeInRight" data-number="Dev"><span>Juliano Appezzato</span></h1>
                    <p className="carousel-item-description" data-animation="animated fadeInRight">
                      Desenvolvedor de Software 
                      <br />
                      Laravel (PHP) | Next.js (React) | React Native | ASP.NET (C#)
                    </p>
                    <a href="#about" className="carousel-item-link link-hover-fx" data-animation="animated fadeInRight">VER MAIS</a>
                    <ul className="carousel-item-social-links nav" data-animation="animated fadeInRight">
                      <li>
                        <a href={linkedInUrl} className="link-hover-fx" target='_blank'>LINKEDIN</a>
                      </li>
                      <li>
                        <a href={githubUrl} className="link-hover-fx" target='_blank'>GITHUB</a>
                      </li>
                      <li>
                        <a href={whatsAppUrl} className="link-hover-fx" target='_blank'>WHATSAPP</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <img src="/assets/images/eu.webp" alt="Remarkable Digital Products" className="img-fluid w-100 rounded" width="372px" />
                  </div>
                </div>
              </div>
              <ol className="carousel-indicators">
                <li data-target="#hiroHeaderCarousel" data-slide-to="0" className="active"></li>
              </ol>
            </div>
          </div>
        </div>
      </header>

      <div className="hiro-nav-popup-modal">
        <div className="hiro-nav-popup-modal-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 menu-wrapper">
                <ul className="nav hiro-main-nav">
                  <li className="nav-item">
                    <a href="/" className="nav-link">Principal</a>
                  </li>
                  {/* <li className="nav-item">
                    <a href="/contact" className="nav-link">Contato</a>
                  </li> */}
                  <li className="nav-item">
                    <a href={linkedInUrl} className="nav-link">LinkedIn</a>
                  </li>
                  <li className="nav-item">
                    <a href={githubUrl} className="nav-link">GitHub</a>
                  </li>
                  <li className="nav-item">
                    <a href={whatsAppUrl} className="nav-link">WhatsApp</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-primary hiro-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center wow fadeInUp">
              <h2 className="section-title mb-3">
                Desenvolvedor
                <br />
                (Full Stack)
              </h2>
              <p className="section-text-ct">
                Desenvolvedor full stack com quase 5 anos de experiência, especializado em React e Laravel, além de forte atuação com Next.js, Tailwind, ASP.NET e React Native. Já participei de diversos projetos para empresas privadas e sistemas públicos, desenvolvendo soluções eficientes e escaláveis. Possuo amplo conhecimento e total domínio para lidar com desafios complexos, entregando soluções robustas e de alto desempenho.
              </p>
            </div>
            <div className="col-md-6 wow fadeInUp">
              <img src="assets/images/img_3.png" className="w-100 mb-5" alt="Digital Product Design"/>
              <p className="section-text-light"></p>
              <a href='/curriculo.pdf' className="hiro-btn-outline" target='_blank'>
                Baixar Currículo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hiro-section" id="services">
        <div className="container">
          <div className="service-section">
            <h2 className="section-title career-section-title">Conhecimento em:</h2>
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0 wow fadeInUp">
                  <h6 className="service-category-title">Frontend</h6>
                  <ul className="service-list list-group list-group-flush">
                    <li className="list-group-item">React & React Native</li>
                    <li className="list-group-item">Next.js</li>
                    <li className="list-group-item">Tailwind / Bootstrap</li>
                    <li className="list-group-item">Vue.js</li>
                    <li className="list-group-item">Jquery / Ajax</li>
                  </ul>
              </div>
              <div className="col-md-4 mb-4 mb-md-0 wow fadeInUp">
                <h6 className="service-category-title">Backend</h6>
                <ul className="service-list list-group list-group-flush">
                  <li className="list-group-item">Laravel (PHP)</li>
                  <li className="list-group-item">ASP.NET (Core e MVC)</li>
                  <li className="list-group-item">Node.js</li>
                  <li className="list-group-item">Padrão SOLID</li>
                  <li className="list-group-item">Design Patterns</li>
                </ul>
              </div>
              <div className="col-md-4 mb-4 mb-md-0 wow fadeInUp">
                <h6 className="service-category-title">Outros</h6>
                <ul className="service-list list-group list-group-flush">
                  <li className="list-group-item">Redis & Socket</li>
                  <li className="list-group-item">Docker</li>
                  <li className="list-group-item">Mensageria</li>
                  <li className="list-group-item">Metodologias Ágeis</li>
                  <li className="list-group-item">Git & GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section hiro-section" id="works">
        <div className="container">
          <h2 className="section-title career-section-title">Alguns dos projetos que participei:</h2>
          <div className="row">
            <div className="col-md-4 wow fadeInUp">
              <div className="project-card wow fadeInUp">
                <img src="assets/images/lets-deliver.png" alt="Project" className="project-thumbnail"/>
                <h6 className="project-title" style={{ color: "#22a154" }}>Let´s Deliver</h6>
                <p className="Project-category text-justify">
                  A plataforma Let's Deliver conecta entregadores e motoristas a clientes que precisam de serviços de entrega na região, permitindo que visualizem os pontos de entrega no mapa e aceitem serviços disponíveis.
                </p>
                <a className='text-black' style={{ fontSize: "14px" }} href="https://play.google.com/store/apps/details?id=com.letsdeliver.entregador" target="_blank">
                  Clique para ver o aplicativo
                </a>
              </div>
            </div>

            <div className="col-md-4 project-column-indented">
             <div className="project-card wow fadeInUp">
                <img src="assets/images/writeflow.jpg" alt="Project" className="project-thumbnail"/>
                <h6 className="project-title" style={{ color: "#810dca" }}>Writeflow</h6>
                <p className="Project-category text-justify">
                  Sistema low-code/no-code que proporciona autonomia na implementação de fluxos de trabalho com a notação BPMN, desde a criação de processos até a execução e geração de relatórios para análise de resultados.
                </p>
                <a className='text-black' style={{ fontSize: "14px" }} href="https://www.writeflow.com.br/" target="_blank">
                  Clique aqui para ver o site
                </a>
              </div>
              <div className="project-card wow fadeInUp">
                <img src="assets/images/saic.png" alt="Project" className="project-thumbnail"/>
                <h6 className="project-title" style={{ color: "#228ca0" }}>SAIC (Solução de atendimento integrado ao cidadão)</h6>
                <p className="Project-category text-justify">
                  Sistema de gestão de processos para cidades, projetado para aprimorar a comunicação entre a população e a prefeitura, com integração a um modelador BPMN que possibilita a criação e automação de processos municipais sem a necessidade de codificação.
                </p>
              </div>
            </div>

            <div className="col-md-4 wow fadeInUp">

              {/* gestao-escolar.educacao.caraguatatuba.sp.gov.br       */}

              <div className="project-card wow fadeInUp">
                <img src="assets/images/gestao.png" alt="Project" className="project-thumbnail"/>
                <h6 className="project-title" style={{ color: "#165C9F" }}>Gestão Escolar</h6>
                <p className="Project-category text-justify">
                  Sistema de gestão escolar com o objetivo de facilitar o acompanhamento de alunos e professores.
                </p>
                <a className='text-black' style={{ fontSize: "14px" }} href="https://www.gestao-escolar.educacao.caraguatatuba.sp.gov.br/" target="_blank">
                  Clique aqui para ver o site
                </a>
              </div>

              <div className="project-card wow fadeInUp">
                <img src="assets/images/lovekar.png" alt="Project" className="project-thumbnail"/>
                <h6 className="project-title" style={{ color: "#a6252a" }}>Lovekar Automotive</h6>
                <p className="Project-category text-justify">
                  Plataforma de agendamento de horários com oficinas da região, com o objetivo de facilitar a comunicação entre proprietários de veículos, lojas de autopeças e oficinas.
                </p>
                <a className='text-black' style={{ fontSize: "14px" }} href="https://www.lovekar.com.br/" target="_blank">
                  Clique aqui para ver o site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section hiro-section">
        <div className="container wow fadeInUp">
          <h6 className="font-weight-semibold mb-4 mb-md-0">
            Se você precisa de um profissional comprometido e proativo, estou à disposição!
          </h6>
          <h2 className="section-title">
            Entre em contato
          </h2>
          <div className="contact-address">
            <div className="row">
              <div className="col-md-5">
                <p className="font-weight-medium">
                  Santa Cecília | São Paulo – SP
                </p>
              </div>
              <div className="col-md-5 mb-4 mb-md-0">
                <p className="font-weight-medium">BR: +55 (19) 99132-3147 <br/> juliano.appe@gmail.com</p>
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <a href="#top" className="go-top-btn">
                  <img src="assets/images/arrow_up@1x.svg" alt="arrow up"/>
                  <span className="sr-only">Go to top</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Script src="assets/vendors/wowjs/wow.min.js" strategy="lazyOnload" />
      <Script src="assets/vendors/popper.js/popper.min.js" strategy="lazyOnload" />
      <Script src="assets/vendors/bootstrap/dist/js/bootstrap.min.js" strategy="lazyOnload" />
      <Script src="assets/js/main.js" strategy="lazyOnload" />
    </>
  )
}

export default Home;