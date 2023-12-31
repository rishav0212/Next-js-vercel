import { Container, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";

export default function MultiVitaminSpray() {
    return (
        <>


            <Toolbar />
            <Typography variant="h4" className="text-center color-primary">Multivitamin Oral Spray</Typography>
            <Toolbar />


            <Container maxWidth="md">
                <img src="/images/multivitamin-oral-spray.jpg" alt="Saar Biotech" style={{ width: '100%' }} />

                <Typography variant="subtitle1" className="fw-600 mb-2 mt-5">
                    Indications:- Health Supplement
                </Typography>

                <Typography variant="h6" className="color-primary mb--25 mt-4 text-uppercase">
                    Approved Name - <span style={{ color: 'black' }}>Multivitamin Oral Spray</span>
                </Typography>

                <Typography variant="button" className="font--size-1125">
                    Spray Presentation:
                </Typography>

                <Typography className="font--size-1125">
                    Vitamin C 5 mg<br />
                    Vitamin B3(Niacin) 2 mg<br />
                    Vitamin B5(Pantothenic acid) 1.25 mg<br />
                    Vitamin B2(As Sodium Phosphate) 0.35 mg<br />
                    Vitamin B6 0.3 mg<br />
                    Vitamin B1 0.275 mg<br />
                    Vitamin B9(Folic Acid) 25 mcg<br />
                    Vitamin A 45 mcg<br />
                    Iodine 37.5 mcg<br />
                    Vitamin K1 13.75 mcg<br />
                    Selenium 10 mcg<br />
                    Vitamin B7(Biotin) 7.5 mcg<br />
                    Vitamin D3 2.5 mcg<br />
                    Cyanocobalamin 0.25 mcg
                </Typography>

                <Typography variant="h6" className="color-primary mb--25 mt-4 text-uppercase">
                    Description
                </Typography>

                <Typography>
                    A&nbsp;multivitamin&nbsp;is a preparation intended to serve as a&nbsp;dietary supplement&nbsp;with&nbsp;vitamins,&nbsp;dietary minerals, and other nutritional elements. Multivitamins are a combination of many different&nbsp;vitamins&nbsp;that are normally found in foods and other natural sources .Multivitamins are used to provide&nbsp;vitamins&nbsp;that are not taken in through the diet. Multivitamins are also used to treat vitamin deficiencies (lack of&nbsp;vitamins) caused by illness, pregnancy, poor nutrition, digestive disorders, and many other conditions.
                    The Multi Vitamin oral spray is designed to give our bodies a unique formulation of vitamins many of us miss out on due to busy lifestyles, poor diets and the reduced nutrient quality in highly processed foods. Formulated to provide optimal nutritional delivery, each spray provides active ingredients in micro-sized droplets that coat and permeate the soft-tissue of the inner cheek, delivery the essential nutrients into the rich vein system.
                    Multivitamins are an ideal solution to help plug the nutritional gaps left by diet. This could be down to busy lifestyles, processed foods or restricted diets   vegetarian etc.
                    <br /><br />The combination essential nutrients works to support the body in a number of ways:<br /><br />
                    <b>Vitamin A – </b>Contributes to the maintenance of normal skin and vision
                    <br /><b>Vitamin D –</b> Is essential to support the immune system, normal bones and teeth and contributes to normal muscle function.
                    <br /><b>Vitamin C –</b> Contributes to the normal function of the immune system and nervous system. Helps fight tiredness and fatigue
                    <br /><b>Vitamin K –</b> Works in partnership with vitamin D for bone health but is also essential to support normal blood clotting.
                    <br /><b>Vitamin B complex –</b> Supports energy metabolism and reducing tiredness and fatigue<br />
                    <br /><b>The final ingredients are two essential minerals, Iodine and Selenium. Iodine is important for normal cognitive and neurological function, while Selenium supports the maintenance of normal hair and nails.
                    </b>
                </Typography>

                <Typography variant="h6" className="color-primary mt-4 text-uppercase">
                    Indications
                </Typography>

                <List>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecord className="color-primary icon-small" />
                        </ListItemIcon>
                        <ListItemText>
                            MultiVitamins Spray&nbsp;delivers a safe combination of multivitamins necessary for optimal overall function.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecord className="color-primary icon-small" />
                        </ListItemIcon>
                        <ListItemText>
                            Helps supplement dietary deficiencies, used to treat or prevent vitamin deficiency due to poor diet, certain illnesses or during&nbsp;pregnancy
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecord className="color-primary icon-small" />
                        </ListItemIcon>
                        <ListItemText>
                            Supports a healthy immune system
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecord className="color-primary icon-small" />
                        </ListItemIcon>
                        <ListItemText>
                            Vitamins&nbsp;are important building blocks of the body and help keep you in good health
                        </ListItemText>
                    </ListItem>
                </List>

                <br />
                <b>How IT WORKS?</b><br />
                As an oral spray MultiVitamin  bypasses processing by the digestive system and instead delivers the multi-nutrient formulation straight into the bloodstream via the rich vascular system within the mouth.
                <br /><br />
                <b>How TO USE IT?</b><br />
                Four sprays daily or as advised by your health care specialist.
                Spray under the tongue or on the inside of your cheek for optimal absorption.

                <Typography variant="h6" className="color-primary mt-4 text-uppercase">
                    Side Effects
                </Typography>

                <List>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecord className="color-primary icon-small" />
                        </ListItemIcon>
                        <ListItemText>
                            unusual or unpleasant taste in your mouth.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecord className="color-primary icon-small" />
                        </ListItemIcon>
                        <ListItemText>
                            Diarrhea, or&nbsp;upset stomach&nbsp;may occur.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FiberManualRecord className="color-primary icon-small" />
                        </ListItemIcon>
                        <ListItemText>
                            These effects are usually temporary and may disappear as your body adjusts to this&nbsp;
                        </ListItemText>
                    </ListItem>
                </List>

                <Toolbar />

                <Typography className="fst-italic fw-600">
                    Disclaimer: The data uploaded is made from content already available on internet. The company holds no right of it and is not responsible for any wrong information.
                </Typography>

                <Toolbar />

            </Container>

        </>
    )
}