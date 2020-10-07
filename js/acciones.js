function mostrar(){
	document.getElementById('mostrarOcultar').style.display="block";
	document.getElementById('mostrar').setAttribute('value', 'Ocultar Galería de fotos');
	document.getElementById('mostrar').setAttribute('onclick', 'ocultar();');
	};
function ocultar(){
	document.getElementById('mostrarOcultar').style.display="none";
	document.getElementById('mostrar').setAttribute('value', 'Ver Galería de fotos');
	document.getElementById('mostrar').setAttribute('onclick', 'mostrar();');
}
function abrir_formulario(){
	document.getElementById('contenedor_formulario').style.display="block"
}
function cerrar_formulario(){
	document.getElementById('contenedor_formulario').style.display="none"; 
}

addEventListener('DOMContentLoaded', ()=>{
	const btn_menu = document.querySelector('.btn_menu')
	if (btn_menu) {
		btn_menu.addEventListener('click',()=>{
			const menu_items = document.querySelector('.menu_items')

			menu_items.classList.toggle('show')		
		})
	}
	
})