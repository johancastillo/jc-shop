import {useEffect} from "react";
import {Link} from "wouter";
import "../styles/widgets/MegaMenu.css"

const MegaMenu = () => {

    useEffect(() => {
        const btnDepartamentos = document.getElementById('btn-departamentos'),
	  btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
	  grid = document.getElementById('grid'),
	  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
	  contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
	  esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
		grid.classList.add('activo');
	}
});

grid.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
		grid.classList.remove('activo');
	}
});

document.querySelectorAll('#menu .categorias span').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		if(!esDispositivoMovil()){
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria === e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		};
	});
});

// EventListeners para dispositivo movil.
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
	e.preventDefault();
	if(contenedorEnlacesNav.classList.contains('activo')){
		contenedorEnlacesNav.classList.remove('activo');
		document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo');
		document.querySelector('body').style.overflow = 'hidden';
	}
});

// Click en boton de todos los departamentos (Para version movil).
btnDepartamentos.addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.add('activo');
	btnCerrarMenu.classList.add('activo');
});

// Boton de regresar en el menu de categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.remove('activo');
	btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias span').forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		if(esDispositivoMovil()){
			contenedorSubCategorias.classList.add('activo');
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria === e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		}
	});
});

// Boton de regresar en el menu de categorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		contenedorSubCategorias.classList.remove('activo');
	});
});

