import React from "react";
import Header from "./header.jsx"
import Jumbotron from "./jumbotron.jsx"
import Cards from "./cards.jsx"
import Footer from "./footer.jsx"


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	return (
			<>
			<div><Header/></div>		
			<div className="container">
			<p></p>
			<div className="mb-3"><Jumbotron/></div>
			<div className="row">
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://storage.mlcdn.com/account_image/351654/0ZtOFRbLVC8dae4raImtWRvfOkA138xkeyeuyeUR.png" title="Calidad de aprendizaje" text=" Nuestra metodología participativa te permitirá aprender de manera dinámica y estimulante, tomando en cuenta tus intereses y necesidades."/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://storage.mlcdn.com/account_image/351654/Ny1fXCWSRPCdTlNb2JDgJQ7cGzCNKexrCltNDZmF.png" title="Cultura Sorda" text="Cuando aprendés con profesores sordos, te estás envolviendo en la riqueza de una cultura con sus propios valores, identidades y perspectivas."/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://storage.mlcdn.com/account_image/351654/Tm6K921qHh8STtJyLnsm4WQWcBjnoD8ocsjluqUU.png" title="Experiencia" text="Tenemos 8 años de constante mejora y actualización de los servicios que ofrecemos "/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://storage.mlcdn.com/account_image/351654/VlBaX3fJuoNOYzi9b8WeeTJOWBA7VYPFsRlBArIJ.png" title="Comunidad" text="Nuestra comunidad es inclusiva, diversa y comprometida con ser parte de un cambio. Podrás interactuar con personas sordas y oyentes"/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://storage.mlcdn.com/account_image/351654/bKW5kwVp8hWU1In1xblPwkEH1jgWye1JHr2BlpIy.jpg" title="Curso Principiante"  text="Iniciás estudiando las bases de la comunicación en LESCO, reconociendo su gramática propia y aprendiendo a expresarte con confianza "/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://storage.mlcdn.com/account_image/351654/wGyg1MflSvxy31q5txh55UCx8Ln77FX88tlqUOPh.jpg" title="Intermedio 1" text="Explorás nuevos temas y formas de expresarte. Te adentrás en la complejidad de la LESCO y su cultura."/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://storage.mlcdn.com/account_image/351654/wGyg1MflSvxy31q5txh55UCx8Ln77FX88tlqUOPh.jpg" title="Intermedio 2" text="Aprendés a usar la Lengua de Señas de forma acertada y creativa."/>
				</div>
				<div className="col-sm-4 col-md-3 mb-3"><Cards img="https://storage.mlcdn.com/account_image/351654/RKMegfUqYiKEDQXLMgZFVzPHEUzU6Gmn3QrRK7LL.jpg" title="Avanzado"  text="En este nivel enfatizás en fluidez, comprensión y vocabulario. Te acercás aun más a la Cultura Sorda y podés empezar a aplicar la LESCO en tu vida profesional."/>
				</div>

			</div>
			{/* <h1 className="text-center mt-5">Hello Rigo!</h1>
			
			</p> */}
		</div>
		<Footer/>
		</>
	);
};

export default Home;
