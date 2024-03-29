import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Social from '../components/Social'

import demoMDP from '../assets/images/demo-minhas-despesas-plus.jpg'
import demoMD from '../assets/images/demo-minhas-despesas.jpg'

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Nós da Mobile TK Brazil buscamos proporcionar a melhor
                experiência no uso de aplicativos
              </h1>
              {/* <Scroll type="id" element="download">
                <a href="#download" className="btn btn-outline btn-xl">
                  Start Now for Free!
                </a>
              </Scroll> */}
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demoMD} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              Discover what all the buzz is about!
            </h2>
            <p>
              Our app is available on any mobile device! Download now to get
              started!
            </p>
            <div className="badges">
              <a className="badge-link" href="/#">
                <img src={gplay} alt="" />
              </a>
              <a className="badge-link" href="/#">
                <img src={astore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section className="features bg-primary" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Minhas Despesas</h2>
          <p className="text-muted">
            Controle de despesas simples e prático
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demoMD} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Simplicidade</h3>
                    <p className="text-muted">
                      Controle apenas suas contas a pagar
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Praticidade</h3>
                    <p className="text-muted">
                      Faça seu controle com pouco cliques
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>+ 1 milhão</h3>
                    <p className="text-muted">
                      Mais de um milhão de downloads
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Controle</h3>
                    <p className="text-muted">
                      Tenha o total dos seus gastos na palma da mão
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features theme-secondary" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Minhas Despesas Plus</h2>
          <p className="text-muted">
            Controle financeiro simples e prático
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Praticidade</h3>
                    <p className="text-muted">
                      Faça seu controle com poucos cliques
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Simplicidade</h3>
                    <p className="text-muted">
                      O controle básico das suas contas
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Gratuito</h3>
                    <p className="text-muted">
                      Faça seu cadastro grátis e começe a usar
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Organização</h3>
                    <p className="text-muted">
                      Veja seus lançamentos ordenados por suas datas
                    </p>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <a className="badge-link" href="https://play.google.com/store/apps/details?id=br.com.mobiletkbrazil.minhasdespesasplus">
                    <img src={gplay} alt="" />
                  </a>
                </div>
                <div className="col-lg-6">
                  <a className="badge-link" href="https://apps.apple.com/br/app/minhas-despesas-plus/id1513820659">
                    <img src={astore} alt="" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demoMDP} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h3>
          Dúvidas, críticas ou sugestões? Estamos aqui
        </h3>
        <Social />
        <h3>
          Entre em contato conosco
        </h3>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
