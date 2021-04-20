import { Container, Typography } from "@material-ui/core";

const Title = () => {
    return ( 
        <Container maxWidth="sm">
            <Typography 
                component="h1" 
                variant="h3" 
                align="center"
                color="textPrimary"
                gutterBottom 
            >
                Todo List
            </Typography>
        </Container>
     );
}
 
export default Title;