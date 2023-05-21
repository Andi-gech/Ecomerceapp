function ButtonsTransparent({height,width,name,onclick}) {
    return (  <div style={{height:{height},width:{width}}} onClick={onclick} className="Transparent-button">
        <p>{name}</p>
    </div>);
}

export default ButtonsTransparent;