import { Container, Grid, Stack, Toolbar, Typography } from "@mui/material";

export default function Expo2012Content() {
    return (
        <>
            <Toolbar />

            <Typography variant="h4" className="color-primary text-center">Indian Pharma Expo 2012</Typography>

            <Toolbar />
            <Container>
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Typography className="d-flex align-self-center lh-lg">
                            The Indian Pharma Expo 2012 took place on 22- 23 sept at Pragati Maidan in New Delhi. It was a unique pharma event, which proved to be the perfect platform flooded with opportunities for pharma entrepreneurs such as Pharmaceutical Manufacturers & Ethical, PCD and Generic companies, eager to explore distributorship, franchisee & Third Party Manufacturing for their brands. Many Pharma students, doctors and consultants also visited the Exhibition and gained good exposure of Indian Pharma Industry.
                            <br /><br />
                            It was a great pleasure to participate in such a good pharma event. UBM Medica, the organizers of Indian Pharma Expo, made appreciable efforts to bring so many pharmaceutical companies and related visitors from all around the nation together at a single place and provide platform for everybody to Explore opportunities for themselves in Pharma Industry.
                            <br /><br />
                            This event provided great opportunity to all the exhibitors to market their products to pharmaceutical industry, increase awareness about their products and improve their corporate visibility.
                            <br /><br />
                            We want to thank our dedicated Staff, our associated companies who played major role in all arrangements and visitors for making Indian Pharma Expo-2012 a success for us.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Stack spacing={2}
                            alignItems="start"
                            justifyContent={"start"}
                            className="w-100 h-100"
                        >
                            <Typography variant="h6" className="color-primary text-start">Exhibition Highlights</Typography>
                            <Typography variant="body1">
                                <li>Pharmaceuticals Products Exhibition </li>
                            </Typography>
                            <Typography variant="body1">
                                <li>Expo based on the theme 'Destination for Innovative and Reliable Healthcare Products'.</li>
                            </Typography>
                            <Typography variant="body1">
                                <li>B2B Exhibition</li>
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <Toolbar />

            </Container>
        </>
    )
}