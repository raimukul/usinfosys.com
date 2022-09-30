import React from "react";
import {
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Col, Image, Row } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  const [country, setCountry] = React.useState("");
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div>
      <Box>
        <Image className="w-100" src="./banner/contact.svg"></Image>
      </Box>
      <Container>
        <Card className="p-4">
          <Grid container spacing={2} className="p-2">
            <Grid xs={12} md={8} className="p-4">
              <Typography variant="subtitle1" pb={3}>
                Thank you for your interest in American Info Systems Inc..
                Please look for the category that best fits your needs:
              </Typography>
              <Row>
                <Col md="6" className="pt-2">
                  <TextField className="w-100" label="Name" required />
                </Col>
                <Col md="6" className="pt-2">
                  <TextField className="w-100" label="Email" required />
                </Col>
              </Row>
              <Row className="pt-2">
                <Col md="6" className="pt-2">
                  <TextField
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 10);
                    }}
                    className="w-100"
                    label="Phone"
                    type="number"
                    required
                  />
                </Col>
                <Col md="6" className="pt-2">
                  <FormControl className="w-100" required>
                    <InputLabel id="demo-simple-select-helper-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={country}
                      label="Country"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>USA</MenuItem>
                      <MenuItem value={2}>India</MenuItem>
                    </Select>
                    <FormHelperText>
                      Please choose service country.
                    </FormHelperText>
                  </FormControl>
                </Col>
              </Row>
              <Row>
                <Col className="pt-3">
                  <TextField
                    id="outlined-textarea"
                    label="Subject"
                    placeholder="Please give heading for your querry."
                    multiline
                    required
                    className="w-100"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="pt-3">
                  <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    placeholder="Please elaborate your querry to understand your querry."
                    multiline
                    rows={4}
                    required
                    className="w-100"
                  />
                </Col>
              </Row>
              <div className="pt-3">
                <Button
                  variant="contained"
                  className="text-left"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </div>
            </Grid>
            <Grid xs={12} md={4}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.689916634392!2d-94.67281728471384!3d38.93106437956555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ea4bfe400001%3A0x12b6a2fe3cf1f6f5!2s7300%20W%20110th%20St%20%23700%2C%20Overland%20Park%2C%20KS%2066210%2C%20USA!5e0!3m2!1sen!2sin!4v1664558614499!5m2!1sen!2sin"
                className="w-100 h-100"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                title="American Info Systems Inc."
              ></iframe>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}
