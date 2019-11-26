import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    card: {
        maxWidth: 400,
        width: 340,
        margin: 5,
    }
});

export const CharacterList = props => {
    const classes = useStyles();
    return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.card.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            Eye Color: {props.card.eye_color}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.card.gender}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>
    );
};
