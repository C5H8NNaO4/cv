import { useState } from 'react';
import './App.css';
import {
  Paper,
  Grid,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

function App() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Card>
            <CardHeader
              title="Moritz Roessler"
              subheader="Senior Fullstack Developer"
            />
          </Card>
          <Card>
            <CardHeader title="Skills" subheader="Frontend" />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card>
                  <CardHeader title="Languages" />
                  <List>
                    <ListItem>
                      <ListItemText primary="JavaScript" secondary="11 years" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="TypeScript" secondary="7 years" />
                    </ListItem>
                  </List>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <CardHeader title="Frontend" />
                  <List>
                    <ListItem>
                      <ListItemText primary="React" secondary="7 years" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="GraphQL" secondary="2 years" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Vue" secondary="7 years" />
                    </ListItem>
                  </List>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <CardHeader title="Backend" />
                  <List>
                    <ListItem>
                      <ListItemText primary="Node.js" secondary="7 years" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="PSQL" secondary="2 years" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="AWS Lambda" secondary="2 years" />
                    </ListItem>
                  </List>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader title="Education" />
            <List>
              <EducationEntry
                degree="FIAE"
                end="2012"
                school="Walther Rhathenau"
                start="2019"
              />
              <EducationEntry
                degree="Fachhochschulreife"
                end="2009"
                school="Kepler Gymnasium"
                start="2001"
              />
            </List>
          </Card>
          <Card>
            <CardHeader title="Work History" />
            <List>
              <EducationEntry
                degree="FIAE"
                end="2012"
                school="Walther Rhathenau"
                start="2019"
              />
              <WorkHistoryEntry
                company="Bechtle"
                position="Trainee"
                end="2012"
                start="2014"
              />
            </List>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export interface EducationEntry {
  school: string;
  degree: string;
  start: string;
  end: string;
}
export const EducationEntry = (props: EducationEntry) => {
  const { school, degree, start, end } = props;
  return (
    <ListItem>
      <ListItemText
        primary={`${start} - ${end}`}
        secondary={`${degree} at ${school}`}
      />
    </ListItem>
  );
};

export interface WorkHistoryEntry {
  company: string;
  position: string;
  start: string;
  end: string;
}
export const WorkHistoryEntry = (props: WorkHistoryEntry) => {
  const { company, position, start, end } = props;
  return (
    <ListItem>
      <ListItemText
        primary={`${start} - ${end}`}
        secondary={`${position} at ${company}`}
      />
    </ListItem>
  );
};
export default App;
