import { Box, Container, Grid, Stack, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function AboutContent() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Toolbar />
            <h2 className="text-center mb-3">About Saar Biotech</h2>
            <Toolbar />
            <Container>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <Typography>
                            Saar Biotech is one of the leading pharmaceuticals manufacturing company in India. We use latest techniques and technologies for performing test. We are engaged in third party manufacturing of varied pharmaceutical formulations and also manufactured products for domestic and international market.
                            Our product range consists Syrups, Dry syrups, suspensions, Nasal spray, Roll On, Lotions, Drops, Ointment, Glycerine and Shampoo. Our plant is large, well-designed and comply with global requirements. <br /><br />

                            Infrastructure, processes and systems at our plants support a flexible product mix and quick product changeovers.
                            We have wide product range which comprises Anti-Fungal, Anti-Bacterial, Anti-Inflammatory, Antitussive and Dermatological products. At our manufacturing site, the latest analytical instruments and tightly monitored quality assurance and quality control systems ensures consistent quality of our products.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <img src="/images/about.jpg" alt="Saar Biotech" width={'100%'} />
                    </Grid>
                </Grid>

                <Toolbar />
            </Container>

            <Box className="w-100 d-flex align-items-center justify-content-center text-center background-primary"
                sx={{
                    height: '15vh'
                }}
            >
                <h5 className="fst-italic text-light">
                    "For us Quality Means Doing it Right When No one is Looking."
                </h5>
            </Box>

            <Container>

                <Toolbar />

                <Grid container spacing={8} className={isMobile ? `text-center` : 'text-start'}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h5">
                            <u>Main Perspective</u>
                        </Typography>
                        <Stack py={3} spacing={2}>
                            <Typography variant="subtitle1" className="color-primary">
                                Quality Care
                            </Typography>
                            <Typography variant="body2">
                                We Provide COA(Certificate of Analysis) with each batch and control samples are maintained in laboratories.
                            </Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant="subtitle1" className="color-primary">
                                Quality Certifications
                            </Typography>
                            <Typography variant="body2">
                                WHO Applied<br />
                                ISO Certification <br />
                                GMP Certification
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h5">
                            <u>Our Values</u>
                        </Typography>
                        <Stack py={3} spacing={2}>
                            <Typography variant="subtitle1" className="color-primary">
                                Customer Satisfaction
                            </Typography>
                            <Typography variant="body2">
                                At Saar Biotech we will endeavour to fulfill the requirments of our prestigious clients to ensure the highest levels of customer satisfaction at all times.
                                Our products and related services will exemplify unparalled quality standards to ensure that tangible value is to our customers and their stakeholders over long term mutually beneficial relationships.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Typography variant="h5">
                            <u>Our Strengths</u>
                        </Typography>
                        <Stack py={3} spacing={2}>
                            <Typography variant="subtitle1" className="color-primary">
                                Our Team
                            </Typography>
                            <Typography variant="body2">
                                Our Professional and Highly Qualified Staff includes M pharm, MBA'S and CA'S from which all are dedicated towards their duties.
                            </Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant="subtitle1" className="color-primary">
                                Latest DCGI Approvals
                            </Typography>
                            <Typography variant="body2">
                                As we believe in <b>inspiring innovation</b> that's why this is our main aim to bring  new DCGI Approved molecules for our customers.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Toolbar />
        </>
    )
}