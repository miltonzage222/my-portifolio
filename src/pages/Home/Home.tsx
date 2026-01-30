import styled from "@emotion/styled"
import Capa from "../../assets/images/capa.jpg"
import Grid from "@mui/material/Grid"
import { Container, Typography } from "@mui/material"



const Home = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
    }))

    const StyledImg = styled("img")(() => ({
        width: "30%",
        borderRadius: "50%",
    }))

    return (
        <>
            <StyledHero>
                <Container>
                    <Grid container spacing={2}>
                        <Grid size={4}>
                            <StyledImg src={Capa} alt="Capa" />
                        </Grid>
                        <Grid size={8}>
                            <Typography color="white" variant="h1">Milton Gunza</Typography>
                            <Typography color="white" variant="h2">Eu sou Desenvolvedor FrontEnd.</Typography>
                            <button>Download CV</button>
                            <button>Contato</button>
                        </Grid>

                    </Grid>
                </Container>



            </StyledHero>
        </>
    )
}

export default Home
