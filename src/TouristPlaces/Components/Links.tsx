import { NavLink } from "react-router-dom"

interface ILinkName {
    linkname : string,
    name : string
}

export const Link = ({linkname,name}:ILinkName)=>{
    return (
        <>
            <NavLink to={linkname} className="nav-links" >{name}</NavLink>
        </>
    )
}