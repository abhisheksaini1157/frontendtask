import {React,useState,} from "react";
import { Box, Grid, MenuItem, Paper, TextField,Typography,Chip, } from "@mui/material";
import Output from "./Output";

const Form = () => {
  const[props,setProps] = useState({
    title:"",
    description:"",
    job_type:"",
    location:"",
    workplace_type:"",
    employment_type:"",
  });

const [data,setData] = useState({
  title : "",
  employment_type :"",
  location : "",
  workplace_type : "",
  paid_type : "",
  description : "",
});

// send data as prop on submiting
const onSubmit = (e) => {
  e.preventDefault();
  console.log(data);
  setProps({
    title : data.title,
    employment_type : data.employment_type,
    job_type : data.job_type,
    description : data.description,
    location : data.location,
    workplace_type : data.workplace_type,
    paid_type : data.paid_type,
  });
  alert("Scroll down to see the output");
}







  return (
    <>
      <div style={{ margin: "30px" }}>
        <Paper>
          <Box p={2} component="form" onSubmit={onSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={9}>
                <TextField
                  id="outlined-basic"
                  name="title"
                  label="Title"
                  variant="outlined"
                  fullWidth
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="outlined-select"
                  select
                  label="Employment Type"
                  fullWidth
                  value={data.employment_type}
                  onChange={(e) => setData({ ...data, employment_type: e.target.value })}
                >
                  <MenuItem value="Full Time">Full Time</MenuItem>
                  <MenuItem value="Part Time">Part Time</MenuItem>
                  <MenuItem value="Contract">Contract</MenuItem>
                  <MenuItem value="Temporary">Temporary</MenuItem>
                  <MenuItem value="Volunteer">Volunteer</MenuItem>
                  <MenuItem value="Internship">Internship</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  fullWidth
                  value={data.location}
                  onChange={(e) => setData({ ...data, location: e.target.value })}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  id="outlined-select"
                  select
                  label="Job Type"
                  fullWidth
                  value={data.job_type}
                  onChange={(e) => setData({ ...data, job_type: e.target.value })}
                >
                  <MenuItem value="Business System">Business System</MenuItem>
                  <MenuItem value="Design">Design</MenuItem>
                  <MenuItem value="Engineering">Engineering</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                  <MenuItem value="Human Resources">Human Resources</MenuItem>
                  <MenuItem value="Legal">Legal</MenuItem>
                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Operations">Operations</MenuItem>
                  <MenuItem value="Product ">Product </MenuItem>
                  <MenuItem value="Sales">Sales</MenuItem>
                  <MenuItem value="Security">Security</MenuItem>
                  <MenuItem value="Support">Support</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={6} sm={3}>
                <TextField
                  id="outlined-select"
                  select
                  label="Workplace Type"
                  fullWidth

                  value={data.workplace_type}
                  onChange={(e) => setData({ ...data, workplace_type: e.target.value })}
                >
                  <MenuItem value="On-Site">
                    On-Site : Employees come to work in person
                  </MenuItem>
                  <MenuItem value="Hybrid">
                    Hybrid : Employees Work on-site and off-site
                  </MenuItem>
                  <MenuItem value="Remote">
                    Remote : Employees work off-site
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  id="outlined-select"
                  select
                  label="Paid/Gratis"
                  fullWidth
                  value={data.paid_type}
                  onChange={(e) => setData({ ...data, paid_type: e.target.value })}
                >
                  <MenuItem value="Paid">Paid</MenuItem>
                  <MenuItem value="Gratis">Gratis</MenuItem>
                </TextField>
              </Grid>
              <br />
              
              <Grid item xs={12} sm={12}>
              <Typography variant="h6" gutterBottom margin="20px">
                Short Description (150 Words)
              </Typography>
              <br />
              <Paper style={{ padding: "20px" }}>
              <Typography variant="h6" gutterBottom align="left">
                    Add a job description
                    </Typography>
                <Grid container spacing={3}>
                  
                    
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Short Description"
                      multiline
                      rows="6"
                     
                      fullWidth
                      value={data.description}
                      onChange={(e) => setData({ ...data, description: e.target.value })}
                    />
                    </Grid>
                    </Grid>
                    <br />
                    <Typography variant="h6" gutterBottom align="left">
                    Add Skills
                    </Typography>
                    <div style={{width:100,}}>
                      <Chip label="Add skill +" 
                    color="success"
                    /></div>
                    <br />
                    <br />
                    

                    <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <button 
                      type="submit"
                      style={{
                        width:"150px",
                        height:"50px",
                        borderRadius:"10px",
                        backgroundColor:"#43c6db",
                        border:0,
                        color:"#fff",
                        fontSize:"20px"
                      }}
                      >
                        Submit
                      </button>

                    </Grid>
                    </Grid>
                    
            
                    </Paper>
              </Grid>
            </Grid>
          </Box>
        </Paper>
       
      </div>
      < Output props = {props} />
    </>
  );
};

export default Form;
