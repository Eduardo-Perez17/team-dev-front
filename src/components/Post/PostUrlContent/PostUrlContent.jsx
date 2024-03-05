// MUI
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const PostUrlContent = ({ postByUrl }) => {
	// <div
	// 	dangerouslySetInnerHTML={{ __html: postByUrl?.data?.content }}
	// 	className='post_content_item'
	// />

	console.log({ image_tags: postByUrl?.data?.tags?.tagImage });

	return (
		<div className='post_content_item'>
			<div className='post_content_item_text'>
				<p>
					JavaScript (JS) es un <strong>lenguaje de programación</strong>{' '}
					ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con
					funciones de primera clase. Si bien es más{' '}
					<span className='strong_text'>lenguaje</span> conocido como un de
					scripting (secuencias de comandos) para <strong>páginas web</strong>,
					y es usado en muchos entornos fuera del navegador, tal como Node.js,{' '}
					<strong>Apache</strong> <strong>CouchDB</strong> y Adobe Acrobat
					JavaScript es un <strong>lenguaje de programación</strong> basada en
					prototipos, multiparadigma, de un solo hilo, dinámico, con soporte
					para <strong>programación</strong> orientada a objetos, imperativa y
					declarativa (por ejemplo programación funcional). Lee más en acerca de{' '}
					<strong>JavaScript</strong>.
				</p>
				<p>
					JavaScript (JS) es un <strong>lenguaje de programación</strong>{' '}
					ligero, interpretado, o compilado{' '}
					<span className='strong_text'>justo-a-tiempo</span> (just-in-time) con
					funciones de primera clase. Si bien es más conocido como un{' '}
					<strong>lenguaje</strong> de scripting (sec Lee más en acerca de
					JavaScript.
				</p>
			</div>

			<div className='code_container'>
				{/* <div className='code_container_item'>
					<div>
						<ContentCopyIcon />
					</div>
					<div className='code_container_tag'>
						{postByUrl?.data?.tags?.tagImage && (
							<div className='code_container_tag'>
								<img src={postByUrl?.data?.tags?.tagImage} alt='icono de etiqueta de post' />
							</div>
						)}
					</div>
				</div> */}

				<pre>
					<code>
						<span className='comment'>{'// Este es un comentario'}</span>
						<div className='code_item'>
							<span className='kr'>const</span>
							<span className='name'>name</span>
							<span className='p'>=</span>
							<span className='p'>[</span>
							<span className='mi'>1</span>
							<span className='p'>,</span>
							<span className='mi'>2</span>
							<span className='p'>,</span>
							<span className='mi'>3</span>
							<span className='p'>]</span>
						</div>

						<span className='comment'>{'// Este es un comentario'}</span>
						<div className='code_item'>
							<span className='kr'>const</span>
							<span className='name'>apples</span>
							<span className='p'>=</span>
							<span className='p'>[</span>
							<span className='mi'>1</span>
							<span className='p'>,</span>
							<span className='mi'>2</span>
							<span className='p'>,</span>
							<span className='mi'>3</span>
							<span className='p'>]</span>
						</div>
					</code>
				</pre>
			</div>

			<div className='post_content_item_text'>
				<p>
					JavaScript (JS) es un <strong>lenguaje de programación</strong>{' '}
					ligero, interpretado, o<span className='strong_text'>compilado</span>{' '}
					justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien{' '}
					<span className='strong_text'>JavaScript</span> es más conocido como
					un <strong>lenguaje de scripting</strong> (sec Lee más en acerca de.
					JavaScript (JS) es un <strong>lenguaje de programación</strong>{' '}
					ligero, interpretado, o<span className='strong_text'>compilado</span>{' '}
					justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien{' '}
				</p>

				<p>
					JavaScript (JS) es un <strong>lenguaje de programación</strong>{' '}
					ligero, interpretado, o<span className='strong_text'>compilado</span>{' '}
					justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien{' '}
					<span className='strong_text'>JavaScript</span> es más conocido como
					un <strong>lenguaje de scripting</strong> (sec Lee más en acerca de.
				</p>

				<p>
					JavaScript (JS) es un <strong>lenguaje de programación</strong>{' '}
					ligero, interpretado, o<span className='strong_text'>compilado</span>{' '}
					justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien{' '}
					<span className='strong_text'>JavaScript</span> es más conocido como
					un <strong>lenguaje de scripting</strong> (sec Lee más en acerca de.
					JavaScript (JS)
				</p>
			</div>
		</div>
	);
};
