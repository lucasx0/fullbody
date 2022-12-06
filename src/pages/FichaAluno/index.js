import Header from '../../components/Header'
import './fichaaaluno.css';


export default function FichaAluno() {
    return (
        <div>
            <Header />
            <div class="container">
                <div class="card-body">
                    <div class="row">
                        <div class="col-5 col-md-3 mt-2 mt-md-0">
                        </div>
                        <div class="col-7 col-md-3 text-left mt-2 mt-md-0">
                            <b class="text-dark text-center">Gleyce Souza</b>
                            <br /> <b class="text-dark">Data:</b> 06/01/22
                        </div>
                        <div class="col-5 col-md-3 mt-5 mt-md-0">
                            <i class="fa fa-user-circle-o font-size-60 text-orange"></i>
                        </div>
                        <div class="col-7 col-md-3 text-left mt-5 mt-md-0">
                            <b class="text-dark">Cleber Francisco Alves </b><br />
                            <span>42 anos</span><br />
                            <span> Masculino </span>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container">
                <div class="row">
                    <div class="col">
                        <p class="fs-1 text-center">Par-Q</p>
                        <hr />
                        <p class="fs-5"> Não foram identificadas limitações e restrições para realização de atividades.</p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row align-items-start">


                    <div class="col-6 col-md-3">
                        <div class="card">
                            <div class="card-block pdd-horizon-10 pdd-vertical-20 text-center">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p class="text-dark text-uppercase font-size-16"><b>Peso</b></p>
                                        <hr />
                                        <h1 class="no-mrg-top text-primary font-size-30">80.0 kg</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="card">
                            <div class="card-block pdd-horizon-10 pdd-vertical-20 text-center">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p class="text-dark text-uppercase font-size-16"><b>Altura</b></p>
                                        <hr />
                                        <h1 class="no-mrg-top text-primary font-size-30">170 cm</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-block pdd-horizon-10 pdd-vertical-20 text-center">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p class="text-dark text-uppercase font-size-16"><b>IMC</b></p>
                                        <hr />
                                        <h1 class="no-mrg-top no-mrg-btm text-primary font-size-30 d-inline-block">27.70 kg</h1>
                                        <span class="d-block"> Acima do peso</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-block pdd-horizon-10 pdd-vertical-20 text-center">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p class="text-dark text-uppercase font-size-16"><b>Gordura</b></p>
                                        <hr />
                                        <h1 class="no-mrg-top text-primary font-size-30">23.6 %</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p class="text-dark text-uppercase font-size-16 text-center">Frequência Cardíaca</p>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col text-dark">50 a 60%</th>
                                        <th scope="col text-dark">89 a 106 bpm</th>
                                        <th scope="col text-dark">Muito Leve</th>
                                    </tr>

                                    <tr>
                                        <th scope="col text-dark">60 a 70%</th>
                                        <th scope="col text-dark">106 a 124 bpm</th>
                                        <th scope="col text-dark">Leve</th>
                                    </tr>

                                    <tr>
                                        <th scope="col text-dark">70 a 80%</th>
                                        <th scope="col text-dark">124 a 142 bpm</th>
                                        <th scope="col text-dark">Moderado</th>
                                    </tr>

                                    <tr>
                                        <th scope="col text-dark">80 a 90%</th>
                                        <th scope="col text-dark">142 a 159 bpm</th>
                                        <th scope="col text-dark">Intenso</th>
                                    </tr>

                                    <tr>
                                        <th scope="col text-dark">90 a 100%</th>
                                        <th scope="col text-dark">159 a 177 bpm</th>
                                        <th scope="col text-dark">Maximo</th>
                                        <span>"Referência: Omri Inbar, et al., da Griffith"</span>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>


                    <div class="col-md-12">
                        <div class="card pdd-horizon-10 pdd-vertical-20 text-center">
                            <p class="text-dark text-uppercase font-size-16 pdd-btm-10"><b>Consumo recomendado de água</b></p><div class="row text-center">
                                <div class="col-12 col-md-4">
                                    <p class="text-dark text-uppercase font-size-14 mb-1"><b>Quantidade</b></p>
                                    <h1 class="no-mrg-btm text-info font-size-22">2.8 L</h1>
                                    <p class="font-size-13">Por Dia</p>
                                </div>

                                <div class="col-6 col-md-4 border-hide-sm">
                                    <p class="text-dark text-uppercase font-size-14 mb-1"><b>Garrafas</b></p>
                                    <h1 class="no-mrg-btm text-info font-size-22">6</h1>
                                    <p class="font-size-13">de 500 ml</p>
                                </div>

                                <div class="col-6 col-md-4">
                                    <p class="text-dark text-uppercase font-size-14 mb-1"><b>Copos</b></p>
                                    <h1 class="no-mrg-btm text-info font-size-22">9</h1>
                                    <p class="font-size-13">de 310 ml</p>
                                </div>

                            </div>
                            <hr />
                            <small>* Valores estimados para adultos saudáveis. <br />
                                Fatores como: condição climática, nível de atividade física, metabolismo e doença não são levados em consideração no cálculo.
                            </small>

                        </div>
                    </div>


                    <div class="container">
                        <div class="card">
                            <div class="card-block pdd-horizon-10 pdd-vertical-20 text-center">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p class="text-dark text-uppercase font-size-16 mb-1"><b>Dobras cutâneas</b></p>
                                        <p>Protocolo: <b>Pollock/Jackson (7 Dobras M 18 à 61 anos e F 18 à 55 anos)</b></p>
                                        <table class="table table-hover text-left">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <b>Subescapular</b>
                                                    </td>
                                                    <td>
                                                        19.0 mm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Tríceps</b>
                                                    </td>
                                                    <td>
                                                        21.0 mm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Peitoral</b>
                                                    </td>
                                                    <td>
                                                        17.0 mm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Axilar média</b>
                                                    </td>
                                                    <td>
                                                        27.0 mm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Supra ilíaca</b>
                                                    </td>
                                                    <td>
                                                        19.0 mm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Abdominal</b>
                                                    </td>
                                                    <td>
                                                        28.0 mm
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Coxa</b>
                                                    </td>
                                                    <td>
                                                        27.0 mm
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="col">
                            <div class="card">
                                <div class="card-block pdd-horizon-10 pdd-vertical-20 text-center">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p class="text-dark text-uppercase font-size-16 mb-1">
                                                <b>Perímetros</b>
                                            </p>

                                            <table class="table table-hover text-left">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <b>Pescoço</b>
                                                        </td>
                                                        <td>
                                                            37.5 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Peito normal</b>
                                                        </td>
                                                        <td>
                                                            98.0 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Peito inspirado</b>
                                                        </td>
                                                        <td>
                                                            101.0 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Cintura</b>
                                                        </td>
                                                        <td>
                                                            87.5 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Abdômen</b>
                                                        </td>
                                                        <td>
                                                            95.0 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Quadril</b>
                                                        </td>
                                                        <td>
                                                            103.0 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Ombros</b>
                                                        </td>
                                                        <td>
                                                            108.5 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Braço relaxado direito</b>
                                                        </td>
                                                        <td>
                                                            35.0 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Braço relaxado esquerdo</b>
                                                        </td>
                                                        <td>
                                                            36.0 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Braço contraído direito</b>
                                                        </td>
                                                        <td>
                                                            35.5 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Braço contraído esquerdo</b>
                                                        </td>
                                                        <td>
                                                            36.0 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Antebraço direito</b>
                                                        </td>
                                                        <td>
                                                            28.0 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Antebraço esquerdo</b>
                                                        </td>
                                                        <td>
                                                            28.0 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Coxa direita</b>
                                                        </td>
                                                        <td>
                                                            62.0 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Coxa esquerda</b>
                                                        </td>
                                                        <td>
                                                            60.0 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Panturrilha direita</b>
                                                        </td>
                                                        <td>
                                                            40.5 mm
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <b>Panturrilha esquerda</b>
                                                        </td>
                                                        <td>
                                                            40.5 mm
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="card">
                        <div class="card-block pdd-horizon-10 pdd-vertical-20 text-center">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="text-dark text-uppercase font-size-16 mb-1"><b>Índice
                                        Cintura
                                        Quadril - ICQ</b></p>

                                    <div class="slidecontainer pdd-vertical-20 ">

                                        <input type="range" min="0" max="103" value="85" class="slider" id="myRange" disabled="disabled" />
                                    </div>

                                    <table class="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>Nível de pontuação</td>
                                                <td><b>0.85</b></td>
                                            </tr>
                                            <tr>
                                                <td>Nível de risco</td>

                                                <td><b>Baixo</b></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <small>* O teste identifica possível chance de desenvolver doença
                                        cardiovascular</small>

                                </div>


                            </div>
                        </div>
                    </div>





                    <div class="row">
                        <div class="col-6 col-md-6">
                            <div class="card">
                                <div class="card-block pdd-horizon-10 pdd-vertical-20 text-center">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p class="text-dark text-uppercase font-size-16"><b>Abdominais</b>
                                            </p>
                                            <hr />
                                            <h1 class="no-mrg-btm text-primary font-size-30">
                                                20
                                            </h1>
                                            <small>Abaixo da média</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-6">
                            <div class="card">
                                <div class="card-block pdd-horizon-10 pdd-vertical-20 text-center">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <p class="text-dark text-uppercase font-size-16"><b>Flexões de
                                                Braço</b>
                                            </p>
                                            <hr />
                                            <h1 class="no-mrg-btm text-primary font-size-30">
                                                30
                                            </h1>
                                            <small>Excelente</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}