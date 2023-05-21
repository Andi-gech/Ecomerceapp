function SizeComponent({size, onclick,active}) {
    return ( <div className="Sizecomponent"  style={{border: active?'2px solid green':"none"}} onClick={onclick}>
        {size}
    </div> );
}

export default SizeComponent;