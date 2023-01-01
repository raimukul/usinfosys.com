import { Card, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Button, ProgressBar } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Index() {
  return (
    <div>
      <Container>
        <Card className="p-3">
          <Typography variant="title2" className="mb-5">
            Please fill out the information below and one of our recruiters will
            contact you if there is a position we are working on that fits your
            skill set. If not, we will keep your resume in our database and
            reach out to you should an appropriate position open up in the
            future.
          </Typography>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Choose Your Resume</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <ProgressBar></ProgressBar>
              </Grid>
              <Grid item xs={4} className="m-auto">
                <Button>Upload Resume</Button>
              </Grid>
            </Grid>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
