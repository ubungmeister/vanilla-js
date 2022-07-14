import {ManType} from "../test05_map/test05";
type PropsType = {
    title:string
    man: ManType
    food: Array<string>
}

export  const ManComponent: React.FC<PropsType> =(props)=>{

            const{title,man} =props // muzeme je da i misto props:
    //export  const ManComponent: React.FC<PropsType> =({title,man})=>{...}
            return(
                <div>
                    {/*<h1>{props.title}</h1>*/}
                    <h1>{title}</h1>
                    <hr/>
                    {/*<div>{props.man.name}</div>*/}
                    <h1>{man.name}</h1>
                </div>
            )
}
export  const ManComponent2: React.FC<PropsType> =({title,man,...props})=>{
    // muzeme  take:export  const ManComponent: React.FC<PropsType> =(props)=>{
    // const {man,title,...restProps} = props; Restprops - ostatok to co nevyuzili
    return(
        <div>
            <h1>{title}</h1>
            <hr/>
            <h1>{man.name}</h1>
            <hr/>
            <h1>{props.food}</h1>

        </div>
    )
}