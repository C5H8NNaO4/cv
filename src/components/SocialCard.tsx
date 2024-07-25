import data from "@/data";
import { Box, Card, CardHeader, Grid, Link, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export const SocialCard = () => {
    return (
        <Card>
            <CardHeader title="Social"></CardHeader>
            <Grid container>
                {data.social.map((social) => {
                    return (
                        <Grid item xs={12} md={12}>
                            <ListItem dense>
                                <ListItemIcon sx={{ minWidth: '40px' }}>
                                    {social.Icon && <social.Icon />}
                                </ListItemIcon>
                                <ListItemText
                                    primary={<Link href={social.url}>{social.url}</Link>}
                                    secondary={
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <b>{social.title}</b>
                                            {social.secondary}
                                        </Box>
                                    }
                                ></ListItemText>
                            </ListItem>
                        </Grid>
                    );
                })}
            </Grid>
        </Card>
    );
};