btnCerrarMenu.addEventListener('click', (e)=> {
	e.preventDefault();
	document.querySelectorAll('#menu .activo').forEach((elemento) => {
		elemento.classList.remove('activo');
	});
	document.querySelector('body').style.overflow = 'visible';
});
    });

    return(
        <nav className="menu" id="menu">
  <div className="contenedor contenedor-botones-menu">
    <button id="btn-menu-barras" className="btn-menu-barras"><i className="fas fa-bars" /></button>
    <button id="btn-menu-cerrar" className="btn-menu-cerrar"><i className="fas fa-times" /></button>
  </div>
  <div className="contenedor contenedor-enlaces-nav">
    <div className="btn-departamentos" id="btn-departamentos">
      <p>Todos los <span>Departamentos</span></p>
      <i className="fas fa-caret-down" />
    </div>

      <div className="logo">
        <img src="./assets/logo.svg" width="58px" alt="" />
      </div>

    <div className="enlaces">
      <a href="#">Cuenta</a>
      <a href="#">Promociones</a>
      <a href="#">Mesa de Regalos</a>
      
      <Link to="/login">
        <a href="#">
          Iniciar sesión
        </a>
      </Link>
    </div>
  </div>
  <div className="contenedor contenedor-grid">
    <div className="grid" id="grid">
      <div className="categorias">
        <button className="btn-regresar"><i className="fas fa-arrow-left" /> Regresar</button>
        <h3 className="subtitulo">Categorias</h3>
        <span data-categoria="tecnologia-y-computadoras">Tecnología y Computadoras <i className="fas fa-angle-right" /></span>
        <span data-categoria="libros">Libros <i className="fas fa-angle-right" /></span>
        <span data-categoria="ropa-y-accesorios">Ropa y Accesorios <i className="fas fa-angle-right" /></span>
        <span data-categoria="hogar-y-cocina">Hogar y Cocina <i className="fas fa-angle-right" /></span>
        <span data-categoria="juegos-y-juguetes">Juegos y Juguetes <i className="fas fa-angle-right" /></span>
        <span data-categoria="salud-y-belleza">Salud y Belleza <i className="fas fa-angle-right" /></span>
        <span data-categoria="alimentos-y-bebidas">Alimentos y Bebidas <i className="fas fa-angle-right" /></span>
      </div>

      <div className="contenedor-subcategorias">
        <div className="subcategoria " data-categoria="tecnologia-y-computadoras">
          <div className="enlaces-subcategoria">
            <button className="btn-regresar"><i className="fas fa-arrow-left" />Regresar</button>
            <h3 className="subtitulo">Tecnología y Computadoras</h3>
            <a href="#">Laptops</a>
            <a href="#">Tablets</a>
            <a href="#">Computadoras de Escritorio</a>
            <a href="#">Monitores</a>
            <a href="#">Componentes</a>
          </div>
          <div className="banner-subcategoria">
            <a href="#">
              <img src="./assets/images/tecnologia-banner-1.png" alt="" />
            </a>
          </div>
          <div className="galeria-subcategoria">
            <a href="#">
              <img src="./assets/images/tecnologia-galeria-1.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/tecnologia-galeria-2.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/tecnologia-galeria-3.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/tecnologia-galeria-4.png" alt="" />
            </a>
          </div>
        </div>
        <div className="subcategoria" data-categoria="libros">
          <div className="enlaces-subcategoria">
            <button className="btn-regresar"><i className="fas fa-arrow-left" />Regresar</button>
            <h3 className="subtitulo">Libros</h3>
            <a href="#">Top Sellers</a>
            <a href="#">Ciencia Ficcion</a>
            <a href="#">Fantasia</a>
            <a href="#">Miedo</a>
          </div>
          <div className="banner-subcategoria">
            <a href="#">
              <img src="./assets/images/libros-banner-1.png" alt="" />
            </a>
          </div>
          <div className="galeria-subcategoria">
            <a href="#">
              <img src="./assets/images/libros-galeria-1.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/libros-galeria-2.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/libros-galeria-3.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/libros-galeria-4.png" alt="" />
            </a>
          </div>
        </div>
        <div className="subcategoria" data-categoria="ropa-y-accesorios">
          <div className="enlaces-subcategoria">
            <button className="btn-regresar"><i className="fas fa-arrow-left" />Regresar</button>
            <h3 className="subtitulo">Ropa y Accesorios</h3>
            <a href="#">Ropa</a>
            <a href="#">Zapatos</a>
            <a href="#">Accesorios</a>
            <a href="#">Relojes</a>
          </div>
          <div className="banner-subcategoria">
            <a href="#">
              <img src="./assets/images/ropa-banner-1.png" alt="" />
            </a>
          </div>
          <div className="galeria-subcategoria">
            <a href="#">
              <img src="./assets/images/ropa-galeria-1.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/ropa-galeria-2.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/ropa-galeria-3.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/ropa-galeria-4.png" alt="" />
            </a>
          </div>
        </div>
        <div className="subcategoria" data-categoria="hogar-y-cocina">
          <div className="enlaces-subcategoria">
            <button className="btn-regresar"><i className="fas fa-arrow-left" />Regresar</button>
            <h3 className="subtitulo">Hogar y Cocina</h3>
            <a href="#">Cocina</a>
            <a href="#">Electrodomesticos</a>
            <a href="#">Limpieza</a>
            <a href="#">Baño</a>
            <a href="#">Decoracion</a>
            <a href="#">Arte</a>
            <a href="#">Manualidades</a>
            <a href="#">Jardin</a>
          </div>
          <div className="banner-subcategoria">
            <a href="#">
              <img src="./assets/images/hogar-banner-1.png" alt="" />
            </a>
          </div>
          <div className="galeria-subcategoria">
            <a href="#">
              <img src="./assets/images/hogar-galeria-1.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/hogar-galeria-2.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/hogar-galeria-3.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/hogar-galeria-4.png" alt="" />
            </a>
          </div>
        </div>
        <div className="subcategoria" data-categoria="juegos-y-juguetes">
          <div className="enlaces-subcategoria">
            <button className="btn-regresar"><i className="fas fa-arrow-left" />Regresar</button>
            <h3 className="subtitulo">Juegos y Juguetes</h3>
            <a href="#">Juguetes</a>
            <a href="#">Juegos de Mesa</a>
            <a href="#">Aire Libre</a>
            <a href="#">Muñecas</a>
          </div>
          <div className="banner-subcategoria">
            <a href="#">
              <img src="./assets/images/juegos-banner-1.png" alt="" />
            </a>
          </div>
          <div className="galeria-subcategoria">
            <a href="#">
              <img src="./assets/images/juegos-galeria-1.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/juegos-galeria-2.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/juegos-galeria-3.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/juegos-galeria-4.png" alt="" />
            </a>
          </div>
        </div>
        <div className="subcategoria" data-categoria="salud-y-belleza">
          <div className="enlaces-subcategoria">
            <button className="btn-regresar"><i className="fas fa-arrow-left" />Regresar</button>
            <h3 className="subtitulo">Salud y Belleza</h3>
            <a href="#">Cuidado de la Piel</a>
            <a href="#">Maquillaje</a>
            <a href="#">Lociones</a>
            <a href="#">Shampoo</a>
          </div>
          <div className="banner-subcategoria">
            <a href="#">
              <img src="./assets/images/belleza-banner-1.png" alt="" />
            </a>
          </div>
          <div className="galeria-subcategoria">
            <a href="#">
              <img src="./assets/images/belleza-galeria-1.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/belleza-galeria-2.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/belleza-galeria-3.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/belleza-galeria-4.png" alt="" />
            </a>
          </div>
        </div>
        <div className="subcategoria" data-categoria="alimentos-y-bebidas">
          <div className="enlaces-subcategoria">
            <button className="btn-regresar"><i className="fas fa-arrow-left" />Regresar</button>
            <h3 className="subtitulo">Alimentos y Bebidas</h3>
            <a href="#">Alimentos</a>
            <a href="#">Bebidas</a>
          </div>
          <div className="banner-subcategoria">
            <a href="#">
              <img src="./assets/images/comida-banner-1.png" alt="" />
            </a>
          </div>
          <div className="galeria-subcategoria">
            <a href="#">
              <img src="./assets/images/comida-galeria-1.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/comida-galeria-2.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/comida-galeria-3.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/images/comida-galeria-4.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

    )
};


export default MegaMenu;

