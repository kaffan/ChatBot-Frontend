import { Fragment } from "react"
import TemplateCard from "../TemplateCard"

const ExitPage = () =>{
    // let a;
    return(
        <Fragment>
            <TemplateCard pageTitle={(()=>`Your Name `)()}></TemplateCard>
        </Fragment>
    )
}

export default ExitPage;