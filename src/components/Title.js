import { Container, Typography } from "@material-ui/core";

const Title = () => {
    return ( 
        <Container maxWidth="sm">
            <Typography 
                component="h1" 
                variant="h2" 
                align="center"
                color="textPrimary"
                gutterBottom >
                Jane's <span>T O D O</span>
            </Typography>
        </Container>
     );
}
 
export default Title;