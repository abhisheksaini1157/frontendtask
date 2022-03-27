import {React,} from 'react'
import {Paper,Box,Typography,} from "@mui/material";

const Output = ({props}) => {
   
    const {title,description,job_type,paid_type} = props;




  return (
    <>
     <Typography variant="h4" gutterBottom>
         Output of Form 
       </Typography>
     <Paper style={{margin:'20px'}}>
    
          <Box p={2} style={{margin:20}}>
     {/* <div style={{ margin: "30px",padding:"20px", background:"#43c6db" }}> */}
      <div style={{
        display:'flex',
        flexDirection:"row",


      }}>
        <div style={{display:"flex", flexDirection:"column",alignItems:"flex-start",width:"70%"}}>
          <h2 style={{textTransform:"capitalize"}}>{title}</h2>
          <h4 style={{textTransform:"capitalize"}}>{description}</h4>
          <h4 style={{textTransform:"capitalize"}}>{job_type}</h4>
        </div>
        <div style={{justifyContent:"center",alignItems:"center"}}>
          <h3 style={{color:"green"}}>${paid_type}</h3>
        </div>



      </div>
      </Box>
      </Paper>
        
    {/* // </div> */}
    </>
  )
}

export default Output