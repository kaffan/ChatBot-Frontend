import { Button, Grid } from "@mui/material";
import { Fragment } from "react";

const Frame1 = ({pageTitle, btnTitle}) =>{
    return(
        <Fragment>
            <Grid container style={{
                height:"100vh",
                width:"100vw",
                justifyContent:"center",
                alignItems:"center",
            }}>
                <Grid item
                sx={{
                    width:"30%",
                    backgroundColor:"#FFEEF4",
                    height:"100%",
                    minWidth:"350px",
                    padding:"5px 7px",
                    boxShadow:"1px 1px 10px black",
                    border:"0.5px solid black",
                    borderRadius:"5px"
                }}>
                    <Grid container direction="column" sx={{
                        height:"100%",
                        width:"100%",
                        alignItems:"center",
                        justifyContent:"center",
                    }}>
                        <Grid item sx={{
                            height:"50%",
                            width:"100%",
                            verticalAlign:"middle",
                            textAlign:"center"
                        }}>
                            <label style={{
                                fontSize:"1.5em",
                                color:"#CAEDFF",
                                fontFamily:"Roboto, sans-serif",
                            }}>{pageTitle}</label><br /><br />
                            {(btnTitle) ? <Button variant="contained" color="secondary" sx={{
                                textTransform:"capitalize",
                                fontSize:"1em",
                                borderWidth:"2px"
                            }}>{btnTitle}</Button> : <Fragment />}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}

const Frame2 = ({children}) =>{
    return(
        <Fragment>
            <Grid container sx={{
                width:"100vw",
                height:"100vh",
                justifyContent:"center"
            }}>
                <Grid item>
                    {children}
                </Grid>
            </Grid>
        </Fragment>
    )
}

const TemplateCard = ({pageTitle = "", btnTitle = "", children}) =>{
    console.log(pageTitle)
    return (
      <Fragment>
        {pageTitle ? (
          <Frame1 pageTitle={pageTitle} btnTitle={btnTitle}></Frame1>
        ) : (
          <Frame2>{children}</Frame2>
        )}
      </Fragment>
    );
}
export default TemplateCard;