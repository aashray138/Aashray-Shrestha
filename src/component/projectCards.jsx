import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import WhereUAt from '../img/WhereUAtt.png';
import LightenUp from '../img/LightenUp.png';
import Resume from '../img/ResumeBuilder.png';
import Transcript from '../img/Transcript.png';
import Campus from '../img/CampusCalendar.png';
import Artville from '../img/Artville.png';

import '../styles/cards.scss';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      minHeight: 243
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
export default function ProjectCard() {
  const classes = useStyles();

  return (
    <div id="about-container" className="content-containers container text-center mt-5">

    {/**
     * Where U At Project
     */}

        <div className="row" style={{ marginTop:3+ "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <div className = "imgAas"> 
                    <img id ="projectImg" src= {WhereUAt} alt="Aashray Shrestha Image" width="50%" />
                </div>
            </div>

            <div className={"col-12 col-sm-12 col-md-12 col-lg-6 "}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            iOS  
                        </Typography>
        
                        <Typography variant="h4" className={classes.pos} color="primary" >
                            WhereUAtt? 
                        </Typography>
                        <Typography variant="body1" component="p">
                            Swift, XCode
                        <br />
                        <br />
                            {"Login to your profile and get instant locations from a " + 
                            "list of friends to keep track of them during emergency situations"}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">GitHub</Button>
                    </CardActions>
                </Card>
            </div>
        </div>

     {/**
     * LightenUp
     */}
        <div className="row" style={{ marginTop:3+ "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            iOS  
                        </Typography>

                        <Typography variant="h4" className={classes.pos} color="primary">
                           LightenUp
                        </Typography>
                        <Typography variant="body1" component="p">
                            Swift, XCode , CreateML, ARKit, 
                        <br />
                        <br />
                            {" Recognizes facial emotions and display quotes and fun interactions using" 
                                + " ARKit to lighten up the user"}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">GitHub</Button>
                    </CardActions>
                </Card>
            </div>
            <div className={"col-12 col-sm-12 col-md-12 col-lg-6 "}>
                <div className = "imgAas"> 
                    <img id ="projectImg" src= {LightenUp} alt="Aashray Shrestha Image" width="50%" />
                </div>
            </div>         
        </div>

     {/**
     * Resume Builder
     */}

        <div className="row" style={{ marginTop:3+ "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <div className = "imgAas"> 
                    <img id ="projectImg" src= {Resume} alt="Resume App Image" width="50%" />
                </div>
            </div>

            <div className={"col-12 col-sm-12 col-md-12 col-lg-6 "}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Website
                        </Typography>
        
                        <Typography variant="h4" className={classes.pos} color="primary">
                            Resume Builder Wesbite 
                        </Typography>
                        <Typography variant="body1" component="p">
                            HTML5, CSS, JavaScript, PHP, MySQL
                        <br />
                        <br />
                            {"Obtain a pre formatted resume by enetering certain information on a resume template you choose "}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">GitHub</Button>
                    </CardActions>
                </Card>
            </div>
        </div>

     {/**
     * Transcript Portal
     */}

        <div className="row" style={{ marginTop:3+ "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Website 
                        </Typography>

                        <Typography variant="h4" className={classes.pos} color="primary">
                            Transcript Portal
                        </Typography>
                        <Typography variant="body1" component="p">
                            HTML5, CSS3, JavaScript, PHP, MySQL
                        <br />
                        <br />
                            {" Online Transcript Portal System for Admin and User Access." }
                            {"Main purpose of this project was to understand the use of PHP as backend, SQL, and relational database"}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">GitHub</Button>
                    </CardActions>
                </Card>
            </div>
            <div className={"col-12 col-sm-12 col-md-12 col-lg-6 "}>
                <div className = "imgAas"> 
                    <img id ="projectImg" src= {Transcript} alt="Aashray Shrestha Image" width="90%" />
                </div>
            </div>         
        </div>

    {/**
     * Event Calendar
     */}

    <div className="row" style={{ marginTop:3+ "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <div className = "imgAas"> 
                    <img id ="projectImg" src= {Campus} alt="Calendar App Image" width="50%" />
                </div>
            </div>

            <div className={"col-12 col-sm-12 col-md-12 col-lg-6 "}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Website 
                        </Typography>
        
                        <Typography variant="h4" className={classes.pos} color="primary">
                            College Events Webiste
                        </Typography>
                        <Typography variant="body1" component="p">
                            HTML5, CSS, JavaScript, PHP, MySQL
                        <br />
                        <br />
                            {"Built this website for Calvin Hacks at Calvin University. Can be used by administratord to post" + 
                            " new events and users to rsvp and add it to their calendar."}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">GitHub</Button>
                    </CardActions>
                </Card>
            </div>
        </div>

     {/**
     * Artville 
     */}

        <div className="row" style={{ marginTop:3+ "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                              e-Commerce Website
                        </Typography>

                        <Typography variant="h4" className={classes.pos} color="primary">
                            Artville
                        </Typography>
                        <Typography variant="body1" component="p">
                            HTML5, CSS3, JavaScript, PHP, MySQL
                        <br />
                        <br />
                           {"An e-commerce website built to sell photographs, posters and paintings."}
                           {"Features such as sorting according to different aspects - price, name, ratings"}
                           
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">GitHub</Button>
                    </CardActions>
                </Card>
            </div>
            <div className={"col-12 col-sm-12 col-md-12 col-lg-6 "}>
                <div className = "imgAas"> 
                    <img id ="projectImg" src= {Artville} alt="Aashray Shrestha Image" width="90%" />
                </div>
            </div>         
        </div>


    </div>   
  );
}

