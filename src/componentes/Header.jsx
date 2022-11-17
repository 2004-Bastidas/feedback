import propTypes from "prop-types";

const Header = ({ bgColor , color}) => {
    return (
        <header style={{  backgroundColor: bgColor,
                          color: color             } }>
            Encabezado
        </header>
    )
}

//Valores por defeto props suministrado

Header.defaultProps = {
    bgColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
}

//Validar las props con propTypes
Header.propTypes = {
    bgColor: propTypes.string.isRequired,
    color: propTypes.string
}

export default Header;